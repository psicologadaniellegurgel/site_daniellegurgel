import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "o-que-esperar-da-terapia",
    categorySlug: "psicoterapia",
    title: "O que esperar da terapia quando você ainda não confia de primeira e não quer respostas prontas",
    description:
        "Um texto sobre confiança, autonomia e o que realmente pode ser esperado de um processo terapêutico humanista.",
    excerpt:
        "Você não precisa confiar cegamente na primeira sessão, nem esperar que a terapia resolva sua vida por você. O trabalho começa de um jeito mais humano do que isso.",
    date: "2026-03-25",
    readTimeMinutes: 7,
    tags: ["o que esperar da terapia", "confiança", "primeira sessão", "autonomia", "ACP"],
    heroImage: {
        src: "/images/blog-psicoterapia-expectativa-porta-entreaberta-luz.avif",
        alt: "Luz dourada intensa vindo de um vão de porta entreaberta, sugerindo autonomia e descoberta",
        width: 900,
        height: 1125,
    },
    snippetAnswer: {
        question: "O que esperar da terapia?",
        html: "Você pode esperar um espaço de escuta, construção de confiança e elaboração da própria experiência, não respostas prontas sobre o que fazer da sua vida. Na terapia, o processo costuma acontecer aos poucos, no ritmo possível para cada pessoa.",
    },
    body: [
        {
            type: "paragraph",
            html: "Existe uma expectativa muito difundida de que terapia é o lugar onde você chega, confia imediatamente na profissional e recebe respostas seguras sobre o que fazer com a própria vida. Só que, na experiência real, quase nunca é assim que um processo começa.",
        },
        {
            type: "paragraph",
            html: "Para mim, a ajuda psicológica está profundamente ligada à construção de uma relação de confiança. E confiança não aparece por exigência. Ela se constrói aos poucos, quando você percebe que pode existir ali um espaço de escuta sem julgamento, onde sua história não precisa ser resumida para ser legitimada.",
        },
        {
            type: "heading",
            level: 2,
            text: "Por que você não precisa confiar de primeira",
        },
        {
            type: "paragraph",
            html: "Confiar em alguém que você acabou de conhecer pode ser difícil, especialmente se sua história inclui experiências de invasão, crítica ou desamparo. Em uma clínica humanista, isso é respeitado. Não espero que você chegue pronta para revelar tudo. O processo terapêutico precisa ter fôlego para acolher também a cautela.",
        },
        {
            type: "heading",
            level: 2,
            text: "E por que terapia não entrega soluções prontas",
        },
        {
            type: "paragraph",
            html: "Meu papel não é dizer o que você deve fazer com sua vida. O trabalho é criar condições para que você reflita com mais profundidade, reconheça seus sentidos, conflitos e desejos, e encontre respostas que tenham consistência para você. Solução imposta de fora pode até parecer rápida, mas nem sempre produz mudança real.",
        },
        {
            type: "list",
            items: [
                "A terapia pode ampliar sua compreensão sobre o que você vive.",
                "Pode ajudar a diferenciar urgência de necessidade profunda.",
                "Pode fortalecer sua autonomia para decidir com menos violência interna.",
            ],
        },
        {
            type: "heading",
            level: 2,
            text: "O que costuma ajudar nas primeiras sessões",
        },
        {
            type: "list",
            items: [
                "Perceber se existe respeito ao seu tempo e ao seu jeito de chegar.",
                "Notar se a conversa abre espaço para pensar, e não só para responder rápido.",
                "Observar se você sai do encontro mais em contato consigo, mesmo que ainda mexida.",
            ],
        },
        {
            type: "callout",
            title: "O processo é seu",
            html: "Você decide o que quer dizer, no tempo que for possível. E isso não enfraquece a terapia. Pelo contrário: ajuda a construir uma relação mais ética e mais verdadeira.",
        },
        {
            type: "paragraph",
            html: "Se quiser aprofundar esse tema, você pode ler também <a href=\"/psicoterapia/como-funciona-a-primeira-sessao\">como funciona a primeira sessão</a>, <a href=\"/psicoterapia/primeira-vez-no-psicologo-o-que-e-terapia\">primeira vez no psicólogo: o que é terapia?</a>, o texto sobre <a href=\"/acp-e-autoconhecimento/o-que-a-abordagem-centrada-na-pessoa-oferece-na-pratica\">como a Abordagem Centrada na Pessoa aparece na prática</a>, conhecer a <a href=\"/servicos/psicoterapia-presencial-higienopolis\">psicoterapia presencial em Higienópolis</a> ou ver como atuo em situações de <a href=\"/experiencia/ansiedade-e-sobrecarga\">ansiedade e sobrecarga</a>.",
        },
    ],
    faq: [
        {
            question: "Se eu não confiar logo, significa que terapia não vai funcionar?",
            answer:
                "Não. A confiança costuma ser construída gradualmente. O importante é perceber se existe abertura, respeito e condições para que essa relação se desenvolva com o tempo.",
        },
        {
            question: "Terapia ajuda mesmo sem conselhos diretos?",
            answer:
                "Sim. Muitas vezes, o que produz mudança não é ouvir uma orientação pronta, mas conseguir se aproximar do próprio conflito com mais clareza e menos defensividade.",
        },
    ],
    cta: {
        title: "Se você quer entender melhor como esse processo acontece na prática, podemos começar por uma mensagem",
        text: "Não precisa chegar sabendo exatamente o que dizer. Basta me contar que você quer entender como a terapia funciona.",
        label: "Perguntar sobre a terapia",
        href: buildWhatsAppLink("Oi, li o artigo sobre o que esperar da terapia e gostaria de entender melhor como funciona o processo."),
        secondaryLabel: "Ver atendimento online",
        secondaryHref: "/servicos/psicoterapia-online",
    },
};

export default post;
