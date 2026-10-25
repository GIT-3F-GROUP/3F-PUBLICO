Tom sobre tom: o destaque preferido da BARYGEN. Amarelo com amarelo, preto com preto, sem caixas de alto contraste. Inclui o vidro amarelo, opção ocasional.

**Amarelo tom sobre tom.** Amarelo claro, detalhe, principal e contraste juntos; texto e logo em preto.

```html
<section class="bry-sec-tom-amarelo-grad">…</section>
```

**Preto tom sobre tom.** Fundo em preto absoluto (#000) e camadas em `--tom-preto-1` (#0B0B0B), `--tom-preto-2` (#141414) e `--tom-preto-3` (#1F1F1F), com borda `--tom-preto-linha`. Dentro de uma seção escura, `KPI`, `Card`, `Table`, `Accordion` e `ProductCard` viram camadas de preto sozinhos; o `LoginCard` usa `surface="dark"` e o `Toast` usa `bry-toast--escuro`.

```html
<section class="bry-sec-tom-preto">
  <div class="bry-kpi">…</div>
</section>
```

**Vidro amarelo.** `.bry-glass-amarelo` (sobre foto ou fundo escuro, texto claro) e `.bry-glass-amarelo--claro` (sobre amarelo, texto preto). No máximo um por tela; com Reduzir transparência ligado, vira painel sólido.

**Regra.** Nada de caixa preta sobre o claro nem caixa branca sobre o preto. Ficam fora da regra botões, selos e avatares, que são pequenos e precisam de contraste.

**Claro tom sobre tom (caixas claras).** No claro, as caixas são camadas de claros vizinhos com borda `--tom-claro-linha` (`rgba(89,51,0,.10)`): `.bry-caixa-clara` (branco), `--suave`, `--creme` e `--areia`. Na seção suave, caixa branca para elevar e areia para rebaixar; na branca, suave ou creme; na creme, só branca. A caixa é sempre um passo de tom acima ou abaixo do fundo. A hélice de DNA também entra tom sobre tom (Marca › Elementos da marca).

```html
<section class="bry-sec-light-1">
  <div class="bry-caixa-clara">…</div>
  <div class="bry-caixa-clara bry-caixa-clara--areia">…</div>
</section>
```
