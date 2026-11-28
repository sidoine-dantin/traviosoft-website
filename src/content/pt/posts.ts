import type { Article } from '../types';

// Artigos acrescentados a 28 de novembro de 2026, escolhidos a partir das pesquisas da Search Console e dos volumes do planeador de palavras-chave do Google Ads.

const dmc: Article = {
  key: 'what-is-a-dmc',
  kind: 'guide',
  slug: 'o-que-e-uma-dmc',
  metaTitle: 'O que é uma DMC (agência de turismo recetivo)',
  metaDescription:
    'O que é uma DMC, o que organiza, quem são os seus clientes, em que difere de um operador turístico ou de uma agência e como calcula os preços.',
  title: 'O que é uma DMC?',
  lead: 'Uma DMC (destination management company), ou agência de turismo recetivo, é uma empresa sediada num destino que organiza o que os viajantes lá fazem: transfers, guias, excursões, hotéis, restaurantes e eventos. Os seus clientes são normalmente operadores turísticos, agências de viagens e organizadores de eventos, que vendem a viagem ao viajante.',
  updated: '2026-11-28',
  card: 'O que uma DMC organiza, quem são os seus clientes e como calcula os preços.',
  related: ['hotel-allotment', 'package-quote', 'quote-with-margins', 'net-commissionable-rates', 'best-dmc-software'],
  blocks: [
    { type: 'h2', text: 'Definição', id: 'definition' },
    {
      type: 'p',
      text: 'A ADMEI, a associação internacional das DMC, define uma DMC como uma empresa de serviços sediada no seu destino, especializada no conhecimento e nos recursos locais. Descreve-a como um parceiro para a gestão de eventos, visitas e atividades, transporte, animação e logística de programas.'
    },
    {
      type: 'p',
      text: 'Na Europa fala-se também de turismo recetivo: turismo recetivo em português, agence réceptive em francês, agencia receptiva em espanhol e incoming em italiano.'
    },
    { type: 'h2', text: 'O que uma DMC organiza', id: 'services' },
    {
      type: 'list',
      items: [
        'Os transfers entre o aeroporto, os hotéis e os locais visitados.',
        'Os hotéis, muitas vezes com tarifas negociadas para a época.',
        'Guias, excursões, visitas e atividades.',
        'Restaurantes, jantares privados e eventos temáticos.',
        'Para grupos e eventos: espaços, logística de congressos e viagens de incentivo.',
        'O acompanhamento no destino durante a estadia dos viajantes.'
      ]
    },
    {
      type: 'p',
      text: 'A Smart Meetings compara a DMC ao arquiteto e, ao mesmo tempo, ao empreiteiro geral de um programa: prepara a proposta, contrata e coordena os fornecedores locais e acompanha o programa no destino.'
    },
    { type: 'h2', text: 'Quem são os seus clientes', id: 'clients' },
    {
      type: 'list',
      items: [
        'Operadores turísticos e agências de viagens de outros países, que vendem a viagem aos seus próprios clientes.',
        'Organizadores de reuniões, incentivos e eventos (MICE), para grupos e programas de empresa.',
        'Empresas que organizam uma viagem ou um evento para as suas equipas.',
        'Algumas DMC vendem também diretamente aos viajantes.'
      ]
    },
    { type: 'h2', text: 'DMC, operador turístico, agência de viagens e DMO', id: 'differences' },
    {
      type: 'table',
      head: ['Termo', 'O que costuma significar'],
      rows: [
        ['DMC', 'Uma empresa do destino que organiza os serviços no local e os vende a agências, operadores turísticos e organizadores de eventos.'],
        ['Operador turístico', 'Uma empresa que cria viagens, muitas vezes em vários destinos, e as vende através de agências ou diretamente. Trabalha muitas vezes com uma DMC em cada destino.'],
        ['Agência de viagens', 'Uma empresa que vende viagens aos viajantes. Uma agência de viagens à medida cria a viagem com o viajante e reserva os serviços, por vezes através de uma DMC.'],
        ['DMO', 'Uma organização de gestão ou promoção do destino, normalmente pública ou sem fins lucrativos. Em geral, não vende viagens.']
      ]
    },
    {
      type: 'p',
      text: 'Estas atividades sobrepõem-se. Uma DMC pode ser também operador turístico, e uma agência à medida pode organizar o seu próprio destino. A situação jurídica de cada empresa depende das regras do seu país para as atividades de viagens.'
    },
    { type: 'h2', text: 'Como uma DMC calcula os preços', id: 'pricing' },
    {
      type: 'p',
      text: 'Uma DMC compra normalmente aos fornecedores a tarifas net, acrescenta a sua margem e vende à agência ou ao operador turístico, que acrescenta a sua própria margem ou recebe uma comissão. As páginas [Tarifas net e tarifas comissionáveis](/guides/tarifas-net-e-tarifas-comissionaveis) e [Como se calcula o preço de uma viagem à medida](/guides/orcamento-viagem-a-medida-com-margem) mostram o cálculo com números.'
    },
    {
      type: 'p',
      text: 'Para grupos e programas regulares, uma DMC tem muitas vezes quartos em allotment nos hotéis, com uma data de release para os quartos que não vendeu. A página [O allotment hoteleiro e a data de release](/guides/allotment-hotel-release) explica como funciona.'
    },
    { type: 'h2', text: 'Um pedido, passo a passo', id: 'steps' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Uma agência envia um pedido: datas, número de viajantes, orçamento e preferências.',
        'A DMC verifica a disponibilidade junto dos fornecedores e prepara um programa com preço.',
        'A agência confirma, muitas vezes depois de uma ou duas versões.',
        'A DMC reserva cada serviço, reúne as confirmações e envia os vouchers e a rooming list.',
        'Os viajantes chegam; a DMC acompanha o programa no destino.',
        'A DMC fatura à agência e paga aos fornecedores.'
      ]
    },
    {
      type: 'p',
      text: 'Segundo a Smart Meetings, algumas DMC estimam que um quarto ou menos das suas propostas se torna um contrato, e por isso conta o tempo dedicado a cada proposta.'
    },
    { type: 'h2', text: 'Associações', id: 'associations' },
    {
      type: 'p',
      text: 'A ADMEI (Association of Destination Management Executives International) reúne DMC. As suas condições de adesão pedem visitas e atividades e transporte, e pelo menos duas destas atividades: gestão de eventos, animação e logística de programas. Muitos países têm também associações nacionais de agências de turismo recetivo.'
    },
    { type: 'h2', text: 'No Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'O Traviosoft é um [software de gestão para agências de viagens à medida e DMC](/). Reúne os pedidos, um catálogo com as tarifas net por época, os orçamentos com margem e comissão, as reservas com cada fornecedor, os pagamentos e as faturas de cada viagem.'
    },
    { type: 'h2', text: 'Perguntas', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'O que significa DMC?', a: ['Destination management company, ou seja, empresa de gestão do destino. No turismo e nos eventos, a sigla designa quase sempre uma agência de turismo recetivo.'] },
        { q: 'Uma DMC é uma agência de viagens?', a: ['Uma DMC trabalha no destino e vende sobretudo a outras empresas de viagens. Conforme o país, pode ter licença de agência de viagens ou de operador turístico.'] },
        { q: 'Qual é a diferença entre uma DMC e uma DMO?', a: ['Uma DMC é uma empresa que vende serviços num destino. Uma DMO é normalmente um organismo público ou sem fins lucrativos que promove o destino.'] },
        { q: 'Como ganha dinheiro uma DMC?', a: ['Com a margem entre as tarifas net que paga aos fornecedores e o preço a que vende. Algumas cobram também as propostas ou as visitas de inspeção.'] }
      ]
    },
    {
      type: 'p',
      text: 'Fontes (em inglês): [condições de adesão da ADMEI](https://growthzonesitesprod.azureedge.net/wp-content/uploads/sites/1073/2020/03/DMC-MEMBERSHIP-REQUIREMENTS.pdf), [Smart Meetings, «The evolution of the DMC»](https://www.smartmeetings.com/meeting-planning/133619/evolution-dmc), [Wikipedia, «Destination management»](https://en.wikipedia.org/wiki/Destination_management). Consultadas a 28 de novembro de 2026.'
    }
  ]
};

