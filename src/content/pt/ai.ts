import type { AiText } from '../types';

/** O assistente de IA. Fonte: en/ai.ts, confrontada com fr/ai.ts. Palavras da app: apps/web/messages/pt.json (português europeu). */
export const ai: AiText = {
  page: {
    slug: 'ai-assistant',
    metaTitle: 'Assistente de IA: trabalhe no Traviosoft a partir do Claude, do ChatGPT ou do Mistral | Traviosoft',
    metaDescription:
      'Ligue ao Traviosoft o assistente de IA que já usa. Pergunte o que tem pendente, peça um orçamento a partir do seu catálogo, registe uma reserva ou um pagamento e aprove cada alteração. Incluído nos dois planos.',
    name: 'Assistente de IA',
    menuLine: 'Trabalhar no Traviosoft a partir do Claude ou do ChatGPT',
    step: '5 de 5',
    heroTitle: 'Trabalhe no Traviosoft a partir do seu assistente de IA',
    heroLead:
      'Ligue o Claude, o ChatGPT ou o Mistral ao Traviosoft da sua agência. Escreva o que precisa numa frase: ele trabalha com os seus clientes, preços e viagens reais, com os direitos que lhe der.',
    heroVisual: 'assistant',
    chapters: [
      {
        id: 'ask',
        kicker: 'Perguntar',
        title: 'Pergunte o que tem pendente',
        lead: 'O seu assistente consulta o seu painel do Traviosoft e diz-lhe o que o espera hoje.',
        visual: 'dashboard',
        features: [
          { title: 'O seu dia numa pergunta', body: ['Pergunte «O que tenho pendente hoje?» e receba os pedidos novos por responder, os orçamentos por acompanhar e os pagamentos em atraso, cada um com uma ligação que o abre no Traviosoft.'] },
          { title: 'As suas viagens e o seu dinheiro', body: ['Que reservas ainda aguardam o fornecedor? Quanto lhe devem os clientes? As respostas vêm dos seus orçamentos, reservas e pagamentos.'] },
          { title: 'Encontrar tudo', body: ['Procure um cliente, um orçamento, um fornecedor ou uma viagem pelo nome, referência, email ou telefone.'] }
        ]
      },
      {
        id: 'work',
        kicker: 'Fazer',
        title: 'Peça que o trabalho seja feito',
        lead: 'Escreva o que precisa numa frase. O assistente faz isso no Traviosoft, tal como o faria na app.',
        visual: 'quote',
        features: [
          { title: 'Orçamentos a partir do seu catálogo', body: ['Peça um orçamento para a viagem de um cliente. Os serviços vêm do seu catálogo, aos preços das datas da viagem e com a sua margem, como se tivesse sido o próprio a fazer o orçamento.'] },
          { title: 'Reservas', body: ['Registe a confirmação de um fornecedor e a respetiva referência, marque uma tarefa de reserva ou peça disponibilidade a um fornecedor.'] },
          { title: 'Clientes e pagamentos', body: ['Adicione um cliente novo, defina as datas de pagamento de um orçamento ou registe um pagamento recebido.'] }
        ]
      },
      {
        id: 'approve',
        kicker: 'Aprovação',
        title: 'Aprova cada alteração',
        lead: 'O assistente consulta sozinho e pergunta-lhe antes de alterar seja o que for.',
        visual: 'confirm',
        features: [
          { title: 'Uma pergunta antes de cada alteração', body: ['O Claude, o ChatGPT e o Mistral perguntam-lhe na conversa antes de cada alteração. A alteração é feita assim que a permitir.'] },
          { title: 'Eliminações aprovadas no Traviosoft', body: ['Se permitir eliminar, cada eliminação aguarda no Traviosoft até a aprovar lá, e fica registada em seu nome.'] },
          { title: 'Outras apps de IA', body: ['As alterações de qualquer outra app de IA aguardam a sua aprovação no Traviosoft.'] },
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
      },
      {
        id: 'connect',
        kicker: 'Ligação',
        title: 'Ligar o seu assistente',
        lead: 'Adicione o Traviosoft como conector na sua app de IA, inicie sessão e escolha o que ele pode fazer.',
        visual: 'connections',
        features: [
          { title: 'Claude, ChatGPT e Mistral', body: ['Adicione o endereço do Traviosoft da sua agência como conector. A sua app de IA leva-o depois ao Traviosoft para iniciar sessão.'] },
          { title: 'Só leitura, ou ler e fazer alterações', body: ['Ao iniciar sessão, escolhe o que o seu assistente pode fazer, e se também pode eliminar.'] },
          { title: 'Incluído nos dois planos', body: ['Ligar o seu assistente de IA faz parte do Classic e do Premium, para cada pessoa que o administrador autorizar.'] }
        ]
      }
    ],
    faq: [
      { q: 'Que apps de IA posso usar?', a: ['O Claude, o ChatGPT e o Mistral, numa versão da app que permita adicionar os seus próprios conectores. Outras apps de IA que podem adicionar conectores também funcionam, e as suas alterações aguardam a sua aprovação no Traviosoft.'] },
      { q: 'O assistente vê todos os nossos dados?', a: ['Vê o que vê no Traviosoft a pessoa que o ligou.'] },
      { q: 'Pode escrever a um fornecedor?', a: ['Sim. Pode enviar um pedido de reserva ou pedir disponibilidade a um fornecedor, depois de o permitir. Os orçamentos e as faturas chegam aos clientes a partir do Traviosoft.'] },
      { q: 'Pode emitir faturas?', a: ['As faturas são emitidas no Traviosoft, por uma pessoa. O assistente pode consultá-las, acompanhar o que está pago e corrigir um rascunho.'] },
      { q: 'Também há um assistente dentro do Traviosoft?', a: ['Sim, como opção nos dois planos, com limites de utilização. Trabalha na própria app e pede a sua aprovação antes de cada alteração.'] }
    ]
  },
  home: {
    title: 'Trabalhe no Traviosoft a partir do seu assistente de IA',
    body: 'Ligue o Claude, o ChatGPT ou o Mistral. Pergunte o que tem pendente hoje, peça um orçamento a partir do seu catálogo ou registe a confirmação de um fornecedor. Cada alteração é feita assim que a permitir.',
    link: 'Ver o assistente de IA'
  },
  hero: {
    ask: 'Quanto nos devem os clientes?',
    answer: '{owed} em orçamentos aceites, dos quais {overdue} já em atraso.'
  },
  sim: {
    title: 'Experimente com uma agência de exemplo',
    lead: 'Envie uma das mensagens abaixo. As respostas são uma simulação com dados de exemplo, e o lado do Traviosoft mostra o que muda.',
    chatTitle: 'O seu assistente de IA', chatSub: 'Ligado ao Traviosoft',
    appTitle: 'Traviosoft', appSub: 'A sua agência',
    pick: 'Enviar uma mensagem', restart: 'Recomeçar', allow: 'Permitir', deny: 'Recusar',
    allowedTag: 'Permitido', deniedTag: 'Recusado',
    denied: 'Entendido. O Traviosoft fica como está.', thinking: 'A trabalhar no Traviosoft',
    quotes: 'Orçamentos', bookings: 'Reservas · Famiglia Bianchi', review: 'Revisão de alterações', reviewEmpty: 'Todas as alterações revistas', approve: 'Aprovar',
    draft: 'Rascunho', sent: 'Enviado', requested: 'Pedido', confirmed: 'Confirmado',
    bianchiTrip: 'Sevilha e Granada, 6 dias', olabarriTrip: 'Um fim de semana em Córdova', irisTrip: 'Andaluzia, 8 dias',
    hotelSeville: 'Hotel em Sevilha', guideCordoba: 'Guia em Córdova', hotelGranada: 'Hotel em Granada',
    today: {
      prompt: 'O que tenho pendente hoje?',
      answer: 'Tem três coisas pendentes:',
      rows: [
        { t: 'Um pedido novo por responder', s: 'Iris & Noah, Andaluzia, 8 dias' },
        { t: 'Um orçamento por acompanhar', s: 'Famiglia Bianchi, enviado há 9 dias' },
        { t: 'Uma reserva que aguarda o fornecedor', s: 'Hotel em Sevilha, Famiglia Bianchi' }
      ]
    },
    quote: {
      prompt: 'Prepara um orçamento para Iris & Noah, Andaluzia, 8 dias, a partir de 3 de maio',
      askTitle: 'Criar um orçamento no Traviosoft?',
      askSub: 'Iris & Noah · Andaluzia, 8 dias · 6 serviços do seu catálogo',
      done: 'O orçamento está no Traviosoft como rascunho: {total}, com a sua margem de {margin}.'
    },
    booking: {
      prompt: 'O hotel de Sevilha confirmou a reserva Bianchi, referência 48213',
      askTitle: 'Atualizar uma reserva no Traviosoft?',
      askSub: 'Hotel em Sevilha: confirmado, referência 48213',
      done: 'Feito. O hotel em Sevilha está confirmado, com a referência 48213.'
    },
    remove: {
      prompt: 'Elimina o orçamento Olabarri, escolheram outra data',
      askTitle: 'Eliminar um orçamento no Traviosoft?',
      askSub: 'Familia Olabarri · Um fim de semana em Córdova',
      queued: 'A eliminação aguarda agora a sua aprovação no Traviosoft, em Revisão de alterações.',
      reviewItem: 'Eliminar o orçamento de Familia Olabarri',
      approved: 'Aprovado no Traviosoft. O orçamento está na reciclagem.'
    }
  }
};
