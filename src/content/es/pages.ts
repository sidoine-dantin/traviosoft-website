import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const pricing: SiteContent['pricing'] = {
  metaTitle: `Precios: Classic desde ${PRICES.classic.yearly} EUR al mes, Premium desde ${PRICES.premium.yearly} EUR | Traviosoft`,
  metaDescription:
    `Dos planes para agencias de viajes a medida y DMC. Classic gestiona toda la agencia desde ${PRICES.classic.yearly} EUR al mes; Premium añade equipos, monedas, compras, varias marcas y el asistente. ${PRICES.usersIncluded} usuarios incluidos, alta gratis con pago anual.`,
  title: 'Precios',
  lead: 'Classic cubre toda la agencia, de la primera solicitud a la última factura. Premium añade equipos, otras monedas, compras, varias marcas y conexiones.',
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
      priceNote: { yearly: `Usuario adicional: ${PRICES.extraUser.yearly} EUR al mes`, monthly: `Usuario adicional: ${PRICES.extraUser.monthly} EUR al mes` },
    },
    {
      id: 'premium',
      name: 'Premium',
      users: `${PRICES.usersIncluded} usuarios incluidos`,
      yearly: String(PRICES.premium.yearly),
      monthly: String(PRICES.premium.monthly),
      priceNote: { yearly: `Usuario adicional: ${PRICES.extraUser.yearly} EUR al mes`, monthly: `Usuario adicional: ${PRICES.extraUser.monthly} EUR al mes` },
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
        { f: 'Página de propuesta e itinerario día a día, con tu logo y tus colores', classic: true, premium: true },
        { f: 'Documentos en el idioma del cliente', classic: true, premium: true },
        { f: 'Divisas', classic: 'La divisa de tu agencia', premium: 'Cualquier divisa, con tipos de cambio diarios' }
      ]
    },
    {
      title: 'Reservar',
      rows: [
        { f: 'Pedidos y reservas, con los correos de proveedores archivados en el viaje', classic: true, premium: true },
        { f: 'Hojas de servicio', classic: true, premium: true },
        { f: 'Grupos: listas de viajeros, enlace a formulario y rooming lists', classic: true, premium: true },
        { f: 'Solicitudes de disponibilidad y órdenes de compra a proveedores', classic: false, premium: true }
      ]
    },
    {
      title: 'Cobrar',
      rows: [
        { f: 'Calendarios de pago, enlaces y recordatorios', classic: true, premium: true },
        { f: 'Facturas y rectificativas, con las normas fiscales de tu país', classic: true, premium: true },
        { f: 'Panel de control', classic: true, premium: true },
        { f: 'Exportación contable', classic: false, premium: true }
      ]
    },
    {
      title: 'Equipo y conexiones',
      rows: [
        { f: 'Usuarios', classic: `${PRICES.usersIncluded} incluidos, y ${PRICES.extraUser.yearly} EUR al mes por usuario adicional`, premium: `${PRICES.usersIncluded} incluidos, y ${PRICES.extraUser.yearly} EUR al mes por usuario adicional` },
        { f: 'Equipos y roles', classic: false, premium: true },
        { f: 'Varias marcas y sociedades en una cuenta', classic: false, premium: true },
        { f: 'El asistente integrado, y la conexión de tus propias herramientas de IA', classic: false, premium: true },
        { f: 'Conexiones con tu web y otros programas', classic: false, premium: true }
      ]
    },
    {
      title: 'Alta y servicio',
      rows: [
        { f: 'Configuración de tu marca, tus documentos y tus reglas de precio', classic: 'Gratis con pago anual*', premium: 'Gratis con pago anual*' },
        { f: 'Importación de tus hojas de cálculo o de la exportación de tu herramienta actual', classic: 'Gratis con pago anual*', premium: 'Gratis con pago anual*' },
        { f: 'Soporte por correo en español, inglés y francés', classic: true, premium: true },
        { f: 'Alojamiento en la Unión Europea, un espacio separado por agencia', classic: true, premium: true },
        { f: 'Tus datos exportables en formatos estándar', classic: true, premium: true },
        { f: 'Las novedades de tu plan en cuanto salen', classic: true, premium: true }
      ]
    }
  ],
  compareNote: `* Oferta por tiempo limitado. Con pago mensual, el alta cuesta ${PRICES.setupMonthly} EUR y la importación de hojas de cálculo ${PRICES.importMonthly} EUR, una sola vez. Los demás archivos se importan con presupuesto aparte.`,
  faq: [
    {
      q: '¿Qué plan necesito?',
      a: ['Classic gestiona una agencia entera: solicitudes, presupuestos, agencias colaboradoras, reservas, grupos, cobros y facturas. Premium añade funciones como equipos con sus propios clientes, vender en otras monedas y órdenes de compra a proveedores.']
    },
    {
      q: '¿Cómo se paga?',
      a: ['Al año o al mes, como prefieras. El pago anual sale más barato por mes e incluye el alta y la importación. El mensual se puede dejar al final de cualquier mes.']
    },
    {
      q: '¿Los precios llevan IVA?',
      a: ['No. El IVA se añade en la factura según tu país y la situación de tu empresa.']
    },
    {
      q: '¿Qué pasa si añado un usuario?',
      a: [`Los dos planes incluyen ${PRICES.usersIncluded} usuarios. Cada usuario adicional cuesta ${PRICES.extraUser.yearly} EUR al mes con pago anual y ${PRICES.extraUser.monthly} EUR con pago mensual.`]
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
      q: '¿Qué incluye el alta?',
      a: [`Configuramos tu marca, tus documentos, tus reglas de margen, IVA y comisión, y los accesos de tu equipo. Es gratis con pago anual y cuesta ${PRICES.setupMonthly} EUR una sola vez con pago mensual.`]
    },
    {
      q: '¿Qué incluye la importación?',
      a: [`Tu catálogo con sus precios, tus clientes y tus proveedores, desde hojas de cálculo o una exportación de tu herramienta actual, con una fila por elemento y las mismas columnas de arriba abajo. Es gratis con pago anual y cuesta ${PRICES.importMonthly} EUR una sola vez con pago mensual.`, 'Los documentos Word, los PDF, los correos, los viajes en curso y las listas que hay que ordenar antes se presupuestan aparte, después de ver una muestra.']
    }
  ]
};

