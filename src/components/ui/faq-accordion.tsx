'use client';

import { useState } from 'react';

type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ maxWidth: '48rem' }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderTop: '1px solid var(--color-border)' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            style={{
              width: '100%', display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', gap: '1rem',
              padding: '1.375rem 0',
              background: 'none', border: 'none', cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            <span style={{
              fontSize: '1rem', fontWeight: 600,
              color: 'var(--color-ink)', lineHeight: 1.4
            }}>
              {item.question}
            </span>
            <span style={{
              flexShrink: 0, color: 'var(--color-primary)',
              transform: open === i ? 'rotate(45deg)' : 'none',
              transition: 'transform 0.2s ease-out',
              fontSize: '1.375rem', lineHeight: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              +
            </span>
          </button>
          {open === i && (
            <div style={{ paddingBottom: '1.5rem' }}>
              <p style={{
                fontSize: '0.9375rem', color: 'var(--color-muted)',
                lineHeight: 1.75, margin: 0
              }}>
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
      <div style={{ borderTop: '1px solid var(--color-border)' }} />
    </div>
  );
}
