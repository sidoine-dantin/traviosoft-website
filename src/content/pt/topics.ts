import type { Article } from '../types';

const UPDATED = '2026-11-14';

const DISCLAIMER =
  'Informação geral, escrita a 14 de novembro de 2026. Não constitui aconselhamento jurídico ou fiscal e não tem valor legal. As regras mudam: consulte os textos oficiais indicados no fim desta página ou um consultor qualificado. O Traviosoft não assume qualquer responsabilidade por decisões tomadas com base nesta página.';

const gdpr: Article = {
  key: 'gdpr-travel',
  kind: 'guide',
  slug: 'rgpd-agencia-de-viagens',
  metaTitle: 'RGPD e agências de viagens: o que diz o regulamento',
  metaDescription: 'O que diz o RGPD (Regulamento (UE) 2016/679) sobre os temas com que uma agência de viagens se depara: princípios, fundamentos de licitude, dados de saúde, crianças, conservação, direitos, subcontratantes, violações, transferências para fora da UE e coimas.',
  title: 'RGPD e agências de viagens: o que diz o regulamento',
  lead: 'O Regulamento Geral sobre a Proteção de Dados (Regulamento (UE) 2016/679) aplica-se aos dados pessoais de viajantes, clientes e contactos. Esta página resume os artigos relacionados com o trabalho de uma agência de viagens, com ligações para o texto.',
  updated: UPDATED,
  card: 'Princípios, fundamentos de licitude, dados de saúde, conservação, direitos, subcontratantes e transferências para fora da UE.',
  blocks: [
    { type: 'callout', text: DISCLAIMER },
    { type: 'h2', text: 'Os princípios', id: 'principios' },
    { type: 'p', text: 'O artigo 5.º fixa os princípios de qualquer tratamento. Os dados são tratados de forma lícita, leal e transparente; recolhidos para finalidades determinadas, explícitas e legítimas; adequados, pertinentes e limitados ao necessário; conservados apenas durante o período necessário para as finalidades; e protegidos com integridade e confidencialidade.' },
    { type: 'h2', text: 'Os seis fundamentos de licitude', id: 'fundamentos' },
    { type: 'p', text: 'Nos termos do artigo 6.º, o tratamento só é lícito se se verificar pelo menos uma destas situações:' },
    { type: 'list', items: [
      'o titular dos dados deu o seu consentimento;',
      'é necessário para a execução de um contrato no qual o titular é parte;',
      'é necessário para o cumprimento de uma obrigação jurídica;',
      'é necessário para a defesa de interesses vitais;',
      'é necessário para o exercício de funções de interesse público;',
      'é necessário para efeito dos interesses legítimos prosseguidos.'
    ] },
    { type: 'h2', text: 'Dados relativos à saúde', id: 'saude' },
    { type: 'p', text: 'O artigo 9.º inclui os dados relativos à saúde nas categorias especiais de dados pessoais, cujo tratamento é proibido, salvo se se aplicar uma das exceções previstas no artigo. Uma delas é o consentimento explícito do titular.' },
    { type: 'h2', text: 'Crianças', id: 'criancas' },
    { type: 'p', text: 'O artigo 8.º trata do consentimento das crianças para serviços da sociedade da informação oferecidos diretamente a crianças. O tratamento com esse fundamento é lícito a partir dos 16 anos. Os Estados-Membros podem fixar uma idade inferior, mas não abaixo dos 13 anos.' },
    { type: 'h2', text: 'Durante quanto tempo se conservam os dados', id: 'conservacao' },
    { type: 'p', text: 'O artigo 5.º limita a conservação ao período necessário para as finalidades. Os artigos 13.º e 14.º enumeram as informações a prestar ao titular, entre as quais o prazo de conservação.' },
    { type: 'h2', text: 'Os direitos dos titulares', id: 'direitos' },
    { type: 'list', items: [
      'Direito de acesso (artigo 15.º).',
      'Direito de retificação (artigo 16.º).',
      'Direito ao apagamento, o “direito a ser esquecido” (artigo 17.º).',
      'Direito à limitação do tratamento (artigo 18.º).',
      'Direito de portabilidade dos dados (artigo 20.º).',
      'Direito de oposição (artigo 21.º).'
    ] },
    { type: 'h2', text: 'Subcontratantes', id: 'subcontratantes' },
    { type: 'p', text: 'Quando uma empresa trata dados por conta do responsável pelo tratamento, o artigo 28.º exige um contrato ou outro ato jurídico. Este estabelece o objeto e a duração do tratamento, a sua natureza e finalidade, o tipo de dados pessoais e as categorias de titulares.' },
    { type: 'h2', text: 'Registos e violações de dados', id: 'registos-violacoes' },
    { type: 'p', text: 'O artigo 30.º pede a cada responsável pelo tratamento que conserve um registo das atividades de tratamento. A obrigação não se aplica a organizações com menos de 250 trabalhadores, salvo se o tratamento for suscetível de implicar um risco, não for ocasional ou incluir categorias especiais de dados, como dados de saúde.' },
    { type: 'p', text: 'Nos termos do artigo 33.º, uma violação de dados pessoais é notificada à autoridade de controlo sem demora injustificada e, sempre que possível, até 72 horas após ter tido conhecimento dela, a menos que não seja suscetível de resultar num risco para os direitos e liberdades das pessoas.' },
    { type: 'h2', text: 'Transferências para fora da União Europeia', id: 'transferencias' },
    { type: 'p', text: 'O capítulo V (artigos 44.º a 49.º) regula as transferências de dados pessoais para países fora da UE. Uma transferência pode realizar-se quando a Comissão Europeia decidiu que o país assegura um nível de proteção adequado (artigo 45.º), sem necessidade de autorização específica. Na falta dessa decisão, o artigo 46.º enumera as garantias adequadas, e o artigo 49.º as derrogações para situações específicas.' },
    { type: 'h2', text: 'Coimas', id: 'coimas' },
    { type: 'p', text: 'O artigo 83.º fixa dois limites. As violações, entre outras, dos princípios, dos fundamentos de licitude, das categorias especiais, dos direitos dos titulares e das regras sobre transferências podem chegar a 20 milhões de EUR ou, no caso de uma empresa, a 4% do volume de negócios anual a nível mundial, consoante o montante mais elevado. Outras violações, como as dos artigos 8.º e 25.º a 39.º, podem chegar a 10 milhões de EUR ou a 2%.' },
    { type: 'h2', text: 'No Traviosoft', id: 'traviosoft' },
    { type: 'p', text: 'Os dados de cada agência no Traviosoft ficam no seu próprio espaço, alojado na União Europeia.' },
    { type: 'p', text: 'Texto oficial: o regulamento publicado pela CNIL, a autoridade francesa de proteção de dados: [capítulo II, artigos 5 a 11](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2), [capítulo III, artigos 12 a 23](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3), [capítulo IV, artigos 24 a 43](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4), [capítulo V, artigos 44 a 50](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre5) e [capítulo VIII, artigos 77 a 84](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre8). Em Portugal, a [CNPD](https://www.cnpd.pt) publica as suas próprias orientações.' }
  ]
};

