'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import type { CompareSection, Plan } from '@/content/types';
import { ComparePlans } from './compare-plans';

type Labels = { yearly: string; monthly: string; yearlyNote: string };

/** The yearly / monthly switch. */
export function BillingToggle({ yearly, set, labels }: { yearly: boolean; set: (y: boolean) => void; labels: Labels }) {
  return (
    <div className="toggle" role="group">
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

const clamp = (n: number) => Math.min(1, Math.max(0, n));

/**
 * One yearly / monthly switch and one pair of plan cards, then the plan comparison (yearly by default).
 *
 * The switch and the cards are the comparison's pinned header row. At the top of the page they show
 * at full size; as the visitor scrolls, they shrink into the row above the table's columns (the
 * name and the price stay, the rest fades), so there is one switch and one Classic / Premium pair,
 * always in reach. The shrink follows the scroll (`--p`, 0 = full cards, 1 = header row), so it has
 * no duration of its own. The space the cards give up is kept as a margin under them, so nothing
 * below jumps: the table rises with the page and the row's lower edge rises with it.
 *
 * Reduced motion: no shrink, the row swaps between the two states with a short fade.
 */
export function Plans({ plans, labels, compare }: Props) {
  const [yearly, setYearly] = useState(true);
  const root = useRef<HTMLDivElement>(null);
  const head = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = root.current;
    const row = head.current;
    if (!box || !row) return;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)');
    let full = 0;
    let compact = 0;
    let frame = 0;
    let shown = -1;
    let settleUntil = 0;

    const apply = (p: number) => {
      row.style.setProperty('--p', String(p));
      row.style.marginBottom = `${Math.max(0, full - row.offsetHeight)}px`;
    };

    const measure = () => {
      row.style.marginBottom = '0px';
      row.style.setProperty('--p', '0');
      full = row.offsetHeight;
      row.style.setProperty('--p', '1');
      compact = row.offsetHeight;
      shown = -1;
    };

    const paint = () => {
      frame = 0;
      const pinAt = parseFloat(getComputedStyle(row).top) || 0;
      const travelled = pinAt - box.getBoundingClientRect().top;
      const range = Math.max(1, full - compact);
      let p = clamp(travelled / range);
      if (still.matches) p = travelled > range / 2 ? 1 : 0;
      if (p !== shown) {
        if (still.matches && shown !== -1) {
          row.classList.remove('pl-fade');
          void row.offsetWidth;
          row.classList.add('pl-fade');
        }
        shown = p;
        apply(p);
      }
      // the site bar slides away on phones and the row's pin point follows it (250 ms): keep painting
      if (performance.now() < settleUntil) frame = requestAnimationFrame(paint);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    const remeasure = () => { measure(); paint(); };

    remeasure();
    window.addEventListener('scroll', schedule, { passive: true });
    // only a new width changes the two heights (the header row's own changes keep the block's height)
    let width = box.offsetWidth;
    const sized = new ResizeObserver(() => {
      if (box.offsetWidth === width) return;
      width = box.offsetWidth;
      cancelAnimationFrame(frame); frame = 0; remeasure();
    });
    sized.observe(box);
    const bar = new MutationObserver(() => { settleUntil = performance.now() + 320; schedule(); });
    bar.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bar'] });
    still.addEventListener('change', remeasure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      sized.disconnect();
      bar.disconnect();
      still.removeEventListener('change', remeasure);
    };
  }, []);

  return (
    <div className="cmp" ref={root}>
      <div className="pl-head" ref={head} style={{ '--p': 0 } as CSSProperties}>
        <div className="pl-ctl">
          <BillingToggle yearly={yearly} set={setYearly} labels={labels} />
          <p className="pl-note">{labels.yearlyNote}</p>
        </div>
        <div className="pl-room" aria-hidden="true" />
        {plans.map(p => (
          <article key={p.id} className={`pl-card${p.hot ? ' hot' : ''}`}>
            <h2 className="pl-name">{p.name}</h2>
            <p className="pl-fold pl-users">{p.users}</p>
            <p className="pl-price num" aria-live="polite">{yearly ? p.yearly : p.monthly}<small>EUR</small></p>
            <p className="pl-fold pl-extra">{yearly ? p.priceNote.yearly : p.priceNote.monthly}</p>
          </article>
        ))}
      </div>
      <ComparePlans
        sections={compare.sections}
        names={[plans[0].name, plans[1].name]}
        labels={compare.labels}
        note={compare.note}
        yearly={yearly}
      />
    </div>
  );
}
