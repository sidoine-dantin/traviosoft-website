import type { JobPage, JobSlug } from '../types';

const sell: JobPage = {
  slug: 'sell',
  metaTitle: 'Vender: pedidos, catálogo e orçamentos com as suas margens | Traviosoft',
  metaDescription:
    'Todos os pedidos numa só lista, um catálogo com preços por época e vários fornecedores, orçamentos com a sua margem, o IVA e as comissões, enviados na língua do cliente com um seguimento ao fim de 7 dias.',
  name: 'Vender',
  menuLine: 'Do primeiro pedido ao orçamento aceite',
  step: '1 de 4',
  heroTitle: 'Pedidos, catálogo e orçamentos',
  heroLead:
    'Todos os pedidos numa só lista, um catálogo com as suas tarifas por época e orçamentos feitos a partir dele, com a sua margem e as comissões.',
  heroVisual: 'quote',
  chapters: [
    {
      id: 'requests',
      kicker: 'Pedidos',
      title: 'Uma só lista de pedidos',
      lead: 'Cada pedido numa só lista com o passo seguinte, quer chegue por email, telefone ou WhatsApp.',
      visual: 'requests',
      features: [
        { title: 'Estado de cada pedido', body: ['Cada pedido tem um estado: novo, orçamento enviado ou à espera de resposta.'] },
        { title: 'Um pedido torna-se um projeto', body: ['Quando um pedido avança, torna-se um projeto. O cliente, as datas, os viajantes e as suas notas ficam juntos durante toda a viagem.'] },
        { title: 'Lembretes', body: ['Ponha uma data num pedido. Ele volta ao seu painel no dia certo.'] }
      ]
    },
    {
      id: 'catalogue',
      kicker: 'Catálogo',
      title: 'Produtos com preços por data',
      lead: 'Hotéis, transfers, guias e atividades, cada um com os seus preços por data. O orçamento usa o preço das datas da viagem.',
      visual: 'catalogue',
      features: [
        { title: 'Períodos de preço por data', body: ['Época baixa, média e alta, eventos especiais, tarifas de novos contratos. Cada produto guarda os seus preços por período, e o orçamento usa o que corresponde às datas da viagem.'] },
        { title: 'Vários fornecedores por produto', body: ['Tenha duas empresas de transfers ou três guias para o mesmo serviço, cada um com as suas tarifas, e escolha um por viagem.'] },
        { title: 'Pacotes prontos', body: ['Guarde uma vez os seus circuitos clássicos. Adicione o pacote completo a um orçamento num clique e ajuste o que muda.'] }
      ]
    },
    {
      id: 'quotes',
      kicker: 'Orçamentos',
      title: 'Margem, IVA e comissões',
      lead: 'Defina uma vez as suas regras de preço, e cada linha do orçamento aplica-as.',
      visual: 'margin',
      features: [
        { title: 'Procedimentos de preço', body: ['Um procedimento de preço transforma as suas tarifas net em preços de venda: a sua margem, o IVA correto e a comissão quando uma agência ou um parceiro vende a viagem.'] },
        { title: 'Incluído e não incluído', body: ['O que o preço inclui e o que não inclui, indicado no orçamento.'] },
        { title: 'Versões', body: ['O cliente pede um hotel mais barato? Crie uma nova versão. A anterior fica guardada e pode reabri-la a qualquer momento.'] }
      ]
    },
    {
      id: 'send',
      kicker: 'Envio e seguimento',
      title: 'Envio e seguimento',
      lead: 'O orçamento segue por email na língua do cliente. Sete dias depois, volta para si para um seguimento.',
      visual: 'followup',
      features: [
        { title: 'Modelos de email', body: ['Os seus próprios textos, em cada língua. O orçamento vai em anexo e o email fica pronto a enviar.'] },
        { title: 'Na língua do cliente', body: ['Espanhol, catalão, inglês, francês e italiano. O orçamento, o email e os documentos seguem a língua do cliente.'] },
        { title: 'Seguimento ao fim de 7 dias', body: ['Uma semana depois do envio, o orçamento aparece na sua lista para dar seguimento.'] }
      ]
    },
    {
      id: 'proposal',
      kicker: 'Proposta',
      title: 'Uma página com a viagem',
      lead: 'O cliente recebe um link para uma página com a viagem, na língua dele e com o seu logótipo.',
      visual: 'proposal',
      features: [
        { title: 'Uma proposta de viagem para partilhar', body: ['Um só link com a viagem, os serviços e o preço. Abre em qualquer telemóvel.'] },
        { title: 'A sua marca', body: ['O seu logótipo e as suas cores na página e em cada documento.'] },
        { title: 'Os mesmos números em todo o lado', body: ['A proposta, o PDF do orçamento e depois a fatura vêm das mesmas linhas. Altere um preço uma vez e fica certo em todo o lado.'] }
      ]
    },
    {
      id: 'partners',
      kicker: 'Agências parceiras',
      title: 'Vender através de agências parceiras',
      lead: 'Faça o orçamento à agência parceira, mantenha o cliente dela na viagem e liquide a comissão a partir dos mesmos números.',
      visual: 'commission',
      features: [
        { title: 'O parceiro e o cliente dele', body: ['O orçamento vai para a agência parceira, os viajantes são clientes dela. Ambos ficam na viagem, do primeiro orçamento à última fatura.'] },
        { title: 'A comissão no preço', body: ['Indique a comissão do parceiro no orçamento. Está no preço de venda desde a primeira linha, e a sua margem continua visível para si.'] },
        { title: 'Extratos de comissões', body: ['O que deve a cada parceiro, por período, das viagens que lhe enviou. Liquida-o num clique.'] }
      ]
    }
  ],
  faq: [
    { q: 'Posso importar o meu catálogo atual?', a: ['Sim. Durante a implementação importamos os seus produtos, preços e fornecedores a partir das suas folhas de cálculo. A implementação e a importação são gratuitas com faturação anual.'] },
    { q: 'Vários fornecedores podem vender o mesmo hotel ou serviço?', a: ['Sim. Um produto pode ter vários fornecedores, cada um com as suas tarifas. Escolhe o fornecedor em cada viagem.'] },
    { q: 'O que vê o meu cliente?', a: ['Um orçamento limpo com nomes pensados para ele, preços por pessoa, o que está incluído e o que não está, na língua dele e com a sua marca. As suas tarifas net e as suas margens ficam reservadas à sua equipa.'] },
    { q: 'Tenho de usar o catálogo em todos os orçamentos?', a: ['Um orçamento pode adicionar linhas do catálogo e linhas livres.'] }
  ]
};

