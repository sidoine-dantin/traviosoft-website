import type { Article } from '../types';

// Blog posts added on 28 November 2026, chosen from Search Console queries and Google Ads Keyword Planner volumes.

const dmc: Article = {
  key: 'what-is-a-dmc',
  kind: 'guide',
  slug: 'what-is-a-dmc',
  metaTitle: 'What is a DMC (destination management company)?',
  metaDescription:
    'What a DMC is, what it organises, who its clients are, how it differs from a tour operator, a travel agency and a DMO, and how it prices a trip.',
  title: 'What is a DMC?',
  lead: 'A DMC, or destination management company, is a company based in a destination that organises what travellers do there: transfers, guides, excursions, hotels, restaurants and events. Its clients are usually tour operators, travel agencies and event planners, who sell the trip to the traveller.',
  updated: '2026-11-28',
  card: 'What a DMC organises, who its clients are and how it prices a trip.',
  related: ['hotel-allotment', 'package-quote', 'quote-with-margins', 'net-commissionable-rates', 'best-dmc-software'],
  blocks: [
    { type: 'h2', text: 'Definition', id: 'definition' },
    {
      type: 'p',
      text: 'ADMEI, the association of destination management companies, defines a DMC as a professional services company located in its destination, which specialises in local expertise and resources. It describes the DMC as a partner for event management, tours and activities, transportation, entertainment and programme logistics.'
    },
    {
      type: 'p',
      text: 'In Europe, the same activity is often called inbound or incoming travel: agence réceptive in French, agencia receptiva in Spanish, incoming in Italian and turismo recetivo in Portuguese.'
    },
    { type: 'h2', text: 'What a DMC organises', id: 'services' },
    {
      type: 'list',
      items: [
        'Transfers between the airport, the hotels and the places visited.',
        'Hotels, often at rates negotiated for the season.',
        'Guides, excursions, visits and activities.',
        'Restaurants, private dinners and themed events.',
        'For groups and events: venues, conference logistics and incentive programmes.',
        'The on-site follow-up while the travellers are there.'
      ]
    },
    {
      type: 'p',
      text: 'Smart Meetings compares a DMC to both the architect and the general contractor of a programme: it designs the proposal, hires and manages the local suppliers and supervises the programme on site.'
    },
    { type: 'h2', text: 'Who its clients are', id: 'clients' },
    {
      type: 'list',
      items: [
        'Tour operators and travel agencies in other countries, which sell the trip to their own clients.',
        'Meeting, incentive and event planners (MICE), for groups and corporate programmes.',
        'Companies organising a trip or an event for their teams.',
        'Some DMCs also sell directly to travellers.'
      ]
    },
    { type: 'h2', text: 'DMC, tour operator, travel agency and DMO', id: 'differences' },
    {
      type: 'table',
      head: ['Term', 'What it usually means'],
      rows: [
        ['DMC', 'A company in the destination that organises the services there and sells them to agencies, tour operators and planners.'],
        ['Tour operator', 'A company that puts trips together, often in several destinations, and sells them through agencies or directly. It often works with a DMC in each destination.'],
        ['Travel agency', 'A company that sells trips to travellers. A tailor-made agency designs the trip with the traveller and books the services, sometimes through a DMC.'],
        ['DMO', 'A destination management or marketing organisation, usually a public or non-profit body that promotes a destination. It does not usually sell trips.']
      ]
    },
    {
      type: 'p',
      text: 'The lines between these activities overlap. A DMC can also act as a tour operator, and a tailor-made agency can run its own destination. The legal status of each business depends on the travel rules of its country.'
    },
    { type: 'h2', text: 'How a DMC prices a trip', id: 'pricing' },
    {
      type: 'p',
      text: 'A DMC usually buys from its suppliers at net rates, adds its margin and sells to the agency or tour operator, which adds its own margin or receives a commission. The pages [Net and commissionable rates](/guides/net-rates-vs-commissionable-rates) and [How a tailor-made travel price is calculated](/guides/tailor-made-quote-with-margins) show the calculation with figures.'
    },
    {
      type: 'p',
      text: 'For groups and regular programmes, a DMC often holds rooms in hotels under an allotment, with a release date for the rooms it has not sold. The page [Hotel allotments and release dates](/guides/hotel-allotment-release-date) explains how it works.'
    },
    { type: 'h2', text: 'A request, step by step', id: 'steps' },
    {
      type: 'list',
      ordered: true,
      items: [
        'An agency sends a request: dates, number of travellers, budget and wishes.',
        'The DMC checks availability with its suppliers and prepares a programme with a price.',
        'The agency confirms, often after one or two versions.',
        'The DMC books each service, collects the confirmations and sends the vouchers and the rooming list.',
        'The travellers arrive; the DMC follows the programme on site.',
        'The DMC invoices the agency and pays its suppliers.'
      ]
    },
    {
      type: 'p',
      text: 'Smart Meetings reports that some DMCs estimate that a quarter or less of their proposals turn into a contract, which is why the time spent on each proposal matters.'
    },
    { type: 'h2', text: 'Associations', id: 'associations' },
    {
      type: 'p',
      text: 'ADMEI (Association of Destination Management Executives International) brings DMCs together. Its membership requirements ask for tours and activities and transportation, plus at least two of event management, entertainment and programme logistics. Many countries also have national associations of inbound agencies.'
    },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'Traviosoft is [software for tailor-made travel agencies and DMCs](/). It holds the requests, a catalog with seasonal net rates, quotes with margin and commission, the bookings with each supplier, payments and invoices, for every trip.'
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'What does DMC stand for?', a: ['Destination management company. In the hotel and event industry, the letters almost always mean this.'] },
        { q: 'Is a DMC a travel agency?', a: ['A DMC works in the destination and mostly sells to other travel businesses. Depending on the country, it can hold a travel agency or tour operator licence.'] },
        { q: 'What is the difference between a DMC and a DMO?', a: ['A DMC is a company that sells services in a destination. A DMO is usually a public or non-profit body that promotes the destination.'] },
        { q: 'How does a DMC earn money?', a: ['From the margin between the net rates it pays its suppliers and the price it sells at. Some also charge for proposals or site inspections.'] }
      ]
    },
    {
      type: 'p',
      text: 'Sources: [ADMEI membership requirements](https://growthzonesitesprod.azureedge.net/wp-content/uploads/sites/1073/2020/03/DMC-MEMBERSHIP-REQUIREMENTS.pdf), [Smart Meetings, “The evolution of the DMC”](https://www.smartmeetings.com/meeting-planning/133619/evolution-dmc), [Wikipedia, “Destination management”](https://en.wikipedia.org/wiki/Destination_management). Read on 28 November 2026.'
    }
  ]
};

