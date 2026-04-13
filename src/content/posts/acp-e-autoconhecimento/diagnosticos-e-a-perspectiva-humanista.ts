import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "diagnosticos-e-a-perspectiva-humanista",
    categorySlug: "acp-e-autoconhecimento",
    title: "Diagnósticos e a perspectiva humanista: quando o nome ajuda, mas não explica a pessoa inteira",
    description:
        "Uma reflexão sobre diagnóstico psicológico como ferramenta inicial, sem perder de vista a singularidade da experiência humana.",
    excerpt:
        "Diagnóstico pode orientar a compreensão, mas não substitui a história, o contexto e o modo único como cada pessoa vive seu sofrimento.",
    date: "2026-03-24",
    readTimeMinutes: 5,
    tags: ["diagnóstico", "perspectiva humanista", "ACP", "singularidade", "psicologia"],
    heroImage: {
        src: "/images/blog-acp-diagnosticos-maos-lapiseira-papel.avif",
        alt: "Close-up em mãos em repouso sobre mesa de madeira, segurando lapiseira sobre papel para artigo sobre diagnósticos",
        width: 900,
        height: 600,
    },
    snippetAnswer: {
        question: "Como a perspectiva humanista entende os diagnósticos?",
        html: "Na perspectiva humanista, um diagnóstico pode ajudar a organizar parte do sofrimento, mas não define a pessoa inteira. Ele é usado com cuidado, como referência inicial, sem substituir a escuta da experiência singular de quem está em atendimento.",
    },
    body: [
        {
            type: "paragraph",
            html: "Receber um diagnóstico pode trazer alívio, medo, identificação ou estranhamento. Em alguns casos, ele ajuda a nomear algo que parecia disperso. Em outros, a pessoa sente que foi reduzida a uma palavra que não dá conta do que vive.",
        },
        {
            type: "paragraph",
            html: "Na minha forma de compreender a clínica, o diagnóstico pode ser uma ferramenta útil de orientação inicial, mas não deve funcionar como definição fechada do sujeito. O nome pode organizar parte do entendimento, mas não substitui a singularidade da experiência.",
        },
        {
            type: "heading",
            level: 2,
            text: "Por que duas pessoas com o mesmo diagnóstico podem viver coisas muito diferentes",
        },
        {
            type: "paragraph",
            html: "Uma pessoa pode viver a ansiedade como medo constante de falhar. Outra pode senti-la como hipervigilância, irritação, insônia ou dificuldade de relaxar. O mesmo termo não produz a mesma vivência. Por isso, mais importante do que saber apenas o nome é entender como aquilo acontece na sua história, no seu corpo e nas suas relações.",
        },
        {
            type: "list",
            items: [
                "O diagnóstico não esgota a experiência.",
                "A forma como você vive algo importa tanto quanto a classificação.",
                "A relação terapêutica precisa acolher o que o rótulo não consegue dizer.",
            ],
        },
        {
            type: "heading",
            level: 2,
            text: "Quando o nome ajuda e quando aperta demais",
        },
        {
            type: "paragraph",
            html: "Há pessoas que se sentem finalmente reconhecidas quando recebem um diagnóstico. Há outras que sentem alívio e prisão ao mesmo tempo. As duas experiências podem ser legítimas. O ponto, para mim, é que o nome não precise virar destino nem substituir a conversa sobre o que você vive de fato.",
        },
        {
            type: "heading",
            level: 2,
            text: "O lugar da terapia nesse contexto",
        },
        {
            type: "paragraph",
            html: "Na terapia, meu papel não é agir como quem traduz sua vida de fora para dentro. O foco está em oferecer um espaço de compreensão genuína para que você possa explorar o próprio sofrimento sem ser tratada apenas como um quadro. Quando isso acontece, autocompreensão e mudança deixam de depender só de uma classificação.",
        },
        {
            type: "paragraph",
            html: "Se esse tema te interessa, talvez faça sentido ler também <a href=\"/acp-e-autoconhecimento/sou-uma-jardineira-nao-uma-paisagista\">sou uma jardineira, não uma paisagista</a> e <a href=\"/acp-e-autoconhecimento/o-que-a-abordagem-centrada-na-pessoa-oferece-na-pratica\">o que a abordagem oferece na prática</a>. Você também pode conhecer a <a href=\"/servicos/psicoterapia-presencial-higienopolis\">psicoterapia presencial em Higienópolis</a> ou entender como trabalho com questões de <a href=\"/experiencia/autoestima-e-identidade\">autoestima e identidade</a>.",
        },
    ],
    faq: [
        {
            question: "Você é contra diagnósticos?",
            answer:
                "Não. Eles podem ser úteis em vários contextos. O cuidado é não transformar esse recurso em definição total da pessoa.",
        },
        {
            question: "Posso fazer terapia mesmo sem ter diagnóstico fechado?",
            answer:
                "Sim. Muitas pessoas chegam à terapia sem diagnóstico e, ainda assim, encontram um espaço importante de elaboração, cuidado e compreensão.",
        },
    ],
    cta: {
        title: "Se você procura um espaço onde sua experiência valha mais do que um rótulo, podemos conversar",
        text: "Você pode me escrever dizendo que quer entender como funciona um atendimento que considera sua singularidade.",
        label: "Conversar sobre atendimento",
        href: buildWhatsAppLink("Oi, li o artigo sobre diagnósticos e perspectiva humanista e gostaria de entender como funciona o atendimento."),
        secondaryLabel: "Conhecer a abordagem",
        secondaryHref: "/acp-e-autoconhecimento/o-que-a-abordagem-centrada-na-pessoa-oferece-na-pratica",
    },
};

export default post;
