import type { SiteContent } from '../types';
import { PRICES } from '../prices';

const FREE = 'Gratuito com faturação anual*';

export const pricing: SiteContent['pricing'] = {
  metaTitle: `Preços: Classic desde ${PRICES.classic.yearly} EUR por mês, Premium desde ${PRICES.premium.yearly} EUR | Traviosoft`,
  metaDescription:
    `Dois planos para agências de viagens à medida e DMC. O Classic gere toda a agência desde ${PRICES.classic.yearly} EUR por mês; o Premium acrescenta grupos, várias equipas, moedas, compras e várias marcas. ${PRICES.usersIncluded} utilizadores incluídos, implementação gratuita com faturação anual.`,
  title: 'Preços',
  productLink: 'Ver o produto',
  lead: 'O Classic cobre toda a agência, do primeiro pedido à última fatura. O Premium acrescenta grupos, várias equipas, outras moedas, compras e várias marcas.',
  yearly: 'Anual',
  monthly: 'Mensal',
  yearlyNote: 'Preços por mês, sem IVA.',
  plans: [
    {
      id: 'classic',
      name: 'Classic',
      users: `${PRICES.usersIncluded} utilizadores incluídos`,
      yearly: String(PRICES.classic.yearly),
      monthly: String(PRICES.classic.monthly),
      priceNote: { yearly: `Utilizador adicional: ${PRICES.extraUser.classic.yearly} EUR por mês`, monthly: `Utilizador adicional: ${PRICES.extraUser.classic.monthly} EUR por mês` },
    },
    {
      id: 'premium',
      name: 'Premium',
      users: `${PRICES.usersIncluded} utilizadores incluídos`,
      yearly: String(PRICES.premium.yearly),
      monthly: String(PRICES.premium.monthly),
      priceNote: { yearly: `Utilizador adicional: ${PRICES.extraUser.premium.yearly} EUR por mês`, monthly: `Utilizador adicional: ${PRICES.extraUser.premium.monthly} EUR por mês` },
      hot: true,
    }
  ],
  compareTitle: 'Comparar os planos',
  compareFeature: 'Funcionalidade',
  yes: 'Incluído',
  no: 'Não incluído',
  compare: [
    {
      title: 'Vender',
      rows: [
        { f: 'Pedidos e orçamentos com a sua margem e as comissões', classic: true, premium: true },
        { f: 'Catálogo com preços por época', classic: true, premium: true },
        { f: 'Agências parceiras e extratos de comissões', classic: true, premium: true },
        { f: 'Proposta de viagem e itinerário dia a dia, com o seu logótipo e as suas cores', classic: true, premium: true },
        { f: 'Documentos na língua do cliente', classic: true, premium: true },
        { f: 'Várias moedas', classic: false, premium: true }
      ]
    },
    {
      title: 'Reservar',
      rows: [
        { f: 'Viagens confirmadas e reservas, com os emails dos fornecedores guardados na viagem', classic: true, premium: true },
        { f: 'Vouchers de serviço', classic: true, premium: true },
        { f: 'Grupos: listas de viajantes, link de formulário e rooming lists', classic: false, premium: true },
        { f: 'Pedidos de disponibilidade e notas de encomenda a fornecedores', classic: false, premium: true }
      ]
    },
    {
      title: 'Receber',
      rows: [
        { f: 'Planos de pagamento e links de pagamento', classic: true, premium: true },
        { f: 'Lembretes de pagamento automáticos', classic: false, premium: true },
        { f: 'Faturas e notas de crédito', classic: 'Em Espanha: integradas. Noutros países: através do seu software de faturação', premium: 'Em Espanha: integradas. Noutros países: através do seu software de faturação' },
        { f: 'Painel', classic: true, premium: true },
        { f: 'Exportação contabilística', classic: false, premium: true }
      ]
    },
    {
      title: 'Equipa e ligações',
      rows: [
        { f: 'Várias equipas', classic: false, premium: true },
        { f: 'Funções personalizadas', classic: false, premium: true },
        { f: 'Várias marcas e empresas numa só conta', classic: false, premium: true },
        { f: 'Conector MCP para as suas ferramentas de IA (Claude, ChatGPT e outras)', classic: true, premium: true },
        { f: 'O assistente integrado', classic: { text: 'Opcional, com limites de utilização', option: true }, premium: { text: 'Opcional, com limites de utilização', option: true } },
        { f: 'Acesso à API, para o seu programador ligar o seu site e outro software', classic: false, premium: true }
      ]
    },
    {
      title: 'Implementação e apoio',
      rows: [
        { f: 'Configuração da sua marca, dos documentos e das regras de preço, e formação da sua equipa', classic: { text: FREE, was: `${PRICES.setupMonthly} EUR` }, premium: { text: FREE, was: `${PRICES.setupMonthly} EUR` } },
        { f: 'Importação das suas folhas de cálculo ou da exportação da sua ferramenta atual**', classic: { text: FREE, was: `${PRICES.importMonthly} EUR` }, premium: { text: FREE, was: `${PRICES.importMonthly} EUR` } },
        { f: 'Apoio por email', classic: true, premium: true },
        { f: 'Alojamento na União Europeia', classic: true, premium: true },
        { f: 'Exportação dos dados a pedido', classic: true, premium: true }
      ]
    }
  ],
  compareNote: [`* Oferta por tempo limitado, só com faturação anual. Com faturação mensal, a configuração e o acompanhamento (${PRICES.setupMonthly} EUR) e a importação (${PRICES.importMonthly} EUR) pagam-se uma vez no início. Tarifas por época e outros ficheiros (Word, PDF, emails, viagens em curso) importam-se mediante orçamento.`, '** Para dados limpos e bem organizados.'],
  faq: [
    {
      q: 'De que plano preciso?',
      a: ['O Classic gere uma agência inteira: pedidos, orçamentos, parceiros, reservas, pagamentos e faturas. O Premium acrescenta grupos, lembretes de pagamento automáticos, várias equipas, venda noutras moedas e notas de encomenda a fornecedores.']
    },
    {
      q: 'Como é faturado?',
      a: ['Anual ou mensal, à sua escolha. O anual custa menos por mês e inclui a configuração e a importação. O mensal pode terminar no fim de qualquer mês.']
    },
    {
      q: 'Os preços incluem IVA?',
      a: ['Os preços são sem IVA. O IVA é acrescentado na fatura de acordo com o seu país e a forma jurídica da sua empresa.']
    },
    {
      q: 'E se adicionar um utilizador?',
      a: [`Os dois planos incluem ${PRICES.usersIncluded} utilizadores. Cada utilizador adicional custa ${PRICES.extraUser.classic.yearly} EUR por mês no Classic e ${PRICES.extraUser.premium.yearly} EUR no Premium com faturação anual (${PRICES.extraUser.classic.monthly} e ${PRICES.extraUser.premium.monthly} EUR com faturação mensal).`]
    },
    {
      q: 'Posso mudar de plano?',
      a: ['Sim. Passe do Classic para o Premium a qualquer momento, e as novas funcionalidades ficam ativas no mesmo dia. Os seus dados ficam como estão.']
    },
    {
      q: 'Posso cancelar?',
      a: ['Sim. Os planos mensais terminam no fim do mês em que cancela. Os planos anuais vão até ao fim do ano pago e terminam aí.']
    },
    {
      q: 'Posso levar os meus dados se sair?',
      a: ['Sim. Recebe os seus dados em formatos normalizados.']
    },
    {
      q: 'O que incluem a configuração e o acompanhamento?',
      a: [`Configuramos a sua marca, os seus documentos, as suas regras de margem, IVA e comissões, e os acessos da sua equipa. Depois formamos a sua equipa por videochamada e continuamos disponíveis por email nas primeiras semanas. São gratuitos com faturação anual e custam ${PRICES.setupMonthly} EUR uma única vez com faturação mensal.`]
    },
    {
      q: 'O que inclui a importação?',
      a: [`O seu catálogo com um preço por produto, os seus clientes e os seus fornecedores, a partir de folhas de cálculo ou de uma exportação da sua ferramenta atual, com uma linha por elemento e as mesmas colunas do início ao fim. É gratuita com faturação anual e custa ${PRICES.importMonthly} EUR uma única vez com faturação mensal.`, 'Tarifas por época, documentos Word, PDF, emails, viagens em curso e listas que precisam de ser organizadas primeiro têm preço mediante orçamento, depois de vermos uma amostra.']
    }
  ]
};

