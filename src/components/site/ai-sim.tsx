'use client';

import { useEffect, useRef, useState } from 'react';
import type { AiSimRow, AiSimStep, AiSimStepId, AiSimText } from '@/content/types';

/**
 * A simulation of working in Traviosoft from an AI assistant, on a sample agency, with no AI behind it.
 *
 * Left: a chat laid out like the AI apps people use. The visitor picks short messages, and each answer
 * offers the next, more precise ones (Create a quote > For Iris & Noah > Set the payment terms > 30%).
 * The assistant shows what it reads in Traviosoft, gives the details in the chat, and asks before each
 * change, as Claude, ChatGPT and Mistral do. A deletion then waits in Change review.
 * Right: the Traviosoft screens. Each step opens the screen it changes, and the visitor can move
 * between them. Nothing leaves the page.
 */

type Id = AiSimStepId;
type Screen = 'dashboard' | 'quotes' | 'quote' | 'bookings' | 'payments' | 'review';
type QuoteKey = 'iris' | 'madrid';

type Msg =
  | { k: 'me'; text: string }
  | { k: 'tools'; lines: string[]; shown: number; done: boolean }
  | { k: 'bot'; id: Id }
  | { k: 'ask'; id: Id; state: 'open' | 'allowed' | 'denied' }
  | { k: 'text'; text: string };

type App = {
  screen: Screen;
  quote: QuoteKey | null;
  quoteSent: boolean;
  terms: number | null;
  sendHint: boolean;
  olabarriPaid: boolean;
  sevilleConfirmed: boolean;
  granadaRequested: boolean;
  queued: 'delLind' | 'delWeber' | null;
  removed: ('delLind' | 'delWeber')[];
  trashed: boolean;
  flash: string | null;
};

const START: App = {
  screen: 'dashboard', quote: null, quoteSent: false, terms: null, sendHint: false,
  olabarriPaid: false, sevilleConfirmed: false, granadaRequested: false,
  queued: null, removed: [], trashed: false, flash: null
};

const ROOT: Id[] = ['today', 'quote', 'bookings', 'remove'];

/** What each answer offers next. A step with nothing here leads back to what is left of the start. */
const NEXT: Partial<Record<Id, Id[]>> = {
  today: ['late', 'quote', 'bookings'],
  late: ['payOlabarri'],
  quote: ['quoteIris', 'madridBianchi'],
  quoteIris: ['terms', 'send'],
  madridBianchi: ['terms', 'send'],
  terms: ['terms30', 'terms50'],
  terms30: ['send'],
  terms50: ['send'],
  bookings: ['confirmSeville', 'requestGranada'],
  confirmSeville: ['requestGranada'],
  requestGranada: ['confirmSeville'],
  remove: ['delLind', 'delWeber']
};

/** Selling prices of the proposed services, in the order of the step's rows (they add up to the total). */
const PRICES: Partial<Record<Id, number[]>> = {
  quoteIris: [90, 1140, 260, 340, 620, 210], // 2660, of which margin 450
  madridBianchi: [140, 1320, 280, 360] // 2100, of which margin 380
};
const QUOTES: Record<QuoteKey, { step: Id; client: string; total: number; margin: number; balanceDue: Date }> = {
  iris: { step: 'quoteIris', client: 'Iris & Noah', total: 2660, margin: 450, balanceDue: new Date(2027, 3, 3) },
  madrid: { step: 'madridBianchi', client: 'Famiglia Bianchi', total: 2100, margin: 380, balanceDue: new Date(2027, 4, 13) }
};
const DRAFTS = { delLind: { client: 'Anna Lind', total: 1980 }, delWeber: { client: 'Familie Weber', total: 1450 } };

/** The screen a step shows when it is sent, and the one it opens once its change is allowed. */
const SHOWS: Partial<Record<Id, Screen>> = { today: 'dashboard', late: 'payments', remove: 'quotes', bookings: 'bookings', terms: 'quote', send: 'quote' };

