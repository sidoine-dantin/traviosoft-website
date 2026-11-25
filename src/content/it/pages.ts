import type { SiteContent } from '../types';
import { PRICES } from '../prices';

const FREE = 'Gratuito con fatturazione annuale*';

export const pricing: SiteContent['pricing'] = {
  metaTitle: `Prezzi: Classic da ${PRICES.classic.yearly} EUR al mese, Premium da ${PRICES.premium.yearly} EUR | Traviosoft`,
  metaDescription:
    `Due piani per agenzie di viaggio su misura e DMC. Classic gestisce tutta l’agenzia da ${PRICES.classic.yearly} EUR al mese; Premium aggiunge gruppi, più team, valute, ordini di acquisto ai fornitori e più marchi. ${PRICES.usersIncluded} utenti inclusi, avvio gratuito con fatturazione annuale.`,
  title: 'Prezzi',
  productLink: 'Vedi il prodotto',
  lead: 'Classic copre tutta l’agenzia, dalla prima richiesta all’ultima fattura. Premium aggiunge gruppi, più team, altre valute, ordini di acquisto ai fornitori e più marchi.',
  yearly: 'Annuale',
  monthly: 'Mensile',
  yearlyNote: 'Prezzi al mese, IVA esclusa.',
  plans: [
    {
      id: 'classic',
      name: 'Classic',
      users: `${PRICES.usersIncluded} utenti inclusi`,
      yearly: String(PRICES.classic.yearly),
      monthly: String(PRICES.classic.monthly),
      priceNote: { yearly: `Utente aggiuntivo: ${PRICES.extraUser.classic.yearly} EUR al mese`, monthly: `Utente aggiuntivo: ${PRICES.extraUser.classic.monthly} EUR al mese` },
    },
    {
      id: 'premium',
      name: 'Premium',
      users: `${PRICES.usersIncluded} utenti inclusi`,
      yearly: String(PRICES.premium.yearly),
      monthly: String(PRICES.premium.monthly),
      priceNote: { yearly: `Utente aggiuntivo: ${PRICES.extraUser.premium.yearly} EUR al mese`, monthly: `Utente aggiuntivo: ${PRICES.extraUser.premium.monthly} EUR al mese` },
      hot: true,
    }
  ],
  compareTitle: 'Confronta i piani',
  compareFeature: 'Funzione',
  yes: 'Incluso',
  no: 'Non incluso',
  compare: [
    {
      title: 'Vendere',
      rows: [
        { f: 'Richieste e preventivi con il tuo margine e le commissioni', classic: true, premium: true },
        { f: 'Catalogo con prezzi per stagione', classic: true, premium: true },
        { f: 'Agenzie partner ed estratti conto delle commissioni', classic: true, premium: true },
        { f: 'Il preventivo come pagina web e l’itinerario giorno per giorno, con il tuo logo e i tuoi colori', classic: true, premium: true },
        { f: 'Documenti nella lingua del cliente', classic: true, premium: true },
        { f: 'Preventivi e prezzi dei fornitori in altre valute', classic: false, premium: true }
      ]
    },
    {
      title: 'Prenotare',
      rows: [
        { f: 'Le prenotazioni di ogni preventivo accettato, con le email dei fornitori conservate sul viaggio', classic: true, premium: true },
        { f: 'Voucher di servizio per guide, autisti e hotel', classic: true, premium: true },
        { f: 'Gruppi: liste dei viaggiatori, modulo compilato dai viaggiatori e rooming list', classic: false, premium: true },
        { f: 'Richieste di disponibilità e ordini di acquisto ai fornitori', classic: false, premium: true }
      ]
    },
    {
      title: 'Incassare',
      rows: [
        { f: 'Scadenze di pagamento e link di pagamento', classic: true, premium: true },
        { f: 'Promemoria di pagamento automatici', classic: false, premium: true },
        { f: 'Fatture e note di credito', classic: 'In Spagna: integrate. Altrove: tramite il tuo software di fatturazione', premium: 'In Spagna: integrate. Altrove: tramite il tuo software di fatturazione' },
        { f: 'Dashboard con vendite, viaggi e cassa', classic: true, premium: true },
        { f: 'Esportazione verso il tuo software di contabilità', classic: false, premium: true }
      ]
    },
    {
      title: 'Team e collegamenti',
      rows: [
        { f: 'Più team, ognuno con i suoi clienti e i suoi viaggi', classic: false, premium: true },
        { f: 'Ruoli su misura: chi vede e fa cosa', classic: false, premium: true },
        { f: 'Più marchi e società in un solo account', classic: false, premium: true },
        { f: 'Lavora in Traviosoft dall’assistente AI che usi già (Claude, ChatGPT, Mistral)', classic: true, premium: true },
        { f: 'L’assistente AI dentro Traviosoft', classic: { text: 'Opzionale, con limiti di utilizzo', option: true }, premium: { text: 'Opzionale, con limiti di utilizzo', option: true } },
        { f: 'Accesso API, per collegare il tuo sito e altri software tramite il tuo sviluppatore', classic: false, premium: true }
      ]
    },
    {
      title: 'Avvio e assistenza',
      rows: [
        { f: 'Configurazione del tuo marchio, dei documenti e delle regole di prezzo, e formazione del tuo team', classic: { text: FREE, was: `${PRICES.setupMonthly} EUR` }, premium: { text: FREE, was: `${PRICES.setupMonthly} EUR` } },
        { f: 'Importazione dei tuoi fogli di calcolo o dell’export del tuo strumento attuale**', classic: { text: FREE, was: `${PRICES.importMonthly} EUR` }, premium: { text: FREE, was: `${PRICES.importMonthly} EUR` } },
        { f: 'Assistenza via email', classic: true, premium: true },
        { f: 'Hosting nell’Unione europea', classic: true, premium: true },
        { f: 'Esportazione dei dati su richiesta', classic: true, premium: true }
      ]
    }
  ],
  compareNote: [`* Offerta a tempo limitato, solo con fatturazione annuale. Con fatturazione mensile, la configurazione e l’affiancamento (${PRICES.setupMonthly} EUR) e l’importazione (${PRICES.importMonthly} EUR) si pagano una volta all’inizio. Tariffe stagionali e altri file (Word, PDF, email, viaggi in corso) si importano su preventivo.`, '** Per dati puliti e ben organizzati.'],
  faq: [
    {
      q: 'Quale piano mi serve?',
      a: ['Classic gestisce un’intera agenzia: richieste, preventivi, partner, prenotazioni, pagamenti e fatture. Premium aggiunge gruppi, promemoria di pagamento automatici, più team, vendita in altre valute e ordini di acquisto ai fornitori.']
    },
    {
      q: 'Come viene fatturato?',
      a: ['Annuale o mensile, a tua scelta. L’annuale costa meno al mese e include configurazione e importazione. Il mensile si può interrompere alla fine di qualsiasi mese.']
    },
    {
      q: 'I prezzi sono con o senza IVA?',
      a: ['Senza. L’IVA si aggiunge in fattura secondo il tuo paese e la forma giuridica della tua azienda.']
    },
    {
      q: 'E se aggiungo un utente?',
      a: [`Entrambi i piani includono ${PRICES.usersIncluded} utenti. Ogni utente aggiuntivo costa ${PRICES.extraUser.classic.yearly} EUR al mese con Classic e ${PRICES.extraUser.premium.yearly} EUR con Premium in fatturazione annuale (${PRICES.extraUser.classic.monthly} e ${PRICES.extraUser.premium.monthly} EUR in fatturazione mensile).`]
    },
    {
      q: 'Posso cambiare piano?',
      a: ['Sì. Passa da Classic a Premium in qualsiasi momento, e le nuove funzioni sono attive lo stesso giorno. I tuoi dati restano come sono.']
    },
    {
      q: 'Posso disdire?',
      a: ['Sì. I piani mensili terminano alla fine del mese in cui disdici. I piani annuali proseguono fino alla fine dell’anno pagato e terminano lì.']
    },
    {
      q: 'Posso portare via i miei dati se me ne vado?',
      a: ['Sì. Riavrai i tuoi dati in formati standard.']
    },
    {
      q: 'Cosa comprendono la configurazione e l’affiancamento?',
      a: [`Configuriamo il tuo marchio, i tuoi documenti, le tue regole di margine, IVA e commissioni, e gli accessi del tuo team. Poi formiamo il tuo team in videochiamata e restiamo disponibili via email nelle prime settimane. Sono gratuiti con fatturazione annuale e costano ${PRICES.setupMonthly} EUR una tantum con fatturazione mensile.`]
    },
    {
      q: 'Cosa comprende l’importazione?',
      a: [`Il tuo catalogo con un prezzo per prodotto, i tuoi clienti e i tuoi fornitori, da fogli di calcolo o da un export del tuo strumento attuale, con una riga per elemento e le stesse colonne dall’inizio alla fine. È gratuita con fatturazione annuale e costa ${PRICES.importMonthly} EUR una tantum con fatturazione mensile.`, 'Tariffe stagionali, documenti Word, PDF, email, viaggi in corso e liste da riordinare prima hanno un prezzo su preventivo, dopo aver visto un esempio.']
    }
  ]
};

