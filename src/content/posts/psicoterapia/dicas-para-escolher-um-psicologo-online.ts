import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "dicas-para-escolher-um-psicologo-online",
    categorySlug: "psicoterapia",
    title: "Dicas para escolher um psicólogo online sem transformar essa decisão em mais uma fonte de pressão",
    description:
        "Um guia prático e acolhedor para escolher psicólogo online com atenção à abordagem, ao registro profissional, ao vínculo e à viabilidade da rotina.",
    excerpt:
        "Escolher psicólogo online não precisa ser um tiro no escuro. Alguns critérios simples podem ajudar você a decidir com mais clareza e menos ansiedade.",
    date: "2026-03-23",
    readTimeMinutes: 6,
    tags: ["psicólogo online", "terapia online", "como escolher psicólogo", "CRP"],
    heroImage: {
        src: "/images/blog-psicoterapia-online-notebook-fones-estante.avif",
        alt: "Um notebook fechado na mesa com fones de ouvido e estante de livros desfocada ao fundo",
        width: 900,
        height: 1125,
    },
    snippetAnswer: {
        question: "Como escolher um psicólogo online com segurança?",
        html: "Escolher um psicólogo online envolve verificar registro profissional, entender a abordagem, observar a qualidade do vínculo inicial e avaliar se você terá privacidade para as sessões. O objetivo não é encontrar a profissional perfeita, mas uma escuta ética e viável para sua rotina.",
    },
    body: [
        {
            type: "paragraph",
            html: "Escolher um psicólogo online pode parecer simples quando você olha só a praticidade. Mas, quando chega a hora de marcar, é comum aparecer dúvida: como saber se esse profissional faz sentido para mim? Como separar uma boa apresentação de um encontro que realmente pode me ajudar?",
        },
        {
            type: "paragraph",
            html: "Essa escolha costuma ficar mais difícil quando você já está cansada, com pressa ou sentindo que precisa resolver tudo logo. Nesses momentos, vale lembrar que não se trata de encontrar a profissional perfeita, e sim uma combinação suficientemente boa entre escuta, ética e viabilidade real para a sua rotina.",
        },
        {
            type: "heading",
            level: 2,
            text: "1. Conheça o trabalho da profissional",
        },
        {
            type: "paragraph",
            html: "Veja como ela se apresenta, que tipo de escuta descreve, quais temas costuma acolher e se isso conversa com o que você está buscando. Também vale confirmar o registro profissional no CRP.",
        },
        {
            type: "heading",
            level: 2,
            text: "2. Entenda a abordagem terapêutica",
        },
        {
            type: "paragraph",
            html: "A abordagem não é um detalhe técnico sem efeito. Ela influencia o jeito como a terapia acontece. Na Abordagem Centrada na Pessoa, por exemplo, o foco está em um espaço de acolhimento, autenticidade e empatia, em que você não é conduzida por fórmulas prontas.",
        },
        {
            type: "heading",
            level: 2,
            text: "3. Repare se existe conexão possível",
        },
        {
            type: "paragraph",
            html: "Nem toda boa profissional será a pessoa certa para o seu momento. Na primeira conversa, vale observar se você se sente escutada, respeitada e relativamente à vontade para continuar conhecendo aquele espaço.",
        },
        {
            type: "list",
            items: [
                "Verifique se o horário cabe de verdade na sua rotina.",
                "Observe se o formato online parece acolhedor para você.",
                "Não se sinta obrigada a decidir só pela urgência.",
            ],
        },
        {
            type: "heading",
            level: 2,
            text: "4. Repare se esse cuidado cabe na sua vida real",
        },
        {
            type: "paragraph",
            html: "O online funciona melhor quando não vira mais uma fonte de desgaste. Privacidade, horário possível, qualidade mínima de conexão e sensação de presença importam mais do que a imagem idealizada de como a terapia deveria acontecer.",
        },
        {
            type: "callout",
            title: "Online não significa superficial",
            html: "Quando o encontro é bem sustentado, a tela vira meio, não obstáculo. O formato online pode ser profundo, ético e transformador.",
        },
        {
            type: "paragraph",
            html: "Se você estiver entre formatos, vale ler também <a href=\"/psicoterapia/psicoterapia-presencial-ou-online-como-decidir\">psicoterapia presencial ou online: como decidir</a>, visitar a página de <a href=\"/servicos/psicoterapia-online\">psicoterapia online</a> ou conhecer a <a href=\"/sobre\">página sobre Danielle Gurgel</a> para sentir melhor quem está do outro lado.",
        },
    ],
    faq: [
        {
            question: "Como saber se a terapia online pode funcionar para mim?",
            answer:
                "Vale observar se você consegue ter um mínimo de privacidade, estabilidade de rotina e abertura para esse formato. Muitas pessoas constroem vínculos profundos mesmo à distância.",
        },
        {
            question: "Posso trocar de profissional se não me sentir à vontade?",
            answer:
                "Sim. Escolher uma profissional faz parte do processo, e nem sempre a primeira tentativa será a melhor combinação para o seu momento.",
        },
    ],
    cta: {
        title: "Se você quer sentir na prática como esse encontro pode acontecer, podemos começar por uma conversa",
        text: "Você pode me escrever dizendo que está avaliando terapia online e quer entender como funciona o atendimento.",
        label: "Perguntar sobre terapia online",
        href: buildWhatsAppLink("Oi, li o artigo sobre como escolher um psicólogo online e gostaria de entender como funciona o seu atendimento online."),
        secondaryLabel: "Ver serviço online",
        secondaryHref: "/servicos/psicoterapia-online",
    },
};

export default post;
