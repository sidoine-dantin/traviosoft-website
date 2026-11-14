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

/** Example amounts written the way the page's language writes them. */
const n = (v: VisualText, x: number, d = 0) => new Intl.NumberFormat(v.ex.numLocale, { minimumFractionDigits: d, maximumFractionDigits: d }).format(x);

const money = (v: VisualText, x: number, c: string) => new Intl.NumberFormat(v.ex.numLocale, { style: 'currency', currency: c, maximumFractionDigits: 0 }).format(x);

const pill = (t: string, k: 'ok' | 'wait' | 'new' | 'grey') => <span className={`pill p-${k}`}>{t}</span>;

export function QuotePhone({ v }: { v: VisualText }) {
  return (
    <div className="phone" role="img" aria-label={`${v.quoteLabel}: ${v.trip}`}>
      <div className="screen">
        <div className="sh"><span className="lbl">{v.quoteLabel}</span><b>{v.trip} · {v.tripSub}</b></div>
        <div className="sr"><span>Hotel Alfonso XIII<small>{v.days[0]} · 3 · {v.season}</small></span><span className="num">{n(v, 1980, 0)}</span></div>
        <div className="sr"><span>{v.guide}<small>{v.halfDay}</small></span><span className="num">{n(v, 420, 0)}</span></div>
        <div className="sr"><span>{v.transfers}<small>4 · {v.privateCar}</small></span><span className="num">{n(v, 560, 0)}</span></div>
        <div className="stt"><span>{v.total}</span><span className="num">{n(v, 4860)} EUR</span></div>
        <div className="sent">{v.sent}</div>
      </div>
    </div>
  );
}

