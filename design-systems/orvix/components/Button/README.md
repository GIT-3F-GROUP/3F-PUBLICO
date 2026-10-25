Ações da ORVIX: `Button` (verde primário sólido, contorno secundário, vidro só sobre foto), `IconButton`, `ButtonGroup` e `LinkAction` (link com seta que avança).

```jsx
<Button variant="primary" icon="phone">Fale com um consultor ORVIX</Button>
<Button variant="secondary" iconRight="arrow-right">Conheça a linha ORV7</Button>
<Button variant="glass" icon="download">Baixar ficha técnica</Button>
<IconButton icon="search" label="Buscar produto" variant="bare" />
<ButtonGroup>
  <Button variant="secondary" size="sm" aria-pressed>Calda</Button>
  <Button variant="secondary" size="sm">Gota</Button>
  <Button variant="secondary" size="sm">Alvo</Button>
</ButtonGroup>
<LinkAction href="/linhas">Ver todas as linhas</LinkAction>
```

Notas
- Uma única ação primária verde por bloco. O verde é ação e destaque, nunca decoração.
- `variant="glass"` só sobre foto ou fundo irregular (imagem, textura com variação real). Sobre fundo liso ou degradê, o vidro vira um botão estranho: use `secondary`.
- Três tamanhos: `xs` (24px), `sm` (29px) e `md` (34px). Não existe botão maior que `md`.
- Primário: verde-700 sólido com texto branco (6,2:1). Hover clareia para #0E842C (4,8:1) e press vai a verde-800 com escala .99. O texto é sempre branco e nunca fica abaixo de 4,5:1 (Apple HIG). `verde-solido` usa as mesmas cores.
- Altura visual de 24, 29 ou 34px, sempre dentro de uma área de toque de 44px. Texto mínimo de 11px, inclusive no `xs`.
- Transições curtas e suaves, nunca bounce; com Reduce Motion, sem transição.
