import type { JobPage, JobSlug } from '../types';

const sell: JobPage = {
  slug: 'sell',
  metaTitle: 'Sell: requests, catalog and quotes with your margins | Traviosoft',
  metaDescription:
    'Every request in one list, a catalog with season prices and several suppliers, quotes built with your margin, VAT and commission, sent in the client’s language with a follow-up after 7 days.',
  name: 'Sell',
  menuLine: 'From the first request to the accepted quote',
  step: '1 of 4',
  heroTitle: 'Requests, catalog and quotes',
  heroLead:
    'Every request in one list, a catalog with your rates by season, and quotes built from it with your margin and commission.',
  heroVisual: 'quote',
  chapters: [
    {
      id: 'requests',
      kicker: 'Requests',
      title: 'One list of requests',
      lead: 'Every enquiry in one list with its next step, whether it came by email, phone or WhatsApp.',
      visual: 'requests',
      features: [
        { title: 'Request statuses', body: ['Each request has a status: new, quoted or waiting for an answer.'] },
        { title: 'A request becomes a project', body: ['When a request turns serious, it becomes a project. The client, the dates, the travellers and your notes stay together for the whole trip.'] },
        { title: 'Reminders', body: ['Put a date on a request. It comes back on your dashboard on the right day.'] }
      ]
    },
    {
      id: 'catalogue',
      kicker: 'Catalog',
      title: 'Products with prices by date',
      lead: 'Hotels, transfers, guides and activities, each with prices by date. A quote uses the price for the travel dates.',
      visual: 'catalogue',
      features: [
        { title: 'Price periods by date', body: ['Low, mid and high season, special events, new contract rates. Each product keeps its prices by period, and the quote uses the one that matches the travel dates.'] },
        { title: 'Several suppliers per product', body: ['Keep two transfer companies or three guides for the same service, each with its own rates, and choose one per trip.'] },
        { title: 'Ready-made packages', body: ['Save your classic routes once. Add the whole package to a quote in one click, then adjust what changes.'] }
      ]
    },
    {
      id: 'quotes',
      kicker: 'Quotes',
      title: 'Margin, VAT and commission',
      lead: 'Set your pricing rules once, and every quote line applies them.',
      visual: 'margin',
      features: [
        { title: 'Pricing procedures', body: ['A pricing procedure turns your net rates into selling prices: your margin, the right VAT, and the commission when an agency or a partner sells the trip.'] },
        { title: 'Included and not included', body: ['What the price covers and what it does not, listed on the quote.'] },
        { title: 'Versions', body: ['The client asks for a cheaper hotel? Make a new version. The previous one stays, and you can reopen it at any time.'] }
      ]
    },
    {
      id: 'send',
      kicker: 'Send and follow up',
      title: 'Sending and follow-up',
      lead: 'The quote goes by email in the client’s language. Seven days later it comes back to you for a follow-up.',
      visual: 'followup',
      features: [
        { title: 'Email templates', body: ['Your own email texts, in each language. The quote is attached and the email is ready to go.'] },
        { title: 'In the client’s language', body: ['Spanish, Catalan, English, French and Italian. The quote, the email and the documents follow the client’s language.'] },
        { title: 'Follow-up after 7 days', body: ['A week after sending, the quote appears in your list to follow up.'] }
      ]
    },
    {
      id: 'proposal',
      kicker: 'Proposal',
      title: 'A page with the trip',
      lead: 'The client gets a link to a page with the trip, in their language and with your logo.',
      visual: 'proposal',
      features: [
        { title: 'A shareable proposal page', body: ['One link with the trip, the services and the price. It opens on any phone.'] },
        { title: 'Your brand', body: ['Your logo and colours on the page and on every document.'] },
        { title: 'The same numbers everywhere', body: ['The proposal, the quote PDF and later the invoice all come from the same lines. Change a price once and it is right everywhere.'] }
      ]
    },
    {
      id: 'partners',
      kicker: 'Partner agencies',
      title: 'Sell through partner agencies',
      lead: 'Quote the partner agency, keep their client on the trip, and settle their commission from the same numbers.',
      visual: 'commission',
      features: [
        { title: 'The partner and their client', body: ['The quote goes to the partner agency, the travellers are their clients. Both stay on the trip, from the first quote to the last invoice.'] },
        { title: 'Commission in the price', body: ['Set the partner’s commission on the quote. It is in the selling price from the first line, and your margin stays visible to you.'] },
        { title: 'Commission statements', body: ['What you owe each partner, per period, from the trips they sent you. Settle it in one click.'] }
      ]
    }
  ],
  faq: [
    { q: 'Can I import my current catalog?', a: ['Yes. We import your products, prices and suppliers from your spreadsheets during setup. Setup and import are free with yearly billing.'] },
    { q: 'Can several suppliers sell the same hotel or service?', a: ['Yes. A product can have several suppliers, each with its own rates. You choose the supplier per trip.'] },
    { q: 'What does my client see?', a: ['A clean quote with client-facing names, prices per person, what is included and not included, in their language and with your brand. Your net rates and margins stay private to your team.'] },
    { q: 'Do I have to use the catalog for every quote?', a: ['A quote can mix catalog lines and one-off lines.'] }
  ]
};