const book: JobPage = {
  slug: 'book',
  metaTitle: 'Reservar e acompanhar a viagem: reservas, fornecedores, itinerário do cliente | Traviosoft',
  metaDescription:
    'O primeiro pagamento transforma o orçamento numa reserva. Os estados de reserva, viagem e pagamento atualizam-se sozinhos, os emails dos fornecedores ficam guardados na viagem e o seu cliente recebe um itinerário dia a dia.',
  name: 'Reservar e acompanhar',
  menuLine: 'Do orçamento aceite à viagem concluída',
  step: '2 de 4',
  heroTitle: 'Reservas, fornecedores e itinerário do cliente',
  heroLead:
    'Quando o cliente paga o adiantamento, o orçamento torna-se uma reserva com todos os serviços a reservar. Cada viagem tem a sua lista de serviços a reservar, os emails dos fornecedores e uma página de itinerário para o viajante.',
  heroVisual: 'order',
  chapters: [
    {
      id: 'order',
      kicker: 'Reservas',
      title: 'Cada reserva pronta para a viagem',
      lead: 'Assim que o cliente paga o adiantamento, todos os serviços da viagem ficam numa só lista. Um clique envia os pedidos de reserva, os fornecedores confirmam e a viagem fica pronta.',
      visual: 'confirm',
      features: [
        { title: 'Todos os serviços numa lista', body: ['O orçamento aceite traz o hotel, o guia, o carro e as visitas, com as datas, os viajantes e os preços. Nada para escrever de novo.'] },
        { title: 'Pedidos de reserva num clique', body: ['Cada fornecedor recebe o seu pedido de reserva por e-mail, com as datas e os viajantes. As respostas ficam guardadas na viagem.'] },
        { title: 'Alterações depois da confirmação', body: ['O cliente acrescenta uma noite? Atualize a reserva e os serviços acompanham, para que a equipa trabalhe sempre sobre a última versão.'] }
      ]
    },
    {
      id: 'status',
      kicker: 'Estados',
      title: 'Estados de reserva, viagem e pagamento',
      lead: 'Os estados mudam à medida que os serviços são confirmados e os pagamentos chegam.',
      visual: 'statuses',
      features: [
        { title: 'Uma lista de reservas por viagem', body: ['Hotel, guia, carro, bilhetes: cada serviço mostra se está por reservar, à espera do fornecedor ou confirmado.'] },
        { title: 'Indicadores que se atualizam sozinhos', body: ['Quando o último serviço é confirmado, a viagem aparece como reservada. Quando o saldo é pago, o indicador de pagamento fica verde.'] },
        { title: 'Arquivo', body: ['As viagens concluídas vão para o arquivo e continuam pesquisáveis. Um registo apagado pode ser recuperado da reciclagem.'] }
      ]
    },
    {
      id: 'suppliers',
      kicker: 'Fornecedores',
      title: 'Fichas e emails dos fornecedores',
      lead: 'Contactos, documentos e emails, guardados no fornecedor e na viagem.',
      visual: 'suppliers',
      features: [
        { title: 'Emails dos fornecedores guardados automaticamente', body: ['As confirmações e respostas dos fornecedores chegam à viagem a que pertencem.'] },
        { title: 'Vouchers de serviço', body: ['Envie a cada guia, motorista ou hotel um voucher claro com datas, nomes e detalhes, diretamente da viagem.'] },
        { title: 'Pedidos de disponibilidade e notas de encomenda a fornecedores', body: ['Peça disponibilidade a um hotel e depois envie a nota de encomenda a partir da viagem. As respostas e as alterações voltam à reserva.'], premium: true }
      ]
    },
    {
      id: 'itinerary',
      kicker: 'Itinerário do cliente',
      title: 'Um itinerário dia a dia',
      lead: 'Uma página com cada dia, os hotéis, os horários e os contactos, partilhada com o viajante por link.',
      visual: 'itinerary',
      features: [
        { title: 'Uma página de itinerário para partilhar', body: ['Um só link, dia a dia. Abre em qualquer telemóvel.'] },
        { title: 'Na língua do viajante e com a sua marca', body: ['O itinerário segue a língua do cliente e leva o seu logótipo.'] },
        { title: 'Sempre atualizado', body: ['Altere a hora de uma recolha na viagem e a página mostra a nova hora. O link continua o mesmo.'] }
      ]
    },
    {
      id: 'groups',
      kicker: 'Grupos',
      title: 'Grupos e rooming lists',
      lead: 'Listas de viajantes, serviços para parte do grupo e uma rooming list por hotel.',
      visual: 'rooming',
      features: [
        { title: 'A lista de viajantes', body: ['Cole ou importe a lista de uma folha de cálculo, ou envie ao organizador o link de um formulário. Até 200 viajantes por viagem.'] },
        { title: 'Serviços para parte do grupo', body: ['O dia de golfe para doze, o jantar de gala para todos: cada serviço indica quem o faz, e as contagens para o hotel acompanham.'] },
        { title: 'Uma rooming list por hotel', body: ['Quartos montados a partir de quem fica com quem, numerados por hotel, prontos a enviar em PDF ou em folha de cálculo.'] }
      ]
    },
    {
      id: 'calendar',
      kicker: 'Calendário',
      title: 'As viagens num calendário',
      lead: 'Cada viagem é uma barra no calendário. No telemóvel, os serviços do dia aparecem numa lista.',
      visual: 'calendar',
      features: [
        { title: 'Barras das viagens', body: ['Veja cada viagem da chegada à partida, e como estão ocupadas as próximas semanas.'] },
        { title: 'O dia no telemóvel', body: ['As chegadas, os transfers e as visitas de hoje numa lista que pode consultar entre duas reuniões.'] },
        { title: 'Dados dos viajantes', body: ['Os viajantes preenchem o passaporte, a dieta e as necessidades de acessibilidade através do link de um formulário, e as respostas chegam à viagem.'] }
      ]
    }
  ],
  faq: [
    { q: 'Os meus guias e motoristas podem ver a viagem?', a: ['Recebem por email um voucher de serviço com o que precisam: datas, horas, nomes e ponto de encontro.'] },
    { q: 'O que acontece se o cliente mudar uma data?', a: ['Atualize a viagem. Os serviços, a página de itinerário e os vouchers acompanham a alteração, e os serviços a reservar de novo voltam a aparecer como por reservar.'] },
    { q: 'Como chegam os emails dos fornecedores à viagem?', a: ['Os emails dos fornecedores ficam guardados automaticamente na viagem.'] }
  ]
};

