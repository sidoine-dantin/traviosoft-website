'use client';

import { useEffect, useRef } from 'react';

/**
 * A quiet detail: the stop on the dotted route drifts along its line while the page scrolls, and
 * only then. Scrolling down moves it forward, scrolling up moves it back.
 *
 * It follows the scroll's movement, not its position: each scroll gives it a small push (STEP), it
 * never goes faster than TOP_SPEED, and when the scroll stops it slows down over about a second
 * (EASE) and stays where it is. A long or fast scroll does not make it travel further afterwards:
 * the cap drops what is beyond it. It stops at either end of the line.
 *
 * The dots of the line drift with it, in the same direction at a fraction of its speed (DRIFT).
 * Nothing moves while the page is still.
 *
 * Looks in the element this sits in for a `<path data-route>` and a `<circle data-route-dot>`.
 * Desktop only (from 861 px, where the route is shown), only while the scene is on screen, and off
 * when the system asks for reduced motion: the stop then stays where it is drawn.
 */

/** How far the stop moves for each pixel scrolled, in units of the drawing (1440 wide). */
const STEP = 0.08;

/** The fastest it moves, in units of the drawing per second, however fast the page scrolls. */
const TOP_SPEED = 70;

/** How quickly it slows down, in seconds: after the scroll stops it has lost about two thirds of
 * its speed after this, and is still after about four times this. */
const EASE = 0.3;

/** How fast the dots of the line drift, as a share of the stop's speed. */
const DRIFT = 0.5;

export function RouteTraveller() {
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

    let at = start; // Where on the line the stop is now.
    let speed = 0; // Units of the line per second.
    let lastY = window.scrollY;
    let lastT = 0;
    let frame = 0;

    const place = () => {
      const p = path.getPointAtLength(at);
      dot.setAttribute('cx', p.x.toFixed(1));
      dot.setAttribute('cy', p.y.toFixed(1));
      path.style.strokeDashoffset = (-(at - start) * DRIFT).toFixed(1);
    };
    const reset = () => {
      at = start;
      speed = 0;
      dot.setAttribute('cx', String(rest.x));
      dot.setAttribute('cy', String(rest.y));
      path.style.strokeDashoffset = '';
    };
    const onScreen = () => {
      const box = scene.getBoundingClientRect();
      return box.bottom > 0 && box.top < window.innerHeight;
    };

    const tick = (now: number) => {
      frame = 0;
      const dt = Math.min(0.1, Math.max(0.001, (now - lastT) / 1000));
      lastT = now;
      const y = window.scrollY;
      const scrolled = y - lastY;
      lastY = y;
      if (!desktop.matches) { reset(); return; }
      // Each scroll gives the stop a push (STEP per pixel, spread over EASE), and friction slows it
      // down again: it keeps going a moment after the scroll stops, then stays where it is.
      if (onScreen()) speed += (scrolled * STEP) / EASE;
      speed = Math.max(-TOP_SPEED, Math.min(TOP_SPEED, speed)) * Math.exp(-dt / EASE);
      at = Math.max(0, Math.min(total, at + speed * dt));
      if ((at === 0 && speed < 0) || (at === total && speed > 0)) speed = 0;
      place();
      if (scrolled !== 0 || Math.abs(speed) > 0.3) frame = requestAnimationFrame(tick);
      else speed = 0;
    };
    const wake = () => {
      if (frame) return;
      lastT = performance.now();
      frame = requestAnimationFrame(tick);
    };
    const onBreakpoint = () => { if (!desktop.matches) reset(); };

    window.addEventListener('scroll', wake, { passive: true });
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      window.removeEventListener('scroll', wake);
      desktop.removeEventListener('change', onBreakpoint);
      if (frame) cancelAnimationFrame(frame);
      reset();
    };
  }, []);

  return <span ref={ref} hidden />;
}
