import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';

export const baseUrl = 'https://traviosoft.com';

export const siteName = 'Traviosoft';

export const pagePaths = [
  '',
  '/product',
  '/pricing',
  '/about',
  '/demo',
  '/faq',
  '/legal/privacy',
  '/legal/terms',
  '/legal/notice'
] as const;

function localizedUrl(locale: string, path: string) {
  return `${baseUrl}/${locale}${path}`;
}

type BuildMetadataArgs = {
  locale: string;
  path: string;
  title: string;
  description?: string;
};

export function buildMetadata({ locale, path, title, description }: BuildMetadataArgs): Metadata {
  const languages = Object.fromEntries(
    routing.locales.map(l => [l, localizedUrl(l, path)])
  );
  const url = localizedUrl(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...languages,
        'x-default': localizedUrl(routing.defaultLocale, path)
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}
