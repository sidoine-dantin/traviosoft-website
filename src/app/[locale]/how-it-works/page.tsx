import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { Reveal } from '@/components/ui/reveal';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'how_it_works' });
  return { title: t('meta_title'), description: t('meta_description') };
}

type Step = { number: string; title: string; description: string; before: string; after: string };

export default function HowItWorksPage() {
  const t = useTranslations('how_it_works');
  const steps = t.raw('steps') as Step[];

  return (
    <>
      {/* Page header */}
      <section style={{
        backgroundColor: 'var(--color-primary)',
        paddingTop: 'clamp(7rem, 12vw, 9rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 6rem)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Reveal>
            <h1 style={{
              fontFamily: 'var(--font-instrument-serif, Georgia, serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400, color: 'white',
              letterSpacing: '-0.02em', marginBottom: '1rem',
              maxWidth: '24ch', lineHeight: 1.15, textWrap: 'balance'
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

      {/* Steps */}
      <section style={{ backgroundColor: 'var(--color-bg)', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {steps.map((step, i) => (
              <Reveal key={i} delay={0}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '5rem minmax(0, 1fr)',
                  gap: '0 2.5rem',
                  padding: 'clamp(2.5rem, 5vw, 4rem) 0',
                  borderTop: '1px solid var(--color-border)'
                }}>
                  {/* Step number */}
                  <div style={{ paddingTop: '0.25rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-instrument-serif, Georgia, serif)',
                      fontSize: '2.5rem',
                      color: 'var(--color-border)',
                      fontWeight: 400,
                      lineHeight: 1,
                      display: 'block'
                    }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h2 style={{
                      fontSize: '1.25rem', fontWeight: 700,
                      color: 'var(--color-ink)', marginBottom: '0.875rem', lineHeight: 1.3
                    }}>
                      {step.title}
                    </h2>
                    <p style={{
                      fontSize: '0.9375rem', color: 'var(--color-muted)',
                      lineHeight: 1.7, marginBottom: '1.75rem', maxWidth: '60ch'
                    }}>
                      {step.description}
                    </p>

                    {/* Before / After */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '1rem'
                    }}>
                      <div style={{
                        padding: '1rem 1.125rem',
                        backgroundColor: 'oklch(0.975 0.005 30)',
                        borderRadius: '6px'
                      }}>
                        <p style={{
                          fontSize: '0.6875rem', fontWeight: 700,
                          letterSpacing: '0.10em', textTransform: 'uppercase',
                          color: 'oklch(0.55 0.060 30)',
                          marginBottom: '0.5rem'
                        }}>
                          {t('before_label')}
                        </p>
                        <p style={{
                          fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.6, margin: 0
                        }}>
                          {step.before}
                        </p>
                      </div>
                      <div style={{
                        padding: '1rem 1.125rem',
                        backgroundColor: 'oklch(0.97 0.015 120)',
                        borderRadius: '6px'
                      }}>
                        <p style={{
                          fontSize: '0.6875rem', fontWeight: 700,
                          letterSpacing: '0.10em', textTransform: 'uppercase',
                          color: 'var(--color-primary)',
                          marginBottom: '0.5rem'
                        }}>
                          {t('after_label')}
                        </p>
                        <p style={{
                          fontSize: '0.875rem', color: 'var(--color-ink)', lineHeight: 1.6, margin: 0
                        }}>
                          {step.after}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: 'var(--color-primary)', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Reveal>
            <h2 style={{
              fontFamily: 'var(--font-instrument-serif, Georgia, serif)',
              fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
              fontWeight: 400, color: 'white',
              letterSpacing: '-0.02em', marginBottom: '0.875rem',
              maxWidth: '36ch', lineHeight: 1.2
            }}>
              {t('final_cta.headline')}
            </h2>
            <p style={{
              fontSize: '1rem', color: 'oklch(0.78 0.018 118)',
              lineHeight: 1.65, marginBottom: '2rem', maxWidth: '44ch'
            }}>
              {t('final_cta.text')}
            </p>
            <Link href="/demo" style={{
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
