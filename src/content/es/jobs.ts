import type { JobPage, JobSlug } from '../types';

const sell: JobPage = {
  slug: 'sell',
  metaTitle: 'Vender: solicitudes, catálogo y presupuestos | Traviosoft',
  metaDescription:
    'Todas las solicitudes en una lista, catálogo con precios por temporada y presupuestos con tu margen, IVA y comisión, en el idioma del cliente, con seguimiento.',
  name: 'Vender',
  menuLine: 'De la primera solicitud al presupuesto aceptado',
  step: '1 de 4',
  heroTitle: 'Responde primero, con el precio correcto.',
  heroLead:
    'Los clientes suelen reservar con la agencia que responde primero con un presupuesto claro y correcto. Traviosoft tiene todas las solicitudes a la vista y construye el presupuesto con tus propias tarifas, para que puedas enviarlo el mismo día.',
  heroVisual: 'quote',
  chapters: [
    {
      id: 'requests',
      kicker: 'Solicitudes',
      title: 'Cada solicitud, a mano.',
      lead: 'Cada consulta en una lista con su siguiente paso, tanto si llegó por email, por teléfono o por WhatsApp.',
      visual: 'requests',
      features: [
        { title: 'Una lista de solicitudes', body: ['Cada solicitud tiene un estado, así que ves de un vistazo cuáles son nuevas, cuáles están presupuestadas y cuáles esperan respuesta.'] },
        { title: 'Una solicitud pasa a ser un proyecto', body: ['Cuando una solicitud va en serio, se convierte en proyecto. El cliente, las fechas, los viajeros y tus notas se quedan juntos durante todo el viaje.'] },
        { title: 'Una ficha por cliente', body: ['Escribe un nombre o un email que ya tengas y Traviosoft te muestra el cliente existente, así cada cliente conserva un solo historial.'] },
        { title: 'Recordatorios', body: ['Pon una fecha a una solicitud. Vuelve a aparecer en tu panel el día que toca.'] },
        { title: 'Aprende de cada solicitud cerrada', body: ['Cierra una solicitud con su motivo. Tras una temporada ves qué ajustar: precio, plazos, destino.'] }
      ]
    },
    {
      id: 'catalogue',
      kicker: 'Catálogo',
      title: 'Tus tarifas, listas para presupuestar.',
      lead: 'Hoteles, traslados, guías y actividades, cada uno con sus precios por fecha. El precio correcto para las fechas del viaje se elige solo.',
      visual: 'catalogue',
      features: [
        { title: 'Periodos de precio por fecha', body: ['Temporada baja, media y alta, eventos especiales, tarifas de contratos nuevos. Cada producto guarda sus precios por periodo y el presupuesto usa el que corresponde a las fechas del viaje.'] },
        { title: 'Varios proveedores por producto', body: ['Ten dos empresas de traslados o tres guías para el mismo servicio, cada uno con sus tarifas, y elige uno por viaje.'] },
        { title: 'Opciones', body: ['Tipos de habitación, media pensión, coche privado o compartido: las opciones viven en el producto, con su propio precio.'] },
        { title: 'Paquetes preparados', body: ['Guarda una vez tus rutas clásicas. Añade el paquete entero a un presupuesto con un clic y ajusta lo que cambie.'] },
        { title: 'Traducciones automáticas', body: ['Escribe la descripción de un producto una vez. Se traduce para tus clientes a su idioma.'] }
      ]
    },
    {
      id: 'quotes',
      kicker: 'Presupuestos',
      title: 'Un presupuesto en minutos, con el margen incluido.',
      lead: 'Define tus reglas de precio una vez. Cada línea de cada presupuesto las sigue, así que cada margen y cada comisión están en el precio.',
      visual: 'quote',
      features: [
        { title: 'Margen, IVA y comisión', body: ['Un procedimiento de precios convierte tus tarifas netas en precios de venta: tu margen, el IVA que corresponde y la comisión cuando vende el viaje otra agencia o un colaborador.'] },
        { title: 'Precios por persona', body: ['Precio por adulto o por niño. El cliente ve un precio claro por persona y un total.'] },
        { title: 'Nombres para el cliente', body: ['Conserva tus nombres internos para el equipo. El cliente lee un nombre limpio y claro para cada servicio.'] },
        { title: 'Incluido y no incluido', body: ['Una lista clara de lo que cubre el precio y lo que corre por cuenta del viajero, acordado desde el principio.'] },
        { title: 'Versiones', body: ['¿El cliente pide un hotel más barato? Haz una versión nueva. La anterior se conserva y puedes reabrirla cuando quieras.'] },
        { title: 'Fecha de caducidad', body: ['Con unos atajos fijas cuánto tiempo vale el precio, para que cada presupuesto se acepte a un precio que sigue vigente.'] }
      ]
    },
    {
      id: 'send',
      kicker: 'Envío y seguimiento',
      title: 'Enviado esta noche. Seguimiento la semana que viene.',
      lead: 'Envía el presupuesto por email en el idioma del cliente. Una semana después, Traviosoft te lo devuelve para hacer el seguimiento.',
      visual: 'followup',
      features: [
        { title: 'Plantillas de email', body: ['Tus propios textos de email, en cada idioma. El presupuesto va adjunto y el email queda listo para enviar.'] },
        { title: 'En el idioma del cliente', body: ['Español, inglés, francés y más. El presupuesto, el email y los documentos siguen el idioma del cliente.'] },
        { title: 'Seguimiento a los 7 días', body: ['Una semana después del envío, el presupuesto vuelve a ti para el seguimiento, así cada cliente interesado vuelve a saber de ti, incluso en una semana cargada.'] }
      ]
    },
    {
      id: 'proposal',
      kicker: 'Propuesta',
      title: 'Una propuesta que da gusto abrir.',
      lead: 'Tu cliente recibe un enlace a una página clara con el viaje, en su idioma y con tu marca.',
      visual: 'proposal',
      features: [
        { title: 'Una página de propuesta para compartir', body: ['Un enlace con el viaje, los servicios y el precio. Se abre en cualquier móvil, directamente desde el enlace.'] },
        { title: 'Tu marca', body: ['Tu logo y tus colores en la página y en todos los documentos.'] },
        { title: 'Las mismas cifras en todas partes', body: ['La propuesta, el PDF del presupuesto y después la factura salen de las mismas líneas. Cambia un precio una vez y queda bien en todas partes.'] }
      ]
    },
    {
      id: 'partners',
      kicker: 'Agencias colaboradoras',
      title: 'Vende a través de agencias colaboradoras.',
      lead: 'La mayoría de los viajes de un DMC llegan de agencias del extranjero. Presupuesta a la agencia, conserva a su cliente en el mismo viaje y liquida su comisión con las mismas cifras.',
      visual: 'quote',
      features: [
        { title: 'La agencia y su cliente', body: ['El presupuesto va a la agencia colaboradora y los viajeros son sus clientes. Ambos están en el viaje, del primer presupuesto a la última factura.'] },
        { title: 'La comisión en el precio', body: ['Fija la comisión de la agencia en el presupuesto. Está en el precio de venta desde la primera línea y tu margen sigue a la vista para ti.'] },
        { title: 'Liquidaciones de comisión', body: ['Lo que debes a cada agencia, por periodo, según los viajes que te envió. Se liquida con un clic.'] },
        { title: 'Documentos en el idioma de la agencia', body: ['La agencia recibe el presupuesto y la propuesta en su idioma y con tu marca, listos para pasar a su cliente.'] }
      ]
    }
  ],
  faq: [
    { q: '¿Puedo importar mi catálogo actual?', a: ['Sí. Importamos tus productos, precios y proveedores desde tus hojas de cálculo durante la configuración. La configuración y la importación son gratis con facturación anual.'] },
    { q: '¿Pueden varios proveedores vender el mismo hotel o servicio?', a: ['Sí. Un producto puede tener varios proveedores, cada uno con sus tarifas. Eliges el proveedor por viaje.'] },
    { q: '¿Qué ve mi cliente?', a: ['Un presupuesto limpio con nombres pensados para el cliente, precios por persona, lo incluido y lo no incluido, en su idioma y con tu marca. Tus tarifas netas y tus márgenes quedan solo para tu equipo. Puedes abrir los viajes de ejemplo para verlo.'] },
    { q: '¿Tengo que usar el catálogo en todos los presupuestos?', a: ['Tú decides. Cualquier presupuesto admite una línea suelta junto a las del catálogo. El catálogo ahorra tiempo con lo que vendes a menudo.'] }
  ]
};

