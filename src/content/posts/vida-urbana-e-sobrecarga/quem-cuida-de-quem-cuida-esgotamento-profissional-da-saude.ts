import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "quem-cuida-de-quem-cuida-esgotamento-profissional-da-saude",
    categorySlug: "vida-urbana-e-sobrecarga",
    title: "Quem cuida de quem cuida? O esgotamento silencioso de profissionais da saúde",
    description:
        "Profissionais da saúde convivem com sobrecarga emocional silenciosa. Quando cuidar dos outros se torna tudo, o contato consigo vai ficando menor.",
    excerpt:
        "A sobrecarga emocional de quem trabalha com saúde não aparece de uma vez. Ela se instala aos poucos — até que existir como pessoa, e não só como função, começa a parecer luxo.",
    date: "2026-05-03",
    readTimeMinutes: 7,
    tags: ["profissionais da saúde", "esgotamento emocional", "sobrecarga", "saúde mental", "burnout"],
    heroImage: {
        src: "/images/blog-sobrecarga-cuidador-janela-pausa.avif",
        alt: "Pessoa sentada em silêncio junto a uma janela com luz dourada de fim de tarde, em pausa reflexiva",
        width: 900,
        height: 1125,
    },
    snippetAnswer: {
        question: "Por que profissionais da saúde têm dificuldade de cuidar da própria saúde mental?",
        html: "A sobrecarga emocional em profissionais da saúde costuma se instalar de forma silenciosa, como consequência de uma rotina que exige disponibilidade constante, acúmulo de histórias difíceis e pouca margem para reconhecer limites. Com o tempo, a identidade pessoal vai ficando em segundo plano, e o profissional passa a existir mais como função do que como pessoa.",
    },
    body: [
        {
            type: "paragraph",
            html: "Você termina o plantão. Entra no carro ou no metrô. O corpo vai para casa, mas a cabeça ainda está lá. Repassa o que disse, o que deixou de dizer. Pensa no paciente que piorou, na família que recebeu a notícia. Em algum momento, chega — mas não inteiramente. Come qualquer coisa, deita, e mesmo com o cansaço, o sono demora. De manhã, o ciclo recomeça.",
        },
        {
            type: "paragraph",
            html: "Não é um dia ruim. É o formato do dia.",
        },
        {
            type: "heading",
            level: 2,
            text: "Quando cuidar se torna tudo o que você é",
        },
        {
            type: "paragraph",
            html: "Existe uma lógica que se instala devagar: você está ali para o outro. Sempre. A formação inteira foi construída em torno disso. Os anos de estudo, os estágios, os plantões. Tudo converge para uma direção: estar disponível.",
        },
        {
            type: "paragraph",
            html: "E dentro dessa lógica, o que acontece com você vai ficando menor. Não por descuido. Mas porque parece que não cabe — ou que não deveria caber. Existe uma expectativa quase tácita de que quem escolheu cuidar precisa dar conta. De que o profissional da saúde é, por definição, alguém que aguenta mais. Alguém que sabe lidar.",
        },
        {
            type: "paragraph",
            html: "Só que saber lidar com o sofrimento do outro não protege do próprio.",
        },
        {
            type: "heading",
            level: 2,
            text: "O que se acumula quando não há onde colocar",
        },
        {
            type: "paragraph",
            html: "Não é só o cansaço físico — embora esse também pese. É o acúmulo de histórias. É segurar o choro de alguém enquanto esconde o seu. É lidar com a morte, com a impotência, com decisões que não têm resposta certa — e seguir para o próximo atendimento como se houvesse um botão de reset entre um e outro.",
        },
        {
            type: "list",
            items: [
                "Engolir a frustração depois de um desfecho que ninguém queria.",
                "Ouvir relatos que ficam no corpo muito depois do turno acabar.",
                "Não ter com quem falar sobre a dúvida, o erro ou o medo — sem parecer frágil.",
                "Conviver com a sensação de que descansar é quase um luxo, ou pior, um sinal de fraqueza.",
            ],
        },
        {
            type: "paragraph",
            html: "Com o tempo, isso vira paisagem interna. Você se acostuma. E se acostumar é, muitas vezes, o pior sinal — porque significa que já ultrapassou limites sem perceber.",
        },
        {
            type: "heading",
            level: 2,
            text: "O paradoxo de saber e não conseguir acessar",
        },
        {
            type: "paragraph",
            html: "Talvez o mais difícil para quem trabalha com saúde seja justamente isso: você sabe. Sabe o que é esgotamento. Sabe o que o estresse prolongado faz. Reconhece os sinais — nos outros. Em si, a leitura é outra. A própria dor parece menor, menos urgente, menos legítima.",
        },
        {
            type: "paragraph",
            html: "Existe uma armadilha nisso. Porque o conhecimento técnico não substitui o espaço de escuta. Saber dar nome ao que acontece não é o mesmo que ter um lugar seguro para sentir.",
        },
        {
            type: "paragraph",
            html: "E quando o ambiente inteiro reforça a ideia de que você está ali para funcionar — e não para precisar —, fica difícil pedir algo que soe como permissão para ser vulnerável.",
        },
        {
            type: "callout",
            title: "Cuidar sem parar não é força",
            html: "Muitas vezes, a dificuldade de parar não vem de dedicação — vem de uma sensação de que parar é perigoso demais. Quando o cuidado com o outro se torna a única forma de existir, vale perguntar: o que sobra de você quando o jaleco sai?",
        },
        {
            type: "heading",
            level: 2,
            text: "Ser pessoa antes de ser função",
        },
        {
            type: "paragraph",
            html: "Nenhum profissional da saúde é feito só de técnica. Por trás do jaleco, do prontuário, da postura profissional, existe uma pessoa que sente, duvida, se cansa, se frustra, se entristece. E essa pessoa também precisa de espaço — não para ser corrigida, otimizada ou devolvida mais produtiva ao trabalho. Mas para existir.",
        },
        {
            type: "paragraph",
            html: "Um espaço onde não precise ter resposta. Onde dúvida não seja falha. Onde o silêncio seja acolhido como parte do processo, e não como sinal de que algo precisa ser resolvido com urgência.",
        },
        {
            type: "paragraph",
            html: "Reconhecer que você precisa desse espaço não diminui sua competência. Humaniza. E, muitas vezes, é o que permite continuar cuidando — sem se perder nesse caminho.",
        },
        {
            type: "paragraph",
            html: "Se este texto conversou com algo que você vive, pode valer a pena ler também sobre os <a href=\"/vida-urbana-e-sobrecarga/sinais-de-sobrecarga-emocional-que-passam-despercebidos\">sinais de sobrecarga emocional que passam despercebidos</a>, o texto sobre <a href=\"/vida-urbana-e-sobrecarga/quando-voce-nao-se-reconhece-mais-na-propria-rotina\">não se reconhecer mais na própria rotina</a> e a página sobre <a href=\"/experiencia/ansiedade-e-sobrecarga\">ansiedade e sobrecarga</a>. O consultório fica em <a href=\"/localizacao/psicologa-higienopolis-sp\">Higienópolis</a>, perto de hospitais e clínicas da região — se você trabalha por ali, o acesso é fácil. E se o deslocamento é mais uma exigência numa rotina já cheia, o formato de <a href=\"/servicos/psicoterapia-online\">psicoterapia online</a> pode ser um começo mais possível.",
        },
    ],
    faq: [
        {
            question: "Profissional da saúde também precisa de terapia?",
            answer:
                "Sim. Estar exposto diariamente ao sofrimento do outro, à pressão por resultados e à responsabilidade sobre vidas não torna ninguém imune ao próprio esgotamento. A terapia pode ser um espaço para reconhecer o que a rotina profissional não costuma acolher.",
        },
        {
            question: "Pedir ajuda significa que não estou dando conta?",
            answer:
                "Não. Significa que você está reconhecendo os seus limites — o que é, na verdade, uma forma de responsabilidade consigo. Ninguém deveria precisar colapsar para merecer escuta.",
        },
        {
            question: "Como perceber que o esgotamento já passou do limite?",
            answer:
                "Alguns sinais: dificuldade de se desligar do trabalho mesmo fora dele, irritabilidade persistente, sensação de vazio ou indiferença, perda de sentido no que antes motivava, alterações no sono e dificuldade de sentir prazer nas coisas fora da rotina profissional.",
        },
        {
            question: "Terapia online funciona para quem tem rotina intensa na saúde?",
            answer:
                "Sim. A terapia online permite encaixar as sessões com mais flexibilidade, sem precisar de deslocamento. Para profissionais com horários irregulares, pode ser o formato que viabiliza o início do cuidado.",
        },
    ],
    references: [
        "MASLACH, Christina; LEITER, Michael P. The Truth About Burnout. São Francisco: Jossey-Bass, 1997.",
        "Organização Mundial da Saúde. Burn-out: an occupational phenomenon. International Classification of Diseases, 11th Revision (ICD-11), 2019.",
    ],
    cta: {
        title: "Se cuidar de tanta gente tem custado o contato consigo, talvez valha a pena abrir um espaço para isso",
        text: "Você pode me escrever contando o que está vivendo. Não precisa ter tudo organizado — só vontade de ser ouvido como pessoa, não como profissional.",
        label: "Conversar sobre o que estou vivendo",
        href: buildWhatsAppLink("Oi, li o artigo sobre esgotamento emocional de profissionais da saúde e gostaria de saber sobre o atendimento."),
        secondaryLabel: "Ansiedade e sobrecarga",
        secondaryHref: "/experiencia/ansiedade-e-sobrecarga",
    },
};

export default post;