function ItineraryPhone({ v }: { v: VisualText }) {
  const places = ['Hotel Alfonso XIII', 'Alcázar', v.days[2], 'Alhambra'];
  const items = places.map((p, i) => [p, v.ex.itinerary[i]]);
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
          <Row a="Laura & Tom" s={v.ex.reqTrip} b={pill(v.newReq, 'new')} />
          <Row a={v.ex.muller} s={v.ex.reqLisbon} b={pill(v.quoted, 'grey')} />
          <Row a={v.ex.event} s={v.ex.reqBarcelona} b={pill(v.waiting, 'wait')} />
          <Row a="Dupont" s={v.ex.reqMallorca} b={pill(v.won, 'ok')} />
        </Frag>
      );
    case 'catalogue':
      return (
        <Frag title={v.catalogue} right={<span className="mono">2 {v.suppliers}</span>}>
          <Row a={v.ex.seasons[0]} s={v.ex.room} b={<span className="num">280</span>} />
          <Row a={v.ex.seasons[1]} s={`${v.ex.room} · ${v.season}`} b={<span className="num">390</span>} />
          <Row a={v.ex.seasons[2]} s={v.ex.room} b={<span className="num">340</span>} />
          <Row a={`+18% ${v.margin}`} s={v.ex.vat} b={null} />
        </Frag>
      );
    case 'followup':
      return (
        <Frag title={v.followup}>
          <Row a={v.ex.muller} s={v.followupLine} b={pill(v.waiting, 'wait')} />
          <Row a={v.ex.event} s={v.followupLine} b={pill(v.followupSent, 'ok')} />
          <Row a="Laura & Tom" s={v.sent} b={pill(v.quoted, 'grey')} />
        </Frag>
      );
    case 'order':
      return (
        <Frag title={v.order} right={<span className="mono">2/4</span>}>
          <Row a="Hotel Alfonso XIII" s={`${v.booking}`} b={pill(v.confirmed, 'ok')} />
          <Row a={v.guide} s={v.booking} b={pill(v.confirmed, 'ok')} />
          <Row a={v.transfers} s={v.booking} b={pill(v.pending, 'wait')} />
          <Row a="Ronda · lunch" s={v.booking} b={pill(v.pending, 'wait')} />
        </Frag>
      );
    case 'suppliers':
      return (
        <Frag title={v.supplierMail} right={<span className="mono">{v.filed}</span>}>
          <Row a="Hotel Alfonso XIII" s={v.ex.mailHotel} b={pill(v.confirmed, 'ok')} />
          <Row a="Andalucía Guides" s={v.ex.mailGuide} b={pill(v.confirmed, 'ok')} />
          <Row a="Sur Transfers" s={v.serviceSheet} b={<span className="mono">PDF</span>} />
        </Frag>
      );
    case 'calendar': {
      const bands = [
        { l: 'Müller', s: 1, w: 7 },
        { l: 'Laura & Tom', s: 10, w: 8 },
        { l: 'Dupont', s: 19, w: 7 },
        { l: 'Garcia', s: 24, w: 6 }
      ];
      return (
        <Frag title={v.calendar}>
          <div style={{ padding: '14px 18px', display: 'grid', gap: 10 }}>
            {bands.map(b => (
              <div key={b.l} style={{ position: 'relative', height: 28, background: 'var(--line)', borderRadius: 8 }}>
                <span style={{
                  position: 'absolute', left: `${(b.s / 31) * 100}%`, width: `${(b.w / 31) * 100}%`, top: 0, bottom: 0,
                  background: 'var(--green)', borderRadius: 8, color: 'var(--white)',
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
          <Row a={v.deposit} s={`${v.due} ${v.ex.date1}`} b={<><span className="num" style={{ marginRight: 8 }}>{n(v, 1458)}</span>{pill(v.paid, 'ok')}</>} />
          <Row a={v.balance} s={`${v.due} ${v.ex.date2}`} b={<><span className="num" style={{ marginRight: 8 }}>{n(v, 3402)}</span>{pill(v.waiting, 'wait')}</>} />
          <div style={{ padding: '12px 18px' }}>
            <div className="bar"><i style={{ width: '30%' }} /></div>
            <p className="mono" style={{ marginTop: 10 }}>{v.link}</p>
          </div>
        </Frag>
      );
    case 'invoices':
      return (
        <Frag title={v.invoices}>
          <Row a="F-2026-0142" s={v.depositInvoice} b={<span className="num">{n(v, 1458, 2)}</span>} />
          <Row a="F-2026-0157" s={v.finalInvoice} b={<span className="num">{n(v, 3402, 2)}</span>} />
          <Row a="R-2026-0009" s={v.creditNote} b={<span className="num">{n(v, -120, 2)}</span>} />
        </Frag>
      );
    case 'dashboard':
      return (
        <div className="tiles" role="img" aria-label={`${v.sales}, ${v.trips}, ${v.moneyIn}, ${v.moneyOut}`}>
          {([[`${v.sales} · ${v.month}`, n(v, 48200)], [v.trips, '17'], [v.moneyIn, n(v, 31900)], [v.moneyOut, n(v, 22450)]]).map(([l, n]) => (
            <div key={l} className="tile" style={{ background: 'var(--white)', border: '1px solid var(--line)', color: 'var(--ink)' }}><span className="lbl" style={{ color: 'var(--muted)' }}>{l}</span><b className="num" style={{ color: 'var(--green)' }}>{n}</b></div>
          ))}
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
    case 'margin':
      return (
        <Frag title="Hotel Alfonso XIII">
          <Row a={v.ex.net} b={<span className="num">{n(v, 1500)}</span>} />
          <Row a={`18% ${v.margin}`} b={<span className="num">+{n(v, 270)}</span>} />
          <Row a={v.ex.commission} b={<span className="num">+{n(v, 197)}</span>} />
          <div className="fr" style={{ fontWeight: 700 }}><span>{v.ex.sellPrice}</span><span className="num">{n(v, 1967)} EUR</span></div>
        </Frag>
      );
    case 'commission':
      return (
        <Frag title={v.ex.commTitle}>
          <Row a={v.trip} b={<span className="num">{n(v, 486)}</span>} />
          <Row a={v.ex.trip2Name} b={<span className="num">{n(v, 312)}</span>} />
          <div className="fr" style={{ fontWeight: 700 }}><span>{v.total}</span><span className="num">{n(v, 798)} EUR</span></div>
        </Frag>
      );
    case 'confirm':
      return (
        <Frag title={v.trip}>
          <Row a={v.quoteLabel} b={pill(v.won, 'ok')} />
          <Row a={v.deposit} b={pill(v.paid, 'ok')} />
          <Row a={v.trip2} s={`4 × ${v.booking}`} b={pill(v.confirmed, 'ok')} />
        </Frag>
      );
    case 'statuses':
      return (
        <Frag title={v.trip}>
          <Row a={v.trip2} b={pill(v.confirmed, 'ok')} />
          <Row a={v.booking} s="2/4" b={pill(v.pending, 'wait')} />
          <Row a={v.payment} b={pill(v.partial, 'ok')} />
        </Frag>
      );
    case 'rooming':
      return (
        <Frag title={v.ex.rooming}>
          <Row a="Laura & Tom" s={v.ex.double} b={<span className="mono">101</span>} />
          <Row a="Ana & Jordi" s={v.ex.twin} b={<span className="mono">102</span>} />
          <Row a="Claire" s={v.ex.single} b={<span className="mono">103</span>} />
        </Frag>
      );
    case 'schedule':
      return (
        <Frag title={v.payments}>
          <Row a={v.deposit} s={`${v.due} ${v.ex.date1}`} b={<><span className="num" style={{ marginRight: 8 }}>{n(v, 1458)}</span>{pill(v.paid, 'ok')}</>} />
          <Row a={v.balance} s={`${v.due} ${v.ex.date2}`} b={<><span className="num" style={{ marginRight: 8 }}>{n(v, 3402)}</span>{pill(v.waiting, 'wait')}</>} />
          <Row a="Hotel Alfonso XIII" s={`${v.ex.supplierDue} ${v.ex.date3}`} b={<><span className="num" style={{ marginRight: 8 }}>−{n(v, 1350)}</span>{pill(v.ex.toPay, 'grey')}</>} />
        </Frag>
      );
    case 'paylink':
      return (
        <Frag title={v.ex.mailSubject}>
          <div style={{ padding: '16px 18px', display: 'grid', gap: 14 }}>
            <p style={{ margin: 0, fontSize: 14 }}>{v.ex.mailBody}</p>
            <span style={{ display: 'block', textAlign: 'center', background: 'var(--green)', color: 'var(--white)', borderRadius: 10, padding: '11px 14px', fontWeight: 700, fontSize: 14 }}>{v.ex.payDeposit} · {n(v, 1458)} EUR</span>
          </div>
        </Frag>
      );
    case 'settings':
      return (
        <Frag title={v.ex.settings}>
          <Row a={v.brands} s="Sur & Co. · Alma Events" b={null} />
          <Row a={v.ex.langs} s="ES · CA · EN · FR · IT" b={null} />
          <Row a={v.ex.currencies} s="EUR · GBP · USD" b={null} />
          <Row a={v.team} s={`3 ${v.seats}`} b={null} />
        </Frag>
      );
    case 'currencies':
      return (
        <Frag title={v.ex.currencies}>
          <Row a={v.ex.smith} s={v.quoteLabel} b={<span className="num">{money(v, 4120, 'GBP')}</span>} />
          <Row a={v.ex.atlas} s={v.quoteLabel} b={<span className="num">{money(v, 5280, 'USD')}</span>} />
          <Row a={v.ex.books} s="EUR" b={<span className="num">{money(v, 9640, 'EUR')}</span>} />
        </Frag>
      );
    case 'country':
      return (
        <Frag title={v.ex.countryTitle}>
          <Row a={v.ex.vatScheme} b={pill(v.ex.on, 'ok')} />
          <Row a="Veri*Factu" s={v.ex.qr} b={pill(v.ex.on, 'ok')} />
        </Frag>
      );
    case 'languages': {
      const lines = ['Traslado privado al hotel', 'Trasllat privat a l’hotel', 'Private transfer to the hotel', 'Transfert privé vers l’hôtel', 'Trasferimento privato in hotel'];
      return (
        <Frag title={v.languages}>
          {lines.map((t, i) => <Row key={t} a={v.ex.langNames[i]} s={t} b={null} />)}
        </Frag>
      );
    }
    case 'team':
      return (
        <Frag title={v.team} right={<span className="mono">3 {v.seats}</span>}>
          <Row a="Ana" s={v.owner} b={null} />
          <Row a="Jordi" s={v.sales2} b={null} />
          <Row a="Claire" s={v.ops} b={null} />
        </Frag>
      );
    case 'safe':
      return (
        <svg className="seal" viewBox="0 0 240 240" role="img" aria-label={`${v.safe1} · ${v.safe2}`}>
          <defs><path id="seal-c" d="M120,120 m-92,0 a92,92 0 1,1 184,0 a92,92 0 1,1 -184,0" /></defs>
          <circle cx="120" cy="120" r="118" fill="#015D47" />
          <circle cx="120" cy="120" r="70" fill="#E0F354" />
          <text fontFamily="var(--display), Arial" fontWeight="800" fontSize="15" fill="#FCFDFB" letterSpacing="2">
            <textPath href="#seal-c" textLength="570" lengthAdjust="spacing">{`${v.safe1.toUpperCase()} · ${v.safe2.toUpperCase()} · `}</textPath>
          </text>
          <text x="120" y="134" textAnchor="middle" fontFamily="var(--display), Arial" fontWeight="800" fontSize="44" fill="#015D47">EU</text>
        </svg>
      );
    case 'connections':
      return (
        <Frag title={v.connections}>
          <Row a={v.ex.conWebsite} s={v.ex.conWebsiteSub} b={pill(v.ex.on, 'ok')} />
          <Row a={v.ex.conAccounting} s={v.ex.conAccountingSub} b={pill(v.ex.on, 'ok')} />
          <Row a={v.ex.conAi} s="Claude, ChatGPT" b={pill(v.ex.on, 'ok')} />
        </Frag>
      );
  }
}
