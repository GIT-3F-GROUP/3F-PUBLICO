Tabelas de aplicações e produtos.
Cabeçalho em Exo caixa alta, números alinhados à direita com algarismos tabulares, status como selo.

**Em tela estreita a tabela vira cartões.** Abaixo de 560 px de largura da caixa, o cabeçalho some e cada linha vira um cartão compacto de duas colunas, em que cada célula mostra o rótulo da coluna em cima e o valor embaixo. Nada rola para o lado: no celular, tabela que rola esconde justamente a coluna que a pessoa procura. Para isso cada célula leva `data-rotulo` com o nome da coluna; a célula que precisa da largura toda, como a receita, leva `data-largo`, e a célula de ação leva `data-acao` e fica alinhada à direita no rodapé do cartão. A matriz de compatibilidade é a única exceção, porque é um cruzamento de duas dimensões e não tem como virar lista: ela rola com a primeira coluna fixa.

## Aplicações

| Código | Aplicação |
|---|---|
| `TAB-01` | Padrão |
| `TAB-02` | Zebrada |
| `TAB-03` | Com ações e linha selecionada |
| `TAB-04` | Densa |
