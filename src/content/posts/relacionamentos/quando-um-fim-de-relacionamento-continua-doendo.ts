import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "quando-um-fim-de-relacionamento-continua-doendo",
    categorySlug: "relacionamentos",
    title: "Quando um fim de relacionamento continua doendo mesmo depois que a história acabou por fora",
    description:
        "Uma reflexão sobre pós-término, ambivalência, idealização e a dor que persiste quando a relação já acabou.",
    excerpt:
        "Nem sempre o término termina junto. Às vezes a relação sai do calendário, mas continua ocupando imaginação, culpa, corpo e rotina.",
    date: "2026-03-23",
    readTimeMinutes: 7,
    tags: ["término", "relacionamentos", "ambivalência", "pós-término"],
    heroImage: {
        src: "/images/blog-relacionamentos-termino-livro-aberto-sofa.avif",
        alt: "Livro aberto e virado para baixo sobre o braço de um sofá, sugerindo uma ausência recente",
        width: 900,
        height: 1125,
    },
    snippetAnswer: {
        question: "Por que um fim de relacionamento pode continuar doendo?",
        html: "Um fim de relacionamento pode continuar doendo porque a despedida não envolve apenas a pessoa, mas também rotina, planos, identidade e o futuro imaginado. Essa dor pode precisar de tempo e espaço de elaboração, mesmo quando a relação já terminou por fora.",
    },
    body: [
        {
            type: "paragraph",
            html: "Tem relacionamentos que acabam no papel, no aplicativo, na mudança de casa, na conversa final. E tem relacionamentos que continuam dentro da gente muito depois disso. Não porque você não queira seguir, mas porque algo daquele vínculo ainda segue trabalhando por dentro, em um tempo que não é o dos combinados.",
        },
        {
            type: "paragraph",
            html: "Às vezes o que dói não é exatamente a saudade da pessoa. É a perda do futuro que você imaginava, o vazio de uma rotina que estava desenhada com ela, a repetição silenciosa de conversas que você gostaria de refazer, a culpa por como tudo terminou ou uma certa idealização do que poderia ter sido e não foi.",
        },
        { type: "heading", level: 2, text: "O término que fica" },
        {
            type: "paragraph",
            html: "Nem todo término termina no dia em que termina. Alguns continuam acontecendo por dentro, fora do calendário e fora do combinado. Isso não é sinal de fraqueza, nem de escolha mal feita, nem de apego doentio. Muitas vezes é o tempo próprio daquele vínculo pedindo um espaço que a vida prática não ofereceu.",
        },
        {
            type: "paragraph",
            html: "Quando a relação ocupava um lugar importante na sua identidade, na sua rotina e nos seus planos, é comum que a saída dela produza uma espécie de vazio estrutural. Não se trata só de sentir falta da pessoa. É você tendo que reaprender a habitar espaços que estavam desenhados com a presença dela.",
        },
        { type: "heading", level: 2, text: "Ambivalência não é incoerência" },
        {
            type: "paragraph",
            html: "Uma das coisas mais cansativas do pós-término é conviver com sentimentos que parecem se contradizer. Sentir alívio e saudade no mesmo dia. Saber que fez bem terminar e, ainda assim, querer ligar. Reconhecer que a relação já não cabia e continuar se perguntando se desistiu cedo demais.",
        },
        {
            type: "paragraph",
            html: "Essa mistura não é incoerência. É o jeito como a gente vai se despedindo aos poucos de algo que significou. Forçar uma posição única, tentar encaixar tudo em uma explicação fechada ou exigir de si uma lucidez imediata costuma travar mais do que desatar.",
        },
        { type: "heading", level: 2, text: "Quando o pensamento fica girando" },
        {
            type: "paragraph",
            html: "Existe um modo específico de sofrer pós-término que é ficar girando. Revisitar conversas. Reescrever a história procurando o ponto em que tudo desandou. Imaginar o que você teria dito se tivesse sido mais honesta, mais firme, mais gentil. Checar a vida da outra pessoa numa mistura estranha de curiosidade, cobrança e cuidado consigo mesma.",
        },
        {
            type: "paragraph",
            html: "Esse giro nem sempre resolve, mas também não é fácil interromper por vontade. Ele acontece porque alguma parte de você ainda está tentando dar sentido ao que aconteceu. O que costuma ajudar não é se obrigar a parar de pensar, e sim encontrar um lugar onde essas voltas possam ganhar contorno, em vez de só rodarem em silêncio.",
        },
        {
            type: "callout",
            title: "Seguir em frente nem sempre se parece com o que imaginamos",
            html: "Às vezes seguir não é deixar de lembrar, nem deixar de sentir. É conseguir lembrar sem ser puxada inteira de volta por aquilo.",
        },
        { type: "heading", level: 2, text: "Quando vale levar isso para a conversa terapêutica" },
        {
            type: "paragraph",
            html: "Não existe um marco claro que separe o pós-término que se atravessa sozinha do pós-término que pede acompanhamento. Mas costuma fazer diferença procurar um espaço de escuta quando você percebe que está girando há tempo demais, quando a dor começa a ocupar áreas da vida que não tinham relação direta com aquela relação, ou quando a sensação é de que falta lugar dentro da sua rotina para simplesmente sentir o que está ali.",
        },
        {
            type: "paragraph",
            html: "Se esse tema está vivo para você, pode fazer sentido visitar também a página de <a href=\"/experiencia/relacionamentos-e-rupturas\">relacionamentos e rupturas</a>, o texto sobre <a href=\"/luto-e-perdas/luto-nao-e-linear\">luto não linear</a> — porque término também pode ser uma forma de luto — ou a leitura sobre <a href=\"/acp-e-autoconhecimento/o-que-a-abordagem-centrada-na-pessoa-oferece-na-pratica\">como a abordagem aparece na prática</a>, se você quiser sentir melhor o tipo de escuta oferecido aqui.",
        },
    ],
    faq: [
        {
            question: "Quanto tempo é normal sofrer depois de um término?",
            answer:
                "Não existe um prazo único. O que importa é observar se a dor está encontrando espaço para ser sentida e nomeada, ou se você está girando sozinha dentro dela por tempo demais.",
        },
        {
            question: "Sentir alívio e tristeza ao mesmo tempo é contraditório?",
            answer:
                "Não. Ambivalência é muito comum em términos. Você pode reconhecer que a relação fazia mal e, ainda assim, sofrer com a perda dela.",
        },
    ],
    cta: {
        title: "Se o término acabou por fora, mas continua doendo por dentro, vale trazer isso para a conversa",
        text: "Acompanhamento terapêutico pode ajudar quando a história parece não se fechar sozinha.",
        label: "Falar sobre pós-término",
        href: buildWhatsAppLink("Oi, li o artigo sobre quando um fim de relacionamento continua doendo e gostaria de saber sobre atendimento."),
        secondaryLabel: "Ver página de relacionamentos",
        secondaryHref: "/experiencia/relacionamentos-e-rupturas",
    },
};

export default post;
