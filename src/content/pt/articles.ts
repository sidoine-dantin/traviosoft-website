import type { Article, ArticleBlock, Faq } from '../types';
import { invoicingGuides } from './invoicing';
import { topicGuides } from './topics';
import { PRICES } from '../prices';

const UPDATED = '2026-11-03';

type Cmp = {
  key: string;
  slug: string;
  other: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  card: string;
  basis: string;
  rows: string[][];
  otherBetter: string[];
  usBetter: string[];
  switching: string;
  faq: Faq[];
  updated?: string;
};

function compare(c: Cmp): Article {
  const blocks: ArticleBlock[] = [
    { type: 'p', text: c.basis },
    { type: 'h2', text: 'Comparação ponto por ponto', id: 'comparacao' },
    { type: 'table', head: ['', 'Traviosoft', c.other], rows: c.rows },
    { type: 'h2', text: `Quando ${c.other} é a melhor escolha`, id: 'quando-outro' },
    { type: 'list', items: c.otherBetter },
    { type: 'h2', text: 'Quando o Traviosoft se adapta melhor', id: 'quando-traviosoft' },
    { type: 'list', items: c.usBetter },
    { type: 'h2', text: 'Mudar para o Traviosoft', id: 'mudanca' },
    { type: 'p', text: c.switching },
    { type: 'h2', text: 'Perguntas frequentes', id: 'faq' },
    { type: 'faq', items: c.faq },
    { type: 'p', text: 'A [página Demonstração](/demo) descreve a demonstração, feita sobre uma viagem de exemplo.' }
  ];
  return {
    key: c.key,
    kind: 'compare',
    slug: c.slug,
    metaTitle: c.metaTitle,
    metaDescription: c.metaDescription,
    title: c.title,
    lead: c.lead,
    updated: c.updated ?? UPDATED,
    card: c.card,
    blocks
  };
}

const SWITCH = (from: string) =>
  `Se mudar do ${from} para o Traviosoft, durante a configuração importamos os seus produtos, preços e fornecedores a partir das suas folhas de cálculo, sem custo com a faturação anual. A página [Mudar para o Traviosoft](/switch) descreve as etapas.`;

