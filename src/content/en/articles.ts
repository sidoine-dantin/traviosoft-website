import type { Article, ArticleBlock, Faq } from '../types';

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
      'Excel and Word work until volume grows. We compare quotes, margins, bookings and invoices to show when it is worth moving to software built for trips.',
    title: 'Traviosoft vs Excel and Word: when a spreadsheet stops being enough',
    lead: 'Excel and Word are enough if you sell few trips a year and work alone. Once several people, several price seasons and invoice numbering are involved, software built for trips avoids margin errors and copies of files.',
    card: 'Spreadsheet or software: when it pays to switch and when it does not.',
    basis:
      'Excel and Word are where almost every agency starts, and many stay happy with them for years. This comparison does not say they are bad. It shows where their limits appear. Traviosoft details are those on our site on 3 November 2026.',
    rows: [
      ['Made for', 'Tailor-made trips: requests, quotes, bookings and invoices', 'Any spreadsheet and text task'],
      ['Price', 'From 190 EUR a month, 3 users included', 'The Microsoft licence you already have'],
      ['Margin and commission', 'Pricing rules set once; every line follows them', 'Formulas you build and copy from file to file'],
      ['Seasons and suppliers', 'Prices by period and several suppliers per product', 'One tab per supplier, which someone has to keep current'],
      ['Quote versions', 'Every version is saved and can be reopened', 'Copies like "quote_v3_final.xlsx"'],
      ['Supplier bookings', 'A list per trip with statuses that update themselves', 'A column or a separate document'],
      ['Invoices', 'Made from the trip, numbered per company, with credit notes', 'A template numbered by hand'],
      ['Spanish tax rules', 'REAV labels and Veri*Factu with QR, switched on per country', 'You apply them yourself'],
      ['Client itinerary', 'A shareable page, day by day, in their language', 'A PDF or Word file sent by email'],
      ['Data', 'Your agency’s own database, hosted in the EU', 'Your files, wherever you store them']
    ],
    otherBetter: [
      'You sell few trips a year and run them alone. A good Excel model gives you everything you need.',
      'Your way of working is very particular, and a spreadsheet bends to it better than any program.',
      'You do not want to change anything now, for example in the middle of high season. Switching mid-campaign is a risk.',
      'You need a one-off analysis or a custom report. Excel is still the right tool, and Traviosoft exports to Excel anyway.'
    ],
    usBetter: [
      'Two or more people work on the same clients and trips, and you have already overwritten each other’s files.',
      'A hotel price change means touching several quotes, and one is left with the old rate.',
      'You want the margin and the commission applied the same way every time, without relying on someone remembering a formula.',
      'You lose time moving data from the quote to the invoice and then to your accountant’s email.',
      'You invoice clients abroad and need documents in Spanish, English and French.'
    ],
    switching:
      'You do not have to leave Excel all at once. During setup we import your products, prices and suppliers from Excel or CSV, and setup and import are free with yearly billing. A common way is to finish the trips already open in your files and start new requests in Traviosoft. There is a full timeline on the [Switching page](/switch) and a step-by-step guide in "Moving from Excel to travel software".',
    faq: [
      { q: 'Can I keep using Excel next to Traviosoft?', a: ['Yes. You can import your data from Excel and export an Excel recap or a zip of every invoice PDF for your accountant.'] },
      { q: 'What happens to the margin formulas I already have?', a: ['They become pricing rules. Instead of copying the formula into every file, you define it once and it applies to every line of every quote.'] },
      { q: 'Is it worth it for a one-person agency?', a: ['It depends on volume. If you sell few trips and do not need invoices or shared itineraries, a spreadsheet may be enough. If quotes cost you hours every week, software starts to pay.'] }
    ]
  },
  {
    key: 'vs-ezus',
    slug: 'traviosoft-vs-ezus',
    other: 'Ezus',
    metaTitle: 'Traviosoft vs Ezus: comparison for DMCs',
    metaDescription:
      'We compare Traviosoft and Ezus with published prices, languages, setup costs and Spanish tax rules. Where each one wins, said plainly, for small DMC teams.',
    title: 'Traviosoft vs Ezus: an honest comparison for DMCs and inbound agencies',
    lead: 'Ezus is the closest competitor: a French DMC software with many customers and public prices. Traviosoft costs less in year one for a team of 3 and includes REAV and Veri*Factu for Spain. Ezus has more history and more reviews.',
    card: 'Two tools with public prices: what each includes and what year one costs.',
    basis:
      'Ezus details come from its website and public directories, checked on 3 November 2026. Prices change, so always check both current pricing pages. Ezus customer numbers and review scores are the ones it publishes.',
    rows: [
      ['Made for', 'Inbound agencies, DMCs and tailor-made agencies of 1 to 15 people', 'DMCs, inbound agencies, tour operators and agencies; FIT, groups and MICE'],
      ['Company', 'Recent product; see the About page', 'Paris, founded in 2019'],
      ['Published price', 'From 190 EUR a month with 3 users; 250 EUR with 5', 'Professional 75 EUR per user a month (up to 10 users); Premium 100 EUR; Enterprise on request'],
      ['Getting started', 'Setup and import free with yearly billing', 'Mandatory onboarding pack of 1,990 EUR; data import 390 EUR'],
      ['3 users, year one (list prices)', '190 x 12 = 2,280 EUR', '75 x 3 x 12 = 2,700 EUR + 1,990 EUR = 4,690 EUR'],
      ['Languages', 'Documents in Spanish, English, French and more', 'Site and support in 5 languages: EN, FR, ES, IT, PT'],
      ['Public reviews', 'No directory reviews yet', 'Capterra 4.7 (61) and G2 4.9 (18), as shown on its site'],
      ['Spanish tax rules', 'REAV and Veri*Factu with QR', 'We saw no content about REAV on its site'],
      ['Data hosting', 'EU, own database per agency', 'AWS Ireland, according to its site']
    ],
    otherBetter: [
      'You want a product with more years on the market and many more public references: Ezus says it serves more than 600 agencies in more than 70 countries.',
      'You need support and documentation in Italian or Portuguese.',
      'You value a guided rollout, with an onboarding specialist for several months, and are willing to pay for it.',
      'Your team is large: Ezus has an Enterprise plan from 30 users.',
      'You want a traveller area, a payment portal and web pages inside the same tool, as Ezus describes them.'
    ],
    usBetter: [
      'You are a team of 3 to 5 and want a clear price with users included and no mandatory onboarding fee.',
      'Your agency is in Spain and you need REAV on invoices and Veri*Factu with QR.',
      'You work mostly in Spanish and French and want documents and email templates in the client’s language.',
      'You prefer a tool focused on the flow of one trip: request, quote with margin, booking, payment and invoice.'
    ],
    switching:
      'If you use Ezus and want to switch, export your products, suppliers and clients first. We import products, prices and suppliers from Excel or CSV during setup. A practical tip: switch outside high season and finish open trips where they are. The [Switching page](/switch) lists the steps.',
    faq: [
      { q: 'Which one is cheaper for 3 users?', a: ['At list prices, Traviosoft costs about 2,280 EUR in year one and Ezus about 4,690 EUR, because Ezus includes a 1,990 EUR onboarding pack. Check both current prices.'] },
      { q: 'Does Ezus work for Spain?', a: ['Yes, it has a Spanish site and support. What we did not find on its site is content about REAV. Ask them how they handle it if you need it.'] },
      { q: 'Can I try both?', a: ['Both work with a demo. The most useful test is to bring one real trip of yours to each and compare how long it takes to get a quote with margin.'] }
    ]
  },
  {
    key: 'vs-giav',
    slug: 'traviosoft-vs-giav',
    other: 'GIAV',
    metaTitle: 'Traviosoft vs GIAV: travel agency management software',
    metaDescription:
      'GIAV is long-established Spanish software for travel agencies. We compare its focus with Traviosoft for inbound and tailor-made travel, without inventing facts.',
    title: 'Traviosoft vs GIAV: two ways to run a travel agency',
    lead: 'GIAV is travel agency management software with many years in Spain, used mostly by retail agencies. Traviosoft is built for inbound and tailor-made travel. If you mainly sell catalogue trips, GIAV may fit better.',
    card: 'A veteran tool for retail agencies and one for tailor-made and inbound travel.',
    basis:
      'We could only see GIAV through directories and trade press, not through our own test. So where there is no public fact we write "Not public" and suggest you ask them. Traviosoft details are those on our site on 3 November 2026.',
    rows: [
      ['Made for', 'Inbound agencies, DMCs and tailor-made agencies of 1 to 15 people', 'Travel agency management in Spain, mostly retail agencies'],
      ['Published price', 'From 190 EUR a month, 3 users included', 'Not public'],
      ['Team size', '1 to 15 people', 'Not public'],
      ['Tailor-made quotes with margin and commission per line', 'Yes, with pricing rules', 'Not public'],
      ['Catalogue with seasons and several suppliers', 'Yes', 'Not public'],
      ['Client itinerary on a shareable page', 'Yes, in their language and with your brand', 'Not public'],
      ['Document languages', 'Spanish, English, French and more', 'Not public'],
      ['REAV and Veri*Factu', 'Yes: REAV labels and Veri*Factu with QR', 'Ask them'],
      ['Data hosting', 'EU, own database per agency', 'Not public']
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
      'You prefer to see the price before talking to anyone.'
    ],
    switching:
      'Before deciding, ask GIAV and us for a demo with one of your trips, and ask both the same questions: how the margin per line is calculated, how a partner’s commission is recorded, what the client sees and how invoicing with REAV works. If you switch, we import products, prices and suppliers from Excel or CSV. See the [Switching page](/switch).',
    faq: [
      { q: 'Can I import my data from GIAV?', a: ['We import products, prices and suppliers from Excel or CSV. If GIAV lets you export to those formats, you can bring them over. It depends on what your version can export.'] },
      { q: 'Does Traviosoft work for a retail agency?', a: ['It is built for agencies that design and sell tailor-made trips. If your business is mostly selling wholesaler catalogue products, check first that it fits what you do.'] },
      { q: 'Why are there no GIAV prices in the table?', a: ['Because we did not see them published. We prefer to write "Not public" over inventing a number.'] }
    ]
  },
  {
    key: 'vs-holded',
    slug: 'traviosoft-vs-holded',
    other: 'Holded',
    metaTitle: 'Traviosoft vs Holded for travel agencies',
    metaDescription:
      'Holded is general invoicing and business software for SMEs. We compare what it covers and what it does not for a travel agency: margins, bookings and REAV.',
    title: 'Traviosoft vs Holded: travel software or a general ERP',
    lead: 'Holded is general invoicing, accounting and management software for SMEs, widely used in Spain. It has no travel-specific quotes with margin per service and no REAV. Traviosoft covers the trip, while Holded can keep running the company.',
    card: 'A general SME tool and a travel tool: what each one does.',
    basis:
      'Holded details come from its site and its tourism and travel page, checked on 3 November 2026. Holded changes plans and promotions often, so check its pricing page. It is not a bad tool. It solves a different problem.',
    rows: [
      ['Made for', 'Inbound agencies, DMCs and tailor-made agencies of 1 to 15 people', 'Freelancers and SMEs in any sector, from 1 to over 100 people'],
      ['Published price', 'From 190 EUR a month, 3 users included', 'Basic 29 EUR (2 users), Standard 59 EUR (4), Advanced 99 EUR (7), excluding VAT; with temporary discounts'],
      ['Quotes with margin per service', 'Yes, with pricing rules, VAT and commission', 'No travel-specific features that we saw'],
      ['Catalogue with seasons and suppliers', 'Yes', 'Not its job'],
      ['Bookings and tasks per supplier', 'A list per trip with statuses', 'Not its job'],
      ['Client itinerary', 'Shareable page, day by day', 'Not its job'],
      ['REAV on invoices', 'Yes, REAV labels', 'Not mentioned on its tourism and travel page'],
      ['Veri*Factu', 'Yes, with QR', 'It says it complies with Verifactu'],
      ['Accounting, payroll and banks', 'Does not replace your accountant’s work', 'Yes, this is its strength']
    ],
    otherBetter: [
      'You need accounting, cash management, payroll or bank reconciliation in the same program.',
      'Your travel agency is a small part of a bigger business and you want a single system for everything.',
      'Your accountant already works with Holded and prefers to receive everything there.',
      'You invoice in several currencies and want general cash control.'
    ],
    usBetter: [
      'Your problem is calculating, sending and following up travel quotes with margin, not bookkeeping.',
      'You need a catalogue with seasonal prices and several suppliers per service.',
      'You want a booking list per trip, service sheets and a client itinerary.',
      'Your agency applies REAV and you do not want to redo every invoice by hand.'
    ],
    switching:
      'The sensible approach is to let them coexist. Traviosoft runs the trip, from request to invoice, and exports an Excel recap or a zip of PDF invoices for your accountant. Decide which program issues the invoices so you do not number them in two places, and ask your accountant how they want to receive the data. More on the [Switching page](/switch).',
    faq: [
      { q: 'Do I have to leave Holded to use Traviosoft?', a: ['Not necessarily. Many agencies keep their bookkeeping where it is. What matters is issuing each invoice in one place only, and agreeing with your accountant how they receive the data.'] },
      { q: 'Does Holded handle REAV?', a: ['Its tourism and travel page does not mention REAV. If you need it, ask them directly or check with your accountant how to treat the margin in their program.'] },
      { q: 'Does Traviosoft do accounting?', a: ['No. It manages the trip, the payments and the invoices, and prepares the files for your accountant. Bookkeeping stays with your accountant or the program you use.'] }
    ]
  },
  {
    key: 'vs-lemax',
    slug: 'traviosoft-vs-lemax',
    other: 'Lemax',
    metaTitle: 'Traviosoft vs Lemax: software for DMCs and tour operators',
    metaDescription:
      'Lemax is Croatian software for mid-size and large tour operators and DMCs. We compare team size, visible pricing and focus against Traviosoft.',
    title: 'Traviosoft vs Lemax: small teams or large tour operators',
    lead: 'Lemax is software with more than 30 years behind it, built for mid-size and large tour operators and DMCs. Its Lemax GO package starts at 15 users and prices are not published. Traviosoft is for teams of 1 to 15 and shows its price.',
    card: 'Software for large operators against software for teams of 1 to 15.',
    basis:
      'Lemax details come from its website and trade press, checked on 3 November 2026. Lemax does not publish prices, so we write "Not public". Its customer numbers are the ones it shows.',
    rows: [
      ['Made for', 'Inbound agencies, DMCs and tailor-made agencies of 1 to 15 people', 'Mid-size and large tour operators and DMCs'],
      ['Company', 'Recent product; see the About page', 'Croatia, founded in 1990'],
      ['Team size', '1 to 15 people', 'Lemax GO from 15 users'],
      ['Published price', 'From 190 EUR a month, 3 users included', 'Not public; the price is agreed before signing'],
      ['Site languages', 'Spanish, English and French', 'English'],
      ['Rollout', 'Setup and import free with yearly billing', 'Says "live in 90 days" for Lemax GO'],
      ['Distribution and connections', 'API and MCP access', 'Supplier connectivity, booking API and B2B portal, according to its site'],
      ['Spanish tax rules', 'REAV and Veri*Factu with QR', 'Not public'],
      ['Data hosting', 'EU, own database per agency', 'Not public']
    ],
    otherBetter: [
      'You are a tour operator or DMC with a team of 15 or more and complex multi-day processes.',
      'You need distribution, supplier connections by API, a B2B portal for agencies or an online booking engine.',
      'You want a vendor with more than 30 years of history and customers on several continents.',
      'You have the budget for a guided rollout project.'
    ],
    usBetter: [
      'You are a team of 1 to 15 and what you need is to quote, book and invoice well, without a project that takes months.',
      'You want to see the price and the users included before asking for a demo.',
      'Your market is Spain and you sell in Spanish and French, with REAV and Veri*Factu.',
      'You prefer a tool that is simple to adopt for a small team.'
    ],
    switching:
      'If you use Lemax and your team is too small for its structure, export your products and prices and ask us how to import them from Excel or CSV. Switching in the middle of the season is risky, so it is usually done in the low season. See the [Switching page](/switch).',
    faq: [
      { q: 'Does Lemax work for a team of 4?', a: ['Its Lemax GO package starts at 15 users, according to its site. For smaller teams, ask them what options they have.'] },
      { q: 'Why is there no Lemax price?', a: ['Because it does not publish one. It says the package and rollout price are agreed before you sign. We prefer "Not public" to a guess.'] },
      { q: 'Does Traviosoft have an API?', a: ['Yes. You can read and write your data from other tools through the API, and connect an AI tool with MCP access.'] }
    ]
  },
  {
    key: 'vs-tourwriter',
    slug: 'traviosoft-vs-tourwriter',
    other: 'Tourwriter',
    metaTitle: 'Traviosoft vs Tourwriter for DMCs and travel designers',
    metaDescription:
      'Tourwriter is New Zealand software for luxury DMCs and travel designers. We compare list prices, languages, itinerary limits and Spanish tax rules.',
    title: 'Traviosoft vs Tourwriter: two tools for designing trips',
    lead: 'Tourwriter is New Zealand software with polished itineraries, built for luxury DMCs and travel designers, in English. Traviosoft costs less for 3 users, works in Spanish and French, and includes REAV and Veri*Factu.',
    card: 'Luxury itineraries in English against a euro-priced tool with Spanish and French.',
    basis:
      'Tourwriter details come from its site (plans and company pages) and from Capterra, checked on 3 November 2026. Its prices are "from" prices in US dollars, per user, with a quote request, so the real total can differ.',
    rows: [
      ['Made for', 'Inbound agencies, DMCs and tailor-made agencies of 1 to 15 people', 'Luxury DMCs and travel designers, multi-day FIT trips'],
      ['Company', 'Recent product; see the About page', 'Wellington (New Zealand), founded in 2004'],
      ['Published price', 'From 190 EUR a month with 3 users; 250 EUR with 5', 'Starter from 99 USD per user a month; Pro from 149 USD; Premium on request'],
      ['3 users, per month (list prices)', '190 EUR', 'About 447 USD on Pro (3 x 149)'],
      ['Getting started', 'Setup and import free with yearly billing', 'One-time fee from 1,199 USD (migration, setup and training)'],
      ['Itinerary limit', 'Plans defined by users included', 'Starter up to 25 a year; Pro up to 50 a year; Premium unlimited'],
      ['Languages', 'Documents in Spanish, English, French and more', 'English'],
      ['Public reviews', 'No directory reviews yet', 'Capterra 4.5 (42 reviews)'],
      ['Spanish tax rules', 'REAV and Veri*Factu with QR', 'Not public']
    ],
    otherBetter: [
      'You sell luxury trips in English and want carefully designed itineraries.',
      'You value that other European DMCs already use it and that public user reviews exist.',
      'You want a guided rollout with training included in the setup fee.',
      'Your main market is English-speaking and you do not need documents in Spanish or French.'
    ],
    usBetter: [
      'You want a price in euros with users included in each plan.',
      'Your agency is in Spain and you need REAV and Veri*Factu.',
      'Your clients speak Spanish or French and you want quotes and emails in their language.',
      'You prefer not to pay a setup fee of over a thousand dollars to start.'
    ],
    switching:
      'If you use Tourwriter, export your products, prices and suppliers to Excel or CSV and we import them during setup. A common approach is to finish trips in progress where they are and open new requests in Traviosoft. More steps on the [Switching page](/switch).',
    faq: [
      { q: 'How much is Tourwriter for 3 users?', a: ['At Pro list prices, about 447 USD a month (3 x 149) plus a setup fee from 1,199 USD. It is a "from" price and they ask you to request a quote, so confirm it with them.'] },
      { q: 'Is Tourwriter available in Spanish?', a: ['Its site and product are in English, as far as we saw. If your clients need documents in Spanish or French, ask how they handle it.'] },
      { q: 'Does Traviosoft limit the number of itineraries?', a: ['Traviosoft plans are defined by the users included. See the pricing page for exactly what each plan includes.'] }
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
    'An honest comparison of Traviosoft, Ezus, Tourplan, Tourwriter, Lemax, Kaptio, GIAV and Excel: who each is for, published prices, languages and limits.',
  title: 'Best software for DMCs and inbound agencies (2026)',
  lead: 'For a small DMC or inbound agency, the real options are Traviosoft, Ezus and Tourwriter. Tourplan, Lemax and Kaptio are built for larger operators, and GIAV for retail agencies. Excel and Word work while volume is low. This guide compares them using public facts.',
  updated: UPDATED,
  card: 'Eight options compared: who each is for, published prices, languages and limits.',
  blocks: [
    {
      type: 'p',
      text: 'Traviosoft writes this list, so you may doubt our impartiality. That is why we use only public facts, write "Not public" when there is no data, and say where each alternative wins. Facts checked on 3 November 2026. Prices change, so always check the official pages.'
    },
    { type: 'h2', text: 'Comparison table', id: 'table' },
    {
      type: 'table',
      head: ['Tool', 'Who it is for', 'Team size', 'Public price', 'Languages', 'Founded'],
      usRow: 0,
      rows: [
        ['Traviosoft', 'Inbound agencies, DMCs and tailor-made agencies', '1 to 15 people', 'From 190 EUR a month with 3 users; 250 EUR with 5', 'Documents in ES, EN, FR and more', 'See the About page'],
        ['Ezus', 'DMCs, inbound agencies, tour operators and agencies', 'Professional up to 10 users; Enterprise from 30', '75 EUR per user a month (Professional); mandatory onboarding of 1,990 EUR', 'Site and support in EN, FR, ES, IT, PT', '2019, Paris'],
        ['Tourplan', 'Established tour operators and DMCs', 'Minimum 5 users, per Capterra', 'Not published on its site; Capterra lists from 250 USD per user a month', 'Site in English, Spanish and Japanese', '1986, New Zealand'],
        ['Tourwriter', 'Luxury DMCs and travel designers', '1 to 20+ people depending on plan', 'From 99 USD per user a month; setup from 1,199 USD', 'English', '2004, New Zealand'],
        ['Lemax', 'Mid-size and large tour operators and DMCs', 'Lemax GO from 15 users', 'Not public', 'English', '1990, Croatia'],
        ['Kaptio', 'Large multi-day travel operators', 'Large company', 'Not public', 'English', '2012, Iceland'],
        ['GIAV', 'Travel agencies in Spain, mostly retail', 'Not public', 'Not public', 'Not public', 'Not public'],
        ['Excel + Word', 'Any agency starting out', 'One to three people in practice', 'The licence you already have', 'Whatever you write', '1985 (Excel)']
      ]
    },
    { type: 'h2', text: 'Each tool, with strengths and limits', id: 'tools' },
    { type: 'h3', text: 'Traviosoft' },
    {
      type: 'p',
      text: 'Covers the whole trip: requests, a catalogue with seasonal prices, quotes with margin and commission, bookings, payments and invoices, with REAV and Veri*Factu for Spain. It shows its price and does not charge setup with yearly billing. Limits: it is a recent product with no directory reviews yet, and it lacks the track record of the veterans.'
    },
    { type: 'h3', text: 'Ezus' },
    {
      type: 'p',
      text: 'The most complete competitor for a small DMC: public prices, a site in five languages and many references (Capterra 4.7 from 61 reviews, as shown on its site). Limits: the 1,990 EUR onboarding pack is mandatory and its Spanish content does not cover REAV.'
    },
    { type: 'h3', text: 'Tourplan' },
    {
      type: 'p',
      text: 'Software with about 40 years of history for tour operators and DMCs, with clients in about 75 countries according to its site. Limits: no published prices, Capterra lists a 5-user minimum from 250 USD per user a month, and its focus is established companies rather than small teams.'
    },
    { type: 'h3', text: 'Tourwriter' },
    {
      type: 'p',
      text: 'Very good for polished luxury itineraries, with user reviews (Capterra 4.5 from 42). Limits: it is in English, Starter and Pro cap the itineraries per year, and the per-user price grows with the team, on top of the setup fee.'
    },
    { type: 'h3', text: 'Lemax' },
    {
      type: 'p',
      text: 'A full platform for mid-size and large tour operators and DMCs, with distribution, booking API and a B2B portal. Limits: Lemax GO starts at 15 users, prices are not published and its site is in English.'
    },
    { type: 'h3', text: 'Kaptio' },
    {
      type: 'p',
      text: 'A platform built on Salesforce for large multi-day operators; press names well-known international groups among its clients. Limits: it is an enterprise solution, sold through a discovery workshop, with no public prices.'
    },
    { type: 'h3', text: 'GIAV' },
    {
      type: 'p',
      text: 'Management software for travel agencies with a long presence in Spain, used mostly by retail agencies. We could not verify prices or inbound-specific features, so if it fits your business, ask them for a demo.'
    },
    { type: 'h3', text: 'Excel + Word' },
    {
      type: 'p',
      text: 'Free if you already have the licence, flexible and known to everyone. Its limits appear with volume: margin formulas copied by hand, loose versions, invoices numbered by hand and nothing to tell you what is still to book.'
    },
    { type: 'h2', text: 'How to choose', id: 'choose' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Count how many people will use the tool. With 1 to 5, rule out anything that starts at 15 users.',
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
        { q: 'What is the best software for a small DMC?', a: ['It depends on your team and your market. For 1 to 15 people, with a visible price and Spanish invoicing, look at Traviosoft and Ezus. If you sell mostly in English and luxury trips, also look at Tourwriter.'] },
        { q: 'How much does DMC software cost?', a: ['Public prices range from about 190 EUR a month for 3 users (Traviosoft) to 75 EUR per user a month plus 1,990 EUR onboarding (Ezus). Tourplan, Lemax and Kaptio do not publish prices.'] },
        { q: 'Do I need travel-specific software or will a general ERP do?', a: ['A general ERP handles bookkeeping well, but it does not price quotes with margin per service or list bookings per trip. Many agencies use both.'] }
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
        'Import products, prices and suppliers. In Traviosoft we do this during setup, from Excel or CSV, and it is free with yearly billing.',
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