const euVat: Article = {
  key: 'eu-vat-travel',
  kind: 'guide',
  slug: 'iva-ue-regime-margem-agencias-de-viagens-vida',
  metaTitle: 'IVA na UE para agências de viagens: o regime da margem e o IVA na era digital (ViDA)',
  metaDescription: 'O regime especial de IVA da UE para as agências de viagens (artigos 306.º a 310.º da Diretiva IVA) e o que prevê o pacote IVA na era digital adotado em 2025, com as suas datas.',
  title: 'IVA na UE para agências de viagens: o regime da margem e o ViDA',
  lead: 'A Diretiva IVA da UE prevê um regime especial para as agências de viagens, em que o IVA incide sobre a margem. Em 2025, a UE adotou o pacote IVA na era digital (ViDA), que traz a comunicação digital e a faturação eletrónica para as vendas transfronteiriças entre empresas a partir de 2030.',
  updated: UPDATED,
  card: 'O regime especial das agências de viagens e as datas do ViDA, segundo a Comissão Europeia.',
  blocks: [
    { type: 'callout', text: DISCLAIMER },
    { type: 'h2', text: 'O regime especial das agências de viagens', id: 'regime' },
    { type: 'p', text: 'Os artigos 306.º a 310.º da Diretiva IVA (Diretiva 2006/112/CE do Conselho) fixam um regime especial para as agências de viagens. A Comissão Europeia descreve-o assim:' },
    { type: 'list', items: [
      'É obrigatório para os países e as empresas da UE, e existe em todos os países da UE.',
      'Abrange as agências de viagens que utilizam bens e serviços fornecidos por outras empresas, e não as que atuam apenas como intermediárias.',
      'O IVA aplica-se apenas à margem de lucro.',
      'Não há direito à dedução do IVA.',
      'Aplica-se às viagens e ao alojamento na UE, e não às viagens fora da UE.'
    ] },
    { type: 'p', text: 'Cada país aplica o regime através da sua própria lei; em Portugal, é o Decreto-Lei n.º 221/85. As páginas de “Faturação por país” descrevem as regras em Espanha, França, Alemanha e Bélgica.' },
    { type: 'h2', text: 'IVA na era digital (ViDA)', id: 'vida' },
    { type: 'p', text: 'O pacote ViDA foi adotado a 11 de março de 2025, publicado no Jornal Oficial da União Europeia a 25 de março de 2025 e entrou em vigor a 14 de abril de 2025. É composto pela Diretiva (UE) 2025/516, pelo Regulamento (UE) 2025/517 e pelo Regulamento de Execução (UE) 2025/518.' },
    { type: 'p', text: 'Tem três partes:' },
    { type: 'list', items: [
      'Obrigações de comunicação digital, com faturação eletrónica para as vendas transfronteiriças entre empresas.',
      'Regras atualizadas para os operadores da economia de plataformas em determinados setores.',
      'Um registo único de IVA na UE.'
    ] },
    { type: 'h2', text: 'As datas', id: 'datas' },
    { type: 'list', items: [
      '14 de abril de 2025: os Estados-Membros podem introduzir a faturação eletrónica nacional obrigatória em condições específicas.',
      '1 de julho de 2030: as obrigações de comunicação digital aplicam-se às operações transfronteiriças entre empresas.',
      '1 de janeiro de 2035: os Estados-Membros com uma obrigação nacional de comunicação em tempo real alinham os seus sistemas com o modelo e as normas da UE.'
    ] },
    { type: 'h2', text: 'No Traviosoft', id: 'traviosoft' },
    { type: 'p', text: 'No Traviosoft, as faturas criam-se a partir da viagem, com a menção do regime das agências de viagens quando a ativa.' },
    { type: 'p', text: 'Fontes oficiais: Comissão Europeia, [VAT special schemes](https://taxation-customs.ec.europa.eu/special-schemes_en), [VAT in the Digital Age](https://taxation-customs.ec.europa.eu/taxation/vat/vat-digital-age-vida_en) e [adoção do pacote ViDA](https://taxation-customs.ec.europa.eu/news/adoption-vat-digital-age-package-2025-03-11_en).' }
  ]
};

