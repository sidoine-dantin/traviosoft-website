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
    `> ${en.footer.tagline} Two plans, billed yearly or monthly, VAT excluded: Classic from ${PRICES.classic.yearly} EUR a month and Premium from ${PRICES.premium.yearly} EUR a month, ${PRICES.usersIncluded} users included in both. Each agency has its own separate space, hosted in the EU. Site in Spanish, English, French, Italian and Portuguese.`,
    '',
    '## Key facts',
    ...en.home.facts.map(f => `- ${f.k}: ${f.v}`),
    '',
    '## Product (English)',
    ...(['sell', 'book', 'get-paid', 'setup'] as const).map(s => `- [${en.jobs[s].name}](${baseUrl}/en/${s}): ${en.jobs[s].metaDescription}`),
    `- [Pricing](${baseUrl}/en/pricing): ${en.pricing.metaDescription}`,
    `- [Pricing in Markdown](${baseUrl}/pricing.md): plans, prices, the full plan comparison and pricing questions as plain text. Other languages: ${locales.map(l => `${baseUrl}/${l}/pricing.md`).join(', ')}`,
    `- [FAQ](${baseUrl}/en/faq): ${en.faqPage.metaDescription}`,
    `- [About](${baseUrl}/en/about): ${en.about.metaDescription}`,
    `- [Book a demo](${baseUrl}/en/demo): ${en.demo.metaDescription}`,
    '',
    '## Other languages',
    ...locales.filter(l => l !== 'en').map(l => `- ${baseUrl}/${l}`),
    `- Sitemap: ${baseUrl}/sitemap.xml`,
    '',
    // The FAQ answers in full: the questions people ask an AI assistant about a product like this one.
    '## Questions and answers',
    ...en.faqPage.groups.flatMap(g => g.items.flatMap(f => [`### ${f.q}`, f.a.join(' '), ''])),
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
