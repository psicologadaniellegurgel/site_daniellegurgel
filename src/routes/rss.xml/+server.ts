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
    const posts = getAllPosts();
    const latestPostDate = posts
        .map((post) => post.updatedAt ?? post.date)
        .filter(Boolean)
        .sort()
        .at(-1);

    const items = posts
        .slice(0, 20)
        .map(
            (post) => `
<item>
  <title>${escapeXml(post.title)}</title>
  <link>${absoluteUrl(`/${post.categorySlug}/${post.slug}`)}</link>
  <guid>${absoluteUrl(`/${post.categorySlug}/${post.slug}`)}</guid>
  <description>${escapeXml(post.description)}</description>
  <pubDate>${new Date(`${post.date}T12:00:00`).toUTCString()}</pubDate>
  <category>${escapeXml(post.categorySlug)}</category>
</item>`,
        )
        .join("\n");

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml(siteConfig.name)}</title>
  <link>${siteConfig.url}</link>
  <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml" />
  <description>Artigos de psicoterapia, luto, relacionamentos, vida urbana e autoconhecimento.</description>
  <language>pt-BR</language>
  ${latestPostDate ? `<lastBuildDate>${new Date(`${latestPostDate}T12:00:00`).toUTCString()}</lastBuildDate>` : ""}
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