const getPaid: JobPage = {
  slug: 'get-paid',
  metaTitle: 'Receber e manter as contas: pagamentos, faturas, painel | Traviosoft',
  metaDescription:
    'Adiantamento e saldo previstos no orçamento, links de pagamento no email, faturas e notas de crédito feitas a partir dos mesmos números, e um painel com vendas, viagens, entradas e saídas.',
  name: 'Receber',
  menuLine: 'Pagamentos, faturas e os seus números',
  step: '3 de 4',
  heroTitle: 'Pagamentos, faturas e números',
  heroLead:
    'Os pagamentos e as faturas vêm do orçamento aceite, por isso os valores coincidem.',
  heroVisual: 'payments',
  chapters: [
    {
      id: 'schedule',
      kicker: 'Plano de pagamentos',
      title: 'Adiantamento e saldo com datas',
      lead: 'O adiantamento e o saldo são definidos no orçamento, com as suas datas de vencimento.',
      visual: 'schedule',
      features: [
        { title: 'Adiantamento e saldo', body: ['Uma percentagem ou um valor, cada um com a sua data, em cada viagem.'] },
        { title: 'O que vence esta semana', body: ['Todos os pagamentos a vencer ou vencidos, em todas as suas viagens, numa só lista.'] },
        { title: 'Lembretes de pagamento', body: ['Os lembretes seguem para o cliente antes e depois de uma data de vencimento, na língua dele.'] }
      ]
    },
    {
      id: 'links',
      kicker: 'Links de pagamento',
      title: 'Links de pagamento no email',
      lead: 'O seu link de pagamento segue com o email, e o cliente paga a partir dele.',
      visual: 'paylink',
      features: [
        { title: 'O seu próprio link de pagamento', body: ['Ligue o link de pagamento que já usa. Segue com o email do orçamento.'] },
        { title: 'Registar um pagamento num clique', body: ['Uma transferência ou um pagamento com cartão fica registado na viagem, e o indicador de pagamento atualiza-se sozinho.'] }
      ]
    },
    {
      id: 'invoices',
      kicker: 'Faturas',
      title: 'Faturas a partir da viagem',
      lead: 'As faturas de adiantamento e finais são feitas a partir da viagem, com os valores do orçamento.',
      visual: 'invoices',
      features: [
        { title: 'Faturas de adiantamento e finais', body: ['Feitas a partir da viagem num clique, com os dados do cliente e os valores certos.'] },
        { title: 'Notas de crédito', body: ['Um cancelamento ou uma alteração dá origem a uma nota de crédito ligada à fatura original.'] },
        { title: 'Pronto para o seu contabilista', body: ['Um resumo em Excel ou um zip com todos os PDF no fim do mês, em dois cliques.'] }
      ]
    },
    {
      id: 'dashboard',
      kicker: 'Painel',
      title: 'Vendas, viagens e tesouraria',
      lead: 'Vendas, viagens, entradas e saídas, para o período que escolher.',
      visual: 'dashboard',
      features: [
        { title: 'Vendas e viagens', body: ['O que vendeu e quantas viagens, este mês, esta época ou este ano.'] },
        { title: 'Entradas e saídas', body: ['O que os clientes lhe pagaram e o que deve aos fornecedores, lado a lado.'] },
        { title: 'Hoje', body: ['Lembretes, pagamentos a vencer e reservas a confirmar, reunidos para o dia.'] }
      ]
    }
  ],
  faq: [
    { q: 'Que meios de pagamento funcionam?', a: ['Adiciona o link de pagamento do serviço que já usa. O cliente paga aí, e regista o pagamento na viagem.'] },
    { q: 'O meu contabilista pode receber os ficheiros?', a: ['Sim. Exporte um resumo em Excel ou um zip com todos os PDF das faturas para qualquer período.'] },
    { q: 'Segue as regras do meu país?', a: ['A numeração de faturas por empresa e as notas de crédito funcionam em todo o lado. O regime espanhol de IVA das agências de viagens está integrado. Noutros países, as faturas passam pelo seu software de faturação. Para o seu país, pergunte-nos na demonstração.'] }
  ]
};

