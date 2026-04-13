<script lang="ts">
    import { base } from "$app/paths";
    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
    import FAQAccordion from "$lib/components/FAQAccordion.svelte";
    import PageHero from "$lib/components/PageHero.svelte";
    import SEO from "$lib/components/SEO.svelte";
    import SectionTitle from "$lib/components/SectionTitle.svelte";
    import ServiceCTA from "$lib/components/ServiceCTA.svelte";
    import type { ContentPage } from "$lib/content/types";
    import { createBreadcrumbSchema, createFaqSchema, createPageSchema } from "$lib/utils/schema";
    import { fixPt } from "$lib/utils/text";
    import { internalHref } from "$lib/utils/url";

    export let page: ContentPage;

    $: schemas = [
        createBreadcrumbSchema(page.breadcrumbs),
        createPageSchema(page),
        ...(page.extraSchemas ?? []),
        ...(page.faq?.length ? [createFaqSchema(page.faq)] : []),
    ];

    function toSectionId(title: string, index: number) {
        const normalized = fixPt(title)
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");

        return normalized || `secao-${index + 1}`;
    }

    function sectionVariant(index: number) {
        const variants = ["section-panel-accent", "section-panel-soft", "section-panel-outline"];
        return variants[index % variants.length];
    }

    function cardVariant(sectionIndex: number, cardIndex: number) {
        const variants = [
            "feature-card feature-card-soft",
            "feature-card feature-card-strong",
            "feature-card feature-card-outline",
        ];

        return variants[(sectionIndex + cardIndex) % variants.length];
    }

    function withBase(html: string) {
        return fixPt(
            html.replaceAll('href="/', `href="${base}/`).replaceAll('src="/', `src="${base}/`),
        );
    }

    $: sectionEntries = page.sections.map((section, index) => ({
        ...section,
        id: toSectionId(section.title, index),
    }));

    $: showJumpLinks = sectionEntries.length > 3;
</script>

<SEO
    title={fixPt(page.metaTitle ?? page.title)}
    description={fixPt(page.description)}
    canonical={page.canonicalPath}
    image={page.image?.src}
    schemas={schemas}
/>

<Breadcrumbs items={page.breadcrumbs} />
<PageHero {page} />

{#if showJumpLinks}
    <section class="page-section pt-0">
        <div class="site-shell">
            <div class="page-jumpbar">
                <div class="space-y-3">
                    <span class="section-kicker">Atalhos</span>
                    <p class="max-w-2xl text-(--ink-soft) md:text-lg">
                        Se preferir, você pode ir direto ao ponto que mais importa agora.
                    </p>
                </div>

                <div class="anchor-cloud">
                    {#each sectionEntries as section, index}
                        <a href={`#${section.id}`} class="anchor-link anchor-link-quiet">
                            <span class="anchor-link-step">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            {fixPt(section.title)}
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </section>
{/if}

<section class="page-section pt-0">
    <div class="site-shell">
        <div class="editorial-grid">
            {#each sectionEntries as section, index}
                <section id={section.id} class={`section-panel ${sectionVariant(index)}`}>
                    <SectionTitle
                        eyebrow={section.eyebrow ?? ""}
                        title={section.title}
                        intro={section.intro ?? ""}
                    />

                    {#if section.image}
                        <div class="section-with-illustration">
                            <figure class="section-illustration">
                                {#if section.image.sources?.length}
                                    <picture>
                                        {#each section.image.sources as source}
                                            <source
                                                type={source.type}
                                                srcset={source.srcset.split(",").map(s => s.trim()).filter(Boolean).map(e => { const [p, ...rest] = e.split(" "); return `${base}${p} ${rest.join(" ")}`; }).join(", ")}
                                                sizes={section.image.sizes}
                                            />
                                        {/each}
                                        <img
                                            src={`${base}${section.image.src}`}
                                            alt={fixPt(section.image.alt)}
                                            width={section.image.width}
                                            height={section.image.height}
                                            sizes={section.image.sizes}
                                            loading="lazy"
                                            decoding="async"
                                            class="section-illustration-img"
                                        />
                                    </picture>
                                {:else}
                                    <img
                                        src={`${base}${section.image.src}`}
                                        alt={fixPt(section.image.alt)}
                                        width={section.image.width}
                                        height={section.image.height}
                                        loading="lazy"
                                        decoding="async"
                                        class="section-illustration-img"
                                    />
                                {/if}
                            </figure>
                            <div class="section-illustration-text">
                                {#if section.paragraphs?.length}
                                    <div class="grid gap-4">
                                        {#each section.paragraphs as paragraph}
                                            <p>{@html withBase(paragraph)}</p>
                                        {/each}
                                    </div>
                                {/if}
                                {#if section.list?.length}
                                    <ul class="editorial-list">
                                        {#each section.list as item}
                                            <li>{@html withBase(item)}</li>
                                        {/each}
                                    </ul>
                                {/if}
                            </div>
                        </div>
                    {:else}
                        {#if section.paragraphs?.length}
                            <div class="grid gap-4">
                                {#each section.paragraphs as paragraph}
                                    <p>{@html withBase(paragraph)}</p>
                                {/each}
                            </div>
                        {/if}
                        {#if section.list?.length}
                            <ul class="editorial-list">
                                {#each section.list as item}
                                    <li>{@html withBase(item)}</li>
                                {/each}
                            </ul>
                        {/if}
                    {/if}

                    {#if section.cards?.length}
                        <div class="grid-cards mt-6">
                            {#each section.cards as card, cardIndex}
                                <article class={cardVariant(index, cardIndex)}>
                                    <h3 class="text-xl text-(--ink)">{fixPt(card.title)}</h3>
                                    <p class="mt-3 text-(--ink-soft)">{fixPt(card.text)}</p>
                                    {#if card.href && card.label}
                                        <a
                                            href={card.href.startsWith("http") ? card.href : internalHref(card.href)}
                                            class="eyebrow-link mt-4 inline-flex"
                                            target={card.external ? "_blank" : undefined}
                                            rel={card.external ? "noopener noreferrer" : undefined}
                                        >
                                            {fixPt(card.label)}
                                        </a>
                                    {/if}
                                </article>
                            {/each}
                        </div>
                    {/if}

                    {#if section.quote}
                        <blockquote class="editorial-quote mt-6">
                            <p>{fixPt(section.quote.text)}</p>
                            {#if section.quote.cite}
                                <footer class="mt-3 text-sm font-semibold text-(--clay-deep)">
                                    {fixPt(section.quote.cite)}
                                </footer>
                            {/if}
                        </blockquote>
                    {/if}

                    {#if section.note}
                        <div class="article-callout mt-6">
                            <p>{@html withBase(section.note)}</p>
                        </div>
                    {/if}
                </section>
            {/each}
        </div>
    </div>
</section>

{#if page.faq?.length}
    <section class="page-section pt-0">
        <div class="site-shell">
            <SectionTitle
                eyebrow="Perguntas frequentes"
                title={page.faqTitle ?? "O que as pessoas costumam querer saber antes de marcar"}
                intro={page.faqIntro ?? ""}
            />
            <FAQAccordion items={page.faq} />
        </div>
    </section>
{/if}

{#if page.cta}
    <ServiceCTA cta={page.cta} />
{/if}
