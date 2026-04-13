export interface CategoryLinkCard {
    title: string;
    text: string;
    href: string;
    label: string;
}

export interface CategoryMeta {
    slug: string;
    label: string;
    description: string;
    heroIntro: string;
    lead: string;
    startHere: CategoryLinkCard[];
    nextSteps: CategoryLinkCard[];
    adjacentSlugs: string[];
}

export const categories: CategoryMeta[] = [
    {
        slug: "luto-e-perdas",
        label: "Luto e perdas",
        description:
            "Arquivo editorial com artigos sobre ausência, despedidas, mudanças irreversíveis e o tempo singular de elaborar uma perda.",
        heroIntro:
            "Aqui ficam reunidos os textos sobre perdas concretas e simbólicas. É um espaço para quem tenta entender uma falta que ainda reorganiza corpo, rotina e linguagem.",
        lead:
            "Nem toda pessoa chega procurando terapia pela palavra luto. Muitas chegam dizendo só que algo ficou para trás por dentro. Esta página reúne leituras que ajudam a nomear esse campo com mais cuidado.",
        startHere: [
            {
                title: "Começar pela experiência clínica",
                text: "Se você quer uma página mais ampla e acolhedora antes dos artigos, este é o melhor ponto de entrada.",
                href: "/experiencia/luto-e-perdas",
                label: "Ver página sobre luto e perdas",
            },
            {
                title: "Ler o texto mais direto do cluster",
                text: "Um artigo para quem está tentando entender por que a dor não obedece ao relógio dos outros.",
                href: "/luto-e-perdas/luto-nao-e-linear",
                label: "Ler sobre luto não linear",
            },
        ],
        nextSteps: [
            {
                title: "Quando a perda também é relacional",
                text: "Término e luto muitas vezes se misturam. Este texto ajuda a enxergar essa zona cinzenta.",
                href: "/relacionamentos/quando-um-fim-de-relacionamento-continua-doendo",
                label: "Ler sobre pós-término",
            },
            {
                title: "Se quiser conversar com calma",
                text: "O atendimento presencial pode fazer sentido quando a perda pede contorno, tempo e um espaço protegido.",
                href: "/servicos/psicoterapia-presencial-higienopolis",
                label: "Ver psicoterapia presencial",
            },
        ],
        adjacentSlugs: ["relacionamentos", "vida-urbana-e-sobrecarga"],
    },
    {
        slug: "relacionamentos",
        label: "Relacionamentos",
        description:
            "Arquivo editorial com textos sobre vínculos, término, ambivalência, limites e a dor de relações que continuam ecoando.",
        heroIntro:
            "Esta categoria reúne textos para quem quer entender melhor impasses afetivos, pós-término, repetição de padrões e o desgaste de vínculos que consomem mais do que sustentam.",
        lead:
            "Nem sempre o sofrimento relacional aparece como grande crise. Às vezes ele se instala em dúvidas, culpa, exaustão e dificuldade de sair de histórias que já machucam. Os textos aqui ajudam a dar forma a isso.",
        startHere: [
            {
                title: "Entrar pelo panorama clínico",
                text: "Uma página mais ampla para entender como relacionamentos e rupturas aparecem no acompanhamento.",
                href: "/experiencia/relacionamentos-e-rupturas",
                label: "Ver página de relacionamentos",
            },
            {
                title: "Ler o texto central do tema",
                text: "Um artigo para quando o relacionamento acabou por fora, mas segue ocupando você por dentro.",
                href: "/relacionamentos/quando-um-fim-de-relacionamento-continua-doendo",
                label: "Ler sobre fim de relacionamento",
            },
        ],
        nextSteps: [
            {
                title: "Quando relação e perda se misturam",
                text: "Término também pode ser luto. Este texto ajuda a costurar as duas coisas.",
                href: "/luto-e-perdas/luto-nao-e-linear",
                label: "Ler sobre luto",
            },
            {
                title: "Conhecer o jeito de trabalhar",
                text: "Se você quer sentir como Danielle pensa o processo terapêutico, esta é uma boa próxima leitura.",
                href: "/acp-e-autoconhecimento/o-que-a-abordagem-centrada-na-pessoa-oferece-na-pratica",
                label: "Ver abordagem na prática",
            },
        ],
        adjacentSlugs: ["luto-e-perdas", "acp-e-autoconhecimento"],
    },
    {
        slug: "psicoterapia",
        label: "Psicoterapia",
        description:
            "Arquivo editorial com guias sobre primeira sessão, modalidades de atendimento, dúvidas comuns e funcionamento do processo terapêutico.",
        heroIntro:
            "Esta categoria organiza as perguntas mais práticas sobre começar terapia: como funciona, o que esperar, como decidir formato e por onde dar o primeiro passo.",
        lead:
            "Quem está pensando em começar costuma precisar de clareza antes de profundidade. Os textos aqui foram escritos para reduzir insegurança sem infantilizar a experiência.",
        startHere: [
            {
                title: "Se a dúvida é sobre o primeiro encontro",
                text: "Um guia direto para quem ainda não sabe o que dizer ou o que acontece na primeira sessão.",
                href: "/psicoterapia/como-funciona-a-primeira-sessao",
                label: "Ler sobre a primeira sessão",
            },
            {
                title: "Se a dúvida é sobre o formato",
                text: "Um comparativo humano entre presencial e online, sem transformar a decisão em mais uma cobrança.",
                href: "/psicoterapia/psicoterapia-presencial-ou-online-como-decidir",
                label: "Comparar presencial e online",
            },
        ],
        nextSteps: [
            {
                title: "Ver a página de serviços",
                text: "Se você quer sair da leitura e entender os caminhos práticos para começar, esta é a próxima parada.",
                href: "/servicos",
                label: "Explorar serviços",
            },
            {
                title: "Conhecer Danielle antes de escrever",
                text: "Para muita gente, faz diferença saber quem está do outro lado antes de mandar mensagem.",
                href: "/sobre",
                label: "Conhecer Danielle",
            },
        ],
        adjacentSlugs: ["acp-e-autoconhecimento", "vida-urbana-e-sobrecarga"],
    },
    {
        slug: "vida-urbana-e-sobrecarga",
        label: "Vida urbana e sobrecarga",
        description:
            "Arquivo editorial com reflexões sobre cansaço emocional, rotina acelerada, excesso de exigência e a sensação de estar sempre atrasada da própria vida.",
        heroIntro:
            "Aqui estão reunidos os textos sobre cansaço que virou paisagem, corpo em alerta, agenda apertada e a sensação de viver no automático dentro da cidade.",
        lead:
            "Há sobrecargas que passam despercebidas justamente porque parecem rotina normal. Esta página foi organizada para ajudar a distinguir exaustão, exigência e desconexão de si sem dramatização artificial.",
        startHere: [
            {
                title: "Entrar pela página clínica do tema",
                text: "Uma leitura mais ampla para quem sente o corpo e a rotina cobrando mais do que devolvem.",
                href: "/experiencia/ansiedade-e-sobrecarga",
                label: "Ver página sobre sobrecarga",
            },
            {
                title: "Começar pelos sinais mais silenciosos",
                text: "Um texto para quem ainda funciona por fora, mas sente o peso crescendo por dentro.",
                href: "/vida-urbana-e-sobrecarga/sinais-de-sobrecarga-emocional-que-passam-despercebidos",
                label: "Ler sinais de sobrecarga",
            },
        ],
        nextSteps: [
            {
                title: "Quando a rotina já não parece sua",
                text: "Este artigo ajuda a olhar para o automático sem reduzir tudo a produtividade.",
                href: "/vida-urbana-e-sobrecarga/quando-voce-nao-se-reconhece-mais-na-propria-rotina",
                label: "Ler sobre rotina e estranhamento",
            },
            {
                title: "Se o online cabe melhor agora",
                text: "Quando o deslocamento pesa, o atendimento online pode ser o formato mais possível.",
                href: "/servicos/psicoterapia-online",
                label: "Ver psicoterapia online",
            },
        ],
        adjacentSlugs: ["psicoterapia", "luto-e-perdas"],
    },
    {
        slug: "acp-e-autoconhecimento",
        label: "ACP e autoconhecimento",
        description:
            "Arquivo editorial com artigos que traduzem a Abordagem Centrada na Pessoa em linguagem simples, viva e ligada à experiência real.",
        heroIntro:
            "Esta categoria reúne textos para quem quer entender a Abordagem Centrada na Pessoa sem jargão acadêmico e sem promessas prontas sobre como alguém deveria viver.",
        lead:
            "A teoria faz sentido quando encosta na experiência. Por isso, estes textos tentam traduzir a ACP para a vida concreta: relação, presença, identidade, limite, autonomia e cuidado sem violência interna.",
        startHere: [
            {
                title: "Começar pela ACP na prática",
                text: "Este é o texto mais direto para entender o que a abordagem oferece no encontro terapêutico.",
                href: "/acp-e-autoconhecimento/o-que-a-abordagem-centrada-na-pessoa-oferece-na-pratica",
                label: "Ler sobre a ACP na prática",
            },
            {
                title: "Entrar pela metáfora da jardineira",
                text: "Uma imagem simples para entender por que terapia não é moldar alguém de fora.",
                href: "/acp-e-autoconhecimento/sou-uma-jardineira-nao-uma-paisagista",
                label: "Ler a metáfora da jardineira",
            },
        ],
        nextSteps: [
            {
                title: "Ver como isso aparece no consultório",
                text: "A página sobre Danielle ajuda a ligar a abordagem ao jeito concreto de clinicar.",
                href: "/sobre",
                label: "Conhecer Danielle",
            },
            {
                title: "Ler um tema clínico com essa lente",
                text: "Se você quiser sair da teoria para uma experiência concreta, esta é uma boa ponte.",
                href: "/experiencia/relacionamentos-e-rupturas",
                label: "Ver relações e rupturas",
            },
        ],
        adjacentSlugs: ["relacionamentos", "psicoterapia"],
    },
];

export const categoryMap = Object.fromEntries(
    categories.map((category) => [category.slug, category]),
) as Record<string, CategoryMeta>;
