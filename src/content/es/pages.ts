import type { SiteContent } from '../types';

export const pricing: SiteContent['pricing'] = {
  metaTitle: 'Precios: desde 190 EUR al mes, todo incluido | Traviosoft',
  metaDescription:
    'Tres planes, distintos solo en usuarios. Todas las funciones en todos. Desde 190 EUR al mes para 3 usuarios; alta e importación gratis con pago anual.',
  title: 'Todas las funciones, un solo precio.',
  lead: 'Los planes se diferencian por el número de usuarios y nada más. Todas las funciones están en todos los planes, así que nunca hay duda de qué falta.',
  yearly: 'Anual',
  monthly: 'Mensual',
  yearlyNote: 'Con el pago anual tienes dos meses gratis. Los precios son por mes, sin IVA.',
  plans: [
    {
      id: 'small',
      name: 'Core',
      users: 'Hasta 3 usuarios',
      yearly: '190',
      monthly: '228',
      priceNote: 'EUR al mes, sin IVA. Pago anual o mensual.',
      lines: [
        { text: 'Solicitudes, catálogo, presupuestos y propuestas' },
        { text: 'Reservas, proveedores e itinerarios de cliente' },
        { text: 'Cobros, facturas y panel de control' },
        { text: 'Tu propia base de datos, alojada en la UE' },
        { text: 'Soporte por email en español, inglés y francés' },
        { text: 'Asistente de IA: complemento, 29 EUR al mes', later: true }
      ]
    },
    {
      id: 'team',
      name: 'Team',
      users: 'Hasta 5 usuarios',
      yearly: '250',
      monthly: '300',
      priceNote: 'EUR al mes, sin IVA. Pago anual o mensual.',
      hot: true,
      lines: [
        { text: 'Solicitudes, catálogo, presupuestos y propuestas' },
        { text: 'Reservas, proveedores e itinerarios de cliente' },
        { text: 'Cobros, facturas y panel de control' },
        { text: 'Tu propia base de datos, alojada en la UE' },
        { text: 'Soporte por email en español, inglés y francés' },
        { text: 'Asistente de IA incluido', later: true }
      ]
    },
    {
      id: 'larger',
      name: 'Extended',
      users: '6 usuarios o más',
      yearly: 'Desde 250',
      monthly: 'Desde 300',
      priceNote:
        'EUR al mes, sin IVA. Anual: 250 + 40 por usuario adicional. Mensual: 300 + 48 por usuario adicional.',
      lines: [
        { text: 'Solicitudes, catálogo, presupuestos y propuestas' },
        { text: 'Reservas, proveedores e itinerarios de cliente' },
        { text: 'Cobros, facturas y panel de control' },
        { text: 'Tu propia base de datos, alojada en la UE' },
        { text: 'Soporte por email en español, inglés y francés' },
        { text: 'Asistente de IA incluido', later: true }
      ]
    }
  ],
  compareTitle: 'Como referencia',
  compareBody:
    'Ezus para 3 usuarios cuesta 75 EUR por usuario al mes (225 EUR), más un pack de incorporación obligatorio de 1.990 EUR. Fuente: ezus.io/pricing, noviembre de 2026.',
  includedTitle: 'Todos los planes incluyen',
  included: [
    'Todas las funciones de la aplicación, sin módulos bloqueados',
    'Solicitudes, catálogo con precios por temporada, presupuestos con tu margen, IVA y comisión',
    'Página de propuesta e itinerario de cliente en el idioma de tu cliente y con tu marca',
    'Reservas, emails de proveedores archivados en el viaje, hojas de servicio, calendario',
    'Calendario de cobros, enlaces de pago, facturas de señal y de liquidación, facturas rectificativas',
    'Panel con ventas, viajes, cobros y pagos',
    'Tu propia base de datos aislada, alojada en la Unión Europea',
    'Acceso a tus datos por API y MCP',
    'Alta e importación de datos: gratis con pago anual, 390 EUR una sola vez con pago mensual'
  ],
  faq: [
    {
      q: '¿Cómo se paga?',
      a: ['Al año o al mes, como prefieras. El pago anual equivale a dos meses gratis. El mensual cuesta un 20 % más por mes y puedes dejarlo cuando quieras.']
    },
    {
      q: '¿Los precios llevan IVA?',
      a: ['No. El IVA se añade en la factura según tu país y la situación de tu empresa.']
    },
    {
      q: '¿Puedo darme de baja?',
      a: ['Sí. Los planes mensuales terminan al final del mes en que te das de baja. Los anuales siguen hasta el final del año pagado y no se renuevan.']
    },
    {
      q: '¿Qué pasa si añado un usuario?',
      a: ['Hasta 3 usuarios estás en Core y hasta 5 en Team. Desde el sexto usuario pasas a Extended, y cada usuario adicional cuesta 40 EUR al mes con pago anual y 48 EUR con pago mensual.']
    },
    {
      q: '¿Mensual o anual: cuál me conviene?',
      a: ['El anual es más barato y el alta es gratis. El mensual es más flexible y tiene un alta única de 390 EUR. Si no lo tienes claro, empieza por el mensual y pasa al anual más adelante.']
    },
    {
      q: '¿Puedo llevarme mis datos si me voy?',
      a: ['Sí. Recibes tus datos en formatos estándar. Son tus datos, en tu propia base de datos.']
    },
    {
      q: '¿Qué incluye el alta?',
      a: ['Importamos tu catálogo, tus clientes, tus proveedores y tus viajes abiertos desde Excel o CSV, y configuramos tu marca y tus reglas de precios. Es gratis con pago anual y 390 EUR una sola vez con pago mensual.']
    }
  ]
};

