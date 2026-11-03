'use client';

import { useEffect, useRef, useState } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import { Logo } from '@/components/site/logo';
import type { Locale } from '@/content/types';

type JobLink = { slug: string; name: string; menuLine: string };

type Props = {
  locale: Locale;
  labels: { product: string; pricing: string; example: string; demo: string; menuLabel: string; close: string; skip: string };
  jobs: JobLink[];
  /** paths that exist in each locale; used to hide a language that has no version of this page */
  available?: Partial<Record<Locale, string>>;
};

const DOT = [
  { background: 'var(--yellow)', color: 'var(--green)' },
  { background: 'var(--orange)', color: 'var(--cream)' },
  { background: 'var(--green)', color: 'var(--yellow)' },
  { background: 'var(--ink)', color: 'var(--yellow)' }
];
const LOCALES: Locale[] = ['es', 'en', 'fr'];

export default function Header({ locale, labels, jobs }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobile(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isJob = jobs.some(j => pathname === `/${j.slug}`);
  // Locale-only pages (Spanish guides) have no twin: the switch goes to that locale's home.
  const localeHref = pathname.startsWith('/guides/') || pathname.startsWith('/compare/') || pathname.startsWith('/best/') ? '/resources' : pathname;

  const langs = (
    <div className="lang" aria-label="Language">
      {LOCALES.map(l => (
        <Link key={l} href={localeHref} locale={l} aria-current={l === locale ? 'true' : undefined} hrefLang={l}>
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );

  return (
    <header className={`top${scrolled ? ' scrolled' : ''}`}>
      <a href="#main" className="sr-only">{labels.skip}</a>
      <div className="wrap">
        <Logo />
        <nav className="nav" aria-label="Main">
          <div className="menu" ref={menuRef}>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="product-menu"
              onClick={() => setOpen(o => !o)}
              style={isJob ? { color: 'var(--orange)' } : undefined}
            >
              {labels.product} <span aria-hidden="true">▾</span>
            </button>
            {open && (
              <div className="menu-panel" id="product-menu">
                {jobs.map((j, i) => (
                  <Link key={j.slug} href={`/${j.slug}`}>
                    <span className="menu-dot" style={DOT[i]}>{i + 1}</span>
                    <span>
                      <b>{j.name}</b>
                      <small>{j.menuLine}</small>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/pricing" aria-current={pathname === '/pricing' ? 'page' : undefined}>{labels.pricing}</Link>
          <Link href="/example" aria-current={pathname === '/example' ? 'page' : undefined}>{labels.example}</Link>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {langs}
          <Link className="quiet" href="/demo">{labels.demo}</Link>
          <button
            type="button"
            className="burger"
            aria-expanded={mobile}
            aria-controls="mobile-menu"
            aria-label={mobile ? labels.close : labels.menuLabel}
            onClick={() => setMobile(m => !m)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              {mobile ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {mobile && (
        <div className="mobile-panel" id="mobile-menu">
          {jobs.map(j => (
            <Link key={j.slug} href={`/${j.slug}`}>{j.name}</Link>
          ))}
          <Link href="/pricing">{labels.pricing}</Link>
          <Link href="/example">{labels.example}</Link>
          <Link href="/demo">{labels.demo}</Link>
          {langs}
        </div>
      )}
    </header>
  );
}
