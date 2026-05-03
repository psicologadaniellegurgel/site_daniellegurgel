import type { ContentPage, ImageAsset } from "$lib/content/types";
import { buildWhatsAppLink } from "$lib/data/site";

function sectionImage(slug: string, alt: string): ImageAsset {
    return {
        src: `/images/${slug}.avif`,
        alt,
        width: 900,
        height: 600,
        sizes: "(min-width: 768px) 20rem, 100vw",
        sources: [
            {
                type: "image/avif",
                srcset: `/images/${slug}-400w.avif 400w, /images/${slug}.avif 900w`,
            },
            {
                type: "image/webp",
                srcset: `/images/${slug}-400w.webp 400w, /images/${slug}.webp 900w`,
            },
        ],
    };
}

const serviceCareSection = {
    title: "O que orienta este atendimento",
    paragraphs: [
        "Presencial ou online, o critério principal continua sendo o mesmo: uma escuta ética, sem fórmulas prontas, com respeito ao seu ritmo e ao que a sua vida permite neste momento.",
        'O atendimento é conduzido por Danielle Gurgel, psicóloga clínica (CRP 06/148054), com formação pela UFES e base na Abordagem Centrada na Pessoa. Se quiser conhecer melhor a trajetória e o jeito de trabalhar, a <a href="/sobre">página sobre</a> reúne isso de forma mais direta.',
    ],
    list: [
        "Sigilo profissional e cuidado com privacidade desde o primeiro contato.",
        "Sem promessas rápidas, diagnósticos apressados ou respostas prontas sobre a sua vida.",
        "Espaço para alinhar dúvidas práticas sobre agenda, recibo, reembolso e formato com calma.",
    ],
};

