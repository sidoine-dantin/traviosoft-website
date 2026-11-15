import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const home: SiteContent['home'] = {
  metaTitle: 'Traviosoft: gestionale per agenzie di viaggio su misura e DMC',
  metaDescription:
    `Richieste, preventivi con i tuoi margini, prenotazioni, itinerari per i clienti, pagamenti e fatture in un unico posto. Per agenzie di viaggio su misura e DMC. Da ${PRICES.classic.yearly} EUR al mese, ospitato nell’UE.`,
  title: 'Gestionale per agenzie di viaggio su misura e DMC',
  sub: 'Richieste, preventivi, prenotazioni, pagamenti e fatture, in un unico posto.',
  proposal: {
    "agency": "La tua agenzia",
    "kind": "Proposta di viaggio",
    "trip": "Andalusia, 8 giorni",
    "meta": [
      "2 viaggiatori",
      "8 giorni",
      "dal 3 al 10 maggio 2027"
    ],
    "days": [
      {
        "t": "Giorno 1 · Siviglia",
        "s": "Accoglienza in aeroporto e transfer al tuo hotel nel centro storico, per 3 notti."
      },
      {
        "t": "Giorno 2 · Cordova",
        "s": "Visita guidata della Moschea-Cattedrale, rientro a Siviglia in serata."
      },
      {
        "t": "Giorno 4 · Verso Ronda",
        "s": "Ritiro dell’auto a noleggio, 2 notti sulla gola."
      }
    ],
    "total": "Totale da pagare",
    "vatIncl": "IVA inclusa",
    "stops": [
      {
        "day": "Giorno 1 · Lunedì 3 maggio",
        "k": "Transfer",
        "t": "Transfer aeroporto di Siviglia",
        "s": "Punto d’incontro: uscita arrivi"
      },
      {
        "k": "Alloggio",
        "t": "Hotel nel centro storico di Siviglia",
        "s": "Check-out 6 maggio",
        "link": "Apri in Maps"
      },
      {
        "day": "Giorno 2 · Martedì 4 maggio",
        "k": "Attività",
        "t": "Moschea-Cattedrale di Cordova",
        "s": "La sua guida: Lucía"
      }
    ]
  },
  tripTitle: "Il percorso di un viaggio in Traviosoft",
  moments: [
    {
      "title": "Arriva la richiesta",
      "body": "Tutte le richieste sono in un’unica lista, con da quanto tempo aspettano e il passo successivo.",
      "go": "Vedi le richieste",
      "job": "sell"
    },
    {
      "title": "Il preventivo, con il tuo margine",
      "body": "Ogni riga parte dal costo del fornitore, e vedi il margine del viaggio prima di inviarlo.",
      "go": "Vedi i preventivi",
      "job": "sell"
    },
    {
      "title": "Ogni prenotazione seguita",
      "body": "Quando il cliente accetta, ogni fornitore riceve la sua richiesta e la risposta viene salvata sulla riga. Quello che resta da fare è nelle attività.",
      "go": "Vedi le prenotazioni",
      "job": "book"
    },
    {
      "title": "Pagamenti e fatture dal preventivo",
      "body": "Le scadenze vengono dal preventivo accettato. Il cliente paga dal link nell’email, e la fattura riprende le stesse righe.",
      "go": "Vedi i pagamenti",
      "job": "get-paid"
    }
  ],
  sitTitle: "Secondo il tuo modo di lavorare",
  sitLead: "Ogni agenzia ha le sue abitudini. Ecco cosa fa Traviosoft nei casi più comuni.",
  situations: [
    {
      "t": "Vendo ad agenzie, non al viaggiatore",
      "s": "Commissioni, tariffe nette e l’agenzia che porta il cliente su ogni preventivo.",
      "job": "sell"
    },
    {
      "t": "Lavoro con i gruppi",
      "s": "Elenco dei viaggiatori, rooming list e un modulo che ogni viaggiatore compila da sé.",
      "job": "book"
    },
    {
      "t": "I miei fornitori fatturano in dollari o in dirham",
      "s": "Costi nella loro valuta, prezzi nella tua, con il cambio del preventivo conservato.",
      "job": "sell"
    },
    {
      "t": "Lavoro con guide e autisti",
      "s": "Scheda servizio inviata alla guida, e il suo pagamento seguito con il viaggio.",
      "job": "book"
    },
    {
      "t": "I miei clienti pagano a rate",
      "s": "Scadenze fissate nel preventivo, solleciti e pagamento online.",
      "job": "get-paid"
    },
    {
      "t": "Fatturo in regime del margine",
      "s": "L’IVA è calcolata sul tuo margine, con la dicitura del regime in fattura.",
      "job": "get-paid"
    },
    {
      "t": "Le mie tariffe cambiano con la stagione",
      "s": "Prezzi per stagione, età o giorno, e il preventivo prende il prezzo delle date del viaggio.",
      "job": "sell"
    },
    {
      "t": "Abbiamo più marchi o società",
      "s": "Ognuno ha i suoi documenti, le sue diciture e la sua numerazione delle fatture.",
      "job": "setup"
    }
  ],
  baTitle: 'Prima e dopo',
  beforeTitle: 'Oggi',
  beforeScraps: [
    { i: 'sheet', t: 'Tariffe_2026_DEFINITIVO_v3.xlsx' },
    { i: 'doc', t: 'Preventivo Rossi.docx' },
    { i: 'chat', t: 'WhatsApp: «l’hotel ha confermato?»' },
    { i: 'bank', t: 'Acconto? controllare la banca' },
    { i: 'book', t: 'Numeri di fattura su un quaderno' },
    { i: 'mail', t: '42 email non lette' },
    { i: 'sheet', t: 'Rooming_list_Müller (2).xlsx' },
    { i: 'phone', t: 'Richiamare la guida' },
    { i: 'note', t: 'Chi ha inviato il preventivo?' },
    { i: 'pdf', t: 'Voucher_finale_DEFINITIVO.pdf' },
    { i: 'calc', t: 'Margine: da ricalcolare' },
    { i: 'mail', t: 'RE: RE: RE: disponibilità' }
  ],
  afterTitle: 'Con Traviosoft',
  afterBody:
    'La richiesta, il preventivo, le prenotazioni, i pagamenti e le fatture sono sullo stesso viaggio, e tutto il team vede la stessa cosa.',
  priceTitle: 'Prezzi',
  priceBody: 'Configurazione',
  priceImport: 'e importazione dei tuoi fogli di calcolo',
  priceFree: 'gratuite*',
  priceFreeNote: '* Con fatturazione annuale. Offerta a tempo limitato.',
  extraUserLine: `Utente aggiuntivo: ${PRICES.extraUser.classic.yearly} EUR (Classic) o ${PRICES.extraUser.premium.yearly} EUR (Premium) al mese*`,
  coin1: 'EUR/mese* · Classic',
  coin2: 'EUR/mese* · Premium',
  coinUsers: `${PRICES.usersIncluded} utenti`,
  priceNote: '* Al mese, fatturazione annuale, IVA esclusa. Tutti i dettagli nella pagina Prezzi.',
  priceLink: 'Confronta i piani',
  facts: [
    { k: 'Prezzo', v: `Da ${PRICES.classic.yearly} EUR al mese, ${PRICES.usersIncluded} utenti inclusi` },
    { k: 'Per', v: 'Agenzie su misura e DMC' },
    { k: 'Dati', v: 'Uno spazio privato per agenzia, ospitato nell’UE' },
    { k: 'Lingue', v: 'Documenti in spagnolo, catalano, inglese, francese e italiano' }
  ]
};
