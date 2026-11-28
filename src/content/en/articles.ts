import type { Article, ArticleBlock, Faq } from '../types';
import { invoicingGuides } from './invoicing';
import { posts } from './posts';
import { topicGuides } from './topics';
import { PRICES } from '../prices';

const UPDATED = '2026-11-03';

type Cmp = {
  key: string;
  slug: string;
  other: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  card: string;
  basis: string;
  rows: string[][];
  otherBetter: string[];
  usBetter: string[];
  switching: string;
  faq: Faq[];
  updated?: string;
};

function compare(c: Cmp): Article {
  const blocks: ArticleBlock[] = [
    { type: 'p', text: c.basis },
    { type: 'h2', text: 'Side by side', id: 'comparison' },
    { type: 'table', head: ['', 'Traviosoft', c.other], rows: c.rows },
    { type: 'h2', text: `When ${c.other} is the better choice`, id: 'when-other' },
    { type: 'list', items: c.otherBetter },
    { type: 'h2', text: 'When Traviosoft fits better', id: 'when-traviosoft' },
    { type: 'list', items: c.usBetter },
    { type: 'h2', text: 'Moving to Traviosoft', id: 'switching' },
    { type: 'p', text: c.switching },
    { type: 'h2', text: 'Questions', id: 'faq' },
    { type: 'faq', items: c.faq },
    { type: 'p', text: 'The [Demo page](/demo) describes the demo, shown on a sample trip.' }
  ];
  return {
    key: c.key,
    kind: 'compare',
    slug: c.slug,
    metaTitle: c.metaTitle,
    metaDescription: c.metaDescription,
    title: c.title,
    lead: c.lead,
    updated: c.updated ?? UPDATED,
    card: c.card,
    blocks
  };
}

