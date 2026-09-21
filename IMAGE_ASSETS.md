# IMAGE_ASSETS

Contrato de imagens do portfólio. Os retratos finais abaixo foram derivados exclusivamente das fotos fornecidas pela própria autora para este projeto; nenhuma imagem pessoal externa foi usada.

## `/public/julia-hero.webp`
- Função: retrato principal do hero e elemento de confiança humana logo na primeira dobra.
- Tamanho final: 1000 × 1000 px, 1:1, WebP.
- Direção: fotografia realista, roupa preta, ambiente neutro, contraste discreto e aquecimento muito leve.
- Composição: rosto no quadrante superior-central; espaço visual suficiente ao redor para moldura e labels em CSS.
- Responsivo: `object-fit: cover`; desktop 4:5 dentro do card, mobile ~4:4.9; `object-position` calibrado para preservar o rosto.
- Área negativa: não destinada a texto sobre a foto; copy permanece em coluna própria.
- Origem: foto da autora enviada na conversa.

## `/public/julia-about.webp`
- Função: seção Sobre, reforçando autoria e proximidade sem repetir exatamente o enquadramento do hero.
- Tamanho final: 720 × 960 px, 3:4, WebP.
- Direção: fotografia real, fundo doméstico neutro, tons quentes suaves, sem retoque estrutural de rosto/corpo.
- Composição: retrato vertical com ombros e tronco, rosto preservado no terço superior.
- Responsivo: 3:4 em todos os breakpoints, com largura limitada a 430 px no desktop.
- Origem: foto da autora enviada na conversa.

## `/public/og-portfolio.jpg`
- Função: preview social/WhatsApp, Open Graph e Twitter card.
- Tamanho: 1200 × 630 px, 1.91:1, JPEG progressivo.
- Composição: copy forte à esquerda e retrato à direita; contraste alto para leitura em thumbnails pequenas.
- Texto incorporado: “Sites que fazem seu negócio parecer tão bom quanto ele é.”
- Origem: composição gerada a partir de uma foto real enviada pela autora.

## Prévia dos projetos
- Não usar screenshots fictícios nem imagens de IA.
- O portfólio usa `iframe` lazy-loaded dos três sites reais como prévia viva; cada card mantém fallback visual caso o browser bloqueie o embed.
- Links externos sempre apontam para os projetos publicados: Basic Coffee, S2 Seguros Saúde e Raquel Santiago.
