import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';

export const baseUrl = 'https://traviosoft.com';
export const siteName = 'Traviosoft';

/** Pages that exist in every locale, with the same path. */
export const pagePaths = [
  '',
  '/sell',
  '/book',
  '/get-paid',
  '/setup',
  '/pricing',
  '/example/group',
  '/example/safari',
  '/example',
  '/demo',
  '/switch',
  '/faq',
  '/about',
  '/resources',
  '/glossary',
  '/legal/privacy',
  '/legal/terms',
  '/legal/notice'
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
  for (const [l, p] of Object.entries(paths)) if (p !== undefined) languages[l] = localizedUrl(l, p);
  const xDefault = paths[routing.defaultLocale] ?? paths[locale] ?? path;
  const url = localizedUrl(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { ...languages, 'x-default': localizedUrl(paths[routing.defaultLocale] ? routing.defaultLocale : locale, xDefault) }
    },
    openGraph: { title, description, url, siteName, locale, type: 'website' },
    twitter: { card: 'summary_large_image', title, description }
  };
}