const allotment: Article = {
  key: 'hotel-allotment',
  kind: 'guide',
  slug: 'hotel-allotment-release-date',
  metaTitle: 'Hotel allotments: release date, cut-off and wash',
  metaDescription:
    'What a hotel allotment is, how the release date and cut-off work, what happens to unsold rooms, and what wash and attrition mean, with a worked example.',
  title: 'Hotel allotments and release dates',
  lead: 'An allotment is a number of rooms a hotel holds for a tour operator, a DMC or an agency, at an agreed rate, for a period. The rooms that are not sold by the release date go back to the hotel, which sells them through its other channels.',
  updated: '2026-11-28',
  card: 'Allotment, release date, cut-off, wash and attrition, with an example.',
  related: ['rooming-list', 'what-is-a-dmc', 'net-commissionable-rates', 'quote-with-margins'],
  blocks: [
    { type: 'h2', text: 'What an allotment is', id: 'definition' },
    {
      type: 'p',
      text: 'The hotel sets aside a number of rooms per night for a partner, for a whole season, part of a season or single dates, at a rate agreed in advance. The partner sells those rooms to its own clients, as part of a trip or a programme. Rooms that are not under an allotment are booked on request: each booking waits for the hotel’s confirmation.'
    },
    {
      type: 'p',
      text: 'According to Wikipedia, hotels grant allotments mostly to partners with a sales history, at rates that can be 10% to 50% below the public price.'
    },
    { type: 'h2', text: 'Release date and cut-off', id: 'release' },
    {
      type: 'p',
      text: 'The release period, also called the cut-off, is the number of days before arrival at which unsold rooms go back to the hotel. After that date, a new booking depends on what the hotel still has available.'
    },
    {
      type: 'table',
      head: ['Source', 'Release period it gives'],
      rows: [
        ['Wikipedia and Xotels', 'An example of 4 days before arrival'],
        ['Fáilte Ireland', '14 or 7 days before the date held, at noon'],
        ['Roommaster', '21 to 45 days for most leisure markets; shorter for corporate allotments']
      ]
    },
    { type: 'p', text: 'The contract with each hotel sets the period. It can differ by season.' },
    { type: 'h2', text: 'Two kinds of allotment', id: 'kinds' },
    {
      type: 'list',
      items: [
        '**Fixed:** a set number of rooms per night, with one release date for the whole block.',
        '**Call-off:** the partner draws rooms from a pool as bookings arrive, and the rooms are released on a rolling basis.'
      ]
    },
    {
      type: 'p',
      text: 'A group block works in a similar way for a single stay: the hotel holds the rooms for the group until a cut-off date, when it expects the rooming list.'
    },
    { type: 'h2', text: 'Wash and attrition', id: 'wash' },
    {
      type: 'list',
      items: [
        '**Wash:** the share of a block that ends up unsold by the release date. A partner that sells 70 rooms out of a block of 100 has a wash of 30%.',
        '**Attrition:** a clause that sets what the partner pays if it uses fewer rooms than agreed.'
      ]
    },
    {
      type: 'p',
      text: 'Hotels also review allotments against agreed production levels, quarterly or yearly. When an allotment is used less than agreed, the contract can let the hotel reduce it or change the rate.'
    },
    { type: 'h2', text: 'Example', id: 'example' },
    {
      type: 'p',
      text: 'A DMC holds 10 double rooms per night in a hotel from May to September, with a release period of 21 days. For the night of 12 June, the release date is 22 May.'
    },
    {
      type: 'table',
      head: ['Date', 'Rooms sold', 'Rooms held'],
      rows: [
        ['1 May', '4', '10'],
        ['22 May (release date)', '7', '7: the 3 unsold rooms go back to the hotel'],
        ['2 June', '8', 'The 8th room is booked on request']
      ]
    },
    { type: 'p', text: 'For this night, the wash is 3 rooms out of 10, or 30%. (Example invented for this page.)' },
    { type: 'h2', text: 'The rooming list', id: 'rooming-list' },
    {
      type: 'p',
      text: 'For a group, the hotel usually expects the names by the cut-off date, in a rooming list. The page [The rooming list for groups and MICE events](/guides/rooming-list-template-groups-mice) describes what it contains.'
    },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'In Traviosoft, each booking with a hotel is a task on the trip, from the request to the hotel’s confirmation, and the rooming list per hotel is built from who shares with whom.'
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'What is the difference between an allotment and a group block?', a: ['An allotment covers a period, often a season, and the partner sells the rooms to many clients. A group block covers one group’s stay.'] },
        { q: 'What happens after the release date?', a: ['The unsold rooms go back to the hotel, which can sell them at its current rates. A later booking depends on availability.'] },
        { q: 'Is a release period the same as a cancellation deadline?', a: ['They are separate clauses. The release period applies to unsold rooms; cancellation terms apply to rooms already booked.'] }
      ]
    },
    {
      type: 'p',
      text: 'Sources: [Wikipedia, “Allotment (travel industry)”](https://en.wikipedia.org/wiki/Allotment_(travel_industry)), [Xotels glossary, allotment](https://xotels.com/en/glossary/allotment) and [cut-off](https://xotels.com/en/glossary/cut-off), [Fáilte Ireland, terms for B2B contracting](https://failteireland.ie/FailteIreland/media/WebsiteStructure/Documents/Brexit/Considerations-for-T-Cs-for-B2B-Contracting-Accomm-Providers.pdf), [Roommaster](https://www.roommaster.com/blog/hotel-allotment-management), [Mews](https://www.mews.com/en/blog/hotel-room-allotment). Read on 28 November 2026.'
    }
  ]
};


