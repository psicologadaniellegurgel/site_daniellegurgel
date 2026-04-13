<script lang="ts">
    import { base } from "$app/paths";
    import ArticleCard from "$lib/components/ArticleCard.svelte";
    import FAQAccordion from "$lib/components/FAQAccordion.svelte";
    import ReviewGrid from "$lib/components/ReviewGrid.svelte";
    import SEO from "$lib/components/SEO.svelte";
    import SectionTitle from "$lib/components/SectionTitle.svelte";
    import { blogPosts } from "$lib/content/posts";
    import {
        homeFaqs,
        homeHelpThemes,
        homeHero,
        homeLocationHighlights,
        homeProofPoints,
        homeStartPaths,
        homeServicesPrimary,
        homeServicesSupport,
    } from "$lib/data/home";
    import { googleReviews } from "$lib/data/reviews";
    import {
        buildWhatsAppLink,
        professionalVerificationLinks,
        siteConfig,
    } from "$lib/data/site";
    import { createFaqSchema } from "$lib/utils/schema";
    import { fixPt } from "$lib/utils/text";
    import { internalHref } from "$lib/utils/url";

    const recentPosts = blogPosts.slice(0, 3);
    const serviceSupportSteps = homeServicesSupport.map((item, index) => ({
        ...item,
        step: String(index + 1).padStart(2, "0"),
    }));

    const homeSchemas = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: homeHero.title,
            description: homeHero.intro,
            url: `${siteConfig.url}/`,
        },
        createFaqSchema(homeFaqs),
    ];

    const workStyle = [
        {
            title: "Escuta centrada na sua experiência",
            text: "O trabalho parte da relação e da experiência concreta, não de respostas prontas sobre quem você deveria ser.",
        },
        {
            title: "Presença, não fórmula pronta",
            text: "Cuidado sem infantilização, sem discurso médico vazio e sem promessas que simplificam demais a sua vida.",
        },
        {
            title: "Cidade, rotina e vida emocional no mesmo campo",
            text: "A clínica conversa com a vida urbana real: deslocamento, cansaço, culpa, relações e transições.",
        },
    ];

</script>

<SEO
    title="Danielle Gurgel | Psicoterapia em Higienópolis, SP"
    description="Psicoterapia humanista em Higienópolis para mulheres que atravessam luto, relações difíceis, sobrecarga emocional e mudanças de vida."
    canonical="/"
    schemas={homeSchemas}
/>

