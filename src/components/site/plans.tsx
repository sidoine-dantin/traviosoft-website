'use client';

import { useState } from 'react';
import type { CompareSection, Plan } from '@/content/types';
import { ComparePlans } from './compare-plans';

type Labels = { yearly: string; monthly: string; yearlyNote: string };

/** The yearly / monthly switch. */
export function BillingToggle({ yearly, set, labels, compact }: { yearly: boolean; set: (y: boolean) => void; labels: Labels; compact?: boolean }) {
  return (
    <div className={`toggle${compact ? ' small' : ''}`} role="group">
      <button type="button" aria-pressed={yearly} onClick={() => set(true)}>{labels.yearly}</button>
      <button type="button" aria-pressed={!yearly} onClick={() => set(false)}>{labels.monthly}</button>
    </div>
  );
}

type Props = {
  plans: Plan[];
  labels: Labels;
  compare: { sections: CompareSection[]; labels: { feature: string; yes: string; no: string }; note: string[] };
};

/**
 * Plan cards, then the plan comparison, under one yearly / monthly switch (yearly by default). The
 * switch also sits in the comparison's pinned header row, so it stays in reach while the table
 * scrolls, and the setup and import rows show what the chosen billing really costs.
 */
export function Plans({ plans, labels, compare }: Props) {
  const [yearly, setYearly] = useState(true);
  return (
    <>
      <div className="plans">
        <div className="plans-ctl">
          <BillingToggle yearly={yearly} set={setYearly} labels={labels} />
          <p className="muted" style={{ fontSize: 15 }}>{labels.yearlyNote}</p>
        </div>
        {plans.map(p => (
          <article key={p.id} className={`plan${p.hot ? ' hot' : ''}`}>
            <div>
              <h2 className="h3">{p.name}</h2>
              <p style={{ opacity: 0.8, marginTop: 4 }}>{p.users}</p>
            </div>
            <p className="price num" aria-live="polite">{yearly ? p.yearly : p.monthly}<small>EUR</small></p>
            <p style={{ fontSize: 14, opacity: 0.8 }}>{yearly ? p.priceNote.yearly : p.priceNote.monthly}</p>
          </article>
        ))}
      </div>
      <div className="cmp-wrap">
        <ComparePlans
          sections={compare.sections}
          names={[plans[0].name, plans[1].name]}
          labels={compare.labels}
          note={compare.note}
          yearly={yearly}
          toggle={<BillingToggle yearly={yearly} set={setYearly} labels={labels} compact />}
        />
      </div>
    </>
  );
}
