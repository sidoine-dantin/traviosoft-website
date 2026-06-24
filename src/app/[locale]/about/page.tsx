import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { Reveal } from '@/components/ui/reveal';
import { buildMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return buildMetadata({ locale, path: '/about', title: t('meta_title'), description: t('meta_description') });
}

const SECTIONS = ['story', 'philosophy', 'support'] as const;

export default function AboutPage() {
  const t = useTranslations('about');

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
              maxWidth: '28ch', lineHeight: 1.15, textWrap: 'balance'
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

      <section style={{ backgroundColor: 'var(--color-bg)', padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ maxWidth: '42rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {SECTIONS.map((key, i) => (
              <Reveal key={key} delay={i * 60}>
                <div style={{
                  paddingTop: 'clamp(2.5rem, 5vw, 3.5rem)',
                  paddingBottom: 'clamp(2.5rem, 5vw, 3.5rem)',
                  borderTop: '1px solid var(--color-border)'
                }}>
                  <h2 style={{
                    fontSize: '1.125rem', fontWeight: 700,
                    color: 'var(--color-ink)', marginBottom: '0.875rem', lineHeight: 1.3
                  }}>
                    {t(`${key}.title`)}
                  </h2>
                  <p style={{
                    fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.75, margin: 0
                  }}>
                    {t(`${key}.text`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
              lineHeight: 1.65, marginBottom: '2rem', maxWidth: '40ch'
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
