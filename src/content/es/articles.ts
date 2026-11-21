import type { Article, ArticleBlock, Faq } from '../types';
import { invoicingGuides } from './invoicing';
import { topicGuides } from './topics';
import { PRICES } from '../prices';

const UPDATED = '2026-11-03';

type Cmp = {
  key: string;
  slug: string;
  other: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  card: string;
  basis: string;
  rows: string[][];
  otherBetter: string[];
  usBetter: string[];
  switching: string;
  faq: Faq[];
  updated?: string;
};

function compare(c: Cmp): Article {
  const blocks: ArticleBlock[] = [
    { type: 'p', text: c.basis },
    { type: 'h2', text: 'Comparación punto por punto', id: 'comparacion' },
    { type: 'table', head: ['', 'Traviosoft', c.other], rows: c.rows },
    { type: 'h2', text: `Cuándo ${c.other} es la mejor opción`, id: 'cuando-otro' },
    { type: 'list', items: c.otherBetter },
    { type: 'h2', text: 'Cuándo encaja mejor Traviosoft', id: 'cuando-traviosoft' },
    { type: 'list', items: c.usBetter },
    { type: 'h2', text: 'Pasar a Traviosoft', id: 'cambiar' },
    { type: 'p', text: c.switching },
    { type: 'h2', text: 'Preguntas frecuentes', id: 'faq' },
    { type: 'faq', items: c.faq },
    { type: 'p', text: 'La [página Demo](/demo) describe la demo, hecha sobre un viaje de ejemplo.' }
  ];
  return {
    key: c.key,
    kind: 'compare',
    slug: c.slug,
    metaTitle: c.metaTitle,
    metaDescription: c.metaDescription,
    title: c.title,
    lead: c.lead,
    updated: c.updated ?? UPDATED,
    card: c.card,
    blocks
  };
}

