import type { GlossaryTerm } from '../types';

export const glossary: GlossaryTerm[] = [
  {
    id: 'dmc',
    term: 'DMC (Destination Management Company)',
    def: 'Uma empresa local que concebe, vende e opera viagens e programas no seu próprio destino para agências, empresas e viajantes de outros países. Contrata hotéis, guias, transportes e atividades, e garante que tudo funciona no terreno.'
  },
  {
    id: 'inbound-agency',
    term: 'Agência de turismo recetivo (incoming)',
    def: 'Uma agência que recebe viajantes do estrangeiro e organiza a viagem deles no seu próprio país. Na prática é o mesmo que uma DMC, embora “recetivo” se use mais para agências que vendem a outras agências ou diretamente ao viajante.'
  },
  {
    id: 'tailor-made',
    term: 'Viagem à medida',
    def: 'Uma viagem pensada de raiz para um cliente: datas, ritmo, hotéis e atividades seguem o que ele pede. Cada orçamento é diferente, por isso calcula-se serviço a serviço a partir das tarifas net mais a margem.'
  },
  {
    id: 'reav',
    term: 'REAV (o regime especial de IVA espanhol para agências de viagens)',
    def: 'O regime especial de IVA espanhol para agências que vendem, em nome próprio, serviços comprados a terceiros. O IVA não incide sobre o preço total, mas sobre a margem da agência. Está previsto nos artigos 141 a 147 da lei espanhola do IVA (Ley 37/1992).'
  },
  {
    id: 'rooming-list',
    term: 'Rooming list',
    def: 'A lista dos quartos de um grupo: quem fica em cada um, o tipo de quarto, as datas e os pedidos especiais. Segue para o hotel antes da chegada e normalmente tem um prazo fixado no contrato.'
  },
  {
    id: 'net-rate',
    term: 'Tarifa net',
    def: 'O preço que um fornecedor cobra à agência, sem margem nem comissão. É a base de cada orçamento: a agência acrescenta a sua margem para chegar ao preço de venda.'
  },
  {
    id: 'markup-margin',
    term: 'Markup e margem',
    def: 'O markup calcula-se sobre o custo, a margem sobre o preço de venda. Um markup de 25% sobre um custo de 1000 EUR dá um preço de 1250 EUR, ou seja, uma margem de 20%, e não de 25%.'
  },
  {
    id: 'commission',
    term: 'Comissão',
    def: 'Uma percentagem do preço que a agência paga a quem traz a venda (outra agência, um parceiro), ou que recebe de um fornecedor por vender os seus serviços. Tem de estar incluída no preço para não reduzir a margem.'
  },
  {
    id: 'deposit',
    term: 'Adiantamento',
    def: 'O primeiro pagamento que o cliente faz para confirmar uma viagem, normalmente uma percentagem do total. Permite à agência começar a reservar os serviços.'
  },
  {
    id: 'balance',
    term: 'Saldo',
    def: 'O valor que falta pagar depois do adiantamento. É cobrado numa data acordada antes da partida e, uma vez pago, a viagem fica totalmente paga.'
  },
  {
    id: 'allotment',
    term: 'Allotment',
    def: 'Um número de quartos, lugares ou serviços que um fornecedor reserva para uma agência a um preço acordado até uma data de libertação. Depois dessa data, o que não foi usado volta para o fornecedor.'
  },
  {
    id: 'service-sheet',
    term: 'Voucher de serviço',
    def: 'Um documento enviado a um fornecedor, ou levado pelo viajante, com os detalhes de um serviço: quem, quando, onde e o que está incluído. Serve de confirmação para o hotel, o guia ou o motorista.'
  },
  {
    id: 'fit',
    term: 'FIT (Free Independent Traveller)',
    def: 'Um viajante individual ou um pequeno grupo (uma família, um casal, amigos) que viaja por conta própria, e não integrado num grupo organizado. A maioria das viagens à medida são FIT.'
  },
  {
    id: 'mice',
    term: 'MICE',
    def: 'Sigla de Meetings, Incentives, Conferences and Exhibitions: reuniões, viagens de incentivo, congressos e eventos. São viagens de empresa com muitos participantes, blocos de quartos e programas à medida.'
  },
  {
    id: 'verifactu',
    term: 'Veri*Factu',
    def: 'As regras da administração fiscal espanhola (AEAT) para o software de faturação, previstas no Real Decreto 1007/2023: cada fatura fica registada sem possibilidade de alteração e tem um código QR. Na modalidade Veri*Factu, o software envia também cada fatura à administração fiscal no momento da emissão. O software tem de estar pronto até 1 de janeiro de 2027 para as empresas sujeitas ao imposto sobre as sociedades, e até 1 de julho de 2027 para as restantes.'
  }
];
