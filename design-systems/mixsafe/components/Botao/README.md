Os botões do sistema. A cápsula é a regra; o alvo é a exceção rara.
**A cápsula é a forma de tudo que se toca**: botão, selo, etiqueta, chave, aba e item ativo de menu. O botão de todo dia da mixsafe é o `primario`, e é ele que leva a ação principal de praticamente toda tela.

**Caixa alta em todos os botões.** Todo botão do sistema é caixa alta, com 13 px, peso 700 e 0,09 em de entreletras (11,5 px em `--p`, 15 px em `--g`). Caixa alta pede corpo menor e mais espaço entre letras, senão pesa e aperta. A caixa alta vem do CSS, então o texto se escreve normal e o leitor de tela ouve a palavra como ela é.

**O rótulo é um verbo no infinitivo**, curto, dizendo o que acontece: "Validar calda", e não "Ok".

**Ícone dentro de botão é exceção.** O botão é a palavra. Um ícone ali rouba largura, some no celular e vira ruído quando se repete numa tela cheia de botões. Ele entra em dois casos, e só:

- **Botão só de ícone**, onde o ícone é o botão inteiro, com `aria-label` obrigatório. É o caso da barra de ferramentas e do cabeçalho.
- **Quando for pedido**, numa peça específica em que o desenho carrega informação que a palavra não dá.

Fora disso, o botão leva só o rótulo.

**O movimento acontece no gesto.** Nada pisca, nada gira em laço. A aproximação dura enquanto o ponteiro está ali, e a linha de leitura passa uma vez. Com `prefers-reduced-motion` a retícula fica parada, o botão não recua e a linha não passa.

| Variante | Quando |
|---|---|
| `primario` | **a ação principal de qualquer tela.** É o botão de todo dia: salvar, criar, enviar, confirmar |
| `alvo escala` | **raro.** Só quando for pedido, ou quando a tela faz mesmo uma mira. Médio e pequeno |
| `alvo moldura` | **raro.** O mesmo caso do anterior, quando o botão fica solto no espaço |
| `contraste` | sobre foto, degradê ou faixa de chamada |
| `mira` | ação secundária de cálculo, ao lado de um `alvo`. Contorno suave no mesmo verde, sem preenchimento |
| `secundario` | ação secundária comum |
| `fantasma` | ação terciária, dentro de cartão e de tabela |
| `perigo` | apagar, cancelar aplicação |
| `link` | ação dentro de texto corrido |

**Caixa alta em todos os botões.** Não é só o alvo: todo botão do sistema é caixa alta, com 13 px, peso 700 e 0,09 em de entreletras (11,5 px em `--p`, 15 px em `--g`). A caixa alta vem do CSS, então o texto se escreve normal e o leitor de tela ouve a palavra como ela é.

**O foco continua visível, e não aparece na vitrine.** Quem navega pelo teclado precisa enxergar onde está, então o anel de foco existe em todo botão, pelo `:focus-visible`. Ele não tem cartão próprio aqui porque é um estado do navegador, e não uma variante a escolher.

**O alvo é raro, e é para ser raro.** Ele não é o botão principal do sistema: esse papel é do `primario`, que é o botão de todo dia. O alvo é peça de exceção, e a maioria das telas da mixsafe não tem nenhum. A retícula só significa alguma coisa enquanto for incomum: se ela aparece em toda tela, deixa de ser mira e vira moldura decorativa, e aí o sistema perde a única peça que tinha para dizer "é aqui".

**Quando o alvo entra, e só nestes casos:**

- **Quando for pedido**, numa tela ou numa peça em que a direção pediu o alvo expressamente.
- **Quando a tela faz mesmo uma mira**: o momento em que o sistema aponta para um resultado e a pessoa confirma a pontaria. Validar uma calda é esse momento. Salvar um cadastro, criar uma receita, enviar um formulário e confirmar um diálogo não são: esses são `primario`.
- **Quando for mesmo conveniente**, numa tela vazia ou num fim de fluxo em que existe uma decisão só e ela merece o peso.

Fora desses três casos, use `primario`. Na dúvida, use `primario`: um alvo a menos não quebra nada, e um alvo a mais gasta o recurso.

**O alvo tem dois tipos, e só dois.** `ms-btn--alvo` sozinho não existe: ele traz o corpo e um dos dois modificadores traz a retícula.

