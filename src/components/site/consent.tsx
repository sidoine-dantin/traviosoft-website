'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/navigation';

/*
 * Ad measurement (LinkedIn Insight Tag, Meta Pixel), loaded only after the
 * visitor accepts. The IDs come from build-time variables; with neither set,
 * nothing is loaded and no banner is shown.
 *
 * Refusing is as easy as accepting (one click, same size), the choice is kept
 * for six months, and "Cookie settings" in the footer reopens the banner.
 */

const LINKEDIN_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID ?? '';
const LINKEDIN_CONVERSION_ID = process.env.NEXT_PUBLIC_LINKEDIN_CONVERSION_ID ?? '';
const META_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '';
const ENABLED = Boolean(LINKEDIN_ID || META_ID);

const KEY = 'tv-consent';
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182;
export const OPEN_EVENT = 'tv-consent-open';

type Choice = 'granted' | 'denied';

type Win = Window & {
  fbq?: ((...args: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[]; loaded?: boolean; version?: string; push?: unknown };
  _fbq?: unknown;
  _linkedin_partner_id?: string;
  _linkedin_data_partner_ids?: string[];
  lintrk?: ((...args: unknown[]) => void) & { q?: unknown[] };
};

function readChoice(): Choice | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const v = JSON.parse(raw) as { c: Choice; t: number };
    if (Date.now() - v.t > MAX_AGE_MS) return null;
    return v.c === 'granted' || v.c === 'denied' ? v.c : null;
  } catch {
    return null;
  }
}

const CHANGE_EVENT = 'tv-consent-change';
let memoryChoice: Choice | null = null; // used when storage is blocked

function saveChoice(c: Choice) {
  memoryChoice = c;
  try {
    localStorage.setItem(KEY, JSON.stringify({ c, t: Date.now() }));
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
/** 'unset' before a choice, 'server' while rendering on the server (no banner then). */
const snapshot = () => readChoice() ?? memoryChoice ?? 'unset';
const serverSnapshot = () => 'server' as const;

function addScript(src: string) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

let loaded = false;
function loadTags() {
  if (loaded) return;
  loaded = true;
  const w = window as Win;
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

/** Every page counts as a view; pricing and demo pages also mark interest (Meta ViewContent). */
function trackPage(pathname: string) {
  const w = window as Win;
  if (!META_ID) return;
  w.fbq?.('track', 'PageView');
  const page = pathname.split('/').filter(Boolean).pop();
  if (page === 'pricing' || page === 'demo') w.fbq?.('track', 'ViewContent', { content_name: page });
}

function linkedinConversion() {
  const w = window as Win;
  if (LINKEDIN_ID && LINKEDIN_CONVERSION_ID) w.lintrk?.('track', { conversion_id: Number(LINKEDIN_CONVERSION_ID) });
}

/*
 * Interest signals for retargeting: a click on a "Book a demo" link (any link to
 * the demo page) is a Meta Schedule, a click on the demo email address is a Meta
 * Contact, and both count as a LinkedIn conversion.
 */
function trackClick(target: EventTarget | null) {
  const a = (target as Element | null)?.closest?.('a[href]');
  if (!a) return;
  const href = a.getAttribute('href') ?? '';
  const w = window as Win;
  if (href.startsWith('mailto:')) {
    if (META_ID) w.fbq?.('track', 'Contact');
    linkedinConversion();
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
    if (META_ID) w.fbq?.('track', 'Schedule');
    linkedinConversion();
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

export function Consent({ text, accept, refuse, policy }: { text: string; accept: string; refuse: string; policy: string }) {
  const pathname = usePathname();
  const stored = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const choice: Choice | null = stored === 'granted' || stored === 'denied' ? stored : null;
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    if (!ENABLED) return;
    const reopen = () => setReopened(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  useEffect(() => {
    if (choice !== 'granted') return;
    loadTags();
    trackPage(pathname);
  }, [choice, pathname]);

  useEffect(() => {
    if (choice !== 'granted') return;
    const onClick = (e: MouseEvent) => trackClick(e.target);
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [choice]);

  const open = reopened || stored === 'unset';
  if (!ENABLED || !open) return null;

  const decide = (c: Choice) => {
    const wasGranted = choice === 'granted';
    saveChoice(c);
    setReopened(false);
    // Tags already running cannot be unloaded: a reload starts the page without them.
    if (wasGranted && c === 'denied') window.location.reload();
  };

  return (
    <div className="consent" role="dialog" aria-live="polite" aria-label={policy}>
      <p>
        {text} <Link href="/legal/privacy">{policy}</Link>
      </p>
      <div className="consent-actions">
        <button type="button" className="consent-btn" onClick={() => decide('denied')}>{refuse}</button>
        <button type="button" className="consent-btn" onClick={() => decide('granted')}>{accept}</button>
      </div>
    </div>
  );
}