export const example: SiteContent['example'] = {
  metaTitle: 'Viaje de ejemplo: Andalucía, 8 días | Traviosoft',
  metaDescription:
    'Abre un viaje de ejemplo hecho con Traviosoft: el itinerario día a día y el presupuesto tal como lo ve el viajero. Datos inventados, sin registrarte.',
  title: 'Lo que recibe tu cliente.',
  lead: 'Un viaje de muestra, hecho con Traviosoft. Abre el itinerario y el presupuesto tal como los ve el viajero.',
  tabs: { itinerary: 'Itinerario', quote: 'Presupuesto' },
  trip: {
    name: 'Andalucía, 8 días',
    dates: 'Del 12 al 19 de abril de 2027',
    travellers: 'Cliente: Laura & Tom, 2 adultos',
    agency: 'Tu agencia',
    days: [
      {
        day: 'Día 1',
        title: 'Llegada a Sevilla',
        body: 'Un conductor te recibe en el aeropuerto y te lleva al hotel. La tarde queda libre.',
        items: ['Traslado privado desde el aeropuerto, 14:30', 'Hotel Alfonso XIII, check-in desde las 15:00', 'Sugerencias para cenar en Santa Cruz']
      },
      {
        day: 'Día 2',
        title: 'Sevilla, el casco antiguo',
        body: 'La catedral, la Giralda y el Alcázar con guía local, y la tarde a tu ritmo.',
        items: ['Guía privado, de 09:30 a 13:00', 'Entradas al Alcázar con hora fija', 'Tarde libre']
      },
      {
        day: 'Día 3',
        title: 'Sevilla, día libre y flamenco',
        body: 'Un día para el río, los mercados y el barrio de Triana. Por la noche, un pequeño espectáculo de flamenco.',
        items: ['Espectáculo de flamenco en Triana, 20:30', 'Hotel Alfonso XIII']
      },
      {
        day: 'Día 4',
        title: 'Hacia Córdoba',
        body: 'Trayecto por la mañana hasta Córdoba. La Mezquita con guía y después la antigua judería a pie.',
        items: ['Traslado privado de Sevilla a Córdoba, 09:00', 'Guía privado en la Mezquita, 12:00', 'Hotel en el casco antiguo']
      },
      {
        day: 'Día 5',
        title: 'Hacia Granada',
        body: 'Carretera a Granada entre olivares. Tiempo para instalarte y subir al Albaicín al atardecer.',
        items: ['Traslado privado de Córdoba a Granada, 10:00', 'Hotel con vistas a la Alhambra', 'Atardecer en el Mirador de San Nicolás']
      },
      {
        day: 'Día 6',
        title: 'La Alhambra',
        body: 'Los palacios, el Generalife y los jardines con guía privado. El resto del día es tuyo.',
        items: ['Guía privado, Alhambra, de 09:00 a 13:00', 'Entrada a los Palacios Nazaríes a las 09:30', 'Tarde libre']
      },
      {
        day: 'Día 7',
        title: 'Hacia Ronda',
        body: 'Por la sierra hasta Ronda, la ciudad sobre el tajo. Un paseo hasta el Puente Nuevo antes de cenar.',
        items: ['Traslado privado de Granada a Ronda, 10:30', 'Hotel con vistas al tajo', 'Cena en un restaurante local']
      },
      {
        day: 'Día 8',
        title: 'Salida desde Málaga',
        body: 'Traslado al aeropuerto de Málaga, con la hora ajustada a tu vuelo.',
        items: ['Traslado privado de Ronda al aeropuerto de Málaga, 09:00', 'Check-out antes de las 11:00']
      }
    ],
    quoteLines: [
      { name: 'Sevilla, 3 noches', detail: 'Hotel Alfonso XIII, habitación doble, desayuno', price: '1.980 EUR' },
      { name: 'Córdoba, 1 noche', detail: 'Hotel en el casco antiguo, habitación doble, desayuno', price: '280 EUR' },
      { name: 'Granada, 2 noches', detail: 'Hotel con vistas a la Alhambra, habitación doble, desayuno', price: '840 EUR' },
      { name: 'Ronda, 1 noche', detail: 'Hotel con vistas al tajo, habitación doble, desayuno', price: '360 EUR' },
      { name: 'Guías privados', detail: 'Alhambra 420 EUR, Mezquita 180 EUR (entradas incluidas en el precio)', price: '600 EUR' },
      { name: 'Traslados privados', detail: 'Aeropuerto, Córdoba, Granada, Ronda y aeropuerto de Málaga', price: '560 EUR' },
      { name: 'Espectáculo de flamenco', detail: 'Local pequeño en Triana, 2 entradas', price: '240 EUR' }
    ],
    included: [
      '7 noches con desayuno',
      'Todos los traslados privados',
      'Guías privados en Sevilla, Córdoba y Granada',
      'Entradas al Alcázar, la Mezquita y la Alhambra',
      'Espectáculo de flamenco para 2'
    ],
    notIncluded: ['Vuelos', 'Comidas y cenas', 'Seguro de viaje', 'Tasa turística en los hoteles'],
    total: '4.860 EUR',
    perPerson: '2.430 EUR por persona',
    deposit: '30 % para confirmar, el resto 30 días antes de la llegada',
    validUntil: 'Válido hasta el 30 de noviembre de 2026'
  },
  note: 'Este es un ejemplo hecho con Traviosoft con datos inventados.'
};

