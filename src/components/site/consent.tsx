'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/navigation';

/*
 * Cookie notice and ad tags (LinkedIn Insight Tag, Meta Pixel, Google tag for Google Ads).
 * No tag loads before the visitor chooses. With no tag ID set, nothing loads and no notice shows.
 *
 * First view: title, one short paragraph, then "Accept all", "Necessary only" and "Preferences",
 * all the same size, so refusing is as easy as accepting (CNIL 2020 recommendation, EDPB cookie
 * banner taskforce 2023). "Preferences" turns the same card into one switch per purpose, both off
 * until the visitor turns them on. The choice is kept for six months; "Cookie settings" in the
 * footer reopens the switches at any time.
 */

// Public tag IDs (they appear in every page's network requests); env vars can override them.
const LINKEDIN_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || '10081602';
const LINKEDIN_CONVERSION_ID = process.env.NEXT_PUBLIC_LINKEDIN_CONVERSION_ID || '32264978'; // "Demo click"
const META_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '999533615909262';
// Google Ads tag (account 919-449-5984) and the conversion label of its "Demo click" action.
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-18573914748';
const GOOGLE_ADS_DEMO_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_DEMO_LABEL || '2FpoCKbfgrgdEPzk3ZhF'; // "Demo click" (secondary: observed, not bid on)
// "Demo booked" (primary): fired when a booking is confirmed in the booking tool.
export const GOOGLE_ADS_BOOKED_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_BOOKED_LABEL || 'sYaeCKL217kdEPzk3ZhF';
/** LinkedIn conversion for a booked demo; empty until it exists in Campaign Manager. */
const LINKEDIN_BOOKED_ID = process.env.NEXT_PUBLIC_LINKEDIN_BOOKED_CONVERSION_ID || '32357682'; // "Demo booked"
const ENABLED = Boolean(LINKEDIN_ID || META_ID || GOOGLE_ADS_ID);

const KEY = 'tv-consent';
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182;
export const OPEN_EVENT = 'tv-consent-open';

/*
 * Two purposes, each with its own switch under "Preferences" (CNIL: one consent per purpose):
 * - m, ad measurement: the Google tag counts visits and demo bookings that come from our ads,
 *   with ad personalisation off (Consent Mode v2: ad_storage and ad_user_data granted).
 * - r, ads on other sites: the LinkedIn Insight Tag and the Meta Pixel load, and the Google tag
 *   may use the visit for remarketing (ad_personalization granted). LinkedIn and Meta tags cannot
 *   measure without also building audiences, so they load only with this purpose.
 * Nothing loads before a choice: Google Consent Mode "basic" implementation.
 */
export type Choice = { m: boolean; r: boolean };

type Win = Window & {
  fbq?: ((...args: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[]; loaded?: boolean; version?: string; push?: unknown };
  _fbq?: unknown;
  _linkedin_partner_id?: string;
  _linkedin_data_partner_ids?: string[];
  lintrk?: ((...args: unknown[]) => void) & { q?: unknown[] };
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

function readChoice(): Choice | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const v = JSON.parse(raw) as { c?: 'granted' | 'denied'; m?: boolean; r?: boolean; t: number };
    if (typeof v.t !== 'number' || Date.now() - v.t > MAX_AGE_MS) return null;
    if (typeof v.m === 'boolean' && typeof v.r === 'boolean') return { m: v.m, r: v.r };
    // A choice made with the earlier one-switch banner: "Accept all" covered both purposes.
    if (v.c === 'granted') return { m: true, r: true };
    if (v.c === 'denied') return { m: false, r: false };
    return null;
  } catch {
    return null;
  }
}

const CHANGE_EVENT = 'tv-consent-change';
let memoryChoice: Choice | null = null; // used when storage is blocked

