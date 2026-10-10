import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/reveal';
import { ProductShot, MediaPlaceholder } from '@/components/ui/product-shot';
import { FOUNDER, TESTIMONIAL } from '@/lib/site-config';

const container = { maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' } as const;

const placeholderText = {
  color: 'oklch(0.42 0.010 118)',
  backgroundColor: 'oklch(0.94 0.004 118)',
  border: '1px dashed oklch(0.80 0.006 118)',
  borderRadius: '4px',
  padding: '0 0.375rem'
} as const;

/**
 * Founder story: photo, name and a short honest story. Photo and name come
 * from FOUNDER in site-config and show as placeholders until filled in.
 * A client testimonial sits underneath, hidden unless TESTIMONIAL.show is true.
 */
export function FounderSection({ background = 'var(--color-surface)' }: { background?: string }) {
  const t = useTranslations('founder');
  const tm = useTranslations('media');

  return (
    <section style={{ backgroundColor: background, padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
      <div style={container}>
        <div className="founder-grid">
          <Reveal>
            <div style={{ maxWidth: '18rem' }}>
              <ProductShot
                file={FOUNDER.photo}
                label={tm('photo', { subject: t('photo_subject') })}
                alt={FOUNDER.name || t('role_default')}
                ratio="4 / 5"
                style={{ boxShadow: 'none' }}
              />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div>
              <span className="section-rule" />
              <h2 style={{
                fontFamily: 'var(--font-display, Georgia, serif)',
                fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
                fontWeight: 400, color: 'var(--color-ink)',
                letterSpacing: '-0.01em', lineHeight: 1.2,
                marginBottom: '1.25rem', maxWidth: '26ch'
              }}>
                {t('title')}
              </h2>
              <p style={{
                fontSize: '1.0625rem', color: 'var(--color-ink)',
                lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: '60ch'
              }}>
                {t('story')}
              </p>
              <p style={{ fontSize: '0.9375rem', margin: 0 }}>
                {FOUNDER.name
                  ? <strong style={{ color: 'var(--color-ink)', fontWeight: 600 }}>{FOUNDER.name}</strong>
                  : <span style={placeholderText}>{t('name_placeholder')}</span>}
                <span style={{ color: 'var(--color-muted)' }}>, {FOUNDER.role || t('role_default')}</span>
              </p>

              <Testimonial />
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .founder-grid {
          display: grid;
          grid-template-columns: minmax(0, 18rem) minmax(0, 1fr);
          gap: clamp(2rem, 5vw, 4.5rem);
          align-items: start;
        }
        @media (max-width: 760px) {
          .founder-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

/** Renders nothing unless TESTIMONIAL.show is true (see site-config). */
function Testimonial() {
  const t = useTranslations('founder');
  if (!TESTIMONIAL.show) return null;

  if (!TESTIMONIAL.quote) {
    return (
      <div style={{ marginTop: '2rem' }}>
        <MediaPlaceholder label={t('testimonial_placeholder')} file="(site-config TESTIMONIAL)" ratio="4 / 1" />
      </div>
    );
  }

  const by = [TESTIMONIAL.author, TESTIMONIAL.role, TESTIMONIAL.agency].filter(Boolean).join(', ');
  return (
    <figure style={{ margin: '2rem 0 0', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
      <blockquote style={{
        margin: 0,
        fontFamily: 'var(--font-display, Georgia, serif)',
        fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', fontStyle: 'italic',
        color: 'var(--color-primary)', lineHeight: 1.5, maxWidth: '52ch'
      }}>
        “{TESTIMONIAL.quote}”
      </blockquote>
      {by && (
        <figcaption style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-muted)' }}>
          {by}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * "Your data": only claims verified in the app's code. Anything not yet
 * confirmed by the owner (hosting location, backups, export terms) is listed
 * as a visible TODO marker in messages (your_data.todo) and must be replaced
 * or removed before this goes live.
 */
export function YourDataSection({ background = 'var(--color-bg)' }: { background?: string }) {
  const t = useTranslations('your_data');
  const items = t.raw('items') as { title: string; text: string }[];
  const todos = t.raw('todo') as string[];

  return (
    <section style={{ backgroundColor: background, padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
      <div style={container}>
        <Reveal>
          <div style={{ maxWidth: '48rem', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <span className="section-rule" />
            <h2 style={{
              fontFamily: 'var(--font-display, Georgia, serif)',
              fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
              fontWeight: 400, color: 'var(--color-ink)',
              letterSpacing: '-0.01em', marginBottom: '0.75rem', lineHeight: 1.25
            }}>
              {t('title')}
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.7, margin: 0 }}>
              {t('intro')}
            </p>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2.5rem)'
        }}>
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.65, margin: 0, maxWidth: '40ch' }}>
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* TODO(owner): replace each marker with a verified fact, or delete it. */}
        {todos.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0 0', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {todos.map((todo, i) => (
              <li key={i} style={{ ...placeholderText, fontSize: '0.8125rem', padding: '0.25rem 0.625rem' }}>
                {todo}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
