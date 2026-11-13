import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const pricing: SiteContent['pricing'] = {
  metaTitle: `Pricing: Classic from ${PRICES.classic.yearly} EUR a month, Premium from ${PRICES.premium.yearly} EUR | Traviosoft`,
  metaDescription:
    `Two plans for tailor-made travel agencies and DMCs. Classic runs the whole agency from ${PRICES.classic.yearly} EUR a month; Premium adds teams, currencies, purchasing, several brands and the assistant. ${PRICES.usersIncluded} users included, setup free with yearly billing.`,
  title: 'Pricing',
  lead: 'Classic covers the whole agency, from the first request to the last invoice. Premium adds teams, other currencies, purchasing, several brands and connections.',
  yearly: 'Yearly',
  monthly: 'Monthly',
  yearlyNote: 'Prices per month, VAT excluded.',
  plans: [
    {
      id: 'classic',
      name: 'Classic',
      users: `${PRICES.usersIncluded} users included`,
      yearly: String(PRICES.classic.yearly),
      monthly: String(PRICES.classic.monthly),
      priceNote: { yearly: `Extra user: ${PRICES.extraUser.yearly} EUR a month`, monthly: `Extra user: ${PRICES.extraUser.monthly} EUR a month` },
      lines: [
        { text: 'Requests and quotes with your margin and commission' },
        { text: 'Catalogue with season prices' },
        { text: 'Partner agencies and commission statements' },
        { text: 'Proposal page and day-by-day itinerary, with your logo and colours' },
        { text: 'Orders and bookings, with supplier emails filed on the trip' },
        { text: 'Service sheets' },
        { text: 'Groups: traveller lists, form link and rooming lists' },
        { text: 'Payment schedules, links and reminders' },
        { text: 'Invoices and credit notes, with your country’s tax rules' },
        { text: 'Dashboard' },
        { text: 'Documents in the client’s language' }
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      users: `${PRICES.usersIncluded} users included`,
      yearly: String(PRICES.premium.yearly),
      monthly: String(PRICES.premium.monthly),
      priceNote: { yearly: `Extra user: ${PRICES.extraUser.yearly} EUR a month`, monthly: `Extra user: ${PRICES.extraUser.monthly} EUR a month` },
      hot: true,
      lines: [
        { text: 'Everything in Classic, plus:' },
        { text: 'Teams and roles' },
        { text: 'Any currency, with daily exchange rates' },
        { text: 'Availability requests and purchase orders to suppliers' },
        { text: 'Several brands and companies in one account' },
        { text: 'Accounting export' },
        { text: 'The built-in assistant, and connections to your own AI tools' },
        { text: 'Connections to your website and other software' }
      ]
    }
  ],
  includedTitle: 'Both plans include',
  included: [
    `${PRICES.usersIncluded} users, more when you need them`,
    `Setup and data import, free with yearly billing (${PRICES.setupMonthly} EUR once with monthly)`,
    'Support by email in Spanish, English and French',
    'Hosting in the European Union, a separate space per agency',
    'Your data exportable in standard formats',
    'New features of your plan as they ship'
  ],
  faq: [
    {
      q: 'Which plan do I need?',
      a: ['Classic runs a whole agency: requests, quotes, partners, bookings, groups, payments and invoices. Premium adds features such as teams with their own clients, selling in other currencies, and purchase orders to suppliers.']
    },
    {
      q: 'How is it billed?',
      a: ['Yearly or monthly, your choice. Yearly costs less per month and includes setup. Monthly can be stopped at the end of any month.']
    },
    {
      q: 'Are prices with or without VAT?',
      a: ['Without. VAT is added to the invoice according to your country and your company status.']
    },
    {
      q: 'What if I add a user?',
      a: [`Both plans include ${PRICES.usersIncluded} users. Each extra user costs ${PRICES.extraUser.yearly} EUR a month with yearly billing, ${PRICES.extraUser.monthly} EUR with monthly billing.`]
    },
    {
      q: 'Can I change plan?',
      a: ['Yes. Move from Classic to Premium at any time, and the new features are there the same day. Your data stays as it is.']
    },
    {
      q: 'Can I cancel?',
      a: ['Yes. Monthly plans stop at the end of the month you cancel. Yearly plans run to the end of the paid year and stop there.']
    },
    {
      q: 'Can I take my data when I leave?',
      a: ['Yes. You get your data back in standard formats.']
    },
    {
      q: 'What does setup include?',
      a: [`We import your catalogue, clients, suppliers and open trips from your spreadsheets, and set up your brand and your pricing rules. It is free with yearly billing and ${PRICES.setupMonthly} EUR once with monthly billing.`]
    }
  ]
};

export const example: SiteContent['example'] = {
  metaTitle: 'Example trips: a couple, a group and a safari | Traviosoft',
  metaDescription:
    'Open three example trips built in Traviosoft, a couple in Andalucía, an incentive group in Porto and a safari in Kenya and Tanzania: the day-by-day itinerary and the quote as the client sees them. Invented data, no sign-up.',
  title: 'Example trips',
  lead: 'Three sample trips built in Traviosoft. The itinerary and the quote as the client or the partner agency sees them.',
  tabs: { itinerary: 'Itinerary', quote: 'Quote' },
  pick: 'Choose a trip',
  trips: [
  {
    id: 'andalucia',
    label: 'Andalucía, 8 days',
    kind: 'A couple, sold direct',
    name: 'Andalucía, 8 days',
    dates: '12 to 19 April 2027',
    travellers: 'Client: Laura & Tom, 2 adults',
    agency: 'Your agency',
    days: [
      {
        day: 'Day 1',
        title: 'Arrival in Seville',
        body: 'A driver meets you at the airport and takes you to the hotel. The evening is free.',
        items: ['Private transfer from the airport, 14:30', 'Hotel Alfonso XIII, check-in from 15:00', 'Dinner suggestions in Santa Cruz']
      },
      {
        day: 'Day 2',
        title: 'Seville, the old town',
        body: 'The cathedral, the Giralda and the Alcázar with a local guide, then the afternoon at your pace.',
        items: ['Private guide, 09:30 to 13:00', 'Alcázar tickets with a fixed entry time', 'Free afternoon']
      },
      {
        day: 'Day 3',
        title: 'Seville, free day and flamenco',
        body: 'A day for the river, the markets and the Triana side. In the evening, a small flamenco show.',
        items: ['Flamenco show in Triana, 20:30', 'Hotel Alfonso XIII']
      },
      {
        day: 'Day 4',
        title: 'To Córdoba',
        body: 'A morning drive to Córdoba. The Mezquita with a guide, then the old Jewish quarter on foot.',
        items: ['Private transfer Seville to Córdoba, 09:00', 'Private guide at the Mezquita, 12:00', 'Hotel in the old town']
      },
      {
        day: 'Day 5',
        title: 'To Granada',
        body: 'Drive to Granada through olive country. Time to settle in and walk up to the Albaicín at sunset.',
        items: ['Private transfer Córdoba to Granada, 10:00', 'Hotel with Alhambra views', 'Sunset at the Mirador de San Nicolás']
      },
      {
        day: 'Day 6',
        title: 'The Alhambra',
        body: 'The palaces, the Generalife and the gardens with a private guide. The rest of the day is yours.',
        items: ['Private guide, Alhambra, 09:00 to 13:00', 'Nasrid Palaces entry at 09:30', 'Free afternoon']
      },
      {
        day: 'Day 7',
        title: 'To Ronda',
        body: 'Over the mountains to Ronda, the town above the gorge. A walk to the New Bridge before dinner.',
        items: ['Private transfer Granada to Ronda, 10:30', 'Hotel with a view of the gorge', 'Dinner at a local restaurant']
      },
      {
        day: 'Day 8',
        title: 'Departure from Málaga',
        body: 'A transfer to Málaga airport, timed for your flight.',
        items: ['Private transfer Ronda to Málaga airport, 09:00', 'Check-out by 11:00']
      }
    ],
    quoteLines: [
      { name: 'Seville, 3 nights', detail: 'Hotel Alfonso XIII, double room, breakfast', price: '1,980 EUR' },
      { name: 'Córdoba, 1 night', detail: 'Hotel in the old town, double room, breakfast', price: '280 EUR' },
      { name: 'Granada, 2 nights', detail: 'Hotel with Alhambra views, double room, breakfast', price: '840 EUR' },
      { name: 'Ronda, 1 night', detail: 'Hotel with a view of the gorge, double room, breakfast', price: '360 EUR' },
      { name: 'Private guides', detail: 'Alhambra 420 EUR, Mezquita 180 EUR (entry tickets in the price)', price: '600 EUR' },
      { name: 'Private transfers', detail: 'Airport, Córdoba, Granada, Ronda and Málaga airport', price: '560 EUR' },
      { name: 'Flamenco show', detail: 'Small venue in Triana, 2 tickets', price: '240 EUR' }
    ],
    included: [
      '7 nights with breakfast',
      'All private transfers',
      'Private guides in Seville, Córdoba and Granada',
      'Entry tickets for the Alcázar, the Mezquita and the Alhambra',
      'Flamenco show for 2'
    ],
    notIncluded: ['Flights', 'Lunches and dinners', 'Travel insurance', 'Tourist tax at the hotels'],
    total: '4,860 EUR',
    perPerson: '2,430 EUR per person',
    deposit: '30% to confirm, balance 30 days before arrival',
    validUntil: 'Valid until 30 November 2026'
  },
  {
    id: 'group',
    label: 'Porto and the Douro, 4 days',
    kind: 'An incentive group of 24, sold through a partner agency',
    name: 'Porto and the Douro, 4 days',
    dates: '6 to 9 May 2027',
    travellers: 'Client: your partner agency in Munich, for a company group of 24',
    agency: 'Your agency',
    days: [
      {
        day: 'Day 1',
        title: 'Arrival in Porto',
        body: 'Private coach from the airport to the hotel on the river. Welcome dinner in Ribeira.',
        items: ['Coach transfer, meeting at arrivals', 'Hotel in Porto, 3 nights', 'Welcome dinner for 24']
      },
      {
        day: 'Day 2',
        title: 'Porto, two ways',
        body: 'Morning golf for ten, or a walk through the old town with a local guide. Afternoon in a port cellar.',
        items: ['Golf morning, 10 guests', 'Old town walk, 14 guests', 'Port cellar visit and tasting for 24']
      },
      {
        day: 'Day 3',
        title: 'The Douro valley',
        body: 'Coach up the valley, a river cruise between the terraces, lunch at a wine estate. Gala dinner at a quinta.',
        items: ['Private coach, full day', 'River cruise', 'Lunch at a wine estate', 'Gala dinner at a quinta']
      },
      {
        day: 'Day 4',
        title: 'Departure',
        body: 'Free morning. Coach to the airport in two groups, matched to the flights.',
        items: ['Two airport transfers']
      }
    ],
    quoteLines: [
      { name: 'Porto, 3 nights', detail: 'Hotel on the river, 12 double or twin rooms, breakfast', price: '9,360 EUR' },
      { name: 'Welcome dinner', detail: 'Restaurant in Ribeira, 24 guests, drinks included', price: '2,040 EUR' },
      { name: 'Douro day', detail: 'Coach, river cruise and wine estate lunch, 24 guests', price: '3,960 EUR' },
      { name: 'Port cellar visit', detail: 'Visit and tasting, 24 guests', price: '840 EUR' },
      { name: 'Golf morning', detail: '10 guests, green fees and clubs', price: '1,200 EUR' },
      { name: 'Gala dinner', detail: 'Private quinta, 24 guests, music', price: '3,360 EUR' },
      { name: 'Coach transfers', detail: 'Airport, Porto and Douro, 4 days', price: '1,850 EUR' },
      { name: 'Local guide and on-site host', detail: '4 days', price: '1,600 EUR' }
    ],
    included: [
      '3 nights in Porto with breakfast',
      'Every meal and visit listed, with drinks at dinners',
      'All transfers by private coach',
      'An on-site host for the whole stay',
      'Your partner agency’s commission'
    ],
    notIncluded: ['Flights', 'Lunches on days 1, 2 and 4', 'Travel insurance', 'Porto tourist tax'],
    total: '24,210 EUR',
    perPerson: '1,008.75 EUR per guest',
    deposit: '40% to confirm, 40% 60 days before arrival, balance 15 days before',
    validUntil: 'Valid until 15 December 2026',
    rooming: {
      title: 'Rooming list · Hotel in Porto, first 4 of 12 rooms',
      head: ['Room', 'Type', 'Guests', 'Nights'],
      rows: [
        ['Room 1', 'Double', 'Anna Weber, Jonas Weber', '6 to 9 May'],
        ['Room 2', 'Twin', 'Lena Fischer, Marie Koch', '6 to 9 May'],
        ['Room 3', 'Double', 'Paul Schmidt, Sofia Schmidt', '6 to 9 May'],
        ['Room 4', 'Twin', 'Thomas Becker, David Wolf', '6 to 9 May']
      ]
    }
  },
  {
    id: 'safari',
    label: 'Kenya and Tanzania, 9 days',
    kind: 'A safari for two, priced in US dollars',
    name: 'Kenya and Tanzania, 9 days',
    dates: '14 to 22 August 2027',
    travellers: 'Client: Emma & James, 2 adults',
    agency: 'Your agency',
    days: [
      {
        day: 'Day 1',
        title: 'Nairobi',
        body: 'Met at the airport and driven to a garden hotel in Karen. Dinner at the hotel.',
        items: ['Private transfer', 'Garden hotel in Karen, 1 night']
      },
      {
        day: 'Day 2 to 4',
        title: 'Masai Mara',
        body: 'Light aircraft to the Mara. Three days of game drives during the great migration.',
        items: ['Flight Nairobi to the Mara', 'Tented camp, full board, 3 nights', 'Morning and afternoon game drives']
      },
      {
        day: 'Day 5 to 7',
        title: 'Serengeti',
        body: 'Fly across the border to the northern Serengeti. A balloon flight at sunrise on day 6.',
        items: ['Flight to the Serengeti', 'Mobile camp, full board, 3 nights', 'Hot-air balloon flight with breakfast']
      },
      {
        day: 'Day 8',
        title: 'Ngorongoro',
        body: 'Drive with your private guide to the crater rim. Afternoon on the crater floor.',
        items: ['Private guide and vehicle', 'Lodge on the crater rim, 1 night']
      },
      {
        day: 'Day 9',
        title: 'Departure from Arusha',
        body: 'Drive to Arusha airport for your flight home.',
        items: ['Private transfer to the airport']
      }
    ],
    quoteLines: [
      { name: 'Nairobi, 1 night', detail: 'Garden hotel in Karen, breakfast', price: '640 USD' },
      { name: 'Masai Mara, 3 nights', detail: 'Tented camp, full board, game drives', price: '5,880 USD' },
      { name: 'Serengeti, 3 nights', detail: 'Mobile camp, full board, game drives', price: '6,300 USD' },
      { name: 'Ngorongoro, 1 night', detail: 'Lodge on the crater rim, full board', price: '1,440 USD' },
      { name: 'Light aircraft flights', detail: 'Nairobi, Masai Mara, Serengeti', price: '2,900 USD' },
      { name: 'Park and conservation fees', detail: 'Kenya and Tanzania', price: '2,640 USD' },
      { name: 'Private guide and vehicle', detail: 'Tanzania, 4 days', price: '1,600 USD' },
      { name: 'Hot-air balloon', detail: 'Serengeti, 2 guests, with breakfast', price: '1,198 USD' }
    ],
    included: [
      '8 nights, full board on safari',
      'Game drives with expert guides',
      'Flights inside Kenya and Tanzania',
      'Park and conservation fees',
      'All transfers'
    ],
    notIncluded: ['International flights', 'Visas', 'Travel insurance', 'Tips for guides and camp staff'],
    total: '22,598 USD',
    perPerson: '11,299 USD per person',
    deposit: '30% to confirm, balance 60 days before arrival',
    validUntil: 'Valid until 31 January 2027'
  }
  ],
  note: 'This is an example built in Traviosoft with invented data.'
};

export const demo: SiteContent['demo'] = {
  metaTitle: 'Book a demo | Traviosoft',
  metaDescription:
    'A 30-minute call: a sample trip in Traviosoft from request to invoice, then pricing and questions.',
  title: 'Book a demo',
  lead: 'A 30-minute call. We go through a sample trip in Traviosoft, from the first request to the final invoice.',
  agendaTitle: 'The call',
  agenda: [
    { mins: '5', title: 'Your agency', body: 'Team size, what you sell and the tools you use today.' },
    { mins: '15', title: 'A sample trip', body: 'The request, the quote with margin, the order, the itinerary, the payment and the invoice. A couple’s trip, an incentive group or a safari.' },
    { mins: '10', title: 'Pricing and questions', body: 'The plan for your team, importing your data, and your questions.' }
  ],
  bringTitle: 'Who to invite',
  bring: [
    'People on your team who quote or book',
    'Whoever handles payments and invoices'
  ],
  afterTitle: 'After the call',
  after: [
    'A short summary by email',
    'The price for your team, in writing',
    'A follow-up call if you ask for one'
  ],
  bookTitle: 'Ask for a time',
  bookBody: 'Booking is by email for now. Send your agency name, team size and a few days that suit you, and we reply with a time.',
  emailLabel: 'Write to',
  email: 'hola@traviosoft.com',
  faq: [
    {
      q: 'Is there a free trial?',
      a: ['No. There is a demo, and three example trips on this site.']
    },
    {
      q: 'Who runs the demo?',
      a: ['Someone from the Traviosoft team, in Spanish, English or French.']
    },
    {
      q: 'Do I need to prepare anything?',
      a: ['No.']
    },
    {
      q: 'Will you ask for my data?',
      a: ['No. The demo uses a sample trip with invented data.']
    }
  ]
};

export const switching: SiteContent['switching'] = {
  metaTitle: 'Switching from Excel to Traviosoft | Traviosoft',
  metaDescription:
    'How to move from Excel, Word and WhatsApp in the middle of a season: what we import, what you check, and how to keep running trips while you start new ones.',
  title: 'Switching to Traviosoft',
  lead: 'The switch happens in steps, alongside the trips you are running.',
  timelineTitle: 'How it goes',
  timeline: [
    {
      when: 'Day 1',
      title: 'You send us your files',
      body: 'Your rates, clients, suppliers and open trips, in spreadsheets or as an export from another tool.'
    },
    {
      when: 'Week 1',
      title: 'We import, you check',
      body: 'We load everything into your agency’s space. You open it, look at a few products and a few clients, and tell us what to adjust.'
    },
    {
      when: 'Week 2',
      title: 'Your first real quote',
      body: 'We set up your margin, VAT and commission rules and your brand. You build a real quote from your own rates. We are on email if you get stuck.'
    },
    {
      when: 'Live',
      title: 'New requests go in the app',
      body: 'From then on, every new request starts in Traviosoft. Trips already running finish the way they started.'
    }
  ],
  importTitle: 'What comes over',
  importHead: ['What', 'From', 'How'],
  importRows: [
    { what: 'Catalogue, products and rates', from: 'Spreadsheets', how: 'We import it. You check a sample.' },
    { what: 'Clients', from: 'Spreadsheets, your email contacts', how: 'We import it. Duplicates are merged with you.' },
    { what: 'Suppliers and contacts', from: 'Spreadsheets', how: 'We import it. You check the contacts you use most.' },
    { what: 'Open trips', from: 'Excel, Word, another tool’s export', how: 'We import the ones you choose. You check them one by one.' }
  ],
  seasonTitle: 'Will it disrupt my season?',
  seasonBody: [
    'New requests go into Traviosoft from the day you are live. Trips already running finish the way they started.',
    'Open trips are moved only if you want them moved, and usually the ones that are far away. A trip that leaves next week stays where it is.',
    'In high season, we import first and go live in a quieter week.'
  ],
  faq: [
    {
      q: 'Can you import from my current tool?',
      a: ['If it exports to a spreadsheet, yes. Send us a sample export and we tell you what comes over.']
    },
    {
      q: 'What does it cost?',
      a: [`Setup and data import are free with yearly billing. With monthly billing, they are ${PRICES.setupMonthly} EUR once.`]
    },
    {
      q: 'What happens to my old files?',
      a: ['They stay exactly where they are. We import copies.']
    },
    {
      q: 'Do I need to move every old trip?',
      a: ['Move the open ones you want and keep the rest in your archive. Past clients are worth importing; for past trips, your archive is enough.']
    },
    {
      q: 'What if the import is wrong?',
      a: ['You check a sample before going live, and we adjust it with you. Anything you spot later, you correct in the app or tell us.']
    }
  ]
};

export const faqPage: SiteContent['faqPage'] = {
  metaTitle: 'Frequently asked questions | Traviosoft',
  metaDescription:
    'What Traviosoft does, what it costs, where your data is hosted and how switching from Excel works.',
  title: 'Frequently asked questions',
  lead: 'If your question is not here, write to hola@traviosoft.com.',
  groups: [
    {
      title: 'Product',
      items: [
        {
          q: 'What is Traviosoft?',
          a: ['Web management software for tailor-made travel agencies and DMCs. It covers the request, the quote, the order and bookings, the client itinerary, payments and invoices.']
        },
        {
          q: 'Can several suppliers sell the same hotel or service?',
          a: ['Yes. A product can have several suppliers, each with its own rates. You choose the supplier per trip.']
        },
        {
          q: 'What does my client see?',
          a: ['A clean quote with client-facing names, prices per person, what is included and not included, in their language and with your brand. Your net rates and margins stay private to your team.']
        },
        {
          q: 'Can my guides and drivers see the trip?',
          a: ['They receive a service sheet by email with dates, times, names and the meeting point.']
        },
        {
          q: 'Do you work with DMCs that sell through partner agencies?',
          a: ['Yes. Quote the partner agency, keep their client on the trip, add the partner’s commission and settle it from a statement per period.']
        },
        {
          q: 'Is there an AI assistant?',
          a: ['Yes, on Premium. Ask it what needs you today, have it prepare a quote from your catalogue or turn a supplier price list into catalogue prices; every change waits for your OK. You can also connect the AI assistant you already use to your Traviosoft data.']
        }
      ]
    },
    {
      title: 'Price and billing',
      items: [
        {
          q: 'How much does it cost?',
          a: [`Classic is ${PRICES.classic.yearly} EUR a month and Premium ${PRICES.premium.yearly} EUR a month, billed yearly, with ${PRICES.usersIncluded} users included. Each extra user is ${PRICES.extraUser.yearly} EUR a month. VAT is not included.`]
        },
        {
          q: 'Can I pay monthly?',
          a: [`Yes. Monthly billing is ${PRICES.classic.monthly} EUR for Classic and ${PRICES.premium.monthly} EUR for Premium. Setup is ${PRICES.setupMonthly} EUR once with monthly billing, and free with yearly billing.`]
        },
        {
          q: 'Is there a free trial?',
          a: ['No. There is a 30-minute demo, and three example trips on this site that open without signing up.']
        }
      ]
    },
    {
      title: 'Data and security',
      items: [
        {
          q: 'Where is my data?',
          a: ['In a separate space for your agency, hosted in the European Union, kept apart from every other agency.']
        },
        {
          q: 'Can I leave with my data?',
          a: ['Yes. You get your data back in standard formats.']
        },
        {
          q: 'Who can see what?',
          a: ['On Classic, every user sees the agency’s trips. On Premium, each team and each person can have their own clients, trips and rights.']
        }
      ]
    },
    {
      title: 'Switching',
      items: [
        {
          q: 'Can I import my current catalogue?',
          a: ['Yes. We import your products, prices and suppliers from your spreadsheets during setup. Setup and import are free with yearly billing.']
        },
        {
          q: 'Will switching disrupt my season?',
          a: ['It runs alongside it. Start with new requests in Traviosoft and finish the running trips the way they started.']
        },
        {
          q: 'Does it follow my country’s rules?',
          a: ['Invoice numbering per company and credit notes work everywhere. Tax schemes and e-invoicing are switched on per country in the settings. For other countries, ask us what is covered.']
        }
      ]
    }
  ]
};

export const about: SiteContent['about'] = {
  metaTitle: 'About Traviosoft',
  metaDescription:
    'Traviosoft started inside a tailor-made travel agency in Barcelona that ran on Excel, Word and WhatsApp. Support by email from the people who build the product, data hosted in the EU.',
  title: 'About Traviosoft',
  lead: 'Traviosoft started inside a tailor-made travel agency in Barcelona. It is a management system for tailor-made agencies and DMCs.',
  blocks: [
    {
      title: 'Where it comes from',
      body: [
        'The agency ran on Excel for the rates, Word for the quotes and WhatsApp for everything else. In a busy week, every deposit and every hotel confirmation depended on someone remembering it.',
        'The first version was built there, on the agency’s own trips.'
      ]
    },
    {
      title: 'What it does',
      body: [
        'Traviosoft covers the whole trip: requests, quotes priced service by service from net rates, bookings with several suppliers, documents in the client’s language, payments and invoices.'
      ]
    },
    {
      title: 'Support',
      body: [
        'Support is by email, in Spanish, English and French, from the people who build the product.'
      ]
    },
    {
      title: 'Your data',
      body: [
        'Each agency has its own separate space, hosted in the European Union. You can export your data at any time.'
      ]
    }
  ],
  facts: [
    { k: 'Origin', v: 'A tailor-made agency in Barcelona' },
    { k: 'For', v: 'Tailor-made agencies and DMCs' },
    { k: 'Support', v: 'By email, in Spanish, English and French' },
    { k: 'Data', v: 'A private space per agency, hosted in the EU' }
  ]
};

export const resources: SiteContent['resources'] = {
  metaTitle: 'Resources for tailor-made travel agencies | Traviosoft',
  metaDescription:
    'Comparisons, guides, a glossary and an example trip for tailor-made agencies and DMCs choosing software. Plain language, no sign-up needed.',
  title: 'Resources',
  lead: 'Comparisons, guides, a glossary and example trips.',
  groups: [
    { kind: 'best', title: 'Best software comparison', body: 'The tools tailor-made agencies and DMCs use, side by side, and who each one suits.' },
    { kind: 'compare', title: 'Compare pages', body: 'Traviosoft next to other tools.' },
    { kind: 'guide', title: 'Guides', body: 'Practical notes on quoting, booking and invoicing a tailor-made trip.' },
    { kind: 'glossary', title: 'Glossary', body: 'The travel-agency and software terms, in a line each.' },
    { kind: 'example', title: 'Example trips', body: 'A couple in Andalucía, an incentive group in Porto and a safari in Kenya and Tanzania, as your client sees them.' }
  ],
  glossaryTitle: 'Glossary',
  glossaryMeta:
    'Plain definitions of the terms tailor-made travel agencies and DMCs use: net rate, commission, service sheet, rooming list, deposit and more.',
  glossaryLead: 'The words you use every day, and the ones software uses, in a line each.'
};
