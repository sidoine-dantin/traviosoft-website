import { useTranslations, useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Reveal } from '@/components/ui/reveal';
import { buildMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'demo' });
  return buildMetadata({ locale, path: '/demo', title: t('meta_title'), description: t('meta_description') });
}

const CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3p4Mnj0Wbxuz0r2C4H4AB4vW9rLROoE4qc38eN8ZV4erG2NdmEo7XdtOhFBhBqcTfSubADwBQy?gv=true';

export default function DemoPage() {
  const t = useTranslations('demo');
  const locale = useLocale();
  const calendarSrc = `${CALENDAR_URL}&hl=${locale}`;
  const expectPoints = t.raw('what_to_expect.points') as string[];
  const fitYesPoints = t.raw('fit_yes.points') as string[];
  const fitNoPoints = t.raw('fit_no.points') as string[];
  const reassurancePoints = t.raw('reassurance.points') as string[];

  return (
    <>
      {/* Hero */}
      <section style={{
        backgroundColor: 'var(--color-primary)',
        paddingTop: 'clamp(7rem, 12vw, 9rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 5rem)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Reveal>
            <h1 style={{
              fontFamily: 'var(--font-display, Georgia, serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400, color: 'white',
              letterSpacing: '-0.02em', marginBottom: '1rem',
              maxWidth: '24ch', lineHeight: 1.15, textWrap: 'balance'
            }}>
              {t('hero.headline')}
            </h1>
            <p style={{
              fontSize: '1.0625rem', color: 'oklch(0.78 0.018 118)',
              maxWidth: '46ch', lineHeight: 1.65
            }}>
              {t('hero.subheadline')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Calendar embed */}
      <section style={{ backgroundColor: 'var(--color-bg)', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Reveal>
            <div style={{
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-surface)'
            }}>
              <iframe
                src={calendarSrc}
                width="100%"
                height="820"
                style={{ border: 'none', display: 'block', width: '100%', minHeight: '820px' }}
                title={t('final_cta.headline')}
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What to expect + fit */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 5rem)'
          }}>
            {/* What to expect */}
            <Reveal>
              <div>
                <span className="section-rule" />
                <h2 style={{
                  fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-ink)',
                  marginBottom: '1.25rem', lineHeight: 1.3
                }}>
                  {t('what_to_expect.title')}
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {expectPoints.map((point, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{
                        flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%',
                        backgroundColor: 'var(--color-primary)', marginTop: '0.55rem'
                      }} />
                      <span style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>{point}</span>
                    </li>
                  ))}
                </ul>
                <p style={{
                  fontFamily: 'var(--font-display, Georgia, serif)',
                  fontSize: '0.9375rem', fontStyle: 'italic',
                  color: 'var(--color-muted)', lineHeight: 1.65, margin: 0
                }}>
                  {t('what_to_expect.text')}
                </p>
              </div>
            </Reveal>

            {/* Fit */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <Reveal delay={80}>
                <div>
                  <h2 style={{
                    fontSize: '1rem', fontWeight: 700, color: 'var(--color-ink)',
                    marginBottom: '1rem', lineHeight: 1.3
                  }}>
                    {t('fit_yes.title')}
                  </h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {fitYesPoints.map((point, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                        <span style={{ flexShrink: 0, color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.875rem', marginTop: '0.1rem' }}>✓</span>
                        <span style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div style={{
                  padding: '1.125rem',
                  backgroundColor: 'oklch(0.97 0.005 118)',
                  borderRadius: '6px'
                }}>
                  <h2 style={{
                    fontSize: '1rem', fontWeight: 700, color: 'var(--color-muted)',
                    marginBottom: '0.875rem', lineHeight: 1.3
                  }}>
                    {t('fit_no.title')}
                  </h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {fitNoPoints.map((point, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                        <span style={{ flexShrink: 0, color: 'var(--color-muted)', fontSize: '0.875rem', marginTop: '0.1rem' }}>–</span>
                        <span style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section style={{ backgroundColor: 'var(--color-bg)', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Reveal>
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '1.5rem',
              alignItems: 'center'
            }}>
              <span style={{
                fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.10em',
                textTransform: 'uppercase', color: 'var(--color-muted)'
              }}>
                {t('reassurance.title')}
              </span>
              {reassurancePoints.map((point, i) => (
                <span key={i} style={{
                  display: 'flex', gap: '0.5rem', alignItems: 'center',
                  fontSize: '0.875rem', color: 'var(--color-muted)'
                }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>✓</span>
                  {point}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
