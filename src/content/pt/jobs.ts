import type { JobPage, JobSlug } from '../types';

const sell: JobPage = {
  slug: 'sell',
  metaTitle: 'Vender: pedidos, catálogo e orçamentos com as suas margens | Traviosoft',
  metaDescription:
    'Todos os pedidos de clientes numa lista, um catálogo com preços por época e vários fornecedores por produto, orçamentos com a sua margem e o IVA, enviados na língua do cliente e com seguimento ao fim de 7 dias.',
  name: 'Vender',
  menuLine: 'Do primeiro pedido ao orçamento aceite',
  step: '1 de 4',
  heroTitle: 'Pedidos, catálogo e orçamentos',
  heroLead:
    'O Traviosoft reúne todos os pedidos de clientes numa lista, os seus produtos e preços num catálogo, e cria orçamentos que mostram a sua margem em cada linha.',
  heroVisual: 'quote',
  chapters: [
    {
      id: 'requests',
      kicker: 'Pedidos',
      title: 'Os pedidos de clientes numa lista',
      lead: 'Cada pedido chega à mesma lista com o seu próximo passo, quer tenha vindo por email, por telefone ou por WhatsApp.',
      visual: 'requests',
      features: [
        { title: 'Novo ou respondido', body: ['Vê de relance que pedidos ainda esperam um primeiro orçamento. O estado muda sozinho quando o orçamento é enviado.'] },
        { title: 'Do pedido ao orçamento', body: ['Crie o orçamento a partir do pedido. O cliente, as datas da viagem e o número de viajantes já estão preenchidos.'] },
        { title: 'Lembretes', body: ['Ponha uma data num pedido, e nesse dia ele volta a aparecer na sua lista de coisas a fazer.'] }
      ]
    },
    {
      id: 'catalogue',
      kicker: 'Catálogo',
      title: 'Um catálogo de produtos e preços',
      lead: 'Os seus hotéis, transfers, guias e atividades, cada um com o que lhe custa e o preço a que o vende, por data.',
      visual: 'catalogue',
      features: [
        { title: 'Períodos de preço', body: ['Época baixa, média e alta, eventos especiais, tarifas dos contratos do próximo ano. Cada produto guarda os seus preços por período, e o orçamento usa o que corresponde às datas da viagem.'] },
        { title: 'Vários fornecedores por produto', body: ['Tenha duas empresas de transfers ou três guias para o mesmo serviço, cada um com as suas tarifas, e escolha um para cada viagem.'] },
        { title: 'Os seus circuitos clássicos, guardados', body: ['Guarde uma vez um circuito clássico. Adicione-o a um orçamento num clique, aos preços de hoje, e depois ajuste o que mudar.'] }
      ]
    },
    {
      id: 'quotes',
      kicker: 'Orçamentos',
      title: 'Orçamentos com a sua margem e o IVA',
      lead: 'Crie o orçamento linha a linha a partir do seu catálogo. Cada linha mostra o que lhe custa, o que o cliente paga e a sua margem.',
      visual: 'margin',
      features: [
        { title: 'As suas regras de preço', body: ['Defina uma vez como a sua margem e o IVA se somam ao preço de um fornecedor. Cada linha do orçamento é depois calculada da mesma forma.'] },
        { title: 'O que o cliente vê', body: ['O cliente vê os serviços e os preços. Os seus custos e as suas margens ficam dentro da sua agência.'] },
        { title: 'Versões', body: ['O cliente pede um hotel mais barato? Altere o orçamento e envie-o de novo. A versão enviada antes fica guardada e pode ser restaurada.'] }
      ]
    },
    {
      id: 'send',
      kicker: 'Envio e seguimento',
      title: 'Envio do orçamento e seguimento',
      lead: 'O orçamento segue por email em PDF, na língua do cliente. Uma semana depois, o Traviosoft lembra-o de fazer o seguimento.',
      visual: 'followup',
      features: [
        { title: 'Modelos de email', body: ['Escreva os seus textos de email uma vez, em cada língua. Quando envia um orçamento, o email está pronto com o PDF em anexo.'] },
        { title: 'Na língua do cliente', body: ['Espanhol, catalão, inglês, francês ou italiano. O orçamento e o seu email são escritos na língua do cliente.'] },
        { title: 'Seguimento ao fim de 7 dias', body: ['Sete dias depois do envio, o orçamento aparece na sua lista de orçamentos a acompanhar. Pode escolher outra data.'] }
      ]
    },
    {
      id: 'proposal',
      kicker: 'Proposta',
      title: 'O orçamento como página web',
      lead: 'O cliente também pode abrir o orçamento como uma página web, com fotografias da viagem, na sua língua.',
      visual: 'proposal',
      features: [
        { title: 'Partilhada por um link', body: ['O link segue no email do orçamento. A página tem o seu logótipo e as suas cores e abre em qualquer telemóvel.'] },
        { title: 'Incluído e não incluído', body: ['Para cada serviço, a página indica o que o preço cobre e o que é extra.'] },
        { title: 'Os mesmos preços do orçamento', body: ['A página, o PDF e mais tarde as faturas usam as mesmas linhas, por isso os preços coincidem.'] }
      ]
    },
    {
      id: 'partners',
      kicker: 'Agências parceiras',
      title: 'As comissões e a sua margem real',
      lead: 'Quando outra agência vende a sua viagem ao próprio cliente, o orçamento inclui a comissão dela e mostra a margem que lhe resta.',
      visual: 'commission',
      features: [
        { title: 'A agência e o seu cliente', body: ['O orçamento é dirigido à agência e identifica os viajantes. Ambos ficam na viagem até à última fatura.'] },
        { title: 'A comissão no preço', body: ['Introduza a comissão da agência no orçamento. O preço de venda inclui-a, e vê a sua margem depois da comissão.'] },
        { title: 'Extratos de comissões', body: ['Veja o que deve a cada agência pelas viagens que lhe trouxe, período a período, e marque como pago num clique.'] }
      ]
    }
  ],
  faq: [
    { q: 'Posso importar o meu catálogo atual?', a: ['Sim. Durante a implementação importamos os seus produtos, preços e fornecedores a partir das suas folhas de cálculo. A implementação e a importação são gratuitas com faturação anual.'] },
    { q: 'Vários fornecedores podem vender o mesmo hotel ou serviço?', a: ['Sim. Um produto pode ter vários fornecedores, cada um com as suas tarifas. Escolhe o fornecedor para cada viagem.'] },
    { q: 'O que vê o meu cliente?', a: ['Um orçamento com o nome que escolher para cada serviço e preços por pessoa, na língua dele e com a sua marca. A página web do orçamento indica também o que está incluído e não incluído. Os seus preços de compra e as suas margens ficam reservados à sua equipa.'] },
    { q: 'Tenho de usar o catálogo em todos os orçamentos?', a: ['Um orçamento pode juntar produtos do catálogo e linhas que escreve só para essa viagem.'] }
  ]
};

