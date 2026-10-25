Botão de cantos levemente arredondados: primário, contorno, fantasma e perigo.

## Quando usar

- Primário: a ação principal do bloco. Uma por bloco.
- Contorno: a ação secundária, ao lado da primária.
- Fantasma: ação terciária e ações dentro de barras e menus.
- Perigo: só para ação destrutiva, sempre com confirmação.

## Estrutura

```html
<a class="btn-primary" href="/empresas">Conheça as empresas <svg>…</svg></a>
<button class="btn-outline btn-sm" type="button">Exportar</button>
```

## Variações desenhadas

- Primário
- Primário com ícone
- Primário em hover
- Primário desabilitado
- Primário carregando
- Contorno
- Contorno com ícone
- Contorno em hover
- Contorno desabilitado
- Fantasma
- Fantasma em hover
- Perigo
- Compacto primário
- Compacto contorno
- Compacto fantasma
- Só ícone
- Só ícone compacto
- Largura total

## Regras

- Raio `radius-lg` (8px), nunca pílula. Texto de 14px em peso 500, em caixa de frase.
- Altura de 44px; a versão compacta (32px) só em barras, tabelas e cabeçalho, e cresce para 44px em tela de toque.
- Primário usa `acao` com texto `sobre-acao`: preto no claro, claro no escuro. O verde fica fora dos botões.
- Ícone Lucide de 16px depois do texto (14px no compacto); botão só com ícone leva `aria-label`.
- Rótulo curto, no imperativo de cortesia: "Conheça as empresas", "Enviar mensagem".
- Botões lado a lado ficam a 12px um do outro, com a primária à esquerda.
- Vale nos dois temas: as cores vêm dos tokens de tema, nunca de valor fixo.
