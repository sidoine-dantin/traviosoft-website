import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getContent, findArticle, articleAlternates, locales } from '@/content';
import type { ArticleKind } from '@/content/types';
import { buildMetadata } from '@/lib/seo';
import { ArticleView } from '@/components/site/article-view';

const KINDS: ArticleKind[] = ['guide', 'spain'];
type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap(locale =>
    getContent(locale).articles.filter(a => KINDS.includes(a.kind)).map(a => ({ locale, slug: a.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const a = findArticle(locale, KINDS, slug);
  if (!a) return {};
  const alts = Object.fromEntries(Object.entries(articleAlternates(a.key)).map(([l, s]) => [l, `/guides/${s}`]));
  return buildMetadata({ locale, path: `/guides/${slug}`, title: a.metaTitle, description: a.metaDescription, alternates: alts });
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const a = findArticle(locale, KINDS, slug);
  if (!a) notFound();
  return <ArticleView c={getContent(locale)} a={a} path={`/guides/${slug}`} />;
}
