import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const home: SiteContent['home'] = {
  metaTitle: 'Traviosoft: software de gestão para agências de viagens à medida e DMC',
  metaDescription:
    `Pedidos, orçamentos com as suas margens, reservas, itinerários para os clientes, pagamentos e faturas num só lugar. Para agências de viagens à medida e DMC. Desde ${PRICES.classic.yearly} EUR por mês, alojado na UE.`,
  title: 'Software de gestão para agências de viagens à medida e DMC',
  sub: 'Pedidos, orçamentos, reservas, pagamentos e faturas, num só lugar.',
  proposal: {
    "agency": "Ruta Sur Viajes",
    "kind": "Proposta de viagem",
    "trip": "Andaluzia, 8 dias",
    "meta": [
      "2 viajantes",
      "8 dias",
      "de 3 a 10 de maio de 2027"
    ],
    "days": [
      {
        "t": "Dia 1 · Sevilha",
        "s": "Receção no aeroporto e transfer para o hotel no centro histórico, por 3 noites."
      },
      {
        "t": "Dia 2 · O Alcázar e a catedral",
        "s": "Visita guiada de manhã, tarde livre no bairro de Santa Cruz."
      },
      {
        "t": "Dia 4 · A caminho de Ronda",
        "s": "Levantamento do carro de aluguer, 2 noites junto ao desfiladeiro."
      }
    ],
    "total": "Total a pagar",
    "vatIncl": "IVA incluído",
    "photo": "Sevilha",
    "stops": [
      {
        "day": "Dia 1 · Segunda, 3 de maio",
        "k": "Transfer",
        "t": "Transfer aeroporto de Sevilha",
        "s": "Ponto de encontro: saída das chegadas"
      },
      {
        "k": "Alojamento",
        "t": "Hotel no centro histórico de Sevilha",
        "s": "Check-out 6 de maio",
        "link": "Abrir no Maps"
      },
      {
        "day": "Dia 2 · Terça, 4 de maio",
        "k": "Atividade",
        "t": "Alcázar e catedral",
        "s": "O seu guia: Lucía"
      }
    ]
  },
  tripTitle: "O percurso de uma viagem no Traviosoft",
  moments: [
    {
      "time": "Segunda, 09:12",
      "title": "Chega o pedido",
      "body": "Todos os pedidos ficam numa só lista, com o tempo que já esperaram e o passo seguinte.",
      "go": "Ver os pedidos",
      "job": "sell"
    },
    {
      "time": "Segunda, 11:40",
      "title": "O orçamento, com a sua margem",
      "body": "Cada linha parte do custo do fornecedor, e vê a margem da viagem antes de a enviar.",
      "go": "Ver os orçamentos",
      "job": "sell"
    },
    {
      "time": "Terça",
      "title": "Cada reserva acompanhada",
      "body": "Quando o cliente aceita, cada fornecedor recebe o seu pedido e a resposta fica registada na linha. O que falta fazer está nas tarefas.",
      "go": "Ver as reservas",
      "job": "book"
    },
    {
      "time": "Antes da partida",
      "title": "Pagamentos e faturas a partir do orçamento",
      "body": "As prestações vêm do orçamento aceite. O cliente paga a partir da ligação no e-mail, e a fatura retoma as mesmas linhas.",
      "go": "Ver os pagamentos",
      "job": "get-paid"
    }
  ],
  sitTitle: "Conforme a sua forma de trabalhar",
  sitLead: "Cada agência tem os seus hábitos. Eis o que o Traviosoft faz nos casos mais comuns.",
  situations: [
    {
      "t": "Vendo a agências, não ao viajante",
      "s": "Comissões, tarifas net e a agência que traz o cliente em cada orçamento.",
      "job": "sell"
    },
    {
      "t": "Trabalho com grupos",
      "s": "Lista de viajantes, rooming list e um formulário que cada viajante preenche.",
      "job": "book"
    },
    {
      "t": "Os meus fornecedores faturam em dólares ou dirhams",
      "s": "Custos na moeda deles, preços na sua, com a taxa de câmbio do orçamento guardada.",
      "job": "sell"
    },
    {
      "t": "Trabalho com guias e motoristas",
      "s": "Ficha de serviço enviada ao guia, e o pagamento dele acompanhado com a viagem.",
      "job": "book"
    },
    {
      "t": "Os meus clientes pagam em prestações",
      "s": "Prestações definidas no orçamento, lembretes e pagamento online.",
      "job": "get-paid"
    },
    {
      "t": "Faturo no regime da margem",
      "s": "O IVA é calculado sobre a sua margem, com a menção do regime na fatura.",
      "job": "get-paid"
    },
    {
      "t": "As minhas tarifas mudam com a época",
      "s": "Preços por época, idade ou dia, e o orçamento usa o preço das datas da viagem.",
      "job": "sell"
    },
    {
      "t": "Temos várias marcas ou empresas",
      "s": "Cada uma tem os seus documentos, menções e numeração de faturas.",
      "job": "setup"
    }
  ],
  app: {
    "user": "LG",
    "lang": "PT",
    "nav": {
      "workspace": "Espaço de trabalho",
      "dashboard": "Painel",
      "calendar": "Calendário",
      "analytics": "Análises",
      "pipeline": "Pipeline",
      "requests": "Pedidos",
      "quotes": "Orçamentos",
      "orders": "Reservas",
      "finances": "Finanças",
      "resources": "Recursos",
      "catalog": "Catálogo",
      "clients": "Clientes",
      "providers": "Fornecedores",
      "guide": "Guia rápido"
    },
    "client": "Família Silva",
    "trip": "Andaluzia, 8 dias",
    "req": {
      "newBtn": "Novo pedido",
      "rows": [
        {
          "name": "Família Silva",
          "msg": "Andaluzia em maio, 2 adultos, hotéis com charme",
          "meta": "Site · de 3 a 10 de maio de 2027",
          "badge": "Novo · 12 min",
          "kind": "new",
          "ago": "09:12"
        },
        {
          "name": "Ana Ruiz",
          "msg": "Lisboa e Porto, 10 dias",
          "meta": "E-mail · junho de 2027",
          "badge": "Respondido",
          "kind": "ok",
          "ago": "Ontem"
        },
        {
          "name": "Bertrand Lefèvre",
          "msg": "Marrocos, grupo de 18",
          "meta": "Telefone · outubro de 2027",
          "badge": "Respondido",
          "kind": "ok",
          "ago": "8 jan"
        },
        {"name": "Hannah Weber", "msg": "Norte de Espanha de comboio, 12 dias", "meta": "Agência parceira · setembro de 2027", "badge": "Respondido", "kind": "ok", "ago": "7 jan"},
        {"name": "Pierre Dubois", "msg": "Sevilha num fim de semana, 4 adultos", "meta": "Site · abril de 2027", "badge": "Respondido", "kind": "ok", "ago": "5 jan"}
      ]
    },
    "quote": {
      "sent": "Enviado",
      "viewPdf": "Ver PDF",
      "startLabel": "Data de início",
      "start": "03/05/2027",
      "expiresLabel": "Expira em",
      "expires": "25/01/2027",
      "pax": "2 PAX",
      "tabs": [
        "Orçamento",
        "Pagamentos",
        "Envio",
        "Histórico"
      ],
      "linesTitle": "Linhas do orçamento",
      "vatRegimeLabel": "Regime de IVA",
      "vatRegime": "Regime da margem",
      "unitIncl": "/ unidade c/ IVA",
      "lines": [
        "Transfer privado, aeroporto de Sevilha",
        "Hotel em Sevilha, quarto duplo",
        "Alcázar e catedral, visita guiada",
        "Carro de aluguer, categoria B",
        "Hotel em Ronda, quarto duplo",
        "Hotel em Granada, quarto duplo",
        "Alhambra, visita guiada"
      ],
      "totalTitle": "Total c/ IVA",
      "perPerson": "Preço por pessoa",
      "selling": "Preço de venda (c/ IVA)",
      "cost": "Custo do fornecedor (c/ IVA)",
      "margin": "Margem bruta",
      "vatMargin": "IVA sobre a margem a declarar"
    },
    "order": {
      "accepted": "Aceite",
      "bookingTitle": "Reservas",
      "bookingCount": "5 de 7 confirmadas",
      "providers": [
        "Traslados Giralda",
        "Hotel Sevilla Centro",
        "Lucía Romero, guia",
        "Autos Bética",
        "Hotel Ronda Tajo",
        "Hotel Granada Albaicín",
        "Patronato de la Alhambra"
      ],
      "states": {
        "confirmed": "Confirmado",
        "ref": "Confirmado · ref. 48213",
        "requested": "Encomendado · a aguardar confirmação",
        "toBook": "Por reservar"
      },
      "tasksTitle": "Tarefas",
      "tasks": [
        "Enviar a confirmação ao cliente",
        "Reservar os bilhetes da Alhambra"
      ]
    },
    "pay": {
      "schedTitle": "Prestações agendadas",
      "deposit": "Adiantamento 30%",
      "depositSub": "Cartão, a partir da ligação no e-mail",
      "balance": "Saldo",
      "dueLabel": "Vencimento:",
      "paid": "Pago",
      "upcoming": "Pendente",
      "invTitle": "Faturas",
      "invDeposit": "Adiantamento (Anticipo)",
      "invFinal": "Fatura final",
      "invPaid": "Paga",
      "invDraft": "Rascunho",
      "dates": [
        "12/01/2027",
        "03/04/2027"
      ]
    }
  },
  baTitle: 'Antes e depois',
  beforeTitle: 'Hoje',
  beforeScraps: [
    { i: 'sheet', t: 'Tarifas_2026_FINAL_v3.xlsx' },
    { i: 'doc', t: 'Orçamento Silva.docx' },
    { i: 'chat', t: 'WhatsApp: «o hotel já confirmou?»' },
    { i: 'bank', t: 'Adiantamento? ver no banco' },
    { i: 'book', t: 'Números de fatura num caderno' },
    { i: 'mail', t: '42 emails por ler' },
    { i: 'sheet', t: 'Rooming_list_Müller (2).xlsx' },
    { i: 'phone', t: 'Ligar de volta ao guia' },
    { i: 'note', t: 'Quem enviou o orçamento?' },
    { i: 'pdf', t: 'Voucher_final_FINAL.pdf' },
    { i: 'calc', t: 'Margem: voltar a calcular' },
    { i: 'mail', t: 'RE: RE: RE: disponibilidade' }
  ],
  afterTitle: 'Com o Traviosoft',
  afterBody:
    'O pedido, o orçamento, as reservas, os pagamentos e as faturas estão na mesma viagem, e toda a equipa vê o mesmo.',
  priceTitle: 'Preços',
  priceBody: 'Configuração',
  priceImport: 'e importação das suas folhas de cálculo',
  priceFree: 'gratuitas*',
  priceFreeNote: '* Com faturação anual. Oferta por tempo limitado.',
  extraUserLine: `Utilizador adicional: ${PRICES.extraUser.classic.yearly} EUR (Classic) ou ${PRICES.extraUser.premium.yearly} EUR (Premium) por mês*`,
  coin1: 'EUR/mês* · Classic',
  coin2: 'EUR/mês* · Premium',
  coinUsers: `${PRICES.usersIncluded} utilizadores`,
  priceNote: '* Por mês, faturação anual, sem IVA. Todos os detalhes na página Preços.',
  priceLink: 'Comparar os planos',
  facts: [
    { k: 'Preço', v: `Desde ${PRICES.classic.yearly} EUR por mês, ${PRICES.usersIncluded} utilizadores incluídos` },
    { k: 'Para', v: 'Agências à medida e DMC' },
    { k: 'Dados', v: 'Um espaço privado por agência, alojado na UE' },
    { k: 'Línguas', v: 'Documentos em espanhol, catalão, inglês, francês e italiano' }
  ]
};