export const demo: SiteContent['demo'] = {
  metaTitle: 'Reservar una demo | Traviosoft',
  metaDescription:
    'Una llamada de 30 minutos: un viaje de muestra en Traviosoft de la solicitud a la factura, y después precios y preguntas.',
  title: 'Reservar una demo',
  lead: 'Una llamada de 30 minutos. Recorremos un viaje de muestra en Traviosoft, de la primera solicitud a la factura final.',
  agendaTitle: 'La llamada',
  agenda: [
    { mins: '5', title: 'Tu agencia', body: 'Tamaño del equipo, qué vendéis y las herramientas que usáis hoy.' },
    { mins: '15', title: 'Un viaje de muestra', body: 'La solicitud, el presupuesto con margen, la reserva, el itinerario, el cobro y la factura. Un viaje en pareja, un grupo de incentivo o un safari.' },
    { mins: '10', title: 'Precios y preguntas', body: 'El plan para tu equipo, la importación de tus datos y tus preguntas.' }
  ],
  bringTitle: 'A quién invitar',
  bring: [
    'Quien haga presupuestos o reservas en tu equipo',
    'Quien lleve los cobros y las facturas'
  ],
  afterTitle: 'Después de la llamada',
  after: [
    'Un resumen breve por email',
    'El precio para tu equipo, por escrito',
    'Una llamada de seguimiento si la pides'
  ],
  bookTitle: 'Pide hora',
  bookBody: 'De momento, la cita se pide por email. Envíanos el nombre de tu agencia, el tamaño del equipo y unos días que te vengan bien, y te respondemos con una hora.',
  emailLabel: 'Escribe a',
  email: 'hola@traviosoft.com',
  faq: [
    {
      q: '¿Hay prueba gratuita?',
      a: ['No. Hay una demo de 30 minutos.']
    },
    {
      q: '¿Quién hace la demo?',
      a: ['Alguien del equipo de Traviosoft, en español, inglés o francés.']
    },
    {
      q: '¿Tengo que preparar algo?',
      a: ['No.']
    },
    {
      q: '¿Me pediréis mis datos?',
      a: ['No. La demo usa un viaje de muestra con datos inventados.']
    }
  ]
};

