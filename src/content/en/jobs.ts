import type { JobPage, JobSlug } from '../types';

const sell: JobPage = {
  slug: 'sell',
  metaTitle: 'Sell: requests, catalogue and quotes with your margins | Traviosoft',
  metaDescription:
    'Every request in one list, a catalogue with season prices and several suppliers, quotes built with your margin, VAT and commission, sent in the client’s language with a follow-up after 7 days.',
  name: 'Sell',
  menuLine: 'From the first request to the accepted quote',
  step: '1 of 4',
  heroTitle: 'Answer first, with the right price',
  heroLead:
    'Clients often book with the agency that answers first with a clear, correct quote. Traviosoft keeps every request in view and builds the quote from your own rates, so you can send it the same day.',
  heroVisual: 'quote',
  chapters: [
    {
      id: 'requests',
      kicker: 'Requests',
      title: 'Every request in hand',
      lead: 'Every enquiry in one list with its next step, whether it came by email, phone or WhatsApp.',
      visual: 'requests',
      features: [
        { title: 'One list of requests', body: ['Each request has a status, so you see at a glance what is new, what is quoted and what is waiting for an answer.'] },
        { title: 'A request becomes a project', body: ['When a request turns serious, it becomes a project. The client, the dates, the travellers and your notes stay together for the whole trip.'] },
        { title: 'One record per client', body: ['Type a name or an email you already have and Traviosoft shows the existing client, so each client keeps one history.'] },
        { title: 'Reminders', body: ['Put a date on a request. It comes back on your dashboard on the right day.'] },
        { title: 'Learn from every closed request', body: ['Close a request with a reason. After a season, you see what to adjust: price, timing, destination.'] }
      ]
    },
    {
      id: 'catalogue',
      kicker: 'Catalogue',
      title: 'Your rates, ready to quote',
      lead: 'Hotels, transfers, guides and activities, each with its prices by date. The right price for the travel dates is picked for you.',
      visual: 'catalogue',
      features: [
        { title: 'Price periods by date', body: ['Low, mid and high season, special events, new contract rates. Each product keeps its prices by period, and the quote uses the one that matches the travel dates.'] },
        { title: 'Several suppliers per product', body: ['Keep two transfer companies or three guides for the same service, each with its own rates, and choose one per trip.'] },
        { title: 'Options', body: ['Room types, half board, a private or shared car: options live on the product, with their own price.'] },
        { title: 'Ready-made packages', body: ['Save your classic routes once. Add the whole package to a quote in one click, then adjust what changes.'] },
        { title: 'Automatic translations', body: ['Write a product description once. It is translated for your clients in their language.'] }
      ]
    },
    {
      id: 'quotes',
      kicker: 'Quotes',
      title: 'A quote in minutes, margin included',
      lead: 'Set your pricing rules once. Every line of every quote follows them, so every margin and commission is in the price.',
      visual: 'quote',
      features: [
        { title: 'Margin, VAT and commission', body: ['A pricing procedure turns your net rates into selling prices: your margin, the right VAT, and the commission when an agency or a partner sells the trip.'] },
        { title: 'Per-person prices', body: ['Price per adult or per child. The client sees a clear price per person and a total.'] },
        { title: 'Client-facing names', body: ['Keep your internal names for your team. The client reads a clean, friendly name for each service.'] },
        { title: 'Included and not included', body: ['A clear list of what the price covers and what stays with the traveller, agreed from the start.'] },
        { title: 'Versions', body: ['The client asks for a cheaper hotel? Make a new version. The previous one stays, and you can reopen it at any time.'] },
        { title: 'Expiry date', body: ['Quick picks set how long the price is valid, so each quote is accepted at a price that still holds.'] }
      ]
    },
    {
      id: 'send',
      kicker: 'Send and follow up',
      title: 'Sent tonight, followed up next week',
      lead: 'Send the quote by email in the client’s language. A week later, Traviosoft brings it back to you for a follow-up.',
      visual: 'followup',
      features: [
        { title: 'Email templates', body: ['Your own email texts, in each language. The quote is attached and the email is ready to go.'] },
        { title: 'In the client’s language', body: ['Spanish, English, French and more. The quote, the email and the documents follow the client’s language.'] },
        { title: 'Follow-up after 7 days', body: ['A week after sending, the quote comes back to you to follow up, so every interested client hears from you again, even in a busy week.'] }
      ]
    },
    {
      id: 'proposal',
      kicker: 'Proposal',
      title: 'A proposal your client enjoys opening',
      lead: 'Your client gets a link to a clear page with the trip, in their language and with your brand.',
      visual: 'proposal',
      features: [
        { title: 'A shareable proposal page', body: ['One link with the trip, the services and the price. It opens on any phone, straight from the link.'] },
        { title: 'Your brand', body: ['Your logo and colours on the page and on every document.'] },
        { title: 'The same numbers everywhere', body: ['The proposal, the quote PDF and later the invoice all come from the same lines. Change a price once and it is right everywhere.'] }
      ]
    },
    {
      id: 'partners',
      kicker: 'Partner agencies',
      title: 'Sell through partner agencies',
      lead: 'Most DMC trips come from agencies abroad. Quote the partner, keep their client on the same trip, and settle their commission from the same numbers.',
      visual: 'quote',
      features: [
        { title: 'The partner and their client', body: ['The quote goes to the partner agency, the travellers are their clients. Both stay on the trip, from the first quote to the last invoice.'] },
        { title: 'Commission in the price', body: ['Set the partner’s commission on the quote. It is in the selling price from the first line, and your margin stays visible to you.'] },
        { title: 'Commission statements', body: ['What you owe each partner, per period, from the trips they sent you. Settle it in one click.'] },
        { title: 'Documents in the partner’s language', body: ['The partner gets the quote and the proposal in their language and with your brand, ready to pass on to their client.'] }
      ]
    }
  ],
  faq: [
    { q: 'Can I import my current catalogue?', a: ['Yes. We import your products, prices and suppliers from your spreadsheets during setup. Setup and import are free with yearly billing.'] },
    { q: 'Can several suppliers sell the same hotel or service?', a: ['Yes. A product can have several suppliers, each with its own rates. You choose the supplier per trip.'] },
    { q: 'What does my client see?', a: ['A clean quote with client-facing names, prices per person, what is included and not included, in their language and with your brand. Your net rates and margins stay private to your team. You can open the example trips to see it.'] },
    { q: 'Do I have to use the catalogue for every quote?', a: ['You choose. Any quote can take a one-off line next to catalogue lines. The catalogue saves time on what you sell often.'] }
  ]
};

