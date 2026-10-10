import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { Reveal } from '@/components/ui/reveal';
import { buildMetadata } from '@/lib/seo';
import { YourDataSection } from '@/components/sections/credibility';
import { PRICING, formatPrice, pricingValues } from '@/lib/site-config';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pricing' });
  return buildMetadata({ locale, path: '/pricing', title: t('meta_title'), description: t('meta_description', pricingValues(locale)) });
}

export default function PricingPage() {
  const t = useTranslations('pricing');
  const locale = useLocale();
  const values = pricingValues(locale);
  // model.points is a plain array (t.raw), so its {users} placeholder is filled here.
  const points = (t.raw('model.points') as string[]).map(p => p.replace('{users}', String(values.users)));

  return (
    <>
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
              fontWeight: 400, color: 'white',
              letterSpacing: '-0.02em', marginBottom: '1rem',
              maxWidth: '22ch', lineHeight: 1.15, textWrap: 'balance'
            }}>
              {t('intro.headline')}
            </h1>
            <p style={{
              fontSize: '1.0625rem', color: 'oklch(0.78 0.018 118)',
              maxWidth: '52ch', lineHeight: 1.65
            }}>
              {t('intro.text', values)}
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--color-bg)', padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'start'
          }}>
            {/* Price card. Amounts come from PRICING in src/lib/site-config.ts. */}
            <Reveal>
              <div style={{
                padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                border: '1px solid var(--color-border)',
                borderRadius: '10px',
                backgroundColor: 'var(--color-bg)'
              }}>
                <p style={{ margin: '0 0 0.25rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: 'var(--font-display, Georgia, serif)',
                    fontSize: 'clamp(2.75rem, 5vw, 3.75rem)', lineHeight: 1,
                    color: 'var(--color-ink)', letterSpacing: '-0.02em'
                  }}>
                    {formatPrice(PRICING.monthly, locale)}
                  </span>
                  <span style={{ fontSize: '1rem', color: 'var(--color-muted)' }}>{t('price.per_month')}</span>
                </p>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink)', fontWeight: 500, margin: '0 0 0.375rem' }}>
                  {t('price.per_agency', values)}
                </p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', margin: '0 0 1.25rem' }}>
                  {t('price.yearly', { ...values, price: values.yearly })}
                </p>
                <p style={{
                  display: 'inline-block', margin: '0 0 1.75rem',
                  fontSize: '0.8125rem', fontWeight: 600,
                  color: 'var(--color-accent)', backgroundColor: 'var(--color-accent-light)',
                  padding: '0.25rem 0.625rem', borderRadius: '4px'
                }}>
                  {t('price.trial', values)}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {points.map((point, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span aria-hidden style={{
                        flexShrink: 0, width: '20px', height: '20px',
                        borderRadius: '50%', backgroundColor: 'var(--color-primary)',
                        color: 'white', fontSize: '0.6875rem', fontWeight: 700,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginTop: '0.1rem'
                      }}>✓</span>
                      <span style={{ fontSize: '0.9375rem', color: 'var(--color-ink)', lineHeight: 1.6 }}>{point}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/demo" data-cta="book-demo" data-cta-location="pricing-card" className="btn-primary">
                  {t('final_cta.cta')}
                </Link>

                <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.6, margin: '1.25rem 0 0' }}>
                  {t('price.more_users', values)}
                </p>
              </div>
            </Reveal>

            {/* Trial + why a demo first */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <Reveal delay={80}>
                <div>
                  <span className="section-rule" />
                  <h2 style={{
                    fontFamily: 'var(--font-display, Georgia, serif)',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 400, color: 'var(--color-ink)',
                    letterSpacing: '-0.01em', marginBottom: '1rem'
                  }}>
                    {t('model.title')}
                  </h2>
                  <p style={{
                    fontFamily: 'var(--font-display, Georgia, serif)',
                    fontSize: '1.0625rem', fontStyle: 'italic',
                    color: 'var(--color-muted)', lineHeight: 1.65, margin: 0
                  }}>
                    {t('model.text')}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div style={{
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: '8px'
                }}>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.75rem' }}>
                    {t('trial.title', values)}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7, margin: 0 }}>
                    {t('trial.text', values)}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div style={{
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: '8px'
                }}>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.75rem' }}>
                    {t('why_demo.title')}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7, margin: 0 }}>
                    {t('why_demo.text')}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <YourDataSection background="var(--color-surface)" />

      <section style={{ backgroundColor: 'var(--color-primary)', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Reveal>
            <h2 style={{
              fontFamily: 'var(--font-display, Georgia, serif)',
              fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
              fontWeight: 400, color: 'white',
              letterSpacing: '-0.02em', marginBottom: '0.875rem',
              maxWidth: '28ch', lineHeight: 1.2
            }}>
              {t('final_cta.headline')}
            </h2>
            <p style={{
              fontSize: '1rem', color: 'oklch(0.78 0.018 118)',
              lineHeight: 1.65, marginBottom: '2rem', maxWidth: '44ch'
            }}>
              {t('final_cta.text')}
            </p>
            <Link href="/demo" data-cta="book-demo" data-cta-location="pricing-final" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '0.875rem 1.75rem',
              backgroundColor: 'white', color: 'var(--color-primary)',
              fontWeight: 600, fontSize: '0.9375rem',
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
