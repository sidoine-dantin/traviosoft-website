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
      { type: 'callout', text: 'Información general, redactada el 14 de noviembre de 2026. No constituye asesoramiento jurídico ni fiscal y no tiene valor legal. Las normas y las fechas cambian: compruébalas en las fuentes oficiales citadas al final de la página o con un profesional cualificado. Traviosoft no se hace responsable de las decisiones tomadas a partir de esta página.' },
      { type: 'h2', text: 'El régimen de IVA de las agencias de viajes', id: 'regimen' },
      ...c.scheme.map(text => ({ type: 'p' as const, text })),
      ...(c.invoice.length ? [{ type: 'h2' as const, text: 'Qué muestra la factura', id: 'factura' }, { type: 'list' as const, items: c.invoice }] : []),
      { type: 'h2', text: 'Factura electrónica: las fechas', id: 'factura-electronica' },
      { type: 'list', items: c.einvoice },
      ...(c.change.length ? [{ type: 'h2' as const, text: 'En la práctica', id: 'en-la-practica' }, { type: 'list' as const, items: c.change }] : []),
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
      'Factura electrónica entre empresas: el Real Decreto 238/2026 hace obligatoria la factura electrónica estructurada entre empresarios. Se aplica 12 meses después de su orden ministerial para las empresas con más de 8 millones de euros de facturación, y 24 meses después para el resto.',
      'Quienes ya están en el SII, y el País Vasco y Navarra, tienen sus propios sistemas.'
    ],
    change: [
      'Cada factura lleva un código QR con el que el cliente puede comprobarla en la sede de la AEAT.',
      'Las facturas a otras empresas, como las agencias que revenden tus viajes, viajarán como facturas electrónicas estructuradas.'
    ],
    tool: 'En Traviosoft, la facturación para España está integrada: las facturas salen del viaje con la mención del REAV, cada sociedad mantiene su serie y Veri*Factu se activa en los ajustes de país de España. Si quieres el detalle, lee la [guía de Veri*Factu para agencias de viajes](/guides/verifactu-agencias-de-viajes).',
    faq: [
      { q: '¿El REAV se aplica a viajes vendidos a empresas?', a: ['La Ley del IVA prevé opciones para clientes empresarios y reglas propias para los servicios prestados fuera de la UE.'] },
      { q: '¿Veri*Factu sustituye al SII?', a: ['No. Quien está en el SII sigue usándolo.'] }
    ],
    sources: 'Fuentes oficiales: [Agencia Tributaria](https://sede.agenciatributaria.gob.es) y el [BOE](https://www.boe.es).'
  },
  {
    key: 'invoicing-france',
    slug: 'facturacion-agencia-de-viajes-francia',
    metaTitle: 'Facturación de agencias de viajes en Francia: régimen del margen y factura electrónica',
    metaDescription: 'Cómo factura una agencia de viajes en Francia: el régimen del margen, lo que muestra la factura y las fechas de la factura electrónica desde septiembre de 2026.',
    title: 'Facturación de agencias de viajes en Francia',
    lead: 'Las agencias de viajes francesas que venden en nombre propio pagan el IVA sobre su margen. Desde el 1 de septiembre de 2026, todas las empresas deben poder recibir facturas electrónicas por una plataforma autorizada, y las pymes deben emitirlas a partir del 1 de septiembre de 2027.',
    card: 'El régimen del margen, la factura y las fechas de la factura electrónica.',
    scheme: [
      'El régimen especial de las agencias de viajes se aplica cuando la agencia vende viajes en nombre propio con servicios comprados a otros. El IVA se paga sobre el margen. La parte del viaje que corresponde a servicios prestados fuera de la Unión Europea está exenta.'
    ],
    invoice: [
      'La factura puede indicar de forma inequívoca que la operación se acoge al régimen especial de las agencias de viajes.',
      'La administración admite que el IVA del régimen del margen no se desglose en la factura.'
    ],
    einvoice: [
      'Desde el 1 de septiembre de 2026, toda empresa establecida en Francia y sujeta al IVA debe poder recibir facturas electrónicas.',
      'Las grandes y medianas empresas emiten facturas electrónicas desde el 1 de septiembre de 2026. Las pymes y microempresas, a partir del 1 de septiembre de 2027.',
      'Las facturas pasan por una plataforma autorizada (plateforme agréée), registrada por la administración tributaria.',
    ],
    change: [],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: '¿Debo poder recibir facturas electrónicas si solo vendo a particulares?', a: ['Sí. Desde el 1 de septiembre de 2026, toda empresa sujeta al IVA en Francia debe poder recibirlas, por ejemplo las de sus proveedores.'] },
      { q: '¿El régimen del margen se aplica a viajes vendidos a empresas?', a: ['Puede aplicarse, según la operación. Las condiciones las fija el código tributario francés.'] }
    ],
    sources: 'Fuentes oficiales: [BOFiP, régimen de las agencias de viajes (BOI-TVA-SECT-60)](https://bofip.impots.gouv.fr/doctrine/BOI-TVA-SECT-60), [economie.gouv.fr, calendario de la factura electrónica](https://www.economie.gouv.fr/cedef/facturation-electronique-entreprises) e [impots.gouv.fr](https://www.impots.gouv.fr/professionnel/je-passe-la-facturation-electronique).'
  },
  {
    key: 'invoicing-germany',
    slug: 'facturacion-agencia-de-viajes-alemania',
    metaTitle: 'Facturación de agencias de viajes en Alemania: §25 UStG y factura electrónica',
    metaDescription: 'Cómo factura una agencia de viajes en Alemania: el régimen del margen del §25 UStG, la mención en la factura y las fechas de la factura electrónica.',
    title: 'Facturación de agencias de viajes en Alemania',
    lead: 'Los operadores turísticos alemanes pagan el IVA sobre su margen según el §25 UStG. En sus ventas entre empresas en Alemania, deben emitir facturas electrónicas a partir de 2027 o 2028, según su facturación.',
    card: 'El §25 UStG, la mención en la factura y las fechas de la factura electrónica.',
    scheme: [
      'El régimen del margen para los servicios de viaje (§25 de la ley alemana del IVA) se aplica cuando la empresa vende viajes en nombre propio con servicios comprados a otros. El IVA se paga sobre el margen.'
    ],
    invoice: [
      'Una factura del §25 no desglosa el IVA.',
      'Lleva la mención «Sonderregelung für Reisebüros».'
    ],
    einvoice: [
      'A partir del 1 de enero de 2027, deben emitirlas las empresas con más de 800.000 euros de facturación el año anterior.',
      'A partir del 1 de enero de 2028, todas las empresas.',
      'Una factura electrónica sigue la norma europea EN 16931. Un PDF simple no cuenta.',
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
    sources: 'Fuentes oficiales: la ley alemana del IVA, [§14](https://www.gesetze-im-internet.de/ustg_1980/__14.html), [§14a](https://www.gesetze-im-internet.de/ustg_1980/__14a.html), [§25](https://www.gesetze-im-internet.de/ustg_1980/__25.html) y [§27](https://www.gesetze-im-internet.de/ustg_1980/__27.html).'
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
    invoice: [],
    einvoice: [
      'Desde el 1 de enero de 2026, las facturas entre empresas sujetas al IVA en Bélgica son facturas electrónicas estructuradas, enviadas por la red Peppol.',
      'Las ventas a particulares no están incluidas.',
    ],
    change: [
      'Las facturas a otras agencias y a empresas pasan por Peppol; las facturas a viajeros particulares pueden seguir en PDF.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: '¿Un PDF por correo sigue siendo válido entre empresas?', a: ['No desde el 1 de enero de 2026. Debe ser una factura electrónica estructurada.'] }
    ],
    sources: 'Fuente oficial: [efacture.belgium.be](https://efacture.belgium.be/fr/article/les-factures-electroniques-structurees-entre-entreprises-sont-obligatoires-depuis-2026).'
  }
];

export const invoicingGuides: Article[] = countries.map(guide);
