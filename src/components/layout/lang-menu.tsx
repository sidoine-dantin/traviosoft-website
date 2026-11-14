'use client';

import { useEffect, useRef, useState } from 'react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/content/types';

const NAMES: Record<Locale, string> = { es: 'Español', en: 'English', fr: 'Français' };
const ORDER: Locale[] = ['es', 'en', 'fr'];

/** One language button; the other languages open in a small list under it (above it with `up`). */
export function LangMenu({ locale, href, up = false }: { locale: Locale; href: string; up?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className={`lang-menu${up ? ' up' : ''}`} ref={ref}>
      <button type="button" className="lang-btn" aria-expanded={open} aria-haspopup="true" aria-label={`Language: ${NAMES[locale]}`} onClick={() => setOpen(o => !o)}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" /></svg>
        <span>{locale.toUpperCase()}</span>
        <svg className="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5" /></svg>
      </button>
      {open && (
        <ul className="lang-list">
          {ORDER.map(l => (
            <li key={l}>
              <Link href={href} locale={l} hrefLang={l} lang={l} aria-current={l === locale ? 'true' : undefined} onClick={() => setOpen(false)}>
                {NAMES[l]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
