import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const home: SiteContent['home'] = {
  metaTitle: 'Traviosoft: software de gestão para agências de viagens à medida e DMC',
  metaDescription:
    `Pedidos, orçamentos com as suas margens, reservas, itinerários para os clientes, pagamentos e faturas num só lugar. Para agências de viagens à medida e DMC. Desde ${PRICES.classic.yearly} EUR por mês, alojado na UE.`,
  title: 'Software de gestão para agências de viagens à medida e DMC',
  sub: 'Pedidos, orçamentos, reservas, pagamentos e faturas, num só lugar.',
  proposal: {
    "agency": "A sua agência",
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
        "t": "Dia 2 · Córdova",
        "s": "Visita guiada à Mesquita-Catedral e regresso a Sevilha ao fim do dia."
      },
      {
        "t": "Dia 4 · A caminho de Ronda",
        "s": "Levantamento do carro de aluguer, 2 noites junto ao desfiladeiro."
      }
    ],
    "total": "Total a pagar",
    "vatIncl": "IVA incluído",
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
        "t": "Mesquita-Catedral de Córdova",
        "s": "O seu guia: Lucía"
      }
    ]
  },
  tripTitle: "O percurso de uma viagem no Traviosoft",
  moments: [
    {"rec": "Andaluzia · 2 viajantes", "title": "O pedido", "body": "Chega à lista de pedidos, com o tempo que já esperou e o passo seguinte.", "go": "Ver os pedidos", "job": "sell"},
    {"rec": "Margem {margin} EUR", "title": "O orçamento", "body": "Cada linha parte do custo do fornecedor. Vê a margem da viagem antes de enviar a proposta.", "go": "Ver os orçamentos", "job": "sell"},
    {"rec": "Hotel em Sevilha: confirmado", "title": "As reservas", "body": "Quando o cliente aceita, cada fornecedor recebe o seu pedido, e a resposta fica registada na linha.", "go": "Ver as reservas", "job": "book"},
    {"rec": "Adiantamento {deposit} EUR: pago", "title": "Os pagamentos", "body": "As prestações vêm do orçamento aceite. O cliente paga a partir da ligação no e-mail.", "go": "Ver os pagamentos", "job": "get-paid"},
    {"rec": "Fatura final: {total} EUR", "title": "A fatura", "body": "Retoma as linhas do orçamento aceite.", "go": "Ver as faturas", "job": "get-paid"}
  ],
  sitTitle: "Conforme a sua forma de trabalhar",
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
  setupLine: 'Configuramos tudo consigo e formamos a sua equipa por videochamada.',
  priceTitle: 'Preços',
  priceBody: 'Configuração e acompanhamento',
  priceImport: 'e importação das suas folhas de cálculo',
  priceFree: 'gratuitos*',
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
