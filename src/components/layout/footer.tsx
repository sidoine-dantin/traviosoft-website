import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { COMPANY } from '@/lib/site-config';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'var(--color-ink)',
      color: 'oklch(0.85 0.008 118)',
      paddingTop: '4rem',
      paddingBottom: '2.5rem',
      marginTop: '6rem'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Top: logo + columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '2.5rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid oklch(0.25 0.010 118)'
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <span style={{
              fontFamily: 'var(--font-display, Georgia, serif)',
              fontSize: '1.375rem',
              color: 'white',
              fontWeight: 400,
              display: 'block',
              marginBottom: '0.75rem'
            }}>
              Traviosoft
            </span>
            <p style={{
              fontSize: '0.875rem',
              lineHeight: '1.6',
              color: 'oklch(0.65 0.008 118)',
              maxWidth: '22ch'
            }}>
              {t('tagline')}
            </p>
          </div>

          {/* Product column */}
          <div>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'oklch(0.55 0.008 118)',
              marginBottom: '1rem'
            }}>
              {t('product_col')}
            </p>
            <FooterLinks links={[
              { label: t('features'), href: '/product' },
              { label: t('how_it_works'), href: '/how-it-works' },
              { label: t('pricing'), href: '/pricing' },
              { label: t('book_demo'), href: '/demo', highlight: true, cta: 'book-demo' }
            ]} />
          </div>

          {/* Company column */}
          <div>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'oklch(0.55 0.008 118)',
              marginBottom: '1rem'
            }}>
              {t('company_col')}
            </p>
            <FooterLinks links={[
              { label: t('about'), href: '/about' },
              { label: t('faq'), href: '/faq' }
            ]} />
          </div>

          {/* Legal column */}
          <div>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'oklch(0.55 0.008 118)',
              marginBottom: '1rem'
            }}>
              {t('legal_col')}
            </p>
            <FooterLinks links={[
              { label: t('privacy'), href: '/legal/privacy' },
              { label: t('terms'), href: '/legal/terms' },
              { label: t('legal_notice'), href: '/legal/notice' }
            ]} />
          </div>
        </div>

        {/* Company details. Empty COMPANY fields (site-config) show as placeholders. */}
        <div style={{ paddingTop: '1.5rem' }}>
          <p style={{
            fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: 'oklch(0.55 0.008 118)', marginBottom: '0.5rem'
          }}>
            {t('company_details')}
          </p>
          <p style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: 'oklch(0.65 0.008 118)', margin: 0, maxWidth: 'none' }}>
            <CompanyField value={COMPANY.legalName} placeholder={t('legal_name_placeholder')} />
            {' · '}
            <CompanyField value={COMPANY.address} placeholder={t('address_placeholder')} />
            {' · '}
            <CompanyField value={COMPANY.registration} placeholder={t('registration_placeholder')} />
          </p>
        </div>

        {/* Bottom: copyright */}
        <div style={{
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          <p style={{ fontSize: '0.8125rem', color: 'oklch(0.50 0.008 118)' }}>
            © {year} {t('copyright')}
          </p>
        </div>
      </div>

      <style>{`
        .footer-link { color: oklch(0.72 0.008 118); transition: color 0.15s ease-out; }
        .footer-link:hover { color: white; }
        .footer-link--highlight { color: var(--color-accent); }
        .footer-link--highlight:hover { color: oklch(0.65 0.14 48); }
      `}</style>
    </footer>
  );
}

function CompanyField({ value, placeholder }: { value: string; placeholder: string }) {
  if (value) return <span>{value}</span>;
  return (
    <span style={{ border: '1px dashed oklch(0.45 0.008 118)', borderRadius: '3px', padding: '0 0.3rem' }}>
      {placeholder}
    </span>
  );
}

type FooterLinkItem = { label: string; href: string; highlight?: boolean; cta?: string };

function FooterLinks({ links }: { links: FooterLinkItem[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
      {links.map(({ label, href, highlight, cta }) => (
        <li key={href}>
          <Link
            href={href}
            data-cta={cta}
            data-cta-location={cta ? 'footer' : undefined}
            className={`footer-link${highlight ? ' footer-link--highlight' : ''}`}
            style={{ fontSize: '0.875rem', textDecoration: 'none' }}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
