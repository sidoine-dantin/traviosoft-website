'use client';

import { useState } from 'react';
import type { Plan } from '@/content/types';

type Props = {
  plans: Plan[];
  labels: { yearly: string; monthly: string; yearlyNote: string };
};

/** Plan cards with a yearly / monthly switch. Yearly is the default. */
export function Plans({ plans, labels }: Props) {
  const [yearly, setYearly] = useState(true);
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', marginBottom: 32 }}>
        <div className="toggle" role="group">
          <button type="button" aria-pressed={yearly} onClick={() => setYearly(true)}>{labels.yearly}</button>
          <button type="button" aria-pressed={!yearly} onClick={() => setYearly(false)}>{labels.monthly}</button>
        </div>
        <p className="muted" style={{ fontSize: 15 }}>{labels.yearlyNote}</p>
      </div>
      <div className="plans">
        {plans.map(p => (
          <article key={p.id} className={`plan${p.hot ? ' hot' : ''}`}>
            <div>
              <h2 className="h3">{p.name}</h2>
              <p style={{ opacity: 0.8, marginTop: 4 }}>{p.users}</p>
            </div>
            <p className="price num" aria-live="polite">{yearly ? p.yearly : p.monthly}<small>EUR</small></p>
            <p style={{ fontSize: 14, opacity: 0.8 }}>{yearly ? p.priceNote.yearly : p.priceNote.monthly}</p>
            <p className="plan-sum">{p.summary}</p>
          </article>
        ))}
      </div>
    </>
  );
}
