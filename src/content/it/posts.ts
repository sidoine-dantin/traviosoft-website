import type { Article } from '../types';

// Articoli aggiunti il 28 novembre 2026, scelti dalle ricerche di Search Console e dai volumi dello strumento di pianificazione delle parole chiave di Google Ads.

const dmc: Article = {
  key: 'what-is-a-dmc',
  kind: 'guide',
  slug: 'dmc-cosa-significa',
  metaTitle: 'DMC: cosa significa e cosa fa un’agenzia incoming',
  metaDescription:
    'Cos’è una DMC, cosa organizza, chi sono i suoi clienti, in cosa si distingue da un tour operator o un’agenzia di viaggi e come calcola i prezzi.',
  title: 'DMC: cosa significa',
  lead: 'Una DMC (destination management company), o agenzia incoming, è un’azienda con sede in una destinazione che organizza quello che i viaggiatori fanno lì: transfer, guide, escursioni, hotel, ristoranti ed eventi. I suoi clienti sono di solito tour operator, agenzie di viaggi e organizzatori di eventi, che vendono il viaggio al viaggiatore.',
  updated: '2026-11-28',
  card: 'Cosa organizza una DMC, chi sono i suoi clienti e come calcola i prezzi.',
  related: ['hotel-allotment', 'package-quote', 'quote-with-margins', 'net-commissionable-rates', 'best-dmc-software'],
  blocks: [
    { type: 'h2', text: 'Definizione', id: 'definition' },
    {
      type: 'p',
      text: 'ADMEI, l’associazione internazionale delle DMC, definisce una DMC come un’azienda di servizi con sede nella sua destinazione, specializzata nella conoscenza e nelle risorse locali. La descrive come un partner per la gestione di eventi, tour e attività, trasporti, intrattenimento e logistica dei programmi.'
    },
    {
      type: 'p',
      text: 'In Europa si parla anche di turismo incoming: incoming in italiano, agence réceptive in francese, agencia receptiva in spagnolo e turismo recetivo in portoghese.'
    },
    { type: 'h2', text: 'Cosa organizza una DMC', id: 'services' },
    {
      type: 'list',
      items: [
        'I transfer tra l’aeroporto, gli hotel e i luoghi da visitare.',
        'Gli hotel, spesso a tariffe negoziate per la stagione.',
        'Guide, escursioni, visite e attività.',
        'Ristoranti, cene private ed eventi a tema.',
        'Per gruppi ed eventi: location, logistica dei congressi e viaggi incentive.',
        'L’assistenza sul posto durante il soggiorno dei viaggiatori.'
      ]
    },
    {
      type: 'p',
      text: 'Smart Meetings paragona la DMC sia all’architetto sia all’impresa generale di un programma: prepara la proposta, sceglie e coordina i fornitori locali e segue il programma sul posto.'
    },
    { type: 'h2', text: 'Chi sono i suoi clienti', id: 'clients' },
    {
      type: 'list',
      items: [
        'Tour operator e agenzie di viaggi di altri paesi, che vendono il viaggio ai propri clienti.',
        'Organizzatori di meeting, incentive ed eventi (MICE), per gruppi e programmi aziendali.',
        'Aziende che organizzano un viaggio o un evento per i propri team.',
        'Alcune DMC vendono anche direttamente ai viaggiatori.'
      ]
    },
    { type: 'h2', text: 'DMC, tour operator, agenzia di viaggi e DMO', id: 'differences' },
    {
      type: 'table',
      head: ['Termine', 'Cosa indica di solito'],
      rows: [
        ['DMC', 'Un’azienda della destinazione che organizza i servizi sul posto e li vende ad agenzie, tour operator e organizzatori di eventi.'],
        ['Tour operator', 'Un’azienda che crea viaggi, spesso in più destinazioni, e li vende tramite agenzie o direttamente. Lavora spesso con una DMC in ogni destinazione.'],
        ['Agenzia di viaggi', 'Un’azienda che vende viaggi ai viaggiatori. Un’agenzia di viaggi su misura crea il viaggio con il viaggiatore e prenota i servizi, a volte tramite una DMC.'],
        ['DMO', 'Un’organizzazione di gestione o promozione della destinazione, di solito pubblica o senza scopo di lucro. In genere non vende viaggi.']
      ]
    },
    {
      type: 'p',
      text: 'Queste attività si sovrappongono. Una DMC può essere anche tour operator, e un’agenzia su misura può organizzare da sé la propria destinazione. La posizione giuridica di ogni azienda dipende dalle norme sui viaggi del suo paese.'
    },
    { type: 'h2', text: 'Come una DMC calcola i prezzi', id: 'pricing' },
    {
      type: 'p',
      text: 'Una DMC di solito acquista dai fornitori a tariffe nette, aggiunge il proprio margine e vende all’agenzia o al tour operator, che aggiunge il proprio margine o riceve una commissione. Le pagine [Tariffe nette e tariffe commissionabili](/guides/tariffe-nette-e-tariffe-commissionabili) e [Come si calcola il prezzo di un viaggio su misura](/guides/preventivo-viaggio-su-misura-con-margine) mostrano il calcolo con le cifre.'
    },
    {
      type: 'p',
      text: 'Per gruppi e programmi regolari, una DMC ha spesso camere in allotment negli hotel, con una data di release per le camere non vendute. La pagina [L’allotment alberghiero e la data di release](/guides/allotment-hotel-release) spiega come funziona.'
    },
    { type: 'h2', text: 'Una richiesta, passo dopo passo', id: 'steps' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Un’agenzia invia una richiesta: date, numero di viaggiatori, budget e desideri.',
        'La DMC verifica la disponibilità con i fornitori e prepara un programma con il prezzo.',
        'L’agenzia conferma, spesso dopo una o due versioni.',
        'La DMC prenota ogni servizio, raccoglie le conferme e invia i voucher e la rooming list.',
        'I viaggiatori arrivano; la DMC segue il programma sul posto.',
        'La DMC fattura all’agenzia e paga i fornitori.'
      ]
    },
    {
      type: 'p',
      text: 'Secondo Smart Meetings, alcune DMC stimano che un quarto o meno delle loro proposte diventi un contratto: per questo conta il tempo dedicato a ogni proposta.'
    },
    { type: 'h2', text: 'Associazioni', id: 'associations' },
    {
      type: 'p',
      text: 'ADMEI (Association of Destination Management Executives International) riunisce DMC. I suoi requisiti di adesione chiedono tour e attività e trasporti, più almeno due tra gestione di eventi, intrattenimento e logistica dei programmi. Molti paesi hanno anche associazioni nazionali di agenzie incoming.'
    },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'Traviosoft è un [software gestionale per agenzie di viaggi su misura e DMC](/). Riunisce le richieste, un catalogo con le tariffe nette per stagione, i preventivi con margine e commissione, le prenotazioni con ogni fornitore, i pagamenti e le fatture di ogni viaggio.'
    },
    { type: 'h2', text: 'Domande', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Cosa significa DMC?', a: ['Destination management company, cioè azienda di gestione della destinazione. Nel turismo e negli eventi la sigla indica quasi sempre un’agenzia incoming.'] },
        { q: 'Una DMC è un’agenzia di viaggi?', a: ['Una DMC lavora nella destinazione e vende soprattutto ad altre aziende del turismo. A seconda del paese, può avere una licenza di agenzia di viaggi o di tour operator.'] },
        { q: 'Che differenza c’è tra DMC e DMO?', a: ['Una DMC è un’azienda che vende servizi in una destinazione. Una DMO è di solito un ente pubblico o senza scopo di lucro che promuove la destinazione.'] },
        { q: 'Come guadagna una DMC?', a: ['Con il margine tra le tariffe nette che paga ai fornitori e il prezzo a cui vende. Alcune fanno pagare anche le proposte o i sopralluoghi.'] }
      ]
    },
    {
      type: 'p',
      text: 'Fonti (in inglese): [requisiti di adesione ADMEI](https://growthzonesitesprod.azureedge.net/wp-content/uploads/sites/1073/2020/03/DMC-MEMBERSHIP-REQUIREMENTS.pdf), [Smart Meetings, «The evolution of the DMC»](https://www.smartmeetings.com/meeting-planning/133619/evolution-dmc), [Wikipedia, «Destination management»](https://en.wikipedia.org/wiki/Destination_management). Consultate il 28 novembre 2026.'
    }
  ]
};

