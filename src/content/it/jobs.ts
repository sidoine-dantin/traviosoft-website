import type { JobPage, JobSlug } from '../types';
import { ai } from './ai';

const sell: JobPage = {
  slug: 'sell',
  metaTitle: 'Vendere: richieste, catalogo e preventivi con i tuoi margini | Traviosoft',
  metaDescription:
    'Tutte le richieste dei clienti in una lista, un catalogo con prezzi per stagione e più fornitori per prodotto, preventivi con il tuo margine e l’IVA, inviati nella lingua del cliente e con un promemoria dopo 7 giorni.',
  name: 'Vendere',
  menuLine: 'Dalla prima richiesta al preventivo accettato',
  step: '1 di 4',
  heroTitle: 'Richieste, catalogo e preventivi',
  heroLead:
    'Traviosoft riunisce tutte le richieste dei clienti in una lista, i tuoi prodotti e prezzi in un catalogo, e costruisce preventivi che mostrano il tuo margine su ogni riga.',
  heroVisual: 'quote',
  chapters: [
    {
      id: 'requests',
      kicker: 'Richieste',
      title: 'Le richieste dei clienti in una lista',
      lead: 'Ogni richiesta arriva nella stessa lista con il suo prossimo passo, che sia arrivata per email, per telefono o su WhatsApp.',
      visual: 'requests',
      features: [
        { title: 'Nuova o con risposta', body: ['Vedi a colpo d’occhio quali richieste aspettano ancora un primo preventivo. Lo stato cambia da solo quando il preventivo viene inviato.'] },
        { title: 'Dalla richiesta al preventivo', body: ['Crea il preventivo dalla richiesta. Il cliente, le date del viaggio e il numero di viaggiatori sono già compilati.'] },
        { title: 'Promemoria', body: ['Metti una data su una richiesta, e quel giorno ricompare nella tua lista delle cose da fare.'] }
      ]
    },
    {
      id: 'catalogue',
      kicker: 'Catalogo',
      title: 'Un catalogo di prodotti e prezzi',
      lead: 'I tuoi hotel, transfer, guide e attività, ognuno con quanto ti costa e a quanto lo vendi, per data.',
      visual: 'catalogue',
      features: [
        { title: 'Periodi di prezzo', body: ['Bassa, media e alta stagione, eventi speciali, tariffe dei contratti dell’anno prossimo. Ogni prodotto conserva i suoi prezzi per periodo, e il preventivo usa quello che corrisponde alle date del viaggio.'] },
        { title: 'Più fornitori per prodotto', body: ['Tieni due società di transfer o tre guide per lo stesso servizio, ognuna con le sue tariffe, e scegline una per ogni viaggio.'] },
        { title: 'I tuoi itinerari classici, salvati', body: ['Salva una volta un itinerario classico. Aggiungilo a un preventivo con un clic, ai prezzi di oggi, poi adatta quello che cambia.'] }
      ]
    },
    {
      id: 'quotes',
      kicker: 'Preventivi',
      title: 'Preventivi con il tuo margine e l’IVA',
      lead: 'Costruisci il preventivo riga per riga dal tuo catalogo. Ogni riga mostra quanto ti costa, quanto paga il cliente e il tuo margine.',
      visual: 'margin',
      features: [
        { title: 'Le tue regole di prezzo', body: ['Imposta una volta come il tuo margine e l’IVA si aggiungono al prezzo di un fornitore. Ogni riga del preventivo viene poi calcolata allo stesso modo.'] },
        { title: 'Cosa vede il cliente', body: ['Il cliente vede i servizi e i prezzi. I tuoi costi e i tuoi margini restano dentro la tua agenzia.'] },
        { title: 'Versioni', body: ['Il cliente chiede un hotel meno caro? Modifica il preventivo e invialo di nuovo. La versione inviata prima viene conservata e si può ripristinare.'] }
      ]
    },
    {
      id: 'send',
      kicker: 'Invio e sollecito',
      title: 'Invio del preventivo e follow-up',
      lead: 'Il preventivo parte per email in PDF, nella lingua del cliente. Una settimana dopo, Traviosoft ti ricorda di ricontattarlo.',
      visual: 'followup',
      features: [
        { title: 'Modelli di email', body: ['Scrivi i tuoi testi delle email una volta, in ogni lingua. Quando invii un preventivo, l’email è pronta con il PDF allegato.'] },
        { title: 'Nella lingua del cliente', body: ['Spagnolo, catalano, inglese, francese o italiano. Il preventivo e la sua email sono scritti nella lingua del cliente.'] },
        { title: 'Sollecito dopo 7 giorni', body: ['Sette giorni dopo l’invio, il preventivo compare nella tua lista dei preventivi da seguire. Puoi scegliere un’altra data.'] }
      ]
    },
    {
      id: 'proposal',
      kicker: 'Proposta',
      title: 'Il preventivo come pagina web',
      lead: 'Il cliente può aprire il preventivo anche come pagina web, con le foto del viaggio, nella sua lingua.',
      visual: 'proposal',
      features: [
        { title: 'Condivisa con un link', body: ['Il link è nell’email del preventivo. La pagina porta il tuo logo e i tuoi colori e si apre su qualsiasi telefono.'] },
        { title: 'Incluso e non incluso', body: ['Per ogni servizio, la pagina indica cosa comprende il prezzo e cosa è extra.'] },
        { title: 'Gli stessi prezzi del preventivo', body: ['La pagina, il PDF e più tardi le fatture usano le stesse righe, quindi i prezzi coincidono.'] }
      ]
    },
    {
      id: 'partners',
      kicker: 'Agenzie partner',
      title: 'Le commissioni e il tuo margine reale',
      lead: 'Quando un’altra agenzia vende il tuo viaggio al proprio cliente, il preventivo comprende la sua commissione e mostra il margine che ti resta.',
      visual: 'commission',
      features: [
        { title: 'L’agenzia e il suo cliente', body: ['Il preventivo è intestato all’agenzia e riporta i nomi dei viaggiatori. Entrambi restano sul viaggio fino all’ultima fattura.'] },
        { title: 'La commissione nel prezzo', body: ['Inserisci la commissione dell’agenzia nel preventivo. Il prezzo di vendita la comprende, e vedi il tuo margine dopo la commissione.'] },
        { title: 'Estratti conto delle commissioni', body: ['Vedi quanto devi a ogni agenzia per i viaggi che ti ha portato, periodo per periodo, e segnalo come pagato con un clic.'] }
      ]
    }
  ],
  faq: [
    { q: 'Posso importare il mio catalogo attuale?', a: ['Sì. Durante l’avvio importiamo i tuoi prodotti, prezzi e fornitori dai tuoi fogli di calcolo. Avvio e importazione sono gratuiti con la fatturazione annuale.'] },
    { q: 'Più fornitori possono vendere lo stesso hotel o servizio?', a: ['Sì. Un prodotto può avere più fornitori, ognuno con le sue tariffe. Scegli il fornitore per ogni viaggio.'] },
    { q: 'Cosa vede il mio cliente?', a: ['Un preventivo con il nome che scegli per ogni servizio e i prezzi per persona, nella sua lingua e con il tuo marchio. La pagina web del preventivo indica anche cosa è incluso e non incluso. I tuoi prezzi di acquisto e i tuoi margini restano riservati al tuo team.'] },
    { q: 'Devo usare il catalogo per ogni preventivo?', a: ['Un preventivo può unire prodotti del catalogo e righe che scrivi solo per quel viaggio.'] }
  ]
};

