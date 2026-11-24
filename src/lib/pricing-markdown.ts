import { getContent } from '@/content';
import type { CompareCell } from '@/content/types';
import { baseUrl, localizedUrl } from '@/lib/seo';

/**
 * The pricing page as Markdown, for AI tools and agents that read a page's text rather than
 * its layout (served at /pricing.md and /<locale>/pricing.md, linked from llms.txt). Built from
 * the same content and PRICES as the page, so the two can never disagree.
 */
export function pricingMarkdown(locale: string): string {
  const c = getContent(locale);
  const p = c.pricing;
  const cell = (v: CompareCell): string => {
    if (v === true) return p.yes;
    if (v === false) return p.no;
    if (typeof v === 'string') return v;
    return v.was ? `${v.text} (${p.monthly}${colon} ${v.was})` : v.text;
  };
  // French puts a space before a colon, as the page does
  const colon = locale === 'fr' ? ' :' : ':';
  const esc = (s: string) => s.replace(/\|/g, '\\|');
  const [a, b] = p.plans;
  const lines: string[] = [
    `# Traviosoft: ${p.title}`,
    '',
    `> ${c.footer.tagline}`,
    '',
    p.lead,
    '',
    p.yearlyNote,
    ''
  ];
  for (const plan of p.plans) {
    lines.push(
      `## ${plan.name}`,
      '',
      `- ${plan.users}`,
      `- ${p.yearly}${colon} ${plan.yearly} EUR (${plan.priceNote.yearly})`,
      `- ${p.monthly}${colon} ${plan.monthly} EUR (${plan.priceNote.monthly})`,
      ''
    );
  }
  lines.push(`## ${p.compareTitle}`, '');
  for (const s of p.compare) {
    lines.push(`### ${s.title}`, '', `| ${p.compareFeature} | ${a.name} | ${b.name} |`, '| --- | --- | --- |');
    for (const r of s.rows) lines.push(`| ${esc(r.f)} | ${esc(cell(r.classic))} | ${esc(cell(r.premium))} |`);
    lines.push('');
  }
  lines.push(...p.compareNote, '', `## ${c.common.faqTitle}`, '');
  for (const f of p.faq) lines.push(`### ${f.q}`, '', ...f.a.flatMap(x => [x, '']));
  lines.push(`- [${c.nav.pricing}](${localizedUrl(locale, '/pricing')})`, `- [${c.nav.demo}](${localizedUrl(locale, '/demo')})`, `- [llms.txt](${baseUrl}/llms.txt)`, '');
  return lines.join('\n');
}

export const markdownHeaders = { 'content-type': 'text/markdown; charset=utf-8' };