const setup: JobPage = {
  slug: 'setup',
  metaTitle: 'A sua configuração: marcas, línguas, equipa e dados | Traviosoft',
  metaDescription:
    'Várias marcas numa só conta, documentos na língua do cliente, várias moedas, definições por país, a sua equipa, os seus dados alojados na UE e ligações às suas outras ferramentas.',
  name: 'A sua configuração',
  menuLine: 'Marcas, línguas, moedas, equipa e dados',
  step: '4 de 4',
  heroTitle: 'Marcas, línguas, moedas e equipa',
  heroLead:
    'Definições para marcas, línguas, moedas, regras fiscais do país e utilizadores. Aplicam-se a todas as viagens.',
  heroVisual: 'settings',
  chapters: [
    {
      id: 'brands',
      kicker: 'Marcas',
      title: 'Várias marcas numa só conta',
      lead: 'Gira uma segunda marca ou uma segunda empresa a partir do mesmo sítio, cada uma com o seu aspeto e a sua numeração.',
      visual: 'brands',
      features: [
        { title: 'Logótipo e cores por marca', body: ['Cada orçamento, proposta, itinerário e fatura leva a marca da viagem.'], premium: true },
        { title: 'Numeração por empresa', body: ['Cada empresa mantém a sua própria numeração de faturas.'], premium: true }
      ]
    },
    {
      id: 'languages',
      kicker: 'Línguas',
      title: 'Documentos na língua do cliente',
      lead: 'Orçamentos, emails, propostas e itinerários em espanhol, catalão, inglês, francês e italiano.',
      visual: 'languages',
      features: [
        { title: 'Documentos por língua', body: ['Cada cliente tem uma língua, e cada documento segue-a.'] },
        { title: 'Traduções automáticas', body: ['As descrições dos produtos do catálogo são traduzidas automaticamente, e pode corrigir qualquer tradução.'] },
        { title: 'Modelos de email por língua', body: ['Os seus próprios textos em cada língua, usados automaticamente.'] }
      ]
    },
    {
      id: 'currencies',
      kicker: 'Moedas',
      title: 'Várias moedas',
      lead: 'Lodges em dólares, um cliente em libras, a sua contabilidade em euros. Cada orçamento tem a sua moeda, e os totais somam-se na sua.',
      visual: 'currencies',
      features: [
        { title: 'Uma moeda por cliente e por orçamento', body: ['Faça o orçamento a um cliente britânico em libras e a um parceiro americano em dólares, a partir do mesmo catálogo.'], premium: true },
        { title: 'Os preços dos fornecedores na moeda deles', body: ['Guarde cada tarifa na moeda em que o fornecedor fatura. O orçamento converte-a ao câmbio do dia, com uma margem de segurança que escolhe.'], premium: true },
        { title: 'A sua contabilidade numa só moeda', body: ['Faturas, pagamentos, margens e relatórios somam-se na sua moeda contabilística, com as diferenças de câmbio calculadas automaticamente.'], premium: true }
      ]
    },
    {
      id: 'country',
      kicker: 'Definições do país',
      title: 'Regras fiscais do país',
      lead: 'Regimes fiscais e faturação eletrónica são definições. Espanha está integrada.',
      visual: 'country',
      features: [
        { title: 'Regimes de IVA das agências de viagens', body: ['Para Espanha, o regime de IVA das agências de viagens (REAV) e a sua menção nas suas faturas estão integrados.'] },
        { title: 'Faturação eletrónica', body: ['Consoante o país, as faturas são enviadas a partir do Traviosoft ou do seu software de faturação.'] }
      ]
    },
    {
      id: 'team',
      kicker: 'Equipa',
      title: 'Utilizadores e equipas',
      lead: 'Todos trabalham sobre os mesmos clientes, orçamentos e reservas.',
      visual: 'team',
      features: [
        { title: 'Utilizadores incluídos no plano', body: ['3 utilizadores nos dois planos, e mais sempre que a sua equipa crescer.'] },
        { title: 'Equipas, carteiras e funções', body: ['Atribua a cada equipa e a cada pessoa os seus clientes e viagens, e decida quem vê o quê.'], premium: true }
      ]
    },
    {
      id: 'data',
      kicker: 'Os seus dados',
      title: 'Dados e alojamento',
      lead: 'Cada agência tem o seu próprio espaço, alojado na União Europeia, separado de todas as outras agências.',
      visual: 'safe',
      features: [
        { title: 'Um espaço separado para a sua agência', body: ['Os seus dados ficam no seu próprio espaço, à parte das outras agências.'] },
        { title: 'Alojado na UE', body: ['Os seus dados ficam na União Europeia, ao abrigo do RGPD.'] },
        { title: 'Sair com os seus dados', body: ['Se deixar o Traviosoft, recebe os seus dados em formatos normalizados.'] }
      ]
    },
    {
      id: 'connections',
      kicker: 'Ligações',
      title: 'Ligações',
      lead: 'O seu outro software pode ler e escrever os seus dados do Traviosoft, com os mesmos direitos que na aplicação.',
      visual: 'connections',
      features: [
        { title: 'O seu site e a sua contabilidade', body: ['O seu site, a sua ferramenta de contabilidade ou um programador com quem trabalha podem ler e escrever os seus dados do Traviosoft.'], premium: true },
        { title: 'As suas ferramentas de IA', body: ['Ligue o assistente de IA que já usa, como o Claude ou o ChatGPT, aos seus dados do Traviosoft, com os mesmos direitos da pessoa que o liga.'], premium: true },
        { title: 'O assistente dentro do Traviosoft', body: ['Pergunte o que precisa de si hoje, peça um orçamento preparado a partir do seu catálogo ou transforme a tabela de preços de um fornecedor em preços do catálogo. Cada alteração aguarda a sua confirmação.'], premium: true }
      ]
    }
  ],
  faq: [
    { q: 'Onde estão os meus dados?', a: ['Num espaço separado para a sua agência, alojado na União Europeia.'] },
    { q: 'Posso sair com os meus dados?', a: ['Sim. Recebe os seus dados em formatos normalizados.'] },
    { q: 'Quem pode ver o quê?', a: ['No Classic, cada utilizador vê as viagens da agência. No Premium, cada equipa e cada pessoa pode ter os seus próprios clientes, viagens e direitos.'] }
  ]
};

export const jobs: Record<JobSlug, JobPage> = { sell, book, 'get-paid': getPaid, setup };
