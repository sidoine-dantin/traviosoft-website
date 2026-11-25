'use client';

import { useEffect } from 'react';
import { bookedConversion } from './consent';
import { adSourceConfig } from './ad-source';

/** The header's "Book a demo" sends this when the visitor is already on the demo page. */
export const OPEN_BOOKING_EVENT = 'tv-open-booking';

/*
 * "Choose a time" button for the demo page. Cal.com's script loads only when the
 * visitor clicks (a service they asked for), then the booking window opens over
 * the page. A completed booking (Cal.com "bookingSuccessfulV2", or the older
 * "bookingSuccessful") is passed to the
 * ad tags, which send nothing without consent. Without JavaScript, or if the
 * script cannot load, the link opens the booking page in a new tab.
 */

type CalApi = ((...args: unknown[]) => void) & { q?: unknown[] };
type CalRoot = CalApi & { loaded?: boolean; ns: Record<string, CalApi> };
type Win = Window & { Cal?: CalRoot };

const ORIGIN = 'https://app.cal.com';
const NS = 'demo';

function loadCal(fallback: string): CalRoot {
  const w = window as Win;
  if (!w.Cal) {
    const queue = (api: CalApi, args: unknown[]) => api.q!.push(args);
    const cal = ((...args: unknown[]) => {
      const root = w.Cal!;
      if (!root.loaded) {
        const s = document.createElement('script');
        s.src = `${ORIGIN}/embed/embed.js`;
        s.async = true;
        s.onerror = () => { window.location.href = fallback; };
        document.head.appendChild(s);
        root.loaded = true;
      }
      if (args[0] === 'init' && typeof args[1] === 'string') {
        const name = args[1];
        const api = ((...a: unknown[]) => queue(api, a)) as CalApi;
        api.q = [];
        root.ns[name] = root.ns[name] ?? api;
        queue(root.ns[name], args);
        queue(root, ['initNamespace', name]);
        return;
      }
      queue(root, args);
    }) as CalRoot;
    cal.q = [];
    cal.ns = {};
    w.Cal = cal;
  }
  return w.Cal;
}

let ready = false;
function openBooking(calLink: string, locale: string) {
  const cal = loadCal(`https://cal.com/${calLink}`);
  if (!ready) {
    ready = true;
    cal('init', NS, { origin: ORIGIN });
    // V2 replaces the older event; both are heard and one booking counts once.
    let last = '';
    const onBooked = (e: { detail?: { data?: { uid?: string; booking?: { uid?: string } } } }) => {
      const d = e?.detail?.data;
      const uid = d?.uid ?? d?.booking?.uid ?? String(Math.floor(Date.now() / 10000));
      if (uid === last) return;
      last = uid;
      bookedConversion();
    };
    cal.ns[NS]('on', { action: 'bookingSuccessfulV2', callback: onBooked });
    cal.ns[NS]('on', { action: 'bookingSuccessful', callback: onBooked });
  }
  cal.ns[NS]('modal', { calLink, config: { layout: 'month_view', ...adSourceConfig() } });
}

function open(calLink: string, locale: string) {
  try {
    openBooking(calLink, locale);
  } catch {
    window.open(`https://cal.com/${calLink}`, '_blank', 'noopener');
  }
}

export function BookDemo({ calLink, label, locale }: { calLink: string; label: string; locale: string }) {
  useEffect(() => {
    const onOpen = () => open(calLink, locale);
    window.addEventListener(OPEN_BOOKING_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_BOOKING_EVENT, onOpen);
  }, [calLink, locale]);
  return (
    <a
      className="btn yellow"
      href={`https://cal.com/${calLink}`}
      target="_blank"
      rel="noopener"
      onClick={e => {
        e.preventDefault();
        open(calLink, locale);
      }}
    >
      {label}
    </a>
  );
}
