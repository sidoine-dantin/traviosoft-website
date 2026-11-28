import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const pricing: SiteContent['pricing'] = {
  metaTitle: `Precios: Classic desde ${PRICES.classic.yearly} EUR al mes, Premium desde ${PRICES.premium.yearly} EUR`,
  metaDescription:
    `Dos planes para agencias de viajes a medida y DMC: Classic gestiona toda la agencia, Premium añade grupos, equipos, divisas y marcas. ${PRICES.usersIncluded} usuarios incluidos.`,
  title: 'Precios',
  productLink: 'Ver el producto',
  lead: 'Classic cubre toda la agencia, desde la primera solicitud hasta la última factura. Premium añade grupos, varios equipos, otras divisas, órdenes de compra a proveedores y varias marcas.',
  yearly: 'Anual',
  monthly: 'Mensual',
  yearlyNote: 'Precios por mes, sin IVA.',
  plans: [
    {
      id: 'classic',
      name: 'Classic',
      users: `${PRICES.usersIncluded} usuarios incluidos`,
      yearly: String(PRICES.classic.yearly),
      monthly: String(PRICES.classic.monthly),
      priceNote: { yearly: `Usuario adicional: ${PRICES.extraUser.classic.yearly} EUR al mes`, monthly: `Usuario adicional: ${PRICES.extraUser.classic.monthly} EUR al mes` },
    },
    {
      id: 'premium',
      name: 'Premium',
      users: `${PRICES.usersIncluded} usuarios incluidos`,
      yearly: String(PRICES.premium.yearly),
      monthly: String(PRICES.premium.monthly),
      priceNote: { yearly: `Usuario adicional: ${PRICES.extraUser.premium.yearly} EUR al mes`, monthly: `Usuario adicional: ${PRICES.extraUser.premium.monthly} EUR al mes` },
      hot: true,
    }
  ],
  compareTitle: 'Compara los planes',
  compareFeature: 'Función',
  yes: 'Incluido',
  no: 'No incluido',
  compare: [
    {
      title: 'Vender',
      rows: [
        { f: 'Solicitudes y presupuestos con tu margen y tu comisión', classic: true, premium: true },
        { f: 'Catálogo con precios por temporada', classic: true, premium: true },
        { f: 'Agencias colaboradoras y liquidaciones de comisión', classic: true, premium: true },
        { f: 'El presupuesto como página web y el itinerario día a día, con tu logo y tus colores', classic: true, premium: true },
        { f: 'Documentos en el idioma del cliente', classic: true, premium: true },
        { f: 'Presupuestos y precios de proveedores en otras divisas', classic: false, premium: true }
      ]
    },
    {
      title: 'Reservar',
      rows: [
        { f: 'Las reservas de cada presupuesto aceptado, con los correos de proveedores guardados en el viaje', classic: true, premium: true },
        { f: 'Bonos de servicio para guías, conductores y hoteles', classic: true, premium: true },
        { f: 'Grupos: listas de viajeros, formulario que rellenan los viajeros y rooming lists', classic: false, premium: true },
        { f: 'Solicitudes de disponibilidad y órdenes de compra a proveedores', classic: false, premium: true }
      ]
    },
    {
      title: 'Cobrar',
      rows: [
        { f: 'Calendarios de pago y enlaces de pago', classic: true, premium: true },
        { f: 'Recordatorios de pago automáticos', classic: false, premium: true },
        { f: 'Facturas y rectificativas', classic: 'En España: integradas. En otros países: a través de tu programa de facturación', premium: 'En España: integradas. En otros países: a través de tu programa de facturación' },
        { f: 'Panel con ventas, viajes y caja', classic: true, premium: true },
        { f: 'Exportación a tu programa de contabilidad', classic: false, premium: true }
      ]
    },
    {
      title: 'Equipo y conexiones',
      rows: [
        { f: 'Varios equipos, cada uno con sus clientes y sus viajes', classic: false, premium: true },
        { f: 'Roles a tu medida: quién ve y hace qué', classic: false, premium: true },
        { f: 'Varias marcas y sociedades en una cuenta', classic: false, premium: true },
        { f: 'Trabaja en Traviosoft desde el asistente de IA que ya usas (Claude, ChatGPT, Mistral)', classic: true, premium: true },
        { f: 'El asistente de IA dentro de Traviosoft', classic: { text: 'Opcional, con límites de uso', option: true }, premium: { text: 'Opcional, con límites de uso', option: true } },
        { f: 'Acceso API, para que tu desarrollador conecte tu web y tus otros programas', classic: false, premium: true }
      ]
    },
    {
      title: 'Alta y servicio',
      rows: [
        { f: 'Configuración de tu marca, tus documentos y tus reglas de precio, y formación de tu equipo', classic: { text: 'Gratis con pago anual*', was: `${PRICES.setupMonthly} EUR` }, premium: { text: 'Gratis con pago anual*', was: `${PRICES.setupMonthly} EUR` } },
        { f: 'Importación de tus hojas de cálculo o de la exportación de tu herramienta actual**', classic: { text: 'Gratis con pago anual*', was: `${PRICES.importMonthly} EUR` }, premium: { text: 'Gratis con pago anual*', was: `${PRICES.importMonthly} EUR` } },
        { f: 'Soporte por correo', classic: true, premium: true },
        { f: 'Alojamiento en la Unión Europea', classic: true, premium: true },
        { f: 'Exportación de datos a petición', classic: true, premium: true }
      ]
    }
  ],
  compareNote: [`* Oferta por tiempo limitado solo con pago anual. Con pago mensual, el alta y el acompañamiento (${PRICES.setupMonthly} EUR) y la importación (${PRICES.importMonthly} EUR) se cobran una sola vez al empezar. Las tarifas por temporada y los demás archivos (Word, PDF, correos, viajes en curso) se importan con presupuesto aparte.`, '** Para datos limpios y bien organizados.'],
  faq: [
    {
      q: '¿Qué plan necesito?',
      a: ['Classic gestiona una agencia entera: solicitudes, presupuestos, agencias colaboradoras, reservas, cobros y facturas. Premium añade los grupos, los recordatorios de pago automáticos, varios equipos, vender en otras divisas y las órdenes de compra a proveedores.']
    },
    {
      q: '¿Cómo se paga?',
      a: ['Al año o al mes, como prefieras. El pago anual sale más barato por mes e incluye el alta y la importación. El mensual se puede dejar al final de cualquier mes.']
    },
    {
      q: '¿Los precios llevan IVA?',
      a: ['Los precios son sin IVA. El IVA se añade en la factura según tu país y la situación de tu empresa.']
    },
    {
      q: '¿Qué pasa si añado un usuario?',
      a: [`Los dos planes incluyen ${PRICES.usersIncluded} usuarios. Cada usuario adicional cuesta ${PRICES.extraUser.classic.yearly} EUR al mes en Classic y ${PRICES.extraUser.premium.yearly} EUR en Premium con pago anual (${PRICES.extraUser.classic.monthly} y ${PRICES.extraUser.premium.monthly} EUR con pago mensual).`]
    },
    {
      q: '¿Puedo cambiar de plan?',
      a: ['Sí. Pasa de Classic a Premium cuando quieras y las nuevas funciones están disponibles el mismo día. Tus datos se quedan tal cual.']
    },
    {
      q: '¿Puedo darme de baja?',
      a: ['Sí. Los planes mensuales terminan al final del mes en que te das de baja. Los anuales siguen hasta el final del año pagado y terminan ahí.']
    },
    {
      q: '¿Puedo llevarme mis datos si me voy?',
      a: ['Sí. Recibes tus datos en formatos estándar.']
    },
    {
      q: '¿Qué incluyen el alta y el acompañamiento?',
      a: [`Configuramos tu marca, tus documentos, tus reglas de margen, IVA y comisión, y los accesos de tu equipo. Después formamos a tu equipo por videollamada y seguimos disponibles por email durante las primeras semanas. Todo es gratis con pago anual y cuesta ${PRICES.setupMonthly} EUR una sola vez con pago mensual.`]
    },
    {
      q: '¿Qué incluye la importación?',
      a: [`Tu catálogo con un precio por producto, tus clientes y tus proveedores, desde hojas de cálculo o una exportación de tu herramienta actual, con una fila por elemento y las mismas columnas de arriba abajo. Es gratis con pago anual y cuesta ${PRICES.importMonthly} EUR una sola vez con pago mensual.`, 'Las tarifas por temporada, los documentos Word, los PDF, los correos, los viajes en curso y las listas que hay que ordenar antes se presupuestan aparte, después de ver una muestra.']
    }
  ]
};

