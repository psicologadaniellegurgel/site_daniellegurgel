import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "o-que-a-abordagem-centrada-na-pessoa-oferece-na-pratica",
    categorySlug: "acp-e-autoconhecimento",
    title: "O que a Abordagem Centrada na Pessoa oferece na prática quando você está cansada de respostas prontas",
    description:
        "Uma explicação clara e humana sobre a Abordagem Centrada na Pessoa e o que muda na prática clínica quando a relação vira centro do trabalho.",
    excerpt:
        "ACP não é ausência de direção. É um jeito rigoroso de clinicar em que escuta, autenticidade e aceitação criam condições para que você encontre linguagem própria.",
    date: "2026-03-25",
    readTimeMinutes: 8,
    tags: ["ACP", "abordagem centrada na pessoa", "autoconhecimento", "Carl Rogers"],
    heroImage: {
        src: "/images/blog-acp-pratica-cadeiras-proximas-luz-difusa.avif",
        alt: "Detalhe de duas cadeiras em consultório sugerindo conversa para artigo sobre ACP na prática",
        width: 900,
        height: 600,
    },
    snippetAnswer: {
        question: "O que a Abordagem Centrada na Pessoa oferece na prática?",
        html: "A Abordagem Centrada na Pessoa oferece uma relação terapêutica baseada em escuta, presença autêntica e aceitação, sem respostas prontas sobre quem você deve ser. Na prática, isso cria um espaço para compreender a própria experiência com mais liberdade e cuidado.",
    },
    featured: true,
    body: [
        {
            type: "paragraph",
            html: "Muita gente chega à terapia perguntando se a profissional vai dizer o que fazer. Outras chegam justamente cansadas de receber opinião demais. A <strong>Abordagem Centrada na Pessoa</strong> costuma fazer sentido para quem percebe que conselho nem sempre gera mudança, porque o problema não é falta de lista, e sim falta de um espaço em que a própria experiência possa ser ouvida de verdade.",
        },
        {
            type: "heading",
            level: 2,
            text: "Na prática, o que muda",
        },
        {
            type: "paragraph",
            html: "Na ACP, a relação terapêutica não é um detalhe simpático ao redor da técnica. Ela é parte central do trabalho. Isso significa que o processo se organiza a partir de uma escuta real, de uma presença autêntica e de uma aceitação que não exige que você chegue mais organizada, mais funcional ou mais convincente para merecer atenção.",
        },
        {
            type: "list",
            items: [
                "Você não é tratada como um caso a ser encaixado em receita.",
                "O tempo do processo respeita o que ainda está sem forma.",
                "A escuta não tenta te corrigir o tempo inteiro.",
            ],
        },
        {
            type: "heading",
            level: 2,
            text: "Para quem esse jeito de trabalhar costuma fazer sentido",
        },
        {
            type: "list",
            items: [
                "Para quem está cansada de conselhos que não tocam o que realmente sente.",
                "Para quem precisa de uma relação de cuidado menos invasiva e menos performática.",
                "Para quem quer compreender a própria experiência com mais profundidade, sem ser empurrada para respostas prontas.",
            ],
        },
        {
            type: "heading",
            level: 2,
            text: "Por que isso não significa passividade",
        },
        {
            type: "paragraph",
            html: "Às vezes existe o mito de que uma terapia menos diretiva seria vaga demais. Mas não diretiva não quer dizer indiferente. Quer dizer que a mudança não é empurrada de fora para dentro. Ela é sustentada por um tipo de relação que ajuda você a entrar em contato com o que sente, pensa, deseja e evita, de um modo menos defensivo.",
        },
        {
            type: "callout",
            title: "A metáfora da jardineira",
            html: "Uma imagem útil para falar da ACP é a da jardineira. Não alguém que desenha paisagem para parecer bonita, mas alguém que cuida das condições de crescimento.",
            items: [
                "Menos molde externo.",
                "Mais atenção ao que está vivo na sua experiência.",
                "Menos pressa de produzir resultado performático.",
            ],
        },
        {
            type: "paragraph",
            html: "Se quiser ver como essa abordagem aparece no atendimento, vale conhecer a página <a href=\"/sobre\">sobre Danielle Gurgel</a>, as páginas de <a href=\"/experiencia/luto-e-perdas\">luto e perdas</a> e <a href=\"/experiencia/relacionamentos-e-rupturas\">relacionamentos e rupturas</a>, ou ler <a href=\"/psicoterapia/o-que-esperar-da-terapia\">o que esperar da terapia</a> para enxergar esse jeito de clinicar no começo do processo.",
        },
    ],
    faq: [
        {
            question: "ACP é o mesmo que só ouvir sem intervir?",
            answer:
                "Não. A escuta na ACP é ativa, implicada e rigorosa. O que muda é que a intervenção não assume a forma de controle ou conselho pronto.",
        },
        {
            question: "Essa abordagem serve só para autoconhecimento?",
            answer:
                "Não. Ela pode acompanhar luto, relações difíceis, crises de identidade, sobrecarga e outras experiências clínicas importantes, sempre a partir de uma relação de cuidado consistente.",
        },
    ],
    references: [
        "Rogers, C. R. Tornar-se pessoa.",
        "Rogers, C. R. Terapia centrada no cliente.",
    ],
    cta: {
        title: "Se esse jeito de entender terapia fez sentido, podemos continuar a conversa fora do texto",
        text: "Você pode mandar uma mensagem dizendo que veio pelo artigo sobre ACP e quer saber como isso aparece no atendimento.",
        label: "Falar sobre a abordagem",
        href: buildWhatsAppLink("Oi, li o artigo sobre a Abordagem Centrada na Pessoa e gostaria de entender como isso aparece no atendimento."),
        secondaryLabel: "Conhecer a página sobre",
        secondaryHref: "/sobre",
    },
};

export default post;
