'use client';

import { Children, useCallback, useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type Props = { titles: string[]; leads: string[]; label: string; children: ReactNode };

const PINNED = '(min-width: 901px)';

/**
 * The topics of a product page.
 *
 * On computers and tablets the section holds still: the large title with its lead, the points and
 * the video stay in place, and scrolling swaps them for the next topic. The page keeps its normal
 * scroll (nothing is hijacked): the section is simply as tall as its topics, and the part of it
 * that is on screen decides which topic shows. A vertical row of dots beside the title says where
 * the visitor is and takes them to a topic.
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
  const topics = Children.toArray(children);
  const n = titles.length;

  /** Where the page must scroll to so that topic i is the one on screen (pinned layout). */
  const spot = useCallback((i: number) => {
    const t = track.current!;
    const top = t.getBoundingClientRect().top + window.scrollY;
    const step = (t.offsetHeight - window.innerHeight) / n;
    return Math.round(top + step * (i + 0.15));
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
        const step = (r.height - vh) / n;
        setOn(Math.min(n - 1, Math.max(0, Math.floor(-r.top / step))));
      } else {
        // phones: the topic that crosses a line halfway down the screen is the one being read
        let cur = -1;
        els.forEach((el, i) => { if (el.getBoundingClientRect().top <= vh / 2) cur = i; });
        setOn(cur);
      }
    };
    // A link to one topic (from the home page, #quotes) lands on that topic.
    const fromHash = () => {
      const target = location.hash.length > 1 ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
      const i = target ? els.findIndex(el => el.contains(target)) : -1;
      if (i >= 0) goTo(i, false);
    };
    fromHash();
    pick();
    const raf = requestAnimationFrame(() => setLive(true));
    window.addEventListener('scroll', pick, { passive: true });
    window.addEventListener('resize', pick);
    window.addEventListener('hashchange', fromHash);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', pick);
      window.removeEventListener('resize', pick);
      window.removeEventListener('hashchange', fromHash);
    };
  }, [id, titles, n, goTo]);

  const shown = Math.max(on, 0);

  return (
    <section className="band explorer" data-live={live || undefined} style={{ '--n': n } as CSSProperties}>
      <div className="explorer-track" ref={track}>
        <div className="wrap explorer-grid">
          <div className="explorer-side">
            <nav className="explorer-dots" aria-label={label}>
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
