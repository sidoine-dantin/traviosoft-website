import type { SiteContent } from '../types';

export const home: SiteContent['home'] = {
  metaTitle: 'Traviosoft: software para agencias a medida y DMC',
  metaDescription:
    'Solicitudes, presupuestos con tu margen, reservas, itinerarios, cobros y facturas en un solo sitio. Para agencias de 1 a 15. Desde 190 EUR al mes, en la UE.',
  kick: 'Envía el presupuesto',
  giant: 'hoy.',
  sub: 'No el jueves. Software para agencias a medida y DMC.',
  tags: [
    { t: 'Respondes primero', s: 'presupuesto enviado 11:40' },
    { t: 'Señal pagada ✓', s: 'enlace en el email' },
    { t: 'Hotel confirmado', s: 'sin olvidos' },
    { t: 'Alojado en la UE', s: 'tu propia base de datos' }
  ],
  tripTitle: 'Un viaje, del primer mensaje a la última factura.',
  steps: [
    { time: '09:12', title: 'Entra la solicitud', body: 'Llega a una única lista, no a un email perdido.', job: 'sell' },
    { time: '11:40', title: 'Presupuesto enviado', body: 'Hecho con tus tarifas, con el margen ya incluido.', job: 'sell' },
    { time: 'Día 2', title: 'Señal pagada', body: 'Enlace de pago en el email. Sin perseguir a nadie.', job: 'get-paid' },
    { time: 'Día 3', title: 'Proveedores confirmados', body: 'Hotel y guía marcados en el viaje.', job: 'book' },
    { time: 'Día 30', title: 'Factura final', body: 'Sale de las mismas cifras. Nada que reescribir.', job: 'get-paid' }
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
  exampleBody: 'Abre un ejemplo real: el itinerario día a día y el presupuesto, tal como los ve un viajero. Sin registrarte.',
  exampleLink: 'Abrir el viaje de ejemplo',
  priceTitle: 'Todas las funciones, un solo precio.',
  priceBody: 'Facturación anual, también mensual. La configuración y la importación de datos son gratis con facturación anual.',
  coin1: 'EUR/mes · 3 usuarios',
  coin2: 'EUR/mes · 5 usuarios',
  priceLink: 'Comparar planes',
  facts: [
    { k: 'Precio', v: 'Desde 190 EUR al mes, 3 usuarios incluidos' },
    { k: 'Para', v: 'Agencias a medida y DMC, de 1 a 15 personas' },
    { k: 'Datos', v: 'Tu propia base de datos, alojada en la UE' },
    { k: 'Idiomas', v: 'Documentos en español, inglés, francés y más' }
  ]
};