const book: JobPage = {
  slug: 'book',
  metaTitle: 'Reservar e acompanhar a viagem: reservas, fornecedores, itinerário do cliente | Traviosoft',
  metaDescription:
    'Quando um orçamento é aceite, todos os serviços da viagem ficam numa lista, prontos a reservar. Os pedidos de reserva seguem para os fornecedores por email, cada serviço mostra o seu estado e o seu cliente recebe um itinerário dia a dia.',
  name: 'Reservar e acompanhar',
  menuLine: 'Do orçamento aceite à viagem concluída',
  step: '2 de 4',
  heroTitle: 'Reservas, fornecedores e itinerário do cliente',
  heroLead:
    'Quando o cliente aceita o orçamento, todos os serviços da viagem ficam numa lista, prontos a reservar. Os pedidos de reserva seguem para os seus fornecedores por email, vê o que está confirmado e o viajante recebe um itinerário dia a dia.',
  heroVisual: 'order',
  chapters: [
    {
      id: 'order',
      kicker: 'Reservas',
      title: 'Cada reserva pronta para a viagem',
      lead: 'O hotel, o guia, os transfers e as visitas do orçamento aceite ficam numa lista, prontos a reservar. Envie os pedidos de reserva, e os fornecedores confirmam.',
      visual: 'confirm',
      features: [
        { title: 'Todos os serviços numa lista', body: ['Os serviços vêm do orçamento aceite, com as datas, os viajantes e os preços já preenchidos.'] },
        { title: 'Pedidos de reserva por email', body: ['Cada fornecedor recebe o seu pedido de reserva com os serviços, as datas e o número de viajantes. A resposta fica guardada com a viagem.'] },
        { title: 'Alterações depois da confirmação', body: ['O cliente acrescenta uma noite? Altere o orçamento e as reservas acompanham, para que a equipa trabalhe com a versão atual.'] }
      ]
    },
    {
      id: 'status',
      kicker: 'Estados',
      title: 'Estados de reserva em cada viagem',
      lead: 'Em cada viagem, vê que serviços estão confirmados e quais ainda esperam pelo fornecedor.',
      visual: 'statuses',
      features: [
        { title: 'Um estado por serviço', body: ['Hotel, guia, carro, bilhetes: cada um está por reservar, à espera do fornecedor ou confirmado.'] },
        { title: 'Um estado para toda a viagem', body: ['Cada viagem mostra quantos dos seus serviços estão confirmados, por exemplo 3 de 7, e aparece como tudo reservado depois do último.'] },
        { title: 'As reservas que precisam de si', body: ['Uma lista reúne as reservas que ainda esperam a resposta de um fornecedor, as opções que terminam em breve e as que é preciso reconfirmar antes da viagem.'] }
      ]
    },
    {
      id: 'suppliers',
      kicker: 'Fornecedores',
      title: 'Os fornecedores e os seus emails',
      lead: 'Cada fornecedor tem os seus contactos, documentos e tarifas num só lugar. Os emails sobre uma reserva ficam guardados com a viagem a que pertencem.',
      visual: 'suppliers',
      features: [
        { title: 'Os emails dos fornecedores na viagem certa', body: ['Uma confirmação ou uma resposta de um fornecedor fica associada à viagem a que diz respeito, onde toda a equipa a pode ler.'] },
        { title: 'Vouchers de serviço', body: ['Envie a cada guia, motorista ou hotel um voucher com as datas, os horários, os nomes e o ponto de encontro, diretamente da viagem.'] },
        { title: 'Pedidos de disponibilidade e notas de encomenda a fornecedores', body: ['Pergunte a um hotel se as datas estão disponíveis e depois envie a nota de encomenda com o preço acordado. O fornecedor responde a partir de um link, e o estado da reserva atualiza-se.'], premium: true }
      ]
    },
    {
      id: 'itinerary',
      kicker: 'Itinerário do cliente',
      title: 'Um itinerário dia a dia',
      lead: 'O viajante recebe um link para uma página web com cada dia da viagem: os hotéis, os horários e os contactos.',
      visual: 'itinerary',
      features: [
        { title: 'Partilhado por um link', body: ['Um só link, dia a dia. Abre em qualquer telemóvel.'] },
        { title: 'Na língua do viajante, com a sua marca', body: ['A página é escrita na língua do cliente e tem o seu logótipo.'] },
        { title: 'Sempre atualizado', body: ['Altere a hora de uma recolha e a página mostra a nova hora. O link continua o mesmo.'] }
      ]
    },
    {
      id: 'groups',
      kicker: 'Grupos',
      title: 'Grupos e rooming lists',
      lead: 'Para viagens de grupo: a lista de viajantes, os serviços só para uma parte do grupo e uma rooming list para cada hotel.',
      visual: 'rooming',
      features: [
        { title: 'A lista de viajantes', body: ['Cole ou importe a lista de uma folha de cálculo, ou envie o link de um formulário para que os viajantes indiquem eles próprios o passaporte, a dieta e as necessidades de acessibilidade. Até 200 viajantes por viagem.'], premium: true },
        { title: 'Serviços para parte do grupo', body: ['O dia de golfe para doze, o jantar de gala para todos. Cada serviço indica quem participa, para que cada fornecedor receba os números certos.'], premium: true },
        { title: 'Uma rooming list por hotel', body: ['Os quartos são montados a partir de quem fica com quem e numerados para cada hotel. Envie a lista em PDF ou em folha de cálculo.'], premium: true }
      ]
    },
    {
      id: 'calendar',
      kicker: 'Calendário',
      title: 'As viagens num calendário',
      lead: 'O calendário mostra cada viagem como uma barra, da chegada à partida. No telemóvel, lista os serviços do dia.',
      visual: 'calendar',
      features: [
        { title: 'Barras das viagens', body: ['Veja que viagens se sobrepõem e como estão as próximas semanas.'] },
        { title: 'O dia no telemóvel', body: ['As chegadas, os transfers e as visitas de hoje numa só lista, fácil de consultar entre duas reuniões.'] }
      ]
    }
  ],
  faq: [
    { q: 'Os meus guias e motoristas podem ver a viagem?', a: ['Recebem por email um voucher de serviço com o que precisam: datas, horas, nomes e ponto de encontro.'] },
    { q: 'O que acontece se o cliente mudar uma data?', a: ['Altere a data no orçamento. As reservas, a página do itinerário e os vouchers de serviço acompanham a alteração, e os serviços a reservar de novo voltam a aparecer como por reservar.'] },
    { q: 'As respostas dos fornecedores ficam na viagem?', a: ['Sim. Os pedidos de reserva saem do Traviosoft pela sua própria caixa de correio, e a resposta de cada fornecedor fica guardada com a respetiva viagem, onde toda a equipa a vê.'] }
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
    'Os pagamentos e as faturas vêm do orçamento aceite, por isso os valores coincidem. Os mesmos números mostram as suas vendas, o dinheiro recebido e o dinheiro devido a fornecedores.',
  heroVisual: 'payments',
  chapters: [
    {
      id: 'schedule',
      kicker: 'Plano de pagamentos',
      title: 'Adiantamento e saldo com datas',
      lead: 'Cada orçamento tem os seus pagamentos planeados: normalmente um adiantamento e um saldo, cada um com a sua data de vencimento.',
      visual: 'schedule',
      features: [
        { title: 'Adiantamento e saldo', body: ['Uma percentagem ou um valor para cada pagamento, com a sua data de vencimento. O seu plano de pagamentos habitual aplica-se num clique.'] },
        { title: 'O que vence esta semana', body: ['Uma só lista mostra todos os pagamentos de clientes a vencer ou já vencidos, em todas as suas viagens.'] },
        { title: 'Lembretes de pagamento', body: ['O Traviosoft pode escrever ao cliente antes e depois de uma data de vencimento, na língua dele e com as suas palavras.'], premium: true }
      ]
    },
    {
      id: 'links',
      kicker: 'Links de pagamento',
      title: 'Links de pagamento no email',
      lead: 'O cliente paga online a partir de um link no seu email, com cartão por exemplo.',
      visual: 'paylink',
      features: [
        { title: 'O seu próprio link de pagamento', body: ['Use o link do prestador de pagamentos que já tem. Adicione-o a um pagamento e ele segue no email para o cliente.'] },
        { title: 'Os pagamentos registados na viagem', body: ['Quando chega uma transferência ou um pagamento com cartão, registe-o num clique. A viagem aparece então como paga em parte ou paga.'] }
      ]
    },
    {
      id: 'invoices',
      kicker: 'Faturas',
      title: 'Faturas a partir da viagem',
      lead: 'As faturas de adiantamento e finais são feitas a partir do orçamento aceite, com os seus valores e os dados do cliente.',
      visual: 'invoices',
      features: [
        { title: 'Faturas de adiantamento e finais', body: ['Um clique cria a fatura de um adiantamento recebido e, mais tarde, a fatura final, que deduz o adiantamento.'] },
        { title: 'Notas de crédito', body: ['Quando uma viagem é cancelada ou alterada, uma nota de crédito anula a fatura original e fica ligada a ela.'] },
        { title: 'Pronto para o seu contabilista', body: ['No fim do mês, exporte um resumo em Excel ou um ficheiro zip com todas as faturas em PDF.'] }
      ]
    },
    {
      id: 'dashboard',
      kicker: 'Painel',
      title: 'Vendas, viagens e tesouraria',
      lead: 'As suas vendas, as suas viagens, o dinheiro recebido e o dinheiro a pagar numa só página, para o período que escolher.',
      visual: 'dashboard',
      features: [
        { title: 'Vendas e viagens', body: ['O que vendeu e quantas viagens, este mês, esta época ou este ano.'] },
        { title: 'Entradas e saídas', body: ['O que os clientes lhe pagaram e o que deve a fornecedores, lado a lado.'] },
        { title: 'Hoje', body: ['O trabalho do dia num só lugar: lembretes, pagamentos a vencer e reservas por confirmar.'] }
      ]
    }
  ],
  faq: [
    { q: 'Que meios de pagamento funcionam?', a: ['Qualquer prestador que lhe dê um link de pagamento. Adiciona o link ao pagamento, o cliente paga lá e regista o pagamento na viagem.'] },
    { q: 'O meu contabilista pode receber os ficheiros?', a: ['Sim. Exporte um resumo em Excel ou um ficheiro zip com todas as faturas em PDF de qualquer período.'] },
    { q: 'Segue as regras do meu país?', a: ['As faturas são numeradas em sequência para cada uma das suas empresas, e as notas de crédito estão disponíveis em todos os países. Para Espanha, o regime de IVA das agências de viagens está integrado. Noutros países, a fatura é emitida pelo seu próprio software de faturação, ligado ao Traviosoft. Para o seu país, pergunte-nos na demonstração.'] }
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
    'As suas marcas, línguas, moedas, regras fiscais e utilizadores configuram-se uma vez. Cada orçamento, reserva e fatura segue-os depois.',
  heroVisual: 'settings',
  chapters: [
    {
      id: 'brands',
      kicker: 'Marcas',
      title: 'Várias marcas numa só conta',
      lead: 'Uma agência que vende com dois nomes, ou que gere duas empresas, trabalha a partir de uma só conta. Cada marca mantém a sua imagem.',
      visual: 'brands',
      features: [
        { title: 'Logótipo e cores por marca', body: ['Cada viagem pertence a uma marca. O seu orçamento, a proposta, o itinerário e a fatura têm o logótipo e as cores dessa marca.'], premium: true },
        { title: 'Numeração por empresa', body: ['Quando fatura a partir de duas empresas, cada uma mantém os seus próprios números de fatura.'], premium: true }
      ]
    },
    {
      id: 'languages',
      kicker: 'Línguas',
      title: 'Documentos na língua do cliente',
      lead: 'Orçamentos, emails, propostas e itinerários são escritos em espanhol, catalão, inglês, francês ou italiano, consoante o cliente.',
      visual: 'languages',
      features: [
        { title: 'Uma língua por cliente', body: ['Indique uma vez a língua do cliente, e todos os documentos para esse cliente a seguem.'] },
        { title: 'Traduções automáticas', body: ['As descrições dos produtos do catálogo são traduzidas automaticamente, e pode corrigir qualquer tradução.'] },
        { title: 'Modelos de email por língua', body: ['A sua própria redação em cada língua, escolhida automaticamente para cada cliente.'] }
      ]
    },
    {
      id: 'currencies',
      kicker: 'Moedas',
      title: 'Várias moedas',
      lead: 'Lodges com preços em dólares, um cliente que paga em libras, as suas contas em euros. Cada orçamento tem a sua moeda, e os seus números somam-se na sua.',
      visual: 'currencies',
      features: [
        { title: 'Uma moeda por cliente e por orçamento', body: ['Faça o orçamento a um cliente britânico em libras e a um parceiro americano em dólares, a partir do mesmo catálogo.'], premium: true },
        { title: 'Os preços dos fornecedores na moeda deles', body: ['Guarde cada tarifa na moeda em que o fornecedor fatura. O orçamento converte-a ao câmbio do dia, mais uma reserva que escolhe para as variações cambiais.'], premium: true },
        { title: 'As suas contas numa só moeda', body: ['Faturas, pagamentos, margens e relatórios somam-se na sua moeda contabilística. Os ganhos e as perdas cambiais são calculados por si.'], premium: true }
      ]
    },
    {
      id: 'country',
      kicker: 'Definições do país',
      title: 'Regras fiscais do país',
      lead: 'O IVA das agências de viagens e a faturação eletrónica mudam de país para país, por isso são configurados para o seu país.',
      visual: 'country',
      features: [
        { title: 'IVA sobre a margem', body: ['Para Espanha, o regime das agências de viagens com IVA sobre a margem (REAV) e a sua menção nas suas faturas estão integrados.'] },
        { title: 'Faturação eletrónica', body: ['Onde as faturas têm de ser enviadas por via eletrónica, saem do Traviosoft ou do seu software de faturação, consoante o país.'] }
      ]
    },
    {
      id: 'team',
      kicker: 'Equipa',
      title: 'Clientes e vendas de cada vendedor',
      lead: 'Cada vendedor trabalha com os seus próprios clientes e viagens, e vê as vendas de toda a agência.',
      visual: 'team',
      features: [
        { title: 'Utilizadores incluídos no plano', body: ['Os dois planos, Classic e Premium, incluem 3 utilizadores. Adicione mais quando a sua equipa crescer.'] },
        { title: 'Equipas e funções', body: ['Dê a cada pessoa os seus próprios clientes e viagens, agrupe as pessoas em equipas e escolha o que cada uma pode ver e fazer.'], premium: true }
      ]
    },
    {
      id: 'data',
      kicker: 'Os seus dados',
      title: 'Dados e alojamento',
      lead: 'Os dados da sua agência ficam guardados no seu próprio espaço, em servidores na União Europeia.',
      visual: 'safe',
      features: [
        { title: 'Um espaço separado para a sua agência', body: ['Os seus clientes, preços e viagens são guardados à parte dos de outras agências.'] },
        { title: 'Alojado na UE', body: ['Os seus dados ficam na União Europeia, ao abrigo do RGPD.'] },
        { title: 'Sair com os seus dados', body: ['Se deixar o Traviosoft, recebe os seus dados em formatos normalizados.'] }
      ]
    },
    {
      id: 'connections',
      kicker: 'Ligações',
      title: 'Ligações às suas outras ferramentas',
      lead: 'O seu site, o seu software de contabilidade e o seu assistente de IA podem trabalhar com os seus dados do Traviosoft. Cada ligação tem os direitos que lhe der.',
      visual: 'connections',
      features: [
        { title: 'O seu site e a sua contabilidade', body: ['O formulário de contacto do seu site pode chegar diretamente aos seus pedidos, e o seu software de contabilidade pode recolher as faturas e os pagamentos.'], premium: true },
        { title: 'As suas ferramentas de IA', body: ['Ligue o assistente de IA que já usa, como o Claude ou o ChatGPT. Ele trabalha no Traviosoft com os direitos da pessoa que o ligou.'] },
        { title: 'O assistente dentro do Traviosoft', body: ['Pergunte o que precisa da sua atenção hoje, peça um orçamento preparado a partir do seu catálogo ou transforme a tabela de preços de um fornecedor em preços do catálogo. Cada alteração aguarda a sua aprovação. O assistente é uma opção nos dois planos.'] }
      ]
    }
  ],
  faq: [
    { q: 'Onde estão os meus dados?', a: ['Num espaço separado para a sua agência, alojado na União Europeia.'] },
    { q: 'Posso sair com os meus dados?', a: ['Sim. Recebe os seus dados em formatos normalizados.'] },
    { q: 'Quem pode ver o quê?', a: ['No plano Classic, cada utilizador vê todas as viagens da agência. No plano Premium, cada equipa e cada pessoa pode ter os seus próprios clientes e viagens, com os direitos que escolher.'] }
  ]
};

export const jobs: Record<JobSlug, JobPage> = { sell, book, 'get-paid': getPaid, setup };
