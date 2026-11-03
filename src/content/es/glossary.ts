import type { GlossaryTerm } from '../types';

export const glossary: GlossaryTerm[] = [
  {
    id: 'dmc',
    term: 'DMC (Destination Management Company)',
    def: 'Empresa local que diseña, vende y ejecuta viajes y programas en su destino para agencias, empresas y viajeros de otros países. Contrata hoteles, guías, transportes y actividades, y responde de que todo salga bien sobre el terreno.'
  },
  {
    id: 'inbound-agency',
    term: 'Receptivo (agencia receptiva)',
    def: 'Agencia que recibe viajeros que vienen de fuera y les organiza el viaje en su país. En la práctica es lo mismo que un DMC, aunque "receptivo" se usa más para agencias pequeñas que venden a otras agencias o directamente al viajero.'
  },
  {
    id: 'tailor-made',
    term: 'Viaje a medida',
    def: 'Viaje diseñado desde cero para un cliente concreto: fechas, ritmo, hoteles y actividades se ajustan a lo que pide. Cada presupuesto es distinto, por eso se calcula servicio a servicio con tarifas netas y margen.'
  },
  {
    id: 'reav',
    term: 'REAV (Régimen Especial de Agencias de Viajes)',
    def: 'Régimen especial del IVA en España para agencias de viajes que venden en nombre propio servicios comprados a terceros. El IVA no se calcula sobre el precio total, sino sobre el margen de la agencia. Consulta tu caso con tu gestor.'
  },
  {
    id: 'rooming-list',
    term: 'Rooming list',
    def: 'Lista de habitaciones de un grupo: quién duerme en cada una, tipo de habitación, fechas y peticiones especiales. Se envía al hotel antes de la llegada y suele tener una fecha límite fijada en el contrato.'
  },
  {
    id: 'net-rate',
    term: 'Tarifa neta',
    def: 'Precio que cobra el proveedor a la agencia, sin margen ni comisión. Es la base de todo presupuesto: sobre ella se suma el margen de la agencia para obtener el precio de venta.'
  },
  {
    id: 'markup-margin',
    term: 'Recargo (markup) y margen',
    def: 'El recargo se calcula sobre el coste y el margen sobre el precio de venta. Un recargo del 25% sobre un coste de 1.000 EUR da un precio de 1.250 EUR, que es un margen del 20%, no del 25%.'
  },
  {
    id: 'commission',
    term: 'Comisión',
    def: 'Porcentaje del precio que la agencia paga a quien le trae la venta (otra agencia, un colaborador) o cobra de un proveedor por venderle sus servicios. Hay que tenerla en cuenta al fijar el precio para no perder margen.'
  },
  {
    id: 'deposit',
    term: 'Depósito (anticipo)',
    def: 'Primer pago que hace el cliente para confirmar el viaje, normalmente un porcentaje del total. Con él se pueden reservar los servicios.'
  },
  {
    id: 'balance',
    term: 'Pago final (saldo)',
    def: 'Importe que queda por pagar después del depósito. Se cobra en una fecha acordada antes de la salida, y con él queda pagado el viaje.'
  },
  {
    id: 'allotment',
    term: 'Allotment (cupo)',
    def: 'Número de habitaciones, plazas o servicios que un proveedor reserva a una agencia a un precio pactado, hasta una fecha de liberación. Pasada esa fecha, lo que no se ha usado vuelve al proveedor.'
  },
  {
    id: 'service-sheet',
    term: 'Bono (voucher, hoja de servicio)',
    def: 'Documento que se envía al proveedor, o que lleva el viajero, con los datos de un servicio: quién, cuándo, dónde y qué incluye. Sirve de confirmación para el hotel, el guía o el conductor.'
  },
  {
    id: 'fit',
    term: 'FIT (Free Independent Traveller)',
    def: 'Viajero individual o grupo pequeño (familia, pareja, amigos) que viaja por su cuenta, sin grupo organizado. Es la base de la mayoría de los viajes a medida.'
  },
  {
    id: 'mice',
    term: 'MICE',
    def: 'Siglas de reuniones, incentivos, congresos y eventos (Meetings, Incentives, Conferences, Exhibitions). Son viajes de empresa con muchos asistentes, habitaciones por bloques y programas a medida.'
  },
  {
    id: 'verifactu',
    term: 'Veri*Factu',
    def: 'Sistema de la Agencia Tributaria (AEAT) por el que el programa de facturación envía cada factura a Hacienda en el momento de emitirla y añade un código QR. Se regula en el Real Decreto 1007/2023. Consulta los plazos vigentes en la AEAT.'
  }
];