export const demo: SiteContent['demo'] = {
  metaTitle: 'Demo del software per agenzie di viaggio | Traviosoft',
  metaDescription:
    'Una chiamata di 30 minuti: un viaggio di esempio in Traviosoft dalla richiesta alla fattura, poi prezzi e domande.',
  title: 'Prenota una demo',
  lead: 'Una chiamata di 30 minuti. Seguiamo un viaggio di esempio in Traviosoft, dalla prima richiesta alla fattura finale.',
  agendaTitle: 'La chiamata',
  agenda: [
    { mins: '5', title: 'La tua agenzia', body: 'Dimensione del team, cosa vendi e gli strumenti che usi oggi.' },
    { mins: '15', title: 'Un viaggio di esempio', body: 'La richiesta, il preventivo con il margine, le prenotazioni, il programma di viaggio, il pagamento e la fattura.' },
    { mins: '10', title: 'Prezzi e domande', body: 'Il piano per il tuo team, l’importazione dei tuoi dati e le tue domande.' }
  ],
  afterTitle: 'Dopo la chiamata',
  after: [
    'La proposta e il programma giorno per giorno visti durante la chiamata',
    'Un breve riepilogo via email',
    'Il prezzo per il tuo team, per iscritto',
    'Una seconda chiamata, se la chiedi'
  ],
  bookTitle: 'Scegli un orario per la tua demo',
  bookBody: 'Per ora la prenotazione avviene via email. Inviaci il nome della tua agenzia, la dimensione del team e alcuni giorni che ti vanno bene, e ti rispondiamo con un orario.',
  emailLabel: 'Scrivi a',
  bookCta: 'Scegli un orario',
  bookCalendarBody: '30 minuti su Google Meet, in inglese o in francese. L’invito arriva via email.',
  emailAltLabel: 'Oppure scrivi a',
  email: 'hola@traviosoft.com',
  faq: [
    {
      q: 'C’è una prova gratuita?',
      a: ['C’è una demo di 30 minuti su un viaggio di esempio.']
    },
    {
      q: 'Chi fa la demo?',
      a: ['Una persona del team Traviosoft, in inglese o in francese.']
    },
    {
      q: 'Devo preparare qualcosa?',
      a: ['Niente da preparare.']
    },
    {
      q: 'Mi chiederete i miei dati?',
      a: ['La demo usa un viaggio di esempio con dati inventati.']
    }
  ]
};

