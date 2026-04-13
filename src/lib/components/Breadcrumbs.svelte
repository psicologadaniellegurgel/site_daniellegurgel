<script lang="ts">
    import type { BreadcrumbItem } from "$lib/data/site";
    import { fixPt } from "$lib/utils/text";
    import { internalHref } from "$lib/utils/url";

    export let items: BreadcrumbItem[] = [];
</script>

<nav aria-label="Breadcrumb" class="page-section pb-0">
    <div class="site-shell">
        <div class="surface-card inline-flex max-w-full px-4 py-3">
            <ol class="m-0 flex flex-wrap items-center gap-2 p-0 text-sm text-[var(--ink-muted)]">
                <li class="list-none">
                    <a href={internalHref("/")} class="hover:text-[var(--clay)]">{fixPt("Início")}</a>
                </li>
                {#each items as item}
                    <li class="list-none">/</li>
                    <li class="list-none">
                        {#if item.href}
                            <a href={internalHref(item.href)} class="hover:text-[var(--clay)]">
                                {fixPt(item.label)}
                            </a>
                        {:else}
                            <span aria-current="page" class="text-[var(--clay-deep)]">
                                {fixPt(item.label)}
                            </span>
                        {/if}
                    </li>
                {/each}
            </ol>
        </div>
    </div>
</nav>
