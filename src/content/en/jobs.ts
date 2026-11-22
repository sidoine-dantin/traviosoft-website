import type { JobPage, JobSlug } from '../types';

const sell: JobPage = {
  slug: 'sell',
  metaTitle: 'Sell: requests, catalog and quotes with your margins | Traviosoft',
  metaDescription:
    'Every client request in one list, a catalog with prices by season and several suppliers per product, quotes priced with your margin and VAT, sent in the client’s language with a follow-up after 7 days.',
  name: 'Sell',
  menuLine: 'From the first request to the accepted quote',
  step: '1 of 4',
  heroTitle: 'Requests, catalog and quotes',
  heroLead:
    'Traviosoft is management software for tailor-made travel agencies and DMCs. Selling a trip starts here: client requests in one list, a catalog of your products and prices, and quotes built from it with your margin.',
  heroVisual: 'quote',
  chapters: [
    {
      id: 'requests',
      kicker: 'Requests',
      title: 'Client requests in one list',
      lead: 'A request is a client’s first enquiry about a trip. Each one is in the same list with its next step, whether it came by email, phone or WhatsApp.',
      visual: 'requests',
      features: [
        { title: 'New or answered', body: ['A request stays New until its first quote is sent, then shows as Answered. The status updates itself.'] },
        { title: 'From request to quote', body: ['Start the quote from the request. The client, the travel dates and the number of travellers come with it.'] },
        { title: 'Reminders', body: ['Put a date on a request. That day it shows again on your Dashboard, the page that lists what to do today.'] }
      ]
    },
    {
      id: 'catalogue',
      kicker: 'Catalog',
      title: 'A catalog of products and prices',
      lead: 'The Catalog holds what you sell: hotels, transfers, guides and activities, with their purchase and selling prices by date.',
      visual: 'catalogue',
      features: [
        { title: 'Price periods', body: ['Low, mid and high season, special events, next year’s contract rates. Each product keeps its prices by period, and the quote uses the period of the travel dates.'] },
        { title: 'Several suppliers per product', body: ['Keep two transfer companies or three guides for the same service, each with its own rates, and choose one for each trip.'] },
        { title: 'Formulas for your classic routes', body: ['Save a classic route once as a formula. Add it to a quote in one click, at the current prices, then adjust what changes.'] }
      ]
    },
    {
      id: 'quotes',
      kicker: 'Quotes',
      title: 'Quotes with your margin and VAT',
      lead: 'A quote is built line by line from your catalog. Each line shows its purchase price, its selling price and your margin.',
      visual: 'margin',
      features: [
        { title: 'Your pricing rules', body: ['You decide once how a selling price is worked out from the supplier’s price: your margin, then the right VAT. Every quote line applies it.'] },
        { title: 'What the client sees', body: ['The client’s quote shows the services and the selling prices. Purchase prices and margins stay inside your agency.'] },
        { title: 'Versions', body: ['Each time you send a quote, that version is kept. If the client asks for a cheaper hotel, change the quote and send it again. The earlier version can be restored.'] }
      ]
    },
    {
      id: 'send',
      kicker: 'Send and follow up',
      title: 'Sending the quote and following up',
      lead: 'The quote leaves Traviosoft by email as a PDF, in the client’s language. A week later it shows on your Dashboard as due for a follow-up.',
      visual: 'followup',
      features: [
        { title: 'Email templates', body: ['Write your email texts once, in each language. When you send a quote, the email is ready with the PDF attached.'] },
        { title: 'In the client’s language', body: ['Spanish, Catalan, English, French or Italian. Each client has a language, and the quote and its email follow it.'] },
        { title: 'Follow-up after 7 days', body: ['Seven days after sending, the quote appears in the follow-up list of your Dashboard. You can move the date.'] }
      ]
    },
    {
      id: 'proposal',
      kicker: 'Proposal',
      title: 'A travel proposal page',
      lead: 'Besides the PDF, a quote can be shared as a travel proposal: a web page that presents the trip with photos, in the client’s language.',
      visual: 'proposal',
      features: [
        { title: 'Shared by a link', body: ['The link goes in the quote email. The page carries your logo and colours and opens on any phone.'] },
        { title: 'Included and not included', body: ['Each service lists what its price covers and what is extra.'] },
        { title: 'The same prices as the quote', body: ['The proposal page, the PDF and later the invoices are made from the same quote lines, so the prices match.'] }
      ]
    },
    {
      id: 'partners',
      kicker: 'Partner agencies',
      title: 'Commissions and your real margin',
      lead: 'A partner is another agency that sells your trip to its own client and earns a commission. The quote counts it and shows the margin that remains for you.',
      visual: 'commission',
      features: [
        { title: 'The partner agency and its client', body: ['The quote is addressed to the partner agency and names the travellers, who are its clients. Both stay on the trip up to the last invoice.'] },
        { title: 'Commission in the price', body: ['Enter the partner’s commission on the quote. It is part of the selling price from the first line, and your margin after commission stays visible to you.'] },
        { title: 'Commission statements', body: ['For each partner and each period, the commissions due for the trips it brought you. Mark them paid in one click.'] }
      ]
    }
  ],
  faq: [
    { q: 'Can I import my current catalog?', a: ['Yes. During setup we import your products, prices and suppliers from your spreadsheets. Setup and import are free with yearly billing.'] },
    { q: 'Can several suppliers sell the same hotel or service?', a: ['Yes. A product can have several suppliers, each with its own rates. You choose the supplier for each trip.'] },
    { q: 'What does my client see?', a: ['A quote with the name you choose for each service and prices per person, in their language and with your brand. The travel proposal page also lists what is included and not included. Your purchase prices and margins stay private to your team.'] },
    { q: 'Do I have to use the catalog for every quote?', a: ['A quote can mix products from the catalog and lines you type in for that trip only.'] }
  ]
};

