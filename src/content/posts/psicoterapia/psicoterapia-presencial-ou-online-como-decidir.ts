import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "psicoterapia-presencial-ou-online-como-decidir",
    categorySlug: "psicoterapia",
    title: "Psicoterapia presencial ou online: como decidir sem transformar isso em mais uma cobrança",
    description:
        "Um texto direto sobre como escolher entre atendimento presencial e online considerando rotina, privacidade, corpo e qualidade de encontro.",
    excerpt:
        "A melhor escolha nem sempre é a mais idealizada. Muitas vezes, é a que consegue sustentar continuidade, privacidade e qualidade de presença na vida real.",
    date: "2026-03-27",
    readTimeMinutes: 7,
    tags: ["psicoterapia online", "psicoterapia presencial", "primeira decisão", "Higienópolis"],
    heroImage: {
        src: "/images/blog-psicoterapia-formatos-janela-cidade-blur.avif",
        alt: "Através de uma janela de vidro, o blur das luzes da cidade de São Paulo ao fundo",
        width: 900,
        height: 1125,
    },
    snippetAnswer: {
        question: "Como escolher entre psicoterapia presencial e online?",
        html: "A escolha entre psicoterapia presencial e online pode considerar privacidade, deslocamento, energia disponível, rotina e qualidade do encontro. O melhor formato não é o mais idealizado, mas aquele que sustenta melhor a continuidade do processo no seu momento.",
    },
    featured: true,
    body: [
        {
            type: "paragraph",
            html: "A dúvida entre presencial e online costuma parecer técnica, mas ela é muito concreta. Envolve deslocamento, horário, privacidade, cansaço, custo de energia e até o modo como seu corpo responde melhor a um encontro de cuidado.",
        },
        {
            type: "paragraph",
            html: "Em vez de pensar em uma disputa entre formatos, talvez a pergunta mais útil seja: <strong>qual condição sustenta melhor um processo terapêutico possível para mim agora?</strong> Porque não adianta escolher o formato teoricamente perfeito se, na prática, ele aumenta demais o desgaste e reduz a continuidade.",
        },
        { type: "heading", level: 2, text: "Quando o presencial costuma ajudar mais" },
        {
            type: "list",
            items: [
                "Quando sair de casa e chegar a um lugar de atendimento ajuda você a marcar internamente que aquele horário é seu.",
                "Quando a sua casa não oferece privacidade suficiente para uma sessão online com tranquilidade.",
                "Quando o corpo já está muito acelerado e o deslocamento até o consultório faz parte do movimento de desacelerar.",
            ],
        },
        { type: "heading", level: 2, text: "Quando o online pode ser o melhor ajuste" },
        {
            type: "list",
            items: [
                "Quando a rotina é apertada e o deslocamento viraria um fator de abandono do processo.",
                "Quando você viaja, mora longe ou precisa de flexibilidade para manter continuidade.",
                "Quando estar na própria casa te deixa mais à vontade para falar do que viver a corrida do trânsito de São Paulo.",
            ],
        },
        { type: "heading", level: 2, text: "O que realmente importa na escolha" },
        {
            type: "paragraph",
            html: "Mais do que glamourizar a sala ou desconfiar da tela, vale observar quatro pontos: se você terá privacidade, se o formato cabe na sua rotina sem virar tortura logística, se a qualidade da conexão é suficiente e se o encontro faz sentido para você naquele contexto.",
        },
        {
            type: "callout",
            title: "Escolher o formato mais viável não é escolher menos",
            html: "Muita gente se culpa por não conseguir fazer presencial toda semana ou por preferir online. Mas terapia não precisa virar mais um lugar onde você se sente em falta.",
            items: [
                "O melhor formato é o que ajuda o processo a existir com consistência.",
                "Você pode revisar a escolha depois, se a vida mudar.",
                "Formato não substitui vínculo, mas pode facilitar ou atrapalhar a sustentação dele.",
            ],
        },
        { type: "heading", level: 2, text: "Uma decisão boa o suficiente costuma olhar para a semana inteira" },
        {
            type: "paragraph",
            html: "Antes de escolher, vale imaginar o atendimento acontecendo na sua vida concreta. Como fica o deslocamento? Existe privacidade real em casa? Você costuma chegar exausta a esse horário? O formato escolhido preserva energia para o encontro ou já consome quase tudo antes dele começar?",
        },
        {
            type: "paragraph",
            html: "Às vezes o presencial oferece mais contorno. Em outros casos, o online protege melhor a continuidade. O ponto não é acertar uma decisão perfeita de primeira, e sim escolher uma condição que cuide do processo em vez de sabotá-lo sem perceber.",
        },
        {
            type: "paragraph",
            html: "Se a questão principal para você é logística em São Paulo, vale conhecer também a página de <a href=\"/localizacao/psicologa-higienopolis-sp\">localização em Higienópolis</a> e as páginas de <a href=\"/servicos/psicoterapia-presencial-higienopolis\">psicoterapia presencial</a> e <a href=\"/servicos/psicoterapia-online\">psicoterapia online</a>. Se a dúvida ainda estiver mais no começo do processo, o texto sobre <a href=\"/psicoterapia/como-funciona-a-primeira-sessao\">como funciona a primeira sessão</a> costuma ajudar bastante.",
        },
    ],
    faq: [
        {
            question: "Um formato é melhor do que o outro?",
            answer:
                "Não de forma universal. A decisão depende de rotina, privacidade, deslocamento, condições práticas e do modo como você sustenta melhor o encontro.",
        },
        {
            question: "Posso começar online e depois migrar para o presencial?",
            answer:
                "Em muitos casos, sim. O importante é que a mudança seja pensada com critério, e não como improviso permanente.",
        },
        {
            question: "Online fica mais superficial?",
            answer:
                "Não necessariamente. Quando existe privacidade e boa qualidade de encontro, o online pode ser um formato bastante consistente.",
        },
    ],
    cta: {
        title: "Se você ainda está decidindo, podemos pensar nisso a partir da sua rotina real",
        text: "Uma mensagem pelo WhatsApp já basta para entender qual formato pode se ajustar melhor ao seu momento.",
        label: "Falar sobre presencial ou online",
        href: buildWhatsAppLink("Oi, li o artigo sobre presencial ou online e gostaria de ajuda para entender qual formato faz mais sentido para mim."),
        secondaryLabel: "Ler sobre a primeira sessão",
        secondaryHref: "/psicoterapia/como-funciona-a-primeira-sessao",
    },
};

export default post;
