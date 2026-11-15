import type { AppScreensText } from '@/content/types';
import { AppShot } from './app-shot';

/**
 * Four screens of the Traviosoft app, drawn in HTML from the app's own layout: the sidebar,
 * the record header card, the tabs, the rounded line rows and the totals card of the quote page,
 * with the app's colours (packages/ui theme.css) and its interface words (apps/web/messages).
 * The trip, names and amounts are one invented sample trip; amounts are worked out here so
 * every line, total and margin adds up.
 */

type Nav = keyof AppScreensText['nav'];

const ICON: Partial<Record<Nav, React.ReactNode>> = {
  dashboard: <><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /></>,
  calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
  analytics: <path d="M3 3v18h18M8 17v-5M13 17V8M18 17v-9" />,
  requests: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  quotes: <><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" /><path d="M14 2v5h5M16 13H8M16 17H8M10 9H8" /></>,
  orders: <><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2 2h3l2.7 12.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" /></>,
  finances: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></>,
  catalog: <path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2zM22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z" />,
  clients: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
  providers: <><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18zM6 12H4a2 2 0 0 0-2 2v8h4M18 9h2a2 2 0 0 1 2 2v11h-4" /><path d="M10 6h4M10 10h4M10 14h4M10 18h4" /></>,
  guide: <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1zM12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2zM9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5" />
};

const Icon = ({ k }: { k: Nav }) => <svg viewBox="0 0 24 24" className="ic">{ICON[k]}</svg>;

const SECTIONS: { title: Nav; items: Nav[] }[] = [
  { title: 'workspace', items: ['dashboard', 'calendar', 'analytics'] },
  { title: 'pipeline', items: ['requests', 'quotes', 'orders', 'finances'] },
  { title: 'resources', items: ['catalog', 'clients', 'providers'] }
];

function Shell({ t, on, children }: { t: AppScreensText; on: Nav; children: React.ReactNode }) {
  return (
    <div className="au-shell">
      <aside className="au-side">
        <div className="au-brand"><span className="au-mark">RS</span>Ruta Sur Viajes</div>
        {SECTIONS.map(s => (
          <div key={s.title} className="au-sec">
            <p>{t.nav[s.title]}</p>
            {s.items.map(i => <span key={i} className={i === on ? 'au-item on' : 'au-item'}><Icon k={i} />{t.nav[i]}</span>)}
          </div>
        ))}
        <span className="au-item au-foot"><Icon k="guide" />{t.nav.guide}</span>
      </aside>
      <div className="au-body">
        <div className="au-top"><span className="au-lang">{t.lang}</span><span className="au-av">{t.user}</span></div>
        <div className="au-main">{children}</div>
      </div>
    </div>
  );
}

/** Amounts in the page's number format, two decimals, with the currency sign where the app puts it. */
const eur = (loc: string, x: number) => new Intl.NumberFormat(loc, { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 }).format(x);

const LINES: [number, number][] = [[1, 87.5], [3, 276], [2, 112.5], [5, 59.8], [2, 228], [2, 252], [2, 131.25]];
const COST = 2210;
const SELL = LINES.reduce((a, [q, u]) => a + q * u, 0); // 2662
const MARGIN = SELL - COST; // 452
const VAT_ON_MARGIN = Math.round((MARGIN - MARGIN / 1.21) * 100) / 100; // Spanish margin scheme, 21 %
const DEPOSIT = Math.round(SELL * 0.3 * 100) / 100; // 798.60

function Header({ t, ref_, status }: { t: AppScreensText; ref_: string; status: string }) {
  return (
    <div className="au-head">
      <div className="au-head-row">
        <svg viewBox="0 0 24 24" className="ic au-back"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
        <h4>{t.trip}</h4>
        <span className="au-status">{status}</span>
        <span className="au-btn">{t.quote.viewPdf}</span>
      </div>
      <p className="au-meta">
          <span className="au-link">{t.client}</span><i>·</i><span># {ref_}</span><i>·</i>
          <span>{t.quote.startLabel} {t.quote.start}</span><i>·</i><span>{t.quote.expiresLabel} {t.quote.expires}</span><i>·</i><span>{t.quote.pax}</span>
      </p>
    </div>
  );
}

function Tabs({ t, on }: { t: AppScreensText; on: number }) {
  return <div className="au-tabs">{t.quote.tabs.map((x, i) => <span key={x} className={i === on ? 'on' : undefined}>{x}</span>)}</div>;
}

const St = ({ k, children }: { k: 'ok' | 'wait' | 'todo' | 'new'; children: React.ReactNode }) => <span className={`au-st ${k}`}>{children}</span>;

