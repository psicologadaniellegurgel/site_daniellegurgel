import type { BlogPostDocument } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

export const post: BlogPostDocument = {
    slug: "como-solicitar-reembolso-de-psicoterapia-pelo-plano-de-saude",
    categorySlug: "psicoterapia",
    title: "Como solicitar o reembolso de sessões de psicoterapia pelo plano de saúde",
    description:
        "Um passo a passo claro para verificar cobertura, reunir recibos e pedir reembolso de sessões particulares de psicoterapia.",
    excerpt:
        "Quem faz psicoterapia particular pode, em muitos casos, pedir reembolso ao plano de saúde. Entender o processo ajuda a tornar esse cuidado mais viável.",
    date: "2026-03-21",
    readTimeMinutes: 4,
    tags: ["reembolso", "plano de saúde", "psicoterapia", "recibo", "sessão particular"],
    heroImage: {
        src: "/images/blog-psicoterapia-reembolso-caneta-recibo-cafe.avif",
        alt: "Um tablet ou caderno de notas ao lado de uma caneta tinteiro e uma xícara de café vazia em uma mesa de madeira",
        width: 900,
        height: 1125,
    },
    snippetAnswer: {
        question: "Como solicitar reembolso de psicoterapia pelo plano de saúde?",
        html: "Para solicitar reembolso de psicoterapia, verifique as regras do seu plano, confirme a cobertura, reúna recibos ou notas fiscais e envie a documentação pelo canal indicado pela operadora. As exigências variam conforme contrato e plano, então vale confirmar antes de iniciar o pedido.",
    },
    body: [
        {
            type: "paragraph",
            html: "Muita gente não sabe que sessões particulares de psicoterapia podem ser reembolsadas pelo plano de saúde, dependendo das regras do contrato. Entender esse caminho pode tornar o cuidado emocional mais acessível e menos nebuloso.",
        },
        {
            type: "paragraph",
            html: "Quando alguém decide começar terapia, já costuma estar lidando com dúvida, custo, tempo e vulnerabilidade. Ter clareza sobre a parte prática não resolve tudo, mas pode tirar peso desnecessário do início do processo.",
        },
        {
            type: "heading",
            level: 2,
            text: "Passo a passo básico para pedir reembolso",
        },
        {
            type: "list",
            items: [
                "Verifique com a operadora se seu plano cobre psicoterapia por reembolso.",
                "Confirme o valor previsto por sessão e os documentos exigidos.",
                "Solicite recibo ou nota fiscal com as informações pedidas pela operadora.",
                "Envie a documentação pelo canal indicado pelo plano.",
                "Acompanhe a resposta e o prazo de pagamento informado.",
            ],
        },
        {
            type: "heading",
            level: 2,
            text: "O que vale conferir antes",
        },
        {
            type: "paragraph",
            html: "As exigências podem variar entre operadoras. Por isso, o melhor caminho é consultar seu contrato ou falar diretamente com o plano antes de iniciar o envio. Assim você evita retrabalho e sabe com mais clareza o que esperar.",
        },
        {
            type: "list",
            items: [
                "Pergunte qual é o valor máximo de reembolso por sessão.",
                "Confirme se existe prazo para envio dos documentos.",
                "Verifique se a operadora pede algum documento complementar além do recibo.",
            ],
        },
        {
            type: "callout",
            title: "Importante",
            html: "O reembolso depende das regras do seu plano de saúde. Este texto tem objetivo informativo e não substitui a orientação da operadora.",
        },
        {
            type: "paragraph",
            html: "Se quiser entender como funciona o atendimento e a emissão de recibo, você pode conhecer a <a href=\"/servicos/psicoterapia-presencial-higienopolis\">psicoterapia presencial em Higienópolis</a>, ler sobre <a href=\"/servicos/psicoterapia-online\">psicoterapia online</a>, ver como trabalho com situações de <a href=\"/experiencia/ansiedade-e-sobrecarga\">ansiedade e sobrecarga</a> ou ler também <a href=\"/psicoterapia/dicas-para-escolher-um-psicologo-online\">dicas para escolher um psicólogo online</a>.",
        },
    ],
    faq: [
        {
            question: "Todo plano de saúde reembolsa psicoterapia?",
            answer:
                "Não. Isso depende do contrato, da modalidade do plano e das regras da operadora. O ideal é confirmar diretamente com ela.",
        },
        {
            question: "O recibo da psicóloga basta sozinho?",
            answer:
                "Em muitos casos, sim, mas algumas operadoras podem pedir documentos complementares. Vale conferir antes de enviar.",
        },
    ],
    cta: {
        title: "Se você quer verificar como funciona o atendimento particular e a emissão de recibo, podemos alinhar isso por mensagem",
        text: "Você pode me escrever dizendo que quer iniciar terapia e gostaria de entender a parte prática do reembolso.",
        label: "Perguntar sobre recibo e atendimento",
        href: buildWhatsAppLink("Oi, li o artigo sobre reembolso de psicoterapia e gostaria de entender como funciona a emissão de recibo no atendimento particular."),
        secondaryLabel: "Ver serviços disponíveis",
        secondaryHref: "/servicos/psicoterapia-presencial-higienopolis",
    },
};

export default post;
