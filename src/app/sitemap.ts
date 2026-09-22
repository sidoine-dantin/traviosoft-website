import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { baseUrl, pagePaths } from '@/lib/seo';
import { getAllBlogSlugs } from '@/lib/blog';

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

  const staticEntries = pagePaths.flatMap(path =>
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

  const blogEntries = routing.locales.flatMap(locale =>
    getAllBlogSlugs(locale).map(slug => ({
      url: `${baseUrl}/${locale}/blog/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6
    }))
  );

  return [...staticEntries, ...blogEntries];
}
