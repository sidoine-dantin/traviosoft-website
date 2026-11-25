import { pricingMarkdown, markdownHeaders } from '@/lib/pricing-markdown';

export const dynamic = 'force-static';

/** /pricing.md: the pricing page in English, as Markdown, at the address agents try first. */
export function GET() {
  return new Response(pricingMarkdown('en'), { headers: markdownHeaders });
}