const book: JobPage = {
  slug: 'book',
  metaTitle: 'Book and run the trip: orders, suppliers, client itinerary | Traviosoft',
  metaDescription:
    'The first payment turns the quote into an order. Booking, trip and payment statuses update themselves, supplier emails are filed on the trip, and your client gets a day-by-day itinerary.',
  name: 'Book and run',
  menuLine: 'From the accepted quote to the trip done',
  step: '2 of 4',
  heroTitle: 'Every booking confirmed, even in high season',
  heroLead:
    'Once the client says yes, every service has to be booked, confirmed and sent to the right people. Traviosoft keeps the list for each trip, so the whole team works from the same one.',
  heroVisual: 'order',
  chapters: [
    {
      id: 'order',
      kicker: 'Order',
      title: 'The deposit opens the order',
      lead: 'Record the first payment and the quote is accepted: the order is created with every service already on it.',
      visual: 'order',
      features: [
        { title: 'One step', body: ['The first payment accepts the quote, creates the order and lists every service to book, all at once.'] },
        { title: 'Everything from the quote', body: ['Travellers, dates, services and prices come from the accepted quote, exactly as the client saw them.'] },
        { title: 'Changes after confirmation', body: ['The client adds a night? Update the trip and the order follows, so the team works from the latest version.'] }
      ]
    },
    {
      id: 'status',
      kicker: 'Statuses',
      title: 'See what is left to do',
      lead: 'Booking, trip and payment badges update themselves. You know at a glance which trips need you today.',
      visual: 'order',
      features: [
        { title: 'A booking list per trip', body: ['Hotel, guide, car, tickets: each service shows whether it is to book, waiting for the supplier or confirmed.'] },
        { title: 'Badges that update themselves', body: ['When the last service is confirmed, the trip shows as booked. When the balance is paid, the payment badge turns green. Statuses follow the work.'] },
        { title: 'Archive', body: ['Finished trips go to the archive and stay searchable. A deleted record can be restored from the trash.'] }
      ]
    },
    {
      id: 'suppliers',
      kicker: 'Suppliers',
      title: 'Suppliers in one place',
      lead: 'Contacts, documents and every email exchanged, filed on the right trip and at hand when the client calls.',
      visual: 'suppliers',
      features: [
        { title: 'Supplier emails filed for you', body: ['Confirmations and replies from suppliers land on the trip they belong to.'] },
        { title: 'Service sheets', body: ['Send each guide, driver or hotel a clear sheet with dates, names and details, straight from the trip.'] },
        { title: 'Supplier records', body: ['Contacts, contracts, photos and what each supplier includes, kept with the supplier and reused on every trip.'] },
        { title: 'Availability requests and purchase orders', body: ['Ask a hotel for availability, then send the purchase order from the trip. Answers and changes come back on the booking.'], premium: true }
      ]
    },
    {
      id: 'itinerary',
      kicker: 'Client itinerary',
      title: 'A day-by-day trip on their phone',
      lead: 'Once the trip is confirmed, share a page with each day, the hotels, the times and the contacts. Your traveller opens it anywhere.',
      visual: 'itinerary',
      features: [
        { title: 'A shareable itinerary page', body: ['One link, day by day. It opens on any phone, straight from the link.'] },
        { title: 'In the traveller’s language and your brand', body: ['The itinerary follows the client’s language and carries your logo.'] },
        { title: 'Always up to date', body: ['Change a pickup time on the trip and the page shows the new time. The link stays the same.'] }
      ]
    },
    {
      id: 'groups',
      kicker: 'Groups',
      title: 'Groups and rooming lists',
      lead: 'Incentives, associations, school trips: every traveller named, every room planned, every hotel told who sleeps where.',
      visual: 'order',
      features: [
        { title: 'The travellers list', body: ['Paste or import the list from a spreadsheet, or send the organiser a form link. Up to 200 travellers per trip.'] },
        { title: 'Services for part of the group', body: ['The golf day for twelve, the gala dinner for everyone: each service lists who takes it, and the hotel counts follow.'] },
        { title: 'A rooming list per hotel', body: ['Rooms built from who shares with whom, numbered per hotel, ready to send as a PDF or a spreadsheet.'] },
        { title: 'Diet and access at a glance', body: ['Counts of vegetarian meals, allergies and access needs per service, for the restaurant and the guide.'] }
      ]
    },
    {
      id: 'calendar',
      kicker: 'Calendar',
      title: 'Who travels this week',
      lead: 'Every trip is a band on the calendar. On your phone, the day’s services as a simple list.',
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
  heroTitle: 'Get paid on time, invoice without retyping',
  heroLead:
    'The money side of a trip lives with the trip. In Traviosoft, payments and invoices come from the quote the client accepted, so the amounts always match.',
  heroVisual: 'payments',
  chapters: [
    {
      id: 'schedule',
      kicker: 'Payment schedule',
      title: 'Deposit and balance, planned from the start',
      lead: 'Set the deposit and the balance with their dates on the quote. The client knows from day one what to pay and when.',
      visual: 'payments',
      features: [
        { title: 'Deposit and balance', body: ['A percentage or an amount, each with its due date, on every trip.'] },
        { title: 'What is due this week', body: ['Every payment due or past its date, across all your trips, in one list.'] },
        { title: 'Payment reminders', body: ['Friendly reminders go to the client before and after a due date, in their language.'] }
      ]
    },
    {
      id: 'links',
      kicker: 'Payment links',
      title: 'The client pays from the email',
      lead: 'Add your payment link to the email. The client pays in a few clicks, from their phone.',
      visual: 'payments',
      features: [
        { title: 'Your own payment link', body: ['Connect the payment link you already use. It goes out with the quote email.'] },
        { title: 'Record a payment in one click', body: ['A bank transfer or a card payment is recorded on the trip, and the payment badge updates itself.'] }
      ]
    },
    {
      id: 'invoices',
      kicker: 'Invoices',
      title: 'Invoices from the numbers you already typed',
      lead: 'Deposit and final invoices are made from the trip. The quoted price flows into the invoice, so the amounts match the quote to the cent.',
      visual: 'invoices',
      features: [
        { title: 'Deposit and final invoices', body: ['Made from the trip in one click, with the client’s details and the right amounts.'] },
        { title: 'Credit notes', body: ['A cancellation or a change becomes a credit note linked to the original invoice.'] },
        { title: 'Numbering per company', body: ['Run two companies from one place, each with its own invoice numbering.'] },
        { title: 'Your country’s tax rules', body: ['Special VAT schemes for travel agencies and e-invoicing are switched on per country in the settings. Spanish agencies, for example, get REAV and Veri*Factu.'] },
        { title: 'Ready for your accountant', body: ['An Excel recap or a zip of every PDF at the end of the month, in two clicks.'] },
        { title: 'Accounting export', body: ['Your sales, purchases and payments as journal entries, ready for your accounting software.'], premium: true }
      ]
    },
    {
      id: 'dashboard',
      kicker: 'Dashboard',
      title: 'Know where your agency stands',
      lead: 'Sales, trips, money in and money out in one look, for the period you choose, always up to date.',
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
    { q: 'Does it follow my country’s rules?', a: ['Invoice numbering per company and credit notes work everywhere. Country-specific schemes are switched on in the settings: today that includes Spain’s REAV and Veri*Factu. Tell us your country in the demo and we will tell you plainly what is covered.'] }
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
  heroTitle: 'Your agency, set up your way',
  heroLead:
    'The settings that make Traviosoft fit your agency: your brands, your languages, your country’s rules and your team. Set them once and every trip follows.',
  heroVisual: 'brands',
  chapters: [
    {
      id: 'brands',
      kicker: 'Brands',
      title: 'Several brands, one account',
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
      title: 'Every document in your client’s language',
      lead: 'Write once. Quotes, emails, proposals and itineraries go out in Spanish, English, French and more.',
      visual: 'languages',
      features: [
        { title: 'Documents per language', body: ['Each client has a language, and every document follows it.'] },
        { title: 'Automatic translations', body: ['Product descriptions in your catalogue are translated for you, and you can correct any translation.'] },
        { title: 'Email templates per language', body: ['Your own wording in each language, used automatically.'] }
      ]
    },
    {
      id: 'currencies',
      kicker: 'Currencies',
      title: 'Buy and sell in any currency',
      lead: 'Lodges in dollars, a client in pounds, your books in euros. Each quote has its own currency, and your numbers add up in yours.',
      visual: 'payments',
      features: [
        { title: 'A currency per client and per quote', body: ['Quote a British client in pounds and an American partner in dollars, from the same catalogue.'], premium: true },
        { title: 'Supplier prices in their currency', body: ['Keep each rate in the currency the supplier invoices in. The quote converts it at the day’s rate, with a safety margin you choose.'], premium: true },
        { title: 'Daily exchange rates', body: ['European Central Bank rates are fetched every working day, or you set your own.'], premium: true },
        { title: 'Your books in one currency', body: ['Invoices, payments, margins and reports add up in your accounting currency, with exchange gains and losses worked out for you.'], premium: true }
      ]
    },
    {
      id: 'country',
      kicker: 'Country settings',
      title: 'Your country’s rules, switched on',
      lead: 'Tax schemes and e-invoicing depend on where your agency is. They are settings, switched on for the countries that need them.',
      visual: 'invoices',
      features: [
        { title: 'Travel agency VAT schemes', body: ['Where a country has a special VAT scheme for travel agencies, the right labels appear on your invoices.'] },
        { title: 'E-invoicing', body: ['Where filing is required, it is built into the invoice. In Spain, for example, Veri*Factu with its QR code.'] }
      ]
    },
    {
      id: 'team',
      kicker: 'Team',
      title: 'Your team on the same trips',
      lead: 'Everyone sees the same client, quote and booking. Add a colleague in a minute.',
      visual: 'team',
      features: [
        { title: 'Users included in your plan', body: ['3 users on both plans, and more whenever your team grows.'] },
        { title: 'Teams, portfolios and roles', body: ['Give each team and each person their own clients and trips, and decide who sees what.'], premium: true }
      ]
    },
    {
      id: 'data',
      kicker: 'Your data',
      title: 'Your data, safe and yours',
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
      title: 'Connect your other tools',
      lead: 'Traviosoft works with the tools you already use, with the same rights as in the app.',
      visual: 'connections',
      features: [
        { title: 'Your website and accounting', body: ['Your website, your accounting tool or a developer you work with can read and write your Traviosoft data.'], premium: true },
        { title: 'Your AI tools', body: ['Connect the AI assistant you already use, such as Claude or ChatGPT, to your Traviosoft data, with the same rights as the person who connects it.'], premium: true },
        { title: 'The assistant inside Traviosoft', body: ['Ask what needs you today, have a quote prepared from your catalogue, or turn a supplier price list into catalogue prices. Every change waits for your OK.'], premium: true }
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
