import type { Article, Faq } from '../types';

const UPDATED = '2026-11-14';

type Country = {
  key: string; slug: string; metaTitle: string; metaDescription: string; title: string; lead: string; card: string;
  scheme: string[]; invoice: string[]; einvoice: string[]; change: string[]; tool: string; faq: Faq[]; sources: string;
};

function guide(c: Country): Article {
  return {
    key: c.key, kind: 'invoicing', slug: c.slug, metaTitle: c.metaTitle, metaDescription: c.metaDescription,
    title: c.title, lead: c.lead, updated: UPDATED, card: c.card,
    blocks: [
      { type: 'callout', text: 'Informazioni generali, scritte il 14 novembre 2026. Non sono una consulenza legale o fiscale e non hanno valore legale. Regole e date cambiano: controlla le fonti ufficiali in fondo a questa pagina o rivolgiti a un consulente qualificato. Traviosoft non risponde delle decisioni prese sulla base di questa pagina.' },
      { type: 'h2', text: 'Il regime IVA delle agenzie di viaggio', id: 'regime' },
      ...c.scheme.map(text => ({ type: 'p' as const, text })),
      ...(c.invoice.length ? [{ type: 'h2' as const, text: 'Cosa riporta la fattura', id: 'fattura' }, { type: 'list' as const, items: c.invoice }] : []),
      { type: 'h2', text: 'Fatturazione elettronica: le date', id: 'fatturazione-elettronica' },
      { type: 'list', items: c.einvoice },
      ...(c.change.length ? [{ type: 'h2' as const, text: 'In pratica', id: 'in-pratica' }, { type: 'list' as const, items: c.change }] : []),
      { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
      { type: 'p', text: c.tool },
      { type: 'h2', text: 'Domande frequenti', id: 'faq' },
      { type: 'faq', items: c.faq },
      { type: 'p', text: c.sources }
    ]
  };
}

const OUTSIDE_SPAIN = 'Le fatture di acconto e di saldo e le note di credito si creano dal viaggio, con gli importi del preventivo accettato e la dicitura del regime delle agenzie di viaggio quando la attivi. Fuori dalla Spagna, le fatture escono dal programma di fatturazione che usi già, quindi le regole di fatturazione elettronica del tuo paese sono gestite lì.';

const countries: Country[] = [
  {
    key: 'invoicing-spain',
    slug: 'fatturazione-agenzia-di-viaggi-spagna',
    metaTitle: 'Fatturazione per agenzie di viaggi in Spagna: REAV, Veri*Factu e fattura elettronica',
    metaDescription: 'Come fattura un’agenzia di viaggi o una DMC in Spagna: il regime del margine REAV, cosa riporta la fattura, le date di Veri*Factu e la regola della fattura elettronica B2B.',
    title: 'Fatturazione per agenzie di viaggi in Spagna',
    lead: 'In Spagna, un’agenzia che vende viaggi in nome proprio di solito paga l’IVA sul margine con il REAV. Le fatture devono uscire da un software conforme alle regole antifrode (Veri*Factu), e la fattura elettronica tra imprese diventa obbligatoria per fasi.',
    card: 'REAV, Veri*Factu e fattura elettronica B2B, con le date in vigore.',
    scheme: [
      'Il REAV (régimen especial de las agencias de viajes, articoli da 141 a 147 della legge IVA spagnola) si applica quando l’agenzia vende in nome proprio e usa servizi acquistati da altre imprese: hotel, trasporti, guide. L’IVA si paga sul margine, cioè il prezzo fatturato meno quanto pagato ai fornitori, invece che sul prezzo intero.',
      'Un’agenzia che agisce solo come intermediaria e guadagna una commissione in nome del fornitore è tassata su quella commissione con il regime ordinario.'
    ],
    invoice: [
      'Con il REAV, la fattura al cliente non riporta l’IVA in una riga separata.',
      'Riporta la dicitura “Régimen especial de las agencias de viajes”.',
      'Ogni società tiene la propria serie di fatture, e le correzioni si fanno con una fattura rettificativa (factura rectificativa).'
    ],
    einvoice: [
      'Veri*Factu: il Real Decreto 1007/2023 impone un software di fatturazione che conservi ogni registro di fattura senza alterazioni. Il Real Decreto-ley 15/2025 fissa l’avvio al 1° gennaio 2027 per le società soggette all’imposta sulle società e al 1° luglio 2027 per i lavoratori autonomi e gli altri.',
      'Fattura elettronica B2B: il Real Decreto 238/2026 rende obbligatorie le fatture elettroniche strutturate tra imprese. Si applica 12 mesi dopo il relativo decreto ministeriale per le società con più di 8 milioni di EUR di fatturato, e 24 mesi dopo per le altre.',
      'Le imprese che già comunicano tramite il SII, e i Paesi Baschi e la Navarra, hanno sistemi propri.'
    ],
    change: [
      'Ogni fattura riporta un codice QR che permette al cliente di verificarla sul sito dell’agenzia delle entrate spagnola.',
      'Le fatture ad altre imprese, come le agenzie che rivendono i tuoi viaggi, viaggeranno come fatture elettroniche strutturate.'
    ],
    tool: 'In Traviosoft la fatturazione per la Spagna è integrata: le fatture nascono dal viaggio con la dicitura REAV, ogni società tiene la propria serie, e Veri*Factu si attiva nelle impostazioni del paese Spagna.',
    faq: [
      { q: 'Il REAV si applica ai viaggi venduti alle imprese?', a: ['La legge IVA spagnola prevede opzioni per i clienti imprese e regole speciali per i servizi eseguiti fuori dall’UE.'] },
      { q: 'Veri*Factu sostituisce il SII?', a: ['No. Le imprese nel SII continuano a usarlo.'] }
    ],
    sources: 'Fonti ufficiali: [Agencia Tributaria](https://sede.agenciatributaria.gob.es) e il [BOE](https://www.boe.es).'
  },
  {
    key: 'invoicing-france',
    slug: 'fatturazione-agenzia-di-viaggi-francia',
    metaTitle: 'Fatturazione per agenzie di viaggi in Francia: regime del margine e fattura elettronica',
    metaDescription: 'Come fattura un’agenzia di viaggi in Francia: il regime del margine delle agenzie di viaggio, cosa riporta la fattura e le date della fattura elettronica da settembre 2026.',
    title: 'Fatturazione per agenzie di viaggi in Francia',
    lead: 'Le agenzie di viaggi francesi che vendono in nome proprio pagano l’IVA sul margine. Dal 1° settembre 2026 ogni impresa deve poter ricevere fatture elettroniche tramite una piattaforma autorizzata, e le piccole e medie imprese devono emetterle dal 1° settembre 2027.',
    card: 'Il regime del margine, la fattura e le date della fattura elettronica.',
    scheme: [
      'Il regime speciale delle agenzie di viaggio si applica quando l’agenzia vende viaggi in nome proprio usando servizi acquistati da altri. L’IVA è dovuta sul margine. La parte di un viaggio relativa a servizi eseguiti fuori dall’Unione europea è esente.'
    ],
    invoice: [
      'La fattura può indicare senza ambiguità che l’operazione rientra nel regime speciale delle agenzie di viaggio.',
      'L’amministrazione fiscale accetta che l’IVA del regime del margine non compaia separata in fattura.'
    ],
    einvoice: [
      'Dal 1° settembre 2026 ogni impresa stabilita in Francia e registrata ai fini IVA deve poter ricevere fatture elettroniche.',
      'Le grandi e medie imprese emettono fatture elettroniche dal 1° settembre 2026. Le piccole e microimprese le emettono dal 1° settembre 2027.',
      'Le fatture passano da una piattaforma autorizzata (plateforme agréée), registrata dall’amministrazione fiscale.'
    ],
    change: [],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Devo poter ricevere fatture elettroniche se vendo solo a clienti privati?', a: ['Sì. Dal 1° settembre 2026 ogni impresa registrata ai fini IVA in Francia deve poterle ricevere, per esempio dai propri fornitori.'] },
      { q: 'Il regime del margine si applica ai viaggi venduti alle imprese?', a: ['Può applicarsi, secondo l’operazione. Le condizioni sono fissate dal codice tributario francese.'] }
    ],
    sources: 'Fonti ufficiali: [BOFiP, regime delle agenzie di viaggio (BOI-TVA-SECT-60)](https://bofip.impots.gouv.fr/doctrine/BOI-TVA-SECT-60), [economie.gouv.fr, calendario della fattura elettronica](https://www.economie.gouv.fr/cedef/facturation-electronique-entreprises) e [impots.gouv.fr](https://www.impots.gouv.fr/professionnel/je-passe-la-facturation-electronique).'
  },
  {
    key: 'invoicing-germany',
    slug: 'fatturazione-agenzia-di-viaggi-germania',
    metaTitle: 'Fatturazione per agenzie di viaggi in Germania: §25 UStG e fattura elettronica',
    metaDescription: 'Come fattura un’agenzia di viaggi in Germania: il regime del margine del §25 UStG, la dicitura in fattura e le date per emettere fatture elettroniche.',
    title: 'Fatturazione per agenzie di viaggi in Germania',
    lead: 'I tour operator tedeschi pagano l’IVA sul margine secondo il §25 UStG. Per le vendite nazionali tra imprese devono emettere fatture elettroniche dal 2027 o dal 2028, secondo il fatturato.',
    card: '§25 UStG, la dicitura in fattura e le date della fattura elettronica.',
    scheme: [
      'Il regime del margine per i servizi di viaggio (§25 della legge IVA tedesca) si applica quando l’impresa vende viaggi in nome proprio usando servizi acquistati da altri. L’IVA è dovuta sul margine.'
    ],
    invoice: [
      'Una fattura secondo il §25 non riporta l’IVA separata.',
      'Riporta la dicitura “Sonderregelung für Reisebüros”.'
    ],
    einvoice: [
      'Dal 1° gennaio 2027 devono emetterle le imprese con più di 800.000 EUR di fatturato nell’anno precedente.',
      'Dal 1° gennaio 2028 devono emetterle tutte le imprese.',
      'Una fattura elettronica segue lo standard europeo EN 16931. Un semplice PDF non vale.',
      'Le vendite ai clienti privati non sono coinvolte.'
    ],
    change: [
      'Le fatture ad altre imprese, come le agenzie che rivendono i tuoi viaggi, diventano file strutturati.',
      'Le fatture ai viaggiatori privati possono restare in PDF.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Devo emettere fatture elettroniche ai clienti privati?', a: ['No. L’obbligo riguarda le vendite nazionali tra imprese.'] }
    ],
    sources: 'Fonti ufficiali: la legge IVA tedesca, [§14](https://www.gesetze-im-internet.de/ustg_1980/__14.html), [§14a](https://www.gesetze-im-internet.de/ustg_1980/__14a.html), [§25](https://www.gesetze-im-internet.de/ustg_1980/__25.html) e [§27](https://www.gesetze-im-internet.de/ustg_1980/__27.html).'
  },
  {
    key: 'invoicing-belgium',
    slug: 'fatturazione-agenzia-di-viaggi-belgio',
    metaTitle: 'Fatturazione per agenzie di viaggi in Belgio: regime del margine e fattura elettronica Peppol',
    metaDescription: 'Come fattura un’agenzia di viaggi in Belgio: il regime del margine delle agenzie di viaggio e la fattura elettronica Peppol obbligatoria tra imprese da gennaio 2026.',
    title: 'Fatturazione per agenzie di viaggi in Belgio',
    lead: 'Le agenzie di viaggi belghe pagano l’IVA sul margine con il regime speciale delle agenzie di viaggio. Dal 1° gennaio 2026 le fatture tra imprese belghe sono fatture elettroniche strutturate inviate tramite Peppol.',
    card: 'Il regime del margine e la fattura elettronica Peppol dal 2026.',
    scheme: [
      'Il regime speciale delle agenzie di viaggio, previsto dalla direttiva IVA europea, si applica quando l’agenzia vende viaggi in nome proprio usando servizi acquistati da altri. L’IVA è dovuta sul margine.'
    ],
    invoice: [],
    einvoice: [
      'Dal 1° gennaio 2026 le fatture tra imprese registrate ai fini IVA in Belgio sono fatture elettroniche strutturate, inviate tramite la rete Peppol.',
      'Le vendite ai clienti privati non sono coinvolte.'
    ],
    change: [
      'Le fatture ad altre agenzie e ad aziende passano da Peppol; le fatture ai viaggiatori privati possono restare in PDF.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Un PDF inviato per email vale ancora tra imprese?', a: ['No, non dal 1° gennaio 2026. Deve essere una fattura elettronica strutturata.'] }
    ],
    sources: 'Fonte ufficiale: [efacture.belgium.be](https://efacture.belgium.be/fr/article/les-factures-electroniques-structurees-entre-entreprises-sont-obligatoires-depuis-2026).'
  }
];

export const invoicingGuides: Article[] = countries.map(guide);