export const demo: SiteContent['demo'] = {
  metaTitle: 'Demo de software para agencias de viajes',
  metaDescription:
    'Una llamada de 30 minutos: un viaje de muestra en Traviosoft de la solicitud a la factura, y después precios y preguntas.',
  title: 'Reservar una demo',
  lead: 'Una llamada de 30 minutos. Recorremos un viaje de muestra en Traviosoft, de la primera solicitud a la factura final.',
  agendaTitle: 'La llamada',
  agenda: [
    { mins: '5', title: 'Tu agencia', body: 'Tamaño del equipo, qué vendéis y las herramientas que usáis hoy.' },
    { mins: '15', title: 'Un viaje de muestra', body: 'La solicitud, el presupuesto con margen, la reserva, el itinerario, el cobro y la factura.' },
    { mins: '10', title: 'Precios y preguntas', body: 'El plan para tu equipo, la importación de tus datos y tus preguntas.' }
  ],
  afterTitle: 'Después de la llamada',
  after: [
    'La propuesta y el programa día a día vistos en la llamada',
    'Un resumen breve por email',
    'El precio para tu equipo, por escrito',
    'Una llamada de seguimiento si la pides'
  ],
  bookTitle: 'Elige una hora para tu demo',
  bookBody: 'De momento, la cita se pide por email. Envíanos el nombre de tu agencia, el tamaño del equipo y unos días que te vengan bien, y te respondemos con una hora.',
  emailLabel: 'Escribe a',
  bookCta: 'Elegir una hora',
  bookCalendarBody: '30 minutos por Google Meet, en inglés o en francés. La invitación llega por email.',
  emailAltLabel: 'O escribe a',
  email: 'hola@traviosoft.com',
  faq: [
    {
      q: '¿Hay prueba gratuita?',
      a: ['Hay una demo de 30 minutos sobre un viaje de muestra.']
    },
    {
      q: '¿Quién hace la demo?',
      a: ['Alguien del equipo de Traviosoft, en inglés o en francés.']
    },
    {
      q: '¿Tengo que preparar algo?',
      a: ['Nada que preparar.']
    },
    {
      q: '¿Me pediréis mis datos?',
      a: ['La demo usa un viaje de muestra con datos inventados.']
    }
  ]
};

