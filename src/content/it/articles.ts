import type { Article, ArticleBlock, Faq } from '../types';
import { invoicingGuides } from './invoicing';
import { topicGuides } from './topics';
import { PRICES } from '../prices';

const UPDATED = '2026-11-03';

type Cmp = {
  key: string;
  slug: string;
  other: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  card: string;
  basis: string;
  rows: string[][];
  otherBetter: string[];
  usBetter: string[];
  switching: string;
  faq: Faq[];
  updated?: string;
};

function compare(c: Cmp): Article {
  const blocks: ArticleBlock[] = [
    { type: 'p', text: c.basis },
    { type: 'h2', text: 'Confronto punto per punto', id: 'confronto' },
    { type: 'table', head: ['', 'Traviosoft', c.other], rows: c.rows },
    { type: 'h2', text: `Quando ${c.other} è la scelta migliore`, id: 'quando-altro' },
    { type: 'list', items: c.otherBetter },
    { type: 'h2', text: 'Quando Traviosoft è più adatto', id: 'quando-traviosoft' },
    { type: 'list', items: c.usBetter },
    { type: 'h2', text: 'Passare a Traviosoft', id: 'passaggio' },
    { type: 'p', text: c.switching },
    { type: 'h2', text: 'Domande frequenti', id: 'faq' },
    { type: 'faq', items: c.faq },
    { type: 'p', text: 'La [pagina Demo](/demo) descrive la demo, fatta su un viaggio di esempio.' }
  ];
  return {
    key: c.key,
    kind: 'compare',
    slug: c.slug,
    metaTitle: c.metaTitle,
    metaDescription: c.metaDescription,
    title: c.title,
    lead: c.lead,
    updated: c.updated ?? UPDATED,
    card: c.card,
    blocks
  };
}

const SWITCH = (from: string) =>
  `Se passi a Traviosoft da ${from}, durante la configurazione importiamo prodotti, prezzi e fornitori dai tuoi fogli di calcolo, gratis con la fatturazione annuale. La pagina [Passare a Traviosoft](/switch) descrive i passaggi.`;

