import type { Article } from '../types';

// Artículos añadidos el 28 de noviembre de 2026, elegidos a partir de las búsquedas de Search Console y los volúmenes del planificador de palabras clave de Google Ads.

const dmc: Article = {
  key: 'what-is-a-dmc',
  kind: 'guide',
  slug: 'que-es-una-dmc',
  metaTitle: 'Qué es una DMC (agencia receptiva)',
  metaDescription:
    'Qué es una DMC, qué organiza, quiénes son sus clientes, en qué se diferencia de un turoperador o una agencia de viajes y cómo calcula sus precios.',
  title: '¿Qué es una DMC?',
  lead: 'Una DMC (destination management company), o agencia receptiva, es una empresa situada en un destino que organiza lo que los viajeros hacen allí: traslados, guías, excursiones, hoteles, restaurantes y eventos. Sus clientes suelen ser turoperadores, agencias de viajes y organizadores de eventos, que venden el viaje al viajero.',
  updated: '2026-11-28',
  card: 'Qué organiza una DMC, quiénes son sus clientes y cómo calcula sus precios.',
  related: ['hotel-allotment', 'package-quote', 'quote-with-margins', 'net-commissionable-rates', 'best-dmc-software'],
  blocks: [
    { type: 'h2', text: 'Definición', id: 'definition' },
    {
      type: 'p',
      text: 'ADMEI, la asociación internacional de DMC, define una DMC como una empresa de servicios situada en su destino, especializada en el conocimiento y los recursos locales. La describe como un socio para la gestión de eventos, las visitas y actividades, el transporte, el ocio y la logística de los programas.'
    },
    {
      type: 'p',
      text: 'En Europa también se habla de turismo receptivo: agencia receptiva en español, agence réceptive en francés, incoming en italiano y turismo recetivo en portugués.'
    },
    { type: 'h2', text: 'Qué organiza una DMC', id: 'services' },
    {
      type: 'list',
      items: [
        'Los traslados entre el aeropuerto, los hoteles y los lugares que se visitan.',
        'Los hoteles, a menudo con tarifas negociadas para la temporada.',
        'Los guías, excursiones, visitas y actividades.',
        'Los restaurantes, cenas privadas y eventos temáticos.',
        'Para grupos y eventos: los espacios, la logística de congresos y los viajes de incentivo.',
        'El seguimiento en destino mientras los viajeros están allí.'
      ]
    },
    {
      type: 'p',
      text: 'Smart Meetings compara a la DMC con el arquitecto y a la vez con la constructora de un programa: diseña la propuesta, contrata y coordina a los proveedores locales y supervisa el programa en destino.'
    },
    { type: 'h2', text: 'Quiénes son sus clientes', id: 'clients' },
    {
      type: 'list',
      items: [
        'Turoperadores y agencias de viajes de otros países, que venden el viaje a sus propios clientes.',
        'Organizadores de reuniones, incentivos y eventos (MICE), para grupos y programas de empresa.',
        'Empresas que organizan un viaje o un evento para sus equipos.',
        'Algunas DMC también venden directamente a los viajeros.'
      ]
    },
    { type: 'h2', text: 'DMC, turoperador, agencia de viajes y DMO', id: 'differences' },
    {
      type: 'table',
      head: ['Término', 'Qué suele significar'],
      rows: [
        ['DMC', 'Una empresa del destino que organiza los servicios allí y los vende a agencias, turoperadores y organizadores de eventos.'],
        ['Turoperador', 'Una empresa que diseña viajes, a menudo en varios destinos, y los vende a través de agencias o directamente. Suele trabajar con una DMC en cada destino.'],
        ['Agencia de viajes', 'Una empresa que vende viajes a los viajeros. Una agencia de viajes a medida diseña el viaje con el viajero y reserva los servicios, a veces a través de una DMC.'],
        ['DMO', 'Una organización de gestión o promoción del destino, normalmente pública o sin ánimo de lucro, como una oficina de turismo. En general no vende viajes.']
      ]
    },
    {
      type: 'p',
      text: 'Estas actividades se solapan. Una DMC también puede ser turoperador, y una agencia a medida puede organizar su propio destino. La situación legal de cada empresa depende de las normas de viajes de su país.'
    },
    { type: 'h2', text: 'Cómo calcula sus precios una DMC', id: 'pricing' },
    {
      type: 'p',
      text: 'Una DMC suele comprar a sus proveedores a tarifas netas, añade su margen y vende a la agencia o al turoperador, que añade su propio margen o cobra una comisión. Las páginas [Tarifas netas y tarifas comisionables](/guides/tarifas-netas-y-tarifas-comisionables) y [Cómo se calcula el precio de un viaje a medida](/guides/presupuesto-viaje-a-medida-con-margen) muestran el cálculo con cifras.'
    },
    {
      type: 'p',
      text: 'Para grupos y programas regulares, una DMC suele tener cupos de habitaciones en hoteles, con una fecha de release para las habitaciones que no ha vendido. La página [El cupo de hotel y la fecha de release](/guides/cupo-hotel-allotment-release) explica cómo funciona.'
    },
    { type: 'h2', text: 'Una solicitud, paso a paso', id: 'steps' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Una agencia envía una solicitud: fechas, número de viajeros, presupuesto y preferencias.',
        'La DMC consulta la disponibilidad con sus proveedores y prepara un programa con precio.',
        'La agencia confirma, a menudo después de una o dos versiones.',
        'La DMC reserva cada servicio, reúne las confirmaciones y envía los bonos y la rooming list.',
        'Llegan los viajeros; la DMC sigue el programa en destino.',
        'La DMC factura a la agencia y paga a sus proveedores.'
      ]
    },
    {
      type: 'p',
      text: 'Según Smart Meetings, algunas DMC estiman que una cuarta parte o menos de sus propuestas se convierte en contrato, por eso cuenta el tiempo dedicado a cada propuesta.'
    },
    { type: 'h2', text: 'Asociaciones', id: 'associations' },
    {
      type: 'p',
      text: 'ADMEI (Association of Destination Management Executives International) reúne a DMC. Sus requisitos de admisión piden visitas y actividades y transporte, y al menos dos de estas actividades: gestión de eventos, ocio y logística de programas. Muchos países tienen también asociaciones nacionales de agencias receptivas.'
    },
    { type: 'h2', text: 'En Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'Traviosoft es un [software de gestión para agencias de viajes a medida y DMC](/). Reúne las solicitudes, un catálogo con las tarifas netas por temporada, los presupuestos con margen y comisión, las reservas con cada proveedor, los cobros y las facturas de cada viaje.'
    },
    { type: 'h2', text: 'Preguntas', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: '¿Qué significa DMC?', a: ['Destination management company, es decir, empresa de gestión del destino. En turismo y eventos, la sigla casi siempre se refiere a una agencia receptiva.'] },
        { q: '¿Una DMC es una agencia de viajes?', a: ['Una DMC trabaja en el destino y vende sobre todo a otras empresas de viajes. Según el país, puede tener licencia de agencia de viajes o de turoperador.'] },
        { q: '¿Qué diferencia hay entre una DMC y una DMO?', a: ['Una DMC es una empresa que vende servicios en un destino. Una DMO suele ser un organismo público o sin ánimo de lucro que promociona el destino.'] },
        { q: '¿Cómo gana dinero una DMC?', a: ['Con el margen entre las tarifas netas que paga a sus proveedores y el precio al que vende. Algunas también cobran las propuestas o las visitas de inspección.'] }
      ]
    },
    {
      type: 'p',
      text: 'Fuentes (en inglés): [requisitos de admisión de ADMEI](https://growthzonesitesprod.azureedge.net/wp-content/uploads/sites/1073/2020/03/DMC-MEMBERSHIP-REQUIREMENTS.pdf), [Smart Meetings, «The evolution of the DMC»](https://www.smartmeetings.com/meeting-planning/133619/evolution-dmc), [Wikipedia, «Destination management»](https://en.wikipedia.org/wiki/Destination_management). Consultadas el 28 de noviembre de 2026.'
    }
  ]
};

