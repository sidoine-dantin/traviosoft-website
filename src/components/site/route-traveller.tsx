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
 * The stop glides: each frame it covers part of the way to where the scroll puts it, so it keeps
 * moving after the scroll stops and slows down until it settles (GLIDE below). A wheel that scrolls
 * in steps then reads as one smooth movement.
 *
 * Looks in the element this sits in for a `<path data-route>` and a `<circle data-route-dot>`.
 * Desktop only (from 861 px, where the route is shown) and off when the system asks for reduced
 * motion: the stop then stays where it is drawn.
 */
/** How long the stop takes to catch up, in seconds: after this it has covered about 63% of the gap,
 * and it settles about four times this after the scroll stops. */
const GLIDE = 0.32;

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
    let shown = -1; // Where on the line the stop is drawn now; -1 until the first frame.
    let last = 0;
    const place = (x: number, y: number) => {
      dot.setAttribute('cx', x.toFixed(1));
      dot.setAttribute('cy', y.toFixed(1));
    };
    // Where on the line the scroll puts the stop.
    const target = () => {
      const box = scene.getBoundingClientRect();
      if (anchor === 'top') {
        // The distance to scroll until the top of the scene, where the line runs, has left the window.
        const span = box.top + window.scrollY + box.height * 0.15;
        const done = span > 0 ? Math.min(1, Math.max(0, window.scrollY / span)) : 0;
        return start + (total - start) * done;
      }
      // What is left to scroll, against the height of the scene: 0 at the bottom of the page.
      const doc = document.documentElement;
      const left = Math.max(0, doc.scrollHeight - window.innerHeight - window.scrollY);
      const span = Math.min(box.height, window.innerHeight);
      return start * (span > 0 ? 1 - Math.min(1, left / span) : 1);
    };
    const paint = (now: number) => {
      frame = 0;
      if (!desktop.matches) { shown = -1; place(rest.x, rest.y); return; }
      const goal = target();
      if (shown < 0) {
        // First frame, or back from a narrow window: start where the scroll is, without a glide.
        shown = goal;
      } else {
        // Frame-rate independent ease: the same share of the gap per second on any screen.
        const dt = Math.min(0.1, Math.max(0, (now - last) / 1000));
        shown += (goal - shown) * (1 - Math.exp(-dt / GLIDE));
        if (Math.abs(goal - shown) < 0.05) shown = goal;
      }
      last = now;
      const p = path.getPointAtLength(shown);
      place(p.x, p.y);
      if (shown !== goal) frame = requestAnimationFrame(paint);
    };
    const request = () => {
      if (frame) return;
      // After a pause, count time from this frame, not from the last one painted.
      last = performance.now();
      frame = requestAnimationFrame(paint);
    };
    const jump = () => { shown = -1; request(); };

    request();
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', jump);
    desktop.addEventListener('change', jump);
    return () => {
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', jump);
      desktop.removeEventListener('change', jump);
      if (frame) cancelAnimationFrame(frame);
      place(rest.x, rest.y);
    };
  }, [anchor]);

  return <span ref={ref} hidden />;
}
