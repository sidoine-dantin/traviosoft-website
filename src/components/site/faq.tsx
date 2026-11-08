import type { Faq } from '@/content/types';

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="faq">
      {items.map((f, i) => (
        <details key={i}>
          <summary>{f.q}</summary>
          <div className="a">{f.a.map((p, j) => <p key={j}>{p}</p>)}</div>
        </details>
      ))}
    </div>
  );
}

/** FAQPage schema for search engines and AI answers. */
export function FaqSchema({ items }: { items: Faq[] }) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a.join(' ') }
    }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