export const demo: SiteContent['demo'] = {
  metaTitle: 'Demonstração de software para agências de viagens | Traviosoft',
  metaDescription:
    'Uma chamada de 30 minutos: uma viagem de exemplo no Traviosoft, do pedido à fatura, e depois preços e perguntas.',
  title: 'Marcar uma demonstração',
  lead: 'Uma chamada de 30 minutos. Percorremos uma viagem de exemplo no Traviosoft, do primeiro pedido à fatura final.',
  agendaTitle: 'A chamada',
  agenda: [
    { mins: '5', title: 'A sua agência', body: 'Dimensão da equipa, o que vende e as ferramentas que usa hoje.' },
    { mins: '15', title: 'Uma viagem de exemplo', body: 'O pedido, o orçamento com a margem, as reservas, o programa, o pagamento e a fatura. Uma viagem a dois, um grupo de incentivo ou um safari.' },
    { mins: '10', title: 'Preços e perguntas', body: 'O plano para a sua equipa, a importação dos seus dados e as suas perguntas.' }
  ],
  afterTitle: 'Depois da chamada',
  after: [
    'A proposta e o programa dia a dia vistos na chamada',
    'Um breve resumo por email',
    'O preço para a sua equipa, por escrito',
    'Uma segunda chamada, se a pedir'
  ],
  bookTitle: 'Escolha uma hora para a sua demonstração',
  bookBody: 'Por agora a marcação é feita por email. Envie o nome da sua agência, a dimensão da equipa e alguns dias que lhe deem jeito, e respondemos com uma hora.',
  emailLabel: 'Escreva para',
  bookCta: 'Escolher uma hora',
  bookCalendarBody: '30 minutos no Google Meet. O convite chega por email.',
  emailAltLabel: 'Ou escreva para',
  email: 'hola@traviosoft.com',
  faq: [
    {
      q: 'Há um período de experiência gratuito?',
      a: ['Há uma demonstração de 30 minutos sobre uma viagem de exemplo.']
    },
    {
      q: 'Quem faz a demonstração?',
      a: ['Alguém da equipa Traviosoft, em espanhol, inglês ou francês.']
    },
    {
      q: 'Preciso de preparar alguma coisa?',
      a: ['Nada a preparar.']
    },
    {
      q: 'Vão pedir-me os meus dados?',
      a: ['A demonstração usa uma viagem de exemplo com dados inventados.']
    }
  ]
};

