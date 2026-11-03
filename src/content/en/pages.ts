import type { SiteContent } from '../types';

export const pricing: SiteContent['pricing'] = {
  metaTitle: 'Pricing: from 190 EUR a month, every feature | Traviosoft',
  metaDescription:
    'Three plans that differ only by number of users. Every feature in every plan. From 190 EUR a month for 3 users, setup and data import free with yearly billing.',
  title: 'Every feature, one price.',
  lead: 'The plans differ by the number of users, nothing else. A small agency never has to wonder what it is missing.',
  yearly: 'Yearly',
  monthly: 'Monthly',
  yearlyNote: 'Yearly billing is two months free. Prices are per month, VAT excluded.',
  plans: [
    {
      id: 'small',
      name: 'Small',
      users: 'Up to 3 users',
      yearly: '190',
      monthly: '228',
      priceNote: 'EUR per month, VAT excluded. Billed yearly or monthly.',
      lines: [
        { text: 'Requests, catalogue, quotes and proposals' },
        { text: 'Orders, suppliers and client itineraries' },
        { text: 'Payments, invoices and dashboard' },
        { text: 'Your own database, hosted in the EU' },
        { text: 'Support by email in Spanish, English and French' },
        { text: 'AI assistant: add-on, 29 EUR a month', later: true }
      ]
    },
    {
      id: 'team',
      name: 'Team',
      users: 'Up to 5 users',
      yearly: '250',
      monthly: '300',
      priceNote: 'EUR per month, VAT excluded. Billed yearly or monthly.',
      hot: true,
      lines: [
        { text: 'Requests, catalogue, quotes and proposals' },
        { text: 'Orders, suppliers and client itineraries' },
        { text: 'Payments, invoices and dashboard' },
        { text: 'Your own database, hosted in the EU' },
        { text: 'Support by email in Spanish, English and French' },
        { text: 'AI assistant included', later: true }
      ]
    },
    {
      id: 'larger',
      name: 'Larger',
      users: '6 users and more',
      yearly: 'From 250',
      monthly: 'From 300',
      priceNote:
        'EUR per month, VAT excluded. Yearly: 250 + 40 per extra user. Monthly: 300 + 48 per extra user.',
      lines: [
        { text: 'Requests, catalogue, quotes and proposals' },
        { text: 'Orders, suppliers and client itineraries' },
        { text: 'Payments, invoices and dashboard' },
        { text: 'Your own database, hosted in the EU' },
        { text: 'Support by email in Spanish, English and French' },
        { text: 'AI assistant included', later: true }
      ]
    }
  ],
  compareTitle: 'For reference',
  compareBody:
    'Ezus for 3 users is 75 EUR per user per month (225 EUR), plus a mandatory onboarding pack of 1,990 EUR. Source: ezus.io/pricing, November 2026.',
  includedTitle: 'Every plan includes',
  included: [
    'Every feature of the app, with no locked modules',
    'Requests, catalogue with season prices, quotes with your margin, VAT and commission',
    'Proposal page and client itinerary in your client’s language and with your brand',
    'Orders, supplier emails filed on the trip, service sheets, calendar',
    'Payment schedule, payment links, deposit and final invoices, credit notes',
    'Dashboard with sales, trips, money in and money out',
    'Your own isolated database, hosted in the European Union',
    'API and MCP access to your data',
    'Setup and data import: free with yearly billing, 390 EUR once with monthly billing'
  ],
  faq: [
    {
      q: 'How is it billed?',
      a: ['Yearly or monthly, your choice. Yearly works out at two months free. Monthly is 20% more per month and can be stopped any month.']
    },
    {
      q: 'Are prices with or without VAT?',
      a: ['Without. VAT is added to the invoice according to your country and your company status.']
    },
    {
      q: 'Can I cancel?',
      a: ['Yes. Monthly plans stop at the end of the month you cancel. Yearly plans run to the end of the paid year and are not renewed.']
    },
    {
      q: 'What if I add a user?',
      a: ['Up to 3 users you are on Small, up to 5 on Team. From the sixth user on Larger, each extra user costs 40 EUR a month with yearly billing, 48 EUR with monthly.']
    },
    {
      q: 'Monthly or yearly: which one?',
      a: ['Yearly is cheaper and the setup is free. Monthly is more flexible and has a one-off setup fee of 390 EUR. If you are not sure, start monthly and switch to yearly later.']
    },
    {
      q: 'Can I take my data when I leave?',
      a: ['Yes. You get your data back in standard formats. It is your data, in your own database.']
    },
    {
      q: 'What does setup include?',
      a: ['We import your catalogue, clients, suppliers and open trips from Excel or CSV, and set up your brand and your pricing rules. It is free with yearly billing and 390 EUR once with monthly billing.']
    }
  ]
};

