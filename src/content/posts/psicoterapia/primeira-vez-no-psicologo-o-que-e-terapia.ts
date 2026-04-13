import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "primeira-vez-no-psicologo-o-que-e-terapia",
    categorySlug: "psicoterapia",
    title: "Primeira vez no psicólogo: o que é terapia e o que você pode esperar desse começo",
    description:
        "Um guia para quem vai ao psicólogo pela primeira vez e quer entender o que é terapia, como funciona a primeira conversa e o que esse processo pode oferecer.",
    excerpt:
        "Ir ao psicólogo pela primeira vez costuma trazer dúvidas e ansiedade. Entender o que é terapia ajuda a chegar com menos pressão e mais clareza.",
    date: "2026-03-22",
    readTimeMinutes: 7,
    tags: ["primeira vez no psicólogo", "o que é terapia", "primeira consulta", "psicoterapia"],
    heroImage: {
        src: "/images/blog-psicoterapia-primeira-vez-degraus-textura.avif",
        alt: "Detalhe de degraus de uma escada de madeira, sugerindo o primeiro passo de uma jornada",
        width: 900,
        height: 1125,
    },
    snippetAnswer: {
        question: "O que é terapia para quem vai ao psicólogo pela primeira vez?",
        html: "Terapia é um espaço de escuta e cuidado em que você pode falar sobre o que está vivendo, sem precisar chegar com tudo claro ou pronto. O processo é construído com a profissional, a partir da sua experiência, das suas dúvidas e do seu ritmo.",
    },
    body: [
        {
            type: "paragraph",
            html: "Decidir ir ao psicólogo pela primeira vez pode trazer alívio e ansiedade ao mesmo tempo. É comum imaginar como será o consultório, o que você vai precisar contar e se existe uma forma certa de estar numa sessão.",
        },
        {
            type: "paragraph",
            html: "Na prática, quase nunca existe um jeito perfeito de chegar. Tem gente que chega com a fala pronta. Tem gente que chega sem saber por onde começar. Tem gente que só percebe o tamanho do que está vivendo quando finalmente encontra um lugar para falar.",
        },
        {
            type: "heading",
            level: 2,
            text: "O que é terapia",
        },
        {
            type: "paragraph",
            html: "Na minha prática, terapia é um espaço de acolhimento, escuta e respeito. Não existe um roteiro rígido que você precise seguir. O processo vai sendo construído a partir do que você vive, do que deseja compreender e do ritmo que consegue sustentar.",
        },
        {
            type: "heading",
            level: 2,
            text: "O que acontece na primeira sessão",
        },
        {
            type: "paragraph",
            html: "A primeira sessão costuma ser um encontro de reconhecimento. Você pode contar o que te trouxe, tirar dúvidas sobre o trabalho e perceber se se sente relativamente confortável ali. Não precisa chegar sabendo exatamente o que dizer nem com todos os assuntos organizados.",
        },
        {
            type: "heading",
            level: 2,
            text: "Como funciona o processo",
        },
        {
            type: "paragraph",
            html: "Terapia não é entrega de respostas prontas. É um processo de reflexão, autoconhecimento e elaboração. Meu papel é caminhar ao seu lado, ajudando você a olhar para a própria experiência com mais clareza e menos solidão.",
        },
        {
            type: "list",
            items: [
                "Você pode compreender melhor sentimentos e repetições.",
                "Pode desenvolver recursos internos para lidar com desafios.",
                "Pode construir relações mais coerentes com o que você vive.",
            ],
        },
        {
            type: "callout",
            title: "Não existe um desempenho certo para começar",
            html: "Você não precisa chegar eloquente, profunda ou totalmente convencida. O começo também pode ser hesitante, tímido, confuso e ainda assim verdadeiro.",
        },
        {
            type: "paragraph",
            html: "Se quiser um complemento mais detalhado, você também pode ler <a href=\"/psicoterapia/como-funciona-a-primeira-sessao\">como funciona a primeira sessão</a>, entender <a href=\"/psicoterapia/o-que-esperar-da-terapia\">o que esperar da terapia</a>, conhecer a <a href=\"/servicos/psicoterapia-presencial-higienopolis\">psicoterapia presencial em Higienópolis</a> ou ver como trabalho com questões de <a href=\"/experiencia/autoestima-e-identidade\">autoestima e identidade</a>.",
        },
    ],
    faq: [
        {
            question: "Preciso saber exatamente por que estou indo ao psicólogo?",
            answer:
                "Não. Muitas vezes a pessoa chega só com um mal-estar difuso, uma sobrecarga ou uma inquietação que ainda não ganhou nome claro.",
        },
        {
            question: "A primeira consulta já precisa ser profunda?",
            answer:
                "Não. Ela pode ser um primeiro contato, com espaço para dúvidas, pausas e aproximação gradual.",
        },
    ],
    cta: {
        title: "Se esse é o seu primeiro passo, ele pode ser menos difícil do que parece",
        text: "Você pode me chamar e dizer apenas que está pensando em fazer terapia pela primeira vez.",
        label: "Dar o primeiro passo",
        href: buildWhatsAppLink("Oi, li o artigo sobre primeira vez no psicólogo e gostaria de entender como funciona iniciar a terapia."),
        secondaryLabel: "Ler sobre a primeira sessão",
        secondaryHref: "/psicoterapia/como-funciona-a-primeira-sessao",
    },
};

export default post;
