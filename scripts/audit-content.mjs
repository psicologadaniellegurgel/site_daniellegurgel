/**
 * Auditoria automatizada de conteudo dos posts.
 * Uso: node scripts/audit-content.mjs
 *
 * Verifica:
 *  - data nao futura
 *  - snippetAnswer presente e renderizavel como resposta curta AEO
 *  - minimo de links internos (servico + experiencia + artigo)
 *  - FAQ com ao menos 2 itens
 *  - CTA presente
 *  - CTA secundario presente e nao apontando para /contato
 *  - hero image referenciada existe em static/
 *  - corpo nao vazio
 */

import { readdir, readFile, access } from "node:fs/promises";
import { join, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const POSTS_DIR = join(ROOT, "src", "content", "posts");
const STATIC_DIR = join(ROOT, "static");

const today = new Date().toISOString().slice(0, 10);

async function fileExists(filePath) {
    try {
        await access(filePath);
        return true;
    } catch {
        return false;
    }
}

async function collectPostFiles(dir) {
    const files = [];
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...(await collectPostFiles(full)));
        } else if (entry.name.endsWith(".ts")) {
            files.push(full);
        }
    }
    return files;
}

function extractField(source, field) {
    // Match field: "value" or field: 'value'
    const re = new RegExp(`${field}:\\s*["']([^"']+)["']`);
    const match = source.match(re);
    return match?.[1] ?? null;
}

function countPattern(source, pattern) {
    const matches = source.match(pattern);
    return matches ? matches.length : 0;
}

