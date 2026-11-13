import { Link } from '@/i18n/navigation';
import type { ExampleTripId, SiteContent } from '@/content/types';

type Props = { c: SiteContent; tripId: ExampleTripId };

/** The example trip page: picker, client itinerary and quote of one sample trip. */
export function ExampleTripView({ c, tripId }: Props) {
  const e = c.example;
  const t = e.trips.find(x => x.id === tripId) ?? e.trips[0];
  return (
    <>
      <section className="wrap" style={{ paddingBlock: 'clamp(56px, 8vw, 100px) 32px' }}>
        <h1 className="h1" style={{ color: 'var(--green)', maxWidth: '15ch' }}>{e.title}</h1>
        <p className="lead muted" style={{ marginTop: 22 }}>{e.lead}</p>
        <p className="lbl muted" style={{ marginTop: 32 }}>{e.pick}</p>
        <ul className="trip-pick">
          {e.trips.map(x => (
            <li key={x.id}>
              <Link
                href={x.id === e.trips[0].id ? '/example' : `/example/${x.id}`}
                aria-current={x.id === t.id ? 'page' : undefined}
              >
                <strong>{x.label}</strong>
                <span>{x.kind}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="chapters" style={{ marginTop: 28 }}>
          <li><a href="#itinerary">{e.tabs.itinerary}</a></li>
          <li><a href="#quote">{e.tabs.quote}</a></li>
        </ul>
      </section>

      <section id="itinerary" className="on-green band">
        <div className="narrow" style={{ maxWidth: 820 }}>
          <p className="lbl" style={{ color: 'var(--yellow)' }}>{e.tabs.itinerary} · {t.agency}</p>
          <h2 className="h1" style={{ marginTop: 14, fontSize: 'clamp(44px, 7vw, 88px)' }}>{t.name}</h2>
          <p style={{ marginTop: 14, opacity: 0.85 }}>{t.dates} · {t.travellers}</p>
          <ol style={{ listStyle: 'none', padding: 0, margin: '48px 0 0', display: 'grid', gap: 0 }}>
            {t.days.map(d => (
              <li key={d.day} className="trip-day">
                <span className="mono">{d.day}</span>
                <div>
                  <h3 className="h3">{d.title}</h3>
                  <p style={{ marginTop: 8, opacity: 0.9 }}>{d.body}</p>
                  <ul>
                    {d.items.map(i => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="quote" className="band">
        <div className="narrow" style={{ maxWidth: 820 }}>
          <p className="lbl" style={{ color: 'var(--orange-ink)' }}>{e.tabs.quote} · {t.agency}</p>
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
          {t.rooming && (
            <>
              <h3 className="h3" style={{ color: 'var(--green)', marginTop: 48 }}>{t.rooming.title}</h3>
              <div className="tbl-wrap" style={{ marginTop: 16 }}>
                <table className="tbl stack">
                  <thead><tr>{t.rooming.head.map(h => <th key={h} scope="col">{h}</th>)}</tr></thead>
                  <tbody>
                    {t.rooming.rows.map(r => (
                      <tr key={r.join('|')}>{r.map((cell, i) => <td key={i} data-label={t.rooming!.head[i]}>{cell}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
          <p className="mono muted" style={{ marginTop: 40 }}>{e.note}</p>
        </div>
      </section>
    </>
  );
}
