import type { ProposalText } from '@/content/types';

/** Photos (Unsplash licence): Plaza de España by Tânia Mousinho, Giralda by Clara Brassard, Mosque-Cathedral of Córdoba by Jordi Vich Navarro, Puente Nuevo in Ronda by tommao wang. */
const DAY_PHOTOS = ['/home/giralda.webp', '/home/cordoba.webp', '/home/ronda.webp'];

/**
 * The home hero picture: what the agency sends its client. The travel proposal on a laptop-sized
 * sheet and the day-by-day itinerary on a phone, with the fields of the app's two documents
 * (proposal: agency, cover photo, days, total to pay incl. VAT; itinerary: kind of service,
 * meeting point, open in Maps, your guide, no prices).
 */
export function HeroTrip({ p, total }: { p: ProposalText; total: string }) {
  return (
    <div className="ht" role="img" aria-label={`${p.kind}: ${p.trip}`}>
      <div className="ht-sheet" aria-hidden="true">
        <div className="ht-sh-head"><span className="ht-ag"><b />{p.agency}</span><span>{p.kind}</span></div>
        <img className="ht-cover" src="/home/seville.webp" alt="" width={1200} height={380} decoding="async" fetchPriority="high" />
        <div className="ht-body">
          <h3 className="ht-title">{p.trip}</h3>
          <p className="ht-meta">{p.meta.map(m => <span key={m}>{m}</span>)}</p>
          <div className="ht-days">
            {p.days.map((d, i) => (
              <div key={d.t} className="ht-day"><img className="ht-ph" src={DAY_PHOTOS[i]} alt="" width={240} height={240} loading="lazy" decoding="async" /><div><b>{d.t}</b><p>{d.s}</p></div></div>
            ))}
          </div>
          <p className="ht-total"><span>{p.total} <small>· {p.vatIncl}</small></span><strong>{total}</strong></p>
        </div>
      </div>
      <div className="ht-phone" aria-hidden="true">
        <div className="ht-ph-in">
          <div className="ht-ph-top"><small>{p.agency}</small><b>{p.trip}</b></div>
          <div className="ht-stops">
            {p.stops.map((s, i) => (
              <div key={i}>
                {s.day && <p className="ht-dayl">{s.day}</p>}
                <div className="ht-stop"><small>{s.k}</small><b>{s.t}</b><span>{s.s}</span>{s.link && <em>{s.link}</em>}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
