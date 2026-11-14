import type { VisualKey, VisualText } from '@/content/types';

/**
 * Product fragments drawn in HTML: small, honest pictures of what the screen shows.
 * Names and numbers are example data; labels come from the locale's `visuals` text.
 */

function Row({ a, s, b }: { a: string; s?: string; b: React.ReactNode }) {
  return (
    <div className="fr">
      <span>{a}{s && <small>{s}</small>}</span>
      <span>{b}</span>
    </div>
  );
}

const pill = (t: string, k: 'ok' | 'wait' | 'new' | 'grey') => <span className={`pill p-${k}`}>{t}</span>;

export function QuotePhone({ v }: { v: VisualText }) {
  return (
    <div className="phone" role="img" aria-label={`${v.quoteLabel}: ${v.trip}`}>
      <div className="screen">
        <div className="sh"><span className="lbl">{v.quoteLabel}</span><b>{v.trip} · {v.tripSub}</b></div>
        <div className="sr"><span>Hotel Alfonso XIII<small>Sevilla · 3 · {v.season}</small></span><span className="num">1,980</span></div>
        <div className="sr"><span>{v.guide}<small>{v.halfDay}</small></span><span className="num">420</span></div>
        <div className="sr"><span>{v.transfers}<small>4 · {v.privateCar}</small></span><span className="num">560</span></div>
        <div className="stt"><span>{v.total}</span><span className="num">4,860 EUR</span></div>
        <div className="sent">{v.sent}</div>
      </div>
    </div>
  );
}