<section class="page-section pt-6 md:pt-10">
    <div class="site-shell">
        <div class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div class="space-y-6">
                <span class="section-kicker">Psicoterapia humanista em Higienópolis, SP</span>

                <div class="space-y-4">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl">{fixPt(homeHero.title)}</h1>
                    <p class="max-w-[42rem] text-lg text-[var(--ink-soft)] md:text-xl">
                        {fixPt(homeHero.intro)}
                    </p>
                </div>

                <div class="chip-row">
                    {#each homeHero.badges as badge}
                        <span class="chip">{fixPt(badge)}</span>
                    {/each}
                </div>

                <div class="button-row">
                    <a
                        href={buildWhatsAppLink("Oi, vim pelo site e gostaria de saber sobre atendimento.")}
                        class="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Conversar no WhatsApp
                    </a>
                    <a href={internalHref("/sobre")} class="btn btn-secondary">
                        Conhecer Danielle
                    </a>
                </div>
            </div>

            <div class="home-hero-stack">
                <div class="relative">
                    <div class="absolute -inset-4 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_rgba(194,131,73,0.24),_transparent_60%)] blur-2xl"></div>
                    <picture>
                        <source
                            type="image/avif"
                            srcset={`${base}/images/danielle-gurgel-psicologa-higienopolis-hero-600w.avif 600w, ${base}/images/danielle-gurgel-psicologa-higienopolis-hero-1200w.avif 1200w`}
                            sizes="(min-width: 1024px) 46vw, 100vw"
                        />
                        <source
                            type="image/webp"
                            srcset={`${base}/images/danielle-gurgel-psicologa-higienopolis-hero-600w.webp 600w, ${base}/images/danielle-gurgel-psicologa-higienopolis-hero-1200w.webp 1200w`}
                            sizes="(min-width: 1024px) 46vw, 100vw"
                        />
                        <img
                            src={`${base}/images/danielle-gurgel-psicologa-higienopolis-hero.avif`}
                            alt="Danielle Gurgel em retrato principal do site"
                            width="1200"
                            height="1500"
                            loading="eager"
                            fetchpriority="high"
                            class="surface-card-strong aspect-[4/5] w-full object-cover"
                        />
                    </picture>
                </div>

                <div class="surface-card home-hero-sidebar p-5 md:p-6">
                    <div class="space-y-3">
                        <span class="page-compass-step">Três entradas possíveis</span>
                        <h2 class="text-2xl text-[var(--clay-deep)]">
                            Você não precisa começar pela mesma porta que todo mundo
                        </h2>
                        <p class="text-[var(--ink-soft)]">
                            Você pode entrar pelo que está mais vivo agora: o que sente,
                            como o atendimento funciona ou quem está do outro lado.
                        </p>
                    </div>

                    <div class="home-quick-links">
                        {#each homeStartPaths as item, index}
                            <a href={internalHref(item.href)} class="home-quick-link">
                                <span class="home-quick-link-index">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div class="space-y-1">
                                    <strong>{fixPt(item.title)}</strong>
                                    <p>{fixPt(item.text)}</p>
                                </div>
                            </a>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="como-posso-ajudar" class="page-section pt-0">
    <div class="site-shell">
        <div class="section-panel section-panel-accent">
            <SectionTitle
                eyebrow="Como posso ajudar"
                title="Talvez alguma dessas experiências tenha te trazido até aqui"
                intro="São temas que costumam aparecer no consultório e foram organizados por experiência vivida, não por rótulo."
            />

            <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {#each homeHelpThemes as item, index}
                    <article class={index % 2 === 0 ? "surface-card p-6" : "surface-card-strong p-6"}>
                        <h3 class="text-2xl text-[var(--ink)]">{fixPt(item.title)}</h3>
                        <p class="mt-3 text-[var(--ink-soft)]">{fixPt(item.text)}</p>
                        <a href={internalHref(item.href)} class="eyebrow-link mt-4 inline-flex">
                            {fixPt(item.label)}
                        </a>
                    </article>
                {/each}
            </div>
        </div>
    </div>
</section>

<section id="servicos" class="page-section pt-0">
    <div class="site-shell">
        <div class="section-panel section-panel-soft">
            <SectionTitle
                eyebrow="Serviços"
                title="Formatos de atendimento e caminhos práticos para começar"
                intro="Aqui entram as decisões operacionais do processo: formato, primeira sessão, reembolso e localização. A ideia é facilitar escolha e início, sem burocratizar o cuidado."
            />

            <div class="home-service-grid">
                {#each homeServicesPrimary as item, index}
                    <article class="home-service-feature">
                        <span class="home-service-badge">
                            {index === 0 ? "Presencial em Higienópolis" : "Continuidade online"}
                        </span>
                        <h3 class="text-2xl text-[var(--ink)]">{fixPt(item.title)}</h3>
                        <p class="mt-3 text-[var(--ink-soft)]">{fixPt(item.text)}</p>
                        <a href={internalHref(item.href)} class="btn btn-secondary mt-6">
                            {fixPt(item.label)}
                        </a>
                    </article>
                {/each}
            </div>

            <div class="home-practical-panel">
                <div class="space-y-3">
                    <span class="section-kicker">Aspectos práticos</span>
                    <h3 class="text-2xl text-[var(--clay-deep)] md:text-3xl">
                        Respondendo dúvidas que costumam aparecer sobre aspectos práticos
                    </h3>
                    <p class="text-[var(--ink-soft)]">
                        Primeira sessão, convênio, reembolso e localização ficam reunidos aqui para
                        ajudar você a entender o funcionamento com mais clareza.
                    </p>
                </div>

                <div class="home-practical-grid">
                    {#each serviceSupportSteps as item}
                        <article class="home-practical-item">
                            <span class="page-compass-step">{item.step}</span>
                            <h3 class="mt-4 text-xl text-[var(--ink)]">{fixPt(item.title)}</h3>
                            <p class="mt-3 text-[var(--ink-soft)]">{fixPt(item.text)}</p>
                            <a href={internalHref(item.href)} class="eyebrow-link mt-4 inline-flex">
                                {fixPt(item.label)}
                            </a>
                        </article>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<section id="quem-sustenta" class="page-section pt-0">
    <div class="site-shell">
        <div class="section-panel section-panel-outline">
            <div class="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                <article class="surface-card-strong px-6 py-7 md:px-8">
                    <SectionTitle
                        eyebrow="Abordagem Centrada na Pessoa"
                        title="Como a ACP aparece no trabalho da Danielle"
                        intro="A base do trabalho é a Abordagem Centrada na Pessoa: uma clínica que prioriza relação, escuta e autonomia, sem fórmulas prontas."
                    />

                    <div class="grid gap-4">
                        {#each workStyle as item, index}
                            <article class="timeline-card">
                                <span class="timeline-period">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3 class="text-xl text-[var(--ink)]">{item.title}</h3>
                                <p class="mt-3 text-[var(--ink-soft)]">{item.text}</p>
                            </article>
                        {/each}
                    </div>
                </article>

                <article class="surface-card px-6 py-7 md:px-8">
                    <SectionTitle
                        eyebrow="Antes do primeiro contato"
                        title="Informações que podem ajudar você a decidir com mais calma"
                        intro="Se quiser, aqui estão registro, formação e alguns pontos importantes sobre a trajetória profissional."
                    />

                    <div class="grid gap-4">
                        {#each homeProofPoints as item}
                            <article class="stat-card">
                                <h3 class="text-xl text-[var(--ink)]">{fixPt(item.title)}</h3>
                                <p class="mt-3 text-[var(--ink-soft)]">{fixPt(item.text)}</p>
                            </article>
                        {/each}
                    </div>
                    <div class="button-row mt-6">
                        <a href={internalHref("/sobre")} class="btn btn-secondary">Conhecer Danielle</a>
                        {#if professionalVerificationLinks[0]}
                            <a
                                href={professionalVerificationLinks[0].href}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn btn-ghost"
                            >
                                Ver perfil no Google
                            </a>
                        {/if}
                    </div>
                </article>
            </div>
        </div>
    </div>
</section>

<section id="avaliacoes" class="page-section pt-0">
    <div class="site-shell">
        <div class="section-panel section-panel-accent">
            <SectionTitle
                eyebrow="Avaliações públicas"
                title="Como algumas pessoas descrevem a experiência de atendimento"
                intro="Se quiser, você pode ler avaliações públicas sobre acolhimento, escuta e presença no processo."
            />
            <ReviewGrid reviews={googleReviews} />
        </div>
    </div>
</section>

<section id="localizacao" class="page-section pt-0">
    <div class="site-shell">
        <div class="section-panel section-panel-soft">
            <div class="grid gap-8 md:grid-cols-[1fr_0.9fr]">
                <div>
                    <SectionTitle
                        eyebrow="Localização"
                        title="Um consultório bem localizado ajuda o cuidado a caber na rotina"
                        intro="Av. Angélica, 1996, sala 501. Perto do metrô, com acesso fácil e estrutura pensada para atendimento com hora marcada."
                    />
                    <ul class="editorial-list">
                        {#each homeLocationHighlights as highlight}
                            <li>{fixPt(highlight)}</li>
                        {/each}
                    </ul>
                </div>

                <div class="space-y-4">
                    <img
                        src={`${base}/images/consultorio-psicologia-higienopolis-sp-01.avif`}
                        alt="Imagem do consultório em Higienópolis"
                        width="900"
                        height="1125"
                        class="surface-card aspect-[4/3] w-full object-cover"
                    />
                    <a href={internalHref("/localizacao/psicologa-higienopolis-sp")} class="btn btn-secondary">
                        Ver localização completa
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="artigos" class="page-section pt-0">
    <div class="site-shell">
        <div class="section-panel section-panel-outline">
            <SectionTitle
                eyebrow="Artigos"
                title="Se preferir continuar pela leitura, estes textos podem ajudar"
                intro="Aqui estão os três textos mais recentes do site, para aprofundar dúvidas com calma e sem pressa."
            />

            <div class="grid gap-5 md:grid-cols-3">
                {#each recentPosts as post}
                    <ArticleCard {post} compact />
                {/each}
            </div>

            <div class="mt-6">
                <a href={internalHref("/artigos")} class="btn btn-ghost">Ver todos os artigos</a>
            </div>
        </div>
    </div>
</section>

<section id="perguntas-frequentes" class="page-section pt-0">
    <div class="site-shell">
        <div class="section-panel section-panel-soft">
            <SectionTitle
                eyebrow="Perguntas frequentes"
                title="O que costuma ser importante saber antes de mandar mensagem"
            />
            <FAQAccordion items={homeFaqs} />
        </div>
    </div>
</section>

<section class="page-section">
    <div class="site-shell">
        <div class="surface-card-strong page-gradient overflow-hidden px-6 py-8 md:px-10 md:py-10">
            <div class="max-w-[40rem] space-y-4">
                <span class="section-kicker">Primeiro contato</span>
                <h2 class="text-3xl md:text-4xl">
                    Se alguma parte do site pareceu falar da sua vida com honestidade, podemos continuar a conversa
                </h2>
                <p class="text-lg text-[var(--ink-soft)]">
                    Uma mensagem como "vim pelo site e gostaria de saber sobre atendimento" já é suficiente.
                </p>
                <div class="button-row">
                    <a
                        href={buildWhatsAppLink("Oi, vim pelo site e gostaria de saber sobre atendimento.")}
                        class="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Falar no WhatsApp
                    </a>
                    <a href={internalHref("/contato")} class="btn btn-secondary">Ver página de contato</a>
                </div>
            </div>
        </div>
    </div>
</section>
