import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const home: SiteContent['home'] = {
  metaTitle: 'Traviosoft: gestionale per agenzie di viaggio su misura e DMC',
  metaDescription:
    `Richieste, preventivi con i tuoi margini, prenotazioni, itinerari per i clienti, pagamenti e fatture in un unico posto. Per agenzie di viaggio su misura e DMC. Da ${PRICES.classic.yearly} EUR al mese, ospitato nell’UE.`,
  title: 'Gestionale per agenzie di viaggio su misura e DMC',
  sub: 'Richieste, preventivi, prenotazioni, pagamenti e fatture, in un unico posto.',
  proposal: {
    "agency": "Ruta Sur Viajes",
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
        "t": "Giorno 2 · L’Alcázar e la cattedrale",
        "s": "Visita guidata al mattino, pomeriggio libero nel quartiere di Santa Cruz."
      },
      {
        "t": "Giorno 4 · Verso Ronda",
        "s": "Ritiro dell’auto a noleggio, 2 notti sulla gola."
      }
    ],
    "total": "Totale da pagare",
    "vatIncl": "IVA inclusa",
    "photo": "Siviglia",
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
        "t": "Alcázar e cattedrale",
        "s": "La sua guida: Lucía"
      }
    ]
  },
  tripTitle: "Il percorso di un viaggio in Traviosoft",
  moments: [
    {
      "time": "Lunedì, 09:12",
      "title": "Arriva la richiesta",
      "body": "Tutte le richieste sono in un’unica lista, con da quanto tempo aspettano e il passo successivo.",
      "go": "Vedi le richieste",
      "job": "sell"
    },
    {
      "time": "Lunedì, 11:40",
      "title": "Il preventivo, con il tuo margine",
      "body": "Ogni riga parte dal costo del fornitore, e vedi il margine del viaggio prima di inviarlo.",
      "go": "Vedi i preventivi",
      "job": "sell"
    },
    {
      "time": "Martedì",
      "title": "Ogni prenotazione seguita",
      "body": "Quando il cliente accetta, ogni fornitore riceve la sua richiesta e la risposta viene salvata sulla riga. Quello che resta da fare è nelle attività.",
      "go": "Vedi le prenotazioni",
      "job": "book"
    },
    {
      "time": "Prima della partenza",
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
  app: {
    "user": "LG",
    "lang": "IT",
    "nav": {
      "workspace": "Spazio di lavoro",
      "dashboard": "Dashboard",
      "calendar": "Calendario",
      "analytics": "Analisi",
      "pipeline": "Pipeline",
      "requests": "Richieste",
      "quotes": "Preventivi",
      "orders": "Pratiche",
      "finances": "Finanze",
      "resources": "Risorse",
      "catalog": "Catalogo",
      "clients": "Clienti",
      "providers": "Fornitori",
      "guide": "Guida rapida"
    },
    "client": "Famiglia Rossi",
    "trip": "Andalusia, 8 giorni",
    "req": {
      "newBtn": "Nuova richiesta",
      "rows": [
        {
          "name": "Famiglia Rossi",
          "msg": "Andalusia a maggio, 2 adulti, hotel di charme",
          "meta": "Sito web · dal 3 al 10 maggio 2027",
          "badge": "Nuova · 12 min",
          "kind": "new",
          "ago": "09:12"
        },
        {
          "name": "Ana Ruiz",
          "msg": "Lisbona e Porto, 10 giorni",
          "meta": "Email · giugno 2027",
          "badge": "Con risposta",
          "kind": "ok",
          "ago": "Ieri"
        },
        {
          "name": "Bertrand Lefèvre",
          "msg": "Marocco, gruppo di 18",
          "meta": "Telefono · ottobre 2027",
          "badge": "Con risposta",
          "kind": "ok",
          "ago": "8 gen"
        },
        {"name": "Hannah Weber", "msg": "Nord della Spagna in treno, 12 giorni", "meta": "Agenzia partner · settembre 2027", "badge": "Con risposta", "kind": "ok", "ago": "7 gen"},
        {"name": "Pierre Dubois", "msg": "Siviglia per un fine settimana, 4 adulti", "meta": "Sito web · aprile 2027", "badge": "Con risposta", "kind": "ok", "ago": "5 gen"}
      ]
    },
    "quote": {
      "sent": "Inviato",
      "viewPdf": "Vedi PDF",
      "startLabel": "Data di inizio",
      "start": "03/05/2027",
      "expiresLabel": "Scade il",
      "expires": "25/01/2027",
      "pax": "2 PAX",
      "tabs": [
        "Preventivo",
        "Pagamenti",
        "Invio",
        "Cronologia"
      ],
      "linesTitle": "Righe del preventivo",
      "vatRegimeLabel": "Regime IVA",
      "vatRegime": "Regime del margine",
      "unitIncl": "/ unità IVA inclusa",
      "lines": [
        "Transfer privato, aeroporto di Siviglia",
        "Hotel a Siviglia, camera doppia",
        "Alcázar e cattedrale, visita guidata",
        "Auto a noleggio, categoria B",
        "Hotel a Ronda, camera doppia",
        "Hotel a Granada, camera doppia",
        "Alhambra, visita guidata"
      ],
      "totalTitle": "Totale IVA inclusa",
      "perPerson": "Prezzo per persona",
      "selling": "Prezzo di vendita (IVA incl.)",
      "cost": "Costo fornitore (IVA incl.)",
      "margin": "Margine lordo",
      "vatMargin": "IVA sul margine da dichiarare"
    },
    "order": {
      "accepted": "Accettato",
      "bookingTitle": "Prenotazioni",
      "bookingCount": "5 su 7 confermate",
      "providers": [
        "Traslados Giralda",
        "Hotel Sevilla Centro",
        "Lucía Romero, guida",
        "Autos Bética",
        "Hotel Ronda Tajo",
        "Hotel Granada Albaicín",
        "Patronato de la Alhambra"
      ],
      "states": {
        "confirmed": "Confermato",
        "ref": "Confermato · rif. 48213",
        "requested": "Ordinato · in attesa di conferma",
        "toBook": "Da prenotare"
      },
      "tasksTitle": "Attività",
      "tasks": [
        "Inviare la conferma al cliente",
        "Prenotare i biglietti dell’Alhambra"
      ]
    },
    "pay": {
      "schedTitle": "Scadenze pianificate",
      "deposit": "Acconto 30%",
      "depositSub": "Carta, dal link nell’email",
      "balance": "Saldo",
      "dueLabel": "Scadenza:",
      "paid": "Pagato",
      "upcoming": "In attesa",
      "invTitle": "Fatture",
      "invDeposit": "Acconto (Anticipo)",
      "invFinal": "Fattura finale",
      "invPaid": "Pagata",
      "invDraft": "Bozza",
      "dates": [
        "12/01/2027",
        "03/04/2027"
      ]
    }
  },
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
