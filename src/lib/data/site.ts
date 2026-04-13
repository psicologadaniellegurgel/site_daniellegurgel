export interface NavigationItem {
    label: string;
    href: string;
}

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

export interface VerificationLink {
    label: string;
    href: string;
    description: string;
}

export interface ProfessionalSignal {
    title: string;
    text: string;
}

const googleMapsUrl =
    "https://www.google.com/maps/place/Psic%C3%B3loga+Danielle+Gurgel/@-23.5497347,-46.66001,17z/data=!4m16!1m9!3m8!1s0x94ce5b2fb0a4bde7:0xe199684a60fd2026!2sPsic%C3%B3loga+Danielle+Gurgel!8m2!3d-23.5497347!4d-46.66001!9m1!1b1!16s%2Fg%2F11x68ssyjn!3m5!1s0x94ce5b2fb0a4bde7:0xe199684a60fd2026!8m2!3d-23.5497347!4d-46.66001!16s%2Fg%2F11x68ssyjn";
const encontroAcpUrl = "https://encontroacp.com.br/danielle-gurgel-da-fonseca/";
const desafiosProfissaoUrl = "https://arranjospsicologia.com.br/projetos/desafios-profissao";

export const siteConfig = {
    name: "Danielle Gurgel | Psicoterapia em Higienópolis",
    businessName: "Danielle Gurgel Psicoterapia",
    professionalName: "Danielle Gurgel",
    description:
        "Psicoterapia humanista em Higienópolis para mulheres que atravessam luto, relações difíceis, sobrecarga e transições de vida.",
    url: "https://psicologadaniellegurgel.com.br",
    phoneIntl: "5511932037191",
    phoneDisplay: "+55 (11) 93203-7191",
    crp: "06/148054",
    hoursLabel: "08h às 20h",
    googleMapsUrl,
    organizationSameAs: [googleMapsUrl],
    personSameAs: [googleMapsUrl, encontroAcpUrl],
    address: {
        street: "Av. Angélica",
        number: "1996",
        room: "501",
        neighborhood: "Higienópolis",
        city: "São Paulo",
        region: "SP",
        postalCode: "01228-200",
    },
    coordinates: {
        latitude: -23.5497347,
        longitude: -46.66001,
    },
};

export const navigation: NavigationItem[] = [
    { label: "Início", href: "/" },
    { label: "Como posso ajudar", href: "/como-posso-ajudar" },
    { label: "Serviços", href: "/servicos" },
    { label: "Sobre", href: "/sobre" },
    { label: "Localização", href: "/localizacao/psicologa-higienopolis-sp" },
    { label: "Artigos", href: "/artigos" },
];

export const professionalVerificationLinks: VerificationLink[] = [
    {
        label: "Perfil no Google",
        href: googleMapsUrl,
        description:
            "Endereco, horarios, estrutura do consultorio e avaliacoes publicas de pacientes.",
    },
    {
        label: "Projeto na Arranjos Psicologia",
        href: desafiosProfissaoUrl,
        description:
            "Pagina do projeto Desafios da Profissao, conduzido em parceria com a Arranjos Psicologia.",
    },
    {
        label: "Pagina na EncontroACP",
        href: encontroAcpUrl,
        description:
            "Referencia institucional ligada a formacao clinica e participacao profissional de Danielle na ACP.",
    },
];

export const professionalSignals: ProfessionalSignal[] = [
    {
        title: "Registro e atuacao clinica",
        text: "Psicologa clinica com CRP 06/148054, atendimento presencial em Higienopolis e online.",
    },
    {
        title: "Formacao de base e aprofundamento",
        text: "Graduacao em Psicologia pela UFES, formacao clinica na EncontroACP e estudo especifico sobre luto gestacional, perinatal e neonatal.",
    },
    {
        title: "Participacao profissional alem do consultorio",
        text: "Cofacilita o projeto Desafios da Profissao com a Arranjos Psicologia e participa de grupos e contextos de formacao na EncontroACP.",
    },
];

export const editorialCommitments: string[] = [
    "Conteudo com base em experiencia clinica, formacao e referencias da psicologia humanista.",
    "Linguagem acessivel, sem promessas irreais, diagnosticos apressados ou tom patologizante.",
    "Textos informativos que nao substituem acompanhamento psicologico individualizado.",
];

export const footerNavigation: NavigationItem[] = [
    { label: "Como posso ajudar", href: "/como-posso-ajudar" },
    { label: "Serviços", href: "/servicos" },
    { label: "Sobre", href: "/sobre" },
    {
        label: "Psicoterapia presencial",
        href: "/servicos/psicoterapia-presencial-higienopolis",
    },
    { label: "Psicoterapia online", href: "/servicos/psicoterapia-online" },
    { label: "Terapia de casal", href: "/servicos/terapia-de-casal" },
    { label: "Terapia familiar", href: "/servicos/terapia-familiar" },
    { label: "Luto e perdas", href: "/experiencia/luto-e-perdas" },
    { label: "Relacionamentos e rupturas", href: "/experiencia/relacionamentos-e-rupturas" },
    { label: "Artigos", href: "/artigos" },
];

export function buildWhatsAppLink(message: string) {
    return `https://wa.me/${siteConfig.phoneIntl}?text=${encodeURIComponent(message)}`;
}

export function toAbsoluteUrl(path: string) {
    if (path.startsWith("http")) return path;
    const clean = path.startsWith("/") ? path : `/${path}`;
    return `${siteConfig.url}${clean}`;
}