const book: JobPage = {
  slug: 'book',
  metaTitle: 'Reservar y operar el viaje | Traviosoft',
  metaDescription:
    'El primer pago convierte el presupuesto en reserva. Los estados se actualizan solos, los emails de proveedores se archivan y el cliente recibe su itinerario.',
  name: 'Reservar y operar',
  menuLine: 'Del presupuesto aceptado al viaje realizado',
  step: '2 de 4',
  heroTitle: 'Cada reserva confirmada, también en temporada alta.',
  heroLead:
    'Cuando el cliente dice que sí, hay que reservar cada servicio, confirmarlo y enviarlo a las personas adecuadas. Traviosoft mantiene la lista de cada viaje, así todo el equipo trabaja con la misma.',
  heroVisual: 'order',
  chapters: [
    {
      id: 'order',
      kicker: 'Reserva',
      title: 'La señal abre la reserva.',
      lead: 'Registra el primer pago y el presupuesto queda aceptado: se crea la reserva con todos los servicios ya dentro.',
      visual: 'order',
      features: [
        { title: 'Un solo paso', body: ['El primer pago acepta el presupuesto, crea la reserva y lista todos los servicios por reservar, todo a la vez.'] },
        { title: 'Todo viene del presupuesto', body: ['Viajeros, fechas, servicios y precios salen del presupuesto aceptado, tal como los vio el cliente.'] },
        { title: 'Cambios tras la confirmación', body: ['¿El cliente añade una noche? Actualiza el viaje y la reserva lo sigue, así el equipo trabaja siempre con la última versión.'] }
      ]
    },
    {
      id: 'status',
      kicker: 'Estados',
      title: 'Ve lo que queda por hacer.',
      lead: 'Las etiquetas de reserva, viaje y pago se actualizan solas. Sabes de un vistazo qué viajes te necesitan hoy.',
      visual: 'order',
      features: [
        { title: 'Una lista de reservas por viaje', body: ['Hotel, guía, coche, billetes: cada servicio indica si está por reservar, esperando al proveedor o confirmado.'] },
        { title: 'Etiquetas que se actualizan solas', body: ['Cuando se confirma el último servicio, el viaje aparece como reservado. Cuando se paga la liquidación, la etiqueta de pago se pone en verde. Los estados siguen al trabajo.'] },
        { title: 'Archivo', body: ['Los viajes terminados van al archivo y se pueden seguir buscando. Un registro borrado se puede recuperar desde la papelera.'] }
      ]
    },
    {
      id: 'suppliers',
      kicker: 'Proveedores',
      title: 'Los proveedores en un solo sitio.',
      lead: 'Contactos, documentos y todos los emails intercambiados, archivados en el viaje correcto y a mano cuando llama el cliente.',
      visual: 'suppliers',
      features: [
        { title: 'Emails de proveedores archivados por ti', body: ['Las confirmaciones y respuestas de los proveedores llegan al viaje al que pertenecen.'] },
        { title: 'Bonos de servicio', body: ['Envía a cada guía, conductor u hotel un bono claro con fechas, nombres y detalles, directamente desde el viaje.'] },
        { title: 'Fichas de proveedor', body: ['Contactos, contratos, fotos y lo que incluye cada proveedor, guardados con el proveedor y reutilizados en cada viaje.'] },
        { title: 'Peticiones de disponibilidad y órdenes de compra', body: ['Pide disponibilidad a un hotel y envía después la orden de compra desde el viaje. Las respuestas y los cambios vuelven a la reserva.'], premium: true }
      ]
    },
    {
      id: 'itinerary',
      kicker: 'Itinerario del cliente',
      title: 'Un viaje día a día en su móvil.',
      lead: 'Cuando el viaje está confirmado, comparte una página con cada día, los hoteles, los horarios y los contactos. Tu viajero la abre desde cualquier sitio.',
      visual: 'itinerary',
      features: [
        { title: 'Una página de itinerario para compartir', body: ['Un enlace, día a día. Se abre en cualquier móvil, directamente desde el enlace.'] },
        { title: 'En el idioma del viajero y con tu marca', body: ['El itinerario sigue el idioma del cliente y lleva tu logo.'] },
        { title: 'Siempre actualizado', body: ['Cambia una hora de recogida en el viaje y la página muestra la nueva hora. El enlace no cambia.'] }
      ]
    },
    {
      id: 'groups',
      kicker: 'Grupos',
      title: 'Grupos y rooming lists.',
      lead: 'Incentivos, asociaciones, viajes escolares: cada viajero con su nombre, cada habitación prevista, cada hotel sabe quién duerme dónde.',
      visual: 'order',
      features: [
        { title: 'La lista de viajeros', body: ['Pega o importa la lista desde una hoja de cálculo, o envía al organizador un enlace a un formulario. Hasta 200 viajeros por viaje.'] },
        { title: 'Servicios para parte del grupo', body: ['El día de golf para doce, la cena de gala para todos: cada servicio indica quién lo toma y las cifras de cada hotel lo siguen.'] },
        { title: 'Una rooming list por hotel', body: ['Habitaciones creadas según quién comparte con quién, numeradas por hotel, listas para enviar en PDF o en hoja de cálculo.'] },
        { title: 'Dietas y accesibilidad de un vistazo', body: ['Cuántos menús vegetarianos, alergias y necesidades de accesibilidad por servicio, para el restaurante y el guía.'] }
      ]
    },
    {
      id: 'calendar',
      kicker: 'Calendario',
      title: 'Quién viaja esta semana.',
      lead: 'Cada viaje es una banda en el calendario. En el móvil, los servicios del día en una lista sencilla.',
      visual: 'calendar',
      features: [
        { title: 'Bandas de viaje', body: ['Ve cada viaje de la llegada a la salida y lo cargadas que están las próximas semanas.'] },
        { title: 'El día en tu móvil', body: ['Las llegadas, traslados y visitas de hoy en una lista que puedes mirar entre dos reuniones.'] },
        { title: 'Datos de los viajeros', body: ['Los viajeros rellenan su pasaporte, su dieta y sus necesidades de accesibilidad con un enlace a un formulario, y las respuestas llegan al viaje.'] }
      ]
    }
  ],
  faq: [
    { q: '¿Pueden mis guías y conductores ver el viaje?', a: ['Reciben por email un bono de servicio con lo que necesitan: fechas, horas, nombres y punto de encuentro.'] },
    { q: '¿Qué pasa si el cliente cambia una fecha?', a: ['Actualiza el viaje. Los servicios, la página del itinerario y los bonos siguen el cambio, y los servicios que hay que volver a reservar aparecen otra vez como por reservar.'] },
    { q: '¿Cómo llegan los emails de los proveedores al viaje?', a: ['Los emails de los proveedores se archivan solos en el viaje.'] }
  ]
};

