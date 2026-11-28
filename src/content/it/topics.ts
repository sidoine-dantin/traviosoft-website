import type { Article } from '../types';

const UPDATED = '2026-11-14';

const DISCLAIMER =
  'Informazioni generali, scritte il 14 novembre 2026. Non sono una consulenza legale o fiscale e non hanno valore legale. Le regole cambiano: controlla i testi ufficiali indicati in fondo a questa pagina o rivolgiti a un consulente qualificato. Traviosoft non risponde delle decisioni prese sulla base di questa pagina.';

const gdpr: Article = {
  key: 'gdpr-travel',
  kind: 'guide',
  slug: 'gdpr-agenzia-di-viaggi',
  metaTitle: 'GDPR e agenzie di viaggi: cosa dice il regolamento',
  metaDescription: 'Cosa dice il GDPR sui temi di un’agenzia di viaggi: basi giuridiche, dati sanitari, minori, conservazione, diritti, responsabili, violazioni e sanzioni.',
  title: 'GDPR e agenzie di viaggi: cosa dice il regolamento',
  lead: 'Il Regolamento generale sulla protezione dei dati (Regolamento (UE) 2016/679) si applica ai dati personali di viaggiatori, clienti e contatti. Questa pagina riassume gli articoli che riguardano il lavoro di un’agenzia di viaggi, con i link al testo.',
  updated: UPDATED,
  card: 'Principi, basi giuridiche, dati sanitari, conservazione, diritti, responsabili del trattamento e trasferimenti fuori dall’UE.',
  blocks: [
    { type: 'callout', text: DISCLAIMER },
    { type: 'h2', text: 'I principi', id: 'principi' },
    { type: 'p', text: 'L’articolo 5 fissa i principi di ogni trattamento. I dati sono trattati in modo lecito, corretto e trasparente; raccolti per finalità determinate, esplicite e legittime; adeguati, pertinenti e limitati a quanto necessario; conservati non oltre il tempo necessario per le finalità; e protetti con integrità e riservatezza.' },
    { type: 'h2', text: 'Le sei basi giuridiche', id: 'basi-giuridiche' },
    { type: 'p', text: 'Secondo l’articolo 6, il trattamento è lecito solo se ricorre almeno una di queste condizioni:' },
    { type: 'list', items: [
      'l’interessato ha espresso il consenso;',
      'è necessario all’esecuzione di un contratto di cui l’interessato è parte;',
      'è necessario per adempiere un obbligo legale;',
      'è necessario per salvaguardare interessi vitali;',
      'è necessario per l’esecuzione di un compito di interesse pubblico;',
      'è necessario per il perseguimento di un legittimo interesse.'
    ] },
    { type: 'h2', text: 'Dati relativi alla salute', id: 'salute' },
    { type: 'p', text: 'L’articolo 9 include i dati relativi alla salute tra le categorie particolari di dati personali, il cui trattamento è vietato salvo che si applichi una delle eccezioni previste dall’articolo. Una di queste è il consenso esplicito dell’interessato.' },
    { type: 'h2', text: 'Minori', id: 'minori' },
    { type: 'p', text: 'L’articolo 8 riguarda il consenso dei minori ai servizi della società dell’informazione offerti direttamente a loro. Il trattamento su questa base è lecito dai 16 anni. Gli Stati membri possono fissare un’età inferiore, ma non sotto i 13 anni.' },
    { type: 'h2', text: 'Per quanto tempo si conservano i dati', id: 'conservazione' },
    { type: 'p', text: 'L’articolo 5 limita la conservazione al tempo necessario per le finalità. Gli articoli 13 e 14 elencano le informazioni da fornire all’interessato, tra cui il periodo di conservazione.' },
    { type: 'h2', text: 'I diritti degli interessati', id: 'diritti' },
    { type: 'list', items: [
      'Diritto di accesso (articolo 15).',
      'Diritto di rettifica (articolo 16).',
      'Diritto alla cancellazione, il “diritto all’oblio” (articolo 17).',
      'Diritto di limitazione del trattamento (articolo 18).',
      'Diritto alla portabilità dei dati (articolo 20).',
      'Diritto di opposizione (articolo 21).'
    ] },
    { type: 'h2', text: 'Responsabili del trattamento', id: 'responsabili' },
    { type: 'p', text: 'Quando un’impresa tratta dati per conto del titolare del trattamento, l’articolo 28 richiede un contratto o un altro atto giuridico. Questo stabilisce la materia e la durata del trattamento, la sua natura e finalità, il tipo di dati personali e le categorie di interessati.' },
    { type: 'h2', text: 'Registro e violazioni dei dati', id: 'registro-violazioni' },
    { type: 'p', text: 'L’articolo 30 chiede a ogni titolare di tenere un registro delle attività di trattamento. L’obbligo non si applica alle organizzazioni con meno di 250 dipendenti, a meno che il trattamento possa presentare un rischio, non sia occasionale o includa categorie particolari di dati, come i dati relativi alla salute.' },
    { type: 'p', text: 'Secondo l’articolo 33, una violazione dei dati personali si notifica all’autorità di controllo senza ingiustificato ritardo e, ove possibile, entro 72 ore dal momento in cui se ne è venuti a conoscenza, a meno che sia improbabile che presenti un rischio per i diritti e le libertà delle persone.' },
    { type: 'h2', text: 'Trasferimenti fuori dall’Unione europea', id: 'trasferimenti' },
    { type: 'p', text: 'Il capo V (articoli da 44 a 49) disciplina i trasferimenti di dati personali verso paesi fuori dall’UE. Un trasferimento può avvenire quando la Commissione europea ha deciso che il paese garantisce un livello di protezione adeguato (articolo 45), senza autorizzazioni specifiche. In assenza di tale decisione, l’articolo 46 elenca le garanzie adeguate, e l’articolo 49 le deroghe per situazioni specifiche.' },
    { type: 'h2', text: 'Sanzioni', id: 'sanzioni' },
    { type: 'p', text: 'L’articolo 83 fissa due massimali. Le violazioni, tra l’altro, dei principi, delle basi giuridiche, delle categorie particolari, dei diritti degli interessati e delle regole sui trasferimenti possono arrivare a 20 milioni di EUR o, per un’impresa, al 4% del fatturato mondiale annuo totale, se superiore. Altre violazioni, come quelle degli articoli 8 e da 25 a 39, possono arrivare a 10 milioni di EUR o al 2%.' },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    { type: 'p', text: 'I dati di ogni agenzia in Traviosoft stanno nel suo spazio, ospitato nell’Unione europea.' },
    { type: 'p', text: 'Testo ufficiale: il regolamento pubblicato dalla CNIL, l’autorità francese per la protezione dei dati: [capo II, articoli da 5 a 11](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2), [capo III, articoli da 12 a 23](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3), [capo IV, articoli da 24 a 43](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4), [capo V, articoli da 44 a 50](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre5) e [capo VIII, articoli da 77 a 84](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre8). In Italia, il [Garante per la protezione dei dati personali](https://www.garanteprivacy.it) pubblica le proprie indicazioni.' }
  ]
};

