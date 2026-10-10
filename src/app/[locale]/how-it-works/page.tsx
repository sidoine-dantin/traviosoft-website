import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { Reveal } from '@/components/ui/reveal';
import { buildMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'how_it_works' });
  return buildMetadata({ locale, path: '/how-it-works', title: t('meta_title'), description: t('meta_description') });
}

type Step = { name: string; title: string; description: string; before: string; after: string };

/** The journey of one client file, every step on one page (content/{lang}/how-it-works.md). */
export default function HowItWorksPage() {
  const t = useTranslations('how_it_works');
  const steps = t.raw('steps') as Step[];

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
              fontWeight: 400, color: 'white', letterSpacing: '-0.02em',
              marginBottom: '1rem', maxWidth: '24ch', lineHeight: 1.15, textWrap: 'balance'
            }}>
              {t('intro.headline')}
            </h1>
            <p style={{
              fontSize: '1.0625rem', color: 'oklch(0.78 0.018 118)',
              maxWidth: '56ch', lineHeight: 1.65
            }}>
              {t('intro.text')}
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--color-bg)', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, maxWidth: '60rem' }}>
            {steps.map((step, i) => (
              <li key={i} style={{
                paddingTop: i === 0 ? 0 : 'clamp(2.5rem, 5vw, 3.5rem)',
                paddingBottom: 'clamp(2.5rem, 5vw, 3.5rem)',
                borderBottom: i < steps.length - 1 ? '1px solid var(--color-border)' : 'none'
              }}>
                <Reveal>
                  <span className="section-rule" />
                  <h2 style={{
                    fontFamily: 'var(--font-display, Georgia, serif)',
                    fontSize: 'clamp(1.5rem, 2.6vw, 2.125rem)',
                    fontWeight: 400, color: 'var(--color-ink)',
                    letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: '1rem'
                  }}>
                    {step.title}
                  </h2>
                  <p style={{ fontSize: '1.0625rem', color: 'var(--color-ink)', lineHeight: 1.7, marginBottom: '1.75rem', maxWidth: '62ch' }}>
                    {step.description}
                  </p>
                  <div className="hiw-ba">
                    <div className="hiw-ba__card hiw-ba__card--before">
                      <p className="hiw-ba__label">{t('before_label')}</p>
                      <p className="hiw-ba__text">{step.before}</p>
                    </div>
                    <div className="hiw-ba__card hiw-ba__card--after">
                      <p className="hiw-ba__label">{t('after_label')}</p>
                      <p className="hiw-ba__text">{step.after}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--color-primary)', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Reveal>
            <h2 style={{
              fontFamily: 'var(--font-display, Georgia, serif)',
              fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
              fontWeight: 400, color: 'white', letterSpacing: '-0.02em',
              marginBottom: '0.875rem', maxWidth: '28ch', lineHeight: 1.2
            }}>
              {t('final_cta.headline')}
            </h2>
            <p style={{
              fontSize: '1rem', color: 'oklch(0.78 0.018 118)',
              lineHeight: 1.65, marginBottom: '2rem', maxWidth: '44ch'
            }}>
              {t('final_cta.text')}
            </p>
            <Link href="/demo" data-cta="book-demo" data-cta-location="how-it-works-final" style={{
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

      <style>{`
        .hiw-ba {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1rem;
        }
        .hiw-ba__card { padding: 1.25rem 1.375rem; border-radius: 10px; }
        .hiw-ba__card--before { background-color: oklch(0.945 0.028 40); border: 1px solid oklch(0.90 0.040 40); }
        .hiw-ba__card--after { background-color: oklch(0.935 0.045 132); border: 1px solid oklch(0.88 0.060 132); }
        .hiw-ba__label {
          font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.10em;
          text-transform: uppercase; margin-bottom: 0.5rem;
        }
        .hiw-ba__card--before .hiw-ba__label { color: oklch(0.48 0.110 38); }
        .hiw-ba__card--after .hiw-ba__label { color: var(--color-primary); }
        .hiw-ba__text { font-size: 0.9375rem; line-height: 1.6; margin: 0; }
        .hiw-ba__card--before .hiw-ba__text { color: oklch(0.36 0.040 38); }
        .hiw-ba__card--after .hiw-ba__text { color: oklch(0.26 0.060 132); }
      `}</style>
    </>
  );
}
