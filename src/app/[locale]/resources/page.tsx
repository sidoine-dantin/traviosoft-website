import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const r = getContent(locale).resources;
  return buildMetadata({ locale, path: '/resources', title: r.metaTitle, description: r.metaDescription });
}

function hrefFor(kind: string, slug: string) {
  return kind === 'compare' || kind === 'best' ? `/compare/${slug}` : `/guides/${slug}`;
}

export default async function ResourcesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getContent(locale);
  const r = c.resources;
  return (
    <>
      <section className="wrap" style={{ paddingBlock: 'clamp(56px, 8vw, 100px) 24px' }}>
        <h1 className="h1" style={{ color: 'var(--green)' }}>{r.title}</h1>
        <p className="lead muted" style={{ marginTop: 22 }}>{r.lead}</p>
      </section>
      {r.groups.map((g, i) => {
        const kinds = g.kind === 'guide' ? ['guide', 'spain'] : [g.kind];
        const items = c.articles.filter(a => kinds.includes(a.kind));
        if (g.kind !== 'glossary' && g.kind !== 'example' && items.length === 0) return null;
        return (
          <section key={g.kind} id={g.kind} className={`${i % 2 ? 'on-cream' : 'on-cream2'} band-sm`}>
            <div className="wrap">
              <h2 className="h2" style={{ color: 'var(--green)' }}>{g.title}</h2>
              <p className="muted" style={{ marginTop: 10, maxWidth: '60ch' }}>{g.body}</p>
              <div className="grid-3" style={{ marginTop: 28 }}>
                {g.kind === 'glossary' && (
                  <Link className="card" href="/glossary"><b className="h3">{r.glossaryTitle}</b><span className="muted">{r.glossaryLead}</span><span className="more">{c.common.readMore} →</span></Link>
                )}
                {g.kind === 'example' && (
                  <Link className="card" href="/example"><b className="h3">{c.example.trip.name}</b><span className="muted">{c.example.lead}</span><span className="more">{c.common.readMore} →</span></Link>
                )}
                {items.map(a => (
                  <Link key={a.key} className="card" href={hrefFor(a.kind, a.slug)}>
                    <b className="h3">{a.title}</b>
                    <span className="muted">{a.card}</span>
                    <span className="more">{c.common.readMore} →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