const allotment: Article = {
  key: 'hotel-allotment',
  kind: 'guide',
  slug: 'cupo-hotel-allotment-release',
  metaTitle: 'Cupo de hotel (allotment): fecha de release y cut-off',
  metaDescription:
    'Qué es un cupo de hotel o allotment, cómo funcionan la fecha de release y el cut-off, qué pasa con las habitaciones sin vender, con un ejemplo.',
  title: 'El cupo de hotel y la fecha de release',
  lead: 'Un cupo, o allotment, es un número de habitaciones que un hotel reserva para un turoperador, una DMC o una agencia, a una tarifa acordada, durante un periodo. Las habitaciones que no se han vendido en la fecha de release vuelven al hotel, que las vende por sus otros canales.',
  updated: '2026-11-28',
  card: 'Cupo, fecha de release, cut-off, wash y attrition, con un ejemplo.',
  related: ['rooming-list', 'what-is-a-dmc', 'net-commissionable-rates', 'quote-with-margins'],
  blocks: [
    { type: 'h2', text: 'Qué es un cupo', id: 'definition' },
    {
      type: 'p',
      text: 'El hotel aparta un número de habitaciones por noche para un socio, para toda una temporada, parte de ella o fechas concretas, a una tarifa fijada de antemano. El socio vende esas habitaciones a sus propios clientes, dentro de un viaje o un programa. Las habitaciones fuera de cupo se reservan bajo petición: cada reserva espera la confirmación del hotel.'
    },
    {
      type: 'p',
      text: 'Según Wikipedia, los hoteles conceden cupos sobre todo a socios con historial de ventas, con tarifas entre un 10 % y un 50 % por debajo del precio público.'
    },
    { type: 'h2', text: 'Fecha de release y cut-off', id: 'release' },
    {
      type: 'p',
      text: 'El periodo de release, también llamado cut-off, es el número de días antes de la llegada en que las habitaciones no vendidas vuelven al hotel. Después de esa fecha, una nueva reserva depende de lo que el hotel tenga aún disponible.'
    },
    {
      type: 'table',
      head: ['Fuente', 'Periodo de release que indica'],
      rows: [
        ['Wikipedia y Xotels', 'Un ejemplo de 4 días antes de la llegada'],
        ['Fáilte Ireland', '14 o 7 días antes de la fecha bloqueada, a las 12:00'],
        ['Roommaster', 'De 21 a 45 días en la mayoría de mercados vacacionales; menos en cupos de empresa']
      ]
    },
    { type: 'p', text: 'El contrato con cada hotel fija el periodo. Puede cambiar según la temporada.' },
    { type: 'h2', text: 'Dos tipos de cupo', id: 'kinds' },
    {
      type: 'list',
      items: [
        '**Fijo:** un número de habitaciones por noche, con una sola fecha de release para todo el bloque.',
        '**A demanda (call-off):** el socio toma habitaciones de un stock a medida que llegan las reservas, y las habitaciones se liberan de forma escalonada.'
      ]
    },
    {
      type: 'p',
      text: 'Un bloqueo para un grupo funciona de forma parecida para una sola estancia: el hotel guarda las habitaciones hasta una fecha límite, en la que espera la rooming list.'
    },
    { type: 'h2', text: 'Wash y attrition', id: 'wash' },
    {
      type: 'list',
      items: [
        '**Wash:** la parte de un bloque que queda sin vender en la fecha de release. Un socio que vende 70 habitaciones de un bloque de 100 tiene un wash del 30 %.',
        '**Attrition:** una cláusula que fija lo que paga el socio si usa menos habitaciones de las acordadas.'
      ]
    },
    {
      type: 'p',
      text: 'Los hoteles también comparan los cupos con los niveles de producción acordados, cada trimestre o cada año. Cuando un cupo se usa menos de lo acordado, el contrato puede permitir al hotel reducirlo o cambiar la tarifa.'
    },
    { type: 'h2', text: 'Ejemplo', id: 'example' },
    {
      type: 'p',
      text: 'Una DMC tiene un cupo de 10 habitaciones dobles por noche en un hotel de mayo a septiembre, con un periodo de release de 21 días. Para la noche del 12 de junio, la fecha de release es el 22 de mayo.'
    },
    {
      type: 'table',
      head: ['Fecha', 'Habitaciones vendidas', 'Habitaciones en cupo'],
      rows: [
        ['1 de mayo', '4', '10'],
        ['22 de mayo (fecha de release)', '7', '7: las 3 habitaciones sin vender vuelven al hotel'],
        ['2 de junio', '8', 'La 8.ª habitación se reserva bajo petición']
      ]
    },
    { type: 'p', text: 'Para esa noche, el wash es de 3 habitaciones de 10, es decir, el 30 %. (Ejemplo inventado para esta página.)' },
    { type: 'h2', text: 'La rooming list', id: 'rooming-list' },
    {
      type: 'p',
      text: 'Para un grupo, el hotel suele esperar los nombres en la fecha límite, en una rooming list. La página [La rooming list para grupos y eventos MICE](/guides/rooming-list-grupos-mice) describe lo que contiene.'
    },
    { type: 'h2', text: 'En Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'En Traviosoft, cada reserva con un hotel es una tarea del viaje, desde la solicitud hasta la confirmación del hotel, y la rooming list por hotel se construye a partir de quién comparte con quién.'
    },
    { type: 'h2', text: 'Preguntas', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: '¿Qué diferencia hay entre un cupo y un bloqueo de grupo?', a: ['Un cupo cubre un periodo, a menudo una temporada, y el socio vende las habitaciones a muchos clientes. Un bloqueo de grupo cubre la estancia de un solo grupo.'] },
        { q: '¿Qué pasa después de la fecha de release?', a: ['Las habitaciones sin vender vuelven al hotel, que puede venderlas a sus tarifas del momento. Una reserva posterior depende de la disponibilidad.'] },
        { q: '¿El periodo de release es un plazo de cancelación?', a: ['Son dos cláusulas distintas. El periodo de release se aplica a las habitaciones sin vender; las condiciones de cancelación, a las habitaciones ya reservadas.'] }
      ]
    },
    {
      type: 'p',
      text: 'Fuentes (en inglés): [Wikipedia, «Allotment (travel industry)»](https://en.wikipedia.org/wiki/Allotment_(travel_industry)), [glosario de Xotels, allotment](https://xotels.com/en/glossary/allotment) y [cut-off](https://xotels.com/en/glossary/cut-off), [Fáilte Ireland, condiciones para contratos B2B](https://failteireland.ie/FailteIreland/media/WebsiteStructure/Documents/Brexit/Considerations-for-T-Cs-for-B2B-Contracting-Accomm-Providers.pdf), [Roommaster](https://www.roommaster.com/blog/hotel-allotment-management), [Mews](https://www.mews.com/en/blog/hotel-room-allotment). Consultadas el 28 de noviembre de 2026.'
    }
  ]
};

