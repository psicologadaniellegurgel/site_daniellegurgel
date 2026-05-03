<script lang="ts">
    export let title = "Localização do consultório no Google Maps";

    const src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20689.82224858504!2d-46.68077525298397!3d-23.55125560648454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b2fb0a4bde7%3A0xe199684a60fd2026!2sPsic%C3%B3loga%20Danielle%20Gurgel!5e0!3m2!1spt-BR!2sbr!4v1776868593733!5m2!1spt-BR!2sbr";

    const viewOnGoogleHref =
        "https://www.google.com/maps/place/Psic%C3%B3loga+Danielle+Gurgel/@-23.5497347,-46.66001,17z/";
</script>

<div class="map-embed-wrap">
    <div class="map-embed">
        <iframe
            {src}
            {title}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
        ></iframe>
    </div>
    <a
        href={viewOnGoogleHref}
        target="_blank"
        rel="noopener noreferrer"
        class="eyebrow-link mt-3 inline-flex"
    >
        Ver no Google Maps
    </a>
</div>
