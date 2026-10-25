Caixa, container e grupo de destaque, em leve contraste com o fundo.
Quando um bloco precisa se destacar do que está em volta, o degrau de cor é **pequeno de propósito**. O que separa a caixa do fundo não é o tom: é o fio de contorno, o fio de luz na borda de cima e a sombra curta. Contraste forte, do tipo caixa escura em tela clara, fica reservado para o que precisa interromper, e quase nada precisa.

**Os quatro degraus, do mais discreto ao mais presente:**

1. **Grupo** (`ms-destaque-caixa`): fundo `destaque-fundo`, que é um passo de 3,5 % a 4,5 % sobre a superfície. Serve para agrupar campos de um formulário, uma lista de condições ou um resumo dentro de um cartão.
2. **Cartão** (`ms-cartao`): fundo `superficie` com contorno `borda`. É o degrau padrão de qualquer conteúdo que vira objeto na tela.
3. **Vidro** (`ms-vidro`): fundo `vidro`, com desfoque por trás e fio de luz. Para o que flutua sobre a tela e precisa deixar ver o que está embaixo: aviso, dica e menu.
4. **Ação** (`ms-destaque-caixa--acao`): o mesmo degrau do grupo, com o contorno em verde fraco. Só onde há decisão a tomar.

**Regras.** O canto é **levemente arredondado**: `raio-3`, de 8 px, é o teto de qualquer superfície, e campo e dica usam `raio-2`, de 6 px. A cápsula continua sendo só da marca e dos controles que se tocam. Nunca empilhe três degraus seguidos: cartão dentro de cartão dentro de grupo some, porque cada degrau fica pequeno demais para ser lido.

## Aplicações

| Código | Aplicação |
|---|---|
| `CXA-01` | Grupo dentro do cartão |
| `CXA-02` | Grupo com contorno de ação |
| `CXA-03` | Vidro sobre a tela |
| `CXA-04` | O que não fazer: inverter o tema |
