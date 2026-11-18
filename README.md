# Dockter Landing Page

Site institucional do **Dockter**, o sistema de **gestão da vida profissional do médico** do grupo
Zarys. A landing page apresenta o produto, as funcionalidades, os planos e permite que o visitante
entre em contato ou inicie o período de teste gratuito.

## Páginas

- **`/` (home):** hero, soluções (dor × solução), funcionalidades (lançamento + módulo financeiro
  previsto para 2027), demos interativas (receituário e evolução), planos de assinatura, FAQ e contato.
- **`/planos`:** comparativo completo dos planos **Basic**, **Pro** e **Pro+**, adicionais, condições
  de pagamento e tabela de recursos.
- **`/agenda-e-plantoes`:** funcionalidade de agenda e cadastro de plantões.
- **`/prontuario`:** funcionalidade de prontuário e evolução do paciente (SOAP/SBAR).
- **`/receituario`:** funcionalidade de receituário com templates e assinatura digital VIDaaS.
- **`/financeiro`:** módulo financeiro (previsto para 2027).

## Stack

- **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4:** um único projeto, renderizado no
  servidor em build time.
- **Export estático:** `output: "export"` gera HTML, CSS e JS estáticos em `dist/` (um `index.html`
  por rota), ideal para hospedagem estática e bom para SEO. O site funciona sem servidor Node.
- **Server Components por padrão:** `"use client"` apenas nos componentes que precisam de interação
  (cabeçalho/menu, demos interativas, formulário de contato e animações de scroll). Todo o conteúdo é
  renderizado no HTML.
- **Animações de entrada em CSS:** um `IntersectionObserver` leve apenas adiciona a classe que dispara
  a animação (`fade-up`). Não há animação feita em JavaScript, e o conteúdo continua visível caso o JS
  falhe (progressive enhancement via `<noscript>`).
- **lucide-react** para ícones e **next/font** (Plus Jakarta Sans e DM Sans) com `display: swap`.

## Pré-requisitos

- **Node.js 20+**

## Como rodar localmente (desenvolvimento)

```bash
npm install
npm run dev
```

A aplicação sobe em **http://localhost:3000**.

## Build estático e preview de produção

```bash
# Gera o site estático em dist/
npm run build

# Serve o conteúdo de dist/ (preview do que vai para produção)
npx serve dist -l 3005
```

O preview sobe em **http://localhost:3005**. O conteúdo de `dist/` é totalmente estático e corresponde
ao que deve ser publicado em produção.

## Acessar pelo celular (mesma rede Wi-Fi)

Para testar em dispositivos móveis na rede local, sirva o **build estático** (`dist/`). O servidor de
desenvolvimento pode não carregar corretamente quando acessado fora do `localhost`.

1. PC e celular na **mesma rede Wi-Fi**.
2. Gere o build e sirva o `dist/` (passo acima).
3. Descubra o IP do PC:
   - macOS: `ipconfig getifaddr en0`
   - Linux: `hostname -I`
4. No celular, acesse `http://<IP-do-PC>:3005/`. Teste todas as rotas.

Se a página não abrir, verifique se o firewall do PC libera a porta na rede local.

## Scripts

- `npm run dev`: ambiente de desenvolvimento (`http://localhost:3000`)
- `npm run build`: gera o site estático em `dist/`
- `npm run lint`: ESLint

## Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx                # layout raiz, metadados/SEO, fontes
│   ├── template.tsx              # wrapper de transição entre páginas
│   ├── globals.css               # Tailwind v4 (@theme) e animações
│   ├── page.tsx                  # home
│   ├── planos/page.tsx           # página de planos
│   ├── agenda-e-plantoes/page.tsx
│   ├── prontuario/page.tsx
│   ├── receituario/page.tsx
│   └── financeiro/page.tsx
├── assets/
│   ├── brand/                    # logos e símbolos
│   └── photos/                   # fotos do site
└── components/dockter/
    ├── SiteHeader.tsx             # cabeçalho com menu e dropdown (client)
    ├── SiteFooter.tsx             # rodapé
    ├── Reveal.tsx                 # wrapper de animação de entrada (client)
    ├── FeaturePage.tsx            # layout reutilizável das páginas de funcionalidade
    ├── featureData.ts             # dados das 4 páginas de funcionalidade
    ├── PlanosShowcase.tsx         # cards de planos com toggle mensal/anual (client)
    ├── FaqSection.tsx             # accordion de dúvidas frequentes
    ├── ContactSection.tsx         # formulário de contato com mailto (client)
    ├── demos.tsx                  # demos interativas: receita e evolução (client)
    ├── ui.tsx                     # CTA, Eyebrow, Arc, LearnMore
    ├── data.ts                    # constantes, planos, FAQs, navegação
    ├── homeData.ts                # dados específicos da home
    └── SocialGlyphs.tsx           # ícones SVG de Instagram e YouTube
public/
├── robots.txt
└── sitemap.xml
```

## SEO

- `robots.txt` e `sitemap.xml` em `public/`, apontando para `dockter.com.br`.
- Meta tags completas no `layout.tsx`: `title` (com template), `description`, `keywords`, Open Graph,
  Twitter card e `canonical` por página.
- Páginas pré-renderizadas como HTML estático.
