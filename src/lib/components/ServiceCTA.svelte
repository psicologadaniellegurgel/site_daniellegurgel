<script lang="ts">
    import type { PageCallToAction } from "$lib/content/types";
    import { fixPt } from "$lib/utils/text";
    import { internalHref } from "$lib/utils/url";

    export let cta: PageCallToAction;
</script>

<section class="page-section">
    <div class="site-shell">
        <div class="surface-card-strong page-gradient overflow-hidden px-6 py-8 md:px-10 md:py-10">
            <div class="max-w-[40rem] space-y-4">
                <span class="section-kicker">Conversar pode ser o primeiro passo</span>
                <h2 class="text-3xl md:text-4xl">{fixPt(cta.title)}</h2>
                <p class="text-lg text-[var(--ink-soft)]">{fixPt(cta.text)}</p>

                <div class="button-row pt-2">
                    <a href={cta.href} class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        {fixPt(cta.label)}
                    </a>

                    {#if cta.secondaryHref && cta.secondaryLabel}
                        <a
                            href={cta.secondaryHref.startsWith("http") ? cta.secondaryHref : internalHref(cta.secondaryHref)}
                            class="btn btn-secondary"
                        >
                            {fixPt(cta.secondaryLabel)}
                        </a>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</section>
