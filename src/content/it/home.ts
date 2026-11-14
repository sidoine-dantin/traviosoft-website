import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const home: SiteContent['home'] = {
  metaTitle: 'Traviosoft: gestionale per agenzie di viaggio su misura e DMC',
  metaDescription:
    `Richieste, preventivi con i tuoi margini, prenotazioni, itinerari per i clienti, pagamenti e fatture in un unico posto. Per agenzie di viaggio su misura e DMC. Da ${PRICES.classic.yearly} EUR al mese, ospitato nell’UE.`,
  title: 'Gestionale per agenzie di viaggio su misura e DMC',
  sub: 'Richieste, preventivi, prenotazioni, pagamenti e fatture, in un unico posto.',
  tags: [
    { t: 'Acconto pagato ✓', s: 'link nell’email' },
    { t: 'Hotel confermato', s: 'risposta salvata nel viaggio' }
  ],
  tripTitle: 'Il percorso di un viaggio in Traviosoft',
  steps: [
    { time: '09:12', title: 'Richiesta ricevuta', body: 'Arriva in un’unica lista, con il passo successivo.', job: 'sell' },
    { time: '11:40', title: 'Preventivo inviato', body: 'Costruito con le tue tariffe e il tuo margine.', job: 'sell' },
    { time: 'Giorno 2', title: 'Acconto pagato', body: 'Pagato dal link nell’email.', job: 'get-paid' },
    { time: 'Giorno 3', title: 'Fornitori confermati', body: 'Hotel e guida spuntati sul viaggio.', job: 'book' },
    { time: 'Giorno 30', title: 'Fattura finale', body: 'Creata dai numeri del preventivo.', job: 'get-paid' }
  ],
  stepGo: 'Scopri come',
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
