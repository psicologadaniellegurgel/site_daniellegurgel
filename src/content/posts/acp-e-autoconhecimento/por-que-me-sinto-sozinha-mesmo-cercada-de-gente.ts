import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "por-que-me-sinto-sozinha-mesmo-cercada-de-gente",
    categorySlug: "acp-e-autoconhecimento",
    title: "Por que me sinto sozinha mesmo cercada de gente — e como a terapia pode ajudar",
    description:
        "Por que você se sente sozinha mesmo cercada de gente? Carl Rogers escreveu que toda pessoa é uma ilha — e que a ponte começa no contato consigo mesma.",
    excerpt:
        "A conexão verdadeira com os outros começa quando existe um espaço onde você pode, antes de tudo, ser quem é. Uma reflexão a partir de Carl Rogers.",
    date: "2026-04-22",
    readTimeMinutes: 7,
    tags: ["Carl Rogers", "tornar-se pessoa", "autenticidade", "conexão", "ACP"],
    heroImage: {
        src: "/images/blog-acp-ilha-ponte-janela-luz.avif",
        alt: "Luz suave de janela sobre ponte de madeira ao fundo, sugerindo conexão e possibilidade",
        width: 900,
        height: 1125,
    },
    snippetAnswer: {
        question: "Por que me sinto sozinha mesmo tendo pessoas ao redor?",
        html: "Essa sensação costuma aparecer quando existe uma distância entre quem você é por dentro e o que consegue mostrar. Muitas vezes, não é falta de pessoas — é falta de um espaço onde você possa existir sem editar o que sente. A terapia pode ajudar justamente nisso: a recuperar o contato consigo mesma e, a partir daí, construir conexões mais verdadeiras.",
    },
    body: [
        {
            type: "paragraph",
            html: "Às vezes, mesmo cercada de pessoas, você se sente profundamente sozinha. Não é exatamente solidão por falta de companhia — é algo mais sutil. É a sensação de que existe uma distância entre o que você mostra e o que você realmente sente. Como se houvesse um vidro entre você e o mundo: as pessoas estão ali, mas o contato verdadeiro não acontece.",
        },
        {
            type: "heading",
            level: 2,
            text: "A ilha e a ponte",
        },
        {
            type: "quote",
            text: "Toda pessoa é uma ilha, no sentido muito concreto do termo; a pessoa só pode construir uma ponte para comunicar com as outras ilhas se primeiramente se dispôs a ser ela mesma e se lhe é permitido ser ela mesma.",
            cite: "Carl Rogers, Tornar-se Pessoa, p. 33",
        },
        {
            type: "paragraph",
            html: "Essa frase carrega uma ideia que pode parecer paradoxal: para se aproximar dos outros de verdade, o primeiro movimento não é em direção ao outro — é em direção a si mesma. A ponte não nasce do esforço de agradar, de se encaixar ou de performar uma versão mais aceitável de quem você é. Ela nasce de um lugar diferente: do contato com o que você sente, pensa e precisa de fato.",
        },
        {
            type: "heading",
            level: 2,
            text: "Por que é tão difícil se dispor a ser quem se é",
        },
        {
            type: "paragraph",
            html: "A questão é que se dispor a ser quem se é não é tão simples quanto parece. Desde muito cedo, aprendemos a adaptar o que mostramos ao que o ambiente tolera. Uma criança que percebe que sua tristeza incomoda aprende a escondê-la. Uma mulher que cresce ouvindo que precisa ser forte o tempo todo aprende a engolir o cansaço. Um profissional que é valorizado pela performance aprende a tratar a vulnerabilidade como falha.",
        },
        {
            type: "paragraph",
            html: "Com o tempo, essas adaptações deixam de parecer escolhas — passam a parecer identidade. E aí, quando alguém pergunta \"o que você realmente quer?\" ou \"como você se sente de verdade?\", a resposta demora. Não porque a pessoa não queira responder. Mas porque, em algum momento, ela perdeu o acesso.",
        },
        {
            type: "paragraph",
            html: "Esse afastamento de si não acontece por fraqueza. Acontece por sobrevivência. E é justamente por isso que voltar a se ouvir precisa de um lugar seguro.",
        },
        {
            type: "heading",
            level: 2,
            text: "O ambiente terapêutico como lugar de permissão",
        },
        {
            type: "paragraph",
            html: "Rogers não fala só em \"se dispor a ser ela mesma\". Ele acrescenta algo fundamental: <em>\"e se lhe é permitido ser ela mesma\"</em>. Essa segunda parte muda tudo. Porque não basta querer — é preciso que haja um espaço onde isso seja possível.",
        },
        {
            type: "paragraph",
            html: "O ambiente terapêutico, quando funciona, é exatamente esse espaço. Não porque a terapeuta diga \"aqui você pode ser quem é\" como uma instrução de fora. Mas porque a qualidade da relação — a escuta sem julgamento, a presença genuína, a aceitação do que aparece — vai criando, sessão após sessão, uma experiência diferente.",
        },
        {
            type: "paragraph",
            html: "Uma experiência em que você não precisa editar o que sente antes de dizer. Em que o silêncio não é constrangimento, mas espaço. Em que contradizer-se não é sinal de incoerência, mas parte de um processo de descoberta.",
        },
        {
            type: "paragraph",
            html: "É nesse tipo de clima que a pessoa começa a se reencontrar. Não de uma vez. Não com clareza total. Mas com um pouco mais de liberdade para ser, sem precisar ser \"de um jeito certo\".",
        },
        {
            type: "heading",
            level: 2,
            text: "A ponte que nasce de dentro",
        },
        {
            type: "paragraph",
            html: "Quando alguém consegue se ouvir com mais honestidade — sem tanto medo de se julgar —, algo muda também na relação com os outros.",
        },
        {
            type: "paragraph",
            html: "Não é que a pessoa se torne mais sociável ou mais comunicativa no sentido superficial. O que muda é a qualidade da presença. Quando você não está gastando energia para manter uma fachada, sobra espaço para estar de fato ali. E quando você se reconhece com mais inteireza, consegue reconhecer o outro com mais inteireza também.",
        },
        {
            type: "paragraph",
            html: "A ponte de que Rogers fala não é feita de esforço social. Ela é feita de verdade. E a verdade precisa de um chão seguro para aparecer.",
        },
        {
            type: "list",
            items: [
                "Conexão real não se constrói tentando parecer quem o outro espera.",
                "Ela nasce quando você consegue estar presente sem se esconder.",
                "E isso começa no contato com o que você sente — mesmo quando é confuso.",
            ],
        },
        {
            type: "callout",
            title: "Ser uma ilha não é sentença de solidão",
            html: "A metáfora de Rogers não fala de isolamento como destino. Fala de uma condição: somos singulares, e é justamente dessa singularidade que pode nascer um encontro real com o outro — quando há espaço para que ela exista.",
        },
        {
            type: "paragraph",
            html: "Se você sente que tem vivido numa espécie de ilha sem pontes — presente nos lugares, mas sem conseguir se sentir de fato conectada —, talvez o primeiro passo não seja se esforçar mais para chegar aos outros. Talvez seja se permitir chegar até você mesma.",
        },
        {
            type: "paragraph",
            html: "Isso não precisa acontecer de uma vez, nem precisa vir com respostas prontas. A terapia pode ser esse espaço de encontro — primeiro consigo, e depois, como consequência, com os outros.",
        },
        {
            type: "paragraph",
            html: "Se esse texto fez sentido, pode valer a pena ler também sobre <a href=\"/acp-e-autoconhecimento/tornar-se-quem-se-e\">o movimento de tornar-se quem se é</a>, que aprofunda o processo de abandonar fachadas e se permitir ser. A página sobre <a href=\"/experiencia/autoestima-e-identidade\">autoestima e identidade</a> pode ajudar a nomear algo que talvez esteja presente na sua experiência. O consultório fica em Higienópolis, na Av. Angélica — você pode ver como chegar na página de <a href=\"/localizacao/psicologa-higienopolis-sp\">localização</a> ou conhecer o <a href=\"/servicos/psicoterapia-presencial-higienopolis\">atendimento presencial</a>.",
        },
    ],
    faq: [
        {
            question: "É possível se sentir sozinha mesmo cercada de gente?",
            answer: "Sim, e é mais comum do que parece. Essa sensação costuma aparecer quando existe uma distância entre o que você mostra e o que realmente sente. Não é falta de pessoas ao redor — é falta de um espaço onde você possa ser inteira.",
        },
        {
            question: "A terapia pode me ajudar a me conectar melhor com as pessoas?",
            answer: "Pode, mas não do jeito que a maioria espera. A terapia não ensina técnicas de comunicação — ela cria condições para que você entre em contato consigo mesma com mais liberdade. E quando isso acontece, a conexão com os outros costuma mudar também, de forma natural.",
        },
        {
            question: "Essa dificuldade de conexão é um traço de personalidade?",
            answer: "Nem sempre. Muitas vezes, a dificuldade de se conectar não vem de \"ser assim\", mas de ter aprendido a se proteger em ambientes onde ser você mesma não era seguro. Quando as condições mudam, essa capacidade de contato costuma reaparecer.",
        },
        {
            question: "E se eu não souber me expressar na terapia?",
            answer: "Não é preciso chegar sabendo. Na verdade, a dificuldade de se expressar costuma ser parte do que se trabalha. O espaço terapêutico não exige clareza — ele ajuda a construí-la, no ritmo que fizer sentido para você.",
        },
        {
            question: "Terapia online também funciona para quem se sente isolada?",
            answer: "Sim. A qualidade da conexão terapêutica não depende de estar no mesmo espaço físico. O que importa é a presença, a escuta e a segurança da relação — e isso pode acontecer também no formato online.",
        },
    ],
    references: [
        "ROGERS, Carl R. Tornar-se Pessoa. São Paulo: Martins Fontes, 1961. (p. 33).",
    ],
    cta: {
        title: "Se a ideia de construir uma ponte consigo mesma fez sentido, esse pode ser um bom começo.",
        text: "Você pode me escrever contando o que leu. Não precisa ter clareza sobre o que procura — só vontade de começar já é bastante.",
        label: "Falar no WhatsApp",
        href: buildWhatsAppLink("Oi Danielle, li o artigo sobre me sentir sozinha mesmo cercada de gente e gostaria de saber sobre o atendimento."),
        secondaryLabel: "Autoestima e identidade",
        secondaryHref: "/experiencia/autoestima-e-identidade",
    },
};

export default post;