export const switching: SiteContent['switching'] = {
  metaTitle: 'Pasar de Excel a Traviosoft | Traviosoft',
  metaDescription:
    'Cómo pasar de Excel, Word y WhatsApp en plena temporada: qué importamos, qué revisas tú y cómo seguir con los viajes en curso mientras empiezas los nuevos.',
  title: 'Cambiar a Traviosoft',
  lead: 'El cambio se hace por pasos, en paralelo a los viajes que tienes en marcha.',
  timelineTitle: 'Cómo es el proceso',
  timeline: [
    {
      when: 'Día 1',
      title: 'Nos envías tus archivos',
      body: 'Tus tarifas, clientes, proveedores y viajes abiertos, en hojas de cálculo o como exportación de otra herramienta.'
    },
    {
      when: 'Semana 1',
      title: 'Importamos y tú revisas',
      body: 'Lo cargamos todo en el espacio de tu agencia. Lo abres, miras unos cuantos productos y unos cuantos clientes, y nos dices qué ajustar.'
    },
    {
      when: 'Semana 2',
      title: 'Tu primer presupuesto de verdad',
      body: 'Configuramos tu margen, tu IVA, tus reglas de comisión y tu marca. Haces un presupuesto real con tus propias tarifas. Si te atascas, estamos por email.'
    },
    {
      when: 'En marcha',
      title: 'Las solicitudes nuevas entran en la aplicación',
      body: 'A partir de ahí, cada solicitud nueva empieza en Traviosoft. Los viajes que ya estaban en curso terminan como empezaron.'
    }
  ],
  importTitle: 'Qué pasa a Traviosoft',
  importHead: ['Qué', 'Desde', 'Precio'],
  importRows: [
    { what: 'Catálogo, productos y tarifas', from: 'Hojas de cálculo, la exportación de otra herramienta', how: 'Incluido en la importación' },
    { what: 'Clientes', from: 'Hojas de cálculo, la exportación de otra herramienta', how: 'Incluido en la importación' },
    { what: 'Proveedores y contactos', from: 'Hojas de cálculo, la exportación de otra herramienta', how: 'Incluido en la importación' },
    { what: 'Viajes en curso y otros archivos', from: 'Word, PDF, correos, archivos mezclados', how: 'Presupuesto aparte, tras ver una muestra' }
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
      a: [`El alta y la importación de tus hojas de cálculo son gratis con pago anual. Con pago mensual, el alta cuesta ${PRICES.setupMonthly} EUR una sola vez y la importación ${PRICES.importMonthly} EUR una sola vez.`, 'El precio de la importación cubre listas con una fila por elemento y las mismas columnas de arriba abajo. Los documentos Word, los PDF, los viajes en curso y las listas que hay que ordenar antes se presupuestan aparte, después de ver una muestra.']
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
  metaTitle: 'Preguntas frecuentes | Traviosoft',
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
          a: ['Un presupuesto limpio con nombres pensados para el cliente, precios por persona, lo que incluye y lo que no, en su idioma y con tu marca. Tus tarifas netas y tus márgenes quedan solo para tu equipo.']
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
          q: '¿Hay un asistente de IA?',
          a: ['Sí, en Premium. Pregúntale qué te necesita hoy, pídele un presupuesto preparado desde tu catálogo o que convierta la lista de precios de un proveedor en precios de catálogo; cada cambio espera tu visto bueno. También puedes conectar a tus datos de Traviosoft el asistente de IA que ya usas.']
        }
      ]
    },
    {
      title: 'Precio y facturación',
      items: [
        {
          q: '¿Cuánto cuesta?',
          a: [`Classic cuesta ${PRICES.classic.yearly} EUR al mes y Premium ${PRICES.premium.yearly} EUR al mes, con pago anual y ${PRICES.usersIncluded} usuarios incluidos. Cada usuario adicional cuesta ${PRICES.extraUser.yearly} EUR al mes. El IVA no está incluido.`]
        },
        {
          q: '¿Puedo pagar al mes?',
          a: [`Sí. Con pago mensual son ${PRICES.classic.monthly} EUR para Classic y ${PRICES.premium.monthly} EUR para Premium. El alta cuesta ${PRICES.setupMonthly} EUR y la importación de tus hojas de cálculo ${PRICES.importMonthly} EUR, una sola vez, con pago mensual; con pago anual, las dos son gratis.`]
        },
        {
          q: '¿Hay prueba gratuita?',
          a: ['No. Hay una demo de 30 minutos.']
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
          a: ['La numeración de facturas por empresa y las facturas rectificativas funcionan en todas partes. Los regímenes fiscales y la facturación electrónica se activan por país en los ajustes. Para otros países, pregúntanos qué está cubierto.']
        }
      ]
    }
  ]
};