const allotment: Article = {
  key: 'hotel-allotment',
  kind: 'guide',
  slug: 'allotment-hotel-release',
  metaTitle: 'Allotment alberghiero: data di release, cut-off e wash',
  metaDescription:
    'L’allotment alberghiero, la data di release e il cut-off, cosa succede alle camere invendute, wash e attrition, con un esempio.',
  title: 'L’allotment alberghiero e la data di release',
  lead: 'Un allotment è un numero di camere che un hotel riserva a un tour operator, a una DMC o a un’agenzia, a una tariffa concordata, per un periodo. Le camere non vendute alla data di release tornano all’hotel, che le vende attraverso gli altri canali.',
  updated: '2026-11-28',
  card: 'Allotment, data di release, cut-off, wash e attrition, con un esempio.',
  related: ['rooming-list', 'what-is-a-dmc', 'net-commissionable-rates', 'quote-with-margins'],
  blocks: [
    { type: 'h2', text: 'Cos’è un allotment', id: 'definition' },
    {
      type: 'p',
      text: 'L’hotel mette da parte un numero di camere per notte per un partner, per un’intera stagione, una parte di stagione o date precise, a una tariffa fissata in anticipo. Il partner vende quelle camere ai propri clienti, dentro un viaggio o un programma. Le camere fuori allotment si prenotano su richiesta: ogni prenotazione attende la conferma dell’hotel.'
    },
    {
      type: 'p',
      text: 'Secondo Wikipedia, gli hotel concedono allotment soprattutto a partner con uno storico di vendite, a tariffe dal 10% al 50% inferiori al prezzo al pubblico.'
    },
    { type: 'h2', text: 'Data di release e cut-off', id: 'release' },
    {
      type: 'p',
      text: 'Il periodo di release, detto anche cut-off, è il numero di giorni prima dell’arrivo in cui le camere non vendute tornano all’hotel. Dopo quella data, una nuova prenotazione dipende da quello che l’hotel ha ancora disponibile.'
    },
    {
      type: 'table',
      head: ['Fonte', 'Periodo di release indicato'],
      rows: [
        ['Wikipedia e Xotels', 'Un esempio di 4 giorni prima dell’arrivo'],
        ['Fáilte Ireland', '14 o 7 giorni prima della data bloccata, a mezzogiorno'],
        ['Roommaster', 'Da 21 a 45 giorni per la maggior parte dei mercati leisure; meno per gli allotment aziendali']
      ]
    },
    { type: 'p', text: 'Il contratto con ogni hotel fissa il periodo. Può cambiare secondo la stagione.' },
    { type: 'h2', text: 'Due tipi di allotment', id: 'kinds' },
    {
      type: 'list',
      items: [
        '**Fisso:** un numero di camere per notte, con un’unica data di release per tutto il blocco.',
        '**A richiamo (call-off):** il partner preleva camere da una disponibilità comune man mano che arrivano le prenotazioni, e le camere vengono rilasciate in modo progressivo.'
      ]
    },
    {
      type: 'p',
      text: 'Un blocco di camere per un gruppo funziona in modo simile per un solo soggiorno: l’hotel tiene le camere fino a una data limite, entro cui aspetta la rooming list.'
    },
    { type: 'h2', text: 'Wash e attrition', id: 'wash' },
    {
      type: 'list',
      items: [
        '**Wash:** la parte di un blocco rimasta invenduta alla data di release. Un partner che vende 70 camere su un blocco di 100 ha un wash del 30%.',
        '**Attrition:** una clausola che fissa quanto paga il partner se usa meno camere di quelle concordate.'
      ]
    },
    {
      type: 'p',
      text: 'Gli hotel confrontano anche gli allotment con i livelli di produzione concordati, ogni trimestre o ogni anno. Quando un allotment è usato meno del previsto, il contratto può permettere all’hotel di ridurlo o di cambiare la tariffa.'
    },
    { type: 'h2', text: 'Esempio', id: 'example' },
    {
      type: 'p',
      text: 'Una DMC ha 10 camere doppie per notte in allotment in un hotel da maggio a settembre, con un periodo di release di 21 giorni. Per la notte del 12 giugno, la data di release è il 22 maggio.'
    },
    {
      type: 'table',
      head: ['Data', 'Camere vendute', 'Camere in allotment'],
      rows: [
        ['1° maggio', '4', '10'],
        ['22 maggio (data di release)', '7', '7: le 3 camere invendute tornano all’hotel'],
        ['2 giugno', '8', 'L’8ª camera si prenota su richiesta']
      ]
    },
    { type: 'p', text: 'Per quella notte, il wash è di 3 camere su 10, cioè il 30%. (Esempio inventato per questa pagina.)' },
    { type: 'h2', text: 'La rooming list', id: 'rooming-list' },
    {
      type: 'p',
      text: 'Per un gruppo, l’hotel di solito aspetta i nomi entro la data limite, in una rooming list. La pagina [La rooming list per gruppi ed eventi MICE](/guides/rooming-list-gruppi-mice) descrive cosa contiene.'
    },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'In Traviosoft, ogni prenotazione con un hotel è un’attività del viaggio, dalla richiesta alla conferma dell’hotel, e la rooming list per hotel si crea a partire da chi divide la camera con chi.'
    },
    { type: 'h2', text: 'Domande', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Che differenza c’è tra un allotment e un blocco di camere per un gruppo?', a: ['Un allotment copre un periodo, spesso una stagione, e il partner vende le camere a molti clienti. Un blocco per un gruppo copre il soggiorno di un solo gruppo.'] },
        { q: 'Cosa succede dopo la data di release?', a: ['Le camere invendute tornano all’hotel, che può venderle alle tariffe del momento. Una prenotazione successiva dipende dalla disponibilità.'] },
        { q: 'Il periodo di release è un termine di cancellazione?', a: ['Sono due clausole distinte. Il periodo di release riguarda le camere non vendute; le condizioni di cancellazione riguardano le camere già prenotate.'] }
      ]
    },
    {
      type: 'p',
      text: 'Fonti (in inglese): [Wikipedia, «Allotment (travel industry)»](https://en.wikipedia.org/wiki/Allotment_(travel_industry)), [glossario Xotels, allotment](https://xotels.com/en/glossary/allotment) e [cut-off](https://xotels.com/en/glossary/cut-off), [Fáilte Ireland, condizioni per i contratti B2B](https://failteireland.ie/FailteIreland/media/WebsiteStructure/Documents/Brexit/Considerations-for-T-Cs-for-B2B-Contracting-Accomm-Providers.pdf), [Roommaster](https://www.roommaster.com/blog/hotel-allotment-management), [Mews](https://www.mews.com/en/blog/hotel-room-allotment). Consultate il 28 novembre 2026.'
    }
  ]
};

