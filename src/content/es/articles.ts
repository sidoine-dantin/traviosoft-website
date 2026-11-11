import type { Article, ArticleBlock, Faq } from '../types';
import { PRICES, n } from '../prices';

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
    { type: 'h2', text: 'Si decides cambiar', id: 'cambiar' },
    { type: 'p', text: c.switching },
    { type: 'h2', text: 'Preguntas frecuentes', id: 'faq' },
    { type: 'faq', items: c.faq },
    { type: 'p', text: 'Si quieres ver Traviosoft con un viaje tuyo, la [página Demo](/demo) explica cómo es la llamada.' }
  ];
  return {
    key: c.key,
    kind: 'compare',
    slug: c.slug,
    metaTitle: c.metaTitle,
    metaDescription: c.metaDescription,
    title: c.title,
    lead: c.lead,
    updated: UPDATED,
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
      'Excel y Word funcionan hasta que el volumen crece. Comparamos presupuestos, márgenes, reservas y facturas para ver cuándo conviene dar el salto a un software.',
    title: 'Traviosoft frente a Excel y Word: cuándo una hoja de cálculo deja de bastar',
    lead: 'Excel y Word bastan si llevas pocos viajes al año y trabajas solo. Cuando hay más de una persona, varias temporadas de precios y facturas que numerar, un software pensado para viajes evita errores de margen y copias de archivos.',
    card: 'Hoja de cálculo o software: cuándo compensa cambiar y cuándo no.',
    basis:
      'Excel y Word son la herramienta con la que empieza casi toda agencia, y muchas viven bien con ellas durante años. Esta comparación no dice que sean malas: dice dónde se notan sus límites. Los datos de Traviosoft son los de nuestro sitio a 3 de noviembre de 2026.',
    rows: [
      ['Pensado para', 'Viajes a medida: solicitudes, presupuestos, reservas y facturas', 'Cualquier tarea de hoja de cálculo y texto'],
      ['Precio', `Classic desde ${PRICES.classic.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos`, 'La licencia de Microsoft que ya tengas'],
      ['Margen y comisión', 'Reglas de precio definidas una vez; cada línea las aplica', 'Fórmulas que montas tú y copias de archivo en archivo'],
      ['Temporadas y proveedores', 'Precios por periodo y varios proveedores por producto', 'Una pestaña por proveedor, que alguien debe mantener al día'],
      ['Versiones del presupuesto', 'Cada versión queda guardada y se puede reabrir', 'Copias tipo "presupuesto_v3_final.xlsx"'],
      ['Reservas a proveedores', 'Lista por viaje con estados que se actualizan', 'Una columna o un documento aparte'],
      ['Facturas', 'Desde el viaje, con numeración por empresa y notas de abono', 'Plantilla numerada a mano'],
      ['Normas fiscales de España', 'Etiquetas REAV y Veri*Factu con QR, activables por país', 'Las aplicas tú'],
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
      'Trabajáis dos o más personas sobre los mismos clientes y viajes, y ya os habéis pisado archivos.',
      'Un cambio de precio de un hotel obliga a tocar varios presupuestos y alguno se queda con la tarifa antigua.',
      'Quieres que el margen y la comisión se apliquen siempre igual, sin depender de que nadie olvide una fórmula.',
      'Pierdes tiempo pasando los datos del presupuesto a la factura, y de ahí al correo del gestor.',
      'Facturas a clientes de otros países y necesitas documentos en español, inglés y francés.'
    ],
    switching:
      'No hace falta abandonar Excel de golpe. Durante el alta importamos tus productos, precios y proveedores desde tus hojas de cálculo, y el alta y la importación no tienen coste con pago anual. Lo habitual es terminar los viajes ya abiertos en tus archivos y empezar las solicitudes nuevas en Traviosoft. Hay un calendario completo en la [página Cambiar](/switch) y una guía paso a paso en "De Excel a un software de agencia".',
    faq: [
      { q: '¿Puedo seguir usando Excel junto a Traviosoft?', a: ['Sí. Puedes importar tus datos desde Excel y exportar un resumen en Excel o un zip con todas las facturas en PDF para tu gestor.'] },
      { q: '¿Qué pasa con las fórmulas de margen que ya tengo?', a: ['Se convierten en reglas de precio. En lugar de copiar la fórmula en cada archivo, la defines una vez y se aplica a cada línea de cada presupuesto.'] },
      { q: '¿Merece la pena para una agencia de una sola persona?', a: ['Depende del volumen. Si llevas pocos viajes y no necesitas facturas ni itinerarios compartidos, una hoja de cálculo puede bastar. Si los presupuestos te quitan horas cada semana, un software ya compensa.'] }
    ]
  },
  {
    key: 'vs-ezus',
    slug: 'traviosoft-vs-ezus',
    other: 'Ezus',
    metaTitle: 'Traviosoft vs Ezus: comparativa para DMC y receptivos',
    metaDescription:
      'Comparamos Traviosoft y Ezus con precios publicados, idiomas, puesta en marcha y normas fiscales de España. Dónde gana cada uno, sin adornos.',
    title: 'Traviosoft frente a Ezus: comparativa honesta para DMC y receptivos',
    lead: 'Ezus es el competidor más cercano: un software francés para DMC con muchos clientes y precios públicos. Traviosoft muestra un precio con usuarios incluidos y trae REAV y Veri*Factu para España. Ezus tiene más trayectoria y más reseñas.',
    card: 'Dos programas con precios públicos: qué incluye cada uno y qué cuesta el primer año.',
    basis:
      'Los datos de Ezus vienen de su sitio web y de directorios públicos, revisados el 3 de noviembre de 2026. Los precios cambian: comprueba siempre las páginas de precios actuales de ambos. Las cifras de clientes y reseñas de Ezus son las que ellos publican.',
    rows: [
      ['Pensado para', 'Receptivos, DMC y agencias a medida', 'DMC, receptivos, turoperadores y agencias; FIT, grupos y MICE'],
      ['Empresa', 'Nacido en una agencia a medida de Barcelona; ver la página Sobre nosotros', 'París, fundada en 2019'],
      ['Precio publicado', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos`, 'Professional 75 EUR por usuario y mes (hasta 10 usuarios); Premium 100 EUR; Enterprise a consultar'],
      ['Puesta en marcha', 'Alta e importación sin coste con pago anual', 'Pack de onboarding obligatorio de 1.990 EUR; importación de datos 390 EUR'],
      ['3 usuarios, primer año (precios de lista)', `${PRICES.classic.yearly} x 12 = ${n(PRICES.classic.yearly * 12, 'es')} EUR`, '75 x 3 x 12 = 2.700 EUR + 1.990 EUR = 4.690 EUR'],
      ['Idiomas', 'Documentos en español, inglés, francés y más', 'Web y soporte en 5 idiomas: EN, FR, ES, IT, PT'],
      ['Reseñas públicas', 'Todavía sin reseñas en directorios', 'Capterra 4,7 (61) y G2 4,9 (18), según su web'],
      ['Normas fiscales de España', 'REAV y Veri*Factu con QR', 'No vimos contenido sobre REAV en su web'],
      ['Alojamiento de datos', 'UE, un espacio propio por agencia', 'AWS Irlanda, según su web']
    ],
    otherBetter: [
      'Quieres un producto con más años en el mercado y muchas más referencias públicas: Ezus dice tener más de 600 agencias en más de 70 países.',
      'Necesitas soporte y documentación en italiano o portugués.',
      'Valoras un paquete de implantación guiado, con especialista asignado durante varios meses, y estás dispuesto a pagarlo.',
      'Necesitas un plan Enterprise: Ezus lo ofrece desde 30 usuarios.',
      'Quieres zona de cliente, portal de pago y páginas web dentro del mismo programa, tal como los describe Ezus.'
    ],
    usBetter: [
      'Quieres un precio claro, con usuarios incluidos, y alta e importación gratis con el pago anual.',
      'Tu agencia está en España y necesitas REAV en las facturas y Veri*Factu con QR.',
      'Trabajas sobre todo en español y francés y quieres que documentos y plantillas de correo salgan en el idioma del cliente.',
      'Prefieres una herramienta enfocada en el flujo de un viaje: solicitud, presupuesto con margen, reserva, cobro y factura.'
    ],
    switching:
      'Si usas Ezus y quieres cambiar, exporta antes tus productos, proveedores y clientes. Nosotros importamos productos, precios y proveedores desde tus hojas de cálculo durante el alta. Un consejo práctico: cambia fuera de temporada alta y termina los viajes abiertos donde están. La [página Cambiar](/switch) detalla los pasos.',
    faq: [
      { q: '¿Cuánto cuesta cada uno el primer año con 3 usuarios?', a: [`Con los precios de lista, Traviosoft Classic cuesta unos ${n(PRICES.classic.yearly * 12, 'es')} EUR el primer año y Ezus unos 4.690 EUR, porque incluye un pack de onboarding de 1.990 EUR. Comprueba los precios actuales de los dos.`] },
      { q: '¿Ezus sirve para España?', a: ['Sí, tiene web y soporte en español. Lo que no encontramos en su web es contenido sobre REAV. Pregúntales cómo lo resuelven si lo necesitas.'] },
      { q: '¿Puedo probar los dos?', a: ['Los dos trabajan con demostración. Lo más útil es llevar un viaje real tuyo a cada una y comparar cuánto tardas en tener el presupuesto con margen.'] }
    ]
  },
  {
    key: 'vs-giav',
    slug: 'traviosoft-vs-giav',
    other: 'GIAV',
    metaTitle: 'Traviosoft vs GIAV: gestión de agencias de viajes',
    metaDescription:
      'GIAV es un software español veterano para agencias de viajes. Comparamos su enfoque con el de Traviosoft para receptivos y viajes a medida, sin inventar datos.',
    title: 'Traviosoft frente a GIAV: dos formas de gestionar una agencia de viajes',
    lead: 'GIAV es un programa de gestión para agencias de viajes con muchos años en España, usado sobre todo por agencias minoristas. Traviosoft está pensado para receptivos y viajes a medida. Si vendes sobre todo viajes de catálogo, GIAV puede encajar mejor.',
    card: 'Un programa veterano para agencias minoristas y otro para viajes a medida y receptivos.',
    basis:
      'Hemos podido ver GIAV a través de directorios y prensa del sector, no con una prueba propia. Por eso, donde no hay un dato público, lo indicamos como "No publicado" y te sugerimos preguntarles. Los datos de Traviosoft son los de nuestro sitio a 3 de noviembre de 2026.',
    rows: [
      ['Pensado para', 'Receptivos, DMC y agencias a medida', 'Gestión de agencias de viajes en España, sobre todo minoristas'],
      ['Precio publicado', `Classic desde ${PRICES.classic.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos`, 'No publicado'],
      ['Tamaño de equipo', `Dos planes, ${PRICES.usersIncluded} usuarios incluidos`, 'No publicado'],
      ['Presupuestos a medida con margen y comisión por línea', 'Sí, con reglas de precio', 'No publicado'],
      ['Catálogo con temporadas y varios proveedores', 'Sí', 'No publicado'],
      ['Itinerario del cliente en página compartible', 'Sí, en su idioma y con tu marca', 'No publicado'],
      ['Idiomas de los documentos', 'Español, inglés, francés y más', 'No publicado'],
      ['REAV y Veri*Factu', 'Sí, con etiquetas REAV y Veri*Factu con QR', 'Consúltalo con ellos'],
      ['Alojamiento de datos', 'UE, un espacio propio por agencia', 'No publicado']
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
      'Prefieres ver el precio antes de hablar con nadie.'
    ],
    switching:
      'Antes de decidir, pide a GIAV y a nosotros una demostración con un viaje tuyo y pregunta lo mismo a los dos: cómo se calcula el margen por línea, cómo se registra la comisión de un colaborador, qué ve el cliente y cómo se factura con REAV. Si cambias, importamos productos, precios y proveedores desde tus hojas de cálculo; consulta la [página Cambiar](/switch).',
    faq: [
      { q: '¿Puedo importar los datos desde GIAV?', a: ['Importamos productos, precios y proveedores desde hojas de cálculo. Si GIAV te permite exportar a una hoja de cálculo, puedes traerlos así. Depende de lo que te permita exportar tu versión.'] },
      { q: '¿Sirve Traviosoft para una agencia minorista?', a: ['Está pensado para agencias que diseñan y venden viajes a medida. Si tu negocio es sobre todo vender producto de catálogo de mayoristas, mira antes si encaja con lo que haces.'] },
      { q: '¿Por qué no hay precios de GIAV en la tabla?', a: ['Porque no los hemos visto publicados. Preferimos escribir "No publicado" a inventar una cifra.'] }
    ]
  },
  {
    key: 'vs-holded',
    slug: 'traviosoft-vs-holded',
    other: 'Holded',
    metaTitle: 'Traviosoft vs Holded para agencias de viajes',
    metaDescription:
      'Holded es un software general de facturación y gestión para pymes. Comparamos qué cubre y qué no para una agencia de viajes: márgenes, reservas y REAV.',
    title: 'Traviosoft frente a Holded: software de viajes o ERP general',
    lead: 'Holded es un programa general de facturación, contabilidad y gestión para pymes, muy extendido en España. No tiene presupuestos con margen por servicio ni REAV propios de una agencia de viajes. Traviosoft cubre el viaje; Holded puede seguir llevando la empresa.',
    card: 'Un ERP general para pymes y un software de viajes: qué hace cada uno.',
    basis:
      'Los datos de Holded vienen de su web y de su página de turismo y viajes, revisadas el 3 de noviembre de 2026. Holded cambia sus planes y promociones con frecuencia: comprueba su página de precios. No es un mal programa: simplemente resuelve otro problema.',
    rows: [
      ['Pensado para', 'Receptivos, DMC y agencias a medida', 'Autónomos y pymes de cualquier sector, de 1 a más de 100 personas'],
      ['Precio publicado', `Classic desde ${PRICES.classic.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos`, 'Básico 29 EUR (2 usuarios), Estándar 59 EUR (4), Avanzado 99 EUR (7), sin IVA; con descuentos temporales'],
      ['Presupuestos con margen por servicio', 'Sí, con reglas de precio, IVA y comisión', 'Sin funciones específicas de viajes que hayamos visto'],
      ['Catálogo con temporadas y proveedores', 'Sí', 'No es su función'],
      ['Reservas y tareas por proveedor', 'Lista por viaje con estados', 'No es su función'],
      ['Itinerario del cliente', 'Página compartible, día a día', 'No es su función'],
      ['REAV en facturas', 'Sí, etiquetas REAV', 'No aparece en su página de turismo y viajes'],
      ['Veri*Factu', 'Sí, con QR', 'Indican que cumplen con Verifactu'],
      ['Contabilidad, nóminas y bancos', 'No sustituye el trabajo de tu gestor', 'Sí, es su especialidad']
    ],
    otherBetter: [
      'Necesitas contabilidad, tesorería, nóminas o conciliación bancaria en el mismo programa.',
      'Tu agencia es una parte pequeña de un negocio mayor y quieres un único sistema para todo.',
      'Tu gestoría ya trabaja con Holded y prefiere recibir todo allí.',
      'Facturas en varias divisas y quieres un control de tesorería general.'
    ],
    usBetter: [
      'El problema es calcular, enviar y hacer seguir presupuestos de viaje con margen, no la contabilidad.',
      'Necesitas un catálogo con precios por temporada y varios proveedores por servicio.',
      'Quieres lista de reservas por viaje, hojas de servicio e itinerario para el cliente.',
      'Tu agencia aplica REAV y no quieres rehacer a mano cada factura.'
    ],
    switching:
      'Lo más sensato es que convivan. Traviosoft lleva el viaje, desde la solicitud hasta la factura, y exporta un resumen en Excel o un zip de facturas en PDF para tu gestor. Decide en qué programa emites las facturas para no numerarlas en dos sitios, y pregunta a tu gestor cómo quiere recibir los datos. Más detalle en la [página Cambiar](/switch).',
    faq: [
      { q: '¿Tengo que dejar Holded para usar Traviosoft?', a: ['No necesariamente. Muchas agencias mantienen su contabilidad donde está. Lo importante es emitir cada factura en un solo sitio y acordar con tu gestor cómo recibe los datos.'] },
      { q: '¿Holded sirve para REAV?', a: ['Su página de turismo y viajes no menciona REAV. Si lo necesitas, pregúntales directamente o consulta con tu gestor cómo tratar el margen en su programa.'] },
      { q: '¿Traviosoft hace contabilidad?', a: ['No. Gestiona el viaje, los cobros y las facturas, y prepara los archivos para tu gestor. La contabilidad sigue en tu gestoría o en el programa que uses.'] }
    ]
  },
  {
    key: 'vs-lemax',
    slug: 'traviosoft-vs-lemax',
    other: 'Lemax',
    metaTitle: 'Traviosoft vs Lemax: software para DMC y turoperadores',
    metaDescription:
      'Lemax es un software croata para turoperadores y DMC medianos y grandes. Comparamos tamaño de equipo, precio visible y enfoque frente a Traviosoft.',
    title: 'Traviosoft frente a Lemax: dos sistemas de gestión completos',
    lead: 'Lemax es un software con más de 30 años, pensado para turoperadores y DMC medianos y grandes; su paquete Lemax GO empieza en 15 usuarios y no publica precios. Traviosoft cubre todo el viaje, de la primera solicitud a la última factura, en español, inglés y francés, y muestra el precio.',
    card: 'Dos sistemas completos: una plataforma veterana y un solo flujo de la solicitud a la factura con precio visible.',
    basis:
      'Los datos de Lemax vienen de su sitio web y de prensa del sector, revisados el 3 de noviembre de 2026. Lemax no publica precios: lo indicamos como "No publicado". Sus cifras de clientes son las que ellos muestran.',
    rows: [
      ['Pensado para', 'Receptivos, DMC y agencias a medida', 'Turoperadores y DMC medianos y grandes'],
      ['Empresa', 'Nacido en una agencia a medida de Barcelona; ver la página Sobre nosotros', 'Croacia, fundada en 1990'],
      ['Tamaño de equipo', `Dos planes, ${PRICES.usersIncluded} usuarios incluidos`, 'Lemax GO desde 15 usuarios'],
      ['Precio publicado', `Classic desde ${PRICES.classic.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos`, 'No publicado; el precio se acuerda antes de firmar'],
      ['Idiomas de su web', 'Español, inglés y francés', 'Inglés'],
      ['Implantación', 'Alta e importación sin coste con pago anual', 'Dicen "en producción en 90 días" para Lemax GO'],
      ['Distribución y conexiones', 'Conexiones con tu web, tu contabilidad y tus herramientas de IA (Premium)', 'Conexión con proveedores, API de reservas, portal B2B, según su web'],
      ['Normas fiscales de España', 'REAV y Veri*Factu con QR', 'No publicado'],
      ['Alojamiento de datos', 'UE, un espacio propio por agencia', 'No publicado']
    ],
    otherBetter: [
      'Eres un turoperador o un DMC con un equipo de 15 o más personas y procesos complejos de varios días.',
      'Necesitas distribución, conexión con proveedores por API, un portal B2B para agencias o un motor de reservas online.',
      'Buscas un proveedor con más de 30 años y con clientes en varios continentes.',
      'Tienes presupuesto para un proyecto de implantación guiado.'
    ],
    usBetter: [
      'Quieres presupuestar, reservar y facturar todo el viaje en un solo sistema y arrancar con una puesta en marcha corta.',
      'Quieres ver el precio y los usuarios incluidos antes de pedir una demostración.',
      'Tu mercado es España y vendes en español y francés, con REAV y Veri*Factu.',
      'Quieres que importemos tus productos, precios y proveedores desde tus hojas de cálculo durante la puesta en marcha.'
    ],
    switching:
      'Si hoy usas Lemax y quieres pasar a Traviosoft, exporta tus productos y precios y pregúntanos cómo importarlos desde tus hojas de cálculo. Cambiar de herramienta en plena temporada es arriesgado: lo normal es hacerlo en temporada baja. Consulta la [página Cambiar](/switch).',
    faq: [
      { q: '¿Lemax sirve para un equipo de 4 personas?', a: ['Su paquete Lemax GO empieza en 15 usuarios, según su web. Para equipos más pequeños, pregúntales qué opciones tienen.'] },
      { q: '¿Por qué no aparece el precio de Lemax?', a: ['Porque no lo publican; dicen que el paquete y su implantación se acuerdan antes de firmar. Preferimos poner "No publicado" a estimarlo.'] },
      { q: '¿Traviosoft se conecta con mis otras herramientas?', a: ['Sí, en Premium. Tu web, tu programa de contabilidad o un desarrollador con el que trabajes pueden leer y escribir tus datos de Traviosoft, y puedes conectar el asistente de IA que ya usas.'] }
    ]
  },
  {
    key: 'vs-tourwriter',
    slug: 'traviosoft-vs-tourwriter',
    other: 'Tourwriter',
    metaTitle: 'Traviosoft vs Tourwriter para DMC y diseñadores de viaje',
    metaDescription:
      'Tourwriter es un software neozelandés para DMC de lujo. Comparamos precios de lista, idiomas, límites de itinerarios y fiscalidad en España con Traviosoft.',
    title: 'Traviosoft frente a Tourwriter: dos programas para diseñar viajes',
    lead: 'Tourwriter es un software neozelandés, con itinerarios muy cuidados, pensado para DMC y diseñadores de viajes de lujo y en inglés. Traviosoft tiene precios en euros con usuarios incluidos, trabaja en español y francés, e incluye REAV y Veri*Factu.',
    card: 'Itinerarios de lujo en inglés frente a un programa en euros con español y francés.',
    basis:
      'Los datos de Tourwriter vienen de su web (páginas de planes y empresa) y de Capterra, revisados el 3 de noviembre de 2026. Sus precios son "desde", en dólares, por usuario, y piden presupuesto: el total real puede variar.',
    rows: [
      ['Pensado para', 'Receptivos, DMC y agencias a medida', 'DMC y diseñadores de viajes de lujo, viajes FIT de varios días'],
      ['Empresa', 'Nacido en una agencia a medida de Barcelona; ver la página Sobre nosotros', 'Wellington (Nueva Zelanda), fundada en 2004'],
      ['Precio publicado', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos`, 'Starter desde 99 USD por usuario y mes; Pro desde 149 USD; Premium a consultar'],
      ['3 usuarios, por mes (precios de lista)', `${PRICES.classic.yearly} EUR`, 'Unos 447 USD en Pro (3 x 149)'],
      ['Puesta en marcha', 'Alta e importación sin coste con pago anual', 'Pago único desde 1.199 USD (migración, configuración y formación)'],
      ['Límite de itinerarios', 'Plan con usuarios incluidos', 'Starter hasta 25 al año; Pro hasta 50 al año; Premium sin límite'],
      ['Idiomas', 'Documentos en español, inglés, francés y más', 'Inglés'],
      ['Reseñas públicas', 'Todavía sin reseñas en directorios', 'Capterra 4,5 (42 reseñas)'],
      ['Normas fiscales de España', 'REAV y Veri*Factu con QR', 'No publicado']
    ],
    otherBetter: [
      'Vendes viajes de lujo en inglés y quieres itinerarios con un diseño muy trabajado.',
      'Valoras que otros DMC europeos ya lo usan y que hay reseñas públicas de usuarios.',
      'Quieres una incorporación guiada con formación incluida en el pago de puesta en marcha.',
      'Tu mercado principal es anglosajón y no necesitas documentos en español o francés.'
    ],
    usBetter: [
      'Quieres un precio en euros, con los usuarios incluidos en cada plan.',
      'Tu agencia está en España y necesitas REAV y Veri*Factu.',
      'Tus clientes hablan español o francés y quieres que presupuestos y correos salgan en su idioma.',
      'Prefieres no pagar una puesta en marcha de más de mil dólares al empezar.'
    ],
    switching:
      'Si usas Tourwriter, exporta tus productos, precios y proveedores a una hoja de cálculo y nosotros los importamos en el alta. Lo habitual es terminar los viajes en curso donde están y abrir las solicitudes nuevas en Traviosoft. Más pasos en la [página Cambiar](/switch).',
    faq: [
      { q: '¿Cuánto cuesta Tourwriter para 3 usuarios?', a: ['Con los precios de lista del plan Pro, unos 447 USD al mes (3 x 149) más una puesta en marcha desde 1.199 USD. Es un precio "desde" y piden presupuesto, así que confírmalo con ellos.'] },
      { q: '¿Tourwriter está en español?', a: ['Su web y producto están en inglés según lo que vimos. Si tus clientes necesitan documentos en español o francés, pregúntales cómo lo resuelven.'] },
      { q: '¿Traviosoft limita el número de itinerarios?', a: ['Los planes de Traviosoft se definen por usuarios incluidos. Consulta la página de precios para ver exactamente qué incluye cada plan.'] }
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
    'Comparativa honesta de Traviosoft, Ezus, Tourplan, Tourwriter, Lemax, Kaptio, GIAV y Excel: para quién es cada uno, precios publicados, idiomas y límites.',
  title: 'Mejor software para DMC y receptivos en España (2026)',
  lead: 'Para un DMC, receptivo o agencia a medida en España, las opciones son Traviosoft, Ezus, Tourplan, Tourwriter, Lemax, Kaptio y GIAV; muchas agencias empiezan también con Excel y Word. Esta guía los compara con datos públicos: para quién es cada uno, precio, idiomas y límites.',
  updated: UPDATED,
  card: 'Ocho opciones comparadas: para quién es cada una, precios publicados, idiomas y límites.',
  blocks: [
    {
      type: 'p',
      text: 'La lista la escribe Traviosoft, así que puedes dudar de nuestra imparcialidad. Por eso solo usamos datos públicos, indicamos "No publicado" cuando no hay dato y decimos dónde gana cada alternativa. Datos revisados el 3 de noviembre de 2026; los precios cambian, comprueba siempre las páginas oficiales.'
    },
    { type: 'h2', text: 'Tabla comparativa', id: 'tabla' },
    {
      type: 'table',
      head: ['Programa', 'Para quién es', 'Tamaño de equipo', 'Precio público', 'Idiomas', 'Fundación'],
      usRow: 0,
      rows: [
        ['Traviosoft', 'Receptivos, DMC y agencias a medida', `Dos planes, ${PRICES.usersIncluded} usuarios incluidos`, `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR al mes, ${PRICES.usersIncluded} usuarios incluidos`, 'Documentos en ES, EN, FR y más', 'Ver Sobre nosotros'],
        ['Ezus', 'DMC, receptivos, turoperadores y agencias', 'Professional hasta 10 usuarios; Enterprise desde 30', '75 EUR por usuario y mes (Professional); onboarding obligatorio de 1.990 EUR', 'Web y soporte en EN, FR, ES, IT, PT', '2019, París'],
        ['Tourplan', 'Turoperadores y DMC consolidados', 'Mínimo 5 usuarios, según Capterra', 'No publicado en su web; Capterra indica desde 250 USD por usuario y mes', 'Web en inglés, español y japonés', '1986, Nueva Zelanda'],
        ['Tourwriter', 'DMC y diseñadores de viajes de lujo', 'De 1 a más de 20 personas según plan', 'Desde 99 USD por usuario y mes; puesta en marcha desde 1.199 USD', 'Inglés', '2004, Nueva Zelanda'],
        ['Lemax', 'Turoperadores y DMC medianos y grandes', 'Lemax GO desde 15 usuarios', 'No publicado', 'Inglés', '1990, Croacia'],
        ['Kaptio', 'Operadores grandes de viajes de varios días', 'Empresa grande', 'No publicado', 'Inglés', '2012, Islandia'],
        ['GIAV', 'Agencias de viajes en España, sobre todo minoristas', 'No publicado', 'No publicado', 'No publicado', 'No publicado'],
        ['Excel + Word', 'Cualquier agencia que empieza', 'Una a tres personas en la práctica', 'La licencia que ya tengas', 'El que tú escribas', '1985 (Excel)']
      ]
    },
    { type: 'h2', text: 'Cada programa, con sus puntos fuertes y sus límites', id: 'programas' },
    { type: 'h3', text: 'Traviosoft' },
    {
      type: 'p',
      text: 'Cubre el viaje entero: solicitudes, catálogo con precios por temporada, presupuestos con margen y comisión, reservas, cobros y facturas, con REAV y Veri*Factu para España. Muestra el precio y no cobra el alta con pago anual. Sus límites: todavía no tiene reseñas en directorios.'
    },
    { type: 'h3', text: 'Ezus' },
    {
      type: 'p',
      text: 'Es el competidor más completo para un DMC: precios públicos, web en cinco idiomas y muchas referencias (Capterra 4,7 con 61 reseñas, según su web). Sus límites: el pack de onboarding de 1.990 EUR es obligatorio y su contenido en español no trata el REAV.'
    },
    { type: 'h3', text: 'Tourplan' },
    {
      type: 'p',
      text: 'Software con unos 40 años de historia para turoperadores y DMC, con clientes en unos 75 países según su web. Sus límites: no publica precios y Capterra indica un mínimo de 5 usuarios desde 250 USD por usuario y mes.'
    },
    { type: 'h3', text: 'Tourwriter' },
    {
      type: 'p',
      text: 'Muy bueno para itinerarios cuidados de viajes de lujo y con reseñas de usuarios (Capterra 4,5 con 42). Sus límites: está en inglés, los planes Starter y Pro limitan los itinerarios por año, y el precio por usuario sube con el equipo, además de la puesta en marcha.'
    },
    { type: 'h3', text: 'Lemax' },
    {
      type: 'p',
      text: 'Plataforma completa para turoperadores y DMC medianos y grandes, con distribución, API de reservas y portal B2B. Sus límites: Lemax GO empieza en 15 usuarios, no publica precios y su web está en inglés.'
    },
    { type: 'h3', text: 'Kaptio' },
    {
      type: 'p',
      text: 'Plataforma construida sobre Salesforce para operadores grandes de viajes de varios días; sus clientes citados en prensa incluyen grupos internacionales conocidos. Sus límites: es una solución empresarial, con venta por taller de descubrimiento y sin precios públicos.'
    },
    { type: 'h3', text: 'GIAV' },
    {
      type: 'p',
      text: 'Programa de gestión para agencias de viajes con larga presencia en España, usado sobre todo por agencias minoristas. No hemos podido verificar precios ni funciones propias de receptivos, así que si encaja con tu negocio, pídeles una demostración.'
    },
    { type: 'h3', text: 'Excel + Word' },
    {
      type: 'p',
      text: 'Gratis si ya tienes la licencia, flexible y conocido por todos. Sus límites aparecen con el volumen: fórmulas de margen copiadas a mano, versiones sueltas, facturas numeradas a mano y nada que avise de lo que falta por reservar.'
    },
    { type: 'h2', text: 'Cómo elegir', id: 'elegir' },
    {
      type: 'list',
      items: [
        'Cuenta cuántas personas usarán el programa y comprueba el mínimo de usuarios de cada opción.',
        'Calcula el coste del primer año, no solo la cuota mensual: suma la puesta en marcha y la importación de datos.',
        'Comprueba el idioma de los documentos que recibirá tu cliente, no solo el de la pantalla.',
        'Si tu agencia está en España, pregunta cómo se factura con REAV y si el programa cumple Veri*Factu.',
        'Pide una demostración con un viaje real tuyo y mide cuánto tardas en tener el presupuesto con margen.',
        'No cambies en plena temporada alta: termina los viajes abiertos y empieza lo nuevo en el programa nuevo.'
      ],
      ordered: true
    },
    { type: 'h2', text: 'Preguntas frecuentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: '¿Cuál es el mejor software para un DMC o agencia a medida en España?', a: ['Depende de tu forma de trabajar y tu mercado. Para llevar todo el viaje de la solicitud a la factura, con precio visible y facturación española, mira Traviosoft y Ezus. Si vendes sobre todo en inglés y viajes de lujo, mira también Tourwriter.'] },
        { q: '¿Cuánto cuesta un software para DMC?', a: [`Los precios públicos van de ${PRICES.classic.yearly} EUR al mes para ${PRICES.usersIncluded} usuarios (Traviosoft Classic) a 75 EUR por usuario y mes más 1.990 EUR de onboarding (Ezus). Tourplan, Lemax y Kaptio no publican precios.`] },
        { q: '¿Necesito un programa específico de viajes o me vale un ERP general?', a: ['Un ERP general lleva bien la contabilidad, pero no calcula presupuestos con margen por servicio ni lista reservas por viaje. Muchas agencias usan los dos.'] }
      ]
    },
    { type: 'p', text: 'Si quieres ver Traviosoft con un viaje tuyo, la [página Demo](/demo) explica cómo es la llamada.' }
  ]
};

const quote: Article = {
  key: 'quote-with-margins',
  kind: 'guide',
  slug: 'presupuesto-viaje-a-medida-con-margen',
  metaTitle: 'Presupuesto de viaje a medida con margen: guía y ejemplo',
  metaDescription:
    'Cómo calcular el precio de un viaje a medida: tarifas netas, recargo frente a margen, comisión y precio por persona, con un ejemplo con cifras paso a paso.',
  title: 'Cómo hacer un presupuesto de viaje a medida con margen',
  lead: 'Para fijar el precio de un viaje a medida, suma las tarifas netas y divide por uno menos el margen que quieres. Con un coste de 1.000 EUR y un margen del 25% sobre el precio de venta, el precio es 1.333,33 EUR. Si hay una comisión, también se resta en el divisor.',
  updated: UPDATED,
  card: 'Tarifa neta, recargo, margen y comisión: el cálculo explicado con un ejemplo real.',
  blocks: [
    {
      type: 'p',
      text: 'Un presupuesto de viaje a medida tiene tres capas: lo que te cobran los proveedores (la tarifa neta), lo que quieres ganar (el margen) y lo que pagas a quien te trae la venta (la comisión). El error más común es confundir recargo y margen. Esta guía los separa y lo calcula con cifras.'
    },
    { type: 'h2', text: 'Tarifa neta, recargo y margen', id: 'conceptos' },
    {
      type: 'p',
      text: 'La tarifa neta es lo que te cobra el proveedor, sin nada añadido. El recargo (markup) se calcula sobre ese coste. El margen se calcula sobre el precio de venta. Son porcentajes distintos para el mismo euro ganado. Con un coste de 1.000 EUR:'
    },
    {
      type: 'table',
      head: ['Recargo sobre el coste', 'Precio de venta', 'Ganas', 'Margen sobre el precio'],
      rows: [
        ['20%', '1.200,00 EUR', '200,00 EUR', '16,7%'],
        ['25%', '1.250,00 EUR', '250,00 EUR', '20,0%'],
        ['33,3%', '1.333,33 EUR', '333,33 EUR', '25,0%'],
        ['50%', '1.500,00 EUR', '500,00 EUR', '33,3%']
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
      text: 'Si quieres un margen del 25% sobre el precio de venta, el precio es 1.000 / (1 - 0,25) = 1.333,33 EUR. Tu margen es 333,33 EUR. Por persona, 666,67 EUR. Si hubieras sumado un 25% al coste, el precio sería 1.250 EUR y tu margen real solo el 20%.'
    },
    { type: 'h2', text: 'Cuando hay comisión', id: 'comision' },
    {
      type: 'p',
      text: 'Supón que otra agencia te trae la venta y le pagas el 10% del precio. Si dejas el precio en 1.333,33 EUR, la comisión son 133,33 EUR y tu margen baja a 200 EUR, un 15%. Para conservar el 25% tienes que restar la comisión en el divisor: 1.000 / (1 - 0,25 - 0,10) = 1.538,46 EUR.'
    },
    {
      type: 'list',
      items: [
        'Precio al cliente: 1.538,46 EUR (769,23 EUR por persona).',
        'Comisión del 10%: 153,85 EUR.',
        'Tu margen del 25%: 384,62 EUR.',
        'Coste neto: 1.000,00 EUR. (Las cifras tienen redondeos de céntimos.)'
      ]
    },
    { type: 'h2', text: 'Errores habituales', id: 'errores' },
    {
      type: 'list',
      items: [
        'Sumar un porcentaje al coste y llamarlo margen.',
        'Olvidar la comisión al dar un precio y descubrirlo al pagarla.',
        'Usar la tarifa de otra temporada: comprueba las fechas de cada precio.',
        'Redondear el precio por persona hacia abajo en un grupo grande: multiplica por los viajeros antes de redondear.',
        'No dejar fecha de validez en el presupuesto.',
        'Mezclar precios con y sin IVA en la misma suma. En España, además, el IVA de las agencias puede seguir el REAV: mira la guía del REAV.'
      ]
    },
    {
      type: 'callout',
      text: 'En Traviosoft defines una vez tus reglas de precio (margen, IVA y comisión) y cada línea de cada presupuesto las aplica, con el precio por persona y el total que ve el cliente.'
    },
    { type: 'h2', text: 'Preguntas frecuentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: '¿Qué margen debería aplicar?', a: ['No hay una cifra válida para todos. Depende de tu mercado, de tus costes fijos y de la competencia. Lo importante es que sea un porcentaje que conozcas y apliques igual en todos los presupuestos.'] },
        { q: '¿Se calcula el margen por servicio o por viaje?', a: ['Puedes hacer los dos. Un margen distinto por servicio (más en traslados, menos en el hotel) da más control, pero exige reglas claras para no equivocarte.'] }
      ]
    }
  ]
};

const rooming: Article = {
  key: 'rooming-list',
  kind: 'guide',
  slug: 'rooming-list-grupos-mice',
  metaTitle: 'Rooming list para grupos y MICE: plantilla y pasos',
  metaDescription:
    'Cómo preparar una rooming list para un grupo o evento MICE: columnas de la plantilla, ejemplo, pasos y errores que provocan problemas en recepción.',
  title: 'Cómo preparar una rooming list para un grupo o evento MICE',
  lead: 'Una rooming list es la lista que dice al hotel quién duerme en cada habitación, con tipo de habitación, fechas y peticiones. Tiene que estar completa antes de la fecha límite del contrato. Las columnas básicas son número de habitación, tipo, nombres, entrada, salida y observaciones.',
  updated: UPDATED,
  card: 'La plantilla de columnas, los pasos y los errores más comunes en una rooming list.',
  blocks: [
    {
      type: 'p',
      text: 'En un grupo, el hotel reserva un bloque de habitaciones y necesita saber cómo se reparten. Una rooming list limpia evita colas en recepción, camas equivocadas y cargos por habitaciones no usadas. Esta guía te da las columnas y el orden de trabajo.'
    },
    { type: 'h2', text: 'Las columnas de la plantilla', id: 'columnas' },
    {
      type: 'table',
      head: ['Columna', 'Qué escribir', 'Ejemplo'],
      rows: [
        ['Nº de habitación', 'Un número de orden; el hotel asigna el real', '1'],
        ['Tipo de habitación', 'Individual, doble, twin o triple', 'Twin'],
        ['Huésped 1', 'Nombre y apellidos tal como figuran en el pasaporte', 'Marta Ruiz Soler'],
        ['Huésped 2', 'Igual, si comparten', 'Pedro Vidal Mas'],
        ['Entrada', 'Fecha de llegada', '12/05/2027'],
        ['Salida', 'Fecha de salida', '15/05/2027'],
        ['Noches', 'Calculadas a partir de las fechas', '3'],
        ['Régimen', 'Solo alojamiento, desayuno, media pensión', 'Desayuno'],
        ['Llegada', 'Hora o vuelo, si importa para la entrada anticipada', 'Vuelo 10:40'],
        ['Peticiones', 'Dietas, accesibilidad, cama supletoria, planta alta', 'Sin gluten'],
        ['Empresa o grupo', 'Útil si hay varias facturas', 'Equipo comercial']
      ]
    },
    {
      type: 'p',
      text: 'Ejemplo de tamaño: un grupo de 22 personas se reparte en 9 habitaciones twin (18 personas) y 4 individuales, es decir, 13 habitaciones. Comprueba siempre que el total de personas de la lista coincide con el del grupo.'
    },
    { type: 'h2', text: 'Cómo prepararla, paso a paso', id: 'pasos' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Mira en el contrato del hotel la fecha límite para enviar la rooming list y la fecha de liberación del bloque. Suele ser unas semanas antes de la llegada; confírmalo en tu contrato.',
        'Pide a cada participante, o a la empresa organizadora, nombre completo, fechas, con quién comparte y peticiones especiales.',
        'Rellena la plantilla, una fila por habitación, y revisa que los nombres coinciden con el documento de viaje.',
        'Cuenta habitaciones y personas, y compáralas con el bloque reservado.',
        'Envía la lista al hotel y pide una confirmación por escrito.',
        'Guarda la versión enviada. Cada cambio posterior es una nueva versión con fecha.'
      ]
    },
    { type: 'h2', text: 'Errores que dan problemas', id: 'errores' },
    {
      type: 'list',
      items: [
        'Nombres con erratas o sin apellidos, que luego no coinciden con la reserva de vuelos.',
        'No saber si dos personas quieren cama doble o dos camas.',
        'Enviar la lista tarde y perder habitaciones del bloque.',
        'Cambios de última hora comunicados por teléfono y no por escrito.',
        'No incluir al guía, al conductor o al organizador, que también necesitan habitación.'
      ]
    },
    { type: 'h2', text: 'Preguntas frecuentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: '¿Cuándo hay que enviar la rooming list?', a: ['Cuando diga el contrato del hotel. Si no estás seguro, pregúntalo por escrito al hotel al confirmar el bloque.'] },
        { q: '¿Qué hago si cambian los nombres de última hora?', a: ['Envía una versión nueva al hotel con la fecha y marca lo que cambia. Evita avisar solo por teléfono.'] },
        { q: '¿Sirve la misma plantilla para un grupo pequeño?', a: ['Sí. Para grupos pequeños puedes quitar columnas, pero conserva nombres, tipo de habitación y fechas.'] }
      ]
    }
  ]
};

const startDmc: Article = {
  key: 'start-dmc-spain',
  kind: 'guide',
  slug: 'como-montar-un-receptivo-dmc-en-espana',
  metaTitle: 'Cómo montar un receptivo o DMC en España: pasos',
  metaDescription:
    'Pasos generales para montar una agencia receptiva o DMC en España: forma jurídica, registro autonómico, garantía, seguro y REAV. Consulta siempre con tu gestor.',
  title: 'Cómo montar un receptivo o DMC en España: los pasos',
  lead: 'Para montar un receptivo en España decides la forma jurídica, te das de alta en Hacienda, te inscribes en el registro de agencias de viajes de tu comunidad autónoma, constituyes la garantía exigida y contratas el seguro de responsabilidad civil. Los requisitos y los importes los fija cada comunidad.',
  updated: UPDATED,
  card: 'Forma jurídica, registro autonómico, garantía, seguro y REAV: el camino en orden.',
  blocks: [
    {
      type: 'p',
      text: 'Esta guía es un mapa general, no asesoramiento legal ni fiscal. Las reglas de las agencias de viajes dependen de la comunidad autónoma donde tengas la sede, y cambian. Antes de dar ningún paso, habla con un gestor o asesor y comprueba la normativa de turismo de tu comunidad.'
    },
    {
      type: 'callout',
      text: 'No damos importes de tasas, garantías ni seguros porque varían según la comunidad y el tipo de agencia. Pregunta a tu gestor y a la consejería de turismo.'
    },
    { type: 'h2', text: '1. Define qué vas a vender', id: 'definir' },
    {
      type: 'p',
      text: 'No es lo mismo recibir viajeros de fuera y venderles viajes a medida que vender solo servicios a otras agencias. Algunas comunidades distinguen tipos de agencia (mayorista, minorista, mayorista-minorista). Decide tu modelo antes del registro porque determina qué actividad declaras.'
    },
    { type: 'h2', text: '2. Elige la forma jurídica', id: 'forma-juridica' },
    {
      type: 'p',
      text: 'Las dos opciones habituales son autónomo (persona física) y sociedad limitada. La sociedad separa tu patrimonio personal del de la empresa, pero tiene más trámites. Tu gestor te dirá cuál conviene según tu volumen previsto y si tienes socios.'
    },
    { type: 'h2', text: '3. Inscríbete en el registro de agencias de viajes', id: 'registro' },
    {
      type: 'p',
      text: 'La actividad de agencia de viajes está regulada por cada comunidad autónoma. En muchas, el trámite es una declaración responsable y la inscripción en el registro de agencias de viajes de la comunidad. Pide a tu consejería de turismo la lista de documentos y los requisitos de local, titulación o responsable, si los hay.'
    },
    { type: 'h2', text: '4. Garantía o fianza y seguro', id: 'garantia' },
    {
      type: 'p',
      text: 'La normativa de viajes combinados obliga a las agencias a proteger al viajero frente a la insolvencia, normalmente con una garantía (aval, seguro de caución o fianza) cuyo importe fija cada comunidad. Además se suele exigir un seguro de responsabilidad civil. Pide presupuesto a tu aseguradora o banco con los requisitos exactos de tu registro.'
    },
    { type: 'h2', text: '5. Hacienda: alta, IVA y REAV', id: 'hacienda' },
    {
      type: 'p',
      text: 'Tu gestor te dará de alta en Hacienda y en la Seguridad Social. Las agencias de viajes que venden servicios comprados a terceros en nombre propio aplican normalmente el REAV, el régimen especial del IVA sobre el margen. Tenemos una guía aparte con ejemplos. También tendrás que facturar con un programa que cumpla Veri*Factu cuando te sea exigible.'
    },
    { type: 'h2', text: '6. Contratos, protección de datos y herramientas', id: 'resto' },
    {
      type: 'list',
      items: [
        'Contratos con hoteles, guías y transportistas, con precios netos y condiciones de cancelación claras.',
        'Condiciones generales de venta para tus clientes y aviso legal en tu web.',
        'Cumplimiento del RGPD: tratas pasaportes y datos de viajeros.',
        'Una herramienta para presupuestos, reservas y facturas. Puedes empezar con Excel y pasar a un software cuando el volumen lo pida.'
      ]
    },
    { type: 'h2', text: 'Preguntas frecuentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: '¿Necesito registrarme como agencia de viajes para ser receptivo?', a: ['Depende de lo que vendas y de tu comunidad autónoma. Si vendes viajes combinados o servicios a viajeros, lo habitual es que sí. Pregunta a la consejería de turismo y a tu gestor.'] },
        { q: '¿Cuánto cuesta montar un receptivo?', a: ['No damos cifras porque dependen de la forma jurídica, la garantía exigida en tu comunidad y el seguro. Pide presupuestos concretos.'] },
        { q: '¿Cuándo debo contratar un software?', a: ['Cuando los presupuestos, las reservas o las facturas te quiten tiempo o provoquen errores. Muchas agencias empiezan con hojas de cálculo.'] }
      ]
    }
  ]
};

