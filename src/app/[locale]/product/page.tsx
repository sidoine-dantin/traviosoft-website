import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { Reveal } from '@/components/ui/reveal';
import { buildMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'product' });
  return buildMetadata({ locale, path: '/product', title: t('meta_title'), description: t('meta_description') });
}

const MODULE_KEYS = [
  'requests', 'quotes', 'orders', 'suppliers', 'catalog',
  'projects', 'payments', 'reports', 'ai', 'multilang'
] as const;

export default function ProductPage() {
  const t = useTranslations('product');

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
              fontWeight: 400,
              color: 'white',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              maxWidth: '28ch',
              lineHeight: 1.15,
              textWrap: 'balance'
            }}>
              {t('intro.headline')}
            </h1>
            <p style={{
              fontSize: '1.0625rem',
              color: 'oklch(0.78 0.018 118)',
              maxWidth: '52ch',
              lineHeight: 1.65,
              marginBottom: '2rem'
            }}>
              {t('intro.text')}
            </p>
            <Link href="/demo" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'white', color: 'var(--color-primary)',
              fontWeight: 600, fontSize: '0.9375rem',
              borderRadius: '6px', textDecoration: 'none'
            }}>
              {t('intro.cta')}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Modules */}
      <section style={{ backgroundColor: 'var(--color-bg)', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {MODULE_KEYS.map((key, i) => {
              const points = t.raw(`modules.${key}.points`) as string[];
              const isAlt = i % 2 === 1;
              return (
                <Reveal key={key} delay={0}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 'clamp(1.5rem, 4vw, 4rem)',
                    padding: 'clamp(2.5rem, 5vw, 4rem) 0',
                    borderTop: '1px solid var(--color-border)',
                    backgroundColor: isAlt ? 'var(--color-surface)' : 'transparent',
                    marginLeft: isAlt ? 'calc(-1.5rem)' : '0',
                    marginRight: isAlt ? 'calc(-1.5rem)' : '0',
                    paddingLeft: isAlt ? '1.5rem' : '0',
                    paddingRight: isAlt ? '1.5rem' : '0'
                  }}>
                    {/* Left: title + benefit */}
                    <div>
                      <h2 style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--color-ink)',
                        marginBottom: '0.75rem',
                        lineHeight: 1.25
                      }}>
                        {t(`modules.${key}.title`)}
                      </h2>
                      <p style={{
                        fontFamily: 'var(--font-instrument-serif, Georgia, serif)',
                        fontSize: '1.0625rem',
                        fontStyle: 'italic',
                        color: 'var(--color-primary)',
                        lineHeight: 1.55,
                        marginBottom: '1.25rem'
                      }}>
                        {t(`modules.${key}.benefit`)}
                      </p>
                      {'change' in (t.raw(`modules.${key}`) as Record<string, unknown>) && (
                        <div style={{
                          display: 'flex', gap: '0.625rem', alignItems: 'flex-start',
                          padding: '0.875rem 1rem',
                          backgroundColor: 'oklch(0.97 0.007 118)',
                          borderRadius: '6px'
                        }}>
                          <span style={{
                            color: 'var(--color-accent)', fontSize: '1rem', lineHeight: 1, flexShrink: 0, marginTop: '0.125rem'
                          }}>✓</span>
                          <p style={{
                            fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.6, margin: 0
                          }}>
                            {t(`modules.${key}.change`)}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Right: bullet points */}
                    <div>
                      {key === 'ai' && (
                        <div style={{
                          padding: '0.875rem 1rem',
                          backgroundColor: 'oklch(0.95 0.040 48 / 0.15)',
                          borderRadius: '6px',
                          marginBottom: '1rem',
                          fontSize: '0.875rem',
                          color: 'var(--color-ink)',
                          lineHeight: 1.6
                        }}>
                          <strong>{t('modules.ai.zero_write')}</strong>
                        </div>
                      )}
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {points.map((point, pi) => (
                          <li key={pi} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <span style={{
                              flexShrink: 0, width: '6px', height: '6px',
                              borderRadius: '50%', backgroundColor: 'var(--color-accent)',
                              marginTop: '0.5rem'
                            }} />
                            <span style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
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
              letterSpacing: '-0.02em', marginBottom: '1.5rem',
              maxWidth: '32ch', lineHeight: 1.2
            }}>
              {t('final_cta.headline')}
            </h2>
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
