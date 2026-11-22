import type { AiText } from '../types';

/** L’assistente AI. Fonte: en/ai.ts, verificata con fr/ai.ts. Parole dell’app: apps/web/messages/it.json. */
export const ai: AiText = {
  page: {
    slug: 'ai-assistant',
    metaTitle: 'Assistente AI: lavora in Traviosoft da Claude, ChatGPT o Mistral | Traviosoft',
    metaDescription:
      'Collega a Traviosoft l’assistente AI che usi già. Chiedi cosa ti aspetta, fai preparare un preventivo dal tuo catalogo, registra una prenotazione o un pagamento e approva ogni modifica. Incluso in entrambi i piani.',
    name: 'Assistente AI',
    menuLine: 'Lavora in Traviosoft da Claude o ChatGPT',
    step: '5 di 5',
    heroTitle: 'Lavora in Traviosoft dal tuo assistente AI',
    heroLead:
      'Collega Claude, ChatGPT o Mistral al Traviosoft della tua agenzia. Scrivi ciò che ti serve in una frase: lavora sui tuoi clienti, prezzi e viaggi reali, con i diritti che gli dai.',
    heroVisual: 'assistant',
    chapters: [
      {
        id: 'ask',
        kicker: 'Chiedere',
        title: 'Chiedi cosa ti aspetta',
        lead: 'Il tuo assistente guarda la tua dashboard di Traviosoft e ti dice cosa ti aspetta oggi.',
        visual: 'dashboard',
        features: [
          { title: 'La tua giornata in una domanda', body: ['Chiedi «Cosa mi aspetta oggi?» e ricevi le nuove richieste a cui rispondere, i preventivi da sollecitare e i pagamenti scaduti, ognuno con un link che lo apre in Traviosoft.'] },
          { title: 'I tuoi viaggi e i tuoi soldi', body: ['Quali prenotazioni aspettano ancora il fornitore? Quanto ti devono i clienti? Le risposte vengono dai tuoi preventivi, prenotazioni e pagamenti.'] },
          { title: 'Trova tutto', body: ['Cerca un cliente, un preventivo, un fornitore o un viaggio per nome, riferimento, email o telefono.'] }
        ]
      },
      {
        id: 'work',
        kicker: 'Fare',
        title: 'Fai fare il lavoro',
        lead: 'Scrivi ciò che ti serve in una frase. L’assistente lo fa in Traviosoft, come lo faresti tu nell’app.',
        visual: 'quote',
        features: [
          { title: 'Preventivi dal tuo catalogo', body: ['Chiedi un preventivo per il viaggio di un cliente. I servizi vengono dal tuo catalogo, ai prezzi delle date del viaggio e con il tuo margine, come se avessi fatto tu il preventivo.'] },
          { title: 'Prenotazioni', body: ['Registra la conferma di un fornitore e il suo riferimento, spunta un’attività di prenotazione o chiedi una disponibilità a un fornitore.'] },
          { title: 'Clienti e pagamenti', body: ['Aggiungi un nuovo cliente, fissa le date di pagamento di un preventivo o registra un pagamento arrivato.'] }
        ]
      },
      {
        id: 'approve',
        kicker: 'Approvazione',
        title: 'Approvi ogni modifica',
        lead: 'L’assistente consulta da solo e ti chiede prima di modificare qualsiasi cosa.',
        visual: 'confirm',
        features: [
          { title: 'Una domanda prima di ogni modifica', body: ['Claude, ChatGPT e Mistral ti chiedono nella chat prima di ogni modifica. La modifica è fatta appena la consenti.'] },
          { title: 'Eliminazioni approvate in Traviosoft', body: ['Se consenti l’eliminazione, ogni eliminazione attende in Traviosoft finché non la approvi lì, ed è registrata a tuo nome.'] },
          { title: 'Altre app di IA', body: ['Le modifiche di qualsiasi altra app di IA attendono la tua approvazione in Traviosoft.'] },
          { title: 'Ogni modifica nella cronologia', body: ['Ciò che fa l’assistente compare nella cronologia attività di Traviosoft, a nome della persona che lo ha collegato.'] }
        ]
      },
      {
        id: 'rights',
        kicker: 'Accesso',
        title: 'I diritti della persona',
        lead: 'L’assistente può fare ciò che la persona che lo ha collegato può fare in Traviosoft, e niente di più.',
        visual: 'team',
        features: [
          { title: 'Chi può collegarlo', body: ['L’amministratore sceglie chi può collegare un assistente AI, e se possono farlo anche le persone che arrivano dopo.'] },
          { title: 'Consultare o modificare', body: ['L’amministratore decide se gli assistenti possono apportare modifiche o solo consultare.'] },
          { title: 'Costi e margini', body: ['I prezzi di acquisto e i margini arrivano all’assistente solo per le persone che li vedono in Traviosoft.'] },
          { title: 'Scollega quando vuoi', body: ['Scollega dall’app di IA, oppure un amministratore chiude qualsiasi collegamento da Traviosoft, subito.'] }
        ]
      },
      {
        id: 'connect',
        kicker: 'Collegamento',
        title: 'Collegare il tuo assistente',
        lead: 'Aggiungi Traviosoft come connettore nella tua app di IA, accedi e scegli cosa può fare.',
        visual: 'connections',
        features: [
          { title: 'Claude, ChatGPT e Mistral', body: ['Aggiungi l’indirizzo Traviosoft della tua agenzia come connettore. La tua app di IA ti porta poi su Traviosoft per accedere.'] },
          { title: 'Solo lettura, o leggere e modificare', body: ['Quando accedi, scegli cosa può fare il tuo assistente, e se può anche eliminare.'] },
          { title: 'Incluso in entrambi i piani', body: ['Collegare il tuo assistente AI fa parte di Classic e Premium, per ogni persona che l’amministratore autorizza.'] }
        ]
      }
    ],
    faq: [
      { q: 'Quali app di IA posso usare?', a: ['Claude, ChatGPT e Mistral, in una versione dell’app che permette di aggiungere i propri connettori. Funzionano anche altre app di IA che possono aggiungere connettori, e le loro modifiche attendono la tua approvazione in Traviosoft.'] },
      { q: 'L’assistente vede tutti i nostri dati?', a: ['Vede ciò che vede in Traviosoft la persona che lo ha collegato.'] },
      { q: 'Può scrivere a un fornitore?', a: ['Sì. Può inviare una richiesta di prenotazione o chiedere una disponibilità a un fornitore, quando lo consenti. Preventivi e fatture arrivano ai clienti da Traviosoft.'] },
      { q: 'Può emettere fatture?', a: ['Le fatture si emettono in Traviosoft, da parte di una persona. L’assistente può consultarle, seguire ciò che è pagato e correggere una bozza.'] },
      { q: 'C’è anche un assistente dentro Traviosoft?', a: ['Sì, come opzione in entrambi i piani, con limiti di utilizzo. Lavora nell’app stessa e chiede la tua approvazione prima di ogni modifica.'] }
    ]
  },
  home: {
    title: 'Lavora in Traviosoft dal tuo assistente AI',
    body: 'Collega Claude, ChatGPT o Mistral. Chiedi cosa ti aspetta oggi, fai preparare un preventivo dal tuo catalogo o registra la conferma di un fornitore. Ogni modifica è fatta appena la consenti.',
    link: 'Scopri l’assistente AI'
  },
  hero: {
    ask: 'Quanto ci devono i clienti?',
    answer: '{owed} sui preventivi accettati, di cui {overdue} già scaduti.'
  },
  sim: {
    title: 'Provalo con un’agenzia di esempio',
    lead: 'Invia uno dei messaggi qui sotto. Le risposte sono una simulazione su dati di esempio, e il lato Traviosoft mostra cosa cambia.',
    chatTitle: 'Il tuo assistente AI', chatSub: 'Collegato a Traviosoft',
    appTitle: 'Traviosoft', appSub: 'La tua agenzia',
    pick: 'Invia un messaggio', restart: 'Ricomincia', allow: 'Consenti', deny: 'Rifiuta',
    allowedTag: 'Consentito', deniedTag: 'Rifiutato',
    denied: 'Va bene. Traviosoft resta com’è.', thinking: 'Al lavoro in Traviosoft',
    quotes: 'Preventivi', bookings: 'Prenotazioni · Famiglia Bianchi', review: 'Revisione delle modifiche', reviewEmpty: 'Tutte le modifiche sono state riviste', approve: 'Approva',
    draft: 'Bozza', sent: 'Inviato', requested: 'Richiesto', confirmed: 'Confermato',
    bianchiTrip: 'Siviglia e Granada, 6 giorni', olabarriTrip: 'Un fine settimana a Cordova', irisTrip: 'Andalusia, 8 giorni',
    hotelSeville: 'Hotel a Siviglia', guideCordoba: 'Guida a Cordova', hotelGranada: 'Hotel a Granada',
    today: {
      prompt: 'Cosa mi aspetta oggi?',
      answer: 'Ti aspettano tre cose:',
      rows: [
        { t: 'Una nuova richiesta a cui rispondere', s: 'Iris & Noah, Andalusia, 8 giorni' },
        { t: 'Un preventivo da sollecitare', s: 'Famiglia Bianchi, inviato 9 giorni fa' },
        { t: 'Una prenotazione che aspetta il fornitore', s: 'Hotel a Siviglia, Famiglia Bianchi' }
      ]
    },
    quote: {
      prompt: 'Prepara un preventivo per Iris & Noah, Andalusia, 8 giorni, dal 3 maggio',
      askTitle: 'Creare un preventivo in Traviosoft?',
      askSub: 'Iris & Noah · Andalusia, 8 giorni · 6 servizi del tuo catalogo',
      done: 'Il preventivo è in Traviosoft come bozza: {total}, con il tuo margine di {margin}.'
    },
    booking: {
      prompt: 'L’hotel di Siviglia ha confermato la prenotazione Bianchi, riferimento 48213',
      askTitle: 'Aggiornare una prenotazione in Traviosoft?',
      askSub: 'Hotel a Siviglia: confermato, riferimento 48213',
      done: 'Fatto. L’hotel a Siviglia è confermato, con il riferimento 48213.'
    },
    remove: {
      prompt: 'Elimina il preventivo Olabarri, hanno scelto un’altra data',
      askTitle: 'Eliminare un preventivo in Traviosoft?',
      askSub: 'Familia Olabarri · Un fine settimana a Cordova',
      queued: 'L’eliminazione ora attende la tua approvazione in Traviosoft, in Revisione delle modifiche.',
      reviewItem: 'Eliminare il preventivo di Familia Olabarri',
      approved: 'Approvato in Traviosoft. Il preventivo è nel cestino.'
    }
  }
};