export const presencialServicePage: ContentPage = {
    title: "Psicoterapia presencial em Higienópolis",
    metaTitle: "Psicoterapia presencial em Higienópolis | Danielle Gurgel",
    description:
        "Atendimento presencial em Higienópolis para mulheres que vivem luto, relações difíceis, sobrecarga emocional e transições de vida.",
    canonicalPath: "/servicos/psicoterapia-presencial-higienopolis",
    heroEyebrow: "Serviço principal",
    heroIntro:
        "O atendimento presencial oferece um recorte mais nítido da rotina. Para muita gente, sair de casa, chegar ao consultório e ter um espaço reservado ajuda a respirar melhor e sustentar o processo com mais presença.",
    badgeList: [
        "Av. Angélica, 1996 - sala 501",
        "Perto do metrô Paulista-Pernambucanas",
        "Agendamento prévio",
    ],
    image: {
        src: "/images/danielle-gurgel-psicoterapia-online.avif",
        alt: "Danielle Gurgel, psicóloga em Higienópolis",
        width: 1200,
        height: 1500,
        sizes: "(min-width: 1024px) 46vw, 100vw",
        sources: [
            {
                type: "image/avif",
                srcset:
                    "/images/danielle-gurgel-psicoterapia-online-600w.avif 600w, /images/danielle-gurgel-psicoterapia-online-1200w.avif 1200w",
            },
            {
                type: "image/webp",
                srcset:
                    "/images/danielle-gurgel-psicoterapia-online-600w.webp 600w, /images/danielle-gurgel-psicoterapia-online-1200w.webp 1200w",
            },
        ],
    },
    actions: [
        {
            label: "Conversar sobre horários",
            href: buildWhatsAppLink(
                "Oi, vim pela página de psicoterapia presencial em Higienópolis e gostaria de saber sobre horários.",
            ),
            external: true,
        },
        {
            label: "Ver a localização completa",
            href: "/localizacao/psicologa-higienopolis-sp",
            variant: "secondary",
        },
    ],
    breadcrumbs: [
        { label: "Serviços", href: "/servicos" },
        { label: "Psicoterapia presencial" },
    ],
    sections: [
        {
            title: "Quando o presencial costuma fazer mais sentido",
            intro:
                "O presencial costuma ajudar quando você precisa de mais contorno entre a vida acelerada e o momento de se escutar.",
            list: [
                "Quando sair de casa e chegar a um espaço de atendimento ajuda a marcar internamente que aquele horário é seu.",
                "Quando a rotina doméstica não oferece privacidade suficiente para um encontro online com tranquilidade.",
                "Quando o deslocamento até o consultório funciona como parte do cuidado e da desaceleração.",
                "Quando você mora, trabalha ou circula com frequência por Higienópolis, Consolação, Paulista ou Santa Cecília.",
            ],
        },
        {
            title: "Como o processo acontece",
            paragraphs: [
                "Você não precisa chegar pronta, nem saber exatamente por onde começar. O trabalho vai tomando forma a partir do que está vivo na sua experiência, com tempo para que as coisas ganhem linguagem sem pressa e sem invasão.",
                "Na prática, isso significa uma escuta atenta, ética e horizontal. A proposta não é entregar uma fórmula sobre a sua vida, e sim construir um espaço em que você consiga se ouvir com mais nitidez, elaborar perdas e reconhecer escolhas mais coerentes com quem você é.",
            ],
            image: {
                src: "/images/consultorio-sala-atendimento-perspectiva.avif",
                alt: "Vista da sala de atendimento com mesa de trabalho em primeiro plano e sofá com almofadas ao fundo, mostrando o espaço real do consultório em Higienópolis",
                width: 640,
                height: 1392,
                sizes: "(min-width: 768px) 20rem, 100vw",
                sources: [
                    {
                        type: "image/avif",
                        srcset: "/images/consultorio-sala-atendimento-perspectiva-400w.avif 400w, /images/consultorio-sala-atendimento-perspectiva.avif 640w",
                    },
                    {
                        type: "image/webp",
                        srcset: "/images/consultorio-sala-atendimento-perspectiva-400w.webp 400w, /images/consultorio-sala-atendimento-perspectiva.webp 640w",
                    },
                ],
            },
        },
        {
            title: "O que você encontra no consultório",
            list: [
                "Ambiente acolhedor, reservado e pensado para conversas delicadas.",
                "Facilidade de acesso por metrô, carro de aplicativo ou carro próprio.",
                "Banheiro acessível, banheiro de gênero neutro e ambiente seguro para pessoas LGBTQIA+.",
                "Agenda organizada por horário marcado, para reduzir espera e correria.",
            ],
            note: "Presencial não é automaticamente melhor do que online. Ele só pode ser o formato mais ajustado quando separar o cuidado do restante da rotina faz diferença para você.",
        },
        {
            title: "Se quiser seguir por aqui",
            cards: [
                {
                    title: "Ver a localização com calma",
                    text: "Se o deslocamento faz parte da sua decisão, aqui você encontra acesso, rotina e contexto do consultório.",
                    href: "/localizacao/psicologa-higienopolis-sp",
                    label: "Explorar localização",
                },
                {
                    title: "Ler sobre a primeira sessão",
                    text: "Uma leitura útil para reduzir a pressão do começo sem simplificar o processo.",
                    href: "/psicoterapia/como-funciona-a-primeira-sessao",
                    label: "Ler sobre o primeiro encontro",
                },
                {
                    title: "Conhecer Danielle antes de marcar",
                    text: "Se você quer sentir melhor quem conduz o trabalho, esta costuma ser uma boa próxima leitura.",
                    href: "/sobre",
                    label: "Conhecer Danielle",
                },
            ],
        },
        serviceCareSection,
    ],
    faq: [
        {
            question: "Preciso morar em Higienópolis para fazer atendimento presencial?",
            answer:
                "Não. O consultório atende bem quem mora ou trabalha em Higienópolis, Santa Cecília, Consolação, Perdizes, Paulista e arredores, mas o mais importante é se o deslocamento faz sentido para sua rotina.",
        },
        {
            question: "Quanto tempo dura cada sessão?",
            answer:
                "As sessões acontecem em um horário reservado para você, com duração compatível com a prática clínica individual. Esse detalhe pode ser alinhado no primeiro contato.",
        },
        {
            question: "Se eu quiser, posso migrar depois para o online?",
            answer:
                "Sim. Em muitos processos, o formato pode ser revisto conforme a vida muda. O importante é avaliar o que faz mais sentido para o momento que você está vivendo.",
        },
    ],
    cta: {
        title: "Se o presencial parece o formato certo para agora, podemos começar por uma conversa simples",
        text: "Você pode mandar uma mensagem curta para saber sobre agenda presencial em Higienópolis e entender como começar.",
        label: "Falar sobre agenda presencial",
        href: buildWhatsAppLink(
            "Oi, vim pela página de psicoterapia presencial em Higienópolis e gostaria de saber sobre agenda.",
        ),
        secondaryLabel: "Conhecer Danielle",
        secondaryHref: "/sobre",
    },
    schemaType: "Service",
};