- **`ms-btn--escala`**, a régua graduada. Um traço curto a cada 7 px no topo e na base e, a cada quatro deles, um traço mais comprido. O olho encontra o ritmo sem precisar contar. É o tipo padrão, e o que melhor funciona quando o botão está dentro de um bloco com outras coisas.
- **`ms-btn--moldura`**, o contorno com cantoneiras. Um fio fraco fecha o enquadramento e as quatro cantoneiras entram fortes por cima dele. Use quando o botão fica solto no espaço, numa tela vazia ou no fim de um formulário, e precisa ser cercado.

Os dois seguem a mesma hierarquia de linha: **canto forte, meio fraco**. O que marca o enquadramento usa `alvo-borda`; a linha intermediária usa `alvo-borda-fraca`. A cantoneira arredonda só o canto de encontro, e as duas pontas livres ficam retas: com o raio nos quatro cantos o braço vira gancho.

**O corpo é quadrado de canto levemente arredondado**, 6 px no médio e 5 px no pequeno. Esta é a única exceção à cápsula no sistema, e ela existe porque a retícula é feita de linha reta: cercar uma cápsula com linha reta deixa sobra em todos os cantos.

**Como ele se comporta, nos dois tipos:**

- **Preenchimento translúcido.** O verde entra a 16 % no tema escuro e a 24 % no claro, então o fundo da tela aparece por baixo e o botão lê como um visor sobreposto à interface, em vez de um bloco de cor.
- **Só em médio e pequeno.** O alvo não tem tamanho grande: numa peça grande a retícula fica maior que a palavra e a coisa vira ornamento. Se a tela pede um botão grande, ela está pedindo um `primario`.
- **A retícula fica parada; quem recua é o botão.** Com o ponteiro, a folga cai de 12 px para 9 px, e o botão perde 4 px de altura e 3 px de respiro lateral indo ao encontro dela. **O texto não muda de tamanho.** A retícula nunca encosta: é a folga entre as duas coisas que faz a peça ler como mira, e não como contorno duplo.
- **A caixa no layout não muda.** O que o botão perde em altura e em respiro, ganha de margem. Nada se desloca em volta dele quando recua.
- **Uma leitura no gesto.** A borda acende e uma faixa fina atravessa o botão de um lado ao outro, uma vez só. Em 720 ms acaba e não volta.
- **Contorno contínuo, nunca tracejado**, nem na retícula nem na mira. Traço interrompido vibra ao lado da régua e suja a peça: o que muda entre repouso e ponteiro é a força da cor, não o desenho do traço.
- **Ele reserva 13 px em volta.** A retícula vive fora do botão, então ele carrega essa margem própria e fica um pouco mais afastado dos vizinhos. Isso é coerente: ele é a peça rara da tela.

**Regras.** No máximo um `alvo` por tela, e o normal é nenhum. Duas retículas na mesma tela cancelam a ideia de mira. Não misture os dois tipos na mesma tela, e não use alvo dentro de cartão de lista, de linha de tabela nem de barra de ferramentas: ali ele se repete, e repetição é exatamente o que mata a peça. O rótulo continua um verbo no infinitivo, curto: a caixa alta não é licença para encompridar. O texto do alvo é `alvo-tinta`, que tem 5,0:1 ou mais sobre o preenchimento em qualquer superfície, nos dois temas. Nos demais botões, texto sobre `acao` é sempre `texto-sobre-acao`, nunca branco. Altura de 44 px, 36 px em `--p` e 52 px em `--g`. A folga entre o botão e a retícula é de 12 px em repouso e 9 px com o ponteiro: ela aperta, mas nunca encosta. No celular, a ação principal vira bloco. O foco é sempre visível, e o anel de foco convive com o anel de alvo.

## Aplicações

| Código | Aplicação |
|---|---|
| `BTN-01` | Primário, o botão de todo dia |
| `BTN-02` | Alvo escala, peça rara |
| `BTN-03` | Alvo moldura, peça rara |
| `BTN-04` | Mira, a secundária de cálculo |
| `BTN-05` | Contraste |
| `BTN-06` | Secundário |
| `BTN-07` | Fantasma |
| `BTN-08` | Perigo |
| `BTN-09` | Link |
| `BTN-10` | Pequeno |
| `BTN-11` | O caso que justifica o alvo: a mira da calda |
| `BTN-12` | Os dois pequenos, lado a lado |
| `BTN-13` | A régua de perto |
| `BTN-14` | A cantoneira de perto |
| `BTN-15` | A exceção: botão só de ícone |
| `BTN-16` | Carregando |
| `BTN-17` | Desabilitado |
| `BTN-18` | Bloco no celular |
| `BTN-19` | O que não fazer: alvo repetido na lista |
| `BTN-20` | O que não fazer: ícone decorativo no botão |
