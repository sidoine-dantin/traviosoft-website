import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const home: SiteContent['home'] = {
  metaTitle: 'Traviosoft: software for tailor-made travel agencies and DMCs',
  metaDescription:
    `Requests, quotes with your margins, bookings, client itineraries, payments and invoices in one place. For tailor-made travel agencies and DMCs. From ${PRICES.classic.yearly} EUR a month, hosted in the EU.`,
  title: 'Software for tailor-made travel agencies and DMCs',
  sub: 'Requests, quotes, bookings, payments and invoices, in one place.',
  tags: [
    { t: 'Deposit paid ✓', s: 'link in the email' },
    { t: 'Hotel confirmed', s: 'reply saved to the trip' }
  ],
  tripTitle: 'How a trip moves through Traviosoft',
  steps: [
    { time: '09:12', title: 'Request in', body: 'It lands in one list, with its next step.', job: 'sell' },
    { time: '11:40', title: 'Quote sent', body: 'Built from your rates, with your margin.', job: 'sell' },
    { time: 'Day 2', title: 'Deposit paid', body: 'Paid from the link in the email.', job: 'get-paid' },
    { time: 'Day 3', title: 'Suppliers confirmed', body: 'Hotel and guide ticked off on the trip.', job: 'book' },
    { time: 'Day 30', title: 'Final invoice', body: 'Made from the numbers of the quote.', job: 'get-paid' }
  ],
  stepGo: 'See how',
  baTitle: 'Before and after',
  beforeTitle: 'Today',
  beforeScraps: [
    { i: 'sheet', t: 'Rates_2026_FINAL_v3.xlsx' },
    { i: 'doc', t: 'Quote Smith.docx' },
    { i: 'chat', t: 'WhatsApp: "did the hotel confirm?"' },
    { i: 'bank', t: 'Deposit? check the bank' },
    { i: 'book', t: 'Invoice numbers in a notebook' },
    { i: 'mail', t: '42 unread emails' },
    { i: 'sheet', t: 'Rooming_list_Müller (2).xlsx' },
    { i: 'phone', t: 'Call back the guide' },
    { i: 'note', t: 'Who sent the quote?' },
    { i: 'pdf', t: 'Voucher_final_FINAL.pdf' },
    { i: 'calc', t: 'Margin: check again' },
    { i: 'mail', t: 'RE: RE: RE: availability' }
  ],
  afterTitle: 'With Traviosoft',
  afterBody:
    'The request, the quote, the bookings, the payments and the invoices are on the same trip, and the whole team sees the same thing.',
  priceTitle: 'Pricing',
  priceBody: 'Setup and import of your data',
  priceFree: 'free with yearly billing.',
  extraUserLine: `Each extra user: ${PRICES.extraUser.yearly} EUR a month*`,
  coin1: 'EUR/mo* · Classic',
  coin2: 'EUR/mo* · Premium',
  coinUsers: `${PRICES.usersIncluded} users`,
  priceNote: '* Per month, billed yearly, VAT excluded. Full details on the pricing page.',
  priceLink: 'Compare the plans',
  facts: [
    { k: 'Price', v: `From ${PRICES.classic.yearly} EUR a month, ${PRICES.usersIncluded} users included` },
    { k: 'For', v: 'Tailor-made agencies and DMCs' },
    { k: 'Data', v: 'A private space per agency, hosted in the EU' },
    { k: 'Languages', v: 'Documents in Spanish, Catalan, English, French and Italian' }
  ]
};
