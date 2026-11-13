import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { ExampleTripView } from '@/components/site/example-trip';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const e = getContent(locale).example;
  return buildMetadata({ locale, path: '/example', title: e.metaTitle, description: e.metaDescription });
}

export default async function ExamplePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getContent(locale);
  return <ExampleTripView c={c} tripId={c.example.trips[0].id} />;
}
