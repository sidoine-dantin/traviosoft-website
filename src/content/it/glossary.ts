import type { GlossaryTerm } from '../types';

export const glossary: GlossaryTerm[] = [
  {
    id: 'dmc',
    term: 'DMC (Destination Management Company)',
    def: 'Un’azienda locale che progetta, vende e gestisce viaggi e programmi nella propria destinazione per agenzie, aziende e viaggiatori di altri paesi. Contratta hotel, guide, trasporti e attività, e si assicura che tutto funzioni sul posto.'
  },
  {
    id: 'inbound-agency',
    term: 'Agenzia incoming',
    def: 'Un’agenzia che accoglie viaggiatori dall’estero e organizza il loro viaggio nel proprio paese. In pratica è come una DMC, anche se “incoming” si usa di più per le agenzie che vendono ad altre agenzie o direttamente al viaggiatore.'
  },
  {
    id: 'tailor-made',
    term: 'Viaggio su misura',
    def: 'Un viaggio costruito da zero per un cliente: date, ritmo, hotel e attività seguono le sue richieste. Ogni preventivo è diverso, quindi si calcola servizio per servizio partendo dalle tariffe nette più il margine.'
  },
  {
    id: 'reav',
    term: 'REAV (il regime IVA speciale spagnolo per le agenzie di viaggio)',
    def: 'Il regime IVA speciale spagnolo per le agenzie che vendono, in nome proprio, servizi acquistati da altri. L’IVA non si applica sul prezzo intero ma sul margine dell’agenzia. È previsto dagli articoli da 141 a 147 della legge IVA spagnola (Ley 37/1992).'
  },
  {
    id: 'rooming-list',
    term: 'Rooming list',
    def: 'L’elenco delle camere di un gruppo: chi dorme in ciascuna, il tipo di camera, le date e le eventuali richieste particolari. Va all’hotel prima dell’arrivo e di solito ha una scadenza fissata nel contratto.'
  },
  {
    id: 'net-rate',
    term: 'Tariffa netta',
    def: 'Il prezzo che un fornitore applica all’agenzia, senza margine né commissione. È la base di ogni preventivo: l’agenzia aggiunge il suo margine per ottenere il prezzo di vendita.'
  },
  {
    id: 'markup-margin',
    term: 'Ricarico e margine',
    def: 'Il ricarico si calcola sul costo, il margine sul prezzo di vendita. Un ricarico del 25% su un costo di 1.000 EUR dà un prezzo di 1.250 EUR, cioè un margine del 20%, non del 25%.'
  },
  {
    id: 'commission',
    term: 'Commissione',
    def: 'Una percentuale del prezzo che l’agenzia paga a chi porta la vendita (un’altra agenzia, un partner), o che riceve da un fornitore per vendere i suoi servizi. Va inclusa nel prezzo perché non riduca il margine.'
  },
  {
    id: 'deposit',
    term: 'Acconto',
    def: 'Il primo pagamento che un cliente versa per confermare un viaggio, di solito una percentuale del totale. Permette all’agenzia di iniziare a prenotare i servizi.'
  },
  {
    id: 'balance',
    term: 'Saldo',
    def: 'L’importo che resta da pagare dopo l’acconto. Si incassa a una data concordata prima della partenza, e una volta pagato il viaggio è interamente saldato.'
  },
  {
    id: 'allotment',
    term: 'Allotment',
    def: 'Un numero di camere, posti o servizi che un fornitore tiene a disposizione di un’agenzia a un prezzo concordato fino a una data di rilascio. Dopo quella data, ciò che non è stato usato torna al fornitore.'
  },
  {
    id: 'service-sheet',
    term: 'Voucher di servizio',
    def: 'Un documento inviato a un fornitore, o che il viaggiatore porta con sé, con i dettagli di un servizio: chi, quando, dove e cosa è incluso. Vale come conferma per l’hotel, la guida o l’autista.'
  },
  {
    id: 'fit',
    term: 'FIT (Free Independent Traveller)',
    def: 'Un viaggiatore individuale o un piccolo gruppo (una famiglia, una coppia, degli amici) che viaggia per conto proprio, non all’interno di un gruppo organizzato. La maggior parte dei viaggi su misura sono FIT.'
  },
  {
    id: 'mice',
    term: 'MICE',
    def: 'Sigla di Meetings, Incentives, Conferences and Exhibitions: riunioni, viaggi incentive, congressi ed eventi. Sono viaggi aziendali con molti partecipanti, blocchi di camere e programmi su misura.'
  },
  {
    id: 'verifactu',
    term: 'Veri*Factu',
    def: 'Le regole dell’agenzia delle entrate spagnola (AEAT) per i software di fatturazione, previste dal Real Decreto 1007/2023: ogni fattura viene registrata senza possibilità di modifica e riporta un codice QR. In modalità Veri*Factu, il software invia anche ogni fattura all’amministrazione fiscale al momento dell’emissione. I software devono essere pronti entro il 1° gennaio 2027 per le società soggette all’imposta sulle società, ed entro il 1° luglio 2027 per gli altri.'
  }
];
