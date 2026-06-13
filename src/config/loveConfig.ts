export interface Milestone {
  title: string;
  date: string;
  description: string;
}

export interface PhotoConfig {
  src: string;
  alt: string;
}

export const loveConfig = {
  yourName: "Mateus",
  partnerName: "Juliana",

  relationshipStart: "2026-04-27T11:29:00-03:00",
  valentineDate: "2026-06-12",

  heroHeadline: "Mateus e Juliana",
  heroSubtext:
    "Nosso primeiro Dia dos Namorados com o coração de recém-casados. Uma página para lembrar que o nosso amor também mora nos detalhes simples: uma foto, um sorriso, uma mão dada e a vontade de continuar escolhendo um ao outro todos os dias.",

  coupleHighlights: [
    { label: "Nós dois", value: "Mateus + Juliana" },
    { label: "Capítulo", value: "Recém-casados" },
    { label: "Celebração", value: "Dia dos Namorados" },
  ],

  counterTitle: "Tempo desde o nosso casamento",
  counterSubtitle: "Desde 27 de abril de 2026, às 11:29 da manhã, contando cada segundo do nosso amor casado.",
  counterMessage:
    "...e a contagem continua. Que venham muitos dias, viagens, risadas e planos realizados juntos.",

  timelineTitle: "Nossa história em fotos",
  timelineSubtitle: "Alguns pedacinhos do caminho que nos trouxe até aqui.",

  photoCount: 5,
  photos: [
    {
      src: "/photos/mateus-juliana-1.png",
      alt: "Mateus e Juliana sorrindo juntos em frente a um painel colorido de balões.",
    },
    {
      src: "/photos/mateus-juliana-2.png",
      alt: "Juliana e Mateus de mãos dadas em um corredor.",
    },
    {
      src: "/photos/mateus-juliana-3.png",
      alt: "Mateus e Juliana sorrindo em um restaurante.",
    },
    {
      src: "/photos/mateus-juliana-4.png",
      alt: "Selfie de Mateus e Juliana ao ar livre.",
    },
    {
      src: "/photos/mateus-juliana-5.png",
      alt: "Selfie de Mateus e Juliana em um dia ensolarado.",
    },
  ] satisfies PhotoConfig[],

  milestones: [
    {
      title: "O jeito leve da gente",
      date: "Nossa história",
      description:
        "Entre sorrisos, brincadeiras e momentos simples, a gente foi construindo um amor com cara de casa.",
    },
    {
      title: "Mãos dadas pelo caminho",
      date: "Escolha diária",
      description:
        "Juliana, caminhar com você deixa qualquer dia mais bonito. Com você, até o cotidiano vira lembrança boa.",
    },
    {
      title: "Companhia que aquece",
      date: "Nossos encontros",
      description:
        "Cada passeio, cada conversa e cada foto guardam um pouco da certeza de que a vida fica melhor quando estamos juntos.",
    },
    {
      title: "Um amor que virou familia",
      date: "Recém-casados",
      description:
        "Agora somos marido e esposa, começando uma fase nova com o mesmo carinho que nos trouxe até aqui.",
    },
    {
      title: "Para sempre, um dia de cada vez",
      date: "Dia dos Namorados",
      description:
        "Mateus e Juliana: que o nosso casamento siga sendo feito de cuidado, parceria, risadas e muito amor.",
    },
  ] satisfies Milestone[],

  yourEmail: "",
  emailSubject: "Minha resposta para o Dia dos Namorados",
  emailBody:
    "Sim, meu amor. Claro que eu topo viver mais esse momento com você!\n\nCom amor,\n",

  inviteTitle: "Juliana, aceita viver esse Dia dos Namorados comigo?",
  inviteMessage:
    "Hoje eu queria te lembrar, de um jeito diferente, que casar com você foi uma das escolhas mais bonitas da minha vida. Vamos celebrar o nosso amor, o nosso começo como casal casado e tudo que ainda vamos construir.",
  inviteDate: "12 de junho de 2026",
  inviteTime: "20:00",
  inviteLocation: "Um lugar especial para nós dois",
  invitePhoto: "/photos/mateus-juliana-5.png",
};

export default loveConfig;