export const onlineServicePage: ContentPage = {
    title: "Psicoterapia online com a mesma seriedade do encontro presencial",
    metaTitle: "Psicoterapia online | Danielle Gurgel",
    description:
        "Atendimento psicológico online para quem precisa de flexibilidade sem abrir mão de um processo humanista, ético e consistente.",
    canonicalPath: "/servicos/psicoterapia-online",
    heroEyebrow: "Serviço complementar",
    heroIntro:
        "O online pode funcionar muito bem quando o cuidado precisa caber na vida real sem virar mais uma corrida. O que sustenta o processo não é a tela em si, mas a presença, a escuta e a continuidade do vínculo.",
    badgeList: [
        "Atendimento por videochamada",
        "Mais flexibilidade para rotina e deslocamento",
        "Pode ser feito fora de São Paulo",
    ],
    image: {
        src: "/images/consultorio-psicologia-higienopolis-sp-01.avif",
        alt: "Ambiente de atendimento para psicoterapia online",
        width: 900,
        height: 1125,
    },
    actions: [
        {
            label: "Conversar sobre atendimento online",
            href: buildWhatsAppLink(
                "Oi, vim pela página de psicoterapia online e gostaria de saber como funciona o atendimento.",
            ),
            external: true,
        },
        {
            label: "Ler o artigo sobre presencial ou online",
            href: "/psicoterapia/psicoterapia-presencial-ou-online-como-decidir",
            variant: "secondary",
        },
    ],
    breadcrumbs: [
        { label: "Serviços", href: "/servicos" },
        { label: "Psicoterapia online" },
    ],
    sections: [
        {
            title: "Quando o online costuma ser uma boa escolha",
            list: [
                "Quando sua rotina torna o deslocamento difícil, especialmente em semanas mais intensas.",
                "Quando você mora em outra cidade ou prefere manter o atendimento mesmo em viagens.",
                "Quando estar em casa favorece mais conforto e continuidade do que sair correndo para uma sessão presencial.",
                "Quando o cuidado precisa caber na vida de um jeito possível, sem virar mais uma fonte de culpa.",
            ],
        },
        {
            title: "O que o online pede de você",
            paragraphs: [
                "Mais do que equipamentos sofisticados, o online pede um mínimo de privacidade e alguma estabilidade de conexão. O ideal é estar em um lugar onde você consiga falar sem ser interrompida e sem sentir que precisa vigiar a própria frase o tempo todo.",
                "Se isso ainda não está possível, podemos pensar em alternativas práticas: horários menos expostos, uso de fones, organização do espaço ou, se fizer mais sentido, avaliação do presencial.",
            ],
            image: sectionImage(
                "servico-online-canto-casa-fones-janela",
                "Canto de casa com fones de ouvido e luz de janela, sugerindo privacidade para sessão online",
            ),
        },
        {
            title: "O que não muda por ser online",
            paragraphs: [
                "Não muda o compromisso com o sigilo, com a escuta ética e com o seu ritmo. Também não muda o fato de que a terapia não é um lugar para receber conselhos prontos, e sim um processo de elaboração, presença e construção de autonomia.",
                "Muitas pessoas chegam com receio de que o online fique frio ou superficial. Em vários casos, acontece o contrário: o formato reduz desgaste, facilita continuidade e cria um encontro consistente dentro da rotina real.",
            ],
        },
        {
            title: "Se quiser seguir por aqui",
            cards: [
                {
                    title: "Comparar presencial e online com calma",
                    text: "Este texto ajuda a decidir formato sem transformar a escolha em mais uma cobrança sobre você.",
                    href: "/psicoterapia/psicoterapia-presencial-ou-online-como-decidir",
                    label: "Ler comparação entre formatos",
                },
                {
                    title: "Ver os temas de acompanhamento",
                    text: "Se a dúvida sobre formato já está menor e a questão agora é o que você está vivendo, os temas de acompanhamento podem ser uma boa continuação.",
                    href: "/como-posso-ajudar",
                    label: "Explorar temas de acompanhamento",
                },
                {
                    title: "Ler sobre a primeira sessão",
                    text: "Uma leitura útil quando o receio principal não é a tela, mas o próprio começo do processo.",
                    href: "/psicoterapia/como-funciona-a-primeira-sessao",
                    label: "Ler sobre a primeira sessão",
                },
            ],
        },
        {
            ...serviceCareSection,
            note: "No atendimento online, a qualidade do encontro depende menos de uma tecnologia perfeita e mais de privacidade suficiente, vínculo consistente e clareza de combinação.",
        },
    ],
    faq: [
        {
            question: "Psicoterapia online funciona mesmo?",
            answer:
                "Para muitas pessoas, sim. O critério principal não é uma hierarquia entre formatos, mas se as condições práticas e subjetivas do online sustentam um encontro de qualidade para você.",
        },
        {
            question: "Posso fazer online se estiver fora do Brasil?",
            answer:
                "Isso depende de aspectos éticos e regulatórios do local onde você estiver. Se esse for o seu caso, vale trazer essa informação no primeiro contato para avaliação.",
        },
        {
            question: "Posso alternar entre online e presencial?",
            answer:
                "Em alguns casos, sim. O ideal é que essa combinação seja pensada com critério, e não apenas como improviso de última hora, para preservar a consistência do processo.",
        },
    ],
    cta: {
        title: "Se o online parece mais viável, podemos começar por aí",
        text: "Você pode mandar uma mensagem curta para entender disponibilidade, valores e se esse formato combina com o seu momento.",
        label: "Falar sobre atendimento online",
        href: buildWhatsAppLink(
            "Oi, vim pela página de psicoterapia online e gostaria de entender disponibilidade e valores.",
        ),
        secondaryLabel: "Ver atendimento presencial",
        secondaryHref: "/servicos/psicoterapia-presencial-higienopolis",
    },
    schemaType: "Service",
    serviceOnline: true,
};

