# Relatorio editorial e tecnico de SEO/AEO

Data da auditoria: 13 de abril de 2026  
Projeto: `site_danielle_gurgel`  
Escopo: build local do projeto SvelteKit e checagem pontual da home publicada em `https://psicologadaniellegurgel.com.br/`.

## Resumo executivo

O site tem uma base editorial e tecnica solida para SEO/AEO: boa arquitetura de temas, linguagem etica, paginas de servico bem conectadas, dados estruturados, FAQs e blocos de resposta direta para captura de snippets. A proposta esta coerente com o posicionamento de Danielle Gurgel como psicologa humanista/ACP em Higienopolis, sem cair em tom agressivo de marketing.

Os principais riscos encontrados estao em quatro frentes:

- uso de avaliacoes/depoimentos identificaveis na home, com rotulos como "Paciente presencial";
- pagina potencialmente orfa para a busca "psicologa para mulheres em Higienopolis";
- inconsistencias pequenas de acentuacao em textos visiveis;
- linkagem interna dos posts ainda irregular, apesar de a arquitetura geral estar boa.

Nenhum erro de build ou de typecheck foi encontrado.

## Validacoes realizadas

- `npm run check`: passou sem erros e sem warnings.
- `npm run build`: passou e gerou o site estatico em `build`.
- `npm run audit:content`: passou, mas apontou 22 avisos em 19 posts, principalmente falta de link contextual para localizacao, servico ou experiencia relacionada.
- Checagem HTTP da home publicada: `STATUS=200`, com `title`, `meta description`, `canonical`, Open Graph e JSON-LD presentes.

## Pontos fortes

1. Posicionamento claro

O site comunica uma proposta especifica: psicoterapia humanista/ACP em Higienopolis, com atendimento presencial e online. Isso diferencia o projeto de um blog generico de marketing.

2. Arquitetura editorial consistente

As paginas principais criam uma boa jornada:

- Home;
- Como posso ajudar;
- Servicos;
- Sobre;
- Localizacao;
- Artigos;
- categorias editoriais;
- paginas por experiencia clinica;
- paginas de servico.

Essa estrutura favorece SEO, AEO e navegacao humana.

3. Boa base para AEO

O site usa:

- FAQs em paginas principais e artigos;
- blocos de resposta curta em posts;
- headings em formato de duvida real;
- textos que respondem antes de vender;
- linguagem natural, com pouca mecanizacao de keyword.

4. Sinais de E-E-A-T

O projeto reforca confianca com:

- CRP;
- formacao;
- abordagem clinica;
- links de verificacao;
- schema de `Person`, `Organization`, `LocalBusiness`, `FAQPage`, `BlogPosting` e breadcrumbs;
- autoria explicita nos artigos.

5. Tom etico em geral

O site evita promessa de cura, urgencia artificial e diagnostico direto do leitor. A linguagem predominante e acolhedora, sobria e coerente com psicologia humanista.

## Pontos fracos

1. Avaliacoes identificaveis na home

A home exibe nomes, nota `5.0`, trechos de avaliacao e contexto como "Paciente presencial em Higienopolis" e "Paciente em acompanhamento". Mesmo que essas avaliacoes sejam publicas no Google, o uso editorial no site com identificacao e rotulo de paciente e sensivel para uma psicologa.

Recomendacao: trocar a secao por uma chamada mais cuidadosa para o perfil do Google, sem reproduzir nomes e sem rotular pessoas como pacientes.

Impacto: aumenta seguranca etica e reduz risco reputacional. #MUDANÇAVISUAL

2. Pagina potencialmente orfa: `/psicologa-para-mulheres-em-higienopolis/`

A pagina esta no sitemap, mas nao encontrei links internos apontando para ela no codigo fonte. Isso cria um problema de arquitetura: a pagina fica com cara de landing SEO isolada.

Recomendacao: escolher uma das duas direcoes:

- integrar a pagina como pagina de apoio real, linkando de Home, Como posso ajudar e Localizacao; #MUDANÇAVISUAL
- ou remover do sitemap/noindex se for apenas uma pagina de captura sem papel claro.

3. Pequenas inconsistencias de acentuacao em textos visiveis

Foram encontrados textos visiveis sem acento, especialmente no rodape e em blocos de confianca:

- "Navegacao";
- "mudancas";
- "Conteudo";
- "Endereco";
- "horarios";
- "consultorio";
- "avaliacoes";
- "publicas";
- "formacao";
- "clinica";
- "participacao";
- "Profissao".

Recomendacao: corrigir a origem desses textos em `src/lib/data/site.ts` e `src/lib/components/Footer.svelte`, em vez de depender de correcoes parciais por `fixPt`.

Impacto: melhora acabamento editorial e confianca percebida. #MUDANÇAVISUAL

4. Linkagem interna ainda irregular nos posts

