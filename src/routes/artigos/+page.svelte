<script lang="ts">
    import ArticleCard from "$lib/components/ArticleCard.svelte";
    import SEO from "$lib/components/SEO.svelte";
    import SectionTitle from "$lib/components/SectionTitle.svelte";
    import { blogPosts } from "$lib/content/posts";
    import { categories } from "$lib/data/categories";
    import { siteConfig } from "$lib/data/site";
    import { internalHref } from "$lib/utils/url";

    let activeCategory = "todos";
    let search = "";

    $: filteredPosts = blogPosts.filter((post) => {
        const matchesCategory =
            activeCategory === "todos" || post.categorySlug === activeCategory;
        const haystack = `${post.title} ${post.excerpt} ${post.tags.join(" ")}`.toLowerCase();
        const matchesSearch = search === "" || haystack.includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Artigos de Danielle Gurgel",
            description:
                "Hub editorial com textos sobre psicoterapia, luto, relacionamentos, vida urbana e autoconhecimento.",
            url: `${siteConfig.url}/artigos/`,
        },
    ];
</script>

<SEO
    title="Artigos | Danielle Gurgel"
    description="Hub editorial com textos sobre psicoterapia, luto, relacionamentos, sobrecarga emocional e autoconhecimento."
    canonical="/artigos"
    schemas={schemas}
/>

<section class="page-section pt-6 md:pt-10">
    <div class="site-shell">
        <SectionTitle
            eyebrow="Hub editorial"
            title="Textos para entender melhor o que você está vivendo, sem excesso de ruído"
            intro="O blog organiza dúvidas que costumam aparecer antes mesmo do primeiro contato: primeira sessão, luto, relações, rotina, identidade e o começo da terapia."
        />

        <div class="surface-card-strong mt-6 grid gap-4 p-5 md:grid-cols-2 md:p-6">
            {#each categories as category}
                <a href={internalHref(`/${category.slug}`)} class="proof-link-card">
                    <div>
                        <h2 class="text-xl text-(--ink)">{category.label}</h2>
                        <p class="mt-3 text-sm text-(--ink-soft)">{category.lead}</p>
                    </div>
                    <span class="eyebrow-link">Ver tema</span>
                </a>
            {/each}
        </div>
    </div>
</section>

<section class="page-section pt-0">
    <div class="site-shell">
        <div class="surface-card-strong flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between md:p-6">
            <div class="chip-row">
                <button
                    class={`chip ${activeCategory === "todos" ? "border-(--border-strong) text-(--clay-deep)" : ""}`}
                    on:click={() => (activeCategory = "todos")}
                >
                    Todos
                </button>
                {#each categories as category}
                    <button
                        class={`chip ${activeCategory === category.slug ? "border-(--border-strong) text-(--clay-deep)" : ""}`}
                        on:click={() => (activeCategory = category.slug)}
                    >
                        {category.label}
                    </button>
                {/each}
            </div>

            <input
                bind:value={search}
                type="search"
                placeholder="Buscar por tema, título ou palavra"
                class="w-full rounded-full border border-(--border) bg-white px-4 py-3 text-(--ink) outline-none focus:border-(--border-strong) md:max-w-[20rem]"
            />
        </div>
    </div>
</section>

<section class="page-section pt-0">
    <div class="site-shell">
        {#if filteredPosts.length}
            <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {#each filteredPosts as post}
                    <ArticleCard {post} />
                {/each}
            </div>
        {:else}
            <div class="surface-card-strong px-6 py-8 text-(--ink-soft)">
                Nenhum texto apareceu com esse filtro. Tente outra palavra ou entre por um dos temas acima.
            </div>
        {/if}
    </div>
</section>
