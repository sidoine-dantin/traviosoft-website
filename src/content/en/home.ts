import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const home: SiteContent['home'] = {
  metaTitle: 'Traviosoft: software for tailor-made travel agencies and DMCs',
  metaDescription:
    `Requests, quotes with your margins, bookings, client itineraries, payments and invoices in one place. For tailor-made travel agencies and DMCs. From ${PRICES.classic.yearly} EUR a month, with your data hosted in the EU.`,
  title: 'Software for tailor-made travel agencies and DMCs',
  sub: 'Requests, quotes, bookings, payments and invoices, in one place.',
  proposal: {
    "agency": "Your agency",
    "kind": "Travel proposal",
    "trip": "Andalusia, 8 days",
    "meta": [
      "2 travellers",
      "8 days",
      "3 to 10 May 2027"
    ],
    "days": [
      {
        "t": "Day 1 · Seville",
        "s": "Airport pick-up and transfer to your hotel in the old town, for 3 nights."
      },
      {
        "t": "Day 2 · Córdoba",
        "s": "Guided visit of the Mosque-Cathedral, back in Seville in the evening."
      },
      {
        "t": "Day 4 · On to Ronda",
        "s": "Collect the hire car, 2 nights above the gorge."
      }
    ],
    "total": "Total due",
    "vatIncl": "VAT included",
    "stops": [
      {
        "day": "Day 1 · Monday 3 May",
        "k": "Transfer",
        "t": "Seville airport transfer",
        "s": "Meeting point: arrivals exit"
      },
      {
        "k": "Accommodation",
        "t": "Hotel in Seville old town",
        "s": "Check-out 6 May",
        "link": "Open in Maps"
      },
      {
        "day": "Day 2 · Tuesday 4 May",
        "k": "Activity",
        "t": "Mosque-Cathedral of Córdoba",
        "s": "Your guide: Lucía"
      }
    ]
  },
  tripTitle: "The journey of a trip in Traviosoft",
  moments: [
    {"rec": "Andalusia · 2 travellers", "title": "The request", "body": "It lands in the list of requests, with how long it has waited and what comes next.", "go": "See requests", "job": "sell#requests"},
    {"rec": "Margin {margin} EUR", "title": "The quote", "body": "Each line starts from the supplier’s cost. You see the margin on the trip before you send the proposal.", "go": "See quotes", "job": "sell#quotes"},
    {"rec": "Hotel in Seville: confirmed", "title": "The bookings", "body": "Once the client accepts, each supplier gets its request, and the answer is saved on the line.", "go": "See bookings", "job": "book#order"},
    {"rec": "Deposit {deposit} EUR: paid", "title": "The payments", "body": "The payment schedule comes from the accepted quote. The client pays from the link in the email.", "go": "See payments", "job": "get-paid#schedule"},
    {"rec": "Final invoice: {total} EUR", "title": "The invoice", "body": "It takes the lines of the accepted quote.", "go": "See invoices", "job": "get-paid#invoices"}
  ],
  sitTitle: "However you work",
  situations: [
    {
      "t": "I sell to agencies, not to travellers",
      "s": "Commissions, net rates and the agency that brings the client on each quote.",
      "job": "sell#partners"
    },
    {
      "t": "I run groups",
      "s": "Traveller list, rooming list and a form each traveller fills in.",
      "job": "book#groups"
    },
    {
      "t": "My suppliers bill in dollars or dirhams",
      "s": "Costs in their currency, prices in yours, with the rate of the quote kept.",
      "job": "setup#currencies"
    },
    {
      "t": "I work with guides and drivers",
      "s": "A service sheet sent to the guide, and their payment followed with the trip.",
      "job": "book#suppliers"
    },
    {
      "t": "My clients pay in instalments",
      "s": "Payment dates set in the quote, reminders and online payment.",
      "job": "get-paid#schedule"
    },
    {
      "t": "I invoice under the margin scheme",
      "s": "VAT worked out on your margin, with the scheme’s mention on the invoice.",
      "job": "setup#country"
    },
    {
      "t": "My rates change with the season",
      "s": "Prices by season, age or day, and the quote takes the price of the trip dates.",
      "job": "sell#catalogue"
    },
    {
      "t": "We have several brands or companies",
      "s": "Each one has its own documents, invoice mentions and numbering.",
      "job": "setup#brands"
    }
  ],
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
  setupLine: 'We set it up with you and train your team by video call.',
  priceTitle: 'Pricing',
  priceBody: 'Setup and onboarding',
  priceImport: 'and import of your spreadsheets',
  priceFree: 'free*',
  priceFreeNote: '* With yearly billing. Limited-time offer.',
  extraUserLine: `Extra user: ${PRICES.extraUser.classic.yearly} EUR (Classic) or ${PRICES.extraUser.premium.yearly} EUR (Premium) a month*`,
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
