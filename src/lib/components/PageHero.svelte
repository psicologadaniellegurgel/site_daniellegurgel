<script lang="ts">
    import { base } from "$app/paths";
    import type { ContentPage } from "$lib/content/types";
    import { fixPt } from "$lib/utils/text";
    import { internalHref } from "$lib/utils/url";

    export let page: ContentPage;

    function withBase(path: string) {
        if (!path || path.startsWith("http") || path.startsWith(base)) {
            return path;
        }

        return `${base}${path}`;
    }

    function withBaseInSrcset(srcset: string) {
        return srcset
            .split(",")
            .map((entry) => entry.trim())
            .filter(Boolean)
            .map((entry) => {
                const [url, descriptor] = entry.split(/\s+/, 2);
                return descriptor ? `${withBase(url)} ${descriptor}` : withBase(url);
            })
            .join(", ");
    }
</script>

<section class="page-section pt-6 md:pt-10">
    <div class="site-shell">
        <div class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div class="space-y-6">
                <span class="section-kicker">{fixPt(page.heroEyebrow)}</span>
                <div class="space-y-4">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl">{fixPt(page.title)}</h1>
                    <p class="max-w-160 text-lg text-(--ink-soft) md:text-xl">
                        {fixPt(page.heroIntro)}
                    </p>
                </div>

                {#if page.badgeList?.length}
                    <div class="chip-row">
                        {#each page.badgeList as badge}
                            <span class="chip">{fixPt(badge)}</span>
                        {/each}
                    </div>
                {/if}

                {#if page.actions?.length}
                    <div class="button-row">
                        {#each page.actions as action}
                            <a
                                href={action.href.startsWith("http") ? action.href : internalHref(action.href)}
                                class={`btn ${action.variant === "secondary" ? "btn-secondary" : action.variant === "ghost" ? "btn-ghost" : "btn-primary"}`}
                                target={action.external ? "_blank" : undefined}
                                rel={action.external ? "noopener noreferrer" : undefined}
                            >
                                {fixPt(action.label)}
                            </a>
                        {/each}
                    </div>
                {/if}
            </div>

            {#if page.image}
                <div class="relative">
                    <div class="absolute -inset-4 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(194,131,73,0.24),transparent_60%)] blur-2xl"></div>
                    {#if page.image.sources?.length}
                        <picture>
                            {#each page.image.sources as source}
                                <source
                                    type={source.type}
                                    srcset={withBaseInSrcset(source.srcset)}
                                    sizes={page.image.sizes}
                                />
                            {/each}
                            <img
                                src={withBase(page.image.src)}
                                alt={fixPt(page.image.alt)}
                                width={page.image.width}
                                height={page.image.height}
                                sizes={page.image.sizes}
                                class="surface-card-strong aspect-4/5 w-full object-cover"
                            />
                        </picture>
                    {:else}
                        <img
                            src={withBase(page.image.src)}
                            alt={fixPt(page.image.alt)}
                            width={page.image.width}
                            height={page.image.height}
                            class="surface-card-strong aspect-4/5 w-full object-cover"
                        />
                    {/if}
                </div>
            {/if}
        </div>
    </div>
</section>
