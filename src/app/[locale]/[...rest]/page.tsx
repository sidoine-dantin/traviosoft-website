import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import NotFound from '../not-found';

/*
 * The site's 404 page, built once per language as /<locale>/404.html. The Worker
 * (worker/index.ts) sends it, with a 404 status, for any address that has no page.
 */
export const dynamicParams = false;
export const metadata: Metadata = { robots: { index: false, follow: false } };

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale, rest: ['404'] }));
}

type Props = { params: Promise<{ locale: string }> };

export default async function NotFoundPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <NotFound />;
}