export const couplesServicePage: ContentPage = {
    title: "Terapia de casal em Higienópolis",
    metaTitle: "Terapia de casal em Higienópolis | Danielle Gurgel",
    description:
        "Atendimento presencial para casais que desejam compreender conflitos, reconstruir o diálogo e cuidar da relação com mais clareza.",
    canonicalPath: "/servicos/terapia-de-casal",
    heroEyebrow: "Serviço relacional",
    heroIntro:
        "A terapia de casal pode oferecer um espaço seguro para que ambos expressem sentimentos, compreendam conflitos com mais profundidade e reencontrem condições de diálogo na relação.",
    badgeList: [
        "Atendimento presencial",
        "Escuta sem tomar partido",
        "Casais em diferentes fases da relação",
    ],
    image: {
        src: "/images/consultorio-psicologia-higienopolis-sp-02.avif",
        alt: "Consultório de Danielle Gurgel preparado para atendimentos presenciais em Higienópolis",
        width: 900,
        height: 1125,
    },
    actions: [
        {
            label: "Conversar sobre terapia de casal",
            href: buildWhatsAppLink(
                "Oi, vim pela página de terapia de casal e gostaria de entender como funciona o atendimento.",
            ),
            external: true,
        },
        {
            label: "Ver a localização do consultório",
            href: "/localizacao/psicologa-higienopolis-sp",
            variant: "secondary",
        },
    ],
    breadcrumbs: [
        { label: "Serviços", href: "/servicos" },
        { label: "Terapia de casal" },
    ],
    sections: [
        {
            title: "Quando a terapia de casal costuma fazer sentido",
            intro:
                "Nem todo casal procura ajuda no limite. Muitas vezes, o pedido aparece quando a conversa ficou defensiva, repetitiva ou difícil de sustentar sem desgaste.",
            list: [
                "Quando os diálogos terminam sempre no mesmo lugar: crítica, silêncio, afastamento ou exaustão.",
                "Quando ficou difícil falar de confiança, mágoas, sexualidade, parentalidade ou planos de vida sem que tudo vire disputa.",
                "Quando o casal percebe que ainda existe vínculo, mas não está conseguindo cuidar dele sozinho.",
                "Quando a relação mudou depois de uma perda, de uma quebra de confiança ou de uma fase intensa de sobrecarga.",
            ],
        },
        {
            title: "Como as sessões costumam acontecer",
            paragraphs: [
                "Na maior parte das vezes, os encontros acontecem com os dois. A proposta é que cada pessoa possa falar da própria experiência sem ser reduzida à versão do outro. Em alguns momentos, encontros individuais podem ser combinados com critério, quando isso ajuda a compreensão do processo.",
                "A terapia de casal não funciona como tribunal, nem como mediação apressada para encerrar uma discussão. O trabalho é mais cuidadoso: perceber o que se repete, o que não encontra linguagem e o que cada um tem conseguido ou não sustentar dentro da relação.",
            ],
            image: sectionImage(
                "servico-casal-duas-xicaras-mesa",
                "Duas xícaras lado a lado em mesa de madeira com luz suave, sugerindo encontro e diálogo entre duas pessoas",
            ),
        },
        {
            title: "O que a terapia de casal tenta favorecer",
            paragraphs: [
                "O objetivo não é decidir quem está certo. O foco é compreender a experiência de cada pessoa, ampliar a escuta mútua e tornar a conversa menos capturada por acusação e defesa.",
                "Às vezes isso abre possibilidade de reconstrução do vínculo. Em outros casos, ajuda o casal a reconhecer limites, impasses e decisões importantes com mais clareza e menos violência emocional.",
            ],
            note: "Não é preciso esperar uma crise extrema para procurar terapia de casal. Muitos casais chegam justamente para cuidar da relação antes que o desgaste vire a única forma de convivência.",
        },
        {
            title: "Se quiser seguir por aqui",
            cards: [
                {
                    title: "Ver a localização do consultório",
                    text: "Como o atendimento de casal é presencial, pode ajudar entender acesso, deslocamento e contexto do espaço em Higienópolis.",
                    href: "/localizacao/psicologa-higienopolis-sp",
                    label: "Explorar localização",
                },
                {
                    title: "Ler sobre relacionamentos e rupturas",
                    text: "Se a dificuldade ainda parece mais emocional do que prática, esse tema ajuda a nomear desgastes, limites e impasses afetivos.",
                    href: "/experiencia/relacionamentos-e-rupturas",
                    label: "Explorar relacionamentos",
                },
                {
                    title: "Conhecer Danielle antes de marcar",
                    text: "Para muita gente, faz diferença sentir quem conduz a escuta antes do primeiro contato.",
                    href: "/sobre",
                    label: "Conhecer Danielle",
                },
            ],
        },
        {
            ...serviceCareSection,
            note: "Na terapia de casal, o cuidado não está em arbitrar uma disputa, mas em construir condições para que duas experiências possam ser escutadas com mais realidade e menos ataque.",
        },
    ],
    faq: [
        {
            question: "Precisa haver uma crise para procurar terapia de casal?",
            answer:
                "Não. Muitos casais procuram terapia para melhorar a comunicação, compreender desgastes recorrentes e fortalecer a relação antes que os impasses fiquem mais duros.",
        },
        {
            question: "As sessões são sempre com os dois?",
            answer:
                "Na maior parte das vezes, sim. Eventualmente podem existir encontros individuais, quando isso fizer sentido para a condução ética do processo.",
        },
        {
            question: "A terapia decide quem está certo?",
            answer:
                "Não. O objetivo é compreender a experiência de cada pessoa e favorecer diálogo, responsabilidade e clareza na relação.",
        },
        {
            question: "Só faz sentido se o casal quiser continuar junto?",
            answer:
                "Não. Em alguns momentos, a terapia ajuda a entender se ainda existem condições para sustentar a relação. Em outros, ajuda a atravessar decisões difíceis com mais cuidado e menos destrutividade.",
        },
    ],
    cta: {
        title: "Se vocês querem entender se a terapia de casal faz sentido para este momento, o próximo passo pode ser simples",
        text: "Basta mandar uma mensagem curta contando que vocês querem entender se esse formato faz sentido para agora.",
        label: "Falar sobre terapia de casal",
        href: buildWhatsAppLink(
            "Oi, vim pela página de terapia de casal e gostaria de saber como funciona o atendimento presencial.",
        ),
        secondaryLabel: "Ver a localização",
        secondaryHref: "/localizacao/psicologa-higienopolis-sp",
    },
    schemaType: "Service",
};

