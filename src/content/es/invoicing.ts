import type { Article, Faq } from '../types';

const UPDATED = '2026-11-14';

type Country = {
  key: string; slug: string; metaTitle: string; metaDescription: string; title: string; lead: string; card: string;
  scheme: string[]; invoice: string[]; einvoice: string[]; change: string[]; tool: string; faq: Faq[]; sources: string;
};

function guide(c: Country): Article {
  return {
    key: c.key, kind: 'invoicing', slug: c.slug, metaTitle: c.metaTitle, metaDescription: c.metaDescription,
    title: c.title, lead: c.lead, updated: UPDATED, card: c.card,
    blocks: [
      { type: 'callout', text: 'Información general, actualizada a 14 de noviembre de 2026. No es asesoramiento fiscal: las fechas cambian, confirma tu caso con tu gestor.' },
      { type: 'h2', text: 'El régimen de IVA de las agencias de viajes', id: 'regimen' },
      ...c.scheme.map(text => ({ type: 'p' as const, text })),
      { type: 'h2', text: 'Qué muestra la factura', id: 'factura' },
      { type: 'list', items: c.invoice },
      { type: 'h2', text: 'Factura electrónica: las fechas', id: 'factura-electronica' },
      { type: 'list', items: c.einvoice },
      { type: 'h2', text: 'Qué cambia para una agencia', id: 'agencia' },
      { type: 'list', items: c.change },
      { type: 'h2', text: 'En Traviosoft', id: 'traviosoft' },
      { type: 'p', text: c.tool },
      { type: 'h2', text: 'Preguntas', id: 'faq' },
      { type: 'faq', items: c.faq },
      { type: 'p', text: c.sources }
    ]
  };
}

const OUTSIDE_SPAIN = 'Las facturas de anticipo y final y las rectificativas se hacen desde el viaje, con los importes del presupuesto aceptado y la mención del régimen de agencias de viajes cuando lo activas. Fuera de España, las facturas salen por el programa de facturación que ya usas, que es donde se cumplen las normas de factura electrónica de tu país.';