const euVat: Article = {
  key: 'eu-vat-travel',
  kind: 'guide',
  slug: 'iva-ue-regime-speciale-agenzie-di-viaggio-vida',
  metaTitle: 'IVA UE per le agenzie di viaggio: regime del margine e ViDA',
  metaDescription: 'Il regime speciale IVA dell’UE per le agenzie di viaggio (articoli da 306 a 310 della direttiva IVA) e le date del pacchetto ViDA adottato nel 2025.',
  title: 'IVA UE per le agenzie di viaggio: il regime del margine e ViDA',
  lead: 'La direttiva IVA dell’UE prevede un regime speciale per le agenzie di viaggio, in cui l’IVA si applica al margine. Nel 2025 l’UE ha adottato il pacchetto IVA nell’era digitale (ViDA), che porta la comunicazione digitale e la fatturazione elettronica per le vendite transfrontaliere tra imprese dal 2030.',
  updated: UPDATED,
  card: 'Il regime speciale per le agenzie di viaggio e le date di ViDA, dalla Commissione europea.',
  blocks: [
    { type: 'callout', text: DISCLAIMER },
    { type: 'h2', text: 'Il regime speciale per le agenzie di viaggio', id: 'regime' },
    { type: 'p', text: 'Gli articoli da 306 a 310 della direttiva IVA (direttiva 2006/112/CE del Consiglio) fissano un regime speciale per le agenzie di viaggio. La Commissione europea lo descrive così:' },
    { type: 'list', items: [
      'È obbligatorio per i paesi e le imprese dell’UE, ed esiste in ogni paese dell’UE.',
      'Riguarda le agenzie di viaggio che usano beni e servizi forniti da altre imprese, non quelle che agiscono solo come intermediarie.',
      'L’IVA si applica solo al margine di profitto.',
      'Non c’è diritto alla detrazione dell’IVA.',
      'Si applica ai viaggi e agli alloggi nell’UE, non ai viaggi fuori dall’UE.'
    ] },
    { type: 'p', text: 'Ogni paese applica il regime con una propria legge; in Italia è l’articolo 74-ter del DPR 633/1972. Le pagine di “Fatturazione per paese” descrivono le regole in Spagna, Francia, Germania e Belgio.' },
    { type: 'h2', text: 'IVA nell’era digitale (ViDA)', id: 'vida' },
    { type: 'p', text: 'Il pacchetto ViDA è stato adottato l’11 marzo 2025, pubblicato nella Gazzetta ufficiale dell’Unione europea il 25 marzo 2025 ed è entrato in vigore il 14 aprile 2025. È composto dalla direttiva (UE) 2025/516, dal regolamento (UE) 2025/517 e dal regolamento di esecuzione (UE) 2025/518.' },
    { type: 'p', text: 'Ha tre parti:' },
    { type: 'list', items: [
      'Obblighi di comunicazione digitale, con la fatturazione elettronica per le vendite transfrontaliere tra imprese.',
      'Regole aggiornate per gli operatori dell’economia delle piattaforme in alcuni settori.',
      'Un’unica registrazione IVA nell’UE.'
    ] },
    { type: 'h2', text: 'Le date', id: 'date' },
    { type: 'list', items: [
      '14 aprile 2025: gli Stati membri possono introdurre la fatturazione elettronica nazionale obbligatoria a condizioni specifiche.',
      '1° luglio 2030: gli obblighi di comunicazione digitale si applicano alle operazioni transfrontaliere tra imprese.',
      '1° gennaio 2035: gli Stati membri con un obbligo nazionale di comunicazione in tempo reale allineano i propri sistemi al modello e agli standard dell’UE.'
    ] },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    { type: 'p', text: 'In Traviosoft le fatture si creano dal viaggio, con la dicitura del regime delle agenzie di viaggio quando la attivi.' },
    { type: 'p', text: 'Fonti ufficiali: Commissione europea, [VAT special schemes](https://taxation-customs.ec.europa.eu/special-schemes_en), [VAT in the Digital Age](https://taxation-customs.ec.europa.eu/taxation/vat/vat-digital-age-vida_en) e [adozione del pacchetto ViDA](https://taxation-customs.ec.europa.eu/news/adoption-vat-digital-age-package-2025-03-11_en).' }
  ]
};

