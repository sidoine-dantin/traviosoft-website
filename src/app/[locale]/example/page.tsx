import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const e = getContent(locale).example;
  return buildMetadata({ locale, path: '/example', title: e.metaTitle, description: e.metaDescription });
}

export default async function ExamplePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getContent(locale);
  const e = c.example;
  const t = e.trip;
  return (
    <>
      <section className="wrap" style={{ paddingBlock: 'clamp(56px, 8vw, 100px) 32px' }}>
        <h1 className="h1" style={{ color: 'var(--green)', maxWidth: '15ch' }}>{e.title}</h1>
        <p className="lead muted" style={{ marginTop: 22 }}>{e.lead}</p>
        <ul className="chapters" style={{ marginTop: 28 }}>
          <li><a href="#itinerary">{e.tabs.itinerary}</a></li>
          <li><a href="#quote">{e.tabs.quote}</a></li>
        </ul>
      </section>

      <section id="itinerary" className="on-green band" style={{ scrollMarginTop: 70 }}>
        <div className="narrow" style={{ maxWidth: 820 }}>
          <p className="lbl" style={{ color: 'var(--yellow)' }}>{e.tabs.itinerary} · {t.agency}</p>
          <h2 className="h1" style={{ marginTop: 14, fontSize: 'clamp(44px, 7vw, 88px)' }}>{t.name}</h2>
          <p style={{ marginTop: 14, opacity: 0.85 }}>{t.dates} · {t.travellers}</p>
          <ol style={{ listStyle: 'none', padding: 0, margin: '48px 0 0', display: 'grid', gap: 0 }}>
            {t.days.map(d => (
              <li key={d.day} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 20, padding: '26px 0', borderTop: '1.5px solid rgba(255,244,230,.25)' }}>
                <span className="mono" style={{ color: 'var(--yellow)', paddingTop: 6 }}>{d.day}</span>
                <div>
                  <h3 className="h3">{d.title}</h3>
                  <p style={{ marginTop: 8, opacity: 0.9 }}>{d.body}</p>
                  <ul style={{ margin: '12px 0 0', paddingLeft: 18, opacity: 0.85, display: 'grid', gap: 4 }}>
                    {d.items.map(i => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="quote" className="band" style={{ scrollMarginTop: 70 }}>
        <div className="narrow" style={{ maxWidth: 820 }}>
          <p className="lbl" style={{ color: 'var(--orange)' }}>{e.tabs.quote} · {t.agency}</p>
          <h2 className="h2" style={{ color: 'var(--green)', marginTop: 12 }}>{t.name}</h2>
          <p className="muted" style={{ marginTop: 10 }}>{t.dates} · {t.travellers}</p>
          <div className="tbl-wrap" style={{ marginTop: 32 }}>
            <table className="tbl">
              <tbody>
                {t.quoteLines.map(l => (
                  <tr key={l.name}><td>{l.name}<br /><span className="muted" style={{ fontWeight: 400, fontSize: 14 }}>{l.detail}</span></td><td className="num" style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>{l.price}</td></tr>
                ))}
                <tr><td style={{ fontSize: 20 }}>{c.visuals.total}</td><td className="num" style={{ textAlign: 'right', fontWeight: 800, fontSize: 20, whiteSpace: 'nowrap' }}>{t.total}</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 14, fontWeight: 700 }}>{t.perPerson}</p>
          <div className="grid-2" style={{ marginTop: 32 }}>
            <div className="card"><p className="lbl" style={{ color: 'var(--green)' }}>{c.visuals.included}</p><ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 6 }}>{t.included.map(i => <li key={i}>{i}</li>)}</ul></div>
            <div className="card"><p className="lbl muted">{c.visuals.notIncluded}</p><ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 6 }}>{t.notIncluded.map(i => <li key={i}>{i}</li>)}</ul></div>
          </div>
          <p style={{ marginTop: 24 }}>{t.deposit}</p>
          <p className="muted" style={{ marginTop: 6 }}>{t.validUntil}</p>
          <p className="mono muted" style={{ marginTop: 40 }}>{e.note}</p>
        </div>
      </section>
    </>
  );
}
