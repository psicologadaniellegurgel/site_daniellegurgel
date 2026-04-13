<script lang="ts">
    import { base } from "$app/paths";
    import type { PageData } from "./$types";
    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
    import FAQAccordion from "$lib/components/FAQAccordion.svelte";
    import RelatedArticles from "$lib/components/RelatedArticles.svelte";
    import SEO from "$lib/components/SEO.svelte";
    import ServiceCTA from "$lib/components/ServiceCTA.svelte";
    import { createBreadcrumbSchema, createFaqSchema } from "$lib/utils/schema";
    import { formatDisplayDate, readTimeLabel } from "$lib/utils/format";
    import {
        editorialCommitments,
        professionalVerificationLinks,
        siteConfig,
        toAbsoluteUrl,
    } from "$lib/data/site";
    import { fixPt, stripInlineHtml } from "$lib/utils/text";
    import { absoluteUrl, internalHref } from "$lib/utils/url";

    export let data: PageData;

    const articlePath = `/${data.post.categorySlug}/${data.post.slug}`;
    const articleUrl = absoluteUrl(articlePath);
    const startHereLinks = data.category.startHere.filter((item) => item.href !== articlePath);
    const nextStepLinks = data.category.nextSteps.filter((item) => item.href !== articlePath);
    const continuationLinks = [...startHereLinks, ...nextStepLinks].slice(0, 4);

    const articleSchemas = [
        createBreadcrumbSchema([
            { label: "Artigos", href: "/artigos" },
            { label: data.category.label, href: `/${data.category.slug}` },
            { label: fixPt(data.post.title) },
        ]),
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: fixPt(data.post.title),
            description: fixPt(data.post.description),
            ...(data.post.snippetAnswer?.html
                ? { abstract: stripInlineHtml(data.post.snippetAnswer.html) }
                : {}),
            datePublished: data.post.date,
            dateModified: data.post.date,
            inLanguage: "pt-BR",
            mainEntityOfPage: articleUrl,
            image: toAbsoluteUrl(data.post.heroImage.src),
            url: articleUrl,
            keywords: data.post.tags.map((tag) => fixPt(tag)),
            articleSection: fixPt(data.category.label),
            author: {
                "@type": "Person",
                name: siteConfig.professionalName,
                url: `${siteConfig.url}/sobre/`,
            },
            publisher: {
                "@type": "Organization",
                name: siteConfig.businessName,
                url: siteConfig.url,
                logo: {
                    "@type": "ImageObject",
                    url: toAbsoluteUrl("/images/logo-danielle-gurgel-512.png"),
                },
            },
        },
        ...(data.post.faq?.length ? [createFaqSchema(data.post.faq)] : []),
    ];

    function withBase(html: string) {
        return fixPt(
            html.replaceAll('href="/', `href="${base}/`).replaceAll('src="/', `src="${base}/`)
        );
    }
</script>

<SEO
    title={`${fixPt(data.post.title)} | Danielle Gurgel`}
    description={fixPt(data.post.description)}
    canonical={articlePath}
    image={data.post.heroImage.src}
    type="article"
    schemas={articleSchemas}
    published={data.post.date}
    modified={data.post.date}
/>

<Breadcrumbs
    items={[
        { label: "Artigos", href: "/artigos" },
        { label: data.category.label, href: `/${data.category.slug}` },
        { label: fixPt(data.post.title) },
    ]}
/>

