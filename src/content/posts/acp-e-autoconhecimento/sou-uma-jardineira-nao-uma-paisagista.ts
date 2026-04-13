import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "sou-uma-jardineira-nao-uma-paisagista",
    categorySlug: "acp-e-autoconhecimento",
    title: "Sou uma jardineira, não uma paisagista: uma imagem para entender a essência do trabalho terapêutico",
    description:
        "Uma leitura humanista sobre terapia como cuidado das condições de crescimento, e não como molde externo de comportamento.",
    excerpt:
        "A imagem da jardineira ajuda a entender uma clínica que não tenta formatar sua vida por fora, mas sustentar condições para que você cresça do seu jeito.",
    date: "2026-03-26",
    readTimeMinutes: 5,
    tags: ["ACP", "abordagem centrada na pessoa", "jardineira", "autonomia", "terapia humanista"],
    heroImage: {
        src: "/images/blog-acp-jardineira-planta-vaso-ceramica.avif",
        alt: "Pequena planta crescendo em vaso de cerâmica para artigo sobre a metáfora da jardineira",
        width: 900,
        height: 600,
    },
    snippetAnswer: {
        question: "O que significa ser jardineira, não paisagista, na terapia?",
        html: "Ser jardineira, não paisagista, significa entender a terapia como cuidado das condições de crescimento, não como imposição de um formato externo. A terapeuta acompanha o processo com presença e cuidado, ajudando a pessoa a se escutar sem moldar sua vida de fora.",
    },
    body: [
        {
            type: "paragraph",
            html: "Pode soar estranho encontrar essa frase no site de uma psicóloga, mas ela traduz bem o jeito como compreendo o trabalho clínico: <strong>sou uma jardineira, não uma paisagista</strong>.",
        },
        {
            type: "paragraph",
            html: "A imagem da paisagista ajuda a pensar numa lógica de forma, controle e aparência. Algo precisa ficar bonito, organizado e adequado ao que se espera. Já a imagem da jardineira aponta para outra direção: cuidado com o solo, com o tempo, com a singularidade de cada crescimento.",
        },
        {
            type: "heading",
            level: 2,
            text: "O que essa metáfora diz sobre terapia",
        },
        {
            type: "paragraph",
            html: "Na Abordagem Centrada na Pessoa, partimos da ideia de que cada pessoa traz recursos internos e uma tendência ao desenvolvimento. Isso não quer dizer que tudo flui sozinho, nem que sofrimento e conflito desaparecem. Quer dizer que o trabalho terapêutico não precisa impor um formato pronto para que a vida de alguém faça sentido.",
        },
        {
            type: "list",
            items: [
                "Menos preocupação em ajustar você a um padrão.",
                "Mais atenção ao que está vivo na sua experiência.",
                "Mais respeito ao seu ritmo, à sua história e às suas contradições.",
            ],
        },
        {
            type: "paragraph",
            html: "Quando penso na clínica dessa forma, meu papel não é o de desenhar sua vida de fora para dentro. É o de sustentar um espaço em que você possa se escutar com mais liberdade, reconhecer necessidades, rever caminhos e construir autonomia sem violência interna.",
        },
        {
            type: "heading",
            level: 2,
            text: "Isso não significa deixar tudo correr sozinho",
        },
        {
            type: "paragraph",
            html: "Cuidar do solo não é passividade. Exige presença, rigor, atenção ao tempo e disposição para acompanhar o que está vivo sem violentar o processo. Na clínica, isso significa estar com você de um jeito implicado, sem tomar sua vida das suas mãos.",
        },
        {
            type: "callout",
            title: "Crescimento não é padronização",
            html: "Nem toda mudança importante parece eficiente, linear ou bonita enquanto acontece. Às vezes ela começa quando você para de se forçar a caber.",
        },
        {
            type: "paragraph",
            html: "Se quiser aprofundar esse jeito de entender o processo, vale ler também <a href=\"/acp-e-autoconhecimento/o-que-a-abordagem-centrada-na-pessoa-oferece-na-pratica\">o que a Abordagem Centrada na Pessoa oferece na prática</a>, conhecer a <a href=\"/servicos/psicoterapia-presencial-higienopolis\">psicoterapia presencial em Higienópolis</a> e ver como essa perspectiva se aplica a quem vive momentos de <a href=\"/experiencia/transicoes-de-vida\">transições de vida</a>.",
        },
    ],
    faq: [
        {
            question: "Essa ideia significa que a terapeuta não intervém?",
            answer:
                "Não. Significa que a intervenção não parte do controle da sua vida, e sim da construção de um espaço de escuta, presença e favorecimento do seu processo.",
        },
        {
            question: "Autonomia quer dizer que preciso dar conta de tudo sozinha?",
            answer:
                "Não. Autonomia, aqui, tem relação com poder se aproximar de si mesma e das suas escolhas com mais clareza, apoio e responsabilidade.",
        },
    ],
    references: [
        "Rogers, C. R. Tornar-se pessoa.",
        "Wood, J. K. Abordagem centrada na pessoa.",
    ],
    cta: {
        title: "Se esse jeito de pensar a terapia fez sentido, a conversa pode continuar",
        text: "Você pode me escrever dizendo que veio pelo texto da jardineira e quer entender como essa abordagem aparece no atendimento.",
        label: "Conversar sobre a abordagem",
        href: buildWhatsAppLink("Oi, li o texto sobre a metáfora da jardineira e gostaria de entender como essa abordagem aparece na terapia."),
        secondaryLabel: "Ver página sobre Danielle",
        secondaryHref: "/sobre",
    },
};

export default post;