const PKG_DISCLAIMER =
  'General information, written on 28 November 2026 from the text of the EU directive. It is not legal advice and has no legal value. Each country applies the directive through its own law, which can add rules: check the official texts or ask a qualified adviser. Traviosoft accepts no liability for decisions based on this page.';

const packageQuote: Article = {
  key: 'package-quote',
  kind: 'guide',
  slug: 'package-travel-quote-information',
  metaTitle: 'Package travel quote: the information the EU directive lists',
  metaDescription:
    'When a tailor-made trip is a package under Directive (EU) 2015/2302, and what the quote and contract tell the traveller: itinerary, price, cancellation.',
  title: 'What a package travel quote contains',
  lead: 'When an agency combines a flight, a hotel, a car or an excursion for the same trip, the trip is often a package under the EU Package Travel Directive. The directive lists the information the traveller receives before booking, and what the contract adds.',
  updated: '2026-11-28',
  card: 'When a trip is a package, and the information the quote and the contract give.',
  related: ['quote-with-margins', 'what-is-a-dmc', 'eu-vat-travel', 'gdpr-travel'],
  blocks: [
    { type: 'callout', text: PKG_DISCLAIMER },
    { type: 'h2', text: 'When a trip is a package', id: 'package' },
    {
      type: 'p',
      text: 'Article 3 of Directive (EU) 2015/2302 lists four types of travel services: carriage of passengers, accommodation, car and motorcycle rental, and other tourist services such as excursions or guided visits. A package is a combination of at least two different types for the same trip, when one of these applies:'
    },
    {
      type: 'list',
      items: [
        'one trader combines them before a single contract is concluded, including at the traveller’s request;',
        'they are bought from a single point of sale and selected before the traveller agrees to pay;',
        'they are offered or charged at an inclusive or total price;',
        'they are advertised or sold as a “package” or a similar term;',
        'they are booked through linked online booking processes, under the conditions of the article.'
      ]
    },
    {
      type: 'p',
      text: 'A hotel combined only with tourist services such as excursions is not a package when those services are not a significant part of the value of the trip and are not advertised as an essential feature of it.'
    },
    { type: 'h2', text: 'The information given before booking', id: 'information' },
    {
      type: 'p',
      text: 'Under article 5, before the traveller is bound, the organiser gives the standard information form of Annex I and the following information:'
    },
    {
      type: 'table',
      head: ['Article 5(1)', 'Information'],
      rows: [
        ['(a)', 'The main characteristics: destinations, itinerary, dates and number of nights; transport, times and stops; location, features and category of the accommodation; meal plan; visits and excursions included; whether the trip is in a group and its approximate size; the language of guided services; and whether the trip suits people with reduced mobility.'],
        ['(b)', 'The trading name and address of the organiser and of the retailer, with telephone and email.'],
        ['(c)', 'The total price, including taxes, fees and other costs, or the type of costs still to be paid when they cannot be calculated in advance.'],
        ['(d)', 'The payment arrangements: the deposit as an amount or a percentage, and the dates of the balance.'],
        ['(e)', 'The minimum number of travellers, if any, and the date by which the trip can be cancelled if that number is not reached.'],
        ['(f)', 'General information on passports, visas and health formalities in the destination.'],
        ['(g)', 'That the traveller can cancel at any time before the start, for a termination fee.'],
        ['(h)', 'Optional or compulsory insurance covering cancellation, or assistance and repatriation.']
      ]
    },
    {
      type: 'p',
      text: 'Article 5(3) asks for this information to be given in a clear, comprehensible and prominent manner, and to be legible when it is written.'
    },
    { type: 'h2', text: 'What the contract adds', id: 'contract' },
    { type: 'p', text: 'Article 7 lists what the package travel contract contains on top of the information above:' },
    {
      type: 'list',
      items: [
        'the special requests the organiser has accepted;',
        'that the organiser is responsible for the performance of the travel services and must assist travellers in difficulty;',
        'the name and contact details of the insolvency protection;',
        'a local representative or contact point for help and complaints;',
        'the duty to report any problem during the trip without delay;',
        'for minors travelling alone, a contact at the place of stay;',
        'the complaint procedures, including alternative dispute resolution;',
        'the right to transfer the contract to another traveller.'
      ]
    },
    {
      type: 'p',
      text: 'The traveller receives a copy or a confirmation of the contract on a durable medium, such as a PDF. In good time before departure, the organiser sends the receipts, vouchers and tickets and the departure and return times.'
    },
    { type: 'h2', text: 'Price changes after booking', id: 'price' },
    {
      type: 'p',
      text: 'Under article 10, the price can rise after booking only if the contract allows it, and only because of changes in fuel costs for transport, taxes and fees set by third parties, or exchange rates. The traveller is told at least 20 days before the start, with the calculation. Above 8% of the total price, the traveller can accept the change or cancel without a fee. When these costs fall, the traveller is entitled to a price reduction.'
    },
    { type: 'h2', text: 'Cancellation', id: 'cancellation' },
    {
      type: 'list',
      items: [
        'The traveller can cancel at any time before the start, for an appropriate and justifiable fee. The contract can set standard fees by date of cancellation (article 12(1)).',
        'The traveller cancels without a fee when unavoidable and extraordinary circumstances at or near the destination significantly affect the trip (article 12(2)).',
        'The organiser can cancel when fewer travellers than the stated minimum have booked: at the latest 20 days before a trip of more than six days, 7 days before a trip of two to six days and 48 hours before a shorter one (article 12(3)).',
        'Refunds are paid within 14 days of the cancellation (article 12(4)).'
      ]
    },
    { type: 'h2', text: 'The names of the package in each language', id: 'names' },
    {
      type: 'p',
      text: 'The directive uses “package” in English, “voyage à forfait” in French, “viaje combinado” in Spanish, “pacchetto turistico” in Italian and “viagem organizada” in Portuguese. Each country has written it into its own law, such as the Code du tourisme in France or the Codice del Turismo in Italy.'
    },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'In Traviosoft, the quote a client receives shows the day-by-day programme, what is included and not included, the total and the price per person, the deposit and the balance dates, and the date until which the quote is valid.'
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Is a tailor-made trip a package?', a: ['Often, when it combines at least two types of travel services, such as a flight and a hotel, or a hotel and a car, for the same trip. Article 3 of the directive gives the full conditions.'] },
        { q: 'Does the directive apply to business travel?', a: ['Article 2 excludes packages bought under a general agreement for business travel between a company and a trader. Other business trips can be covered.'] },
        { q: 'Can the price change after the client has booked?', a: ['Only if the contract allows it, for the reasons listed in article 10, and at the latest 20 days before the start.'] }
      ]
    },
    {
      type: 'p',
      text: 'Official text: [Directive (EU) 2015/2302 on EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32015L2302), available in every EU language.'
    }
  ]
};


