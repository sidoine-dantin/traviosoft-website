import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  return { title: t('terms_title') };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });

  return (
    <div style={{ paddingTop: 'clamp(6rem, 12vw, 8rem)', paddingBottom: 'clamp(4rem, 8vw, 6rem)' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem' }}>
        <Link href="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
          fontSize: '0.875rem', color: 'var(--color-muted)',
          textDecoration: 'none', marginBottom: '2.5rem'
        }}>
          ← {t('back_home')}
        </Link>

        <h1 style={{
          fontFamily: 'var(--font-instrument-serif, Georgia, serif)',
          fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
          fontWeight: 400, color: 'var(--color-ink)',
          letterSpacing: '-0.01em', marginBottom: '3rem', lineHeight: 1.2
        }}>
          {t('terms_title').replace(' - Traviosoft', '')}
        </h1>

        <div style={{
          fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.8,
          display: 'flex', flexDirection: 'column', gap: '1.5rem'
        }}>
          <p>
            The terms of service will be completed before the website goes live. They will cover subscription terms, cancellation and data export rights, acceptable use, and liability.
          </p>
          <p>
            If you have questions in the meantime, please reach out via the demo booking page.
          </p>
        </div>
      </div>
    </div>
  );
}
