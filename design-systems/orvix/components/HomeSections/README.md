Padrões de seção da home da ORVIX, prontos para montar uma página inteira em tema escuro.

## Seção modelo: `HeroPrecisao`

A abertura `HeroPrecisao` é a referência de composição do sistema. Ao criar qualquer seção sem foto, siga a mesma receita:

- **Fundo:** degradê sutil tom sobre tom, `linear-gradient(165deg, var(--fundo-grafite) 0%, var(--bg-deep) 72%)`.
- **Pontilhado:** malha adensada e parada, `.orvix-dots--dense` (ponto de 1px a cada 3px, 25% de opacidade; no tema claro, um tom mais escuro que o fundo).
- **Forma:** o pontilhado entra na inclinação da perna do X, recortado em `--split-angle` (120,5°) a partir de 46% da largura, com corte seco.
- **Hairline:** linha de 1px exatamente na borda do pontilhado (`--claro-a14` no escuro, `--web-3` no claro).
- **Conteúdo:** no lado liso, eyebrow com régua, H1 em Exo ExtraBold caixa alta, lead curto e dois botões sólidos (primário e secundário). Sem vidro, porque não há foto.
- **Âncora:** cápsula "Sorriso, MT" no canto inferior direito.
- **Celular:** abaixo de 720px o pontilhado entra de baixo para cima, a hairline some; abaixo de 480px os botões ocupam a largura.

A anatomia completa, com o markup, está no README de `HeroPrecisao`.

```jsx
<HeroPrecisao base="../../" />
<MarqueeTecnico />
<ManifestoCentrado />
<TrilhaDoCiclo />
<TresEixos />
<DestaqueORV7 base="../../" />
<GradeDeLinhas />
<FaixaDeNumeros />
<ClubeOrvix />
<TerritorioMT base="../../" />
<VendaDireta base="../../" />
<EditorialBlog />
<FechamentoCTA />
```

A ordem das seções não é fixa: ela é definida em cada página, conforme o objetivo dela.

Notas
- Sem elementos animados: onde não há foto, entra o pontilhado parado na diagonal do X (`.ovx-pontos-fundo`), o `XMark` ou o `TargetMark`. O único movimento é o de estado (hover, foco, press).
- Toda seção funciona de 320px ao desktop, com respiro nas quatro bordas (ver Apple HIG).
- Alterne as três bases de seção: preto (`.ovx-fundo--preto`), grafite (`.ovx-fundo--grafite`) e degradê (`.ovx-fundo--degrade`). O tom sobre tom entre seções tira a página do escuro chapado. Em algumas seções sem imagem, o padrão pontilhado ORVIX pode entrar de forma sutil, nunca como regra.
- `base` é o caminho até a raiz do design system, porque as seções carregam logos e renders de produto.
