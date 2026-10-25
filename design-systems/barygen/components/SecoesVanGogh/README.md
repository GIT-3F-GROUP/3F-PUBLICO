Seções Van Gogh: o padrão de milho Van Gogh como fundo de seção alternativa.

**Quando usar.** Alternativa rara, que entra quando alguém pede, com uma exceção: quando o assunto é só a própria BARYGEN (quem somos, história e origem, propósito e valores, manifesto, apresentação institucional, data da empresa), o Van Gogh é o fundo indicado e vale sugeri-lo mesmo sem pedido. Home, híbridos, campanhas de produto, resultados, eventos e notícias: só quando pedirem. Portal, formulários, tabelas e materiais de mais de uma empresa do 3F Group: não usar. Teste: tirando o produto, o evento ou a campanha, o assunto continua sendo a BARYGEN? Então o Van Gogh é bem-vindo.

```html
<section class="bry-sec-vangogh">
  <svg class="bry-vangogh__forma" viewBox="0 0 1440 560" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
    <defs><linearGradient id="vg-grad" x1="0" y1="0" x2=".35" y2="1"><stop offset="0" stop-color="#f6a200"/><stop offset="1" stop-color="#e18800"/></linearGradient></defs>
    <path fill="url(#vg-grad)" d="M1440 0 H905 C 812 34 786 122 830 206 C 878 298 858 384 774 444 C 712 488 690 530 706 560 H1440 Z"/>
    <path class="bry-borda-curva" d="M905 0 C 812 34 786 122 830 206 C 878 298 858 384 774 444 C 712 488 690 530 706 560"/>
  </svg>
  <div class="bry-vangogh__texto">…</div>
</section>
```

O padrão é uma imagem de 230 × 230 px que repete na horizontal e na vertical, sempre no tamanho original. **Nunca leva texto por cima.** O texto entra numa forma grande, em degradê do amarelo principal ao amarelo contraste (ou invertido, com `--contraste`), que entra pelo topo, sai pela base e encosta na borda direita (padrão) ou esquerda. No trecho curvo, a forma leva um fio fino de amarelo detalhe (`.bry-borda-curva`, só a curva, sem as bordas retas). Ela encosta na borda direita (padrão) ou esquerda (`--esquerda`, com o caminho espelhado e `xMinYMid`). Texto em preto; logo em monocromática preta; botão secundário (preto). No celular, o padrão vira uma faixa de 230 px no topo e o texto vai num bloco amarelo abaixo. No máximo uma seção ou uma sequência Van Gogh por página.

**Faixas.** Toda seção Van Gogh abre e fecha com uma faixa fina de amarelo detalhe, de 15 px no celular a 50 px nas telas grandes: `--vg-faixa: clamp(15px, 3.4vw + 2px, 50px)`. A classe `.bry-sec-vangogh` já aplica as duas.

## Sequência de seções Van Gogh

Duas ou mais seções seguidas ficam dentro de `.bry-vangogh-seq`. O padrão passa para o invólucro, então o milho corre contínuo e as junções não aparecem. As faixas ficam só no começo e no fim da sequência, nunca entre as seções.

A forma é uma só, dividida entre as seções:

- **Primeira**: a forma pode nascer dentro da seção (**sem tocar o topo**, desenho "início solto") ou vir do topo (desenho "de ponta a ponta"). Sempre sai pela base.
- **Do meio**: atravessa de cima a baixo ("de ponta a ponta").
- **Última**: vem do topo e pode terminar dentro da seção (**sem tocar a base**, desenho "fim solto") ou sair pela base ("de ponta a ponta").

**Uma das pontas sempre encosta.** Se a primeira começa sem tocar o topo, a última termina tocando a base. Se a primeira vem do topo, a última pode ou não tocar a base. A forma pode encostar nas duas pontas. **Nunca solta no começo e no fim ao mesmo tempo.**

Cada forma usa `preserveAspectRatio="none"` e um degradê horizontal (`gradientUnits="userSpaceOnUse"`, de x 760 a 1440). Nas junções a curva passa em x 760, na vertical, então as partes se encaixam em qualquer altura. Para a forma à esquerda, use `.bry-sec-vangogh--esquerda` em cada seção: dentro da sequência a forma é espelhada pelo CSS, com os mesmos desenhos.

```html
<div class="bry-vangogh-seq">
  <section class="bry-sec-vangogh">
    <svg class="bry-vangogh__forma" viewBox="0 0 1440 560" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id="vgs-1" gradientUnits="userSpaceOnUse" x1="760" y1="0" x2="1440" y2="0"><stop offset="0" stop-color="#f6a200"/><stop offset="1" stop-color="#e18800"/></linearGradient></defs>
      <path fill="url(#vgs-1)" d="M1440 64 C 1280 40 1060 18 930 52 C 830 78 800 150 830 230 C 862 318 760 420 760 560 H1440 Z"/>
      <path class="bry-borda-curva" d="M1440 64 C 1280 40 1060 18 930 52 C 830 78 800 150 830 230 C 862 318 760 420 760 560"/>
    </svg>
    <div class="bry-vangogh__texto">…</div>
  </section>
  <section class="bry-sec-vangogh"><!-- última: mesma estrutura com o desenho "de ponta a ponta" (a primeira é solta) --></section>
</div>
```

| Desenho | Forma | Curva (fio de amarelo detalhe) |
|---|---|---|
| Início solto (primeira, não toca o topo) | `M1440 64 C 1280 40 1060 18 930 52 C 830 78 800 150 830 230 C 862 318 760 420 760 560 H1440 Z` | `M1440 64 C 1280 40 1060 18 930 52 C 830 78 800 150 830 230 C 862 318 760 420 760 560` |
| De ponta a ponta (qualquer posição) | `M1440 0 H760 C 760 90 850 150 838 260 C 826 370 760 430 760 560 H1440 Z` | `M760 0 C 760 90 850 150 838 260 C 826 370 760 430 760 560` |
| Fim solto (última, não toca a base) | `M1440 0 H760 C 760 120 860 200 840 300 C 820 400 790 470 900 506 C 1020 546 1260 520 1440 496 Z` | `M760 0 C 760 120 860 200 840 300 C 820 400 790 470 900 506 C 1020 546 1260 520 1440 496` |