const PKG_DISCLAIMER =
  'Informazioni generali, scritte il 28 novembre 2026 a partire dal testo della direttiva europea. Non sono una consulenza legale e non hanno valore legale. Ogni paese applica la direttiva con una propria legge, che può aggiungere regole: verifica i testi ufficiali o rivolgiti a un consulente qualificato. Traviosoft non si assume alcuna responsabilità per decisioni prese sulla base di questa pagina.';

const packageQuote: Article = {
  key: 'package-quote',
  kind: 'guide',
  slug: 'preventivo-pacchetto-turistico-informazioni',
  metaTitle: 'Preventivo di un pacchetto turistico: cosa deve indicare',
  metaDescription:
    'Quando un viaggio su misura è un pacchetto turistico secondo la direttiva (UE) 2015/2302 e cosa indicano il preventivo e il contratto.',
  title: 'Cosa contiene il preventivo di un pacchetto turistico',
  lead: 'Quando un’agenzia combina un volo, un hotel, un’auto o un’escursione per lo stesso viaggio, il viaggio è spesso un pacchetto turistico secondo la direttiva europea. La direttiva elenca le informazioni che il viaggiatore riceve prima di prenotare e cosa aggiunge il contratto.',
  updated: '2026-11-28',
  card: 'Quando un viaggio è un pacchetto, e le informazioni del preventivo e del contratto.',
  related: ['quote-with-margins', 'what-is-a-dmc', 'eu-vat-travel', 'gdpr-travel'],
  blocks: [
    { type: 'callout', text: PKG_DISCLAIMER },
    { type: 'h2', text: 'Quando un viaggio è un pacchetto', id: 'package' },
    {
      type: 'p',
      text: 'L’articolo 3 della direttiva (UE) 2015/2302 distingue quattro tipi di servizi turistici: il trasporto di passeggeri, l’alloggio, il noleggio di auto e moto, e gli altri servizi turistici come escursioni o visite guidate. Un pacchetto è la combinazione di almeno due tipi diversi per lo stesso viaggio, quando vale uno di questi casi:'
    },
    {
      type: 'list',
      items: [
        'un professionista li combina prima della conclusione di un contratto unico, anche su richiesta del viaggiatore;',
        'sono acquistati presso un unico punto vendita e scelti prima che il viaggiatore accetti di pagare;',
        'sono offerti o fatturati a un prezzo forfettario o globale;',
        'sono pubblicizzati o venduti come «pacchetto» o con un nome simile;',
        'sono prenotati tramite processi di prenotazione online collegati, alle condizioni dell’articolo.'
      ]
    },
    {
      type: 'p',
      text: 'Un hotel combinato solo con servizi turistici come escursioni non è un pacchetto quando quei servizi non rappresentano una parte significativa del valore del viaggio e non sono pubblicizzati come elemento essenziale.'
    },
    { type: 'h2', text: 'Le informazioni date prima della prenotazione', id: 'information' },
    {
      type: 'p',
      text: 'Secondo l’articolo 5, prima che il viaggiatore sia vincolato, l’organizzatore consegna il modulo informativo standard dell’allegato I e le seguenti informazioni:'
    },
    {
      type: 'table',
      head: ['Articolo 5(1)', 'Informazione'],
      rows: [
        ['a)', 'Le caratteristiche principali: destinazioni, itinerario, date e numero di notti; trasporto, orari e scali; posizione, caratteristiche e categoria dell’alloggio; pasti; visite ed escursioni incluse; se il viaggio è di gruppo e la dimensione approssimativa del gruppo; lingua dei servizi guidati; e se il viaggio è adatto a persone con mobilità ridotta.'],
        ['b)', 'La denominazione commerciale e l’indirizzo dell’organizzatore e del venditore, con telefono ed email.'],
        ['c)', 'Il prezzo totale, comprese tasse, diritti e altri costi, oppure il tipo di costi ancora da pagare quando non si possono calcolare in anticipo.'],
        ['d)', 'Le modalità di pagamento: l’acconto come importo o percentuale e le date del saldo.'],
        ['e)', 'Il numero minimo di partecipanti, se previsto, e la data entro cui il viaggio può essere annullato se quel numero non è raggiunto.'],
        ['f)', 'Informazioni generali su passaporti, visti e formalità sanitarie della destinazione.'],
        ['g)', 'Il fatto che il viaggiatore può recedere in qualsiasi momento prima dell’inizio, pagando spese di recesso.'],
        ['h)', 'Le assicurazioni, facoltative od obbligatorie, che coprono il recesso o l’assistenza e il rimpatrio.']
      ]
    },
    {
      type: 'p',
      text: 'L’articolo 5(3) chiede che queste informazioni siano date in modo chiaro, comprensibile ed evidente, e siano leggibili quando sono scritte.'
    },
    { type: 'h2', text: 'Cosa aggiunge il contratto', id: 'contract' },
    { type: 'p', text: 'L’articolo 7 elenca cosa contiene il contratto di pacchetto turistico oltre alle informazioni sopra:' },
    {
      type: 'list',
      items: [
        'le richieste particolari accettate dall’organizzatore;',
        'che l’organizzatore è responsabile dell’esecuzione dei servizi e deve prestare assistenza al viaggiatore in difficoltà;',
        'il nome e i recapiti della protezione in caso di insolvenza;',
        'un rappresentante locale o un punto di contatto per assistenza e reclami;',
        'l’obbligo di segnalare senza ritardo ogni problema durante il viaggio;',
        'per i minori che viaggiano da soli, un contatto nel luogo di soggiorno;',
        'le procedure di reclamo, compresa la risoluzione alternativa delle controversie;',
        'il diritto di cedere il contratto a un altro viaggiatore.'
      ]
    },
    {
      type: 'p',
      text: 'Il viaggiatore riceve una copia o una conferma del contratto su un supporto durevole, come un PDF. In tempo utile prima della partenza, l’organizzatore invia ricevute, voucher e biglietti e gli orari di partenza e di ritorno.'
    },
    { type: 'h2', text: 'Modifiche del prezzo dopo la prenotazione', id: 'price' },
    {
      type: 'p',
      text: 'Secondo l’articolo 10, il prezzo può aumentare dopo la prenotazione solo se il contratto lo prevede, e solo per variazioni del costo del carburante per il trasporto, di tasse e diritti fissati da terzi o dei tassi di cambio. Il viaggiatore è avvisato almeno 20 giorni prima dell’inizio, con il calcolo. Oltre l’8% del prezzo totale, il viaggiatore può accettare la modifica o recedere senza spese. Quando questi costi diminuiscono, il viaggiatore ha diritto a una riduzione del prezzo.'
    },
    { type: 'h2', text: 'Recesso', id: 'cancellation' },
    {
      type: 'list',
      items: [
        'Il viaggiatore può recedere in qualsiasi momento prima dell’inizio, pagando spese adeguate e giustificabili. Il contratto può fissare spese standard secondo la data del recesso (articolo 12(1)).',
        'Il viaggiatore recede senza spese quando circostanze inevitabili e straordinarie nel luogo di destinazione o nelle immediate vicinanze incidono in modo sostanziale sul viaggio (articolo 12(2)).',
        'L’organizzatore può annullare quando i partecipanti sono meno del minimo indicato: al più tardi 20 giorni prima di un viaggio di oltre sei giorni, 7 giorni prima di un viaggio da due a sei giorni e 48 ore prima di uno più breve (articolo 12(3)).',
        'I rimborsi sono pagati entro 14 giorni dal recesso (articolo 12(4)).'
      ]
    },
    { type: 'h2', text: 'Il nome del pacchetto in ogni lingua', id: 'names' },
    {
      type: 'p',
      text: 'La direttiva parla di «pacchetto turistico» in italiano, «package» in inglese, «voyage à forfait» in francese, «viaje combinado» in spagnolo e «viagem organizada» in portoghese. Ogni paese l’ha recepita con una propria legge; in Italia, nel Codice del Turismo.'
    },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'In Traviosoft, il preventivo che riceve il cliente mostra il programma giorno per giorno, cosa è incluso e cosa no, il totale e il prezzo a persona, l’acconto e le date del saldo, e la data di validità del preventivo.'
    },
    { type: 'h2', text: 'Domande', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Un viaggio su misura è un pacchetto turistico?', a: ['Spesso, quando combina almeno due tipi di servizi turistici per lo stesso viaggio, come un volo e un hotel, o un hotel e un’auto. L’articolo 3 della direttiva dà tutte le condizioni.'] },
        { q: 'La direttiva si applica ai viaggi di lavoro?', a: ['L’articolo 2 esclude i pacchetti acquistati in base a un accordo generale per l’organizzazione di viaggi di lavoro tra un’azienda e un professionista. Altri viaggi di lavoro possono rientrare.'] },
        { q: 'Il prezzo può cambiare dopo la prenotazione?', a: ['Solo se il contratto lo prevede, per i motivi dell’articolo 10, e al più tardi 20 giorni prima dell’inizio.'] }
      ]
    },
    {
      type: 'p',
      text: 'Testo ufficiale: [direttiva (UE) 2015/2302 su EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32015L2302), disponibile in tutte le lingue dell’UE.'
    }
  ]
};


