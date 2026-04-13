import { error } from "@sveltejs/kit";
import { getAllPosts, getPost, getRelatedPosts } from "$lib/content/posts";
import { categoryMap } from "$lib/data/categories";

export const entries = () =>
    getAllPosts().map((post) => ({
        categorySlug: post.categorySlug,
        slug: post.slug,
    }));

export const load = ({ params }) => {
    const post = getPost(params.categorySlug, params.slug);

    if (!post) {
        throw error(404, "Artigo não encontrado");
    }

    const category = categoryMap[post.categorySlug];

    if (!category) {
        throw error(404, "Categoria não encontrada");
    }

    return {
        post,
        category,
        relatedPosts: getRelatedPosts(post, 3),
    };
};
