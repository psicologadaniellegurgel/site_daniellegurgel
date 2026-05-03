<script lang="ts">
    import { base } from "$app/paths";
    import ArticleCard from "$lib/components/ArticleCard.svelte";
    import FAQAccordion from "$lib/components/FAQAccordion.svelte";
    import MapEmbed from "$lib/components/MapEmbed.svelte";
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
        homeServicesPrimary,
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
    title="Psicóloga em Higienópolis | Danielle Gurgel"
    description="Psicóloga clínica em Higienópolis, SP. Danielle Gurgel atende presencialmente na Av. Angélica e online, com foco em luto, relações difíceis, sobrecarga e transições de vida."
    canonical="/"
    imageAlt="Danielle Gurgel, psicóloga clínica em Higienópolis"
    imageWidth={1200}
    imageHeight={1500}
    schemas={homeSchemas}
/>

<section class="page-section pt-6 md:pt-10">
    <div class="site-shell">
        <div class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div class="space-y-6">
                <span class="section-kicker">Psicoterapia humanista em Higienópolis, SP</span>

                <div class="space-y-4">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl">{fixPt(homeHero.title)}</h1>
                    <p class="max-w-2xl text-lg text-(--ink-soft) md:text-xl">
                        {fixPt(homeHero.intro)}
                    </p>
                </div>

                <ul class="hero-meta" aria-label="Informações profissionais">
                    {#each homeHero.badges as badge}
                        <li>{fixPt(badge)}</li>
                    {/each}
                </ul>

                <div class="button-row">
                    <a
                        href={buildWhatsAppLink("Oi, vim pelo site e gostaria de saber sobre atendimento.")}
                        class="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Conversar no WhatsApp
                    </a>
                </div>
            </div>

            <div class="relative">
                <div class="absolute -inset-4 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(194,131,73,0.24),transparent_60%)] blur-2xl"></div>
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
                        class="surface-card-strong aspect-4/5 w-full object-cover"
                    />
                </picture>
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
                        <h3 class="text-2xl text-(--ink)">{fixPt(item.title)}</h3>
                        <p class="mt-3 text-(--ink-soft)">{fixPt(item.text)}</p>
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
                title="Dois formatos de atendimento"
                intro="Presencial em Higienópolis ou online. A escolha costuma passar por rotina, deslocamento e pelo que te deixa mais à vontade."
            />

            <div class="home-service-grid">
                {#each homeServicesPrimary as item, index}
                    <article class="home-service-feature">
                        <span class="home-service-badge">
                            {index === 0 ? "Presencial em Higienópolis" : "Continuidade online"}
                        </span>
                        <h3 class="text-2xl text-(--ink)">{fixPt(item.title)}</h3>
                        <p class="mt-3 text-(--ink-soft)">{fixPt(item.text)}</p>
                        <a href={internalHref(item.href)} class="btn btn-secondary mt-6">
                            {fixPt(item.label)}
                        </a>
                    </article>
                {/each}
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
                                <h3 class="text-xl text-(--ink)">{item.title}</h3>
                                <p class="mt-3 text-(--ink-soft)">{item.text}</p>
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
                                <h3 class="text-xl text-(--ink)">{fixPt(item.title)}</h3>
                                <p class="mt-3 text-(--ink-soft)">{fixPt(item.text)}</p>
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

<section id="avaliacoes" class="page-section pt-0 home-section-secondary">
    <div class="site-shell">
        <h2 class="home-secondary-title">Como algumas pessoas descrevem a experiência</h2>
        <ReviewGrid reviews={googleReviews} />
    </div>
</section>

<section id="localizacao" class="page-section pt-0 home-section-secondary">
    <div class="site-shell">
        <div class="grid gap-8 md:grid-cols-[1fr_0.9fr] items-start">
            <div>
                <h2 class="home-secondary-title">Localização</h2>
                <p class="mt-2 text-(--ink-soft)">
                    Av. Angélica, 1996, sala 501. Perto do metrô Paulista-Pernambucanas.
                </p>
                <ul class="editorial-list mt-4">
                    {#each homeLocationHighlights as highlight}
                        <li>{fixPt(highlight)}</li>
                    {/each}
                </ul>
                <div class="mt-5">
                    <a href={internalHref("/localizacao/psicologa-higienopolis-sp")} class="btn btn-secondary">
                        Ver localização completa
                    </a>
                </div>
            </div>

            <MapEmbed />
        </div>
    </div>
</section>

<section id="artigos" class="page-section pt-0 home-section-secondary">
    <div class="site-shell">
        <div class="flex flex-wrap items-baseline justify-between gap-3">
            <h2 class="home-secondary-title">Leituras recentes</h2>
            <a href={internalHref("/artigos")} class="eyebrow-link">Ver todos os artigos</a>
        </div>

        <div class="mt-6 grid gap-5 md:grid-cols-3">
            {#each recentPosts as post}
                <ArticleCard {post} compact />
            {/each}
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
            <div class="max-w-160 space-y-4">
                <span class="section-kicker">Primeiro contato</span>
                <h2 class="text-3xl md:text-4xl">
                    Se alguma parte do site pareceu falar da sua vida com honestidade, podemos continuar a conversa
                </h2>
                <p class="text-lg text-(--ink-soft)">
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
