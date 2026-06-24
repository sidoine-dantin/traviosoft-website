import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { Reveal } from '@/components/ui/reveal';
import { JourneyStepper } from '@/components/ui/journey-stepper';
import { buildMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'product' });
  return buildMetadata({ locale, path: '/product', title: t('meta_title'), description: t('meta_description') });
}

type Step = { name: string; title: string; description: string; before: string; after: string };

const MODULE_KEYS = [
  'requests', 'quotes', 'orders', 'suppliers', 'catalog',
  'projects', 'payments', 'reports', 'multilang'
] as const;

export default function ProductPage() {
  const t = useTranslations('product');
  const tHow = useTranslations('how_it_works');
  const steps = tHow.raw('steps') as Step[];

  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        backgroundColor: 'var(--color-primary)',
        paddingTop: 'clamp(7rem, 12vw, 9rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 6rem)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Reveal>
            <h1 style={{
              fontFamily: 'var(--font-display, Georgia, serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400, color: 'white', letterSpacing: '-0.02em',
              marginBottom: '1rem', maxWidth: '24ch', lineHeight: 1.15, textWrap: 'balance'
            }}>
              {t('intro.headline')}
            </h1>
            <p style={{
              fontSize: '1.0625rem', color: 'oklch(0.78 0.018 118)',
              maxWidth: '52ch', lineHeight: 1.65
            }}>
              {t('intro.text')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── The journey, step by step ── */}
      <section style={{ backgroundColor: 'var(--color-bg)', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Reveal>
            <div style={{ maxWidth: '48rem', marginBottom: 'clamp(1.5rem, 4vw, 3rem)' }}>
              <h2 style={{
                fontFamily: 'var(--font-display, Georgia, serif)',
                fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
                fontWeight: 400, color: 'var(--color-ink)',
                letterSpacing: '-0.01em', marginBottom: '1rem', lineHeight: 1.2
              }}>
                {t('journey.title')}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                {t('journey.text')}
              </p>
            </div>
          </Reveal>

          <Reveal>
            <JourneyStepper
              steps={steps}
              beforeLabel={tHow('before_label')}
              afterLabel={tHow('after_label')}
              label={t('journey.title')}
            />
          </Reveal>
        </div>
      </section>

      {/* ── Everything in one place (capabilities recap) ── */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Reveal>
            <div style={{ maxWidth: '48rem', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <h2 style={{
                fontFamily: 'var(--font-display, Georgia, serif)',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                fontWeight: 400, color: 'var(--color-ink)',
                letterSpacing: '-0.01em', marginBottom: '1rem', lineHeight: 1.25
              }}>
                {t('everything.title')}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                {t('everything.text')}
              </p>
            </div>
          </Reveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)'
          }}>
            {MODULE_KEYS.map((key) => (
              <Reveal key={key}>
                <div>
                  <h3 style={{
                    fontSize: '1rem', fontWeight: 600,
                    color: 'var(--color-ink)', marginBottom: '0.5rem', lineHeight: 1.3
                  }}>
                    {t(`modules.${key}.title`)}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.6, maxWidth: '36ch' }}>
                    {t(`modules.${key}.benefit`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ backgroundColor: 'var(--color-primary)', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Reveal>
            <h2 style={{
              fontFamily: 'var(--font-display, Georgia, serif)',
              fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
              fontWeight: 400, color: 'white', letterSpacing: '-0.02em',
              marginBottom: '1.5rem', maxWidth: '32ch', lineHeight: 1.2
            }}>
              {t('final_cta.headline')}
            </h2>
            <Link href="/demo" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '0.875rem 1.75rem', backgroundColor: 'white',
              color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9375rem',
              borderRadius: '6px', textDecoration: 'none'
            }}>
              {t('final_cta.cta')}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
