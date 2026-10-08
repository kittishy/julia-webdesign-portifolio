# Julia Web Design — Portfólio

Portfólio comercial focado em prospecção de empresas e conversão de leads. Construído em React + Vite e publicado na Vercel.

## Projetos exibidos
- C&N Mármores e Granitos — marmoraria / site institucional
- Academia Gustavo Pià — centro de lutas / site institucional
- CLIMABLU — climatização / demonstração institucional
- Luscar — climatização / demonstração de redesign
- Basic Coffee — cafeteria / site institucional
- S2 Seguros Saúde — saúde / site institucional
- Raquel Santiago — fisioterapia / cartão digital
- Deskflow CRM — sistema / em desenvolvimento

## Desenvolvimento e verificação

`npm run dev` inicia o ambiente de desenvolvimento.

`npm run build` gera o cliente, o bundle de renderização e o HTML pré-renderizado em `dist/index.html`. A entrada React hidrata esse HTML em produção; no desenvolvimento usa a montagem normal. Não depende de um servidor de SSR na hospedagem.

`npm run test:seo` verifica a inserção segura de conteúdo no HTML. Typecheck: `npx tsc --noEmit -p tsconfig.app.json`. A identidade visual está documentada em `DESIGN.md`.

## Princípios
- projetos reais e clicáveis, sem métricas ou depoimentos inventados;
- mobile-first e acessível;
- SEO on-page com metadata, Open Graph, sitemap e dados estruturados;
- CTA preparado para quem recebeu o link durante uma conversa de prospecção.

O site antigo CelestialNexus foi preservado na branch `archive-celestialnexus-2026-09-20` antes da reformulação.
