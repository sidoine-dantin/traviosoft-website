import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { Reveal } from '@/components/ui/reveal';
import { buildMetadata } from '@/lib/seo';
import { ProductShot, VideoSlot } from '@/components/ui/product-shot';
import { OriginSection } from '@/components/sections/credibility';
import { SHOTS } from '@/lib/site-config';

const PILLARS = [
  { key: 'p1', file: SHOTS.quoteBuilder },
  { key: 'p2', file: SHOTS.quotePdf },
  { key: 'p3', file: SHOTS.payments },
  { key: 'p4', file: SHOTS.suppliers }
] as const;

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  return buildMetadata({ locale, path: '', title: t('meta_title'), description: t('meta_description') });
}

export default function HomePage() {
  const t = useTranslations('home');
  const tm = useTranslations('media');

  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        backgroundColor: 'var(--color-primary)',
        paddingTop: 'clamp(7rem, 14vw, 10rem)',
        paddingBottom: 'clamp(4rem, 9vw, 7rem)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'200\' height=\'200\' filter=\'url(%23n)\' opacity=\'0.035\'/%3E%3C/svg%3E")',
          opacity: 0.6
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
          <div style={{ maxWidth: '54rem' }}>
            <Reveal>
              <h1 style={{
                fontFamily: 'var(--font-display, Georgia, serif)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                fontWeight: 400, color: 'white',
                lineHeight: 1.1, letterSpacing: '-0.02em',
                marginBottom: '1.5rem', textWrap: 'balance'
              }}>
                {t('hero.headline')}
              </h1>
            </Reveal>
            <Reveal delay={80}>
              <p style={{
                fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)',
                color: 'oklch(0.82 0.018 118)',
                lineHeight: 1.65, marginBottom: '2.5rem', maxWidth: '52ch'
              }}>
                {t('hero.subheadline')}
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <Link href="/demo" data-cta="book-demo" data-cta-location="home-hero" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.875rem 1.75rem', backgroundColor: 'white',
                  color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9375rem',
                  borderRadius: '6px', textDecoration: 'none', whiteSpace: 'nowrap'
                }}>
                  {t('hero.cta_primary')}
                </Link>
                <a href="#tour" data-cta="watch-tour" data-cta-location="home-hero" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.875rem 1.5rem', backgroundColor: 'transparent',
                  color: 'white', fontWeight: 500, fontSize: '0.9375rem',
                  border: '1.5px solid oklch(1 0 0 / 0.55)',
                  borderRadius: '6px', textDecoration: 'none', whiteSpace: 'nowrap'
                }}>
                  <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
                  {t('hero.cta_tour')}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div style={{ marginTop: 'clamp(3rem, 6vw, 4.5rem)' }}>
              <ProductShot
                file={SHOTS.dashboard}
                label={tm('screenshot', { subject: t('hero.shot') })}
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Pain points (the hook) ── */}
      <section style={{ backgroundColor: 'var(--color-bg)', padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Reveal>
            <h2 style={{
              fontFamily: 'var(--font-display, Georgia, serif)',
              fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
              fontWeight: 400, color: 'var(--color-ink)',
              marginBottom: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.01em'
            }}>
              {t('pain_points.title')}
            </h2>
          </Reveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)'
          }}>
            {(['item1', 'item2', 'item3'] as const).map((key) => (
              <Reveal key={key}>
                <div>
                  <span aria-hidden style={{
                    display: 'block', width: '28px', height: '2px',
                    backgroundColor: 'var(--color-accent)', marginBottom: '1.25rem'
                  }} />
                  <h3 style={{
                    fontSize: '1.125rem', fontWeight: 600,
                    color: 'var(--color-ink)', marginBottom: '0.75rem', lineHeight: 1.3
                  }}>
                    {t(`pain_points.${key}_title`)}
                  </h3>
                  <p style={{
                    fontSize: '0.9375rem', color: 'var(--color-muted)',
                    lineHeight: 1.7, maxWidth: '38ch'
                  }}>
                    {t(`pain_points.${key}_text`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── The 4 pillars, each with its screenshot ── */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Reveal>
            <h2 style={{
              fontFamily: 'var(--font-display, Georgia, serif)',
              fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
              fontWeight: 400, color: 'var(--color-ink)',
              marginBottom: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.01em'
            }}>
              {t('pillars.title')}
            </h2>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 7vw, 6rem)' }}>
            {PILLARS.map(({ key, file }, i) => (
              <div key={key} className={`feature-row${i % 2 ? ' feature-row--flip' : ''}`}>
                <Reveal>
                  <div>
                    <span className="section-rule" />
                    <h3 style={{
                      fontSize: 'clamp(1.15rem, 2vw, 1.35rem)', fontWeight: 600,
                      color: 'var(--color-ink)', marginBottom: '0.75rem', lineHeight: 1.3
                    }}>
                      {t(`pillars.${key}_title`)}
                    </h3>
                    <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.7, maxWidth: '46ch', margin: 0 }}>
                      {t(`pillars.${key}_text`)}
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <ProductShot file={file} label={tm('screenshot', { subject: t(`pillars.${key}_shot`) })} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product tour video (target of the hero's "watch the tour") ── */}
      <section id="tour" style={{ backgroundColor: 'var(--color-bg)', padding: 'clamp(4rem, 8vw, 7rem) 0', scrollMarginTop: '64px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Reveal>
            <div style={{ maxWidth: '48rem', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <h2 style={{
                fontFamily: 'var(--font-display, Georgia, serif)',
                fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
                fontWeight: 400, color: 'var(--color-ink)',
                marginBottom: '1rem', letterSpacing: '-0.01em'
              }}>
                {t('tour.title')}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.7, margin: 0 }}>
                {t('tour.text')}
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ maxWidth: '64rem' }}>
              <VideoSlot
                file={SHOTS.tourVideo}
                poster={SHOTS.tourPoster}
                label={tm('video', { subject: t('tour.video_subject') })}
                title={t('tour.video_title')}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── One connected flow (bridge to Product) ── */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ maxWidth: '56rem' }}>
            <Reveal>
              <h2 style={{
                fontFamily: 'var(--font-display, Georgia, serif)',
                fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
                fontWeight: 400, color: 'var(--color-ink)',
                marginBottom: '1.5rem', letterSpacing: '-0.01em'
              }}>
                {t('solution.title')}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div style={{
                fontFamily: 'var(--font-display, Georgia, serif)',
                fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
                color: 'var(--color-primary)', fontStyle: 'italic',
                lineHeight: 1.7, marginBottom: '1.5rem',
                padding: '1.25rem 1.5rem', backgroundColor: 'oklch(0.96 0.012 118)',
                borderRadius: '6px'
              }}>
                {t('solution.flow')}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p style={{
                fontSize: '1rem', color: 'var(--color-muted)',
                lineHeight: 1.7, marginBottom: '2rem', maxWidth: '58ch'
              }}>
                {t('solution.description')}
              </p>
              <Link href="/how-it-works" style={{
                fontSize: '0.9375rem', color: 'var(--color-primary)', fontWeight: 500,
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                borderBottom: '1.5px solid var(--color-primary)', paddingBottom: '1px'
              }}>
                {t('solution.cta')} →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Origin / credibility ── */}
      <OriginSection background="var(--color-bg)" />

      {/* ── Multilingual ── */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem', alignItems: 'center'
          }}>
            <Reveal>
              <h2 style={{
                fontFamily: 'var(--font-display, Georgia, serif)',
                fontSize: 'clamp(1.375rem, 2vw, 1.875rem)',
                fontWeight: 400, color: 'var(--color-ink)', letterSpacing: '-0.01em'
              }}>
                {t('multilang.title')}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                {t('multilang.text')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ backgroundColor: 'var(--color-primary)', padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Reveal>
            <div style={{ maxWidth: '42rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-display, Georgia, serif)',
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                fontWeight: 400, color: 'white', marginBottom: '1rem',
                letterSpacing: '-0.02em', lineHeight: 1.15
              }}>
                {t('final_cta.headline')}
              </h2>
              <p style={{
                fontSize: '1rem', color: 'oklch(0.78 0.018 118)',
                lineHeight: 1.65, marginBottom: '2rem', maxWidth: '44ch'
              }}>
                {t('final_cta.text')}
              </p>
              <Link href="/demo" data-cta="book-demo" data-cta-location="home-final" style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '0.875rem 1.75rem', backgroundColor: 'white',
                color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9375rem',
                borderRadius: '6px', textDecoration: 'none'
              }}>
                {t('final_cta.cta')}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
