<script lang="ts">
    import { fixPt } from "$lib/utils/text";

    export let eyebrow = "";
    export let title = "";
    export let intro = "";
</script>

<div class="section-heading">
    {#if eyebrow}
        <span class="section-kicker">{fixPt(eyebrow)}</span>
    {/if}
    <h2 class="mt-4 text-3xl md:text-4xl">{fixPt(title)}</h2>
    {#if intro}
        <p>{fixPt(intro)}</p>
    {/if}
</div>
