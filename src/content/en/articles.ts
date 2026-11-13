import type { Article, ArticleBlock, Faq } from '../types';
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
    { type: 'h2', text: 'If you decide to switch', id: 'switching' },
    { type: 'p', text: c.switching },
    { type: 'h2', text: 'Questions', id: 'faq' },
    { type: 'faq', items: c.faq },
    { type: 'p', text: 'To see Traviosoft with one of your own trips, the [Demo page](/demo) explains what the call looks like.' }
  ];
  return {
    key: c.key,
    kind: 'compare',
    slug: c.slug,
    metaTitle: c.metaTitle,
    metaDescription: c.metaDescription,
    title: c.title,
    lead: c.lead,
    updated: UPDATED,
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
      ['Spanish tax rules', 'REAV labels and Veri*Factu with QR, switched on per country', 'Set up in your own template'],
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
      'You invoice clients abroad and need documents in Spanish, English and French.'
    ],
    switching:
      'You do not have to leave Excel all at once. During setup we import your products, prices and suppliers from your spreadsheets, and setup and import are free with yearly billing. A common way is to finish the trips already open in your files and start new requests in Traviosoft. There is a full timeline on the [Switching page](/switch) and a step-by-step guide in "Moving from Excel to travel software".',
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
      'We compare Traviosoft and Ezus on who each is for, published prices, languages and getting started, and what each one does best for DMCs and tailor-made agencies.',
    title: 'Traviosoft vs Ezus: an independent comparison for DMCs and inbound agencies',
    lead: 'Ezus is a well-established French software for DMCs, with many customers, public prices and support in five languages. Traviosoft shows one price with users included and adds REAV and Veri*Factu for agencies in Spain.',
    card: 'Two tools with public prices: who each is for and what each includes.',
    basis:
      'Ezus details come from its website and public directories, checked on 3 November 2026. Prices change, so always check both current pricing pages. Ezus customer numbers and review scores are the ones it publishes.',
    rows: [
      ['Made for', 'Inbound agencies, DMCs and tailor-made agencies', 'DMCs, inbound agencies, tour operators and agencies; FIT, groups and MICE'],
      ['Company', 'Born inside a tailor-made agency in Barcelona; see the About page', 'Paris, founded in 2019'],
      ['Published price', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR a month, ${PRICES.usersIncluded} users included`, 'Professional 75 EUR per user a month (up to 10 users); Premium 100 EUR; Enterprise on request'],
      ['Getting started', 'Setup and import free with yearly billing', 'Onboarding pack of 1,990 EUR with a guided rollout; data import 390 EUR'],
      ['Languages', 'Documents in Spanish, English, French and more', 'Site and support in 5 languages: EN, FR, ES, IT, PT'],
      ['Data hosting', 'EU, a separate space per agency', 'AWS Ireland, according to its site']
    ],
    otherBetter: [
      'You want a product with more years on the market and many public references: Ezus says it serves more than 600 agencies in more than 70 countries, with high scores on Capterra and G2.',
      'You need support and documentation in Italian or Portuguese.',
      'You value a guided rollout, with an onboarding specialist for several months.',
      'You need an Enterprise plan: Ezus offers one from 30 users.',
      'You want a traveller area, a payment portal and web pages inside the same tool, as Ezus describes them.'
    ],
    usBetter: [
      'You want one price with users included, and setup and import included with yearly billing.',
      'Your agency is in Spain and you want REAV labels on invoices and Veri*Factu with QR built in.',
      'You work mostly in Spanish and French and want documents and email templates in the client’s language.',
      'You prefer a tool built around the flow of one trip: request, quote with margin, booking, payment and invoice.'
    ],
    switching:
      'If you use Ezus and want to switch, export your products, suppliers and clients first. We import products, prices and suppliers from your spreadsheets during setup. A practical tip: switch outside high season and finish open trips where they are. The [Switching page](/switch) lists the steps.',
    faq: [
      { q: 'How is each one priced?', a: [`Traviosoft Classic is ${PRICES.classic.yearly} EUR a month with yearly billing, ${PRICES.usersIncluded} users included, with setup and import included. Ezus Professional is 75 EUR per user a month, with an onboarding pack of 1,990 EUR that includes a guided rollout. Check both current pricing pages.`] },
      { q: 'Does Ezus work for Spain?', a: ['Yes. Ezus has a Spanish site and support. Traviosoft also includes REAV labels and Veri*Factu with QR for agencies in Spain.'] },
      { q: 'Can I try both?', a: ['Both work with a demo. The most useful test is to bring one real trip of yours to each and see how each one builds the quote with margin.'] }
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
    lead: 'GIAV is travel agency management software with many years in Spain and a long record with retail agencies. Traviosoft is built for inbound and tailor-made travel. If you mainly sell catalogue trips, GIAV may fit better.',
    card: 'A long-established tool for retail agencies and one for tailor-made and inbound travel.',
    basis:
      'GIAV details come from directories and trade press. GIAV presents its prices and plans in a demo, so we describe its focus and suggest you ask them for the rest. Traviosoft details are those on our site on 3 November 2026.',
    rows: [
      ['Made for', 'Inbound agencies, DMCs and tailor-made agencies', 'Travel agency management in Spain, mostly retail agencies'],
      ['Price', `Classic from ${PRICES.classic.yearly} EUR a month, ${PRICES.usersIncluded} users included`, 'On request'],
      ['Known for', 'Quotes with margin per line, a seasonal catalogue, a client itinerary page, REAV and Veri*Factu', 'A long record with travel agencies in Spain']
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
      'Before deciding, ask GIAV and us for a demo with one of your trips, and ask both the same questions: how the margin per line is calculated, how a partner’s commission is recorded, what the client sees and how invoicing with REAV works. If you switch, we import products, prices and suppliers from your spreadsheets. See the [Switching page](/switch).',
    faq: [
      { q: 'Can I import my data from GIAV?', a: ['We import products, prices and suppliers from spreadsheets. If you export your data from GIAV to a spreadsheet, you can bring it over.'] },
      { q: 'Does Traviosoft work for a retail agency?', a: ['It is built for agencies that design and sell tailor-made trips. If your business is mostly selling wholesaler catalogue products, check first that it fits what you do.'] },
      { q: 'How is GIAV priced?', a: ['GIAV presents its prices in a demo. Ask them for a quote for your team size.'] }
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
      ['Veri*Factu', 'Yes, with QR', 'Yes, according to its site'],
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
      'You need a catalogue with seasonal prices and several suppliers per service.',
      'You want a booking list per trip, service sheets and a client itinerary.',
      'Your agency applies REAV and you want the labels on every invoice automatically.'
    ],
    switching:
      'The sensible approach is to let them coexist. Traviosoft runs the trip, from request to invoice, and exports an Excel recap or a zip of PDF invoices for your accountant. Decide which program issues the invoices so you do not number them in two places, and ask your accountant how they want to receive the data. More on the [Switching page](/switch).',
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
    title: 'Traviosoft vs Lemax: two complete management systems compared',
    lead: 'Lemax is software with more than 30 years behind it, built for mid-size and large tour operators and DMCs. Its Lemax GO package is designed for teams from 15 users, priced with each client. Traviosoft covers the whole trip, from the first request to the last invoice, in Spanish, English and French, with a published price.',
    card: 'Two complete systems: a long-established platform and one flow from request to invoice with a published price.',
    basis:
      'Lemax details come from its website and trade press, checked on 3 November 2026. Lemax agrees prices with each client, so we write "On request". Its customer numbers are the ones it shows.',
    rows: [
      ['Made for', 'Inbound agencies, DMCs and tailor-made agencies', 'Mid-size and large tour operators and DMCs'],
      ['Company', 'Born inside a tailor-made agency in Barcelona; see the About page', 'Croatia, founded in 1990'],
      ['Team size', `Two plans, ${PRICES.usersIncluded} users included`, 'Lemax GO from 15 users'],
      ['Price', `Classic from ${PRICES.classic.yearly} EUR a month, ${PRICES.usersIncluded} users included`, 'On request; agreed with each client before signing'],
      ['Rollout', 'Setup and import free with yearly billing', 'Says "live in 90 days" for Lemax GO'],
      ['Distribution and connections', 'Connections to your website, accounting and AI tools (Premium)', 'Supplier connectivity, booking API and B2B portal, according to its site']
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
      'Your market is Spain and you sell in Spanish and French, with REAV and Veri*Factu.',
      'You want us to import your products, prices and suppliers from your spreadsheets during setup.'
    ],
    switching:
      'If you use Lemax and want to move to Traviosoft, export your products and prices and ask us how to import them from your spreadsheets. Switching in the middle of the season is risky, so it is usually done in the low season. See the [Switching page](/switch).',
    faq: [
      { q: 'Who is Lemax GO for?', a: ['Teams of 15 users or more, according to its site, with a rollout it describes as "live in 90 days". For other team sizes, ask them what they offer.'] },
      { q: 'How is Lemax priced?', a: ['Lemax agrees the package and rollout price with each client before signing. Ask them for a quote.'] },
      { q: 'Can Traviosoft connect to my other tools?', a: ['Yes, on Premium. Your website, your accounting tool or a developer you work with can read and write your Traviosoft data, and you can connect the AI assistant you already use.'] }
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
    lead: 'Tourwriter is New Zealand software known for polished itineraries, built for luxury DMCs and travel designers working in English. Traviosoft prices in euros with users included, works in Spanish and French, and includes REAV and Veri*Factu.',
    card: 'Polished luxury itineraries in English and a euro-priced tool in Spanish and French.',
    basis:
      'Tourwriter details come from its site (plans and company pages) and from Capterra, checked on 3 November 2026. Its prices are "from" prices in US dollars, per user, with a quote for each team, so the real total can differ.',
    rows: [
      ['Made for', 'Inbound agencies, DMCs and tailor-made agencies', 'Luxury DMCs and travel designers, multi-day FIT trips'],
      ['Company', 'Born inside a tailor-made agency in Barcelona; see the About page', 'Wellington (New Zealand), founded in 2004'],
      ['Published price', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR a month, ${PRICES.usersIncluded} users included`, 'Starter from 99 USD per user a month; Pro from 149 USD; Premium on request'],
      ['Getting started', 'Setup and import free with yearly billing', 'One-time fee from 1,199 USD, covering migration, setup and training'],
      ['Languages', 'Documents in Spanish, English, French and more', 'English']
    ],
    otherBetter: [
      'You sell luxury trips in English and want carefully designed itineraries.',
      'You value that other European DMCs already use it and that it has strong user reviews (Capterra 4.5 from 42).',
      'You want a guided rollout with training included in the setup fee.',
      'Your main market is English-speaking.'
    ],
    usBetter: [
      'You want a price in euros with users included in each plan.',
      'Your agency is in Spain and you want REAV and Veri*Factu built in.',
      'Your clients speak Spanish or French and you want quotes and emails in their language.',
      'You want setup and import included with yearly billing.'
    ],
    switching:
      'If you use Tourwriter, export your products, prices and suppliers to a spreadsheet and we import them during setup. A common approach is to finish trips in progress where they are and open new requests in Traviosoft. More steps on the [Switching page](/switch).',
    faq: [
      { q: 'How is Tourwriter priced?', a: ['Its plans start from 99 USD per user a month (Starter) and 149 USD (Pro), with a one-time setup fee from 1,199 USD that covers migration and training. They prepare a quote for each team, so confirm the total with them.'] },
      { q: 'Which languages does each work in?', a: ['Tourwriter works in English. Traviosoft works in Spanish, English and French, and sends documents in the client’s language.'] },
      { q: 'Can I try both?', a: ['Both offer a demo. The most useful test is to bring one real trip of yours to each and compare the itinerary your client would receive.'] }
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
      text: 'Traviosoft writes this list, so we stick to public facts, write "On request" where a vendor shares its prices in a demo, and say what each tool does best. Facts checked on 3 November 2026. Prices change, so always check the official pages.'
    },
    { type: 'h2', text: 'Comparison table', id: 'table' },
    {
      type: 'table',
      head: ['Tool', 'Who it is for', 'Team size', 'Price', 'Languages', 'Founded'],
      usRow: 0,
      rows: [
        ['Traviosoft', 'Inbound agencies, DMCs and tailor-made agencies', `Two plans, ${PRICES.usersIncluded} users included`, `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR a month, ${PRICES.usersIncluded} users included`, 'Documents in ES, EN, FR and more', 'See the About page'],
        ['Ezus', 'DMCs, inbound agencies, tour operators and agencies', 'Professional up to 10 users; Enterprise from 30', '75 EUR per user a month (Professional); onboarding pack 1,990 EUR', 'Site and support in EN, FR, ES, IT, PT', '2019, Paris'],
        ['Tourplan', 'Established tour operators and DMCs', 'From 5 users, per Capterra', 'On request; Capterra lists from 250 USD per user a month', 'Site in English, Spanish and Japanese', '1986, New Zealand'],
        ['Tourwriter', 'Luxury DMCs and travel designers', '1 to 20+ people depending on plan', 'From 99 USD per user a month; setup from 1,199 USD', 'English', '2004, New Zealand'],
        ['Lemax', 'Mid-size and large tour operators and DMCs', 'Lemax GO from 15 users', 'On request', 'English', '1990, Croatia'],
        ['Kaptio', 'Large multi-day travel operators', 'Large operators', 'On request', 'English', '2012, Iceland'],
        ['GIAV', 'Travel agencies in Spain, with a long record in retail', 'On request', 'On request', 'Spanish', 'Many years in Spain'],
        ['Excel + Word', 'Any agency starting out', 'One to three people in practice', 'The licence you already have', 'Whatever you write', '1985 (Excel)']
      ]
    },
    { type: 'h2', text: 'Each tool and what it does best', id: 'tools' },
    { type: 'h3', text: 'Traviosoft' },
    {
      type: 'p',
      text: 'Covers the whole trip: requests, a catalogue with seasonal prices, quotes with margin and commission, bookings, payments and invoices, with REAV and Veri*Factu for Spain. It shows its price, and setup and import are included with yearly billing.'
    },
    { type: 'h3', text: 'Ezus' },
    {
      type: 'p',
      text: 'A complete DMC software with public prices, a site and support in five languages and many references (Capterra 4.7 from 61 reviews, as shown on its site). Its onboarding pack of 1,990 EUR includes a guided rollout.'
    },
    { type: 'h3', text: 'Tourplan' },
    {
      type: 'p',
      text: 'Software with about 40 years of history for established tour operators and DMCs, with clients in about 75 countries according to its site. Prices are on request; Capterra lists plans from 5 users at 250 USD per user a month.'
    },
    { type: 'h3', text: 'Tourwriter' },
    {
      type: 'p',
      text: 'Known for polished luxury itineraries, with strong user reviews (Capterra 4.5 from 42). Plans are priced per user, with a setup fee that covers migration and training.'
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
      text: 'Management software for travel agencies with a long presence in Spain, especially among retail agencies. Prices and features are presented in a demo, so if it fits your business, ask them for one.'
    },
    { type: 'h3', text: 'Excel + Word' },
    {
      type: 'p',
      text: 'Free if you already have the licence, flexible and known to everyone. Many agencies start here and move to dedicated software as their trips and team grow.'
    },
    { type: 'h2', text: 'How to choose', id: 'choose' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Count how many people will use the tool and check each option’s minimum number of users.',
        'Work out the cost of year one, not just the monthly fee: add setup and data import.',
        'Check the language of the documents your client receives, not just the screen language.',
        'If your agency is in Spain, ask how invoicing with REAV works and whether the tool complies with Veri*Factu.',
        'Ask for a demo with a real trip of yours and time how long it takes to get a quote with margin.',
        'Do not switch in the middle of high season: finish open trips and start new ones in the new tool.'
      ]
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'What is the best software for a DMC or tailor-made agency?', a: ['It depends on your way of working and your market. For the whole trip from request to invoice, with a visible price and Spanish invoicing, look at Traviosoft and Ezus. If you sell mostly in English and luxury trips, also look at Tourwriter.'] },
        { q: 'How much does DMC software cost?', a: [`Published prices range from ${PRICES.classic.yearly} EUR a month for ${PRICES.usersIncluded} users (Traviosoft Classic) to 75 EUR per user a month plus a 1,990 EUR onboarding pack (Ezus). Tourplan, Lemax and Kaptio give their prices on request.`] },
        { q: 'Do I need travel-specific software or will a general ERP do?', a: ['A general ERP is built for bookkeeping; travel software adds quotes with margin per service and a booking list per trip. Many agencies use both.'] }
      ]
    },
    { type: 'p', text: 'To see Traviosoft with one of your own trips, the [Demo page](/demo) explains what the call looks like.' }
  ]
};

