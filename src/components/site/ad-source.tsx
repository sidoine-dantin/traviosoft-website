'use client';

import { useEffect } from 'react';

/*
 * Remembers which ad brought the visitor, so a demo booked later in the visit says
 * so in Cal.com. Only the utm_* values of the landing link are kept (source,
 * medium, campaign, ad, language), for this browser tab only (sessionStorage),
 * and they leave the site only inside a booking the visitor makes. No click IDs,
 * no cookies. The first ad of the visit wins; a later visit without UTMs keeps it.
 */

const KEY = 'tv-ad-source';
const FIELDS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;

export type AdSource = Partial<Record<(typeof FIELDS)[number], string>>;

export function readAdSource(): AdSource {
  try {
    const raw = window.sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as AdSource) : {};
  } catch {
    return {};
  }
}

/** Cal.com config entries: the utm_* values as they are, plus a copy in the booking's metadata. */
export function adSourceConfig(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(readAdSource())) {
    if (!v) continue;
    out[k] = v;
    out[`metadata[${k}]`] = v;
  }
  return out;
}

export function AdSourceCapture() {
  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(KEY)) return;
      const params = new URLSearchParams(window.location.search);
      const found: AdSource = {};
      for (const f of FIELDS) {
        // Last value wins: Google appends the account's link suffix (exact ad id) after the ad's own UTMs.
        const v = params.getAll(f).filter(Boolean).pop();
        if (v) found[f] = v.slice(0, 100);
      }
      if (Object.keys(found).length) window.sessionStorage.setItem(KEY, JSON.stringify(found));
    } catch {
      /* storage blocked: the booking simply carries no source */
    }
  }, []);
  return null;
}
