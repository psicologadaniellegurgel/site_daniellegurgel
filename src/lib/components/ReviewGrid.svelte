<script lang="ts">
    import type { ReviewItem } from "$lib/data/reviews";
    import { fixPt } from "$lib/utils/text";

    export let reviews: ReviewItem[] = [];
</script>

<div class="grid gap-5 md:grid-cols-3">
    {#each reviews as review}
        <article class="surface-card flex h-full flex-col gap-4 p-6">
            <div class="flex items-start justify-between gap-4">
                <div>
                    <h3 class="text-xl text-[var(--ink)]">{review.name}</h3>
                    <p class="text-sm uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                        {fixPt(review.context)}
                    </p>
                </div>
                <span class="rounded-full bg-[rgba(194,131,73,0.12)] px-3 py-1 text-sm font-bold text-[var(--copper)]">
                    5.0
                </span>
            </div>

            <p class="text-[var(--ink-soft)]">{fixPt(review.excerpt)}</p>

            <p class="mt-auto text-sm font-semibold text-[var(--clay-deep)]">
                {fixPt(review.source)}
            </p>
        </article>
    {/each}
</div>
