// ============================================================================
// Configuracao do amor - personalize este arquivo para sua pessoa especial
// ============================================================================

/**
 * IMPORTANTE: este arquivo e apenas um exemplo da estrutura esperada.
 *
 * Para usar no projeto:
 * 1. Copie este arquivo e renomeie para: loveConfig.ts
 * 2. Personalize os valores com as informacoes do casal
 * 3. Ajuste a quantidade e os caminhos das fotos em /public/photos
 */

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
  yourName: "Seu nome",
  partnerName: "Meu amor",

  relationshipStart: "2026-06-12T00:00:00-03:00",
  valentineDate: "2026-06-12",

  heroHeadline: "Nosso Dia dos Namorados",
  heroSubtext:
    "Uma pagina feita para guardar nossas lembrancas favoritas e celebrar tudo o que estamos construindo juntos.",

  coupleHighlights: [
    { label: "Nos dois", value: "Seu nome + Meu amor" },
    { label: "Capitulo", value: "Nossa historia" },
    { label: "Celebracao", value: "Dia dos Namorados" },
  ],

  counterTitle: "Tempo desse capitulo",
  counterSubtitle: "Contando cada segundo desse momento especial.",
  counterMessage: "...e a contagem continua, com muitas memorias bonitas pela frente.",

  timelineTitle: "Nossa historia em fotos",
  timelineSubtitle: "Alguns momentos que fizeram nosso caminho ficar mais bonito.",

  photoCount: 3,
  photos: [
    { src: "/photos/photo_1.jpg", alt: "Primeira foto do casal." },
    { src: "/photos/photo_2.jpg", alt: "Segunda foto do casal." },
    { src: "/photos/photo_3.jpg", alt: "Terceira foto do casal." },
  ] satisfies PhotoConfig[],

  milestones: [
    {
      title: "Primeira lembranca",
      date: "Nossa historia",
      description: "O comeco de uma colecao de momentos que guardamos com carinho.",
    },
    {
      title: "Um dia especial",
      date: "Nosso caminho",
      description: "Mais uma lembranca que mostra como e bom viver a vida ao lado de quem amamos.",
    },
    {
      title: "Para sempre, um dia de cada vez",
      date: "Hoje",
      description: "Que venham muitos outros capitulos, sempre com amor, cuidado e parceria.",
    },
  ] satisfies Milestone[],

  yourEmail: "",
  emailSubject: "Minha resposta para o Dia dos Namorados",
  emailBody: "Sim, meu amor. Claro que eu topo!\n\nCom amor,\n",

  inviteTitle: "Aceita viver esse Dia dos Namorados comigo?",
  inviteMessage: "Vamos celebrar nosso amor e criar mais uma lembranca bonita juntos.",
  inviteDate: "12 de junho de 2026",
  inviteTime: "20:00",
  inviteLocation: "Um lugar especial para nos dois",
  invitePhoto: "/photos/photo_1.jpg",
};

export default loveConfig;
