import type { AiText } from '../types';

/** El asistente de IA. Fuente: en/ai.ts, contrastada con fr/ai.ts. Palabras de la app: apps/web/messages/es.json. */
export const ai: AiText = {
  page: {
    slug: 'ai-assistant',
    metaTitle: 'Asistente de IA: trabaja en Traviosoft desde Claude, ChatGPT o Mistral | Traviosoft',
    metaDescription:
      'Conecta a Traviosoft el asistente de IA que ya usas. Pregunta qué tienes pendiente, pide un presupuesto desde tu catálogo, registra una reserva o un pago y aprueba cada cambio. Incluido en los dos planes.',
    name: 'Asistente de IA',
    menuLine: 'Trabaja en Traviosoft desde Claude o ChatGPT',
    step: '5 de 5',
    heroTitle: 'Trabaja en Traviosoft desde tu asistente de IA',
    heroLead:
      'Conecta Claude, ChatGPT o Mistral al Traviosoft de tu agencia. Trabaja con tus clientes, precios y viajes reales, con los permisos que le das.',
    heroVisual: 'assistant',
    chapters: [
      {
        id: 'approve',
        kicker: 'Aprobación',
        title: 'Tú apruebas cada cambio',
        lead: 'El asistente consulta por su cuenta y te pregunta antes de cambiar nada.',
        visual: 'confirm',
        features: [
          { title: 'Una pregunta antes de cada cambio', body: ['Antes de cada cambio, Claude, ChatGPT y Mistral te piden permiso en el chat. Nada cambia hasta que lo permites.'] },
          { title: 'Eliminaciones aprobadas en Traviosoft', body: ['Si permites eliminar, cada eliminación espera en Traviosoft hasta que la apruebas allí, y queda registrada a tu nombre.'] },
          { title: 'Cada cambio en el historial', body: ['Lo que hace el asistente aparece en el historial de actividad de Traviosoft, a nombre de la persona que lo conectó.'] }
        ]
      },
      {
        id: 'rights',
        kicker: 'Acceso',
        title: 'Los permisos de la persona',
        lead: 'El asistente puede hacer lo que la persona que lo conectó puede hacer en Traviosoft, y nada más.',
        visual: 'team',
        features: [
          { title: 'Quién puede conectar', body: ['El administrador elige quién puede conectar un asistente de IA y si las personas que lleguen después pueden hacerlo.'] },
          { title: 'Consultar o cambiar', body: ['El administrador decide si los asistentes pueden hacer cambios o solo consultar.'] },
          { title: 'Costes y márgenes', body: ['Los precios de compra y los márgenes solo llegan al asistente de las personas que los ven en Traviosoft.'] },
          { title: 'Desconecta cuando quieras', body: ['Desconecta desde la app de IA, o un administrador corta cualquier conexión desde Traviosoft, al momento.'] }
        ]
      },
      {
        id: 'connect',
        kicker: 'Conexión',
        title: 'Conectar tu asistente',
        lead: 'Añade Traviosoft como conector en tu app de IA, inicia sesión y elige lo que puede hacer.',
        visual: 'connections',
        features: [
          { title: 'Claude, ChatGPT y Mistral', body: ['Añade la dirección de Traviosoft de tu agencia como conector. Tu app de IA te lleva a Traviosoft para iniciar sesión.'] },
          { title: 'Solo lectura, o leer y hacer cambios', body: ['Al iniciar sesión, eliges lo que puede hacer tu asistente y si también puede eliminar.'] },
          { title: 'Incluido en los dos planes', body: ['Conectar tu asistente de IA forma parte de Classic y Premium, para cada persona que autorice el administrador.'] }
        ]
      }
    ],
    faq: [
      { q: '¿Qué apps de IA puedo usar?', a: ['Cualquier app de IA que pueda añadir un conector MCP, el estándar abierto con el que las apps de IA se conectan a otros programas. Claude, ChatGPT y Mistral te piden permiso en el chat antes de cada cambio, y Traviosoft lo hace en cuanto lo permites. Con otra app, Traviosoft no puede estar seguro de que te pregunte antes, así que sus cambios esperan tu aprobación en Traviosoft, en Revisión de cambios.'] },
      { q: '¿El asistente ve todos nuestros datos?', a: ['Ve exactamente lo que la persona que lo conectó puede ver en Traviosoft según su rol: los mismos clientes, viajes y equipos, y los precios de compra y los márgenes solo si su rol los muestra. Si su rol cambia, lo que ve el asistente cambia también.'] },
      { q: '¿Puede escribir a un proveedor?', a: ['Sí, y primero te pide permiso. Cuando lo permites, envía al proveedor una solicitud de reserva o le pide disponibilidad. Los presupuestos y las facturas llegan a los clientes desde Traviosoft.'] },
      { q: '¿Puede emitir facturas?', a: ['Puede consultar las facturas, seguir lo que está pagado y corregir un borrador. Pero una factura siempre la emite una persona, en Traviosoft: el asistente no puede emitir ni anular una factura, porque su número es un registro legal.'] },
      { q: '¿Hay también un asistente dentro de Traviosoft?', a: ['Sí, como opción en los dos planes, con límites de uso. Trabaja en la propia app, sin tener que conectar otra app de IA.'] }
    ]
  },
  sim: {
    note: 'Pruébalo con una agencia de ejemplo: elige un mensaje. Las respuestas son una simulación, sin IA detrás.',
    chatTitle: 'Tu asistente de IA', connected: 'Traviosoft conectado',
    greeting: '¿Qué puedo hacer hoy por tu agencia?',
    chatTab: 'Chat', changed: 'Hay cambios en Traviosoft',
    allow: 'Permitir', deny: 'Denegar', allowedTag: 'Permitido', deniedTag: 'Denegado',
    deniedReply: 'Entendido. No ha cambiado nada en Traviosoft.',
    restart: 'Empezar de nuevo', more: 'Otra cosa', working: 'Trabajando en Traviosoft', thinking: 'Pensando',
    nav: { dashboard: 'Panel', quotes: 'Presupuestos', bookings: 'Reservas', payments: 'Pagos', review: 'Revisión de cambios' },
    ui: {
      draft: 'Borrador', sent: 'Enviado', requested: 'Solicitado', confirmed: 'Confirmado', toBook: 'Por reservar', late: 'Vencido', paid: 'Pagado', due: 'Pendiente',
      total: 'Total', margin: 'Tu margen', schedule: 'Calendario de pagos', deposit: 'Anticipo', balance: 'Resto',
      send: 'Enviar', approve: 'Aprobar', reviewEmpty: 'Todos los cambios revisados', trashed: 'Aprobado. El presupuesto está en la papelera.', reference: 'Ref.',
      newRequests: 'Solicitudes nuevas', toFollow: 'Presupuestos por seguir', latePayments: 'Pagos vencidos', bookingsLeft: 'Reservas por cerrar'
    },
    names: {
      irisTrip: 'Andalucía, 8 días', bianchiTrip: 'Sevilla y Granada, 6 días', madridTrip: 'Madrid y Toledo, 4 días',
      lindTrip: 'Mallorca, 5 días', weberTrip: 'Lisboa, 4 días',
      olabarriPay: 'Resto, fin de semana en Córdoba', martinPay: 'Anticipo, Provenza, 7 días',
      hotelSeville: 'Hotel en Sevilla', guideCordoba: 'Guía en Córdoba', hotelGranada: 'Hotel en Granada'
    },
    steps: {
      today: {
        say: '¿Qué tengo pendiente hoy?',
        tools: ['Leyendo tu panel'],
        reply: 'Hoy tienes cuatro cosas pendientes:',
        rows: [
          { t: 'Una solicitud nueva por responder', s: 'Iris & Noah, Andalucía, 8 días desde el 3 de mayo' },
          { t: 'Un presupuesto por seguir', s: 'Famiglia Bianchi, enviado hace 9 días' },
          { t: 'Dos pagos vencidos', s: '{2387} en total' },
          { t: 'Dos reservas por cerrar', s: 'El viaje de la Famiglia Bianchi a Sevilla y Granada' }
        ],
        after: '¿Por dónde quieres empezar?'
      },
      late: {
        say: 'Enséñame los pagos vencidos',
        tools: ['Buscando los pagos vencidos'],
        reply: 'Hay dos pagos vencidos:',
        rows: [
          { t: 'Familia Olabarri, {1427}', s: 'Resto del fin de semana en Córdoba, vencido hace 5 días' },
          { t: 'Sophie Martin, {960}', s: 'Anticipo para la Provenza, vencido hace 3 días' }
        ],
        after: 'Si alguno ha pagado, dímelo y lo registro.'
      },
      payOlabarri: {
        say: 'Olabarri ha pagado por transferencia',
        reply: 'Lo registro en el fin de semana en Córdoba.',
        ask: { action: 'Registrar un pago', rows: [{ t: 'Cliente', s: 'Familia Olabarri' }, { t: 'Importe', s: '{1427}' }, { t: 'Forma de pago', s: 'Transferencia, hoy' }] },
        done: 'Registrado. La Familia Olabarri ha pagado todo, y queda un pago vencido: el anticipo de Sophie Martin.'
      },
      quote: { say: 'Crea un presupuesto', reply: 'Claro. ¿Para quién es?' },
      quoteIris: {
        say: 'Para la solicitud de Iris & Noah',
        tools: ['Leyendo la solicitud de Iris & Noah', 'Buscando en tu catálogo', 'Comprobando los precios del 3 al 10 de mayo'],
        reply: 'Iris & Noah piden 8 días en Andalucía desde el 3 de mayo, para dos. Esto es lo que pondría, de tu catálogo, con los precios de esas fechas:',
        rows: [
          { t: 'Traslado desde el aeropuerto, Sevilla', s: '3 de mayo' },
          { t: 'Hotel en el casco antiguo de Sevilla, 4 noches', s: 'Del 3 al 7 de mayo' },
          { t: 'Guía privado en Córdoba, media jornada', s: '5 de mayo' },
          { t: 'Coche de alquiler, 4 días', s: 'Del 7 al 10 de mayo' },
          { t: 'Hotel en Granada, 3 noches', s: 'Del 7 al 10 de mayo' },
          { t: 'Entradas a la Alhambra con guía', s: '8 de mayo' }
        ],
        after: 'Total **{2660}** para dos, con tu margen de {450}.',
        ask: { action: 'Crear un presupuesto', rows: [{ t: 'Cliente', s: 'Iris & Noah' }, { t: 'Viaje', s: 'Andalucía, del 3 al 10 de mayo' }, { t: 'Total', s: '{2660}' }] },
        done: 'El presupuesto está en Traviosoft como borrador, y te lo he abierto. ¿Quieres fijar las condiciones de pago, o enviarlo?'
      },
      madridBianchi: {
        say: 'Para la Famiglia Bianchi, Madrid',
        tools: ['Leyendo la solicitud de la Famiglia Bianchi para Madrid', 'Buscando en tu catálogo', 'Comprobando los precios del 12 al 15 de junio'],
        reply: 'La Famiglia Bianchi pide 4 días en Madrid desde el 12 de junio, para cuatro. Esto es lo que pondría, de tu catálogo, con los precios de esas fechas:',
        rows: [
          { t: 'Traslados del aeropuerto, ida y vuelta', s: '12 y 15 de junio' },
          { t: 'Hotel en el centro de Madrid, 3 noches, 2 habitaciones', s: 'Del 12 al 15 de junio' },
          { t: 'Museo del Prado con guía', s: '13 de junio' },
          { t: 'Excursión de un día a Toledo con guía', s: '14 de junio' }
        ],
        after: 'Total **{2100}** para cuatro, con tu margen de {380}.',
        ask: { action: 'Crear un presupuesto', rows: [{ t: 'Cliente', s: 'Famiglia Bianchi' }, { t: 'Viaje', s: 'Madrid y Toledo, del 12 al 15 de junio' }, { t: 'Total', s: '{2100}' }] },
        done: 'El presupuesto está en Traviosoft como borrador, y te lo he abierto. ¿Quieres fijar las condiciones de pago, o enviarlo?'
      },
      terms: { say: 'Fija las condiciones de pago', reply: '¿Qué condiciones quieres?' },
      terms30: {
        say: '30 % ahora, el resto 30 días antes',
        ask: { action: 'Fijar el calendario de pagos', rows: [{ t: 'Anticipo, 30 %', s: '{dep}, hoy' }, { t: 'Resto', s: '{bal}, el {due}' }] },
        done: 'Hecho, el calendario de pagos está en el presupuesto. ¿Quieres enviarlo ya?'
      },
      terms50: {
        say: 'Mitad ahora, mitad 30 días antes',
        ask: { action: 'Fijar el calendario de pagos', rows: [{ t: 'Anticipo, 50 %', s: '{dep}, hoy' }, { t: 'Resto', s: '{bal}, el {due}' }] },
        done: 'Hecho, el calendario de pagos está en el presupuesto. ¿Quieres enviarlo ya?'
      },
      send: {
        say: 'Envíalo',
        reply: 'Los presupuestos llegan a tus clientes desde Traviosoft, para que veas exactamente lo que reciben. Te lo he abierto: pulsa Enviar cuando te parezca bien.'
      },
      bookings: {
        say: 'Revisa las últimas reservas',
        tools: ['Buscando las reservas en curso'],
        reply: 'Así va el viaje de la Famiglia Bianchi a Sevilla y Granada, del 10 al 15 de mayo:',
        rows: [
          { t: 'Hotel en Sevilla', s: 'Solicitado hace 4 días, aún sin respuesta' },
          { t: 'Guía en Córdoba', s: 'Confirmado' },
          { t: 'Hotel en Granada', s: 'Aún sin reservar' }
        ],
        after: '¿Hay noticias de Sevilla, o pregunto al hotel de Granada?'
      },
      confirmSeville: {
        say: 'Sevilla confirmado, ref. 48213',
        ask: { action: 'Actualizar una reserva', rows: [{ t: 'Reserva', s: 'Hotel en Sevilla, del 10 al 13 de mayo' }, { t: 'Estado', s: 'Confirmado' }, { t: 'Referencia', s: '48213' }] },
        done: 'Hecho. El hotel en Sevilla está confirmado, con la referencia 48213.'
      },
      requestGranada: {
        say: 'Reserva el hotel de Granada',
        tools: ['Buscando el hotel en tus proveedores'],
        reply: 'Envío la solicitud de reserva al hotel por email, desde Traviosoft.',
        ask: { action: 'Enviar una solicitud de reserva', rows: [{ t: 'Para', s: 'Hotel en Granada' }, { t: 'Fechas', s: 'Del 13 al 15 de mayo, 2 noches' }, { t: 'Habitaciones', s: '2 dobles, Famiglia Bianchi' }] },
        done: 'Enviada. Dime cuando conteste el hotel y registro su confirmación.'
      },
      remove: { say: 'Elimina un presupuesto', tools: ['Buscando tus presupuestos en borrador'], reply: '¿Cuál? Estos dos siguen en borrador.' },
      delLind: {
        say: 'Anna Lind, Mallorca',
        ask: { action: 'Eliminar un presupuesto', rows: [{ t: 'Presupuesto', s: 'Anna Lind, Mallorca, 5 días' }, { t: 'Total', s: '{1980}' }, { t: 'Estado', s: 'Borrador' }] },
        done: 'La eliminación espera ahora tu aprobación en Traviosoft, en Revisión de cambios. No se elimina nada hasta que la apruebes allí.'
      },
      delWeber: {
        say: 'Familie Weber, Lisboa',
        ask: { action: 'Eliminar un presupuesto', rows: [{ t: 'Presupuesto', s: 'Familie Weber, Lisboa, 4 días' }, { t: 'Total', s: '{1450}' }, { t: 'Estado', s: 'Borrador' }] },
        done: 'La eliminación espera ahora tu aprobación en Traviosoft, en Revisión de cambios. No se elimina nada hasta que la apruebes allí.'
      }
    }
  }
};
