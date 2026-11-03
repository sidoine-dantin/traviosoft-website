import type { JobPage, JobSlug } from '../types';

const sell: JobPage = {
  slug: 'sell',
  metaTitle: 'Sell: requests, catalogue and quotes with your margins | Traviosoft',
  metaDescription:
    'Every request in one list, a catalogue with season prices and several suppliers, quotes built with your margin, VAT and commission, sent in the client’s language with a follow-up after 7 days.',
  name: 'Sell',
  menuLine: 'From the first request to the accepted quote',
  step: '1 of 4',
  heroTitle: 'Answer first, with the right price.',
  heroLead:
    'The agency that answers first with a clear, correct quote usually wins the trip. Traviosoft keeps every request in view and builds the quote from your own rates, so you can send it the same day.',
  heroVisual: 'quote',
  chapters: [
    {
      id: 'requests',
      kicker: 'Requests',
      title: 'Never lose a request.',
      lead: 'Every enquiry in one list, with its next step. Nothing waits in an inbox or a WhatsApp chat.',
      visual: 'requests',
      features: [
        { title: 'One list of requests', body: ['Each request has a status, so you see at a glance what is new, what is quoted and what is waiting for an answer.'] },
        { title: 'A request becomes a project', body: ['When a request turns serious, it becomes a project. The client, the dates, the travellers and your notes stay together for the whole trip.'] },
        { title: 'No duplicate clients', body: ['Type a name or an email you already have and Traviosoft shows the existing client before a second one is created.'] },
        { title: 'Reminders', body: ['Put a date on a request. It comes back on your dashboard on the right day.'] },
        { title: 'Know why you lose trips', body: ['Close a request as lost with a reason. After a season, you see what to change: price, timing, destination.'] }
      ]
    },
    {
      id: 'catalogue',
      kicker: 'Catalogue',
      title: 'Your rates, ready to quote.',
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
      title: 'A quote in minutes, margin included.',
      lead: 'Set your pricing rules once. Every line of every quote follows them, so you never forget a margin or a commission.',
      visual: 'quote',
      features: [
        { title: 'Margin, VAT and commission', body: ['A pricing procedure turns your net rates into selling prices: your margin, the right VAT, and the commission when an agency or a partner sells the trip.'] },
        { title: 'Per-person prices', body: ['Price per adult or per child. The client sees a clear price per person and a total.'] },
        { title: 'Client-facing names', body: ['Keep your internal names for your team. The client reads a clean, friendly name for each service.'] },
        { title: 'Included and not included', body: ['A clear list of what the price covers and what it does not, so there is no argument later.'] },
        { title: 'Versions', body: ['The client asks for a cheaper hotel? Make a new version. The previous one stays, and you can reopen it at any time.'] },
        { title: 'Expiry date', body: ['Quick picks set how long the price is valid, so a quote from March is not accepted in July at March prices.'] }
      ]
    },
    {
      id: 'send',
      kicker: 'Send and follow up',
      title: 'Sent tonight. Followed up next week.',
      lead: 'Send the quote by email in the client’s language. If there is no answer, Traviosoft brings it back to you.',
      visual: 'followup',
      features: [
        { title: 'Email templates', body: ['Your own email texts, in each language. The quote is attached and the email is ready to go.'] },
        { title: 'In the client’s language', body: ['Spanish, English, French and more. The quote, the email and the documents follow the client’s language.'] },
        { title: 'Follow-up after 7 days', body: ['No answer after a week? The quote comes back to you to follow up, so warm leads do not go cold while you are busy.'] }
      ]
    },
    {
      id: 'proposal',
      kicker: 'Proposal',
      title: 'A proposal your client enjoys opening.',
      lead: 'Instead of a PDF lost in an email, your client gets a link to a clear page with the trip, in their language and with your brand.',
      visual: 'proposal',
      features: [
        { title: 'A shareable proposal page', body: ['One link with the trip, the services and the price. It works on a phone and needs no download.'] },
        { title: 'Your brand', body: ['Your logo and colours on the page and on every document.'] },
        { title: 'The same numbers everywhere', body: ['The proposal, the quote PDF and later the invoice all come from the same lines. Change a price once and it is right everywhere.'] }
      ]
    }
  ],
  faq: [
    { q: 'Can I import my current catalogue?', a: ['Yes. We import your products, prices and suppliers from Excel or CSV during setup. Setup and import are free with yearly billing.'] },
    { q: 'Can several suppliers sell the same hotel or service?', a: ['Yes. A product can have several suppliers, each with its own rates. You choose the supplier per trip.'] },
    { q: 'What does my client see?', a: ['A clean quote with client-facing names, prices per person, what is included and not included, in their language and with your brand. Your net rates and margins are never shown. You can open the example trip to see it.'] },
    { q: 'Do I have to use the catalogue for every quote?', a: ['No. You can add a one-off line to any quote. The catalogue is there to save time on what you sell often.'] }
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
  heroTitle: 'Forget no booking, even in high season.',
  heroLead:
    'Once the client says yes, every service has to be booked, confirmed and sent to the right people. Traviosoft keeps the list for each trip, so nothing depends on memory.',
  heroVisual: 'order',
  chapters: [
    {
      id: 'order',
      kicker: 'Order',
      title: 'The deposit opens the order.',
      lead: 'Record the first payment and the quote is accepted: the order is created with every service already on it. Nothing to retype.',
      visual: 'order',
      features: [
        { title: 'One step, not three', body: ['The first payment accepts the quote, creates the order and lists every service to book. There is no second step to forget.'] },
        { title: 'Everything from the quote', body: ['Travellers, dates, services and prices come from the accepted quote, exactly as the client saw them.'] },
        { title: 'Changes after confirmation', body: ['The client adds a night? Update the trip and the order follows, so the team works from the latest version.'] }
      ]
    },
    {
      id: 'status',
      kicker: 'Statuses',
      title: 'See what is left to do.',
      lead: 'Booking, trip and payment badges update themselves. You know at a glance which trips need you today.',
      visual: 'order',
      features: [
        { title: 'A booking list per trip', body: ['Hotel, guide, car, tickets: each service shows whether it is to book, waiting for the supplier or confirmed.'] },
        { title: 'Badges that update themselves', body: ['When the last service is confirmed, the trip shows as booked. When the balance is paid, the payment badge turns green. No status to remember to change.'] },
        { title: 'Archive', body: ['Finished trips go to the archive and stay searchable. Something deleted by mistake can be restored from the trash.'] }
      ]
    },
    {
      id: 'suppliers',
      kicker: 'Suppliers',
      title: 'Suppliers in one place.',
      lead: 'Contacts, documents and every email exchanged, filed on the right trip. No more searching your inbox before the client calls.',
      visual: 'suppliers',
      features: [
        { title: 'Supplier emails filed for you', body: ['Confirmations and replies from suppliers land on the trip they belong to.'] },
        { title: 'Service sheets', body: ['Send each guide, driver or hotel a clear sheet with dates, names and details, straight from the trip.'] },
        { title: 'Supplier records', body: ['Contacts, contracts, photos and what each supplier includes, kept with the supplier and reused on every trip.'] }
      ]
    },
    {
      id: 'itinerary',
      kicker: 'Client itinerary',
      title: 'A day-by-day trip on their phone.',
      lead: 'Once the trip is confirmed, share a page with each day, the hotels, the times and the contacts. Your traveller opens it anywhere.',
      visual: 'itinerary',
      features: [
        { title: 'A shareable itinerary page', body: ['One link, day by day. It works on any phone and needs no app.'] },
        { title: 'In the traveller’s language and your brand', body: ['The itinerary follows the client’s language and carries your logo.'] },
        { title: 'Always up to date', body: ['Change a pickup time on the trip and the page shows the new time. No new PDF to send.'] }
      ]
    },
    {
      id: 'calendar',
      kicker: 'Calendar',
      title: 'Who travels this week.',
      lead: 'Every trip is a band on the calendar. On your phone, the day’s services as a simple list.',
      visual: 'calendar',
      features: [
        { title: 'Trip bands', body: ['See every trip from arrival to departure, and how busy the coming weeks are.'] },
        { title: 'The day on your phone', body: ['Today’s arrivals, transfers and visits in a list you can check between two meetings.'] },
        { title: 'Traveller details and rooming lists', body: ['Collect passport and room details from travellers with a form, and export the rooming list.'], later: true }
      ]
    }
  ],
  faq: [
    { q: 'Can my guides and drivers see the trip?', a: ['They receive a service sheet with what they need: dates, times, names and the meeting point. They do not need an account.'] },
    { q: 'What happens if the client changes a date?', a: ['Update the trip. The services, the itinerary page and the service sheets follow the change, and the services to rebook show again as to book.'] },
    { q: 'Do I need to forward supplier emails?', a: ['No. Supplier emails are filed on the trip automatically.'] }
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
  heroTitle: 'Get paid on time, invoice without retyping.',
  heroLead:
    'The money side of a trip should not live in a separate spreadsheet. In Traviosoft, payments and invoices come from the quote the client accepted, so the amounts are always right.',
  heroVisual: 'payments',
  chapters: [
    {
      id: 'schedule',
      kicker: 'Payment schedule',
      title: 'Deposit and balance, planned from the start.',
      lead: 'Set the deposit and the balance with their dates on the quote. The client knows from day one what to pay and when.',
      visual: 'payments',
      features: [
        { title: 'Deposit and balance', body: ['A percentage or an amount, each with its due date, on every trip.'] },
        { title: 'What is due this week', body: ['Every payment that is due or late, across all your trips, in one list.'] },
        { title: 'Payment reminders', body: ['Reminders sent to the client before and after a due date.'], later: true }
      ]
    },
    {
      id: 'links',
      kicker: 'Payment links',
      title: 'The client pays from the email.',
      lead: 'Add your payment link to the email. No bank details sent over WhatsApp, no chasing.',
      visual: 'payments',
      features: [
        { title: 'Your own payment link', body: ['Connect the payment link you already use. It goes out with the quote email.'] },
        { title: 'Record a payment in one click', body: ['A bank transfer or a card payment is recorded on the trip, and the payment badge updates itself.'] }
      ]
    },
    {
      id: 'invoices',
      kicker: 'Invoices',
      title: 'Invoices from the numbers you already typed.',
      lead: 'Deposit and final invoices are made from the trip. The quoted price flows into the invoice, so nothing is retyped and nothing is wrong.',
      visual: 'invoices',
      features: [
        { title: 'Deposit and final invoices', body: ['Made from the trip in one click, with the client’s details and the right amounts.'] },
        { title: 'Credit notes', body: ['A cancellation or a change becomes a credit note linked to the original invoice.'] },
        { title: 'Numbering per company', body: ['Run two companies from one place, each with its own invoice numbering.'] },
        { title: 'Your country’s tax rules', body: ['Special VAT schemes for travel agencies and e-invoicing are switched on per country in the settings. Spanish agencies, for example, get REAV and Veri*Factu.'] },
        { title: 'Ready for your accountant', body: ['An Excel recap or a zip of every PDF at the end of the month, in two clicks.'] }
      ]
    },
    {
      id: 'dashboard',
      kicker: 'Dashboard',
      title: 'Know where your agency stands.',
      lead: 'Sales, trips, money in and money out in one look, for the period you choose. No spreadsheet to update.',
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
    'Several brands in one account, documents in your client’s language, country settings, your team, your own database hosted in the EU, and API and MCP access.',
  name: 'Your setup',
  menuLine: 'Brands, languages, team, data and connections',
  step: '4 of 4',
  heroTitle: 'Your agency, set up your way.',
  heroLead:
    'The settings that make Traviosoft fit your agency: your brands, your languages, your country’s rules and your team. Set them once and every trip follows.',
  heroVisual: 'brands',
  chapters: [
    {
      id: 'brands',
      kicker: 'Brands',
      title: 'Several brands, one account.',
      lead: 'Run a second brand or a second company from the same place, each with its own look and its own numbering.',
      visual: 'brands',
      features: [
        { title: 'Logo and colours per brand', body: ['Every quote, proposal, itinerary and invoice carries the brand of the trip.'] },
        { title: 'Numbering per company', body: ['Each legal entity keeps its own invoice numbering.'] }
      ]
    },
    {
      id: 'languages',
      kicker: 'Languages',
      title: 'Every document in your client’s language.',
      lead: 'Write once. Quotes, emails, proposals and itineraries go out in Spanish, English, French and more.',
      visual: 'languages',
      features: [
        { title: 'Documents per language', body: ['Each client has a language, and every document follows it.'] },
        { title: 'Automatic translations', body: ['Product descriptions in your catalogue are translated for you, and you can correct any translation.'] },
        { title: 'Email templates per language', body: ['Your own wording in each language, used automatically.'] }
      ]
    },
    {
      id: 'country',
      kicker: 'Country settings',
      title: 'Your country’s rules, switched on.',
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
      title: 'Your team on the same trips.',
      lead: 'Everyone sees the same client, quote and booking. Add a colleague in a minute.',
      visual: 'team',
      features: [
        { title: 'Users included in your plan', body: ['3 users on Small, 5 on Team, more on Larger.'] },
        { title: 'Teams, portfolios and roles', body: ['Give each person their own clients and trips, and decide who sees what.'], later: true }
      ]
    },
    {
      id: 'data',
      kicker: 'Your data',
      title: 'Your data, safe and yours.',
      lead: 'Each agency has its own isolated database, hosted in the European Union. Your data is never mixed with another agency’s.',
      visual: 'safe',
      features: [
        { title: 'Your own database', body: ['Not a shared table with a filter: a separate database for your agency.'] },
        { title: 'Hosted in the EU', body: ['Your data stays in the European Union, under GDPR.'] },
        { title: 'Leave with your data', body: ['If you stop, you get your data back in standard formats.'] }
      ]
    },
    {
      id: 'connections',
      kicker: 'Connections',
      title: 'Connect your other tools.',
      lead: 'Your Traviosoft data is reachable from your other tools, with the same rights as in the app.',
      visual: 'connections',
      features: [
        { title: 'API and GraphQL', body: ['Read and write your data from your website, your accounting or your own scripts.'] },
        { title: 'MCP access', body: ['Connect an AI tool of your choice to your Traviosoft data, with the same rights as the user who connects it.'] },
        { title: 'The AI assistant', body: ['An assistant inside Traviosoft that prepares quotes and answers questions about your trips.'], later: true }
      ]
    }
  ],
  faq: [
    { q: 'Where is my data?', a: ['In your own database, hosted in the European Union.'] },
    { q: 'Can I leave with my data?', a: ['Yes. You get your data back in standard formats.'] },
    { q: 'Who can see what?', a: ['Every user of your agency sees the agency’s trips. Finer access per team and per person is coming.'] }
  ]
};

export const jobs: Record<JobSlug, JobPage> = { sell, book, 'get-paid': getPaid, setup };
