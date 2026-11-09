import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { FaqList, FaqSchema } from '@/components/site/faq';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const d = getContent(locale).demo;
  return buildMetadata({ locale, path: '/demo', title: d.metaTitle, description: d.metaDescription });
}

export default async function DemoPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getContent(locale);
  const d = c.demo;
  return (
    <>
      <section className="wrap" style={{ paddingBlock: 'clamp(56px, 8vw, 100px) 40px' }}>
        <h1 className="h1" style={{ color: 'var(--green)', maxWidth: '14ch' }}>{d.title}</h1>
        <p className="lead muted" style={{ marginTop: 22 }}>{d.lead}</p>
      </section>
      <section className="wrap grid-2" style={{ gap: 'clamp(32px, 6vw, 96px)', alignItems: 'start', paddingBottom: 'clamp(64px, 8vw, 110px)' }}>
        <div>
          <h2 className="h3" style={{ color: 'var(--green)', marginBottom: 8 }}>{d.agendaTitle}</h2>
          <ol className="agenda">
            {d.agenda.map(a => (
              <li key={a.title}>
                <span className="mins num">{a.mins}<span style={{ fontSize: 16, marginLeft: 4 }}>min</span></span>
                <div><b style={{ fontSize: 19 }}>{a.title}</b><p className="muted" style={{ marginTop: 6 }}>{a.body}</p></div>
              </li>
            ))}
          </ol>
        </div>
        <div style={{ display: 'grid', gap: 20 }}>
          <div className="card" style={{ background: 'var(--green)', color: 'var(--cream)', borderColor: 'var(--green)' }}>
            <h2 className="h3">{d.bookTitle}</h2>
            <p style={{ opacity: 0.9 }}>{d.bookBody}</p>
            <p style={{ marginTop: 8 }}><span className="lbl" style={{ opacity: 0.7 }}>{d.emailLabel}</span><br />
              <a href={`mailto:${d.email}`} style={{ display: 'inline-flex', alignItems: 'center', minHeight: 44, fontSize: 24, fontWeight: 800, color: 'var(--yellow)', overflowWrap: 'anywhere' }}>{d.email}</a></p>
          </div>
          <div className="card">
            <h2 className="h3" style={{ color: 'var(--green)' }}>{d.bringTitle}</h2>
            <ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 6 }}>{d.bring.map(b => <li key={b}>{b}</li>)}</ul>
          </div>
          <div className="card">
            <h2 className="h3" style={{ color: 'var(--green)' }}>{d.afterTitle}</h2>
            <ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 6 }}>{d.after.map(b => <li key={b}>{b}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="on-cream2 band">
        <div className="narrow">
          <h2 className="h2" style={{ color: 'var(--green)', marginBottom: 28 }}>{c.common.faqTitle}</h2>
          <FaqList items={d.faq} />
          <FaqSchema items={d.faq} />
        </div>
      </section>
    </>
  );
}
