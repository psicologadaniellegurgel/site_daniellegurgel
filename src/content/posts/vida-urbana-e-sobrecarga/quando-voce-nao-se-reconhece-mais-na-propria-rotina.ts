import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "quando-voce-nao-se-reconhece-mais-na-propria-rotina",
    categorySlug: "vida-urbana-e-sobrecarga",
    title: "Quando você não se reconhece mais na própria rotina, mesmo continuando a cumprir tudo",
    description:
        "Um texto sobre estranhamento com a própria vida, automatismo e a sensação de estar se afastando de si na rotina cotidiana.",
    excerpt:
        "Há fases em que tudo parece funcionando por fora, mas algo em você já não se reconhece naquela organização toda. E esse estranhamento merece escuta.",
    date: "2026-03-21",
    readTimeMinutes: 6,
    tags: ["rotina", "identidade", "sobrecarga", "automatismo"],
    heroImage: {
        src: "/images/blog-urbano-rotina-espelho-banheiro-vapor.avif",
        alt: "Detalhe de um espelho de banheiro parcialmente embaçado com vulto desfocado",
        width: 900,
        height: 1125,
    },
    snippetAnswer: {
        question: "O que pode significar não se reconhecer mais na própria rotina?",
        html: "Não se reconhecer mais na própria rotina pode indicar um afastamento gradual de desejos, limites, descanso e referências internas. Mesmo quando tudo continua funcionando por fora, essa sensação pode merecer cuidado e escuta para entender o que ficou sem lugar.",
    },
    body: [
        {
            type: "paragraph",
            html: 'Tem dias em que a pergunta não é "como sair desta crise?". A pergunta é mais silenciosa: <strong>como foi que eu fui parar tão longe de mim sem perceber?</strong> A rotina continua. O trabalho anda. As tarefas saem. Mas a sensação de estranhamento cresce.',
        },
        {
            type: "paragraph",
            html: "Você olha para os próprios dias e sente que eles até funcionam, mas não parecem mais seus. Falta prazer, falta presença, falta referência interna. E muitas vezes isso não vem acompanhado de um evento grande que justifique o mal-estar. Vem como desgaste acumulado.",
        },
        { type: "heading", level: 2, text: "Como esse afastamento costuma aparecer" },
        {
            type: "list",
            items: [
                "Sensação de estar sempre reagindo, nunca escolhendo.",
                "Dificuldade de responder o que você quer ou precisa agora.",
                "Irritação com a própria rotina e, ao mesmo tempo, medo de mexer nela.",
                "Impressão de que todo dia pede muito e devolve pouco.",
            ],
        },
        { type: "heading", level: 2, text: "Nem sempre isso é sobre largar tudo" },
        {
            type: "paragraph",
            html: "Às vezes o estranhamento gera vontade de ruptura total. Mas nem sempre a saída é desmontar a vida inteira. Em muitos casos, o primeiro passo é conseguir escutar o que está sendo sacrificado dentro da rotina atual: descanso, desejo, corpo, limite, relação consigo.",
        },
        {
            type: "heading",
            level: 2,
            text: "O que costuma estar sendo empurrado para depois",
        },
        {
            type: "list",
            items: [
                "Descanso que não encontra espaço real na semana.",
                "Desejos que vão sendo tratados como luxo ou capricho.",
                "Limites que você até percebe, mas não consegue sustentar.",
                "Uma versão sua que já não cabe mais na rotina que segue repetindo.",
            ],
        },
        {
            type: "callout",
            title: "Se reconhecer de novo pode ser menos dramático do que parece",
            html: "A reconexão consigo nem sempre começa com uma grande virada. Muitas vezes começa quando você consegue parar de se tratar como projeto de produtividade e passa a levar sua experiência a sério.",
        },
        {
            type: "paragraph",
            html: "Se essa sensação conversa com o seu momento, pode fazer sentido ler a página sobre <a href=\"/experiencia/transicoes-de-vida\">transições de vida</a>, o artigo sobre <a href=\"/vida-urbana-e-sobrecarga/sinais-de-sobrecarga-emocional-que-passam-despercebidos\">sinais de sobrecarga emocional</a> e a página de <a href=\"/experiencia/autoestima-e-identidade\">autoestima e identidade</a> quando o afastamento de si já estiver tocando também a forma como você se percebe.",
        },
    ],
    faq: [
        {
            question: "Isso significa que estou em crise?",
            answer:
                "Não necessariamente no sentido dramático da palavra. Mas o estranhamento com a própria rotina pode ser um sinal importante de que algo precisa ser escutado antes de endurecer mais.",
        },
        {
            question: "Terapia ajuda quando eu nem sei o que mudar?",
            answer:
                "Sim. A terapia não exige que você chegue com um plano de ação. Muitas vezes, ela começa justamente no ponto em que ainda não existe clareza.",
        },
    ],
    cta: {
        title: "Se você está vivendo sua rotina no automático e se sentindo cada vez mais distante de si, podemos olhar para isso juntas",
        text: "Não é preciso esperar um colapso para reconhecer que algo já está pedindo cuidado.",
        label: "Falar sobre rotina e identidade",
        href: buildWhatsAppLink("Oi, li o artigo sobre não me reconhecer mais na rotina e gostaria de saber sobre atendimento."),
        secondaryLabel: "Ver página de transições",
        secondaryHref: "/experiencia/transicoes-de-vida",
    },
};

export default post;
