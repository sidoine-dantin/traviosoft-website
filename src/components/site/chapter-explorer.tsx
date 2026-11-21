'use client';

import { Children, useEffect, useId, useState, type ReactNode } from 'react';

type Props = { titles: string[]; label: string; children: ReactNode };

/**
 * The topics of a product page, one after the other. Beside them, one large title follows the
 * scroll: it shows the topic being read and slides to the next one as the visitor moves on.
 * Small dots above it say where the visitor is and take them to a topic. On phones the titles
 * stay in the topics themselves.
 */
export function ChapterExplorer({ titles, label, children }: Props) {
  const [on, setOn] = useState(0);
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
    window.addEventListener('scroll', pick, { passive: true });
    window.addEventListener('resize', pick);
    return () => { window.removeEventListener('scroll', pick); window.removeEventListener('resize', pick); };
  }, [id, titles]);

  return (
    <section className="band explorer">
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
              <span key={i} className="explorer-title h2" data-pos={i < on ? 'past' : i > on ? 'next' : 'now'}>{t}</span>
            ))}
          </div>
        </div>
        <div className="explorer-topics">
          {topics.map((t, i) => (
            <div key={i} id={`${id}-p${i}`} className="explorer-topic">{t}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
