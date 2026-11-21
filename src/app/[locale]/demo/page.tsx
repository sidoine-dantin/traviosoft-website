import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { FaqList, FaqSchema } from '@/components/site/faq';
import { BookDemo } from '@/components/site/book-demo';

/** Cal.com event ("user/event"), opened over the page. Empty: booking by email. */
// One Cal.com event per language: each event's "Interface language" is set to that language in Cal.com,
// so the booking window matches the page whatever the visitor's browser or Cal.com account says.
const CAL_LINKS: Record<string, string> = {
  en: 'traviosoft/demo-en',
  fr: 'traviosoft/demo',
  es: 'traviosoft/demo-es',
  it: 'traviosoft/demo-it',
  pt: 'traviosoft/demo-pt',
};

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
  const CAL_LINK = CAL_LINKS[locale] ?? CAL_LINKS.en;
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
                <span className="mins">{a.mins}<span style={{ fontSize: 16, marginLeft: 4 }}>min</span></span>
                <div><b style={{ fontSize: 19 }}>{a.title}</b><p className="muted" style={{ marginTop: 6 }}>{a.body}</p></div>
              </li>
            ))}
          </ol>
        </div>
        <div style={{ display: 'grid', gap: 20 }}>
          <div className="card" style={{ background: 'var(--deep)', color: 'var(--cream)', borderColor: 'var(--deep)' }}>
            <h2 className="h3">{d.bookTitle}</h2>
            <p style={{ opacity: 0.9 }}>{CAL_LINK ? d.bookCalendarBody : d.bookBody}</p>
            {CAL_LINK && (
              <p style={{ marginTop: 16 }}><BookDemo calLink={CAL_LINK} label={d.bookCta} locale={locale} /></p>
            )}
            <p style={{ marginTop: CAL_LINK ? 16 : 8 }}><span className="lbl" style={{ opacity: 0.75 }}>{CAL_LINK ? d.emailAltLabel : d.emailLabel}</span><br />
              <a href={`mailto:${d.email}`} style={{ display: 'inline-flex', alignItems: 'center', minHeight: 44, fontSize: CAL_LINK ? 19 : 24, fontWeight: 700, color: 'var(--cream)', overflowWrap: 'anywhere' }}>{d.email}</a></p>
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
