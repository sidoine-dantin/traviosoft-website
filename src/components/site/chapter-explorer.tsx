'use client';

import { Children, useId, useRef, useState, type ReactNode } from 'react';

type Props = { labels: string[]; label: string; next: string; variant?: 'line' | 'side'; children: ReactNode };

/** The topics of a product page in one block: the topic names are tabs, one topic shows at a time. */
export function ChapterExplorer({ labels, label, next, variant = 'line', children }: Props) {
  const [on, setOn] = useState(0);
  const id = useId();
  const top = useRef<HTMLDivElement>(null);
  const panels = Children.toArray(children);
  const go = (i: number, scroll = false) => {
    setOn(i);
    document.getElementById(`${id}-t${i}`)?.focus({ preventScroll: true });
    if (scroll) top.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <section className={`band explorer explorer-${variant}`}>
      <div className="wrap explorer-grid" ref={top}>
        <div className="explorer-tabs" role="tablist" aria-label={label} aria-orientation={variant === 'side' ? 'vertical' : 'horizontal'}>
          {labels.map((l, i) => (
            <button
              key={l}
              type="button"
              role="tab"
              id={`${id}-t${i}`}
              aria-selected={on === i}
              aria-controls={`${id}-p${i}`}
              tabIndex={on === i ? 0 : -1}
              onClick={() => go(i)}
              onKeyDown={e => {
                const back = e.key === 'ArrowLeft' || e.key === 'ArrowUp';
                const fwd = e.key === 'ArrowRight' || e.key === 'ArrowDown';
                if (!back && !fwd) return;
                e.preventDefault();
                go((on + (fwd ? 1 : -1) + labels.length) % labels.length);
              }}
            >
              <span className="explorer-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <span>{l}</span>
            </button>
          ))}
        </div>
        <div className="explorer-panels">
          {panels.map((p, i) => (
            <div key={i} role="tabpanel" id={`${id}-p${i}`} aria-labelledby={`${id}-t${i}`} hidden={on !== i}>
              {p}
              {i < labels.length - 1 && (
                <button type="button" className="explorer-next" onClick={() => go(i + 1, true)}>
                  {next}: {labels[i + 1]} <span aria-hidden="true">→</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