const INV_DISCLAIMER =
  'General information, written on 28 November 2026. It is not legal, tax or accounting advice and has no legal value. Each country sets its own invoicing and VAT rules: check the official sources or ask a qualified adviser. Traviosoft accepts no liability for decisions based on this page.';

const invoicing: Article = {
  key: 'agency-invoicing',
  kind: 'guide',
  slug: 'travel-agency-invoicing-accounting',
  metaTitle: 'Travel agency invoicing and accounting, step by step',
  metaDescription:
    'How a tailor-made trip is invoiced: deposit and final invoices, credit notes, the margin per trip, and what the accountant receives at the end of the month.',
  title: 'Travel agency invoicing and accounting, step by step',
  lead: 'In a travel agency, the invoice comes at the end of a chain: the quote the client accepts, the deposit and the balance, the costs of each supplier, and then the files the accountant receives. This page follows that chain for one tailor-made trip.',
  updated: '2026-11-28',
  card: 'Deposit and final invoices, credit notes, the margin per trip and the accountant’s files.',
  related: ['eu-vat-travel', 'invoicing-france', 'invoicing-spain', 'quote-with-margins', 'net-commissionable-rates'],
  blocks: [
    { type: 'callout', text: INV_DISCLAIMER },
    { type: 'h2', text: 'What sets travel agency invoicing apart', id: 'specifics' },
    {
      type: 'list',
      items: [
        'One trip combines services from many suppliers: hotels, guides, transfers, activities.',
        'The client usually pays a deposit when the trip is confirmed and the balance before departure. Suppliers often invoice later, sometimes after the trip.',
        'In the European Union, an agency that sells trips in its own name with services bought from others applies the special VAT scheme for travel agents, where VAT is due on the margin.',
        'The margin of a trip is final only when every supplier invoice has arrived.'
      ]
    },
    { type: 'h2', text: 'The documents of one trip', id: 'documents' },
    {
      type: 'table',
      head: ['Document', 'When', 'What it shows'],
      rows: [
        ['Quote', 'Before the client says yes', 'The programme, the total price, the deposit and the balance with their dates.'],
        ['Deposit invoice', 'When the deposit is received', 'The amount of the deposit and the trip it belongs to.'],
        ['Final invoice', 'Usually before departure', 'The total price of the trip, minus the deposit already invoiced.'],
        ['Credit note', 'When the trip is cancelled or changed', 'The amount that reverses all or part of an earlier invoice, with a reference to it.']
      ]
    },
    {
      type: 'p',
      text: 'The EU VAT Directive lists the details an invoice shows, among them a sequential number that identifies the invoice and, when the travel agent scheme applies, the mention “Margin scheme — Travel agents” (article 226). A document that amends an earlier invoice and refers to it, such as a credit note, is treated as an invoice (article 219). Each country sets the exact wording in its own law: see the pages for [France](/guides/travel-agency-invoicing-france), [Spain](/guides/travel-agency-invoicing-spain), [Germany](/guides/travel-agency-invoicing-germany) and [Belgium](/guides/travel-agency-invoicing-belgium).'
    },
    { type: 'h2', text: 'An example: one trip from quote to margin', id: 'example' },
    { type: 'p', text: 'An invented seven-day trip for two travellers, sold 4,800 EUR, with a 30% deposit.' },
    {
      type: 'table',
      head: ['Step', 'Amount'],
      rows: [
        ['Deposit invoice (30%)', '1,440 EUR'],
        ['Final invoice: 4,800 EUR minus the deposit', '3,360 EUR to pay'],
        ['Hotels, as quoted', '2,300 EUR'],
        ['Guide and transfers, as quoted', '900 EUR'],
        ['Activities, as quoted', '400 EUR'],
        ['Margin planned on the quote', '1,200 EUR, 25% of the price'],
        ['Transfer company invoice received after the trip: 950 EUR instead of 900 EUR', 'Margin 1,150 EUR, 24% of the price']
      ]
    },
    {
      type: 'p',
      text: 'Under the special scheme, VAT is calculated on this margin. That is why agencies compare each supplier invoice with the cost planned on the quote. The page on [pricing a tailor-made trip](/guides/tailor-made-quote-with-margins) shows how the selling price is built from the costs.'
    },
    { type: 'h2', text: 'What the accountant receives', id: 'accountant' },
    {
      type: 'list',
      items: [
        'The invoices and credit notes of the period, in number order.',
        'The payments received from each client, with their dates.',
        'The supplier invoices, each linked to its trip.',
        'The margin of each trip, which the travel agent scheme uses.'
      ]
    },
    { type: 'h2', text: 'Invoicing software and agency management software', id: 'software' },
    {
      type: 'p',
      text: 'Invoicing software issues and numbers invoices and credit notes, and sends them as e-invoices in the countries that require it. Agency management software holds what comes before the invoice: the request, the quote with its costs and margin, the bookings with each supplier and the payment schedule.'
    },
    {
      type: 'p',
      text: 'When both are connected, the invoice takes its amounts from the accepted quote, and the margin of each trip is already known when the accountant asks for it.'
    },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'Traviosoft is [software for tailor-made travel agencies and DMCs](/). [Deposit and final invoices and credit notes](/get-paid) are made from the accepted quote, payments are recorded on the trip, and the dashboard shows what clients have paid and what is owed to suppliers. At the end of the month, an Excel summary or a zip file of every invoice goes to the accountant. Outside Spain, the invoice is issued by the invoicing software you already use, connected to Traviosoft.'
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Why can the margin change after the final invoice?', a: ['Because some suppliers invoice after the trip. When a supplier invoice differs from the cost on the quote, the margin of the trip changes with it.'] },
        { q: 'What is the difference between a credit note and a refund?', a: ['A credit note is a document that reverses all or part of an invoice. A refund is the money paid back to the client. A cancellation often produces both.'] },
        { q: 'Can invoices stay in the invoicing software I already use?', a: ['Yes. Outside Spain, the invoice is issued by the invoicing software you already use, connected to Traviosoft, with the amounts of the accepted quote.'] }
      ]
    },
    {
      type: 'p',
      text: 'Sources: [European Commission, VAT special schemes](https://taxation-customs.ec.europa.eu/special-schemes_en) and [Council Directive 2006/112/EC, articles 219 and 226](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02006L0112-20250414).'
    }
  ]
};

export const posts: Article[] = [dmc, allotment, packageQuote, invoicing];
