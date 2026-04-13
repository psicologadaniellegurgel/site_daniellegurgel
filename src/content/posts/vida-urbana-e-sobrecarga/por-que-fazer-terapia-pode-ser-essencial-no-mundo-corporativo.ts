import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "por-que-fazer-terapia-pode-ser-essencial-no-mundo-corporativo",
    categorySlug: "vida-urbana-e-sobrecarga",
    title: "Por que fazer terapia pode ser essencial no mundo corporativo",
    description:
        "Uma reflexão sobre como a terapia pode ajudar a elaborar pressão, metas, autocobrança e excesso de exigência no contexto de trabalho.",
    excerpt:
        "No mundo corporativo, cuidar de si não é luxo. Terapia pode ser um espaço importante para ouvir o que a rotina acelerada costuma empurrar para debaixo do tapete.",
    date: "2026-03-20",
    readTimeMinutes: 5,
    tags: ["mundo corporativo", "trabalho", "sobrecarga", "terapia", "autocobrança"],
    heroImage: {
        src: "/images/blog-urbano-corporativo-janela-predios-reflexo.avif",
        alt: "Reflexo de luzes de prédios corporativos em uma vidraça com uma planta de escritório",
        width: 900,
        height: 1125,
    },
    snippetAnswer: {
        question: "Por que fazer terapia pode ajudar no mundo corporativo?",
        html: "A terapia pode ajudar no contexto corporativo ao oferecer um espaço para reconhecer desgaste, autocobrança, limites e o modo como o trabalho atravessa a vida emocional. Não é uma consultoria de produtividade; é um cuidado para escutar o que a rotina de performance costuma silenciar.",
    },
    body: [
        {
            type: "paragraph",
            html: "O ambiente corporativo costuma valorizar rapidez, performance e disponibilidade. Em muitos contextos, sentir muito parece atrapalhar. Aos poucos, a pessoa vai aprendendo a funcionar antes de perceber o que isso já está custando por dentro.",
        },
        {
            type: "paragraph",
            html: "Fazer terapia nesse contexto não significa buscar uma fórmula para produzir mais. Significa criar um espaço em que você possa se escutar com menos pressa, reconhecer sinais de desgaste e entender melhor como a pressão do trabalho atravessa seu corpo, suas relações e sua forma de se tratar.",
        },
        {
            type: "paragraph",
            html: "Muita gente só leva isso a sério quando o corpo ou a rotina já colapsaram. Mas, em vários casos, o sofrimento aparece antes: na irritação constante, no sono ruim, na sensação de que até os momentos livres continuam colonizados pelo trabalho.",
        },
        {
            type: "heading",
            level: 2,
            text: "O que a terapia pode ajudar você a observar",
        },
        {
            type: "list",
            items: [
                "Padrões de autocobrança que parecem normais porque foram naturalizados.",
                "Dificuldade de descansar mesmo fora do expediente.",
                "Medo constante de falhar, decepcionar ou perder espaço.",
                "Distanciamento do que faz sentido para você além da função profissional.",
            ],
        },
        {
            type: "heading",
            level: 2,
            text: "Não é sobre ter respostas imediatas",
        },
        {
            type: "paragraph",
            html: "A terapia não é uma consultoria de produtividade. Ela não existe para otimizar você como recurso. O trabalho pode ajudar a nomear conflitos, ampliar consciência e abrir espaço para escolhas menos automáticas. Em uma rotina exigente, isso já é muita coisa.",
        },
        {
            type: "callout",
            title: "Cuidar de si no trabalho não é indulgência",
            html: "Em contextos muito exigentes, pausar para se escutar pode parecer perda de tempo. Mas, sem esse movimento, é fácil se afastar de si enquanto continua entregando por fora.",
        },
        {
            type: "paragraph",
            html: "Se esse tema conversa com o seu momento, vale ler também <a href=\"/vida-urbana-e-sobrecarga/sinais-de-sobrecarga-emocional-que-passam-despercebidos\">sinais de sobrecarga emocional que passam despercebidos</a>, o texto sobre <a href=\"/vida-urbana-e-sobrecarga/quando-voce-nao-se-reconhece-mais-na-propria-rotina\">não se reconhecer mais na própria rotina</a> e a página de <a href=\"/servicos/psicoterapia-online\">psicoterapia online</a> se o deslocamento já estiver pesando demais na sua semana.",
        },
    ],
    faq: [
        {
            question: "Terapia no contexto corporativo serve só para burnout?",
            answer:
                "Não. Ela pode ajudar em sobrecarga, perfeccionismo, conflitos profissionais, crises de sentido, dificuldade de limite e outros impasses do trabalho.",
        },
        {
            question: "Fazer terapia significa que eu não estou dando conta?",
            answer:
                "Não. Muitas vezes significa justamente que você quer olhar com mais cuidado para o que está vivendo antes que tudo precise virar colapso para merecer atenção.",
        },
    ],
    cta: {
        title: "Se o trabalho tem ocupado espaço demais por dentro, podemos abrir uma conversa sobre isso",
        text: "Você pode me escrever dizendo que quer entender como a terapia pode ajudar no contexto profissional.",
        label: "Conversar sobre trabalho e sobrecarga",
        href: buildWhatsAppLink("Oi, li o artigo sobre terapia no mundo corporativo e gostaria de entender como a psicoterapia pode me ajudar nesse contexto."),
        secondaryLabel: "Ver página sobre sobrecarga",
        secondaryHref: "/experiencia/ansiedade-e-sobrecarga",
    },
};

export default post;
