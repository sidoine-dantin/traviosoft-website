'use client';

import { Children, useCallback, useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type Props = { titles: string[]; leads: string[]; label: string; children: ReactNode };

const PINNED = '(min-width: 901px)';
const HEADER = 68;
const DOT_STEP = 30; // the dots' spacing (.explorer-dots a height)
const DOT_Y = 15; // the centre of a dot in its row // the sticky header; the stage holds still just under it

/**
 * The pinned layout's measures, from the track's position. The stage holds still over `len` pixels
 * of scroll. The first and last `ease` pixels of that are the way in and out: there the stage moves
 * with the scroll, slowly at first and then faster (and the other way on the way in), instead of
 * stopping or setting off at full speed. The topics share what is left in between.
 */
function measure(t: HTMLElement) {
  const r = t.getBoundingClientRect();
  const ease = -2 * (parseFloat(getComputedStyle(t).marginTop) || 0); // the track overlaps its neighbours by half of it
  const len = r.height - (window.innerHeight - HEADER);
  return { r, ease, len, into: HEADER - r.top, step: len - 2 * ease };
}

/**
 * The topics of a product page.
 *
 * On computers and tablets the section holds still: the large title with its lead, the points and
 * the video stay in place, and scrolling swaps them for the next topic. The page keeps its normal
 * scroll (nothing is hijacked): the section is simply as tall as its topics, and the part of it
 * that is on screen decides which topic shows. A vertical row of dots beside the title says where
 * the visitor is and takes them to a topic; the current dot is a drop that is pulled towards the next
 * one as the visitor scrolls, and lands on it when the topic changes.
 *
 * On phones the topics follow one another down the page, each with its own title, and the topic
 * crossing the middle of the screen is the one being read.
 *
 * Either way exactly one topic is "on" (data-on), and only its video plays.
 */
export function ChapterExplorer({ titles, leads, label, children }: Props) {
  const [on, setOn] = useState(0);
  const [live, setLive] = useState(false); // topics stack and fade only once the script runs, so they all show without it
  const id = useId().replace(/:/g, '');
  const track = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const drop = useRef<SVGGElement>(null);

  /** Draws the drop: on topic i, pulled down by p (0 to 1) towards the next dot. */
  const pull = useCallback((i: number, p: number, last: boolean) => {
    const g = drop.current;
    if (!g) return;
    const e = p * p; // starts gently, pulls harder towards the end
    const [main, neck, tail] = Array.from(g.querySelectorAll('circle'));
    const ty = DOT_Y + (last ? 9 : 26) * e;
    g.style.transform = `translateY(${i * DOT_STEP}px)`;
    main.setAttribute('cy', (DOT_Y + 2 * e).toFixed(2));
    main.setAttribute('r', (7 - 0.8 * e).toFixed(2));
    tail.setAttribute('cy', ty.toFixed(2));
    tail.setAttribute('r', (5 - e).toFixed(2));
    neck.setAttribute('cy', ((DOT_Y + ty) / 2 + 1).toFixed(2));
    neck.setAttribute('r', (5 - 2.4 * e).toFixed(2));
  }, []);
  const topics = Children.toArray(children);
  const n = titles.length;

  /** Where the page must scroll to so that topic i is the one on screen (pinned layout). */
  const spot = useCallback((i: number) => {
    const m = measure(track.current!);
    const step = m.step / n;
    return Math.round(window.scrollY - m.into + m.ease + step * (i + 0.15));
  }, [n]);

  const goTo = useCallback((i: number, smooth: boolean) => {
    const pinned = window.matchMedia(PINNED).matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const y = pinned ? spot(i) : (document.getElementById(`${id}-p${i}`)!.getBoundingClientRect().top + window.scrollY - 140);
    window.scrollTo({ top: y, behavior: smooth && !reduce ? 'smooth' : 'auto' });
  }, [id, spot]);

  useEffect(() => {
    const t = track.current;
    if (!t) return;
    const els = titles.map((_, i) => document.getElementById(`${id}-p${i}`)).filter(Boolean) as HTMLElement[];
    const pick = () => {
      const vh = window.innerHeight;
      const r = t.getBoundingClientRect();
      if (r.bottom <= 0 || r.top >= vh) { setOn(-1); return; } // section off screen: nothing plays
      if (window.matchMedia(PINNED).matches) {
        const m = measure(t);
        const step = m.step / n;
        const at = Math.min(n - 0.0001, Math.max(0, (m.into - m.ease) / step));
        // The way in and out: the stage's offset follows an ease, so it gathers or loses speed gradually.
        if (m.ease > 0) {
          const qIn = Math.min(1, Math.max(0, m.into / m.ease));
          const qOut = Math.min(1, Math.max(0, (m.into - (m.len - m.ease)) / m.ease));
          const y = ((1 - qIn) ** 2 - qOut ** 2) * m.ease / 2;
          stage.current!.style.transform = `translateY(${y.toFixed(1)}px)`;
        }
        const i = Math.floor(at);
        // How far the visitor is through this topic (0 to 1): the current dot is pulled down towards
        // the next one like a drop, so every bit of scroll shows, not only the change of topic.
        pull(i, at - i, i === n - 1);
        setOn(i);
      } else {
        // phones: the topic that crosses a line halfway down the screen is the one being read
        let cur = -1;
        els.forEach((el, i) => { if (el.getBoundingClientRect().top <= vh / 2) cur = i; });
        setOn(cur);
        stage.current!.style.transform = '';
      }
    };
    // A link to one topic (from the home page, #quotes) lands on that topic.
    const fromHash = () => {
      const target = location.hash.length > 1 ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
      const i = target ? els.findIndex(el => el.contains(target)) : -1;
      if (i >= 0) goTo(i, false);
    };
    pick();
    // Once live, the section takes its final height (with the way in and out); land on the topic after that.
    let raf2 = 0;
    const raf = requestAnimationFrame(() => { setLive(true); raf2 = requestAnimationFrame(() => { fromHash(); pick(); }); });
    window.addEventListener('scroll', pick, { passive: true });
    window.addEventListener('resize', pick);
    window.addEventListener('hashchange', fromHash);
    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(raf2);
      window.removeEventListener('scroll', pick);
      window.removeEventListener('resize', pick);
      window.removeEventListener('hashchange', fromHash);
    };
  }, [id, titles, n, goTo]);

  const shown = Math.max(on, 0);

  return (
    <section className="band explorer" data-live={live || undefined} style={{ '--n': n } as CSSProperties}>
      <div className="explorer-track" ref={track}>
        <div className="wrap explorer-grid" ref={stage}>
          <div className="explorer-side">
            <nav className="explorer-dots" aria-label={label}>
              <svg className="explorer-drop" width="32" height={n * DOT_STEP} viewBox={`0 0 32 ${n * DOT_STEP}`} aria-hidden="true">
                <defs>
                  <filter id={`${id}-goo`} x="-50%" y="-20%" width="200%" height="140%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.6" />
                    <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9" />
                  </filter>
                </defs>
                <g ref={drop} className="explorer-drop-move" style={{ transform: `translateY(${shown * DOT_STEP}px)` }}>
                  <g filter={`url(#${id}-goo)`}>
                    <circle cx="16" cy={DOT_Y} r="7" />
                    <circle cx="16" cy={DOT_Y} r="5" />
                    <circle cx="16" cy={DOT_Y} r="5" />
                  </g>
                </g>
              </svg>
              <ol>
                {titles.map((t, i) => (
                  <li key={i}>
                    <a href={`#${id}-p${i}`} aria-current={shown === i ? 'true' : undefined} onClick={e => { e.preventDefault(); goTo(i, true); }}>
                      <span className="sr-only">{t}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="explorer-titles" aria-hidden="true">
              {titles.map((t, i) => (
                <div key={i} className="explorer-now" data-pos={i < shown ? 'past' : i > shown ? 'next' : 'now'}>
                  <span className="explorer-title h2">{t}</span>
                  {leads[i] && <p className="explorer-lead lead muted">{leads[i]}</p>}
                </div>
              ))}
            </div>
          </div>
          <div className="explorer-topics">
            {topics.map((t, i) => (
              <div
                key={i}
                id={`${id}-p${i}`}
                className="explorer-topic"
                data-on={on === i || undefined}
                data-shown={shown === i || undefined}
                // Moving through the page with the keyboard brings the focused topic on screen.
                onFocus={() => { if (shown !== i && window.matchMedia(PINNED).matches) goTo(i, false); }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