export const familyServicePage: ContentPage = {
    title: "Terapia familiar",
    metaTitle: "Terapia familiar | Danielle Gurgel",
    description:
        "Espaço de escuta para famílias que vivem conflitos, afastamentos, luto ou reorganizações importantes e precisam conversar com mais cuidado.",
    canonicalPath: "/servicos/terapia-familiar",
    heroEyebrow: "Serviço relacional",
    heroIntro:
        "Há momentos em que o sofrimento não cabe inteiro na fala de uma pessoa só. A terapia familiar pode oferecer um espaço protegido para que diferentes vozes da família sejam escutadas e para que tensões, limites e formas de convivência possam ser olhados com mais cuidado.",
    badgeList: [
        "Famílias em conflito ou reorganização",
        "Composição alinhada com critério",
        "Atendimento com agendamento prévio",
    ],
    image: {
        src: "/images/consultorio-psicologia-higienopolis-sp-01.avif",
        alt: "Espaço acolhedor do consultório de Danielle Gurgel para atendimentos familiares",
        width: 900,
        height: 1125,
    },
    actions: [
        {
            label: "Conversar sobre terapia familiar",
            href: buildWhatsAppLink(
                "Oi, vim pela página de terapia familiar e gostaria de entender como esse atendimento pode funcionar.",
            ),
            external: true,
        },
        {
            label: "Ver contato",
            href: "/contato",
            variant: "secondary",
        },
    ],
    breadcrumbs: [
        { label: "Serviços", href: "/servicos" },
        { label: "Terapia familiar" },
    ],
    sections: [
        {
            title: "Quando a terapia familiar pode ser um bom recurso",
            intro:
                "Em algumas situações, o desgaste circula entre várias pessoas da família e já não faz sentido tratar tudo como se estivesse concentrado em alguém só.",
            list: [
                "Quando a convivência ficou tensa, silenciosa demais ou marcada por conflitos recorrentes.",
                "Quando separações, recasamentos, saídas de casa, adoecimento, envelhecimento ou luto mudaram a dinâmica familiar.",
                "Quando está difícil conversar sobre cuidado, limites, responsabilidades e formas de presença entre as pessoas da família.",
                "Quando ninguém consegue falar sem se defender imediatamente e a sensação é de que o vínculo está endurecido.",
            ],
        },
        {
            title: "Quem participa e como os encontros se organizam",
            paragraphs: [
                "A composição do atendimento é pensada a partir da situação apresentada. Nem sempre todas as pessoas participam de todos os encontros, e essa definição precisa ser feita com cuidado para que o processo tenha utilidade clínica e segurança relacional.",
                "O foco não é transformar a família em grupo de julgamento. A proposta é abrir um espaço em que posições diferentes possam aparecer sem que uma voz precise anular a outra para existir.",
            ],
            image: sectionImage(
                "servico-familiar-sala-cadeiras-circulo",
                "Sala ampla com cadeiras dispostas em círculo aberto e luz natural lateral, sugerindo espaço de escuta coletiva",
            ),
        },
        {
            title: "O que a terapia familiar procura favorecer",
            paragraphs: [
                "Em vez de buscar um culpado, o trabalho tenta compreender a dinâmica que foi se formando: ruídos de comunicação, sobrecarga concentrada em alguém, fronteiras confusas, alianças rígidas ou temas que ficaram difíceis de nomear.",
                "Isso pode ajudar a construir formas mais possíveis de conversa, reorganizar combinados e reconhecer limites reais da convivência. Em muitos casos, o cuidado começa quando a família consegue sair do lugar de acusação contínua.",
            ],
            note: "Terapia familiar não exige um modelo específico de família. O que importa aqui é a relação entre as pessoas que estão tentando sustentar algum tipo de vínculo e cuidado.",
        },
        {
            title: "Se quiser seguir por aqui",
            cards: [
                {
                    title: "Ler sobre relacionamentos e rupturas",
                    text: "Uma boa continuação quando o desgaste aparece mais nos vínculos, nos limites e nas repetições do que em um evento isolado.",
                    href: "/experiencia/relacionamentos-e-rupturas",
                    label: "Explorar relacionamentos",
                },
                {
                    title: "Ver a página sobre luto e perdas",
                    text: "Quando a família está tentando atravessar ausência, despedida ou reorganização depois de uma perda importante.",
                    href: "/experiencia/luto-e-perdas",
                    label: "Explorar luto e perdas",
                },
                {
                    title: "Entender como fazer o primeiro contato",
                    text: "Se a dúvida agora é mais prática, o contato reúne canal, mensagem inicial e próximos passos.",
                    href: "/contato",
                    label: "Ir para contato",
                },
            ],
        },
        {
            ...serviceCareSection,
            note: "Quando há mais de uma pessoa envolvida, o critério continua sendo o mesmo: escuta ética, cuidado com privacidade e combinados claros desde o início do processo.",
        },
    ],
    faq: [
        {
            question: "Precisa haver um conflito muito grave para buscar terapia familiar?",
            answer:
                "Não. Muitas famílias procuram esse espaço antes que o desgaste fique mais rígido, justamente para conversar com mais cuidado sobre o que está difícil.",
        },
        {
            question: "Todas as pessoas da família precisam participar desde o início?",
            answer:
                "Não necessariamente. Quem participa e em que momento isso acontece é algo pensado a partir da situação trazida no primeiro contato.",
        },
        {
            question: "A terapia familiar serve só para famílias com filhos pequenos?",
            answer:
                "Não. Ela pode fazer sentido em diferentes composições e fases da vida familiar, inclusive quando o tema envolve filhos adolescentes ou adultos, cuidado com pais, luto ou reorganizações importantes.",
        },
        {
            question: "A terapia familiar vai decidir quem está certo?",
            answer:
                "Não. O objetivo é compreender a dinâmica relacional e criar condições para uma conversa menos capturada por acusações e posições fixas.",
        },
    ],
    cta: {
        title: "Se a dificuldade parece atravessar a família inteira, pode ser útil começar por uma conversa objetiva",
        text: "Você pode escrever contando brevemente quem participaria e o que tem pesado mais neste momento.",
        label: "Falar sobre terapia familiar",
        href: buildWhatsAppLink(
            "Oi, vim pela página de terapia familiar e gostaria de conversar sobre como esse atendimento pode funcionar.",
        ),
        secondaryLabel: "Ver contato",
        secondaryHref: "/contato",
    },
    schemaType: "Service",
};

