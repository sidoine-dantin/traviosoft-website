import type { JobPage, JobSlug } from '../types';

const sell: JobPage = {
  slug: 'sell',
  metaTitle: 'Vendere: richieste, catalogo e preventivi con i tuoi margini | Traviosoft',
  metaDescription:
    'Tutte le richieste in un’unica lista, un catalogo con prezzi per stagione e più fornitori, preventivi con il tuo margine, l’IVA e le commissioni, inviati nella lingua del cliente con un sollecito dopo 7 giorni.',
  name: 'Vendere',
  menuLine: 'Dalla prima richiesta al preventivo accettato',
  step: '1 di 4',
  heroTitle: 'Richieste, catalogo e preventivi',
  heroLead:
    'Tutte le richieste in un’unica lista, un catalogo con le tue tariffe per stagione e preventivi costruiti da lì, con il tuo margine e le commissioni.',
  heroVisual: 'quote',
  chapters: [
    {
      id: 'requests',
      kicker: 'Richieste',
      title: 'Un’unica lista di richieste',
      lead: 'Ogni richiesta in un’unica lista con il passo successivo, che arrivi via email, telefono o WhatsApp.',
      visual: 'requests',
      features: [
        { title: 'Stato di ogni richiesta', body: ['Ogni richiesta ha uno stato: nuova, preventivo inviato o in attesa di risposta.'] },
        { title: 'Una richiesta diventa un progetto', body: ['Quando una richiesta si fa concreta, diventa un progetto. Il cliente, le date, i viaggiatori e le tue note restano insieme per tutto il viaggio.'] },
        { title: 'Promemoria', body: ['Metti una data su una richiesta. Torna sulla tua dashboard il giorno giusto.'] }
      ]
    },
    {
      id: 'catalogue',
      kicker: 'Catalogo',
      title: 'Prodotti con prezzi per data',
      lead: 'Hotel, transfer, guide e attività, ognuno con i suoi prezzi per data. Il preventivo usa il prezzo delle date del viaggio.',
      visual: 'catalogue',
      features: [
        { title: 'Periodi di prezzo per data', body: ['Bassa, media e alta stagione, eventi speciali, tariffe dei nuovi contratti. Ogni prodotto conserva i suoi prezzi per periodo, e il preventivo usa quello che corrisponde alle date del viaggio.'] },
        { title: 'Più fornitori per prodotto', body: ['Tieni due società di transfer o tre guide per lo stesso servizio, ognuna con le sue tariffe, e scegline una per viaggio.'] },
        { title: 'Pacchetti pronti', body: ['Salva una volta i tuoi itinerari classici. Aggiungi il pacchetto intero a un preventivo con un clic, poi modifica ciò che cambia.'] }
      ]
    },
    {
      id: 'quotes',
      kicker: 'Preventivi',
      title: 'Margine, IVA e commissioni',
      lead: 'Imposta una volta le tue regole di prezzo, e ogni riga del preventivo le applica.',
      visual: 'margin',
      features: [
        { title: 'Procedure di prezzo', body: ['Una procedura di prezzo trasforma le tue tariffe nette in prezzi di vendita: il tuo margine, l’IVA corretta e la commissione quando un’agenzia o un partner vende il viaggio.'] },
        { title: 'Incluso e non incluso', body: ['Cosa comprende il prezzo e cosa no, elencato nel preventivo.'] },
        { title: 'Versioni', body: ['Il cliente chiede un hotel più economico? Crea una nuova versione. La precedente resta, e puoi riaprirla in qualsiasi momento.'] }
      ]
    },
    {
      id: 'send',
      kicker: 'Invio e sollecito',
      title: 'Invio e sollecito',
      lead: 'Il preventivo parte via email nella lingua del cliente. Sette giorni dopo torna da te per un sollecito.',
      visual: 'followup',
      features: [
        { title: 'Modelli di email', body: ['I tuoi testi, in ogni lingua. Il preventivo è allegato e l’email è pronta da inviare.'] },
        { title: 'Nella lingua del cliente', body: ['Spagnolo, catalano, inglese, francese e italiano. Il preventivo, l’email e i documenti seguono la lingua del cliente.'] },
        { title: 'Sollecito dopo 7 giorni', body: ['Una settimana dopo l’invio, il preventivo compare nella tua lista da sollecitare.'] }
      ]
    },
    {
      id: 'proposal',
      kicker: 'Proposta',
      title: 'Una pagina con il viaggio',
      lead: 'Il cliente riceve un link a una pagina con il viaggio, nella sua lingua e con il tuo logo.',
      visual: 'proposal',
      features: [
        { title: 'Una proposta di viaggio da condividere', body: ['Un solo link con il viaggio, i servizi e il prezzo. Si apre su qualsiasi telefono.'] },
        { title: 'Il tuo marchio', body: ['Il tuo logo e i tuoi colori sulla pagina e su ogni documento.'] },
        { title: 'Gli stessi numeri ovunque', body: ['La proposta, il PDF del preventivo e poi la fattura vengono dalle stesse righe. Cambi un prezzo una volta ed è corretto ovunque.'] }
      ]
    },
    {
      id: 'partners',
      kicker: 'Agenzie partner',
      title: 'Vendere tramite agenzie partner',
      lead: 'Fai il preventivo all’agenzia partner, tieni il suo cliente sul viaggio e liquida la sua commissione dagli stessi numeri.',
      visual: 'commission',
      features: [
        { title: 'Il partner e il suo cliente', body: ['Il preventivo va all’agenzia partner, i viaggiatori sono suoi clienti. Entrambi restano sul viaggio, dal primo preventivo all’ultima fattura.'] },
        { title: 'La commissione nel prezzo', body: ['Indica la commissione del partner sul preventivo. È nel prezzo di vendita fin dalla prima riga, e il tuo margine resta visibile per te.'] },
        { title: 'Estratti conto delle commissioni', body: ['Quanto devi a ogni partner, per periodo, dai viaggi che ti ha inviato. Lo liquidi con un clic.'] }
      ]
    }
  ],
  faq: [
    { q: 'Posso importare il mio catalogo attuale?', a: ['Sì. Durante l’avvio importiamo i tuoi prodotti, prezzi e fornitori dai tuoi fogli di calcolo. Avvio e importazione sono gratuiti con la fatturazione annuale.'] },
    { q: 'Più fornitori possono vendere lo stesso hotel o servizio?', a: ['Sì. Un prodotto può avere più fornitori, ognuno con le sue tariffe. Scegli il fornitore per ogni viaggio.'] },
    { q: 'Cosa vede il mio cliente?', a: ['Un preventivo pulito con i nomi pensati per lui, prezzi a persona, cosa è incluso e cosa no, nella sua lingua e con il tuo marchio. Le tue tariffe nette e i tuoi margini restano riservati al tuo team.'] },
    { q: 'Devo usare il catalogo per ogni preventivo?', a: ['Un preventivo può combinare righe del catalogo e righe libere.'] }
  ]
};