const countries: Country[] = [
  {
    key: 'invoicing-spain',
    slug: 'facturacion-agencia-de-viajes-espana',
    metaTitle: 'Facturación de agencias de viajes en España: REAV, Veri*Factu y factura electrónica',
    metaDescription: 'Cómo factura una agencia de viajes o un DMC en España: el REAV, qué muestra la factura, las fechas de Veri*Factu y la factura electrónica entre empresas.',
    title: 'Facturación de agencias de viajes en España',
    lead: 'En España, una agencia que vende viajes en nombre propio suele pagar el IVA sobre su margen, con el REAV. Las facturas deben salir de un programa que cumpla la normativa antifraude (Veri*Factu), y la factura electrónica entre empresas será obligatoria por etapas.',
    card: 'REAV, Veri*Factu y factura electrónica entre empresas, con las fechas vigentes.',
    scheme: [
      'El REAV (régimen especial de las agencias de viajes, artículos 141 a 147 de la Ley del IVA) se aplica cuando la agencia vende en nombre propio y utiliza servicios comprados a otros empresarios: hoteles, transportes, guías. El IVA se paga sobre el margen, el precio cobrado menos lo pagado a los proveedores, y no sobre el precio total.',
      'Una agencia que solo media y cobra una comisión en nombre del proveedor tributa por esa comisión en el régimen general.'
    ],
    invoice: [
      'En el REAV, la factura al cliente no desglosa el IVA.',
      'Lleva la mención «Régimen especial de las agencias de viajes».',
      'Cada sociedad mantiene su propia serie, y las correcciones se hacen con una factura rectificativa.'
    ],
    einvoice: [
      'Veri*Factu: el Real Decreto 1007/2023 exige un programa de facturación que conserve cada registro de factura sin posibilidad de alterarlo. El Real Decreto-ley 15/2025 fija el inicio el 1 de enero de 2027 para los contribuyentes del Impuesto sobre Sociedades y el 1 de julio de 2027 para autónomos y demás obligados.',
      'En octubre de 2026, Hacienda anunció un nuevo aplazamiento a 2028. Mientras no se publique en el BOE, las fechas de 2027 son las vigentes.',
      'Factura electrónica entre empresas: el Real Decreto 238/2026 hace obligatoria la factura electrónica estructurada entre empresarios. Se aplica 12 meses después de su orden ministerial para las empresas con más de 8 millones de euros de facturación, y 24 meses después para el resto.',
      'Quienes ya están en el SII, y el País Vasco y Navarra, tienen sus propios sistemas.'
    ],
    change: [
      'Una factura hecha en una plantilla de Word o Excel editable encaja mal con estas normas. Pregunta a tu gestor.',
      'Cada factura lleva un código QR con el que el cliente puede comprobarla en la sede de la AEAT.',
      'Las facturas a otras empresas, como las agencias que revenden tus viajes, viajarán como facturas electrónicas estructuradas.'
    ],
    tool: 'En Traviosoft, la facturación para España está integrada: las facturas salen del viaje con la mención del REAV, cada sociedad mantiene su serie y Veri*Factu se activa en los ajustes de país de España. Si quieres el detalle, lee la [guía de Veri*Factu para agencias de viajes](/guides/verifactu-agencias-de-viajes).',
    faq: [
      { q: '¿El REAV se aplica a viajes vendidos a empresas?', a: ['Hay opciones para clientes empresarios y para servicios prestados fuera de la UE. Pregunta a tu gestor cuál te corresponde.'] },
      { q: '¿Veri*Factu sustituye al SII?', a: ['No. Quien está en el SII sigue usándolo.'] }
    ],
    sources: 'Fuentes oficiales: [Agencia Tributaria](https://sede.agenciatributaria.gob.es) y el [BOE](https://www.boe.es).'
  },
  {
    key: 'invoicing-france',
    slug: 'facturacion-agencia-de-viajes-francia',
    metaTitle: 'Facturación de agencias de viajes en Francia: régimen del margen y factura electrónica',
    metaDescription: 'Cómo factura una agencia de viajes en Francia: el régimen del margen, la mención en la factura y las fechas de la factura electrónica y del e-reporting desde septiembre de 2026.',
    title: 'Facturación de agencias de viajes en Francia',
    lead: 'Las agencias de viajes francesas que venden en nombre propio pagan el IVA sobre su margen. Desde el 1 de septiembre de 2026, todas las empresas deben poder recibir facturas electrónicas por una plataforma autorizada, y las pymes deben emitirlas a partir del 1 de septiembre de 2027.',
    card: 'El régimen del margen, la mención en la factura y las fechas de la factura electrónica.',
    scheme: [
      'El régimen del margen de las agencias de viajes (artículo 266, 1-e del código tributario francés) se aplica cuando la agencia vende viajes en nombre propio con servicios comprados a otros. El IVA se paga sobre el margen. La parte del viaje realizada fuera de la UE no tributa en Francia.'
    ],
    invoice: [
      'La factura lleva la mención «Régime particulier – Agences de voyages».',
      'El IVA no se desglosa en las facturas del régimen del margen.',
      'Con la reforma, las facturas indican también el número SIREN del cliente y la naturaleza de la operación.'
    ],
    einvoice: [
      'Desde el 1 de septiembre de 2026, toda empresa establecida en Francia y sujeta al IVA debe poder recibir facturas electrónicas.',
      'Las grandes y medianas empresas emiten facturas electrónicas desde el 1 de septiembre de 2026. Las pymes y microempresas, a partir del 1 de septiembre de 2027.',
      'Las facturas pasan por una plataforma autorizada (plateforme agréée), registrada por la administración tributaria.',
      'Las ventas a particulares y a empresas extranjeras no se facturan electrónicamente: sus datos se envían a la administración como e-reporting, con el mismo calendario.'
    ],
    change: [
      'Casi todas las ventas de una agencia son a particulares, así que el e-reporting importa tanto como la factura electrónica.',
      'En las ventas del régimen del margen, el e-reporting envía el margen imponible y su IVA.',
      'Elige pronto tu plataforma autorizada y comprueba que admite el régimen del margen.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: '¿Necesito una plataforma autorizada si solo vendo a particulares?', a: ['Sí, para recibir las facturas de tus proveedores y para enviar tu e-reporting.'] },
      { q: '¿El régimen del margen se aplica a viajes vendidos a empresas?', a: ['Puede aplicarse. Pregunta a tu asesor cómo se aplica a tus clientes empresas.'] }
    ],
    sources: 'Fuente oficial: [impots.gouv.fr, factura electrónica y plataformas autorizadas](https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees).'
  },
  {
    key: 'invoicing-italy',
    slug: 'facturacion-agencia-de-viajes-italia',
    metaTitle: 'Facturación de agencias de viajes en Italia: artículo 74-ter y facturas por el SdI',
    metaDescription: 'Cómo factura una agencia de viajes en Italia: el régimen del margen del artículo 74-ter, qué muestra la factura y la factura electrónica por el SdI.',
    title: 'Facturación de agencias de viajes en Italia',
    lead: 'Las agencias de viajes italianas que organizan viajes en nombre propio usan el régimen especial del artículo 74-ter, con el IVA sobre el margen. Todas las facturas entre empresas italianas y a consumidores italianos pasan por el SdI, el sistema de intercambio de la administración tributaria.',
    card: 'El artículo 74-ter, la factura y la factura electrónica por el SdI.',
    scheme: [
      'El régimen especial de las agencias de viajes (artículo 74-ter del Decreto Presidencial 633/1972) se aplica a los viajes y paquetes vendidos en nombre de la agencia con servicios comprados a terceros. El IVA se calcula sobre el margen, por periodos.'
    ],
    invoice: [
      'Las facturas del artículo 74-ter no desglosan el IVA.',
      'Hacen referencia al régimen especial de las agencias de viajes.',
      'La factura electrónica usa el código de naturaleza que el SdI prevé para este régimen. Tu asesor te confirmará cuál.'
    ],
    einvoice: [
      'Desde el 1 de enero de 2019, las facturas entre empresas y a consumidores en Italia se emiten como archivos XML estructurados por el SdI (Sistema di Interscambio).',
      'Desde el 1 de enero de 2024, también las de las empresas en régimen de tarifa plana (forfettari).',
      'Las facturas a clientes extranjeros se comunican a la administración tributaria.'
    ],
    change: [
      'Un PDF solo no es una factura válida en Italia: lo que cuenta es el XML enviado por el SdI.',
      'La mayoría de agencias envía al SdI a través de un intermediario o del programa de su asesor.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: '¿Puedo enviar también un PDF al cliente?', a: ['Sí, como copia de cortesía. La factura que cuenta es la enviada por el SdI.'] }
    ],
    sources: 'Fuente oficial: [Agenzia delle Entrate](https://www.agenziaentrate.gov.it).'
  },
  {
    key: 'invoicing-portugal',
    slug: 'facturacion-agencia-de-viajes-portugal',
    metaTitle: 'Facturación de agencias de viajes en Portugal: régimen del margen, ATCUD y programa certificado',
    metaDescription: 'Cómo factura una agencia de viajes en Portugal: el régimen del margen, el programa certificado, el ATCUD y el código QR, el SAF-T y las fechas de la factura electrónica.',
    title: 'Facturación de agencias de viajes en Portugal',
    lead: 'Las agencias de viajes portuguesas pagan el IVA sobre su margen con un régimen especial. Las facturas deben salir de un programa certificado por la administración tributaria, con código ATCUD y código QR, y los datos de facturación se envían cada mes.',
    card: 'El régimen del margen, el programa certificado, el ATCUD, el QR y el SAF-T.',
    scheme: [
      'El régimen especial de las agencias de viajes (Decreto-ley 221/85) grava el margen de la agencia cuando vende viajes en nombre propio con servicios comprados a otros.'
    ],
    invoice: [
      'La factura no desglosa el IVA y lleva la mención del régimen del margen de las agencias de viajes.',
      'Cada factura tiene un código ATCUD y un código QR, obligatorios desde el 1 de enero de 2023.'
    ],
    einvoice: [
      'Las facturas deben emitirse con un programa certificado por la administración tributaria (AT).',
      'Los datos de facturación se envían cada mes a la AT en formato SAF-T (PT).',
      'Las facturas a organismos públicos se envían como facturas electrónicas estructuradas.',
      'La firma electrónica cualificada en las facturas PDF está prevista para enero de 2027.'
    ],
    change: [
      'Una factura hecha en un procesador de textos no es válida: debe salir de un programa certificado.',
      'Las agencias suelen mantener su programa de facturación certificado y conectar a él sus otras herramientas.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: '¿El código QR es una factura electrónica?', a: ['No. El QR va impreso en la factura. Una factura electrónica es un archivo estructurado que se intercambia entre sistemas.'] }
    ],
    sources: 'Fuente oficial: [Portal das Finanças](https://www.portaldasfinancas.gov.pt).'
  },
  {
    key: 'invoicing-germany',
    slug: 'facturacion-agencia-de-viajes-alemania',
    metaTitle: 'Facturación de agencias de viajes en Alemania: §25 UStG y factura electrónica',
    metaDescription: 'Cómo factura una agencia de viajes en Alemania: el régimen del margen del §25 UStG, la mención en la factura y las fechas de la factura electrónica.',
    title: 'Facturación de agencias de viajes en Alemania',
    lead: 'Los operadores turísticos alemanes pagan el IVA sobre su margen según el §25 UStG. Todas las empresas deben poder recibir facturas electrónicas desde el 1 de enero de 2025, y deben emitirlas en sus ventas entre empresas en Alemania a partir de 2027 o 2028, según su facturación.',
    card: 'El §25 UStG, la mención en la factura y las fechas de la factura electrónica.',
    scheme: [
      'El régimen del margen para los servicios de viaje (§25 de la ley alemana del IVA) se aplica cuando la empresa vende viajes en nombre propio con servicios comprados a otros. El IVA se paga sobre el margen.'
    ],
    invoice: [
      'Una factura del §25 no desglosa el IVA.',
      'Lleva la mención «Sonderregelung für Reisebüros».'
    ],
    einvoice: [
      'Desde el 1 de enero de 2025, toda empresa debe poder recibir facturas electrónicas en las ventas entre empresas en Alemania.',
      'A partir del 1 de enero de 2027, deben emitirlas las empresas con más de 800.000 euros de facturación el año anterior.',
      'A partir del 1 de enero de 2028, todas las empresas.',
      'Una factura electrónica sigue la norma europea EN 16931, por ejemplo XRechnung o ZUGFeRD. Un PDF simple no cuenta.',
      'Las ventas a particulares no están incluidas.'
    ],
    change: [
      'Las facturas a otras empresas, como las agencias que revenden tus viajes, pasan a ser archivos estructurados.',
      'Las facturas a viajeros particulares pueden seguir en PDF.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: '¿Tengo que emitir facturas electrónicas a mis clientes particulares?', a: ['No. La obligación cubre las ventas entre empresas en Alemania.'] }
    ],
    sources: 'Fuente oficial: [Ministerio Federal de Finanzas](https://www.bundesfinanzministerium.de).'
  },
  {
    key: 'invoicing-uk',
    slug: 'facturacion-agencia-de-viajes-reino-unido',
    metaTitle: 'Facturación de agencias de viajes en el Reino Unido: TOMS y factura electrónica en 2029',
    metaDescription: 'Cómo factura una agencia de viajes en el Reino Unido: el Tour Operators’ Margin Scheme, qué muestra la factura y la factura electrónica prevista para abril de 2029.',
    title: 'Facturación de agencias de viajes en el Reino Unido',
    lead: 'Los operadores británicos que compran y revenden viajes en nombre propio usan el Tour Operators’ Margin Scheme (TOMS), con el IVA sobre el margen. El Gobierno ha confirmado que las facturas de IVA entre empresas serán electrónicas a partir de abril de 2029.',
    card: 'El TOMS, la factura y la factura electrónica prevista para abril de 2029.',
    scheme: [
      'El TOMS se aplica a las empresas que compran transporte, alojamiento y otros servicios y los revenden en nombre propio. El IVA recae sobre el margen. Solo tributa en el Reino Unido el margen de los viajes disfrutados allí.'
    ],
    invoice: [
      'Una factura del TOMS no desglosa el IVA, y el cliente no puede recuperarlo.'
    ],
    einvoice: [
      'Hoy no hay obligación de factura electrónica.',
      'El presupuesto de otoño de 2025 confirmó que las facturas de IVA entre empresas serán electrónicas a partir de abril de 2029, sin informe en tiempo real a HMRC al principio.',
      'HMRC aún tiene que precisar el formato y la red.'
    ],
    change: [
      'Nada cambia en las facturas a viajeros particulares.',
      'Las agencias que venden a otras empresas necesitarán un programa que envíe facturas electrónicas antes de 2029.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: '¿El TOMS sigue vigente después del Brexit?', a: ['Sí, para las empresas británicas. Desde 2021 solo cubre, a efectos del IVA británico, los viajes disfrutados en el Reino Unido.'] }
    ],
    sources: 'Fuente oficial: la VAT Notice 709/5 en [GOV.UK](https://www.gov.uk).'
  },
  {
    key: 'invoicing-belgium',
    slug: 'facturacion-agencia-de-viajes-belgica',
    metaTitle: 'Facturación de agencias de viajes en Bélgica: régimen del margen y Peppol',
    metaDescription: 'Cómo factura una agencia de viajes en Bélgica: el régimen especial de las agencias de viajes y la factura electrónica Peppol obligatoria entre empresas desde enero de 2026.',
    title: 'Facturación de agencias de viajes en Bélgica',
    lead: 'Las agencias de viajes belgas pagan el IVA sobre su margen con el régimen especial de las agencias de viajes. Desde el 1 de enero de 2026, las facturas entre empresas belgas son facturas electrónicas estructuradas enviadas por Peppol.',
    card: 'El régimen del margen y la factura electrónica Peppol desde 2026.',
    scheme: [
      'El régimen especial de las agencias de viajes, que viene de la directiva europea del IVA, se aplica cuando la agencia vende viajes en nombre propio con servicios comprados a otros. El IVA se paga sobre el margen.'
    ],
    invoice: [
      'La factura no desglosa el IVA y hace referencia al régimen especial de las agencias de viajes.'
    ],
    einvoice: [
      'Desde el 1 de enero de 2026, las facturas entre empresas sujetas al IVA en Bélgica son facturas electrónicas estructuradas, enviadas por la red Peppol.',
      'Las ventas a particulares no están incluidas.',
      'El envío en tiempo real de los datos de facturación a la administración está previsto para 2028.'
    ],
    change: [
      'Las facturas a otras agencias y a empresas pasan por Peppol; las facturas a viajeros particulares pueden seguir en PDF.',
      'La mayoría de agencias usa un punto de acceso Peppol a través de su programa de contabilidad o de facturación.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: '¿Un PDF por correo sigue siendo válido entre empresas?', a: ['No desde el 1 de enero de 2026. Debe ser una factura electrónica estructurada.'] }
    ],
    sources: 'Fuente oficial: [SPF Finances](https://finances.belgium.be).'
  }
];

export const invoicingGuides: Article[] = countries.map(guide);
