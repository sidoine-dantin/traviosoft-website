'use client';

import { useEffect } from 'react';

/**
 * Home page motion. Turns on html.motion (so nothing is hidden without JS or for people who ask
 * for reduced motion), then reveals [data-reveal], .scraps, .ba and .coins as they come into view,
 * and moves the hero background shapes at their own speeds while scrolling (desktop).
 */
export function HomeMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.documentElement;
    root.classList.add('motion');

    document.querySelectorAll<HTMLElement>('.scraps').forEach(list => {
      Array.from(list.children).forEach((el, i) => (el as HTMLElement).style.setProperty('--i', String(i)));
    });

    const reveal = new IntersectionObserver(entries => {
      for (const e of entries) {
        if (e.isIntersecting) { e.target.classList.add('in'); reveal.unobserve(e.target); }
      }
    }, { threshold: 0.15 });
    document.querySelectorAll('[data-reveal], .scraps, .ba, .coins').forEach(el => reveal.observe(el));

    // Hero background parallax (desktop only, where the shapes are shown): each layer of
    // .hero-bg [data-depth] trails the page by its depth, so the circles and the route drift
    // at their own speed while the proposal scrolls normally. Runs only while the hero is visible.
    const stopParallax = heroParallax();

    return () => { reveal.disconnect(); stopParallax(); root.classList.remove('motion'); };
  }, []);
  return null;
}

function heroParallax(): () => void {
  const svg = document.querySelector<SVGSVGElement>('.hero-bg');
  const layers = svg ? Array.from(svg.querySelectorAll<SVGGElement>('[data-depth]')) : [];
  if (!svg || layers.length === 0) return () => {};
  const desktop = window.matchMedia('(min-width: 861px)');
  let visible = true;
  let frame = 0;

  const paint = () => {
    frame = 0;
    if (!desktop.matches || !visible) return;
    const box = svg.getBoundingClientRect();
    // The drawing is scaled to cover the stage (preserveAspectRatio slice): turn pixels into its units.
    const scale = Math.max(box.width / 1440, box.height / 640) || 1;
    // At the top of the page the shapes sit where they are drawn; they trail as the page moves up.
    const scrolled = Math.max(0, window.scrollY);
    for (const layer of layers) {
      const depth = Number(layer.dataset.depth) || 0;
      layer.setAttribute('transform', `translate(0 ${((scrolled * depth) / scale).toFixed(1)})`);
    }
  };
  const request = () => { if (!frame) frame = requestAnimationFrame(paint); };
  const onMedia = () => {
    if (!desktop.matches) layers.forEach(l => l.removeAttribute('transform'));
    request();
  };

  const seen = new IntersectionObserver(([e]) => { visible = e.isIntersecting; request(); });
  seen.observe(svg);
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  desktop.addEventListener('change', onMedia);
  paint();

  return () => {
    seen.disconnect();
    window.removeEventListener('scroll', request);
    window.removeEventListener('resize', request);
    desktop.removeEventListener('change', onMedia);
    if (frame) cancelAnimationFrame(frame);
  };
}