const allotment: Article = {
  key: 'hotel-allotment',
  kind: 'guide',
  slug: 'allotment-hotel-release',
  metaTitle: 'Allotment hoteleiro: data de release, cut-off e wash',
  metaDescription:
    'O allotment hoteleiro, a data de release e o cut-off, o que acontece aos quartos por vender, wash e attrition, com um exemplo.',
  title: 'O allotment hoteleiro e a data de release',
  lead: 'Um allotment é um número de quartos que um hotel reserva para um operador turístico, uma DMC ou uma agência, a uma tarifa acordada, durante um período. Os quartos não vendidos na data de release voltam para o hotel, que os vende pelos seus outros canais.',
  updated: '2026-11-28',
  card: 'Allotment, data de release, cut-off, wash e attrition, com um exemplo.',
  related: ['rooming-list', 'what-is-a-dmc', 'net-commissionable-rates', 'quote-with-margins'],
  blocks: [
    { type: 'h2', text: 'O que é um allotment', id: 'definition' },
    {
      type: 'p',
      text: 'O hotel põe de parte um número de quartos por noite para um parceiro, para uma época inteira, parte de uma época ou datas concretas, a uma tarifa fixada com antecedência. O parceiro vende esses quartos aos seus próprios clientes, dentro de uma viagem ou de um programa. Os quartos fora do allotment reservam-se a pedido: cada reserva aguarda a confirmação do hotel.'
    },
    {
      type: 'p',
      text: 'Segundo a Wikipedia, os hotéis concedem allotments sobretudo a parceiros com histórico de vendas, a tarifas 10% a 50% abaixo do preço ao público.'
    },
    { type: 'h2', text: 'Data de release e cut-off', id: 'release' },
    {
      type: 'p',
      text: 'O período de release, também chamado cut-off, é o número de dias antes da chegada em que os quartos não vendidos voltam para o hotel. Depois dessa data, uma nova reserva depende do que o hotel ainda tiver disponível.'
    },
    {
      type: 'table',
      head: ['Fonte', 'Período de release indicado'],
      rows: [
        ['Wikipedia e Xotels', 'Um exemplo de 4 dias antes da chegada'],
        ['Fáilte Ireland', '14 ou 7 dias antes da data bloqueada, ao meio-dia'],
        ['Roommaster', '21 a 45 dias na maioria dos mercados de lazer; menos nos allotments de empresa']
      ]
    },
    { type: 'p', text: 'O contrato com cada hotel fixa o período. Pode mudar conforme a época.' },
    { type: 'h2', text: 'Dois tipos de allotment', id: 'kinds' },
    {
      type: 'list',
      items: [
        '**Fixo:** um número de quartos por noite, com uma única data de release para todo o bloco.',
        '**A pedido (call-off):** o parceiro retira quartos de um conjunto à medida que chegam as reservas, e os quartos são libertados de forma progressiva.'
      ]
    },
    {
      type: 'p',
      text: 'Um bloco de quartos para um grupo funciona de forma parecida para uma única estadia: o hotel guarda os quartos até uma data limite, em que espera a rooming list.'
    },
    { type: 'h2', text: 'Wash e attrition', id: 'wash' },
    {
      type: 'list',
      items: [
        '**Wash:** a parte de um bloco que fica por vender na data de release. Um parceiro que vende 70 quartos de um bloco de 100 tem um wash de 30%.',
        '**Attrition:** uma cláusula que fixa o que o parceiro paga se usar menos quartos do que o acordado.'
      ]
    },
    {
      type: 'p',
      text: 'Os hotéis comparam também os allotments com os níveis de produção acordados, a cada trimestre ou a cada ano. Quando um allotment é menos usado do que o acordado, o contrato pode permitir ao hotel reduzi-lo ou mudar a tarifa.'
    },
    { type: 'h2', text: 'Exemplo', id: 'example' },
    {
      type: 'p',
      text: 'Uma DMC tem 10 quartos duplos por noite em allotment num hotel de maio a setembro, com um período de release de 21 dias. Para a noite de 12 de junho, a data de release é 22 de maio.'
    },
    {
      type: 'table',
      head: ['Data', 'Quartos vendidos', 'Quartos em allotment'],
      rows: [
        ['1 de maio', '4', '10'],
        ['22 de maio (data de release)', '7', '7: os 3 quartos por vender voltam para o hotel'],
        ['2 de junho', '8', 'O 8.º quarto é reservado a pedido']
      ]
    },
    { type: 'p', text: 'Para essa noite, o wash é de 3 quartos em 10, ou seja, 30%. (Exemplo inventado para esta página.)' },
    { type: 'h2', text: 'A rooming list', id: 'rooming-list' },
    {
      type: 'p',
      text: 'Para um grupo, o hotel espera normalmente os nomes até à data limite, numa rooming list. A página [A rooming list para grupos e eventos MICE](/guides/rooming-list-grupos-mice) descreve o que contém.'
    },
    { type: 'h2', text: 'No Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'No Traviosoft, cada reserva com um hotel é uma tarefa da viagem, do pedido à confirmação do hotel, e a rooming list por hotel é criada a partir de quem partilha o quarto com quem.'
    },
    { type: 'h2', text: 'Perguntas', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Qual é a diferença entre um allotment e um bloco de grupo?', a: ['Um allotment cobre um período, muitas vezes uma época, e o parceiro vende os quartos a muitos clientes. Um bloco de grupo cobre a estadia de um só grupo.'] },
        { q: 'O que acontece depois da data de release?', a: ['Os quartos por vender voltam para o hotel, que os pode vender às suas tarifas do momento. Uma reserva posterior depende da disponibilidade.'] },
        { q: 'O período de release é um prazo de cancelamento?', a: ['São duas cláusulas distintas. O período de release aplica-se aos quartos por vender; as condições de cancelamento, aos quartos já reservados.'] }
      ]
    },
    {
      type: 'p',
      text: 'Fontes (em inglês): [Wikipedia, «Allotment (travel industry)»](https://en.wikipedia.org/wiki/Allotment_(travel_industry)), [glossário Xotels, allotment](https://xotels.com/en/glossary/allotment) e [cut-off](https://xotels.com/en/glossary/cut-off), [Fáilte Ireland, condições para contratos B2B](https://failteireland.ie/FailteIreland/media/WebsiteStructure/Documents/Brexit/Considerations-for-T-Cs-for-B2B-Contracting-Accomm-Providers.pdf), [Roommaster](https://www.roommaster.com/blog/hotel-allotment-management), [Mews](https://www.mews.com/en/blog/hotel-room-allotment). Consultadas a 28 de novembro de 2026.'
    }
  ]
};