const quote: Article = {
  key: 'quote-with-margins',
  kind: 'guide',
  slug: 'tailor-made-quote-with-margins',
  metaTitle: 'How to build a tailor-made travel quote with margins',
  metaDescription:
    'How to price a tailor-made trip: net rates, markup vs margin, commission and price per person, with a worked example in numbers, step by step.',
  title: 'How to build a tailor-made travel quote with margins',
  lead: 'To price a tailor-made trip, add up the net rates and divide by one minus the margin you want. With a cost of 1,000 EUR and a 25% margin on the selling price, the price is 1,333.33 EUR. If there is a commission, subtract it in the divisor too.',
  updated: UPDATED,
  card: 'Net rate, markup, margin and commission: the calculation explained with a real example.',
  blocks: [
    {
      type: 'p',
      text: 'A tailor-made quote has three layers: what suppliers charge you (the net rate), what you want to earn (the margin) and what you pay whoever brings the sale (the commission). The most common mistake is confusing markup and margin. This guide separates them and works through the numbers.'
    },
    { type: 'h2', text: 'Net rate, markup and margin', id: 'concepts' },
    {
      type: 'p',
      text: 'The net rate is what the supplier charges you, with nothing added. Markup is calculated on that cost. Margin is calculated on the selling price. They are different percentages for the same euro earned. With a cost of 1,000 EUR:'
    },
    {
      type: 'table',
      head: ['Markup on cost', 'Selling price', 'You earn', 'Margin on price'],
      rows: [
        ['20%', '1,200.00 EUR', '200.00 EUR', '16.7%'],
        ['25%', '1,250.00 EUR', '250.00 EUR', '20.0%'],
        ['33.3%', '1,333.33 EUR', '333.33 EUR', '25.0%'],
        ['50%', '1,500.00 EUR', '500.00 EUR', '33.3%']
      ]
    },
    { type: 'h2', text: 'Example: 4 nights in Andalucia for 2 people', id: 'example' },
    {
      type: 'table',
      head: ['Service', 'Calculation', 'Net cost'],
      rows: [
        ['Hotel, double room', '4 nights x 100 EUR', '400 EUR'],
        ['Private transfers', '2 transfers x 60 EUR', '120 EUR'],
        ['Guide', '2 days x 150 EUR', '300 EUR'],
        ['Cooking class', '2 people x 40 EUR', '80 EUR'],
        ['Entrance fees', '2 people x 50 EUR', '100 EUR'],
        ['Total net', '', '1,000 EUR']
      ]
    },
    {
      type: 'p',
      text: 'If you want a 25% margin on the selling price, the price is 1,000 / (1 - 0.25) = 1,333.33 EUR. Your margin is 333.33 EUR. Per person, 666.67 EUR. If you had added 25% to the cost, the price would be 1,250 EUR and your real margin only 20%.'
    },
    { type: 'h2', text: 'When there is a commission', id: 'commission' },
    {
      type: 'p',
      text: 'Say another agency brings you the sale and you pay it 10% of the price. If you keep the price at 1,333.33 EUR, the commission is 133.33 EUR and your margin drops to 200 EUR, which is 15%. To keep 25%, subtract the commission in the divisor: 1,000 / (1 - 0.25 - 0.10) = 1,538.46 EUR.'
    },
    {
      type: 'list',
      items: [
        'Price to the client: 1,538.46 EUR (769.23 EUR per person).',
        'Commission at 10%: 153.85 EUR.',
        'Your 25% margin: 384.62 EUR.',
        'Net cost: 1,000.00 EUR. (Figures carry cent rounding.)'
      ]
    },
    { type: 'h2', text: 'Common mistakes', id: 'mistakes' },
    {
      type: 'list',
      items: [
        'Adding a percentage to the cost and calling it margin.',
        'Forgetting the commission when giving a price and finding out when you pay it.',
        'Using the rate of another season: check the dates of every price.',
        'Rounding the price per person down in a large group: multiply by the travellers before rounding.',
        'Leaving no validity date on the quote.',
        'Mixing prices with and without VAT in the same sum. In Spain, agency VAT may also follow the REAV scheme, which has its own Spanish guide.'
      ]
    },
    {
      type: 'callout',
      text: 'In Traviosoft you set your pricing rules (margin, VAT and commission) once, and every line of every quote follows them, with the price per person and the total the client sees.'
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'What margin should I apply?', a: ['There is no number that suits everyone. It depends on your market, your fixed costs and the competition. What matters is a percentage you know and apply the same way on every quote.'] },
        { q: 'Is margin calculated per service or per trip?', a: ['You can do both. A different margin per service (more on transfers, less on the hotel) gives more control, but it needs clear rules to avoid mistakes.'] }
      ]
    }
  ]
};

