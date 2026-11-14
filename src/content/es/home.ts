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
    { i: 'sheet', t: 'Tarifas_2026_FINAL_v3.xlsx' },
    { i: 'doc', t: 'Presupuesto García.docx' },
    { i: 'chat', t: 'WhatsApp: "¿ha confirmado el hotel?"' },
    { i: 'bank', t: '¿Señal? mirar el banco' },
    { i: 'book', t: 'Números de factura en una libreta' },
    { i: 'mail', t: '42 emails sin leer' },
    { i: 'sheet', t: 'Rooming_list_Müller (2).xlsx' },
    { i: 'phone', t: 'Llamar al guía' },
    { i: 'note', t: '¿Quién envió el presupuesto?' },
    { i: 'pdf', t: 'Bono_final_FINAL.pdf' },
    { i: 'calc', t: 'Margen: revisar' },
    { i: 'mail', t: 'RE: RE: RE: disponibilidad' }
  ],
  afterTitle: 'Con Traviosoft',
  afterBody:
    'La solicitud, el presupuesto, las reservas, los cobros y las facturas están en el mismo viaje, y todo el equipo ve lo mismo.',
  priceTitle: 'Precios',
  priceBody: 'Alta',
  priceImport: 'e importación de tus hojas de cálculo',
  priceFree: 'gratis con el pago anual.',
  extraUserLine: `Cada usuario adicional: ${PRICES.extraUser.yearly} EUR al mes*`,
  coin1: 'EUR/mes* · Classic',
  coin2: 'EUR/mes* · Premium',
  coinUsers: `${PRICES.usersIncluded} usuarios`,
  priceNote: '* Al mes, pago anual, IVA no incluido. Todos los detalles en la página de precios.',
  priceLink: 'Comparar planes',
  facts: [
    { k: 'Precio', v: `Desde ${PRICES.classic.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos` },
    { k: 'Para', v: 'Agencias a medida y DMC' },
    { k: 'Datos', v: 'Un espacio privado por agencia, alojado en la UE' },
    { k: 'Idiomas', v: 'Documentos en español, catalán, inglés, francés e italiano' }
  ]
};
