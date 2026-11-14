import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const home: SiteContent['home'] = {
  metaTitle: 'Traviosoft: software para agencias a medida y DMC',
  metaDescription:
    `Solicitudes, presupuestos con tu margen, reservas, itinerarios, cobros y facturas en un solo sitio. Para agencias de viajes a medida y DMC. Desde ${PRICES.classic.yearly} EUR al mes, en la UE.`,
  title: 'Software para agencias de viajes a medida y DMC',
  sub: 'Solicitudes, presupuestos, reservas, cobros y facturas, en un solo sitio.',
  tags: [
    { t: 'Señal pagada ✓', s: 'enlace en el email' },
    { t: 'Hotel confirmado', s: 'respuesta guardada en el viaje' }
  ],
  tripTitle: 'Cómo avanza un viaje en Traviosoft',
  steps: [
    { time: '09:12', title: 'Entra la solicitud', body: 'Llega a una única lista, con su siguiente paso.', job: 'sell' },
    { time: '11:40', title: 'Presupuesto enviado', body: 'Hecho con tus tarifas, con tu margen.', job: 'sell' },
    { time: 'Día 2', title: 'Señal pagada', body: 'Pagada desde el enlace del email.', job: 'get-paid' },
    { time: 'Día 3', title: 'Proveedores confirmados', body: 'Hotel y guía marcados en el viaje.', job: 'book' },
    { time: 'Día 30', title: 'Factura final', body: 'Sale de las cifras del presupuesto.', job: 'get-paid' }
  ],
  stepGo: 'Ver cómo',
  baTitle: 'Antes y después',
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
    'La solicitud, el presupuesto, las reservas, los cobros y las facturas están en el mismo viaje, y todo el equipo ve lo mismo.',
  priceTitle: 'Precios',
  priceBody: `Dos planes, Classic y Premium, con ${PRICES.usersIncluded} usuarios incluidos. Pago anual o mensual.`,
  coin1: 'EUR/mes · Classic',
  coin2: 'EUR/mes · Premium',
  priceLink: 'Comparar planes',
  facts: [
    { k: 'Precio', v: `Desde ${PRICES.classic.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos` },
    { k: 'Para', v: 'Agencias a medida y DMC' },
    { k: 'Datos', v: 'Un espacio privado por agencia, alojado en la UE' },
    { k: 'Idiomas', v: 'Documentos en español, catalán, inglés, francés e italiano' }
  ]
};
