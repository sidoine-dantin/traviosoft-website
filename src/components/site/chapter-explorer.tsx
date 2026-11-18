'use client';

import { Children, useState, type ReactNode } from 'react';

/** All topics of a product page in one place: the topic names are tabs, one topic shows at a time. */
export function ChapterExplorer({ labels, children }: { labels: string[]; children: ReactNode }) {
  const [on, setOn] = useState(0);
  const panels = Children.toArray(children);
  return (
    <section className="band chapter-band explorer">
      <div className="wrap">
        <div className="explorer-tabs" role="tablist">
          {labels.map((l, i) => (
            <button key={l} type="button" role="tab" aria-selected={on === i} onClick={() => setOn(i)}>{l}</button>
          ))}
        </div>
      </div>
      {panels.map((p, i) => <div key={i} hidden={on !== i}>{p}</div>)}
    </section>
  );
}