const INV_DISCLAIMER =
  "Informazione generale, scritta il 28 novembre 2026. Non è una consulenza legale, fiscale o contabile e non ha valore legale. Ogni paese stabilisce le proprie regole di fatturazione e di IVA: verifica le fonti ufficiali o chiedi a un consulente qualificato. Traviosoft non si assume alcuna responsabilità per decisioni basate su questa pagina.";

const invoicing: Article = {
  key: 'agency-invoicing',
  kind: 'guide',
  slug: "fatturazione-contabilita-agenzia-viaggi",
  metaTitle: "Fatturazione e contabilità di un’agenzia di viaggi",
  metaDescription: "Come si fattura un viaggio su misura: fatture di acconto e di saldo, note di credito, il margine per viaggio e cosa riceve il commercialista ogni mese.",
  title: "Fatturazione e contabilità di un’agenzia di viaggi, passo dopo passo",
  lead: "In un’agenzia di viaggi, la fattura arriva alla fine di una catena: il preventivo che il cliente accetta, l’acconto e il saldo, il costo di ogni fornitore e poi i file che riceve il commercialista. Questa pagina segue la catena per un viaggio su misura.",
  updated: '2026-11-28',
  card: "Fatture di acconto e di saldo, note di credito, il margine per viaggio e i file per il commercialista.",
  related: ['eu-vat-travel', 'invoicing-france', 'invoicing-spain', 'quote-with-margins', 'net-commissionable-rates'],
  blocks: [
    { type: 'callout', text: INV_DISCLAIMER },
    { type: 'h2', text: "Cosa distingue la fatturazione di un’agenzia di viaggi", id: 'specifics' },
    { type: 'list', items: ["Un viaggio riunisce i servizi di molti fornitori: hotel, guide, transfer, attività.", "Il cliente di solito paga un acconto alla conferma del viaggio e il saldo prima della partenza. I fornitori spesso fatturano più tardi, a volte dopo il viaggio.", "Nell’Unione europea, un’agenzia che vende viaggi in nome proprio con servizi acquistati da altri applica il regime speciale delle agenzie di viaggio: l’IVA è dovuta sul margine.", "Il margine di un viaggio è definitivo quando sono arrivate tutte le fatture dei fornitori."] },
    { type: 'h2', text: "I documenti di un viaggio", id: 'documents' },
    { type: 'table', head: ["Documento", "Quando", "Cosa indica"], rows: [["Preventivo", "Prima che il cliente accetti", "Il programma, il prezzo totale, l’acconto e il saldo con le loro date."], ["Fattura di acconto", "Quando arriva l’acconto", "L’importo dell’acconto e il viaggio a cui si riferisce."], ["Fattura di saldo", "Di solito prima della partenza", "Il prezzo totale del viaggio, meno l’acconto già fatturato."], ["Nota di credito", "Quando il viaggio è annullato o modificato", "L’importo che storna in tutto o in parte una fattura precedente, con il suo riferimento."]] },
    { type: 'p', text: "La direttiva IVA dell’Unione europea elenca i dati di una fattura, tra cui un numero progressivo che identifica la fattura e, quando si applica il regime delle agenzie di viaggio, la dicitura «regime del margine — agenzie di viaggio» (articolo 226). Ogni documento che modifica la fattura iniziale e vi fa riferimento, come una nota di credito, è assimilato a una fattura (articolo 219). Ogni paese stabilisce la formulazione esatta nella propria legge: vedi le pagine per [Spagna](/guides/fatturazione-agenzia-di-viaggi-spagna), [Francia](/guides/fatturazione-agenzia-di-viaggi-francia), [Germania](/guides/fatturazione-agenzia-di-viaggi-germania) e [Belgio](/guides/fatturazione-agenzia-di-viaggi-belgio)." },
    { type: 'h2', text: "Un esempio: un viaggio, dal preventivo al margine", id: 'example' },
    { type: 'p', text: "Un viaggio inventato di sette giorni per due viaggiatori, venduto a 4.800 EUR, con un acconto del 30%." },
    { type: 'table', head: ["Passaggio", "Importo"], rows: [["Fattura di acconto (30%)", "1.440 EUR"], ["Fattura di saldo: 4.800 EUR meno l’acconto", "3.360 EUR da pagare"], ["Hotel, come nel preventivo", "2.300 EUR"], ["Guida e transfer, come nel preventivo", "900 EUR"], ["Attività, come nel preventivo", "400 EUR"], ["Margine previsto nel preventivo", "1.200 EUR, il 25% del prezzo"], ["Fattura dei transfer ricevuta dopo il viaggio: 950 EUR invece di 900 EUR", "Margine di 1.150 EUR, il 24% del prezzo"]] },
    { type: 'p', text: "Nel regime speciale, l’IVA si calcola su questo margine. Per questo le agenzie confrontano ogni fattura di fornitore con il costo previsto nel preventivo. La pagina su [come si calcola il prezzo di un viaggio su misura](/guides/preventivo-viaggio-su-misura-con-margine) mostra come il prezzo di vendita nasce dai costi." },
    { type: 'h2', text: "Cosa riceve il commercialista", id: 'accountant' },
    { type: 'list', items: ["Le fatture e le note di credito del periodo, in ordine di numero.", "Gli incassi di ogni cliente, con le loro date.", "Le fatture dei fornitori, ognuna collegata al suo viaggio.", "Il margine di ogni viaggio, su cui si basa il regime delle agenzie di viaggio."] },
    { type: 'h2', text: "Software di fatturazione e gestionale per agenzie", id: 'software' },
    { type: 'p', text: "Un software di fatturazione emette e numera le fatture e le note di credito, e le invia come fattura elettronica nei paesi che lo richiedono. Un gestionale per agenzie contiene ciò che viene prima della fattura: la richiesta, il preventivo con costi e margine, le prenotazioni con ogni fornitore e il piano dei pagamenti." },
    { type: 'p', text: "Quando i due sono collegati, la fattura riprende gli importi del preventivo accettato, e il margine di ogni viaggio è già noto quando il commercialista lo chiede." },
    { type: 'h2', text: "In Traviosoft", id: 'traviosoft' },
    { type: 'p', text: "Traviosoft è un [software gestionale per agenzie di viaggi su misura e DMC](/). Le [fatture di acconto e di saldo e le note di credito](/get-paid) nascono dal preventivo accettato, gli incassi si registrano sul viaggio e la dashboard mostra cosa hanno pagato i clienti e cosa si deve ai fornitori. A fine mese, un riepilogo Excel o un file zip con tutte le fatture va al commercialista. Fuori dalla Spagna, la fattura è emessa dal software di fatturazione che usi già, collegato a Traviosoft." },
    { type: 'h2', text: "Domande", id: 'faq' },
    { type: 'faq', items: [
      { q: "Perché il margine può cambiare dopo la fattura di saldo?", a: ["Perché alcuni fornitori fatturano dopo il viaggio. Quando una fattura di fornitore è diversa dal costo del preventivo, il margine del viaggio cambia con essa."] },
      { q: "Che differenza c’è tra una nota di credito e un rimborso?", a: ["Una nota di credito è un documento che storna in tutto o in parte una fattura. Un rimborso è il denaro restituito al cliente. Un annullamento spesso produce entrambi."] },
      { q: "Le fatture possono restare nel mio software di fatturazione?", a: ["Sì. Fuori dalla Spagna, la fattura è emessa dal software di fatturazione che usi già, collegato a Traviosoft, con gli importi del preventivo accettato."] }
    ] },
    { type: 'p', text: "Fonti: [Commissione europea, regimi speciali IVA](https://taxation-customs.ec.europa.eu/special-schemes_it) e [direttiva 2006/112/CE del Consiglio, articoli 219 e 226](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:02006L0112-20250414)." }
  ]
};

export const posts: Article[] = [dmc, allotment, packageQuote, invoicing];
