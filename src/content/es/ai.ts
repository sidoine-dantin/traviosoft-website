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
      'Conecta Claude, ChatGPT o Mistral al Traviosoft de tu agencia. Escribe lo que necesitas en una frase y trabaja con tus clientes, precios y viajes reales, con los permisos que le das.',
    heroVisual: 'assistant',
    chapters: [
      {
        id: 'ask',
        kicker: 'Preguntar',
        title: 'Pregunta qué tienes pendiente',
        lead: 'Tu asistente mira tu panel de Traviosoft y te dice lo que te espera hoy.',
        visual: 'dashboard',
        features: [
          { title: 'Tu día en una pregunta', body: ['Pregunta «¿Qué tengo pendiente hoy?» y recibe las solicitudes nuevas por responder, los presupuestos por seguir y los pagos vencidos, cada uno con un enlace que lo abre en Traviosoft.'] },
          { title: 'Tus viajes y tu dinero', body: ['¿Qué reservas siguen esperando al proveedor? ¿Cuánto te deben los clientes? Las respuestas salen de tus presupuestos, reservas y pagos.'] },
          { title: 'Encuéntralo todo', body: ['Busca un cliente, un presupuesto, un proveedor o un viaje por nombre, referencia, email o teléfono.'] }
        ]
      },
      {
        id: 'work',
        kicker: 'Hacer',
        title: 'Pide que se haga el trabajo',
        lead: 'Escribe lo que necesitas en una frase. El asistente lo hace en Traviosoft, como lo harías tú en la app.',
        visual: 'quote',
        features: [
          { title: 'Presupuestos desde tu catálogo', body: ['Pide un presupuesto para el viaje de un cliente. Los servicios salen de tu catálogo, con los precios de las fechas del viaje y tu margen, como si hubieras hecho tú el presupuesto.'] },
          { title: 'Reservas', body: ['Registra la confirmación de un proveedor y su referencia, marca una tarea de reserva o pide disponibilidad a un proveedor.'] },
          { title: 'Clientes y pagos', body: ['Añade un cliente nuevo, fija las fechas de pago de un presupuesto o registra un pago recibido.'] }
        ]
      },
      {
        id: 'approve',
        kicker: 'Aprobación',
        title: 'Tú apruebas cada cambio',
        lead: 'El asistente consulta por su cuenta y te pregunta antes de cambiar nada.',
        visual: 'confirm',
        features: [
          { title: 'Una pregunta antes de cada cambio', body: ['Claude, ChatGPT y Mistral te preguntan en el chat antes de cada cambio. El cambio se hace en cuanto lo permites.'] },
          { title: 'Eliminaciones aprobadas en Traviosoft', body: ['Si permites eliminar, cada eliminación espera en Traviosoft hasta que la apruebas allí, y queda registrada a tu nombre.'] },
          { title: 'Otras apps de IA', body: ['Los cambios de cualquier otra app de IA esperan tu aprobación en Traviosoft.'] },
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
      { q: '¿Qué apps de IA puedo usar?', a: ['Claude, ChatGPT y Mistral, en una versión de la app que permita añadir tus propios conectores. Otras apps de IA que pueden añadir conectores también funcionan, y sus cambios esperan tu aprobación en Traviosoft.'] },
      { q: '¿El asistente ve todos nuestros datos?', a: ['Ve lo que ve en Traviosoft la persona que lo conectó.'] },
      { q: '¿Puede escribir a un proveedor?', a: ['Sí. Puede enviar una solicitud de reserva o pedir disponibilidad a un proveedor, cuando lo permites. Los presupuestos y las facturas llegan a los clientes desde Traviosoft.'] },
      { q: '¿Puede emitir facturas?', a: ['Las facturas se emiten en Traviosoft, por una persona. El asistente puede consultarlas, seguir lo que está pagado y corregir un borrador.'] },
      { q: '¿Hay también un asistente dentro de Traviosoft?', a: ['Sí, como opción en los dos planes, con límites de uso. Trabaja en la propia app y te pide tu visto bueno antes de cada cambio.'] }
    ]
  },
  home: {
    title: 'Trabaja en Traviosoft desde tu asistente de IA',
    body: 'Conecta Claude, ChatGPT o Mistral. Pregunta qué tienes pendiente hoy, pide un presupuesto desde tu catálogo o registra la confirmación de un proveedor. Cada cambio se hace en cuanto lo permites.',
    link: 'Ver el asistente de IA'
  },
  hero: {
    ask: '¿Cuánto nos deben los clientes?',
    answer: '{owed} en presupuestos aceptados, y {overdue} ya han vencido.'
  },
  sim: {
    title: 'Pruébalo con una agencia de ejemplo',
    lead: 'Envía uno de los mensajes de abajo. Las respuestas son una simulación con datos de ejemplo, y el lado de Traviosoft muestra lo que cambia.',
    chatTitle: 'Tu asistente de IA', chatSub: 'Conectado a Traviosoft',
    appTitle: 'Traviosoft', appSub: 'Tu agencia',
    pick: 'Envía un mensaje', restart: 'Empezar de nuevo', allow: 'Permitir', deny: 'Denegar',
    allowedTag: 'Permitido', deniedTag: 'Denegado',
    denied: 'Entendido. Traviosoft se queda como está.', thinking: 'Trabajando en Traviosoft',
    quotes: 'Presupuestos', bookings: 'Reservas · Famiglia Bianchi', review: 'Revisión de cambios', reviewEmpty: 'Todos los cambios revisados', approve: 'Aprobar',
    draft: 'Borrador', sent: 'Enviado', requested: 'Solicitado', confirmed: 'Confirmado',
    bianchiTrip: 'Sevilla y Granada, 6 días', olabarriTrip: 'Un fin de semana en Córdoba', irisTrip: 'Andalucía, 8 días',
    hotelSeville: 'Hotel en Sevilla', guideCordoba: 'Guía en Córdoba', hotelGranada: 'Hotel en Granada',
    today: {
      prompt: '¿Qué tengo pendiente hoy?',
      answer: 'Tienes tres cosas pendientes:',
      rows: [
        { t: 'Una solicitud nueva por responder', s: 'Iris & Noah, Andalucía, 8 días' },
        { t: 'Un presupuesto por seguir', s: 'Famiglia Bianchi, enviado hace 9 días' },
        { t: 'Una reserva que espera al proveedor', s: 'Hotel en Sevilla, Famiglia Bianchi' }
      ]
    },
    quote: {
      prompt: 'Prepara un presupuesto para Iris & Noah, Andalucía, 8 días, desde el 3 de mayo',
      askTitle: '¿Crear un presupuesto en Traviosoft?',
      askSub: 'Iris & Noah · Andalucía, 8 días · 6 servicios de tu catálogo',
      done: 'El presupuesto está en Traviosoft como borrador: {total}, con tu margen de {margin}.'
    },
    booking: {
      prompt: 'El hotel de Sevilla ha confirmado la reserva Bianchi, referencia 48213',
      askTitle: '¿Actualizar una reserva en Traviosoft?',
      askSub: 'Hotel en Sevilla: confirmado, referencia 48213',
      done: 'Hecho. El hotel en Sevilla está confirmado, con la referencia 48213.'
    },
    remove: {
      prompt: 'Elimina el presupuesto Olabarri, han elegido otra fecha',
      askTitle: '¿Eliminar un presupuesto en Traviosoft?',
      askSub: 'Familia Olabarri · Un fin de semana en Córdoba',
      queued: 'La eliminación espera ahora tu aprobación en Traviosoft, en Revisión de cambios.',
      reviewItem: 'Eliminar el presupuesto de Familia Olabarri',
      approved: 'Aprobado en Traviosoft. El presupuesto está en la papelera.'
    }
  }
};