export const example: SiteContent['example'] = {
  metaTitle: 'Example trip: Andalucía, 8 days | Traviosoft',
  metaDescription:
    'Open an example trip built in Traviosoft: the day-by-day itinerary and the quote as a traveller sees them. Invented data, no sign-up.',
  title: 'What your client receives.',
  lead: 'A sample trip, built in Traviosoft. Open the itinerary and the quote, as a traveller sees them.',
  tabs: { itinerary: 'Itinerary', quote: 'Quote' },
  trip: {
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
  note: 'This is an example built in Traviosoft with invented data.'
};

export const demo: SiteContent['demo'] = {
  metaTitle: 'Demo: 30 minutes, on a trip like yours | Traviosoft',
  metaDescription:
    'A 30-minute call on one of your own trips, from request to invoice. You get the price in writing afterwards, and no follow-up calls unless you ask.',
  title: '30 minutes, on a trip like yours.',
  lead: 'No slides. We take one of your trips and run it through the app, from the first message to the final invoice.',
  agendaTitle: 'How the 30 minutes go',
  agenda: [
    { mins: '5', title: 'Your agency', body: 'How many of you, what you sell, what you use today. So the rest fits your case.' },
    { mins: '15', title: 'One of your trips, from request to invoice', body: 'The request, the quote with your margin, the order, the itinerary, the payment and the invoice. On a trip like the ones you sell.' },
    { mins: '10', title: 'Price, switching and questions', body: 'What it costs for your team, how your Excel files come over, and whatever you want to ask.' }
  ],
  bringTitle: 'What to bring',
  bring: [
    'A recent request, as it arrived (an email is fine)',
    'Your rates file, if you want to see it imported',
    'Anyone on your team who quotes or books'
  ],
  afterTitle: 'What happens after',
  after: [
    'A written summary by email: what we saw and what we agreed',
    'The price for your team, in writing',
    'No follow-up calls unless you ask for one'
  ],
  bookTitle: 'Ask for a time',
  bookBody: 'For now, booking is done by email. Tell us your agency, your team size and a few days that suit you. We answer with a time.',
  emailLabel: 'Write to',
  email: 'hola@traviosoft.com',
  faq: [
    {
      q: 'Is there a free trial?',
      a: ['No. There is a demo, and the example trip on this site. We would rather show you your own trip than leave you alone with an empty account.']
    },
    {
      q: 'Who runs the demo?',
      a: ['Someone from the Traviosoft team, in Spanish, English or French. It is a call, not a recorded video.']
    },
    {
      q: 'Do I need to prepare anything?',
      a: ['No. A recent request helps, and so does your rates file, but the demo works without them.']
    },
    {
      q: 'Will you share my data?',
      a: ['No. What you show us stays between us. Real client data is not needed, you can change names.']
    }
  ]
};

export const switching: SiteContent['switching'] = {
  metaTitle: 'Switching from Excel to Traviosoft | Traviosoft',
  metaDescription:
    'How to move from Excel, Word and WhatsApp without losing a season: what we import, what you check, and how to keep running trips while you start new ones.',
  title: 'Leaving Excel, without losing a season.',
  lead: 'You do not switch off one system and switch on another. You move in steps, and the trips you are running keep going.',
  timelineTitle: 'How it goes',
  timeline: [
    {
      when: 'Day 1',
      title: 'You send us your files',
      body: 'Your rates, your client list, your suppliers, your open trips. Excel and CSV are fine, so is an export from another tool. Messy is fine too.'
    },
    {
      when: 'Week 1',
      title: 'We import, you check',
      body: 'We load everything into your own database. You open it, look at a few products and a few clients, and tell us what is off.'
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
    { what: 'Catalogue, products and rates', from: 'Excel, CSV', how: 'We import it. You check a sample.' },
    { what: 'Clients', from: 'Excel, CSV, your email contacts', how: 'We import it. Duplicates are merged with you.' },
    { what: 'Suppliers and contacts', from: 'Excel, CSV', how: 'We import it. You check the contacts you use most.' },
    { what: 'Open trips', from: 'Excel, Word, another tool’s export', how: 'We import the ones you choose. You check them one by one.' }
  ],
  seasonTitle: 'Will it disrupt my season?',
  seasonBody: [
    'Not if you do it in the right order. Start with new requests: they go into Traviosoft from the day you are live. Keep finishing the trips already running the old way, with the Excel and the Word you know.',
    'Open trips are moved only if you want them moved, and usually the ones that are far away. A trip that leaves next week stays where it is.',
    'If you are in the middle of high season, say so. We can import first and wait to go live until you have a quiet week.'
  ],
  faq: [
    {
      q: 'Can you import from my current tool?',
      a: ['If it can export to Excel or CSV, yes. Send us a sample export and we tell you what comes over and what does not.']
    },
    {
      q: 'What does it cost?',
      a: ['Setup and data import are free with yearly billing. With monthly billing, they are 390 EUR once.']
    },
    {
      q: 'Do I lose my old files?',
      a: ['No. We import copies. Your Excel and Word files stay exactly where they are.']
    },
    {
      q: 'Do I need to move every old trip?',
      a: ['No. Move the open ones you want, and leave the rest in your archive. Past clients are worth importing, past trips usually are not.']
    },
    {
      q: 'What if the import is wrong?',
      a: ['You check a sample before going live, and we fix what is off. Anything you spot later, you correct in the app or tell us.']
    }
  ]
};

export const faqPage: SiteContent['faqPage'] = {
  metaTitle: 'Frequently asked questions | Traviosoft',
  metaDescription:
    'Straight answers on what Traviosoft does, what it costs, where your data lives and how switching from Excel works. Written for agency owners.',
  title: 'Questions agencies ask.',
  lead: 'Short answers. If yours is not here, write to hola@traviosoft.com.',
  groups: [
    {
      title: 'Product',
      items: [
        {
          q: 'What is Traviosoft?',
          a: ['Web software for small tailor-made travel agencies and DMCs, from 1 to 15 people. It covers the request, the quote, the order and bookings, the client itinerary, payments and invoices.']
        },
        {
          q: 'Can several suppliers sell the same hotel or service?',
          a: ['Yes. A product can have several suppliers, each with its own rates. You choose the supplier per trip.']
        },
        {
          q: 'What does my client see?',
          a: ['A clean quote with client-facing names, prices per person, what is included and not included, in their language and with your brand. Your net rates and margins are never shown.']
        },
        {
          q: 'Can my guides and drivers see the trip?',
          a: ['They receive a service sheet with dates, times, names and the meeting point. They do not need an account.']
        },
        {
          q: 'Is there an AI assistant?',
          a: ['Not yet. It is coming: an assistant inside Traviosoft that prepares quotes and answers questions about your trips. You can already connect an AI tool of your choice through MCP access.']
        }
      ]
    },
    {
      title: 'Price and billing',
      items: [
        {
          q: 'How much does it cost?',
          a: ['From 190 EUR a month for up to 3 users, billed yearly. Team, for up to 5 users, is 250 EUR a month. Every feature is in every plan. VAT is not included.']
        },
        {
          q: 'Can I pay monthly?',
          a: ['Yes. Monthly billing is 228 EUR for Small and 300 EUR for Team. Setup is 390 EUR once with monthly billing, and free with yearly billing.']
        },
        {
          q: 'Is there a free trial?',
          a: ['No. There is a demo on one of your own trips, and an example trip on this site that you can open without signing up.']
        }
      ]
    },
    {
      title: 'Data and security',
      items: [
        {
          q: 'Where is my data?',
          a: ['In your own database, hosted in the European Union. It is a separate database for your agency, not a shared table with a filter.']
        },
        {
          q: 'Can I leave with my data?',
          a: ['Yes. You get your data back in standard formats.']
        },
        {
          q: 'Who can see what?',
          a: ['Every user of your agency sees the agency’s trips. Finer access per team and per person is coming.']
        }
      ]
    },
    {
      title: 'Switching',
      items: [
        {
          q: 'Can I import my current catalogue?',
          a: ['Yes. We import your products, prices and suppliers from Excel or CSV during setup. Setup and import are free with yearly billing.']
        },
        {
          q: 'Will switching disrupt my season?',
          a: ['It does not have to. Start with new requests in Traviosoft and finish the running trips the old way.']
        },
        {
          q: 'Does it follow my country’s rules?',
          a: ['Invoice numbering per company and credit notes work everywhere. Tax schemes and e-invoicing are switched on per country in the settings. Tell us your country and we will say plainly what is covered.']
        }
      ]
    }
  ]
};

export const about: SiteContent['about'] = {
  metaTitle: 'About Traviosoft: born inside a Barcelona agency',
  metaDescription:
    'Traviosoft started inside a tailor-made travel agency in Barcelona that ran on Excel, Word and WhatsApp. Small team, support by email, data hosted in the EU.',
  title: 'Built by an agency, for agencies.',
  lead: 'Traviosoft was born inside a tailor-made travel agency in Barcelona. It is made for the agencies that look like it.',
  blocks: [
    {
      title: 'Where it comes from',
      body: [
        'The agency ran on Excel for the rates, Word for the quotes and WhatsApp for everything else. It worked, until a busy week, when a deposit was missed or a hotel was not confirmed.',
        'So the tool was built there, on real trips, by people who had to send the quote that night.'
      ]
    },
    {
      title: 'Why we kept building',
      body: [
        'The software made for travel is either made for big operators or for tour sellers with fixed departures. Tailor-made agencies and DMCs of 1 to 15 people were left with a spreadsheet.',
        'We wanted one place for the whole trip, at a price a small agency can say yes to.'
      ]
    },
    {
      title: 'How we work',
      body: [
        'A small team. Support is by email, in Spanish, English and French, and you talk to the people who build the product.',
        'We tell you what is live and what is coming. Things that are not live yet carry a tag on this site.'
      ]
    },
    {
      title: 'Your data',
      body: [
        'Each agency has its own isolated database, hosted in the European Union. Your data is never mixed with another agency’s, and you can leave with it.'
      ]
    },
    {
      title: 'Honest about being young',
      body: [
        'Traviosoft is a young product. We do not have a long list of years in business, and we do not show you logos or reviews we cannot stand behind.',
        'What we have is a tool that runs real trips, and a team that answers its email.'
      ]
    }
  ],
  facts: [
    { k: 'Origin', v: 'A tailor-made agency in Barcelona' },
    { k: 'For', v: 'Tailor-made agencies and DMCs, 1 to 15 people' },
    { k: 'Support', v: 'By email, in Spanish, English and French' },
    { k: 'Data', v: 'Your own database, hosted in the EU' }
  ]
};

export const resources: SiteContent['resources'] = {
  metaTitle: 'Resources for tailor-made travel agencies | Traviosoft',
  metaDescription:
    'Comparisons, guides, a glossary and an example trip for tailor-made agencies and DMCs choosing software. Plain language, no sign-up needed.',
  title: 'Resources',
  lead: 'Things we wished we had found when we looked for software for an agency like ours.',
  groups: [
    { kind: 'best', title: 'Best software comparison', body: 'The tools tailor-made agencies and DMCs use, side by side, and who each one suits.' },
    { kind: 'compare', title: 'Compare pages', body: 'Traviosoft next to other tools, on what you pay and what you get.' },
    { kind: 'guide', title: 'Guides', body: 'Practical notes on quoting, booking and invoicing a tailor-made trip.' },
    { kind: 'glossary', title: 'Glossary', body: 'The travel-agency and software terms, in a line each.' },
    { kind: 'example', title: 'Example trip', body: 'An 8-day Andalucía trip, as your client would see the itinerary and the quote.' }
  ],
  glossaryTitle: 'Glossary',
  glossaryMeta:
    'Plain definitions of the terms tailor-made travel agencies and DMCs use: net rate, commission, service sheet, rooming list, deposit and more.',
  glossaryLead: 'The words you use every day, and the ones software uses, in a line each.'
};