const book: JobPage = {
  slug: 'book',
  metaTitle: 'Prenotare e seguire il viaggio: pratiche, fornitori, itinerario del cliente | Traviosoft',
  metaDescription:
    'Quando un preventivo viene accettato, tutti i servizi del viaggio sono in lista, pronti da prenotare. Le richieste di prenotazione partono ai fornitori per email, ogni servizio mostra il suo stato e il tuo cliente riceve un itinerario giorno per giorno.',
  name: 'Prenotare e seguire',
  menuLine: 'Dal preventivo accettato al viaggio concluso',
  step: '2 di 4',
  heroTitle: 'Prenotazioni, fornitori e itinerario del cliente',
  heroLead:
    'Quando il cliente accetta il preventivo, tutti i servizi del viaggio sono in lista, pronti da prenotare. Le richieste di prenotazione partono ai tuoi fornitori per email, vedi cosa è confermato e il viaggiatore riceve un itinerario giorno per giorno.',
  heroVisual: 'order',
  chapters: [
    {
      id: 'order',
      kicker: 'Prenotazioni',
      title: 'Ogni prenotazione pronta per il viaggio',
      lead: 'L’hotel, la guida, i transfer e le visite del preventivo accettato sono in lista, pronti da prenotare. Invia le richieste di prenotazione, e i fornitori confermano.',
      visual: 'confirm',
      features: [
        { title: 'Tutti i servizi in una lista', body: ['I servizi arrivano dal preventivo accettato, con date, viaggiatori e prezzi già compilati.'] },
        { title: 'Richieste di prenotazione per email', body: ['Ogni fornitore riceve la sua richiesta di prenotazione con i servizi, le date e il numero di viaggiatori. La risposta viene conservata con il viaggio.'] },
        { title: 'Modifiche dopo la conferma', body: ['Il cliente aggiunge una notte? Modifica il preventivo e le prenotazioni lo seguono, così il team lavora sulla versione attuale.'] }
      ]
    },
    {
      id: 'status',
      kicker: 'Stati',
      title: 'Stati di prenotazione su ogni viaggio',
      lead: 'Per ogni viaggio vedi quali servizi sono confermati e quali aspettano ancora il fornitore.',
      visual: 'statuses',
      features: [
        { title: 'Uno stato per servizio', body: ['Hotel, guida, auto, biglietti: ognuno è da prenotare, in attesa del fornitore o confermato.'] },
        { title: 'Uno stato per tutto il viaggio', body: ['Ogni viaggio mostra quanti dei suoi servizi sono confermati, per esempio 3 su 7, e risulta tutto prenotato dopo l’ultimo.'] },
        { title: 'Le prenotazioni che ti aspettano', body: ['Una lista riunisce le prenotazioni ancora in attesa della risposta di un fornitore, le opzioni che scadono a breve e quelle da riconfermare prima del viaggio.'] }
      ]
    },
    {
      id: 'suppliers',
      kicker: 'Fornitori',
      title: 'I fornitori e le loro email',
      lead: 'Ogni fornitore ha contatti, documenti e tariffe in un unico posto. Le email su una prenotazione vengono conservate con il viaggio a cui appartengono.',
      visual: 'suppliers',
      features: [
        { title: 'Le email dei fornitori sul viaggio giusto', body: ['Una conferma o una risposta di un fornitore viene collegata al viaggio a cui si riferisce, dove tutto il team può leggerla.'] },
        { title: 'Voucher di servizio', body: ['Invia a ogni guida, autista o hotel un voucher con le date, gli orari, i nomi e il punto d’incontro, direttamente dal viaggio.'] },
        { title: 'Richieste di disponibilità e ordini di acquisto ai fornitori', body: ['Chiedi a un hotel se le date sono disponibili, poi invia l’ordine di acquisto con il prezzo concordato. Il fornitore risponde da un link, e lo stato della prenotazione si aggiorna.'], premium: true }
      ]
    },
    {
      id: 'itinerary',
      kicker: 'Itinerario del cliente',
      title: 'Un itinerario giorno per giorno',
      lead: 'Il viaggiatore riceve un link a una pagina web con ogni giorno del viaggio: gli hotel, gli orari e i contatti.',
      visual: 'itinerary',
      features: [
        { title: 'Condiviso con un link', body: ['Un solo link, giorno per giorno. Si apre su qualsiasi telefono.'] },
        { title: 'Nella lingua del viaggiatore, con il tuo marchio', body: ['La pagina è scritta nella lingua del cliente e porta il tuo logo.'] },
        { title: 'Sempre aggiornato', body: ['Cambia l’orario di un pick-up e la pagina mostra il nuovo orario. Il link resta lo stesso.'] }
      ]
    },
    {
      id: 'groups',
      kicker: 'Gruppi',
      title: 'Gruppi e rooming list',
      lead: 'Per i viaggi di gruppo: la lista dei viaggiatori, i servizi che riguardano solo una parte del gruppo e una rooming list per ogni hotel.',
      visual: 'rooming',
      features: [
        { title: 'La lista dei viaggiatori', body: ['Incolla o importa la lista da un foglio di calcolo, oppure invia il link a un modulo perché i viaggiatori inseriscano da soli passaporto, dieta ed esigenze di accessibilità. Fino a 200 viaggiatori per viaggio.'], premium: true },
        { title: 'Servizi per una parte del gruppo', body: ['La giornata di golf per dodici, la cena di gala per tutti. Ogni servizio indica chi partecipa, così ogni fornitore riceve i numeri giusti.'], premium: true },
        { title: 'Una rooming list per hotel', body: ['Le camere sono composte a partire da chi dorme con chi e numerate per ogni hotel. Invia la lista in PDF o in foglio di calcolo.'], premium: true }
      ]
    },
    {
      id: 'calendar',
      kicker: 'Calendario',
      title: 'I viaggi su un calendario',
      lead: 'Il calendario mostra ogni viaggio come una barra, dall’arrivo alla partenza. Sul telefono elenca i servizi del giorno.',
      visual: 'calendar',
      features: [
        { title: 'Barre dei viaggi', body: ['Vedi quali viaggi si sovrappongono e quanto sono piene le prossime settimane.'] },
        { title: 'La giornata sul telefono', body: ['Gli arrivi, i transfer e le visite di oggi in un’unica lista, facile da consultare tra una riunione e l’altra.'] }
      ]
    }
  ],
  faq: [
    { q: 'Le mie guide e i miei autisti possono vedere il viaggio?', a: ['Ricevono via email un voucher di servizio con ciò che serve: date, orari, nomi e punto di incontro.'] },
    { q: 'Cosa succede se il cliente cambia una data?', a: ['Cambia la data nel preventivo. Le prenotazioni, la pagina dell’itinerario e i voucher di servizio seguono la modifica, e i servizi da prenotare di nuovo tornano come da prenotare.'] },
    { q: 'Le risposte dei fornitori finiscono sul viaggio?', a: ['Sì. Le richieste di prenotazione partono da Traviosoft dalla tua casella di posta, e la risposta di ogni fornitore viene conservata con il suo viaggio, dove la vede tutto il team.'] }
  ]
};

