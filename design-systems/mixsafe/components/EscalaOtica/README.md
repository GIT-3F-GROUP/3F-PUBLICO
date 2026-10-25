Como o traço muda de espessura conforme o tamanho, para a marca não sumir.
Uma marca de traço fino tem um problema conhecido: o traço é uma fração do desenho, então ele encolhe junto. Aos 3 % da caixa, um símbolo de 16 px teria traço de meio pixel, que a tela não sabe desenhar e transforma em cinza.

A mixsafe resolve isso como uma fonte resolve: com **tamanhos ópticos**. O desenho é o mesmo, mas o traço tem um piso.

**Duas fórmulas, onde S é o lado da caixa do símbolo em pixels:**

    traço  = máximo entre 1,5 px e 0,03 × S
    núcleo = máximo entre 1,6 px e 0,055 × S

**Três faixas:**

| Faixa | Tamanho | O que acontece |
|---|---|---|
| Pleno | 50 px ou mais | O desenho canônico. Nada é compensado, porque nada precisa. |
| Compacto | de 28 a 49 px | O traço trava em 1,5 px. O ® sai abaixo de 44 px. |
| Só a palavra | abaixo de 28 px | O símbolo sai de cena. Fica **mixsafe** em Exo Medium Italic. |

**28 px é o piso da marca.** Abaixo disso as cápsulas se fecham e o desenho vira um borrão, por mais que o traço engrosse. E mesmo 28 px é um mínimo de emergência: dê espaço para a logo inteira sempre que puder.

**Quem aplica não precisa saber disso.** `MixSafe.logo({ altura: 20 })` já devolve a palavra, e `MixSafe.simbolo({ tamanho: 32 })` já vem com o traço travado. A regra mora no código, e não na memória de quem está com pressa.

**Em impresso** a conta é a mesma, trocando pixel por milímetro: o traço tem 3 % da caixa, então o processo que segura 0,25 mm de linha pede símbolo de 8,5 mm para cima.

## Aplicações

| Código | Aplicação |
|---|---|
| `OTI-01` | Sem compensação: o traço esmaece |
| `OTI-02` | Com compensação: o que o sistema entrega |
| `OTI-03` | Tabela de espessura por tamanho |
| `OTI-04` | Onde a marca para: abaixo de 28 px só a palavra |
