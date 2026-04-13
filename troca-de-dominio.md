# Migração para domínio próprio

Quando o site migrar de `https://arranjospsicologia.github.io/temp_dgurgel/` para `https://www.psicologadaniellegurgel.com.br`, as seguintes alterações precisam ser feitas:

## 1. Remover base path

Em `svelte.config.js`, remover (ou esvaziar) o `base`:

```diff
  paths: {
-   base: process.argv.includes('dev') ? '' : '/temp_dgurgel',
+   base: '',
    relative: false
  }
```

## 2. Atualizar URL do site

Em `src/lib/data/site.ts`, atualizar a URL:

```diff
- url: "https://arranjospsicologia.github.io/temp_dgurgel",
+ url: "https://www.psicologadaniellegurgel.com.br",
```

## 3. Atualizar robots.txt

Em `static/robots.txt`, atualizar o sitemap:

```diff
- Sitemap: https://arranjospsicologia.github.io/temp_dgurgel/sitemap.xml
+ Sitemap: https://www.psicologadaniellegurgel.com.br/sitemap.xml
```

## 4. Atualizar web manifest (se existir)

Em `site.webmanifest`, verificar e atualizar URLs e `start_url`.

## 5. Build e validação

Depois das alterações:

1. `npm run build`
2. Verificar HTML de pelo menos uma página e um artigo:
   - `<link rel="canonical">` aponta para `www.psicologadaniellegurgel.com.br`
   - `<meta property="og:url">` idem
   - JSON-LD (`WebSite`, `LocalBusiness`, `BlogPosting`) usa o novo domínio
   - Links internos não contêm `/temp_dgurgel`
3. Verificar `sitemap.xml` e `rss.xml` — todas as URLs devem usar o novo domínio
4. Após deploy, submeter novo sitemap no Google Search Console
5. Se o domínio antigo continuar ativo, configurar redirect 301 de todas as páginas

## 6. Google Search Console

- Adicionar e verificar o novo domínio
- Usar a ferramenta de mudança de endereço (se aplicável)
- Submeter o sitemap atualizado
- Monitorar indexação por 2-4 semanas

## 7. Redirect do domínio antigo (recomendado)

Se possível, manter o GitHub Pages ativo por pelo menos 3 meses com redirects para o novo domínio via meta refresh ou configuração de DNS.
