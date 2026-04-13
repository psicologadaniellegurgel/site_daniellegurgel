import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "luto-nao-e-linear",
    categorySlug: "luto-e-perdas",
    title: "Luto não é linear: o que costuma acontecer depois de uma perda, mesmo quando todos esperam que você já esteja melhor",
    description:
        "Um texto acolhedor sobre a experiência não linear do luto e o que costuma acontecer depois de uma perda significativa.",
    excerpt:
        "O luto pode ter dias serenos e recaídas bruscas sem que isso signifique fracasso. O tempo da perda raramente obedece à expectativa de fora.",
    date: "2026-03-24",
    readTimeMinutes: 7,
    tags: ["luto", "perdas", "saudade", "elaboração"],
    heroImage: {
        src: "/images/blog-luto-ondas-mar-desfocadas-janela.avif",
        alt: "Vista parcial através de uma janela com cortina de linho leve, sugerindo a oscilação do luto",
        width: 900,
        height: 1125,
    },
    snippetAnswer: {
        question: "O que significa dizer que o luto não é linear?",
        html: "Dizer que o luto não é linear significa reconhecer que a dor pode ir e voltar, mudar de forma e reaparecer em datas, cenas ou detalhes cotidianos. Isso não indica fracasso nem regresso; costuma fazer parte do modo singular como cada perda é elaborada.",
    },
    body: [
        {
            type: "paragraph",
            html: "Existe uma expectativa silenciosa de que o luto ande para frente em linha reta. Primeiro o choque, depois a tristeza, depois a aceitação e, enfim, a vida retomada. Na experiência real, quase nunca acontece assim. <strong>O luto vai e volta</strong>. Muda de forma. Fica mais quieto e depois reaparece de um jeito inesperado.",
        },
        {
            type: "paragraph",
            html: "Às vezes a pessoa já está funcionando relativamente bem e um detalhe desmonta tudo: uma data, um cheiro, uma música, um corredor do supermercado, uma mensagem antiga, uma cena cotidiana em que a ausência se torna concreta de novo.",
        },
        { type: "heading", level: 2, text: "Por que essa oscilação não significa regresso" },
        {
            type: "paragraph",
            html: "Porque o luto não é um problema a ser resolvido, e sim uma experiência a ser atravessada. A oscilação faz parte do modo como o corpo e a memória elaboram uma perda. Há dias em que a ausência pesa no centro da vida. Em outros, ela fica mais ao fundo. Isso não quer dizer que você está fazendo errado.",
        },
        {
            type: "list",
            items: [
                "Sentir alívio em alguns momentos não apaga o amor nem a importância do que foi perdido.",
                "Voltar a doer depois de semanas mais estáveis não significa que você voltou para o início.",
                "Saudade e reorganização podem coexistir.",
            ],
        },
        { type: "heading", level: 2, text: "Quando o entorno não ajuda" },
        {
            type: "paragraph",
            html: "Muitas pessoas sofrem também com a pressa alheia. Escutam que precisam reagir, agradecer pelo tempo vivido ou transformar logo a experiência em aprendizado. Mas o luto costuma precisar de uma coisa mais simples e mais rara: espaço para existir sem ser consertado.",
        },
        {
            type: "callout",
            title: "Nem toda perda é reconhecida pelo lado de fora",
            html: "Luto também aparece em términos, mudanças de fase, infertilidade, distância, fim de amizade, perda de uma imagem de si e despedidas que a sociedade não costuma ritualizar.",
        },
        { type: "heading", level: 2, text: "O que pode aliviar sem apressar o processo" },
        {
            type: "list",
            items: [
                "Encontrar pelo menos uma pessoa ou um espaço em que sua dor não precise ser corrigida.",
                "Aceitar que alguns dias vão pedir menos desempenho e mais delicadeza com o próprio ritmo.",
                "Criar pequenos rituais de lembrança ou despedida quando a perda ficou sem margem simbólica.",
            ],
        },
        {
            type: "paragraph",
            html: "Isso não elimina a ausência, mas pode tornar a experiência menos solitária e menos submetida à pressa de parecer bem. Em muitos casos, o luto começa a respirar melhor quando você para de tratá-lo como algo que precisa acabar logo.",
        },
        {
            type: "paragraph",
            html: "Se isso conversa com o que você está vivendo, talvez faça sentido ler também a página de <a href=\"/experiencia/luto-e-perdas\">luto e perdas</a>, o artigo sobre <a href=\"/relacionamentos/quando-um-fim-de-relacionamento-continua-doendo\">quando um fim de relacionamento continua doendo</a> ou a página sobre <a href=\"/servicos/psicoterapia-presencial-higienopolis\">psicoterapia presencial em Higienópolis</a> quando a sensação for de que essa dor precisa de um lugar mais protegido.",
        },
    ],
    faq: [
        {
            question: "Quanto tempo o luto dura?",
            answer:
                "Não existe um prazo único. O que muda com o tempo não é o fim automático da dor, mas o modo como ela encontra lugar na vida.",
        },
        {
            question: "É normal ter dias bons no meio do luto?",
            answer:
                "Sim. Dias bons não significam esquecimento. Faz parte do processo oscilar entre momentos de maior e menor intensidade.",
        },
    ],
    cta: {
        title: "Se a perda segue pedindo espaço dentro de você, podemos olhar para isso com calma",
        text: "Uma mensagem simples já basta para entender se este acompanhamento faz sentido para o seu momento.",
        label: "Falar sobre luto",
        href: buildWhatsAppLink("Oi, li o artigo sobre luto não linear e gostaria de saber sobre acompanhamento."),
        secondaryLabel: "Ver página de luto e perdas",
        secondaryHref: "/experiencia/luto-e-perdas",
    },
};

export default post;