export const groupsServicePage: ContentPage = {
    title: "Grupos e rodas de conversa para psicólogos e estudantes",
    metaTitle: "Grupos e rodas de conversa | Danielle Gurgel",
    description:
        "Espaços coletivos de escuta e troca voltados a psicólogos e estudantes de Psicologia, com destaque para o projeto Desafios da Profissão.",
    canonicalPath: "/servicos/grupos-e-rodas",
    heroEyebrow: "Outra frente de atuação",
    heroIntro:
        "Além do consultório, Danielle também participa de espaços coletivos de troca e reflexão. Aqui você encontra grupos e rodas voltados sobretudo a psicólogos e estudantes de Psicologia, com destaque para o projeto Desafios da Profissão, desenvolvido em conjunto com a Arranjos Psicologia.",
    badgeList: [
        "Psicólogos e estudantes de Psicologia",
        "Encontros online via Zoom",
        "Projeto em parceria com a Arranjos Psicologia",
    ],
    image: {
        src: "/images/psicologa-danielle-gurgel-lendo-livro.avif",
        alt: "Danielle Gurgel em retrato editorial para página de grupos e rodas de conversa",
        width: 900,
        height: 1125,
    },
    actions: [
        {
            label: "Ver projeto na Arranjos Psicologia",
            href: "https://arranjospsicologia.com.br/projetos/desafios-profissao",
            external: true,
        },
        {
            label: "Conversar sobre grupos e rodas",
            href: buildWhatsAppLink(
                "Oi, vim pela página de grupos e rodas de conversa e gostaria de saber mais sobre essa frente de atuação.",
            ),
            external: true,
            variant: "secondary",
        },
    ],
    breadcrumbs: [
        { label: "Serviços", href: "/servicos" },
        { label: "Grupos e rodas de conversa" },
    ],
    sections: [
        {
            title: "Para quem esses espaços foram pensados",
            intro:
                "Aqui o foco não é atendimento clínico individual ao público geral. São espaços coletivos com público e finalidade próprios.",
            list: [
                "Psicólogos e psicólogas que desejam refletir sobre prática clínica, ética e cotidiano profissional.",
                "Estudantes de Psicologia que querem se aproximar de discussões mais vivas sobre trabalho clínico.",
                "Profissionais interessados em trocar experiências ligadas à Abordagem Centrada na Pessoa.",
            ],
            note: "Esses encontros não substituem psicoterapia individual nem foram pensados como porta principal de entrada para quem está buscando atendimento clínico.",
        },
        {
            title: "Projeto em destaque: Desafios da Profissão",
            paragraphs: [
                "O Desafios da Profissão surgiu a partir de uma roda espontânea no XV Fórum Nacional da ACP e foi ganhando forma como um espaço contínuo de escuta e reflexão entre colegas da Abordagem Centrada na Pessoa.",
                "Hoje, o projeto é conduzido por Danielle Gurgel e Bernardo Carielo em parceria com a Arranjos Psicologia. A proposta é sustentar conversas profundas sobre trabalho clínico, burocracias da profissão, divulgação, manejo do cotidiano e outros atravessamentos que aparecem na prática real.",
                "Além dos encontros, existe um grupo de WhatsApp que funciona como espaço de circulação para dúvidas, relatos e temas que podem seguir produzindo reflexão entre um encontro e outro.",
            ],
            image: sectionImage(
                "servico-grupos-caderno-caneta-mesa-conversa",
                "Caderno aberto com caneta sobre mesa de madeira entre xícaras, sugerindo roda de conversa profissional",
            ),
        },
        {
            title: "Como esse espaço funciona hoje",
            list: [
                "Encontros mensais online, via Zoom.",
                "Sábados, das 10h às 12h30.",
                "Comunidade com mais de 100 profissionais no grupo de WhatsApp.",
                "Contribuição voluntária entre R$ 20 e R$ 100, sem que a questão financeira precise impedir a participação.",
            ],
        },
        {
            title: "Outros contextos de grupo e formação",
            paragraphs: [
                "Além do projeto em parceria com a Arranjos Psicologia, Danielle também participa de contextos de formação e monitoria em grupos da EncontroACP. Isso reforça uma atuação que não se limita ao setting individual e que permanece em diálogo com outros profissionais da abordagem.",
                "No site, essa informação importa menos como vitrine e mais como sinal de inserção profissional, estudo contínuo e participação em espaços coletivos de elaboração da prática clínica.",
            ],
        },
        {
            title: "Se quiser seguir por aqui",
            cards: [
                {
                    title: "Conhecer Danielle com mais contexto",
                    text: "A página Sobre ajuda a situar formação, abordagem clínica e participação profissional além do consultório.",
                    href: "/sobre",
                    label: "Conhecer Danielle",
                },
                {
                    title: "Ver o projeto na Arranjos Psicologia",
                    text: "Uma forma direta de conhecer o enquadramento institucional do Desafios da Profissão.",
                    href: "https://arranjospsicologia.com.br/projetos/desafios-profissao",
                    label: "Abrir página do projeto",
                    external: true,
                },
                {
                    title: "Entender os serviços clínicos principais",
                    text: "Se a sua busca for por psicoterapia individual, de casal ou familiar, os serviços clínicos principais são o melhor caminho para continuar.",
                    href: "/servicos",
                    label: "Ver serviços principais",
                },
            ],
        },
        {
            title: "O que orienta esta frente de atuação",
            paragraphs: [
                "A participação em grupos e rodas nasce do mesmo compromisso com escuta, clareza ética e responsabilidade clínica que orienta o trabalho no consultório.",
                "Ao mesmo tempo, é importante diferenciar as coisas com precisão: um espaço coletivo de troca entre profissionais tem objetivos e enquadre diferentes de psicoterapia, supervisão formal ou atendimento ao público geral.",
            ],
            list: [
                "Público claramente definido.",
                "Combinados de respeito e confidencialidade entre participantes.",
                "Sem promessas de formação total, resposta pronta ou substituição de acompanhamento clínico.",
            ],
        },
    ],
    faq: [
        {
            question: "Preciso falar no grupo?",
            answer:
                "Não necessariamente. Cada pessoa participa no seu tempo e da forma que se sentir mais confortável.",
        },
        {
            question: "Os encontros têm tema definido?",
            answer:
                "Em alguns momentos, sim. Em outros, os encontros se organizam a partir do que os participantes estão vivendo e trazendo para reflexão.",
        },
        {
            question: "Existe sigilo no grupo?",
            answer:
                "Sim. Respeito e confidencialidade fazem parte dos combinados fundamentais para que o espaço possa existir com cuidado.",
        },
        {
            question: "Isso é voltado para quem está procurando psicoterapia?",
            answer:
                "Não principalmente. Esta frente é voltada a psicólogos e estudantes de Psicologia. Se a sua busca for por atendimento clínico, os serviços principais são a continuação mais adequada.",
        },
        {
            question: "Como participar do Desafios da Profissão?",
            answer:
                "O caminho mais direto é acompanhar a página do projeto na Arranjos Psicologia ou entrar em contato para saber como acessar o grupo de WhatsApp por onde os encontros são organizados.",
        },
    ],
    cta: {
        title: "Se você quer saber se esse espaço coletivo faz sentido para o seu momento profissional, podemos começar por uma conversa simples",
        text: "Você pode escrever contando um pouco do seu momento profissional e do seu interesse pelos grupos e rodas de conversa.",
        label: "Falar sobre grupos e rodas",
        href: buildWhatsAppLink(
            "Oi, vim pela página de grupos e rodas de conversa e gostaria de entender melhor essa frente de atuação.",
        ),
        secondaryLabel: "Conhecer Danielle",
        secondaryHref: "/sobre",
    },
    schemaType: "Service",
};
