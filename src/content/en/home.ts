import type { SiteContent } from '../types';

export const home: SiteContent['home'] = {
  metaTitle: 'Traviosoft: software for tailor-made travel agencies and DMCs',
  metaDescription:
    'Requests, quotes with your margins, bookings, client itineraries, payments and invoices in one place. For tailor-made agencies and DMCs. From 190 EUR a month, hosted in the EU.',
  kick: 'Send the quote',
  giant: 'tonight.',
  sub: 'Not on Thursday. Software for tailor-made agencies and DMCs.',
  tags: [
    { t: 'Answer first', s: 'quote sent 11:40' },
    { t: 'Deposit paid ✓', s: 'link in the email' },
    { t: 'Hotel confirmed', s: 'nothing forgotten' },
    { t: 'Hosted in the EU', s: 'your own database' }
  ],
  tripTitle: 'One trip, from first message to last invoice.',
  steps: [
    { time: '09:12', title: 'Request in', body: 'It lands in one list, never in a lost email.', job: 'sell' },
    { time: '11:40', title: 'Quote sent', body: 'Built from your rates, margin already in.', job: 'sell' },
    { time: 'Day 2', title: 'Deposit paid', body: 'Payment link in the email. No chasing.', job: 'get-paid' },
    { time: 'Day 3', title: 'Suppliers confirmed', body: 'Hotel and guide ticked off on the trip.', job: 'book' },
    { time: 'Day 30', title: 'Final invoice', body: 'Made from the same numbers. Nothing retyped.', job: 'get-paid' }
  ],
  stepGo: 'See how',
  baTitle: 'What changes on Monday morning.',
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
    'One trip, one place. The request, the quote, the bookings, the payments and the invoices are on the same file, and everyone in the team sees the same thing.',
  exampleTitle: 'See what your client receives.',
  exampleBody: 'Open a real example: the day-by-day itinerary and the quote, as a traveller sees them. No sign-up.',
  exampleLink: 'Open the example trip',
  priceTitle: 'Every feature, one price.',
  priceBody: 'Billed yearly, monthly also possible. Setup and data import are free with yearly billing.',
  coin1: 'EUR/mo · 3 users',
  coin2: 'EUR/mo · 5 users',
  priceLink: 'Compare plans',
  facts: [
    { k: 'Price', v: 'From 190 EUR a month, 3 users included' },
    { k: 'For', v: 'Tailor-made agencies and DMCs' },
    { k: 'Data', v: 'Your own database, hosted in the EU' },
    { k: 'Languages', v: 'Documents in Spanish, English, French and more' }
  ]
};
