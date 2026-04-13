<script lang="ts">
    import type { FAQItem } from "$lib/content/types";
    import { fixPt } from "$lib/utils/text";

    export let items: FAQItem[] = [];
</script>

<div class="faq-list">
    {#each items as item}
        <details class="faq-item">
            <summary>{fixPt(item.question)}</summary>
            <div class="faq-answer">
                <p>{fixPt(item.answer)}</p>
            </div>
        </details>
    {/each}
</div>