const PKG_DISCLAIMER =
  'Informação geral, escrita a 28 de novembro de 2026 a partir do texto da diretiva europeia. Não constitui aconselhamento jurídico e não tem valor legal. Cada país aplica a diretiva com a sua própria lei, que pode acrescentar regras: consulte os textos oficiais ou um consultor qualificado. O Traviosoft não assume qualquer responsabilidade por decisões tomadas com base nesta página.';

const packageQuote: Article = {
  key: 'package-quote',
  kind: 'guide',
  slug: 'orcamento-viagem-organizada-informacoes',
  metaTitle: 'Orçamento de uma viagem organizada: a informação prevista',
  metaDescription:
    'Quando uma viagem à medida é uma viagem organizada segundo a Diretiva (UE) 2015/2302 e o que indicam o orçamento e o contrato.',
  title: 'O que contém o orçamento de uma viagem organizada',
  lead: 'Quando uma agência combina um voo, um hotel, um carro ou uma excursão para a mesma viagem, a viagem é muitas vezes uma viagem organizada segundo a diretiva europeia. A diretiva enumera a informação que o viajante recebe antes de reservar e o que o contrato acrescenta.',
  updated: '2026-11-28',
  card: 'Quando uma viagem é organizada, e a informação do orçamento e do contrato.',
  related: ['quote-with-margins', 'what-is-a-dmc', 'eu-vat-travel', 'gdpr-travel'],
  blocks: [
    { type: 'callout', text: PKG_DISCLAIMER },
    { type: 'h2', text: 'Quando uma viagem é organizada', id: 'package' },
    {
      type: 'p',
      text: 'O artigo 3.º da Diretiva (UE) 2015/2302 distingue quatro tipos de serviços de viagem: o transporte de passageiros, o alojamento, o aluguer de automóveis e motociclos, e outros serviços turísticos como excursões ou visitas guiadas. Uma viagem organizada é a combinação de pelo menos dois tipos diferentes para a mesma viagem, quando se verifica um destes casos:'
    },
    {
      type: 'list',
      items: [
        'um profissional combina-os antes da celebração de um contrato único, incluindo a pedido do viajante;',
        'são comprados num único ponto de venda e escolhidos antes de o viajante aceitar pagar;',
        'são propostos ou faturados a um preço global;',
        'são anunciados ou vendidos como «viagem organizada» ou com um nome semelhante;',
        'são reservados através de processos de reserva em linha ligados, nas condições do artigo.'
      ]
    },
    {
      type: 'p',
      text: 'Um hotel combinado apenas com serviços turísticos como excursões não é uma viagem organizada quando esses serviços não representam uma parte significativa do valor da viagem e não são anunciados como elemento essencial.'
    },
    { type: 'h2', text: 'A informação dada antes da reserva', id: 'information' },
    {
      type: 'p',
      text: 'Segundo o artigo 5.º, antes de o viajante ficar vinculado, o organizador entrega o formulário de informação normalizado do anexo I e a seguinte informação:'
    },
    {
      type: 'table',
      head: ['Artigo 5.º, n.º 1', 'Informação'],
      rows: [
        ['a)', 'As características principais: destinos, itinerário, datas e número de noites; transporte, horários e escalas; localização, características e categoria do alojamento; refeições; visitas e excursões incluídas; se a viagem é em grupo e a dimensão aproximada do grupo; língua dos serviços guiados; e se a viagem é adequada a pessoas com mobilidade reduzida.'],
        ['b)', 'A denominação comercial e o endereço do organizador e do retalhista, com telefone e e-mail.'],
        ['c)', 'O preço total, incluindo impostos, taxas e outros custos, ou o tipo de custos ainda a pagar quando não podem ser calculados com antecedência.'],
        ['d)', 'As modalidades de pagamento: o adiantamento em montante ou percentagem e as datas do saldo.'],
        ['e)', 'O número mínimo de viajantes, se existir, e a data até à qual a viagem pode ser cancelada se esse número não for atingido.'],
        ['f)', 'Informação geral sobre passaportes, vistos e formalidades sanitárias do destino.'],
        ['g)', 'Que o viajante pode rescindir o contrato a qualquer momento antes do início, mediante uma taxa de rescisão.'],
        ['h)', 'Os seguros, facultativos ou obrigatórios, que cobrem a rescisão ou a assistência e o repatriamento.']
      ]
    },
    {
      type: 'p',
      text: 'O artigo 5.º, n.º 3, pede que esta informação seja dada de forma clara, compreensível e bem visível, e que seja legível quando é escrita.'
    },
    { type: 'h2', text: 'O que o contrato acrescenta', id: 'contract' },
    { type: 'p', text: 'O artigo 7.º enumera o que o contrato de viagem organizada contém além da informação acima:' },
    {
      type: 'list',
      items: [
        'os pedidos especiais aceites pelo organizador;',
        'que o organizador é responsável pela execução dos serviços e deve prestar assistência ao viajante em dificuldade;',
        'o nome e os contactos da proteção em caso de insolvência;',
        'um representante local ou um ponto de contacto para assistência e reclamações;',
        'a obrigação de comunicar sem demora qualquer problema durante a viagem;',
        'para menores que viajam sozinhos, um contacto no local de estadia;',
        'os procedimentos de reclamação, incluindo a resolução alternativa de litígios;',
        'o direito de ceder o contrato a outro viajante.'
      ]
    },
    {
      type: 'p',
      text: 'O viajante recebe uma cópia ou uma confirmação do contrato num suporte duradouro, como um PDF. Com a devida antecedência antes da partida, o organizador envia os recibos, vouchers e bilhetes e os horários de partida e de regresso.'
    },
    { type: 'h2', text: 'Alterações de preço depois da reserva', id: 'price' },
    {
      type: 'p',
      text: 'Segundo o artigo 10.º, o preço só pode aumentar depois da reserva se o contrato o previr, e apenas por alterações do custo do combustível para o transporte, de impostos e taxas fixados por terceiros ou das taxas de câmbio. O viajante é avisado pelo menos 20 dias antes do início, com o cálculo. Acima de 8% do preço total, o viajante pode aceitar a alteração ou rescindir sem taxa. Quando estes custos descem, o viajante tem direito a uma redução do preço.'
    },
    { type: 'h2', text: 'Rescisão', id: 'cancellation' },
    {
      type: 'list',
      items: [
        'O viajante pode rescindir a qualquer momento antes do início, mediante uma taxa adequada e justificável. O contrato pode fixar taxas normalizadas conforme a data da rescisão (artigo 12.º, n.º 1).',
        'O viajante rescinde sem taxa quando circunstâncias inevitáveis e excecionais no destino ou na sua proximidade imediata afetam consideravelmente a viagem (artigo 12.º, n.º 2).',
        'O organizador pode cancelar quando o número de inscritos é inferior ao mínimo indicado: o mais tardar 20 dias antes de uma viagem de mais de seis dias, 7 dias antes de uma viagem de dois a seis dias e 48 horas antes de uma mais curta (artigo 12.º, n.º 3).',
        'Os reembolsos são pagos no prazo de 14 dias após a rescisão (artigo 12.º, n.º 4).'
      ]
    },
    { type: 'h2', text: 'O nome da viagem organizada em cada língua', id: 'names' },
    {
      type: 'p',
      text: 'A diretiva fala de «viagem organizada» em português, «package» em inglês, «voyage à forfait» em francês, «viaje combinado» em espanhol e «pacchetto turistico» em italiano. Cada país transpô-la para a sua própria lei; em Portugal, o Decreto-Lei n.º 17/2018.'
    },
    { type: 'h2', text: 'No Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'No Traviosoft, o orçamento que o cliente recebe mostra o programa dia a dia, o que está incluído e não incluído, o total e o preço por pessoa, o adiantamento e as datas do saldo, e a data até à qual o orçamento é válido.'
    },
    { type: 'h2', text: 'Perguntas', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Uma viagem à medida é uma viagem organizada?', a: ['Muitas vezes, quando combina pelo menos dois tipos de serviços de viagem para a mesma viagem, como um voo e um hotel, ou um hotel e um carro. O artigo 3.º da diretiva dá todas as condições.'] },
        { q: 'A diretiva aplica-se às viagens de negócios?', a: ['O artigo 2.º exclui as viagens organizadas compradas ao abrigo de um acordo geral para viagens de negócios entre uma empresa e um profissional. Outras viagens de negócios podem estar abrangidas.'] },
        { q: 'O preço pode mudar depois da reserva?', a: ['Só se o contrato o previr, pelos motivos do artigo 10.º, e o mais tardar 20 dias antes do início.'] }
      ]
    },
    {
      type: 'p',
      text: 'Texto oficial: [Diretiva (UE) 2015/2302 no EUR-Lex](https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32015L2302), disponível em todas as línguas da UE.'
    }
  ]
};


