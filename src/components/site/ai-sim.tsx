'use client';

import { useEffect, useRef, useState } from 'react';
import type { AiSimText } from '@/content/types';

/**
 * A simulation of working in Traviosoft from an AI assistant, on sample data, with no AI behind it.
 * Left: the chat. The visitor sends one of four prepared messages; a change is asked first in the
 * chat (as Claude, ChatGPT and Mistral do), and a deletion then waits in Change review, where the
 * visitor approves it. Right: the Traviosoft screens the messages change. Nothing leaves the page.
 */

type StepId = 'today' | 'quote' | 'booking' | 'remove';
type Msg =
  | { k: 'me'; text: string }
  | { k: 'bot'; text: string; rows?: { t: string; s: string }[] }
  | { k: 'ask'; step: StepId; title: string; sub: string; state: 'open' | 'allowed' | 'denied' }
  | { k: 'thinking' };

type App = {
  irisQuote: boolean;
  hotelConfirmed: boolean;
  olabarri: 'there' | 'queued' | 'gone';
  flash: string | null;
};

const START: App = { irisQuote: false, hotelConfirmed: false, olabarri: 'there', flash: null };

export function AiSim({ t, locale }: { t: AiSimText; locale: string }) {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [used, setUsed] = useState<StepId[]>([]);
  const [busy, setBusy] = useState(false);
  const [app, setApp] = useState<App>(START);
  const logRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  const eur = (v: number) => new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(v);
  const later = (fn: () => void, ms: number) => { timers.current.push(window.setTimeout(fn, ms)); };
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }, [msgs]);

  const flash = (key: string) => {
    setApp(a => ({ ...a, flash: key }));
    later(() => setApp(a => ({ ...a, flash: null })), 1400);
  };

  // The assistant "works" for a moment, then answers.
  const reply = (m: Msg) => {
    setMsgs(x => [...x, { k: 'thinking' }]);
    later(() => { setMsgs(x => [...x.filter(y => y.k !== 'thinking'), m]); setBusy(false); }, 900);
  };

  const send = (id: StepId) => {
    if (busy || used.includes(id)) return;
    setBusy(true);
    setUsed(u => [...u, id]);
    const s = t[id];
    setMsgs(x => [...x, { k: 'me', text: s.prompt }]);
    if (id === 'today') reply({ k: 'bot', text: t.today.answer, rows: t.today.rows });
    else {
      const a = s as AiSimText['quote'];
      reply({ k: 'ask', step: id, title: a.askTitle, sub: a.askSub, state: 'open' });
    }
  };

  const answer = (id: StepId, allow: boolean) => {
    setMsgs(x => x.map(m => (m.k === 'ask' && m.step === id && m.state === 'open' ? { ...m, state: allow ? 'allowed' : 'denied' } : m)));
    if (!allow) { setBusy(true); reply({ k: 'bot', text: t.denied }); return; }
    setBusy(true);
    if (id === 'quote') {
      later(() => { setApp(a => ({ ...a, irisQuote: true })); flash('iris'); }, 700);
      reply({ k: 'bot', text: t.quote.done.replace('{total}', eur(2660)).replace('{margin}', eur(450)) });
    } else if (id === 'booking') {
      later(() => { setApp(a => ({ ...a, hotelConfirmed: true })); flash('hotel'); }, 700);
      reply({ k: 'bot', text: t.booking.done });
    } else if (id === 'remove') {
      later(() => { setApp(a => ({ ...a, olabarri: 'queued' })); flash('review'); }, 700);
      reply({ k: 'bot', text: t.remove.queued });
    }
  };

  const approveInApp = () => {
    setApp(a => ({ ...a, olabarri: 'gone' }));
    setMsgs(x => [...x, { k: 'bot', text: t.remove.approved }]);
  };

  const restart = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setMsgs([]); setUsed([]); setBusy(false); setApp(START);
  };

  const steps: StepId[] = ['today', 'quote', 'booking', 'remove'];
  const left = steps.filter(s => !used.includes(s));
  const waiting = msgs.some(m => m.k === 'ask' && m.state === 'open');

  return (
    <div className="sim">
      <div className="sim-chat">
        <div className="sim-head"><b>{t.chatTitle}</b><span>{t.chatSub}</span></div>
        <div className="sim-log" ref={logRef} aria-live="polite">
          {msgs.map((m, i) => {
            if (m.k === 'me') return <p key={i} className="sim-me">{m.text}</p>;
            if (m.k === 'thinking') return <p key={i} className="sim-bot sim-thinking"><span>{t.thinking}</span><i aria-hidden="true" /><i aria-hidden="true" /><i aria-hidden="true" /></p>;
            if (m.k === 'bot') return (
              <div key={i} className="sim-bot">
                <p>{m.text}</p>
                {m.rows && <ul>{m.rows.map(r => <li key={r.t}><b>{r.t}</b><span>{r.s}</span></li>)}</ul>}
              </div>
            );
            return (
              <div key={i} className="sim-ask">
                <b>{m.title}</b>
                <span>{m.sub}</span>
                {m.state === 'open' ? (
                  <div className="sim-ask-btns">
                    <button type="button" className="sim-btn ghost" onClick={() => answer(m.step, false)}>{t.deny}</button>
                    <button type="button" className="sim-btn" onClick={() => answer(m.step, true)}>{t.allow}</button>
                  </div>
                ) : (
                  <span className={`pill ${m.state === 'allowed' ? 'p-ok' : 'p-grey'} sim-ask-state`}>{m.state === 'allowed' ? t.allowedTag : t.deniedTag}</span>
                )}
              </div>
            );
          })}
        </div>
        <div className="sim-prompts">
          {left.length > 0 ? (
            <>
              <p className="sim-pick">{t.pick}</p>
              {left.map(s => (
                <button key={s} type="button" className="sim-prompt" disabled={busy || waiting} onClick={() => send(s)}>{t[s].prompt}</button>
              ))}
            </>
          ) : null}
          {used.length > 0 && <button type="button" className="sim-restart" onClick={restart}>{t.restart}</button>}
        </div>
      </div>

      <div className="sim-app" aria-label={t.appTitle}>
        <div className="sim-head"><b>{t.appTitle}</b><span>{t.appSub}</span></div>
        <section>
          <h3>{t.quotes}</h3>
          <ul className="sim-rows">
            {app.irisQuote && <li data-flash={app.flash === 'iris' || undefined}><span><b>Iris &amp; Noah</b><small>{t.irisTrip}</small></span><span className="sim-fig">{eur(2660)}</span><span className="pill p-grey">{t.draft}</span></li>}
            <li><span><b>Famiglia Bianchi</b><small>{t.bianchiTrip}</small></span><span className="sim-fig">{eur(3900)}</span><span className="pill p-wait">{t.sent}</span></li>
            {app.olabarri !== 'gone' && <li><span><b>Familia Olabarri</b><small>{t.olabarriTrip}</small></span><span className="sim-fig">{eur(1240)}</span><span className="pill p-grey">{t.draft}</span></li>}
          </ul>
        </section>
        <section>
          <h3>{t.bookings}</h3>
          <ul className="sim-rows">
            <li data-flash={app.flash === 'hotel' || undefined}><span><b>{t.hotelSeville}</b><small>{app.hotelConfirmed ? '48213' : ' '}</small></span><span className={`pill ${app.hotelConfirmed ? 'p-ok' : 'p-wait'}`}>{app.hotelConfirmed ? t.confirmed : t.requested}</span></li>
            <li><span><b>{t.guideCordoba}</b><small>{' '}</small></span><span className="pill p-ok">{t.confirmed}</span></li>
            <li><span><b>{t.hotelGranada}</b><small>{' '}</small></span><span className="pill p-wait">{t.requested}</span></li>
          </ul>
        </section>
        <section>
          <h3>{t.review}</h3>
          <ul className="sim-rows">
            {app.olabarri === 'queued' ? (
              <li data-flash={app.flash === 'review' || undefined}><span><b>{t.remove.reviewItem}</b></span><button type="button" className="sim-btn" onClick={approveInApp}>{t.approve}</button></li>
            ) : (
              <li className="sim-empty"><span>{t.reviewEmpty}</span></li>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}
