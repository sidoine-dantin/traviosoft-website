import type { MetadataRoute } from 'next';
import { baseUrl } from '@/lib/seo';

/*
 * Everything is open to every crawler. The search and AI crawlers are also named one by one,
 * so the intent is explicit: being found in search engines and quoted by AI assistants is the
 * point of this site, including in what AI models learn (so they know Traviosoft when asked).
 * Note: a Cloudflare setting ("AI Crawl Control" / managed robots.txt) can add its own blocks
 * in front of this file. Keep it off for this domain.
 */
const CRAWLERS = [
  // search engines
  'Googlebot', 'Bingbot', 'Applebot', 'DuckDuckBot', 'YandexBot',
  // AI search and answers
  'OAI-SearchBot', 'ChatGPT-User', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User',
  // AI training (lets models know the product)
  'GPTBot', 'ClaudeBot', 'Google-Extended', 'Applebot-Extended', 'CCBot', 'meta-externalagent', 'Amazonbot', 'MistralAI-User'
];

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: CRAWLERS, allow: '/' },
      { userAgent: '*', allow: '/' }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