<section class="page-section pt-6 md:pt-10">
    <div class="site-shell">
        <div class="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <article class="surface-card-strong p-6 md:p-8">
                <div class="space-y-5">
                    <span class="section-kicker">{fixPt(data.category.label)}</span>

                    <div class="space-y-4">
                        <h1 class="text-4xl md:text-5xl">{fixPt(data.post.title)}</h1>
                        <p class="text-lg text-[var(--ink-soft)]">{fixPt(data.post.description)}</p>
                    </div>

                    <div class="article-meta">
                        <span>{formatDisplayDate(data.post.date)}</span>
                        <span>{readTimeLabel(data.post.readTimeMinutes)}</span>
                    </div>

                    <p class="text-sm text-[var(--ink-muted)]">
                        Texto assinado por Danielle Gurgel, psicóloga clínica, CRP
                        {siteConfig.crp}, e revisado em {formatDisplayDate(data.post.date)}.
                    </p>

                    <img
                        src={`${base}${data.post.heroImage.src}`}
                        alt={fixPt(data.post.heroImage.alt)}
                        width={data.post.heroImage.width}
                        height={data.post.heroImage.height}
                        class="surface-card aspect-[16/10] w-full object-cover"
                    />

                    <div class="article-content">
                        {#each data.post.body as block, index}
                            {#if block.type === "paragraph"}
                                <p>{@html withBase(block.html)}</p>
                            {:else if block.type === "heading"}
                                {#if block.level === 2}
                                    <h2>{fixPt(block.text)}</h2>
                                {:else}
                                    <h3>{fixPt(block.text)}</h3>
                                {/if}
                            {:else if block.type === "list"}
                                <ul class="editorial-list">
                                    {#each block.items as item}
                                        <li>{@html withBase(item)}</li>
                                    {/each}
                                </ul>
                            {:else if block.type === "quote"}
                                <blockquote>
                                    <p>{fixPt(block.text)}</p>
                                    {#if block.cite}
                                        <footer class="mt-3 text-sm font-semibold text-[var(--clay-deep)]">
                                            {fixPt(block.cite)}
                                        </footer>
                                    {/if}
                                </blockquote>
                            {:else if block.type === "callout"}
                                <div class="article-callout">
                                    <h3>{fixPt(block.title)}</h3>
                                    <p>{@html withBase(block.html)}</p>
                                    {#if block.items?.length}
                                        <ul class="editorial-list">
                                            {#each block.items as item}
                                                <li>{@html withBase(item)}</li>
                                            {/each}
                                        </ul>
                                    {/if}
                                </div>
                            {/if}
                            {#if index === 0 && data.post.snippetAnswer}
                                <section
                                    class="article-callout article-answer"
                                    aria-labelledby={`snippet-answer-${data.post.slug}`}
                                    data-aeo-snippet-answer
                                >
                                    <h2 id={`snippet-answer-${data.post.slug}`}>
                                        {fixPt(data.post.snippetAnswer.question)}
                                    </h2>
                                    <p>{@html withBase(data.post.snippetAnswer.html)}</p>
                                </section>
                            {/if}
                        {/each}
                    </div>

                    {#if data.post.faq?.length}
                        <div class="article-content pt-4">
                            <h2>Perguntas frequentes</h2>
                            <FAQAccordion items={data.post.faq} />
                        </div>
                    {/if}

                    {#if data.post.references?.length}
                        <div class="article-content pt-4">
                            <h2>Referências</h2>
                            <ul class="editorial-list">
                                {#each data.post.references as reference}
                                    <li>{fixPt(reference)}</li>
                                {/each}
                            </ul>
                        </div>
                    {/if}
                </div>
            </article>

            <aside class="space-y-5">
                {#if continuationLinks.length}
                    <div class="surface-card p-6">
                        <h2 class="text-2xl text-[var(--ink)]">Se quiser continuar por aqui</h2>
                        <p class="mt-3 text-[var(--ink-soft)]">
                            Nem tudo precisa virar decisão imediata. Estes caminhos costumam ajudar
                            a continuar a leitura com mais contorno.
                        </p>

                        <div class="mt-5 grid gap-4">
                            {#each continuationLinks as item}
                                <a href={internalHref(item.href)} class="proof-link-card proof-link-card-compact">
                                    <div>
                                        <h3 class="text-base text-[var(--ink)]">{item.title}</h3>
                                        <p class="mt-2 text-sm text-[var(--ink-soft)]">{item.text}</p>
                                    </div>
                                    <span class="eyebrow-link">{item.label}</span>
                                </a>
                            {/each}
                        </div>
                    </div>
                {/if}

                <div class="surface-card-strong p-6">
                    <h2 class="text-2xl text-[var(--ink)]">Quem sustenta este conteúdo</h2>
                    <p class="mt-3 text-[var(--ink-soft)]">
                        Danielle Gurgel é psicóloga clínica em Higienópolis, com trabalho orientado
                        pela Abordagem Centrada na Pessoa e atuação voltada a luto, relações,
                        sobrecarga emocional e transições de vida.
                    </p>

                    <div class="chip-row mt-4">
                        <span class="chip">CRP {siteConfig.crp}</span>
                        <span class="chip">UFES</span>
                        <span class="chip">EncontroACP</span>
                    </div>

                    <ul class="editorial-list mt-5">
                        {#each editorialCommitments as item}
                            <li>{item}</li>
                        {/each}
                    </ul>

                    <div class="mt-5 grid gap-4">
                        {#each professionalVerificationLinks as link}
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="proof-link-card proof-link-card-compact"
                            >
                                <div>
                                    <h3 class="text-base text-[var(--ink)]">{fixPt(link.label)}</h3>
                                    <p class="mt-2 text-sm text-[var(--ink-soft)]">{fixPt(link.description)}</p>
                                </div>
                                <span class="eyebrow-link">Abrir</span>
                            </a>
                        {/each}
                    </div>

                    <div class="chip-row mt-5">
                        {#each data.post.tags as tag}
                            <span class="chip">{fixPt(tag)}</span>
                        {/each}
                    </div>

                    <a href={internalHref("/sobre")} class="eyebrow-link mt-5 inline-flex">Conhecer Danielle</a>
                </div>
            </aside>
        </div>
    </div>
</section>

{#if data.post.cta}
    <ServiceCTA cta={data.post.cta} />
{/if}

<RelatedArticles
    posts={data.relatedPosts}
    title="Continue por aqui"
    intro="Se este texto ajudou a colocar algo em palavras, estes conteúdos podem sustentar a conversa por outro ângulo."
/>