export const demo: SiteContent['demo'] = {
  metaTitle: 'Demo: 30 minutos, con un viaje como el tuyo | Traviosoft',
  metaDescription:
    'Una llamada de 30 minutos sobre uno de tus viajes, de la solicitud a la factura. Después recibes el precio por escrito y no te llamamos más, salvo que lo pidas.',
  title: '30 minutos, con un viaje como el tuyo.',
  lead: 'Sin diapositivas. Cogemos uno de tus viajes y lo pasamos por la aplicación, desde el primer mensaje hasta la factura final.',
  agendaTitle: 'Cómo van los 30 minutos',
  agenda: [
    { mins: '5', title: 'Tu agencia', body: 'Cuántos sois, qué vendéis y qué usáis hoy. Para que el resto encaje con tu caso.' },
    { mins: '15', title: 'Uno de tus viajes, de la solicitud a la factura', body: 'La solicitud, el presupuesto con tu margen, la reserva, el itinerario, el cobro y la factura. Con un viaje como los que vendes.' },
    { mins: '10', title: 'Precio, cambio de herramienta y preguntas', body: 'Lo que cuesta para tu equipo, cómo pasan tus archivos de Excel y lo que quieras preguntar.' }
  ],
  bringTitle: 'Qué traer',
  bring: [
    'Una solicitud reciente, tal como llegó (vale un email)',
    'Tu archivo de tarifas, si quieres verlo importado',
    'A quien de tu equipo haga presupuestos o reservas'
  ],
  afterTitle: 'Qué pasa después',
  after: [
    'Un resumen por escrito por email: lo que vimos y lo que acordamos',
    'El precio para tu equipo, por escrito',
    'Ninguna llamada de seguimiento, salvo que la pidas'
  ],
  bookTitle: 'Pide hora',
  bookBody: 'De momento, la cita se pide por email. Cuéntanos tu agencia, el tamaño de tu equipo y unos días que te vengan bien. Te respondemos con una hora.',
  emailLabel: 'Escribe a',
  email: 'hola@traviosoft.com',
  faq: [
    {
      q: '¿Hay prueba gratuita?',
      a: ['No. Hay una demo y el viaje de ejemplo de esta web. Preferimos enseñarte tu propio viaje a dejarte solo con una cuenta vacía.']
    },
    {
      q: '¿Quién hace la demo?',
      a: ['Alguien del equipo de Traviosoft, en español, inglés o francés. Es una llamada, no un vídeo grabado.']
    },
    {
      q: '¿Tengo que preparar algo?',
      a: ['No. Una solicitud reciente ayuda, y tu archivo de tarifas también, pero la demo funciona sin ellos.']
    },
    {
      q: '¿Compartiréis mis datos?',
      a: ['No. Lo que nos enseñes queda entre nosotros. No hacen falta datos reales de clientes, puedes cambiar los nombres.']
    }
  ]
};

