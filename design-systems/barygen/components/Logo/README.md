Logo oficial BARYGEN em SVG, idêntica aos arquivos de Assets › Logos. Na dúvida, use a horizontal principal.

```jsx
<Logo />                                              {/* horizontal principal, colorida, 40px */}
<Logo onBackground="dark" />                          {/* monocromática branca */}
<Logo onBackground="amber" />                         {/* monocromática preta */}
<Logo type="horizontal-nome" height={30} />           {/* símbolo e nome, para barras e tamanhos pequenos */}
<Logo type="vertical" height={120} />
<Logo type="nome-atividade" onBackground="dark" />    {/* só texto: sempre de uma cor */}
<Logo type="simbolo" height={32} />                   {/* ícone, avatar */}
```

**Versões por fundo**

| fundo | versão |
| --- | --- |
| branco, suave, claro | colorida |
| claro ou amarelo, quando a peça pede uma cor só | monocromática preta |
| preto, escuro, colorido ou foto | monocromática branca |

**Arranjos e mínimos.** `horizontal` (símbolo, nome e SEMENTES) a partir de 40 px de altura; abaixo disso, `horizontal-nome` (a partir de 24 px). `vertical` a partir de 72 px; abaixo, `vertical-nome` (a partir de 40 px). `nome-atividade` 24 px, `nome` 12 px, `simbolo` 16 px.

**O consumidor fornece:** só o espaço livre ao redor, a área de proteção de 1 H (a altura das letras de BARYGEN) em todos os lados. O componente não aplica margem.

Para páginas sem React, `BARYGEN_LOGO.svg({ type, version, height })` devolve o mesmo SVG como texto e `BARYGEN_LOGO.arquivo(type, version)` diz o nome do arquivo oficial.
