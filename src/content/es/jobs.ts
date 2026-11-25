import type { JobPage, JobSlug } from '../types';
import { ai } from './ai';

const sell: JobPage = {
  slug: 'sell',
  metaTitle: 'Vender: solicitudes, catálogo y presupuestos | Traviosoft',
  metaDescription:
    'Todas las solicitudes de clientes en una lista, un catálogo con precios por temporada y varios proveedores por producto, presupuestos con tu margen y el IVA, enviados en el idioma del cliente y con seguimiento a los 7 días.',
  name: 'Vender',
  menuLine: 'De la primera solicitud al presupuesto aceptado',
  step: '1 de 4',
  heroTitle: 'Solicitudes, catálogo y presupuestos',
  heroLead:
    'Traviosoft reúne todas las solicitudes de clientes en una lista, tus productos y precios en un catálogo, y crea presupuestos que muestran tu margen en cada línea.',
  heroVisual: 'quote',
  chapters: [
    {
      id: 'requests',
      kicker: 'Solicitudes',
      title: 'Las solicitudes de clientes en una lista',
      lead: 'Cada consulta llega a la misma lista con su siguiente paso, tanto si vino por email, por teléfono o por WhatsApp.',
      visual: 'requests',
      features: [
        { title: 'Nueva o respondida', body: ['Ves de un vistazo qué solicitudes esperan todavía un primer presupuesto. El estado cambia solo cuando se envía el presupuesto.'] },
        { title: 'De la solicitud al presupuesto', body: ['Crea el presupuesto desde la solicitud. El cliente, las fechas del viaje y el número de viajeros ya están rellenados.'] },
        { title: 'Recordatorios', body: ['Pon una fecha a una solicitud y ese día vuelve a aparecer en tu lista de cosas por hacer.'] }
      ]
    },
    {
      id: 'catalogue',
      kicker: 'Catálogo',
      title: 'Un catálogo de productos y precios',
      lead: 'Tus hoteles, traslados, guías y actividades, cada uno con lo que te cuesta y el precio al que lo vendes, por fecha.',
      visual: 'catalogue',
      features: [
        { title: 'Periodos de precio', body: ['Temporada baja, media y alta, eventos especiales, tarifas de los contratos del año que viene. Cada producto guarda sus precios por periodo y el presupuesto usa el que corresponde a las fechas del viaje.'] },
        { title: 'Varios proveedores por producto', body: ['Ten dos empresas de traslados o tres guías para el mismo servicio, cada uno con sus tarifas, y elige uno para cada viaje.'] },
        { title: 'Tus rutas clásicas, guardadas', body: ['Guarda una vez una ruta clásica. Añádela a un presupuesto con un clic, a los precios de hoy, y ajusta lo que cambie.'] }
      ]
    },
    {
      id: 'quotes',
      ai: { say: '«Crea un presupuesto para Iris & Noah con mi catálogo»' },
      kicker: 'Presupuestos',
      title: 'Presupuestos con tu margen y el IVA',
      lead: 'Crea el presupuesto línea a línea desde tu catálogo. Cada línea muestra lo que te cuesta, lo que paga el cliente y tu margen.',
      visual: 'margin',
      features: [
        { title: 'Tus reglas de precio', body: ['Define una vez cómo se suman tu margen y el IVA al precio de un proveedor. Cada línea del presupuesto se calcula después de la misma manera.'] },
        { title: 'Lo que ve el cliente', body: ['El cliente ve los servicios y los precios. Tus costes y tus márgenes se quedan dentro de tu agencia.'] },
        { title: 'Versiones', body: ['¿El cliente pide un hotel más barato? Cambia el presupuesto y envíalo de nuevo. La versión enviada antes se conserva y se puede restaurar.'] }
      ]
    },
    {
      id: 'send',
      kicker: 'Envío y seguimiento',
      title: 'Envío del presupuesto y seguimiento',
      lead: 'El presupuesto sale por email en PDF, en el idioma del cliente. Una semana después, Traviosoft te recuerda hacer el seguimiento.',
      visual: 'followup',
      features: [
        { title: 'Plantillas de email', body: ['Escribe tus textos de email una vez, en cada idioma. Cuando envías un presupuesto, el email está listo con el PDF adjunto.'] },
        { title: 'En el idioma del cliente', body: ['Español, catalán, inglés, francés o italiano. El presupuesto y su email se escriben en el idioma del cliente.'] },
        { title: 'Seguimiento a los 7 días', body: ['Siete días después del envío, el presupuesto aparece en tu lista de presupuestos por seguir. Puedes elegir otra fecha.'] }
      ]
    },
    {
      id: 'proposal',
      kicker: 'Propuesta',
      title: 'El presupuesto como página web',
      lead: 'El cliente también puede abrir el presupuesto como una página web, con fotos del viaje, en su idioma.',
      visual: 'proposal',
      features: [
        { title: 'Compartida con un enlace', body: ['El enlace va en el email del presupuesto. La página lleva tu logo y tus colores y se abre en cualquier móvil.'] },
        { title: 'Incluido y no incluido', body: ['Para cada servicio, la página indica lo que cubre el precio y lo que es extra.'] },
        { title: 'Los mismos precios que el presupuesto', body: ['La página, el PDF y después las facturas usan las mismas líneas, así que los precios coinciden.'] }
      ]
    },
    {
      id: 'partners',
      kicker: 'Agencias colaboradoras',
      title: 'Las comisiones y tu margen real',
      lead: 'Cuando otra agencia vende tu viaje a su propio cliente, el presupuesto incluye su comisión y muestra el margen que te queda.',
      visual: 'commission',
      features: [
        { title: 'La agencia y su cliente', body: ['El presupuesto va dirigido a la agencia y los viajeros figuran en él. Ambos siguen en el viaje hasta la última factura.'] },
        { title: 'La comisión en el precio', body: ['Introduce la comisión de la agencia en el presupuesto. El precio de venta la incluye y ves tu margen después de la comisión.'] },
        { title: 'Liquidaciones de comisión', body: ['Consulta lo que debes a cada agencia por los viajes que te trajo, periodo a periodo, y márcalo como pagado con un clic.'] }
      ]
    }
  ],
  faq: [
    { q: '¿Puedo importar mi catálogo actual?', a: ['Sí. Durante la configuración importamos tus productos, precios y proveedores desde tus hojas de cálculo. La configuración y la importación son gratis con facturación anual.'] },
    { q: '¿Pueden varios proveedores vender el mismo hotel o servicio?', a: ['Sí. Un producto puede tener varios proveedores, cada uno con sus tarifas. Eliges el proveedor para cada viaje.'] },
    { q: '¿Qué ve mi cliente?', a: ['Un presupuesto con el nombre que elijas para cada servicio y precios por persona, en su idioma y con tu marca. La página web del presupuesto indica también lo incluido y lo no incluido. Tus precios de compra y tus márgenes quedan solo para tu equipo.'] },
    { q: '¿Tengo que usar el catálogo en todos los presupuestos?', a: ['Un presupuesto puede mezclar productos del catálogo y líneas que escribes solo para ese viaje.'] }
  ]
};

