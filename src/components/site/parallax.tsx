'use client';

import { useEffect, useRef } from 'react';

/**
 * Scroll parallax for the layers of the element this sits in: every descendant with `data-depth`
 * trails the page by that fraction of the scroll (0.1 = moves 10% slower than the page).
 *
 * `anchor="top"`: layers rest where they are drawn at the top of the page (the home hero).
 * `anchor="bottom"`: layers rest where they are drawn at the bottom of the page (the footer), so the
 * picture settles as the visitor arrives at the end.
 *
 * Desktop only (from 861 px, where the background shapes are shown) and off when the system asks
 * for reduced motion. Layers inside an SVG move in the drawing's own units, so a scaled background
 * (preserveAspectRatio slice) moves by the same number of pixels as the HTML layers.
 */
export function Parallax({ anchor }: { anchor: 'top' | 'bottom' }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const scene = ref.current?.parentElement;
    if (!scene) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const layers = Array.from(scene.querySelectorAll<HTMLElement | SVGGraphicsElement>('[data-depth]'));
    if (layers.length === 0) return;
    const desktop = window.matchMedia('(min-width: 861px)');
    let visible = false;
    let frame = 0;

    const clear = () => layers.forEach(l => {
      if (l instanceof SVGElement) l.removeAttribute('transform');
      else l.style.translate = '';
    });

    const paint = () => {
      frame = 0;
      if (!desktop.matches || !visible) return;
      const doc = document.documentElement;
      const travelled = anchor === 'top'
        ? Math.max(0, window.scrollY)
        : -Math.max(0, doc.scrollHeight - window.innerHeight - window.scrollY);
      for (const layer of layers) {
        const px = travelled * (Number(layer.dataset.depth) || 0);
        const svg = layer instanceof SVGElement ? layer.ownerSVGElement : null;
        if (svg) {
          const box = svg.getBoundingClientRect();
          const vb = svg.viewBox.baseVal;
          const scale = vb && vb.width ? Math.max(box.width / vb.width, box.height / vb.height) || 1 : 1;
          layer.setAttribute('transform', `translate(0 ${(px / scale).toFixed(1)})`);
        } else {
          (layer as HTMLElement).style.translate = `0 ${px.toFixed(1)}px`;
        }
      }
    };
    const request = () => { if (!frame) frame = requestAnimationFrame(paint); };
    const onMedia = () => { if (!desktop.matches) clear(); request(); };

    const seen = new IntersectionObserver(([e]) => { visible = e.isIntersecting; request(); });
    seen.observe(scene);
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    desktop.addEventListener('change', onMedia);

    return () => {
      seen.disconnect();
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
      desktop.removeEventListener('change', onMedia);
      if (frame) cancelAnimationFrame(frame);
      clear();
    };
  }, [anchor]);

  return <span ref={ref} hidden />;
}
