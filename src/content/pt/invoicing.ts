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
      { type: 'callout', text: 'Informação geral, escrita a 14 de novembro de 2026. Não constitui aconselhamento jurídico ou fiscal e não tem valor legal. As regras e as datas mudam: consulte as fontes oficiais no fim desta página ou um consultor qualificado. O Traviosoft não assume qualquer responsabilidade por decisões tomadas com base nesta página.' },
      { type: 'h2', text: 'O regime de IVA das agências de viagens', id: 'regime' },
      ...c.scheme.map(text => ({ type: 'p' as const, text })),
      ...(c.invoice.length ? [{ type: 'h2' as const, text: 'O que a fatura indica', id: 'fatura' }, { type: 'list' as const, items: c.invoice }] : []),
      { type: 'h2', text: 'Faturação eletrónica: as datas', id: 'faturacao-eletronica' },
      { type: 'list', items: c.einvoice },
      ...(c.change.length ? [{ type: 'h2' as const, text: 'Na prática', id: 'na-pratica' }, { type: 'list' as const, items: c.change }] : []),
      { type: 'h2', text: 'No Traviosoft', id: 'traviosoft' },
      { type: 'p', text: c.tool },
      { type: 'h2', text: 'Perguntas frequentes', id: 'faq' },
      { type: 'faq', items: c.faq },
      { type: 'p', text: c.sources }
    ]
  };
}

const OUTSIDE_SPAIN = 'As faturas de adiantamento e de saldo e as notas de crédito criam-se a partir da viagem, com os montantes do orçamento aceite e a menção do regime das agências de viagens quando a ativa. Fora de Espanha, as faturas são emitidas no software de faturação que já usa, por isso as regras de faturação eletrónica do seu país são tratadas aí.';