export const switching: SiteContent['switching'] = {
  metaTitle: 'Passar do Excel para o Traviosoft | Traviosoft',
  metaDescription:
    'Como deixar o Excel, o Word e o WhatsApp em plena época: o que importamos, o que verifica e como continuar com as viagens em curso enquanto começa as novas.',
  title: 'Mudar para o Traviosoft',
  lead: 'A mudança faz-se por etapas, ao lado das viagens que tem em curso.',
  timelineTitle: 'Como funciona',
  timeline: [
    {
      title: 'Envia-nos os seus ficheiros',
      body: 'As suas tarifas, clientes, fornecedores e viagens em aberto, em folhas de cálculo ou como exportação de outra ferramenta.'
    },
    {
      title: 'Nós importamos, depois verifica',
      body: 'Carregamos tudo no espaço da sua agência. Abre-o, vê alguns produtos e alguns clientes, e diz-nos o que ajustar.'
    },
    {
      title: 'O seu primeiro orçamento real',
      body: 'Configuramos as suas regras de margem, IVA e comissões e a sua marca, e formamos a sua equipa por videochamada. Faz um orçamento real com as suas próprias tarifas. Estamos disponíveis por email se precisar.'
    },
    {
      title: 'Os novos pedidos entram na aplicação',
      body: 'A partir daí, cada novo pedido começa no Traviosoft. As viagens já em curso terminam como começaram.'
    }
  ],
  importTitle: 'O que é importado',
  importParts: [
    { title: 'Incluído no preço da importação', body: 'O seu catálogo com um preço por produto, os seus clientes, os seus fornecedores e os respetivos contactos. A partir de folhas de cálculo ou de uma exportação da sua ferramenta atual.' },
    { title: 'Mediante orçamento', body: 'Tarifas por época, viagens em curso e outros ficheiros (Word, PDF, emails). Damos-lhe um preço depois de vermos uma amostra.' }
  ],
  seasonTitle: 'Vai perturbar a minha época?',
  seasonBody: [
    'Os novos pedidos entram no Traviosoft a partir do dia em que começa. As viagens já em curso terminam como começaram.',
    'As viagens em aberto só passam se quiser, normalmente as mais distantes. Uma viagem que parte na próxima semana fica onde está.',
    'Na época alta, importamos primeiro e arrancamos numa semana mais calma.'
  ],
  faq: [
    {
      q: 'Podem importar da minha ferramenta atual?',
      a: ['Se exporta para uma folha de cálculo, sim. Envie-nos uma amostra da exportação e dizemos-lhe o que é importado.']
    },
    {
      q: 'Quanto custa?',
      a: [`A configuração, o acompanhamento e a importação das suas folhas de cálculo são gratuitos com faturação anual. Com faturação mensal, a configuração e o acompanhamento custam ${PRICES.setupMonthly} EUR uma única vez e a importação ${PRICES.importMonthly} EUR uma única vez.`, 'O preço da importação cobre listas com um preço por produto, uma linha por elemento e as mesmas colunas do início ao fim. Tarifas por época, documentos Word, PDF, viagens em curso e listas que precisam de ser organizadas primeiro têm preço mediante orçamento, depois de vermos uma amostra.']
    },
    {
      q: 'O que acontece aos meus ficheiros antigos?',
      a: ['Ficam exatamente onde estão. Importamos cópias.']
    },
    {
      q: 'Tenho de passar todas as viagens antigas?',
      a: ['Passe as viagens em aberto que quiser e guarde o resto no seu arquivo. Vale a pena importar os clientes antigos; para as viagens passadas, o seu arquivo chega.']
    },
    {
      q: 'E se a importação precisar de ajustes?',
      a: ['Verifica uma amostra antes de começar, e ajustamo-la consigo. O que notar depois, corrige na aplicação ou diz-nos.']
    }
  ]
};

