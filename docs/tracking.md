# Tracking

## What is in place

### Cloudflare Web Analytics (visits, sources, pages)

`src/app/[locale]/layout.tsx` adds the Cloudflare Web Analytics beacon **only
when `NEXT_PUBLIC_CF_BEACON_TOKEN` is set**. It is cookieless, so it needs no
consent banner. The privacy policy (`legal.privacy`, "Third-party services")
already mentions it.

To turn it on:

1. Cloudflare dashboard > Analytics & Logs > Web Analytics > Add a site >
   `traviosoft.com` > copy the token from the snippet (`"token": "..."`).
2. `NEXT_PUBLIC_*` variables are inlined **at build time**, so the variable must
   be present where `npm run deploy` / `npm run build:cloudflare` runs, e.g.
   `NEXT_PUBLIC_CF_BEACON_TOKEN=<token> npm run deploy`, or in
   `.env.production.local` (git-ignored by `.env.*.local`).
   Setting it only as a Worker runtime variable is not enough.
3. Alternative without code: Cloudflare can inject the beacon automatically for
   proxied zones (Web Analytics > "Automatic setup"). Use one or the other, not
   both, or visits are counted twice.

### CTA markers (`data-cta`)

Every link to the demo booking page carries:

- `data-cta="book-demo"`
- `data-cta-location="<where>"`: `header`, `header-mobile`, `footer`,
  `home-hero`, `home-final`, `product-final`, `how-it-works-final`,
  `pricing-card`, `pricing-final`, `about-final`, `faq-final`.

The home hero's tour button carries `data-cta="watch-tour"`.

They do nothing on their own. They exist so a click listener (or a tag manager
trigger on `[data-cta]`) can send one event per click later without touching
every page, e.g.:

```js
document.addEventListener('click', e => {
  const el = e.target.closest('[data-cta]');
  if (!el) return;
  // send(el.dataset.cta, el.dataset.ctaLocation)
});
```

Cloudflare Web Analytics does not record custom events, so click counts need
one of the tools below.

## TODO

- [ ] **Meta Pixel + Conversions API** (meta-ads-plan.md, section 5). Not added
  on purpose: the Pixel sets advertising cookies, which in the EU need prior
  consent. Needs first:
  - a cookie consent banner (accept / reject, equal prominence, no Pixel loaded
    before "accept");
  - the privacy policy updated (advertising cookies, Meta as a recipient, ad
    audiences from uploaded contact lists);
  - then the Pixel loaded only after consent, a `Lead`/`Schedule` event on
    `[data-cta="book-demo"]` clicks, and CAPI server-side for the booking itself.
- [ ] **Booking completion**: the demo is booked inside a Google Calendar iframe,
  so the site cannot see a finished booking. Count CTA clicks and `/demo` page
  views as the proxy, or move to a booking tool that can redirect to a
  `/demo/thanks` page after booking.
- [ ] **UTM tags** on every ad and outreach link (`utm_source`, `utm_medium`,
  `utm_campaign`); Cloudflare Web Analytics shows the referrer and path, not UTM
  breakdowns, so keep a sheet of campaign links.
