<script lang="ts">
    import type { BlogPostDocument } from "$lib/content/types";
    import ArticleCard from "$lib/components/ArticleCard.svelte";
    import SectionTitle from "$lib/components/SectionTitle.svelte";

    export let posts: BlogPostDocument[] = [];
    export let title = "Continue a leitura";
    export let intro =
        "Se este texto fez sentido, estes artigos aprofundam a conversa por outro angulo.";
</script>

{#if posts.length}
    <section class="page-section">
        <div class="site-shell">
            <SectionTitle eyebrow="Artigos relacionados" {title} {intro} />
            <div class="grid gap-5 md:grid-cols-3">
                {#each posts as post}
                    <ArticleCard {post} compact />
                {/each}
            </div>
        </div>
    </section>
{/if}