const netRates: Article = {
  key: 'net-commissionable-rates',
  kind: 'guide',
  slug: 'tariffe-nette-e-tariffe-commissionabili',
  metaTitle: 'Tariffe nette e commissionabili: definizioni ed esempi',
  metaDescription: 'Cosa sono le tariffe nette e commissionabili nel turismo, come si calcolano ricarico e commissione, e la differenza tra ricarico e margine, con esempi.',
  title: 'Tariffe nette e tariffe commissionabili',
  lead: 'I fornitori vendono ad agenzie di viaggi e DMC in due modi principali. Una tariffa netta è il prezzo che paga l’agenzia, che poi fissa il proprio prezzo di vendita. Una tariffa commissionabile è un prezzo di vendita fissato dal fornitore, su cui l’agenzia guadagna una percentuale.',
  updated: UPDATED,
  card: 'Cosa significano i due tipi di tariffa, come si calcolano ricarico e commissione, con esempi.',
  blocks: [
    { type: 'h2', text: 'Tariffa netta', id: 'netta' },
    { type: 'p', text: 'Una tariffa netta è il prezzo che il fornitore applica all’agenzia, senza nulla incluso per l’agenzia. L’agenzia decide il prezzo di vendita aggiungendo un ricarico. Il cliente non vede la tariffa netta.' },
    { type: 'p', text: 'Esempio: un hotel dà una tariffa netta di 100 EUR a notte. Con un ricarico del 25%, il prezzo di vendita è 125 EUR. L’agenzia trattiene 25 EUR.' },
    { type: 'h2', text: 'Tariffa commissionabile', id: 'commissionabile' },
    { type: 'p', text: 'Una tariffa commissionabile è un prezzo di vendita fissato dal fornitore, spesso il suo prezzo al pubblico. L’agenzia vende a quel prezzo e riceve una commissione, una percentuale concordata con il fornitore.' },
    { type: 'p', text: 'Esempio: la tariffa commissionabile di un hotel è di 150 EUR a notte con una commissione del 10%. Il cliente paga 150 EUR, l’agenzia guadagna 15 EUR e l’hotel riceve 135 EUR.' },
    { type: 'h2', text: 'Ricarico e margine', id: 'ricarico-margine' },
    { type: 'p', text: 'Lo stesso importo dà due percentuali diverse a seconda di cosa lo si confronta. Il ricarico si calcola sul costo; il margine si calcola sul prezzo di vendita.' },
    { type: 'list', items: [
      'Costo 100 EUR, prezzo di vendita 125 EUR, quindi 25 EUR guadagnati.',
      'Ricarico: 25 ÷ 100 = 25%.',
      'Margine: 25 ÷ 125 = 20%.'
    ] },
    { type: 'p', text: 'Per ottenere un dato margine partendo da un costo, il prezzo di vendita è il costo diviso per (1 − margine). Per un margine del 20% su un costo di 100 EUR: 100 ÷ 0,8 = 125 EUR.' },
    { type: 'h2', text: 'Commissione pagata a un’agenzia partner', id: 'partner' },
    { type: 'p', text: 'Una DMC o un tour operator che vende tramite altre agenzie spesso lavora al contrario: fissa un prezzo commissionabile e paga all’agenzia che vende una commissione.' },
    { type: 'p', text: 'Esempio: una DMC costruisce un viaggio con 1.000 EUR di costi netti e lo prezza 1.300 EUR per il viaggiatore, con una commissione del 10% per l’agenzia che lo vende. L’agenzia guadagna 130 EUR, e la DMC trattiene 1.170 EUR, cioè 170 EUR oltre i suoi costi.' },
    { type: 'h2', text: 'Dove entrano le imposte', id: 'imposte' },
    { type: 'p', text: 'Come si applica l’IVA al ricarico o alla commissione dipende dal paese e dal fatto che l’agenzia venda in nome proprio o come intermediaria. Le pagine di "Fatturazione per paese" descrivono le regole in diversi paesi.' },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    { type: 'p', text: 'In Traviosoft le tue regole di prezzo trasformano le tariffe nette in prezzi di vendita, con il margine, l’IVA e la commissione quando un’agenzia partner vende il viaggio.' },
    { type: 'h2', text: 'Domande frequenti', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Un viaggio può combinare tariffe nette e commissionabili?', a: ['Sì. Un viaggio spesso combina hotel a tariffa netta con servizi venduti a prezzo commissionabile, come alcune escursioni o alcuni trasporti.'] },
        { q: 'Una commissione è la stessa cosa di un margine?', a: ['Entrambi sono ciò che guadagna l’agenzia. Una commissione è una percentuale di un prezzo fissato da altri; un margine nasce da un prezzo di vendita che l’agenzia fissa da sé.'] }
      ]
    }
  ]
};

export const topicGuides: Article[] = [gdpr, euVat, netRates];