const compares: Cmp[] = [
  {
    key: 'vs-excel',
    slug: 'traviosoft-vs-excel',
    other: 'Excel e Word',
    metaTitle: 'Traviosoft ou Excel e Word para uma agência de viagens',
    metaDescription:
      'O Excel e o Word são o ponto de partida de quase todas as agências de viagens. Comparamos orçamentos, margens, reservas e faturas para mostrar quando compensa um software feito para viagens.',
    title: 'Traviosoft ou Excel e Word: quando passar para um software de gestão de viagens',
    lead: 'O Excel e o Word são flexíveis, conhecidos e chegam para muitas agências que vendem poucas viagens por ano. Quando entram várias pessoas, épocas de preços e numeração de faturas, um software feito para viagens trata desse trabalho no seu lugar.',
    card: 'Folha de cálculo ou software: quando compensa mudar e quando não.',
    basis:
      'O Excel e o Word são o ponto de partida de quase todas as agências, e muitas continuam satisfeitas com eles durante anos. Esta página mostra o que muda quando as viagens passam para um software feito para elas. Os dados do Traviosoft são os do nosso site a 3 de novembro de 2026.',
    rows: [
      ['Feito para', 'Viagens à medida: pedidos, orçamentos, reservas e faturas', 'Qualquer tarefa de cálculo e de texto'],
      ['Preço', `Classic a partir de ${PRICES.classic.yearly} EUR por mês, ${PRICES.usersIncluded} utilizadores incluídos`, 'A licença Microsoft que já tem'],
      ['Margem e comissão', 'Regras de preço definidas uma vez; cada linha segue-as', 'Fórmulas criadas por si, totalmente flexíveis'],
      ['Épocas e fornecedores', 'Preços por período e vários fornecedores por produto', 'Separadores organizados à sua maneira'],
      ['Versões do orçamento', 'Cada versão fica guardada e pode ser reaberta', 'Um ficheiro por versão'],
      ['Reservas a fornecedores', 'Uma lista por viagem com estados que se atualizam sozinhos', 'Uma coluna ou um documento à parte'],
      ['Faturas', 'Criadas a partir da viagem, numeradas por empresa, com notas de crédito', 'O seu próprio modelo de fatura'],
      ['Regras fiscais espanholas', 'O regime de IVA das agências de viagens (REAV) nas faturas', 'Configuradas no seu próprio modelo'],
      ['Programa para o cliente', 'Uma página para partilhar, dia a dia, na língua do cliente', 'Um PDF ou um ficheiro Word enviado por email'],
      ['Dados', 'Um espaço separado para a sua agência, alojado na UE', 'Os seus ficheiros, onde quer que os guarde']
    ],
    otherBetter: [
      'Vende poucas viagens por ano e trata delas sozinho. Um bom modelo de Excel dá-lhe tudo o que precisa.',
      'A sua forma de trabalhar é muito particular, e uma folha de cálculo adapta-se a ela melhor do que qualquer programa.',
      'Não quer mudar nada agora, por exemplo em plena época alta. Mudar a meio da campanha é um risco.',
      'Precisa de uma análise pontual ou de um relatório à medida. O Excel continua a ser a ferramenta certa, e o Traviosoft exporta para Excel de qualquer forma.'
    ],
    usBetter: [
      'Duas ou mais pessoas trabalham nos mesmos clientes e nas mesmas viagens ao mesmo tempo.',
      'Quando um hotel muda o preço, quer ver que orçamentos em aberto são afetados e atualizá-los de uma só vez.',
      'Quer que a margem e a comissão se apliquem sempre da mesma forma, a partir de regras definidas uma vez.',
      'Quer que o orçamento se torne a fatura, e os ficheiros para o contabilista, sem voltar a escrever nada.',
      'Fatura a clientes no estrangeiro e precisa de documentos em espanhol, inglês e francês.'
    ],
    switching:
      'Durante a configuração importamos os seus produtos, preços e fornecedores a partir das suas folhas de cálculo, sem custo com a faturação anual. A página [Mudar para o Traviosoft](/switch) descreve as etapas, e o guia "Do Excel a um software de gestão para agências de viagens" descreve o que muda.',
    faq: [
      { q: 'Posso continuar a usar o Excel ao lado do Traviosoft?', a: ['Sim. Pode importar os seus dados do Excel e exportar um resumo em Excel ou um zip com todos os PDF das faturas para o contabilista.'] },
      { q: 'O que acontece às fórmulas de margem que já tenho?', a: ['Tornam-se regras de preço. Em vez de copiar a fórmula para cada ficheiro, define-a uma vez e ela aplica-se a cada linha de cada orçamento.'] },
      { q: 'Compensa para uma agência de uma só pessoa?', a: ['Depende do volume. Se vende poucas viagens e não precisa de faturas nem de programas partilhados, uma folha de cálculo pode chegar. Se os orçamentos lhe ocupam horas todas as semanas, um software começa a compensar.'] }
    ]
  },
  {
    key: 'vs-ezus',
    slug: 'traviosoft-vs-ezus',
    other: 'Ezus',
    metaTitle: 'Traviosoft ou Ezus: comparação para DMC',
    metaDescription:
      'Comparamos o Traviosoft e o Ezus: a quem se destina cada um, preços publicados, línguas e arranque, e o que cada um faz melhor para DMC e agências de viagens à medida.',
    title: 'Traviosoft ou Ezus: uma comparação independente para DMC e agências de turismo recetivo',
    lead: 'O Ezus é um software francês consolidado para DMC, com muitos clientes, preços públicos e apoio em cinco línguas. O Traviosoft mostra um único preço com utilizadores incluídos e acrescenta o regime espanhol de IVA das agências de viagens (REAV) para as agências em Espanha.',
    card: 'Duas ferramentas com preços públicos: a quem se destina cada uma e o que inclui.',
    basis:
      'Os dados do Ezus vêm do seu site e de diretórios públicos, verificados a 3 de novembro de 2026. Os preços mudam, por isso confirme sempre as páginas de preços atuais de ambos. O número de clientes do Ezus é o que este publica.',
    rows: [
      ['Feito para', 'Agências de turismo recetivo, DMC e agências à medida', 'DMC, agências de turismo recetivo, operadores turísticos e agências; FIT, grupos e MICE'],
      ['Preço publicado', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR por mês, ${PRICES.usersIncluded} utilizadores incluídos`, 'Professional 75 EUR por utilizador por mês (até 10 utilizadores); Premium 100 EUR; Enterprise sob consulta'],
      ['Arranque', 'Configuração e importação sem custo com a faturação anual', 'Pacote de onboarding de 1990 EUR com implementação acompanhada; importação de dados 390 EUR'],
      ['Línguas', 'Documentos em espanhol, catalão, inglês, francês e italiano', 'Site e apoio em 5 línguas: EN, FR, ES, IT, PT'],
      ['Alojamento dos dados', 'UE, um espaço separado por agência', 'AWS Irlanda, segundo o seu site']
    ],
    otherBetter: [
      'Quer um produto com mais anos no mercado e muitas referências públicas: o Ezus afirma servir mais de 600 agências em mais de 70 países.',
      'Precisa de apoio e documentação em italiano ou em português.',
      'Valoriza uma implementação acompanhada, com um especialista de onboarding durante vários meses.',
      'Precisa de um plano Enterprise: o Ezus oferece um a partir de 30 utilizadores.',
      'Quer uma área do viajante, um portal de pagamento e páginas web na mesma ferramenta, tal como o Ezus as descreve.'
    ],
    usBetter: [
      'Quer um único preço com utilizadores incluídos, e configuração e importação incluídas com a faturação anual.',
      'A sua agência está em Espanha e quer o regime espanhol de IVA das agências de viagens (REAV) nas faturas.',
      'Trabalha sobretudo em espanhol e francês e quer documentos e modelos de email na língua do cliente.',
      'Prefere uma ferramenta construída à volta do percurso de uma viagem: pedido, orçamento com margem, reserva, pagamento e fatura.'
    ],
    switching: SWITCH('Ezus'),
    faq: [
      { q: 'Como é o preço de cada um?', a: [`O Traviosoft Classic custa ${PRICES.classic.yearly} EUR por mês com faturação anual, ${PRICES.usersIncluded} utilizadores incluídos, com configuração e importação incluídas. O Ezus Professional custa 75 EUR por utilizador por mês, com um pacote de onboarding de 1990 EUR que inclui uma implementação acompanhada. Confirme as páginas de preços atuais de ambos.`] },
      { q: 'O Ezus funciona para Espanha?', a: ['Sim. O Ezus tem site e apoio em espanhol. O Traviosoft inclui também o regime espanhol de IVA das agências de viagens (REAV) para as agências em Espanha.'] },
      { q: 'Posso experimentar os dois?', a: ['Ambos funcionam com uma demonstração.'] }
    ]
  },
  {
    key: 'vs-giav',
    slug: 'traviosoft-vs-giav',
    other: 'GIAV',
    metaTitle: 'Traviosoft ou GIAV: software de gestão para agências de viagens',
    metaDescription:
      'O GIAV é um software espanhol de gestão para agências de viagens com muitos anos de mercado. Comparamos a sua orientação com o Traviosoft para o turismo recetivo e as viagens à medida.',
    title: 'Traviosoft ou GIAV: duas formas de gerir uma agência de viagens',
    lead: 'O GIAV é um software de gestão para agências de viagens com muitos anos em Espanha e um longo historial com as agências de retalho. O Traviosoft é feito para o turismo recetivo e as viagens à medida. Se vende sobretudo viagens de catálogo, o GIAV pode adaptar-se melhor.',
    card: 'Uma ferramenta consolidada para agências de retalho e outra para viagens à medida e turismo recetivo.',
    basis:
      'Os dados do GIAV vêm de diretórios e da imprensa do setor. O GIAV apresenta os seus preços e planos numa demonstração, por isso descrevemos a sua orientação. Os dados do Traviosoft são os do nosso site a 3 de novembro de 2026.',
    rows: [
      ['Feito para', 'Agências de turismo recetivo, DMC e agências à medida', 'Gestão de agências de viagens em Espanha, sobretudo de retalho'],
      ['Preço', `Classic a partir de ${PRICES.classic.yearly} EUR por mês, ${PRICES.usersIncluded} utilizadores incluídos`, 'Sob consulta'],
      ['Conhecido por', 'Orçamentos com margem por linha, um catálogo por épocas, uma página de programa para o cliente e o regime espanhol de IVA das agências de viagens (REAV)', 'Um longo historial com as agências de viagens em Espanha']
    ],
    otherBetter: [
      'É uma agência de retalho que vende bilhetes, hotéis e pacotes de operadores. Uma ferramenta feita para esse trabalho costuma adaptar-se melhor.',
      'A sua equipa e o seu contabilista já conhecem o GIAV e tem processos construídos ao longo de anos.',
      'Valoriza um produto com um longo historial no mercado espanhol.',
      'Precisa de integrações de contabilidade ou com o contabilista que já tem a funcionar com eles.'
    ],
    usBetter: [
      'Desenha viagens à medida ou recebe viajantes do estrangeiro, e cada orçamento é calculado serviço a serviço a partir das tarifas net.',
      'Precisa de preços por época e de vários fornecedores para o mesmo serviço.',
      'Quer enviar aos clientes uma proposta e uma página de programa na língua deles, com a sua marca.',
      'Quer ver no site o preço e o que inclui cada plano.'
    ],
    switching: SWITCH('GIAV'),
    faq: [
      { q: 'Posso importar os meus dados do GIAV?', a: ['Importamos produtos, preços e fornecedores a partir de folhas de cálculo. Se exportar os seus dados do GIAV para uma folha de cálculo, pode trazê-los consigo.'] },
      { q: 'O Traviosoft funciona para uma agência de retalho?', a: ['É feito para agências que desenham e vendem viagens à medida.'] },
      { q: 'Como é o preço do GIAV?', a: ['O GIAV apresenta os seus preços numa demonstração.'] }
    ]
  },
  {
    key: 'vs-holded',
    slug: 'traviosoft-vs-holded',
    other: 'Holded',
    metaTitle: 'Traviosoft ou Holded para agências de viagens',
    metaDescription:
      'O Holded é um software de gestão para PME; o Traviosoft é feito para viagens. Em que se concentra cada um e como uma agência de viagens pode usar os dois em conjunto.',
    title: 'Traviosoft ou Holded: software de viagens ou ERP genérico',
    lead: 'O Holded é um software de faturação, contabilidade e gestão para PME, muito usado em Espanha. O Traviosoft é construído à volta da viagem. Muitas agências usam os dois: o Traviosoft para as viagens, o Holded para a empresa.',
    card: 'Uma ferramenta genérica para PME e uma ferramenta de viagens: o que faz cada uma.',
    basis:
      'Os dados do Holded vêm do seu site e da sua página dedicada ao turismo e às viagens, verificados a 9 de novembro de 2026. O Holded muda frequentemente de planos e promoções, por isso confirme a sua página de preços. As duas ferramentas concentram-se em trabalhos diferentes, por isso a questão costuma ser como combiná-las.',
    rows: [
      ['Feito para', 'Agências de turismo recetivo, DMC e agências à medida', 'Profissionais independentes e PME de qualquer setor, de 1 a mais de 100 pessoas'],
      ['Preço publicado', `Classic a partir de ${PRICES.classic.yearly} EUR por mês, ${PRICES.usersIncluded} utilizadores incluídos`, 'Basic 34 EUR (2 utilizadores), Standard 69 EUR (4), Advanced 115 EUR (7), Premium 229 EUR (15), sem IVA; com descontos temporários'],
      ['Foco principal', 'A viagem: pedidos, orçamentos com margem, reservas, programa, pagamentos e faturas', 'A empresa: faturação, contabilidade, salários e bancos'],
      ['Contabilidade, salários e bancos', 'Prepara os ficheiros para o contabilista', 'O seu núcleo: contabilidade, salários e reconciliação bancária']
    ],
    otherBetter: [
      'Precisa de contabilidade, gestão de tesouraria, salários ou reconciliação bancária no mesmo programa.',
      'A sua agência de viagens é uma pequena parte de um negócio maior e quer um único sistema para tudo.',
      'O seu contabilista já trabalha com o Holded e prefere receber tudo lá.',
      'Fatura em várias moedas e quer um controlo geral da tesouraria.'
    ],
    usBetter: [
      'O seu trabalho diário é calcular, enviar e acompanhar orçamentos de viagem com margem.',
      'Precisa de um catálogo com preços por época e vários fornecedores por serviço.',
      'Quer uma lista de reservas por viagem, vouchers de serviço e um programa para o cliente.',
      'A sua agência aplica o regime de IVA das agências de viagens (REAV) e quer as menções em cada fatura automaticamente.'
    ],
    switching:
      'O Traviosoft gere a viagem, do pedido à fatura, e exporta um resumo em Excel ou um zip de faturas em PDF, que um contabilista pode importar para o Holded ou para outro programa de contabilidade. A página [Mudar para o Traviosoft](/switch) descreve as etapas.',
    faq: [
      { q: 'Tenho de deixar o Holded para usar o Traviosoft?', a: ['Não necessariamente. Muitas agências mantêm a contabilidade onde está. O importante é emitir cada fatura num único sítio, e combinar com o contabilista como recebe os dados.'] },
      { q: 'O Holded e o Traviosoft podem trabalhar em conjunto?', a: ['Sim. O Traviosoft trata da viagem e das suas faturas, e exporta um resumo em Excel ou um zip de faturas em PDF que o contabilista pode importar para o Holded ou para qualquer outro programa de contabilidade.'] },
      { q: 'O Traviosoft faz contabilidade?', a: ['Não. Gere a viagem, os pagamentos e as faturas, e prepara os ficheiros para o contabilista. A contabilidade fica com o contabilista ou com o programa que usa.'] }
    ]
  },
  {
    key: 'vs-lemax',
    slug: 'traviosoft-vs-lemax',
    other: 'Lemax',
    metaTitle: 'Traviosoft ou Lemax: software para DMC e operadores turísticos',
    metaDescription:
      'O Lemax é um software croata para operadores turísticos e DMC de média e grande dimensão. Comparamos a quem se destina cada um, dimensão da equipa, preços e foco.',
    title: 'Traviosoft ou Lemax: dois programas de gestão completos em comparação',
    lead: 'O Lemax é um software com mais de 30 anos de história, feito para operadores turísticos e DMC de média e grande dimensão. O seu pacote Lemax GO destina-se a equipas a partir de 15 utilizadores, com um preço definido com cada cliente. O Traviosoft cobre toda a viagem, do primeiro pedido à última fatura, com documentos em cinco línguas e um preço publicado.',
    card: 'Dois sistemas completos: uma plataforma consolidada e um único percurso do pedido à fatura com preço publicado.',
    basis:
      'Os dados do Lemax vêm do seu site e da imprensa do setor, verificados a 3 de novembro de 2026. O Lemax acorda os preços com cada cliente, por isso escrevemos "Sob consulta". O número de clientes é o que mostra.',
    rows: [
      ['Feito para', 'Agências de turismo recetivo, DMC e agências à medida', 'Operadores turísticos e DMC de média e grande dimensão'],
      ['Dimensão da equipa', `Dois planos, ${PRICES.usersIncluded} utilizadores incluídos`, 'Lemax GO a partir de 15 utilizadores'],
      ['Preço', `Classic a partir de ${PRICES.classic.yearly} EUR por mês, ${PRICES.usersIncluded} utilizadores incluídos`, 'Sob consulta; acordado com cada cliente antes da assinatura'],
      ['Implementação', 'Configuração e importação sem custo com a faturação anual', 'Anuncia "em funcionamento em 90 dias" para o Lemax GO'],
      ['Distribuição e ligações', 'Ligações ao seu site e à contabilidade (Premium) e às suas ferramentas de IA (ambos os planos)', 'Conectividade com fornecedores, API de reservas e portal B2B, segundo o seu site']
    ],
    otherBetter: [
      'É um operador turístico ou uma DMC com uma equipa de 15 ou mais pessoas e processos complexos de vários dias.',
      'Precisa de distribuição, ligações por API a fornecedores, um portal B2B para agências ou um motor de reservas online.',
      'Quer um fornecedor com mais de 30 anos de história e clientes em vários continentes.',
      'Quer um projeto de implementação acompanhado.'
    ],
    usBetter: [
      'Quer orçamentar, reservar e faturar toda a viagem num único sistema e começar a trabalhar após uma configuração curta.',
      'Quer ver o preço e os utilizadores incluídos antes de pedir uma demonstração.',
      'O seu mercado é Espanha e vende em espanhol e francês, com o regime de IVA das agências de viagens (REAV).',
      'Quer que importemos os seus produtos, preços e fornecedores a partir das suas folhas de cálculo durante a configuração.'
    ],
    switching: SWITCH('Lemax'),
    faq: [
      { q: 'A quem se destina o Lemax GO?', a: ['A equipas de 15 utilizadores ou mais, segundo o seu site, com uma implementação que descreve como "em funcionamento em 90 dias".'] },
      { q: 'Como é o preço do Lemax?', a: ['O Lemax acorda o preço do pacote e da implementação com cada cliente antes da assinatura.'] },
      { q: 'O Traviosoft liga-se às minhas outras ferramentas?', a: ['Sim, no Premium. O seu site, o seu programa de contabilidade ou um programador com quem trabalhe podem ler e escrever os seus dados do Traviosoft, e pode ligar o assistente de IA que já usa.'] }
    ]
  },
  {
    key: 'vs-tourwriter',
    slug: 'traviosoft-vs-tourwriter',
    other: 'Tourwriter',
    metaTitle: 'Traviosoft ou Tourwriter para DMC e travel designers',
    metaDescription:
      'O Tourwriter é um software neozelandês para DMC de luxo e travel designers. Comparamos a quem se destina cada um, planos, preços, línguas e o que cada um faz melhor.',
    title: 'Traviosoft ou Tourwriter: duas ferramentas para desenhar viagens',
    lead: 'O Tourwriter é um software neozelandês conhecido pelos seus programas de viagem cuidados, feito para DMC de luxo e travel designers que trabalham em inglês. O Traviosoft tem preços em euros com utilizadores incluídos, funciona em espanhol e francês e inclui o regime de IVA das agências de viagens (REAV).',
    card: 'Programas de luxo cuidados em inglês e uma ferramenta com preço em euros, em espanhol e francês.',
    basis:
      'Os dados do Tourwriter vêm do seu site (páginas de planos e da empresa), verificados a 3 de novembro de 2026. Os seus preços são preços "a partir de" em dólares americanos, por utilizador, com um orçamento para cada equipa, por isso o total real pode ser diferente.',
    rows: [
      ['Feito para', 'Agências de turismo recetivo, DMC e agências à medida', 'DMC de luxo e travel designers, viagens FIT de vários dias'],
      ['Preço publicado', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR por mês, ${PRICES.usersIncluded} utilizadores incluídos`, 'Starter a partir de 99 USD por utilizador por mês; Pro a partir de 149 USD; Premium sob consulta'],
      ['Arranque', 'Configuração e importação sem custo com a faturação anual', 'Taxa única a partir de 1199 USD, que cobre migração, configuração e formação'],
      ['Línguas', 'Documentos em espanhol, catalão, inglês, francês e italiano', 'Inglês']
    ],
    otherBetter: [
      'Vende viagens de luxo em inglês e quer programas de viagem com um design muito cuidado.',
      'Valoriza que outras DMC europeias já o usem.',
      'Quer uma implementação acompanhada com formação incluída na taxa de configuração.',
      'O seu mercado principal é anglófono.'
    ],
    usBetter: [
      'Quer um preço em euros com utilizadores incluídos em cada plano.',
      'A sua agência está em Espanha e quer o regime de IVA das agências de viagens (REAV) integrado.',
      'Os seus clientes falam espanhol ou francês e quer orçamentos e emails na língua deles.',
      'Quer configuração e importação incluídas com a faturação anual.'
    ],
    switching: SWITCH('Tourwriter'),
    faq: [
      { q: 'Como é o preço do Tourwriter?', a: ['Os seus planos começam em 99 USD por utilizador por mês (Starter) e 149 USD (Pro), com uma taxa única de configuração a partir de 1199 USD que cobre migração e formação. Preparam um orçamento para cada equipa, por isso confirme o total com eles.'] },
      { q: 'Em que línguas funciona cada um?', a: ['O Tourwriter funciona em inglês. O Traviosoft funciona em espanhol, inglês e francês, e envia os documentos na língua do cliente: espanhol, catalão, inglês, francês ou italiano.'] },
      { q: 'Posso experimentar os dois?', a: ['Ambos oferecem uma demonstração.'] }
    ]
  },
  {
    key: 'vs-tourplan',
    updated: '2026-11-14',
    slug: 'traviosoft-vs-tourplan',
    other: 'Tourplan',
    metaTitle: 'Traviosoft ou Tourplan para DMC e operadores turísticos',
    metaDescription:
      'O Tourplan é um software para operadores turísticos usado por DMC e operadores desde 1986. Comparamos a quem se destina cada um, empresa, preço, arranque e línguas.',
    title: 'Traviosoft ou Tourplan: dois sistemas para DMC e operadores turísticos',
    lead: 'A Tourplan faz software para DMC e operadores turísticos desde 1986, com vendas, reservas e back office num sistema modular usado por 450 empresas em 75 países. O Traviosoft cobre toda a viagem, do primeiro pedido à última fatura, com documentos em cinco línguas e um preço publicado.',
    card: 'Um sistema modular com 40 anos de história e um único percurso do pedido à fatura com preço publicado.',
    basis:
      'Os dados do Tourplan vêm do seu site (página inicial e Sobre nós), verificados a 14 de novembro de 2026. O seu site não publica preços, por isso escrevemos "Sob consulta".',
    rows: [
      ['Feito para', 'Agências de turismo recetivo, DMC e agências à medida', 'DMC, operadores turísticos de recetivo e emissivo: FIT, grupos, MICE, à medida, circuitos em série'],
      ['Preço', `Classic a partir de ${PRICES.classic.yearly} EUR por mês, ${PRICES.usersIncluded} utilizadores incluídos`, 'Sob consulta'],
      ['Arranque', 'Configuração e importação sem custo com a faturação anual', 'Alojamento, instalação, gestão de projeto, formação e apoio'],
      ['Distribuição', 'Ligações ao seu site e à contabilidade (Premium) e às suas ferramentas de IA (ambos os planos)', 'Canais de distribuição web e XML, e interfaces online para agentes, clientes e fornecedores']
    ],
    otherBetter: [
      'Quer um sistema modular que cubra produto, orçamentos, reservas, contabilidade e relatórios de gestão, com 40 anos de história.',
      'Distribui o seu produto por canais web e XML e quer interfaces para agentes e fornecedores.',
      'Valoriza um fornecedor que trabalha com 450 operadores turísticos e DMC em 75 países, com escritórios em cinco continentes.',
      'Quer um projeto acompanhado, com instalação, gestão de projeto e formação.'
    ],
    usBetter: [
      'Quer orçamentar, reservar e faturar toda a viagem num único sistema, a funcionar após uma configuração curta.',
      'Quer um preço publicado com utilizadores incluídos em cada plano.',
      'Os seus clientes falam espanhol, francês, catalão ou italiano e quer documentos na língua deles.',
      'Quer que importemos os seus produtos, preços e fornecedores a partir das suas folhas de cálculo durante a configuração.'
    ],
    switching: SWITCH('Tourplan'),
    faq: [
      { q: 'A quem se destina o Tourplan?', a: ['Segundo o seu site, a DMC e operadores turísticos de recetivo e emissivo, para circuitos FIT, de grupo, MICE, à medida, em série e especializados.'] },
      { q: 'Como é o preço do Tourplan?', a: ['O seu site não publica preços.'] },
      { q: 'Posso experimentar os dois?', a: ['Ambos oferecem uma demonstração.'] }
    ]
  },
  {
    key: 'vs-kaptio',
    updated: '2026-11-14',
    slug: 'traviosoft-vs-kaptio',
    other: 'Kaptio',
    metaTitle: 'Traviosoft ou Kaptio para operadores turísticos e viagens à medida',
    metaDescription:
      'O Kaptio é um software para viagens de vários dias: cruzeiros, comboio, circuitos de grupo e viagens à medida. Comparamos a quem se destina cada um, empresa, preço e arranque.',
    title: 'Traviosoft ou Kaptio: dois sistemas para viagens de vários dias',
    lead: 'A Kaptio, fundada em Reiquiavique em 2012, junta CRM, contratação, tarifação, inventário, reservas, pagamentos e operações para cruzeiros, comboio, circuitos de grupo e viagens à medida. O Traviosoft cobre toda a viagem, do primeiro pedido à última fatura, com documentos em cinco línguas e um preço publicado.',
    card: 'Uma plataforma para viagens de vários dias e um único percurso do pedido à fatura com preço publicado.',
    basis:
      'Os dados do Kaptio vêm do seu site (página inicial, plataforma e Sobre nós), verificados a 14 de novembro de 2026. O seu site não publica preços, por isso escrevemos "Sob consulta".',
    rows: [
      ['Feito para', 'Agências de turismo recetivo, DMC e agências à medida', 'Viagens de vários dias: cruzeiros, comboio, circuitos de grupo e viagens à medida'],
      ['Preço', `Classic a partir de ${PRICES.classic.yearly} EUR por mês, ${PRICES.usersIncluded} utilizadores incluídos`, 'Sob consulta'],
      ['Arranque', 'Configuração e importação sem custo com a faturação anual', 'Começa com um workshop de levantamento'],
      ['Módulos', 'Pedidos, orçamentos, reservas, faturas e pagamentos num único percurso', 'Kaptio CRM, Kaptio Travel e Kaptio Edge']
    ],
    otherBetter: [
      'Vende cruzeiros, comboio ou circuitos de grupo e quer CRM, contratação, inventário e operações numa única plataforma.',
      'Quer começar com um workshop de levantamento dos seus processos.',
      'Quer os assistentes de IA que apresenta como parte da plataforma.'
    ],
    usBetter: [
      'Desenha viagens à medida e quer orçamentá-las, reservá-las e faturá-las num único sistema, a funcionar após uma configuração curta.',
      'Quer um preço publicado com utilizadores incluídos em cada plano.',
      'Os seus clientes falam espanhol, francês, catalão ou italiano e quer documentos na língua deles.',
      'Quer que importemos os seus produtos, preços e fornecedores a partir das suas folhas de cálculo durante a configuração.'
    ],
    switching: SWITCH('Kaptio'),
    faq: [
      { q: 'A quem se destina o Kaptio?', a: ['Segundo o seu site, às empresas que vendem viagens de vários dias: cruzeiros, comboio, circuitos de grupo e viagens à medida.'] },
      { q: 'Como é o preço do Kaptio?', a: ['O seu site não publica preços.'] },
      { q: 'Posso experimentar os dois?', a: ['O Kaptio começa com um workshop de levantamento e o Traviosoft com uma demonstração sobre uma viagem de exemplo.'] }
    ]
  },
  {
    key: 'vs-tourcms',
    updated: '2026-11-14',
    slug: 'traviosoft-vs-tourcms',
    other: 'TourCMS',
    metaTitle: 'Traviosoft ou TourCMS: viagens à medida ou tours e atividades',
    metaDescription:
      'O TourCMS é um software de reservas e gestão de canais para operadores de tours e atividades. Comparamos a quem se destina cada um, empresa, preços publicados e línguas.',
    title: 'Traviosoft ou TourCMS: viagens à medida e tours e atividades',
    lead: 'O TourCMS, gerido pela Palisis na Suíça, oferece desde 2003 reservas, distribuição e gestão de canais aos operadores de tours e atividades. O Traviosoft é feito para viagens à medida, do primeiro pedido à última fatura, com documentos em cinco línguas.',
    card: 'Reservas e gestão de canais para tours e atividades, e um único percurso para viagens à medida.',
    basis:
      'Os dados do TourCMS vêm do seu site (página inicial, funcionalidades e preços), verificados a 14 de novembro de 2026. Os seus preços são apresentados em dólares americanos.',
    rows: [
      ['Feito para', 'Agências de turismo recetivo, DMC e agências à medida', 'Operadores de tours e atividades: excursões de um dia, circuitos de vários dias, atrações, DMC'],
      ['Preço publicado', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR por mês, ${PRICES.usersIncluded} utilizadores incluídos`, 'De 49 USD por mês (2 utilizadores) a 569 USD por mês (500 utilizadores); reservas de parceiros ligados a partir de 1,9% por transação'],
      ['Arranque', 'Configuração e importação sem custo com a faturação anual', 'Período de experiência gratuito, sem taxa de configuração'],
      ['Línguas', 'Documentos em espanhol, catalão, inglês, francês e italiano', 'Conteúdos em 22 línguas']
    ],
    otherBetter: [
      'Organiza tours ou atividades com partidas vendidas online e através de revendedores.',
      'Quer gestão de canais e um marketplace de agentes, que indica ter mais de 30 000.',
      'Quer começar com um período de experiência gratuito.'
    ],
    usBetter: [
      'Desenha viagens à medida, cada uma orçamentada com a sua margem e a sua comissão.',
      'Quer reservas a fornecedores e faturas criadas a partir da mesma viagem.',
      'Os seus clientes falam espanhol, francês, catalão ou italiano e quer documentos na língua deles.',
      'Quer que importemos os seus produtos, preços e fornecedores a partir das suas folhas de cálculo durante a configuração.'
    ],
    switching: SWITCH('TourCMS'),
    faq: [
      { q: 'A quem se destina o TourCMS?', a: ['Segundo o seu site, aos operadores de tours e atividades: excursões de um dia, hop-on hop-off, atrações, circuitos de vários dias, DMC e visitas a pé.'] },
      { q: 'Como é o preço do TourCMS?', a: ['A sua página de preços apresenta quatro planos, de 49 USD por mês (Small) a 569 USD por mês (Enterprise), com opção anual, mais uma taxa a partir de 1,9% nas reservas de parceiros ligados.'] },
      { q: 'Posso experimentar os dois?', a: ['O TourCMS oferece um período de experiência gratuito e o Traviosoft uma demonstração sobre uma viagem de exemplo.'] }
    ]
  }
];

const comparisons: Article[] = compares.map(compare);

const best: Article = {
  key: 'best-dmc-software',
  kind: 'best',
  slug: 'melhor-software-dmc',
  metaTitle: 'O melhor software para DMC e agências de turismo recetivo (2026)',
  metaDescription:
    'Uma comparação independente entre Traviosoft, Ezus, Tourplan, Tourwriter, Lemax, Kaptio, GIAV e Excel: a quem se destina cada um, preços publicados, línguas e pontos fortes.',
  title: 'O melhor software para DMC e agências de turismo recetivo (2026)',
  lead: 'Para uma DMC ou uma agência de viagens à medida, as opções são o Traviosoft, o Ezus, o Tourplan, o Tourwriter, o Lemax, o Kaptio e o GIAV; muitas agências começam também com o Excel e o Word. Este guia compara-os com dados públicos: a quem se destina cada um, preço, línguas e o que cada um faz melhor.',
  updated: UPDATED,
  card: 'Oito opções comparadas: a quem se destina cada uma, preços publicados, línguas e pontos fortes.',
  blocks: [
    {
      type: 'p',
      text: 'Esta lista é escrita pelo Traviosoft, por isso limitamo-nos a dados públicos, escrevemos "Sob consulta" quando um fornecedor partilha os preços numa demonstração, e dizemos o que cada ferramenta faz melhor. Dados verificados a 3 de novembro de 2026. Os preços mudam, por isso confirme sempre as páginas oficiais.'
    },
    { type: 'h2', text: 'Tabela de comparação', id: 'tabela' },
    {
      type: 'table',
      head: ['Ferramenta', 'A quem se destina', 'Dimensão da equipa', 'Preço', 'Línguas'],
      usRow: 0,
      rows: [
        ['Traviosoft', 'Agências de turismo recetivo, DMC e agências à medida', `Dois planos, ${PRICES.usersIncluded} utilizadores incluídos`, `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR por mês, ${PRICES.usersIncluded} utilizadores incluídos`, 'Documentos em ES, CA, EN, FR e IT'],
        ['Ezus', 'DMC, agências de turismo recetivo, operadores turísticos e agências', 'Professional até 10 utilizadores; Enterprise a partir de 30', '75 EUR por utilizador por mês (Professional); pacote de onboarding 1990 EUR', 'Site e apoio em EN, FR, ES, IT, PT'],
        ['Tourplan', 'Operadores turísticos e DMC consolidados', 'Sob consulta', 'Sob consulta', 'Site em inglês, espanhol e japonês'],
        ['Tourwriter', 'DMC de luxo e travel designers', 'De 1 a mais de 20 pessoas, consoante o plano', 'A partir de 99 USD por utilizador por mês; configuração a partir de 1199 USD', 'Inglês'],
        ['Lemax', 'Operadores turísticos e DMC de média e grande dimensão', 'Lemax GO a partir de 15 utilizadores', 'Sob consulta', 'Inglês'],
        ['Kaptio', 'Grandes operadores de viagens de vários dias', 'Grandes operadores', 'Sob consulta', 'Inglês'],
        ['GIAV', 'Agências de viagens em Espanha, com um longo historial no retalho', 'Sob consulta', 'Sob consulta', 'Espanhol'],
        ['Excel + Word', 'Qualquer agência em início de atividade', 'Uma a três pessoas, na prática', 'A licença que já tem', 'A que escrever']
      ]
    },
    { type: 'h2', text: 'Cada ferramenta e o que faz melhor', id: 'ferramentas' },
    { type: 'h3', text: 'Traviosoft' },
    {
      type: 'p',
      text: 'Cobre toda a viagem: pedidos, um catálogo com preços por época, orçamentos com margem e comissão, reservas, pagamentos e faturas, com o regime de IVA das agências de viagens (REAV) para Espanha. Mostra o seu preço, e a configuração e a importação estão incluídas com a faturação anual.'
    },
    { type: 'h3', text: 'Ezus' },
    {
      type: 'p',
      text: 'Um software completo para DMC com preços públicos, site e apoio em cinco línguas e muitas referências: mais de 600 agências em mais de 70 países, segundo o seu site. O seu pacote de onboarding de 1990 EUR inclui uma implementação acompanhada.'
    },
    { type: 'h3', text: 'Tourplan' },
    {
      type: 'p',
      text: 'Um software com cerca de 40 anos de história para operadores turísticos e DMC consolidados, com clientes em cerca de 75 países segundo o seu site. Os preços e os planos são apresentados sob consulta.'
    },
    { type: 'h3', text: 'Tourwriter' },
    {
      type: 'p',
      text: 'Conhecido pelos programas de viagem de luxo cuidados, usado por DMC e travel designers em muitos países. Os planos têm preço por utilizador, com uma taxa de configuração que cobre migração e formação.'
    },
    { type: 'h3', text: 'Lemax' },
    {
      type: 'p',
      text: 'Uma plataforma completa para operadores turísticos e DMC de média e grande dimensão, com distribuição, API de reservas e portal B2B. O Lemax GO destina-se a equipas a partir de 15 utilizadores, e os preços são acordados com cada cliente.'
    },
    { type: 'h3', text: 'Kaptio' },
    {
      type: 'p',
      text: 'Uma plataforma construída sobre o Salesforce para grandes operadores de viagens de vários dias; a imprensa refere grupos internacionais conhecidos entre os seus clientes. É vendida através de um workshop de levantamento, com preços sob consulta.'
    },
    { type: 'h3', text: 'GIAV' },
    {
      type: 'p',
      text: 'Um software de gestão para agências de viagens com longa presença em Espanha, sobretudo entre as agências de retalho. Apresenta os seus preços e funcionalidades numa demonstração.'
    },
    { type: 'h3', text: 'Excel + Word' },
    {
      type: 'p',
      text: 'Gratuitos se já tiver a licença, flexíveis e conhecidos por todos. Muitas agências começam aqui e passam para um software dedicado à medida que as viagens e a equipa crescem.'
    },
    { type: 'h2', text: 'O que muda entre as opções', id: 'escolher' },
    { type: 'list', items: [
      'As opções diferem no número mínimo de utilizadores e no que cada plano inclui.',
      'O custo do primeiro ano pode incluir configuração e importação de dados além da mensalidade, consoante o fornecedor.',
      'A língua dos documentos que o cliente recebe pode ser diferente da língua dos ecrãs.',
      'As regras de faturação dependem do país; as páginas de "Faturação por país" descrevem vários.',
      'Alguns fornecedores publicam os seus preços; outros partilham-nos numa demonstração.'
    ] },
    { type: 'h2', text: 'Perguntas frequentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Qual é o melhor software para uma DMC ou uma agência à medida?', a: ['Depende da forma de trabalhar da agência e do seu mercado. A tabela acima mostra a quem se destina cada ferramenta, o seu preço e as suas línguas.'] },
        { q: 'Quanto custa um software para DMC?', a: [`Os preços publicados vão de ${PRICES.classic.yearly} EUR por mês para ${PRICES.usersIncluded} utilizadores (Traviosoft Classic) a 75 EUR por utilizador por mês mais um pacote de onboarding de 1990 EUR (Ezus). O Tourplan, o Lemax e o Kaptio dão os seus preços sob consulta.`] },
        { q: 'Preciso de um software específico para viagens ou chega um ERP genérico?', a: ['Um ERP genérico é feito para a contabilidade; um software de viagens acrescenta orçamentos com margem por serviço e uma lista de reservas por viagem. Muitas agências usam os dois.'] }
      ]
    },
    { type: 'p', text: 'A [página Demonstração](/demo) descreve a demonstração, feita sobre uma viagem de exemplo.' }
  ]
};

const quote: Article = {
  key: 'quote-with-margins',
  kind: 'guide',
  slug: 'orcamento-viagem-a-medida-com-margem',
  metaTitle: 'Como se calcula o preço de uma viagem à medida: margem e comissão',
  metaDescription:
    'Como se calcula o preço de uma viagem à medida a partir das tarifas net, com uma margem sobre o preço de venda e uma comissão, num exemplo com números.',
  title: 'Como se calcula o preço de uma viagem à medida',
  lead: 'O preço de uma viagem à medida constrói-se com três montantes: o que os fornecedores cobram (as tarifas net), o que a agência ganha (a margem) e, quando outra agência vende a viagem, a sua comissão. Esta página mostra o cálculo num exemplo.',
  updated: '2026-11-14',
  card: 'Tarifas net, margem sobre o preço de venda e comissão, calculadas num exemplo.',
  blocks: [
    { type: 'h2', text: 'Markup e margem sobre o mesmo custo', id: 'conceitos' },
    {
      type: 'p',
      text: 'O markup calcula-se sobre o custo e a margem sobre o preço de venda, por isso o mesmo ganho dá duas percentagens diferentes. Para um custo de 1000 EUR:'
    },
    {
      type: 'table',
      head: ['Markup sobre o custo', 'Preço de venda', 'Ganho', 'Margem sobre o preço'],
      rows: [
        ['20%', '1200,00 EUR', '200,00 EUR', '16,7%'],
        ['25%', '1250,00 EUR', '250,00 EUR', '20,0%'],
        ['33,3%', '1333,33 EUR', '333,33 EUR', '25,0%'],
        ['50%', '1500,00 EUR', '500,00 EUR', '33,3%']
      ]
    },
    { type: 'h2', text: 'Exemplo: 4 noites na Andaluzia para 2 pessoas', id: 'exemplo' },
    {
      type: 'table',
      head: ['Serviço', 'Cálculo', 'Custo líquido'],
      rows: [
        ['Hotel, quarto duplo', '4 noites x 100 EUR', '400 EUR'],
        ['Transfers privados', '2 transfers x 60 EUR', '120 EUR'],
        ['Guia', '2 dias x 150 EUR', '300 EUR'],
        ['Aula de culinária', '2 pessoas x 40 EUR', '80 EUR'],
        ['Entradas', '2 pessoas x 50 EUR', '100 EUR'],
        ['Total líquido', '', '1000 EUR']
      ]
    },
    {
      type: 'p',
      text: 'Com uma margem de 25% sobre o preço de venda, o preço é 1000 ÷ (1 − 0,25) = 1333,33 EUR, ou seja 666,67 EUR por pessoa. A margem é de 333,33 EUR. Um markup de 25% sobre o custo daria 1250 EUR, ou seja uma margem de 20%.'
    },
    { type: 'h2', text: 'Com uma comissão', id: 'comissao' },
    {
      type: 'p',
      text: 'Quando outra agência vende a viagem com uma comissão de 10% sobre o preço, a comissão sai do mesmo preço. A 1333,33 EUR, a comissão é de 133,33 EUR e a margem desce para 200 EUR, ou seja 15%. Para manter uma margem de 25%, a comissão entra no divisor: 1000 ÷ (1 − 0,25 − 0,10) = 1538,46 EUR.'
    },
    {
      type: 'list',
      items: [
        'Preço ao cliente: 1538,46 EUR (769,23 EUR por pessoa).',
        'Comissão a 10%: 153,85 EUR.',
        'Margem a 25%: 384,62 EUR.',
        'Custo líquido: 1000,00 EUR. (Os valores têm arredondamento ao cêntimo.)'
      ]
    },
    { type: 'h2', text: 'Impostos', id: 'impostos' },
    {
      type: 'p',
      text: 'Os montantes acima são sem impostos. A forma como o IVA se aplica a uma viagem depende do país e do regime que a agência usa; as páginas de "Faturação por país" descrevem vários países.'
    },
    { type: 'h2', text: 'No Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'No Traviosoft, as regras de preço (margem, IVA e comissão) definem-se uma vez, e cada linha de cada orçamento segue-as, com o preço por pessoa e o total que o cliente vê.'
    },
    { type: 'h2', text: 'Perguntas frequentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'A margem define-se por serviço ou por viagem?', a: ['Existem as duas formas. Algumas agências usam uma única margem para toda a viagem, outras uma margem diferente por tipo de serviço.'] },
        { q: 'Porque é que a comissão está no divisor?', a: ['Porque a comissão é uma percentagem do preço de venda, tal como a margem. Pôr as duas no divisor dá um preço em que cada uma mantém a sua percentagem.'] }
      ]
    }
  ]
};

const rooming: Article = {
  key: 'rooming-list',
  kind: 'guide',
  slug: 'rooming-list-grupos-mice',
  metaTitle: 'Rooming list para grupos e MICE: o que é e o que contém',
  metaDescription:
    'O que é uma rooming list nas viagens de grupo e no MICE, a informação que costuma conter, um exemplo e como os hotéis a usam.',
  title: 'A rooming list para grupos e eventos MICE',
  lead: 'Uma rooming list indica ao hotel quem dorme em cada quarto de um grupo, com o tipo de quarto, as datas e os pedidos especiais. O hotel usa-a para atribuir os quartos do bloco que reserva para o grupo.',
  updated: '2026-11-14',
  card: 'O que é uma rooming list, as colunas que costuma ter e um exemplo.',
  blocks: [
    {
      type: 'p',
      text: 'Para um grupo, o hotel reserva um bloco de quartos ao abrigo de um contrato. A rooming list indica como esses quartos se distribuem pelos participantes. O contrato costuma fixar a data até à qual o hotel espera a lista e a data em que os quartos não usados do bloco são libertados.'
    },
    { type: 'h2', text: 'As colunas habituais', id: 'colunas' },
    {
      type: 'table',
      head: ['Coluna', 'Conteúdo', 'Exemplo'],
      rows: [
        ['N.º do quarto', 'Um número sequencial; o hotel atribui o real', '1'],
        ['Tipo de quarto', 'Single, duplo, twin ou triplo', 'Twin'],
        ['Hóspede 1', 'Nome completo como no documento de viagem', 'Marta Ruiz Soler'],
        ['Hóspede 2', 'Idem, se partilhar', 'Pedro Vidal Mas'],
        ['Entrada', 'Data de chegada', '12/05/2027'],
        ['Saída', 'Data de partida', '15/05/2027'],
        ['Noites', 'Calculadas a partir das datas', '3'],
        ['Regime', 'Só alojamento, alojamento e pequeno-almoço, meia-pensão', 'Alojamento e pequeno-almoço'],
        ['Chegada', 'Hora ou voo', 'Voo 10:40'],
        ['Pedidos', 'Dietas, acessibilidade, cama extra', 'Sem glúten'],
        ['Empresa ou grupo', 'Quando há várias faturas', 'Equipa comercial']
      ]
    },
    {
      type: 'p',
      text: 'Um exemplo de dimensão: um grupo de 22 pessoas em 9 quartos twin (18 pessoas) e 4 quartos single ocupa 13 quartos. O total de pessoas na lista corresponde ao grupo.'
    },
    { type: 'h2', text: 'Quem aparece na lista', id: 'quem' },
    {
      type: 'p',
      text: 'Além dos participantes, a rooming list de um grupo inclui muitas vezes quem viaja com o grupo, como o guia, o motorista ou o organizador, quando ficam no mesmo hotel.'
    },
    { type: 'h2', text: 'Versões', id: 'versoes' },
    {
      type: 'p',
      text: 'Uma rooming list muda à medida que os participantes confirmam, cancelam ou trocam de quarto. Cada versão enviada ao hotel costuma ter a sua data, para que ambas as partes trabalhem com a mesma lista.'
    },
    { type: 'h2', text: 'No Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'No Traviosoft, cria-se uma rooming list por hotel a partir de quem partilha com quem, pronta a enviar em PDF ou em folha de cálculo.'
    },
    { type: 'h2', text: 'Perguntas frequentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'A rooming list é só para grupos grandes?', a: ['Não. Usa-se sempre que um hotel precisa de saber quem dorme em que quarto, de um pequeno grupo a um grande evento.'] },
        { q: 'Qual é a diferença entre uma rooming list e uma reserva?', a: ['A reserva garante os quartos. A rooming list indica quem ocupa cada um deles.'] }
      ]
    }
  ]
};

const fromExcel: Article = {
  key: 'from-excel',
  kind: 'guide',
  slug: 'do-excel-a-software-agencia-de-viagens',
  metaTitle: 'Do Excel a um software de gestão para agências de viagens: o que passa e o que muda',
  metaDescription:
    'O que uma agência de viagens costuma ter em folhas de cálculo, o que passa para um software de viagens e o que muda quando as viagens ficam num único sistema.',
  title: 'Do Excel a um software de gestão para agências de viagens',
  lead: 'Muitas agências trabalham com folhas de cálculo e documentos: uma lista de produtos, uma lista de fornecedores, os clientes e um ficheiro por orçamento. Um software de viagens guarda a mesma informação num único sítio, ligada a cada viagem.',
  updated: '2026-11-14',
  card: 'O que costuma estar em folhas de cálculo, o que passa para o software e o que muda.',
  blocks: [
    { type: 'h2', text: 'O que costuma estar em folhas de cálculo', id: 'folhas' },
    {
      type: 'list',
      items: [
        'Produtos com nome, fornecedor, preço net e período de validade.',
        'Fornecedores com contactos e condições.',
        'Clientes com língua e email.',
        'Regras de preço: margem, comissão e IVA, muitas vezes como fórmulas.',
        'Orçamentos, muitas vezes um ficheiro por versão, e os textos de email habituais.'
      ]
    },
    { type: 'h2', text: 'O que muda num software', id: 'mudancas' },
    {
      type: 'list',
      items: [
        'Os preços guardam-se por época e por fornecedor, e um orçamento lê-os do catálogo.',
        'As regras de preço definem-se uma vez e aplicam-se a cada linha do orçamento.',
        'Cada versão do orçamento fica guardada com a viagem.',
        'Reservas, pagamentos e faturas ficam ligados à mesma viagem.',
        'Várias pessoas trabalham nos mesmos clientes e nas mesmas viagens ao mesmo tempo.'
      ]
    },
    { type: 'h2', text: 'O que fica nos ficheiros antigos', id: 'arquivo' },
    {
      type: 'p',
      text: 'O histórico das viagens passadas fica muitas vezes nos ficheiros antigos, como arquivo. O que passa é o que se reutiliza: tarifas em vigor, fornecedores e clientes ativos.'
    },
    { type: 'h2', text: 'No Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'Durante a configuração, importamos produtos, preços e fornecedores a partir das suas folhas de cálculo. A configuração e a importação não têm custo com a faturação anual. A página [Mudar para o Traviosoft](/switch) descreve as etapas.'
    },
    { type: 'h2', text: 'Perguntas frequentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Pode continuar a usar-se o Excel ao lado do Traviosoft?', a: ['Sim. O Traviosoft exporta um resumo em Excel, ou um zip dos PDF das faturas de qualquer período.'] },
        { q: 'É possível recuperar os dados?', a: ['Sim. Se deixar de usar o Traviosoft, recebe os seus dados em formatos padrão.'] }
      ]
    }
  ]
};

const aiTools: Article = {
  key: 'ai-assistant-mcp',
  kind: 'guide',
  slug: 'assistente-ia-mcp-agencia-de-viagens',
  metaTitle: 'IA para agências de viagens: assistente integrado e conector MCP para Claude, ChatGPT e Gemini',
  metaDescription:
    'Como uma agência de viagens pode usar a IA sobre os seus próprios dados: o assistente integrado no Traviosoft e o conector MCP que liga o Claude, o ChatGPT e outras ferramentas de IA aos seus orçamentos, reservas e pagamentos.',
  title: 'A IA na sua agência de viagens',
  lead: 'O Traviosoft trabalha com a IA de duas formas. O assistente integrado funciona dentro da aplicação para cada pessoa que o usa. O conector MCP permite que a ferramenta de IA que já usa, como o Claude ou o ChatGPT, leia e atualize os dados da sua agência com a sua autorização.',
  updated: '2026-11-14',
  card: 'O assistente integrado, o conector MCP para o Claude e o ChatGPT, e como mantém o controlo.',
  blocks: [
    { type: 'h2', text: 'O assistente integrado', id: 'assistente' },
    {
      type: 'p',
      text: 'O assistente está no Traviosoft e trabalha com as mesmas permissões da pessoa que o usa. Pergunte-lhe o que precisa de si hoje. Peça-lhe para preparar um orçamento a partir do seu catálogo ou para transformar a tabela de preços de um fornecedor em preços de catálogo. Também pode marcar tarefas de reserva como feitas ou listar os pagamentos que estão a vencer. É uma opção em ambos os planos, com limites de utilização, e ativa-se por pessoa.'
    },
    {
      type: 'p',
      text: 'Cada alteração que propõe espera a sua aprovação ou pode ser anulada. Com o tempo, aprende como a sua agência prefere fazer as coisas, e a sua equipa pode corrigir o que aprendeu, linha a linha.'
    },
    { type: 'h2', text: 'O conector MCP', id: 'mcp' },
    {
      type: 'p',
      text: 'O MCP (Model Context Protocol) é a forma padrão de um assistente de IA se ligar a outra ferramenta para trabalhar nela. Com o conector do Traviosoft, a sua ferramenta de IA pode procurar um cliente, preparar um rascunho de orçamento ou dizer-lhe que pagamentos estão em atraso. Trabalha sobre os seus dados reais e não sobre o que cola no chat. Está incluído em ambos os planos.'
    },
    {
      type: 'list',
      items: [
        'Claude (desktop ou web): Definições, Conectores, Adicionar conector personalizado, e depois cole o seu endereço do Traviosoft.',
        'ChatGPT: Definições, Apps, Definições avançadas, Modo de programador, e depois crie uma app com o mesmo endereço.',
        'Mistral (Le Chat): Contexto, Conectores, Adicionar conector, Conector MCP personalizado, com o mesmo endereço.',
        'Ferramentas de automação como o n8n também se podem ligar, para executar tarefas automaticamente.'
      ]
    },
    {
      type: 'p',
      text: 'A ferramenta de IA envia-o para o Traviosoft para iniciar sessão. Escolhe Só leitura, ou Ler e fazer alterações, e se também pode eliminar.'
    },
    { type: 'h2', text: 'Mantém o controlo', id: 'controlo' },
    {
      type: 'list',
      items: [
        'O conector está desligado até um administrador o ativar.',
        'O administrador escolhe quem pode ligar uma ferramenta de IA.',
        'Uma ferramenta de IA nunca faz mais do que a pessoa que a ligou pode fazer na aplicação.',
        'O Claude, o ChatGPT e o Mistral perguntam à pessoa antes de cada alteração. As eliminações, e as alterações de outras ferramentas de IA, aguardam no Traviosoft a aprovação de uma pessoa.',
        'Cada ação fica registada no registo de atividade em nome da pessoa que a ligou.',
        'Qualquer ligação pode ser cortada de imediato a partir do Traviosoft.'
      ]
    },
    { type: 'h2', text: 'Perguntas frequentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Funciona com o Gemini?', a: ['O conector funciona com qualquer ferramenta de IA compatível com MCP. A Google suporta MCP nas suas ferramentas Gemini para programadores. A possibilidade de adicionar um conector personalizado depende da versão do Gemini.'] },
        { q: 'O conector MCP está incluído no meu plano?', a: ['Sim. Está incluído no Classic e no Premium. O assistente integrado é uma opção em ambos os planos, com limites de utilização.'] },
        { q: 'A IA vê todos os nossos dados?', a: ['Vê o que a pessoa que a ligou pode ver, e nada mais. Um administrador pode também permitir só a leitura e bloquear qualquer alteração.'] },
        { q: 'A IA pode enviar emails?', a: ['Os orçamentos e as faturas chegam aos clientes a partir do Traviosoft. A IA pode enviar a um fornecedor um pedido de reserva ou de disponibilidade, depois de a pessoa o permitir.'] }
      ]
    }
  ]
};

export const articles: Article[] = [best, ...comparisons, quote, rooming, fromExcel, aiTools, ...topicGuides, ...invoicingGuides];
