import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { baseUrl, pagePaths } from '@/lib/seo';
import { getContent, articleAlternates, locales } from '@/content';

const priority: Record<string, number> = {
  '': 1, '/sell': 0.9, '/book': 0.9, '/get-paid': 0.9, '/setup': 0.8, '/pricing': 0.9,
  '/example': 0.7, '/example/group': 0.6, '/example/safari': 0.6, '/demo': 0.7, '/switch': 0.6, '/faq': 0.6, '/about': 0.5,
  '/resources': 0.6, '/glossary': 0.6
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = pagePaths.map(path =>
    routing.locales.map(locale => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified,
      changeFrequency: (path.startsWith('/legal') ? 'yearly' : 'monthly') as 'yearly' | 'monthly',
      priority: priority[path] ?? 0.3,
      alternates: { languages: Object.fromEntries(routing.locales.map(l => [l, `${baseUrl}/${l}${path}`])) }
    }))
  ).flat();

  const articles = locales.flatMap(locale =>
    getContent(locale).articles.map(a => {
      const base = a.kind === 'compare' || a.kind === 'best' ? '/compare/' : '/guides/';
      const alts = articleAlternates(a.key);
      return {
        url: `${baseUrl}/${locale}${base}${a.slug}`,
        lastModified: new Date(a.updated),
        changeFrequency: 'monthly' as const,
        priority: a.kind === 'best' || a.kind === 'spain' ? 0.7 : 0.6,
        alternates: { languages: Object.fromEntries(Object.entries(alts).map(([l, s]) => [l, `${baseUrl}/${l}${base}${s}`])) }
      };
    })
  );
  return [...pages, ...articles];
}
