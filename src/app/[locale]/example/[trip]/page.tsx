import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getContent, locales } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { ExampleTripView } from '@/components/site/example-trip';

type Props = { params: Promise<{ locale: string; trip: string }> };

/** The first trip lives at /example; the others at /example/<id>. */
export function generateStaticParams() {
  return locales.flatMap(locale =>
    getContent(locale).example.trips.slice(1).map(t => ({ locale, trip: t.id }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, trip } = await params;
  const e = getContent(locale).example;
  const t = e.trips.find(x => x.id === trip);
  if (!t) return {};
  return buildMetadata({ locale, path: `/example/${t.id}`, title: `${e.title.replace(/\.$/, '')}: ${t.name} | Traviosoft`, description: e.metaDescription });
}

export default async function ExampleTripPage({ params }: Props) {
  const { locale, trip } = await params;
  setRequestLocale(locale);
  const c = getContent(locale);
  const t = c.example.trips.slice(1).find(x => x.id === trip);
  if (!t) notFound();
  return <ExampleTripView c={c} tripId={t.id} />;
}
