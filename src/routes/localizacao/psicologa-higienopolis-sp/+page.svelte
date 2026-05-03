<script lang="ts">
    import EditorialPage from "$lib/components/EditorialPage.svelte";
    import MapEmbed from "$lib/components/MapEmbed.svelte";
    import SectionTitle from "$lib/components/SectionTitle.svelte";
    import { locationPage } from "$lib/data/site-pages";
</script>

<EditorialPage page={locationPage}>
    <svelte:fragment slot="after-sections">
        <section class="page-section pt-0">
            <div class="site-shell">
                <SectionTitle
                    eyebrow="No mapa"
                    title="Veja a localização exata do consultório"
                    intro="Av. Angélica, 1996, sala 501 — perto do metrô Paulista-Pernambucanas."
                />
                <MapEmbed />
            </div>
        </section>
    </svelte:fragment>
</EditorialPage>