export const switching: SiteContent['switching'] = {
  metaTitle: 'Pasar de Excel a Traviosoft | Traviosoft',
  metaDescription:
    'Cómo dejar Excel, Word y WhatsApp sin perder una temporada: qué importamos, qué revisas tú y cómo seguir con los viajes en curso mientras empiezas los nuevos.',
  title: 'Dejar Excel sin perder una temporada.',
  lead: 'No se apaga un sistema para encender otro. Se avanza por pasos, y los viajes que tienes en marcha siguen su curso.',
  timelineTitle: 'Cómo es el proceso',
  timeline: [
    {
      when: 'Día 1',
      title: 'Nos envías tus archivos',
      body: 'Tus tarifas, tu lista de clientes, tus proveedores, tus viajes abiertos. Valen Excel y CSV, y también la exportación de otra herramienta. Si están desordenados, no pasa nada.'
    },
    {
      when: 'Semana 1',
      title: 'Importamos y tú revisas',
      body: 'Lo cargamos todo en tu propia base de datos. La abres, miras unos cuantos productos y unos cuantos clientes, y nos dices qué no cuadra.'
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
  importHead: ['Qué', 'Desde', 'Cómo'],
  importRows: [
    { what: 'Catálogo, productos y tarifas', from: 'Excel, CSV', how: 'Lo importamos nosotros. Tú revisas una muestra.' },
    { what: 'Clientes', from: 'Excel, CSV, los contactos de tu correo', how: 'Lo importamos nosotros. Los duplicados se fusionan contigo.' },
    { what: 'Proveedores y contactos', from: 'Excel, CSV', how: 'Lo importamos nosotros. Tú revisas los contactos que más usas.' },
    { what: 'Viajes abiertos', from: 'Excel, Word, la exportación de otra herramienta', how: 'Importamos los que elijas. Los revisas uno por uno.' }
  ],
  seasonTitle: '¿Me va a descolocar la temporada?',
  seasonBody: [
    'No, si lo haces en el orden adecuado. Empieza por las solicitudes nuevas: entran en Traviosoft desde el día en que arrancas. Los viajes que ya estaban en curso los sigues cerrando como siempre, con el Excel y el Word que conoces.',
    'Los viajes abiertos solo se pasan si tú quieres, y normalmente los que quedan lejos. Un viaje que sale la semana que viene se queda donde está.',
    'Si estás en plena temporada alta, dínoslo. Podemos importar primero y esperar a arrancar hasta que tengas una semana tranquila.'
  ],
  faq: [
    {
      q: '¿Podéis importar desde mi herramienta actual?',
      a: ['Si puede exportar a Excel o CSV, sí. Envíanos una exportación de muestra y te decimos qué pasa y qué no.']
    },
    {
      q: '¿Cuánto cuesta?',
      a: ['El alta y la importación de datos son gratis con pago anual. Con pago mensual, 390 EUR una sola vez.']
    },
    {
      q: '¿Pierdo mis archivos antiguos?',
      a: ['No. Importamos copias. Tus archivos de Excel y Word se quedan exactamente donde están.']
    },
    {
      q: '¿Tengo que pasar todos los viajes antiguos?',
      a: ['No. Pasa los abiertos que quieras y deja el resto en tu archivo. Merece la pena importar los clientes antiguos, los viajes pasados normalmente no.']
    },
    {
      q: '¿Y si la importación sale mal?',
      a: ['Revisas una muestra antes de arrancar y corregimos lo que no cuadre. Lo que detectes más tarde lo corriges en la aplicación o nos lo dices.']
    }
  ]
};

export const faqPage: SiteContent['faqPage'] = {
  metaTitle: 'Preguntas frecuentes | Traviosoft',
  metaDescription:
    'Respuestas claras sobre qué hace Traviosoft, cuánto cuesta, dónde están tus datos y cómo funciona el paso desde Excel. Escritas para dueños de agencia.',
  title: 'Las preguntas de las agencias.',
  lead: 'Respuestas cortas. Si la tuya no está aquí, escribe a hola@traviosoft.com.',
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
          a: ['Un presupuesto limpio con nombres pensados para el cliente, precios por persona, lo que incluye y lo que no, en su idioma y con tu marca. Tus tarifas netas y tus márgenes no se muestran nunca.']
        },
        {
          q: '¿Pueden mis guías y conductores ver el viaje?',
          a: ['Reciben una hoja de servicio con fechas, horas, nombres y punto de encuentro. No necesitan cuenta.']
        },
        {
          q: '¿Hay un asistente de IA?',
          a: ['Todavía no. Está en camino: un asistente dentro de Traviosoft que prepara presupuestos y responde preguntas sobre tus viajes. Ya puedes conectar la herramienta de IA que prefieras mediante el acceso MCP.']
        }
      ]
    },
    {
      title: 'Precio y facturación',
      items: [
        {
          q: '¿Cuánto cuesta?',
          a: ['Desde 190 EUR al mes para hasta 3 usuarios, con pago anual. Team, para hasta 5 usuarios, cuesta 250 EUR al mes. Todas las funciones están en todos los planes. El IVA no está incluido.']
        },
        {
          q: '¿Puedo pagar al mes?',
          a: ['Sí. Con pago mensual son 228 EUR para Core y 300 EUR para Team. El alta cuesta 390 EUR una sola vez con pago mensual, y es gratis con pago anual.']
        },
        {
          q: '¿Hay prueba gratuita?',
          a: ['No. Hay una demo con uno de tus propios viajes y un viaje de ejemplo en esta web que puedes abrir sin registrarte.']
        }
      ]
    },
    {
      title: 'Datos y seguridad',
      items: [
        {
          q: '¿Dónde están mis datos?',
          a: ['En tu propia base de datos, alojada en la Unión Europea. Es una base de datos separada para tu agencia, no una tabla compartida con un filtro.']
        },
        {
          q: '¿Puedo irme con mis datos?',
          a: ['Sí. Recibes tus datos en formatos estándar.']
        },
        {
          q: '¿Quién puede ver qué?',
          a: ['Todos los usuarios de tu agencia ven los viajes de la agencia. El acceso más fino por equipo y por persona está en camino.']
        }
      ]
    },
    {
      title: 'Cambio de herramienta',
      items: [
        {
          q: '¿Puedo importar mi catálogo actual?',
          a: ['Sí. Durante el alta importamos tus productos, precios y proveedores desde Excel o CSV. El alta y la importación son gratis con pago anual.']
        },
        {
          q: '¿Me va a descolocar la temporada?',
          a: ['No tiene por qué. Empieza con las solicitudes nuevas en Traviosoft y termina los viajes en curso como hasta ahora.']
        },
        {
          q: '¿Cumple la normativa de mi país?',
          a: ['La numeración de facturas por empresa y las facturas rectificativas funcionan en todas partes. Los regímenes fiscales y la facturación electrónica se activan por país en los ajustes. Dinos tu país y te decimos con claridad qué está cubierto.']
        }
      ]
    }
  ]
};

