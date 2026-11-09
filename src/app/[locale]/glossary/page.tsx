import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/site/json-ld';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const r = getContent(locale).resources;
  return buildMetadata({ locale, path: '/glossary', title: `${r.glossaryTitle} | Traviosoft`, description: r.glossaryMeta });
}

export default async function GlossaryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getContent(locale);
  const terms = [...c.glossary].sort((a, b) => a.term.localeCompare(b.term, locale));
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: c.resources.glossaryTitle,
    inLanguage: locale,
    hasDefinedTerm: terms.map(t => ({ '@type': 'DefinedTerm', name: t.term, description: t.def }))
  };
  return (
    <>
      <JsonLd data={schema} />
      <header className="narrow article-head">
        <p className="mono"><Link href="/resources" className="back-link">← {c.common.backToResources}</Link></p>
        <h1 className="h1" style={{ marginTop: 20 }}>{c.resources.glossaryTitle}</h1>
        <p className="lead muted" style={{ marginTop: 20 }}>{c.resources.glossaryLead}</p>
        <ul className="chapters">{terms.map(t => <li key={t.id}><a href={`#${t.id}`}>{t.term}</a></li>)}</ul>
      </header>
      <dl className="narrow glossary" style={{ paddingBottom: 'clamp(64px, 8vw, 110px)' }}>
        {terms.map(t => (
          <div key={t.id}><dt id={t.id}>{t.term}</dt><dd>{t.def}</dd></div>
        ))}
      </dl>
    </>
  );
}