export const switching: SiteContent['switching'] = {
  metaTitle: 'Pasar de Excel a Traviosoft',
  metaDescription:
    'Cómo pasar de Excel, Word y WhatsApp en plena temporada: qué importamos, qué revisas tú y cómo seguir con los viajes en curso mientras empiezas los nuevos.',
  title: 'Cambiar a Traviosoft',
  lead: 'El cambio se hace por pasos, en paralelo a los viajes que tienes en marcha.',
  timelineTitle: 'Cómo es el proceso',
  timeline: [
    {
      title: 'Nos envías tus archivos',
      body: 'Tus tarifas, clientes, proveedores y viajes abiertos, en hojas de cálculo o como exportación de otra herramienta.'
    },
    {
      title: 'Importamos y tú revisas',
      body: 'Lo cargamos todo en el espacio de tu agencia. Lo abres, miras unos cuantos productos y unos cuantos clientes, y nos dices qué ajustar.'
    },
    {
      title: 'Tu primer presupuesto de verdad',
      body: 'Configuramos tu margen, tu IVA, tus reglas de comisión y tu marca, y formamos a tu equipo por videollamada. Haces un presupuesto real con tus propias tarifas. Respondemos a tus preguntas por email.'
    },
    {
      title: 'Las solicitudes nuevas entran en la aplicación',
      body: 'A partir de ahí, cada solicitud nueva empieza en Traviosoft. Los viajes que ya estaban en curso terminan como empezaron.'
    }
  ],
  importTitle: 'Qué pasa a Traviosoft',
  importParts: [
    { title: 'Incluido en el precio de la importación', body: 'Tu catálogo con un precio por producto, tus clientes, tus proveedores y sus contactos. Desde hojas de cálculo o una exportación de tu herramienta actual.' },
    { title: 'Con presupuesto aparte', body: 'Las tarifas por temporada, los viajes en curso y los demás archivos (Word, PDF, correos). Te damos un precio después de ver una muestra.' }
  ],
  seasonTitle: '¿Me va a descolocar la temporada?',
  seasonBody: [
    'Las solicitudes nuevas entran en Traviosoft desde el día en que arrancas. Los viajes que ya estaban en curso terminan como empezaron.',
    'Los viajes abiertos solo se pasan si tú quieres, y normalmente los que quedan lejos. Un viaje que sale la semana que viene se queda donde está.',
    'En temporada alta, importamos primero y arrancamos en una semana más tranquila.'
  ],
  faq: [
    {
      q: '¿Podéis importar desde mi herramienta actual?',
      a: ['Si exporta a una hoja de cálculo, sí. Envíanos una exportación de muestra y te decimos exactamente qué pasa.']
    },
    {
      q: '¿Cuánto cuesta?',
      a: [`El alta, el acompañamiento y la importación de tus hojas de cálculo son gratis con pago anual. Con pago mensual, el alta y el acompañamiento cuestan ${PRICES.setupMonthly} EUR una sola vez y la importación ${PRICES.importMonthly} EUR una sola vez.`, 'El precio de la importación cubre listas con un precio por producto, una fila por elemento y las mismas columnas de arriba abajo. Las tarifas por temporada, los documentos Word, los PDF, los viajes en curso y las listas que hay que ordenar antes se presupuestan aparte, después de ver una muestra.']
    },
    {
      q: '¿Qué pasa con mis archivos antiguos?',
      a: ['Se quedan exactamente donde están. Importamos copias.']
    },
    {
      q: '¿Tengo que pasar todos los viajes antiguos?',
      a: ['Pasa los abiertos que quieras y deja el resto en tu archivo. Merece la pena importar los clientes antiguos; para los viajes pasados, basta con tu archivo.']
    },
    {
      q: '¿Y si la importación sale mal?',
      a: ['Revisas una muestra antes de arrancar y lo ajustamos contigo. Lo que detectes más tarde lo corriges en la aplicación o nos lo dices.']
    }
  ]
};

