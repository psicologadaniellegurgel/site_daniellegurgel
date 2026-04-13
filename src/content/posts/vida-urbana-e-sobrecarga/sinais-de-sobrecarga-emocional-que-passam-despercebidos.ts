import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "sinais-de-sobrecarga-emocional-que-passam-despercebidos",
    categorySlug: "vida-urbana-e-sobrecarga",
    title: "Sinais de sobrecarga emocional que passam despercebidos porque se parecem demais com rotina normal",
    description:
        "Um artigo sobre cansaço emocional, irritação, automatismo e outros sinais sutis de sobrecarga na vida urbana.",
    excerpt:
        "A sobrecarga nem sempre aparece como colapso. Muitas vezes ela se disfarça de produtividade, impaciência, sono ruim e dificuldade de descansar sem culpa.",
    date: "2026-03-22",
    readTimeMinutes: 7,
    tags: ["sobrecarga emocional", "vida urbana", "ansiedade", "cansaço"],
    heroImage: {
        src: "/images/blog-urbano-sobrecarga-chaves-esquecidas-mesa.avif",
        alt: "Chaves jogadas sobre uma mesa de entrada com correspondência e copo d'água",
        width: 900,
        height: 1125,
    },
    snippetAnswer: {
        question: "Quais sinais de sobrecarga emocional podem passar despercebidos?",
        html: "Sinais de sobrecarga emocional podem aparecer como irritação constante, sono ruim, dificuldade de relaxar, vontade de cancelar tudo, cansaço persistente e sensação de estar sempre atrasada de si. Quando isso vira parte normal da rotina, pode ser útil olhar com mais cuidado para o que está pesando.",
    },
    body: [
        {
            type: "paragraph",
            html: "Nem toda sobrecarga chega como crise aberta. Em muitas pessoas, ela aparece de forma elegante demais para ser reconhecida logo: irritação constante, sono fragmentado, incapacidade de relaxar, vontade de cancelar tudo, dificuldade de estar presente em conversas, sensação de estar sempre atrasada de si mesma.",
        },
        {
            type: "paragraph",
            html: "O problema é que esses sinais se parecem muito com o jeito normalizado de viver na cidade. Então você segue. Cumpre prazo. Responde mensagem. Mantém agenda. E vai chamando de costume o que talvez já seja exaustão.",
        },
        { type: "heading", level: 2, text: "Sinais sutis que merecem atenção" },
        {
            type: "list",
            items: [
                "Descansar e não sentir descanso.",
                "Ficar sem paciência com coisas pequenas o tempo inteiro.",
                "Precisar de silêncio e isolamento, mas não conseguir parar de se cobrar.",
                "Perceber que o corpo já está sempre em alerta, mesmo sem um motivo pontual.",
            ],
        },
        { type: "heading", level: 2, text: "Por que isso passa despercebido" },
        {
            type: "paragraph",
            html: "Porque produtividade e sofrimento costumam andar misturados. Se você ainda entrega, ainda comparece e ainda sustenta a rotina, é fácil pensar que não há nada tão sério acontecendo. Mas funcionar não é o mesmo que estar bem.",
        },
        {
            type: "heading",
            level: 2,
            text: "Quando descansar não recompõe",
        },
        {
            type: "paragraph",
            html: "Um sinal importante de sobrecarga é quando o descanso deixa de restaurar. Você até para, mas continua em alerta. Dorme, mas não sente repouso. Tenta se distrair, mas o corpo não acompanha. Nesses casos, a questão já não é só falta de tempo livre, e sim excesso de tensão acumulada.",
        },
        {
            type: "callout",
            title: "O corpo costuma perceber antes",
            html: "Tensão no maxilar, aperto no peito, gastrite, dor de cabeça, sono ruim e cansaço persistente podem ser formas de o corpo falar quando a vida interna ficou sem lugar.",
        },
        {
            type: "paragraph",
            html: "Se este texto fez sentido, vale ler também <a href=\"/vida-urbana-e-sobrecarga/quando-voce-nao-se-reconhece-mais-na-propria-rotina\">quando você não se reconhece mais na própria rotina</a>, conhecer a página sobre <a href=\"/experiencia/ansiedade-e-sobrecarga\">ansiedade e sobrecarga</a> e, se a semana já estiver apertada demais, olhar o formato de <a href=\"/servicos/psicoterapia-online\">psicoterapia online</a> como um começo mais possível.",
        },
    ],
    faq: [
        {
            question: "Sobrecarga emocional é o mesmo que burnout?",
            answer:
                "Não exatamente. O burnout é um quadro específico ligado ao trabalho. A sobrecarga emocional pode ser mais ampla e envolver rotina, relações, cuidado, cidade e exigências acumuladas.",
        },
        {
            question: "Se eu ainda dou conta, preciso olhar para isso?",
            answer:
                "Sim. Muitas vezes o sofrimento aparece antes do colapso. Não é preciso esperar piorar para levar seus sinais a sério.",
        },
    ],
    cta: {
        title: "Se sua rotina parece normal por fora, mas pesada demais por dentro, vale conversar",
        text: "Você não precisa esperar o corpo parar para reconhecer que algo está exigindo cuidado.",
        label: "Falar sobre sobrecarga",
        href: buildWhatsAppLink("Oi, li o artigo sobre sinais de sobrecarga emocional e gostaria de saber sobre atendimento."),
        secondaryLabel: "Ver página de sobrecarga",
        secondaryHref: "/experiencia/ansiedade-e-sobrecarga",
    },
};

export default post;
