Superfície translúcida com desfoque, para a camada que flutua sobre o conteúdo.

## Quando usar

- Cabeçalho fixo ao rolar a página e barra de filtros fixa.
- Popover e menu curto sobre conteúdo.
- Véu atrás de modal e de imagem ampliada.

## Variações desenhadas

- Cabeçalho em vidro e popover escuro
- Véu atrás de modal

## Regras

- Vidro do tema (`.vidro`): `vidro` com desfoque de 12px e borda `borda`.
- Vidro escuro (`.vidro-escuro`): preto a 85% com desfoque de 16px e saturação de 1.4, texto branco.
- Véu (`.veu`): preto a 60% com desfoque de 4px.
- Só em peças que flutuam; uma camada de vidro por vez. Conteúdo fica em superfície sólida.
- Com "Reduzir transparência" ligado, as classes trocam o vidro pela cor sólida.
- Vale nos dois temas: as cores vêm dos tokens de tema, nunca de valor fixo.