export const faqPage: SiteContent['faqPage'] = {
  metaTitle: 'Preguntas frecuentes',
  metaDescription:
    'Qué hace Traviosoft, cuánto cuesta, dónde se alojan tus datos y cómo es el paso desde Excel.',
  title: 'Preguntas frecuentes',
  lead: 'Si tu pregunta no está aquí, escribe a hola@traviosoft.com.',
  groups: [
    {
      title: 'Producto',
      items: [
        {
          q: '¿Qué es Traviosoft?',
          a: ['Un software web de gestión para agencias de viajes a medida y DMC. Cubre la solicitud, el presupuesto, la reserva, el itinerario del cliente, los cobros y las facturas.']
        },
        {
          q: '¿Pueden varios proveedores vender el mismo hotel o servicio?',
          a: ['Sí. Un producto puede tener varios proveedores, cada uno con sus propias tarifas. Eliges el proveedor en cada viaje.']
        },
        {
          q: '¿Qué ve mi cliente?',
          a: ['Un presupuesto con el nombre que elijas para cada servicio y precios por persona, en su idioma y con tu marca. La página web del presupuesto indica también lo incluido y lo no incluido. Tus precios de compra y tus márgenes quedan solo para tu equipo.']
        },
        {
          q: '¿Pueden mis guías y conductores ver el viaje?',
          a: ['Reciben por email un bono de servicio con fechas, horas, nombres y punto de encuentro.']
        },
        {
          q: '¿Trabajáis con DMC que venden a través de agencias colaboradoras?',
          a: ['Sí. Presupuesta a la agencia colaboradora, conserva a su cliente en el viaje, añade la comisión de la agencia y liquídala con una relación por periodo.']
        },
        {
          q: '¿Puedo usar Traviosoft desde Claude o ChatGPT?',
          a: ['Sí, en los dos planes. Conecta Claude, ChatGPT o Mistral y pregunta qué tienes pendiente, pide un presupuesto desde tu catálogo o registra la confirmación de un proveedor. Te pregunta antes de cada cambio y solo hace lo que puede hacer la persona que lo conectó.']
        },
        {
          q: '¿Hay un asistente dentro de Traviosoft?',
          a: ['Sí, como opción en los dos planes, con límites de uso. Pregúntale qué te necesita hoy, pídele un presupuesto preparado desde tu catálogo o que convierta la lista de precios de un proveedor en precios de catálogo; cada cambio espera tu visto bueno.']
        }
      ]
    },
    {
      title: 'Precio y facturación',
      items: [
        {
          q: '¿Cuánto cuesta?',
          a: [`Classic cuesta ${PRICES.classic.yearly} EUR al mes y Premium ${PRICES.premium.yearly} EUR al mes, con pago anual y ${PRICES.usersIncluded} usuarios incluidos. Cada usuario adicional cuesta ${PRICES.extraUser.classic.yearly} EUR al mes en Classic y ${PRICES.extraUser.premium.yearly} EUR en Premium. El IVA no está incluido.`]
        },
        {
          q: '¿Puedo pagar al mes?',
          a: [`Sí. Con pago mensual son ${PRICES.classic.monthly} EUR para Classic y ${PRICES.premium.monthly} EUR para Premium. El alta y el acompañamiento cuestan ${PRICES.setupMonthly} EUR y la importación de tus hojas de cálculo ${PRICES.importMonthly} EUR, una sola vez, con pago mensual; con pago anual, las dos son gratis.`]
        },
        {
          q: '¿Hay prueba gratuita?',
          a: ['Hay una demo de 30 minutos sobre un viaje de muestra.']
        }
      ]
    },
    {
      title: 'Datos y seguridad',
      items: [
        {
          q: '¿Dónde están mis datos?',
          a: ['En un espacio propio para tu agencia, alojado en la Unión Europea, aparte de todas las demás agencias.']
        },
        {
          q: '¿Puedo irme con mis datos?',
          a: ['Sí. Recibes tus datos en formatos estándar.']
        },
        {
          q: '¿Quién puede ver qué?',
          a: ['En Classic, cada usuario ve los viajes de la agencia. En Premium, cada equipo y cada persona pueden tener sus propios clientes, viajes y permisos.']
        }
      ]
    },
    {
      title: 'Cambio de herramienta',
      items: [
        {
          q: '¿Puedo importar mi catálogo actual?',
          a: ['Sí. Durante el alta importamos tus productos, precios y proveedores desde tus hojas de cálculo. El alta y la importación son gratis con pago anual.']
        },
        {
          q: '¿Me va a descolocar la temporada?',
          a: ['Convive con ella. Empieza con las solicitudes nuevas en Traviosoft y termina los viajes en curso como hasta ahora.']
        },
        {
          q: '¿Cumple la normativa de mi país?',
          a: ['La numeración de facturas por empresa y las facturas rectificativas funcionan en todas partes. El régimen especial de las agencias de viajes de España está integrado. En otros países, las facturas pasan por tu programa de facturación. Para tu país, pregúntanos durante la demo.']
        }
      ]
    }
  ]
};