const book: JobPage = {
  slug: 'book',
  metaTitle: 'Book and run the trip: orders, suppliers, client itinerary | Traviosoft',
  metaDescription:
    'Every service of the trip on one booking list. Booking, trip and payment statuses update themselves, supplier emails are filed on the trip, and your client gets a day-by-day itinerary.',
  name: 'Book and run',
  menuLine: 'From the accepted quote to the trip done',
  step: '2 of 4',
  heroTitle: 'Orders, bookings and the client itinerary',
  heroLead:
    'Every service of the trip is on one booking list. Booking requests go to suppliers in one click, their replies are filed on the trip, and the traveller gets an itinerary page.',
  heroVisual: 'order',
  chapters: [
    {
      id: 'order',
      kicker: 'Bookings',
      title: 'Every booking ready for the trip',
      lead: 'Every service of the trip is on one list. One click sends the booking requests, the suppliers confirm, and the trip is ready.',
      visual: 'confirm',
      features: [
        { title: 'Every service on one list', body: ['The accepted quote brings the hotel, the guide, the car and the visits, with their dates, travellers and prices. Nothing to type again.'] },
        { title: 'Booking requests in one click', body: ['Each supplier gets its booking request by email, with the dates and the travellers. Their replies are filed on the trip.'] },
        { title: 'Changes after confirmation', body: ['The client adds a night? Update the trip and the order follows, so the team works from the latest version.'] }
      ]
    },
    {
      id: 'status',
      kicker: 'Statuses',
      title: 'Booking, trip and payment statuses',
      lead: 'Statuses change as services are confirmed and payments come in.',
      visual: 'statuses',
      features: [
        { title: 'A booking list per trip', body: ['Hotel, guide, car, tickets: each service shows whether it is to book, waiting for the supplier or confirmed.'] },
        { title: 'Badges that update themselves', body: ['When the last service is confirmed, the trip shows as booked. When the balance is paid, the payment badge turns green.'] },
        { title: 'Archive', body: ['Finished trips go to the archive and stay searchable. A deleted record can be restored from the trash.'] }
      ]
    },
    {
      id: 'suppliers',
      kicker: 'Suppliers',
      title: 'Supplier records and emails',
      lead: 'Contacts, documents and emails, filed on the supplier and on the trip.',
      visual: 'suppliers',
      features: [
        { title: 'Supplier emails filed for you', body: ['Confirmations and replies from suppliers land on the trip they belong to.'] },
        { title: 'Service sheets', body: ['Send each guide, driver or hotel a clear sheet with dates, names and details, straight from the trip.'] },
        { title: 'Availability requests and purchase orders', body: ['Ask a hotel for availability, then send the purchase order from the trip. Answers and changes come back on the booking.'], premium: true }
      ]
    },
    {
      id: 'itinerary',
      kicker: 'Client itinerary',
      title: 'A day-by-day itinerary',
      lead: 'A page with each day, the hotels, the times and the contacts, shared with the traveller by link.',
      visual: 'itinerary',
      features: [
        { title: 'A shareable itinerary page', body: ['One link, day by day. It opens on any phone.'] },
        { title: 'In the traveller’s language and your brand', body: ['The itinerary follows the client’s language and carries your logo.'] },
        { title: 'Always up to date', body: ['Change a pickup time on the trip and the page shows the new time. The link stays the same.'] }
      ]
    },
    {
      id: 'groups',
      kicker: 'Groups',
      title: 'Groups and rooming lists',
      lead: 'Traveller lists, services for part of the group, and a rooming list per hotel.',
      visual: 'rooming',
      features: [
        { title: 'The travellers list', body: ['Paste or import the list from a spreadsheet, or send the organiser a form link. Up to 200 travellers per trip.'] },
        { title: 'Services for part of the group', body: ['The golf day for twelve, the gala dinner for everyone: each service lists who takes it, and the hotel counts follow.'] },
        { title: 'A rooming list per hotel', body: ['Rooms built from who shares with whom, numbered per hotel, ready to send as a PDF or a spreadsheet.'] }
      ]
    },
    {
      id: 'calendar',
      kicker: 'Calendar',
      title: 'Trips on a calendar',
      lead: 'Each trip is a band on the calendar. On a phone, the day’s services show as a list.',
      visual: 'calendar',
      features: [
        { title: 'Trip bands', body: ['See every trip from arrival to departure, and how busy the coming weeks are.'] },
        { title: 'The day on your phone', body: ['Today’s arrivals, transfers and visits in a list you can check between two meetings.'] },
        { title: 'Traveller details', body: ['Travellers fill in their passport, diet and access details through a form link, and the answers land on the trip.'] }
      ]
    }
  ],
  faq: [
    { q: 'Can my guides and drivers see the trip?', a: ['They receive a service sheet by email with what they need: dates, times, names and the meeting point.'] },
    { q: 'What happens if the client changes a date?', a: ['Update the trip. The services, the itinerary page and the service sheets follow the change, and the services to rebook show again as to book.'] },
    { q: 'How do supplier emails reach the trip?', a: ['Supplier emails are filed on the trip automatically.'] }
  ]
};