export const switching: SiteContent['switching'] = {
  metaTitle: 'Passare da Excel a Traviosoft | Traviosoft',
  metaDescription:
    'Come passare da Excel, Word e WhatsApp in piena stagione: cosa importiamo, cosa controlli tu e come continuare a gestire i viaggi in corso mentre ne avvii di nuovi.',
  title: 'Passare a Traviosoft',
  lead: 'Il passaggio avviene per tappe, accanto ai viaggi che stai gestendo.',
  timelineTitle: 'Come funziona',
  timeline: [
    {
      title: 'Ci invii i tuoi file',
      body: 'Le tue tariffe, i clienti, i fornitori e i viaggi aperti, in fogli di calcolo o come export di un altro strumento.'
    },
    {
      title: 'Noi importiamo, tu controlli',
      body: 'Carichiamo tutto nello spazio della tua agenzia. Lo apri, guardi qualche prodotto e qualche cliente, e ci dici cosa sistemare.'
    },
    {
      title: 'Il tuo primo preventivo reale',
      body: 'Configuriamo le tue regole di margine, IVA e commissioni e il tuo marchio, poi formiamo il tuo team in videochiamata. Prepari un preventivo reale con le tue tariffe. Rispondiamo alle tue domande via email.'
    },
    {
      title: 'Le nuove richieste entrano nell’app',
      body: 'Da quel momento, ogni nuova richiesta parte in Traviosoft. I viaggi già in corso si concludono come sono iniziati.'
    }
  ],
  importTitle: 'Cosa viene importato',
  importParts: [
    { title: 'Incluso nel prezzo dell’importazione', body: 'Il tuo catalogo con un prezzo per prodotto, i tuoi clienti, i tuoi fornitori e i loro contatti. Da fogli di calcolo o da un export del tuo strumento attuale.' },
    { title: 'Su preventivo', body: 'Tariffe stagionali, viaggi in corso e altri file (Word, PDF, email). Ti diamo un prezzo dopo aver visto un esempio.' }
  ],
  seasonTitle: 'Creerà problemi durante la stagione?',
  seasonBody: [
    'Le nuove richieste entrano in Traviosoft dal giorno in cui sei operativo. I viaggi già in corso si concludono come sono iniziati.',
    'I viaggi aperti si spostano solo se vuoi, di solito quelli più lontani nel tempo. Un viaggio che parte la settimana prossima resta dov’è.',
    'In alta stagione importiamo prima e partiamo in una settimana più tranquilla.'
  ],
  faq: [
    {
      q: 'Potete importare dal mio strumento attuale?',
      a: ['Se esporta in un foglio di calcolo, sì. Inviaci un esempio di export e ti diciamo cosa viene importato.']
    },
    {
      q: 'Quanto costa?',
      a: [`La configurazione, l’affiancamento e l’importazione dei tuoi fogli di calcolo sono gratuiti con fatturazione annuale. Con fatturazione mensile, la configurazione e l’affiancamento costano ${PRICES.setupMonthly} EUR una tantum e l’importazione ${PRICES.importMonthly} EUR una tantum.`, 'Il prezzo dell’importazione copre liste con un prezzo per prodotto, una riga per elemento e le stesse colonne dall’inizio alla fine. Tariffe stagionali, documenti Word, PDF, viaggi in corso e liste da riordinare prima hanno un prezzo su preventivo, dopo aver visto un esempio.']
    },
    {
      q: 'Cosa succede ai miei vecchi file?',
      a: ['Restano esattamente dove sono. Importiamo delle copie.']
    },
    {
      q: 'Devo spostare tutti i vecchi viaggi?',
      a: ['Sposta quelli aperti che vuoi e tieni il resto nel tuo archivio. I clienti passati vale la pena importarli; per i viaggi passati basta il tuo archivio.']
    },
    {
      q: 'E se l’importazione va corretta?',
      a: ['Controlli un campione prima di partire, e lo sistemiamo con te. Qualsiasi cosa noti dopo, la correggi nell’app o ce la segnali.']
    }
  ]
};

