'use client';

import { useId, useState } from 'react';
import type { Feature } from '@/content/types';

/** Feature titles as a short list; the chosen one shows its text. Every text stays in the page for search engines. */
export function FeatureTabs({ items }: { items: Feature[] }) {
  const [on, setOn] = useState(0);
  const id = useId();
  return (
    <div className="ftabs">
      <div className="ftabs-list" role="tablist" aria-orientation="vertical">
        {items.map((f, i) => (
          <button
            key={f.title}
            type="button"
            role="tab"
            id={`${id}-t${i}`}
            aria-selected={on === i}
            aria-controls={`${id}-p${i}`}
            tabIndex={on === i ? 0 : -1}
            onClick={() => setOn(i)}
            onKeyDown={e => {
              const d = e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0;
              if (!d) return;
              e.preventDefault();
              const n = (on + d + items.length) % items.length;
              setOn(n);
              document.getElementById(`${id}-t${n}`)?.focus();
            }}
          >
            {f.title}
          </button>
        ))}
      </div>
      {items.map((f, i) => (
        <div key={f.title} className="ftabs-panel" role="tabpanel" id={`${id}-p${i}`} aria-labelledby={`${id}-t${i}`} hidden={on !== i}>
          {f.body.map((p, k) => <p key={k}>{p}</p>)}
        </div>
      ))}
    </div>
  );
}
