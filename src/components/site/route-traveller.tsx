'use client';

import { useEffect, useRef } from 'react';

/**
 * Moves a stop of the dotted route along its line as the page scrolls. Scrolling back the other way
 * brings it back along the same line.
 *
 * `anchor="top"` (the home hero): at the top of the page the stop rests where it is drawn, and it
 * reaches the end of the line as the top of the scene, where the line runs, passes under the header.
 * `anchor="bottom"` (the footer): the stop sets off from the start of the line as the scene comes
 * into view and arrives where it is drawn at the bottom of the page.
 *
 * Looks in the element this sits in for a `<path data-route>` and a `<circle data-route-dot>`.
 * Desktop only (from 861 px, where the route is shown) and off when the system asks for reduced
 * motion: the stop then stays where it is drawn.
 */
export function RouteTraveller({ anchor }: { anchor: 'top' | 'bottom' }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const scene = ref.current?.parentElement;
    const path = scene?.querySelector<SVGPathElement>('path[data-route]');
    const dot = scene?.querySelector<SVGCircleElement>('circle[data-route-dot]');
    if (!scene || !path || !dot) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const desktop = window.matchMedia('(min-width: 861px)');
    const rest = { x: dot.cx.baseVal.value, y: dot.cy.baseVal.value };
    const total = path.getTotalLength();

    // Where on the line the stop is drawn: the closest point, found in two passes.
    let start = 0;
    let best = Infinity;
    const near = (from: number, to: number, step: number) => {
      for (let l = from; l <= to; l += step) {
        const p = path.getPointAtLength(l);
        const d = (p.x - rest.x) ** 2 + (p.y - rest.y) ** 2;
        if (d < best) { best = d; start = l; }
      }
    };
    near(0, total, 8);
    near(Math.max(0, start - 8), Math.min(total, start + 8), 0.5);

    let frame = 0;
    const place = (x: number, y: number) => {
      dot.setAttribute('cx', x.toFixed(1));
      dot.setAttribute('cy', y.toFixed(1));
    };
    const paint = () => {
      frame = 0;
      if (!desktop.matches) { place(rest.x, rest.y); return; }
      const box = scene.getBoundingClientRect();
      let at: number;
      if (anchor === 'top') {
        // The distance to scroll until the top of the scene, where the line runs, has left the window.
        const span = box.top + window.scrollY + box.height * 0.15;
        const done = span > 0 ? Math.min(1, Math.max(0, window.scrollY / span)) : 0;
        at = start + (total - start) * done;
      } else {
        // What is left to scroll, against the height of the scene: 0 at the bottom of the page.
        const doc = document.documentElement;
        const left = Math.max(0, doc.scrollHeight - window.innerHeight - window.scrollY);
        const span = Math.min(box.height, window.innerHeight);
        at = start * (span > 0 ? 1 - Math.min(1, left / span) : 1);
      }
      const p = path.getPointAtLength(at);
      place(p.x, p.y);
    };
    const request = () => { if (!frame) frame = requestAnimationFrame(paint); };

    request();
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    desktop.addEventListener('change', request);
    return () => {
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
      desktop.removeEventListener('change', request);
      if (frame) cancelAnimationFrame(frame);
      place(rest.x, rest.y);
    };
  }, [anchor]);

  return <span ref={ref} hidden />;
}