const getPaid: JobPage = {
  slug: 'get-paid',
  metaTitle: 'Get paid and keep the books: payments, invoices, dashboard | Traviosoft',
  metaDescription:
    'Deposit and balance planned on the quote, payment links in the email, invoices and credit notes made from the same numbers, and a dashboard with sales, trips, money in and money out.',
  name: 'Get paid',
  menuLine: 'Payments, invoices and your numbers',
  step: '3 of 4',
  heroTitle: 'Payments, invoices and figures',
  heroLead:
    'Payments and invoices come from the accepted quote, so the amounts match.',
  heroVisual: 'payments',
  chapters: [
    {
      id: 'schedule',
      kicker: 'Payment schedule',
      title: 'Deposit and balance with due dates',
      lead: 'The deposit and the balance are set on the quote, with their due dates.',
      visual: 'schedule',
      features: [
        { title: 'Deposit and balance', body: ['A percentage or an amount, each with its due date, on every trip.'] },
        { title: 'What is due this week', body: ['Every payment due or past its date, across all your trips, in one list.'] },
        { title: 'Payment reminders', body: ['Reminders go to the client before and after a due date, in their language.'] }
      ]
    },
    {
      id: 'links',
      kicker: 'Payment links',
      title: 'Payment links in the email',
      lead: 'Your payment link goes out with the email, and the client pays from it.',
      visual: 'paylink',
      features: [
        { title: 'Your own payment link', body: ['Connect the payment link you already use. It goes out with the quote email.'] },
        { title: 'Record a payment in one click', body: ['A bank transfer or a card payment is recorded on the trip, and the payment badge updates itself.'] }
      ]
    },
    {
      id: 'invoices',
      kicker: 'Invoices',
      title: 'Invoices from the trip',
      lead: 'Deposit and final invoices are made from the trip, with the amounts of the quote.',
      visual: 'invoices',
      features: [
        { title: 'Deposit and final invoices', body: ['Made from the trip in one click, with the client’s details and the right amounts.'] },
        { title: 'Credit notes', body: ['A cancellation or a change becomes a credit note linked to the original invoice.'] },
        { title: 'Ready for your accountant', body: ['An Excel recap or a zip of every PDF at the end of the month, in two clicks.'] }
      ]
    },
    {
      id: 'dashboard',
      kicker: 'Dashboard',
      title: 'Sales, trips and cash',
      lead: 'Sales, trips, money in and money out, for the period you choose.',
      visual: 'dashboard',
      features: [
        { title: 'Sales and trips', body: ['What you sold and how many trips, this month, this season or this year.'] },
        { title: 'Money in and money out', body: ['What clients paid you and what you owe suppliers, side by side.'] },
        { title: 'Today', body: ['Reminders, payments due and bookings to confirm, gathered for the day.'] }
      ]
    }
  ],
  faq: [
    { q: 'Which payment providers work?', a: ['You add the payment link of the provider you already use. The client pays there, and you record the payment on the trip.'] },
    { q: 'Can my accountant get the files?', a: ['Yes. Export an Excel recap or a zip of every invoice PDF for any period.'] },
    { q: 'Does it follow my country’s rules?', a: ['Invoice numbering per company and credit notes work everywhere. The Spanish VAT scheme for travel agencies is built in. In other countries, invoices go through your invoicing software. For your country, ask us in the demo.'] }
  ]
};