const compares: Cmp[] = [
  {
    key: 'vs-excel',
    slug: 'traviosoft-vs-excel',
    other: 'Excel e Word',
    metaTitle: 'Traviosoft o Excel e Word per un’agenzia di viaggi',
    metaDescription:
      'Excel e Word sono il punto di partenza di quasi tutte le agenzie di viaggi. Confrontiamo preventivi, margini, prenotazioni e fatture per capire quando conviene un gestionale pensato per i viaggi.',
    title: 'Traviosoft o Excel e Word: quando passare a un gestionale per agenzie di viaggi',
    lead: 'Excel e Word sono flessibili, conosciuti e bastano a molte agenzie che vendono pochi viaggi all’anno. Quando entrano in gioco più persone, stagioni di prezzo e numerazione delle fatture, un gestionale pensato per i viaggi se ne occupa al posto tuo.',
    card: 'Foglio di calcolo o gestionale: quando conviene passare e quando no.',
    basis:
      'Excel e Word sono il punto di partenza di quasi tutte le agenzie, e molte ci lavorano bene per anni. Questa pagina mostra cosa cambia quando i viaggi passano in un gestionale fatto per loro. I dati di Traviosoft sono quelli del nostro sito al 3 novembre 2026.',
    rows: [
      ['Pensato per', 'Viaggi su misura: richieste, preventivi, prenotazioni e fatture', 'Qualsiasi lavoro di calcolo e di testo'],
      ['Prezzo', `Classic da ${PRICES.classic.yearly} EUR al mese, ${PRICES.usersIncluded} utenti inclusi`, 'La licenza Microsoft che hai già'],
      ['Margine e commissione', 'Regole di prezzo impostate una volta; ogni riga le segue', 'Formule che crei tu, del tutto flessibili'],
      ['Stagioni e fornitori', 'Prezzi per periodo e più fornitori per prodotto', 'Schede organizzate a modo tuo'],
      ['Versioni del preventivo', 'Ogni versione è salvata e si può riaprire', 'Un file per versione'],
      ['Prenotazioni ai fornitori', 'Un elenco per viaggio con stati che si aggiornano da soli', 'Una colonna o un documento a parte'],
      ['Fatture', 'Create dal viaggio, numerate per società, con note di credito', 'Il tuo modello di fattura'],
      ['Regole fiscali spagnole', 'Il regime IVA delle agenzie di viaggio (REAV) in fattura', 'Da impostare nel tuo modello'],
      ['Programma per il cliente', 'Una pagina da condividere, giorno per giorno, nella sua lingua', 'Un PDF o un file Word inviato per email'],
      ['Dati', 'Uno spazio separato per la tua agenzia, ospitato nell’UE', 'I tuoi file, dovunque li conservi']
    ],
    otherBetter: [
      'Vendi pochi viaggi all’anno e li gestisci da solo. Un buon modello Excel ti dà tutto ciò che serve.',
      'Il tuo modo di lavorare è molto particolare e un foglio di calcolo vi si adatta meglio di qualsiasi programma.',
      'Non vuoi cambiare nulla adesso, per esempio in piena alta stagione. Cambiare a metà stagione è un rischio.',
      'Ti serve un’analisi una tantum o un report su misura. Excel resta lo strumento giusto, e Traviosoft esporta comunque in Excel.'
    ],
    usBetter: [
      'Due o più persone lavorano sugli stessi clienti e sugli stessi viaggi nello stesso momento.',
      'Quando un hotel cambia prezzo, vuoi vedere quali preventivi aperti ne sono toccati e aggiornarli in un colpo solo.',
      'Vuoi che margine e commissione si applichino sempre allo stesso modo, da regole impostate una volta.',
      'Vuoi che il preventivo diventi la fattura, e i file per il commercialista, senza ribattere nulla.',
      'Fatturi a clienti all’estero e ti servono documenti in spagnolo, inglese e francese.'
    ],
    switching:
      'Durante la configurazione importiamo prodotti, prezzi e fornitori dai tuoi fogli di calcolo, gratis con la fatturazione annuale. La pagina [Passare a Traviosoft](/switch) descrive i passaggi, e la guida "Da Excel a un gestionale per agenzie di viaggi" descrive cosa cambia.',
    faq: [
      { q: 'Posso continuare a usare Excel accanto a Traviosoft?', a: ['Sì. Puoi importare i tuoi dati da Excel ed esportare un riepilogo Excel o uno zip con tutti i PDF delle fatture per il commercialista.'] },
      { q: 'Che fine fanno le formule di margine che ho già?', a: ['Diventano regole di prezzo. Invece di copiare la formula in ogni file, la definisci una volta e si applica a ogni riga di ogni preventivo.'] },
      { q: 'Conviene a un’agenzia di una sola persona?', a: ['Dipende dal volume. Se vendi pochi viaggi e non ti servono fatture né programmi condivisi, un foglio di calcolo può bastare. Se i preventivi ti prendono ore ogni settimana, un gestionale comincia a ripagarsi.'] }
    ]
  },
  {
    key: 'vs-ezus',
    slug: 'traviosoft-vs-ezus',
    other: 'Ezus',
    metaTitle: 'Traviosoft o Ezus: confronto per DMC',
    metaDescription:
      'Confrontiamo Traviosoft ed Ezus: a chi si rivolge ciascuno, prezzi pubblicati, lingue e avvio, e cosa fa meglio ciascuno per DMC e agenzie su misura.',
    title: 'Traviosoft o Ezus: un confronto indipendente per DMC e agenzie incoming',
    lead: 'Ezus è un gestionale francese affermato per DMC, con molti clienti, prezzi pubblici e assistenza in cinque lingue. Traviosoft mostra un solo prezzo con gli utenti inclusi e aggiunge il regime IVA spagnolo delle agenzie di viaggio (REAV) per le agenzie in Spagna.',
    card: 'Due strumenti con prezzi pubblici: a chi si rivolge ciascuno e cosa include.',
    basis:
      'I dati di Ezus provengono dal suo sito e da elenchi pubblici, verificati il 3 novembre 2026. I prezzi cambiano: controlla sempre le pagine prezzi aggiornate di entrambi. Il numero di clienti di Ezus è quello che pubblica.',
    rows: [
      ['Pensato per', 'Agenzie incoming, DMC e agenzie su misura', 'DMC, agenzie incoming, tour operator e agenzie; FIT, gruppi e MICE'],
      ['Prezzo pubblicato', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR al mese, ${PRICES.usersIncluded} utenti inclusi`, 'Professional 75 EUR per utente al mese (fino a 10 utenti); Premium 100 EUR; Enterprise su richiesta'],
      ['Avvio', 'Configurazione e importazione gratuite con la fatturazione annuale', 'Pacchetto di onboarding da 1.990 EUR con avviamento guidato; importazione dati 390 EUR'],
      ['Lingue', 'Documenti in spagnolo, catalano, inglese, francese e italiano', 'Sito e assistenza in 5 lingue: EN, FR, ES, IT, PT'],
      ['Hosting dei dati', 'UE, uno spazio separato per agenzia', 'AWS Irlanda, secondo il suo sito']
    ],
    otherBetter: [
      'Vuoi un prodotto con più anni sul mercato e molte referenze pubbliche: Ezus dichiara di servire più di 600 agenzie in più di 70 paesi.',
      'Ti servono assistenza e documentazione in italiano o in portoghese.',
      'Apprezzi un avviamento guidato, con uno specialista di onboarding per diversi mesi.',
      'Ti serve un piano Enterprise: Ezus ne offre uno da 30 utenti.',
      'Vuoi un’area viaggiatori, un portale di pagamento e pagine web nello stesso strumento, come li descrive Ezus.'
    ],
    usBetter: [
      'Vuoi un solo prezzo con gli utenti inclusi, e configurazione e importazione incluse con la fatturazione annuale.',
      'La tua agenzia è in Spagna e vuoi il regime IVA spagnolo delle agenzie di viaggio (REAV) sulle fatture.',
      'Lavori soprattutto in spagnolo e francese e vuoi documenti e modelli di email nella lingua del cliente.',
      'Preferisci uno strumento costruito intorno al percorso di un viaggio: richiesta, preventivo con margine, prenotazione, pagamento e fattura.'
    ],
    switching: SWITCH('Ezus'),
    faq: [
      { q: 'Come sono i prezzi di ciascuno?', a: [`Traviosoft Classic costa ${PRICES.classic.yearly} EUR al mese con fatturazione annuale, ${PRICES.usersIncluded} utenti inclusi, con configurazione e importazione incluse. Ezus Professional costa 75 EUR per utente al mese, con un pacchetto di onboarding da 1.990 EUR che include un avviamento guidato. Controlla le pagine prezzi aggiornate di entrambi.`] },
      { q: 'Ezus funziona per la Spagna?', a: ['Sì. Ezus ha un sito e un’assistenza in spagnolo. Traviosoft include anche il regime IVA spagnolo delle agenzie di viaggio (REAV) per le agenzie in Spagna.'] },
      { q: 'Posso provarli entrambi?', a: ['Entrambi funzionano con una demo.'] }
    ]
  },
  {
    key: 'vs-giav',
    slug: 'traviosoft-vs-giav',
    other: 'GIAV',
    metaTitle: 'Traviosoft o GIAV: gestionale per agenzie di viaggi',
    metaDescription:
      'GIAV è un gestionale spagnolo per agenzie di viaggi presente da molti anni. Confrontiamo il suo orientamento con Traviosoft per i viaggi incoming e su misura.',
    title: 'Traviosoft o GIAV: due modi di gestire un’agenzia di viaggi',
    lead: 'GIAV è un gestionale per agenzie di viaggi con molti anni in Spagna e una lunga storia con le agenzie dettaglianti. Traviosoft è pensato per i viaggi incoming e su misura. Se vendi soprattutto viaggi a catalogo, GIAV può essere più adatto.',
    card: 'Uno strumento affermato per le agenzie dettaglianti e uno per i viaggi su misura e incoming.',
    basis:
      'I dati di GIAV provengono da elenchi e dalla stampa di settore. GIAV presenta prezzi e piani in una demo, quindi ne descriviamo l’orientamento. I dati di Traviosoft sono quelli del nostro sito al 3 novembre 2026.',
    rows: [
      ['Pensato per', 'Agenzie incoming, DMC e agenzie su misura', 'Gestione di agenzie di viaggi in Spagna, soprattutto dettaglianti'],
      ['Prezzo', `Classic da ${PRICES.classic.yearly} EUR al mese, ${PRICES.usersIncluded} utenti inclusi`, 'Su richiesta'],
      ['Conosciuto per', 'Preventivi con margine per riga, un catalogo stagionale, una pagina programma per il cliente e il regime IVA spagnolo delle agenzie di viaggio (REAV)', 'Una lunga storia con le agenzie di viaggi in Spagna']
    ],
    otherBetter: [
      'Sei un’agenzia dettagliante che vende biglietteria, hotel e pacchetti di tour operator. Uno strumento pensato per quel lavoro di solito è più adatto.',
      'Il tuo team e il tuo commercialista conoscono già GIAV e hai processi costruiti negli anni.',
      'Apprezzi un prodotto con una lunga storia sul mercato spagnolo.',
      'Ti servono integrazioni contabili o con il commercialista che hai già attive con loro.'
    ],
    usBetter: [
      'Costruisci viaggi su misura o ricevi viaggiatori dall’estero, e ogni preventivo si calcola servizio per servizio dalle tariffe nette.',
      'Ti servono prezzi per stagione e più fornitori per lo stesso servizio.',
      'Vuoi inviare ai clienti una proposta e una pagina programma nella loro lingua, con il tuo marchio.',
      'Vuoi vedere sul sito il prezzo e cosa include ogni piano.'
    ],
    switching: SWITCH('GIAV'),
    faq: [
      { q: 'Posso importare i miei dati da GIAV?', a: ['Importiamo prodotti, prezzi e fornitori da fogli di calcolo. Se esporti i dati da GIAV in un foglio di calcolo, puoi portarli con te.'] },
      { q: 'Traviosoft funziona per un’agenzia dettagliante?', a: ['È pensato per le agenzie che costruiscono e vendono viaggi su misura.'] },
      { q: 'Come sono i prezzi di GIAV?', a: ['GIAV presenta i suoi prezzi in una demo.'] }
    ]
  },
  {
    key: 'vs-holded',
    slug: 'traviosoft-vs-holded',
    other: 'Holded',
    metaTitle: 'Traviosoft o Holded per agenzie di viaggi',
    metaDescription:
      'Holded è un gestionale per PMI; Traviosoft è pensato per i viaggi. Su cosa si concentra ciascuno e come un’agenzia di viaggi può usarli insieme.',
    title: 'Traviosoft o Holded: gestionale per viaggi o ERP generico',
    lead: 'Holded è un software di fatturazione, contabilità e gestione per PMI, molto diffuso in Spagna. Traviosoft è costruito intorno al viaggio. Molte agenzie usano entrambi: Traviosoft per i viaggi, Holded per l’azienda.',
    card: 'Uno strumento generico per PMI e uno per i viaggi: cosa fa ciascuno.',
    basis:
      'I dati di Holded provengono dal suo sito e dalla sua pagina dedicata a turismo e viaggi, verificati il 9 novembre 2026. Holded cambia spesso piani e promozioni, quindi controlla la sua pagina prezzi. I due strumenti si concentrano su lavori diversi, quindi la domanda di solito è come combinarli.',
    rows: [
      ['Pensato per', 'Agenzie incoming, DMC e agenzie su misura', 'Professionisti e PMI di qualsiasi settore, da 1 a oltre 100 persone'],
      ['Prezzo pubblicato', `Classic da ${PRICES.classic.yearly} EUR al mese, ${PRICES.usersIncluded} utenti inclusi`, 'Basic 34 EUR (2 utenti), Standard 69 EUR (4), Advanced 115 EUR (7), Premium 229 EUR (15), IVA esclusa; con sconti temporanei'],
      ['Ambito principale', 'Il viaggio: richieste, preventivi con margine, prenotazioni, programma, pagamenti e fatture', 'L’azienda: fatturazione, contabilità, buste paga e banche'],
      ['Contabilità, buste paga e banche', 'Prepara i file per il commercialista', 'Il suo cuore: contabilità, buste paga e riconciliazione bancaria']
    ],
    otherBetter: [
      'Ti servono contabilità, gestione della tesoreria, buste paga o riconciliazione bancaria nello stesso programma.',
      'La tua agenzia di viaggi è una piccola parte di un’azienda più grande e vuoi un solo sistema per tutto.',
      'Il tuo commercialista lavora già con Holded e preferisce ricevere tutto lì.',
      'Fatturi in più valute e vuoi un controllo generale della tesoreria.'
    ],
    usBetter: [
      'Il tuo lavoro quotidiano è calcolare, inviare e seguire preventivi di viaggio con margine.',
      'Ti serve un catalogo con prezzi stagionali e più fornitori per servizio.',
      'Vuoi un elenco di prenotazioni per viaggio, voucher di servizio e un programma per il cliente.',
      'La tua agenzia applica il regime IVA delle agenzie di viaggio (REAV) e vuoi le diciture su ogni fattura in automatico.'
    ],
    switching:
      'Traviosoft gestisce il viaggio, dalla richiesta alla fattura, ed esporta un riepilogo Excel o uno zip di fatture PDF, che il commercialista può importare in Holded o in un altro programma di contabilità. La pagina [Passare a Traviosoft](/switch) descrive i passaggi.',
    faq: [
      { q: 'Devo lasciare Holded per usare Traviosoft?', a: ['Non necessariamente. Molte agenzie tengono la contabilità dove si trova. L’importante è emettere ogni fattura in un solo posto, e concordare con il commercialista come riceve i dati.'] },
      { q: 'Holded e Traviosoft possono lavorare insieme?', a: ['Sì. Traviosoft gestisce il viaggio e le sue fatture, ed esporta un riepilogo Excel o uno zip di fatture PDF che il commercialista può importare in Holded o in qualsiasi altro programma di contabilità.'] },
      { q: 'Traviosoft fa la contabilità?', a: ['No. Gestisce il viaggio, i pagamenti e le fatture, e prepara i file per il commercialista. La contabilità resta al commercialista o al programma che usi.'] }
    ]
  },
  {
    key: 'vs-lemax',
    slug: 'traviosoft-vs-lemax',
    other: 'Lemax',
    metaTitle: 'Traviosoft o Lemax: gestionale per DMC e tour operator',
    metaDescription:
      'Lemax è un software croato per tour operator e DMC medi e grandi. Confrontiamo a chi si rivolge ciascuno, dimensione del team, prezzi e ambito.',
    title: 'Traviosoft o Lemax: due software gestionali completi a confronto',
    lead: 'Lemax è un software con più di 30 anni di storia, pensato per tour operator e DMC medi e grandi. Il suo pacchetto Lemax GO è pensato per team da 15 utenti, con un prezzo definito con ciascun cliente. Traviosoft copre tutto il viaggio, dalla prima richiesta all’ultima fattura, con documenti in cinque lingue e un prezzo pubblicato.',
    card: 'Due sistemi completi: una piattaforma affermata e un unico percorso dalla richiesta alla fattura con un prezzo pubblicato.',
    basis:
      'I dati di Lemax provengono dal suo sito e dalla stampa di settore, verificati il 3 novembre 2026. Lemax concorda i prezzi con ciascun cliente, quindi scriviamo "Su richiesta". Il numero di clienti è quello che mostra.',
    rows: [
      ['Pensato per', 'Agenzie incoming, DMC e agenzie su misura', 'Tour operator e DMC medi e grandi'],
      ['Dimensione del team', `Due piani, ${PRICES.usersIncluded} utenti inclusi`, 'Lemax GO da 15 utenti'],
      ['Prezzo', `Classic da ${PRICES.classic.yearly} EUR al mese, ${PRICES.usersIncluded} utenti inclusi`, 'Su richiesta; concordato con ciascun cliente prima della firma'],
      ['Avviamento', 'Configurazione e importazione gratuite con la fatturazione annuale', 'Dichiara "operativi in 90 giorni" per Lemax GO'],
      ['Distribuzione e collegamenti', 'Collegamenti al tuo sito e alla contabilità (Premium) e ai tuoi strumenti di IA (entrambi i piani)', 'Connettività con i fornitori, API di prenotazione e portale B2B, secondo il suo sito']
    ],
    otherBetter: [
      'Sei un tour operator o una DMC con un team di 15 persone o più e processi complessi su più giorni.',
      'Ti servono distribuzione, collegamenti API con i fornitori, un portale B2B per le agenzie o un motore di prenotazione online.',
      'Vuoi un fornitore con più di 30 anni di storia e clienti in diversi continenti.',
      'Vuoi un progetto di avviamento guidato.'
    ],
    usBetter: [
      'Vuoi preventivare, prenotare e fatturare tutto il viaggio in un solo sistema ed essere operativo con una configurazione breve.',
      'Vuoi vedere il prezzo e gli utenti inclusi prima di chiedere una demo.',
      'Il tuo mercato è la Spagna e vendi in spagnolo e francese, con il regime IVA delle agenzie di viaggio (REAV).',
      'Vuoi che importiamo prodotti, prezzi e fornitori dai tuoi fogli di calcolo durante la configurazione.'
    ],
    switching: SWITCH('Lemax'),
    faq: [
      { q: 'A chi si rivolge Lemax GO?', a: ['A team di 15 utenti o più, secondo il suo sito, con un avviamento che descrive come "operativi in 90 giorni".'] },
      { q: 'Come sono i prezzi di Lemax?', a: ['Lemax concorda il prezzo del pacchetto e dell’avviamento con ciascun cliente prima della firma.'] },
      { q: 'Traviosoft si collega ai miei altri strumenti?', a: ['Sì, con Premium. Il tuo sito, il tuo programma di contabilità o uno sviluppatore con cui lavori possono leggere e scrivere i tuoi dati Traviosoft, e puoi collegare l’assistente di IA che usi già.'] }
    ]
  },
  {
    key: 'vs-tourwriter',
    slug: 'traviosoft-vs-tourwriter',
    other: 'Tourwriter',
    metaTitle: 'Traviosoft o Tourwriter per DMC e travel designer',
    metaDescription:
      'Tourwriter è un software neozelandese per DMC di lusso e travel designer. Confrontiamo a chi si rivolge ciascuno, piani, prezzi, lingue e cosa fa meglio ciascuno.',
    title: 'Traviosoft o Tourwriter: due strumenti per costruire viaggi',
    lead: 'Tourwriter è un software neozelandese noto per i suoi programmi di viaggio curati, pensato per DMC di lusso e travel designer che lavorano in inglese. Traviosoft ha prezzi in euro con gli utenti inclusi, lavora in spagnolo e francese e include il regime IVA delle agenzie di viaggio (REAV).',
    card: 'Programmi di lusso curati in inglese e uno strumento con prezzi in euro in spagnolo e francese.',
    basis:
      'I dati di Tourwriter provengono dal suo sito (pagine piani e azienda), verificati il 3 novembre 2026. I suoi prezzi sono prezzi "a partire da" in dollari USA, per utente, con un preventivo per ogni team, quindi il totale reale può essere diverso.',
    rows: [
      ['Pensato per', 'Agenzie incoming, DMC e agenzie su misura', 'DMC di lusso e travel designer, viaggi FIT di più giorni'],
      ['Prezzo pubblicato', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR al mese, ${PRICES.usersIncluded} utenti inclusi`, 'Starter da 99 USD per utente al mese; Pro da 149 USD; Premium su richiesta'],
      ['Avvio', 'Configurazione e importazione gratuite con la fatturazione annuale', 'Costo una tantum da 1.199 USD, per migrazione, configurazione e formazione'],
      ['Lingue', 'Documenti in spagnolo, catalano, inglese, francese e italiano', 'Inglese']
    ],
    otherBetter: [
      'Vendi viaggi di lusso in inglese e vuoi programmi di viaggio dal design molto curato.',
      'Ti dà fiducia che altre DMC europee lo usino già.',
      'Vuoi un avviamento guidato con la formazione inclusa nel costo di configurazione.',
      'Il tuo mercato principale è anglofono.'
    ],
    usBetter: [
      'Vuoi un prezzo in euro con gli utenti inclusi in ogni piano.',
      'La tua agenzia è in Spagna e vuoi il regime IVA delle agenzie di viaggio (REAV) integrato.',
      'I tuoi clienti parlano spagnolo o francese e vuoi preventivi ed email nella loro lingua.',
      'Vuoi configurazione e importazione incluse con la fatturazione annuale.'
    ],
    switching: SWITCH('Tourwriter'),
    faq: [
      { q: 'Come sono i prezzi di Tourwriter?', a: ['I suoi piani partono da 99 USD per utente al mese (Starter) e 149 USD (Pro), con un costo di configurazione una tantum da 1.199 USD che copre migrazione e formazione. Preparano un preventivo per ogni team, quindi conferma il totale con loro.'] },
      { q: 'In quali lingue lavora ciascuno?', a: ['Tourwriter lavora in inglese. Traviosoft lavora in spagnolo, inglese e francese, e invia i documenti nella lingua del cliente: spagnolo, catalano, inglese, francese o italiano.'] },
      { q: 'Posso provarli entrambi?', a: ['Entrambi offrono una demo.'] }
    ]
  },
  {
    key: 'vs-tourplan',
    updated: '2026-11-14',
    slug: 'traviosoft-vs-tourplan',
    other: 'Tourplan',
    metaTitle: 'Traviosoft o Tourplan per DMC e tour operator',
    metaDescription:
      'Tourplan è un gestionale per tour operator usato da DMC e tour operator dal 1986. Confrontiamo a chi si rivolge ciascuno, azienda, prezzo, avvio e lingue.',
    title: 'Traviosoft o Tourplan: due sistemi per DMC e tour operator',
    lead: 'Tourplan sviluppa software per DMC e tour operator dal 1986, con vendite, prenotazioni e back office in un sistema modulare usato da 450 aziende in 75 paesi. Traviosoft copre tutto il viaggio, dalla prima richiesta all’ultima fattura, con documenti in cinque lingue e un prezzo pubblicato.',
    card: 'Un sistema modulare con 40 anni di storia e un unico percorso dalla richiesta alla fattura con un prezzo pubblicato.',
    basis:
      'I dati di Tourplan provengono dal suo sito (home e pagina Chi siamo), verificati il 14 novembre 2026. Il suo sito non pubblica prezzi, quindi scriviamo "Su richiesta".',
    rows: [
      ['Pensato per', 'Agenzie incoming, DMC e agenzie su misura', 'DMC, tour operator incoming e outgoing: FIT, gruppi, MICE, su misura, tour in serie'],
      ['Prezzo', `Classic da ${PRICES.classic.yearly} EUR al mese, ${PRICES.usersIncluded} utenti inclusi`, 'Su richiesta'],
      ['Avvio', 'Configurazione e importazione gratuite con la fatturazione annuale', 'Hosting, installazione, gestione del progetto, formazione e assistenza'],
      ['Distribuzione', 'Collegamenti al tuo sito e alla contabilità (Premium) e ai tuoi strumenti di IA (entrambi i piani)', 'Canali di distribuzione web e XML, e interfacce online per agenti, clienti e fornitori']
    ],
    otherBetter: [
      'Vuoi un sistema modulare che copra prodotto, preventivi, prenotazioni, contabilità e reportistica direzionale, con 40 anni di storia.',
      'Distribuisci il tuo prodotto tramite canali web e XML e vuoi interfacce per agenti e fornitori.',
      'Ti dà fiducia un fornitore che lavora con 450 tour operator e DMC in 75 paesi, con sedi in cinque continenti.',
      'Vuoi un progetto guidato con installazione, gestione del progetto e formazione.'
    ],
    usBetter: [
      'Vuoi preventivare, prenotare e fatturare tutto il viaggio in un solo sistema, operativo con una configurazione breve.',
      'Vuoi un prezzo pubblicato con gli utenti inclusi in ogni piano.',
      'I tuoi clienti parlano spagnolo, francese, catalano o italiano e vuoi documenti nella loro lingua.',
      'Vuoi che importiamo prodotti, prezzi e fornitori dai tuoi fogli di calcolo durante la configurazione.'
    ],
    switching: SWITCH('Tourplan'),
    faq: [
      { q: 'A chi si rivolge Tourplan?', a: ['Secondo il suo sito, a DMC e tour operator incoming e outgoing, per tour FIT, di gruppo, MICE, su misura, in serie e specializzati.'] },
      { q: 'Come sono i prezzi di Tourplan?', a: ['Il suo sito non pubblica prezzi.'] },
      { q: 'Posso provarli entrambi?', a: ['Entrambi offrono una demo.'] }
    ]
  },
  {
    key: 'vs-kaptio',
    updated: '2026-11-14',
    slug: 'traviosoft-vs-kaptio',
    other: 'Kaptio',
    metaTitle: 'Traviosoft o Kaptio per tour operator e viaggi su misura',
    metaDescription:
      'Kaptio è un software per viaggi di più giorni: crociere, treni, tour di gruppo e viaggi su misura. Confrontiamo a chi si rivolge ciascuno, azienda, prezzo e avvio.',
    title: 'Traviosoft o Kaptio: due sistemi per viaggi di più giorni',
    lead: 'Kaptio, fondata a Reykjavik nel 2012, riunisce CRM, contrattazione, tariffazione, inventario, prenotazioni, pagamenti e operativo per crociere, treni, tour di gruppo e viaggi su misura. Traviosoft copre tutto il viaggio, dalla prima richiesta all’ultima fattura, con documenti in cinque lingue e un prezzo pubblicato.',
    card: 'Una piattaforma per i viaggi di più giorni e un unico percorso dalla richiesta alla fattura con un prezzo pubblicato.',
    basis:
      'I dati di Kaptio provengono dal suo sito (home, piattaforma e pagina Chi siamo), verificati il 14 novembre 2026. Il suo sito non pubblica prezzi, quindi scriviamo "Su richiesta".',
    rows: [
      ['Pensato per', 'Agenzie incoming, DMC e agenzie su misura', 'Viaggi di più giorni: crociere, treni, tour di gruppo e viaggi su misura'],
      ['Prezzo', `Classic da ${PRICES.classic.yearly} EUR al mese, ${PRICES.usersIncluded} utenti inclusi`, 'Su richiesta'],
      ['Avvio', 'Configurazione e importazione gratuite con la fatturazione annuale', 'Comincia con un workshop di analisi'],
      ['Moduli', 'Richieste, preventivi, prenotazioni, fatture e pagamenti in un unico percorso', 'Kaptio CRM, Kaptio Travel e Kaptio Edge']
    ],
    otherBetter: [
      'Vendi crociere, treni o tour di gruppo e vuoi CRM, contrattazione, inventario e operativo su una sola piattaforma.',
      'Vuoi cominciare con un workshop di analisi dei tuoi processi.',
      'Vuoi gli assistenti di IA che elenca come parte della piattaforma.'
    ],
    usBetter: [
      'Costruisci viaggi su misura e vuoi preventivarli, prenotarli e fatturarli in un solo sistema, operativo con una configurazione breve.',
      'Vuoi un prezzo pubblicato con gli utenti inclusi in ogni piano.',
      'I tuoi clienti parlano spagnolo, francese, catalano o italiano e vuoi documenti nella loro lingua.',
      'Vuoi che importiamo prodotti, prezzi e fornitori dai tuoi fogli di calcolo durante la configurazione.'
    ],
    switching: SWITCH('Kaptio'),
    faq: [
      { q: 'A chi si rivolge Kaptio?', a: ['Secondo il suo sito, alle aziende che vendono viaggi di più giorni: crociere, treni, tour di gruppo e viaggi su misura.'] },
      { q: 'Come sono i prezzi di Kaptio?', a: ['Il suo sito non pubblica prezzi.'] },
      { q: 'Posso provarli entrambi?', a: ['Kaptio comincia con un workshop di analisi e Traviosoft con una demo su un viaggio di esempio.'] }
    ]
  },
  {
    key: 'vs-tourcms',
    updated: '2026-11-14',
    slug: 'traviosoft-vs-tourcms',
    other: 'TourCMS',
    metaTitle: 'Traviosoft o TourCMS: viaggi su misura o tour e attività',
    metaDescription:
      'TourCMS è un software di prenotazione e channel management per operatori di tour e attività. Confrontiamo a chi si rivolge ciascuno, azienda, prezzi pubblicati e lingue.',
    title: 'Traviosoft o TourCMS: viaggi su misura e tour e attività',
    lead: 'TourCMS, gestito da Palisis in Svizzera, offre dal 2003 prenotazioni, distribuzione e channel management agli operatori di tour e attività. Traviosoft è pensato per i viaggi su misura, dalla prima richiesta all’ultima fattura, con documenti in cinque lingue.',
    card: 'Prenotazioni e channel management per tour e attività, e un unico percorso per i viaggi su misura.',
    basis:
      'I dati di TourCMS provengono dal suo sito (home, funzionalità e pagina prezzi), verificati il 14 novembre 2026. I suoi prezzi sono indicati in dollari USA.',
    rows: [
      ['Pensato per', 'Agenzie incoming, DMC e agenzie su misura', 'Operatori di tour e attività: escursioni giornaliere, tour di più giorni, attrazioni, DMC'],
      ['Prezzo pubblicato', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR al mese, ${PRICES.usersIncluded} utenti inclusi`, 'Da 49 USD al mese (2 utenti) a 569 USD al mese (500 utenti); prenotazioni dai partner collegati dall’1,9% per transazione'],
      ['Avvio', 'Configurazione e importazione gratuite con la fatturazione annuale', 'Prova gratuita, senza costi di attivazione'],
      ['Lingue', 'Documenti in spagnolo, catalano, inglese, francese e italiano', 'Contenuti in 22 lingue']
    ],
    otherBetter: [
      'Organizzi tour o attività con partenze vendute online e tramite rivenditori.',
      'Vuoi il channel management e un marketplace di agenti, che indica in più di 30.000.',
      'Vuoi cominciare con una prova gratuita.'
    ],
    usBetter: [
      'Costruisci viaggi su misura, ciascuno preventivato con il tuo margine e la tua commissione.',
      'Vuoi prenotazioni ai fornitori e fatture create dallo stesso viaggio.',
      'I tuoi clienti parlano spagnolo, francese, catalano o italiano e vuoi documenti nella loro lingua.',
      'Vuoi che importiamo prodotti, prezzi e fornitori dai tuoi fogli di calcolo durante la configurazione.'
    ],
    switching: SWITCH('TourCMS'),
    faq: [
      { q: 'A chi si rivolge TourCMS?', a: ['Secondo il suo sito, agli operatori di tour e attività: escursioni giornaliere, hop-on hop-off, attrazioni, tour di più giorni, DMC e tour a piedi.'] },
      { q: 'Come sono i prezzi di TourCMS?', a: ['La sua pagina prezzi elenca quattro piani, da 49 USD al mese (Small) a 569 USD al mese (Enterprise), con un’opzione annuale, più una commissione dall’1,9% sulle prenotazioni dai partner collegati.'] },
      { q: 'Posso provarli entrambi?', a: ['TourCMS offre una prova gratuita e Traviosoft una demo su un viaggio di esempio.'] }
    ]
  }
];

const comparisons: Article[] = compares.map(compare);

const best: Article = {
  key: 'best-dmc-software',
  kind: 'best',
  slug: 'migliore-gestionale-dmc',
  metaTitle: 'Il miglior gestionale per DMC e agenzie incoming (2026)',
  metaDescription:
    'Un confronto indipendente tra Traviosoft, Ezus, Tourplan, Tourwriter, Lemax, Kaptio, GIAV ed Excel: a chi si rivolge ciascuno, prezzi pubblicati, lingue e punti di forza.',
  title: 'Il miglior gestionale per DMC e agenzie incoming (2026)',
  lead: 'Per una DMC o un’agenzia di viaggi su misura, le opzioni sono Traviosoft, Ezus, Tourplan, Tourwriter, Lemax, Kaptio e GIAV; molte agenzie cominciano anche con Excel e Word. Questa guida li confronta su dati pubblici: a chi si rivolge ciascuno, prezzo, lingue e cosa fa meglio.',
  updated: UPDATED,
  card: 'Otto opzioni a confronto: a chi si rivolge ciascuna, prezzi pubblicati, lingue e punti di forza.',
  blocks: [
    {
      type: 'p',
      text: 'Questo elenco lo scrive Traviosoft, quindi ci atteniamo ai dati pubblici, scriviamo "Su richiesta" quando un fornitore comunica i prezzi in una demo, e diciamo cosa fa meglio ciascuno strumento. Dati verificati il 3 novembre 2026. I prezzi cambiano: controlla sempre le pagine ufficiali.'
    },
    { type: 'h2', text: 'Tabella di confronto', id: 'tabella' },
    {
      type: 'table',
      head: ['Strumento', 'A chi si rivolge', 'Dimensione del team', 'Prezzo', 'Lingue'],
      usRow: 0,
      rows: [
        ['Traviosoft', 'Agenzie incoming, DMC e agenzie su misura', `Due piani, ${PRICES.usersIncluded} utenti inclusi`, `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR al mese, ${PRICES.usersIncluded} utenti inclusi`, 'Documenti in ES, CA, EN, FR e IT'],
        ['Ezus', 'DMC, agenzie incoming, tour operator e agenzie', 'Professional fino a 10 utenti; Enterprise da 30', '75 EUR per utente al mese (Professional); pacchetto di onboarding 1.990 EUR', 'Sito e assistenza in EN, FR, ES, IT, PT'],
        ['Tourplan', 'Tour operator e DMC affermati', 'Su richiesta', 'Su richiesta', 'Sito in inglese, spagnolo e giapponese'],
        ['Tourwriter', 'DMC di lusso e travel designer', 'Da 1 a oltre 20 persone secondo il piano', 'Da 99 USD per utente al mese; configurazione da 1.199 USD', 'Inglese'],
        ['Lemax', 'Tour operator e DMC medi e grandi', 'Lemax GO da 15 utenti', 'Su richiesta', 'Inglese'],
        ['Kaptio', 'Grandi operatori di viaggi di più giorni', 'Grandi operatori', 'Su richiesta', 'Inglese'],
        ['GIAV', 'Agenzie di viaggi in Spagna, con una lunga storia nel dettaglio', 'Su richiesta', 'Su richiesta', 'Spagnolo'],
        ['Excel + Word', 'Qualsiasi agenzia che inizia', 'Da una a tre persone, nella pratica', 'La licenza che hai già', 'Quella in cui scrivi']
      ]
    },
    { type: 'h2', text: 'Ogni strumento e cosa fa meglio', id: 'strumenti' },
    { type: 'h3', text: 'Traviosoft' },
    {
      type: 'p',
      text: 'Copre tutto il viaggio: richieste, un catalogo con prezzi stagionali, preventivi con margine e commissione, prenotazioni, pagamenti e fatture, con il regime IVA delle agenzie di viaggio (REAV) per la Spagna. Mostra il suo prezzo, e configurazione e importazione sono incluse con la fatturazione annuale.'
    },
    { type: 'h3', text: 'Ezus' },
    {
      type: 'p',
      text: 'Un gestionale completo per DMC con prezzi pubblici, sito e assistenza in cinque lingue e molte referenze: più di 600 agenzie in più di 70 paesi, secondo il suo sito. Il suo pacchetto di onboarding da 1.990 EUR include un avviamento guidato.'
    },
    { type: 'h3', text: 'Tourplan' },
    {
      type: 'p',
      text: 'Un software con circa 40 anni di storia per tour operator e DMC affermati, con clienti in circa 75 paesi secondo il suo sito. Prezzi e piani sono presentati su richiesta.'
    },
    { type: 'h3', text: 'Tourwriter' },
    {
      type: 'p',
      text: 'Noto per i programmi di viaggio di lusso curati, usato da DMC e travel designer in molti paesi. I piani hanno un prezzo per utente, con un costo di configurazione che copre migrazione e formazione.'
    },
    { type: 'h3', text: 'Lemax' },
    {
      type: 'p',
      text: 'Una piattaforma completa per tour operator e DMC medi e grandi, con distribuzione, API di prenotazione e portale B2B. Lemax GO è pensato per team da 15 utenti, e i prezzi si concordano con ciascun cliente.'
    },
    { type: 'h3', text: 'Kaptio' },
    {
      type: 'p',
      text: 'Una piattaforma costruita su Salesforce per grandi operatori di viaggi di più giorni; la stampa cita tra i suoi clienti noti gruppi internazionali. Si vende tramite un workshop di analisi, con prezzi su richiesta.'
    },
    { type: 'h3', text: 'GIAV' },
    {
      type: 'p',
      text: 'Un gestionale per agenzie di viaggi presente da molto tempo in Spagna, soprattutto tra le agenzie dettaglianti. Presenta prezzi e funzionalità in una demo.'
    },
    { type: 'h3', text: 'Excel + Word' },
    {
      type: 'p',
      text: 'Gratuiti se hai già la licenza, flessibili e conosciuti da tutti. Molte agenzie cominciano da qui e passano a un gestionale dedicato quando crescono i viaggi e il team.'
    },
    { type: 'h2', text: 'In cosa differiscono le opzioni', id: 'scegliere' },
    { type: 'list', items: [
      'Le opzioni differiscono nel numero minimo di utenti e in ciò che ogni piano include.',
      'Il costo del primo anno può includere configurazione e importazione dei dati oltre al canone mensile, secondo il fornitore.',
      'La lingua dei documenti che riceve il cliente può essere diversa dalla lingua delle schermate.',
      'Le regole di fatturazione dipendono dal paese; le pagine di "Fatturazione per paese" ne descrivono diversi.',
      'Alcuni fornitori pubblicano i prezzi; altri li comunicano in una demo.'
    ] },
    { type: 'h2', text: 'Domande frequenti', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Qual è il miglior gestionale per una DMC o un’agenzia su misura?', a: ['Dipende dal modo di lavorare dell’agenzia e dal suo mercato. La tabella qui sopra mostra a chi si rivolge ciascuno strumento, il prezzo e le lingue.'] },
        { q: 'Quanto costa un gestionale per DMC?', a: [`I prezzi pubblicati vanno da ${PRICES.classic.yearly} EUR al mese per ${PRICES.usersIncluded} utenti (Traviosoft Classic) a 75 EUR per utente al mese più un pacchetto di onboarding da 1.990 EUR (Ezus). Tourplan, Lemax e Kaptio comunicano i prezzi su richiesta.`] },
        { q: 'Serve un gestionale specifico per i viaggi o basta un ERP generico?', a: ['Un ERP generico è pensato per la contabilità; un gestionale per i viaggi aggiunge preventivi con margine per servizio e un elenco di prenotazioni per viaggio. Molte agenzie usano entrambi.'] }
      ]
    },
    { type: 'p', text: 'La [pagina Demo](/demo) descrive la demo, fatta su un viaggio di esempio.' }
  ]
};

const quote: Article = {
  key: 'quote-with-margins',
  kind: 'guide',
  slug: 'preventivo-viaggio-su-misura-con-margine',
  metaTitle: 'Come si calcola il prezzo di un viaggio su misura: margine e commissione',
  metaDescription:
    'Come si calcola il prezzo di un viaggio su misura a partire dalle tariffe nette, con un margine sul prezzo di vendita e una commissione, in un esempio con le cifre.',
  title: 'Come si calcola il prezzo di un viaggio su misura',
  lead: 'Il prezzo di un viaggio su misura si costruisce con tre importi: quanto chiedono i fornitori (le tariffe nette), quanto guadagna l’agenzia (il margine) e, quando un’altra agenzia vende il viaggio, la sua commissione. Questa pagina mostra il calcolo su un esempio.',
  updated: '2026-11-14',
  card: 'Tariffe nette, margine sul prezzo di vendita e commissione, calcolati su un esempio.',
  blocks: [
    { type: 'h2', text: 'Ricarico e margine sullo stesso costo', id: 'concetti' },
    {
      type: 'p',
      text: 'Il ricarico si calcola sul costo e il margine sul prezzo di vendita, quindi lo stesso guadagno dà due percentuali diverse. Per un costo di 1.000 EUR:'
    },
    {
      type: 'table',
      head: ['Ricarico sul costo', 'Prezzo di vendita', 'Guadagno', 'Margine sul prezzo'],
      rows: [
        ['20%', '1.200,00 EUR', '200,00 EUR', '16,7%'],
        ['25%', '1.250,00 EUR', '250,00 EUR', '20,0%'],
        ['33,3%', '1.333,33 EUR', '333,33 EUR', '25,0%'],
        ['50%', '1.500,00 EUR', '500,00 EUR', '33,3%']
      ]
    },
    { type: 'h2', text: 'Esempio: 4 notti in Andalusia per 2 persone', id: 'esempio' },
    {
      type: 'table',
      head: ['Servizio', 'Calcolo', 'Costo netto'],
      rows: [
        ['Hotel, camera doppia', '4 notti x 100 EUR', '400 EUR'],
        ['Transfer privati', '2 transfer x 60 EUR', '120 EUR'],
        ['Guida', '2 giorni x 150 EUR', '300 EUR'],
        ['Corso di cucina', '2 persone x 40 EUR', '80 EUR'],
        ['Ingressi', '2 persone x 50 EUR', '100 EUR'],
        ['Totale netto', '', '1.000 EUR']
      ]
    },
    {
      type: 'p',
      text: 'Con un margine del 25% sul prezzo di vendita, il prezzo è 1.000 ÷ (1 − 0,25) = 1.333,33 EUR, cioè 666,67 EUR a persona. Il margine è di 333,33 EUR. Un ricarico del 25% sul costo darebbe 1.250 EUR, cioè un margine del 20%.'
    },
    { type: 'h2', text: 'Con una commissione', id: 'commissione' },
    {
      type: 'p',
      text: 'Quando un’altra agenzia vende il viaggio con una commissione del 10% sul prezzo, la commissione si prende dallo stesso prezzo. A 1.333,33 EUR, la commissione è di 133,33 EUR e il margine scende a 200 EUR, cioè il 15%. Per mantenere un margine del 25%, la commissione entra nel divisore: 1.000 ÷ (1 − 0,25 − 0,10) = 1.538,46 EUR.'
    },
    {
      type: 'list',
      items: [
        'Prezzo al cliente: 1.538,46 EUR (769,23 EUR a persona).',
        'Commissione al 10%: 153,85 EUR.',
        'Margine al 25%: 384,62 EUR.',
        'Costo netto: 1.000,00 EUR. (Le cifre sono arrotondate al centesimo.)'
      ]
    },
    { type: 'h2', text: 'Imposte', id: 'imposte' },
    {
      type: 'p',
      text: 'Gli importi qui sopra sono al netto delle imposte. Come si applica l’IVA a un viaggio dipende dal paese e dal regime che usa l’agenzia; le pagine di "Fatturazione per paese" descrivono diversi paesi.'
    },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'In Traviosoft le regole di prezzo (margine, IVA e commissione) si impostano una volta, e ogni riga di ogni preventivo le segue, con il prezzo a persona e il totale che vede il cliente.'
    },
    { type: 'h2', text: 'Domande frequenti', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Il margine si fissa per servizio o per viaggio?', a: ['Esistono entrambi i modi. Alcune agenzie usano un solo margine per tutto il viaggio, altre un margine diverso per tipo di servizio.'] },
        { q: 'Perché la commissione è nel divisore?', a: ['Perché la commissione è una percentuale del prezzo di vendita, come il margine. Metterli entrambi nel divisore dà un prezzo in cui ciascuno mantiene la sua percentuale.'] }
      ]
    }
  ]
};

const rooming: Article = {
  key: 'rooming-list',
  kind: 'guide',
  slug: 'rooming-list-gruppi-mice',
  metaTitle: 'Rooming list per gruppi e MICE: cos’è e cosa contiene',
  metaDescription:
    'Cos’è una rooming list nei viaggi di gruppo e nel MICE, le informazioni che contiene di solito, un esempio e come la usano gli hotel.',
  title: 'La rooming list per gruppi ed eventi MICE',
  lead: 'Una rooming list dice all’hotel chi dorme in ogni camera di un gruppo, con la tipologia di camera, le date e le eventuali richieste. L’hotel la usa per assegnare le camere del blocco che tiene per il gruppo.',
  updated: '2026-11-14',
  card: 'Cos’è una rooming list, le colonne che ha di solito e un esempio.',
  blocks: [
    {
      type: 'p',
      text: 'Per un gruppo, l’hotel riserva un blocco di camere con un contratto. La rooming list dice come quelle camere si dividono tra i partecipanti. Il contratto di solito fissa la data entro cui l’hotel aspetta la lista e la data in cui le camere non usate del blocco vengono rilasciate.'
    },
    { type: 'h2', text: 'Le colonne abituali', id: 'colonne' },
    {
      type: 'table',
      head: ['Colonna', 'Contenuto', 'Esempio'],
      rows: [
        ['N. camera', 'Un numero progressivo; quello reale lo assegna l’hotel', '1'],
        ['Tipologia', 'Singola, matrimoniale, doppia a letti separati o tripla', 'Doppia a letti separati'],
        ['Ospite 1', 'Nome completo come nel documento di viaggio', 'Marta Ruiz Soler'],
        ['Ospite 2', 'Idem, se condivide', 'Pedro Vidal Mas'],
        ['Check-in', 'Data di arrivo', '12/05/2027'],
        ['Check-out', 'Data di partenza', '15/05/2027'],
        ['Notti', 'Calcolate dalle date', '3'],
        ['Trattamento', 'Solo pernottamento, pernottamento e colazione, mezza pensione', 'Pernottamento e colazione'],
        ['Arrivo', 'Orario o volo', 'Volo 10:40'],
        ['Richieste', 'Diete, accessibilità, letto aggiunto', 'Senza glutine'],
        ['Società o gruppo', 'Quando ci sono più fatture', 'Team commerciale']
      ]
    },
    {
      type: 'p',
      text: 'Un esempio di dimensioni: un gruppo di 22 persone in 9 camere doppie a letti separati (18 persone) e 4 singole usa 13 camere. Il totale delle persone nella lista corrisponde al gruppo.'
    },
    { type: 'h2', text: 'Chi compare nella lista', id: 'chi' },
    {
      type: 'p',
      text: 'Oltre ai partecipanti, la rooming list di un gruppo spesso include chi viaggia con il gruppo, come la guida, l’autista o l’organizzatore, quando alloggiano nello stesso hotel.'
    },
    { type: 'h2', text: 'Versioni', id: 'versioni' },
    {
      type: 'p',
      text: 'Una rooming list cambia man mano che i partecipanti confermano, annullano o cambiano camera. Ogni versione inviata all’hotel di solito porta la sua data, così entrambe le parti lavorano sulla stessa lista.'
    },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'In Traviosoft si crea una rooming list per hotel a partire da chi condivide con chi, pronta da inviare in PDF o come foglio di calcolo.'
    },
    { type: 'h2', text: 'Domande frequenti', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'La rooming list serve solo per i grandi gruppi?', a: ['No. Si usa ogni volta che un hotel deve sapere chi dorme in quale camera, dal piccolo gruppo al grande evento.'] },
        { q: 'Che differenza c’è tra una rooming list e una prenotazione?', a: ['La prenotazione blocca le camere. La rooming list dice chi occupa ciascuna di esse.'] }
      ]
    }
  ]
};

const fromExcel: Article = {
  key: 'from-excel',
  kind: 'guide',
  slug: 'da-excel-a-gestionale-agenzia-di-viaggi',
  metaTitle: 'Da Excel a un gestionale per agenzie di viaggi: cosa si sposta e cosa cambia',
  metaDescription:
    'Cosa tiene di solito un’agenzia di viaggi nei fogli di calcolo, cosa passa in un gestionale per i viaggi e cosa cambia quando i viaggi stanno in un solo sistema.',
  title: 'Da Excel a un gestionale per agenzie di viaggi',
  lead: 'Molte agenzie lavorano con fogli di calcolo e documenti: un elenco di prodotti, un elenco di fornitori, i clienti e un file per ogni preventivo. Un gestionale per i viaggi tiene le stesse informazioni in un solo posto, collegate a ogni viaggio.',
  updated: '2026-11-14',
  card: 'Cosa sta di solito nei fogli di calcolo, cosa passa nel gestionale e cosa cambia.',
  blocks: [
    { type: 'h2', text: 'Cosa sta di solito nei fogli di calcolo', id: 'fogli' },
    {
      type: 'list',
      items: [
        'Prodotti con nome, fornitore, prezzo netto e periodo di validità.',
        'Fornitori con contatti e condizioni.',
        'Clienti con lingua ed email.',
        'Regole di prezzo: margine, commissione e IVA, spesso come formule.',
        'Preventivi, spesso un file per versione, e i testi abituali delle email.'
      ]
    },
    { type: 'h2', text: 'Cosa cambia in un gestionale', id: 'cambiamenti' },
    {
      type: 'list',
      items: [
        'I prezzi si tengono per stagione e per fornitore, e un preventivo li legge dal catalogo.',
        'Le regole di prezzo si impostano una volta e valgono per ogni riga del preventivo.',
        'Ogni versione del preventivo resta con il viaggio.',
        'Prenotazioni, pagamenti e fatture sono collegati allo stesso viaggio.',
        'Più persone lavorano sugli stessi clienti e sugli stessi viaggi nello stesso momento.'
      ]
    },
    { type: 'h2', text: 'Cosa resta nei vecchi file', id: 'archivio' },
    {
      type: 'p',
      text: 'Lo storico dei viaggi passati resta spesso nei vecchi file come archivio. Si sposta ciò che si riusa: tariffe in vigore, fornitori e clienti attivi.'
    },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'Durante la configurazione importiamo prodotti, prezzi e fornitori dai tuoi fogli di calcolo. Configurazione e importazione sono gratuite con la fatturazione annuale. La pagina [Passare a Traviosoft](/switch) descrive i passaggi.'
    },
    { type: 'h2', text: 'Domande frequenti', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Si può continuare a usare Excel accanto a Traviosoft?', a: ['Sì. Traviosoft esporta un riepilogo Excel, o uno zip dei PDF delle fatture per qualsiasi periodo.'] },
        { q: 'I dati si possono riprendere?', a: ['Sì. Se smetti di usare Traviosoft, riavrai i tuoi dati in formati standard.'] }
      ]
    }
  ]
};

const aiTools: Article = {
  key: 'ai-assistant-mcp',
  kind: 'guide',
  slug: 'assistente-ia-mcp-agenzia-di-viaggi',
  metaTitle: 'IA per agenzie di viaggi: assistente integrato e connettore MCP per Claude, ChatGPT e Gemini',
  metaDescription:
    'Come un’agenzia di viaggi può usare l’IA sui propri dati: l’assistente integrato in Traviosoft e il connettore MCP che collega Claude, ChatGPT e altri strumenti di IA a preventivi, prenotazioni e pagamenti.',
  title: 'L’IA nella tua agenzia di viaggi',
  lead: 'Traviosoft lavora con l’IA in due modi. L’assistente integrato lavora dentro l’app per ogni persona che lo usa. Il connettore MCP permette allo strumento di IA che usi già, come Claude o ChatGPT, di leggere i dati della tua agenzia, e ti chiede il permesso prima di modificare qualsiasi cosa.',
  updated: '2026-11-14',
  card: 'L’assistente integrato, il connettore MCP per Claude e ChatGPT, e come mantieni il controllo.',
  blocks: [
    { type: 'h2', text: 'L’assistente integrato', id: 'assistente' },
    {
      type: 'p',
      text: 'L’assistente sta in Traviosoft e lavora con gli stessi permessi della persona che lo usa. Chiedigli cosa ti aspetta oggi. Fagli preparare un preventivo dal tuo catalogo o trasformare un listino di un fornitore in prezzi di catalogo. Può anche spuntare attività di prenotazione o elencare i pagamenti in scadenza. È un’opzione su entrambi i piani, con limiti di utilizzo, e lo attivi per persona.'
    },
    {
      type: 'p',
      text: 'Ogni modifica che propone aspetta il tuo OK o si può annullare. Col tempo impara come la tua agenzia preferisce fare le cose, e il tuo team può correggere ciò che ha imparato riga per riga.'
    },
    { type: 'h2', text: 'Il connettore MCP', id: 'mcp' },
    {
      type: 'p',
      text: 'MCP (Model Context Protocol) è il modo standard con cui un assistente di IA si collega a un altro strumento per lavorarci. Con il connettore Traviosoft il tuo strumento di IA può cercare un cliente, preparare una bozza di preventivo o dirti quali pagamenti sono in ritardo. Lavora sui tuoi dati reali invece che su ciò che incolli nella chat. È incluso in entrambi i piani.'
    },
    {
      type: 'list',
      items: [
        'Claude (desktop o web): Impostazioni, Connettori, Aggiungi connettore personalizzato, poi incolla il tuo indirizzo Traviosoft.',
        'ChatGPT: Impostazioni, App, Impostazioni avanzate, Modalità sviluppatore, poi crea un’app con lo stesso indirizzo.',
        'Mistral (Le Chat): Contesto, Connettori, Aggiungi connettore, Connettore MCP personalizzato, con lo stesso indirizzo.',
        'Anche strumenti di automazione come n8n possono collegarsi, per eseguire attività in automatico.'
      ]
    },
    {
      type: 'p',
      text: 'Lo strumento di IA ti manda su Traviosoft per accedere. Scegli Solo lettura, oppure Leggere e modificare, e se può anche eliminare.'
    },
    { type: 'h2', text: 'Mantieni il controllo', id: 'controllo' },
    {
      type: 'list',
      items: [
        'Il connettore è spento finché un amministratore non lo attiva.',
        'L’amministratore sceglie chi può collegare uno strumento di IA.',
        'Uno strumento di IA non fa mai più di ciò che la persona che l’ha collegato può fare nell’app.',
        'Claude, ChatGPT e Mistral chiedono alla persona prima di ogni modifica. Le eliminazioni, e le modifiche di altri strumenti di IA, attendono in Traviosoft l’approvazione di una persona.',
        'Ogni azione è registrata nel registro attività a nome della persona che l’ha collegato.',
        'Qualsiasi collegamento si può interrompere subito da Traviosoft.'
      ]
    },
    { type: 'h2', text: 'Domande frequenti', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Funziona con Gemini?', a: ['Il connettore funziona con qualsiasi strumento di IA che supporta MCP. Google supporta MCP nei suoi strumenti per sviluppatori Gemini. La possibilità di aggiungere un connettore personalizzato dipende dalla versione di Gemini.'] },
        { q: 'Il connettore MCP è incluso nel mio piano?', a: ['Sì. È incluso sia in Classic sia in Premium. L’assistente integrato è un’opzione su entrambi i piani, con limiti di utilizzo.'] },
        { q: 'L’IA vede tutti i nostri dati?', a: ['Vede ciò che può vedere la persona che l’ha collegata, e niente di più. Un amministratore può anche permettere solo la lettura e bloccare ogni modifica.'] },
        { q: 'L’IA può inviare email?', a: ['Preventivi e fatture arrivano ai clienti da Traviosoft. L’IA può anche scrivere a un fornitore, e prima chiede il permesso alla persona: quando lo consente, invia la richiesta di prenotazione o di disponibilità.'] }
      ]
    }
  ]
};

export const articles: Article[] = [best, ...comparisons, quote, rooming, fromExcel, aiTools, ...topicGuides, ...invoicingGuides];
