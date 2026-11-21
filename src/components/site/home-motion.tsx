'use client';

import { useEffect } from 'react';

/**
 * Home page motion. Turns on html.motion (so nothing is hidden without JS or for people who ask
 * for reduced motion), then reveals [data-reveal], .scraps, the after card and the price coins as each comes into view.
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
    // Each animated piece is watched itself (not the section around it), and only counts once its
    // top is a fifth of the screen above the bottom edge: otherwise a tall box (the price card on a
    // phone) starts its animation while the part that moves is still below the screen.
    }, { threshold: 0, rootMargin: '0px 0px -20% 0px' });
    document.querySelectorAll('[data-reveal], .scraps, .ba .after, .coins .coin').forEach(el => reveal.observe(el));

    return () => { reveal.disconnect(); root.classList.remove('motion'); };
  }, []);
  return null;
}
