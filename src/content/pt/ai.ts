import type { AiText } from '../types';

/** O assistente de IA. Fonte: en/ai.ts, confrontada com fr/ai.ts. Palavras da app: apps/web/messages/pt.json (português europeu). */
export const ai: AiText = {
  page: {
    slug: 'ai-assistant',
    metaTitle: 'Assistente de IA: trabalhe no Traviosoft a partir do Claude, do ChatGPT ou do Mistral',
    metaDescription:
      'Ligue ao Traviosoft o assistente de IA que já usa. Pergunte o que tem pendente, peça um orçamento a partir do seu catálogo, registe uma reserva ou um pagamento e aprove cada alteração. Incluído nos dois planos.',
    name: 'Assistente de IA',
    menuLine: 'Trabalhar no Traviosoft a partir do Claude ou do ChatGPT',
    step: '5 de 5',
    heroTitle: 'Peça ao Claude, ao ChatGPT ou ao Mistral. Ele trabalha no seu Traviosoft.',
    heroLead:
      'Com os seus clientes, preços e viagens reais, e com os direitos que lhe der. Antes de cada alteração, pede-lhe autorização.',
    heroVisual: 'assistant',
    chapters: [
      {
        id: 'approve',
        kicker: 'Aprovação',
        title: 'Aprova cada alteração',
        lead: 'O assistente consulta sozinho e pergunta-lhe antes de alterar seja o que for.',
        visual: 'confirm',
        features: [
          { title: 'Uma pergunta antes de cada alteração', body: ['Antes de cada alteração, o Claude, o ChatGPT e o Mistral pedem-lhe autorização na conversa. Nada muda até que o permita.'] },
          { title: 'Eliminações aprovadas no Traviosoft', body: ['Se permitir eliminar, cada eliminação aguarda no Traviosoft até a aprovar lá, e fica registada em seu nome.'] },
          { title: 'Cada alteração no histórico', body: ['O que o assistente faz aparece no histórico de atividade do Traviosoft, em nome da pessoa que o ligou.'] }
        ]
      },
      {
        id: 'rights',
        kicker: 'Acesso',
        title: 'Os direitos da pessoa',
        lead: 'O assistente pode fazer o que a pessoa que o ligou pode fazer no Traviosoft, e nada mais.',
        visual: 'team',
        features: [
          { title: 'Quem pode ligar', body: ['O administrador escolhe quem pode ligar um assistente de IA, e se as pessoas que chegarem mais tarde o podem fazer.'] },
          { title: 'Consultar ou alterar', body: ['O administrador decide se os assistentes podem fazer alterações ou apenas consultar.'] },
          { title: 'Custos e margens', body: ['Os preços de compra e as margens só chegam ao assistente das pessoas que os veem no Traviosoft.'] },
          { title: 'Desligar a qualquer momento', body: ['Desligue a partir da app de IA, ou um administrador termina qualquer ligação a partir do Traviosoft, de imediato.'] }
        ]
      }
    ],
    faq: [
      { q: 'Que apps de IA posso usar?', a: ['Qualquer app de IA que permita adicionar um conector MCP, o padrão aberto com que as apps de IA se ligam a outro software. O Claude, o ChatGPT e o Mistral pedem-lhe autorização na conversa antes de cada alteração, e o Traviosoft faz a alteração assim que a permitir. Com outra app, o Traviosoft não pode ter a certeza de que ela lhe pergunta antes, por isso as suas alterações aguardam a sua aprovação no Traviosoft, em Revisão de alterações.'] },
      { q: 'Como o ligo, e tem custo extra?', a: ['Leva poucos minutos. Na sua app de IA, adicione o endereço Traviosoft da sua agência como conector, inicie sessão e escolha se o assistente pode apenas consultar ou também fazer alterações. Está incluído no Classic e no Premium, para cada pessoa que o administrador autorizar.'] },
      { q: 'O assistente vê todos os nossos dados?', a: ['Vê exatamente o que a pessoa que o ligou pode ver no Traviosoft, de acordo com a sua função: os mesmos clientes, viagens e equipas, e os preços de compra e as margens só se a sua função os mostrar. Se a função mudar, o que o assistente vê muda também.'] },
      { q: 'Pode escrever a um fornecedor?', a: ['Sim, e pede-lhe autorização primeiro. Depois de o permitir, envia ao fornecedor um pedido de reserva ou de disponibilidade. Os orçamentos e as faturas chegam aos clientes a partir do Traviosoft.'] },
      { q: 'Pode emitir faturas?', a: ['Pode consultar as faturas, acompanhar o que está pago e corrigir um rascunho. Mas uma fatura é sempre emitida por uma pessoa, no Traviosoft: o assistente não pode emitir nem anular uma fatura, porque o seu número é um registo legal.'] },
      { q: 'Também há um assistente dentro do Traviosoft?', a: ['Sim, como opção nos dois planos, com limites de utilização. Trabalha na própria app, sem ter de ligar outra app de IA.'] }
    ]
  },
  sim: {
    note: 'Experimente com uma agência de exemplo: escolha uma mensagem. As respostas são uma simulação, sem IA por trás.',
    chatTitle: 'O seu assistente de IA', connected: 'Traviosoft ligado',
    greeting: 'O que posso fazer hoje pela sua agência?',
    chatTab: 'Chat', changed: 'Há alterações no Traviosoft',
    allow: 'Permitir', deny: 'Recusar', allowedTag: 'Permitido', deniedTag: 'Recusado',
    deniedReply: 'Entendido. Nada mudou no Traviosoft.',
    restart: 'Recomeçar', working: 'A trabalhar no Traviosoft', thinking: 'A pensar',
    nav: { dashboard: 'Painel', quotes: 'Orçamentos', bookings: 'Reservas', payments: 'Pagamentos', review: 'Revisão de alterações' },
    ui: {
      draft: 'Rascunho', sent: 'Enviado', requested: 'Pedido', confirmed: 'Confirmado', toBook: 'Por reservar', late: 'Em atraso', paid: 'Pago', due: 'A pagar',
      total: 'Total', margin: 'A sua margem', schedule: 'Plano de pagamentos', deposit: 'Adiantamento', balance: 'Saldo',
      send: 'Enviar', approve: 'Aprovar', reject: 'Rejeitar', rejected: 'Rejeitado. O orçamento fica como está.', reviewEmpty: 'Todas as alterações revistas', trashed: 'Aprovado. O orçamento está na reciclagem.', reference: 'Ref.',
      newRequests: 'Pedidos novos', toFollow: 'Orçamentos por acompanhar', latePayments: 'Pagamentos em atraso', bookingsLeft: 'Reservas por concluir'
    },
    names: {
      irisTrip: 'Andaluzia, 8 dias', bianchiTrip: 'Sevilha e Granada, 6 dias', madridTrip: 'Madrid e Toledo, 4 dias',
      lindTrip: 'Maiorca, 5 dias', weberTrip: 'Lisboa, 4 dias',
      olabarriPay: 'Saldo, fim de semana em Córdova', martinPay: 'Adiantamento, Provença, 7 dias',
      hotelSeville: 'Hotel em Sevilha', guideCordoba: 'Guia em Córdova', hotelGranada: 'Hotel em Granada'
    },
    steps: {
      today: {
        say: 'O que tenho pendente hoje?',
        tools: ['A ler o seu painel'],
        reply: 'Tem quatro coisas pendentes hoje:',
        rows: [
          { t: 'Um pedido novo por responder', s: 'Iris & Noah, Andaluzia, 8 dias a partir de 3 de maio' },
          { t: 'Um orçamento por acompanhar', s: 'Famiglia Bianchi, enviado há 9 dias' },
          { t: 'Dois pagamentos em atraso', s: '{2387} no total' },
          { t: 'Duas reservas por concluir', s: 'A viagem da Famiglia Bianchi a Sevilha e Granada' }
        ],
        after: 'Por onde quer começar?'
      },
      late: {
        say: 'Mostra os pagamentos em atraso',
        tools: ['A procurar os pagamentos em atraso'],
        reply: 'Há dois pagamentos em atraso:',
        rows: [
          { t: 'Familia Olabarri, {1427}', s: 'Saldo do fim de semana em Córdova, 5 dias de atraso' },
          { t: 'Sophie Martin, {960}', s: 'Adiantamento da Provença, 3 dias de atraso' }
        ],
        after: 'Se algum deles já pagou, diga-me e eu registo.'
      },
      payOlabarri: {
        say: 'A Olabarri pagou por transferência',
        reply: 'Registo-o no fim de semana em Córdova.',
        ask: { action: 'Registar um pagamento', rows: [{ t: 'Cliente', s: 'Familia Olabarri' }, { t: 'Valor', s: '{1427}' }, { t: 'Método', s: 'Transferência bancária, hoje' }] },
        done: 'Registado. A Familia Olabarri pagou tudo, e falta um pagamento em atraso: o adiantamento de Sophie Martin.'
      },
      quote: { say: 'Cria um orçamento', reply: 'Claro. Para quem é?' },
      quoteIris: {
        say: 'Para o pedido de Iris & Noah',
        tools: ['A ler o pedido de Iris & Noah', 'A procurar no seu catálogo', 'A verificar os preços de 3 a 10 de maio'],
        reply: 'Iris & Noah pedem 8 dias na Andaluzia a partir de 3 de maio, para dois. Eis o que eu poria, do seu catálogo, aos preços dessas datas:',
        rows: [
          { t: 'Transfer do aeroporto, Sevilha', s: '3 de maio' },
          { t: 'Hotel no centro histórico de Sevilha, 4 noites', s: 'De 3 a 7 de maio' },
          { t: 'Guia privado em Córdova, meio dia', s: '5 de maio' },
          { t: 'Carro de aluguer, 4 dias', s: 'De 7 a 10 de maio' },
          { t: 'Hotel em Granada, 3 noites', s: 'De 7 a 10 de maio' },
          { t: 'Bilhetes para a Alhambra com guia', s: '8 de maio' }
        ],
        after: 'Total **{2660}** para dois, com a sua margem de {450}.',
        ask: { action: 'Criar um orçamento', rows: [{ t: 'Cliente', s: 'Iris & Noah' }, { t: 'Viagem', s: 'Andaluzia, de 3 a 10 de maio' }, { t: 'Total', s: '{2660}' }] },
        done: 'O orçamento está no Traviosoft como rascunho, e abri-o para si. Quer definir as condições de pagamento, ou enviá-lo?'
      },
      madridBianchi: {
        say: 'Para a Famiglia Bianchi, Madrid',
        tools: ['A ler o pedido da Famiglia Bianchi para Madrid', 'A procurar no seu catálogo', 'A verificar os preços de 12 a 15 de junho'],
        reply: 'A Famiglia Bianchi pede 4 dias em Madrid a partir de 12 de junho, para quatro. Eis o que eu poria, do seu catálogo, aos preços dessas datas:',
        rows: [
          { t: 'Transfers do aeroporto, ida e volta', s: '12 e 15 de junho' },
          { t: 'Hotel no centro de Madrid, 3 noites, 2 quartos', s: 'De 12 a 15 de junho' },
          { t: 'Museu do Prado com guia', s: '13 de junho' },
          { t: 'Excursão de um dia a Toledo com guia', s: '14 de junho' }
        ],
        after: 'Total **{2100}** para quatro, com a sua margem de {380}.',
        ask: { action: 'Criar um orçamento', rows: [{ t: 'Cliente', s: 'Famiglia Bianchi' }, { t: 'Viagem', s: 'Madrid e Toledo, de 12 a 15 de junho' }, { t: 'Total', s: '{2100}' }] },
        done: 'O orçamento está no Traviosoft como rascunho, e abri-o para si. Quer definir as condições de pagamento, ou enviá-lo?'
      },
      terms: { say: 'Define as condições de pagamento', reply: 'Que condições quer?' },
      terms30: {
        say: '30% agora, o resto 30 dias antes',
        ask: { action: 'Definir o plano de pagamentos', rows: [{ t: 'Adiantamento, 30%', s: '{dep}, hoje' }, { t: 'Saldo', s: '{bal}, a {due}' }] },
        done: 'Feito, o plano de pagamentos está no orçamento. Quer enviá-lo já?'
      },
      terms50: {
        say: 'Metade agora, metade 30 dias antes',
        ask: { action: 'Definir o plano de pagamentos', rows: [{ t: 'Adiantamento, 50%', s: '{dep}, hoje' }, { t: 'Saldo', s: '{bal}, a {due}' }] },
        done: 'Feito, o plano de pagamentos está no orçamento. Quer enviá-lo já?'
      },
      send: {
        say: 'Envia-o',
        reply: 'Os orçamentos chegam aos seus clientes a partir do Traviosoft, para que veja exatamente o que recebem. Abri-o para si: carregue em Enviar quando estiver como quer.'
      },
      bookings: {
        say: 'Vê as últimas reservas',
        tools: ['A procurar as reservas em curso'],
        reply: 'Eis o ponto da viagem da Famiglia Bianchi a Sevilha e Granada, de 10 a 15 de maio:',
        rows: [
          { t: 'Hotel em Sevilha', s: 'Pedido há 4 dias, ainda sem resposta' },
          { t: 'Guia em Córdova', s: 'Confirmado' },
          { t: 'Hotel em Granada', s: 'Ainda por reservar' }
        ],
        after: 'Há novidades de Sevilha, ou peço ao hotel de Granada?'
      },
      confirmSeville: {
        say: 'Sevilha confirmado, ref. 48213',
        ask: { action: 'Atualizar uma reserva', rows: [{ t: 'Reserva', s: 'Hotel em Sevilha, de 10 a 13 de maio' }, { t: 'Estado', s: 'Confirmado' }, { t: 'Referência', s: '48213' }] },
        done: 'Feito. O hotel em Sevilha está confirmado, com a referência 48213.'
      },
      requestGranada: {
        say: 'Reserva o hotel de Granada',
        tools: ['A procurar o hotel nos seus fornecedores'],
        reply: 'Envio o pedido de reserva ao hotel por email, a partir do Traviosoft.',
        ask: { action: 'Enviar um pedido de reserva', rows: [{ t: 'Para', s: 'Hotel em Granada' }, { t: 'Datas', s: 'De 13 a 15 de maio, 2 noites' }, { t: 'Quartos', s: '2 duplos, Famiglia Bianchi' }] },
        done: 'Enviado. Diga-me quando o hotel responder, e eu registo a confirmação.'
      },
      remove: { say: 'Elimina um orçamento', tools: ['A procurar os seus orçamentos em rascunho'], reply: 'Qual? Estes dois ainda estão em rascunho.' },
      delLind: {
        say: 'Anna Lind, Maiorca',
        ask: { action: 'Eliminar um orçamento', rows: [{ t: 'Orçamento', s: 'Anna Lind, Maiorca, 5 dias' }, { t: 'Total', s: '{1980}' }, { t: 'Estado', s: 'Rascunho' }] },
        done: 'A eliminação aguarda agora a sua aprovação no Traviosoft, em Revisão de alterações. Nada é eliminado até a aprovar lá.'
      },
      delWeber: {
        say: 'Familie Weber, Lisboa',
        ask: { action: 'Eliminar um orçamento', rows: [{ t: 'Orçamento', s: 'Familie Weber, Lisboa, 4 dias' }, { t: 'Total', s: '{1450}' }, { t: 'Estado', s: 'Rascunho' }] },
        done: 'A eliminação aguarda agora a sua aprovação no Traviosoft, em Revisão de alterações. Nada é eliminado até a aprovar lá.'
      }
    }
  }
};
