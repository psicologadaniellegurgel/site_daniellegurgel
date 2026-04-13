import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "como-funciona-a-primeira-sessao",
    categorySlug: "psicoterapia",
    title: "Como funciona a primeira sessão de terapia quando você ainda nem sabe por onde começar",
    description:
        "Um guia acolhedor sobre o que costuma acontecer na primeira sessão de terapia e o que você pode esperar desse encontro inicial.",
    excerpt:
        "A primeira sessão não exige que você chegue pronta. Ela costuma ser menos sobre desempenho e mais sobre criar um primeiro contorno para o que você está vivendo.",
    date: "2026-03-28",
    readTimeMinutes: 7,
    tags: ["primeira sessão", "psicoterapia", "Higienópolis", "abordagem centrada na pessoa"],
    heroImage: {
        src: "/images/blog-psicoterapia-primeira-sessao-caixa-lenços-mesa.avif",
        alt: "Detalhe de uma mesa lateral com caixa de lenços e copo d'água, preparada para a sessão",
        width: 900,
        height: 1125,
    },
    snippetAnswer: {
        question: "Como funciona a primeira sessão de terapia?",
        html: "A primeira sessão de terapia costuma ser uma conversa inicial para entender o que trouxe você até ali, tirar dúvidas e começar a dar forma ao que está sendo vivido. Você não precisa chegar com tudo organizado; o começo também pode incluir hesitação, silêncio e perguntas.",
    },
    featured: true,
    body: [
        {
            type: "paragraph",
            html: "A primeira sessão de terapia costuma vir acompanhada de perguntas bem concretas: <em>o que eu vou falar?</em> <em>preciso contar tudo?</em> <em>e se eu travar?</em> Essas dúvidas não significam que você não está pronta. Elas fazem parte do próprio movimento de procurar ajuda.",
        },
        {
            type: "paragraph",
            html: "Na prática, o encontro inicial funciona menos como uma entrevista rígida e mais como uma conversa que começa a dar forma ao que está te atravessando. <strong>Você não precisa chegar com a história organizada</strong>, nem com um resumo convincente da sua dor. Muitas vezes, a primeira sessão existe justamente para que isso comece a aparecer de um jeito respirável.",
        },
        { type: "heading", level: 2, text: "O que costuma acontecer nesse primeiro encontro" },
        {
            type: "paragraph",
            html: "Geralmente, você vai poder contar o que te trouxe ali, o que tem pesado mais neste momento e o que espera da terapia, mesmo que ainda não saiba colocar isso em palavras muito precisas. Também é um momento para entender como o trabalho funciona, tirar dúvidas práticas e perceber se a relação com a profissional faz sentido para você.",
        },
        {
            type: "list",
            items: [
                "Você pode falar do que está mais urgente hoje, sem precisar explicar sua vida inteira de uma vez.",
                "Há espaço para perguntar sobre formato, frequência, sigilo, valores e reembolso.",
                "Também é válido perceber se você se sente relativamente à vontade com aquele jeito de escuta.",
            ],
        },
        { type: "heading", level: 2, text: "O que não precisa acontecer" },
        {
            type: "paragraph",
            html: "Não precisa sair da primeira sessão com todas as respostas. Não precisa confiar plenamente de imediato. E não precisa se expor além do que for possível no momento. Em um trabalho humanista, a construção da confiança é gradual. Ela não é cobrada de você como prova de que está se esforçando direito.",
        },
        {
            type: "callout",
            title: "Se você travar, isso também faz parte",
            html: "Tem gente que chega falando muito. Tem gente que chega em silêncio. Tem gente que ri quando está nervosa. Tem gente que passa vários minutos tentando explicar por que está ali. Nada disso invalida o encontro.",
            items: [
                "O silêncio pode ser uma forma de chegar.",
                "A confusão também pode ser um bom ponto de partida.",
                "A primeira sessão não é um teste de desempenho emocional.",
            ],
        },
        { type: "heading", level: 2, text: "O que pode ajudar antes de chegar" },
        {
            type: "list",
            items: [
                "Anotar uma ou duas frases sobre o que está mais pesado agora, caso isso te ajude a começar.",
                "Separar dúvidas práticas que você quer tirar no primeiro encontro, como formato, frequência ou valores.",
                "Evitar ensaiar demais a conversa, para não transformar a sessão em apresentação preparada.",
            ],
        },
        {
            type: "paragraph",
            html: "Se nada disso funcionar, tudo bem. Você também pode simplesmente chegar como está. Em muitos casos, o mais importante no primeiro encontro não é falar bonito, e sim encontrar um espaço em que você não precise se defender tanto para começar.",
        },
        { type: "heading", level: 2, text: "Como saber se vale continuar" },
        {
            type: "paragraph",
            html: "Nem sempre a sensação depois da primeira sessão é linear. Às vezes você sai aliviada. Às vezes fica mexida. Às vezes sente que ainda precisa de mais um ou dois encontros para entender melhor se aquele espaço é seu. O critério não costuma ser um encantamento imediato, e sim a percepção de que ali pode existir uma relação de trabalho ética, respeitosa e viva.",
        },
        {
            type: "paragraph",
            html: "Se quiser continuar por uma leitura próxima, vale entender melhor os formatos no artigo <a href=\"/psicoterapia/psicoterapia-presencial-ou-online-como-decidir\">psicoterapia presencial ou online: como decidir</a>, ler <a href=\"/psicoterapia/o-que-esperar-da-terapia\">o que esperar da terapia</a> ou conhecer a página de <a href=\"/servicos/psicoterapia-presencial-higienopolis\">atendimento presencial em Higienópolis</a>.",
        },
    ],
    faq: [
        {
            question: "Preciso contar tudo na primeira sessão?",
            answer:
                "Não. Você pode começar pelo que está mais vivo agora. O processo vai se construindo com tempo, e a confiança não precisa aparecer inteira no primeiro encontro.",
        },
        {
            question: "E se eu não souber explicar o que estou sentindo?",
            answer:
                "Isso é mais comum do que parece. A terapia também serve para ajudar você a encontrar linguagem para o que ainda está confuso.",
        },
        {
            question: "Posso usar a primeira sessão para tirar dúvidas práticas?",
            answer:
                "Sim. É um bom momento para perguntar sobre funcionamento, frequência, formato de atendimento, recibo e o que mais for importante para sua decisão.",
        },
    ],
    cta: {
        title: "Se a primeira sessão parece menos assustadora depois deste texto, o próximo passo pode ser simples",
        text: "Você pode mandar uma mensagem curta dizendo que quer entender como funciona o primeiro encontro.",
        label: "Perguntar sobre a primeira sessão",
        href: buildWhatsAppLink("Oi, li o artigo sobre a primeira sessão e gostaria de saber como funciona o primeiro encontro."),
        secondaryLabel: "Ver página de psicoterapia",
        secondaryHref: "/servicos/psicoterapia-presencial-higienopolis",
    },
};

export default post;
