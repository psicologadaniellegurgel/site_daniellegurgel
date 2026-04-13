<script lang="ts">
    import { base } from "$app/paths";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { buildWhatsAppLink, navigation } from "$lib/data/site";
    import { fixPt } from "$lib/utils/text";
    import { internalHref } from "$lib/utils/url";

    let isScrolled = false;
    let isMenuOpen = false;

    function isActive(href: string) {
        return $page.url.pathname === href;
    }

    onMount(() => {
        const handleScroll = () => {
            isScrolled = window.scrollY > 12;
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<header
    class={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
            ? "bg-[rgba(251,247,243,0.92)] shadow-[0_12px_30px_rgba(74,52,44,0.08)] backdrop-blur-xl"
            : "bg-transparent"
    }`}
>
    <div class="site-shell">
        <div class="flex min-h-[var(--header-height)] items-center justify-between gap-6">
            <a
                href={internalHref("/")}
                class="flex items-center gap-3"
                aria-label="Pagina inicial Danielle Gurgel"
            >
                <img
                    src={`${base}/images/logo-danielle-gurgel-192.png`}
                    alt="Logo Danielle Gurgel"
                    width="192"
                    height="192"
                    class="h-11 w-11 rounded-full border border-[var(--border)] bg-white/80 object-contain p-1.5 shadow-sm"
                />
                <div class="min-w-0">
                    <div class="font-heading text-[1.05rem] font-bold text-[var(--clay-deep)] md:text-[1.16rem]">
                        Danielle Gurgel
                    </div>
                    <div class="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                        Psicóloga clínica
                    </div>
                </div>
            </a>

            <nav class="hidden items-center gap-7 lg:flex">
                {#each navigation as item}
                    <a
                        href={internalHref(item.href)}
                        class={`text-sm font-semibold transition-colors ${
                            isActive(item.href)
                                ? "text-[var(--clay-deep)]"
                                : "text-[var(--ink-soft)] hover:text-[var(--clay)]"
                        }`}
                    >
                        {fixPt(item.label)}
                    </a>
                {/each}

                <a
                    href={buildWhatsAppLink("Oi, vim pelo site e gostaria de saber sobre atendimento.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-primary text-sm"
                >
                    Conversar no WhatsApp
                </a>
            </nav>

            <button
                class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/80 text-[var(--clay-deep)] shadow-sm lg:hidden"
                aria-expanded={isMenuOpen}
                aria-label="Abrir menu"
                on:click={() => (isMenuOpen = !isMenuOpen)}
            >
                <span class="relative block h-4 w-5">
                    <span class={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition-all ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`}></span>
                    <span class={`absolute left-0 top-[7px] block h-0.5 w-5 bg-current transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
                    <span class={`absolute left-0 top-[14px] block h-0.5 w-5 bg-current transition-all ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}></span>
                </span>
            </button>
        </div>
    </div>

    {#if isMenuOpen}
        <div class="border-t border-[var(--border)] bg-[rgba(251,247,243,0.97)] lg:hidden">
            <div class="site-shell py-4">
                <nav class="flex flex-col gap-2">
                    {#each navigation as item}
                        <a
                            href={internalHref(item.href)}
                            class={`rounded-2xl px-4 py-3 font-semibold ${
                                isActive(item.href)
                                    ? "bg-white text-[var(--clay-deep)]"
                                    : "text-[var(--ink-soft)]"
                            }`}
                            on:click={() => (isMenuOpen = false)}
                        >
                            {fixPt(item.label)}
                        </a>
                    {/each}

                    <a
                        href={buildWhatsAppLink("Oi, vim pelo site e gostaria de saber sobre atendimento.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-primary mt-3"
                        on:click={() => (isMenuOpen = false)}
                    >
                        Conversar no WhatsApp
                    </a>
                </nav>
            </div>
        </div>
    {/if}
</header>

<div class="h-[var(--header-height)]"></div>