const compares: Cmp[] = [
  {
    key: 'vs-excel',
    slug: 'traviosoft-vs-excel',
    other: 'Excel and Word',
    metaTitle: 'Traviosoft vs Excel and Word for travel agencies',
    metaDescription:
      'Excel and Word are where most travel agencies start. We compare quotes, margins, bookings and invoices to show when software built for trips is worth it.',
    title: 'Traviosoft vs Excel and Word: when to move to travel software',
    lead: 'Excel and Word are flexible, familiar and enough for many agencies that sell a few trips a year. When several people, price seasons and invoice numbering come in, software built for trips takes that work on for you.',
    card: 'Spreadsheet or software: when it pays to switch and when it does not.',
    basis:
      'Excel and Word are where almost every agency starts, and many stay happy with them for years. This page shows what changes when trips move into software built for them. Traviosoft details are those on our site on 3 November 2026.',
    rows: [
      ['Made for', 'Tailor-made trips: requests, quotes, bookings and invoices', 'Any spreadsheet and text task'],
      ['Price', `Classic from ${PRICES.classic.yearly} EUR a month, ${PRICES.usersIncluded} users included`, 'The Microsoft licence you already have'],
      ['Margin and commission', 'Pricing rules set once; every line follows them', 'Formulas you design yourself, fully flexible'],
      ['Seasons and suppliers', 'Prices by period and several suppliers per product', 'Tabs organised your way'],
      ['Quote versions', 'Every version is saved and can be reopened', 'One file per version'],
      ['Supplier bookings', 'A list per trip with statuses that update themselves', 'A column or a separate document'],
      ['Invoices', 'Made from the trip, numbered per company, with credit notes', 'Your own invoice template'],
      ['Spanish tax rules', 'The travel agency VAT scheme (REAV) on invoices', 'Set up in your own template'],
      ['Client itinerary', 'A shareable page, day by day, in their language', 'A PDF or Word file sent by email'],
      ['Data', 'A separate space for your agency, hosted in the EU', 'Your files, wherever you store them']
    ],
    otherBetter: [
      'You sell few trips a year and run them alone. A good Excel model gives you everything you need.',
      'Your way of working is very particular, and a spreadsheet bends to it better than any program.',
      'You do not want to change anything now, for example in the middle of high season. Switching mid-campaign is a risk.',
      'You need a one-off analysis or a custom report. Excel is still the right tool, and Traviosoft exports to Excel anyway.'
    ],
    usBetter: [
      'Two or more people work on the same clients and trips at the same time.',
      'When a hotel changes its price, you want to see which open quotes it affects and update them in one go.',
      'You want the margin and the commission applied the same way every time, from rules you set once.',
      'You want the quote to become the invoice, and the files for your accountant, without retyping.',
      'You invoice clients abroad and need documents in their language.'
    ],
    switching:
      'During setup we import your products, prices and suppliers from your spreadsheets, free with yearly billing. The [Switching page](/switch) describes the steps, and the guide “From Excel to travel agency software” describes what changes.',
    faq: [
      { q: 'Can I keep using Excel next to Traviosoft?', a: ['Yes. You can import your data from Excel and export an Excel recap or a zip of every invoice PDF for your accountant.'] },
      { q: 'What happens to the margin formulas I already have?', a: ['They become pricing rules. Instead of copying the formula into every file, you define it once and it applies to every line of every quote.'] },
      { q: 'Is it worth it for a one-person agency?', a: ['It depends on volume. If you sell few trips and do not need invoices or shared itineraries, a spreadsheet may be enough. If quotes take you hours every week, software starts to pay.'] }
    ]
  },
  {
    key: 'vs-ezus',
    slug: 'traviosoft-vs-ezus',
    other: 'Ezus',
    metaTitle: 'Traviosoft vs Ezus: comparison for DMCs',
    metaDescription:
      'Traviosoft and Ezus compared: who each is for, published prices, languages, getting started and what each does best for DMCs and tailor-made agencies.',
    title: 'Traviosoft vs Ezus: an independent comparison for DMCs and inbound agencies',
    lead: 'Ezus is a well-established French software for DMCs, with many customers, public prices and support in five languages. Traviosoft shows one price with users included and includes Spain’s travel agency VAT scheme (REAV) on invoices.',
    card: 'Two tools with public prices: who each is for and what each includes.',
    basis:
      'Ezus details come from its website and public directories, checked on 3 November 2026. Prices change, so always check both current pricing pages. Ezus customer numbers are the ones it publishes.',
    rows: [
      ['Made for', 'Inbound agencies, DMCs and tailor-made agencies', 'DMCs, inbound agencies, tour operators and agencies; FIT, groups and MICE'],
      ['Published price', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR a month, ${PRICES.usersIncluded} users included`, 'Professional 75 EUR per user a month (up to 10 users); Premium 100 EUR; Enterprise on request'],
      ['Getting started', 'Setup and import free with yearly billing', 'Onboarding pack of 1,990 EUR with a guided rollout; data import 390 EUR'],
      ['Languages', 'Documents in Spanish, Catalan, English, French and Italian', 'Site and support in 5 languages: EN, FR, ES, IT, PT'],
      ['Data hosting', 'EU, a separate space per agency', 'AWS Ireland, according to its site']
    ],
    otherBetter: [
      'You want a product with more years on the market and many public references: Ezus says it serves more than 600 agencies in more than 70 countries.',
      'You need support and documentation in Italian or Portuguese.',
      'You value a guided rollout, with an onboarding specialist for several months.',
      'You need an Enterprise plan: Ezus offers one from 30 users.',
      'You want a traveller area, a payment portal and web pages inside the same tool, as Ezus describes them.'
    ],
    usBetter: [
      'You want one price with users included, and setup and import included with yearly billing.',
      'Your agency is in Spain and you want the travel agency VAT scheme (REAV) on your invoices.',
      'You work mostly in Spanish and French and want documents and email templates in the client’s language.',
      'You prefer a tool built around the flow of one trip: request, quote with margin, booking, payment and invoice.'
    ],
    switching:
      'If you move to Traviosoft from Ezus, we import your products, prices and suppliers from your spreadsheets during setup, free with yearly billing. The [Switching page](/switch) describes the steps.',
    faq: [
      { q: 'How is each one priced?', a: [`Traviosoft Classic is ${PRICES.classic.yearly} EUR a month with yearly billing, ${PRICES.usersIncluded} users included, with setup and import included. Ezus Professional is 75 EUR per user a month, with an onboarding pack of 1,990 EUR that includes a guided rollout. Check both current pricing pages.`] },
      { q: 'Does Ezus work for Spain?', a: ['Yes. Ezus has a Spanish site and support. Traviosoft also includes the travel agency VAT scheme (REAV) for agencies in Spain.'] },
      { q: 'Can I try both?', a: ['Both work with a demo.'] }
    ]
  },
  {
    key: 'vs-giav',
    slug: 'traviosoft-vs-giav',
    other: 'GIAV',
    metaTitle: 'Traviosoft vs GIAV: travel agency management software',
    metaDescription:
      'GIAV is long-established Spanish software for travel agencies. We compare its focus with Traviosoft for inbound and tailor-made travel.',
    title: 'Traviosoft vs GIAV: two ways to run a travel agency',
    lead: 'GIAV is travel agency management software with many years in Spain and a long record with retail agencies. Traviosoft is built for inbound and tailor-made travel. If you mainly sell catalog trips, GIAV may fit better.',
    card: 'A long-established tool for retail agencies and one for tailor-made and inbound travel.',
    basis:
      'GIAV details come from directories and trade press. GIAV presents its prices and plans in a demo, so we describe its focus. Traviosoft details are those on our site on 3 November 2026.',
    rows: [
      ['Made for', 'Inbound agencies, DMCs and tailor-made agencies', 'Travel agency management in Spain, mostly retail agencies'],
      ['Price', `Classic from ${PRICES.classic.yearly} EUR a month, ${PRICES.usersIncluded} users included`, 'On request'],
      ['Known for', 'Quotes with margin per line, a seasonal catalog, a client itinerary page and Spain’s travel agency VAT scheme (REAV)', 'A long record with travel agencies in Spain']
    ],
    otherBetter: [
      'You are a retail agency selling tickets, hotels and wholesaler packages. A tool built for that work usually fits better.',
      'Your team and your accountant already know GIAV and you have processes built over years.',
      'You value a product with a long record in the Spanish market.',
      'You need accounting or accountant integrations that you already have working with them.'
    ],
    usBetter: [
      'You design tailor-made trips or receive travellers from abroad, and each quote is priced service by service from net rates.',
      'You need prices by season and several suppliers for the same service.',
      'You want to send clients a proposal and itinerary page in their language, with your brand.',
      'You want to see the price and what each plan includes on the website.'
    ],
    switching:
      'If you move to Traviosoft from GIAV, we import your products, prices and suppliers from your spreadsheets during setup, free with yearly billing. The [Switching page](/switch) describes the steps.',
    faq: [
      { q: 'Can I import my data from GIAV?', a: ['We import products, prices and suppliers from spreadsheets. If you export your data from GIAV to a spreadsheet, you can bring it over.'] },
      { q: 'Does Traviosoft work for a retail agency?', a: ['It is built for agencies that design and sell tailor-made trips.'] },
      { q: 'How is GIAV priced?', a: ['GIAV presents its prices in a demo.'] }
    ]
  },
  {
    key: 'vs-holded',
    slug: 'traviosoft-vs-holded',
    other: 'Holded',
    metaTitle: 'Traviosoft vs Holded for travel agencies',
    metaDescription:
      'Holded is business software for SMEs; Traviosoft is built for travel. What each one focuses on, and how a travel agency can use both together.',
    title: 'Traviosoft vs Holded: travel software or a general ERP',
    lead: 'Holded is invoicing, accounting and management software for SMEs, widely used in Spain. Traviosoft is built around the trip. Many agencies use both: Traviosoft for the trips, Holded for the company.',
    card: 'A general SME tool and a travel tool: what each one does.',
    basis:
      'Holded details come from its site and its tourism and travel page, checked on 9 November 2026. Holded changes plans and promotions often, so check its pricing page. The two tools focus on different work, so the question is usually how to combine them.',
    rows: [
      ['Made for', 'Inbound agencies, DMCs and tailor-made agencies', 'Freelancers and SMEs in any sector, from 1 to over 100 people'],
      ['Published price', `Classic from ${PRICES.classic.yearly} EUR a month, ${PRICES.usersIncluded} users included`, 'Basic 34 EUR (2 users), Standard 69 EUR (4), Advanced 115 EUR (7), Premium 229 EUR (15), excluding VAT; with temporary discounts'],
      ['Main focus', 'The trip: requests, quotes with margin, bookings, itinerary, payments and invoices', 'The company: invoicing, accounting, payroll and banks'],
      ['Accounting, payroll and banks', 'Prepares the files for your accountant', 'Its core: accounting, payroll and bank reconciliation']
    ],
    otherBetter: [
      'You need accounting, cash management, payroll or bank reconciliation in the same program.',
      'Your travel agency is a small part of a bigger business and you want a single system for everything.',
      'Your accountant already works with Holded and prefers to receive everything there.',
      'You invoice in several currencies and want general cash control.'
    ],
    usBetter: [
      'Your daily work is calculating, sending and following up travel quotes with margin.',
      'You need a catalog with seasonal prices and several suppliers per service.',
      'You want a booking list per trip, service sheets and a client itinerary.',
      'Your agency applies the travel agency VAT scheme (REAV) and you want its wording on every invoice automatically.'
    ],
    switching:
      'Traviosoft runs the trip, from request to invoice, and exports an Excel recap or a zip of PDF invoices, which an accountant can bring into Holded or another accounting program. The [Switching page](/switch) describes the steps.',
    faq: [
      { q: 'Do I have to leave Holded to use Traviosoft?', a: ['Not necessarily. Many agencies keep their bookkeeping where it is. What matters is issuing each invoice in one place only, and agreeing with your accountant how they receive the data.'] },
      { q: 'Can Holded and Traviosoft work together?', a: ['Yes. Traviosoft handles the trip and its invoices, and exports an Excel recap or a zip of PDF invoices that your accountant can bring into Holded or any other accounting program.'] },
      { q: 'Does Traviosoft do accounting?', a: ['No. It manages the trip, the payments and the invoices, and prepares the files for your accountant. Bookkeeping stays with your accountant or the program you use.'] }
    ]
  },
  {
    key: 'vs-lemax',
    slug: 'traviosoft-vs-lemax',
    other: 'Lemax',
    metaTitle: 'Traviosoft vs Lemax: software for DMCs and tour operators',
    metaDescription:
      'Lemax is Croatian software for mid-size and large tour operators and DMCs. We compare who each is for, team size, pricing and focus.',
    title: 'Traviosoft vs Lemax: complete management software compared',
    lead: 'Lemax is software with more than 30 years behind it, built for mid-size and large tour operators and DMCs. Its Lemax GO package is designed for teams from 15 users, priced with each client. Traviosoft covers the whole trip, from the first request to the last invoice, with documents in five languages and a published price.',
    card: 'Two complete systems: a long-established platform and one flow from request to invoice with a published price.',
    basis:
      'Lemax details come from its website and trade press, checked on 3 November 2026. Lemax agrees prices with each client, so we write “On request”. Its customer numbers are the ones it shows.',
    rows: [
      ['Made for', 'Inbound agencies, DMCs and tailor-made agencies', 'Mid-size and large tour operators and DMCs'],
      ['Team size', `Two plans, ${PRICES.usersIncluded} users included`, 'Lemax GO from 15 users'],
      ['Price', `Classic from ${PRICES.classic.yearly} EUR a month, ${PRICES.usersIncluded} users included`, 'On request; agreed with each client before signing'],
      ['Rollout', 'Setup and import free with yearly billing', 'Says “live in 90 days” for Lemax GO'],
      ['Distribution and connections', 'Connections to your website and accounting (Premium) and to your AI tools (both plans)', 'Supplier connectivity, booking API and B2B portal, according to its site']
    ],
    otherBetter: [
      'You are a tour operator or DMC with a team of 15 or more and complex multi-day processes.',
      'You need distribution, supplier connections by API, a B2B portal for agencies or an online booking engine.',
      'You want a vendor with more than 30 years of history and customers on several continents.',
      'You want a guided rollout project.'
    ],
    usBetter: [
      'You want to quote, book and invoice the whole trip in one system and be up and running through a short setup.',
      'You want to see the price and the users included before asking for a demo.',
      'Your market is Spain and you sell in Spanish and French, with the travel agency VAT scheme (REAV).',
      'You want us to import your products, prices and suppliers from your spreadsheets during setup.'
    ],
    switching:
      'If you move to Traviosoft from Lemax, we import your products, prices and suppliers from your spreadsheets during setup, free with yearly billing. The [Switching page](/switch) describes the steps.',
    faq: [
      { q: 'Who is Lemax GO for?', a: ['Teams of 15 users or more, according to its site, with a rollout it describes as “live in 90 days”.'] },
      { q: 'How is Lemax priced?', a: ['Lemax agrees the package and rollout price with each client before signing.'] },
      { q: 'Can Traviosoft connect to my other tools?', a: ['Yes. On Premium, your website, your accounting software or a developer you work with can read and write your Traviosoft data. On both plans, you can connect the AI assistant you already use.'] }
    ]
  },
  {
    key: 'vs-tourwriter',
    slug: 'traviosoft-vs-tourwriter',
    other: 'Tourwriter',
    metaTitle: 'Traviosoft vs Tourwriter for DMCs and travel designers',
    metaDescription:
      'Tourwriter is New Zealand software for luxury DMCs and travel designers. We compare who each is for, plans, prices, languages and what each one does best.',
    title: 'Traviosoft vs Tourwriter: two tools for designing trips',
    lead: 'Tourwriter is New Zealand software known for polished itineraries, built for luxury DMCs and travel designers working in English. Traviosoft prices in euros with users included, works in Spanish and French, and includes Spain’s travel agency VAT scheme (REAV).',
    card: 'Polished luxury itineraries in English and a euro-priced tool in Spanish and French.',
    basis:
      'Tourwriter details come from its site (plans and company pages), checked on 3 November 2026. Its prices are “from” prices in US dollars, per user, with a quote for each team, so the real total can differ.',
    rows: [
      ['Made for', 'Inbound agencies, DMCs and tailor-made agencies', 'Luxury DMCs and travel designers, multi-day FIT trips'],
      ['Published price', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR a month, ${PRICES.usersIncluded} users included`, 'Starter from 99 USD per user a month; Pro from 149 USD; Premium on request'],
      ['Getting started', 'Setup and import free with yearly billing', 'One-time fee from 1,199 USD, covering migration, setup and training'],
      ['Languages', 'Documents in Spanish, Catalan, English, French and Italian', 'English']
    ],
    otherBetter: [
      'You sell luxury trips in English and want carefully designed itineraries.',
      'You value that other European DMCs already use it.',
      'You want a guided rollout with training included in the setup fee.',
      'Your main market is English-speaking.'
    ],
    usBetter: [
      'You want a price in euros with users included in each plan.',
      'Your agency is in Spain and you want the travel agency VAT scheme (REAV) built in.',
      'Your clients speak Spanish or French and you want quotes and emails in their language.',
      'You want setup and import included with yearly billing.'
    ],
    switching:
      'If you move to Traviosoft from Tourwriter, we import your products, prices and suppliers from your spreadsheets during setup, free with yearly billing. The [Switching page](/switch) describes the steps.',
    faq: [
      { q: 'How is Tourwriter priced?', a: ['Its plans start from 99 USD per user a month (Starter) and 149 USD (Pro), with a one-time setup fee from 1,199 USD that covers migration and training. They prepare a quote for each team, so confirm the total with them.'] },
      { q: 'Which languages does each work in?', a: ['Tourwriter works in English. Traviosoft works in Spanish, English and French, and sends documents in the client’s language: Spanish, Catalan, English, French or Italian.'] },
      { q: 'Can I try both?', a: ['Both offer a demo.'] }
    ]
  },
  {
    key: 'vs-tourplan',
    updated: '2026-11-14',
    slug: 'traviosoft-vs-tourplan',
    other: 'Tourplan',
    metaTitle: 'Traviosoft vs Tourplan for DMCs and tour operators',
    metaDescription:
      'Tourplan is tour operator software used by DMCs and tour operators since 1986. We compare who each is for, company, price, getting started and languages.',
    title: 'Traviosoft vs Tourplan: two systems for DMCs and tour operators',
    lead: 'Tourplan has been making software for DMCs and tour operators since 1986, with sales, bookings and back office in a modular system used by 450 companies in 75 countries. Traviosoft covers the whole trip, from the first request to the last invoice, with documents in five languages and a published price.',
    card: 'A modular system with 40 years behind it and one flow from request to invoice with a published price.',
    basis:
      'Tourplan details come from its website (home and About pages), checked on 14 November 2026. Its site does not publish prices, so we write “On request”.',
    rows: [
      ['Made for', 'Inbound agencies, DMCs and tailor-made agencies', 'DMCs, inbound and outbound tour operators: FIT, groups, MICE, tailor-made, series tours'],
      ['Price', `Classic from ${PRICES.classic.yearly} EUR a month, ${PRICES.usersIncluded} users included`, 'On request'],
      ['Getting started', 'Setup and import free with yearly billing', 'Hosting, installation, project management, training and support'],
      ['Distribution', 'Connections to your website and accounting (Premium) and to your AI tools (both plans)', 'Web and XML distribution channels, and online interfaces for agents, clients and suppliers']
    ],
    otherBetter: [
      'You want a modular system covering product, quotes, reservations, accounts and management reporting, with 40 years of history.',
      'You distribute your product through web and XML channels and want interfaces for agents and suppliers.',
      'You value a vendor working with 450 tour operators and DMCs in 75 countries, with offices on five continents.',
      'You want a guided project with installation, project management and training.'
    ],
    usBetter: [
      'You want to quote, book and invoice the whole trip in one system, up and running through a short setup.',
      'You want a published price with users included in each plan.',
      'Your clients speak Spanish, French, Catalan or Italian and you want documents in their language.',
      'You want us to import your products, prices and suppliers from your spreadsheets during setup.'
    ],
    switching:
      'If you move to Traviosoft from Tourplan, we import your products, prices and suppliers from your spreadsheets during setup, free with yearly billing. The [Switching page](/switch) describes the steps.',
    faq: [
      { q: 'Who is Tourplan for?', a: ['According to its site, DMCs and inbound and outbound tour operators, for FIT, group, MICE, tailor-made, series and specialist tours.'] },
      { q: 'How is Tourplan priced?', a: ['Its site does not publish prices.'] },
      { q: 'Can I try both?', a: ['Both offer a demo.'] }
    ]
  },
  {
    key: 'vs-kaptio',
    updated: '2026-11-14',
    slug: 'traviosoft-vs-kaptio',
    other: 'Kaptio',
    metaTitle: 'Traviosoft vs Kaptio: tour operators and tailor-made travel',
    metaDescription:
      'Kaptio is software for multi-day travel: cruise, rail, group tours and tailor-made travel. We compare who each is for, company, price and getting started.',
    title: 'Traviosoft vs Kaptio: two systems for multi-day trips',
    lead: 'Kaptio, founded in Reykjavik in 2012, brings CRM, contracting, pricing, inventory, reservations, payments and operations together for cruise, rail, group tours and tailor-made travel. Traviosoft covers the whole trip, from the first request to the last invoice, with documents in five languages and a published price.',
    card: 'One platform for multi-day travel and one flow from request to invoice with a published price.',
    basis:
      'Kaptio details come from its website (home, platform and About pages), checked on 14 November 2026. Its site does not publish prices, so we write “On request”.',
    rows: [
      ['Made for', 'Inbound agencies, DMCs and tailor-made agencies', 'Multi-day travel: cruise, rail, group tours and tailor-made travel'],
      ['Price', `Classic from ${PRICES.classic.yearly} EUR a month, ${PRICES.usersIncluded} users included`, 'On request'],
      ['Getting started', 'Setup and import free with yearly billing', 'Starts with a discovery workshop'],
      ['Modules', 'Requests, quotes, bookings, invoices and payments in one flow', 'Kaptio CRM, Kaptio Travel and Kaptio Edge']
    ],
    otherBetter: [
      'You sell cruise, rail or group tours and want CRM, contracting, inventory and operations on one platform.',
      'You want to start with a discovery workshop on your processes.',
      'You want the AI assistants it lists as part of the platform.'
    ],
    usBetter: [
      'You build tailor-made trips and want to quote, book and invoice them in one system, up and running through a short setup.',
      'You want a published price with users included in each plan.',
      'Your clients speak Spanish, French, Catalan or Italian and you want documents in their language.',
      'You want us to import your products, prices and suppliers from your spreadsheets during setup.'
    ],
    switching:
      'If you move to Traviosoft from Kaptio, we import your products, prices and suppliers from your spreadsheets during setup, free with yearly billing. The [Switching page](/switch) describes the steps.',
    faq: [
      { q: 'Who is Kaptio for?', a: ['According to its site, companies selling multi-day travel: cruise, rail, group tours and tailor-made travel.'] },
      { q: 'How is Kaptio priced?', a: ['Its site does not publish prices.'] },
      { q: 'Can I try both?', a: ['Kaptio starts with a discovery workshop and Traviosoft with a demo on a sample trip.'] }
    ]
  },
  {
    key: 'vs-tourcms',
    updated: '2026-11-14',
    slug: 'traviosoft-vs-tourcms',
    other: 'TourCMS',
    metaTitle: 'Traviosoft vs TourCMS: tailor-made trips or day tours',
    metaDescription:
      'TourCMS is booking and channel management software for tours and activities operators. We compare who each is for, company, published prices and languages.',
    title: 'Traviosoft vs TourCMS: tailor-made trips and tours and activities',
    lead: 'TourCMS, operated by Palisis in Switzerland, has offered booking, distribution and channel management for tours and activities operators since 2003. Traviosoft is built for tailor-made trips, from the first request to the last invoice, with documents in five languages.',
    card: 'Bookings and channel management for tours and activities, and one flow for tailor-made trips.',
    basis:
      'TourCMS details come from its website (home, features and prices pages), checked on 14 November 2026. Its prices are shown in US dollars.',
    rows: [
      ['Made for', 'Inbound agencies, DMCs and tailor-made agencies', 'Tours and activities operators: day tours, multi-day tours, attractions, DMCs'],
      ['Published price', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR a month, ${PRICES.usersIncluded} users included`, 'From 49 USD a month (2 users) to 569 USD a month (500 users); bookings from connected partners from 1.9% per transaction'],
      ['Getting started', 'Setup and import free with yearly billing', 'Free trial, no setup fee'],
      ['Languages', 'Documents in Spanish, Catalan, English, French and Italian', 'Content in 22 languages']
    ],
    otherBetter: [
      'You run tours or activities with departures sold online and through resellers.',
      'You want channel management and a marketplace of agents, which it lists at more than 30,000.',
      'You want to start with a free trial.'
    ],
    usBetter: [
      'You build tailor-made trips, each one quoted with your margin and commission.',
      'You want supplier bookings and invoices made from the same trip.',
      'Your clients speak Spanish, French, Catalan or Italian and you want documents in their language.',
      'You want us to import your products, prices and suppliers from your spreadsheets during setup.'
    ],
    switching:
      'If you move to Traviosoft from TourCMS, we import your products, prices and suppliers from your spreadsheets during setup, free with yearly billing. The [Switching page](/switch) describes the steps.',
    faq: [
      { q: 'Who is TourCMS for?', a: ['According to its site, tours and activities operators: day tours, hop-on hop-off, attractions, multi-day tours, DMCs and walking tours.'] },
      { q: 'How is TourCMS priced?', a: ['Its prices page lists four plans, from 49 USD a month (Small) to 569 USD a month (Enterprise), with a yearly option, plus a fee from 1.9% on bookings from connected partners.'] },
      { q: 'Can I try both?', a: ['TourCMS offers a free trial and Traviosoft a demo on a sample trip.'] }
    ]
  }
];

const comparisons: Article[] = compares.map(compare);

const best: Article = {
  key: 'best-dmc-software',
  kind: 'best',
  slug: 'best-dmc-software',
  metaTitle: 'Best software for DMCs and inbound agencies (2026)',
  metaDescription:
    'An independent comparison of Traviosoft, Ezus, Tourplan, Tourwriter, Lemax, Kaptio, GIAV and Excel: who each is for, published prices, languages and strengths.',
  title: 'Best software for DMCs and inbound agencies (2026)',
  lead: 'For a DMC or tailor-made agency, the options are Traviosoft, Ezus, Tourplan, Tourwriter, Lemax, Kaptio and GIAV; many agencies also start with Excel and Word. This guide compares them using public facts: who each is for, price, languages and what each does best.',
  updated: UPDATED,
  card: 'Eight options compared: who each is for, published prices, languages and strengths.',
  blocks: [
    {
      type: 'p',
      text: 'Traviosoft writes this list, so we stick to public facts, write “On request” where a vendor shares its prices in a demo, and say what each tool does best. Facts checked on 3 November 2026. Prices change, so always check the official pages.'
    },
    { type: 'h2', text: 'Comparison table', id: 'table' },
    {
      type: 'table',
      head: ['Tool', 'Who it is for', 'Team size', 'Price', 'Languages'],
      usRow: 0,
      rows: [
        ['Traviosoft', 'Inbound agencies, DMCs and tailor-made agencies', `Two plans, ${PRICES.usersIncluded} users included`, `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR a month, ${PRICES.usersIncluded} users included`, 'Documents in ES, CA, EN, FR and IT'],
        ['Ezus', 'DMCs, inbound agencies, tour operators and agencies', 'Professional up to 10 users; Enterprise from 30', '75 EUR per user a month (Professional); onboarding pack 1,990 EUR', 'Site and support in EN, FR, ES, IT, PT'],
        ['Tourplan', 'Established tour operators and DMCs', 'On request', 'On request', 'Site in English, Spanish and Japanese'],
        ['Tourwriter', 'Luxury DMCs and travel designers', '1 to 20+ people depending on plan', 'From 99 USD per user a month; setup from 1,199 USD', 'English'],
        ['Lemax', 'Mid-size and large tour operators and DMCs', 'Lemax GO from 15 users', 'On request', 'English'],
        ['Kaptio', 'Large multi-day travel operators', 'Large operators', 'On request', 'English'],
        ['GIAV', 'Travel agencies in Spain, with a long record in retail', 'On request', 'On request', 'Spanish'],
        ['Excel + Word', 'Any agency starting out', 'One to three people in practice', 'The licence you already have', 'Whatever you write']
      ]
    },
    { type: 'h2', text: 'Each tool and what it does best', id: 'tools' },
    { type: 'h3', text: 'Traviosoft' },
    {
      type: 'p',
      text: 'Covers the whole trip: requests, a catalog with seasonal prices, quotes with margin and commission, bookings, payments and invoices, with the travel agency VAT scheme (REAV) for Spain. It shows its price, and setup and import are included with yearly billing.'
    },
    { type: 'h3', text: 'Ezus' },
    {
      type: 'p',
      text: 'A complete DMC software with public prices, a site and support in five languages and many references: more than 600 agencies in more than 70 countries, according to its site. Its onboarding pack of 1,990 EUR includes a guided rollout.'
    },
    { type: 'h3', text: 'Tourplan' },
    {
      type: 'p',
      text: 'Software with about 40 years of history for established tour operators and DMCs, with clients in about 75 countries according to its site. Prices and plans are presented on request.'
    },
    { type: 'h3', text: 'Tourwriter' },
    {
      type: 'p',
      text: 'Known for polished luxury itineraries, used by DMCs and travel designers in many countries. Plans are priced per user, with a setup fee that covers migration and training.'
    },
    { type: 'h3', text: 'Lemax' },
    {
      type: 'p',
      text: 'A full platform for mid-size and large tour operators and DMCs, with distribution, a booking API and a B2B portal. Lemax GO is designed for teams from 15 users, and prices are agreed with each client.'
    },
    { type: 'h3', text: 'Kaptio' },
    {
      type: 'p',
      text: 'A platform built on Salesforce for large multi-day operators; press names well-known international groups among its clients. It is sold through a discovery workshop, with prices on request.'
    },
    { type: 'h3', text: 'GIAV' },
    {
      type: 'p',
      text: 'Management software for travel agencies with a long presence in Spain, especially among retail agencies. It presents its prices and features in a demo.'
    },
    { type: 'h3', text: 'Excel + Word' },
    {
      type: 'p',
      text: 'Free if you already have the licence, flexible and known to everyone. Many agencies start here and move to dedicated software as their trips and team grow.'
    },
    { type: 'h2', text: 'What differs between the options', id: 'choose' },
    { type: 'list', items: [
      'Options differ in the minimum number of users and in what is included in each plan.',
      'The first-year cost can include setup and data import on top of the monthly fee, depending on the vendor.',
      'The language of the documents a client receives can differ from the language of the screens.',
      'Invoicing rules depend on the country; the pages in “Invoicing by country” describe several.',
      'Some vendors publish their prices; others share them in a demo.'
    ] },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'What is the best software for a DMC or tailor-made agency?', a: ['It depends on the agency’s way of working and its market. The table above shows who each tool is for, its price and its languages.'] },
        { q: 'How much does DMC software cost?', a: [`Published prices range from ${PRICES.classic.yearly} EUR a month for ${PRICES.usersIncluded} users (Traviosoft Classic) to 75 EUR per user a month plus a 1,990 EUR onboarding pack (Ezus). Tourplan, Lemax and Kaptio give their prices on request.`] },
        { q: 'Do I need travel-specific software or will a general ERP do?', a: ['A general ERP is built for bookkeeping; travel software adds quotes with margin per service and a booking list per trip. Many agencies use both.'] }
      ]
    },
    { type: 'p', text: 'The [Demo page](/demo) describes the demo, shown on a sample trip.' }
  ]
};

const quote: Article = {
  key: 'quote-with-margins',
  kind: 'guide',
  slug: 'tailor-made-quote-with-margins',
  metaTitle: 'Tailor-made travel pricing: margin and commission',
  metaDescription:
    'How the price of a tailor-made trip is calculated from net rates, with a margin on the selling price and a commission, in a worked example with figures.',
  title: 'How a tailor-made travel price is calculated',
  lead: 'The price of a tailor-made trip is built from three amounts: what suppliers charge (the net rates), what the agency earns (the margin) and, when another agency sells the trip, its commission. This page shows the calculation on an example.',
  updated: '2026-11-14',
  related: ['net-commissionable-rates', 'package-quote', 'agency-invoicing', 'what-is-a-dmc'],
  card: 'Net rates, margin on the selling price and commission, calculated on a worked example.',
  blocks: [
    { type: 'h2', text: 'Markup and margin for the same cost', id: 'concepts' },
    {
      type: 'p',
      text: 'Markup is calculated on the cost and margin on the selling price, so the same amount earned gives two different percentages. For a cost of 1,000 EUR:'
    },
    {
      type: 'table',
      head: ['Markup on cost', 'Selling price', 'Amount earned', 'Margin on price'],
      rows: [
        ['20%', '1,200.00 EUR', '200.00 EUR', '16.7%'],
        ['25%', '1,250.00 EUR', '250.00 EUR', '20.0%'],
        ['33.3%', '1,333.33 EUR', '333.33 EUR', '25.0%'],
        ['50%', '1,500.00 EUR', '500.00 EUR', '33.3%']
      ]
    },
    { type: 'h2', text: 'Example: 4 nights in Andalucía for 2 people', id: 'example' },
    {
      type: 'table',
      head: ['Service', 'Calculation', 'Net cost'],
      rows: [
        ['Hotel, double room', '4 nights × 100 EUR', '400 EUR'],
        ['Private transfers', '2 transfers × 60 EUR', '120 EUR'],
        ['Guide', '2 days × 150 EUR', '300 EUR'],
        ['Cooking class', '2 people × 40 EUR', '80 EUR'],
        ['Entrance fees', '2 people × 50 EUR', '100 EUR'],
        ['Total net', '', '1,000 EUR']
      ]
    },
    {
      type: 'p',
      text: 'With a 25% margin on the selling price, the price is 1,000 ÷ (1 − 0.25) = 1,333.33 EUR, which is 666.67 EUR per person. The margin is 333.33 EUR. A 25% markup on the cost would give 1,250 EUR, which is a 20% margin.'
    },
    { type: 'h2', text: 'With a commission', id: 'commission' },
    {
      type: 'p',
      text: 'When another agency sells the trip for a 10% commission on the price, the commission is taken from the same price. At 1,333.33 EUR, the commission is 133.33 EUR and the margin falls to 200 EUR, which is 15%. To keep a 25% margin, the commission is included in the divisor: 1,000 ÷ (1 − 0.25 − 0.10) = 1,538.46 EUR.'
    },
    {
      type: 'list',
      items: [
        'Price to the client: 1,538.46 EUR (769.23 EUR per person).',
        'Commission at 10%: 153.85 EUR.',
        'Margin at 25%: 384.62 EUR.',
        'Net cost: 1,000.00 EUR. (Figures carry cent rounding.)'
      ]
    },
    { type: 'h2', text: 'Taxes', id: 'taxes' },
    {
      type: 'p',
      text: 'The amounts above are before tax. How VAT applies to a trip depends on the country and on the scheme the agency uses; the pages in “Invoicing by country” describe several countries.'
    },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'In Traviosoft, pricing rules (margin, VAT and commission) are set once, and every line of every quote follows them, with the price per person and the total the client sees.'
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Is the margin set per service or per trip?', a: ['Both exist. Some agencies use one margin for the whole trip, others a different margin per type of service.'] },
        { q: 'Why is the commission in the divisor?', a: ['Because the commission is a percentage of the selling price, like the margin. Putting both in the divisor gives a price where each keeps its percentage.'] }
      ]
    }
  ]
};

const rooming: Article = {
  key: 'rooming-list',
  kind: 'guide',
  slug: 'rooming-list-template-groups-mice',
  metaTitle: 'Rooming list: meaning, columns and an example for groups',
  metaDescription:
    'What a rooming list is in group travel and MICE, the information it usually contains, an example and how hotels use it.',
  title: 'The rooming list for groups and MICE events',
  lead: 'A rooming list tells the hotel who sleeps in each room of a group, with the room type, the dates and any requests. The hotel uses it to assign rooms in the block it holds for the group.',
  updated: '2026-11-28',
  related: ['hotel-allotment', 'what-is-a-dmc', 'package-quote'],
  card: 'What a rooming list is, the columns it usually has and an example.',
  blocks: [
    {
      type: 'p',
      text: 'For a group, the hotel holds a block of rooms under a contract. The rooming list says how those rooms are split between the participants. The contract usually sets the date by which the hotel expects the list and the date on which unused rooms in the block are released.'
    },
    { type: 'h2', text: 'The usual columns', id: 'columns' },
    {
      type: 'table',
      head: ['Column', 'Content', 'Example'],
      rows: [
        ['Room no.', 'A running number; the hotel assigns the real one', '1'],
        ['Room type', 'Single, double, twin or triple', 'Twin'],
        ['Guest 1', 'Full name as in the travel document', 'Marta Ruiz Soler'],
        ['Guest 2', 'Same, if sharing', 'Pedro Vidal Mas'],
        ['Check-in', 'Arrival date', '12/05/2027'],
        ['Check-out', 'Departure date', '15/05/2027'],
        ['Nights', 'Calculated from the dates', '3'],
        ['Meal plan', 'Room only, breakfast, half board', 'Breakfast'],
        ['Arrival', 'Time or flight', 'Flight 10:40'],
        ['Requests', 'Diets, accessibility, extra bed', 'Gluten free'],
        ['Company or group', 'When there are several invoices', 'Sales team']
      ]
    },
    {
      type: 'p',
      text: 'An example of size: a group of 22 people in 9 twin rooms (18 people) and 4 single rooms uses 13 rooms. The total of people on the list matches the group.'
    },
    { type: 'h2', text: 'Room type abbreviations', id: 'abbreviations' },
    {
      type: 'table',
      head: ['Abbreviation', 'Room'],
      rows: [
        ['SGL', 'Single: one person'],
        ['DBL', 'Double: two people, one bed'],
        ['TWN', 'Twin: two people, two beds'],
        ['TPL', 'Triple: three people'],
        ['DUS', 'Double for single use: one person in a double room']
      ]
    },
    { type: 'h2', text: 'When the hotel expects it', id: 'deadline' },
    {
      type: 'p',
      text: 'The group contract sets a cut-off date, after which the rooms not named on the list go back to the hotel. As an example, the terms published by Fáilte Ireland for group bookings ask for the full rooming list, with the balance, 30 days before arrival. The page [Hotel allotments and release dates](/guides/hotel-allotment-release-date) explains release dates and cut-off.'
    },
    { type: 'h2', text: 'Who appears on it', id: 'who' },
    {
      type: 'p',
      text: 'Besides the participants, a group rooming list often includes the people who travel with the group, such as the guide, the driver or the organiser, when they stay at the same hotel.'
    },
    { type: 'h2', text: 'Versions', id: 'versions' },
    {
      type: 'p',
      text: 'A rooming list changes as participants confirm, cancel or swap rooms. Each version sent to the hotel usually carries its date, so both sides work from the same list.'
    },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'In Traviosoft, a rooming list per hotel is built from who shares with whom, ready to send as a PDF or a spreadsheet.'
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'What does rooming list mean?', a: ['A list of the rooms of a group, with the names of the people in each room, sent to the hotel before arrival.'] },
        { q: 'Is a rooming list only for large groups?', a: ['It is used whenever a hotel needs to know who sleeps in which room, from a small group to a large event.'] },
        { q: 'What is the difference between a rooming list and a booking?', a: ['The booking reserves the rooms. The rooming list says who occupies each of them.'] }
      ]
    }
  ]
};

const fromExcel: Article = {
  key: 'from-excel',
  kind: 'guide',
  slug: 'move-from-excel-to-travel-software',
  metaTitle: 'From Excel to travel agency software: what changes',
  metaDescription:
    'What a travel agency usually keeps in spreadsheets, what moves into travel software and what changes once trips are in one system.',
  title: 'From Excel to travel agency software',
  lead: 'Many agencies run on spreadsheets and documents: a product list, a supplier list, clients and one file per quote. Travel software holds the same information in one place, linked to each trip.',
  updated: '2026-11-14',
  card: 'What usually lives in spreadsheets, what moves into software and what changes.',
  blocks: [
    { type: 'h2', text: 'What usually lives in spreadsheets', id: 'spreadsheets' },
    {
      type: 'list',
      items: [
        'Products with name, supplier, net price and validity period.',
        'Suppliers with contact details and terms.',
        'Clients with language and email.',
        'Pricing rules: margin, commission and VAT, often as formulas.',
        'Quotes, often one file per version, and the usual email texts.'
      ]
    },
    { type: 'h2', text: 'What changes in software', id: 'changes' },
    {
      type: 'list',
      items: [
        'Prices are kept by season and by supplier, and a quote reads them from the catalog.',
        'Pricing rules are set once and apply to every quote line.',
        'Each quote version is kept with the trip.',
        'Bookings, payments and invoices are linked to the same trip.',
        'Several people work on the same clients and trips at the same time.'
      ]
    },
    { type: 'h2', text: 'What stays in the old files', id: 'archive' },
    {
      type: 'p',
      text: 'The history of past trips often stays in the old files as an archive. What moves is what is reused: current rates, active suppliers and clients.'
    },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'During setup, we import products, prices and suppliers from your spreadsheets. Setup and import are free with yearly billing. The [Switching page](/switch) describes the steps.'
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Can Excel still be used next to Traviosoft?', a: ['Yes. Traviosoft exports an Excel recap, or a zip of invoice PDFs for any period.'] },
        { q: 'Can the data be taken back out?', a: ['Yes. If you stop using Traviosoft, you get your data back in standard formats.'] }
      ]
    }
  ]
};

const aiTools: Article = {
  key: 'ai-assistant-mcp',
  kind: 'guide',
  slug: 'ai-assistant-mcp-travel-agency',
  metaTitle: 'AI for travel agencies: built-in assistant and MCP connector',
  metaDescription:
    'How a travel agency can use AI on its own data: the assistant built into Traviosoft and the MCP connector for Claude, ChatGPT and other AI tools.',
  title: 'AI in your travel agency',
  lead: 'Traviosoft works with AI in two ways. The built-in assistant works inside the app for each person who uses it. The MCP connector lets the AI tool you already use, such as Claude or ChatGPT, read your agency’s data, and it asks your permission before it updates anything.',
  updated: '2026-11-14',
  card: 'The built-in assistant, the MCP connector for Claude and ChatGPT, and how you stay in control.',
  blocks: [
    { type: 'h2', text: 'The built-in assistant', id: 'assistant' },
    {
      type: 'p',
      text: 'The assistant sits in Traviosoft and works with the same rights as the person using it. Ask what needs you today. Have it prepare a quote from your catalog or turn a supplier price list into catalog prices. It can also tick off booking tasks or list the payments that are due. It is an option on both plans, with usage limits, and you switch it on per person.'
    },
    {
      type: 'p',
      text: 'Every change it proposes waits for your OK or can be undone. Over time it learns how your agency likes things done, and your team can correct what it learned line by line.'
    },
    { type: 'h2', text: 'The MCP connector', id: 'mcp' },
    {
      type: 'p',
      text: 'MCP (Model Context Protocol) is the standard way an AI assistant plugs into another tool so it can work in it. With the Traviosoft connector your AI tool can look up a client, draft a quote or tell you which payments are late. It works on your real data rather than on what you paste into the chat. It is included in both plans.'
    },
    {
      type: 'list',
      items: [
        'Claude (desktop or web): Settings, Connectors, Add custom connector, then paste your Traviosoft address.',
        'ChatGPT: Settings, Apps, Advanced settings, Developer mode, then create an app with the same address.',
        'Mistral (Le Chat): Context, Connectors, Add connector, Custom MCP connector, with the same address.',
        'Automation tools such as n8n can connect too, to run tasks automatically.'
      ]
    },
    {
      type: 'p',
      text: 'The AI tool sends you to Traviosoft to sign in. You choose Read only, or Read and make changes, and whether it may also delete.'
    },
    { type: 'h2', text: 'You stay in control', id: 'control' },
    {
      type: 'list',
      items: [
        'The connector is off until an administrator turns it on.',
        'The administrator chooses who may connect an AI tool.',
        'An AI tool never does more than the person who connected it can do in the app.',
        'Claude, ChatGPT and Mistral ask the person before each change. Deletions, and changes from other AI tools, wait in Traviosoft for a person to approve them.',
        'Every action is recorded in the activity log under the name of the person who connected it.',
        'Any connection can be cut off at once from Traviosoft.'
      ]
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Does it work with Gemini?', a: ['The connector works with any AI tool that supports MCP. Google supports MCP in its Gemini developer tools. Whether a custom connector can be added depends on the Gemini version.'] },
        { q: 'Is the MCP connector included in my plan?', a: ['Yes. It is included in both Classic and Premium. The built-in assistant is an option on both plans, with usage limits.'] },
        { q: 'Does the AI see all our data?', a: ['It sees what the person who connected it can see, and nothing more. An administrator can also allow reading only and block every change.'] },
        { q: 'Can the AI send emails?', a: ['Quotes and invoices go to clients from Traviosoft. The AI can email a supplier too, and it asks the person’s permission first: once they allow it, it sends the booking request or the availability request.'] }
      ]
    }
  ]
};

export const articles: Article[] = [best, ...comparisons, quote, rooming, fromExcel, aiTools, ...posts, ...topicGuides, ...invoicingGuides];
