'use client';

import { useEffect, useRef, useState } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import { Logo } from '@/components/site/logo';
import type { Locale } from '@/content/types';

type JobLink = { slug: string; name: string; menuLine: string };

type Props = {
  locale: Locale;
  labels: { product: string; pricing: string; resources: string; demo: string; menuLabel: string; close: string; skip: string };
  jobs: JobLink[];
  /** paths that exist in each locale; used to hide a language that has no version of this page */
  available?: Partial<Record<Locale, string>>;
};

const LOCALES: Locale[] = ['es', 'en', 'fr'];

export default function Header({ locale, labels, jobs }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  // On phones the bar slides away while reading down and comes back on the first scroll up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (Math.abs(y - last) < 6) return;
      setHidden(y > last && y > 160);
      last = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Other sticky bars (the chapter bar on product pages) follow the header.
  useEffect(() => {
    document.documentElement.dataset.bar = hidden && !mobile ? 'hidden' : 'shown';
  }, [hidden, mobile]);

  // Full-screen menu: the page behind does not scroll, Escape closes it and focus returns to the button.
  useEffect(() => {
    if (!mobile) return;
    const html = document.documentElement;
    html.classList.add('menu-open');
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobile(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    const onResize = () => window.innerWidth > 920 && setMobile(false);
    window.addEventListener('resize', onResize);
    return () => {
      html.classList.remove('menu-open');
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [mobile]);

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
    <header className={`top${scrolled ? ' scrolled' : ''}${hidden && !mobile ? ' away' : ''}${mobile ? ' open' : ''}`}>
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
              style={isJob ? { color: 'var(--orange-ink)' } : undefined}
            >
              {labels.product} <span aria-hidden="true">▾</span>
            </button>
            {open && (
              <div className="menu-panel" id="product-menu">
                {jobs.map(j => (
                  <Link key={j.slug} href={`/${j.slug}`}>
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
          <Link href="/resources" aria-current={pathname === '/resources' ? 'page' : undefined}>{labels.resources}</Link>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {langs}
          <Link className="quiet" href="/demo">{labels.demo}</Link>
          <button
            ref={burgerRef}
            type="button"
            className="burger"
            aria-expanded={mobile}
            aria-controls="mobile-menu"
            onClick={() => setMobile(m => !m)}
          >
            <span>{mobile ? labels.close : labels.menuLabel}</span>
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
        <nav className="mobile-panel" id="mobile-menu" aria-label="Main">
          <p className="lbl mobile-kicker">{labels.product}</p>
          <ul className="mobile-jobs">
            {jobs.map(j => (
              <li key={j.slug}>
                <Link href={`/${j.slug}`} aria-current={pathname === `/${j.slug}` ? 'page' : undefined}>
                  <span><b>{j.name}</b><small>{j.menuLine}</small></span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mobile-links">
            <li><Link href="/pricing" aria-current={pathname === '/pricing' ? 'page' : undefined}>{labels.pricing}</Link></li>
            <li><Link href="/resources" aria-current={pathname === '/resources' ? 'page' : undefined}>{labels.resources}</Link></li>
          </ul>
          <div className="mobile-foot">
            {langs}
            <Link className="quiet mobile-demo" href="/demo">{labels.demo}</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