export const about: SiteContent['about'] = {
  metaTitle: 'Sobre Traviosoft: nació en una agencia de Barcelona',
  metaDescription:
    'Traviosoft nació en una agencia de viajes a medida de Barcelona que usaba Excel, Word y WhatsApp. Soporte por email de las personas que construyen el producto y datos alojados en la UE.',
  title: 'Hecho por una agencia, para agencias.',
  lead: 'Traviosoft nació dentro de una agencia de viajes a medida de Barcelona. Está hecho para las agencias que se le parecen.',
  blocks: [
    {
      title: 'De dónde viene',
      body: [
        'La agencia funcionaba con Excel para las tarifas, Word para los presupuestos y WhatsApp para todo lo demás. Funcionaba, hasta una semana de mucho trabajo en la que se olvidaba una señal o un hotel quedaba sin confirmar.',
        'Así que la herramienta se construyó allí, con viajes reales, por gente que tenía que enviar el presupuesto esa misma noche.'
      ]
    },
    {
      title: 'Por qué seguimos',
      body: [
        'Un viaje a medida se presupuesta servicio a servicio desde tarifas netas, con varios proveedores y documentos en el idioma del cliente. Queríamos un software pensado para esa forma de trabajar.',
        'Un solo lugar para todo el viaje, de la primera solicitud a la última factura, con el precio visible en la web.'
      ]
    },
    {
      title: 'Cómo trabajamos',
      body: [
        'El soporte es por email, en español, inglés y francés, y hablas con las personas que construyen el producto.',
        'Te decimos qué está en marcha y qué viene. Lo que aún no está disponible lleva una etiqueta en esta web.'
      ]
    },
    {
      title: 'Tus datos',
      body: [
        'Cada agencia tiene su propia base de datos aislada, alojada en la Unión Europea. Tus datos nunca se mezclan con los de otra agencia, y puedes irte con ellos.'
      ]
    },
    {
      title: 'En qué puedes confiar',
      body: [
        'Traviosoft lleva viajes reales cada día, y solo mostramos los logotipos y opiniones que podemos respaldar.',
        'Tienes un sistema de gestión completo y un equipo que contesta a su correo.'
      ]
    }
  ],
  facts: [
    { k: 'Origen', v: 'Una agencia a medida de Barcelona' },
    { k: 'Para', v: 'Agencias a medida y DMC' },
    { k: 'Soporte', v: 'Por email, en español, inglés y francés' },
    { k: 'Datos', v: 'Tu propia base de datos, alojada en la UE' }
  ]
};

