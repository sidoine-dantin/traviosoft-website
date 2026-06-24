import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { baseUrl, pagePaths } from '@/lib/seo';

const priorityByPath: Record<string, number> = {
  '': 1,
  '/demo': 0.9,
  '/product': 0.8,
  '/pricing': 0.8,
  '/about': 0.6,
  '/faq': 0.6,
  '/legal/privacy': 0.3,
  '/legal/terms': 0.3,
  '/legal/notice': 0.3
};

const changeFrequencyByPath: Record<string, MetadataRoute.Sitemap[number]['changeFrequency']> = {
  '': 'weekly',
  '/legal/privacy': 'yearly',
  '/legal/terms': 'yearly',
  '/legal/notice': 'yearly'
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pagePaths.flatMap(path =>
    routing.locales.map(locale => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified,
      changeFrequency: changeFrequencyByPath[path] ?? 'monthly',
      priority: priorityByPath[path] ?? 0.5,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map(l => [l, `${baseUrl}/${l}${path}`])
        )
      }
    }))
  );
}