const setup: JobPage = {
  slug: 'setup',
  metaTitle: 'Your setup: brands, languages, team and data | Traviosoft',
  metaDescription:
    'Several brands in one account, documents in your client’s language, several currencies, country settings, your team, your data hosted in the EU, and connections to your other tools.',
  name: 'Your setup',
  menuLine: 'Brands, languages, currencies, team and data',
  step: '4 of 4',
  heroTitle: 'Brands, languages, currencies and team',
  heroLead:
    'Settings for brands, languages, currencies, country tax rules and users. They apply to every trip.',
  heroVisual: 'settings',
  chapters: [
    {
      id: 'brands',
      kicker: 'Brands',
      title: 'Several brands in one account',
      lead: 'Run a second brand or a second company from the same place, each with its own look and its own numbering.',
      visual: 'brands',
      features: [
        { title: 'Logo and colours per brand', body: ['Every quote, proposal, itinerary and invoice carries the brand of the trip.'], premium: true },
        { title: 'Numbering per company', body: ['Each legal entity keeps its own invoice numbering.'], premium: true }
      ]
    },
    {
      id: 'languages',
      kicker: 'Languages',
      title: 'Documents in the client’s language',
      lead: 'Quotes, emails, proposals and itineraries in Spanish, Catalan, English, French and Italian.',
      visual: 'languages',
      features: [
        { title: 'Documents per language', body: ['Each client has a language, and every document follows it.'] },
        { title: 'Automatic translations', body: ['Product descriptions in your catalog are translated for you, and you can correct any translation.'] },
        { title: 'Email templates per language', body: ['Your own wording in each language, used automatically.'] }
      ]
    },
    {
      id: 'currencies',
      kicker: 'Currencies',
      title: 'Several currencies',
      lead: 'Lodges in dollars, a client in pounds, your books in euros. Each quote has its own currency, and your numbers add up in yours.',
      visual: 'currencies',
      features: [
        { title: 'A currency per client and per quote', body: ['Quote a British client in pounds and an American partner in dollars, from the same catalog.'], premium: true },
        { title: 'Supplier prices in their currency', body: ['Keep each rate in the currency the supplier invoices in. The quote converts it at the day’s rate, with a safety margin you choose.'], premium: true },
        { title: 'Your books in one currency', body: ['Invoices, payments, margins and reports add up in your accounting currency, with exchange gains and losses worked out for you.'], premium: true }
      ]
    },
    {
      id: 'country',
      kicker: 'Country settings',
      title: 'Country tax rules',
      lead: 'Tax schemes and e-invoicing are settings. Spain is built in.',
      visual: 'country',
      features: [
        { title: 'Travel agency VAT schemes', body: ['For Spain, the travel agency VAT scheme (REAV) and its wording on your invoices are built in.'] },
        { title: 'E-invoicing', body: ['Depending on the country, invoices are sent from Traviosoft or from your invoicing software.'] }
      ]
    },
    {
      id: 'team',
      kicker: 'Team',
      title: 'Users and teams',
      lead: 'Everyone works on the same clients, quotes and bookings.',
      visual: 'team',
      features: [
        { title: 'Users included in your plan', body: ['3 users on both plans, and more whenever your team grows.'] },
        { title: 'Teams, portfolios and roles', body: ['Give each team and each person their own clients and trips, and decide who sees what.'], premium: true }
      ]
    },
    {
      id: 'data',
      kicker: 'Your data',
      title: 'Data and hosting',
      lead: 'Each agency has its own separate space, hosted in the European Union, kept apart from every other agency.',
      visual: 'safe',
      features: [
        { title: 'A separate space for your agency', body: ['Your data lives in its own space, apart from other agencies.'] },
        { title: 'Hosted in the EU', body: ['Your data stays in the European Union, under GDPR.'] },
        { title: 'Leave with your data', body: ['If you stop, you get your data back in standard formats.'] }
      ]
    },
    {
      id: 'connections',
      kicker: 'Connections',
      title: 'Connections',
      lead: 'Your other software can read and write your Traviosoft data, with the same rights as in the app.',
      visual: 'connections',
      features: [
        { title: 'Your website and accounting', body: ['Your website, your accounting tool or a developer you work with can read and write your Traviosoft data.'], premium: true },
        { title: 'Your AI tools', body: ['Connect the AI assistant you already use, such as Claude or ChatGPT, to your Traviosoft data, with the same rights as the person who connects it.'], premium: true },
        { title: 'The assistant inside Traviosoft', body: ['Ask what needs you today, have a quote prepared from your catalog, or turn a supplier price list into catalog prices. Every change waits for your OK.'], premium: true }
      ]
    }
  ],
  faq: [
    { q: 'Where is my data?', a: ['In a separate space for your agency, hosted in the European Union.'] },
    { q: 'Can I leave with my data?', a: ['Yes. You get your data back in standard formats.'] },
    { q: 'Who can see what?', a: ['On Classic, every user sees the agency’s trips. On Premium, each team and each person can have their own clients, trips and rights.'] }
  ]
};

export const jobs: Record<JobSlug, JobPage> = { sell, book, 'get-paid': getPaid, setup };