export function AiSim({ t, locale }: { t: AiSimText; locale: string }) {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [used, setUsed] = useState<Id[]>([]);
  const [choices, setChoices] = useState<Id[]>(ROOT);
  const [busy, setBusy] = useState(false);
  const [app, setApp] = useState<App>(START);
  // On phones one side shows at a time; a dot on the Traviosoft tab says something changed there.
  const [tab, setTab] = useState<'chat' | 'app'>('chat');
  const [dot, setDot] = useState(false);
  const seen = useRef('');
  const logRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  const eur = (v: number) => new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(v);
  const day = (d: Date) => new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long' }).format(d);
  const later = (fn: () => void, ms: number) => { timers.current.push(window.setTimeout(fn, ms)); };
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }, [msgs, choices]);
  const appKey = JSON.stringify({ ...app, flash: null, sendHint: false });
  useEffect(() => {
    if (seen.current && seen.current !== appKey && tab === 'chat') setDot(true);
    seen.current = appKey;
  }, [appKey, tab]);
  const showTab = (k: 'chat' | 'app') => { setTab(k); if (k === 'app') setDot(false); };

  const q = app.quote ? QUOTES[app.quote] : null;
  const dep = q && app.terms ? Math.round(q.total * app.terms) : 0;
  const fill = (s: string, pct: number | null = app.terms) => {
    const d = q && pct ? Math.round(q.total * pct) : 0;
    return s
      .replace(/\{(\d+)\}/g, (_, n) => eur(Number(n)))
      .replace('{dep}', eur(d))
      .replace('{bal}', eur(q ? q.total - d : 0))
      .replace('{due}', q ? day(q.balanceDue) : '');
  };
  const pctOf = (id: Id) => (id === 'terms30' ? 0.3 : id === 'terms50' ? 0.5 : null);

  const flash = (key: string) => {
    setApp(a => ({ ...a, flash: key }));
    later(() => setApp(a => ({ ...a, flash: null })), 1500);
  };
  const go = (screen: Screen) => setApp(a => ({ ...a, screen }));

  const nextFor = (id: Id, usedNow: Id[]) => {
    const n = (NEXT[id] ?? []).filter(x => !usedNow.includes(x));
    return n.length ? n : ROOT.filter(x => !usedNow.includes(x));
  };

  const send = (id: Id) => {
    if (busy) return;
    const s = t.steps[id];
    const usedNow = [...used, id];
    setUsed(usedNow);
    setBusy(true);
    setChoices([]);
    setMsgs(x => [...x, { k: 'me', text: s.say }]);
    const tools = s.tools ?? [];
    const pace = 420;
    if (tools.length) {
      later(() => setMsgs(x => [...x, { k: 'tools', lines: tools, shown: 1, done: false }]), 300);
      tools.slice(1).forEach((_, i) => later(() => setMsgs(x => x.map(m => (m.k === 'tools' && !m.done ? { ...m, shown: i + 2 } : m))), 300 + pace * (i + 1)));
    }
    const at = 300 + pace * Math.max(tools.length, 1) + 200;
    later(() => {
      setMsgs(x => [
        ...x.map(m => (m.k === 'tools' && !m.done ? { ...m, done: true } : m)),
        ...(s.reply || s.rows ? [{ k: 'bot', id } as Msg] : []),
        ...(s.ask ? [{ k: 'ask', id, state: 'open' } as Msg] : [])
      ]);
      const screen = SHOWS[id];
      if (screen) go(screen);
      if (id === 'send') { setApp(a => ({ ...a, sendHint: true })); flash('send'); }
      setBusy(false);
      if (!s.ask) setChoices(nextFor(id, usedNow));
    }, at);
  };

  const answer = (id: Id, allow: boolean) => {
    setMsgs(x => x.map(m => (m.k === 'ask' && m.id === id && m.state === 'open' ? { ...m, state: allow ? 'allowed' : 'denied' } : m)));
    setBusy(true);
    later(() => {
      if (!allow) {
        setMsgs(x => [...x, { k: 'text', text: t.deniedReply }]);
      } else {
        // The change lands in Traviosoft, which opens the screen it changed.
        if (id === 'quoteIris' || id === 'madridBianchi') {
          setApp(a => ({ ...a, quote: id === 'quoteIris' ? 'iris' : 'madrid', screen: 'quote' }));
          flash('quote');
        } else if (id === 'terms30' || id === 'terms50') {
          setApp(a => ({ ...a, terms: pctOf(id), screen: 'quote' }));
          flash('schedule');
        } else if (id === 'payOlabarri') {
          setApp(a => ({ ...a, olabarriPaid: true, screen: 'payments' }));
          flash('olabarri');
        } else if (id === 'confirmSeville') {
          setApp(a => ({ ...a, sevilleConfirmed: true, screen: 'bookings' }));
          flash('seville');
        } else if (id === 'requestGranada') {
          setApp(a => ({ ...a, granadaRequested: true, screen: 'bookings' }));
          flash('granada');
        } else if (id === 'delLind' || id === 'delWeber') {
          setApp(a => ({ ...a, queued: id, trashed: false, screen: 'review' }));
          flash('review');
        }
        setMsgs(x => [...x, { k: 'text', text: t.steps[id].done ?? '' }]);
      }
      setBusy(false);
      setChoices(allow ? nextFor(id, used) : ROOT.filter(x => !used.includes(x)));
    }, 650);
  };

  const approveInApp = () => setApp(a => (a.queued ? { ...a, removed: [...a.removed, a.queued], queued: null, trashed: true } : a));
  const sendInApp = () => { setApp(a => ({ ...a, quoteSent: true, sendHint: false })); flash('status'); };

  const restart = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setMsgs([]); setUsed([]); setChoices(ROOT); setBusy(false); setApp(START); setDot(false); setTab('chat');
    seen.current = '';
  };

  const waiting = msgs.some(m => m.k === 'ask' && m.state === 'open');
  const showMore = !busy && !waiting && choices.length > 0 && !ROOT.some(r => choices.includes(r)) && ROOT.some(r => !used.includes(r));

  return (
    <div className="sim" data-tab={tab}>
      <div className="sim-tabs" role="tablist">
        <button type="button" role="tab" aria-selected={tab === 'chat'} onClick={() => showTab('chat')}>{t.chatTab}</button>
        <button type="button" role="tab" aria-selected={tab === 'app'} onClick={() => showTab('app')}>
          Traviosoft{dot && <i className="sim-dot" aria-label={t.changed} />}
        </button>
      </div>
      <div className="sim-chat">
        <div className="sim-head">
          <b>{t.chatTitle}</b>
          <span className="sim-conn"><i aria-hidden="true" />{t.connected}</span>
        </div>
        <div className="sim-log" ref={logRef} aria-live="polite" data-empty={msgs.length === 0 || undefined}>
          {msgs.length === 0 && <p className="sim-greet">{t.greeting}</p>}
          {msgs.map((m, i) => {
            if (m.k === 'me') return <p key={i} className="sim-me">{m.text}</p>;
            if (m.k === 'text') return <div key={i} className="sim-bot"><p>{fill(m.text)}</p></div>;
            if (m.k === 'tools') return (
              <ul key={i} className="sim-tools" aria-label={t.working}>
                {m.lines.slice(0, m.shown).map((l, j) => (
                  <li key={j} data-done={m.done || j < m.shown - 1 || undefined}><Tick />{l}</li>
                ))}
              </ul>
            );
            if (m.k === 'bot') return <Bot key={i} s={t.steps[m.id]} prices={PRICES[m.id]} fill={fill} eur={eur} />;
            return <Ask key={i} m={m} s={t.steps[m.id]} t={t} fill={s => fill(s, pctOf(m.id))} onAnswer={answer} />;
          })}
          {!busy && !waiting && (choices.length > 0 || used.length > 0) && (
            <div className="sim-chips">
              {choices.map(id => (
                <button key={id} type="button" className="sim-chip" onClick={() => send(id)}>{t.steps[id].say}</button>
              ))}
              {showMore && <button type="button" className="sim-chip ghost" onClick={() => setChoices(ROOT.filter(x => !used.includes(x)))}>{t.more}</button>}
              {used.length > 0 && <button type="button" className="sim-restart" onClick={restart}>{t.restart}</button>}
            </div>
          )}
        </div>
      </div>

      <AppPane t={t} app={app} go={go} eur={eur} day={day} dep={dep} approve={approveInApp} sendQuote={sendInApp} />
    </div>
  );
}

