Lista de ações ou de destinos que abre a partir de um botão.

## Quando usar

- Submenu do cabeçalho, menu "Mais" de uma linha de tabela, menu do usuário.

## Variações desenhadas

- Simples
- Com ícones e atalho
- Com grupos
- Idiomas

## Regras

- Fundo opaco `superficie`, borda `borda`, raio `radius-xl`, `sombra-flutuante`.
- Itens de 36px com raio `radius-lg`; hover em `superficie-2`.
- Até oito itens; grupos separados por divisor e título em caixa alta.
- Ação destrutiva por último, em `perigo`.
- Abre fora do `<header>` e fecha com Esc e com clique fora.
- Vale nos dois temas: as cores vêm dos tokens de tema, nunca de valor fixo.
