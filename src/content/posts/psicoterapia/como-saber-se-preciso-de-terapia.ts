import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "como-saber-se-preciso-de-terapia",
    categorySlug: "psicoterapia",
    title: "Como saber se preciso de terapia: sinais, dúvidas e o que esperar do primeiro passo",
    description:
        "Não é preciso estar em crise para procurar terapia. Conheça sinais comuns, entenda quando faz sentido buscar ajuda e como funciona o início do processo.",
    excerpt:
        "Nem todo desafio pessoal pede resposta rápida. Às vezes, o que faz falta é um espaço confiável para compreender melhor o que você está vivendo.",
    date: "2026-03-27",
    readTimeMinutes: 6,
    tags: ["quando procurar terapia", "sinais de que preciso de terapia", "ansiedade", "luto", "psicoterapia"],
    heroImage: {
        src: "/images/blog-psicoterapia-acompanhamento-maos-xicara-quente.avif",
        alt: "Close-up focado apenas na textura de uma manta de lã e em mãos que envolvem uma xícara de cerâmica",
        width: 900,
        height: 1125,
    },
    snippetAnswer: {
        question: "Como saber se preciso de terapia?",
        html: "Pode fazer sentido procurar terapia quando algo tem pesado na sua rotina, nas relações ou na forma como você se trata, mesmo sem uma crise aberta. A própria dúvida já pode ser motivo suficiente para conversar com uma profissional e entender se esse cuidado faz sentido agora.",
    },
    body: [
        {
            type: "paragraph",
            html: "Muita gente se pergunta se o que está sentindo \"já justifica\" procurar terapia. A resposta costuma ser mais simples do que parece: se a dúvida existe, provavelmente já faz sentido conversar com alguém.",
        },
        {
            type: "paragraph",
            html: "A vida costuma cobrar respostas enquanto você ainda está tentando entender a pergunta. É nesse intervalo que muita gente chega à terapia: cansada, confusa, tentando sustentar o que dá e escondendo o que pesa.",
        },
        {
            type: "heading",
            level: 2,
            text: "Sinais de que pode ser hora de procurar terapia",
        },
        {
            type: "paragraph",
            html: "Não existe uma régua universal para decidir quando começar. Mas alguns sinais aparecem com frequência entre as pessoas que procuram acompanhamento psicológico:",
        },
        {
            type: "list",
            items: [
                "Cansaço que não passa com descanso.",
                "Sensação constante de estar aquém ou devendo algo a alguém.",
                "Dificuldade de tomar decisões que antes pareciam simples.",
                "Irritabilidade, choro frequente ou vontade de se isolar.",
                "Luto, término ou mudança de vida que não encontra espaço para ser vivido.",
                "Relações que drenam mais do que sustentam.",
            ],
        },
        {
            type: "paragraph",
            html: "Se você se reconhece em algo dessa lista, pode valer a pena conhecer a página <a href=\"/experiencia/ansiedade-e-sobrecarga\">ansiedade e sobrecarga</a> ou a página sobre <a href=\"/experiencia/luto-e-perdas\">luto e perdas</a> para entender como esses temas aparecem no consultório.",
        },
        {
            type: "heading",
            level: 2,
            text: "Preciso estar em crise para procurar ajuda?",
        },
        {
            type: "paragraph",
            html: "Não. Muitas pessoas chegam sem uma crise clara. Chegam porque algo está pesado, repetitivo ou sem espaço de elaboração. Às vezes o que parece ansiedade tem também algo de luto. O que parece só cansaço traz junto culpa, relações difíceis e medo de decepcionar. O que parece indecisão pode carregar uma vida inteira de adaptação.",
        },
        {
            type: "callout",
            title: "Você não precisa ter clareza para começar",
            html: "Muita gente adia terapia porque acha que precisa chegar com tudo organizado. Na prática, o processo também serve para construir essa clareza.",
            items: [
                "Você pode começar pelo que está mais urgente.",
                "Pode falar do que sente sem saber explicar direito.",
                "Pode levar tempo para confiar, e isso também faz parte.",
            ],
        },
        {
            type: "heading",
            level: 2,
            text: "O que significa acompanhamento psicológico na prática",
        },
        {
            type: "paragraph",
            html: "Acompanhamento não é conduzir sua vida de fora. É estar em relação com você de um jeito ético, atento e humano, para que o que está confuso vá ganhando linguagem e o que está endurecido possa voltar a respirar. A terapia não substitui suas escolhas, mas pode fortalecer a forma como você se aproxima delas.",
        },
        {
            type: "paragraph",
            html: "Se você quer entender melhor como funciona o início, pode ser útil ler sobre <a href=\"/psicoterapia/como-funciona-a-primeira-sessao\">como funciona a primeira sessão</a>. E se ainda está decidindo entre formatos, o texto sobre <a href=\"/psicoterapia/psicoterapia-presencial-ou-online-como-decidir\">presencial ou online</a> pode ajudar.",
        },
        {
            type: "paragraph",
            html: "O consultório fica em Higienópolis, na Av. Angélica, com acesso fácil pelo metrô. Você pode conhecer mais sobre o espaço na página de <a href=\"/localizacao/psicologa-higienopolis-sp\">localização</a> ou ver detalhes do atendimento presencial em <a href=\"/servicos/psicoterapia-presencial-higienopolis\">psicoterapia presencial</a>.",
        },
    ],
    faq: [
        {
            question: "Preciso estar em crise para procurar terapia?",
            answer:
                "Não. Muitas pessoas procuram terapia porque sentem que algo está pesado, repetitivo ou sem espaço de elaboração, mesmo sem uma crise aguda.",
        },
        {
            question: "Posso falar de vários assuntos ao mesmo tempo?",
            answer:
                "Sim. É comum que ansiedade, relações, trabalho e decisões apareçam juntos. O processo ajuda justamente a entender como essas camadas se conectam.",
        },
        {
            question: "Como saber se a terapia é para mim?",
            answer:
                "Se você sente que está carregando algo sozinha, que suas relações estão difíceis ou que perdeu contato consigo mesma, a terapia pode ser um espaço importante. O primeiro passo costuma ser uma conversa simples.",
        },
    ],
    cta: {
        title: "Se você sente que está carregando coisa demais sozinha, podemos começar por uma conversa simples",
        text: "Você pode mandar uma mensagem dizendo que quer entender como a terapia pode acompanhar o seu momento atual.",
        label: "Conversar sobre acompanhamento",
        href: buildWhatsAppLink("Oi, li o artigo sobre como saber se preciso de terapia e gostaria de entender como funciona o acompanhamento."),
        secondaryLabel: "Ver psicoterapia presencial",
        secondaryHref: "/servicos/psicoterapia-presencial-higienopolis",
    },
};

export default post;