export const faqPage: SiteContent['faqPage'] = {
  metaTitle: 'Domande frequenti | Traviosoft',
  metaDescription:
    'Cosa fa Traviosoft, quanto costa, dove sono ospitati i tuoi dati e come funziona il passaggio da Excel.',
  title: 'Domande frequenti',
  lead: 'Se la tua domanda non è qui, scrivi a hola@traviosoft.com.',
  groups: [
    {
      title: 'Prodotto',
      items: [
        {
          q: 'Cos’è Traviosoft?',
          a: ['Un gestionale web per agenzie di viaggio su misura e DMC. Copre le richieste, i preventivi, le prenotazioni, l’itinerario del cliente, i pagamenti e le fatture.']
        },
        {
          q: 'Più fornitori possono vendere lo stesso hotel o servizio?',
          a: ['Sì. Un prodotto può avere più fornitori, ognuno con le sue tariffe. Scegli il fornitore per ogni viaggio.']
        },
        {
          q: 'Cosa vede il mio cliente?',
          a: ['Un preventivo con il nome che scegli per ogni servizio e i prezzi per persona, nella sua lingua e con il tuo marchio. La pagina web del preventivo indica anche cosa è incluso e non incluso. I tuoi prezzi di acquisto e i tuoi margini restano riservati al tuo team.']
        },
        {
          q: 'Le mie guide e i miei autisti possono vedere il viaggio?',
          a: ['Ricevono via email un voucher di servizio con date, orari, nomi e punto di incontro.']
        },
        {
          q: 'Lavorate con DMC che vendono tramite agenzie partner?',
          a: ['Sì. Fai il preventivo all’agenzia partner, tieni il suo cliente sul viaggio, aggiungi la commissione del partner e liquidala da un estratto conto per periodo.']
        },
        {
          q: 'Posso usare Traviosoft da Claude o ChatGPT?',
          a: ['Sì, in entrambi i piani. Collega Claude, ChatGPT o Mistral, poi chiedi cosa ti aspetta, fai preparare un preventivo dal tuo catalogo o registra la conferma di un fornitore. Ti chiede conferma prima di ogni modifica e fa solo ciò che può fare la persona che lo ha collegato.']
        },
        {
          q: 'C’è un assistente dentro Traviosoft?',
          a: ['Sì, come opzione in entrambi i piani, con limiti di utilizzo. Chiedigli cosa richiede la tua attenzione oggi, fagli preparare un preventivo dal tuo catalogo o trasformare il listino di un fornitore in prezzi del catalogo; ogni modifica attende il tuo OK.']
        }
      ]
    },
    {
      title: 'Prezzo e fatturazione',
      items: [
        {
          q: 'Quanto costa?',
          a: [`Classic costa ${PRICES.classic.yearly} EUR al mese e Premium ${PRICES.premium.yearly} EUR al mese, con fatturazione annuale, ${PRICES.usersIncluded} utenti inclusi. Ogni utente aggiuntivo costa ${PRICES.extraUser.classic.yearly} EUR al mese con Classic e ${PRICES.extraUser.premium.yearly} EUR con Premium. IVA esclusa.`]
        },
        {
          q: 'Posso pagare mensilmente?',
          a: [`Sì. Con fatturazione mensile, Classic costa ${PRICES.classic.monthly} EUR e Premium ${PRICES.premium.monthly} EUR. La configurazione e l’affiancamento costano ${PRICES.setupMonthly} EUR una tantum e l’importazione dei tuoi fogli di calcolo ${PRICES.importMonthly} EUR una tantum con fatturazione mensile; con fatturazione annuale sono tutti gratuiti.`]
        },
        {
          q: 'C’è una prova gratuita?',
          a: ['C’è una demo di 30 minuti su un viaggio di esempio.']
        }
      ]
    },
    {
      title: 'Dati e sicurezza',
      items: [
        {
          q: 'Dove sono i miei dati?',
          a: ['In uno spazio separato per la tua agenzia, ospitato nell’Unione europea, distinto da quello di ogni altra agenzia.']
        },
        {
          q: 'Posso andarmene con i miei dati?',
          a: ['Sì. Riavrai i tuoi dati in formati standard.']
        },
        {
          q: 'Chi può vedere cosa?',
          a: ['Con Classic, ogni utente vede i viaggi dell’agenzia. Con Premium, ogni team e ogni persona può avere i propri clienti, viaggi e diritti.']
        }
      ]
    },
    {
      title: 'Passaggio',
      items: [
        {
          q: 'Posso importare il mio catalogo attuale?',
          a: ['Sì. Durante l’avvio importiamo i tuoi prodotti, prezzi e fornitori dai tuoi fogli di calcolo. Configurazione e importazione sono gratuite con fatturazione annuale.']
        },
        {
          q: 'Il passaggio creerà problemi durante la stagione?',
          a: ['Avviene in parallelo. Inizia con le nuove richieste in Traviosoft e concludi i viaggi in corso come sono iniziati.']
        },
        {
          q: 'Segue le regole del mio paese?',
          a: ['La numerazione delle fatture per società e le note di credito funzionano ovunque. Il regime IVA spagnolo per le agenzie di viaggio è integrato. Negli altri paesi, le fatture passano dal tuo software di fatturazione. Per il tuo paese, chiedici durante la demo.']
        }
      ]
    }
  ]
};

