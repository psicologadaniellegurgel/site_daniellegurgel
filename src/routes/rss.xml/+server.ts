import { getAllPosts } from "$lib/content/posts";
import { siteConfig } from "$lib/data/site";
import { absoluteUrl } from "$lib/utils/url";

export const prerender = true;

function escapeXml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&apos;");
}

export function GET() {
    const items = getAllPosts()
        .slice(0, 20)
        .map(
            (post) => `
<item>
  <title>${escapeXml(post.title)}</title>
  <link>${absoluteUrl(`/${post.categorySlug}/${post.slug}`)}</link>
  <guid>${absoluteUrl(`/${post.categorySlug}/${post.slug}`)}</guid>
  <description>${escapeXml(post.description)}</description>
  <pubDate>${new Date(`${post.date}T12:00:00`).toUTCString()}</pubDate>
</item>`,
        )
        .join("\n");

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${escapeXml(siteConfig.name)}</title>
  <link>${siteConfig.url}</link>
  <description>Artigos de psicoterapia, luto, relacionamentos, vida urbana e autoconhecimento.</description>
  ${items}
</channel>
</rss>`;

    return new Response(body, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "max-age=0, s-maxage=3600",
        },
    });
}
