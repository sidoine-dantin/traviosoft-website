import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { Reveal } from '@/components/ui/reveal';
import { JourneyStepper } from '@/components/ui/journey-stepper';
import { buildMetadata } from '@/lib/seo';
import { ProductShot } from '@/components/ui/product-shot';
import { SHOTS } from '@/lib/site-config';

type Highlight = { key: 'itinerary' | 'payments' | 'reav' | 'dashboard'; title: string; text: string; shot: string };

const HIGHLIGHT_SHOTS: Record<Highlight['key'], { file: string; ratio: `${number} / ${number}` }> = {
  itinerary: { file: SHOTS.itineraryMobile, ratio: '4 / 5' },
  payments: { file: SHOTS.payments, ratio: '16 / 10' },
  reav: { file: SHOTS.invoiceReav, ratio: '4 / 5' },
  dashboard: { file: SHOTS.dashboard, ratio: '16 / 10' }
};

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
  const tm = useTranslations('media');
  const highlights = t.raw('highlights.items') as Highlight[];

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
          <Reveal delay={120}>
            <div style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <ProductShot
                file={SHOTS.quotePdf}
                label={tm('screenshot', { subject: t('intro.shot') })}
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Highlights: what exists in the app today, each with its screenshot ── */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Reveal>
            <h2 style={{
              fontFamily: 'var(--font-display, Georgia, serif)',
              fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
              fontWeight: 400, color: 'var(--color-ink)',
              letterSpacing: '-0.01em', marginBottom: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.2
            }}>
              {t('highlights.title')}
            </h2>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 7vw, 6rem)' }}>
            {highlights.map((h, i) => {
              const shot = HIGHLIGHT_SHOTS[h.key];
              const portrait = shot.ratio === '4 / 5';
              return (
                <div key={h.key} className={`feature-row${i % 2 ? ' feature-row--flip' : ''}`}>
                  <Reveal>
                    <div>
                      <span className="section-rule" />
                      <h3 style={{
                        fontSize: 'clamp(1.15rem, 2vw, 1.35rem)', fontWeight: 600,
                        color: 'var(--color-ink)', marginBottom: '0.75rem', lineHeight: 1.3
                      }}>
                        {h.title}
                      </h3>
                      <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.7, maxWidth: '48ch', margin: 0 }}>
                        {h.text}
                      </p>
                    </div>
                  </Reveal>
                  <Reveal delay={80}>
                    <div style={portrait ? { maxWidth: '22rem', marginInline: 'auto' } : undefined}>
                      <ProductShot
                        file={shot.file}
                        ratio={shot.ratio}
                        label={tm('screenshot', { subject: h.shot })}
                      />
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
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
            <Link href="/demo" data-cta="book-demo" data-cta-location="product-final" style={{
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
