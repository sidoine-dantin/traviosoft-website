import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const home: SiteContent['home'] = {
  metaTitle: 'Traviosoft: software for tailor-made travel agencies and DMCs',
  metaDescription:
    `Requests, quotes with your margins, bookings, client itineraries, payments and invoices in one place. For tailor-made travel agencies and DMCs. From ${PRICES.classic.yearly} EUR a month, hosted in the EU.`,
  title: 'Software for tailor-made travel agencies and DMCs',
  sub: 'Requests, quotes, bookings, payments and invoices, in one place.',
  proposal: {
    "agency": "Ruta Sur Viajes",
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
        "t": "Day 2 · The Alcázar and the cathedral",
        "s": "Guided visit in the morning, free afternoon in the Santa Cruz quarter."
      },
      {
        "t": "Day 4 · On to Ronda",
        "s": "Collect the hire car, 2 nights above the gorge."
      }
    ],
    "total": "Total due",
    "vatIncl": "VAT included",
    "photo": "Seville",
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
        "t": "Alcázar and cathedral",
        "s": "Your guide: Lucía"
      }
    ]
  },
  tripTitle: "The journey of a trip in Traviosoft",
  moments: [
    {
      "time": "Monday, 09:12",
      "title": "The request comes in",
      "body": "Every request lands in one list, with how long it has waited and what comes next.",
      "go": "See requests",
      "job": "sell"
    },
    {
      "time": "Monday, 11:40",
      "title": "The quote, with your margin",
      "body": "Each line starts from the supplier’s cost, and you see the margin on the whole trip before you send it.",
      "go": "See quotes",
      "job": "sell"
    },
    {
      "time": "Tuesday",
      "title": "Every booking followed",
      "body": "Once the client accepts, each supplier gets its request and the answer is saved on the line. What is left to do stays in the tasks.",
      "go": "See bookings",
      "job": "book"
    },
    {
      "time": "Before departure",
      "title": "Payments and invoices from the quote",
      "body": "The payment schedule comes from the accepted quote. The client pays from the link in the email, and the invoice takes the same lines.",
      "go": "See payments",
      "job": "get-paid"
    }
  ],
  sitTitle: "However you work",
  sitLead: "Every agency has its own habits. Here is what Traviosoft does in the most common cases.",
  situations: [
    {
      "t": "I sell to agencies, not to travellers",
      "s": "Commissions, net rates and the agency that brings the client on each quote.",
      "job": "sell"
    },
    {
      "t": "I run groups",
      "s": "Traveller list, rooming list and a form each traveller fills in.",
      "job": "book"
    },
    {
      "t": "My suppliers bill in dollars or dirhams",
      "s": "Costs in their currency, prices in yours, with the rate of the quote kept.",
      "job": "sell"
    },
    {
      "t": "I work with guides and drivers",
      "s": "A service sheet sent to the guide, and their payment followed with the trip.",
      "job": "book"
    },
    {
      "t": "My clients pay in instalments",
      "s": "Payment dates set in the quote, reminders and online payment.",
      "job": "get-paid"
    },
    {
      "t": "I invoice under the margin scheme",
      "s": "VAT worked out on your margin, with the scheme’s mention on the invoice.",
      "job": "get-paid"
    },
    {
      "t": "My rates change with the season",
      "s": "Prices by season, age or day, and the quote takes the price of the trip dates.",
      "job": "sell"
    },
    {
      "t": "We have several brands or companies",
      "s": "Each one has its own documents, invoice mentions and numbering.",
      "job": "setup"
    }
  ],
  app: {
    "user": "LG",
    "lang": "EN",
    "nav": {
      "workspace": "Workspace",
      "dashboard": "Dashboard",
      "calendar": "Calendar",
      "analytics": "Analytics",
      "pipeline": "Pipeline",
      "requests": "Requests",
      "quotes": "Quotes",
      "orders": "Orders",
      "finances": "Finances",
      "resources": "Resources",
      "catalog": "Catalog",
      "clients": "Clients",
      "providers": "Providers",
      "guide": "Quick Start"
    },
    "client": "Smith family",
    "trip": "Andalusia, 8 days",
    "req": {
      "newBtn": "New request",
      "rows": [
        {
          "name": "Smith family",
          "msg": "Andalusia in May, 2 adults, small hotels with character",
          "meta": "Website · 3 to 10 May 2027",
          "badge": "New · 12 min",
          "kind": "new",
          "ago": "09:12"
        },
        {
          "name": "Ana Ruiz",
          "msg": "Lisbon and Porto, 10 days",
          "meta": "Email · June 2027",
          "badge": "Answered",
          "kind": "ok",
          "ago": "Yesterday"
        },
        {
          "name": "Bertrand Lefèvre",
          "msg": "Morocco, group of 18",
          "meta": "Phone · October 2027",
          "badge": "Answered",
          "kind": "ok",
          "ago": "8 Jan"
        },
        {"name": "Hannah Weber", "msg": "Northern Spain, 12 days, by train", "meta": "Partner agency · September 2027", "badge": "Answered", "kind": "ok", "ago": "7 Jan"},
        {"name": "Pierre Dubois", "msg": "Seville for a weekend, 4 adults", "meta": "Website · April 2027", "badge": "Answered", "kind": "ok", "ago": "5 Jan"}
      ]
    },
    "quote": {
      "sent": "Sent",
      "viewPdf": "View PDF",
      "startLabel": "Start date",
      "start": "03/05/2027",
      "expiresLabel": "Expires on",
      "expires": "25/01/2027",
      "pax": "2 PAX",
      "tabs": [
        "Quote",
        "Payments",
        "Send",
        "History"
      ],
      "linesTitle": "Quote lines",
      "vatRegimeLabel": "VAT regime",
      "vatRegime": "Margin scheme",
      "unitIncl": "/ unit incl. VAT",
      "lines": [
        "Private transfer, Seville airport",
        "Hotel in Seville, double room",
        "Alcázar and cathedral, guided visit",
        "Hire car, category B",
        "Hotel in Ronda, double room",
        "Hotel in Granada, double room",
        "Alhambra, guided visit"
      ],
      "totalTitle": "Total incl. tax",
      "perPerson": "Price per person",
      "selling": "Selling price (incl. tax)",
      "cost": "Supplier cost (incl. tax)",
      "margin": "Gross margin",
      "vatMargin": "VAT on the margin to declare"
    },
    "order": {
      "accepted": "Accepted",
      "bookingTitle": "Bookings",
      "bookingCount": "5 of 7 confirmed",
      "providers": [
        "Traslados Giralda",
        "Hotel Sevilla Centro",
        "Lucía Romero, guide",
        "Autos Bética",
        "Hotel Ronda Tajo",
        "Hotel Granada Albaicín",
        "Patronato de la Alhambra"
      ],
      "states": {
        "confirmed": "Confirmed",
        "ref": "Confirmed · ref. 48213",
        "requested": "Ordered · awaiting confirmation",
        "toBook": "To book"
      },
      "tasksTitle": "Tasks",
      "tasks": [
        "Send the confirmation to the client",
        "Book the Alhambra tickets"
      ]
    },
    "pay": {
      "schedTitle": "Scheduled milestones",
      "deposit": "Deposit 30%",
      "depositSub": "Card, from the link in the email",
      "balance": "Balance",
      "dueLabel": "Due:",
      "paid": "Paid",
      "upcoming": "Pending",
      "invTitle": "Invoices",
      "invDeposit": "Deposit (Anticipo)",
      "invFinal": "Final invoice",
      "invPaid": "Paid",
      "invDraft": "Draft",
      "dates": [
        "12/01/2027",
        "03/04/2027"
      ]
    }
  },
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
  priceBody: 'Setup',
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
