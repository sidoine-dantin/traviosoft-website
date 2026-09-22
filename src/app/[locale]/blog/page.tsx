import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { Reveal } from '@/components/ui/reveal';
import { buildMetadata } from '@/lib/seo';
import { getAllBlogPosts } from '@/lib/blog';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  return buildMetadata({ locale, path: '/blog', title: t('meta_title'), description: t('meta_description') });
}

export default async function BlogIndexPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  const posts = getAllBlogPosts(locale);

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
              maxWidth: '20ch', lineHeight: 1.15
            }}>
              {t('intro.headline')}
            </h1>
            <p style={{
              fontSize: '1.0625rem', color: 'oklch(0.78 0.018 118)',
              maxWidth: '44ch', lineHeight: 1.65
            }}>
              {t('intro.text')}
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--color-bg)', padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem' }}>
          {posts.length === 0 ? (
            <p style={{ color: 'var(--color-muted)', fontSize: '1rem' }}>{t('empty')}</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 60}>
                  <article style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '2.5rem' }}>
                    {post.date && (
                      <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginBottom: '0.5rem' }}>
                        {post.date}
                      </p>
                    )}
                    <h2 style={{
                      fontFamily: 'var(--font-display, Georgia, serif)',
                      fontSize: 'clamp(1.375rem, 2.6vw, 1.875rem)',
                      fontWeight: 400, color: 'var(--color-ink)',
                      letterSpacing: '-0.01em', marginBottom: '0.75rem', lineHeight: 1.25
                    }}>
                      <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {post.title}
                      </Link>
                    </h2>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '1rem', maxWidth: '68ch' }}>
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`} style={{
                      fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-primary)', textDecoration: 'none'
                    }}>
                      {t('read_more')} →
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
