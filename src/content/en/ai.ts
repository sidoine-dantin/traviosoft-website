import type { AiText } from '../types';

/**
 * The AI assistant (the MCP connection of the app, apps/web/docs/MCP.md on dev).
 * Every claim here was checked against that document and the app code: changes from Claude,
 * ChatGPT and Mistral are asked in the AI app; deletions and changes from other AI apps wait in
 * Change review; the AI never does more than the person who connected it; included in both plans.
 */
export const ai: AiText = {
  page: {
    slug: 'ai-assistant',
    metaTitle: 'AI assistant: work in Traviosoft from Claude, ChatGPT or Mistral | Traviosoft',
    metaDescription:
      'Connect the AI assistant you already use to Traviosoft. Ask what needs doing, have a quote prepared from your catalog, record a booking or a payment, and approve each change. Included in both plans.',
    name: 'AI assistant',
    menuLine: 'Work in Traviosoft from Claude or ChatGPT',
    step: '5 of 5',
    heroTitle: 'Work in Traviosoft from your AI assistant',
    heroLead:
      'Connect Claude, ChatGPT or Mistral to your agency’s Traviosoft. Write what you need in a sentence, and it works on your real clients, prices and trips, with the rights you give it.',
    heroVisual: 'assistant',
    chapters: [
      {
        id: 'ask',
        kicker: 'Ask',
        title: 'Ask what needs doing',
        lead: 'Your assistant looks at your Traviosoft dashboard and tells you what is waiting for you today.',
        visual: 'dashboard',
        features: [
          { title: 'Your day in one question', body: ['Ask “What needs me today?” and get the new requests to answer, the quotes to follow up and the overdue payments, each with a link that opens it in Traviosoft.'] },
          { title: 'Questions about your trips and money', body: ['Which bookings are still waiting for the supplier? How much do clients owe? The answers come from your quotes, bookings and payments.'] },
          { title: 'Find anything', body: ['Look up a client, a quote, a supplier or a trip by name, reference, email or phone.'] }
        ]
      },
      {
        id: 'work',
        kicker: 'Do',
        title: 'Have the work done',
        lead: 'Write what you need in a sentence. The assistant does it in Traviosoft, the way you would in the app.',
        visual: 'quote',
        features: [
          { title: 'Quotes from your catalog', body: ['Ask for a quote for a client’s trip. The services come from your catalog, at the prices of the travel dates and with your margin, as if you had built the quote yourself.'] },
          { title: 'Bookings', body: ['Record a supplier’s confirmation and its reference, tick off a booking task or ask a supplier for availability.'] },
          { title: 'Clients and payments', body: ['Add a new client, set the payment dates of a quote or record a payment that has arrived.'] }
        ]
      },
      {
        id: 'approve',
        kicker: 'Approval',
        title: 'You approve each change',
        lead: 'The assistant reads on its own and asks you before it changes anything.',
        visual: 'confirm',
        features: [
          { title: 'A question before each change', body: ['Claude, ChatGPT and Mistral ask you in the chat before each change. The change is made once you allow it.'] },
          { title: 'Deletions approved in Traviosoft', body: ['If you allow deleting, each deletion waits in Traviosoft until you approve it there, and it is recorded under your name.'] },
          { title: 'Other AI apps', body: ['Not every other AI app asks before it acts, so their changes wait for your approval in Traviosoft.'] },
          { title: 'Every change in the history', body: ['What the assistant does appears in the activity history of Traviosoft, under the name of the person who connected it.'] }
        ]
      },
      {
        id: 'rights',
        kicker: 'Access',
        title: 'The same rights as the person',
        lead: 'The assistant can do what the person who connected it can do in Traviosoft, and nothing more.',
        visual: 'team',
        features: [
          { title: 'Who can connect', body: ['The administrator chooses who can connect an AI assistant, and whether people who join later can.'] },
          { title: 'Reading or changes', body: ['The administrator decides whether assistants may make changes or only read.'] },
          { title: 'Costs and margins', body: ['Purchase prices and margins reach the assistant only for people who see them in Traviosoft.'] },
          { title: 'Disconnect at any time', body: ['Disconnect from the AI app, or an administrator ends any connection from Traviosoft, with effect at once.'] }
        ]
      },
      {
        id: 'connect',
        kicker: 'Connect',
        title: 'Connecting your assistant',
        lead: 'Add Traviosoft as a connector in your AI app, sign in, and choose what it may do.',
        visual: 'connections',
        features: [
          { title: 'Claude, ChatGPT and Mistral', body: ['Add your agency’s Traviosoft address as a connector. Your AI app then sends you to Traviosoft to sign in.'] },
          { title: 'Read only, or read and make changes', body: ['When you sign in, you choose what your assistant may do, and whether it may also delete.'] },
          { title: 'Included in both plans', body: ['Connecting your AI assistant is part of Classic and Premium, for each person the administrator allows.'] }
        ]
      }
    ],
    faq: [
      { q: 'Which AI apps can I use?', a: ['Any AI app that can add an MCP connector, the open standard AI apps use to connect to other software. Claude, ChatGPT and Mistral ask you in the chat before every change, so their changes are made as soon as you allow them. With another app, Traviosoft cannot be sure it asks you first, so its changes wait for your approval in Traviosoft, in Change review.'] },
      { q: 'Does the assistant see all our data?', a: ['It sees exactly what the person who connected it is allowed to see in Traviosoft, under their role: the same clients, trips and teams, and purchase prices and margins only if their role shows them. When their role changes, what the assistant sees changes with it.'] },
      { q: 'Can it email a supplier?', a: ['Yes. It can send a booking request or ask a supplier for availability, once you allow it. Quotes and invoices go to clients from Traviosoft.'] },
      { q: 'Can it issue invoices?', a: ['It can look up invoices, follow what is paid and correct a draft. Issuing an invoice, though, is always done by a person in Traviosoft: the assistant cannot issue or cancel one, because an invoice number is a legal record.'] },
      { q: 'Is there also an assistant inside Traviosoft?', a: ['Yes, as an option on both plans, with usage limits. It works in the app itself, with no other AI app to connect.'] }
    ]
  },
  sim: {
    note: 'Try it on a sample agency: choose a message. The replies are a simulation, with no AI behind them.',
    chatTitle: 'Your AI assistant', connected: 'Traviosoft connected',
    greeting: 'What can I do for your agency today?', composer: 'Choose a message above',
    appSub: 'Your agency',
    allow: 'Allow', deny: 'Deny', allowedTag: 'Allowed', deniedTag: 'Denied',
    deniedReply: 'Understood. Nothing has changed in Traviosoft.',
    restart: 'Start again', more: 'Something else', working: 'Working in Traviosoft',
    nav: { dashboard: 'Dashboard', quotes: 'Quotes', bookings: 'Bookings', payments: 'Payments', review: 'Change review' },
    ui: {
      draft: 'Draft', sent: 'Sent', requested: 'Requested', confirmed: 'Confirmed', toBook: 'To book', late: 'Late', paid: 'Paid', due: 'Due',
      total: 'Total', margin: 'Your margin', schedule: 'Payment schedule', deposit: 'Deposit', balance: 'Balance',
      send: 'Send', approve: 'Approve', reviewEmpty: 'All changes reviewed', trashed: 'Approved. The quote is in the trash.', reference: 'Ref.',
      newRequests: 'New requests', toFollow: 'Quotes to follow up', latePayments: 'Late payments', bookingsLeft: 'Bookings to finish'
    },
    names: {
      irisTrip: 'Andalusia, 8 days', bianchiTrip: 'Seville and Granada, 6 days', madridTrip: 'Madrid and Toledo, 4 days',
      lindTrip: 'Mallorca, 5 days', weberTrip: 'Lisbon, 4 days',
      olabarriPay: 'Balance, weekend in Córdoba', martinPay: 'Deposit, Provence, 7 days',
      hotelSeville: 'Hotel in Seville', guideCordoba: 'Guide in Córdoba', hotelGranada: 'Hotel in Granada'
    },
    steps: {
      today: {
        say: 'What needs me today?',
        tools: ['Read your dashboard'],
        reply: 'Four things need you today:',
        rows: [
          { t: 'A new request to answer', s: 'Iris & Noah, Andalusia, 8 days from 3 May' },
          { t: 'A quote to follow up', s: 'Famiglia Bianchi, sent 9 days ago' },
          { t: 'Two late payments', s: '{2387} in all' },
          { t: 'Two bookings to finish', s: 'Famiglia Bianchi’s trip to Seville and Granada' }
        ],
        after: 'Where do you want to start?'
      },
      late: {
        say: 'Show the late payments',
        tools: ['Look up late payments'],
        reply: 'Two payments are late:',
        rows: [
          { t: 'Familia Olabarri, {1427}', s: 'Balance of the weekend in Córdoba, 5 days late' },
          { t: 'Sophie Martin, {960}', s: 'Deposit for Provence, 3 days late' }
        ],
        after: 'If one of them has paid, tell me and I’ll record it.'
      },
      payOlabarri: {
        say: 'Olabarri paid by transfer',
        reply: 'I’ll record it against the weekend in Córdoba.',
        ask: { action: 'Record a payment', rows: [{ t: 'Client', s: 'Familia Olabarri' }, { t: 'Amount', s: '{1427}' }, { t: 'Method', s: 'Bank transfer, today' }] },
        done: 'Recorded. Familia Olabarri has paid in full, and one late payment is left: Sophie Martin’s deposit.'
      },
      quote: { say: 'Create a quote', reply: 'Sure. Who is it for?' },
      quoteIris: {
        say: 'For Iris & Noah’s request',
        tools: ['Read the request from Iris & Noah', 'Search your catalog', 'Check prices for 3 to 10 May'],
        reply: 'Iris & Noah asked for 8 days in Andalusia from 3 May, for two. Here is what I would put in, from your catalog, at the prices for those dates:',
        rows: [
          { t: 'Airport transfer, Seville', s: '3 May' },
          { t: 'Hotel in Seville old town, 4 nights', s: '3 to 7 May' },
          { t: 'Private guide in Córdoba, half a day', s: '5 May' },
          { t: 'Hire car, 4 days', s: '7 to 10 May' },
          { t: 'Hotel in Granada, 3 nights', s: '7 to 10 May' },
          { t: 'Alhambra tickets with a guide', s: '8 May' }
        ],
        after: 'Total {2660} for two, with your margin of {450}.',
        ask: { action: 'Create a quote', rows: [{ t: 'Client', s: 'Iris & Noah' }, { t: 'Trip', s: 'Andalusia, 3 to 10 May' }, { t: 'Services', s: '6 from your catalog' }, { t: 'Total', s: '{2660}' }] },
        done: 'The quote is in Traviosoft as a draft, and I’ve opened it for you. Do you want to set the payment terms, or send it?'
      },
      quoteMadrid: { say: 'For a trip to Madrid', reply: 'Who is travelling, and when?' },
      madridBianchi: {
        say: 'Famiglia Bianchi, 4 people, 12 June',
        tools: ['Find Famiglia Bianchi', 'Search your catalog', 'Check prices for 12 to 15 June'],
        reply: 'For Famiglia Bianchi, 4 days in Madrid from 12 June, for four people, I would put in:',
        rows: [
          { t: 'Airport transfers, both ways', s: '12 and 15 June' },
          { t: 'Hotel in central Madrid, 3 nights, 2 rooms', s: '12 to 15 June' },
          { t: 'Prado Museum with a guide', s: '13 June' },
          { t: 'Day trip to Toledo with a guide', s: '14 June' }
        ],
        after: 'Total {2100} for four, with your margin of {380}.',
        ask: { action: 'Create a quote', rows: [{ t: 'Client', s: 'Famiglia Bianchi' }, { t: 'Trip', s: 'Madrid and Toledo, 12 to 15 June' }, { t: 'Services', s: '4 from your catalog' }, { t: 'Total', s: '{2100}' }] },
        done: 'The quote is in Traviosoft as a draft, and I’ve opened it for you. Do you want to set the payment terms, or send it?'
      },
      terms: { say: 'Set the payment terms', reply: 'Which terms do you want?' },
      terms30: {
        say: '30% now, the rest 30 days before',
        ask: { action: 'Set the payment schedule', rows: [{ t: 'Deposit, 30%', s: '{dep}, due today' }, { t: 'Balance', s: '{bal}, due {due}' }] },
        done: 'Done, the payment schedule is on the quote. Do you want to send it now?'
      },
      terms50: {
        say: 'Half now, half 30 days before',
        ask: { action: 'Set the payment schedule', rows: [{ t: 'Deposit, 50%', s: '{dep}, due today' }, { t: 'Balance', s: '{bal}, due {due}' }] },
        done: 'Done, the payment schedule is on the quote. Do you want to send it now?'
      },
      send: {
        say: 'Send it',
        reply: 'Quotes go to your clients from Traviosoft, so you see exactly what they receive. I’ve opened it for you: press Send when it looks right.'
      },
      bookings: {
        say: 'Check the latest bookings',
        tools: ['Look up bookings in progress'],
        reply: 'Here is where Famiglia Bianchi’s trip to Seville and Granada stands, 10 to 15 May:',
        rows: [
          { t: 'Hotel in Seville', s: 'Requested 4 days ago, no answer yet' },
          { t: 'Guide in Córdoba', s: 'Confirmed' },
          { t: 'Hotel in Granada', s: 'Not booked yet' }
        ],
        after: 'Any news from Seville, or shall I ask the hotel in Granada?'
      },
      confirmSeville: {
        say: 'Seville confirmed, ref. 48213',
        ask: { action: 'Update a booking', rows: [{ t: 'Booking', s: 'Hotel in Seville, 10 to 13 May' }, { t: 'Status', s: 'Confirmed' }, { t: 'Reference', s: '48213' }] },
        done: 'Done. The hotel in Seville is confirmed, with reference 48213.'
      },
      requestGranada: {
        say: 'Book the Granada hotel',
        tools: ['Find the hotel in your suppliers'],
        reply: 'I’ll send the booking request to the hotel by email, from Traviosoft.',
        ask: { action: 'Send a booking request', rows: [{ t: 'To', s: 'Hotel in Granada' }, { t: 'Dates', s: '13 to 15 May, 2 nights' }, { t: 'Rooms', s: '2 double rooms, Famiglia Bianchi' }] },
        done: 'Sent. Tell me when the hotel answers, and I’ll record its confirmation.'
      },
      remove: { say: 'Delete a quote', tools: ['Look up your draft quotes'], reply: 'Which one? These two are still drafts.' },
      delLind: {
        say: 'Anna Lind, Mallorca',
        ask: { action: 'Delete a quote', rows: [{ t: 'Quote', s: 'Anna Lind, Mallorca, 5 days' }, { t: 'Total', s: '{1980}' }, { t: 'Status', s: 'Draft' }] },
        done: 'The deletion now waits for your approval in Traviosoft, in Change review. Nothing is deleted until you approve it there.'
      },
      delWeber: {
        say: 'Familie Weber, Lisbon',
        ask: { action: 'Delete a quote', rows: [{ t: 'Quote', s: 'Familie Weber, Lisbon, 4 days' }, { t: 'Total', s: '{1450}' }, { t: 'Status', s: 'Draft' }] },
        done: 'The deletion now waits for your approval in Traviosoft, in Change review. Nothing is deleted until you approve it there.'
      }
    }
  }
};