const rooming: Article = {
  key: 'rooming-list',
  kind: 'guide',
  slug: 'rooming-list-template-groups-mice',
  metaTitle: 'Rooming list for groups and MICE: template and steps',
  metaDescription:
    'How to prepare a rooming list for a group or MICE event: template columns, an example, the steps and the mistakes that cause problems at reception.',
  title: 'How to prepare a rooming list for a group or MICE event',
  lead: 'A rooming list tells the hotel who sleeps in each room, with room type, dates and requests. It must be complete before the contract deadline. The basic columns are room number, type, guest names, check-in, check-out and notes.',
  updated: UPDATED,
  card: 'The template columns, the steps and the most common mistakes in a rooming list.',
  blocks: [
    {
      type: 'p',
      text: 'For a group, the hotel holds a block of rooms and needs to know how they are split. A clean rooming list avoids queues at reception, wrong beds and charges for unused rooms. This guide gives you the columns and a working order.'
    },
    { type: 'h2', text: 'The template columns', id: 'columns' },
    {
      type: 'table',
      head: ['Column', 'What to write', 'Example'],
      rows: [
        ['Room no.', 'A running number; the hotel assigns the real one', '1'],
        ['Room type', 'Single, double, twin or triple', 'Twin'],
        ['Guest 1', 'Full name as in the passport', 'Marta Ruiz Soler'],
        ['Guest 2', 'Same, if sharing', 'Pedro Vidal Mas'],
        ['Check-in', 'Arrival date', '12/05/2027'],
        ['Check-out', 'Departure date', '15/05/2027'],
        ['Nights', 'Calculated from the dates', '3'],
        ['Meal plan', 'Room only, breakfast, half board', 'Breakfast'],
        ['Arrival', 'Time or flight, if it matters for early check-in', 'Flight 10:40'],
        ['Requests', 'Diets, accessibility, extra bed, high floor', 'Gluten free'],
        ['Company or group', 'Useful if there are several invoices', 'Sales team']
      ]
    },
    {
      type: 'p',
      text: 'A size example: a group of 22 people splits into 9 twin rooms (18 people) and 4 single rooms, which is 13 rooms. Always check that the total number of people on the list matches the group.'
    },
    { type: 'h2', text: 'How to prepare it, step by step', id: 'steps' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Check the hotel contract for the deadline to send the rooming list and the release date of the block. It is usually a few weeks before arrival; confirm it in your contract.',
        'Ask each participant, or the organising company, for full name, dates, who they share with and special requests.',
        'Fill in the template, one row per room, and check that names match the travel document.',
        'Count rooms and people and compare them with the block you booked.',
        'Send the list to the hotel and ask for written confirmation.',
        'Keep the version you sent. Every later change is a new dated version.'
      ]
    },
    { type: 'h2', text: 'Mistakes that cause problems', id: 'mistakes' },
    {
      type: 'list',
      items: [
        'Names with typos or no surnames, which then do not match the flight booking.',
        'Not knowing whether two people want a double bed or two beds.',
        'Sending the list late and losing rooms from the block.',
        'Last-minute changes given by phone instead of in writing.',
        'Leaving out the guide, the driver or the organiser, who also need rooms.'
      ]
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'When must the rooming list be sent?', a: ['When the hotel contract says. If you are not sure, ask the hotel in writing when you confirm the block.'] },
        { q: 'What if names change at the last minute?', a: ['Send the hotel a new version with the date and mark what changed. Avoid giving the change by phone only.'] },
        { q: 'Does the same template work for a small group?', a: ['Yes. For small groups you can remove columns, but keep names, room type and dates.'] }
      ]
    }
  ]
};