const book: JobPage = {
  slug: 'book',
  metaTitle: 'Book and run the trip: orders, suppliers, client itinerary | Traviosoft',
  metaDescription:
    'An accepted quote becomes an order with every service to book. Booking requests go to suppliers by email, each service shows its booking status, and your client gets a day-by-day itinerary.',
  name: 'Book and run',
  menuLine: 'From the accepted quote to the trip done',
  step: '2 of 4',
  heroTitle: 'Orders, bookings and the client itinerary',
  heroLead:
    'When a client accepts a quote, Traviosoft turns it into an order: the list of every service to book for the trip. Booking requests go to your suppliers by email, each service shows whether it is confirmed, and the traveller gets a day-by-day itinerary.',
  heroVisual: 'order',
  chapters: [
    {
      id: 'order',
      kicker: 'Bookings',
      title: 'Every booking ready for the trip',
      lead: 'The order lists each hotel, guide, transfer and visit of the accepted quote. You send the booking requests from it, and the suppliers confirm.',
      visual: 'confirm',
      features: [
        { title: 'Every service on one list', body: ['The order takes the services from the accepted quote, with their dates, travellers and prices already filled in.'] },
        { title: 'Booking requests by email', body: ['Each supplier receives a booking request with its services, the dates and the number of travellers. Its reply is kept on the order.'] },
        { title: 'Changes after confirmation', body: ['The client adds a night? Change the quote and the order follows, so the team works from the current version.'] }
      ]
    },
    {
      id: 'status',
      kicker: 'Statuses',
      title: 'Booking statuses on every trip',
      lead: 'Each service shows where its booking stands, so you see which ones are confirmed and which are waiting for the supplier.',
      visual: 'statuses',
      features: [
        { title: 'A status per service', body: ['Hotel, guide, car, tickets: each one is to book, waiting for the supplier, or confirmed.'] },
        { title: 'A status for the whole trip', body: ['The order counts its confirmed services, for example 3 of 7. When the last one is confirmed, the trip shows as all booked.'] },
        { title: 'Bookings that need you', body: ['Your Dashboard lists the bookings waiting for a supplier’s answer, the holds that end soon and the ones to reconfirm before the trip.'] }
      ]
    },
    {
      id: 'suppliers',
      kicker: 'Suppliers',
      title: 'Supplier pages and emails',
      lead: 'Each supplier has a page with its contacts, documents and rates. The emails you exchange about a booking are kept on the order they belong to.',
      visual: 'suppliers',
      features: [
        { title: 'Supplier emails on the right order', body: ['A confirmation or a reply from a supplier is attached to the order it concerns, where the whole team can read it.'] },
        { title: 'Service sheets', body: ['A service sheet tells a guide, a driver or a hotel what to deliver: dates, times, names and meeting point. Send it from the order.'] },
        { title: 'Availability requests and purchase orders', body: ['Ask a hotel whether the dates are available, then send a purchase order: the firm booking, with the agreed price. The supplier answers from a link and the booking status updates.'], premium: true }
      ]
    },
    {
      id: 'itinerary',
      kicker: 'Client itinerary',
      title: 'A day-by-day itinerary',
      lead: 'The traveller gets a link to a web page with each day of the trip: the hotels, the times and the contacts.',
      visual: 'itinerary',
      features: [
        { title: 'Shared by a link', body: ['One link, day by day. It opens on any phone.'] },
        { title: 'In the traveller’s language, with your brand', body: ['The page is written in the client’s language and carries your logo.'] },
        { title: 'Always up to date', body: ['Change a pickup time and the page shows the new time. The link stays the same.'] }
      ]
    },
    {
      id: 'groups',
      kicker: 'Groups',
      title: 'Groups and rooming lists',
      lead: 'For a group trip: the list of travellers, services that only part of the group takes, and a rooming list for each hotel.',
      visual: 'rooming',
      features: [
        { title: 'The travellers list', body: ['Paste or import the list from a spreadsheet, or send a form link so travellers fill in their own passport, diet and accessibility details. Up to 200 travellers per trip.'] },
        { title: 'Services for part of the group', body: ['The golf day for twelve, the gala dinner for everyone. Each service lists who takes it, so every supplier gets the right numbers.'] },
        { title: 'A rooming list per hotel', body: ['Rooms are made from who shares with whom and numbered for each hotel. Send the list as a PDF or a spreadsheet.'] }
      ]
    },
    {
      id: 'calendar',
      kicker: 'Calendar',
      title: 'Trips on a calendar',
      lead: 'The Calendar shows every trip as a band from arrival to departure. On a phone, it lists the services of the day.',
      visual: 'calendar',
      features: [
        { title: 'Trip bands', body: ['See which trips overlap and how busy the coming weeks are.'] },
        { title: 'The day on your phone', body: ['Today’s arrivals, transfers and visits in one list, easy to check between two meetings.'] }
      ]
    }
  ],
  faq: [
    { q: 'Can my guides and drivers see the trip?', a: ['They receive a service sheet by email with what they need: dates, times, names and the meeting point.'] },
    { q: 'What happens if the client changes a date?', a: ['Change the date on the quote. The order, the itinerary page and the service sheets follow, and the services to book again show as to book.'] },
    { q: 'Do supplier replies end up on the trip?', a: ['Yes. Booking requests go out from Traviosoft through your own mailbox, and each supplier’s reply is kept on its order, where the whole team sees it.'] }
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
    'In Traviosoft, the client’s payments and invoices are made from the accepted quote, so the amounts match. The same figures feed a dashboard of your sales, the money received and the money owed to suppliers.',
  heroVisual: 'payments',
  chapters: [
    {
      id: 'schedule',
      kicker: 'Payment schedule',
      title: 'Deposit and balance with due dates',
      lead: 'Each quote carries a payment schedule: usually a deposit and a balance, each with its due date.',
      visual: 'schedule',
      features: [
        { title: 'Deposit and balance', body: ['A percentage or an amount for each payment, with its due date. Your usual schedule is applied in one click.'] },
        { title: 'What is due this week', body: ['One list shows every client payment that is due or past its date, across all your trips.'] },
        { title: 'Payment reminders', body: ['Traviosoft can email the client before and after a due date, in their language and with your wording.'] }
      ]
    },
    {
      id: 'links',
      kicker: 'Payment links',
      title: 'Payment links in the email',
      lead: 'A payment link lets the client pay online, by card for example. Yours goes out in the email with the amount due.',
      visual: 'paylink',
      features: [
        { title: 'Your own payment link', body: ['Use the link from the payment provider you already have. Add it to a payment and it goes out in the email to the client.'] },
        { title: 'Payments recorded on the trip', body: ['When a bank transfer or a card payment arrives, record it in one click. The trip then shows as partly paid or paid.'] }
      ]
    },
    {
      id: 'invoices',
      kicker: 'Invoices',
      title: 'Invoices from the trip',
      lead: 'Deposit and final invoices are made from the accepted quote, with its amounts and the client’s details.',
      visual: 'invoices',
      features: [
        { title: 'Deposit and final invoices', body: ['One click makes the invoice for a deposit received, and later the final invoice, which deducts the deposit.'] },
        { title: 'Credit notes', body: ['When a trip is cancelled or changed, a credit note reverses the original invoice and stays linked to it.'] },
        { title: 'Ready for your accountant', body: ['At the end of the month, export an Excel summary or a zip file of every invoice PDF.'] }
      ]
    },
    {
      id: 'dashboard',
      kicker: 'Dashboard',
      title: 'Sales, trips and cash',
      lead: 'The Dashboard gathers your figures on one page: sales, trips, money received and money to pay, for the period you choose.',
      visual: 'dashboard',
      features: [
        { title: 'Sales and trips', body: ['What you sold and how many trips, this month, this season or this year.'] },
        { title: 'Money in and money out', body: ['What clients have paid you and what you owe suppliers, side by side.'] },
        { title: 'Today', body: ['The day’s work in one place: reminders, payments due and bookings to confirm.'] }
      ]
    }
  ],
  faq: [
    { q: 'Which payment providers work?', a: ['Any provider that gives you a payment link. You add the link to the payment, the client pays there, and you record the payment on the trip.'] },
    { q: 'Can my accountant get the files?', a: ['Yes. Export an Excel summary or a zip file of every invoice PDF for any period.'] },
    { q: 'Does it follow my country’s rules?', a: ['Invoices are numbered in sequence for each of your companies, and credit notes are available in every country. For Spain, the VAT scheme for travel agencies is built in. In other countries, the invoice is issued by your own invoicing software, connected to Traviosoft. For your country, ask us in the demo.'] }
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
    'Traviosoft is set up once for your agency: brands, languages, currencies, tax rules and users. Every quote, booking and invoice then follows these settings.',
  heroVisual: 'settings',
  chapters: [
    {
      id: 'brands',
      kicker: 'Brands',
      title: 'Several brands in one account',
      lead: 'An agency that sells under two names, or runs two companies, works from one account. Each brand keeps its own look.',
      visual: 'brands',
      features: [
        { title: 'Logo and colours per brand', body: ['Each trip belongs to a brand. Its quote, proposal, itinerary and invoice carry that brand’s logo and colours.'], premium: true },
        { title: 'Numbering per company', body: ['A company is the legal entity that issues the invoices. Each one keeps its own invoice numbers.'], premium: true }
      ]
    },
    {
      id: 'languages',
      kicker: 'Languages',
      title: 'Documents in the client’s language',
      lead: 'Quotes, emails, proposals and itineraries are written in Spanish, Catalan, English, French or Italian, according to the client.',
      visual: 'languages',
      features: [
        { title: 'One language per client', body: ['Set the client’s language once, and every document for that client follows it.'] },
        { title: 'Automatic translations', body: ['Product descriptions in your catalog are translated for you, and you can correct any translation.'] },
        { title: 'Email templates per language', body: ['Your own wording in each language, picked automatically for each client.'] }
      ]
    },
    {
      id: 'currencies',
      kicker: 'Currencies',
      title: 'Several currencies',
      lead: 'Lodges priced in dollars, a client who pays in pounds, your accounts in euros. Each quote has its own currency, and your figures add up in yours.',
      visual: 'currencies',
      features: [
        { title: 'A currency per client and per quote', body: ['Quote a British client in pounds and an American partner in dollars, from the same catalog.'], premium: true },
        { title: 'Supplier prices in their currency', body: ['Keep each rate in the currency the supplier invoices in. The quote converts it at the day’s exchange rate, plus a buffer you choose for rate changes.'], premium: true },
        { title: 'Your accounts in one currency', body: ['Invoices, payments, margins and reports add up in your accounting currency. Exchange gains and losses are worked out for you.'], premium: true }
      ]
    },
    {
      id: 'country',
      kicker: 'Country settings',
      title: 'Country tax rules',
      lead: 'VAT rules for travel agencies and electronic invoicing differ from one country to another. In Traviosoft they are settings of your account.',
      visual: 'country',
      features: [
        { title: 'VAT on the margin', body: ['Travel agencies often pay VAT on their margin instead of the full price. For Spain, this scheme (REAV) and its wording on your invoices are built in.'] },
        { title: 'E-invoicing', body: ['Where invoices must be sent electronically, they go out from Traviosoft or from your invoicing software, depending on the country.'] }
      ]
    },
    {
      id: 'team',
      kicker: 'Team',
      title: 'Each seller with their own clients and sales',
      lead: 'Each seller works on their own clients and trips, and you see the sales of the whole agency.',
      visual: 'team',
      features: [
        { title: 'Users included in your plan', body: ['3 users are included in both plans, Classic and Premium. Add more as your team grows.'] },
        { title: 'Teams, portfolios and roles', body: ['A portfolio is the set of clients one person looks after. Group portfolios into teams, and choose with roles what each person can see and do.'], premium: true }
      ]
    },
    {
      id: 'data',
      kicker: 'Your data',
      title: 'Data and hosting',
      lead: 'Your agency’s data is kept in its own space, on servers in the European Union.',
      visual: 'safe',
      features: [
        { title: 'A separate space for your agency', body: ['Your clients, prices and trips are stored apart from those of other agencies.'] },
        { title: 'Hosted in the EU', body: ['Your data stays in the European Union, under GDPR, the EU data protection law.'] },
        { title: 'Leave with your data', body: ['If you stop, you get your data back in standard formats.'] }
      ]
    },
    {
      id: 'connections',
      kicker: 'Connections',
      title: 'Connections to your other tools',
      lead: 'Your website, your accounting software and your AI assistant can work with your Traviosoft data. Each connection has the rights you give it.',
      visual: 'connections',
      features: [
        { title: 'Your website and accounting', body: ['Your website can send its contact form straight into your requests, and your accounting software can pick up invoices and payments.'], premium: true },
        { title: 'Your AI tools', body: ['Connect the AI assistant you already use, such as Claude or ChatGPT. It works in Traviosoft with the rights of the person who connected it.'], premium: true },
        { title: 'The assistant inside Traviosoft', body: ['Ask what needs your attention today, have a quote prepared from your catalog, or turn a supplier’s price list into catalog prices. Each change waits for your approval.'], premium: true }
      ]
    }
  ],
  faq: [
    { q: 'Where is my data?', a: ['In a separate space for your agency, hosted in the European Union.'] },
    { q: 'Can I leave with my data?', a: ['Yes. You get your data back in standard formats.'] },
    { q: 'Who can see what?', a: ['Traviosoft has two plans. On Classic, every user sees all the agency’s trips. On Premium, each team and each person can have their own clients and trips, with the rights you choose.'] }
  ]
};

export const jobs: Record<JobSlug, JobPage> = { sell, book, 'get-paid': getPaid, setup };
