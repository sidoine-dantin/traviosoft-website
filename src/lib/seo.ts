import { LANG_TAG, type Locale } from '@/content/types';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';

export const baseUrl = 'https://traviosoft.com';
export const siteName = 'Traviosoft';

/** Date the site's pages last changed, for the sitemap. Bump it when page copy changes,
 *  so search engines can trust the dates (a new date on every build teaches them to ignore it). */
export const SITE_UPDATED = '2026-11-22';

/** Stable ids that tie the schema.org blocks of every page together. */
export const ORG_ID = `${baseUrl}/#organization`;
export const SITE_ID = `${baseUrl}/#website`;
export const SOFTWARE_ID = `${baseUrl}/#software`;

/** Traviosoft's own public profiles, for the Organization schema (sameAs). Add each one once it is live. */
export const PROFILES = ['https://www.linkedin.com/company/traviosoft'];

/** Search results cut titles at about 60 characters; past that, the brand is dropped (Google shows the site name anyway). */
export function fitTitle(title: string) {
  const suffix = ' | Traviosoft';
  return title.length > 60 && title.endsWith(suffix) ? title.slice(0, -suffix.length) : title;
}

/** Pages that exist in every locale, with the same path. */
export const pagePaths = [
  '',
  '/sell',
  '/book',
  '/get-paid',
  '/setup',
  '/ai-assistant',
  '/pricing',
  '/demo',
  '/switch',
  '/faq',
  '/about',
  '/glossary',
  '/legal/privacy',
  '/legal/terms',
  '/legal/notice',
  '/legal/app-privacy',
  '/legal/subprocessors'
] as const;

export function localizedUrl(locale: string, path: string) {
  return `${baseUrl}/${locale}${path}`;
}

type BuildMetadataArgs = {
  locale: string;
  path: string;
  title: string;
  description?: string;
  /** locale → path, for pages whose path differs per locale or that exist in some locales only */
  alternates?: Partial<Record<string, string>>;
};

export function buildMetadata({ locale, path, title, description, alternates }: BuildMetadataArgs): Metadata {
  const paths: Partial<Record<string, string>> =
    alternates ?? Object.fromEntries(routing.locales.map(l => [l, path]));
  const languages: Record<string, string> = {};
  for (const [l, p] of Object.entries(paths)) if (p !== undefined) languages[LANG_TAG[l as Locale] ?? l] = localizedUrl(l, p);
  const xDefault = paths[routing.defaultLocale] ?? paths[locale] ?? path;
  const url = localizedUrl(locale, path);
  title = fitTitle(title);
  const image = { url: `${baseUrl}/og/${locale}.png`, width: 1200, height: 630, alt: siteName };

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { ...languages, 'x-default': localizedUrl(paths[routing.defaultLocale] ? routing.defaultLocale : locale, xDefault) }
    },
    openGraph: { title, description, url, siteName, locale: (LANG_TAG[locale as Locale] ?? locale).replace('-', '_'), type: 'website', images: [image] },
    twitter: { card: 'summary_large_image', title, description, images: [image.url] }
  };
}