const compares: Cmp[] = [
  {
    key: 'vs-excel',
    slug: 'traviosoft-vs-excel',
    other: 'Excel y Word',
    metaTitle: 'Traviosoft vs Excel y Word para agencias de viajes',
    metaDescription:
      'Excel y Word son el punto de partida de casi toda agencia. Comparamos presupuestos, márgenes, reservas y facturas para ver cuándo compensa un software de viajes.',
    title: 'Traviosoft frente a Excel y Word: cuándo dar el paso a un software de viajes',
    lead: 'Excel y Word son flexibles, conocidos y suficientes para muchas agencias que llevan pocos viajes al año. Cuando entran varias personas, temporadas de precios y facturas que numerar, un software pensado para viajes se encarga de ese trabajo por ti.',
    card: 'Hoja de cálculo o software: cuándo compensa cambiar y cuándo no.',
    basis:
      'Excel y Word son la herramienta con la que empieza casi toda agencia, y muchas viven bien con ellas durante años. Esta página muestra qué cambia cuando los viajes pasan a un software pensado para ellos. Los datos de Traviosoft son los de nuestro sitio a 3 de noviembre de 2026.',
    rows: [
      ['Pensado para', 'Viajes a medida: solicitudes, presupuestos, reservas y facturas', 'Cualquier tarea de hoja de cálculo y texto'],
      ['Precio', `Classic desde ${PRICES.classic.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos`, 'La licencia de Microsoft que ya tengas'],
      ['Margen y comisión', 'Reglas de precio definidas una vez; cada línea las aplica', 'Fórmulas que diseñas tú, con total libertad'],
      ['Temporadas y proveedores', 'Precios por periodo y varios proveedores por producto', 'Pestañas organizadas a tu manera'],
      ['Versiones del presupuesto', 'Cada versión queda guardada y se puede reabrir', 'Un archivo por versión'],
      ['Reservas a proveedores', 'Lista por viaje con estados que se actualizan', 'Una columna o un documento aparte'],
      ['Facturas', 'Desde el viaje, con numeración por empresa y notas de abono', 'Tu propia plantilla de factura'],
      ['Normas fiscales de España', 'Etiquetas REAV, activables por país', 'Configuradas en tu propia plantilla'],
      ['Itinerario para el cliente', 'Página para compartir, día a día, en su idioma', 'PDF o Word enviado por correo'],
      ['Datos', 'Un espacio propio para tu agencia, alojado en la UE', 'Los archivos, donde los guardes']
    ],
    otherBetter: [
      'Haces pocos viajes al año y los llevas tú solo. Un buen modelo de Excel te da todo lo que necesitas.',
      'Tu forma de trabajar es muy particular y una hoja de cálculo se adapta mejor que cualquier programa.',
      'No quieres cambiar nada ahora, por ejemplo en plena temporada alta. Cambiar a mitad de campaña es un riesgo.',
      'Necesitas un análisis puntual o un informe a medida. Excel sigue siendo la herramienta ideal, y Traviosoft exporta a Excel de todos modos.'
    ],
    usBetter: [
      'Trabajáis dos o más personas sobre los mismos clientes y viajes a la vez.',
      'Cuando un hotel cambia su precio, quieres ver qué presupuestos abiertos afecta y actualizarlos de una vez.',
      'Quieres que el margen y la comisión se apliquen siempre igual, a partir de reglas que defines una vez.',
      'Quieres que el presupuesto se convierta en factura, y en los archivos para tu gestor, sin volver a teclear.',
      'Facturas a clientes de otros países y necesitas documentos en español, inglés y francés.'
    ],
    switching:
      'Durante el alta, importamos tus productos, precios y proveedores desde tus hojas de cálculo, sin coste con pago anual. La [página Cambiar](/switch) describe los pasos, y la guía «De Excel a un software de agencia de viajes» describe lo que cambia.',
    faq: [
      { q: '¿Puedo seguir usando Excel junto a Traviosoft?', a: ['Sí. Puedes importar tus datos desde Excel y exportar un resumen en Excel o un zip con todas las facturas en PDF para tu gestor.'] },
      { q: '¿Qué pasa con las fórmulas de margen que ya tengo?', a: ['Se convierten en reglas de precio. En lugar de copiar la fórmula en cada archivo, la defines una vez y se aplica a cada línea de cada presupuesto.'] },
      { q: '¿Merece la pena para una agencia de una sola persona?', a: ['Depende del volumen. Si llevas pocos viajes y no necesitas facturas ni itinerarios compartidos, una hoja de cálculo puede bastar. Si los presupuestos te llevan horas cada semana, un software ya compensa.'] }
    ]
  },
  {
    key: 'vs-ezus',
    slug: 'traviosoft-vs-ezus',
    other: 'Ezus',
    metaTitle: 'Traviosoft vs Ezus: comparativa para DMC y receptivos',
    metaDescription:
      'Comparamos Traviosoft y Ezus: para quién es cada uno, precios publicados, idiomas y puesta en marcha, y en qué destaca cada uno para DMC y agencias a medida.',
    title: 'Traviosoft frente a Ezus: comparativa independiente para DMC y receptivos',
    lead: 'Ezus es un software francés para DMC muy consolidado, con muchos clientes, precios públicos y soporte en cinco idiomas. Traviosoft muestra un precio con usuarios incluidos y añade las etiquetas REAV para agencias en España.',
    card: 'Dos programas con precios públicos: para quién es cada uno y qué incluye.',
    basis:
      'Los datos de Ezus vienen de su sitio web y de directorios públicos, revisados el 3 de noviembre de 2026. Los precios cambian: comprueba siempre las páginas de precios actuales de ambos. Las cifras de clientes de Ezus son las que ellos publican.',
    rows: [
      ['Pensado para', 'Receptivos, DMC y agencias a medida', 'DMC, receptivos, turoperadores y agencias; FIT, grupos y MICE'],
      ['Precio publicado', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos`, 'Professional 75 EUR por usuario y mes (hasta 10 usuarios); Premium 100 EUR; Enterprise a consultar'],
      ['Puesta en marcha', 'Alta e importación sin coste con pago anual', 'Pack de onboarding de 1.990 EUR con implantación guiada; importación de datos 390 EUR'],
      ['Idiomas', 'Documentos en español, catalán, inglés, francés e italiano', 'Web y soporte en 5 idiomas: EN, FR, ES, IT, PT'],
      ['Alojamiento de datos', 'UE, un espacio propio por agencia', 'AWS Irlanda, según su web']
    ],
    otherBetter: [
      'Quieres un producto con más años en el mercado y muchas referencias públicas: Ezus dice tener más de 600 agencias en más de 70 países.',
      'Necesitas soporte y documentación en italiano o portugués.',
      'Valoras una implantación guiada, con especialista asignado durante varios meses.',
      'Necesitas un plan Enterprise: Ezus lo ofrece desde 30 usuarios.',
      'Quieres zona de cliente, portal de pago y páginas web dentro del mismo programa, tal como los describe Ezus.'
    ],
    usBetter: [
      'Quieres un único precio con usuarios incluidos, y alta e importación incluidas con el pago anual.',
      'Tu agencia está en España y quieres etiquetas REAV en tus facturas.',
      'Trabajas sobre todo en español y francés y quieres que documentos y plantillas de correo salgan en el idioma del cliente.',
      'Prefieres una herramienta construida alrededor del flujo de un viaje: solicitud, presupuesto con margen, reserva, cobro y factura.'
    ],
    switching:
      'Si pasas de Ezus a Traviosoft, importamos tus productos, precios y proveedores desde tus hojas de cálculo durante el alta, sin coste con pago anual. La [página Cambiar](/switch) describe los pasos.',
    faq: [
      { q: '¿Cómo es el precio de cada uno?', a: [`Traviosoft Classic cuesta ${PRICES.classic.yearly} EUR al mes con pago anual, ${PRICES.usersIncluded} usuarios incluidos, con alta e importación incluidas. Ezus Professional cuesta 75 EUR por usuario y mes, con un pack de onboarding de 1.990 EUR que incluye una implantación guiada. Comprueba las páginas de precios actuales de los dos.`] },
      { q: '¿Ezus sirve para España?', a: ['Sí. Ezus tiene web y soporte en español. Traviosoft incluye además etiquetas REAV para agencias en España.'] },
      { q: '¿Puedo probar los dos?', a: ['Los dos trabajan con demostración.'] }
    ]
  },
  {
    key: 'vs-giav',
    slug: 'traviosoft-vs-giav',
    other: 'GIAV',
    metaTitle: 'Traviosoft vs GIAV: gestión de agencias de viajes',
    metaDescription:
      'GIAV es un software español con larga trayectoria para agencias de viajes. Comparamos su enfoque con el de Traviosoft para receptivos y viajes a medida.',
    title: 'Traviosoft frente a GIAV: dos formas de gestionar una agencia de viajes',
    lead: 'GIAV es un programa de gestión para agencias de viajes con muchos años en España y una larga trayectoria con agencias minoristas. Traviosoft está pensado para receptivos y viajes a medida. Si vendes sobre todo viajes de catálogo, GIAV puede encajar mejor.',
    card: 'Un programa con larga trayectoria para agencias minoristas y otro para viajes a medida y receptivos.',
    basis:
      'Los datos de GIAV vienen de directorios y prensa del sector. GIAV presenta sus precios y planes en una demostración, así que describimos su enfoque. Los datos de Traviosoft son los de nuestro sitio a 3 de noviembre de 2026.',
    rows: [
      ['Pensado para', 'Receptivos, DMC y agencias a medida', 'Gestión de agencias de viajes en España, sobre todo minoristas'],
      ['Precio', `Classic desde ${PRICES.classic.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos`, 'A consultar'],
      ['Conocido por', 'Presupuestos con margen por línea, catálogo por temporadas, página de itinerario para el cliente y REAV', 'Una larga trayectoria con agencias de viajes en España']
    ],
    otherBetter: [
      'Eres una agencia minorista que vende billetes, hoteles y paquetes de mayoristas. Un programa pensado para ese trabajo suele encajar mejor.',
      'Tu equipo y tu gestor ya conocen GIAV y tienes procesos montados durante años.',
      'Valoras un producto con larga trayectoria en el mercado español.',
      'Necesitas funciones contables o de integración con tu gestoría que ya tienes resueltas con ellos.'
    ],
    usBetter: [
      'Diseñas viajes a medida o recibes viajeros de fuera, y cada presupuesto se calcula servicio a servicio con tarifas netas.',
      'Necesitas precios por temporada y varios proveedores para un mismo servicio.',
      'Quieres enviar al cliente una página de propuesta e itinerario en su idioma, con tu marca.',
      'Quieres ver en la web el precio y lo que incluye cada plan.'
    ],
    switching:
      'Si pasas de GIAV a Traviosoft, importamos tus productos, precios y proveedores desde tus hojas de cálculo durante el alta, sin coste con pago anual. La [página Cambiar](/switch) describe los pasos.',
    faq: [
      { q: '¿Puedo importar los datos desde GIAV?', a: ['Importamos productos, precios y proveedores desde hojas de cálculo. Si exportas tus datos de GIAV a una hoja de cálculo, puedes traerlos así.'] },
      { q: '¿Sirve Traviosoft para una agencia minorista?', a: ['Está pensado para agencias que diseñan y venden viajes a medida.'] },
      { q: '¿Cómo es el precio de GIAV?', a: ['GIAV presenta sus precios en una demostración.'] }
    ]
  },
  {
    key: 'vs-holded',
    slug: 'traviosoft-vs-holded',
    other: 'Holded',
    metaTitle: 'Traviosoft vs Holded para agencias de viajes',
    metaDescription:
      'Holded es un software de gestión para pymes; Traviosoft está pensado para viajes. En qué se centra cada uno y cómo una agencia puede usar los dos a la vez.',
    title: 'Traviosoft frente a Holded: software de viajes o ERP general',
    lead: 'Holded es un programa de facturación, contabilidad y gestión para pymes, muy extendido en España. Traviosoft está construido alrededor del viaje. Muchas agencias usan los dos: Traviosoft para los viajes y Holded para la empresa.',
    card: 'Un ERP general para pymes y un software de viajes: qué hace cada uno.',
    basis:
      'Los datos de Holded vienen de su web y de su página de turismo y viajes, revisadas el 9 de noviembre de 2026. Holded cambia sus planes y promociones con frecuencia: comprueba su página de precios. Los dos programas se centran en trabajos distintos, así que la pregunta suele ser cómo combinarlos.',
    rows: [
      ['Pensado para', 'Receptivos, DMC y agencias a medida', 'Autónomos y pymes de cualquier sector, de 1 a más de 100 personas'],
      ['Precio publicado', `Classic desde ${PRICES.classic.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos`, 'Básico 34 EUR (2 usuarios), Estándar 69 EUR (4), Avanzado 115 EUR (7), Premium 229 EUR (15), sin IVA; con descuentos temporales'],
      ['Enfoque principal', 'El viaje: solicitudes, presupuestos con margen, reservas, itinerario, cobros y facturas', 'La empresa: facturación, contabilidad, nóminas y bancos'],
      ['Contabilidad, nóminas y bancos', 'Prepara los archivos para tu gestor', 'Su núcleo: contabilidad, nóminas y conciliación bancaria']
    ],
    otherBetter: [
      'Necesitas contabilidad, tesorería, nóminas o conciliación bancaria en el mismo programa.',
      'Tu agencia es una parte pequeña de un negocio mayor y quieres un único sistema para todo.',
      'Tu gestoría ya trabaja con Holded y prefiere recibir todo allí.',
      'Facturas en varias divisas y quieres un control de tesorería general.'
    ],
    usBetter: [
      'Tu trabajo diario es calcular, enviar y hacer seguimiento de presupuestos de viaje con margen.',
      'Necesitas un catálogo con precios por temporada y varios proveedores por servicio.',
      'Quieres lista de reservas por viaje, hojas de servicio e itinerario para el cliente.',
      'Tu agencia aplica REAV y quieres las etiquetas en cada factura de forma automática.'
    ],
    switching:
      'Traviosoft lleva el viaje, de la solicitud a la factura, y exporta un resumen en Excel o un zip de facturas en PDF, que un gestor puede llevar a Holded o a otro programa de contabilidad. La [página Cambiar](/switch) describe los pasos.',
    faq: [
      { q: '¿Tengo que dejar Holded para usar Traviosoft?', a: ['No necesariamente. Muchas agencias mantienen su contabilidad donde está. Lo importante es emitir cada factura en un solo sitio y acordar con tu gestor cómo recibe los datos.'] },
      { q: '¿Pueden trabajar juntos Holded y Traviosoft?', a: ['Sí. Traviosoft lleva el viaje y sus facturas, y exporta un resumen en Excel o un zip de facturas en PDF que tu gestor puede llevar a Holded o a cualquier otro programa de contabilidad.'] },
      { q: '¿Traviosoft hace contabilidad?', a: ['No. Gestiona el viaje, los cobros y las facturas, y prepara los archivos para tu gestor. La contabilidad sigue en tu gestoría o en el programa que uses.'] }
    ]
  },
  {
    key: 'vs-lemax',
    slug: 'traviosoft-vs-lemax',
    other: 'Lemax',
    metaTitle: 'Traviosoft vs Lemax: software para DMC y turoperadores',
    metaDescription:
      'Lemax es un software croata para turoperadores y DMC medianos y grandes. Comparamos para quién es cada uno, tamaño de equipo, precio y enfoque.',
    title: 'Traviosoft frente a Lemax: dos programas de gestión completos',
    lead: 'Lemax es un software con más de 30 años, pensado para turoperadores y DMC medianos y grandes; su paquete Lemax GO está diseñado para equipos desde 15 usuarios, con precio acordado con cada cliente. Traviosoft cubre todo el viaje, de la primera solicitud a la última factura, con documentos en cinco idiomas y precio publicado.',
    card: 'Dos sistemas completos: una plataforma consolidada y un solo flujo de la solicitud a la factura con precio publicado.',
    basis:
      'Los datos de Lemax vienen de su sitio web y de prensa del sector, revisados el 3 de noviembre de 2026. Lemax acuerda el precio con cada cliente: lo indicamos como "A consultar". Sus cifras de clientes son las que ellos muestran.',
    rows: [
      ['Pensado para', 'Receptivos, DMC y agencias a medida', 'Turoperadores y DMC medianos y grandes'],
      ['Tamaño de equipo', `Dos planes, ${PRICES.usersIncluded} usuarios incluidos`, 'Lemax GO desde 15 usuarios'],
      ['Precio', `Classic desde ${PRICES.classic.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos`, 'A consultar; se acuerda con cada cliente antes de firmar'],
      ['Implantación', 'Alta e importación sin coste con pago anual', 'Dicen "en producción en 90 días" para Lemax GO'],
      ['Distribución y conexiones', 'Conexiones con tu web y tu contabilidad (Premium) y con tus herramientas de IA (los dos planes)', 'Conexión con proveedores, API de reservas, portal B2B, según su web']
    ],
    otherBetter: [
      'Eres un turoperador o un DMC con un equipo de 15 o más personas y procesos complejos de varios días.',
      'Necesitas distribución, conexión con proveedores por API, un portal B2B para agencias o un motor de reservas online.',
      'Buscas un proveedor con más de 30 años y con clientes en varios continentes.',
      'Quieres un proyecto de implantación guiado.'
    ],
    usBetter: [
      'Quieres presupuestar, reservar y facturar todo el viaje en un solo sistema y arrancar con una puesta en marcha corta.',
      'Quieres ver el precio y los usuarios incluidos antes de pedir una demostración.',
      'Tu mercado es España y vendes en español y francés, con REAV.',
      'Quieres que importemos tus productos, precios y proveedores desde tus hojas de cálculo durante la puesta en marcha.'
    ],
    switching:
      'Si pasas de Lemax a Traviosoft, importamos tus productos, precios y proveedores desde tus hojas de cálculo durante el alta, sin coste con pago anual. La [página Cambiar](/switch) describe los pasos.',
    faq: [
      { q: '¿Para quién es Lemax GO?', a: ['Para equipos de 15 usuarios o más, según su web, con una implantación que describen como "en producción en 90 días".'] },
      { q: '¿Cómo es el precio de Lemax?', a: ['Lemax acuerda el precio del paquete y de la implantación con cada cliente antes de firmar.'] },
      { q: '¿Traviosoft se conecta con mis otras herramientas?', a: ['Sí, en Premium. Tu web, tu programa de contabilidad o un desarrollador con el que trabajes pueden leer y escribir tus datos de Traviosoft, y puedes conectar el asistente de IA que ya usas.'] }
    ]
  },
  {
    key: 'vs-tourwriter',
    slug: 'traviosoft-vs-tourwriter',
    other: 'Tourwriter',
    metaTitle: 'Traviosoft vs Tourwriter para DMC y diseñadores de viaje',
    metaDescription:
      'Tourwriter es un software neozelandés para DMC de lujo y diseñadores de viajes. Comparamos para quién es cada uno, planes, precios, idiomas y en qué destaca cada uno.',
    title: 'Traviosoft frente a Tourwriter: dos programas para diseñar viajes',
    lead: 'Tourwriter es un software neozelandés conocido por sus itinerarios muy cuidados, pensado para DMC y diseñadores de viajes de lujo que trabajan en inglés. Traviosoft tiene precios en euros con usuarios incluidos, trabaja en español y francés, e incluye REAV.',
    card: 'Itinerarios de lujo muy cuidados en inglés y un programa en euros, en español y francés.',
    basis:
      'Los datos de Tourwriter vienen de su web (páginas de planes y empresa), revisados el 3 de noviembre de 2026. Sus precios son "desde", en dólares, por usuario, con un presupuesto para cada equipo: el total real puede variar.',
    rows: [
      ['Pensado para', 'Receptivos, DMC y agencias a medida', 'DMC y diseñadores de viajes de lujo, viajes FIT de varios días'],
      ['Precio publicado', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos`, 'Starter desde 99 USD por usuario y mes; Pro desde 149 USD; Premium a consultar'],
      ['Puesta en marcha', 'Alta e importación sin coste con pago anual', 'Pago único desde 1.199 USD, que incluye migración, configuración y formación'],
      ['Idiomas', 'Documentos en español, catalán, inglés, francés e italiano', 'Inglés']
    ],
    otherBetter: [
      'Vendes viajes de lujo en inglés y quieres itinerarios con un diseño muy trabajado.',
      'Valoras que otros DMC europeos ya lo usan.',
      'Quieres una incorporación guiada con formación incluida en el pago de puesta en marcha.',
      'Tu mercado principal es anglosajón.'
    ],
    usBetter: [
      'Quieres un precio en euros, con los usuarios incluidos en cada plan.',
      'Tu agencia está en España y quieres REAV integrado.',
      'Tus clientes hablan español o francés y quieres que presupuestos y correos salgan en su idioma.',
      'Quieres el alta y la importación incluidas con el pago anual.'
    ],
    switching:
      'Si pasas de Tourwriter a Traviosoft, importamos tus productos, precios y proveedores desde tus hojas de cálculo durante el alta, sin coste con pago anual. La [página Cambiar](/switch) describe los pasos.',
    faq: [
      { q: '¿Cómo es el precio de Tourwriter?', a: ['Sus planes empiezan en 99 USD por usuario y mes (Starter) y 149 USD (Pro), con un pago único de puesta en marcha desde 1.199 USD que incluye migración y formación. Preparan un presupuesto para cada equipo, así que confirma el total con ellos.'] },
      { q: '¿En qué idiomas trabaja cada uno?', a: ['Tourwriter trabaja en inglés. Traviosoft trabaja en español, inglés y francés, y envía los documentos en el idioma del cliente: español, catalán, inglés, francés o italiano.'] },
      { q: '¿Puedo probar los dos?', a: ['Los dos ofrecen demostración.'] }
    ]
  },
  {
    key: 'vs-tourplan',
    updated: '2026-11-14',
    slug: 'traviosoft-vs-tourplan',
    other: 'Tourplan',
    metaTitle: 'Traviosoft vs Tourplan para DMC y turoperadores',
    metaDescription:
      'Tourplan es un software para DMC y turoperadores, presente desde 1986. Comparamos para quién es cada uno, empresa, precio, puesta en marcha e idiomas.',
    title: 'Traviosoft frente a Tourplan: dos sistemas para DMC y turoperadores',
    lead: 'Tourplan hace software para DMC y turoperadores desde 1986, con ventas, reservas y gestión en un sistema modular que usan 450 empresas en 75 países. Traviosoft cubre todo el viaje, de la primera solicitud a la última factura, con documentos en cinco idiomas y un precio publicado.',
    card: 'Un sistema modular con 40 años de historia y un solo flujo de la solicitud a la factura, con precio publicado.',
    basis:
      'Los datos de Tourplan vienen de su web (inicio y página Sobre nosotros), revisados el 14 de noviembre de 2026. Su web no publica precios, así que escribimos "A consultar".',
    rows: [
      ['Pensado para', 'Receptivos, DMC y agencias a medida', 'DMC y turoperadores receptivos y emisores: FIT, grupos, MICE, a medida, circuitos'],
      ['Precio', `Classic desde ${PRICES.classic.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos`, 'A consultar'],
      ['Puesta en marcha', 'Alta e importación sin coste con pago anual', 'Alojamiento, instalación, gestión del proyecto, formación y soporte'],
      ['Distribución', 'Conexiones con tu web y tu contabilidad (Premium) y con tus herramientas de IA (los dos planes)', 'Canales de distribución web y XML, e interfaces en línea para agentes, clientes y proveedores']
    ],
    otherBetter: [
      'Quieres un sistema modular que cubra producto, presupuestos, reservas, contabilidad e informes de gestión, con 40 años de historia.',
      'Distribuyes tu producto por canales web y XML y quieres interfaces para agentes y proveedores.',
      'Valoras un proveedor que trabaja con 450 turoperadores y DMC en 75 países, con oficinas en cinco continentes.',
      'Quieres un proyecto acompañado, con instalación, gestión del proyecto y formación.'
    ],
    usBetter: [
      'Quieres presupuestar, reservar y facturar todo el viaje en un solo sistema, en marcha tras un alta corta.',
      'Quieres un precio publicado, con usuarios incluidos en cada plan.',
      'Tus clientes hablan español, francés, catalán o italiano y quieres documentos en su idioma.',
      'Quieres que importemos tus productos, precios y proveedores desde tus hojas de cálculo durante el alta.'
    ],
    switching:
      'Si pasas de Tourplan a Traviosoft, importamos tus productos, precios y proveedores desde tus hojas de cálculo durante el alta, sin coste con pago anual. La [página Cambiar](/switch) describe los pasos.',
    faq: [
      { q: '¿Para quién es Tourplan?', a: ['Según su web, para DMC y turoperadores receptivos y emisores: FIT, grupos, MICE, a medida, circuitos regulares y especializados.'] },
      { q: '¿Cuánto cuesta Tourplan?', a: ['Su web no publica precios.'] },
      { q: '¿Puedo probar los dos?', a: ['Los dos ofrecen una demo.'] }
    ]
  },
  {
    key: 'vs-kaptio',
    updated: '2026-11-14',
    slug: 'traviosoft-vs-kaptio',
    other: 'Kaptio',
    metaTitle: 'Traviosoft vs Kaptio para turoperadores y viajes a medida',
    metaDescription:
      'Kaptio es un software para viajes de varios días: cruceros, tren, circuitos en grupo y a medida. Comparamos para quién es cada uno, empresa, precio y puesta en marcha.',
    title: 'Traviosoft frente a Kaptio: dos sistemas para viajes de varios días',
    lead: 'Kaptio, fundado en Reikiavik en 2012, reúne gestión de clientes, contratos, tarifas, inventario, reservas, pagos y operaciones para cruceros, tren, circuitos en grupo y viajes a medida. Traviosoft cubre todo el viaje, de la primera solicitud a la última factura, con documentos en cinco idiomas y un precio publicado.',
    card: 'Una plataforma para viajes de varios días y un solo flujo de la solicitud a la factura, con precio publicado.',
    basis:
      'Los datos de Kaptio vienen de su web (inicio, plataforma y Sobre nosotros), revisados el 14 de noviembre de 2026. Su web no publica precios, así que escribimos "A consultar".',
    rows: [
      ['Pensado para', 'Receptivos, DMC y agencias a medida', 'Viajes de varios días: cruceros, tren, circuitos en grupo y a medida'],
      ['Precio', `Classic desde ${PRICES.classic.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos`, 'A consultar'],
      ['Puesta en marcha', 'Alta e importación sin coste con pago anual', 'Empieza con un taller de descubrimiento'],
      ['Módulos', 'Solicitudes, presupuestos, reservas, facturas y pagos en un solo flujo', 'Kaptio CRM, Kaptio Travel y Kaptio Edge']
    ],
    otherBetter: [
      'Vendes cruceros, tren o circuitos en grupo y quieres gestión de clientes, contratos, inventario y operaciones en una misma plataforma.',
      'Quieres empezar con un taller de descubrimiento sobre tus procesos.',
      'Quieres los asistentes de IA que presenta como parte de la plataforma.'
    ],
    usBetter: [
      'Montas viajes a medida y quieres presupuestarlos, reservarlos y facturarlos en un solo sistema, en marcha tras un alta corta.',
      'Quieres un precio publicado, con usuarios incluidos en cada plan.',
      'Tus clientes hablan español, francés, catalán o italiano y quieres documentos en su idioma.',
      'Quieres que importemos tus productos, precios y proveedores desde tus hojas de cálculo durante el alta.'
    ],
    switching:
      'Si pasas de Kaptio a Traviosoft, importamos tus productos, precios y proveedores desde tus hojas de cálculo durante el alta, sin coste con pago anual. La [página Cambiar](/switch) describe los pasos.',
    faq: [
      { q: '¿Para quién es Kaptio?', a: ['Según su web, para empresas que venden viajes de varios días: cruceros, tren, circuitos en grupo y viajes a medida.'] },
      { q: '¿Cuánto cuesta Kaptio?', a: ['Su web no publica precios.'] },
      { q: '¿Puedo probar los dos?', a: ['Kaptio empieza con un taller de descubrimiento y Traviosoft con una demo sobre un viaje de ejemplo.'] }
    ]
  },
  {
    key: 'vs-tourcms',
    updated: '2026-11-14',
    slug: 'traviosoft-vs-tourcms',
    other: 'TourCMS',
    metaTitle: 'Traviosoft vs TourCMS: viajes a medida o excursiones y actividades',
    metaDescription:
      'TourCMS es un software de reservas y gestión de canales para operadores de excursiones y actividades. Comparamos para quién es cada uno, empresa, precios publicados e idiomas.',
    title: 'Traviosoft frente a TourCMS: viajes a medida, excursiones y actividades',
    lead: 'TourCMS, gestionado por Palisis en Suiza, ofrece desde 2003 reservas, distribución y gestión de canales a operadores de excursiones y actividades. Traviosoft está pensado para viajes a medida, de la primera solicitud a la última factura, con documentos en cinco idiomas.',
    card: 'Reservas y gestión de canales para excursiones y actividades, y un solo flujo para viajes a medida.',
    basis:
      'Los datos de TourCMS vienen de su web (inicio, funciones y precios), revisados el 14 de noviembre de 2026. Sus precios están en dólares estadounidenses.',
    rows: [
      ['Pensado para', 'Receptivos, DMC y agencias a medida', 'Operadores de excursiones y actividades: excursiones de un día, circuitos, atracciones, DMC'],
      ['Precio publicado', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos`, 'De 49 USD al mes (2 usuarios) a 569 USD al mes (500 usuarios); reservas de socios conectados desde el 1,9 % por transacción'],
      ['Puesta en marcha', 'Alta e importación sin coste con pago anual', 'Prueba gratuita, sin coste de alta'],
      ['Idiomas', 'Documentos en español, catalán, inglés, francés e italiano', 'Contenidos en 22 idiomas']
    ],
    otherBetter: [
      'Ofreces excursiones o actividades, con salidas vendidas en línea y por revendedores.',
      'Quieres gestión de canales y un mercado de agentes, que anuncia con más de 30.000.',
      'Quieres empezar con una prueba gratuita.'
    ],
    usBetter: [
      'Montas viajes a medida, cada uno presupuestado con tu margen y tu comisión.',
      'Quieres que las reservas a proveedores y las facturas salgan del mismo viaje.',
      'Tus clientes hablan español, francés, catalán o italiano y quieres documentos en su idioma.',
      'Quieres que importemos tus productos, precios y proveedores desde tus hojas de cálculo durante el alta.'
    ],
    switching:
      'Si pasas de TourCMS a Traviosoft, importamos tus productos, precios y proveedores desde tus hojas de cálculo durante el alta, sin coste con pago anual. La [página Cambiar](/switch) describe los pasos.',
    faq: [
      { q: '¿Para quién es TourCMS?', a: ['Según su web, para operadores de excursiones y actividades: excursiones de un día, autobuses turísticos, atracciones, circuitos de varios días, DMC y visitas a pie.'] },
      { q: '¿Cuánto cuesta TourCMS?', a: ['Su página de precios muestra cuatro planes, de 49 USD al mes (Small) a 569 USD al mes (Enterprise), con opción anual, más una comisión desde el 1,9 % en las reservas de socios conectados.'] },
      { q: '¿Puedo probar los dos?', a: ['TourCMS ofrece una prueba gratuita y Traviosoft una demo sobre un viaje de ejemplo.'] }
    ]
  }
];

const comparisons: Article[] = compares.map(compare);

const best: Article = {
  key: 'best-dmc-software',
  kind: 'best',
  slug: 'mejor-software-dmc-receptivos',
  metaTitle: 'Mejor software para DMC y receptivos en España (2026)',
  metaDescription:
    'Comparativa independiente de Traviosoft, Ezus, Tourplan, Tourwriter, Lemax, Kaptio, GIAV y Excel: para quién es cada uno, precios publicados, idiomas y puntos fuertes.',
  title: 'Mejor software para DMC y receptivos en España (2026)',
  lead: 'Para un DMC, receptivo o agencia a medida en España, las opciones son Traviosoft, Ezus, Tourplan, Tourwriter, Lemax, Kaptio y GIAV; muchas agencias empiezan también con Excel y Word. Esta guía los compara con datos públicos: para quién es cada uno, precio, idiomas y en qué destaca cada uno.',
  updated: UPDATED,
  card: 'Ocho opciones comparadas: para quién es cada una, precios publicados, idiomas y puntos fuertes.',
  blocks: [
    {
      type: 'p',
      text: 'La lista la escribe Traviosoft, así que nos ceñimos a datos públicos, indicamos "A consultar" cuando un proveedor presenta sus precios en una demostración y decimos en qué destaca cada programa. Datos revisados el 3 de noviembre de 2026; los precios cambian, comprueba siempre las páginas oficiales.'
    },
    { type: 'h2', text: 'Tabla comparativa', id: 'tabla' },
    {
      type: 'table',
      head: ['Programa', 'Para quién es', 'Tamaño de equipo', 'Precio', 'Idiomas', 'Fundación'],
      usRow: 0,
      rows: [
        ['Traviosoft', 'Receptivos, DMC y agencias a medida', `Dos planes, ${PRICES.usersIncluded} usuarios incluidos`, `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos`, 'Documentos en ES, CA, EN, FR e IT', 'Ver Sobre nosotros'],
        ['Ezus', 'DMC, receptivos, turoperadores y agencias', 'Professional hasta 10 usuarios; Enterprise desde 30', '75 EUR por usuario y mes (Professional); pack de onboarding 1.990 EUR', 'Web y soporte en EN, FR, ES, IT, PT', '2019, París'],
        ['Tourplan', 'Turoperadores y DMC consolidados', 'A consultar', 'A consultar', 'Web en inglés, español y japonés', '1986, Nueva Zelanda'],
        ['Tourwriter', 'DMC y diseñadores de viajes de lujo', 'De 1 a más de 20 personas según plan', 'Desde 99 USD por usuario y mes; puesta en marcha desde 1.199 USD', 'Inglés', '2004, Nueva Zelanda'],
        ['Lemax', 'Turoperadores y DMC medianos y grandes', 'Lemax GO desde 15 usuarios', 'A consultar', 'Inglés', '1990, Croacia'],
        ['Kaptio', 'Operadores grandes de viajes de varios días', 'Grandes operadores', 'A consultar', 'Inglés', '2012, Islandia'],
        ['GIAV', 'Agencias de viajes en España, con larga trayectoria en minoristas', 'A consultar', 'A consultar', 'Español', 'Muchos años en España'],
        ['Excel + Word', 'Cualquier agencia que empieza', 'Una a tres personas en la práctica', 'La licencia que ya tengas', 'El que tú escribas', '1985 (Excel)']
      ]
    },
    { type: 'h2', text: 'Cada programa y en qué destaca', id: 'programas' },
    { type: 'h3', text: 'Traviosoft' },
    {
      type: 'p',
      text: 'Cubre el viaje entero: solicitudes, catálogo con precios por temporada, presupuestos con margen y comisión, reservas, cobros y facturas, con REAV para España. Muestra el precio, y el alta y la importación están incluidas con el pago anual.'
    },
    { type: 'h3', text: 'Ezus' },
    {
      type: 'p',
      text: 'Un software completo para DMC, con precios públicos, web y soporte en cinco idiomas y muchas referencias: más de 600 agencias en más de 70 países, según su web. Su pack de onboarding de 1.990 EUR incluye una implantación guiada.'
    },
    { type: 'h3', text: 'Tourplan' },
    {
      type: 'p',
      text: 'Software con unos 40 años de historia para turoperadores y DMC consolidados, con clientes en unos 75 países según su web. Precios y planes a consultar.'
    },
    { type: 'h3', text: 'Tourwriter' },
    {
      type: 'p',
      text: 'Conocido por sus itinerarios de lujo muy cuidados, usado por DMC y diseñadores de viajes de muchos países. Sus planes tienen precio por usuario, con una puesta en marcha que incluye migración y formación.'
    },
    { type: 'h3', text: 'Lemax' },
    {
      type: 'p',
      text: 'Plataforma completa para turoperadores y DMC medianos y grandes, con distribución, API de reservas y portal B2B. Lemax GO está diseñado para equipos desde 15 usuarios, y el precio se acuerda con cada cliente.'
    },
    { type: 'h3', text: 'Kaptio' },
    {
      type: 'p',
      text: 'Plataforma construida sobre Salesforce para operadores grandes de viajes de varios días; sus clientes citados en prensa incluyen grupos internacionales conocidos. Se vende a través de un taller de descubrimiento, con precio a consultar.'
    },
    { type: 'h3', text: 'GIAV' },
    {
      type: 'p',
      text: 'Programa de gestión para agencias de viajes con larga presencia en España, sobre todo entre agencias minoristas. Presenta precios y funciones en una demostración.'
    },
    { type: 'h3', text: 'Excel + Word' },
    {
      type: 'p',
      text: 'Gratis si ya tienes la licencia, flexible y conocido por todos. Muchas agencias empiezan aquí y pasan a un software específico cuando crecen sus viajes y su equipo.'
    },
    { type: 'h2', text: 'Lo que cambia entre las opciones', id: 'elegir' },
    { type: 'list', items: [
      'Las opciones se diferencian en el mínimo de usuarios y en lo que incluye cada plan.',
      'El coste del primer año puede incluir, además de la cuota mensual, la puesta en marcha y la importación de datos, según el proveedor.',
      'El idioma de los documentos que recibe el cliente puede ser distinto del de las pantallas.',
      'Las reglas de facturación dependen del país; las páginas «Facturar en tu país» describen varios.',
      'Algunos proveedores publican sus precios; otros los presentan en una demostración.'
    ] },
    { type: 'h2', text: 'Preguntas frecuentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: '¿Cuál es el mejor software para un DMC o agencia a medida en España?', a: ['Depende de la forma de trabajar de la agencia y de su mercado. La tabla de arriba muestra para quién es cada programa, su precio y sus idiomas.'] },
        { q: '¿Cuánto cuesta un software para DMC?', a: [`Los precios publicados van de ${PRICES.classic.yearly} EUR al mes para ${PRICES.usersIncluded} usuarios (Traviosoft Classic) a 75 EUR por usuario y mes más un pack de onboarding de 1.990 EUR (Ezus). Tourplan, Lemax y Kaptio dan sus precios a consultar.`] },
        { q: '¿Necesito un programa específico de viajes o me vale un ERP general?', a: ['Un ERP general está pensado para la contabilidad; un software de viajes añade presupuestos con margen por servicio y una lista de reservas por viaje. Muchas agencias usan los dos.'] }
      ]
    },
    { type: 'p', text: 'La [página Demo](/demo) describe la demo, hecha sobre un viaje de ejemplo.' }
  ]
};

const quote: Article = {
  key: 'quote-with-margins',
  kind: 'guide',
  slug: 'presupuesto-viaje-a-medida-con-margen',
  metaTitle: 'Cómo se calcula el precio de un viaje a medida: margen y comisión',
  metaDescription:
    'Cómo se calcula el precio de un viaje a medida a partir de las tarifas netas, con un margen sobre el precio de venta y una comisión, con un ejemplo en cifras.',
  title: 'Cómo se calcula el precio de un viaje a medida',
  lead: 'El precio de un viaje a medida se construye con tres importes: lo que cobran los proveedores (las tarifas netas), lo que gana la agencia (el margen) y, cuando otra agencia vende el viaje, su comisión. Esta página muestra el cálculo con un ejemplo.',
  updated: '2026-11-14',
  card: 'Tarifas netas, margen sobre el precio de venta y comisión, calculados con un ejemplo.',
  blocks: [
    { type: 'h2', text: 'Recargo y margen para un mismo coste', id: 'conceptos' },
    {
      type: 'p',
      text: 'El recargo se calcula sobre el coste y el margen sobre el precio de venta, así que un mismo importe ganado da dos porcentajes distintos. Para un coste de 1.000 EUR:'
    },
    {
      type: 'table',
      head: ['Recargo sobre el coste', 'Precio de venta', 'Importe ganado', 'Margen sobre el precio'],
      rows: [
        ['20 %', '1.200,00 EUR', '200,00 EUR', '16,7 %'],
        ['25 %', '1.250,00 EUR', '250,00 EUR', '20,0 %'],
        ['33,3 %', '1.333,33 EUR', '333,33 EUR', '25,0 %'],
        ['50 %', '1.500,00 EUR', '500,00 EUR', '33,3 %']
      ]
    },
    { type: 'h2', text: 'Ejemplo: 4 noches en Andalucía para 2 personas', id: 'ejemplo' },
    {
      type: 'table',
      head: ['Servicio', 'Cálculo', 'Coste neto'],
      rows: [
        ['Hotel, habitación doble', '4 noches x 100 EUR', '400 EUR'],
        ['Traslados privados', '2 traslados x 60 EUR', '120 EUR'],
        ['Guía', '2 días x 150 EUR', '300 EUR'],
        ['Clase de cocina', '2 personas x 40 EUR', '80 EUR'],
        ['Entradas', '2 personas x 50 EUR', '100 EUR'],
        ['Total neto', '', '1.000 EUR']
      ]
    },
    {
      type: 'p',
      text: 'Con un margen del 25 % sobre el precio de venta, el precio es 1.000 ÷ (1 − 0,25) = 1.333,33 EUR, es decir 666,67 EUR por persona. El margen es de 333,33 EUR. Un recargo del 25 % sobre el coste daría 1.250 EUR, que es un margen del 20 %.'
    },
    { type: 'h2', text: 'Con una comisión', id: 'comision' },
    {
      type: 'p',
      text: 'Cuando otra agencia vende el viaje con un 10 % de comisión sobre el precio, la comisión sale de ese mismo precio. A 1.333,33 EUR, la comisión es de 133,33 EUR y el margen baja a 200 EUR, un 15 %. Para mantener un 25 % de margen, la comisión entra en el divisor: 1.000 ÷ (1 − 0,25 − 0,10) = 1.538,46 EUR.'
    },
    {
      type: 'list',
      items: [
        'Precio para el cliente: 1.538,46 EUR (769,23 EUR por persona).',
        'Comisión del 10 %: 153,85 EUR.',
        'Margen del 25 %: 384,62 EUR.',
        'Coste neto: 1.000,00 EUR. (Los importes están redondeados al céntimo.)'
      ]
    },
    { type: 'h2', text: 'Los impuestos', id: 'impuestos' },
    {
      type: 'p',
      text: 'Los importes anteriores son sin impuestos. Cómo se aplica el IVA a un viaje depende del país y del régimen de la agencia; las páginas «Facturar en tu país» describen varios países.'
    },
    { type: 'h2', text: 'En Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'En Traviosoft, las reglas de precio (margen, IVA y comisión) se definen una vez, y cada línea de cada presupuesto las sigue, con el precio por persona y el total que ve el cliente.'
    },
    { type: 'h2', text: 'Preguntas', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: '¿El margen se fija por servicio o por viaje?', a: ['Existen las dos formas. Algunas agencias aplican un margen a todo el viaje y otras un margen distinto por tipo de servicio.'] },
        { q: '¿Por qué la comisión va en el divisor?', a: ['Porque la comisión es un porcentaje del precio de venta, como el margen. Ponerlas las dos en el divisor da un precio en el que cada una mantiene su porcentaje.'] }
      ]
    }
  ]
};

const rooming: Article = {
  key: 'rooming-list',
  kind: 'guide',
  slug: 'rooming-list-grupos-mice',
  metaTitle: 'Rooming list para grupos y MICE: qué es y qué contiene',
  metaDescription:
    'Qué es una rooming list en los viajes de grupo y el MICE, la información que suele contener, un ejemplo y para qué la usa el hotel.',
  title: 'La rooming list para grupos y MICE',
  lead: 'Una rooming list indica al hotel quién duerme en cada habitación de un grupo, con el tipo de habitación, las fechas y las peticiones especiales. El hotel la usa para asignar las habitaciones del cupo que reserva al grupo.',
  updated: '2026-11-14',
  card: 'Qué es una rooming list, sus columnas habituales y un ejemplo.',
  blocks: [
    {
      type: 'p',
      text: 'Para un grupo, el hotel bloquea un cupo de habitaciones con un contrato. La rooming list dice cómo se reparten esas habitaciones entre los participantes. El contrato suele fijar la fecha en que el hotel espera la lista y la fecha en que se liberan las habitaciones del cupo que no se usan.'
    },
    { type: 'h2', text: 'Las columnas habituales', id: 'columnas' },
    {
      type: 'table',
      head: ['Columna', 'Contenido', 'Ejemplo'],
      rows: [
        ['N.º de habitación', 'Un número correlativo; el hotel asigna el real', '1'],
        ['Tipo de habitación', 'Individual, doble, twin o triple', 'Twin'],
        ['Huésped 1', 'Nombre completo como en el documento de viaje', 'Marta Ruiz Soler'],
        ['Huésped 2', 'Igual, si comparte', 'Pedro Vidal Mas'],
        ['Entrada', 'Fecha de llegada', '12/05/2027'],
        ['Salida', 'Fecha de salida', '15/05/2027'],
        ['Noches', 'Calculadas a partir de las fechas', '3'],
        ['Régimen', 'Solo alojamiento, desayuno, media pensión', 'Desayuno'],
        ['Llegada', 'Hora o vuelo', 'Vuelo 10:40'],
        ['Peticiones', 'Dietas, accesibilidad, cama supletoria', 'Sin gluten'],
        ['Empresa o grupo', 'Cuando hay varias facturas', 'Equipo comercial']
      ]
    },
    {
      type: 'p',
      text: 'Un ejemplo de tamaño: un grupo de 22 personas en 9 habitaciones twin (18 personas) y 4 individuales ocupa 13 habitaciones. El total de personas de la lista coincide con el grupo.'
    },
    { type: 'h2', text: 'Quién aparece', id: 'quien' },
    {
      type: 'p',
      text: 'Además de los participantes, la rooming list de un grupo suele incluir a quienes viajan con él, como el guía, el conductor o el organizador, cuando se alojan en el mismo hotel.'
    },
    { type: 'h2', text: 'Las versiones', id: 'versiones' },
    {
      type: 'p',
      text: 'Una rooming list cambia a medida que los participantes confirman, cancelan o cambian de habitación. Cada versión enviada al hotel suele llevar su fecha, para que las dos partes trabajen con la misma lista.'
    },
    { type: 'h2', text: 'En Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'En Traviosoft, la rooming list de cada hotel se construye a partir de quién comparte con quién, lista para enviar en PDF o en hoja de cálculo.'
    },
    { type: 'h2', text: 'Preguntas', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: '¿La rooming list es solo para grupos grandes?', a: ['No. Se usa siempre que un hotel necesita saber quién duerme en cada habitación, desde un grupo pequeño hasta un gran evento.'] },
        { q: '¿Qué diferencia hay entre una rooming list y una reserva?', a: ['La reserva bloquea las habitaciones. La rooming list dice quién ocupa cada una.'] }
      ]
    }
  ]
};

const fromExcel: Article = {
  key: 'from-excel',
  kind: 'guide',
  slug: 'de-excel-a-un-software-de-agencia',
  metaTitle: 'De Excel a un software de agencia de viajes: qué cambia',
  metaDescription:
    'Lo que una agencia de viajes suele guardar en hojas de cálculo, lo que pasa a un software de viajes y lo que cambia cuando los viajes están en un solo sistema.',
  title: 'De Excel a un software de agencia de viajes',
  lead: 'Muchas agencias trabajan con hojas de cálculo y documentos: una lista de productos, una de proveedores, los clientes y un archivo por presupuesto. Un software de viajes reúne esa información en un solo sitio, vinculada a cada viaje.',
  updated: '2026-11-14',
  card: 'Lo que suele estar en hojas de cálculo, lo que pasa a un software y lo que cambia.',
  blocks: [
    { type: 'h2', text: 'Lo que suele estar en hojas de cálculo', id: 'hojas' },
    {
      type: 'list',
      items: [
        'Los productos con su nombre, proveedor, precio neto y periodo de validez.',
        'Los proveedores con sus datos de contacto y condiciones.',
        'Los clientes con su idioma y su correo.',
        'Las reglas de precio: margen, comisión e IVA, a menudo como fórmulas.',
        'Los presupuestos, a menudo un archivo por versión, y los textos de correo habituales.'
      ]
    },
    { type: 'h2', text: 'Lo que cambia en un software', id: 'cambios' },
    {
      type: 'list',
      items: [
        'Los precios se guardan por temporada y por proveedor, y el presupuesto los lee del catálogo.',
        'Las reglas de precio se definen una vez y se aplican a cada línea de presupuesto.',
        'Cada versión del presupuesto se guarda con el viaje.',
        'Reservas, cobros y facturas están vinculados al mismo viaje.',
        'Varias personas trabajan a la vez con los mismos clientes y viajes.'
      ]
    },
    { type: 'h2', text: 'Lo que se queda en los archivos antiguos', id: 'archivo' },
    {
      type: 'p',
      text: 'El historial de viajes pasados suele quedarse en los archivos antiguos, como archivo. Lo que pasa al software es lo que se reutiliza: las tarifas vigentes, los proveedores y los clientes activos.'
    },
    { type: 'h2', text: 'En Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'Durante el alta, importamos tus productos, precios y proveedores desde tus hojas de cálculo. El alta y la importación no tienen coste con pago anual. La [página Cambiar](/switch) describe los pasos.'
    },
    { type: 'h2', text: 'Preguntas', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: '¿Se puede seguir usando Excel junto a Traviosoft?', a: ['Sí. Traviosoft exporta un resumen en Excel, o un zip con las facturas en PDF de cualquier periodo.'] },
        { q: '¿Se pueden recuperar los datos?', a: ['Sí. Si dejas de usar Traviosoft, recuperas tus datos en formatos estándar.'] }
      ]
    }
  ]
};

const reav: Article = {
  key: 'reav-guide',
  kind: 'spain',
  slug: 'guia-reav-agencias-de-viajes',
  metaTitle: 'REAV: el régimen especial de agencias de viajes explicado',
  metaDescription:
    'Qué es el REAV, cuándo se aplica, cómo se calcula el IVA sobre el margen con ejemplos numéricos, errores comunes y cómo se refleja en la factura.',
  title: 'REAV: el régimen especial de agencias de viajes explicado con ejemplos',
  lead: 'El REAV es el régimen especial del IVA para agencias de viajes en España. En lugar de pagar IVA por el precio total del viaje, la agencia lo paga sobre su margen: precio cobrado menos lo pagado a terceros. Con un viaje vendido a 1.210 EUR y costes de 900 EUR, el margen es 310 EUR y el IVA 53,80 EUR.',
  updated: UPDATED,
  card: 'IVA sobre el margen, con ejemplos con cifras y los errores más frecuentes.',
  blocks: [
    {
      type: 'callout',
      text: 'Información general, no asesoramiento fiscal. El REAV tiene excepciones y opciones. Confirma tu caso con tu gestor o asesor fiscal.'
    },
    { type: 'h2', text: 'Qué es el REAV', id: 'que-es' },
    {
      type: 'p',
      text: 'El régimen especial de las agencias de viajes (REAV) es una forma de calcular el IVA pensada para negocios que compran servicios de terceros (hoteles, transportes, guías) y los revenden dentro de un viaje. Como el IVA sobre el precio completo sería excesivo para quien hace de intermediario con su propio nombre, se grava solo el margen.'
    },
    { type: 'h2', text: 'Cuándo se aplica', id: 'cuando' },
    {
      type: 'list',
      items: [
        'Cuando la agencia actúa en nombre propio frente al viajero, es decir, vende el viaje o el servicio como suyo.',
        'Cuando para ese viaje utiliza servicios comprados a otros empresarios (hoteles, transportistas, guías).',
        'No se aplica si la agencia solo media y cobra una comisión en nombre del proveedor: ahí tributa la comisión por el régimen general.',
        'Hay excepciones y opciones, por ejemplo con clientes empresas o con servicios prestados fuera de la UE. Consúltalas con tu gestor.'
      ]
    },
    { type: 'h2', text: 'Cómo se calcula: el IVA sobre el margen', id: 'calculo' },
    {
      type: 'p',
      text: 'El margen es lo que cobras al cliente menos lo que pagas a terceros por ese viaje, con todos los impuestos incluidos en ambas cifras. Ese margen contiene el IVA, así que se divide por 1,21 para obtener la base y el resto es el IVA (tipo general del 21%).'
    },
    {
      type: 'table',
      head: ['Concepto', 'Ejemplo 1: pareja', 'Ejemplo 2: grupo de 8'],
      rows: [
        ['Precio cobrado al cliente', '1.210,00 EUR', '7.600,00 EUR (8 x 950 EUR)'],
        ['Pagado a terceros (con sus impuestos)', '900,00 EUR', '5.700,00 EUR'],
        ['Margen', '310,00 EUR', '1.900,00 EUR'],
        ['Base imponible (margen / 1,21)', '256,20 EUR', '1.570,25 EUR'],
        ['IVA (21% de la base)', '53,80 EUR', '329,75 EUR']
      ]
    },
    {
      type: 'p',
      text: 'Un caso con pérdida: si cobras 1.000 EUR y pagas 1.100 EUR a terceros, el margen es negativo y la base imponible es cero, es decir, no hay IVA que ingresar en ese viaje. Pregunta a tu gestor cómo afecta a los demás viajes.'
    },
    { type: 'h2', text: 'Cómo debe aparecer en la factura', id: 'factura' },
    {
      type: 'p',
      text: 'En el REAV la factura al cliente no desglosa el IVA: muestra el precio total y una mención al régimen especial de agencias de viajes. Traviosoft lo hace así: cuando tu agencia aplica REAV, las facturas llevan la etiqueta correspondiente en lugar de la línea de IVA. Tú sigues emitiendo la factura desde el viaje, con los importes del presupuesto aceptado.'
    },
    { type: 'h2', text: 'Errores comunes', id: 'errores' },
    {
      type: 'list',
      items: [
        'Desglosar IVA en la factura al cliente cuando se aplica REAV.',
        'Deducir el IVA que cobran los proveedores como si fuera régimen general. En REAV ese IVA va dentro del coste y no se deduce aparte.',
        'Aplicar REAV a servicios propios (por ejemplo, un guía de tu plantilla), que siguen otro tratamiento.',
        'Calcular el margen sobre cifras sin impuestos en un lado y con impuestos en el otro.',
        'Mezclar viajes con comisión de mediación y viajes en nombre propio sin separarlos.',
        'Olvidar guardar los justificantes de lo pagado a terceros: sin ellos no se puede demostrar el margen.'
      ]
    },
    { type: 'h2', text: 'Preguntas frecuentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: '¿El REAV es obligatorio?', a: ['Cuando se cumplen sus condiciones, es el régimen que corresponde. Hay opciones y excepciones, por ejemplo con clientes empresarios. Consúltalo con tu gestor.'] },
        { q: '¿Traviosoft calcula el REAV?', a: ['Traviosoft etiqueta las facturas con el régimen especial cuando lo activas para tu país. El cálculo y la declaración los sigue haciendo tu gestor con los datos que le exportas.'] },
        { q: '¿Se aplica a viajes fuera de España?', a: ['El tratamiento de los servicios prestados fuera de la UE tiene reglas propias. Pregunta a tu gestor.'] }
      ]
    }
  ]
};

const verifactu: Article = {
  key: 'verifactu-guide',
  kind: 'invoicing',
  slug: 'verifactu-agencias-de-viajes',
  metaTitle: 'Veri*Factu para agencias de viajes: qué cambia',
  metaDescription:
    'Qué es Veri*Factu, a quién afecta, qué cambia en la facturación de una agencia de viajes, el código QR y cómo comprobar los plazos en la AEAT.',
  title: 'Veri*Factu para agencias de viajes: qué es y qué cambia',
  lead: 'Veri*Factu son las reglas de la Agencia Tributaria para los programas de facturación: cada factura queda registrada sin posibilidad de alterarla y lleva un código QR, y en la modalidad Veri*Factu se envía a Hacienda al emitirla. Lo regula el Real Decreto 1007/2023 y, según el Real Decreto-ley 15/2025, los programas deben estar adaptados antes del 1 de enero de 2027 para los contribuyentes del Impuesto sobre Sociedades y antes del 1 de julio de 2027 para el resto.',
  updated: '2026-11-14',
  card: 'Qué es, quién debe cumplirlo y cómo cambia la factura de una agencia de viajes.',
  blocks: [
    {
      type: 'callout',
      text: 'Información general, redactada el 14 de noviembre de 2026. No constituye asesoramiento jurídico ni fiscal y no tiene valor legal. Las normas y las fechas cambian: compruébalas en las fuentes oficiales o con un profesional cualificado. Traviosoft no se hace responsable de las decisiones tomadas a partir de esta página.'
    },
    { type: 'h2', text: 'Qué es Veri*Factu', id: 'que-es' },
    {
      type: 'p',
      text: 'La normativa antifraude exige que los programas de facturación garanticen que una factura no se puede alterar sin dejar rastro. El Real Decreto 1007/2023 desarrolla esos requisitos. Hay dos formas de cumplir: guardar los registros de facturación con garantías técnicas, o la modalidad Veri*Factu, en la que cada factura se envía a la AEAT en el momento de emitirla.'
    },
    { type: 'h2', text: 'A quién afecta', id: 'a-quien' },
    {
      type: 'p',
      text: 'A empresarios y profesionales que emiten facturas con un programa informático, lo que incluye a las agencias de viajes. Hay excepciones: quienes ya llevan sus libros registro con el Suministro Inmediato de Información (SII, artículo 62.6 del Reglamento del IVA) y los territorios con régimen foral propio, que tienen sus sistemas.'
    },
    { type: 'h2', text: 'Qué implica para una agencia', id: 'que-cambia' },
    {
      type: 'list',
      items: [
        'Las facturas deben salir de un programa que cumpla los requisitos, con el productor del programa responsable de ello.',
        'Las facturas rectificativas y los abonos también son registros de facturación.',
        'En modalidad Veri*Factu, cada registro se envía a la AEAT al emitir la factura.',
        'Si aplicas REAV, la factura sigue llevando la mención del régimen especial.'
      ]
    },
    { type: 'h2', text: 'El código QR', id: 'qr' },
    {
      type: 'p',
      text: 'Las facturas incluyen un código QR que lleva a la sede de la AEAT, donde el cliente puede, si quiere, enviar los datos de la factura. En la modalidad Veri*Factu, la factura lleva además la mención «Factura verificable en la sede electrónica de la AEAT» o «VERI*FACTU», y la consulta confirma al cliente que la factura se ha enviado a Hacienda. Es una comprobación voluntaria para el destinatario, no un trámite que tengas que hacer a mano.'
    },
    { type: 'h2', text: 'Plazos', id: 'plazos' },
    {
      type: 'p',
      text: 'El Real Decreto-ley 15/2025, convalidado por el Congreso el 11 de diciembre de 2025, fija que los programas estén adaptados antes del 1 de enero de 2027 para los contribuyentes del Impuesto sobre Sociedades y antes del 1 de julio de 2027 para autónomos y demás obligados. El calendario vigente se publica en la sede de la AEAT y en el BOE.'
    },
    { type: 'h2', text: 'Cómo lo resuelve Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'En Traviosoft, al emitir una factura desde un viaje, la factura queda registrada y lleva su QR, con la numeración propia de cada empresa. Se activa en los ajustes de país de España. La [guía de facturación en España](/guides/facturacion-agencia-de-viajes-espana) resume también el REAV y la factura electrónica entre empresas.'
    },
    { type: 'h2', text: 'Preguntas frecuentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: '¿Veri*Factu sustituye al SII?', a: ['No. Quien ya está en el SII tiene su propio sistema.'] },
        { q: '¿El cliente tiene que hacer algo con el QR?', a: ['No. Es una forma de comprobar la factura en la sede de la AEAT si quiere.'] }
      ]
    },
    { type: 'p', text: 'Fuentes oficiales: [Agencia Tributaria](https://sede.agenciatributaria.gob.es) y el [BOE](https://www.boe.es).' }
  ]
};

const spainPage: Article = {
  key: 'spain-page',
  kind: 'spain',
  slug: 'software-agencias-viajes-espana',
  metaTitle: 'Software para agencias de viajes y DMC en España',
  metaDescription:
    'Traviosoft para una agencia en España: REAV en las facturas, numeración por sociedad, exportación para el gestor y documentos en cinco idiomas.',
  title: 'Software para agencias de viajes y DMC en España',
  lead: 'Traviosoft sirve a una agencia o DMC en España con presupuestos con margen, reservas, cobros y facturas. Etiqueta el REAV en las facturas, numera por sociedad, prepara archivos para tu gestor y saca los documentos en español, catalán, inglés, francés e italiano. Datos alojados en la UE.',
  updated: UPDATED,
  card: 'Lo que Traviosoft hace por una agencia española: REAV, series por sociedad y exportación para el gestor.',
  blocks: [
    {
      type: 'p',
      text: 'Una agencia en España tiene que resolver lo mismo que cualquier otra (presupuestar, reservar, cobrar, facturar) y, además, cumplir reglas propias. Traviosoft cubre el trabajo del viaje de principio a fin y activa las reglas de España desde los ajustes de país.'
    },
    { type: 'h2', text: 'Qué hace Traviosoft para una agencia española', id: 'que-hace' },
    {
      type: 'list',
      items: [
        'REAV: las facturas llevan la etiqueta del régimen especial de agencias de viajes cuando lo aplicas.',
        'Facturación en España: las reglas se describen en la [guía de facturación en España](/guides/facturacion-agencia-de-viajes-espana).',
        'Numeración por sociedad: cada empresa de tu grupo mantiene su propia serie de facturas.',
        'Exportación para el gestor: un resumen en Excel o un zip con todas las facturas en PDF de cualquier periodo.',
        'Documentos para clientes extranjeros: presupuestos, correos, propuestas e itinerarios en español, catalán, inglés, francés e italiano, con tu marca.',
        'Datos en la UE: cada agencia tiene su propio espacio, alojado en la Unión Europea.'
      ]
    },
    { type: 'h2', text: 'Del presupuesto a la factura', id: 'flujo' },
    {
      type: 'p',
      text: 'Los precios de tu catálogo, con sus temporadas y proveedores, se convierten en un presupuesto con tu margen, tu IVA y tu comisión. El primer pago del cliente abre el pedido, y la factura sale de las mismas líneas, sin teclear nada dos veces. Si cambia algo, se corrige en un solo sitio.'
    },
    { type: 'h2', text: 'Precio', id: 'precio' },
    {
      type: 'p',
      text: `Classic cuesta ${PRICES.classic.yearly} EUR al mes y Premium ${PRICES.premium.yearly} EUR, con ${PRICES.usersIncluded} usuarios incluidos y alta e importación sin coste con pago anual. Los detalles están en la [página de precios](/pricing).`
    },
    { type: 'h2', text: 'Preguntas frecuentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: '¿Traviosoft sustituye a mi gestor?', a: ['No. Gestiona el viaje, los cobros y las facturas, y prepara los archivos para tu gestor, que sigue llevando tu contabilidad y tus impuestos.'] },
        { q: '¿Funciona para un receptivo que vende a agencias de otros países?', a: ['Sí. Puedes emitir documentos en el idioma del cliente y registrar la comisión de la agencia que te trae la venta.'] },
        { q: '¿Dónde están mis datos?', a: ['En un espacio propio para tu agencia, alojado en la Unión Europea.'] }
      ]
    },
    {
      type: 'callout',
      text: 'Información general, sin valor jurídico y sin asesoramiento fiscal ni jurídico. Compruébala con tu gestor o con las fuentes oficiales.'
    }
  ]
};

// The REAV guide stays off the site until articles 141 to 147 of Ley 37/1992 are read from the BOE and its claims checked against them.
// To publish it, add reav back to the articles list.
void reav;
const aiTools: Article = {
  key: 'ai-assistant-mcp',
  kind: 'guide',
  slug: 'asistente-ia-mcp-agencia-de-viajes',
  metaTitle: 'IA para agencias de viajes: asistente integrado y conector MCP para Claude, ChatGPT y Gemini',
  metaDescription:
    'Cómo una agencia de viajes puede usar la IA con sus propios datos: el asistente integrado en Traviosoft y el conector MCP que une Claude, ChatGPT y otras herramientas de IA a tus presupuestos, reservas y cobros.',
  title: 'La IA en tu agencia de viajes',
  lead: 'Traviosoft trabaja con la IA de dos maneras. El asistente integrado trabaja dentro de la aplicación para cada persona que lo usa. El conector MCP permite que la herramienta de IA que ya usas, como Claude o ChatGPT, lea y actualice los datos de tu agencia con tu permiso.',
  updated: '2026-11-14',
  card: 'El asistente integrado, el conector MCP para Claude y ChatGPT, y cómo mantienes el control.',
  blocks: [
    { type: 'h2', text: 'El asistente integrado', id: 'asistente' },
    {
      type: 'p',
      text: 'El asistente está en Traviosoft y trabaja con los mismos permisos que la persona que lo usa. Pregúntale qué te necesita hoy. Pídele un presupuesto preparado desde tu catálogo o que convierta la lista de precios de un proveedor en precios de catálogo. También puede marcar tareas de reserva o listar los cobros pendientes. Es opcional en los dos planes, con límites de uso, y lo activas persona por persona.'
    },
    {
      type: 'p',
      text: 'Cada cambio que propone espera tu visto bueno o se puede deshacer. Con el tiempo aprende cómo le gusta trabajar a tu agencia, y tu equipo puede corregir lo que aprendió línea por línea.'
    },
    { type: 'h2', text: 'El conector MCP', id: 'mcp' },
    {
      type: 'p',
      text: 'El MCP (Model Context Protocol) es la forma estándar de conectar un asistente de IA a otra herramienta para que pueda trabajar en ella. Con el conector de Traviosoft tu herramienta de IA puede buscar un cliente, preparar un presupuesto o decirte qué cobros van con retraso. Trabaja con tus datos reales y no con lo que pegas en la conversación. Está incluido en los dos planes.'
    },
    {
      type: 'list',
      items: [
        'Claude (aplicación o web): Ajustes, Conectores, Añadir conector personalizado, y pega tu dirección de Traviosoft.',
        'ChatGPT: Ajustes, Conectores, Añadir, con la misma dirección.',
        'Las herramientas de automatización como n8n también pueden conectarse para hacer tareas automáticas.'
      ]
    },
    {
      type: 'p',
      text: 'La herramienta de IA te lleva a Traviosoft para iniciar sesión. Te muestra lo que pide hacer y puedes desmarcar lo que prefieras no permitir.'
    },
    { type: 'h2', text: 'Tú mantienes el control', id: 'control' },
    {
      type: 'list',
      items: [
        'El conector está desactivado hasta que un administrador lo activa.',
        'El administrador elige quién puede conectar una herramienta de IA.',
        'Una herramienta de IA nunca hace más de lo que puede hacer en la aplicación la persona que la conectó.',
        'En modo seguro cada cambio espera en una lista de revisión a que esa persona lo apruebe.',
        'Cada acción queda en el historial con el nombre de la persona que conectó la herramienta.',
        'Cualquier conexión se puede cortar al instante desde Traviosoft.'
      ]
    },
    { type: 'h2', text: 'Preguntas', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: '¿Funciona con Gemini?', a: ['El conector funciona con cualquier herramienta de IA compatible con MCP. Google admite el MCP en sus herramientas Gemini para desarrolladores. La posibilidad de añadir un conector personalizado depende de la versión de Gemini.'] },
        { q: '¿El conector MCP está incluido en mi plan?', a: ['Sí. Está incluido en Classic y en Premium. El asistente integrado es opcional en los dos planes, con límites de uso.'] },
        { q: '¿La IA ve todos nuestros datos?', a: ['Ve lo que ve la persona que la conectó, y nada más. Un administrador también puede permitir solo la lectura y bloquear cualquier cambio.'] },
        { q: '¿La IA puede escribir sola a los clientes?', a: ['En modo seguro, activado por defecto, los cambios esperan la aprobación de una persona. Tú decides lo que puede hacer.'] }
      ]
    }
  ]
};

export const articles: Article[] = [best, ...comparisons, quote, rooming, fromExcel, aiTools, spainPage, verifactu, ...topicGuides, ...invoicingGuides];
