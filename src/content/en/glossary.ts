import type { GlossaryTerm } from '../types';

export const glossary: GlossaryTerm[] = [
  {
    id: 'dmc',
    term: 'DMC (Destination Management Company)',
    def: 'A local company that designs, sells and runs trips and programmes in its own destination for agencies, companies and travellers from other countries. It contracts hotels, guides, transport and activities, and makes sure everything works on the ground.'
  },
  {
    id: 'inbound-agency',
    term: 'Inbound agency (receptivo)',
    def: 'An agency that receives travellers from abroad and organises their trip in its own country. In practice it is the same as a DMC, although "inbound agency" is used more for small agencies that sell to other agencies or straight to the traveller.'
  },
  {
    id: 'tailor-made',
    term: 'Tailor-made trip',
    def: 'A trip designed from scratch for one client: dates, pace, hotels and activities follow what they ask for. Every quote is different, so it is priced service by service from net rates plus margin.'
  },
  {
    id: 'reav',
    term: 'REAV (Spain’s special VAT scheme for travel agencies)',
    def: 'Spain’s special VAT scheme for agencies that sell, in their own name, services bought from others. VAT is not charged on the full price but on the agency’s margin. Check your case with your accountant.'
  },
  {
    id: 'rooming-list',
    term: 'Rooming list',
    def: 'The list of rooms for a group: who sleeps in each one, the room type, the dates and any special requests. It goes to the hotel before arrival and usually has a deadline set in the contract.'
  },
  {
    id: 'net-rate',
    term: 'Net rate',
    def: 'The price a supplier charges the agency, with no margin or commission added. It is the base of every quote: the agency adds its margin on top to get the selling price.'
  },
  {
    id: 'markup-margin',
    term: 'Markup vs margin',
    def: 'Markup is calculated on cost, margin on the selling price. A 25% markup on a cost of 1,000 EUR gives a price of 1,250 EUR, which is a 20% margin, not 25%.'
  },
  {
    id: 'commission',
    term: 'Commission',
    def: 'A percentage of the price that the agency pays to whoever brings the sale (another agency, a partner), or receives from a supplier for selling its services. It has to be built into the price so it does not eat the margin.'
  },
  {
    id: 'deposit',
    term: 'Deposit',
    def: 'The first payment a client makes to confirm a trip, usually a percentage of the total. It lets the agency start booking the services.'
  },
  {
    id: 'balance',
    term: 'Balance',
    def: 'The amount left to pay after the deposit. It is collected on an agreed date before departure, and once paid the trip is fully paid.'
  },
  {
    id: 'allotment',
    term: 'Allotment',
    def: 'A number of rooms, seats or services that a supplier holds for an agency at an agreed price until a release date. After that date, whatever is unused goes back to the supplier.'
  },
  {
    id: 'service-sheet',
    term: 'Service sheet (voucher, bono)',
    def: 'A document sent to a supplier, or carried by the traveller, with the details of one service: who, when, where and what is included. It acts as confirmation for the hotel, guide or driver.'
  },
  {
    id: 'fit',
    term: 'FIT (Free Independent Traveller)',
    def: 'An individual traveller or small party (a family, a couple, friends) travelling on their own, not as part of an organised group. Most tailor-made trips are FIT.'
  },
  {
    id: 'mice',
    term: 'MICE',
    def: 'Short for Meetings, Incentives, Conferences and Exhibitions. These are company trips with many attendees, blocks of rooms and programmes made to measure.'
  },
  {
    id: 'verifactu',
    term: 'Veri*Factu',
    def: 'A system of the Spanish tax authority (AEAT) in which the invoicing software sends each invoice to the tax office when it is issued and adds a QR code. It is set out in Royal Decree 1007/2023. Check the current deadlines with the AEAT.'
  }
];
