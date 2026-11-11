import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const home: SiteContent['home'] = {
  metaTitle: 'Traviosoft: software para agencias a medida y DMC',
  metaDescription:
    `Solicitudes, presupuestos con tu margen, reservas, itinerarios, cobros y facturas en un solo sitio. Para agencias de viajes a medida y DMC. Desde ${PRICES.classic.yearly} EUR al mes, en la UE.`,
  kick: 'Envía el presupuesto',
  giant: 'hoy.',
  sub: 'El mismo día que llega la solicitud. Software para agencias de viajes a medida y DMC.',
  tags: [
    { t: 'Respondes primero', s: 'presupuesto enviado 11:40' },
    { t: 'Señal pagada ✓', s: 'enlace en el email' },
    { t: 'Hotel confirmado', s: 'archivado en el viaje' },
    { t: 'Alojado en la UE', s: 'un espacio privado por agencia' }
  ],
  tripTitle: 'Un viaje, del primer mensaje a la última factura.',
  steps: [
    { time: '09:12', title: 'Entra la solicitud', body: 'Llega a una única lista, con su siguiente paso.', job: 'sell' },
    { time: '11:40', title: 'Presupuesto enviado', body: 'Hecho con tus tarifas, con el margen ya incluido.', job: 'sell' },
    { time: 'Día 2', title: 'Señal pagada', body: 'Pagada desde el enlace del email.', job: 'get-paid' },
    { time: 'Día 3', title: 'Proveedores confirmados', body: 'Hotel y guía marcados en el viaje.', job: 'book' },
    { time: 'Día 30', title: 'Factura final', body: 'Sale de las cifras del presupuesto.', job: 'get-paid' }
  ],
  stepGo: 'Ver cómo',
  baTitle: 'Lo que cambia el lunes por la mañana.',
  beforeTitle: 'Hoy',
  beforeScraps: [
    'Tarifas_2026_FINAL_v3.xlsx',
    'Presupuesto García.docx',
    'WhatsApp: "¿ha confirmado el hotel?"',
    '¿Señal? mirar el banco',
    'Números de factura en una libreta',
    '42 emails sin leer'
  ],
  afterTitle: 'Con Traviosoft',
  afterBody:
    'Un viaje, un solo sitio. La solicitud, el presupuesto, las reservas, los cobros y las facturas están en el mismo expediente, y todo el equipo ve lo mismo.',
  exampleTitle: 'Mira lo que recibe tu cliente.',
  exampleBody: 'Abre un viaje de ejemplo, una pareja, un grupo de incentivo o un safari: el itinerario día a día y el presupuesto, tal como los ve tu cliente. Sin registrarte.',
  exampleLink: 'Abrir los viajes de ejemplo',
  priceTitle: 'Dos planes, precios claros.',
  priceBody: `Classic lleva toda la agencia. Premium añade equipos, divisas, compras y más. ${PRICES.usersIncluded} usuarios incluidos, pago anual o mensual, puesta en marcha gratis con pago anual.`,
  coin1: 'EUR/mes · Classic',
  coin2: 'EUR/mes · Premium',
  priceLink: 'Comparar planes',
  facts: [
    { k: 'Precio', v: `Desde ${PRICES.classic.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos` },
    { k: 'Para', v: 'Agencias a medida y DMC' },
    { k: 'Datos', v: 'Un espacio privado por agencia, alojado en la UE' },
    { k: 'Idiomas', v: 'Documentos en español, inglés, francés y más' }
  ]
};