A auditoria de conteudo apontou 22 avisos. O padrao mais comum e falta de link contextual para localizacao ou servico em artigos.

Exemplos de avisos:

- posts de ACP sem link para localizacao;
- textos de psicoterapia sem link para experiencia relacionada;
- posts de vida urbana sem link para servico ou localizacao;
- artigo de relacionamento sem link para servico e localizacao.

Recomendacao: adicionar links naturais no corpo dos posts, seguindo a regra demanda -> servico -> localizacao -> contato.

Impacto: melhora SEO, fluxo de conversao etica e navegacao. #MUDANÇAVISUAL

5. Alguns usos de "paciente" podem ser substituidos

O AGENTS.md orienta nao tratar o usuario como "caso" ou "paciente a ser corrigido". O site usa "paciente" principalmente em contexto de avaliacao e em alguns textos.

Recomendacao: preferir "pessoa em atendimento", "pessoas atendidas" ou "pessoas que procuram acompanhamento", dependendo do contexto.

Impacto: melhora aderencia ao tom humanista. #MUDANÇAVISUAL

## Correcoes tecnicas por gravidade

### Alta prioridade

1. Revisar a secao de avaliacoes publicas

Problema: nomes, notas e rotulos de pacientes sao exibidos na home.

Acao recomendada: substituir os cards por uma secao menos identificadora, por exemplo:

- "Avaliacoes publicas no Google";
- pequeno texto explicando que comentarios publicos podem ser lidos no perfil;
- botao para abrir o perfil no Google.

Marcacao: #MUDANÇAVISUAL

2. Corrigir a arquitetura da pagina `/psicologa-para-mulheres-em-higienopolis/`

Problema: a pagina aparece no sitemap, mas nao aparece linkada internamente.

Acao recomendada: integrar com links contextuais ou retirar da estrategia indexavel.

Se integrada, possiveis pontos de link:

- Home, na area de temas ou prova de posicionamento;
- Como posso ajudar, em um card discreto;
- Localizacao, como pagina de apoio para quem chegou por busca local;
- Artigos ou categoria de psicoterapia, se fizer sentido.

Marcacao: #MUDANÇAVISUAL

### Media prioridade

3. Normalizar URLs de schema para trailing slash

Problema: canonical e sitemap usam trailing slash, mas alguns campos `url` em JSON-LD aparecem sem `/` final, por exemplo em `createPageSchema`.

Acao recomendada: usar `absoluteUrl(page.canonicalPath)` tambem nos schemas em vez de `toAbsoluteUrl(page.canonicalPath)` quando a URL representar pagina canonica.

Impacto: reduz inconsistencias sem mudanca visual.

4. Separar melhor WebPage e Service no JSON-LD

Problema: paginas de servico usam `schemaType: "Service"`, fazendo a propria pagina ser tipada como `Service`.

Acao recomendada: manter a pagina como `WebPage` e adicionar `mainEntity` com um schema `Service`, ou gerar um schema adicional de `Service` conectado a pagina.

Impacto: melhora semantica estruturada sem mudanca visual.

5. Atualizar `lastmod` das paginas estaticas

Problema: `STATIC_LASTMOD` esta fixo em `2026-04-08`.

Acao recomendada: atualizar manualmente em release ou derivar por commit/data de modificacao, se o fluxo permitir.

Impacto: melhora sinal tecnico do sitemap sem mudanca visual.

6. Explicitar analytics/Cloudflare na politica de privacidade

Problema: a versao publicada injeta Cloudflare Insights/Beacon. A politica fala de dados de navegacao anonimos, mas nao cita explicitamente o fornecedor ou tipo de medicao.

Acao recomendada: adicionar uma frase curta sobre medicao tecnica/agregada de navegacao e seguranca, citando Cloudflare quando aplicavel.

Marcacao: #MUDANÇAVISUAL

7. Padronizar acentos na origem dos textos

Problema: textos sem acento sao tratados parcialmente por `fixPt`, mas nem todos passam pelo utilitario.

Acao recomendada: corrigir os textos diretamente em:

- `src/lib/data/site.ts`;
- `src/lib/components/Footer.svelte`;
- `src/lib/components/Header.svelte` para `aria-label`.

Marcacao: #MUDANÇAVISUAL

### Baixa prioridade

8. Padronizar prioridade de imagens hero

Problema: a home usa `loading="eager"` e `fetchpriority="high"` no hero, mas algumas paginas com hero via `PageHero` nao usam a mesma otimizacao.

Acao recomendada: permitir parametro de prioridade ou aplicar `loading="eager"` ao hero principal de paginas editoriais.

Impacto: melhora potencial de LCP sem mudanca visual.

9. Otimizar `favicon.svg`

Problema: o `favicon.svg` e grande para um favicon.

Acao recomendada: gerar um SVG mais leve ou usar apenas os favicons necessarios.

Impacto: leve melhora tecnica sem mudanca visual.

