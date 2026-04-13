import { error } from "@sveltejs/kit";
import { getPostsByCategory } from "$lib/content/posts";
import { categories, categoryMap } from "$lib/data/categories";

export const entries = () =>
    categories.map((category) => ({
        categorySlug: category.slug,
    }));

export const load = ({ params }) => {
    const category = categoryMap[params.categorySlug];

    if (!category) {
        throw error(404, "Categoria não encontrada");
    }

    return {
        category,
        posts: getPostsByCategory(params.categorySlug),
    };
};
