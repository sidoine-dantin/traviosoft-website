'use client';

import { Children, useEffect, useId, useState, type ReactNode } from 'react';

type Props = { titles: string[]; leads: string[]; label: string; children: ReactNode };

/**
 * The topics of a product page, one after the other. Beside them, one large title follows the
 * scroll: it shows the topic being read and slides to the next one as the visitor moves on.
 * Small dots above it say where the visitor is and take them to a topic. On phones the titles
 * stay in the topics themselves. The topic's lead sentence sits under the title and changes with it,
 * so each topic opens with its title and what it brings, and the points beside it go into detail.
 * On larger screens each topic fills the screen and only the topic being read is shown: the others
 * fade out, so one topic and one video are on screen at a time.
 */
export function ChapterExplorer({ titles, leads, label, children }: Props) {
  const [on, setOn] = useState(0);
  const [live, setLive] = useState(false); // topics fade only once the script runs, so they all show without it
  const id = useId().replace(/:/g, '');
  const topics = Children.toArray(children);

  useEffect(() => {
    const els = titles.map((_, i) => document.getElementById(`${id}-p${i}`)).filter(Boolean) as HTMLElement[];
    // The topic that crosses a line halfway down the screen is the one being read.
    const pick = () => {
      const line = window.innerHeight / 2;
      let cur = 0;
      els.forEach((el, i) => { if (el.getBoundingClientRect().top <= line) cur = i; });
      setOn(cur);
    };
    pick();
    const raf = requestAnimationFrame(() => setLive(true));
    window.addEventListener('scroll', pick, { passive: true });
    window.addEventListener('resize', pick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', pick); window.removeEventListener('resize', pick); };
  }, [id, titles]);

  return (
    <section className="band explorer" data-live={live || undefined}>
      <div className="wrap explorer-grid">
        <div className="explorer-side">
          <div className="explorer-where">
            <nav className="explorer-dots" aria-label={label}>
              <ol>
                {titles.map((t, i) => (
                  <li key={i}>
                    <a href={`#${id}-p${i}`} aria-current={on === i ? 'true' : undefined}><span className="sr-only">{t}</span></a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          <div className="explorer-titles" aria-hidden="true">
            {titles.map((t, i) => (
              <div key={i} className="explorer-now" data-pos={i < on ? 'past' : i > on ? 'next' : 'now'}>
                <span className="explorer-title h2">{t}</span>
                {leads[i] && <p className="explorer-lead lead muted">{leads[i]}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="explorer-topics">
          {topics.map((t, i) => (
            <div key={i} id={`${id}-p${i}`} className="explorer-topic" data-on={on === i || undefined}>{t}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
