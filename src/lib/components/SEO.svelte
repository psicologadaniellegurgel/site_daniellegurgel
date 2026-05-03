<script lang="ts">
    import { page } from "$app/stores";
    import { siteConfig, toAbsoluteUrl } from "$lib/data/site";
    import { baseSchemas } from "$lib/utils/schema";
    import { absoluteUrl } from "$lib/utils/url";
    import { fixPt } from "$lib/utils/text";

    export let title = "Danielle Gurgel | Psicoterapia em Higienópolis";
    export let description =
        "Psicoterapia humanista em Higienópolis para mulheres que atravessam luto, relações difíceis, sobrecarga e transições de vida.";
    const defaultImage = "/images/danielle-gurgel-psicologa-higienopolis-hero.webp";

    export let image: string | undefined = defaultImage;
    export let imageAlt = description;
    export let imageWidth: number | undefined = undefined;
    export let imageHeight: number | undefined = undefined;
    export let type: "website" | "article" = "website";
    export let canonical = "";
    export let schemas: Record<string, unknown>[] = [];
    export let published = "";
    export let modified = "";

    $: canonicalUrl = canonical
        ? absoluteUrl(canonical)
        : absoluteUrl($page.url.pathname);
    $: imageSource = image || defaultImage;
    $: imageUrl = imageSource.startsWith("http") ? imageSource : toAbsoluteUrl(imageSource);
    $: imageType = getImageType(imageUrl);
    $: jsonLdSchemas = [...baseSchemas, ...schemas];

    function getImageType(url: string) {
        const clean = url.split("?")[0].toLowerCase();
        if (clean.endsWith(".png")) return "image/png";
        if (clean.endsWith(".jpg") || clean.endsWith(".jpeg")) return "image/jpeg";
        if (clean.endsWith(".webp")) return "image/webp";
        if (clean.endsWith(".avif")) return "image/avif";
        return "";
    }
</script>

<svelte:head>
    <title>{fixPt(title)}</title>
    <meta name="description" content={fixPt(description)} />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href={canonicalUrl} />
    <link
        rel="alternate"
        type="application/rss+xml"
        title={`${fixPt(siteConfig.businessName)} - artigos`}
        href={`${siteConfig.url}/rss.xml`}
    />

    <meta property="og:locale" content="pt_BR" />
    <meta property="og:type" content={type} />
    <meta property="og:site_name" content={fixPt(siteConfig.name)} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:title" content={fixPt(title)} />
    <meta property="og:description" content={fixPt(description)} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:alt" content={fixPt(imageAlt)} />
    {#if imageWidth}
        <meta property="og:image:width" content={String(imageWidth)} />
    {/if}
    {#if imageHeight}
        <meta property="og:image:height" content={String(imageHeight)} />
    {/if}
    {#if imageType}
        <meta property="og:image:type" content={imageType} />
    {/if}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={fixPt(title)} />
    <meta name="twitter:description" content={fixPt(description)} />
    <meta name="twitter:image" content={imageUrl} />
    <meta name="twitter:image:alt" content={fixPt(imageAlt)} />

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
