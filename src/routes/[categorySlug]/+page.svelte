<script lang="ts">
    import type { PageData } from "./$types";
    import ArticleCard from "$lib/components/ArticleCard.svelte";
    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
    import SEO from "$lib/components/SEO.svelte";
    import SectionTitle from "$lib/components/SectionTitle.svelte";
    import { createBreadcrumbSchema } from "$lib/utils/schema";
    import { absoluteUrl, internalHref } from "$lib/utils/url";

    export let data: PageData;

    const schemas = [
        createBreadcrumbSchema([
            { label: "Artigos", href: "/artigos" },
            { label: data.category.label },
        ]),
        {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `Artigos sobre ${data.category.label}`,
            description: data.category.description,
            url: absoluteUrl(`/${data.category.slug}`),
            about: {
                "@type": "Thing",
                name: data.category.label,
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: data.posts.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: absoluteUrl(`/${post.categorySlug}/${post.slug}`),
                name: post.title,
            })),
        },
    ];
</script>

<SEO
    title={`Artigos sobre ${data.category.label} | Danielle Gurgel`}
    description={data.category.description}
    canonical={`/${data.category.slug}`}
    schemas={schemas}
/>

<Breadcrumbs items={[{ label: "Artigos", href: "/artigos" }, { label: data.category.label }]} />

<section class="page-section pt-6 md:pt-10">
    <div class="site-shell">
        <SectionTitle
            eyebrow="Arquivo editorial"
            title={`Artigos sobre ${data.category.label}`}
            intro={data.category.heroIntro}
        />

        <div class="surface-card-strong mt-6 grid gap-5 p-6 md:grid-cols-[0.95fr_1.05fr] md:p-7">
            <div class="space-y-3">
                <h2 class="text-2xl text-[var(--clay-deep)]">Por onde costuma valer a pena começar</h2>
                <p class="text-[var(--ink-soft)]">{data.category.lead}</p>
            </div>

            <div class="grid gap-4">
                {#each data.category.startHere as item}
                    <a href={internalHref(item.href)} class="proof-link-card">
                        <div>
                            <h3 class="text-lg text-[var(--ink)]">{item.title}</h3>
                            <p class="mt-2 text-sm text-[var(--ink-soft)]">{item.text}</p>
                        </div>
                        <span class="eyebrow-link">{item.label}</span>
                    </a>
                {/each}
            </div>
        </div>
    </div>
</section>

<section class="page-section pt-0">
    <div class="site-shell">
        <SectionTitle
            eyebrow="Leituras do tema"
            title="Textos para aprofundar essa conversa sem cair em resposta vazia"
            intro="Você pode entrar pelo que estiver mais próximo do seu momento."
        />

        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {#each data.posts as post}
                <ArticleCard {post} />
            {/each}
        </div>
    </div>
</section>

<section class="page-section pt-0">
    <div class="site-shell">
        <SectionTitle
            eyebrow="Próximos passos"
            title="Depois da leitura, pode fazer sentido continuar por aqui"
            intro="Estas páginas ajudam a ligar leitura, contexto e possibilidade de cuidado."
        />

        <div class="grid-cards">
            {#each data.category.nextSteps as item}
                <article class="feature-card feature-card-outline">
                    <h3 class="text-xl text-[var(--ink)]">{item.title}</h3>
                    <p class="mt-3 text-[var(--ink-soft)]">{item.text}</p>
                    <a href={internalHref(item.href)} class="eyebrow-link mt-4 inline-flex">
                        {item.label}
                    </a>
                </article>
            {/each}
        </div>
    </div>
</section>