export const faqPage: SiteContent['faqPage'] = {
  metaTitle: 'Perguntas frequentes | Traviosoft',
  metaDescription:
    'O que faz o Traviosoft, quanto custa, onde estão alojados os seus dados e como funciona a passagem do Excel.',
  title: 'Perguntas frequentes',
  lead: 'Se a sua pergunta não estiver aqui, escreva para hola@traviosoft.com.',
  groups: [
    {
      title: 'Produto',
      items: [
        {
          q: 'O que é o Traviosoft?',
          a: ['Um software de gestão web para agências de viagens à medida e DMC. Cobre o pedido, o orçamento, a reserva com os serviços a reservar, o itinerário do cliente, os pagamentos e as faturas.']
        },
        {
          q: 'Vários fornecedores podem vender o mesmo hotel ou serviço?',
          a: ['Sim. Um produto pode ter vários fornecedores, cada um com as suas tarifas. Escolhe o fornecedor em cada viagem.']
        },
        {
          q: 'O que vê o meu cliente?',
          a: ['Um orçamento limpo com nomes pensados para ele, preços por pessoa, o que está incluído e o que não está, na língua dele e com a sua marca. As suas tarifas net e as suas margens ficam reservadas à sua equipa.']
        },
        {
          q: 'Os meus guias e motoristas podem ver a viagem?',
          a: ['Recebem por email um voucher de serviço com datas, horas, nomes e ponto de encontro.']
        },
        {
          q: 'Trabalham com DMC que vendem através de agências parceiras?',
          a: ['Sim. Faça o orçamento à agência parceira, mantenha o cliente dela na viagem, junte a comissão do parceiro e liquide-a a partir de um extrato por período.']
        },
        {
          q: 'Há um assistente de IA?',
          a: ['Sim, como opção nos dois planos, com limites de utilização. Pergunte-lhe o que precisa de si hoje, peça-lhe um orçamento preparado a partir do seu catálogo ou que transforme a tabela de preços de um fornecedor em preços do catálogo; cada alteração aguarda a sua confirmação. Ligar aos seus dados do Traviosoft o assistente de IA que já usa está incluído nos dois planos.']
        }
      ]
    },
    {
      title: 'Preço e faturação',
      items: [
        {
          q: 'Quanto custa?',
          a: [`O Classic custa ${PRICES.classic.yearly} EUR por mês e o Premium ${PRICES.premium.yearly} EUR por mês, com faturação anual e ${PRICES.usersIncluded} utilizadores incluídos. Cada utilizador adicional custa ${PRICES.extraUser.classic.yearly} EUR por mês no Classic e ${PRICES.extraUser.premium.yearly} EUR no Premium. Sem IVA.`]
        },
        {
          q: 'Posso pagar mensalmente?',
          a: [`Sim. Com faturação mensal, o Classic custa ${PRICES.classic.monthly} EUR e o Premium ${PRICES.premium.monthly} EUR. A configuração e o acompanhamento custam ${PRICES.setupMonthly} EUR uma única vez e a importação das suas folhas de cálculo ${PRICES.importMonthly} EUR uma única vez com faturação mensal; com faturação anual, são todos gratuitos.`]
        },
        {
          q: 'Há um período de experiência gratuito?',
          a: ['Há uma demonstração de 30 minutos sobre uma viagem de exemplo.']
        }
      ]
    },
    {
      title: 'Dados e segurança',
      items: [
        {
          q: 'Onde estão os meus dados?',
          a: ['Num espaço separado para a sua agência, alojado na União Europeia, à parte de todas as outras agências.']
        },
        {
          q: 'Posso sair com os meus dados?',
          a: ['Sim. Recebe os seus dados em formatos normalizados.']
        },
        {
          q: 'Quem pode ver o quê?',
          a: ['No Classic, cada utilizador vê as viagens da agência. No Premium, cada equipa e cada pessoa pode ter os seus próprios clientes, viagens e direitos.']
        }
      ]
    },
    {
      title: 'Mudança',
      items: [
        {
          q: 'Posso importar o meu catálogo atual?',
          a: ['Sim. Durante a implementação importamos os seus produtos, preços e fornecedores a partir das suas folhas de cálculo. A configuração e a importação são gratuitas com faturação anual.']
        },
        {
          q: 'A mudança vai perturbar a minha época?',
          a: ['Faz-se em paralelo. Comece com os novos pedidos no Traviosoft e termine as viagens em curso como começaram.']
        },
        {
          q: 'Segue as regras do meu país?',
          a: ['A numeração de faturas por empresa e as notas de crédito funcionam em todo o lado. O regime espanhol de IVA das agências de viagens está integrado. Noutros países, as faturas passam pelo seu software de faturação. Para o seu país, pergunte-nos durante a demonstração.']
        }
      ]
    }
  ]
};

