import type { ContentPage, FAQItem } from "$lib/content/types";
import { siteConfig, toAbsoluteUrl } from "$lib/data/site";

const websiteId = `${siteConfig.url}/#website`;
const organizationId = `${siteConfig.url}/#organization`;
const personId = `${siteConfig.url}/sobre/#person`;
const localBusinessId = `${siteConfig.url}/localizacao/psicologa-higienopolis-sp/#localbusiness`;

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "pt-BR",
    publisher: {
        "@id": organizationId,
    },
};

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.businessName,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: toAbsoluteUrl("/images/logo-danielle-gurgel-512.png"),
    image: toAbsoluteUrl("/images/danielle-gurgel-psicologa-higienopolis-hero.webp"),
    telephone: siteConfig.phoneDisplay,
    sameAs: siteConfig.organizationSameAs,
};

export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: siteConfig.professionalName,
    description:
        "Psicóloga clínica com atuação humanista em Higienópolis, São Paulo, orientada pela Abordagem Centrada na Pessoa.",
    jobTitle: "Psicóloga clínica",
    url: `${siteConfig.url}/sobre/`,
    image: toAbsoluteUrl("/images/danielle-gurgel-psicologa-sobre-retrato.webp"),
    telephone: siteConfig.phoneDisplay,
    sameAs: siteConfig.personSameAs,
    worksFor: {
        "@id": organizationId,
    },
    identifier: {
        "@type": "PropertyValue",
        propertyID: "CRP",
        value: siteConfig.crp,
    },
    alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universidade Federal do Espírito Santo",
    },
    hasCredential: [
        {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Registro profissional",
            recognizedBy: {
                "@type": "Organization",
                name: "Conselho Regional de Psicologia de São Paulo",
            },
            identifier: siteConfig.crp,
        },
        {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Graduação",
            educationalLevel: "Ensino superior",
            recognizedBy: {
                "@type": "CollegeOrUniversity",
                name: "Universidade Federal do Espírito Santo",
            },
            name: "Bacharelado em Psicologia",
        },
        {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Formação clínica",
            recognizedBy: {
                "@type": "Organization",
                name: "EncontroACP",
            },
            name: "Prática da Psicologia Clínica na Abordagem Centrada na Pessoa",
        },
    ],
    knowsAbout: [
        "Psicoterapia",
        "Luto e perdas",
        "Luto gestacional, perinatal e neonatal",
        "Relacionamentos e rupturas",
        "Sobrecarga emocional",
        "Abordagem Centrada na Pessoa",
    ],
};

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": localBusinessId,
    name: siteConfig.businessName,
    description: siteConfig.description,
    url: `${siteConfig.url}/localizacao/psicologa-higienopolis-sp/`,
    image: toAbsoluteUrl("/images/consultorio-psicologia-higienopolis-sp-01.avif"),
    telephone: siteConfig.phoneDisplay,
    sameAs: siteConfig.organizationSameAs,
    hasMap: siteConfig.googleMapsUrl,
    areaServed: [`${siteConfig.address.neighborhood}, ${siteConfig.address.city}`],
    address: {
        "@type": "PostalAddress",
        streetAddress: `${siteConfig.address.street}, ${siteConfig.address.number} - Sala ${siteConfig.address.room}`,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: "BR",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.coordinates.latitude,
        longitude: siteConfig.coordinates.longitude,
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "https://schema.org/Monday",
                "https://schema.org/Tuesday",
                "https://schema.org/Wednesday",
                "https://schema.org/Thursday",
                "https://schema.org/Friday",
            ],
            opens: "08:00",
            closes: "20:00",
        },
    ],
    founder: {
        "@id": personId,
    },
};

export const baseSchemas = [
    websiteSchema,
    organizationSchema,
    personSchema,
    localBusinessSchema,
];

export function createBreadcrumbSchema(items: { label: string; href?: string }[]) {
    const breadcrumbItems = [
        {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: `${siteConfig.url}/`,
        },
        ...items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 2,
            name: item.label,
            item: item.href ? toAbsoluteUrl(item.href) : undefined,
        })),
    ];

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems,
    };
}

export function createFaqSchema(items: FAQItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };
}

export function createProfilePageSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/sobre/#profile`,
        url: `${siteConfig.url}/sobre/`,
        name: `Perfil profissional de ${siteConfig.professionalName}`,
        mainEntity: {
            "@id": personId,
        },
        about: {
            "@id": localBusinessId,
        },
        isPartOf: {
            "@id": websiteId,
        },
        inLanguage: "pt-BR",
    };
}

export function createPageSchema(page: ContentPage) {
    const pageUrl = toAbsoluteUrl(page.canonicalPath);
    const schema = {
        "@context": "https://schema.org",
        "@type": page.schemaType ?? "WebPage",
        "@id": `${pageUrl}/#webpage`,
        name: page.title,
        description: page.description,
        url: pageUrl,
        inLanguage: "pt-BR",
        isPartOf: {
            "@id": websiteId,
        },
        about: {
            "@id": personId,
        },
        primaryImageOfPage: page.image?.src ? toAbsoluteUrl(page.image.src) : undefined,
    } as Record<string, unknown>;

    if (page.schemaType === "Service") {
        schema.serviceType = page.title;

        if (page.serviceOnline) {
            schema.provider = { "@id": personId };
            schema.areaServed = {
                "@type": "Country",
                name: "Brasil",
            };
            schema.availableChannel = {
                "@type": "ServiceChannel",
                availableLanguage: "pt-BR",
                serviceUrl: toAbsoluteUrl(page.canonicalPath),
            };
        } else {
            schema.provider = { "@id": localBusinessId };
            schema.areaServed = `${siteConfig.address.neighborhood}, ${siteConfig.address.city}`;
            schema.availableChannel = {
                "@type": "ServiceChannel",
                availableLanguage: "pt-BR",
                serviceLocation: { "@id": localBusinessId },
            };
        }
    }

    return schema;
}