const getPaid: JobPage = {
  slug: 'get-paid',
  metaTitle: 'Incassare e tenere i conti: pagamenti, fatture, dashboard | Traviosoft',
  metaDescription:
    'Acconto e saldo previsti nel preventivo, link di pagamento nell’email, fatture e note di credito dagli stessi numeri, e una dashboard con vendite, viaggi, entrate e uscite.',
  name: 'Incassare',
  menuLine: 'Pagamenti, fatture e i tuoi numeri',
  step: '3 di 4',
  heroTitle: 'Pagamenti, fatture e numeri',
  heroLead:
    'I pagamenti e le fatture nascono dal preventivo accettato, quindi gli importi coincidono. Le stesse cifre mostrano le tue vendite, il denaro ricevuto e quello dovuto ai fornitori.',
  heroVisual: 'payments',
  chapters: [
    {
      id: 'schedule',
      kicker: 'Scadenze di pagamento',
      title: 'Acconto e saldo con le scadenze',
      lead: 'Ogni preventivo ha i suoi pagamenti pianificati: di solito un acconto e un saldo, ognuno con la sua scadenza.',
      visual: 'schedule',
      features: [
        { title: 'Acconto e saldo', body: ['Una percentuale o un importo per ogni pagamento, con la sua scadenza. Il tuo piano di pagamento abituale si applica con un clic.'] },
        { title: 'Cosa scade questa settimana', body: ['Un’unica lista mostra tutti i pagamenti dei clienti in scadenza o scaduti, su tutti i tuoi viaggi.'] },
        { title: 'Promemoria di pagamento', body: ['Traviosoft può scrivere al cliente prima e dopo una scadenza, nella sua lingua e con le tue parole.'], premium: true }
      ]
    },
    {
      id: 'links',
      kicker: 'Link di pagamento',
      title: 'Link di pagamento nell’email',
      lead: 'Il cliente paga online da un link nella tua email, per esempio con carta.',
      visual: 'paylink',
      features: [
        { title: 'Il tuo link di pagamento', body: ['Usa il link del servizio di pagamento che hai già. Aggiungilo a un pagamento e parte nell’email al cliente.'] },
        { title: 'I pagamenti registrati sul viaggio', body: ['Quando arriva un bonifico o un pagamento con carta, registralo con un clic. Il viaggio risulta allora pagato in parte o pagato.'] }
      ]
    },
    {
      id: 'invoices',
      kicker: 'Fatture',
      title: 'Fatture dal viaggio',
      lead: 'Le fatture di acconto e finali si fanno a partire dal preventivo accettato, con i suoi importi e i dati del cliente.',
      visual: 'invoices',
      features: [
        { title: 'Fatture di acconto e finali', body: ['Un clic crea la fattura di un acconto ricevuto e, più tardi, la fattura finale, che detrae l’acconto.'] },
        { title: 'Note di credito', body: ['Quando un viaggio viene annullato o modificato, una nota di credito storna la fattura originale e le resta collegata.'] },
        { title: 'Pronto per il commercialista', body: ['A fine mese, esporta un riepilogo Excel o un file zip con tutte le fatture in PDF.'] }
      ]
    },
    {
      id: 'dashboard',
      kicker: 'Dashboard',
      title: 'Vendite, viaggi e liquidità',
      lead: 'Le tue vendite, i tuoi viaggi, il denaro ricevuto e quello da pagare in un’unica pagina, per il periodo che scegli.',
      visual: 'dashboard',
      features: [
        { title: 'Vendite e viaggi', body: ['Quanto hai venduto e quanti viaggi, questo mese, questa stagione o quest’anno.'] },
        { title: 'Entrate e uscite', body: ['Quanto ti hanno pagato i clienti e quanto devi ai fornitori, fianco a fianco.'] },
        { title: 'Oggi', body: ['Il lavoro della giornata in un unico posto: promemoria, pagamenti in scadenza e prenotazioni da confermare.'] }
      ]
    }
  ],
  faq: [
    { q: 'Quali sistemi di pagamento funzionano?', a: ['Qualsiasi servizio che ti fornisce un link di pagamento. Aggiungi il link al pagamento, il cliente paga lì e registri il pagamento sul viaggio.'] },
    { q: 'Il mio commercialista può avere i file?', a: ['Sì. Esporta un riepilogo Excel o un file zip con tutte le fatture in PDF per qualsiasi periodo.'] },
    { q: 'Segue le regole del mio paese?', a: ['Le fatture sono numerate in sequenza per ognuna delle tue società, e le note di credito sono disponibili in tutti i paesi. Per la Spagna, il regime IVA delle agenzie di viaggio è integrato. Negli altri paesi, la fattura viene emessa dal tuo software di fatturazione, collegato a Traviosoft. Per il tuo paese, chiedicelo durante la demo.'] }
  ]
};