const startDmc: Article = {
  key: 'start-dmc-spain',
  kind: 'guide',
  slug: 'start-a-dmc-in-spain',
  metaTitle: 'How to start a DMC or inbound agency in Spain: steps',
  metaDescription:
    'General steps to start a DMC or inbound travel agency in Spain: legal form, regional registry, guarantee, insurance and REAV. Always check with a gestor.',
  title: 'How to start a DMC or inbound agency in Spain: the steps',
  lead: 'To start an inbound agency in Spain you choose a legal form, register with the tax office, register in your autonomous community’s travel agency registry, set up the required guarantee and take out civil liability insurance. Requirements and amounts are set by each community.',
  updated: UPDATED,
  card: 'Legal form, regional registry, guarantee, insurance and REAV: the path in order.',
  blocks: [
    {
      type: 'p',
      text: 'This guide is a general map, not legal or tax advice. Travel agency rules depend on the autonomous community where you are based, and they change. Before any step, talk to a gestor or adviser and check the tourism rules of your community.'
    },
    {
      type: 'callout',
      text: 'We give no amounts for fees, guarantees or insurance, because they vary by community and by type of agency. Ask your gestor and the regional tourism department.'
    },
    { type: 'h2', text: '1. Decide what you will sell', id: 'decide' },
    {
      type: 'p',
      text: 'Receiving travellers from abroad and selling them tailor-made trips is not the same as selling only services to other agencies. Some communities distinguish types of agency (wholesaler, retailer, both). Decide your model before registering, because it determines the activity you declare.'
    },
    { type: 'h2', text: '2. Choose a legal form', id: 'legal-form' },
    {
      type: 'p',
      text: 'The two usual options are sole trader (autónomo) and limited company (sociedad limitada). A company separates your personal assets from the business but involves more paperwork. Your gestor will tell you which fits your expected volume and whether you have partners.'
    },
    { type: 'h2', text: '3. Register in the travel agency registry', id: 'registry' },
    {
      type: 'p',
      text: 'Travel agency activity is regulated by each autonomous community. In many, the process is a declaración responsable and entry in the community’s registro de agencias de viajes. Ask your regional tourism department for the list of documents and any requirements about premises or a responsible person.'
    },
    { type: 'h2', text: '4. Guarantee and insurance', id: 'guarantee' },
    {
      type: 'p',
      text: 'Package travel rules require agencies to protect travellers against insolvency, usually with a guarantee (bank guarantee, surety insurance or deposit) whose amount each community sets. Civil liability insurance is also commonly required. Ask your insurer or bank for a quote with the exact requirements of your registry.'
    },
    { type: 'h2', text: '5. Tax office: registration, VAT and REAV', id: 'tax' },
    {
      type: 'p',
      text: 'Your gestor will register you with the tax office and social security. Agencies that sell services bought from third parties in their own name normally apply REAV, the special VAT scheme on the margin. We have a separate guide, in Spanish, with examples. You will also need to invoice with software that complies with Veri*Factu once it applies to you.'
    },
    { type: 'h2', text: '6. Contracts, data protection and tools', id: 'rest' },
    {
      type: 'list',
      items: [
        'Contracts with hotels, guides and carriers, with net prices and clear cancellation terms.',
        'General terms of sale for your clients and a legal notice on your website.',
        'GDPR compliance: you handle passports and traveller data.',
        'A tool for quotes, bookings and invoices. You can start with Excel and move to software when volume asks for it.'
      ]
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Do I need to register as a travel agency to be an inbound agency?', a: ['It depends on what you sell and on your autonomous community. If you sell package travel or services to travellers, it is usually required. Ask the regional tourism department and your gestor.'] },
        { q: 'How much does it cost to start an inbound agency?', a: ['We give no figures because they depend on the legal form, the guarantee required in your community and the insurance. Ask for specific quotes.'] },
        { q: 'When should I get software?', a: ['When quotes, bookings or invoices cost you time or cause mistakes. Many agencies start with spreadsheets.'] }
      ]
    }
  ]
};

