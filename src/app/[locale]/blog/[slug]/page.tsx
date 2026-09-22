import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { buildMetadata, baseUrl, siteName } from '@/lib/seo';
import { getAllBlogSlugs, getBlogPost } from '@/lib/blog';

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    getAllBlogSlugs(locale).map(slug => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(locale, slug);
  if (!post) return {};
  return buildMetadata({
    locale,
    path: `/blog/${slug}`,
    title: `${post.title} - ${siteName}`,
    description: post.description
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getBlogPost(locale, slug);
  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: 'blog' });
  const url = `${baseUrl}/${locale}/blog/${slug}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: locale,
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: siteName },
    publisher: { '@type': 'Organization', name: siteName, url: baseUrl }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div style={{ paddingTop: 'clamp(6rem, 12vw, 8rem)', paddingBottom: 'clamp(4rem, 8vw, 6rem)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Link href="/blog" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
            fontSize: '0.875rem', color: 'var(--color-muted)',
            textDecoration: 'none', marginBottom: '2.5rem'
          }}>
            ← {t('back_to_blog')}
          </Link>

          <article>
            {post.date && (
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginBottom: '0.75rem' }}>
                {post.date}
              </p>
            )}
            <h1 style={{
              fontFamily: 'var(--font-display, Georgia, serif)',
              fontSize: 'clamp(1.75rem, 3.4vw, 2.75rem)',
              fontWeight: 400, color: 'var(--color-ink)',
              letterSpacing: '-0.01em', marginBottom: '2rem', lineHeight: 1.2
            }}>
              {post.title}
            </h1>

            <div className="blog-article" dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </div>
      </div>
    </>
  );
}