export const about: SiteContent['about'] = {
  metaTitle: 'Sobre Traviosoft',
  metaDescription:
    'Software de gestión para agencias de viajes a medida y DMC: cada viaje en un solo lugar, de la primera solicitud a la factura final, alojado en la UE.',
  title: 'Sobre Traviosoft',
  lead: 'Traviosoft es un software de gestión para agencias de viajes a medida y DMC. Cada viaje está en un solo lugar, de la primera solicitud a la factura final.',
  blocks: [
    { title: 'Pensado para viajes a medida', body: ['Cada viaje es distinto. Traviosoft calcula cada servicio a partir de la tarifa neta del proveedor, trabaja con varios proveedores por servicio y gestiona grupos, divisas y documentos en el idioma del cliente.'] },
    { title: 'Un viaje, las mismas cifras', body: ['El presupuesto aceptado da las reservas, los vencimientos y las facturas. Toda la agencia trabaja con las mismas cifras, tecleadas una sola vez.'] },
    { title: 'Tus datos', body: ['Cada agencia tiene su propio espacio privado. Tus datos están alojados en la Unión Europea y puedes exportarlos en cualquier momento.'] },
    { title: 'Trabajar con nosotros', body: ['Configuramos tu cuenta e importamos tus datos contigo. El soporte es por email, con las personas que desarrollan Traviosoft.'] }
  ]
};

export const resources: SiteContent['resources'] = {
  metaTitle: 'Recursos para agencias de viajes a medida',
  metaDescription:
    'Comparativas, guías y un glosario para agencias a medida y DMC que eligen software. En lenguaje claro y sin necesidad de registrarte.',
  title: 'Recursos',
  lead: 'Comparativas, guías y un glosario.',
  groups: [
    { kind: 'best', title: 'Comparativa de los mejores programas', body: 'Las herramientas que usan las agencias a medida y las DMC, una junto a otra, y a quién le encaja cada una.' },
    { kind: 'compare', title: 'Páginas de comparación', body: 'Traviosoft al lado de otras herramientas.' },
    { kind: 'guide', title: 'Guías', body: 'Notas prácticas para presupuestar, reservar y facturar un viaje a medida.' },
    { kind: 'invoicing', title: 'Facturar en tu país', body: 'Cómo facturan las agencias de viajes en España, Francia, Alemania y Bélgica, con las fechas de la factura electrónica.' },
    { kind: 'glossary', title: 'Glosario', body: 'Los términos de agencia de viajes y de software, en una línea cada uno.' },
  ],
  glossaryTitle: 'Glosario',
  glossaryMetaTitle: 'Glosario de términos de viajes a medida',
  glossaryMeta:
    'Definiciones claras de los términos que usan las agencias de viajes a medida y las DMC: tarifa neta, comisión, hoja de servicio, rooming list, señal y más.',
  glossaryLead: 'Las palabras que usas a diario y las que usa el software, en una línea cada una.'
};