const book: JobPage = {
  slug: 'book',
  metaTitle: 'Prenotare e seguire il viaggio: pratiche, fornitori, itinerario del cliente | Traviosoft',
  metaDescription:
    'Tutti i servizi del viaggio in un’unica lista. Gli stati di prenotazione, viaggio e pagamento si aggiornano da soli, le email dei fornitori vengono archiviate sul viaggio e il tuo cliente riceve un itinerario giorno per giorno.',
  name: 'Prenotare e seguire',
  menuLine: 'Dal preventivo accettato al viaggio concluso',
  step: '2 di 4',
  heroTitle: 'Pratiche, prenotazioni e itinerario del cliente',
  heroLead:
    'Tutti i servizi del viaggio sono in un’unica lista di prenotazioni. Le richieste partono ai fornitori con un clic, le risposte vengono archiviate sul viaggio e il viaggiatore ha la sua pagina itinerario.',
  heroVisual: 'order',
  chapters: [
    {
      id: 'order',
      kicker: 'Prenotazioni',
      title: 'Ogni prenotazione pronta per il viaggio',
      lead: 'Tutti i servizi del viaggio sono in un’unica lista. Un clic invia le richieste di prenotazione, i fornitori confermano e il viaggio è pronto.',
      visual: 'confirm',
      features: [
        { title: 'Tutti i servizi in una lista', body: ['Il preventivo accettato porta l’hotel, la guida, l’auto e le visite, con date, viaggiatori e prezzi. Niente da riscrivere.'] },
        { title: 'Richieste di prenotazione in un clic', body: ['Ogni fornitore riceve la sua richiesta di prenotazione via email, con le date e i viaggiatori. Le risposte vengono archiviate sul viaggio.'] },
        { title: 'Modifiche dopo la conferma', body: ['Il cliente aggiunge una notte? Aggiorna il viaggio e la pratica si adegua, così il team lavora sempre sull’ultima versione.'] }
      ]
    },
    {
      id: 'status',
      kicker: 'Stati',
      title: 'Stati di prenotazione, viaggio e pagamento',
      lead: 'Gli stati cambiano man mano che i servizi vengono confermati e i pagamenti arrivano.',
      visual: 'statuses',
      features: [
        { title: 'Una lista di prenotazioni per viaggio', body: ['Hotel, guida, auto, biglietti: ogni servizio mostra se è da prenotare, in attesa del fornitore o confermato.'] },
        { title: 'Indicatori che si aggiornano da soli', body: ['Quando l’ultimo servizio è confermato, il viaggio risulta prenotato. Quando il saldo è pagato, l’indicatore del pagamento diventa verde.'] },
        { title: 'Archivio', body: ['I viaggi conclusi vanno in archivio e restano ricercabili. Un elemento eliminato si può recuperare dal cestino.'] }
      ]
    },
    {
      id: 'suppliers',
      kicker: 'Fornitori',
      title: 'Schede ed email dei fornitori',
      lead: 'Contatti, documenti ed email, archiviati sul fornitore e sul viaggio.',
      visual: 'suppliers',
      features: [
        { title: 'Email dei fornitori archiviate per te', body: ['Le conferme e le risposte dei fornitori arrivano sul viaggio a cui si riferiscono.'] },
        { title: 'Voucher di servizio', body: ['Invia a ogni guida, autista o hotel un voucher chiaro con date, nomi e dettagli, direttamente dal viaggio.'] },
        { title: 'Richieste di disponibilità e ordini di acquisto ai fornitori', body: ['Chiedi la disponibilità a un hotel, poi invia l’ordine di acquisto dal viaggio. Risposte e modifiche tornano sulla prenotazione.'], premium: true }
      ]
    },
    {
      id: 'itinerary',
      kicker: 'Itinerario del cliente',
      title: 'Un itinerario giorno per giorno',
      lead: 'Una pagina con ogni giorno, gli hotel, gli orari e i contatti, condivisa con il viaggiatore tramite un link.',
      visual: 'itinerary',
      features: [
        { title: 'Una pagina itinerario da condividere', body: ['Un solo link, giorno per giorno. Si apre su qualsiasi telefono.'] },
        { title: 'Nella lingua del viaggiatore e con il tuo marchio', body: ['L’itinerario segue la lingua del cliente e porta il tuo logo.'] },
        { title: 'Sempre aggiornato', body: ['Cambi l’orario di un pick-up sul viaggio e la pagina mostra il nuovo orario. Il link resta lo stesso.'] }
      ]
    },
    {
      id: 'groups',
      kicker: 'Gruppi',
      title: 'Gruppi e rooming list',
      lead: 'Liste dei viaggiatori, servizi per una parte del gruppo e una rooming list per hotel.',
      visual: 'rooming',
      features: [
        { title: 'La lista dei viaggiatori', body: ['Incolla o importa la lista da un foglio di calcolo, oppure invia all’organizzatore il link a un modulo. Fino a 200 viaggiatori per viaggio.'] },
        { title: 'Servizi per una parte del gruppo', body: ['La giornata di golf per dodici, la cena di gala per tutti: ogni servizio indica chi lo prende, e i conteggi per l’hotel si adeguano.'] },
        { title: 'Una rooming list per hotel', body: ['Camere costruite a partire da chi dorme con chi, numerate per hotel, pronte da inviare in PDF o in foglio di calcolo.'] }
      ]
    },
    {
      id: 'calendar',
      kicker: 'Calendario',
      title: 'I viaggi su un calendario',
      lead: 'Ogni viaggio è una barra sul calendario. Sul telefono, i servizi del giorno si vedono in una lista.',
      visual: 'calendar',
      features: [
        { title: 'Barre dei viaggi', body: ['Vedi ogni viaggio dall’arrivo alla partenza, e quanto sono piene le prossime settimane.'] },
        { title: 'La giornata sul telefono', body: ['Arrivi, transfer e visite di oggi in una lista che puoi consultare tra due appuntamenti.'] },
        { title: 'Dati dei viaggiatori', body: ['I viaggiatori inseriscono passaporto, dieta ed esigenze di accessibilità tramite il link a un modulo, e le risposte arrivano sul viaggio.'] }
      ]
    }
  ],
  faq: [
    { q: 'Le mie guide e i miei autisti possono vedere il viaggio?', a: ['Ricevono via email un voucher di servizio con ciò che serve: date, orari, nomi e punto di incontro.'] },
    { q: 'Cosa succede se il cliente cambia una data?', a: ['Aggiorna il viaggio. I servizi, la pagina itinerario e i voucher seguono la modifica, e i servizi da riprenotare tornano da prenotare.'] },
    { q: 'Come arrivano le email dei fornitori sul viaggio?', a: ['Le email dei fornitori vengono archiviate automaticamente sul viaggio.'] }
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
    'Pagamenti e fatture vengono dal preventivo accettato, quindi gli importi coincidono.',
  heroVisual: 'payments',
  chapters: [
    {
      id: 'schedule',
      kicker: 'Scadenze di pagamento',
      title: 'Acconto e saldo con le scadenze',
      lead: 'L’acconto e il saldo sono definiti nel preventivo, con le loro scadenze.',
      visual: 'schedule',
      features: [
        { title: 'Acconto e saldo', body: ['Una percentuale o un importo, ognuno con la sua scadenza, su ogni viaggio.'] },
        { title: 'Cosa scade questa settimana', body: ['Tutti i pagamenti in scadenza o scaduti, su tutti i tuoi viaggi, in un’unica lista.'] },
        { title: 'Promemoria di pagamento', body: ['I promemoria partono verso il cliente prima e dopo una scadenza, nella sua lingua.'] }
      ]
    },
    {
      id: 'links',
      kicker: 'Link di pagamento',
      title: 'Link di pagamento nell’email',
      lead: 'Il tuo link di pagamento parte con l’email, e il cliente paga da lì.',
      visual: 'paylink',
      features: [
        { title: 'Il tuo link di pagamento', body: ['Collega il link di pagamento che usi già. Parte con l’email del preventivo.'] },
        { title: 'Registra un pagamento con un clic', body: ['Un bonifico o un pagamento con carta viene registrato sul viaggio, e l’indicatore del pagamento si aggiorna da solo.'] }
      ]
    },
    {
      id: 'invoices',
      kicker: 'Fatture',
      title: 'Fatture dal viaggio',
      lead: 'Le fatture di acconto e finali nascono dal viaggio, con gli importi del preventivo.',
      visual: 'invoices',
      features: [
        { title: 'Fatture di acconto e finali', body: ['Create dal viaggio con un clic, con i dati del cliente e gli importi giusti.'] },
        { title: 'Note di credito', body: ['Un annullamento o una modifica diventa una nota di credito collegata alla fattura originale.'] },
        { title: 'Pronto per il commercialista', body: ['Un riepilogo Excel o uno zip con tutti i PDF a fine mese, in due clic.'] }
      ]
    },
    {
      id: 'dashboard',
      kicker: 'Dashboard',
      title: 'Vendite, viaggi e liquidità',
      lead: 'Vendite, viaggi, entrate e uscite, per il periodo che scegli.',
      visual: 'dashboard',
      features: [
        { title: 'Vendite e viaggi', body: ['Quanto hai venduto e quanti viaggi, questo mese, questa stagione o quest’anno.'] },
        { title: 'Entrate e uscite', body: ['Quanto ti hanno pagato i clienti e quanto devi ai fornitori, fianco a fianco.'] },
        { title: 'Oggi', body: ['Promemoria, pagamenti in scadenza e prenotazioni da confermare, riuniti per la giornata.'] }
      ]
    }
  ],
  faq: [
    { q: 'Quali sistemi di pagamento funzionano?', a: ['Aggiungi il link di pagamento del servizio che usi già. Il cliente paga lì, e tu registri il pagamento sul viaggio.'] },
    { q: 'Il mio commercialista può avere i file?', a: ['Sì. Esporta un riepilogo Excel o uno zip con tutti i PDF delle fatture per qualsiasi periodo.'] },
    { q: 'Segue le regole del mio paese?', a: ['La numerazione delle fatture per società e le note di credito funzionano ovunque. Il regime IVA spagnolo per le agenzie di viaggio è integrato. Negli altri paesi, le fatture passano dal tuo software di fatturazione. Per il tuo paese, chiedicelo durante la demo.'] }
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
    'Impostazioni per marchi, lingue, valute, regole fiscali del paese e utenti. Valgono per ogni viaggio.',
  heroVisual: 'settings',
  chapters: [
    {
      id: 'brands',
      kicker: 'Marchi',
      title: 'Più marchi in un solo account',
      lead: 'Gestisci un secondo marchio o una seconda società dallo stesso posto, ognuno con il suo stile e la sua numerazione.',
      visual: 'brands',
      features: [
        { title: 'Logo e colori per marchio', body: ['Ogni preventivo, proposta, itinerario e fattura porta il marchio del viaggio.'], premium: true },
        { title: 'Numerazione per società', body: ['Ogni società mantiene la propria numerazione delle fatture.'], premium: true }
      ]
    },
    {
      id: 'languages',
      kicker: 'Lingue',
      title: 'Documenti nella lingua del cliente',
      lead: 'Preventivi, email, proposte e itinerari in spagnolo, catalano, inglese, francese e italiano.',
      visual: 'languages',
      features: [
        { title: 'Documenti per lingua', body: ['Ogni cliente ha una lingua, e ogni documento la segue.'] },
        { title: 'Traduzioni automatiche', body: ['Le descrizioni dei prodotti del catalogo vengono tradotte per te, e puoi correggere qualsiasi traduzione.'] },
        { title: 'Modelli di email per lingua', body: ['I tuoi testi in ogni lingua, usati automaticamente.'] }
      ]
    },
    {
      id: 'currencies',
      kicker: 'Valute',
      title: 'Più valute',
      lead: 'Lodge in dollari, un cliente in sterline, la tua contabilità in euro. Ogni preventivo ha la sua valuta, e i totali si sommano nella tua.',
      visual: 'currencies',
      features: [
        { title: 'Una valuta per cliente e per preventivo', body: ['Fai il preventivo a un cliente britannico in sterline e a un partner americano in dollari, dallo stesso catalogo.'], premium: true },
        { title: 'I prezzi dei fornitori nella loro valuta', body: ['Tieni ogni tariffa nella valuta in cui fattura il fornitore. Il preventivo la converte al cambio del giorno, con un margine di sicurezza che scegli tu.'], premium: true },
        { title: 'La contabilità in una sola valuta', body: ['Fatture, pagamenti, margini e report si sommano nella tua valuta contabile, con utili e perdite su cambi calcolati per te.'], premium: true }
      ]
    },
    {
      id: 'country',
      kicker: 'Impostazioni del paese',
      title: 'Regole fiscali del paese',
      lead: 'Regimi fiscali e fatturazione elettronica sono impostazioni. La Spagna è integrata.',
      visual: 'country',
      features: [
        { title: 'Regimi IVA delle agenzie di viaggio', body: ['Per la Spagna, il regime IVA delle agenzie di viaggio (REAV) e la sua dicitura sulle tue fatture sono integrati.'] },
        { title: 'Fatturazione elettronica', body: ['A seconda del paese, le fatture partono da Traviosoft o dal tuo software di fatturazione.'] }
      ]
    },
    {
      id: 'team',
      kicker: 'Team',
      title: 'Utenti e team',
      lead: 'Tutti lavorano sugli stessi clienti, preventivi e prenotazioni.',
      visual: 'team',
      features: [
        { title: 'Utenti inclusi nel piano', body: ['3 utenti in entrambi i piani, e altri quando il tuo team cresce.'] },
        { title: 'Team, portafogli e ruoli', body: ['Assegna a ogni team e a ogni persona i propri clienti e viaggi, e decidi chi vede cosa.'], premium: true }
      ]
    },
    {
      id: 'data',
      kicker: 'I tuoi dati',
      title: 'Dati e hosting',
      lead: 'Ogni agenzia ha il suo spazio separato, ospitato nell’Unione europea, distinto da quello di ogni altra agenzia.',
      visual: 'safe',
      features: [
        { title: 'Uno spazio separato per la tua agenzia', body: ['I tuoi dati stanno nel loro spazio, separati da quelli delle altre agenzie.'] },
        { title: 'Ospitato nell’UE', body: ['I tuoi dati restano nell’Unione europea, nel rispetto del GDPR.'] },
        { title: 'I tuoi dati vengono con te', body: ['Se smetti, riavrai i tuoi dati in formati standard.'] }
      ]
    },
    {
      id: 'connections',
      kicker: 'Collegamenti',
      title: 'Collegamenti',
      lead: 'Gli altri software che usi possono leggere e scrivere i tuoi dati Traviosoft, con gli stessi diritti che nell’app.',
      visual: 'connections',
      features: [
        { title: 'Il tuo sito e la tua contabilità', body: ['Il tuo sito, il tuo strumento di contabilità o uno sviluppatore con cui lavori possono leggere e scrivere i tuoi dati Traviosoft.'], premium: true },
        { title: 'I tuoi strumenti di IA', body: ['Collega l’assistente di IA che usi già, come Claude o ChatGPT, ai tuoi dati Traviosoft, con gli stessi diritti della persona che lo collega.'], premium: true },
        { title: 'L’assistente dentro Traviosoft', body: ['Chiedi cosa richiede la tua attenzione oggi, fai preparare un preventivo dal tuo catalogo o trasforma un listino di un fornitore in prezzi del catalogo. Ogni modifica attende il tuo OK.'], premium: true }
      ]
    }
  ],
  faq: [
    { q: 'Dove sono i miei dati?', a: ['In uno spazio separato per la tua agenzia, ospitato nell’Unione europea.'] },
    { q: 'Posso andarmene con i miei dati?', a: ['Sì. Riavrai i tuoi dati in formati standard.'] },
    { q: 'Chi può vedere cosa?', a: ['Con Classic, ogni utente vede i viaggi dell’agenzia. Con Premium, ogni team e ogni persona può avere i propri clienti, viaggi e diritti.'] }
  ]
};

export const jobs: Record<JobSlug, JobPage> = { sell, book, 'get-paid': getPaid, setup };