export const resources: SiteContent['resources'] = {
  metaTitle: 'Recursos para agencias de viajes a medida | Traviosoft',
  metaDescription:
    'Comparativas, guías, un glosario y un viaje de ejemplo para agencias a medida y DMC que eligen software. En lenguaje claro y sin necesidad de registrarte.',
  title: 'Recursos',
  lead: 'Lo que nos habría gustado encontrar cuando buscamos software para una agencia como la nuestra.',
  groups: [
    { kind: 'best', title: 'Comparativa de los mejores programas', body: 'Las herramientas que usan las agencias a medida y las DMC, una junto a otra, y a quién le encaja cada una.' },
    { kind: 'compare', title: 'Páginas de comparación', body: 'Traviosoft al lado de otras herramientas, en lo que pagas y lo que recibes.' },
    { kind: 'guide', title: 'Guías', body: 'Notas prácticas para presupuestar, reservar y facturar un viaje a medida.' },
    { kind: 'glossary', title: 'Glosario', body: 'Los términos de agencia de viajes y de software, en una línea cada uno.' },
    { kind: 'example', title: 'Viaje de ejemplo', body: 'Un viaje de 8 días por Andalucía, tal como tu cliente vería el itinerario y el presupuesto.' }
  ],
  glossaryTitle: 'Glosario',
  glossaryMeta:
    'Definiciones claras de los términos que usan las agencias de viajes a medida y las DMC: tarifa neta, comisión, hoja de servicio, rooming list, señal y más.',
  glossaryLead: 'Las palabras que usas a diario y las que usa el software, en una línea cada una.'
};