const getPaid: JobPage = {
  slug: 'get-paid',
  metaTitle: 'Cobrar y facturar: pagos, facturas, panel | Traviosoft',
  metaDescription:
    'Señal y liquidación en el presupuesto, enlaces de pago en el email, facturas y rectificativas con las mismas cifras, y un panel con ventas, cobros y pagos.',
  name: 'Cobrar',
  menuLine: 'Cobros, facturas y tus cifras',
  step: '3 de 4',
  heroTitle: 'Cobra a tiempo, factura sin reescribir.',
  heroLead:
    'La parte del dinero de un viaje vive con el viaje. En Traviosoft, los cobros y las facturas salen del presupuesto que aceptó el cliente, así que los importes siempre cuadran.',
  heroVisual: 'payments',
  chapters: [
    {
      id: 'schedule',
      kicker: 'Calendario de pagos',
      title: 'Señal y liquidación, previstas desde el principio.',
      lead: 'Fija la señal y la liquidación con sus fechas en el presupuesto. El cliente sabe desde el primer día qué paga y cuándo.',
      visual: 'payments',
      features: [
        { title: 'Señal y liquidación', body: ['Un porcentaje o un importe, cada uno con su fecha de vencimiento, en cada viaje.'] },
        { title: 'Lo que vence esta semana', body: ['Todos los pagos que vencen o ya han pasado su fecha, de todos tus viajes, en una lista.'] },
        { title: 'Recordatorios de pago', body: ['Recordatorios amables al cliente antes y después de la fecha de vencimiento, en su idioma.'] }
      ]
    },
    {
      id: 'links',
      kicker: 'Enlaces de pago',
      title: 'El cliente paga desde el email.',
      lead: 'Añade tu enlace de pago al email. El cliente paga en pocos clics, desde su móvil.',
      visual: 'payments',
      features: [
        { title: 'Tu propio enlace de pago', body: ['Conecta el enlace de pago que ya usas. Sale junto con el email del presupuesto.'] },
        { title: 'Registra un pago con un clic', body: ['Una transferencia o un pago con tarjeta se registra en el viaje y la etiqueta de pago se actualiza sola.'] }
      ]
    },
    {
      id: 'invoices',
      kicker: 'Facturas',
      title: 'Facturas con las cifras que ya escribiste.',
      lead: 'Las facturas de señal y final se hacen desde el viaje. El precio presupuestado pasa a la factura, así que los importes cuadran con el presupuesto al céntimo.',
      visual: 'invoices',
      features: [
        { title: 'Facturas de señal y final', body: ['Hechas desde el viaje con un clic, con los datos del cliente y los importes correctos.'] },
        { title: 'Facturas rectificativas', body: ['Una cancelación o un cambio se convierte en una factura rectificativa vinculada a la factura original.'] },
        { title: 'Numeración por empresa', body: ['Gestiona dos empresas desde un solo sitio, cada una con su propia numeración de facturas.'] },
        { title: 'Las normas fiscales de tu país', body: ['Los regímenes especiales de IVA para agencias de viajes y la facturación electrónica se activan por país en los ajustes. Las agencias españolas, por ejemplo, tienen REAV y Veri*Factu.'] },
        { title: 'Listo para tu gestoría', body: ['Un resumen en Excel o un zip con todos los PDF a final de mes, en dos clics.'] },
        { title: 'Exportación contable', body: ['Tus ventas, compras y pagos como asientos contables, listos para tu programa de contabilidad.'], premium: true }
      ]
    },
    {
      id: 'dashboard',
      kicker: 'Panel',
      title: 'Sabe cómo va tu agencia.',
      lead: 'Ventas, viajes, cobros y pagos de un vistazo, para el periodo que elijas, siempre al día.',
      visual: 'dashboard',
      features: [
        { title: 'Ventas y viajes', body: ['Lo que has vendido y cuántos viajes, este mes, esta temporada o este año.'] },
        { title: 'Cobros y pagos', body: ['Lo que te han pagado los clientes y lo que debes a los proveedores, lado a lado.'] },
        { title: 'Hoy', body: ['Recordatorios, pagos que vencen y reservas por confirmar, reunidos para el día.'] }
      ]
    }
  ],
  faq: [
    { q: '¿Qué proveedores de pago funcionan?', a: ['Añades el enlace de pago del proveedor que ya usas. El cliente paga allí y tú registras el pago en el viaje.'] },
    { q: '¿Puede mi gestoría obtener los archivos?', a: ['Sí. Exporta un resumen en Excel o un zip con todas las facturas en PDF de cualquier periodo.'] },
    { q: '¿Sigue las normas de mi país?', a: ['La numeración de facturas por empresa y las facturas rectificativas funcionan en todas partes. Los regímenes específicos de cada país se activan en los ajustes: hoy incluyen el REAV y Veri*Factu de España. Dinos tu país en la demo y te diremos claramente qué está cubierto.'] }
  ]
};