export const about: SiteContent['about'] = {
  metaTitle: 'Sobre nós | Traviosoft',
  metaDescription:
    'O Traviosoft é um software de gestão para agências de viagens à medida e DMC. Apoio por email das pessoas que desenvolvem o produto, dados alojados na UE.',
  title: 'Sobre nós',
  lead: 'O Traviosoft é um software de gestão para agências de viagens à medida e DMC.',
  blocks: [
    {
      title: 'O que faz',
      body: [
        'O Traviosoft cobre toda a viagem: pedidos, orçamentos feitos serviço a serviço a partir das tarifas net, reservas com vários fornecedores, documentos na língua do cliente, pagamentos e faturas.'
      ]
    },
    {
      title: 'Apoio',
      body: [
        'O apoio é feito por email pelas pessoas que desenvolvem o produto.'
      ]
    },
    {
      title: 'Os seus dados',
      body: [
        'Cada agência tem o seu próprio espaço, alojado na União Europeia. Pode exportar os seus dados a qualquer momento.'
      ]
    }
  ],
  facts: [
    { k: 'Para', v: 'Agências à medida e DMC' },
    { k: 'Dados', v: 'Um espaço privado por agência, alojado na UE' }
  ]
};

export const resources: SiteContent['resources'] = {
  metaTitle: 'Recursos para agências de viagens à medida | Traviosoft',
  metaDescription:
    'Comparações, guias e um glossário para agências à medida e DMC que estão a escolher software. Linguagem simples, sem registo.',
  title: 'Recursos',
  lead: 'Comparações, guias e um glossário.',
  groups: [
    { kind: 'best', title: 'Comparação do melhor software', body: 'As ferramentas que as agências à medida e as DMC usam, lado a lado, e a quem se adapta cada uma.' },
    { kind: 'compare', title: 'Comparações', body: 'O Traviosoft ao lado de outras ferramentas.' },
    { kind: 'guide', title: 'Guias', body: 'Notas práticas sobre orçamentos, reservas e faturação de uma viagem à medida.' },
    { kind: 'invoicing', title: 'Faturação por país', body: 'Como faturam as agências de viagens em Espanha, França, Alemanha e Bélgica, com as datas da faturação eletrónica.' },
    { kind: 'glossary', title: 'Glossário', body: 'Os termos das agências de viagens e do software, uma linha cada.' },
  ],
  glossaryTitle: 'Glossário',
  glossaryMeta:
    'Definições simples dos termos que as agências de viagens à medida e as DMC usam: tarifa net, comissão, voucher, rooming list, adiantamento e outros.',
  glossaryLead: 'As palavras que usa todos os dias, e as do software, uma linha cada.'
};
