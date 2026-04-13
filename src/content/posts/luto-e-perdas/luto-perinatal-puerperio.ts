import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "luto-perinatal-puerperio",
    categorySlug: "luto-e-perdas",
    title: "O Luto que o Mundo Não Vê: Perda Gestacional, Perinatal e o Puerpério",
    description: "Viver a perda de um bebê durante o puerpério é um desafio único. Saiba como acolher a dor, lidar com a culpa e encontrar espaço na terapia.",
    excerpt: "Lidando com o vazio do berço no período em que o corpo ainda vive o pós-parto. Uma reflexão sobre o luto perinatal e o acolhimento necessário.",
    date: "2026-04-07",
    readTimeMinutes: 6,
    tags: ["luto perinatal", "puerpério", "perda gestacional", "humanismo"],
    heroImage: {
        src: "/images/blog-luto-e-perdas-luto-perinatal-puerperio.avif",
        alt: "Uma manta de linho dobrada sobre uma cadeira de madeira em um ambiente silencioso com luz natural",
        width: 900,
        height: 1125,
    },
    snippetAnswer: {
        question: "O que é o luto perinatal no puerpério?",
        html: "O luto perinatal e gestacional durante o puerpério é uma experiência complexa que une as transformações hormonais do pós-parto à profunda dor da perda. Validar esse sofrimento, permitir o tempo singular de cada mãe e buscar espaços seguros, como a psicoterapia, são passos fundamentais para atravessar esse momento.",
    },
    body: [
        { 
            type: "paragraph", 
            html: "Perder um bebê é uma das experiências mais solitárias que alguém pode atravessar. Quando essa perda acontece no período que deveria ser o puerpério — aquele tempo de encontro, cuidado e vida —, o vazio se torna ainda mais ruidoso." 
        },
        { 
            type: "heading", 
            level: 2, 
            text: "O Impacto Emocional no Puerpério" 
        },
        { 
            type: "paragraph", 
            html: "Viver o luto enquanto o corpo ainda processa o puerpério é um desafio hercúleo. Há uma sobreposição de realidades: os hormônios que se preparam para o cuidado e a nutrição de um bebê enfrentam o silêncio do berço vazio. É comum que a mulher sinta que sua biologia e seu psiquismo estão em direções opostas." 
        },
        { 
            type: "paragraph", 
            html: "Muitas vezes, a sociedade espera que o luto seja rápido, como se a brevidade da vida do bebê diminuísse a profundidade da perda. No entanto, o luto não é medido pelo tempo cronológico, mas pelo espaço que aquele filho já ocupava no desejo e nos planos daquela mãe." 
        },
        { 
            type: "heading", 
            level: 2, 
            text: "Sentimentos Complexos: Culpa e Ambivalência" 
        },
        { 
            type: "paragraph", 
            html: "Na clínica, observamos frequentemente a presença de sentimentos difíceis de nomear. A <strong>culpa</strong> costuma ser uma visitante assídua, manifestando-se em perguntas sem resposta: \"O que eu fiz de errado?\", \"Eu poderia ter evitado?\"." 
        },
        { 
            type: "paragraph", 
            html: "Além disso, surgem <strong>vazios e ambivalências</strong>. É possível sentir raiva por ver outras mães com seus bebês e, ao mesmo tempo, sentir-se culpada por essa raiva. São sentimentos humanos que podem coexistir com a dor, sem precisarem ser justificados ou resolvidos."
        },
        { 
            type: "heading", 
            level: 2, 
            text: "Como uma Gripe Constante?" 
        },
        { 
            type: "paragraph", 
            html: "Uma imagem que aparece com frequência nos relatos de quem atravessa esse luto é a de estar com uma gripe constante. Um cansaço que não passa com o sono, uma dor no corpo sem causa física óbvia, a sensação de que as cores do mundo perderam o brilho."
        },
        { 
            type: "paragraph", 
            html: "Essa \"gripe\" da alma exige respeito. Não se \"cura\" uma gripe forçando o corpo a correr uma maratona; da mesma forma, o luto exige repouso emocional, acolhimento e paciência." 
        },
        { 
            type: "heading", 
            level: 2, 
            text: "A Terapia como Espaço de Acolhimento" 
        },
        { 
            type: "paragraph", 
            html: "A psicoterapia oferece um lugar onde é possível falar sobre o que ninguém quer ouvir. Um espaço sem pressa, sem julgamentos e sem as frases prontas do tipo \"logo você terá outro\"." 
        },
        {
            type: "paragraph",
            html: "Na abordagem humanista, o foco está na sua experiência singular. É um convite para olhar para a dor com cuidado, buscando um jeito próprio de integrar essa perda à sua história, no seu tempo. Se quiser entender melhor como o luto se manifesta em diferentes momentos, o texto <a href=\"/luto-e-perdas/luto-nao-e-linear\">luto não é linear</a> pode complementar essa leitura."
        },
        {
            type: "paragraph",
            html: "Danielle tem formação específica em luto gestacional, perinatal e neonatal, e esse tema é um dos eixos centrais do trabalho clínico dela. Você pode conhecer melhor essa atuação na página sobre <a href=\"/experiencia/luto-e-perdas\">luto e perdas</a>."
        },
        {
            type: "paragraph",
            html: "O consultório fica em Higienópolis, na Av. Angélica, com acesso próximo ao metrô. Se fizer sentido, veja detalhes do espaço na página de <a href=\"/localizacao/psicologa-higienopolis-sp\">localização</a> ou conheça o formato do <a href=\"/servicos/psicoterapia-presencial-higienopolis\">atendimento presencial</a>."
        }
    ],
    faq: [
        { 
            question: "É normal me sentir culpada pela perda?", 
            answer: "Sim, a culpa é um sentimento muito comum no luto perinatal. No entanto, é importante entender que, na maioria das vezes, ela é uma tentativa da nossa mente de encontrar controle em algo que foi imprevisível." 
        },
        { 
            question: "Quando devo procurar ajuda profissional?", 
            answer: "Sempre que você sentir que a dor está sendo vivida em isolamento absoluto ou quando a sensação de \"vazio\" impedir qualquer movimento de autocuidado. O apoio profissional pode oferecer um espaço de escuta e acolhimento para atravessar esse período acompanhada."
        }
    ],
    references: [
        "Angrimani, D. Perdi Meu Bebê: Um Guia para Lidar com o Luto Gestacional e Perinatal. 2017."
    ],
    cta: {
        title: "Você não precisa atravessar esse silêncio sozinha.",
        text: "Se você viveu uma perda e sente que precisa de um espaço seguro para falar sobre sua dor, estou aqui para acolher sua história.",
        label: "Falar no WhatsApp",
        href: buildWhatsAppLink("Oi Danielle, li seu artigo sobre luto perinatal e gostaria de agendar uma conversa."),
        secondaryLabel: "Ver psicoterapia presencial",
        secondaryHref: "/servicos/psicoterapia-presencial-higienopolis"
    }
};

export default post;
