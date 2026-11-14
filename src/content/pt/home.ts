import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const home: SiteContent['home'] = {
  metaTitle: 'Traviosoft: software de gestão para agências de viagens à medida e DMC',
  metaDescription:
    `Pedidos, orçamentos com as suas margens, reservas, itinerários para os clientes, pagamentos e faturas num só lugar. Para agências de viagens à medida e DMC. Desde ${PRICES.classic.yearly} EUR por mês, alojado na UE.`,
  title: 'Software de gestão para agências de viagens à medida e DMC',
  sub: 'Pedidos, orçamentos, reservas, pagamentos e faturas, num só lugar.',
  tags: [
    { t: 'Adiantamento pago ✓', s: 'link no email' },
    { t: 'Hotel confirmado', s: 'resposta guardada na viagem' }
  ],
  tripTitle: 'O percurso de uma viagem no Traviosoft',
  steps: [
    { time: '09:12', title: 'Pedido recebido', body: 'Chega a uma só lista, com o passo seguinte.', job: 'sell' },
    { time: '11:40', title: 'Orçamento enviado', body: 'Feito com as suas tarifas e a sua margem.', job: 'sell' },
    { time: 'Dia 2', title: 'Adiantamento pago', body: 'Pago a partir do link no email.', job: 'get-paid' },
    { time: 'Dia 3', title: 'Fornecedores confirmados', body: 'Hotel e guia assinalados na viagem.', job: 'book' },
    { time: 'Dia 30', title: 'Fatura final', body: 'Feita a partir dos números do orçamento.', job: 'get-paid' }
  ],
  stepGo: 'Ver como',
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
