import { Link } from '@/i18n/navigation';
import type { Article, ArticleBlock, SiteContent } from '@/content/types';
import { FaqList, FaqSchema } from './faq';
import { JsonLd } from './json-ld';
import { baseUrl } from '@/lib/seo';

/** Inline [label](/path) links and **bold** inside article text. */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) => {
        const m = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (m) return m[2].startsWith('/') ? <Link key={i} href={m[2]}>{m[1]}</Link> : <a key={i} href={m[2]} rel="noopener">{m[1]}</a>;
        const b = p.match(/^\*\*([^*]+)\*\*$/);
        if (b) return <strong key={i}>{b[1]}</strong>;
        return p;
      })}
    </>
  );
}

function Block({ b }: { b: ArticleBlock }) {
  switch (b.type) {
    case 'h2': return <h2 id={b.id}>{b.text}</h2>;
    case 'h3': return <h3>{b.text}</h3>;
    case 'p': return <p><Inline text={b.text} /></p>;
    case 'list': return b.ordered
      ? <ol>{b.items.map(i => <li key={i}><Inline text={i} /></li>)}</ol>
      : <ul>{b.items.map(i => <li key={i}><Inline text={i} /></li>)}</ul>;
    case 'callout': return <div className="callout"><Inline text={b.text} /></div>;
    case 'table': return (
      <div className="tbl-wrap" style={{ marginBlock: 24 }}>
        <table className="tbl stack">
          <thead><tr>{b.head.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
          <tbody>{b.rows.map((r, i) => (
            <tr key={i} className={b.usRow === i ? 'us' : undefined}>{r.map((cell, j) => <td key={j} data-label={b.head[j]}><Inline text={cell} /></td>)}</tr>
          ))}</tbody>
        </table>
      </div>
    );
    case 'faq': return <div style={{ marginTop: 16 }}><FaqList items={b.items} /><FaqSchema items={b.items} /></div>;
  }
}

export function ArticleView({ c, a, path }: { c: SiteContent; a: Article; path: string }) {
  const toc = a.blocks.filter((b): b is Extract<ArticleBlock, { type: 'h2' }> => b.type === 'h2' && !!b.id);
  const date = new Date(a.updated + 'T12:00:00Z').toLocaleDateString(c.locale, { year: 'numeric', month: 'long', day: 'numeric' });
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.metaDescription,
    inLanguage: c.locale,
    dateModified: a.updated,
    datePublished: a.updated,
    mainEntityOfPage: `${baseUrl}/${c.locale}${path}`,
    author: { '@type': 'Organization', name: 'Traviosoft', url: baseUrl },
    publisher: { '@type': 'Organization', name: 'Traviosoft', url: baseUrl }
  };
  return (
    <article>
      <JsonLd data={schema} />
      <header className="narrow article-head">
        <p className="mono"><Link href="/resources" className="back-link">← {c.common.backToResources}</Link></p>
        <h1 className="h1" style={{ marginTop: 20 }}>{a.title}</h1>
        <p className="lead muted" style={{ marginTop: 20, maxWidth: '60ch' }}>{a.lead}</p>
        <p className="updated">{c.common.updated}: <time dateTime={a.updated}>{date}</time></p>
      </header>
      <div className="narrow prose" style={{ paddingBottom: 'clamp(64px, 8vw, 110px)' }}>
        {toc.length > 2 && (
          <nav className="toc" aria-label={c.common.onThisPage}>
            <span className="lbl muted">{c.common.onThisPage}</span>
            <ol>{toc.map(t => <li key={t.id}><a href={`#${t.id}`}>{t.text}</a></li>)}</ol>
          </nav>
        )}
        {a.blocks.map((b, i) => <Block key={i} b={b} />)}
      </div>
    </article>
  );
}
