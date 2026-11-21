'use client';

import { useEffect } from 'react';

/**
 * Home page motion. Turns on html.motion (so nothing is hidden without JS or for people who ask
 * for reduced motion), then reveals [data-reveal], .scraps, .ba and .coins as they come into view.
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

    return () => { reveal.disconnect(); root.classList.remove('motion'); };
  }, []);
  return null;
}
