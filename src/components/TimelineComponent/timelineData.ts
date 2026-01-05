// timelineData.ts

export interface TimelineItem {
  title: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText: string[];
}

export const timelineItems: TimelineItem[] = [
  {
    title: "Preparação do Create",
    cardTitle: "PREPARANDO",
    cardSubtitle: "Reunião com foco em duas ideias principais",
    cardDetailedText: [
      "• Foco da palestra principal // Destacar Avivamento na Tecnologia",
      "• Preparação para o Create",
      "Detalhamento da Preparação do Create:",
      "- Destacar um Projeto Bem-Sucedido",
      "- Destacar o Playbook da FaithTech",
      "- Apresentação de Projetos selecionados do evento anterior",
      "- Destaque do Framework Redentivo (preparando o Roadmap do Create)",
    ],
  },
  {
    title: "Semana 1",
    cardTitle: "DESCOBRIR",
    cardSubtitle: "Início do Ciclo Create",
    cardDetailedText: ["Ciclo 4D | Descobrir"],
  },
  {
    title: "Semana 2",
    cardTitle: "DISCERNIR",
    cardSubtitle: "Continuação do Ciclo Create",
    cardDetailedText: ["Ciclo 4D | Discernir"],
  },
  {
    title: "Semana 3",
    cardTitle: "DESENVOLVER",
    cardSubtitle: "Continuação do Ciclo Create",
    cardDetailedText: ["Ciclo 4D | Desenvolver"],
  },
  {
    title: "Semanas 4 - 11",
    cardTitle: "PONTOS DE ENCONTRO CREATE",
    cardSubtitle: "Pontos de encontro semanais do Create",
    cardDetailedText: [
      "(presencialmente ou via ZOOM) para o ciclo de desenvolvimento de projetos",
    ],
  },
  {
    title: "Semana 12",
    cardTitle: "DEMONSTRAR",
    cardSubtitle: "Reunião do Ciclo Create",
    cardDetailedText: [
      "Ciclo 4D | Demonstrar",
      "Destacar e celebrar o Projeto, a Equipe do Projeto e oferecer sessões paralelas:",
      "- Debrief da Equipe do Projeto / Próximos Passos",
      "- O que é FaithTech & Como se Conectar",
      "- Ideias para Projetos Futuros",
    ],
  },
];
