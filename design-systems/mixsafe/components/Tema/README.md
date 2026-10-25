Claro e escuro: a mesma marca, dois chãos. A escolha se faz na barra da esquerda.
O sistema tem **dois temas completos**, e todo componente existe nos dois. A escolha é feita na barra da esquerda, e tudo nesta página acompanha.

**Escuro é o tema da marca.** `azul-business-04` de fundo, logo branca. É o padrão do produto, do site e das peças. Foi para ele que a identidade foi desenhada, e é nele que ela fica mais forte.

**Claro é o tema do trabalho longo,** e é tão definido quanto o escuro. `web-tom` de fundo, `branco` nas superfícies, logo em `azul-business-04`. Entra em tela de leitura demorada, tabela cheia, relatório aberto por horas, e em ambiente muito iluminado, como a cabine ao meio-dia.

**O que muda de verdade no claro.** A superfície fica branca sobre um fundo levemente cinza, o contrário do escuro, onde a superfície é mais clara que o fundo. A borda ganha peso, porque no claro ela é o que separa um cartão do fundo. A sombra fica mais fraca, porque sombra forte em fundo claro suja. E o verde da ação continua o mesmo: ele é a única cor que não muda entre os temas.

**Como funciona por baixo.** Cada token de cor tem dois valores, um por tema. Nenhum componente escreve cor fixa: todos leem o token. Trocar o tema troca os valores, e o desenho continua o mesmo.

**O que muda e o que não muda.**

| Muda | Não muda |
|---|---|
| fundo, superfície, borda e texto | a geometria da marca |
| a cor da logo, branca ou azul | a proporção e a área de proteção |
| o tom dos status, para manter contraste | o ícone e a palavra do status |
| a força da sombra | o raio, o espaçamento e a tipografia |
| `sucesso`, `atencao`, `erro` e `info` | o verde da ação, que é o mesmo nos dois |

**Contraste medido nos dois.** Todo par de texto e fundo do sistema é conferido em escuro e em claro, e o build falha se algum cair abaixo de 4,5:1. A tabela está no fim deste documento.

**Ao criar componente novo:** leia sempre o token, nunca o hex. Se precisar de um valor que só existe num tema, o token está faltando: crie ele nos dois.

## Aplicações

| Código | Aplicação |
|---|---|
| `TEM-01` | A mesma tela nos dois temas |
| `TEM-02` | Tabela cheia, onde o tema claro costuma ser preferido |
| `TEM-03` | Formulário nos dois temas |
| `TEM-04` | Os mesmos tokens, dois valores |
