# Hero de Precisão — seção modelo

Esta é a seção de referência do sistema: use-a como modelo de composição quando montar qualquer abertura ou seção de destaque sem foto. Ela resume a marca em três decisões: fundo tom sobre tom, pontilhado adensado parado e a diagonal no ângulo da perna do X.

## Anatomia

```jsx
<section className="ovx-hero ovx-hero--pontilhado">
  <div className="ovx-hero__bg" aria-hidden="true">
    <span className="ovx-hero__dots orvix-dots--dense" />
    <span className="ovx-hero__edge" />
  </div>
  <div className="orvix-container ovx-hero__content">
    <Eyebrow ornament="rule">…</Eyebrow>
    <h1 className="ovx-hero__title">…</h1>
    <p className="orvix-lead">…</p>
    <div className="ovx-hero__cta">
      <Button variant="primary" icon="phone">…</Button>
      <Button variant="secondary" iconRight="arrow-right">…</Button>
    </div>
  </div>
  <div className="ovx-hero__meta"><Capsule icon="map-pin">Sorriso, MT</Capsule></div>
</section>
```

## As regras que fazem a seção funcionar

1. **Fundo em degradê sutil, tom sobre tom.** `linear-gradient(165deg, var(--fundo-grafite) 0%, var(--bg-deep) 72%)`. Dois tons vizinhos da mesma rampa; nunca preto chapado, nunca degradê de cores diferentes.
2. **Pontilhado adensado, parado.** Malha regular de pontos de 1px de raio a cada 3px (`.orvix-dots--dense`), em 25% de opacidade: claro sobre o escuro, e um tom mais escuro que o fundo no tema claro. Nada se move e não há pontos soltos.
3. **Entrada na inclinação do X.** O pontilhado só ocupa o lado direito, recortado por uma máscara no ângulo da divisão (`--split-angle`, 120,5°, derivado de `--x-leg-angle`), começando em 46% da largura. O corte é seco, sem esfumar.
4. **Hairline na divisão.** Uma linha de 1px (`--claro-a14` no escuro, `--web-3` no claro) marca a borda exata do pontilhado, como a perna do X.
5. **Conteúdo no lado liso.** Eyebrow com régua, título H1 em Exo ExtraBold caixa alta, lead curto (máx. 44ch) e dois CTAs sólidos: primário e secundário. Nada de vidro: o fundo não é foto.
6. **Âncora territorial.** Uma cápsula "Sorriso, MT" no canto inferior direito, sobre o pontilhado.
7. **Responsivo.** Abaixo de 720px a diagonal vira vertical: o pontilhado entra de baixo para cima (máscara 180°, de 20% a 100%), a hairline some e a cápsula desce para o fluxo; abaixo de 480px os CTAs ocupam a largura toda.

## Como reaproveitar o modelo

- Em outras seções sem imagem, repita a receita: degradê tom sobre tom + `.orvix-dots--dense` mascarado na diagonal de `--split-angle` + hairline. Varie só o lado (esquerda ou direita) e o ponto de corte (entre 40% e 60%).
- Uma seção com pontilhado por dobra de página; nas vizinhas, use fundo liso para o padrão continuar especial.
- Sobre foto, troque o pontilhado pelo scrim (`.ovx-hero__scrim`) e aí sim o vidro é permitido.
- Não aumente a opacidade dos pontos nem o passo da malha: o padrão é adensado e discreto por definição.
