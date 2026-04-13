<script lang="ts">
    import { page } from "$app/stores";
    import { siteConfig, toAbsoluteUrl } from "$lib/data/site";
    import { baseSchemas } from "$lib/utils/schema";
    import { absoluteUrl } from "$lib/utils/url";
    import { fixPt } from "$lib/utils/text";

    export let title = "Danielle Gurgel | Psicoterapia em Higienópolis";
    export let description =
        "Psicoterapia humanista em Higienópolis para mulheres que atravessam luto, relações difíceis, sobrecarga e transições de vida.";
    export let image = "/images/danielle-gurgel-psicologa-higienopolis-hero.webp";
    export let type: "website" | "article" = "website";
    export let canonical = "";
    export let schemas: Record<string, unknown>[] = [];
    export let published = "";
    export let modified = "";

    $: canonicalUrl = canonical
        ? absoluteUrl(canonical)
        : absoluteUrl($page.url.pathname);
    $: imageUrl = image.startsWith("http") ? image : toAbsoluteUrl(image);
    $: jsonLdSchemas = [...baseSchemas, ...schemas];
</script>

<svelte:head>
    <title>{fixPt(title)}</title>
    <meta name="description" content={fixPt(description)} />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href={canonicalUrl} />

    <meta property="og:locale" content="pt_BR" />
    <meta property="og:type" content={type} />
    <meta property="og:site_name" content={fixPt(siteConfig.name)} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:title" content={fixPt(title)} />
    <meta property="og:description" content={fixPt(description)} />
    <meta property="og:image" content={imageUrl} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={fixPt(title)} />
    <meta name="twitter:description" content={fixPt(description)} />
    <meta name="twitter:image" content={imageUrl} />

    {#if type === "article" && published}
        <meta property="article:published_time" content={published} />
    {/if}

    {#if type === "article" && modified}
        <meta property="article:modified_time" content={modified} />
    {/if}

    {#each jsonLdSchemas as schema}
        {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
    {/each}
</svelte:head>
