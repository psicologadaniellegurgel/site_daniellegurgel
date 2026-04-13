import { base } from "$app/paths";
import { siteConfig } from "$lib/data/site";

/** Garante trailing slash em qualquer path */
function ensureTrailingSlash(path: string): string {
    return path.endsWith("/") ? path : `${path}/`;
}

/** URL absoluta com domínio + trailing slash (para canonical, sitemap, og:url, schema) */
export function absoluteUrl(path: string): string {
    if (path.startsWith("http")) return ensureTrailingSlash(path);
    const clean = path.startsWith("/") ? path : `/${path}`;
    return `${siteConfig.url}${ensureTrailingSlash(clean)}`;
}

/** href interno com base path + trailing slash (para links de navegação no HTML) */
export function internalHref(path: string | undefined): string {
    const p = path ?? "/";
    const clean = p.startsWith("/") ? p : `/${p}`;
    return `${base}${ensureTrailingSlash(clean)}`;
}
