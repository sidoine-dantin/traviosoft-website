import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { buildMetadata } from '@/lib/seo';
import { LegalDocument } from '@/components/ui/legal-document';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  return buildMetadata({ locale, path: '/legal/terms', title: t('terms_title') });
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  const sections = t.raw('terms.sections') as { heading: string; body: string[] }[];

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

        <LegalDocument
          title={t('terms_title').replace(' - Traviosoft', '')}
          updatedLabel={t('updated_label')}
          updatedDate={t('updated_date')}
          intro={t('terms.intro')}
          sections={sections}
        />
      </div>
    </div>
  );
}
