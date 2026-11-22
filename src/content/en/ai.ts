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
          { title: 'Other AI apps', body: ['Changes from any other AI app wait in Traviosoft for your approval.'] },
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
      { q: 'Which AI apps can I use?', a: ['Claude, ChatGPT and Mistral, in a version of the app that lets you add your own connectors. Other AI apps that can add connectors work too, and their changes wait in Traviosoft for your approval.'] },
      { q: 'Does the assistant see all our data?', a: ['It sees what the person who connected it sees in Traviosoft.'] },
      { q: 'Can it email a supplier?', a: ['Yes. It can send a booking request or ask a supplier for availability, once you allow it. Quotes and invoices go to clients from Traviosoft.'] },
      { q: 'Can it issue invoices?', a: ['Invoices are issued in Traviosoft, by a person. The assistant can look them up, follow what is paid and correct a draft.'] },
      { q: 'Is there also an assistant inside Traviosoft?', a: ['Yes, as an option on both plans, with usage limits. It works in the app itself and asks for your approval before each change.'] }
    ]
  },
  home: {
    title: 'Work in Traviosoft from your AI assistant',
    body: 'Connect Claude, ChatGPT or Mistral. Ask what needs doing today, have a quote prepared from your catalog or record a supplier’s confirmation. Each change is made once you allow it.',
    link: 'See the AI assistant'
  },
  hero: {
    ask: 'How much do our clients owe us?',
    answer: '{owed} on accepted quotes, and {overdue} of it is overdue.'
  },
  sim: {
    title: 'Try it with a sample agency',
    lead: 'Send one of the messages below. The answers are a simulation on sample data, and the Traviosoft side shows what changes.',
    chatTitle: 'Your AI assistant', chatSub: 'Connected to Traviosoft',
    appTitle: 'Traviosoft', appSub: 'Your agency',
    pick: 'Send a message', restart: 'Start again', allow: 'Allow', deny: 'Deny',
    allowedTag: 'Allowed', deniedTag: 'Denied',
    denied: 'Understood. Traviosoft stays as it is.', thinking: 'Working in Traviosoft',
    quotes: 'Quotes', bookings: 'Bookings · Famiglia Bianchi', review: 'Change review', reviewEmpty: 'All changes reviewed', approve: 'Approve',
    draft: 'Draft', sent: 'Sent', requested: 'Requested', confirmed: 'Confirmed',
    bianchiTrip: 'Seville and Granada, 6 days', olabarriTrip: 'A weekend in Córdoba', irisTrip: 'Andalucía, 8 days',
    hotelSeville: 'Hotel in Seville', guideCordoba: 'Guide in Córdoba', hotelGranada: 'Hotel in Granada',
    today: {
      prompt: 'What needs me today?',
      answer: 'Three things are waiting for you:',
      rows: [
        { t: 'A new request to answer', s: 'Iris & Noah, Andalucía, 8 days' },
        { t: 'A quote to follow up', s: 'Famiglia Bianchi, sent 9 days ago' },
        { t: 'A booking waiting for the supplier', s: 'Hotel in Seville, Famiglia Bianchi' }
      ]
    },
    quote: {
      prompt: 'Prepare a quote for Iris & Noah, Andalucía, 8 days, from 3 May',
      askTitle: 'Create a quote in Traviosoft?',
      askSub: 'Iris & Noah · Andalucía, 8 days · 6 services from your catalog',
      done: 'The quote is in Traviosoft as a draft: {total}, with your margin of {margin}.'
    },
    booking: {
      prompt: 'The hotel in Seville confirmed the Bianchi booking, reference 48213',
      askTitle: 'Update a booking in Traviosoft?',
      askSub: 'Hotel in Seville: confirmed, reference 48213',
      done: 'Done. The hotel in Seville is confirmed, with reference 48213.'
    },
    remove: {
      prompt: 'Delete the Olabarri quote, they chose another date',
      askTitle: 'Delete a quote in Traviosoft?',
      askSub: 'Familia Olabarri · A weekend in Córdoba',
      queued: 'The deletion now waits for your approval in Traviosoft, in Change review.',
      reviewItem: 'Delete the quote of Familia Olabarri',
      approved: 'Approved in Traviosoft. The quote is in the trash.'
    }
  }
};