const fromExcel: Article = {
  key: 'from-excel',
  kind: 'guide',
  slug: 'move-from-excel-to-travel-software',
  metaTitle: 'Moving from Excel to travel agency software',
  metaDescription:
    'How to move a travel agency from Excel to software: what to prepare, the order of steps and when to wait, so you do not lose data or stop the season.',
  title: 'Moving from Excel to software without stopping your season',
  lead: 'To move from Excel to software, first clean your catalogue, suppliers and clients, import those three lists, then start new requests in the software while you finish open trips in your files. Do it outside high season.',
  updated: UPDATED,
  card: 'What to prepare, in what order, and when to wait before leaving your spreadsheets.',
  blocks: [
    {
      type: 'p',
      text: 'The usual fear is losing data or being unable to work for a week. You avoid both by switching in parts: do not move everything on a Monday, import what is stable (catalogue, suppliers, clients) and start with what is new.'
    },
    { type: 'h2', text: 'What to prepare first', id: 'prepare' },
    {
      type: 'list',
      items: [
        'A product list with name, supplier, net price and validity period.',
        'A supplier list with contact details and terms.',
        'A client list without duplicates, with language and email.',
        'Your pricing rules: margin, commission, VAT and whether REAV applies.',
        'A quote template you want to keep and your usual email texts.'
      ]
    },
    { type: 'h2', text: 'The recommended order', id: 'order' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Clean the lists in Excel: remove duplicates, unify names and fill in missing prices.',
        'Define your pricing rules once and check with an old quote that you get the same result.',
        'Import products, prices and suppliers. In Traviosoft we do this during setup, from your spreadsheets, and it is free with yearly billing.',
        'Import clients and review duplicates.',
        'Run a test trip from start to finish: request, quote, booking, payment and invoice.',
        'Start recording new requests there and finish open trips in your files.',
        'When the last old trip closes, archive the Excel files.'
      ]
    },
    { type: 'h2', text: 'When to wait', id: 'wait' },
    {
      type: 'p',
      text: 'If you are in the middle of high season, postpone the change. A team learning a tool while serving trips makes mistakes. The best time is the start of low season, with room to test with a real trip.'
    },
    { type: 'h2', text: 'What you do not need to move', id: 'skip' },
    {
      type: 'p',
      text: 'You do not need to load the full history of past trips. Keep the old files as a reference archive and bring only what you will reuse: current rates, active suppliers and clients you will keep working with. The [Switching page](/switch) has a timeline with more detail.'
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'How long does the move take?', a: ['It depends on how tidy your files are. Preparing the lists is usually the longest part. We do the import itself during setup.'] },
        { q: 'Can I go back to Excel?', a: ['Yes. If you stop using Traviosoft, you get your data back in standard formats.'] },
        { q: 'What if my files are very messy?', a: ['Start with the minimum: current products and prices. The rest can be completed as you go.'] }
      ]
    }
  ]
};

export const articles: Article[] = [best, ...comparisons, quote, rooming, startDmc, fromExcel];
