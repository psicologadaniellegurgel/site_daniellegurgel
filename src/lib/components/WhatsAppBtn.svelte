<script lang="ts">
    import { onMount } from "svelte";
    import { buildWhatsAppLink } from "$lib/data/site";

    let isVisible = false;

    onMount(() => {
        const handleScroll = () => {
            isVisible = window.scrollY > 240;
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<a
    href={buildWhatsAppLink("Oi, vim pelo site e gostaria de conversar sobre atendimento.")}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    class={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_32px_rgba(37,211,102,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_38px_rgba(37,211,102,0.34)] ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
    }`}
>
    <span class="pointer-events-none absolute right-16 hidden min-w-max rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-[var(--ink)] shadow-md md:block">
        Falar com Danielle
    </span>
    <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"
        />
    </svg>
</a>
