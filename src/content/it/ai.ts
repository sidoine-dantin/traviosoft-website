import type { AiText } from '../types';

/** L’assistente AI. Fonte: en/ai.ts, verificata con fr/ai.ts. Parole dell’app: apps/web/messages/it.json. */
export const ai: AiText = {
  page: {
    slug: 'ai-assistant',
    metaTitle: 'Assistente AI per Traviosoft: Claude, ChatGPT o Mistral',
    metaDescription:
      'Collega a Traviosoft l’assistente AI che usi già. Chiedi cosa ti aspetta o un preventivo, e approva ogni modifica. Incluso in entrambi i piani.',
    name: 'Assistente AI',
    menuLine: 'Lavora in Traviosoft da Claude o ChatGPT',
    step: '5 di 5',
    heroTitle: 'Chiedi a Claude, ChatGPT o Mistral. Lavora nel tuo Traviosoft.',
    heroLead:
      'Sui tuoi clienti, prezzi e viaggi reali, con i diritti che gli dai. Prima di ogni modifica, ti chiede il permesso.',
    heroVisual: 'assistant',
    chapters: [
      {
        id: 'approve',
        kicker: 'Approvazione',
        title: 'Approvi ogni modifica',
        lead: 'L’assistente consulta da solo e ti chiede prima di modificare qualsiasi cosa.',
        visual: 'confirm',
        features: [
          { title: 'Una domanda prima di ogni modifica', body: ['Prima di ogni modifica, Claude, ChatGPT e Mistral ti chiedono il permesso nella chat. Nulla cambia finché non lo consenti.'] },
          { title: 'Eliminazioni approvate in Traviosoft', body: ['Se consenti l’eliminazione, ogni eliminazione attende in Traviosoft finché non la approvi lì, ed è registrata a tuo nome.'] },
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
      }
    ],
    faq: [
      { q: 'Quali app di IA posso usare?', a: ['Qualsiasi app di IA che può aggiungere un connettore MCP, lo standard aperto con cui le app di IA si collegano ad altri software. Claude, ChatGPT e Mistral ti chiedono il permesso nella chat prima di ogni modifica, e Traviosoft la fa appena la consenti. Con un’altra app, Traviosoft non può essere sicuro che ti chieda prima, quindi le sue modifiche attendono la tua approvazione in Traviosoft, in Revisione delle modifiche.'] },
      { q: 'Come lo collego, e costa di più?', a: ['Bastano pochi minuti. Nella tua app di IA, aggiungi l’indirizzo Traviosoft della tua agenzia come connettore, accedi e scegli se l’assistente può solo consultare o anche fare modifiche. È incluso in Classic e Premium, per ogni persona che l’amministratore autorizza.'] },
      { q: 'L’assistente vede tutti i nostri dati?', a: ['Vede esattamente ciò che la persona che lo ha collegato può vedere in Traviosoft in base al suo ruolo: gli stessi clienti, viaggi e team, e i prezzi di acquisto e i margini solo se il suo ruolo li mostra. Se il ruolo cambia, cambia anche ciò che vede l’assistente.'] },
      { q: 'Può scrivere a un fornitore?', a: ['Sì, e prima ti chiede il permesso. Quando lo consenti, invia al fornitore una richiesta di prenotazione o di disponibilità. Preventivi e fatture arrivano ai clienti da Traviosoft.'] },
      { q: 'Può emettere fatture?', a: ['Può consultare le fatture, seguire ciò che è pagato e correggere una bozza. Una fattura però la emette sempre una persona, in Traviosoft: l’assistente non può emettere né annullare una fattura, perché il suo numero è un documento legale.'] },
      { q: 'C’è anche un assistente dentro Traviosoft?', a: ['Sì, come opzione in entrambi i piani, con limiti di utilizzo. Lavora nell’app stessa, senza dover collegare un’altra app di IA.'] }
    ]
  },
  sim: {
    note: 'Provalo con un’agenzia di esempio: scegli un messaggio. Le risposte sono una simulazione, senza IA dietro.',
    chatTitle: 'Il tuo assistente AI', connected: 'Traviosoft collegato',
    greeting: 'Cosa posso fare oggi per la tua agenzia?',
    chatTab: 'Chat', changed: 'Novità in Traviosoft',
    allow: 'Consenti', deny: 'Rifiuta', allowedTag: 'Consentito', deniedTag: 'Rifiutato',
    deniedReply: 'Va bene. In Traviosoft non è cambiato nulla.',
    restart: 'Ricomincia', working: 'Al lavoro in Traviosoft', thinking: 'Sto pensando',
    nav: { dashboard: 'Dashboard', quotes: 'Preventivi', bookings: 'Prenotazioni', payments: 'Pagamenti', review: 'Revisione delle modifiche' },
    ui: {
      draft: 'Bozza', sent: 'Inviato', requested: 'Richiesto', confirmed: 'Confermato', toBook: 'Da prenotare', late: 'Scaduto', paid: 'Pagato', due: 'Da pagare',
      total: 'Totale', margin: 'Il tuo margine', schedule: 'Piano dei pagamenti', deposit: 'Acconto', balance: 'Saldo',
      send: 'Invia', approve: 'Approva', reject: 'Rifiuta', rejected: 'Rifiutato. Il preventivo resta com’è.', reviewEmpty: 'Tutte le modifiche sono state riviste', trashed: 'Approvato. Il preventivo è nel cestino.', reference: 'Rif.',
      newRequests: 'Nuove richieste', toFollow: 'Preventivi da sollecitare', latePayments: 'Pagamenti scaduti', bookingsLeft: 'Prenotazioni da completare'
    },
    names: {
      irisTrip: 'Andalusia, 8 giorni', bianchiTrip: 'Siviglia e Granada, 6 giorni', madridTrip: 'Madrid e Toledo, 4 giorni',
      lindTrip: 'Maiorca, 5 giorni', weberTrip: 'Lisbona, 4 giorni',
      olabarriPay: 'Saldo, weekend a Cordova', martinPay: 'Acconto, Provenza, 7 giorni',
      hotelSeville: 'Hotel a Siviglia', guideCordoba: 'Guida a Cordova', hotelGranada: 'Hotel a Granada'
    },
    steps: {
      today: {
        say: 'Cosa mi aspetta oggi?',
        tools: ['Lettura della tua dashboard'],
        reply: 'Oggi ti aspettano quattro cose:',
        rows: [
          { t: 'Una nuova richiesta a cui rispondere', s: 'Iris & Noah, Andalusia, 8 giorni dal 3 maggio' },
          { t: 'Un preventivo da sollecitare', s: 'Famiglia Bianchi, inviato 9 giorni fa' },
          { t: 'Due pagamenti scaduti', s: '{2387} in tutto' },
          { t: 'Due prenotazioni da completare', s: 'Il viaggio della Famiglia Bianchi a Siviglia e Granada' }
        ],
        after: 'Da dove vuoi cominciare?'
      },
      late: {
        say: 'Mostrami i pagamenti scaduti',
        tools: ['Ricerca dei pagamenti scaduti'],
        reply: 'Due pagamenti sono scaduti:',
        rows: [
          { t: 'Familia Olabarri, {1427}', s: 'Saldo del weekend a Cordova, scaduto da 5 giorni' },
          { t: 'Sophie Martin, {960}', s: 'Acconto per la Provenza, scaduto da 3 giorni' }
        ],
        after: 'Se uno dei due ha pagato, dimmelo e lo registro.'
      },
      payOlabarri: {
        say: 'Olabarri ha pagato con bonifico',
        reply: 'Lo registro sul weekend a Cordova.',
        ask: { action: 'Registrare un pagamento', rows: [{ t: 'Cliente', s: 'Familia Olabarri' }, { t: 'Importo', s: '{1427}' }, { t: 'Metodo', s: 'Bonifico, oggi' }] },
        done: 'Registrato. La Familia Olabarri ha pagato tutto, e resta un pagamento scaduto: l’acconto di Sophie Martin.'
      },
      quote: { say: 'Crea un preventivo', reply: 'Certo. Per chi è?' },
      quoteIris: {
        say: 'Per la richiesta di Iris & Noah',
        tools: ['Lettura della richiesta di Iris & Noah', 'Ricerca nel tuo catalogo', 'Verifica dei prezzi dal 3 al 10 maggio'],
        reply: 'Iris & Noah chiedono 8 giorni in Andalusia dal 3 maggio, per due. Ecco cosa metterei, dal tuo catalogo, ai prezzi di quelle date:',
        rows: [
          { t: 'Transfer dall’aeroporto, Siviglia', s: '3 maggio' },
          { t: 'Hotel nel centro storico di Siviglia, 4 notti', s: 'Dal 3 al 7 maggio' },
          { t: 'Guida privata a Cordova, mezza giornata', s: '5 maggio' },
          { t: 'Auto a noleggio, 4 giorni', s: 'Dal 7 al 10 maggio' },
          { t: 'Hotel a Granada, 3 notti', s: 'Dal 7 al 10 maggio' },
          { t: 'Biglietti per l’Alhambra con guida', s: '8 maggio' }
        ],
        after: 'Totale **{2660}** per due, con il tuo margine di {450}.',
        ask: { action: 'Creare un preventivo', rows: [{ t: 'Cliente', s: 'Iris & Noah' }, { t: 'Viaggio', s: 'Andalusia, dal 3 al 10 maggio' }, { t: 'Totale', s: '{2660}' }] },
        done: 'Il preventivo è in Traviosoft come bozza, e te l’ho aperto. Vuoi fissare le condizioni di pagamento, o inviarlo?'
      },
      madridBianchi: {
        say: 'Per la Famiglia Bianchi, Madrid',
        tools: ['Lettura della richiesta della Famiglia Bianchi per Madrid', 'Ricerca nel tuo catalogo', 'Verifica dei prezzi dal 12 al 15 giugno'],
        reply: 'La Famiglia Bianchi chiede 4 giorni a Madrid dal 12 giugno, per quattro. Ecco cosa metterei, dal tuo catalogo, ai prezzi di quelle date:',
        rows: [
          { t: 'Transfer aeroporto, andata e ritorno', s: '12 e 15 giugno' },
          { t: 'Hotel nel centro di Madrid, 3 notti, 2 camere', s: 'Dal 12 al 15 giugno' },
          { t: 'Museo del Prado con guida', s: '13 giugno' },
          { t: 'Gita di un giorno a Toledo con guida', s: '14 giugno' }
        ],
        after: 'Totale **{2100}** per quattro, con il tuo margine di {380}.',
        ask: { action: 'Creare un preventivo', rows: [{ t: 'Cliente', s: 'Famiglia Bianchi' }, { t: 'Viaggio', s: 'Madrid e Toledo, dal 12 al 15 giugno' }, { t: 'Totale', s: '{2100}' }] },
        done: 'Il preventivo è in Traviosoft come bozza, e te l’ho aperto. Vuoi fissare le condizioni di pagamento, o inviarlo?'
      },
      terms: { say: 'Fissa le condizioni di pagamento', reply: 'Quali condizioni vuoi?' },
      terms30: {
        say: '30% ora, il resto 30 giorni prima',
        ask: { action: 'Fissare il piano dei pagamenti', rows: [{ t: 'Acconto, 30%', s: '{dep}, oggi' }, { t: 'Saldo', s: '{bal}, il {due}' }] },
        done: 'Fatto, il piano dei pagamenti è sul preventivo. Vuoi inviarlo adesso?'
      },
      terms50: {
        say: 'Metà ora, metà 30 giorni prima',
        ask: { action: 'Fissare il piano dei pagamenti', rows: [{ t: 'Acconto, 50%', s: '{dep}, oggi' }, { t: 'Saldo', s: '{bal}, il {due}' }] },
        done: 'Fatto, il piano dei pagamenti è sul preventivo. Vuoi inviarlo adesso?'
      },
      send: {
        say: 'Invialo',
        reply: 'I preventivi arrivano ai tuoi clienti da Traviosoft, così vedi esattamente cosa ricevono. Te l’ho aperto: premi Invia quando ti va bene.'
      },
      bookings: {
        say: 'Controlla le ultime prenotazioni',
        tools: ['Ricerca delle prenotazioni in corso'],
        reply: 'Ecco a che punto è il viaggio della Famiglia Bianchi a Siviglia e Granada, dal 10 al 15 maggio:',
        rows: [
          { t: 'Hotel a Siviglia', s: 'Richiesto 4 giorni fa, ancora nessuna risposta' },
          { t: 'Guida a Cordova', s: 'Confermato' },
          { t: 'Hotel a Granada', s: 'Non ancora prenotato' }
        ],
        after: 'Novità da Siviglia, o chiedo all’hotel di Granada?'
      },
      confirmSeville: {
        say: 'Siviglia confermato, rif. 48213',
        ask: { action: 'Aggiornare una prenotazione', rows: [{ t: 'Prenotazione', s: 'Hotel a Siviglia, dal 10 al 13 maggio' }, { t: 'Stato', s: 'Confermato' }, { t: 'Riferimento', s: '48213' }] },
        done: 'Fatto. L’hotel a Siviglia è confermato, con il riferimento 48213.'
      },
      requestGranada: {
        say: 'Prenota l’hotel di Granada',
        tools: ['Ricerca dell’hotel tra i tuoi fornitori'],
        reply: 'Invio la richiesta di prenotazione all’hotel via email, da Traviosoft.',
        ask: { action: 'Inviare una richiesta di prenotazione', rows: [{ t: 'A', s: 'Hotel a Granada' }, { t: 'Date', s: 'Dal 13 al 15 maggio, 2 notti' }, { t: 'Camere', s: '2 doppie, Famiglia Bianchi' }] },
        done: 'Inviata. Dimmi quando l’hotel risponde, e registro la sua conferma.'
      },
      remove: { say: 'Elimina un preventivo', tools: ['Ricerca dei tuoi preventivi in bozza'], reply: 'Quale? Questi due sono ancora in bozza.' },
      delLind: {
        say: 'Anna Lind, Maiorca',
        ask: { action: 'Eliminare un preventivo', rows: [{ t: 'Preventivo', s: 'Anna Lind, Maiorca, 5 giorni' }, { t: 'Totale', s: '{1980}' }, { t: 'Stato', s: 'Bozza' }] },
        done: 'L’eliminazione ora attende la tua approvazione in Traviosoft, in Revisione delle modifiche. Nulla viene eliminato finché non la approvi lì.'
      },
      delWeber: {
        say: 'Familie Weber, Lisbona',
        ask: { action: 'Eliminare un preventivo', rows: [{ t: 'Preventivo', s: 'Familie Weber, Lisbona, 4 giorni' }, { t: 'Totale', s: '{1450}' }, { t: 'Stato', s: 'Bozza' }] },
        done: 'L’eliminazione ora attende la tua approvazione in Traviosoft, in Revisione delle modifiche. Nulla viene eliminato finché non la approvi lì.'
      }
    }
  }
};
