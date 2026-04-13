import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "como-escolher-uma-psicologa-com-criterio",
    categorySlug: "psicoterapia",
    title: "Como escolher uma psicóloga com critério sem cair em página bonita e resposta vazia",
    description:
        "Critérios práticos e éticos para escolher uma psicóloga, considerando CRP, abordagem, logística possível e sensação de encontro real.",
    excerpt:
        "Escolher psicóloga não é só comparar site bonito, bairro e valor. O essencial costuma estar na combinação entre critério técnico, logística possível e qualidade de encontro.",
    date: "2026-03-26",
    readTimeMinutes: 8,
    tags: ["como escolher psicóloga", "começar terapia", "primeiro contato", "CRP"],
    heroImage: {
        src: "/images/blog-local-escolha-calcada-arborizada-sol-baixa.avif",
        alt: "Detalhe de calçada arborizada com luz de fim de tarde",
        width: 900,
        height: 600,
    },
    snippetAnswer: {
        question: "Como escolher uma psicóloga com critério?",
        html: "Escolher uma psicóloga com critério envolve verificar CRP, formação e abordagem, observar se a comunicação é ética e avaliar se a logística cabe na sua rotina. Além de uma página bonita, importa perceber se há clareza, respeito e possibilidade real de vínculo.",
    },
    featured: true,
    body: [
        {
            type: "paragraph",
            html: "Se você começou a procurar psicóloga, provavelmente encontrou uma mistura de clínicas generalistas, páginas muito parecidas entre si e perfis que repetem palavras como acolhimento, escuta e sigilo. O problema é que quase todo mundo promete isso. A questão é: <strong>como separar marketing de critério real?</strong>",
        },
        {
            type: "heading",
            level: 2,
            text: "Comece pelo básico que deveria ser óbvio, mas nem sempre aparece com clareza",
        },
        {
            type: "list",
            items: [
                "Verifique se o CRP está informado de forma transparente.",
                "Entenda qual abordagem orienta o trabalho e se ela é explicada com linguagem viva, não apenas em jargão.",
                "Observe se a profissional fala de experiência humana concreta ou só empilha palavras abstratas.",
                "Veja se a logística realmente faz sentido para sua rotina e não apenas para a vitrine da página.",
            ],
        },
        { type: "heading", level: 2, text: "A logística importa mais do que parece" },
        {
            type: "paragraph",
            html: "Em São Paulo, deslocamento não é detalhe. Um consultório bem localizado pode ser a diferença entre manter um processo e desistir dele depois de duas semanas. Se você circula por Higienópolis, Paulista, Consolação ou Santa Cecília, faz sentido observar se o acesso por metrô, carro ou caminhada é realmente viável.",
        },
        { type: "heading", level: 2, text: "A página fala com gente de verdade?" },
        {
            type: "paragraph",
            html: "Esse é um critério menos técnico, mas muito importante. Há sites que parecem bonitos e, ainda assim, soam como cópia de cópia. Quando a profissional consegue escrever sobre luto, relações, sobrecarga ou primeira sessão de um jeito humano e específico, sem soar mecânica ou promocional demais, geralmente isso diz algo sobre a qualidade da presença clínica também.",
        },
        {
            type: "heading",
            level: 2,
            text: "O primeiro contato também ajuda a perceber o tom do cuidado",
        },
        {
            type: "paragraph",
            html: "Você não precisa decidir tudo pelo nervosismo da busca. Quando a vontade de encontrar ajuda vem misturada com urgência, é fácil escolher pela primeira página razoável que aparece. Se puder, faça uma leitura um pouco mais demorada e observe se existe coerência entre o texto, a proposta de trabalho e o tipo de encontro que você imagina precisar.",
        },
        {
            type: "callout",
            title: "O que observar no primeiro contato",
            html: "O WhatsApp inicial não precisa resolver tudo, mas pode mostrar bastante coisa sobre disponibilidade, clareza e tom de cuidado.",
            items: [
                "Se a resposta é clara e respeitosa.",
                "Se você consegue tirar dúvidas práticas sem se sentir pressionada.",
                "Se há coerência entre o que o site promete e a forma como a conversa acontece.",
            ],
        },
        {
            type: "paragraph",
            html: "Se você quiser aprofundar essa avaliação, pode conhecer a página <a href=\"/sobre\">sobre Danielle Gurgel</a>, ver a <a href=\"/servicos/psicoterapia-presencial-higienopolis\">psicoterapia presencial em Higienópolis</a>, ler o artigo sobre <a href=\"/psicoterapia/como-funciona-a-primeira-sessao\">como funciona a primeira sessão</a>, comparar os caminhos de <a href=\"/psicoterapia/psicoterapia-presencial-ou-online-como-decidir\">psicoterapia presencial ou online</a> e entender como trabalho com questões de <a href=\"/experiencia/ansiedade-e-sobrecarga\">ansiedade e sobrecarga</a>.",
        },
    ],
    faq: [
        {
            question: "Vale escolher psicóloga só pela proximidade?",
            answer:
                "Não. A logística ajuda muito na sustentação do processo, mas precisa vir junto de critério ético, clareza de abordagem e sensação de que aquele encontro faz sentido para você.",
        },
        {
            question: "Como saber se a abordagem combina comigo?",
            answer:
                "Você pode ler os textos do site, entender como a profissional descreve o trabalho e sentir, no primeiro contato ou na primeira sessão, se esse modo de escuta conversa com o que você procura.",
        },
    ],
    cta: {
        title: "Se você está avaliando atendimento e quer sentir se o trabalho faz sentido, podemos começar por uma conversa simples",
        text: "Você pode dizer que veio por este artigo e quer entender disponibilidade, formato e primeiros passos.",
        label: "Conversar sobre atendimento",
        href: buildWhatsAppLink("Oi, vim pelo artigo sobre como escolher uma psicóloga com critério e gostaria de entender como funciona o atendimento."),
        secondaryLabel: "Ver os serviços",
        secondaryHref: "/servicos",
    },
};

export default post;
