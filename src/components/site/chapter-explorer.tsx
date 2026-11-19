'use client';

import { Children, useEffect, useId, useRef, useState, type ReactNode } from 'react';

type Props = { labels: string[]; label: string; children: ReactNode };

/**
 * The topics of a product page, one after the other. The topic names stay in a list on the side
 * (a row on top on phones); the one being read is marked as the visitor scrolls, and a name takes
 * the visitor to its topic.
 */
export function ChapterExplorer({ labels, label, children }: Props) {
  const [on, setOn] = useState(0);
  const id = useId().replace(/:/g, '');
  const nav = useRef<HTMLElement>(null);
  const topics = Children.toArray(children);

  useEffect(() => {
    const els = labels.map((_, i) => document.getElementById(`${id}-p${i}`)).filter(Boolean) as HTMLElement[];
    // The topic that crosses a line a third of the way down the screen is the one being read.
    const pick = () => {
      const line = window.innerHeight / 3;
      let cur = 0;
      els.forEach((el, i) => { if (el.getBoundingClientRect().top <= line) cur = i; });
      setOn(cur);
    };
    pick();
    window.addEventListener('scroll', pick, { passive: true });
    window.addEventListener('resize', pick);
    return () => { window.removeEventListener('scroll', pick); window.removeEventListener('resize', pick); };
  }, [id, labels]);

  // On phones the names are a row that scrolls sideways: keep the current one in view.
  useEffect(() => {
    const row = nav.current?.querySelector('ol');
    const link = row?.children[on] as HTMLElement | undefined;
    if (!row || !link || row.scrollWidth <= row.clientWidth) return;
    row.scrollTo({ left: link.offsetLeft - 16, behavior: 'smooth' });
  }, [on]);

  return (
    <section className="band explorer">
      <div className="wrap explorer-grid">
        <nav className="explorer-nav" aria-label={label} ref={nav}>
          <ol>
            {labels.map((l, i) => (
              <li key={l}>
                <a href={`#${id}-p${i}`} aria-current={on === i ? 'true' : undefined}>
                  <span className="explorer-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <span>{l}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="explorer-topics">
          {topics.map((t, i) => (
            <div key={i} id={`${id}-p${i}`} className="explorer-topic">{t}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
