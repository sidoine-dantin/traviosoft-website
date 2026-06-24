'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, Link, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';

const NAV_LINKS = [
  { key: 'product', href: '/product' },
  { key: 'pricing', href: '/pricing' },
  { key: 'about', href: '/about' },
  { key: 'faq', href: '/faq' }
] as const;

const LOCALES = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' }
] as const;

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const currentLocale = params.locale as string;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  function switchLocale(locale: string) {
    router.replace(pathname, { locale });
  }

  // Every page leads with a dark hero except the legal pages (light background).
  // At the very top of a dark-hero page the header is transparent, so its text
  // must be light to stay legible; once scrolled the bar turns white and the
  // dark palette takes over.
  const overDarkHero = !pathname.startsWith('/legal');
  const lightOnDark = !scrolled && overDarkHero;

  const logoColor = lightOnDark ? 'white' : 'var(--color-primary)';
  const navActiveColor = lightOnDark ? 'white' : 'var(--color-primary)';
  const navInactiveColor = lightOnDark ? 'oklch(0.86 0.02 118)' : 'var(--color-muted)';
  const navHoverColor = lightOnDark ? 'white' : 'var(--color-ink)';
  const dividerColor = lightOnDark ? 'oklch(1 0 0 / 0.28)' : 'var(--color-border)';
  const ctaStyle = lightOnDark
    ? { backgroundColor: 'white', color: 'var(--color-primary)' }
    : {};

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        backgroundColor: scrolled ? 'oklch(1 0 0 / 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background-color 0.25s ease-out, border-color 0.25s ease-out, backdrop-filter 0.25s ease-out'
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <span style={{
            fontFamily: 'var(--font-display, Georgia, serif)',
            fontSize: '1.375rem',
            color: logoColor,
            fontWeight: 400,
            letterSpacing: '-0.01em',
            transition: 'color 0.25s ease-out'
          }}>
            Traviosoft
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            flex: 1,
            justifyContent: 'center'
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              style={{
                padding: '0.375rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.9375rem',
                fontWeight: isActive(href) ? 500 : 400,
                color: isActive(href) ? navActiveColor : navInactiveColor,
                textDecoration: 'none',
                transition: 'color 0.15s ease-out',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = navHoverColor; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = isActive(href) ? navActiveColor : navInactiveColor; }}
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        {/* Right side: language + CTA */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          flexShrink: 0
        }}>
          {/* Language switcher */}
          <div
            role="group"
            aria-label="Language"
            style={{ display: 'flex', alignItems: 'center', gap: '0' }}
            className="desktop-nav"
          >
            {LOCALES.map(({ code, label }, idx) => (
              <button
                key={code}
                onClick={() => switchLocale(code)}
                aria-current={currentLocale === code ? 'true' : undefined}
                style={{
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.8125rem',
                  fontWeight: currentLocale === code ? 600 : 400,
                  color: currentLocale === code ? navActiveColor : navInactiveColor,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  borderRight: idx < LOCALES.length - 1 ? `1px solid ${dividerColor}` : 'none',
                  lineHeight: 1,
                  transition: 'color 0.15s ease-out'
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <Link href="/demo" className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.5rem 1.125rem', ...ctaStyle }}>
            {t('book_demo')}
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.25rem',
              color: lightOnDark ? 'white' : 'var(--color-ink)'
            }}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: 'oklch(1 0 0 / 0.97)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid var(--color-border)',
            padding: '1rem 1.5rem 1.5rem'
          }}
          className="mobile-menu"
        >
          <nav aria-label="Mobile navigation">
            {NAV_LINKS.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                style={{
                  display: 'block',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid var(--color-border)',
                  fontSize: '1rem',
                  fontWeight: isActive(href) ? 500 : 400,
                  color: isActive(href) ? 'var(--color-primary)' : 'var(--color-ink)',
                  textDecoration: 'none'
                }}
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div role="group" aria-label="Language" style={{ display: 'flex', gap: '0' }}>
              {LOCALES.map(({ code, label }, idx) => (
                <button
                  key={code}
                  onClick={() => switchLocale(code)}
                  style={{
                    padding: '0.25rem 0.625rem',
                    fontSize: '0.875rem',
                    fontWeight: currentLocale === code ? 600 : 400,
                    color: currentLocale === code ? 'var(--color-primary)' : 'var(--color-muted)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    borderRight: idx < LOCALES.length - 1 ? '1px solid var(--color-border)' : 'none'
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
            <Link href="/demo" className="btn-primary" style={{ fontSize: '0.875rem' }}>
              {t('book_demo')}
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}
