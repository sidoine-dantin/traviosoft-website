import type { ProposalText } from '@/content/types';
import { HeroCount } from './hero-count';

/** Photos (Unsplash licence): Plaza de España by Tânia Mousinho, Giralda by Clara Brassard, Mosque-Cathedral of Córdoba by Jordi Vich Navarro, Puente Nuevo in Ronda by tommao wang. */
const DAY_PHOTOS = ['/home/giralda.webp', '/home/cordoba.webp', '/home/ronda.webp'];

/**
 * The home hero picture: what the agency sends its client. The travel proposal on a laptop-sized
 * sheet and the day-by-day itinerary on a phone, with the fields of the app's two documents
 * (proposal: agency, cover photo, days, total to pay incl. VAT; itinerary: kind of service,
 * meeting point, open in Maps, your guide, no prices).
 */
export function HeroTrip({ p, amount, locale }: { p: ProposalText; amount: number; locale: string }) {
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
              <div key={d.t} className="ht-day" style={{ '--i': i } as React.CSSProperties}><img className="ht-ph" src={DAY_PHOTOS[i]} alt="" width={240} height={240} loading="lazy" decoding="async" /><div><b>{d.t}</b><p>{d.s}</p></div></div>
            ))}
          </div>
          <p className="ht-total"><span>{p.total} <small>· {p.vatIncl}</small></span><HeroCount value={amount} locale={locale} currency="EUR" /></p>
        </div>
      </div>
      <div className="ht-phone" aria-hidden="true">
        <div className="ht-ph-in">
          <div className="ht-ph-bar"><span>10:24</span><i /><svg viewBox="0 0 54 12"><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5.5" width="3" height="6.5" rx="1" /><rect x="10" y="3" width="3" height="9" rx="1" /><rect x="15" y="0.5" width="3" height="11.5" rx="1" /><path d="M29 3.2a9 9 0 0 1 6 2.3l1.3-1.4A11 11 0 0 0 29 1.2a11 11 0 0 0-7.3 2.9L23 5.5a9 9 0 0 1 6-2.3Zm0 3.3a5.6 5.6 0 0 1 3.7 1.4L34 6.5a7.6 7.6 0 0 0-10 0l1.3 1.4A5.6 5.6 0 0 1 29 6.5Zm0 3.2a2 2 0 0 0-1.4.6L29 12l1.4-1.7a2 2 0 0 0-1.4-.6Z" /><rect x="39.5" y="1" width="12" height="10" rx="2.6" fill="none" stroke="currentColor" strokeWidth="1" opacity=".5" /><rect x="41" y="2.5" width="8" height="7" rx="1.4" /><rect x="52.3" y="4.2" width="1.4" height="3.6" rx=".7" opacity=".5" /></svg></div>
          <div className="ht-ph-top"><small>{p.agency}</small><b>{p.trip}</b></div>
          <div className="ht-stops">
            {p.stops.map((s, i) => (
              <div key={i} className="ht-stp" style={{ '--i': i } as React.CSSProperties}>
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
