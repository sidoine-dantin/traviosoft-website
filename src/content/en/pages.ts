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
    `Setup of your brand, documents and pricing rules, free with yearly billing (${PRICES.setupMonthly} EUR once with monthly)`,
    `Import of your spreadsheets or your current tool’s export, free with yearly billing (${PRICES.importMonthly} EUR once with monthly)`,
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
      a: ['Yearly or monthly, your choice. Yearly costs less per month and includes setup and import. Monthly can be stopped at the end of any month.']
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
      a: [`We set up your brand, your documents and your margin, VAT and commission rules, and your team’s access. It is free with yearly billing and ${PRICES.setupMonthly} EUR once with monthly billing.`]
    },
    {
      q: 'What does the import include?',
      a: [`Your catalogue with its prices, your clients and your suppliers, from spreadsheets or an export of your current tool, with one row per item and the same columns all the way down. It is free with yearly billing and ${PRICES.importMonthly} EUR once with monthly billing.`, 'Word documents, PDFs, emails, trips in progress and lists that need sorting first are priced on quote, once we have seen a sample.']
    }
  ]
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
      a: ['No. There is a 30-minute demo.']
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
  importHead: ['What', 'From', 'Price'],
  importRows: [
    { what: 'Catalogue, products and rates', from: 'Spreadsheets, another tool’s export', how: 'Included in the import' },
    { what: 'Clients', from: 'Spreadsheets, another tool’s export', how: 'Included in the import' },
    { what: 'Suppliers and contacts', from: 'Spreadsheets, another tool’s export', how: 'Included in the import' },
    { what: 'Trips in progress and other files', from: 'Word, PDF, emails, mixed files', how: 'On quote, after a sample' }
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
      a: [`Setup and the import of your spreadsheets are free with yearly billing. With monthly billing, setup is ${PRICES.setupMonthly} EUR once and the import ${PRICES.importMonthly} EUR once.`, 'The import price covers lists with one row per item and the same columns all the way down. Word documents, PDFs, trips in progress and lists that need sorting first are priced on quote, once we have seen a sample.']
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
          a: [`Yes. Monthly billing is ${PRICES.classic.monthly} EUR for Classic and ${PRICES.premium.monthly} EUR for Premium. Setup is ${PRICES.setupMonthly} EUR once and the import of your spreadsheets ${PRICES.importMonthly} EUR once with monthly billing, and both are free with yearly billing.`]
        },
        {
          q: 'Is there a free trial?',
          a: ['No. There is a 30-minute demo.']
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
    'Comparisons, guides and a glossary for tailor-made agencies and DMCs choosing software. Plain language, no sign-up needed.',
  title: 'Resources',
  lead: 'Comparisons, guides and a glossary.',
  groups: [
    { kind: 'best', title: 'Best software comparison', body: 'The tools tailor-made agencies and DMCs use, side by side, and who each one suits.' },
    { kind: 'compare', title: 'Compare pages', body: 'Traviosoft next to other tools.' },
    { kind: 'guide', title: 'Guides', body: 'Practical notes on quoting, booking and invoicing a tailor-made trip.' },
    { kind: 'glossary', title: 'Glossary', body: 'The travel-agency and software terms, in a line each.' },
  ],
  glossaryTitle: 'Glossary',
  glossaryMeta:
    'Plain definitions of the terms tailor-made travel agencies and DMCs use: net rate, commission, service sheet, rooming list, deposit and more.',
  glossaryLead: 'The words you use every day, and the ones software uses, in a line each.'
};
