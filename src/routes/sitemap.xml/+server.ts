import { getAllPosts } from "$lib/content/posts";
import type { ContentPage } from "$lib/content/types";
import { categories } from "$lib/data/categories";
import {
    aboutPage,
    contactPage,
    helpHubPage,
    locationPage,
    privacyPage,
    servicesHubPage,
    termsPage,
    womenLandingPage,
} from "$lib/data/site-pages";
import {
    couplesServicePage,
    familyServicePage,
    groupsServicePage,
    onlineServicePage,
    presencialServicePage,
} from "$lib/data/services";
import {
    identityPage,
    lutoPage,
    overloadPage,
    relationshipsPage,
    transitionsPage,
} from "$lib/data/experience-pages";
import { absoluteUrl } from "$lib/utils/url";

export const prerender = true;

const SITE_LASTMOD = "2026-05-01";

const contentPages: ContentPage[] = [
    helpHubPage,
    servicesHubPage,
    aboutPage,
    contactPage,
    privacyPage,
    termsPage,
    presencialServicePage,
    onlineServicePage,
    couplesServicePage,
    familyServicePage,
    groupsServicePage,
    locationPage,
    lutoPage,
    relationshipsPage,
    overloadPage,
    transitionsPage,
    identityPage,
    womenLandingPage,
];

function entry(url: string, lastmod?: string) {
    return `<url><loc>${url}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`;
}

function latestDate(dates: string[]) {
    return dates.filter(Boolean).sort().at(-1);
}

export function GET() {
    const posts = getAllPosts();

    const categoryEntries = categories.map((category) => {
        const categoryPosts = posts.filter((post) => post.categorySlug === category.slug);
        const lastmod = latestDate(categoryPosts.map((post) => post.updatedAt ?? post.date));
        return entry(absoluteUrl(`/${category.slug}`), lastmod);
    });

    const postEntries = posts.map((post) =>
        entry(absoluteUrl(`/${post.categorySlug}/${post.slug}`), post.updatedAt ?? post.date),
    );

    const staticEntries = [
        entry(absoluteUrl("/"), SITE_LASTMOD),
        entry(absoluteUrl("/artigos"), latestDate(posts.map((post) => post.updatedAt ?? post.date))),
        ...contentPages.map((page) =>
            entry(absoluteUrl(page.canonicalPath), page.updatedAt ?? SITE_LASTMOD),
        ),
    ];

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
