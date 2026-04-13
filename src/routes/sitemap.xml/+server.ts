import { getAllPosts } from "$lib/content/posts";
import { categories } from "$lib/data/categories";
import { absoluteUrl } from "$lib/utils/url";

export const prerender = true;

const STATIC_LASTMOD = "2026-04-08";

const staticPages = [
    "/",
    "/como-posso-ajudar",
    "/servicos",
    "/sobre",
    "/contato",
    "/artigos",
    "/politica-de-privacidade",
    "/termos-de-uso",
    "/servicos/psicoterapia-presencial-higienopolis",
    "/servicos/psicoterapia-online",
    "/servicos/terapia-de-casal",
    "/servicos/terapia-familiar",
    "/servicos/grupos-e-rodas",
    "/localizacao/psicologa-higienopolis-sp",
    "/experiencia/luto-e-perdas",
    "/experiencia/relacionamentos-e-rupturas",
    "/experiencia/ansiedade-e-sobrecarga",
    "/experiencia/transicoes-de-vida",
    "/experiencia/autoestima-e-identidade",
    "/psicologa-para-mulheres-em-higienopolis",
];

function entry(url: string, lastmod?: string) {
    return `<url><loc>${url}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`;
}

export function GET() {
    const categoryEntries = categories.map((category) =>
        entry(absoluteUrl(`/${category.slug}`)),
    );

    const postEntries = getAllPosts().map((post) =>
        entry(absoluteUrl(`/${post.categorySlug}/${post.slug}`), post.date),
    );

    const staticEntries = staticPages.map((path) => entry(absoluteUrl(path), STATIC_LASTMOD));

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...categoryEntries, ...postEntries].join("\n")}
</urlset>`;

    return new Response(body, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "max-age=0, s-maxage=3600",
        },
    });
}