const fromExcel: Article = {
  key: 'from-excel',
  kind: 'guide',
  slug: 'de-excel-a-un-software-de-agencia',
  metaTitle: 'De Excel a un software para tu agencia de viajes',
  metaDescription:
    'Cómo pasar tu agencia de viajes de Excel a un software: qué preparar, en qué orden hacerlo y cuándo esperar, sin perder datos ni parar la temporada.',
  title: 'De Excel a un software: cómo pasar tu agencia de viajes sin parar la temporada',
  lead: 'Para pasar de Excel a un software, limpia primero tu catálogo, tus proveedores y tus clientes, importa esos tres listados, y empieza con las solicitudes nuevas mientras terminas los viajes abiertos en tus archivos. Hazlo fuera de temporada alta.',
  updated: UPDATED,
  card: 'Qué preparar, en qué orden y cuándo conviene esperar antes de dejar las hojas de cálculo.',
  blocks: [
    {
      type: 'p',
      text: 'El miedo habitual es perder datos o quedarse sin poder trabajar una semana. Se evita si cambias por partes: no se trata de mover todo un lunes, sino de importar lo que es estable (catálogo, proveedores, clientes) y empezar por lo nuevo.'
    },
    { type: 'h2', text: 'Qué preparar antes', id: 'preparar' },
    {
      type: 'list',
      items: [
        'Una lista de productos con su nombre, proveedor, precio neto y periodo de validez.',
        'Una lista de proveedores con contacto y condiciones.',
        'Una lista de clientes sin duplicados, con idioma y correo.',
        'Tus reglas de precio: margen, comisión, IVA y si hay REAV.',
        'Una plantilla de presupuesto que quieras conservar y tus textos de correo habituales.'
      ]
    },
    { type: 'h2', text: 'El orden recomendado', id: 'orden' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Limpia los listados en Excel: quita duplicados, unifica nombres y completa los precios que faltan.',
        'Define tus reglas de precio una sola vez y comprueba con un presupuesto antiguo que da el mismo resultado.',
        'Importa productos, precios y proveedores. En Traviosoft lo hacemos durante el alta, desde tus hojas de cálculo, y no tiene coste con pago anual.',
        'Importa clientes y revisa los duplicados.',
        'Haz un viaje de prueba de principio a fin: solicitud, presupuesto, reserva, cobro y factura.',
        'Empieza a registrar las solicitudes nuevas allí y termina los viajes abiertos en tus archivos.',
        'Cuando se cierre el último viaje antiguo, archiva los archivos de Excel.'
      ]
    },
    { type: 'h2', text: 'Cuándo esperar', id: 'esperar' },
    {
      type: 'p',
      text: 'Si estás en plena temporada alta, aplaza el cambio. Un equipo que aprende una herramienta mientras sirve viajes comete errores. Lo ideal es hacerlo al inicio de la temporada baja, con tiempo para probar con un viaje real.'
    },
    { type: 'h2', text: 'Qué no hace falta mover', id: 'no-mover' },
    {
      type: 'p',
      text: 'No hace falta cargar el historial completo de viajes pasados. Conserva los archivos antiguos como archivo de consulta y trae solo lo que vas a reutilizar: tarifas vigentes, proveedores activos y clientes con los que seguirás trabajando. La [página Cambiar](/switch) tiene un calendario con más detalle.'
    },
    { type: 'h2', text: 'Preguntas frecuentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: '¿Cuánto tarda el cambio?', a: ['Depende de lo ordenados que estén tus archivos. La preparación de los listados suele ser la parte más larga; la importación en sí la hacemos nosotros durante el alta.'] },
        { q: '¿Puedo volver a Excel?', a: ['Sí. Si dejas de usar Traviosoft, recuperas tus datos en formatos estándar.'] },
        { q: '¿Y si mis archivos están muy desordenados?', a: ['Empieza por lo mínimo: productos y precios vigentes. El resto se puede completar sobre la marcha.'] }
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
  kind: 'spain',
  slug: 'verifactu-agencias-de-viajes',
  metaTitle: 'Veri*Factu para agencias de viajes: qué cambia',
  metaDescription:
    'Qué es Veri*Factu, a quién afecta, qué cambia en la facturación de una agencia de viajes, el código QR y cómo comprobar los plazos en la AEAT.',
  title: 'Veri*Factu para agencias de viajes: qué es y qué cambia',
  lead: 'Veri*Factu es el sistema de la Agencia Tributaria por el que el programa de facturación envía cada factura a Hacienda al emitirla y añade un código QR. Se regula en el Real Decreto 1007/2023. Los plazos se han aplazado más de una vez: consulta el calendario vigente de la AEAT.',
  updated: UPDATED,
  card: 'Qué es, quién debe cumplirlo y cómo cambia la factura de una agencia de viajes.',
  blocks: [
    {
      type: 'callout',
      text: 'Información general, no asesoramiento fiscal. Confirma con tu gestor si te afecta y desde cuándo.'
    },
    { type: 'h2', text: 'Qué es Veri*Factu', id: 'que-es' },
    {
      type: 'p',
      text: 'La normativa antifraude exige que los programas de facturación garanticen que una factura no se puede alterar sin dejar rastro. El Real Decreto 1007/2023 desarrolla esos requisitos. Hay dos formas de cumplir: guardar los registros de facturación con garantías técnicas, o la modalidad Veri*Factu, en la que cada factura se envía a la AEAT en el momento de emitirla.'
    },
    { type: 'h2', text: 'A quién afecta', id: 'a-quien' },
    {
      type: 'p',
      text: 'A empresarios y profesionales que emiten facturas con un programa informático, lo que incluye a las agencias de viajes. Hay excepciones: quienes ya informan a Hacienda con el Suministro Inmediato de Información (SII) y los territorios con régimen foral propio, que tienen sus sistemas. Pregunta a tu gestor en cuál estás.'
    },
    { type: 'h2', text: 'Qué cambia para una agencia', id: 'que-cambia' },
    {
      type: 'list',
      items: [
        'Las facturas deben salir de un programa que cumpla los requisitos, con el productor del programa responsable de ello.',
        'Una factura hecha a mano en una plantilla de Word o Excel que se puede editar después es difícil de encajar. Pregunta a tu gestor.',
        'Las facturas rectificativas y los abonos también son registros de facturación.',
        'En modalidad Veri*Factu, cada registro se envía a la AEAT al emitir la factura.',
        'Si aplicas REAV, la factura sigue llevando la mención del régimen especial.'
      ]
    },
    { type: 'h2', text: 'El código QR', id: 'qr' },
    {
      type: 'p',
      text: 'Las facturas incluyen un código QR que lleva a la sede de la AEAT, donde el cliente puede comprobar que la factura está registrada. En la modalidad Veri*Factu el QR va acompañado de la mención VERI*FACTU. Es una comprobación para el destinatario, no un trámite que tengas que hacer a mano.'
    },
    { type: 'h2', text: 'Plazos', id: 'plazos' },
    {
      type: 'p',
      text: 'Las fechas de entrada en vigor se han aplazado en varias ocasiones y pueden distinguir entre sociedades y autónomos. No fijamos aquí una fecha para no darte una cifra caducada: consulta el calendario vigente en la sede electrónica de la AEAT o pregunta a tu gestor.'
    },
    { type: 'h2', text: 'Cómo lo resuelve Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'En Traviosoft, el envío Veri*Factu con código QR está integrado: al emitir una factura desde un viaje, la factura queda registrada y lleva su QR, con la numeración propia de cada empresa. Se activa en los ajustes de país de España. No tienes que enviar nada a mano.'
    },
    { type: 'h2', text: 'Preguntas frecuentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: '¿Tengo que cambiar de programa de facturación?', a: ['Si tu programa actual no cumple los requisitos y te alcanza la obligación, sí. Pregunta a tu proveedor y a tu gestor.'] },
        { q: '¿Veri*Factu sustituye al SII?', a: ['No. Quien ya está en el SII tiene su propio sistema. Confirma con tu gestor cuál te corresponde.'] },
        { q: '¿El cliente tiene que hacer algo con el QR?', a: ['No. Es una forma de comprobar la factura en la sede de la AEAT si quiere.'] }
      ]
    }
  ]
};

