# HomeTech Soluções Avançadas — site institucional

Site institucional da **HomeTech Soluções Avançadas**, loja de tecnologia em Patos de Minas – MG.
Esta é a **primeira etapa do projeto: somente front-end**, com dados estáticos e componentes
preparados para integrações futuras.

## Tecnologias

| Recurso | Versão |
| --- | --- |
| React | 18.3 |
| TypeScript | 5.9 (modo `strict`) |
| Vite | 5.4 |
| Tailwind CSS | 3.4 |
| React Router | 6.30 |
| lucide-react | 0.471 |
| framer-motion | 11.18 |

## Como executar localmente

Requer Node.js 18 ou superior.

```bash
npm install     # instala as dependências
npm run dev     # ambiente de desenvolvimento em http://localhost:5173
```

Outros comandos:

```bash
npm run build    # typecheck (tsc -b) + build de produção em dist/
npm run preview  # serve o build de produção localmente
npm run lint     # apenas a verificação de tipos
```

## Estrutura

```
public/
  favicon.svg, apple-touch-icon.png, icon-512.png   ícones derivados da logo
  og-hometech.jpg                                   imagem de compartilhamento
  robots.txt, sitemap.xml, site.webmanifest
  images/
    hometech-mark.svg        escudo da marca, usado no cabeçalho e no rodapé
    hometech-logo.webp/.jpg  logo completa
    loja/                    FOTOS REAIS da loja, enviadas pela empresa
    servicos/                ILUSTRAÇÕES das seis categorias de serviço

src/
  components/
    layout/   Header, Footer, Layout, ScrollManager
    ui/       Button, Logo, Reveal, Section, SectionHeading, Stars, PageLoader
    ServiceCard.tsx, ReviewCard.tsx, ContactForm.tsx, WhatsAppButton.tsx
  sections/   Hero, CredibilityStrip, ServicesGrid, RepairSection,
              AboutTeaser, ReviewsSection, CtaSection, LocationSection
  pages/      Home, Services, About, Contact, NotFound
  data/       business.ts, services.ts, reviews.ts, navigation.ts, storePhotos.ts
  hooks/      useSeo, usePrefersReducedMotion, useScrollPosition, useBodyScrollLock
  lib/        whatsapp.ts, structuredData.ts, cn.ts
  styles/     index.css
```

## Onde editar as informações da loja

Tudo o que muda com o tempo está centralizado em **`src/data/business.ts`**: telefone, endereço,
CEP, horários de funcionamento, links do Google Maps e das avaliações, e a URL de produção.
Alterar esse arquivo atualiza cabeçalho, rodapé, páginas, botões de WhatsApp e os dados
estruturados de uma só vez.

### ⚠️ Pendência antes de publicar: número de WhatsApp

A loja forneceu apenas o **telefone fixo (34) 3821-0910**. A constante `WHATSAPP_NUMBER`
(em `src/data/business.ts`) usa os dígitos desse telefone como ponto de partida para que todos os
botões já funcionem, mas **o número de WhatsApp precisa ser confirmado pela HomeTech** e corrigido
nessa constante antes de o site ir ao ar.

Outras constantes de edição rápida:

- `GOOGLE_REVIEW_COUNT` — total de avaliações no Google (12 no momento da entrega).
- `business.siteUrl` — atualize depois do primeiro deploy na Vercel, pois é a base das URLs
  canônicas, do Open Graph e do `sitemap.xml`.

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Hero, faixa de credibilidade, seis serviços, assistência técnica, sobre, avaliações, CTA e localização |
| `/servicos` | Detalhamento das seis categorias, com navegação por categoria e âncoras (`/servicos#automacao`) |
| `/sobre` | Página institucional, áreas de atuação e galeria com fotos reais da loja |
| `/contato` | Canais de contato, formulário validado e mapa incorporado |
| `*` | Página 404 personalizada (marcada como `noindex`) |

## Decisões de conteúdo

O texto do site foi escrito para **não afirmar nada que a loja não confirmou**:

- Não há promessas de prazo de reparo, peças originais, garantia ou certificações.
- Não há número de clientes atendidos, anos de experiência nem notas inventadas.
- As avaliações são apenas as três reais informadas, com as estrelas exibidas somente onde a
  avaliação original foi confirmada (`rating: null` oculta as estrelas).
- As imagens em `public/images/loja/` são fotos reais da loja, enviadas pela empresa. As imagens em
  `public/images/servicos/` são **ilustrações** criadas para o projeto e estão identificadas como
  tal no rodapé — nenhuma imagem genérica é apresentada como foto do estabelecimento.

## Acessibilidade e SEO

- HTML semântico, um `<h1>` por página e hierarquia de títulos correta.
- `alt` em todas as imagens; ícones decorativos marcados com `aria-hidden`.
- Link "Pular para o conteúdo", foco visível padronizado e navegação completa por teclado.
- Menu mobile com `aria-expanded`, fechamento por `Esc` e bloqueio de rolagem de fundo.
- `prefers-reduced-motion` respeitado — as animações de entrada são desligadas, não apenas encurtadas.
- Título, descrição, canônica e Open Graph próprios por rota; dados estruturados `LocalBusiness`
  gerados apenas com informações confirmadas.

## Deploy na Vercel

O arquivo `vercel.json` já configura o fallback de SPA (todas as rotas servem `index.html`), de modo
que `/servicos`, `/sobre` e `/contato` funcionam ao serem acessadas diretamente ou recarregadas.

- Build command: `npm run build`
- Output directory: `dist`

Depois do primeiro deploy, atualize `business.siteUrl`, o `sitemap.xml` e o `robots.txt` com o
domínio definitivo.

## Limites desta etapa

Conforme combinado, **não** foram implementados: banco de dados, API própria, painel administrativo,
login, persistência do formulário, envio real de e-mails, agendamento, e-commerce ou pagamentos.

O formulário de contato valida no navegador e exibe uma confirmação demonstrativa. O ponto único de
integração futura é a função `submitContact` em `src/components/ContactForm.tsx` — basta substituir
o corpo dela por uma chamada à API; os estados de carregamento e sucesso já estão prontos.