const netRates: Article = {
  key: 'net-commissionable-rates',
  kind: 'guide',
  slug: 'tarifas-liquidas-e-tarifas-comissionaveis',
  metaTitle: 'Tarifas líquidas e tarifas comissionáveis no turismo: definições e exemplos',
  metaDescription: 'O que significam tarifas líquidas e tarifas comissionáveis no turismo, como se calculam um markup e uma comissão, e a diferença entre markup e margem, com exemplos.',
  title: 'Tarifas líquidas e tarifas comissionáveis',
  lead: 'Os fornecedores vendem às agências de viagens e às DMC de duas formas principais. Uma tarifa líquida é o preço que a agência paga, e a agência define o seu próprio preço de venda. Uma tarifa comissionável é um preço de venda fixado pelo fornecedor, sobre o qual a agência ganha uma percentagem.',
  updated: UPDATED,
  card: 'O que significam os dois tipos de tarifa, como se calculam markup e comissão, com exemplos.',
  blocks: [
    { type: 'h2', text: 'Tarifa líquida', id: 'liquida' },
    { type: 'p', text: 'Uma tarifa líquida é o preço que o fornecedor cobra à agência, sem nada incluído para a agência. A agência decide o preço de venda acrescentando um markup. O cliente não vê a tarifa líquida.' },
    { type: 'p', text: 'Exemplo: um hotel dá uma tarifa líquida de 100 EUR por noite. Com um markup de 25%, o preço de venda é de 125 EUR. A agência fica com 25 EUR.' },
    { type: 'h2', text: 'Tarifa comissionável', id: 'comissionavel' },
    { type: 'p', text: 'Uma tarifa comissionável é um preço de venda fixado pelo fornecedor, muitas vezes o seu preço ao público. A agência vende a esse preço e recebe uma comissão, uma percentagem acordada com o fornecedor.' },
    { type: 'p', text: 'Exemplo: a tarifa comissionável de um hotel é de 150 EUR por noite com uma comissão de 10%. O cliente paga 150 EUR, a agência ganha 15 EUR e o hotel recebe 135 EUR.' },
    { type: 'h2', text: 'Markup e margem', id: 'markup-margem' },
    { type: 'p', text: 'O mesmo montante dá duas percentagens diferentes consoante aquilo com que se compara. O markup calcula-se sobre o custo; a margem calcula-se sobre o preço de venda.' },
    { type: 'list', items: [
      'Custo 100 EUR, preço de venda 125 EUR, ou seja 25 EUR ganhos.',
      'Markup: 25 ÷ 100 = 25%.',
      'Margem: 25 ÷ 125 = 20%.'
    ] },
    { type: 'p', text: 'Para atingir uma dada margem a partir de um custo, o preço de venda é o custo dividido por (1 − margem). Para uma margem de 20% sobre um custo de 100 EUR: 100 ÷ 0,8 = 125 EUR.' },
    { type: 'h2', text: 'Comissão paga a uma agência parceira', id: 'parceira' },
    { type: 'p', text: 'Uma DMC ou um operador turístico que vende através de outras agências trabalha muitas vezes ao contrário: fixa um preço comissionável e paga à agência que vende uma comissão.' },
    { type: 'p', text: 'Exemplo: uma DMC monta uma viagem com 1000 EUR de custos líquidos e fixa-lhe um preço de 1300 EUR para o viajante, com uma comissão de 10% para a agência que a vende. A agência ganha 130 EUR, e a DMC fica com 1170 EUR, ou seja 170 EUR acima dos seus custos.' },
    { type: 'h2', text: 'Onde entram os impostos', id: 'impostos' },
    { type: 'p', text: 'A forma como o IVA se aplica ao markup ou à comissão depende do país e de a agência vender em nome próprio ou como intermediária. As páginas de "Faturação por país" descrevem as regras em vários países.' },
    { type: 'h2', text: 'No Traviosoft', id: 'traviosoft' },
    { type: 'p', text: 'No Traviosoft, um procedimento de preço transforma as tarifas líquidas em preços de venda, com a margem, o IVA e a comissão quando uma agência parceira vende a viagem.' },
    { type: 'h2', text: 'Perguntas frequentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Uma viagem pode misturar tarifas líquidas e comissionáveis?', a: ['Sim. Uma viagem combina muitas vezes hotéis com tarifa líquida e serviços vendidos a preço comissionável, como algumas excursões ou alguns transportes.'] },
        { q: 'Uma comissão é o mesmo que uma margem?', a: ['As duas são o que a agência ganha. Uma comissão é uma percentagem de um preço fixado por outra pessoa; uma margem resulta de um preço de venda que a própria agência fixa.'] }
      ]
    }
  ]
};

export const topicGuides: Article[] = [gdpr, euVat, netRates];