const spainPage: Article = {
  key: 'spain-page',
  kind: 'spain',
  slug: 'software-agencias-viajes-espana',
  metaTitle: 'Software para agencias de viajes y DMC en España',
  metaDescription:
    'Traviosoft para una agencia en España: REAV en las facturas, Veri*Factu con QR, numeración por sociedad, exportación para el gestor y documentos en ES, EN y FR.',
  title: 'Software para agencias de viajes y DMC en España',
  lead: 'Traviosoft sirve a una agencia o DMC en España con presupuestos con margen, reservas, cobros y facturas. Etiqueta el REAV en las facturas, envía Veri*Factu con QR, numera por sociedad, prepara archivos para tu gestor y saca los documentos en español, inglés y francés. Datos alojados en la UE.',
  updated: UPDATED,
  card: 'Lo que Traviosoft hace por una agencia española: REAV, Veri*Factu y exportación para el gestor.',
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
        'Veri*Factu: el envío con código QR está integrado en la factura.',
        'Numeración por sociedad: cada empresa de tu grupo mantiene su propia serie de facturas.',
        'Exportación para el gestor: un resumen en Excel o un zip con todas las facturas en PDF de cualquier periodo.',
        'Documentos para clientes extranjeros: presupuestos, correos, propuestas e itinerarios en español, inglés y francés, con tu marca.',
        'Datos en la UE: cada agencia tiene su propio espacio, alojado en la Unión Europea.'
      ]
    },
    { type: 'h2', text: 'Del presupuesto a la factura', id: 'flujo' },
    {
      type: 'p',
      text: 'Los precios de tu catálogo, con sus temporadas y proveedores, se convierten en un presupuesto con tu margen, tu IVA y tu comisión. El primer pago del cliente abre el pedido, y la factura sale de las mismas líneas, sin teclear nada dos veces. Si cambia algo, se corrige en un solo sitio.'
    },
    { type: 'h2', text: 'Guías para España', id: 'guias' },
    {
      type: 'list',
      items: [
        'REAV: el régimen especial de agencias de viajes explicado con ejemplos (/es/guides/guia-reav-agencias-de-viajes).',
        'Veri*Factu para agencias de viajes (/es/guides/verifactu-agencias-de-viajes).'
      ]
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
      text: 'Información general, no asesoramiento fiscal ni legal. Confirma con tu gestor cómo se aplican el REAV y Veri*Factu en tu caso.'
    }
  ]
};

export const articles: Article[] = [best, ...comparisons, quote, rooming, startDmc, fromExcel, reav, verifactu, spainPage];
