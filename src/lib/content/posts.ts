import type { BlogBlock, BlogPostDocument } from "$lib/content/types";
import { categoryMap } from "$lib/data/categories";
import { fixPt } from "$lib/utils/text";

const modules = import.meta.glob("/src/content/posts/**/*.ts", { eager: true });

function normalizeBlock(block: BlogBlock): BlogBlock {
    switch (block.type) {
        case "paragraph":
            return { ...block, html: fixPt(block.html) };
        case "heading":
            return { ...block, text: fixPt(block.text) };
        case "list":
            return { ...block, items: block.items.map((item) => fixPt(item)) };
        case "quote":
            return {
                ...block,
                text: fixPt(block.text),
                cite: block.cite ? fixPt(block.cite) : undefined,
            };
        case "callout":
            return {
                ...block,
                title: fixPt(block.title),
                html: fixPt(block.html),
                items: block.items?.map((item) => fixPt(item)),
            };
    }
}

function normalizePost(post: BlogPostDocument): BlogPostDocument {
    return {
        ...post,
        title: fixPt(post.title),
        description: fixPt(post.description),
        excerpt: fixPt(post.excerpt),
        tags: post.tags.map((tag) => fixPt(tag)),
        heroImage: {
            ...post.heroImage,
            alt: fixPt(post.heroImage.alt),
        },
        body: post.body.map((block) => normalizeBlock(block)),
        faq: post.faq?.map((item) => ({
            question: fixPt(item.question),
            answer: fixPt(item.answer),
        })),
        references: post.references?.map((reference) => fixPt(reference)),
        cta: post.cta
            ? {
                  ...post.cta,
                  title: fixPt(post.cta.title),
                  text: fixPt(post.cta.text),
                  label: fixPt(post.cta.label),
                  href: fixPt(post.cta.href),
                  secondaryLabel: post.cta.secondaryLabel
                      ? fixPt(post.cta.secondaryLabel)
                      : undefined,
                  secondaryHref: post.cta.secondaryHref,
              }
            : undefined,
    };
}

const docs = Object.values(modules)
    .map((module) => {
        const candidate = module as { post?: BlogPostDocument; default?: BlogPostDocument };
        const doc = candidate.post ?? candidate.default;
        return doc ? normalizePost(doc) : undefined;
    })
    .filter(Boolean) as BlogPostDocument[];

export const blogPosts = docs.sort((left, right) =>
    left.date < right.date ? 1 : left.date > right.date ? -1 : 0,
);

export function getAllPosts() {
    return blogPosts;
}

export function getFeaturedPosts(limit = 3) {
    return blogPosts.filter((post) => post.featured).slice(0, limit);
}

export function getPostsByCategory(categorySlug: string) {
    return blogPosts.filter((post) => post.categorySlug === categorySlug);
}

export function getPost(categorySlug: string, slug: string) {
    return blogPosts.find(
        (post) => post.categorySlug === categorySlug && post.slug === slug,
    );
}

export function getRelatedPosts(post: BlogPostDocument, limit = 3) {
    const currentCategory = categoryMap[post.categorySlug];
    const currentTags = new Set(post.tags.map((tag) => tag.toLowerCase()));

    return blogPosts
        .filter((candidate) => candidate.slug !== post.slug)
        .map((candidate) => {
            const candidateTags = candidate.tags.map((tag) => tag.toLowerCase());
            const sharedTags = candidateTags.filter((tag) => currentTags.has(tag)).length;
            const sameCategory = candidate.categorySlug === post.categorySlug ? 6 : 0;
            const adjacentCategory = currentCategory?.adjacentSlugs.includes(candidate.categorySlug)
                ? 3
                : 0;
            const featuredBoost = candidate.featured ? 1 : 0;

            return {
                candidate,
                score: sameCategory + adjacentCategory + sharedTags * 2 + featuredBoost,
            };
        })
        .filter((entry) => entry.score > 0)
        .sort((left, right) => {
            if (right.score !== left.score) return right.score - left.score;
            return left.candidate.date < right.candidate.date
                ? 1
                : left.candidate.date > right.candidate.date
                  ? -1
                  : 0;
        })
        .slice(0, limit)
        .map((entry) => entry.candidate);
}
