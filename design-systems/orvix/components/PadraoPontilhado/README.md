# Padrão pontilhado ORVIX

Malha de pontos em colmeia, adensada e parada na tela: 5 px entre centros no tom sobre tom (pontos de 0,6 a 1,5 px) e 11 px sobre imagem, como nas referências FP. Traz um pouco de rusticidade e quebra o design totalmente limpo, mas de forma sutil. Funciona de dois jeitos: **tom sobre tom**, sem imagem, sobre as bases de seção; e **sobre imagem**, em HTML e vídeo (referências FP-01 a FP-09 em `PadraoPontilhadoImagem`).

```jsx
<PadraoPontilhado className="ovx-fundo--grafite">…conteúdo…</PadraoPontilhado>          {/* tom sobre tom, em onda */}
<PadraoPontilhado desenho="faixas" className="ovx-fundo--preto">…</PadraoPontilhado>     {/* faixas na inclinação do X */}
<PadraoPontilhado modo="luz" imagem={foto} alt="Pulverização na soja" />                 {/* FP-01; com desenho="faixas", FP-02 */}
<PadraoPontilhado modo="perfurada" imagem={foto} />                                      {/* FP-05, tela perfurada escura */}
<PadraoPontilhado modo="produto" imagem={foto} cor="#95C11F" />                          {/* FP-06; com desenho="faixas", FP-07 */}
```

**Tom sobre tom.** O ponto fica um tom acima ou abaixo da base, conforme o tema (`--pontilhado-ponto`):
- **Tema escuro:** o ponto é um tom mais claro que a base (claro a 8%). Ponto mais escuro que a base é proibido.
- **Tema claro:** o ponto é um tom mais escuro que a base (preto ORVIX a 9%). Ponto branco sobre base clara some e não deve ser usado.

O pontilhado é textura da própria base, não uma caixa à frente dela; por isso, no claro, ele pode ser um tom mais escuro. Caixas, cards e campos à frente continuam sempre um pouco mais claros que a base.

**Onde usar.** Em algumas seções sem imagem, nunca como regra da página; em peças de publicidade (story, feed, banner); em abertura e fechamento de vídeo. Não use atrás de texto longo, tabela ou formulário, nem em duas seções seguidas.

**Bases.** `.ovx-fundo--preto` (preto ORVIX), `.ovx-fundo--grafite` (grafite-800) e `.ovx-fundo--degrade` (grafite para preto). No tema claro, web-1, branco-50 e o degradê entre eles.

Props: `modo` (`"tom"` padrão, `"luz"`, `"perfurada"`, `"produto"`), `desenho` (`"onda"` padrão; `"faixas"`, três faixas de 205 px na inclinação do X, com o raio crescendo de uma para a outra), `imagem`, `alt`, `cor` (modo produto; padrão `--verde-500`), `opacidade`, `passo` (padrão 5 sem imagem e 11 sobre imagem). Desenha em canvas, redesenha no resize e na troca de tema. Sobre imagem, escurece por curva (0,8 · claridade^1,55; na tela perfurada, 28% linear) sem trocar a cor da filmagem.
