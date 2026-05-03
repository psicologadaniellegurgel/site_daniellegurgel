<script lang="ts">
    import { base } from "$app/paths";
    import { footerNavigation, siteConfig } from "$lib/data/site";
    import { fixPt } from "$lib/utils/text";
    import { internalHref } from "$lib/utils/url";

    const currentYear = new Date().getFullYear();
</script>

<footer class="page-section border-t border-[var(--border)] bg-[rgba(255,250,246,0.88)]">
    <div class="site-shell">
        <div class="surface-card-strong grid gap-8 px-6 py-8 md:grid-cols-[1.2fr_0.8fr_1fr] md:px-8">
            <div class="space-y-4">
                <div class="flex items-center gap-3">
                    <img
                        src={`${base}/images/logo-danielle-gurgel-192.png`}
                        alt={`Logo ${siteConfig.businessName}`}
                        width="192"
                        height="192"
                        class="h-11 w-11 rounded-full border border-[var(--border)] bg-white/80 object-contain p-1.5"
                    />
                    <div>
                        <div class="font-heading text-xl text-[var(--clay-deep)]">
                            {siteConfig.businessName}
                        </div>
                        <div class="text-xs uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                            CRP {siteConfig.crp}
                        </div>
                    </div>
                </div>

                <p class="max-w-[34rem] text-[var(--ink-soft)]">
                    Psicoterapia humanista em Higienópolis para quem busca um espaço ético,
                    acolhedor e consistente para falar de luto, relações, esgotamento e
                    mudancas de vida sem precisar caber em respostas prontas.
                </p>
            </div>

            <div>
                <h2 class="text-lg text-[var(--clay-deep)]">Navegacao</h2>
                <ul class="mt-4 grid gap-2 p-0 text-[var(--ink-soft)]">
                    {#each footerNavigation as item}
                        <li class="list-none">
                            <a href={internalHref(item.href)} class="hover:text-[var(--clay)]">
                                {fixPt(item.label)}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>

            <div class="space-y-3 text-[var(--ink-soft)]">
                <h2 class="text-lg text-[var(--clay-deep)]">Atendimento</h2>
                <p>
                    {siteConfig.address.street}, {siteConfig.address.number} - Sala {siteConfig.address.room}
                    <br />
                    {siteConfig.address.neighborhood}, {siteConfig.address.city} - {siteConfig.address.region}
                </p>
                <p>
                    Segunda a sexta, {siteConfig.hoursLabel}
                    <br />
                    Atendimento presencial e online
                </p>
                <p>
                    <a
                        href={siteConfig.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="eyebrow-link"
                    >
                        Abrir localização no mapa
                    </a>
                </p>
            </div>
        </div>

        <div class="flex flex-col gap-3 pt-6 text-sm text-[var(--ink-muted)] md:flex-row md:items-center md:justify-between">
            <p>&copy; {currentYear} {siteConfig.businessName}. Todos os direitos reservados.</p>
            <div class="flex flex-wrap gap-4">
                <a href={internalHref("/politica-de-privacidade")} class="hover:text-[var(--clay)]">
                    Política de privacidade
                </a>
                <a href={internalHref("/termos-de-uso")} class="hover:text-[var(--clay)]">
                    Termos de uso
                </a>
                <a href={internalHref("/contato")} class="hover:text-[var(--clay)]">
                    Contato
                </a>
            </div>
        </div>
    </div>
</footer>