function ItineraryPhone({ v }: { v: VisualText }) {
  const items = [
    ['Hotel Alfonso XIII', 'Check-in 15:00'],
    ['Alcázar', '10:00 · guide'],
    ['Córdoba', 'Car 09:00'],
    ['Alhambra', '08:30 · tickets']
  ];
  return (
    <div className="phone" role="img" aria-label={`${v.yourTrip}: ${v.trip}`}>
      <div className="screen">
        <div className="sh green"><span className="lbl">{v.yourTrip}</span><b>{v.trip}</b></div>
        {items.map(([t, s], i) => (
          <div className="day" key={i}>
            <span className="d">{v.dayLabel} {i + 1}</span>
            <span><b>{v.days[i]}</b><br /><span style={{ color: 'var(--muted)' }}>{t} · {s}</span></span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Frag({ title, right, children, label }: { title: string; right?: React.ReactNode; children: React.ReactNode; label?: string }) {
  return (
    <div className="frag" role="img" aria-label={label ?? title}>
      <div className="fh"><span>{title}</span>{right}</div>
      {children}
    </div>
  );
}

export function Visual({ k, v }: { k: VisualKey; v: VisualText }) {
  switch (k) {
    case 'quote':
      return <QuotePhone v={v} />;
    case 'itinerary':
    case 'proposal':
      return <ItineraryPhone v={v} />;
    case 'requests':
      return (
        <Frag title={v.requests} right={<span className="mono">4</span>}>
          <Row a="Laura & Tom" s={`${v.trip} · May`} b={pill(v.newReq, 'new')} />
          <Row a="Müller family" s="Lisboa → Porto · 6" b={pill(v.quoted, 'grey')} />
          <Row a="Event · 40 pax" s="Barcelona · 3 days" b={pill(v.waiting, 'wait')} />
          <Row a="Dupont" s="Mallorca · 7 days" b={pill(v.won, 'ok')} />
        </Frag>
      );
    case 'catalogue':
      return (
        <Frag title={v.catalogue} right={<span className="mono">2 {v.suppliers}</span>}>
          <Row a="Jan – Mar" s="Double · BB" b={<span className="num">280</span>} />
          <Row a="Apr – Jun" s={`Double · BB · ${v.season}`} b={<span className="num">390</span>} />
          <Row a="Jul – Aug" s="Double · BB" b={<span className="num">340</span>} />
          <Row a={`+ 18% ${v.margin}`} s="10% VAT" b={pill('auto', 'ok')} />
        </Frag>
      );
    case 'followup':
      return (
        <Frag title={v.followup}>
          <Row a="Müller family" s={v.followupLine} b={pill(v.waiting, 'wait')} />
          <Row a="Event · 40 pax" s={v.followupLine} b={pill(v.followupSent, 'ok')} />
          <Row a="Laura & Tom" s={v.sent} b={pill(v.quoted, 'grey')} />
        </Frag>
      );
    case 'order':
      return (
        <Frag title={v.order} right={pill(v.partial, 'ok')}>
          <Row a="Hotel Alfonso XIII" s={`${v.booking}`} b={pill(v.confirmed, 'ok')} />
          <Row a={v.guide} s={v.booking} b={pill(v.confirmed, 'ok')} />
          <Row a={v.transfers} s={v.booking} b={pill(v.pending, 'wait')} />
          <Row a="Ronda · lunch" s={v.booking} b={pill(v.pending, 'wait')} />
        </Frag>
      );
    case 'suppliers':
      return (
        <Frag title={v.supplierMail} right={<span className="mono">{v.filed}</span>}>
          <Row a="Hotel Alfonso XIII" s="RE: Booking 2 adults, 12–15 May" b={pill(v.confirmed, 'ok')} />
          <Row a="Andalucía Guides" s="RE: Alhambra 14 May" b={pill(v.confirmed, 'ok')} />
          <Row a="Sur Transfers" s={v.serviceSheet} b={pill('PDF', 'grey')} />
        </Frag>
      );
    case 'calendar': {
      const bands = [
        { l: 'Laura & Tom', s: 10, w: 8, c: 'var(--orange)' },
        { l: 'Event · 40 pax', s: 4, w: 3, c: 'var(--green)' },
        { l: 'Dupont', s: 19, w: 7, c: 'var(--yellow)' },
        { l: 'Müller', s: 1, w: 6, c: 'var(--ink)' }
      ];
      return (
        <Frag title={v.calendar}>
          <div style={{ padding: '14px 18px', display: 'grid', gap: 10 }}>
            {bands.map(b => (
              <div key={b.l} style={{ position: 'relative', height: 28, background: 'var(--line)', borderRadius: 8 }}>
                <span style={{
                  position: 'absolute', left: `${(b.s / 31) * 100}%`, width: `${(b.w / 31) * 100}%`, top: 0, bottom: 0,
                  background: b.c, borderRadius: 8, color: b.c === 'var(--yellow)' ? 'var(--green)' : 'var(--cream)',
                  fontSize: 11, fontWeight: 800, padding: '6px 8px', whiteSpace: 'nowrap', overflow: 'hidden'
                }}>{b.l}</span>
              </div>
            ))}
          </div>
        </Frag>
      );
    }
    case 'payments':
      return (
        <Frag title={v.payments}>
          <Row a={v.deposit} s={`${v.due} 14 Mar`} b={<><span className="num" style={{ marginRight: 8 }}>1,458</span>{pill(v.paid, 'ok')}</>} />
          <Row a={v.balance} s={`${v.due} 12 Apr`} b={<><span className="num" style={{ marginRight: 8 }}>3,402</span>{pill(v.waiting, 'wait')}</>} />
          <div style={{ padding: '12px 18px' }}>
            <div className="bar"><i style={{ width: '30%' }} /></div>
            <p className="mono" style={{ marginTop: 10 }}>{v.link}</p>
          </div>
        </Frag>
      );
    case 'invoices':
      return (
        <Frag title={v.invoices}>
          <Row a="F-2026-0142" s={v.depositInvoice} b={<span className="num">1,458.00</span>} />
          <Row a="F-2026-0157" s={v.finalInvoice} b={<span className="num">3,402.00</span>} />
          <Row a="R-2026-0009" s={v.creditNote} b={<span className="num">−120.00</span>} />
        </Frag>
      );
    case 'dashboard':
      return (
        <div className="tiles" role="img" aria-label={`${v.sales}, ${v.trips}, ${v.moneyIn}, ${v.moneyOut}`}>
          <div className="tile" style={{ background: 'var(--yellow)', color: 'var(--green)' }}><span className="lbl">{v.sales} · {v.month}</span><b className="num">48,200</b></div>
          <div className="tile" style={{ background: 'var(--green)', color: 'var(--cream)' }}><span className="lbl">{v.trips}</span><b className="num">17</b></div>
          <div className="tile" style={{ background: 'var(--orange)', color: 'var(--cream)' }}><span className="lbl">{v.moneyIn}</span><b className="num">31,900</b></div>
          <div className="tile" style={{ background: 'var(--ink)', color: 'var(--yellow)' }}><span className="lbl">{v.moneyOut}</span><b className="num">22,450</b></div>
        </div>
      );
    case 'brands':
      return (
        <div className="grid-2" style={{ width: 420, maxWidth: '100%' }} role="img" aria-label={v.brands}>
          <div className="tile" style={{ background: 'var(--white)', border: '1px solid var(--line)', minHeight: 150, justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 28, color: 'var(--green)', lineHeight: 1 }}>Sur & Co.</span>
          </div>
          <div className="tile" style={{ background: 'var(--deep)', color: 'var(--cream)', minHeight: 150, justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 30, lineHeight: 1 }}>Alma Events</span>
          </div>
        </div>
      );
    case 'languages':
      return (
        <Frag title={v.languages}>
          <Row a="ES" s="Traslado privado al hotel" b={pill('ES', 'new')} />
          <Row a="EN" s="Private transfer to the hotel" b={pill('EN', 'ok')} />
          <Row a="FR" s="Transfert privé vers l’hôtel" b={pill('FR', 'grey')} />
        </Frag>
      );
    case 'team':
      return (
        <Frag title={v.team} right={<span className="mono">3/5 {v.seats}</span>}>
          <Row a="Ana" s={v.owner} b={pill('A', 'new')} />
          <Row a="Jordi" s={v.sales2} b={pill('J', 'ok')} />
          <Row a="Claire" s={v.ops} b={pill('C', 'grey')} />
        </Frag>
      );
    case 'safe':
      return (
        <svg className="seal" viewBox="0 0 240 240" role="img" aria-label={`${v.safe1} · ${v.safe2}`}>
          <defs><path id="seal-c" d="M120,120 m-92,0 a92,92 0 1,1 184,0 a92,92 0 1,1 -184,0" /></defs>
          <circle cx="120" cy="120" r="118" fill="#015D47" />
          <circle cx="120" cy="120" r="70" fill="#E0F354" />
          <text fontFamily="var(--display), Arial" fontWeight="800" fontSize="15" fill="#FFFFFF" letterSpacing="2">
            <textPath href="#seal-c" textLength="570" lengthAdjust="spacing">{`${v.safe1.toUpperCase()} · ${v.safe2.toUpperCase()} · `}</textPath>
          </text>
          <text x="120" y="134" textAnchor="middle" fontFamily="var(--display), Arial" fontWeight="800" fontSize="44" fill="#015D47">EU</text>
        </svg>
      );
    case 'connections':
      return (
        <Frag title={v.connections}>
          <Row a="Website" s="Requests from your site" b={pill('ON', 'ok')} />
          <Row a="Accounting" s="Sales, purchases, payments" b={pill('ON', 'ok')} />
          <Row a="AI tools" s="Claude, ChatGPT" b={pill('ON', 'ok')} />
        </Frag>
      );
  }
}
