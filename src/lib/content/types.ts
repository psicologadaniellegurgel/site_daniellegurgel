export interface BreadcrumbLink {
    label: string;
    href?: string;
}

export interface LinkAction {
    label: string;
    href: string;
    external?: boolean;
    variant?: "primary" | "secondary" | "ghost";
}

export interface ImageAsset {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    sources?: { type: string; srcset: string }[];
    sizes?: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface SnippetAnswer {
    question: string;
    html: string;
}

export interface FeatureCard {
    title: string;
    text: string;
    href?: string;
    label?: string;
    external?: boolean;
}

export interface QuoteBlock {
    text: string;
    cite?: string;
}

export interface PageSection {
    eyebrow?: string;
    title: string;
    intro?: string;
    paragraphs?: string[];
    list?: string[];
    cards?: FeatureCard[];
    quote?: QuoteBlock;
    note?: string;
    image?: ImageAsset;
}

export interface PageCallToAction {
    title: string;
    text: string;
    label: string;
    href: string;
    secondaryLabel?: string;
    secondaryHref?: string;
}

export interface ContentPage {
    title: string;
    metaTitle?: string;
    description: string;
    updatedAt?: string;
    canonicalPath: string;
    heroEyebrow: string;
    heroIntro: string;
    badgeList?: string[];
    image?: ImageAsset;
    actions?: LinkAction[];
    breadcrumbs: BreadcrumbLink[];
    sections: PageSection[];
    faq?: FAQItem[];
    faqTitle?: string;
    faqIntro?: string;
    cta?: PageCallToAction;
    schemaType?: string;
    serviceOnline?: boolean;
    extraSchemas?: Record<string, unknown>[];
}

export type BlogBlock =
    | { type: "paragraph"; html: string }
    | { type: "heading"; level: 2 | 3; text: string }
    | { type: "list"; items: string[] }
    | { type: "quote"; text: string; cite?: string }
    | { type: "callout"; title: string; html: string; items?: string[] };

export interface BlogPostDocument {
    slug: string;
    categorySlug: string;
    title: string;
    description: string;
    excerpt: string;
    date: string;
    updatedAt?: string;
    readTimeMinutes: number;
    tags: string[];
    heroImage: ImageAsset;
    snippetAnswer: SnippetAnswer;
    featured?: boolean;
    body: BlogBlock[];
    faq?: FAQItem[];
    references?: string[];
    cta?: PageCallToAction;
}