const countries: Country[] = [
  {
    key: 'invoicing-spain',
    slug: 'faturacao-agencia-de-viagens-espanha',
    metaTitle: 'Faturação para agências de viagens em Espanha: REAV, Veri*Factu e fatura eletrónica',
    metaDescription: 'Como fatura uma agência de viagens ou uma DMC em Espanha: o regime da margem REAV, o que a fatura indica, as datas do Veri*Factu e a regra da fatura eletrónica B2B.',
    title: 'Faturação para agências de viagens em Espanha',
    lead: 'Em Espanha, uma agência que vende viagens em nome próprio paga normalmente o IVA sobre a margem, ao abrigo do REAV. As faturas têm de ser emitidas por um software que cumpra as regras antifraude (Veri*Factu), e a fatura eletrónica entre empresas torna-se obrigatória por fases.',
    card: 'REAV, Veri*Factu e fatura eletrónica B2B, com as datas em vigor.',
    scheme: [
      'O REAV (régimen especial de las agencias de viajes, artigos 141 a 147 da lei espanhola do IVA) aplica-se quando a agência vende em nome próprio e utiliza serviços comprados a outras empresas: hotéis, transportes, guias. O IVA paga-se sobre a margem, ou seja, o preço cobrado menos o que foi pago aos fornecedores, em vez de sobre o preço total.',
      'Uma agência que atua apenas como intermediária e ganha uma comissão em nome do fornecedor é tributada sobre essa comissão no regime geral.'
    ],
    invoice: [
      'No REAV, a fatura ao cliente não indica o IVA numa linha separada.',
      'Inclui a menção “Régimen especial de las agencias de viajes”.',
      'Cada empresa tem a sua própria série de faturas, e as correções fazem-se com uma fatura retificativa (factura rectificativa).'
    ],
    einvoice: [
      'Veri*Factu: o Real Decreto 1007/2023 exige um software de faturação que conserve cada registo de fatura sem alterações. O Real Decreto-ley 15/2025 fixa o início a 1 de janeiro de 2027 para as empresas sujeitas ao imposto sobre as sociedades e a 1 de julho de 2027 para os trabalhadores independentes e os restantes.',
      'Fatura eletrónica B2B: o Real Decreto 238/2026 torna obrigatórias as faturas eletrónicas estruturadas entre empresas. Aplica-se 12 meses após a respetiva portaria ministerial às empresas com mais de 8 milhões de EUR de volume de negócios, e 24 meses após a mesma às restantes.',
      'As empresas que já comunicam através do SII, e o País Basco e Navarra, têm sistemas próprios.'
    ],
    change: [
      'Cada fatura tem um código QR que permite ao cliente verificá-la no site da administração fiscal espanhola.',
      'As faturas a outras empresas, como as agências que revendem as suas viagens, passarão a circular como faturas eletrónicas estruturadas.'
    ],
    tool: 'No Traviosoft, a faturação para Espanha está integrada: as faturas são criadas a partir da viagem com a menção REAV, cada empresa tem a sua própria série, e o Veri*Factu ativa-se nas definições do país Espanha.',
    faq: [
      { q: 'O REAV aplica-se às viagens vendidas a empresas?', a: ['A lei espanhola do IVA prevê opções para clientes empresariais e regras especiais para os serviços prestados fora da UE.'] },
      { q: 'O Veri*Factu substitui o SII?', a: ['Não. As empresas no SII continuam a usá-lo.'] }
    ],
    sources: 'Fontes oficiais: [Agencia Tributaria](https://sede.agenciatributaria.gob.es) e o [BOE](https://www.boe.es).'
  },
  {
    key: 'invoicing-france',
    slug: 'faturacao-agencia-de-viagens-franca',
    metaTitle: 'Faturação para agências de viagens em França: regime da margem e fatura eletrónica',
    metaDescription: 'Como fatura uma agência de viagens em França: o regime da margem das agências de viagens, o que a fatura indica e as datas da fatura eletrónica a partir de setembro de 2026.',
    title: 'Faturação para agências de viagens em França',
    lead: 'As agências de viagens francesas que vendem em nome próprio pagam o IVA sobre a margem. Desde 1 de setembro de 2026, todas as empresas têm de poder receber faturas eletrónicas através de uma plataforma aprovada, e as pequenas e médias empresas têm de as emitir a partir de 1 de setembro de 2027.',
    card: 'O regime da margem, a fatura e as datas da fatura eletrónica.',
    scheme: [
      'O regime especial das agências de viagens aplica-se quando a agência vende viagens em nome próprio utilizando serviços comprados a terceiros. O IVA é devido sobre a margem. A parte de uma viagem relativa a serviços prestados fora da União Europeia está isenta.'
    ],
    invoice: [
      'A fatura pode indicar, sem ambiguidade, que a operação se enquadra no regime especial das agências de viagens.',
      'A administração fiscal aceita que o IVA do regime da margem não apareça discriminado na fatura.'
    ],
    einvoice: [
      'Desde 1 de setembro de 2026, todas as empresas estabelecidas em França e registadas para efeitos de IVA têm de poder receber faturas eletrónicas.',
      'As grandes e médias empresas emitem faturas eletrónicas desde 1 de setembro de 2026. As pequenas e microempresas emitem-nas a partir de 1 de setembro de 2027.',
      'As faturas circulam através de uma plataforma aprovada (plateforme agréée), registada pela administração fiscal.'
    ],
    change: [],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Tenho de poder receber faturas eletrónicas se só vendo a clientes particulares?', a: ['Sim. Desde 1 de setembro de 2026, todas as empresas registadas para efeitos de IVA em França têm de poder recebê-las, por exemplo dos seus fornecedores.'] },
      { q: 'O regime da margem aplica-se às viagens vendidas a empresas?', a: ['Pode aplicar-se, consoante a operação. As condições estão fixadas no código fiscal francês.'] }
    ],
    sources: 'Fontes oficiais: [BOFiP, regime das agências de viagens (BOI-TVA-SECT-60)](https://bofip.impots.gouv.fr/doctrine/BOI-TVA-SECT-60), [economie.gouv.fr, calendário da fatura eletrónica](https://www.economie.gouv.fr/cedef/facturation-electronique-entreprises) e [impots.gouv.fr](https://www.impots.gouv.fr/professionnel/je-passe-la-facturation-electronique).'
  },
  {
    key: 'invoicing-germany',
    slug: 'faturacao-agencia-de-viagens-alemanha',
    metaTitle: 'Faturação para agências de viagens na Alemanha: §25 UStG e fatura eletrónica',
    metaDescription: 'Como fatura uma agência de viagens na Alemanha: o regime da margem do §25 UStG, a menção na fatura e as datas para emitir faturas eletrónicas.',
    title: 'Faturação para agências de viagens na Alemanha',
    lead: 'Os operadores turísticos alemães pagam o IVA sobre a margem ao abrigo do §25 UStG. Nas vendas nacionais entre empresas, têm de emitir faturas eletrónicas a partir de 2027 ou 2028, consoante o volume de negócios.',
    card: '§25 UStG, a menção na fatura e as datas da fatura eletrónica.',
    scheme: [
      'O regime da margem para serviços de viagem (§25 da lei alemã do IVA) aplica-se quando a empresa vende viagens em nome próprio utilizando serviços comprados a terceiros. O IVA é devido sobre a margem.'
    ],
    invoice: [
      'Uma fatura ao abrigo do §25 não indica o IVA separadamente.',
      'Inclui a menção “Sonderregelung für Reisebüros”.'
    ],
    einvoice: [
      'A partir de 1 de janeiro de 2027, têm de as emitir as empresas com mais de 800 000 EUR de volume de negócios no ano anterior.',
      'A partir de 1 de janeiro de 2028, todas as empresas têm de as emitir.',
      'Uma fatura eletrónica segue a norma europeia EN 16931. Um simples PDF não conta.',
      'As vendas a clientes particulares não estão abrangidas.'
    ],
    change: [
      'As faturas a outras empresas, como as agências que revendem as suas viagens, passam a ser ficheiros estruturados.',
      'As faturas a viajantes particulares podem continuar em PDF.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Tenho de emitir faturas eletrónicas a clientes particulares?', a: ['Não. A obrigação abrange as vendas nacionais entre empresas.'] }
    ],
    sources: 'Fontes oficiais: a lei alemã do IVA, [§14](https://www.gesetze-im-internet.de/ustg_1980/__14.html), [§14a](https://www.gesetze-im-internet.de/ustg_1980/__14a.html), [§25](https://www.gesetze-im-internet.de/ustg_1980/__25.html) e [§27](https://www.gesetze-im-internet.de/ustg_1980/__27.html).'
  },
  {
    key: 'invoicing-belgium',
    slug: 'faturacao-agencia-de-viagens-belgica',
    metaTitle: 'Faturação para agências de viagens na Bélgica: regime da margem e fatura eletrónica Peppol',
    metaDescription: 'Como fatura uma agência de viagens na Bélgica: o regime da margem das agências de viagens e a fatura eletrónica Peppol obrigatória entre empresas desde janeiro de 2026.',
    title: 'Faturação para agências de viagens na Bélgica',
    lead: 'As agências de viagens belgas pagam o IVA sobre a margem ao abrigo do regime especial das agências de viagens. Desde 1 de janeiro de 2026, as faturas entre empresas belgas são faturas eletrónicas estruturadas enviadas através da rede Peppol.',
    card: 'O regime da margem e a fatura eletrónica Peppol desde 2026.',
    scheme: [
      'O regime especial das agências de viagens, previsto na diretiva europeia do IVA, aplica-se quando a agência vende viagens em nome próprio utilizando serviços comprados a terceiros. O IVA é devido sobre a margem.'
    ],
    invoice: [],
    einvoice: [
      'Desde 1 de janeiro de 2026, as faturas entre empresas registadas para efeitos de IVA na Bélgica são faturas eletrónicas estruturadas, enviadas através da rede Peppol.',
      'As vendas a clientes particulares não estão abrangidas.'
    ],
    change: [
      'As faturas a outras agências e a empresas passam pela rede Peppol; as faturas a viajantes particulares podem continuar em PDF.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Um PDF enviado por email ainda é válido entre empresas?', a: ['Não, desde 1 de janeiro de 2026. Tem de ser uma fatura eletrónica estruturada.'] }
    ],
    sources: 'Fonte oficial: [efacture.belgium.be](https://efacture.belgium.be/fr/article/les-factures-electroniques-structurees-entre-entreprises-sont-obligatoires-depuis-2026).'
  }
];

export const invoicingGuides: Article[] = countries.map(guide);
