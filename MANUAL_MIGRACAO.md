# Manual de Migração do Site — Danielle Gurgel

**Email base de tudo:** psicologadaniellegurgel@gmail.com

---

## 1. Contas a Criar / Registrar

### 1.1 GitHub (repositório do site)
**URL:** https://github.com/signup

- Username sugerido: `daniellegurgel` ou `psicologadaniellegurgel`
- Use o email base
- Plano: **Free** (suficiente para GitHub Pages)
- Após criar: ativar autenticação em dois fatores (Settings → Password and authentication)

CRIADO: psicologadaniellegurgel/site_daniellegurgel
perfil: psicologadaniellegurgel
Repositorio: site_daniellegurgel

---

### 1.2 Registro.br (domínio)
**URL:** https://registro.br

- Registrar o domínio desejado. Sugestões por prioridade:
  1. `daniellegurgelpsicologia.com.br`
  2. `daniellegurgel.com.br`
  3. `psicologadaniellegurgel.com.br`
- Use o email base e CPF de Danielle
- Plano: renovação anual (~R$ 40/ano para .com.br)
- **Importante:** Após criar a conta e registrar o domínio, anote onde ficam as configurações de **DNS / Servidores de nomes (nameservers)** — vamos alterar isso para apontar ao Cloudflare

CRIADO: www.psicologadaniellegurgel.com.br

---

### 1.3 Cloudflare (DNS + SSL + CDN — gratuito)
**URL:** https://dash.cloudflare.com/sign-up

- Use o email base
- Plano: **Free**
- Após criar conta, adicionar o domínio registrado no Registro.br
- O Cloudflare fornecerá dois **nameservers** (ex: `aria.ns.cloudflare.com`). Esses devem ser inseridos no Registro.br no lugar dos nameservers originais



---

### 1.4 Google Search Console
**URL:** https://search.google.com/search-console

- Já acessível com o email base (conta Google)
- Adicionar a propriedade do domínio após o site estar no ar
- Verificação mais fácil: método DNS via Cloudflare (registro TXT)
- Submeter o `sitemap.xml` após verificação

Copie o registro TXT abaixo na configuração do DNS referente a psicologadaniellegurgel.com.br
google-site-verification=o8ivApQal4r5TeQU2fJoHBIjYq-nRMnWDbhrVpna6MQ

---

### 1.5 Google Analytics (recomendado)
**URL:** https://analytics.google.com

- Já acessível com o email base
- Criar uma propriedade GA4
- O código de rastreamento será inserido no site pelo Claude

NÃO CRIADO: Este site não utiliza analytics pois não ve utilidade em acompanhar a jornada do cliente dentro do site e criar microgerenciamentos - é um site de divulgação de psicologo, com um blog, nada mais.

---

### 1.6 Google Meu Negócio (recomendado se tiver consultório físico)
**URL:** https://business.google.com

- Já acessível com o email base
- Cadastrar endereço do consultório
- Ajuda no ranqueamento local no Google Maps

---

## 2. Informações a Compartilhar com o Claude para Migração

Após criar as contas acima, traga as seguintes informações numa conversa com o Claude:

| # | O que trazer | Onde encontrar |
|---|---|---|
| 1 | **Username do GitHub** criado | Na sua conta GitHub, canto superior direito |
| 2 | **Nome do repositório** que vai criar no GitHub | Você decide ao criar — sugestão: `site` |
| 3 | **Domínio registrado** (ex: daniellegurgel.com.br) | Painel do Registro.br |
| 4 | **Nameservers do Cloudflare** (os dois endereços) | Painel Cloudflare → seu domínio → Overview |
| 5 | **ID de medição do Google Analytics** (ex: G-XXXXXXXX) | Google Analytics → Administrador → Fluxos de dados |

Com essas informações, o Claude vai:
- Atualizar o código do site para o novo repositório e domínio
- Configurar o arquivo de deploy automático (GitHub Actions)
- Adicionar o Analytics ##Não adicione
- Gerar o `CNAME` correto para o GitHub Pages

---

## 3. Arquivos e Acesso para Danielle Trabalhar Sozinha com IA

### 3.1 Acesso ao Repositório
Após a migração, Danielle terá o **repositório no próprio GitHub** dela. Para trabalhar localmente:

1. Instalar [Git](https://git-scm.com/download/win)
2. Instalar [Node.js LTS](https://nodejs.org/en/download)
3. Instalar [VS Code](https://code.visualstudio.com/)
4. Instalar a extensão **Claude Code** no VS Code (marketplace do VS Code, buscar "Claude Code")
5. Clonar o repositório:
   ```
   git clone https://github.com/SEU_USERNAME/site.git
   ```

### 3.2 Arquivo AGENTS.md (já existe no projeto)
O arquivo `AGENTS.md` na raiz do projeto contém instruções específicas para qualquer IA que trabalhe no site — ela não precisa explicar o contexto toda vez.

### 3.3 Arquivo CLAUDE.md (a criar)
Vamos criar um `CLAUDE.md` com instruções permanentes para o Claude: tom de voz, o que pode e não pode alterar, quem é Danielle, qual o objetivo do site etc.
#Não será necessário criar este arquivo. Danielle operará através do Antigravity do google.

### 3.4 Conta no Claude Code
Para usar o Claude Code no VS Code:
- Criar conta em https://claude.ai com o email base
- Plano **Pro** (~$20/mês) para uso mais intenso, ou **Free** para uso leve
- No VS Code, fazer login com essa conta na extensão Claude Code

### 3.5 Fluxo de trabalho do dia a dia (resumido)
```
1. Abrir VS Code na pasta do site
2. Abrir o Claude Code (painel lateral ou Ctrl+Shift+P → "Claude")
3. Pedir alterações em linguagem natural
4. Claude faz as alterações nos arquivos
5. Fazer o commit e push (Claude pode fazer isso também)
6. GitHub Actions faz o deploy automático em ~2 minutos
```

---

## Checklist de Ordem de Execução

- [x] Criar conta no GitHub
- [x] Criar conta no Registro.br e registrar domínio
- [x] Criar conta no Cloudflare e adicionar o domínio
- [x] Alterar nameservers no Registro.br para os do Cloudflare
- [ ] Aguardar propagação DNS (até 48h, geralmente <2h)
- [NÃO] Criar conta no Google Analytics
- [ ] Trazer as informações da seção 2 para o Claude
- [ ] Claude migra o repositório e configura o deploy
- [ ] Verificar site no domínio novo
- [ ] Registrar no Google Search Console e submeter sitemap
- [ ] Registrar no Google Meu Negócio (opcional)
- [ ] Instalar ferramentas locais e fazer primeiro clone do repositório
