'use client';

import { useEffect, useRef, useState } from 'react';

type Item = { id: string; label: string };

/**
 * Sticky "on this page" bar for long pages. It follows the header, marks the chapter
 * being read and keeps that chapter's pill in view (NN/g: in-page table of contents;
 * Baymard: show where you are).
 */
export function ChapterBar({ items, label }: { items: Item[]; label: string }) {
  const [active, setActive] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = items.map(i => document.getElementById(i.id)).filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  useEffect(() => {
    const list = listRef.current;
    const pill = active ? list?.querySelector<HTMLElement>(`[data-id="${active}"]`) : null;
    if (!list || !pill) return;
    const left = pill.offsetLeft - (list.clientWidth - pill.offsetWidth) / 2;
    list.scrollTo({ left, behavior: 'smooth' });
  }, [active]);

  return (
    <nav className="chapter-bar" aria-label={label}>
      <ul ref={listRef} className="wrap">
        {items.map(i => (
          <li key={i.id}>
            <a href={`#${i.id}`} data-id={i.id} aria-current={active === i.id ? 'true' : undefined}>{i.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