function saveChoice(c: Choice) {
  memoryChoice = c;
  try {
    localStorage.setItem(KEY, JSON.stringify({ m: c.m, r: c.r, t: Date.now() }));
  } catch {
    /* storage blocked: the choice lasts for this page only */
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(cb: () => void) {
  window.addEventListener(CHANGE_EVENT, cb);
  window.addEventListener('storage', cb);
  return () => {
    window.removeEventListener(CHANGE_EVENT, cb);
    window.removeEventListener('storage', cb);
  };
}
/** A string so React can compare snapshots: 'unset' before a choice, 'server' while rendering on the server, else "m1r0". */
const encode = (c: Choice) => `m${c.m ? 1 : 0}r${c.r ? 1 : 0}`;
const snapshot = () => {
  const c = readChoice() ?? memoryChoice;
  return c ? encode(c) : 'unset';
};
const serverSnapshot = () => 'server';
function decode(s: string): Choice | null {
  const m = /^m([01])r([01])$/.exec(s);
  return m ? { m: m[1] === '1', r: m[2] === '1' } : null;
}
const current = () => decode(snapshot());

function addScript(src: string) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

const loaded = { google: false, social: false };

function googleConsent(c: Choice) {
  return {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: c.r ? 'granted' : 'denied',
    analytics_storage: 'denied'
  };
}

function loadTags(c: Choice) {
  const w = window as Win;
  if (GOOGLE_ADS_ID && (c.m || c.r)) {
    if (!loaded.google) {
      loaded.google = true;
      w.dataLayer = w.dataLayer ?? [];
      // gtag needs the real `arguments` object, not an array.
      w.gtag = function gtag() {
        w.dataLayer!.push(arguments);
      };
      // Consent Mode v2: everything refused by default, then the visitor's choice. No analytics at all.
      w.gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied' });
      w.gtag('consent', 'update', googleConsent(c));
      w.gtag('js', new Date());
      w.gtag('config', GOOGLE_ADS_ID, { send_page_view: false });
      addScript(`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`);
    } else {
      w.gtag?.('consent', 'update', googleConsent(c));
    }
  }
  if (!c.r || loaded.social) return;
  loaded.social = true;
  if (LINKEDIN_ID) {
    w._linkedin_partner_id = LINKEDIN_ID;
    w._linkedin_data_partner_ids = [...(w._linkedin_data_partner_ids ?? []), LINKEDIN_ID];
    if (!w.lintrk) {
      const q: unknown[] = [];
      const fn = ((...args: unknown[]) => { q.push(args); }) as NonNullable<Win['lintrk']>;
      fn.q = q;
      w.lintrk = fn;
    }
    addScript('https://snap.licdn.com/li.lms-analytics/insight.min.js');
  }
  if (META_ID) {
    if (!w.fbq) {
      const fbq = ((...args: unknown[]) => {
        if (fbq.callMethod) (fbq.callMethod as (...a: unknown[]) => void)(...args);
        else fbq.queue!.push(args);
      }) as NonNullable<Win['fbq']>;
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = '2.0';
      fbq.queue = [];
      w.fbq = fbq;
      w._fbq = fbq;
    }
    addScript('https://connect.facebook.net/en_US/fbevents.js');
    w.fbq('init', META_ID);
  }
}

/**
 * Every page counts as a view; pricing and demo pages also mark interest (Meta ViewContent).
 * Google Ads builds its remarketing lists from these page views (by URL).
 */
function trackPage(pathname: string) {
  const w = window as Win;
  if (loaded.google) w.gtag?.('event', 'page_view', { send_to: GOOGLE_ADS_ID, page_location: window.location.href });
  if (!META_ID || !loaded.social) return;
  w.fbq?.('track', 'PageView');
  const page = pathname.split('/').filter(Boolean).pop();
  if (page === 'pricing' || page === 'demo') w.fbq?.('track', 'ViewContent', { content_name: page });
}

/**
 * Sends one Google Ads conversion (by its label). Does nothing unless the visitor
 * accepted and the tag is loaded, so it is safe to call from anywhere.
 */
export function googleConversion(label: string) {
  if (!GOOGLE_ADS_ID || !label || !loaded.google) return;
  (window as Win).gtag?.('event', 'conversion', { send_to: `${GOOGLE_ADS_ID}/${label}` });
}

/** "Demo click" conversion on LinkedIn and Google Ads. */
function demoConversion() {
  const w = window as Win;
  if (loaded.social && LINKEDIN_ID && LINKEDIN_CONVERSION_ID) w.lintrk?.('track', { conversion_id: Number(LINKEDIN_CONVERSION_ID) });
  googleConversion(GOOGLE_ADS_DEMO_LABEL);
}

/**
 * A demo was booked in the Cal.com window: the main conversion on Google Ads
 * ("Demo booked"), Meta (Schedule) and LinkedIn. Nothing is sent without consent.
 */
export function bookedConversion() {
  const w = window as Win;
  googleConversion(GOOGLE_ADS_BOOKED_LABEL);
  if (!loaded.social) return;
  if (META_ID) w.fbq?.('track', 'Schedule');
  if (LINKEDIN_ID && LINKEDIN_BOOKED_ID) w.lintrk?.('track', { conversion_id: Number(LINKEDIN_BOOKED_ID) });
}

/*
 * Interest signals for retargeting: a click on a "Book a demo" link (any link to
 * the demo page) is a Meta DemoClick, a click on the demo email address is a Meta
 * Contact, and both count as a LinkedIn and a Google Ads "Demo click" (secondary).
 * Meta Schedule is kept for real bookings (bookedConversion).
 */
function trackClick(target: EventTarget | null) {
  const a = (target as Element | null)?.closest?.('a[href]');
  if (!a) return;
  const href = a.getAttribute('href') ?? '';
  const w = window as Win;
  if (href.startsWith('mailto:')) {
    if (META_ID && loaded.social) w.fbq?.('track', 'Contact');
    demoConversion();
    return;
  }
  let path = '';
  try {
    const url = new URL(href, window.location.href);
    if (url.origin === window.location.origin) path = url.pathname;
  } catch {
    return;
  }
  if (path.split('/').filter(Boolean).pop() === 'demo') {
    if (META_ID && loaded.social) w.fbq?.('trackCustom', 'DemoClick');
    demoConversion();
  }
}

export function CookieSettingsLink({ label }: { label: string }) {
  if (!ENABLED) return null;
  return (
    <li>
      <button type="button" className="foot-linkbtn" onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
        {label}
      </button>
    </li>
  );
}

export type ConsentLabels = {
  title: string; text: string; accept: string; refuse: string; preferences: string; policy: string;
  necessary: string; necessaryText: string; alwaysOn: string;
  measure: string; measureText: string; retarget: string; retargetText: string; save: string;
};

function Switch({ on, label, text, onChange }: { on: boolean; label: string; text: string; onChange: (v: boolean) => void }) {
  return (
    <div className="consent-row">
      <div className="consent-row-text">
        <span className="consent-row-name" id={`cs-${label}`}>{label}</span>
        <span className="consent-row-desc">{text}</span>
      </div>
      <button type="button" role="switch" aria-checked={on} aria-labelledby={`cs-${label}`} className="consent-switch" onClick={() => onChange(!on)}>
        <span className="consent-knob" aria-hidden="true" />
      </button>
    </div>
  );
}

export function Consent({ labels: l }: { labels: ConsentLabels }) {
  const pathname = usePathname();
  const stored = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const choice = decode(stored);
  // 'closed', the first view ('main') or the switches ('prefs'). The footer link opens the switches.
  const [view, setView] = useState<'auto' | 'main' | 'prefs' | 'closed'>('auto');
  const [draft, setDraft] = useState<Choice>({ m: false, r: false });
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ENABLED) return;
    const reopen = () => {
      setDraft(current() ?? { m: false, r: false });
      setView('prefs');
    };
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  useEffect(() => {
    if (!choice || (!choice.m && !choice.r)) return;
    loadTags(choice);
    trackPage(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stored, pathname]);

  useEffect(() => {
    if (!choice || (!choice.m && !choice.r)) return;
    const onClick = (e: MouseEvent) => trackClick(e.target);
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stored]);

  useEffect(() => {
    if (view === 'prefs') headingRef.current?.focus();
  }, [view]);

  const shown = view === 'auto' ? (stored === 'unset' ? 'main' : 'closed') : view;
  if (!ENABLED || shown === 'closed') return null;

  const decide = (c: Choice) => {
    const before = choice;
    saveChoice(c);
    setView('closed');
    // Tags already running cannot be unloaded: a reload starts the page without the ones now refused.
    if (before && ((before.r && !c.r) || ((before.m || before.r) && !c.m && !c.r))) window.location.reload();
  };
  const all = { m: true, r: true };
  const none = { m: false, r: false };

  return (
    <div className="consent" role="dialog" aria-labelledby="consent-title" data-view={shown}>
      <h2 className="consent-title" id="consent-title" ref={headingRef} tabIndex={-1}>{shown === 'prefs' ? l.preferences : l.title}</h2>
      {shown === 'main' ? (
        <>
          <p>{l.text}</p>
          <div className="consent-actions">
            <button type="button" className="consent-btn consent-accept" onClick={() => decide(all)}>{l.accept}</button>
            <button type="button" className="consent-btn consent-refuse" onClick={() => decide(none)}>{l.refuse}</button>
            <button type="button" className="consent-btn" onClick={() => { setDraft(current() ?? none); setView('prefs'); }}>{l.preferences}</button>
          </div>
        </>
      ) : (
        <>
          <div className="consent-rows">
            <div className="consent-row">
              <div className="consent-row-text">
                <span className="consent-row-name">{l.necessary}</span>
                <span className="consent-row-desc">{l.necessaryText}</span>
              </div>
              <span className="consent-always">{l.alwaysOn}</span>
            </div>
            <Switch on={draft.m} label={l.measure} text={l.measureText} onChange={m => setDraft(d => ({ ...d, m }))} />
            <Switch on={draft.r} label={l.retarget} text={l.retargetText} onChange={r => setDraft(d => ({ ...d, r }))} />
          </div>
          <div className="consent-actions">
            <button type="button" className="consent-btn consent-accept" onClick={() => decide(all)}>{l.accept}</button>
            <button type="button" className="consent-btn consent-refuse" onClick={() => decide(draft)}>{l.save}</button>
          </div>
        </>
      )}
      <Link href="/legal/privacy" className="consent-more">{l.policy}</Link>
    </div>
  );
}