export const about: SiteContent['about'] = {
  metaTitle: 'Sobre Traviosoft: nació en una agencia de Barcelona',
  metaDescription:
    'Traviosoft nació en una agencia de viajes a medida de Barcelona que usaba Excel, Word y WhatsApp. Soporte por email de las personas que construyen el producto y datos alojados en la UE.',
  title: 'Sobre Traviosoft',
  lead: 'Traviosoft nació dentro de una agencia de viajes a medida de Barcelona. Es un sistema de gestión para agencias a medida y DMC.',
  blocks: [
    {
      title: 'De dónde viene',
      body: [
        'La agencia funcionaba con Excel para las tarifas, Word para los presupuestos y WhatsApp para todo lo demás. En una semana de mucho trabajo, cada señal y cada confirmación de hotel dependían de que alguien se acordara.',
        'La primera versión se construyó allí, con los viajes de la propia agencia.'
      ]
    },
    {
      title: 'Qué hace',
      body: [
        'Traviosoft cubre todo el viaje: solicitudes, presupuestos calculados servicio a servicio desde tarifas netas, reservas con varios proveedores, documentos en el idioma del cliente, cobros y facturas.'
      ]
    },
    {
      title: 'Soporte',
      body: [
        'El soporte es por email, en español, inglés y francés, de las personas que construyen el producto.'
      ]
    },
    {
      title: 'Tus datos',
      body: [
        'Cada agencia tiene su propio espacio separado, alojado en la Unión Europea. Puedes exportar tus datos en cualquier momento.'
      ]
    }
  ],
  facts: [
    { k: 'Origen', v: 'Una agencia a medida de Barcelona' },
    { k: 'Para', v: 'Agencias a medida y DMC' },
    { k: 'Soporte', v: 'Por email, en español, inglés y francés' },
    { k: 'Datos', v: 'Un espacio privado por agencia, alojado en la UE' }
  ]
};

export const resources: SiteContent['resources'] = {
  metaTitle: 'Recursos para agencias de viajes a medida | Traviosoft',
  metaDescription:
    'Comparativas, guías y un glosario para agencias a medida y DMC que eligen software. En lenguaje claro y sin necesidad de registrarte.',
  title: 'Recursos',
  lead: 'Comparativas, guías y un glosario.',
  groups: [
    { kind: 'best', title: 'Comparativa de los mejores programas', body: 'Las herramientas que usan las agencias a medida y las DMC, una junto a otra, y a quién le encaja cada una.' },
    { kind: 'compare', title: 'Páginas de comparación', body: 'Traviosoft al lado de otras herramientas.' },
    { kind: 'guide', title: 'Guías', body: 'Notas prácticas para presupuestar, reservar y facturar un viaje a medida.' },
    { kind: 'glossary', title: 'Glosario', body: 'Los términos de agencia de viajes y de software, en una línea cada uno.' },
  ],
  glossaryTitle: 'Glosario',
  glossaryMeta:
    'Definiciones claras de los términos que usan las agencias de viajes a medida y las DMC: tarifa neta, comisión, hoja de servicio, rooming list, señal y más.',
  glossaryLead: 'Las palabras que usas a diario y las que usa el software, en una línea cada una.'
};
