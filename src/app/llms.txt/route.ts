import { getContent, locales } from '@/content';
import { baseUrl } from '@/lib/seo';
import { PRICES } from '@/content/prices';

export const dynamic = 'force-static';

/** llms.txt: a plain summary of the site for AI tools (https://llmstxt.org). */
export function GET() {
  const en = getContent('en');
  const lines: string[] = [
    '# Traviosoft',
    '',
    `> ${en.footer.tagline} Web management software for tailor-made travel agencies and DMCs. Two plans, billed yearly or monthly, VAT excluded: Classic from ${PRICES.classic.yearly} EUR a month and Premium from ${PRICES.premium.yearly} EUR a month, ${PRICES.usersIncluded} users included in both. Each agency has its own separate space, hosted in the EU. Site in Spanish, English and French.`,
    '',
    '## Key facts',
    ...en.home.facts.map(f => `- ${f.k}: ${f.v}`),
    '',
    '## Product (English)',
    ...(['sell', 'book', 'get-paid', 'setup'] as const).map(s => `- [${en.jobs[s].name}](${baseUrl}/en/${s}): ${en.jobs[s].metaDescription}`),
    `- [Pricing](${baseUrl}/en/pricing): ${en.pricing.metaDescription}`,
    `- [Example trip](${baseUrl}/en/example): ${en.example.metaDescription}`,
    `- [FAQ](${baseUrl}/en/faq): ${en.faqPage.metaDescription}`,
    ''
  ];
  for (const l of locales) {
    const c = getContent(l);
    if (!c.articles.length) continue;
    lines.push(`## Resources (${l})`);
    for (const a of c.articles) {
      const base = a.kind === 'compare' || a.kind === 'best' ? 'compare' : 'guides';
      lines.push(`- [${a.title}](${baseUrl}/${l}/${base}/${a.slug}): ${a.metaDescription}`);
    }
    lines.push(`- [${c.resources.glossaryTitle}](${baseUrl}/${l}/glossary): ${c.resources.glossaryMeta}`, '');
  }
  return new Response(lines.join('\n'), { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
