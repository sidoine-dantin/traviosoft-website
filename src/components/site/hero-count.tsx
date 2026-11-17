'use client';

import { useEffect, useRef } from 'react';

/**
 * The hero's total due. The server renders the final amount, so it is right without JavaScript.
 * When motion is allowed, it counts up from zero once, while the proposal's days come in.
 */
export function HeroCount({ value, locale, currency }: { value: number; locale: string; currency: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const fmt = new Intl.NumberFormat(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const final = el.textContent;
    const mounted = performance.now();
    const dur = 900;
    let delay = 0;
    let raf = 0;
    let t0 = 0;
    const step = (now: number) => {
      if (!t0) t0 = now;
      const t = Math.min(1, Math.max(0, (now - t0 - delay) / dur));
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = t < 1 ? `${fmt.format(Math.round(value * eased))} ${currency}` : final;
      if (t < 1) raf = requestAnimationFrame(step);
    };
    // Count only once the total is on screen; on a short window it sits below the fold.
    // Until then it shows zero, so the count is not missed.
    el.textContent = `${fmt.format(0)} ${currency}`;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      // on first view, wait for the days to come in; when scrolled to later, start almost at once
      delay = Math.max(150, 650 - (performance.now() - mounted));
      raf = requestAnimationFrame(step);
    }, { threshold: 1 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); el.textContent = final; };
  }, [value, locale, currency]);
  return <strong ref={ref}>{`${new Intl.NumberFormat(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value)} ${currency}`}</strong>;
}