const PKG_DISCLAIMER =
  'Información general, redactada el 28 de noviembre de 2026 a partir del texto de la directiva europea. No es asesoramiento jurídico y no tiene valor legal. Cada país aplica la directiva con su propia ley, que puede añadir normas: consulta los textos oficiales o a un asesor cualificado. Traviosoft no asume ninguna responsabilidad por las decisiones tomadas a partir de esta página.';

const packageQuote: Article = {
  key: 'package-quote',
  kind: 'guide',
  slug: 'presupuesto-viaje-combinado-informacion',
  metaTitle: 'Presupuesto de viaje combinado: la información obligatoria',
  metaDescription:
    'Cuándo un viaje a medida es un viaje combinado según la Directiva (UE) 2015/2302 y qué información dan el presupuesto y el contrato al viajero.',
  title: 'Qué contiene el presupuesto de un viaje combinado',
  lead: 'Cuando una agencia combina un vuelo, un hotel, un coche o una excursión para el mismo viaje, el viaje suele ser un viaje combinado según la directiva europea. La directiva enumera la información que recibe el viajero antes de reservar y lo que añade el contrato.',
  updated: '2026-11-28',
  card: 'Cuándo un viaje es combinado, y la información del presupuesto y del contrato.',
  related: ['quote-with-margins', 'what-is-a-dmc', 'eu-vat-travel', 'gdpr-travel'],
  blocks: [
    { type: 'callout', text: PKG_DISCLAIMER },
    { type: 'h2', text: 'Cuándo un viaje es combinado', id: 'package' },
    {
      type: 'p',
      text: 'El artículo 3 de la Directiva (UE) 2015/2302 distingue cuatro tipos de servicios de viaje: el transporte de pasajeros, el alojamiento, el alquiler de coches y motos, y otros servicios turísticos como excursiones o visitas guiadas. Un viaje combinado es la combinación de al menos dos tipos distintos para el mismo viaje, cuando se da uno de estos casos:'
    },
    {
      type: 'list',
      items: [
        'un empresario los combina antes de celebrar un contrato único, también a petición del viajero;',
        'se compran en un único punto de venta y se eligen antes de que el viajero acepte pagar;',
        'se ofrecen o se cobran a un precio a tanto alzado o global;',
        'se anuncian o se venden como «viaje combinado» o con un nombre parecido;',
        'se reservan mediante procesos de reserva en línea conectados, en las condiciones del artículo.'
      ]
    },
    {
      type: 'p',
      text: 'Un hotel combinado solo con servicios turísticos como excursiones no es un viaje combinado cuando esos servicios no suponen una parte significativa del valor del viaje y no se anuncian como un elemento esencial.'
    },
    { type: 'h2', text: 'La información que se da antes de reservar', id: 'information' },
    {
      type: 'p',
      text: 'Según el artículo 5, antes de que el viajero quede obligado, el organizador entrega el formulario de información normalizada del anexo I y la siguiente información:'
    },
    {
      type: 'table',
      head: ['Artículo 5(1)', 'Información'],
      rows: [
        ['a)', 'Las características principales: destinos, itinerario, fechas y número de noches; transporte, horarios y escalas; ubicación, características y categoría del alojamiento; régimen de comidas; visitas y excursiones incluidas; si el viaje es en grupo y su tamaño aproximado; idioma de los servicios guiados; y si el viaje es apto para personas con movilidad reducida.'],
        ['b)', 'El nombre comercial y la dirección del organizador y del minorista, con teléfono y correo electrónico.'],
        ['c)', 'El precio total, con impuestos, tasas y otros gastos, o el tipo de gastos que quedan por pagar cuando no se pueden calcular de antemano.'],
        ['d)', 'Las modalidades de pago: el anticipo como importe o porcentaje, y las fechas del resto del pago.'],
        ['e)', 'El número mínimo de viajeros, si lo hay, y la fecha hasta la que se puede cancelar el viaje si no se alcanza.'],
        ['f)', 'Información general sobre pasaportes, visados y formalidades sanitarias del destino.'],
        ['g)', 'Que el viajero puede cancelar en cualquier momento antes del inicio, pagando una penalización.'],
        ['h)', 'Los seguros, opcionales u obligatorios, que cubren la cancelación o la asistencia y repatriación.']
      ]
    },
    {
      type: 'p',
      text: 'El artículo 5(3) pide que esta información se dé de forma clara, comprensible y destacada, y que sea legible cuando se da por escrito.'
    },
    { type: 'h2', text: 'Lo que añade el contrato', id: 'contract' },
    { type: 'p', text: 'El artículo 7 enumera lo que contiene el contrato de viaje combinado además de la información anterior:' },
    {
      type: 'list',
      items: [
        'las peticiones especiales que el organizador ha aceptado;',
        'que el organizador es responsable de la correcta ejecución de los servicios y debe prestar asistencia al viajero en dificultades;',
        'el nombre y los datos de contacto de la protección frente a la insolvencia;',
        'un representante local o un punto de contacto para ayuda y reclamaciones;',
        'la obligación de comunicar sin demora cualquier problema durante el viaje;',
        'para menores que viajan solos, un contacto en el lugar de estancia;',
        'los procedimientos de reclamación, incluida la resolución alternativa de litigios;',
        'el derecho a ceder el contrato a otro viajero.'
      ]
    },
    {
      type: 'p',
      text: 'El viajero recibe una copia o una confirmación del contrato en un soporte duradero, como un PDF. Con antelación suficiente antes de la salida, el organizador envía los recibos, bonos y billetes y los horarios de salida y regreso.'
    },
    { type: 'h2', text: 'Cambios de precio después de reservar', id: 'price' },
    {
      type: 'p',
      text: 'Según el artículo 10, el precio solo puede subir después de reservar si el contrato lo prevé, y solo por cambios en el coste del combustible para el transporte, en los impuestos y tasas fijados por terceros o en los tipos de cambio. Se avisa al viajero como mínimo 20 días antes del inicio, con el cálculo. Por encima del 8 % del precio total, el viajero puede aceptar el cambio o cancelar sin penalización. Cuando estos costes bajan, el viajero tiene derecho a una reducción del precio.'
    },
    { type: 'h2', text: 'Cancelación', id: 'cancellation' },
    {
      type: 'list',
      items: [
        'El viajero puede cancelar en cualquier momento antes del inicio, pagando una penalización adecuada y justificable. El contrato puede fijar penalizaciones tipo según la fecha de cancelación (artículo 12(1)).',
        'El viajero cancela sin penalización cuando circunstancias inevitables y extraordinarias en el destino o en sus inmediaciones afectan de forma significativa al viaje (artículo 12(2)).',
        'El organizador puede cancelar cuando se inscriben menos viajeros que el mínimo indicado: como tarde 20 días antes de un viaje de más de seis días, 7 días antes de un viaje de dos a seis días y 48 horas antes de uno más corto (artículo 12(3)).',
        'Los reembolsos se pagan en los 14 días siguientes a la cancelación (artículo 12(4)).'
      ]
    },
    { type: 'h2', text: 'El nombre del viaje combinado en cada idioma', id: 'names' },
    {
      type: 'p',
      text: 'La directiva habla de «viaje combinado» en español, «package» en inglés, «voyage à forfait» en francés, «pacchetto turistico» en italiano y «viagem organizada» en portugués. Cada país la ha incorporado a su propia ley; en España, al texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios.'
    },
    { type: 'h2', text: 'En Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'En Traviosoft, el presupuesto que recibe el cliente muestra el programa día a día, lo que incluye y lo que no incluye, el total y el precio por persona, el anticipo y las fechas del resto del pago, y la fecha hasta la que es válido.'
    },
    { type: 'h2', text: 'Preguntas', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: '¿Un viaje a medida es un viaje combinado?', a: ['A menudo, cuando combina al menos dos tipos de servicios de viaje para el mismo viaje, como un vuelo y un hotel, o un hotel y un coche. El artículo 3 de la directiva da todas las condiciones.'] },
        { q: '¿La directiva se aplica a los viajes de negocios?', a: ['El artículo 2 excluye los viajes combinados comprados con un convenio general para viajes de negocios entre una empresa y un empresario. Otros viajes de negocios pueden estar incluidos.'] },
        { q: '¿Puede cambiar el precio después de reservar?', a: ['Solo si el contrato lo prevé, por los motivos del artículo 10, y como tarde 20 días antes del inicio.'] }
      ]
    },
    {
      type: 'p',
      text: 'Texto oficial: [Directiva (UE) 2015/2302 en EUR-Lex](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32015L2302), disponible en todas las lenguas de la UE.'
    }
  ]
};

export const posts: Article[] = [dmc, allotment, packageQuote];
