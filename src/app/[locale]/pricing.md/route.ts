import { locales } from '@/content';
import { pricingMarkdown, markdownHeaders } from '@/lib/pricing-markdown';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

/** /<locale>/pricing.md: the pricing page in that language, as Markdown. */
export async function GET(_req: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return new Response(pricingMarkdown(locale), { headers: markdownHeaders });
}
