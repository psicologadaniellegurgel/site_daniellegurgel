export interface ReviewItem {
    name: string;
    context: string;
    excerpt: string;
    source: string;
}

export const googleReviews: ReviewItem[] = [
    {
        name: "Fe Grandi",
        context: "Paciente presencial em Higienópolis",
        excerpt:
            "O atendimento é extremamente acolhedor e respeitoso. Me senti segura desde o início para falar sobre questões difíceis, e o espaço em Higienópolis facilita muito a rotina.",
        source: "Avaliação no Google",
    },
    {
        name: "Renata Fioretti",
        context: "Paciente em acompanhamento",
        excerpt:
            "Já fiz terapia antes, mas nunca me senti tão acolhida e ouvida. A presença e a empatia da Danielle fazem diferença logo no encontro.",
        source: "Avaliação no Google",
    },
    {
        name: "Laura Canjani",
        context: "Paciente presencial",
        excerpt:
            "As conversas ajudam muito a organizar a cabeça e entender melhor o que estou vivendo. O lugar é tranquilo, perto do metrô, e isso deixa tudo mais possível.",
        source: "Avaliação no Google",
    },
];