export const about: SiteContent['about'] = {
  metaTitle: 'Chi siamo | Traviosoft',
  metaDescription:
    'Traviosoft è un software gestionale per agenzie di viaggio su misura e DMC: ogni viaggio in un unico posto, dalla prima richiesta alla fattura finale, con i tuoi dati ospitati nell’UE.',
  title: 'Chi siamo',
  lead: 'Traviosoft è un software gestionale per agenzie di viaggio su misura e DMC. Ogni viaggio è in un unico posto, dalla prima richiesta alla fattura finale.',
  blocks: [
    { title: 'Pensato per i viaggi su misura', body: ['Ogni viaggio è diverso. Traviosoft calcola ogni servizio dalla tariffa netta del fornitore, lavora con più fornitori per servizio e gestisce gruppi, valute e documenti nella lingua del cliente.'] },
    { title: 'Un viaggio, gli stessi numeri', body: ['Il preventivo accettato genera le prenotazioni, le scadenze e le fatture. Tutta l’agenzia lavora sugli stessi numeri, inseriti una sola volta.'] },
    { title: 'I tuoi dati', body: ['Ogni agenzia ha il proprio spazio privato. I tuoi dati sono ospitati nell’Unione europea e puoi esportarli in qualsiasi momento.'] },
    { title: 'Lavorare con noi', body: ['Configuriamo il tuo account e importiamo i tuoi dati insieme a te. L’assistenza è via email, con le persone che sviluppano Traviosoft.'] }
  ]
};

