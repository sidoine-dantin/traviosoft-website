import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const pricing: SiteContent['pricing'] = {
  metaTitle: `Precios: Classic desde ${PRICES.classic.yearly} EUR al mes, Premium desde ${PRICES.premium.yearly} EUR | Traviosoft`,
  metaDescription:
    `Dos planes para agencias de viajes a medida y DMC. Classic gestiona toda la agencia desde ${PRICES.classic.yearly} EUR al mes; Premium añade equipos, monedas, compras, varias marcas y el asistente. ${PRICES.usersIncluded} usuarios incluidos, alta gratis con pago anual.`,
  title: 'Dos planes, precios claros.',
  lead: 'Classic tiene todo lo necesario para gestionar tu agencia, de la primera solicitud a la última factura. Premium añade lo que usan a diario los equipos más grandes y los DMC internacionales.',
  yearly: 'Anual',
  monthly: 'Mensual',
  yearlyNote: 'Precios por mes, sin IVA. Con pago anual el mes sale más barato.',
  plans: [
    {
      id: 'classic',
      name: 'Classic',
      users: `${PRICES.usersIncluded} usuarios incluidos`,
      yearly: String(PRICES.classic.yearly),
      monthly: String(PRICES.classic.monthly),
      priceNote: `EUR al mes, sin IVA. Cada usuario adicional: ${PRICES.extraUser.yearly} EUR al mes con pago anual, ${PRICES.extraUser.monthly} EUR con pago mensual.`,
      lines: [
        { text: 'Solicitudes, catálogo con precios por temporada, presupuestos con tu margen y tu comisión' },
        { text: 'Agencias colaboradoras y liquidaciones de comisión' },
        { text: 'Página de propuesta e itinerario día a día, con tu marca' },
        { text: 'Reservas, emails de proveedores archivados en el viaje, bonos de servicio' },
        { text: 'Grupos: lista de viajeros, enlace a formulario, rooming lists' },
        { text: 'Calendario de cobros, enlaces de pago y recordatorios' },
        { text: 'Facturas con las normas de tu país, rectificativas, panel' },
        { text: 'Documentos en el idioma de tu cliente' }
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      users: `${PRICES.usersIncluded} usuarios incluidos`,
      yearly: String(PRICES.premium.yearly),
      monthly: String(PRICES.premium.monthly),
      priceNote: `EUR al mes, sin IVA. Cada usuario adicional: ${PRICES.extraUser.yearly} EUR al mes con pago anual, ${PRICES.extraUser.monthly} EUR con pago mensual.`,
      hot: true,
      lines: [
        { text: 'Todo lo de Classic, y además:' },
        { text: 'Equipos con sus propios clientes y viajes, roles por persona' },
        { text: 'Cualquier moneda para clientes, presupuestos y proveedores, con tipos diarios' },
        { text: 'Peticiones de disponibilidad y órdenes de compra a proveedores' },
        { text: 'Varias marcas y empresas en una cuenta' },
        { text: 'Exportación contable para tu programa de contabilidad' },
        { text: 'El asistente dentro de Traviosoft y tus propias herramientas de IA conectadas' },
        { text: 'Conexiones con tu web y tus otras herramientas' }
      ]
    }
  ],
  includedTitle: 'Los dos planes incluyen',
  included: [
    `${PRICES.usersIncluded} usuarios, y más cuando crezca tu equipo`,
    `Alta e importación de datos: gratis con pago anual, ${PRICES.setupMonthly} EUR una sola vez con pago mensual`,
    'Tus tarifas, clientes y proveedores pasan contigo',
    'Soporte por email en español, inglés y francés, de las personas que construyen el producto',
    'Un espacio privado para tu agencia, alojado en la Unión Europea',
    'Tus datos en formatos estándar cuando los pidas',
    'Cada función nueva de tu plan en cuanto sale'
  ],
  faq: [
    {
      q: '¿Qué plan necesito?',
      a: ['Classic gestiona una agencia entera: solicitudes, presupuestos, agencias colaboradoras, reservas, grupos, cobros y facturas. Elige Premium cuando una de sus funciones te importe, por ejemplo equipos con sus propias carteras, vender en dólares o libras, u órdenes de compra a proveedores.']
    },
    {
      q: '¿Cómo se paga?',
      a: ['Al año o al mes, como prefieras. El pago anual sale más barato por mes e incluye el alta. El mensual se puede dejar al final de cualquier mes.']
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
      a: ['Sí. Recibes tus datos en formatos estándar. Son tus datos.']
    },
    {
      q: '¿Qué incluye el alta?',
      a: [`Importamos tu catálogo, clientes, proveedores y viajes abiertos desde tus hojas de cálculo, y configuramos tu marca y tus reglas de precio. Es gratis con pago anual y cuesta ${PRICES.setupMonthly} EUR una sola vez con pago mensual.`]
    }
  ]
};

export const example: SiteContent['example'] = {
  metaTitle: 'Viajes de ejemplo: una pareja, un grupo y un safari | Traviosoft',
  metaDescription:
    'Abre tres viajes de ejemplo hechos con Traviosoft, una pareja en Andalucía, un grupo de incentivo en Oporto y un safari en Kenia y Tanzania: el itinerario día a día y el presupuesto tal como los ve el cliente. Datos inventados, sin registrarte.',
  title: 'Lo que recibe tu cliente.',
  lead: 'Tres viajes de muestra hechos con Traviosoft. Abre el itinerario y el presupuesto tal como los ve tu cliente o tu agencia colaboradora.',
  tabs: { itinerary: 'Itinerario', quote: 'Presupuesto' },
  pick: 'Elige un viaje',
  trips: [
  {
    id: 'andalucia',
    label: 'Andalucía, 8 días',
    kind: 'Una pareja, venta directa',
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
  {
    id: 'group',
    label: 'Oporto y el Duero, 4 días',
    kind: 'Un grupo de incentivo de 24, vendido a través de una agencia colaboradora',
    name: 'Oporto y el Duero, 4 días',
    dates: 'Del 6 al 9 de mayo de 2027',
    travellers: 'Cliente: tu agencia colaboradora de Múnich, para un grupo de empresa de 24',
    agency: 'Tu agencia',
    days: [
      {
        day: 'Día 1',
        title: 'Llegada a Oporto',
        body: 'Autocar privado del aeropuerto al hotel junto al río. Cena de bienvenida en la Ribeira.',
        items: ['Traslado en autocar, encuentro en llegadas', 'Hotel en Oporto, 3 noches', 'Cena de bienvenida para 24']
      },
      {
        day: 'Día 2',
        title: 'Oporto, a elegir',
        body: 'Mañana de golf para diez, o un paseo por el casco antiguo con un guía local. Por la tarde, una bodega de oporto.',
        items: ['Mañana de golf, 10 invitados', 'Paseo por el casco antiguo, 14 invitados', 'Visita y cata en una bodega de oporto para 24']
      },
      {
        day: 'Día 3',
        title: 'El valle del Duero',
        body: 'Autocar valle arriba, crucero por el río entre las terrazas, almuerzo en una finca vinícola. Cena de gala en una quinta.',
        items: ['Autocar privado, día completo', 'Crucero por el río', 'Almuerzo en una finca vinícola', 'Cena de gala en una quinta']
      },
      {
        day: 'Día 4',
        title: 'Salida',
        body: 'Mañana libre. Autocar al aeropuerto en dos grupos, según los vuelos.',
        items: ['Dos traslados al aeropuerto']
      }
    ],
    quoteLines: [
      { name: 'Oporto, 3 noches', detail: 'Hotel junto al río, 12 habitaciones dobles o twin, desayuno', price: '9.360 EUR' },
      { name: 'Cena de bienvenida', detail: 'Restaurante en la Ribeira, 24 invitados, bebidas incluidas', price: '2.040 EUR' },
      { name: 'Día en el Duero', detail: 'Autocar, crucero y almuerzo en finca vinícola, 24 invitados', price: '3.960 EUR' },
      { name: 'Visita a bodega de oporto', detail: 'Visita y cata, 24 invitados', price: '840 EUR' },
      { name: 'Mañana de golf', detail: '10 invitados, green fees y palos', price: '1.200 EUR' },
      { name: 'Cena de gala', detail: 'Quinta privada, 24 invitados, música', price: '3.360 EUR' },
      { name: 'Traslados en autocar', detail: 'Aeropuerto, Oporto y Duero, 4 días', price: '1.850 EUR' },
      { name: 'Guía local y anfitrión en destino', detail: '4 días', price: '1.600 EUR' }
    ],
    included: [
      '3 noches en Oporto con desayuno',
      'Todas las comidas y visitas indicadas, con bebidas en las cenas',
      'Todos los traslados en autocar privado',
      'Un anfitrión en destino durante toda la estancia',
      'La comisión de tu agencia colaboradora'
    ],
    notIncluded: ['Vuelos', 'Almuerzos de los días 1, 2 y 4', 'Seguro de viaje', 'Tasa turística de Oporto'],
    total: '24.210 EUR',
    perPerson: '1.008,75 EUR por invitado',
    deposit: '40 % para confirmar, 40 % 60 días antes de la llegada, el resto 15 días antes',
    validUntil: 'Válido hasta el 15 de diciembre de 2026',
    rooming: {
      title: 'Rooming list · Hotel en Oporto, primeras 4 de 12 habitaciones',
      head: ['Habitación', 'Tipo', 'Huéspedes', 'Noches'],
      rows: [
        ['Habitación 1', 'Doble', 'Anna Weber, Jonas Weber', 'Del 6 al 9 de mayo'],
        ['Habitación 2', 'Twin', 'Lena Fischer, Marie Koch', 'Del 6 al 9 de mayo'],
        ['Habitación 3', 'Doble', 'Paul Schmidt, Sofia Schmidt', 'Del 6 al 9 de mayo'],
        ['Habitación 4', 'Twin', 'Thomas Becker, David Wolf', 'Del 6 al 9 de mayo']
      ]
    }
  },
  {
    id: 'safari',
    label: 'Kenia y Tanzania, 9 días',
    kind: 'Un safari para dos, en dólares estadounidenses',
    name: 'Kenia y Tanzania, 9 días',
    dates: 'Del 14 al 22 de agosto de 2027',
    travellers: 'Cliente: Emma & James, 2 adultos',
    agency: 'Tu agencia',
    days: [
      {
        day: 'Día 1',
        title: 'Nairobi',
        body: 'Recogida en el aeropuerto y traslado a un hotel con jardín en Karen. Cena en el hotel.',
        items: ['Traslado privado', 'Hotel con jardín en Karen, 1 noche']
      },
      {
        day: 'Días 2 a 4',
        title: 'Masái Mara',
        body: 'Avioneta hasta el Mara. Tres días de safaris en plena gran migración.',
        items: ['Vuelo de Nairobi al Mara', 'Campamento de tiendas, pensión completa, 3 noches', 'Safaris de mañana y de tarde']
      },
      {
        day: 'Días 5 a 7',
        title: 'Serengeti',
        body: 'Vuelo al otro lado de la frontera, al norte del Serengeti. Vuelo en globo al amanecer el día 6.',
        items: ['Vuelo al Serengeti', 'Campamento móvil, pensión completa, 3 noches', 'Vuelo en globo con desayuno']
      },
      {
        day: 'Día 8',
        title: 'Ngorongoro',
        body: 'Ruta con tu guía privado hasta el borde del cráter. Por la tarde, el fondo del cráter.',
        items: ['Guía y vehículo privados', 'Lodge en el borde del cráter, 1 noche']
      },
      {
        day: 'Día 9',
        title: 'Salida desde Arusha',
        body: 'Traslado al aeropuerto de Arusha para tu vuelo de vuelta.',
        items: ['Traslado privado al aeropuerto']
      }
    ],
    quoteLines: [
      { name: 'Nairobi, 1 noche', detail: 'Hotel con jardín en Karen, desayuno', price: '640 USD' },
      { name: 'Masái Mara, 3 noches', detail: 'Campamento de tiendas, pensión completa, safaris', price: '5.880 USD' },
      { name: 'Serengeti, 3 noches', detail: 'Campamento móvil, pensión completa, safaris', price: '6.300 USD' },
      { name: 'Ngorongoro, 1 noche', detail: 'Lodge en el borde del cráter, pensión completa', price: '1.440 USD' },
      { name: 'Vuelos en avioneta', detail: 'Nairobi, Masái Mara, Serengeti', price: '2.900 USD' },
      { name: 'Entradas a parques y tasas de conservación', detail: 'Kenia y Tanzania', price: '2.640 USD' },
      { name: 'Guía y vehículo privados', detail: 'Tanzania, 4 días', price: '1.600 USD' },
      { name: 'Globo', detail: 'Serengeti, 2 personas, con desayuno', price: '1.198 USD' }
    ],
    included: [
      '8 noches, pensión completa durante el safari',
      'Safaris con guías expertos',
      'Vuelos dentro de Kenia y Tanzania',
      'Entradas a parques y tasas de conservación',
      'Todos los traslados'
    ],
    notIncluded: ['Vuelos internacionales', 'Visados', 'Seguro de viaje', 'Propinas para guías y personal de los campamentos'],
    total: '22.598 USD',
    perPerson: '11.299 USD por persona',
    deposit: '30 % para confirmar, el resto 60 días antes de la llegada',
    validUntil: 'Válido hasta el 31 de enero de 2027'
  }
  ],
  note: 'Este es un ejemplo hecho con Traviosoft con datos inventados.'
};

export const demo: SiteContent['demo'] = {
  metaTitle: 'Demo: 30 minutos, con un viaje como el tuyo | Traviosoft',
  metaDescription:
    'Una llamada de 30 minutos con un viaje preparado parecido a los que vendes, de la solicitud a la factura. Después recibes por escrito el precio para tu equipo.',
  title: '30 minutos, con un viaje como el tuyo.',
  lead: 'Pasamos por la aplicación un viaje preparado, parecido a los que vendes, desde el primer mensaje hasta la factura final.',
  agendaTitle: 'Cómo van los 30 minutos',
  agenda: [
    { mins: '5', title: 'Tu agencia', body: 'Cuántos sois, qué vendéis y qué usáis hoy. Para que el resto encaje con tu caso.' },
    { mins: '15', title: 'Un viaje como el tuyo, de la solicitud a la factura', body: 'Un viaje en pareja, un grupo de incentivo o un safari, el que más se parezca a tu trabajo: la solicitud, el presupuesto con tu margen, la reserva, el itinerario, el cobro y la factura.' },
    { mins: '10', title: 'Precio, cambio de herramienta y preguntas', body: 'Qué plan encaja con tu equipo, cómo pasan tus hojas de cálculo y lo que quieras preguntar.' }
  ],
  bringTitle: 'A quién invitar',
  bring: [
    'A quien de tu equipo haga presupuestos o reservas',
    'A quien lleve los cobros y las facturas',
    'Tus preguntas: la llamada es tuya'
  ],
  afterTitle: 'Qué pasa después',
  after: [
    'Un resumen por escrito por email: lo que vimos y lo que acordamos',
    'El precio para tu equipo, por escrito',
    'Una llamada de seguimiento solo cuando la pidas'
  ],
  bookTitle: 'Pide hora',
  bookBody: 'De momento, la cita se pide por email. Cuéntanos tu agencia, el tamaño de tu equipo y unos días que te vengan bien. Te respondemos con una hora.',
  emailLabel: 'Escribe a',
  email: 'hola@traviosoft.com',
  faq: [
    {
      q: '¿Hay prueba gratuita?',
      a: ['En su lugar hay una demo, y tres viajes de ejemplo en esta web. En 30 minutos ves un viaje completo de principio a fin, algo que una cuenta vacía no puede enseñar.']
    },
    {
      q: '¿Quién hace la demo?',
      a: ['Alguien del equipo de Traviosoft, en español, inglés o francés. Es una llamada, no un vídeo grabado.']
    },
    {
      q: '¿Tengo que preparar algo?',
      a: ['Nada. Nosotros llevamos el viaje; tú traes tus preguntas.']
    },
    {
      q: '¿Me pediréis mis datos?',
      a: ['La demo se hace con un viaje de muestra con datos inventados. Tus tarifas y clientes pasan solo cuando ya lo hayas decidido, durante el alta.']
    }
  ]
};

export const switching: SiteContent['switching'] = {
  metaTitle: 'Pasar de Excel a Traviosoft | Traviosoft',
  metaDescription:
    'Cómo pasar de Excel, Word y WhatsApp en plena temporada: qué importamos, qué revisas tú y cómo seguir con los viajes en curso mientras empiezas los nuevos.',
  title: 'De Excel a Traviosoft, con la temporada en marcha.',
  lead: 'Se avanza por pasos, y los viajes que tienes en marcha siguen su curso.',
  timelineTitle: 'Cómo es el proceso',
  timeline: [
    {
      when: 'Día 1',
      title: 'Nos envías tus archivos',
      body: 'Tus tarifas, tu lista de clientes, tus proveedores, tus viajes abiertos. Vale cualquier hoja de cálculo, y también la exportación de otra herramienta, ordenada o no.'
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
  importHead: ['Qué', 'Desde', 'Cómo'],
  importRows: [
    { what: 'Catálogo, productos y tarifas', from: 'Hojas de cálculo', how: 'Lo importamos nosotros. Tú revisas una muestra.' },
    { what: 'Clientes', from: 'Hojas de cálculo, los contactos de tu correo', how: 'Lo importamos nosotros. Los duplicados se fusionan contigo.' },
    { what: 'Proveedores y contactos', from: 'Hojas de cálculo', how: 'Lo importamos nosotros. Tú revisas los contactos que más usas.' },
    { what: 'Viajes abiertos', from: 'Excel, Word, la exportación de otra herramienta', how: 'Importamos los que elijas. Los revisas uno por uno.' }
  ],
  seasonTitle: '¿Me va a descolocar la temporada?',
  seasonBody: [
    'Hecho en este orden, convive con tu temporada. Empieza por las solicitudes nuevas: entran en Traviosoft desde el día en que arrancas. Los viajes que ya estaban en curso los sigues cerrando como siempre, con el Excel y el Word que conoces.',
    'Los viajes abiertos solo se pasan si tú quieres, y normalmente los que quedan lejos. Un viaje que sale la semana que viene se queda donde está.',
    'Si estás en plena temporada alta, dínoslo. Importamos primero y arrancamos en tu próxima semana tranquila.'
  ],
  faq: [
    {
      q: '¿Podéis importar desde mi herramienta actual?',
      a: ['Si exporta a una hoja de cálculo, sí. Envíanos una exportación de muestra y te decimos exactamente qué pasa.']
    },
    {
      q: '¿Cuánto cuesta?',
      a: [`El alta y la importación de datos son gratis con pago anual. Con pago mensual, ${PRICES.setupMonthly} EUR una sola vez.`]
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
          a: [`Sí. Con pago mensual son ${PRICES.classic.monthly} EUR para Classic y ${PRICES.premium.monthly} EUR para Premium. El alta cuesta ${PRICES.setupMonthly} EUR una sola vez con pago mensual, y es gratis con pago anual.`]
        },
        {
          q: '¿Hay prueba gratuita?',
          a: ['Hay una demo de 30 minutos con un viaje como los que vendes, y tres viajes de ejemplo en esta web que puedes abrir sin registrarte.']
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
  lead: 'Traviosoft nació dentro de una agencia de viajes a medida de Barcelona, con viajes reales, y creció hasta ser un sistema de gestión completo para agencias a medida y DMC.',
  blocks: [
    {
      title: 'De dónde viene',
      body: [
        'La agencia funcionaba con Excel para las tarifas, Word para los presupuestos y WhatsApp para todo lo demás. En una semana de mucho trabajo, cada señal y cada confirmación de hotel dependían de que alguien se acordara.',
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
        'Cada función de esta web indica a qué plan pertenece, así sabes exactamente qué tienes.'
      ]
    },
    {
      title: 'Tus datos',
      body: [
        'Cada agencia tiene su propio espacio separado, alojado en la Unión Europea y aparte de todas las demás agencias. Tus datos son tuyos y puedes llevártelos.'
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
    { k: 'Datos', v: 'Un espacio privado por agencia, alojado en la UE' }
  ]
};

export const resources: SiteContent['resources'] = {
  metaTitle: 'Recursos para agencias de viajes a medida | Traviosoft',
  metaDescription:
    'Comparativas, guías, un glosario y viajes de ejemplo para agencias a medida y DMC que eligen software. En lenguaje claro y sin necesidad de registrarte.',
  title: 'Recursos',
  lead: 'Lo que nos habría gustado encontrar cuando buscamos software para una agencia como la nuestra.',
  groups: [
    { kind: 'best', title: 'Comparativa de los mejores programas', body: 'Las herramientas que usan las agencias a medida y las DMC, una junto a otra, y a quién le encaja cada una.' },
    { kind: 'compare', title: 'Páginas de comparación', body: 'Traviosoft al lado de otras herramientas, en lo que pagas y lo que recibes.' },
    { kind: 'guide', title: 'Guías', body: 'Notas prácticas para presupuestar, reservar y facturar un viaje a medida.' },
    { kind: 'glossary', title: 'Glosario', body: 'Los términos de agencia de viajes y de software, en una línea cada uno.' },
    { kind: 'example', title: 'Viajes de ejemplo', body: 'Una pareja en Andalucía, un grupo de incentivo en Oporto y un safari en Kenia y Tanzania, tal como los ve tu cliente.' }
  ],
  glossaryTitle: 'Glosario',
  glossaryMeta:
    'Definiciones claras de los términos que usan las agencias de viajes a medida y las DMC: tarifa neta, comisión, hoja de servicio, rooming list, señal y más.',
  glossaryLead: 'Las palabras que usas a diario y las que usa el software, en una línea cada una.'
};
