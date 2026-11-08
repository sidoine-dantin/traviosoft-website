import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { JobView } from '@/components/site/job-view';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const j = getContent(locale).jobs['sell'];
  return buildMetadata({ locale, path: '/sell', title: j.metaTitle, description: j.metaDescription });
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <JobView c={getContent(locale)} slug="sell" />;
}
