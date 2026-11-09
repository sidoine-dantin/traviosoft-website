import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { FaqList, FaqSchema } from '@/components/site/faq';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const s = getContent(locale).switching;
  return buildMetadata({ locale, path: '/switch', title: s.metaTitle, description: s.metaDescription });
}

export default async function SwitchPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getContent(locale);
  const s = c.switching;
  return (
    <>
      <section className="wrap" style={{ paddingBlock: 'clamp(56px, 8vw, 100px) 40px' }}>
        <h1 className="h1" style={{ color: 'var(--green)', maxWidth: '15ch' }}>{s.title}</h1>
        <p className="lead muted" style={{ marginTop: 22 }}>{s.lead}</p>
      </section>
      <section className="on-cream2 band">
        <div className="wrap">
          <h2 className="h2" style={{ color: 'var(--green)', marginBottom: 36 }}>{s.timelineTitle}</h2>
          <ol className="timeline">
            {s.timeline.map(t => (
              <li key={t.title}><span className="mono" style={{ color: 'var(--orange-ink)' }}>{t.when}</span><h3 className="h3" style={{ margin: '10px 0 8px' }}>{t.title}</h3><p className="muted">{t.body}</p></li>
            ))}
          </ol>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <h2 className="h2" style={{ color: 'var(--green)', marginBottom: 28 }}>{s.importTitle}</h2>
          <div className="tbl-wrap">
            <table className="tbl stack">
              <thead><tr>{s.importHead.map(h => <th key={h}>{h}</th>)}</tr></thead>
              <tbody>{s.importRows.map(r => <tr key={r.what}><td data-label={s.importHead[0]}>{r.what}</td><td data-label={s.importHead[1]}>{r.from}</td><td data-label={s.importHead[2]}>{r.how}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="on-green band">
        <div className="narrow">
          <h2 className="h2">{s.seasonTitle}</h2>
          <div className="prose" style={{ marginTop: 22 }}>{s.seasonBody.map(p => <p key={p}>{p}</p>)}</div>
        </div>
      </section>
      <section className="band">
        <div className="narrow">
          <h2 className="h2" style={{ color: 'var(--green)', marginBottom: 28 }}>{c.common.faqTitle}</h2>
          <FaqList items={s.faq} />
          <FaqSchema items={s.faq} />
        </div>
      </section>
    </>
  );
}
