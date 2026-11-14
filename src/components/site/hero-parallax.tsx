'use client';

import { useEffect } from 'react';

/**
 * Feeds the page scroll into the home hero as --sy (pixels), so the background shapes and the
 * two tags can drift at different speeds. Off for people who ask for reduced motion.
 */
export function HeroParallax() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('.hero');
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.min(window.scrollY, 900);
      hero.style.setProperty('--sy', String(y));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);
  return null;
}