export function RequestsScreen({ t, label }: { t: AppScreensText; label: string }) {
  return (
    <AppShot label={label}>
      <Shell t={t} on="requests">
        <div className="au-title-row"><h3>{t.nav.requests}</h3><span className="au-btn primary">{t.req.newBtn}</span></div>
        <div className="au-card au-list">
          {t.req.rows.map((r, i) => (
            <div key={i} className={i === 0 ? 'au-req hl' : 'au-req'}>
              <span className="au-av sm">{r.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</span>
              <div className="au-req-t"><b>{r.name}</b><span>{r.msg}</span><small>{r.meta}</small></div>
              <div className="au-req-r"><St k={r.kind}>{r.badge}</St><small>{r.ago}</small></div>
            </div>
          ))}
        </div>
      </Shell>
    </AppShot>
  );
}

export function QuoteScreen({ t, loc, label }: { t: AppScreensText; loc: string; label: string }) {
  const q = t.quote;
  return (
    <AppShot label={label}>
      <Shell t={t} on="quotes">
        <Header t={t} ref_="Q-2027-0142" status={q.sent} />
        <div className="au-card au-tabbed">
          <Tabs t={t} on={0} />
          <div className="au-quote">
            <div className="au-card au-lines">
              <div className="au-lines-h"><b>{q.linesTitle}</b><span>{q.vatRegimeLabel}: <em>{q.vatRegime}</em></span></div>
              {LINES.map(([qty, unit], i) => (
                <div key={i} className="au-line">
                  <span className="au-grip" />
                  <b>{q.lines[i]}</b>
                  {qty > 1 && <span className="au-qty">×{qty}</span>}
                  {qty > 1 && <span className="au-unit">{eur(loc, unit)} {q.unitIncl}</span>}
                  <span className="au-amt">{eur(loc, qty * unit)}</span>
                </div>
              ))}
            </div>
            <div className="au-card au-total">
              <div className="au-total-top">
                <small>{q.totalTitle}</small>
                <strong>{eur(loc, SELL)}</strong>
                <span>{eur(loc, SELL / 2)} / {q.perPerson}</span>
              </div>
              <div className="au-margin">
                <p className="au-margin-sum"><span>{q.margin}</span><span className="pos">{new Intl.NumberFormat(loc, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format((MARGIN / SELL) * 100)} % · {eur(loc, MARGIN)}</span></p>
                <div className="au-margin-box">
                  <p><span>{q.selling}</span><span>{eur(loc, SELL)}</span></p>
                  <p><span>{q.cost}</span><span>{eur(loc, COST)}</span></p>
                  <p className="b"><span>{q.margin}</span><span className="pos">{eur(loc, MARGIN)}</span></p>
                  <p><span>{q.vatMargin}</span><span>{eur(loc, VAT_ON_MARGIN)}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Shell>
    </AppShot>
  );
}

export function BookingScreen({ t, label }: { t: AppScreensText; label: string }) {
  const o = t.order;
  const states: [('ok' | 'wait' | 'todo'), string][] = [
    ['ok', o.states.confirmed], ['ok', o.states.ref], ['ok', o.states.confirmed], ['ok', o.states.confirmed],
    ['ok', o.states.confirmed], ['wait', o.states.requested], ['todo', o.states.toBook]
  ];
  return (
    <AppShot label={label}>
      <Shell t={t} on="orders">
        <div className="au-head">
          <div className="au-head-row">
            <svg viewBox="0 0 24 24" className="ic au-back"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            <h4>{t.trip}</h4>
            <span className="au-status ok">{o.accepted}</span>
          </div>
          <p className="au-meta"><span className="au-link">{t.client}</span><i>·</i><span>{t.quote.startLabel} {t.quote.start}</span><i>·</i><span>{t.quote.pax}</span></p>
        </div>
        <div className="au-card au-book">
          <div className="au-lines-h"><b>{o.bookingTitle}</b><span>{o.bookingCount}</span></div>
          {t.quote.lines.map((line, i) => (
            <div key={i} className="au-bk">
              <div><b>{line}</b><small>{o.providers[i]}</small></div>
              <St k={states[i][0]}>{states[i][1]}</St>
            </div>
          ))}
        </div>
        <div className="au-card au-tasks">
          <div className="au-lines-h"><b>{o.tasksTitle}</b></div>
          <p className="done"><span className="au-check on" />{o.tasks[0]}</p>
          <p><span className="au-check" />{o.tasks[1]}</p>
        </div>
      </Shell>
    </AppShot>
  );
}

export function PaymentScreen({ t, loc, label }: { t: AppScreensText; loc: string; label: string }) {
  const p = t.pay;
  return (
    <AppShot label={label}>
      <Shell t={t} on="quotes">
        <Header t={t} ref_="Q-2027-0142" status={t.order.accepted} />
        <div className="au-card au-tabbed">
          <Tabs t={t} on={1} />
          <div className="au-pay">
            <div className="au-card">
              <div className="au-lines-h"><b>{p.schedTitle}</b><span>{eur(loc, SELL)}</span></div>
              <div className="au-pr">
                <div><b>{p.deposit}</b><small>{p.depositSub}</small></div>
                <span className="au-date">{p.dates[0]}</span>
                <span className="au-amt">{eur(loc, DEPOSIT)}</span>
                <St k="ok">{p.paid}</St>
              </div>
              <div className="au-pr">
                <div><b>{p.balance}</b><small>{p.dueLabel} {p.dates[1]}</small></div>
                <span className="au-date" />
                <span className="au-amt">{eur(loc, SELL - DEPOSIT)}</span>
                <St k="todo">{p.upcoming}</St>
              </div>
            </div>
            <div className="au-card">
              <div className="au-lines-h"><b>{p.invTitle}</b></div>
              <div className="au-pr">
                <div><b>{p.invDeposit}</b><small>A-2027-0031</small></div>
                <span className="au-date" />
                <span className="au-amt">{eur(loc, DEPOSIT)}</span>
                <St k="ok">{p.invPaid}</St>
              </div>
              <div className="au-pr">
                <div><b>{p.invFinal}</b></div>
                <span className="au-date" />
                <span className="au-amt">{eur(loc, SELL)}</span>
                <St k="todo">{p.invDraft}</St>
              </div>
            </div>
          </div>
        </div>
      </Shell>
    </AppShot>
  );
}
