<script lang="ts">
    import { base } from "$app/paths";
    import type { BlogPostDocument } from "$lib/content/types";
    import { categoryMap } from "$lib/data/categories";
    import { formatDisplayDate, readTimeLabel } from "$lib/utils/format";
    import { fixPt } from "$lib/utils/text";
    import { internalHref } from "$lib/utils/url";

    export let post: BlogPostDocument;
    export let compact = false;

    const category = categoryMap[post.categorySlug];
</script>

<article class={`surface-card overflow-hidden ${compact ? "" : "h-full"}`}>
    <a href={internalHref(`/${post.categorySlug}/${post.slug}`)} class="block h-full">
        <div class="relative aspect-[16/10] overflow-hidden">
            <img
                src={`${base}${post.heroImage.src}`}
                alt={fixPt(post.heroImage.alt)}
                width={post.heroImage.width}
                height={post.heroImage.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                class="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
            />
            <span class="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--clay-deep)] shadow-sm">
                {fixPt(category.label)}
            </span>
        </div>

        <div class="flex h-full flex-col gap-4 p-5 md:p-6">
            <div class="article-meta">
                <span>{formatDisplayDate(post.date)}</span>
                <span>{readTimeLabel(post.readTimeMinutes)}</span>
            </div>

            <div class="space-y-3">
                <h3 class={`${compact ? "text-xl" : "text-2xl"} text-[var(--ink)]`}>
                    {fixPt(post.title)}
                </h3>
                <p class="text-[var(--ink-soft)]">{fixPt(post.excerpt)}</p>
            </div>

            <div class="mt-auto pt-1 text-sm font-bold uppercase tracking-[0.12em] text-[var(--clay-deep)]">
                Ler artigo
            </div>
        </div>
    </a>
</article>