export const resources: SiteContent['resources'] = {
  metaTitle: 'Risorse per agenzie di viaggio su misura | Traviosoft',
  metaDescription:
    'Confronti, guide e un glossario per agenzie su misura e DMC che scelgono un gestionale. Linguaggio semplice, senza registrazione.',
  title: 'Risorse',
  lead: 'Confronti, guide e un glossario.',
  groups: [
    { kind: 'best', title: 'Confronto dei migliori software', body: 'Gli strumenti usati da agenzie su misura e DMC, uno accanto all’altro, e a chi si adatta ciascuno.' },
    { kind: 'compare', title: 'Confronti', body: 'Traviosoft accanto ad altri strumenti.' },
    { kind: 'guide', title: 'Guide', body: 'Note pratiche su preventivi, prenotazioni e fatturazione di un viaggio su misura.' },
    { kind: 'invoicing', title: 'Fatturazione per paese', body: 'Come fatturano le agenzie di viaggio in Spagna, Francia, Germania e Belgio, con le date della fatturazione elettronica.' },
    { kind: 'glossary', title: 'Glossario', body: 'I termini delle agenzie di viaggio e del software, una riga ciascuno.' },
  ],
  glossaryTitle: 'Glossario',
  glossaryMeta:
    'Definizioni semplici dei termini usati da agenzie di viaggio su misura e DMC: tariffa netta, commissione, voucher, rooming list, acconto e altro.',
  glossaryLead: 'Le parole che usi ogni giorno, e quelle del software, una riga ciascuna.'
};