const setup: JobPage = {
  slug: 'setup',
  metaTitle: 'La tua configurazione: marchi, lingue, team e dati | Traviosoft',
  metaDescription:
    'Più marchi in un solo account, documenti nella lingua del cliente, più valute, impostazioni per paese, il tuo team, i tuoi dati ospitati nell’UE e collegamenti con i tuoi altri strumenti.',
  name: 'La tua configurazione',
  menuLine: 'Marchi, lingue, valute, team e dati',
  step: '4 di 4',
  heroTitle: 'Marchi, lingue, valute e team',
  heroLead:
    'I tuoi marchi, le lingue, le valute, le regole fiscali e gli utenti si impostano una volta. Ogni preventivo, prenotazione e fattura li segue.',
  heroVisual: 'settings',
  chapters: [
    {
      id: 'brands',
      kicker: 'Marchi',
      title: 'Più marchi in un solo account',
      lead: 'Un’agenzia che vende con due nomi, o che gestisce due società, lavora da un solo account. Ogni marchio mantiene la sua immagine.',
      visual: 'brands',
      features: [
        { title: 'Logo e colori per marchio', body: ['Ogni viaggio appartiene a un marchio. Il suo preventivo, la proposta, l’itinerario e la fattura portano il logo e i colori di quel marchio.'], premium: true },
        { title: 'Numerazione per società', body: ['Quando fatturi da due società, ognuna mantiene i propri numeri di fattura.'], premium: true }
      ]
    },
    {
      id: 'languages',
      kicker: 'Lingue',
      title: 'Documenti nella lingua del cliente',
      lead: 'Preventivi, email, proposte e itinerari sono scritti in spagnolo, catalano, inglese, francese o italiano, a seconda del cliente.',
      visual: 'languages',
      features: [
        { title: 'Una lingua per cliente', body: ['Indica una volta la lingua del cliente, e ogni documento per quel cliente la segue.'] },
        { title: 'Traduzioni automatiche', body: ['Le descrizioni dei prodotti del catalogo vengono tradotte per te, e puoi correggere qualsiasi traduzione.'] },
        { title: 'Modelli di email per lingua', body: ['Le tue formulazioni in ogni lingua, scelte automaticamente per ogni cliente.'] }
      ]
    },
    {
      id: 'currencies',
      kicker: 'Valute',
      title: 'Più valute',
      lead: 'Lodge con prezzi in dollari, un cliente che paga in sterline, i tuoi conti in euro. Ogni preventivo ha la sua valuta, e le tue cifre si sommano nella tua.',
      visual: 'currencies',
      features: [
        { title: 'Una valuta per cliente e per preventivo', body: ['Fai il preventivo a un cliente britannico in sterline e a un partner americano in dollari, dallo stesso catalogo.'], premium: true },
        { title: 'I prezzi dei fornitori nella loro valuta', body: ['Tieni ogni tariffa nella valuta in cui fattura il fornitore. Il preventivo la converte al cambio del giorno, più una riserva che scegli tu per le variazioni del cambio.'], premium: true },
        { title: 'I tuoi conti in una sola valuta', body: ['Fatture, pagamenti, margini e report si sommano nella tua valuta contabile. Utili e perdite su cambi sono calcolati per te.'], premium: true }
      ]
    },
    {
      id: 'country',
      kicker: 'Impostazioni del paese',
      title: 'Regole fiscali del paese',
      lead: 'L’IVA delle agenzie di viaggio e la fatturazione elettronica cambiano da un paese all’altro, quindi si impostano per il tuo paese.',
      visual: 'country',
      features: [
        { title: 'IVA sul margine', body: ['Per la Spagna, il regime delle agenzie di viaggio con IVA sul margine (REAV) e la sua dicitura sulle tue fatture sono integrati.'] },
        { title: 'Fatturazione elettronica', body: ['Dove le fatture vanno trasmesse in formato elettronico, partono da Traviosoft o dal tuo software di fatturazione, a seconda del paese.'] }
      ]
    },
    {
      id: 'team',
      kicker: 'Team',
      title: 'Ogni venditore con i suoi clienti e le sue vendite',
      lead: 'Ogni venditore lavora sui propri clienti e viaggi, e tu vedi le vendite di tutta l’agenzia.',
      visual: 'team',
      features: [
        { title: 'Utenti inclusi nel piano', body: ['Entrambi i piani, Classic e Premium, comprendono 3 utenti. Aggiungine altri quando il tuo team cresce.'] },
        { title: 'Team e ruoli', body: ['Dai a ogni persona i propri clienti e viaggi, riunisci le persone in team e scegli cosa ognuno può vedere e fare.'], premium: true }
      ]
    },
    {
      id: 'data',
      kicker: 'I tuoi dati',
      title: 'Dati e hosting',
      lead: 'I dati della tua agenzia sono conservati in uno spazio proprio, su server nell’Unione europea.',
      visual: 'safe',
      features: [
        { title: 'Uno spazio separato per la tua agenzia', body: ['I tuoi clienti, prezzi e viaggi sono archiviati separatamente da quelli delle altre agenzie.'] },
        { title: 'Ospitato nell’UE', body: ['I tuoi dati restano nell’Unione europea, nel rispetto del GDPR.'] },
        { title: 'I tuoi dati vengono con te', body: ['Se smetti, riavrai i tuoi dati in formati standard.'] }
      ]
    },
    {
      id: 'connections',
      kicker: 'Collegamenti',
      title: 'Collegamenti con i tuoi altri strumenti',
      lead: 'Il tuo sito, il tuo software di contabilità e il tuo assistente AI possono lavorare con i tuoi dati Traviosoft. Ogni collegamento ha i diritti che gli dai.',
      visual: 'connections',
      features: [
        { title: 'Il tuo sito e la tua contabilità', body: ['Il modulo di contatto del tuo sito può arrivare direttamente tra le tue richieste, e il tuo software di contabilità può recuperare fatture e pagamenti.'], premium: true },
        { title: 'I tuoi strumenti di IA', body: ['Collega l’assistente AI che usi già, come Claude o ChatGPT. Lavora in Traviosoft con i diritti della persona che lo ha collegato.'] },
        { title: 'L’assistente dentro Traviosoft', body: ['Chiedi cosa richiede la tua attenzione oggi, fai preparare un preventivo dal tuo catalogo o trasforma il listino di un fornitore in prezzi del catalogo. Ogni modifica attende la tua approvazione. L’assistente è un’opzione su entrambi i piani.'] }
      ]
    }
  ],
  faq: [
    { q: 'Dove sono i miei dati?', a: ['In uno spazio separato per la tua agenzia, ospitato nell’Unione europea.'] },
    { q: 'Posso andarmene con i miei dati?', a: ['Sì. Riavrai i tuoi dati in formati standard.'] },
    { q: 'Chi può vedere cosa?', a: ['Con il piano Classic, ogni utente vede tutti i viaggi dell’agenzia. Con il piano Premium, ogni team e ogni persona può avere i propri clienti e viaggi, con i diritti che scegli.'] }
  ]
};

export const jobs: Record<JobSlug, JobPage> = { sell, book, 'get-paid': getPaid, setup, 'ai-assistant': ai.page };
