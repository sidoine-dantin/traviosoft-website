'use client';

import { useEffect } from 'react';

/**
 * Home page motion. Turns on html.motion (so nothing is hidden without JS or for people who ask
 * for reduced motion), then:
 * - reveals [data-reveal], .scraps, .ba, .coins and .facts as they come into view;
 * - on wide screens pins the five-step section and highlights one step at a time while the
 *   page scrolls through it, with a gentle snap on each step; on narrow screens the step
 *   crossing the middle of the screen is highlighted instead.
 */
export function HomeMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.documentElement;
    root.classList.add('motion');

    document.querySelectorAll<HTMLElement>('.scraps, .facts').forEach(list => {
      Array.from(list.children).forEach((el, i) => (el as HTMLElement).style.setProperty('--i', String(i)));
    });

    const reveal = new IntersectionObserver(entries => {
      for (const e of entries) {
        if (e.isIntersecting) { e.target.classList.add('in'); reveal.unobserve(e.target); }
      }
    }, { threshold: 0.2 });
    document.querySelectorAll('[data-reveal], .scraps, .ba, .coins, .facts').forEach(el => reveal.observe(el));

    const pin = document.querySelector<HTMLElement>('.steps-pin');
    const list = pin?.querySelector<HTMLElement>('.steps');
    const items = list ? Array.from(list.children) as HTMLElement[] : [];
    const marks = pin ? Array.from(pin.querySelectorAll<HTMLElement>('.snap-mark')) : [];
    const wide = window.matchMedia('(min-width: 921px) and (min-height: 640px)');
    let frame = 0;
    let rowObserver: IntersectionObserver | null = null;

    const setActive = (n: number) => {
      if (!list) return;
      list.dataset.active = String(n);
      items.forEach((li, i) => {
        li.classList.toggle('now', i === n);
        li.classList.toggle('seen', i < n);
      });
    };

    const placeMarks = () => {
      if (!pin) return;
      const travel = pin.offsetHeight - window.innerHeight;
      // the page has scroll-padding-top, so a mark lands that far below the top of the screen
      const pad = parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
      marks.forEach((m, i) => { m.style.top = `${Math.round(((i + 0.5) / items.length) * travel + pad)}px`; });
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!pin) return;
        const travel = pin.offsetHeight - window.innerHeight;
        const p = Math.min(1, Math.max(0, -pin.getBoundingClientRect().top / Math.max(1, travel)));
        setActive(Math.min(items.length - 1, Math.floor(p * items.length)));
      });
    };

    const setup = () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', placeMarks);
      rowObserver?.disconnect();
      rowObserver = null;
      if (!pin || !list) return;
      if (wide.matches) {
        pin.classList.add('pinned');
        root.classList.add('home-snap');
        placeMarks();
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', placeMarks);
      } else {
        pin.classList.remove('pinned');
        root.classList.remove('home-snap');
        setActive(-1);
        delete list.dataset.active;
        rowObserver = new IntersectionObserver(entries => {
          for (const e of entries) {
            if (e.isIntersecting) {
              list.dataset.active = '1';
              setActive(items.indexOf(e.target as HTMLElement));
            }
          }
        }, { rootMargin: '-45% 0px -45% 0px' });
        items.forEach(li => rowObserver!.observe(li));
      }
    };

    setup();
    wide.addEventListener('change', setup);
    return () => {
      wide.removeEventListener('change', setup);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', placeMarks);
      rowObserver?.disconnect();
      reveal.disconnect();
      if (frame) cancelAnimationFrame(frame);
      root.classList.remove('motion', 'home-snap');
    };
  }, []);
  return null;
}
