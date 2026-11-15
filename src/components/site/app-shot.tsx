'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Shows an app screen the way a screenshot shows it: the screen is laid out at the app's own
 * width (1120px to 1280px, or 460px on a phone, where the app hides its sidebar like it does on a phone)
 * and scaled down to the space it has, so its text and spacing keep the app's proportions.
 */
const WIDE = 1120;
const NARROW = 460;

export function AppShot({ label, children }: { label: string; children: React.ReactNode }) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<{ s: number; w: number; h: number } | null>(null);

  useEffect(() => {
    const o = outer.current, i = inner.current;
    if (!o || !i) return;
    const fit = () => {
      const avail = o.clientWidth;
      const w = avail < 700 ? NARROW : Math.max(WIDE, Math.min(avail, 1280));
      i.style.width = `${w}px`; // measure at the new width before React re-renders with it
      i.dataset.narrow = w === NARROW ? 'true' : 'false';
      const s = Math.min(1, avail / w);
      setBox({ s, w, h: i.offsetHeight * s });
    };
    const ro = new ResizeObserver(fit);
    ro.observe(o); ro.observe(i);
    fit();
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={outer} className="appshot" role="img" aria-label={label} style={box ? { height: box.h } : undefined}>
      <div ref={inner} className="appui" data-narrow={box && box.w === NARROW ? 'true' : 'false'} style={{ width: box ? box.w : WIDE, transform: box ? `scale(${box.s})` : undefined, visibility: box ? 'visible' : 'hidden' }} aria-hidden="true">
        {children}
      </div>
    </div>
  );
}