const setup: JobPage = {
  slug: 'setup',
  metaTitle: 'Tu configuración: marcas, idiomas, datos | Traviosoft',
  metaDescription:
    'Varias marcas en una cuenta, documentos en el idioma del cliente, varias monedas, ajustes por país, tu equipo, tus datos en la UE y conexiones con tus otras herramientas.',
  name: 'Tu configuración',
  menuLine: 'Marcas, idiomas, monedas, equipo y datos',
  step: '4 de 4',
  heroTitle: 'Tu agencia, configurada a tu manera.',
  heroLead:
    'Los ajustes que hacen que Traviosoft encaje con tu agencia: tus marcas, tus idiomas, las normas de tu país y tu equipo. Se configuran una vez y todos los viajes los siguen.',
  heroVisual: 'brands',
  chapters: [
    {
      id: 'brands',
      kicker: 'Marcas',
      title: 'Varias marcas, una cuenta.',
      lead: 'Gestiona una segunda marca o una segunda empresa desde el mismo sitio, cada una con su imagen y su numeración.',
      visual: 'brands',
      features: [
        { title: 'Logo y colores por marca', body: ['Cada presupuesto, propuesta, itinerario y factura lleva la marca del viaje.'], premium: true },
        { title: 'Numeración por empresa', body: ['Cada entidad legal mantiene su propia numeración de facturas.'], premium: true }
      ]
    },
    {
      id: 'languages',
      kicker: 'Idiomas',
      title: 'Cada documento en el idioma de tu cliente.',
      lead: 'Escribe una vez. Presupuestos, emails, propuestas e itinerarios salen en español, inglés, francés y más.',
      visual: 'languages',
      features: [
        { title: 'Documentos por idioma', body: ['Cada cliente tiene un idioma y todos los documentos lo siguen.'] },
        { title: 'Traducciones automáticas', body: ['Las descripciones de producto de tu catálogo se traducen por ti y puedes corregir cualquier traducción.'] },
        { title: 'Plantillas de email por idioma', body: ['Tus propios textos en cada idioma, usados automáticamente.'] }
      ]
    },
    {
      id: 'currencies',
      kicker: 'Monedas',
      title: 'Compra y vende en cualquier moneda.',
      lead: 'Lodges en dólares, un cliente en libras, tu contabilidad en euros. Cada presupuesto tiene su moneda y tus cifras cuadran en la tuya.',
      visual: 'payments',
      features: [
        { title: 'Una moneda por cliente y por presupuesto', body: ['Presupuesta a un cliente británico en libras y a un colaborador estadounidense en dólares, desde el mismo catálogo.'], premium: true },
        { title: 'Precios de proveedor en su moneda', body: ['Guarda cada tarifa en la moneda en que factura el proveedor. El presupuesto la convierte al cambio del día, con el margen de seguridad que elijas.'], premium: true },
        { title: 'Tipos de cambio diarios', body: ['Los tipos del Banco Central Europeo se cargan cada día laborable, o fijas los tuyos.'], premium: true },
        { title: 'Tu contabilidad en una moneda', body: ['Facturas, cobros, márgenes e informes cuadran en tu moneda contable, con las diferencias de cambio calculadas por ti.'], premium: true }
      ]
    },
    {
      id: 'country',
      kicker: 'Ajustes por país',
      title: 'Las normas de tu país, activadas.',
      lead: 'Los regímenes fiscales y la facturación electrónica dependen de dónde esté tu agencia. Son ajustes, que se activan en los países que los necesitan.',
      visual: 'invoices',
      features: [
        { title: 'Regímenes de IVA para agencias de viajes', body: ['Cuando un país tiene un régimen especial de IVA para agencias de viajes, las menciones correctas aparecen en tus facturas.'] },
        { title: 'Facturación electrónica', body: ['Donde es obligatorio el envío, va integrado en la factura. En España, por ejemplo, Veri*Factu con su código QR.'] }
      ]
    },
    {
      id: 'team',
      kicker: 'Equipo',
      title: 'Tu equipo en los mismos viajes.',
      lead: 'Todos ven el mismo cliente, presupuesto y reserva. Añade a un compañero en un minuto.',
      visual: 'team',
      features: [
        { title: 'Usuarios incluidos en tu plan', body: ['3 usuarios en los dos planes, y más cuando crezca tu equipo.'] },
        { title: 'Equipos, carteras y roles', body: ['Da a cada equipo y a cada persona sus propios clientes y viajes, y decide quién ve qué.'], premium: true }
      ]
    },
    {
      id: 'data',
      kicker: 'Tus datos',
      title: 'Tus datos, seguros y tuyos.',
      lead: 'Cada agencia tiene su propio espacio separado, alojado en la Unión Europea, aparte de todas las demás agencias.',
      visual: 'safe',
      features: [
        { title: 'Un espacio propio para tu agencia', body: ['Tus datos viven en su propio espacio, aparte de las demás agencias.'] },
        { title: 'Alojado en la UE', body: ['Tus datos se quedan en la Unión Europea, bajo el RGPD.'] },
        { title: 'Llévate tus datos', body: ['Si te das de baja, recuperas tus datos en formatos estándar.'] }
      ]
    },
    {
      id: 'connections',
      kicker: 'Conexiones',
      title: 'Conecta tus otras herramientas.',
      lead: 'Traviosoft trabaja con las herramientas que ya usas, con los mismos permisos que en la aplicación.',
      visual: 'connections',
      features: [
        { title: 'Tu web y tu contabilidad', body: ['Tu web, tu programa de contabilidad o un desarrollador con el que trabajes pueden leer y escribir tus datos de Traviosoft.'], premium: true },
        { title: 'Tus herramientas de IA', body: ['Conecta el asistente de IA que ya usas, como Claude o ChatGPT, a tus datos de Traviosoft, con los mismos permisos que la persona que lo conecta.'], premium: true },
        { title: 'El asistente dentro de Traviosoft', body: ['Pregunta qué te necesita hoy, pide un presupuesto preparado desde tu catálogo o convierte la lista de precios de un proveedor en precios de catálogo. Cada cambio espera tu visto bueno.'], premium: true }
      ]
    }
  ],
  faq: [
    { q: '¿Dónde están mis datos?', a: ['En un espacio propio para tu agencia, alojado en la Unión Europea.'] },
    { q: '¿Puedo irme con mis datos?', a: ['Sí. Recuperas tus datos en formatos estándar.'] },
    { q: '¿Quién puede ver qué?', a: ['En Classic, cada usuario ve los viajes de la agencia. En Premium, cada equipo y cada persona pueden tener sus propios clientes, viajes y permisos.'] }
  ]
};

export const jobs: Record<JobSlug, JobPage> = { sell, book, 'get-paid': getPaid, setup };
