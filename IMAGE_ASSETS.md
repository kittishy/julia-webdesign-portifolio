# IMAGE_ASSETS

Contrato de imagens do portfólio. O retrato ativo é `/public/julia-original.png`, cópia integral da foto enviada pela autora (941 × 1672 px), sem geração, retoque ou mudança de resolução. O recorte é apenas de apresentação por CSS: 4:5 no computador e circular no celular. As versões geradas anteriormente foram preservadas, mas não são exibidas. A foto original tem 2,08 MB; a prioridade nesta revisão é a fidelidade.

## Prévia social ativa

`/public/og-julia-freitas.png`: captura real da abertura atual em 1200 × 630 px, com título, nome completo e fotografia original. Usada em Open Graph e Twitter. As imagens anteriores são preservadas apenas como histórico.

## Retratos anteriores gerados — preservados, fora da página

- `/public/julia-hero-profissional.png`: abertura, retrato vertical com fundo neutro e luz lateral natural.
- `/public/julia-about-profissional.png`: seção Sobre, retrato em ambiente de trabalho com notebook.
- Preservar textura da pele, traços individuais, cabelo e colar da referência; sem filtros de cor adicionais no CSS.
- As dimensões e o enquadramento devem ser conferidos no navegador em desktop e celular.

### Prompt da abertura

Use case: identity-preserve. Create ONE high-resolution photographic portrait for the hero of Julia's professional web designer portfolio, vertical 4:5 composition. Input image is the identity reference: this exact woman, not a similar model. Preserve her exact facial proportions, eye shape and dark brown eyes, thick natural eyebrows, nose, lips, jawline, natural skin tone, age, long black hair and individual asymmetries. Keep her black top and delicate silver necklace with black oval pendant. Waist-up relaxed professional portrait, shoulders natural, face toward camera at almost the reference angle, composed approachable closed-mouth expression. No selfie arm. Hands outside crop. Simple real warm charcoal/taupe plaster wall background, soft window daylight from one side, neutral believable skin color, realistic subtle pores, individual hair strands and slight flyaways, natural fabric texture. Camera at eye level, 85mm portrait optics, realistic depth of field, fine photographic detail without oversharpening. Head fully visible with generous 10% headroom, face centered horizontally in upper 40%, shoulders and upper torso visible. Authentic understated creative professional photography, not fashion glamour. No smoothing, no beautification, no face reshaping, no heavy makeup, no exaggerated bokeh, no text, no collage, no border. Highest possible image quality. Crucial: same recognizable person as input.

### Prompt da seção Sobre

Use case: identity-preserve. Generate ONE high-resolution vertical 3:4 editorial photograph for the About section of Julia's professional web design portfolio. Reference image is the exact woman to portray: strictly preserve her recognizable face, eye shape and dark brown eyes, eyebrows, nose, lips, facial asymmetry, skin tone, age and long black hair. Do not replace her with a generic beautiful model. Black simple top, same delicate silver necklace and black oval pendant, optional unstructured charcoal open blazer. Sitting comfortably at a simple wooden work desk in a modest tidy creative home studio, upper body gently angled but face nearly frontal like reference, looking at camera with relaxed subtle closed-mouth smile. Laptop lid edge partially visible at bottom foreground without logos, hands resting below lower frame and not shown. Soft warm neutral wall and slight out of focus shelf in background. Diffused natural window lighting, realistic skin pores, fine facial hair and strands, natural texture and asymmetry, no makeup transformation, believable color and subtle fine photographic grain. Eye-level camera, 50mm environmental portrait, moderate realistic depth of field, not heavily blurred. Full head with headroom, face in upper third, framed from head to waist, professional approachable human web designer working space. No artificial skin smoothing, no glamour, no CGI look, no orange grading, no facial or body reshaping, no text, no watermark, no collage. Prioritize identity likeness above all styling. Highest image quality.

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
- O portfólio usa capturas reais locais dos três sites, com carregamento sob demanda e link para abrir cada projeto; não incorpora iframes.
- Links externos sempre apontam para os projetos publicados: Basic Coffee, S2 Seguros Saúde e Raquel Santiago.