10. Revisar README

Problema: o README ainda parece gerado pelo template Svelte.

Acao recomendada: substituir por documentacao minima do projeto, scripts, deploy e regras editoriais.

Impacto: melhora manutencao, sem mudanca visual.

## Correcoes editoriais recomendadas

1. Ajustar linguagem das avaliacoes

Substituir nomes e rotulos por uma formulacao mais segura:

> Algumas avaliacoes publicas no Google mencionam acolhimento, escuta e cuidado no atendimento. Se fizer sentido para voce, pode consulta-las diretamente no perfil publico.

Marcacao: #MUDANÇAVISUAL

2. Integrar melhor a pagina de mulheres

Se a pagina continuar indexavel, ela precisa deixar claro que nao e uma captura oportunista de keyword. Sugestao de ajuste:

- explicar por que o site conversa principalmente com mulheres;
- dizer se o atendimento e exclusivo ou nao, com clareza;
- linkar para luto, relacionamentos, sobrecarga, servicos e localizacao.

Marcacao: #MUDANÇAVISUAL

3. Revisar titulos de artigos mais dramaticos

Alguns titulos funcionam editorialmente, mas podem soar mais dramaticos do que o restante do site. Exemplo:

- "O Luto que o Mundo Nao Ve: Perda Gestacional, Perinatal e o Puerperio"
- "O Movimento de Tornar-se Quem se E: Entre o Risco e a Liberdade"

Recomendacao: avaliar titulos mais sobrios e buscaveis, sem perder humanidade.

Marcacao: #MUDANÇAVISUAL

4. Melhorar links contextuais dos posts

Prioridade por cluster:

- Luto e perdas: linkar para `/experiencia/luto-e-perdas`, `/servicos/psicoterapia-presencial-higienopolis` e localizacao quando pertinente.
- Vida urbana e sobrecarga: linkar para `/experiencia/ansiedade-e-sobrecarga`, `/servicos/psicoterapia-online` e, quando local, `/localizacao/psicologa-higienopolis-sp`.
- ACP e autoconhecimento: linkar para `/sobre`, `/servicos` ou uma pagina de experiencia concreta.
- Psicoterapia: linkar para primeira sessao, presencial/online, reembolso, localizacao e contato.
- Relacionamentos: linkar para `/experiencia/relacionamentos-e-rupturas`, terapia de casal/familiar quando pertinente, e servicos.

Marcacao: #MUDANÇAVISUAL

## Sugestoes estrategicas

1. Criar uma pagina ou secao de "Como escolher atendimento psicologico em Higienopolis"

O site ja tem um artigo sobre escolher psicologa com criterio. Uma pagina local mais enxuta, com foco em Higienopolis, poderia capturar buscas locais sem parecer marketing agressivo.

Marcacao se virar nova pagina ou secao visivel: #MUDANÇAVISUAL

2. Fortalecer o funil local

Fluxo sugerido:

Home -> Psicoterapia presencial -> Localizacao -> Contato

Hoje o fluxo existe, mas pode ser reforcado nos textos e cards.

Marcacao: #MUDANÇAVISUAL

3. Criar um padrao editorial de linkagem para novos posts

Checklist minimo por post:

- 1 link para uma pagina de experiencia;
- 1 link para um servico quando fizer sentido;
- 1 link para localizacao se houver contexto presencial/local;
- 1 link para Sobre ou abordagem quando o texto for conceitual;
- CTA com convite, sem pressao.

4. Criar um checklist de revisao etica pre-publicacao

Itens sugeridos:

- O texto diagnostica o leitor?
- Promete resultado?
- Usa medo ou urgencia artificial?
- Trata o leitor como paciente/caso?
- Diferencia presencial e online quando necessario?
- Ha linkagem interna natural?
- Ha resposta direta para uma pergunta real de busca?

## Ordem de execucao recomendada

1. Remover ou reformular avaliacoes identificaveis da home. #MUDANÇAVISUAL
2. Decidir o destino da pagina `/psicologa-para-mulheres-em-higienopolis/`. #MUDANÇAVISUAL
3. Corrigir acentuacao e termos visiveis no rodape, blocos de confianca e labels. #MUDANÇAVISUAL
4. Ajustar linkagem interna dos posts com avisos no `npm run audit:content`. #MUDANÇAVISUAL
5. Melhorar schema de Service/WebPage e trailing slash.
6. Atualizar politica de privacidade para mencionar analytics/Cloudflare. #MUDANÇAVISUAL
7. Revisar LCP de herois e README.

## Observacao final

O site nao precisa de uma reescrita ampla. A base editorial e tecnica e boa. O maior ganho agora esta em refinamento: reduzir riscos eticos, tornar a arquitetura mais intencional, corrigir pequenos sinais de descuido editorial e reforcar links internos onde a auditoria automatica ja apontou lacunas.
