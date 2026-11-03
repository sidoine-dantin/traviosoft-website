import { getContent, locales } from '@/content';
import { baseUrl } from '@/lib/seo';

export const dynamic = 'force-static';

/** llms.txt: a plain summary of the site for AI tools (https://llmstxt.org). */
export function GET() {
  const en = getContent('en');
  const lines: string[] = [
    '# Traviosoft',
    '',
    `> ${en.footer.tagline} Web software for tailor-made travel agencies and DMCs of 1 to 15 people. From 190 EUR a month for 3 users and 250 EUR a month for 5 users, billed yearly, VAT excluded. Every feature in every plan. Each agency has its own database, hosted in the EU. Site in Spanish, English and French.`,
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
