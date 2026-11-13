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
    'Rates_2026_FINAL_v3.xlsx',
    'Quote Smith.docx',
    'WhatsApp: "did the hotel confirm?"',
    'Deposit? check the bank',
    'Invoice numbers in a notebook',
    '42 unread emails'
  ],
  afterTitle: 'With Traviosoft',
  afterBody:
    'The request, the quote, the bookings, the payments and the invoices are on the same trip, and the whole team sees the same thing.',
  priceTitle: 'Pricing',
  priceBody: `Two plans, Classic and Premium, with ${PRICES.usersIncluded} users included. Billed yearly or monthly.`,
  coin1: 'EUR/mo · Classic',
  coin2: 'EUR/mo · Premium',
  priceLink: 'Compare the plans',
  facts: [
    { k: 'Price', v: `From ${PRICES.classic.yearly} EUR a month, ${PRICES.usersIncluded} users included` },
    { k: 'For', v: 'Tailor-made agencies and DMCs' },
    { k: 'Data', v: 'A private space per agency, hosted in the EU' },
    { k: 'Languages', v: 'Documents in Spanish, English, French and more' }
  ]
};
