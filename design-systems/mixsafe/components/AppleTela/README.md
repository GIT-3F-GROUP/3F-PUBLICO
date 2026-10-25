Toque de 44 pt, áreas seguras e texto que acompanha o sistema.
**Área de toque de 44 pt.** É a regra que mais reprova. Todo controle precisa de 44 por 44 pontos que respondem ao dedo, mesmo que o desenho seja menor. O botão pequeno da mixsafe tem 36 px de altura: o desenho continua com 36, e a área cresce por dentro.

    <button class="ms-btn ms-btn--secundario ms-btn--p ms-toque">Editar</button>

A classe `ms-toque` põe um elemento invisível de 44 por 44 centrado no controle. Use nos botões pequenos, nos ícones da barra, na paginação e em qualquer coisa clicável menor que 44. Em caixa de seleção e chave, quem cresce é o rótulo em volta, que já vem com `min-height` de 44.

**Espaço entre alvos.** Dois controles vizinhos precisam de pelo menos 8 px entre as áreas, senão o dedo acerta o errado. Numa linha de ícones, use `gap` de 8 px ou mais.

**Áreas seguras.** A barra de navegação inferior soma `env(safe-area-inset-bottom)` ao respiro, senão o último item fica atrás do indicador de início. O cabeçalho móvel soma `env(safe-area-inset-top)`. O botão flutuante usa a classe `ms-fab-ancora`, que já carrega a conta.

**Texto que acompanha o sistema.** No iOS a pessoa escolhe o tamanho do texto, e o app precisa obedecer. Em tela nativa isso vem do Dynamic Type; em tela web dentro do app, a raiz fica em 100 % e os tamanhos em `rem`. A escala da mixsafe mapeia assim:

| mixsafe | iOS |
|---|---|
| `titulo-1` 38 | Large Title |
| `titulo-2` 28 | Title 1 |
| `titulo-3` 22 | Title 2 |
| `titulo-4` 18 | Headline |
| `corpo` 16 | Body |
| `corpo-p` 14 | Subheadline |
| `legenda` 12 | Caption |

**O que quebra quando o texto cresce:** rótulo em duas colunas, botão com largura fixa e linha de tabela com altura fixa. Deixe a altura crescer, e deixe a linha quebrar.

**Orientação e tamanho.** A tela precisa funcionar do iPhone pequeno ao iPad, e no iPad em tela dividida. Toda grade do sistema já reflui sozinha, e nenhuma tem largura mínima maior que a tela.

## Aplicações

| Código | Aplicação |
|---|---|
| `IOT-01` | A área cresce, o desenho não |
| `IOT-02` | Espaço entre alvos vizinhos |
| `IOT-03` | Área segura embaixo da navegação |
| `IOT-04` | O texto cresce e a linha quebra |