function Tick() {
  return <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Bot({ s, prices, fill, eur }: { s: AiSimStep; prices?: number[]; fill: (s: string) => string; eur: (v: number) => string }) {
  return (
    <div className="sim-bot">
      {s.reply && <p>{fill(s.reply)}</p>}
      {s.rows && (
        prices ? (
          <table className="sim-prop">
            <tbody>
              {s.rows.map((r, i) => (
                <tr key={r.t}><td><b>{r.t}</b><small>{r.s}</small></td><td className="sim-fig">{eur(prices[i])}</td></tr>
              ))}
            </tbody>
          </table>
        ) : (
          <ul className="sim-list">{s.rows.map(r => <li key={r.t}><b>{fill(r.t)}</b><span>{fill(r.s)}</span></li>)}</ul>
        )
      )}
      {s.after && <p>{fill(s.after)}</p>}
    </div>
  );
}

function Ask({ m, s, t, fill, onAnswer }: {
  m: Extract<Msg, { k: 'ask' }>; s: AiSimStep; t: AiSimText; fill: (s: string) => string; onAnswer: (id: Id, allow: boolean) => void;
}) {
  if (!s.ask) return null;
  return (
    <div className="sim-ask">
      <span className="sim-ask-app">Traviosoft</span>
      <b>{s.ask.action}</b>
      <dl>{s.ask.rows.map((r: AiSimRow) => <div key={r.t}><dt>{r.t}</dt><dd>{fill(r.s)}</dd></div>)}</dl>
      {m.state === 'open' ? (
        <div className="sim-ask-btns">
          <button type="button" className="sim-btn ghost" onClick={() => onAnswer(m.id, false)}>{t.deny}</button>
          <button type="button" className="sim-btn" onClick={() => onAnswer(m.id, true)}>{t.allow}</button>
        </div>
      ) : (
        <span className={`pill ${m.state === 'allowed' ? 'p-ok' : 'p-grey'} sim-ask-state`}>{m.state === 'allowed' ? t.allowedTag : t.deniedTag}</span>
      )}
    </div>
  );
}

function AppPane({ t, app, go, eur, day, dep, approve, sendQuote }: {
  t: AiSimText; app: App; go: (s: Screen) => void; eur: (v: number) => string; day: (d: Date) => string; dep: number;
  approve: () => void; sendQuote: () => void;
}) {
  const u = t.ui;
  const n = t.names;
  const fl = (k: string) => app.flash === k || undefined;
  const late = app.olabarriPaid ? [960] : [1427, 960];
  const q = app.quote ? QUOTES[app.quote] : null;
  const qs = q ? t.steps[q.step] : null;
  const qTrip = app.quote === 'madrid' ? n.madridTrip : n.irisTrip;
  const nav: [Screen, string][] = [['dashboard', t.nav.dashboard], ['quotes', t.nav.quotes], ['bookings', t.nav.bookings], ['payments', t.nav.payments], ['review', t.nav.review]];
  const navOn = app.screen === 'quote' ? 'quotes' : app.screen;
  const drafts = (['delLind', 'delWeber'] as const).filter(d => !app.removed.includes(d));

  return (
    <div className="sim-app" aria-label="Traviosoft">
      <div className="sim-head"><b>Traviosoft</b></div>
      <nav className="sim-nav">
        {nav.map(([k, label]) => (
          <button key={k} type="button" aria-current={navOn === k || undefined} onClick={() => go(k)}>
            {label}{k === 'review' && app.queued && <span className="sim-badge">1</span>}
          </button>
        ))}
      </nav>
      <div className="sim-screen" key={app.screen + (app.quote ?? '')}>
        {app.screen === 'dashboard' && (
          <ul className="sim-rows">
            <li><span><b>{u.newRequests}</b><small>Iris &amp; Noah · {n.irisTrip}</small></span><span className="sim-count">{app.quote === 'iris' ? 0 : 1}</span></li>
            <li><span><b>{u.toFollow}</b><small>Famiglia Bianchi · {n.bianchiTrip}</small></span><span className="sim-count">1</span></li>
            <li><span><b>{u.latePayments}</b><small>{eur(late.reduce((a, b) => a + b, 0))}</small></span><span className="sim-count">{late.length}</span></li>
            <li><span><b>{u.bookingsLeft}</b><small>Famiglia Bianchi · {n.bianchiTrip}</small></span><span className="sim-count">{app.sevilleConfirmed ? 1 : 2}</span></li>
          </ul>
        )}

        {app.screen === 'quotes' && (
          <ul className="sim-rows">
            {q && (
              <li className="sim-link" data-flash={fl('quote')}>
                <button type="button" onClick={() => go('quote')}><span><b>{q.client}</b><small>{qTrip}</small></span><span className="sim-fig">{eur(q.total)}</span><span className={`pill ${app.quoteSent ? 'p-wait' : 'p-grey'}`}>{app.quoteSent ? u.sent : u.draft}</span></button>
              </li>
            )}
            <li><span><b>Famiglia Bianchi</b><small>{n.bianchiTrip}</small></span><span className="sim-fig">{eur(3900)}</span><span className="pill p-wait">{u.sent}</span></li>
            {drafts.map(d => (
              <li key={d} data-flash={app.queued === d ? fl('review') : undefined}><span><b>{DRAFTS[d].client}</b><small>{d === 'delLind' ? n.lindTrip : n.weberTrip}</small></span><span className="sim-fig">{eur(DRAFTS[d].total)}</span><span className="pill p-grey">{u.draft}</span></li>
            ))}
          </ul>
        )}

        {app.screen === 'quote' && (q && qs ? (
          <div className="sim-quote" data-flash={fl('quote')}>
            <div className="sim-quote-head">
              <span><b>{q.client}</b><small>{qTrip}</small></span>
              <span className={`pill ${app.quoteSent ? 'p-wait' : 'p-grey'}`} data-flash={fl('status')}>{app.quoteSent ? u.sent : u.draft}</span>
            </div>
            <ul className="sim-lines">
              {(qs.rows ?? []).map((r, i) => <li key={r.t}><span><b>{r.t}</b><small>{r.s}</small></span><span className="sim-fig">{eur(PRICES[q.step]![i])}</span></li>)}
            </ul>
            <div className="sim-total"><span>{u.total}</span><b className="sim-fig">{eur(q.total)}</b></div>
            <div className="sim-margin"><span>{u.margin}</span><span className="sim-fig">{eur(q.margin)}</span></div>
            {app.terms && (
              <div className="sim-sched" data-flash={fl('schedule')}>
                <h4>{u.schedule}</h4>
                <div><span>{u.deposit} · {Math.round(app.terms * 100)}%</span><span className="sim-fig">{eur(dep)}</span></div>
                <div><span>{u.balance} · {day(q.balanceDue)}</span><span className="sim-fig">{eur(q.total - dep)}</span></div>
              </div>
            )}
            {!app.quoteSent && (
              <div className="sim-quote-foot">
                <button type="button" className="sim-btn" data-hint={app.sendHint || undefined} onClick={sendQuote}>{u.send}</button>
              </div>
            )}
          </div>
        ) : (
          <ul className="sim-rows"><li className="sim-empty"><span>{u.reviewEmpty}</span></li></ul>
        ))}

        {app.screen === 'bookings' && (
          <>
            <p className="sim-sub">Famiglia Bianchi · {n.bianchiTrip}</p>
            <ul className="sim-rows">
              <li data-flash={fl('seville')}><span><b>{n.hotelSeville}</b><small>{app.sevilleConfirmed ? `${u.reference} 48213` : ' '}</small></span><span className={`pill ${app.sevilleConfirmed ? 'p-ok' : 'p-wait'}`}>{app.sevilleConfirmed ? u.confirmed : u.requested}</span></li>
              <li><span><b>{n.guideCordoba}</b><small>{' '}</small></span><span className="pill p-ok">{u.confirmed}</span></li>
              <li data-flash={fl('granada')}><span><b>{n.hotelGranada}</b><small>{' '}</small></span><span className={`pill ${app.granadaRequested ? 'p-wait' : 'p-grey'}`}>{app.granadaRequested ? u.requested : u.toBook}</span></li>
            </ul>
          </>
        )}

        {app.screen === 'payments' && (
          <ul className="sim-rows">
            <li data-flash={fl('olabarri')}><span><b>Familia Olabarri</b><small>{n.olabarriPay}</small></span><span className="sim-fig">{eur(1427)}</span><span className={`pill ${app.olabarriPaid ? 'p-ok' : 'p-wait'}`}>{app.olabarriPaid ? u.paid : u.late}</span></li>
            <li><span><b>Sophie Martin</b><small>{n.martinPay}</small></span><span className="sim-fig">{eur(960)}</span><span className="pill p-wait">{u.late}</span></li>
            {q && app.terms && (
              <>
                <li><span><b>{q.client}</b><small>{u.deposit} · {qTrip}</small></span><span className="sim-fig">{eur(dep)}</span><span className="pill p-grey">{u.due}</span></li>
                <li><span><b>{q.client}</b><small>{u.balance} · {day(q.balanceDue)}</small></span><span className="sim-fig">{eur(q.total - dep)}</span><span className="pill p-grey">{u.due}</span></li>
              </>
            )}
          </ul>
        )}

        {app.screen === 'review' && (
          <ul className="sim-rows">
            {app.queued ? (
              <li data-flash={fl('review')}>
                <span><b>{t.steps[app.queued].ask?.action}</b><small>{DRAFTS[app.queued].client} · {app.queued === 'delLind' ? n.lindTrip : n.weberTrip}</small></span>
                <button type="button" className="sim-btn" onClick={approve}>{u.approve}</button>
              </li>
            ) : (
              <li className="sim-empty"><span>{app.trashed ? u.trashed : u.reviewEmpty}</span></li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