function stripInlineHtml(source) {
    return source.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

async function auditPost(filePath) {
    const warnings = [];
    const errors = [];
    const relPath = filePath.replace(ROOT + "\\", "").replace(ROOT + "/", "");

    const source = await readFile(filePath, "utf-8");

    // Date
    const date = extractField(source, "date");
    if (!date) {
        errors.push("Campo date ausente");
    } else if (date > today) {
        errors.push(`Data futura: ${date} (hoje: ${today})`);
    }

    // Body content check
    const hasBody = /body:\s*\[/.test(source);
    if (!hasBody) {
        errors.push("Body ausente ou vazio");
    }

    // Extract body section (between body: [ and faq: [) and search raw text for href patterns.
    // This works because escaped quotes in TS strings (href=\"/servicos/...\") are literal in the file.
    const bodyMatch = source.match(/body:\s*\[([\s\S]*?)\]\s*,\s*(?:faq|references|cta)\s*[:\{]/);
    const bodyContent = bodyMatch?.[1] ?? source.split(/body:\s*\[/)[1]?.split(/\]\s*,/)[0] ?? "";
    const bodyTypes = [...bodyContent.matchAll(/type:\s*["']([^"']+)["']/g)].map((match) => match[1]);

    if (bodyTypes.length === 0) {
        errors.push("Body sem blocos identificaveis");
    } else if (bodyTypes[0] !== "paragraph") {
        errors.push(`Primeiro bloco do body deve ser paragraph para posicionar snippetAnswer (atual: ${bodyTypes[0]})`);
    }

    const firstHeadingIndex = bodyTypes.findIndex((type) => type === "heading");
    const firstCalloutIndex = bodyTypes.findIndex((type) => type === "callout");

    if (firstCalloutIndex >= 0 && (firstHeadingIndex < 0 || firstCalloutIndex < firstHeadingIndex)) {
        errors.push("Callout antes do primeiro heading: use snippetAnswer para a resposta curta inicial");
    }

    const snippetMatch = source.match(/snippetAnswer:\s*\{([\s\S]*?)\}\s*,\s*(?:featured|body)\s*:/);
    if (!snippetMatch) {
        errors.push("snippetAnswer ausente");
    } else {
        const snippetSource = snippetMatch[1];
        const question = extractField(snippetSource, "question");
        const html = extractField(snippetSource, "html");

        if (!question) {
            errors.push("snippetAnswer.question ausente");
        }

        if (!html) {
            errors.push("snippetAnswer.html ausente");
        } else {
            const answerLength = stripInlineHtml(html).length;
            if (answerLength < 180 || answerLength > 450) {
                warnings.push(`snippetAnswer.html fora do tamanho sugerido: ${answerLength} caracteres (ideal: 180-450)`);
            }
        }

        if (
            question &&
            !/[?？]$/.test(question.trim()) &&
            !/^(O que|Como|Quando|Por que|Quais|Qual)\b/.test(question.trim())
        ) {
            warnings.push("snippetAnswer.question nao parece uma pergunta de busca direta");
        }
    }

    const hasServiceLink = /href=(?:\\"|")\/servicos\//.test(bodyContent);
    const hasExperienceLink = /href=(?:\\"|")\/experiencia\//.test(bodyContent);
    const hasArticleLink = /href=(?:\\"|")\/[a-z][a-z0-9-]+\/[a-z][a-z0-9-]+/.test(bodyContent);
    const hasLocationLink = /href=(?:\\"|")\/localizacao\//.test(bodyContent);

    if (!hasServiceLink) {
        warnings.push("Sem link para servico no body");
    }
    if (!hasExperienceLink) {
        warnings.push("Sem link para experiencia no body");
    }
    if (!hasArticleLink) {
        warnings.push("Sem link para outro artigo no body");
    }

    const linkCount = [hasServiceLink, hasExperienceLink, hasArticleLink].filter(Boolean).length;
    if (linkCount < 2) {
        errors.push(`Triade incompleta: ${linkCount}/3 tipos de link (servico/experiencia/artigo)`);
    }

    if (!hasLocationLink) {
        warnings.push("Sem link para localizacao no body");
    }

    // FAQ count
    const faqSection = source.split(/faq:\s*\[/)[1];
    if (!faqSection) {
        errors.push("FAQ ausente");
    } else {
        const faqCount = countPattern(faqSection.split("]")[0], /question:\s*["']/g);
        if (faqCount < 2) {
            errors.push(`FAQ insuficiente: ${faqCount} itens (minimo 2)`);
        }
    }

    // CTA
    const hasCta = /cta:\s*\{/.test(source);
    if (!hasCta) {
        errors.push("CTA ausente");
    } else {
        const hasSecondaryHref = /secondaryHref/.test(source);
        if (!hasSecondaryHref) {
            warnings.push("CTA sem link secundario");
        }
        if (/secondaryHref:\s*["']\/contato["']/.test(source)) {
            warnings.push("CTA secundario aponta para /contato em vez de servico");
        }
    }

    // Hero image
    const heroSrc = extractField(source, "src");
    if (!heroSrc) {
        errors.push("Hero image src ausente");
    } else {
        const imagePath = join(STATIC_DIR, heroSrc);
        if (!(await fileExists(imagePath))) {
            errors.push(`Hero image nao encontrada: ${heroSrc}`);
        }
    }

    return { relPath, errors, warnings };
}

async function main() {
    const files = await collectPostFiles(POSTS_DIR);
    console.log(`\nAuditoria de conteudo — ${files.length} posts encontrados\n`);

    let totalErrors = 0;
    let totalWarnings = 0;

    for (const filePath of files.sort()) {
        const result = await auditPost(filePath);

        if (result.errors.length === 0 && result.warnings.length === 0) {
            console.log(`  OK  ${result.relPath}`);
            continue;
        }

        if (result.errors.length > 0) {
            console.log(`  ERR ${result.relPath}`);
            for (const err of result.errors) {
                console.log(`       x ${err}`);
            }
            totalErrors += result.errors.length;
        } else {
            console.log(`  WRN ${result.relPath}`);
        }

        for (const warn of result.warnings) {
            console.log(`       ~ ${warn}`);
        }
        totalWarnings += result.warnings.length;
    }

    console.log(`\n---`);
    console.log(`Total: ${files.length} posts, ${totalErrors} erros, ${totalWarnings} avisos`);

    if (totalErrors > 0) {
        console.log(`\nAuditoria falhou com ${totalErrors} erro(s).\n`);
        process.exit(1);
    }

    console.log(`\nAuditoria passou.\n`);
}

main();
