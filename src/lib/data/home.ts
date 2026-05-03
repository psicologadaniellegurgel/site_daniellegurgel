import type { FAQItem, FeatureCard } from "$lib/content/types";

export const homeHero = {
    title: "Danielle Gurgel, psicóloga em Higienópolis",
    intro:
        "Um espaço seguro, ético e acolhedor para falar de luto, relações difíceis, sobrecarga emocional e mudanças de vida, sem fórmulas prontas.",
    badges: [
        "CRP 06/148054",
        "Presencial na Av. Angélica",
        "Atendimento online",
        "Perto do metrô Paulista-Pernambucanas",
    ],
};

export const homeHelpThemes: FeatureCard[] = [
    {
        title: "Luto e perdas",
        text: "Para perdas concretas e também para despedidas que não cabem em ritual nenhum: fim de relação, mudança de ciclo, distância e ausência.",
        href: "/experiencia/luto-e-perdas",
        label: "Explorar luto e perdas",
    },
    {
        title: "Relacionamentos e rupturas",
        text: "Quando um vínculo machuca, confunde ou continua ecoando por dentro mesmo depois que a história mudou por fora.",
        href: "/experiencia/relacionamentos-e-rupturas",
        label: "Explorar este tema",
    },
    {
        title: "Ansiedade e sobrecarga",
        text: "Para quem sente o corpo acelerado, a rotina espremida e a sensação de que está sempre respondendo mais do que consegue existir.",
        href: "/experiencia/ansiedade-e-sobrecarga",
        label: "Entender melhor",
    },
    {
        title: "Transições de vida",
        text: "Mudanças de trabalho, de cidade, de relação ou de fase. Nem toda virada vem com clareza.",
        href: "/experiencia/transicoes-de-vida",
        label: "Ler sobre transições",
    },
    {
        title: "Autoestima e identidade",
        text: "Quando você continua funcionando, mas sente que foi se afastando de si para sustentar tudo ao redor.",
        href: "/experiencia/autoestima-e-identidade",
        label: "Explorar identidade",
    },
];

export const homeProofPoints: FeatureCard[] = [
    {
        title: "Registro e atuação clínica",
        text: "CRP 06/148054, atendimento presencial em Higienópolis e acompanhamento online com organização ética do processo.",
        href: "/sobre",
        label: "Ver trajetória profissional",
    },
    {
        title: "Formação de base e aprofundamento",
        text: "Psicologia pela UFES, formação clínica na EncontroACP e estudo dedicado ao luto gestacional, perinatal e neonatal.",
        href: "/sobre",
        label: "Conhecer formação e atuação",
    },
    {
        title: "Experiência além do consultório",
        text: "Cofacilita o projeto Desafios da Profissão, em parceria com a Arranjos Psicologia, e participa de grupos e contextos de formação na ACP.",
        href: "/sobre",
        label: "Ver projetos e participação profissional",
    },
];

export const homeServicesPrimary: FeatureCard[] = [
    {
        title: "Psicoterapia presencial",
        text: "Atendimento na Av. Angélica, em Higienópolis, para quem busca um espaço físico de pausa no meio da cidade.",
        href: "/servicos/psicoterapia-presencial-higienopolis",
        label: "Como funciona presencialmente",
    },
    {
        title: "Psicoterapia online",
        text: "Uma alternativa consistente para quem prefere a própria casa, mora longe ou precisa de mais flexibilidade.",
        href: "/servicos/psicoterapia-online",
        label: "Entender o online",
    },
];

export const homeLocationHighlights: string[] = [
    "Consultório na Av. Angélica, 1996, sala 501.",
    "Fácil acesso a partir do metrô Paulista-Pernambucanas e da região da Paulista.",
    "Estacionamento pago no local e nos arredores.",
    "Espaço acolhedor, com banheiro acessível e ambiente seguro para pessoas LGBTQIA+.",
];

export const homeFaqs: FAQItem[] = [
    {
        question: "Como costuma ser a primeira sessão?",
        answer:
            "A primeira sessão funciona como um encontro inicial. Você não precisa chegar com tudo organizado. A ideia é entender o que está te trazendo e se o jeito de trabalhar faz sentido para você.",
    },
    {
        question: "Atendimento presencial e online funcionam para as mesmas questões?",
        answer:
            "Em muitos casos, sim. A escolha costuma passar mais por rotina, deslocamento, privacidade e pela forma como você se sente mais à vontade do que por uma hierarquia entre os formatos.",
    },
    {
        question: "A terapia aqui é voltada só para mulheres?",
        answer:
            "Não. O site conversa principalmente com mulheres porque muitos temas do consultório passam por essa experiência, mas o atendimento não é exclusivo para mulheres. O mais importante é se esse jeito de escuta faz sentido para você.",
    },
    {
        question: "Atende por convênio ou oferece reembolso?",
        answer:
            "O atendimento é particular, mas em muitos casos é possível solicitar reembolso ao convênio ou ao plano de saúde, conforme as regras do seu plano. No contato inicial, você pode pedir as orientações necessárias para esse processo.",
    },
];