const INV_DISCLAIMER =
  "Informação geral, redigida a 28 de novembro de 2026. Não constitui aconselhamento jurídico, fiscal ou contabilístico e não tem valor legal. Cada país fixa as suas próprias regras de faturação e de IVA: consulte as fontes oficiais ou um consultor qualificado. A Traviosoft não assume qualquer responsabilidade por decisões tomadas com base nesta página.";

const invoicing: Article = {
  key: 'agency-invoicing',
  kind: 'guide',
  slug: "faturacao-contabilidade-agencia-de-viagens",
  metaTitle: "Faturação e contabilidade de uma agência de viagens",
  metaDescription: "Como se fatura uma viagem à medida: faturas de adiantamento e de saldo, notas de crédito, a margem por viagem e o que o contabilista recebe todos os meses.",
  title: "Faturação e contabilidade de uma agência de viagens, passo a passo",
  lead: "Numa agência de viagens, a fatura chega no fim de uma cadeia: o orçamento que o cliente aceita, o adiantamento e o saldo, o custo de cada fornecedor e, depois, os ficheiros que o contabilista recebe. Esta página segue essa cadeia para uma viagem à medida.",
  updated: '2026-11-28',
  card: "Faturas de adiantamento e de saldo, notas de crédito, a margem por viagem e os ficheiros para o contabilista.",
  related: ['eu-vat-travel', 'invoicing-france', 'invoicing-spain', 'quote-with-margins', 'net-commissionable-rates'],
  blocks: [
    { type: 'callout', text: INV_DISCLAIMER },
    { type: 'h2', text: "O que distingue a faturação de uma agência de viagens", id: 'specifics' },
    { type: 'list', items: ["Uma viagem reúne serviços de muitos fornecedores: hotéis, guias, transferes, atividades.", "O cliente paga normalmente um adiantamento ao confirmar a viagem e o saldo antes da partida. Os fornecedores faturam muitas vezes mais tarde, por vezes depois da viagem.", "Na União Europeia, uma agência que vende viagens em nome próprio com serviços comprados a terceiros aplica o regime especial das agências de viagens: o IVA é devido sobre a margem.", "A margem de uma viagem fica definitiva quando chegaram todas as faturas dos fornecedores."] },
    { type: 'h2', text: "Os documentos de uma viagem", id: 'documents' },
    { type: 'table', head: ["Documento", "Quando", "O que indica"], rows: [["Orçamento", "Antes de o cliente aceitar", "O programa, o preço total, o adiantamento e o saldo com as respetivas datas."], ["Fatura de adiantamento", "Quando o adiantamento é recebido", "O montante do adiantamento e a viagem a que pertence."], ["Fatura de saldo", "Normalmente antes da partida", "O preço total da viagem, menos o adiantamento já faturado."], ["Nota de crédito", "Quando a viagem é cancelada ou alterada", "O montante que anula toda ou parte de uma fatura anterior, com a sua referência."]] },
    { type: 'p', text: "A diretiva do IVA da União Europeia enumera os elementos de uma fatura, entre eles um número sequencial que identifica a fatura e, quando se aplica o regime das agências de viagens, a menção «Regime da margem de lucro – Agências de viagens» (artigo 226.º). Qualquer documento que altere a fatura inicial e lhe faça referência, como uma nota de crédito, é assimilado a fatura (artigo 219.º). Cada país fixa a redação exata na sua lei: veja as páginas de [Espanha](/guides/faturacao-agencia-de-viagens-espanha), [França](/guides/faturacao-agencia-de-viagens-franca), [Alemanha](/guides/faturacao-agencia-de-viagens-alemanha) e [Bélgica](/guides/faturacao-agencia-de-viagens-belgica)." },
    { type: 'h2', text: "Um exemplo: uma viagem, do orçamento à margem", id: 'example' },
    { type: 'p', text: "Uma viagem inventada de sete dias para dois viajantes, vendida por 4 800 EUR, com um adiantamento de 30%." },
    { type: 'table', head: ["Passo", "Montante"], rows: [["Fatura de adiantamento (30%)", "1 440 EUR"], ["Fatura de saldo: 4 800 EUR menos o adiantamento", "3 360 EUR a pagar"], ["Hotéis, como no orçamento", "2 300 EUR"], ["Guia e transferes, como no orçamento", "900 EUR"], ["Atividades, como no orçamento", "400 EUR"], ["Margem prevista no orçamento", "1 200 EUR, 25% do preço"], ["Fatura da empresa de transferes recebida depois da viagem: 950 EUR em vez de 900 EUR", "Margem de 1 150 EUR, 24% do preço"]] },
    { type: 'p', text: "No regime especial, o IVA calcula-se sobre esta margem. Por isso as agências comparam cada fatura de fornecedor com o custo previsto no orçamento. A página sobre o [preço de uma viagem à medida](/guides/orcamento-viagem-a-medida-com-margem) mostra como o preço de venda se constrói a partir dos custos." },
    { type: 'h2', text: "O que o contabilista recebe", id: 'accountant' },
    { type: 'list', items: ["As faturas e as notas de crédito do período, por ordem de número.", "Os recebimentos de cada cliente, com as respetivas datas.", "As faturas dos fornecedores, cada uma ligada à sua viagem.", "A margem de cada viagem, na qual assenta o regime das agências de viagens."] },
    { type: 'h2', text: "Software de faturação e software de gestão para agências", id: 'software' },
    { type: 'p', text: "Um software de faturação emite e numera as faturas e as notas de crédito, e envia-as como fatura eletrónica nos países que o exigem. Um software de gestão para agências contém o que vem antes da fatura: o pedido, o orçamento com os custos e a margem, as reservas com cada fornecedor e o plano de pagamentos." },
    { type: 'p', text: "Quando os dois estão ligados, a fatura retoma os montantes do orçamento aceite, e a margem de cada viagem já é conhecida quando o contabilista a pede." },
    { type: 'h2', text: "No Traviosoft", id: 'traviosoft' },
    { type: 'p', text: "O Traviosoft é um [software de gestão para agências de viagens à medida e DMC](/). As [faturas de adiantamento e de saldo e as notas de crédito](/get-paid) são feitas a partir do orçamento aceite, os recebimentos ficam registados na viagem e o painel mostra o que os clientes pagaram e o que se deve aos fornecedores. No fim do mês, um resumo em Excel ou um ficheiro zip com todas as faturas segue para o contabilista. Fora de Espanha, a fatura é emitida pelo software de faturação que já utiliza, ligado ao Traviosoft." },
    { type: 'h2', text: "Perguntas", id: 'faq' },
    { type: 'faq', items: [
      { q: "Porque pode a margem mudar depois da fatura de saldo?", a: ["Porque alguns fornecedores faturam depois da viagem. Quando uma fatura de fornecedor difere do custo do orçamento, a margem da viagem muda com ela."] },
      { q: "Qual é a diferença entre uma nota de crédito e um reembolso?", a: ["Uma nota de crédito é um documento que anula toda ou parte de uma fatura. Um reembolso é o dinheiro devolvido ao cliente. Um cancelamento produz muitas vezes os dois."] },
      { q: "As faturas podem ficar no meu software de faturação?", a: ["Sim. Fora de Espanha, a fatura é emitida pelo software de faturação que já utiliza, ligado ao Traviosoft, com os montantes do orçamento aceite."] }
    ] },
    { type: 'p', text: "Fontes: [Comissão Europeia, regimes especiais de IVA](https://taxation-customs.ec.europa.eu/special-schemes_pt) e [Diretiva 2006/112/CE do Conselho, artigos 219.º e 226.º](https://eur-lex.europa.eu/legal-content/PT/TXT/HTML/?uri=CELEX:02006L0112-20250414)." }
  ]
};

export const posts: Article[] = [dmc, allotment, packageQuote, invoicing];
