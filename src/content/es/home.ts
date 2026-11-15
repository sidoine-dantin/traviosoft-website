import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const home: SiteContent['home'] = {
  metaTitle: 'Traviosoft: software para agencias a medida y DMC',
  metaDescription:
    `Solicitudes, presupuestos con tu margen, reservas, itinerarios, cobros y facturas en un solo sitio. Para agencias de viajes a medida y DMC. Desde ${PRICES.classic.yearly} EUR al mes, en la UE.`,
  title: 'Software para agencias de viajes a medida y DMC',
  sub: 'Solicitudes, presupuestos, reservas, cobros y facturas, en un solo sitio.',
  proposal: {
    "agency": "Tu agencia",
    "kind": "Propuesta de viaje",
    "trip": "Andalucía, 8 días",
    "meta": [
      "2 viajeros",
      "8 días",
      "del 3 al 10 de mayo de 2027"
    ],
    "days": [
      {
        "t": "Día 1 · Sevilla",
        "s": "Recogida en el aeropuerto y traslado a su hotel del casco antiguo, 3 noches."
      },
      {
        "t": "Día 2 · Córdoba",
        "s": "Visita guiada a la Mezquita-Catedral y regreso a Sevilla por la tarde."
      },
      {
        "t": "Día 4 · Hacia Ronda",
        "s": "Recogida del coche de alquiler, 2 noches junto al Tajo."
      }
    ],
    "total": "Total a pagar",
    "vatIncl": "IVA incluido",
    "stops": [
      {
        "day": "Día 1 · Lunes 3 de mayo",
        "k": "Traslado",
        "t": "Traslado aeropuerto de Sevilla",
        "s": "Punto de encuentro: salida de llegadas"
      },
      {
        "k": "Alojamiento",
        "t": "Hotel en el casco antiguo de Sevilla",
        "s": "Salida el 6 de mayo",
        "link": "Abrir en Maps"
      },
      {
        "day": "Día 2 · Martes 4 de mayo",
        "k": "Actividad",
        "t": "Mezquita-Catedral de Córdoba",
        "s": "Su guía: Lucía"
      }
    ]
  },
  tripTitle: "El recorrido de un viaje en Traviosoft",
  moments: [
    {
      "time": "Lunes, 09:12",
      "title": "Llega la solicitud",
      "body": "Todas las solicitudes están en una sola lista, con cuánto tiempo llevan esperando y el siguiente paso.",
      "go": "Ver las solicitudes",
      "job": "sell"
    },
    {
      "time": "Lunes, 11:40",
      "title": "El presupuesto, con su margen",
      "body": "Cada línea parte del coste del proveedor, y ve el margen del viaje antes de enviarlo.",
      "go": "Ver los presupuestos",
      "job": "sell"
    },
    {
      "time": "Martes",
      "title": "Cada reserva, al día",
      "body": "Cuando el cliente acepta, cada proveedor recibe su solicitud y su respuesta queda guardada en la línea. Lo que falta por hacer está en las tareas.",
      "go": "Ver las reservas",
      "job": "book"
    },
    {
      "time": "Antes de la salida",
      "title": "Pagos y facturas desde el presupuesto",
      "body": "Los vencimientos salen del presupuesto aceptado. El cliente paga desde el enlace del correo, y la factura recoge las mismas líneas.",
      "go": "Ver los pagos",
      "job": "get-paid"
    }
  ],
  sitTitle: "Según su forma de trabajar",
  sitLead: "Cada agencia tiene sus costumbres. Esto es lo que hace Traviosoft en los casos más habituales.",
  situations: [
    {
      "t": "Vendo a agencias, no al viajero",
      "s": "Comisiones, tarifas netas y la agencia que trae al cliente en cada presupuesto.",
      "job": "sell"
    },
    {
      "t": "Trabajo con grupos",
      "s": "Lista de viajeros, rooming list y un formulario que rellena cada viajero.",
      "job": "book"
    },
    {
      "t": "Mis proveedores facturan en dólares o en dírhams",
      "s": "Costes en su moneda, precios en la suya, con el tipo de cambio del presupuesto guardado.",
      "job": "sell"
    },
    {
      "t": "Trabajo con guías y conductores",
      "s": "Hoja de servicio enviada al guía, y su pago seguido con el viaje.",
      "job": "book"
    },
    {
      "t": "Mis clientes pagan a plazos",
      "s": "Vencimientos fijados en el presupuesto, recordatorios y pago en línea.",
      "job": "get-paid"
    },
    {
      "t": "Facturo en el régimen especial de agencias de viajes",
      "s": "El IVA se calcula sobre su margen, con la mención del régimen en la factura.",
      "job": "get-paid"
    },
    {
      "t": "Mis tarifas cambian según la temporada",
      "s": "Precios por temporada, edad o día, y el presupuesto toma el precio de las fechas del viaje.",
      "job": "sell"
    },
    {
      "t": "Tenemos varias marcas o sociedades",
      "s": "Cada una tiene sus documentos, sus menciones y su numeración de facturas.",
      "job": "setup"
    }
  ],
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
  priceFree: 'gratis*',
  priceFreeNote: '* Con el pago anual. Oferta por tiempo limitado.',
  extraUserLine: `Usuario adicional: ${PRICES.extraUser.classic.yearly} EUR (Classic) o ${PRICES.extraUser.premium.yearly} EUR (Premium) al mes*`,
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