const book: JobPage = {
  slug: 'book',
  metaTitle: 'Reservar y operar el viaje | Traviosoft',
  metaDescription:
    'Cuando se acepta un presupuesto, todos los servicios del viaje aparecen en una lista, listos para reservar. Las solicitudes de reserva salen a los proveedores por email, cada servicio muestra su estado y tu cliente recibe un itinerario día a día.',
  name: 'Reservar y operar',
  menuLine: 'Del presupuesto aceptado al viaje realizado',
  step: '2 de 4',
  heroTitle: 'Reservas, proveedores e itinerario del cliente',
  heroLead:
    'Cuando el cliente acepta el presupuesto, todos los servicios del viaje aparecen en una lista, listos para reservar. Las solicitudes de reserva salen a tus proveedores por email, ves lo que está confirmado y el viajero recibe un itinerario día a día.',
  heroVisual: 'order',
  chapters: [
    {
      id: 'order',
      kicker: 'Reservas',
      title: 'Cada reserva lista para el viaje',
      lead: 'El hotel, el guía, los traslados y las visitas del presupuesto aceptado aparecen en una lista, listos para reservar. Envía las solicitudes de reserva y los proveedores confirman.',
      visual: 'confirm',
      features: [
        { title: 'Todos los servicios en una lista', body: ['Los servicios vienen del presupuesto aceptado, con sus fechas, viajeros y precios ya rellenados.'] },
        { title: 'Solicitudes de reserva por email', body: ['Cada proveedor recibe su solicitud de reserva con los servicios, las fechas y el número de viajeros. La respuesta se guarda con el viaje.'] },
        { title: 'Cambios tras la confirmación', body: ['¿El cliente añade una noche? Cambia el presupuesto y las reservas lo siguen, para que el equipo trabaje con la versión actual.'] }
      ]
    },
    {
      id: 'status',
      ai: { say: '«El hotel de Sevilla ha confirmado, ref. 48213»' },
      kicker: 'Estados',
      title: 'Estados de reserva en cada viaje',
      lead: 'En cada viaje ves qué servicios están confirmados y cuáles esperan todavía al proveedor.',
      visual: 'statuses',
      features: [
        { title: 'Un estado por servicio', body: ['Hotel, guía, coche, billetes: cada uno está por reservar, esperando al proveedor o confirmado.'] },
        { title: 'Un estado para todo el viaje', body: ['Cada viaje muestra cuántos de sus servicios están confirmados, por ejemplo 3 de 7, y aparece como todo reservado después del último.'] },
        { title: 'Las reservas que te necesitan', body: ['Una lista reúne las reservas que siguen esperando la respuesta de un proveedor, los bloqueos que vencen pronto y las que hay que reconfirmar antes del viaje.'] }
      ]
    },
    {
      id: 'suppliers',
      kicker: 'Proveedores',
      title: 'Los proveedores y sus emails',
      lead: 'Cada proveedor tiene sus contactos, documentos y tarifas en un solo lugar. Los emails sobre una reserva se guardan con el viaje al que pertenecen.',
      visual: 'suppliers',
      features: [
        { title: 'Los emails de proveedores en el viaje correcto', body: ['Una confirmación o una respuesta de un proveedor queda adjunta al viaje al que se refiere, donde todo el equipo puede leerla.'] },
        { title: 'Bonos de servicio', body: ['Envía a cada guía, conductor u hotel un bono con las fechas, los horarios, los nombres y el punto de encuentro, directamente desde el viaje.'] },
        { title: 'Peticiones de disponibilidad y órdenes de compra', body: ['Pregunta a un hotel si las fechas están disponibles y envía después la orden de compra con el precio acordado. El proveedor responde desde un enlace y el estado de la reserva se actualiza.'], premium: true }
      ]
    },
    {
      id: 'itinerary',
      kicker: 'Itinerario del cliente',
      title: 'Un itinerario día a día',
      lead: 'El viajero recibe un enlace a una página web con cada día del viaje: los hoteles, los horarios y los contactos.',
      visual: 'itinerary',
      features: [
        { title: 'Compartido con un enlace', body: ['Un enlace, día a día. Se abre en cualquier móvil.'] },
        { title: 'En el idioma del viajero, con tu marca', body: ['La página está escrita en el idioma del cliente y lleva tu logo.'] },
        { title: 'Siempre actualizado', body: ['Cambia una hora de recogida y la página muestra la nueva hora. El enlace no cambia.'] }
      ]
    },
    {
      id: 'groups',
      kicker: 'Grupos',
      title: 'Grupos y rooming lists',
      lead: 'Para viajes de grupo: la lista de viajeros, los servicios que solo toma una parte del grupo y una rooming list para cada hotel.',
      visual: 'rooming',
      features: [
        { title: 'La lista de viajeros', body: ['Pega o importa la lista desde una hoja de cálculo, o envía un enlace a un formulario para que los viajeros indiquen ellos mismos su pasaporte, su dieta y sus necesidades de accesibilidad. Hasta 200 viajeros por viaje.'], premium: true },
        { title: 'Servicios para parte del grupo', body: ['El día de golf para doce, la cena de gala para todos. Cada servicio indica quién participa, para que cada proveedor reciba las cifras correctas.'], premium: true },
        { title: 'Una rooming list por hotel', body: ['Las habitaciones se forman según quién comparte con quién y se numeran para cada hotel. Envía la lista en PDF o en hoja de cálculo.'], premium: true }
      ]
    },
    {
      id: 'calendar',
      kicker: 'Calendario',
      title: 'Los viajes en un calendario',
      lead: 'El calendario muestra cada viaje como una banda, de la llegada a la salida. En el móvil, muestra en una lista los servicios del día.',
      visual: 'calendar',
      features: [
        { title: 'Bandas de viaje', body: ['Ve qué viajes coinciden y la carga de las próximas semanas.'] },
        { title: 'El día en tu móvil', body: ['Las llegadas, traslados y visitas de hoy en una sola lista, fácil de consultar entre dos reuniones.'] }
      ]
    }
  ],
  faq: [
    { q: '¿Pueden mis guías y conductores ver el viaje?', a: ['Reciben por email un bono de servicio con lo que necesitan: fechas, horas, nombres y punto de encuentro.'] },
    { q: '¿Qué pasa si el cliente cambia una fecha?', a: ['Cambia la fecha en el presupuesto. Las reservas, la página del itinerario y los bonos de servicio siguen el cambio, y los servicios que hay que volver a reservar aparecen de nuevo como por reservar.'] },
    { q: '¿Las respuestas de los proveedores quedan en el viaje?', a: ['Sí. Las solicitudes de reserva salen de Traviosoft desde tu propio buzón, y la respuesta de cada proveedor se guarda con su viaje, donde la ve todo el equipo.'] }
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
  heroTitle: 'Cobros, facturas y cifras',
  heroLead:
    'Los pagos y las facturas salen del presupuesto aceptado, así que los importes coinciden. Las mismas cifras muestran tus ventas, el dinero recibido y el dinero que debes a proveedores.',
  heroVisual: 'payments',
  chapters: [
    {
      id: 'schedule',
      kicker: 'Calendario de pagos',
      title: 'Señal y liquidación con vencimientos',
      lead: 'Cada presupuesto tiene sus pagos planificados: normalmente una señal y una liquidación, cada una con su fecha de vencimiento.',
      visual: 'schedule',
      features: [
        { title: 'Señal y liquidación', body: ['Un porcentaje o un importe para cada pago, con su fecha de vencimiento. Tu calendario de pagos habitual se aplica con un clic.'] },
        { title: 'Lo que vence esta semana', body: ['Una sola lista muestra todos los pagos de clientes que vencen o ya han vencido, en todos tus viajes.'] },
        { title: 'Recordatorios de pago', body: ['Traviosoft puede escribir al cliente antes y después de un vencimiento, en su idioma y con tus palabras.'], premium: true }
      ]
    },
    {
      id: 'links',
      ai: { say: '«Olabarri ha pagado el resto por transferencia»' },
      kicker: 'Enlaces de pago',
      title: 'Enlaces de pago en el email',
      lead: 'El cliente paga en línea desde un enlace en tu email, con tarjeta por ejemplo.',
      visual: 'paylink',
      features: [
        { title: 'Tu propio enlace de pago', body: ['Usa el enlace del proveedor de pagos que ya tienes. Añádelo a un pago y sale en el email al cliente.'] },
        { title: 'Los pagos registrados en el viaje', body: ['Cuando llega una transferencia o un pago con tarjeta, regístralo con un clic. El viaje aparece entonces como pagado en parte o pagado.'] }
      ]
    },
    {
      id: 'invoices',
      kicker: 'Facturas',
      title: 'Facturas desde el viaje',
      lead: 'Las facturas de señal y final se hacen a partir del presupuesto aceptado, con sus importes y los datos del cliente.',
      visual: 'invoices',
      features: [
        { title: 'Facturas de señal y final', body: ['Un clic crea la factura de una señal recibida y, más adelante, la factura final, que descuenta la señal.'] },
        { title: 'Facturas rectificativas', body: ['Cuando un viaje se cancela o se modifica, una factura rectificativa anula la factura original y queda vinculada a ella.'] },
        { title: 'Listo para tu gestoría', body: ['A final de mes, exporta un resumen en Excel o un archivo zip con todas las facturas en PDF.'] }
      ]
    },
    {
      id: 'dashboard',
      kicker: 'Panel',
      title: 'Ventas, viajes y tesorería',
      lead: 'Tus ventas, tus viajes, el dinero recibido y el dinero por pagar en una sola página, para el periodo que elijas.',
      visual: 'dashboard',
      features: [
        { title: 'Ventas y viajes', body: ['Lo que has vendido y cuántos viajes, este mes, esta temporada o este año.'] },
        { title: 'Cobros y pagos', body: ['Lo que te han pagado los clientes y lo que debes a proveedores, lado a lado.'] },
        { title: 'Hoy', body: ['El trabajo del día en un solo lugar: recordatorios, pagos que vencen y reservas por confirmar.'] }
      ]
    }
  ],
  faq: [
    { q: '¿Qué proveedores de pago funcionan?', a: ['Cualquier proveedor que te dé un enlace de pago. Añades el enlace al pago, el cliente paga allí y registras el pago en el viaje.'] },
    { q: '¿Puede mi gestoría obtener los archivos?', a: ['Sí. Exporta un resumen en Excel o un archivo zip con todas las facturas en PDF de cualquier periodo.'] },
    { q: '¿Sigue las normas de mi país?', a: ['Las facturas se numeran en secuencia para cada una de tus empresas, y las facturas rectificativas están disponibles en todos los países. Para España, el régimen especial de las agencias de viajes está integrado. En otros países, la factura la emite tu propio programa de facturación, conectado a Traviosoft. Para tu país, pregúntanos en la demo.'] }
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
  heroTitle: 'Marcas, idiomas, monedas y equipo',
  heroLead:
    'Tus marcas, idiomas, monedas, reglas fiscales y usuarios se configuran una vez. Cada presupuesto, reserva y factura los sigue después.',
  heroVisual: 'settings',
  chapters: [
    {
      id: 'brands',
      kicker: 'Marcas',
      title: 'Varias marcas en una cuenta',
      lead: 'Una agencia que vende con dos nombres, o que gestiona dos empresas, trabaja desde una sola cuenta. Cada marca conserva su imagen.',
      visual: 'brands',
      features: [
        { title: 'Logo y colores por marca', body: ['Cada viaje pertenece a una marca. Su presupuesto, su propuesta, su itinerario y su factura llevan el logo y los colores de esa marca.'], premium: true },
        { title: 'Numeración por empresa', body: ['Cuando facturas desde dos empresas, cada una mantiene sus propios números de factura.'], premium: true }
      ]
    },
    {
      id: 'languages',
      kicker: 'Idiomas',
      title: 'Documentos en el idioma del cliente',
      lead: 'Presupuestos, emails, propuestas e itinerarios se escriben en español, catalán, inglés, francés o italiano, según el cliente.',
      visual: 'languages',
      features: [
        { title: 'Un idioma por cliente', body: ['Indica una vez el idioma del cliente y todos los documentos para ese cliente lo siguen.'] },
        { title: 'Traducciones automáticas', body: ['Las descripciones de producto de tu catálogo se traducen por ti y puedes corregir cualquier traducción.'] },
        { title: 'Plantillas de email por idioma', body: ['Tu propia redacción en cada idioma, elegida automáticamente para cada cliente.'] }
      ]
    },
    {
      id: 'currencies',
      kicker: 'Monedas',
      title: 'Varias monedas',
      lead: 'Lodges con precios en dólares, un cliente que paga en libras, tus cuentas en euros. Cada presupuesto tiene su moneda y tus cifras se suman en la tuya.',
      visual: 'currencies',
      features: [
        { title: 'Una moneda por cliente y por presupuesto', body: ['Presupuesta a un cliente británico en libras y a un colaborador estadounidense en dólares, desde el mismo catálogo.'], premium: true },
        { title: 'Precios de proveedor en su moneda', body: ['Guarda cada tarifa en la moneda en que factura el proveedor. El presupuesto la convierte al cambio del día, más un colchón que eliges para las variaciones del cambio.'], premium: true },
        { title: 'Tus cuentas en una sola moneda', body: ['Facturas, pagos, márgenes e informes se suman en tu moneda contable. Las ganancias y pérdidas por tipo de cambio se calculan por ti.'], premium: true }
      ]
    },
    {
      id: 'country',
      kicker: 'Ajustes por país',
      title: 'Normas fiscales por país',
      lead: 'El IVA de las agencias de viajes y la facturación electrónica cambian de un país a otro, por eso se configuran para tu país.',
      visual: 'country',
      features: [
        { title: 'IVA sobre el margen', body: ['Para España, el régimen especial de las agencias de viajes con IVA sobre el margen (REAV) y su mención en tus facturas están integrados.'] },
        { title: 'Facturación electrónica', body: ['Donde las facturas deben enviarse por vía electrónica, salen desde Traviosoft o desde tu programa de facturación, según el país.'] }
      ]
    },
    {
      id: 'team',
      ai: { link: 'Quién puede conectar un asistente de IA' },
      kicker: 'Equipo',
      title: 'Cada vendedor con sus clientes y sus ventas',
      lead: 'Cada vendedor trabaja con sus propios clientes y viajes, y tú ves las ventas de toda la agencia.',
      visual: 'team',
      features: [
        { title: 'Usuarios incluidos en tu plan', body: ['Los dos planes, Classic y Premium, incluyen 3 usuarios. Añade más cuando crezca tu equipo.'] },
        { title: 'Equipos y roles', body: ['Da a cada persona sus propios clientes y viajes, agrupa a las personas en equipos y elige lo que cada una puede ver y hacer.'], premium: true }
      ]
    },
    {
      id: 'data',
      kicker: 'Tus datos',
      title: 'Datos y alojamiento',
      lead: 'Los datos de tu agencia se guardan en su propio espacio, en servidores de la Unión Europea.',
      visual: 'safe',
      features: [
        { title: 'Un espacio propio para tu agencia', body: ['Tus clientes, precios y viajes se almacenan aparte de los de otras agencias.'] },
        { title: 'Alojado en la UE', body: ['Tus datos se quedan en la Unión Europea, bajo el RGPD.'] },
        { title: 'Llévate tus datos', body: ['Si te das de baja, recuperas tus datos en formatos estándar.'] }
      ]
    },
    {
      id: 'connections',
      kicker: 'Conexiones',
      title: 'Conexiones con tus otras herramientas',
      lead: 'Tu web, tu programa de contabilidad y tu asistente de IA pueden trabajar con tus datos de Traviosoft. Cada conexión tiene los permisos que le das.',
      visual: 'connections',
      features: [
        { title: 'Tu web y tu contabilidad', body: ['El formulario de contacto de tu web puede llegar directamente a tus solicitudes, y tu programa de contabilidad puede recoger las facturas y los pagos.'], premium: true },
        { title: 'Tus herramientas de IA', body: ['Conecta el asistente de IA que ya usas, como Claude o ChatGPT. Trabaja en Traviosoft con los permisos de la persona que lo conectó.'] },
        { title: 'El asistente dentro de Traviosoft', body: ['Pregunta qué necesita tu atención hoy, pide un presupuesto preparado desde tu catálogo o convierte la lista de precios de un proveedor en precios de catálogo. Cada cambio espera tu visto bueno. El asistente es una opción en los dos planes.'] }
      ]
    }
  ],
  faq: [
    { q: '¿Dónde están mis datos?', a: ['En un espacio propio para tu agencia, alojado en la Unión Europea.'] },
    { q: '¿Puedo irme con mis datos?', a: ['Sí. Recuperas tus datos en formatos estándar.'] },
    { q: '¿Quién puede ver qué?', a: ['En el plan Classic, cada usuario ve todos los viajes de la agencia. En el plan Premium, cada equipo y cada persona pueden tener sus propios clientes y viajes, con los permisos que elijas.'] }
  ]
};

export const jobs: Record<JobSlug, JobPage> = { sell, book, 'get-paid': getPaid, setup, 'ai-assistant': ai.page };
