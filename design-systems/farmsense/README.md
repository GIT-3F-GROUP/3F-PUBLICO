# FarmSense — Design System

Sistema de marca e interface da **FarmSense Agro**, consultoria agronômica e agricultura de precisão
sediada em Sorriso (MT), atendendo Mato Grosso, Mato Grosso do Sul e Pará. A empresa entrega
diagnóstico de solo georreferenciado, sensoriamento espectral multitemporal, recomendação por taxa
variável e acompanhamento agronômico presencial ao longo da safra.

O sistema é deliberadamente restrito: **oito cores, duas famílias tipográficas, uma marca em duas
formas**. Toda a variação vem do peso, da escala e da opacidade — nunca da invenção de cor.

---

## Fontes deste projeto

O sistema foi montado a partir de dois materiais fornecidos pelo cliente: o manual de marca completo,
**fonte de verdade** de cores, tipografia, logo, superfícies, padrões e tom de voz, e uma proposta
comercial editorial, base do kit `ui_kits/proposta/`. Os arquivos originais não fazem parte deste
pacote; a proposta foi recriada como modelo, com cliente, valores e assinaturas fictícios.

Não havia repositório Git, arquivo Figma nem deck de slides anexo. Logos e fontes foram extraídos
programaticamente dos documentos originais e gravados em `assets/`.

---

## Índice do repositório

| Caminho | O que é |
| --- | --- |
| `tokens.json` | **Fonte única** de cores, tipografia, espaço, raios, sombras, opacidades, breakpoints, traços e vidro. |
| `tokens.css` | Gerado a partir de `tokens.json`: variáveis CSS, `@font-face` e as classes de texto (`.display`, `.h2`, `.body`, `.label`…). |
| `components/bundle.css` | Tudo o que os tokens não declaram: escala fluida, movimento, superfícies, padrões, base editorial, componentes e os 118 efeitos. |
| `components/bundle.js` | Os 40 componentes React em `window.FarmSenseDesignSystem_c4c636`. |
| `components/<Componente>/` | `README.md` (uso), `preview.html` (prévia ao vivo) e `<Componente>.d.ts` de cada componente; fontes em `components/src/`. |
| `fonts/` | Seis TTFs da Be Vietnam Pro. |
| `assets/Logos/` · `assets/Patterns/` | Seis arquivos de logo e cinco SVGs de padrão. |
| `components/Marca*` · `Cores*` · `Tipo*` · `Espaco*` · `Superficie*` · `Padrao*` · `Movimento*` | 47 fichas de fundamento: marca, cores, tipografia, espaço, superfícies, padrões e movimento. |
| `components/Catalogo*` | 16 fichas com **412 exemplos de elemento** prontos para copiar. |
| `components/KitManualDeMarca` · `ui_kits/manual/` | Recriação do manual de marca. |
| `components/KitPropostaEditorial` · `ui_kits/proposta/` | Proposta comercial paginada. |
| `components/KitPainelDeCampo` · `ui_kits/painel/` | Painel de campo (modo noturno da operação). |
| `templates/relatorio-tecnico/` | Template de relatório agronômico (capa, resumo executivo, ficha de talhão). |
| `templates/apresentacao/` | Template de deck institucional 16:9, seis lâminas. |
| `archived/` | Originais preservados: as folhas `tokens/*.css` e o `styles.css` antigos, os seis cards de grupo, as notas da migração e o `SKILL.md`. |

### Componentes

**core** — `Button`, `IconButton`, `Chip`, `NeonDot`, `Kicker`, `SectionHeader`, `Tile`, `GlassCard`, `Logo`, `Divider`, `Surface`, `Icon`
**forms** — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `SearchField`
**data** — `KpiTile`, `StatRow`, `DataTable`, `BarMeter`, `Sparkline`, `ProgressRing`
**feedback** — `Alert`, `StatusPill`, `Tooltip`, `EmptyState`, `Skeleton`, `RuleCard`
**navigation** — `Tabs`, `DotNav`, `Breadcrumb`, `Pagination`, `TopBar`
**brand** — `LogoCard`, `Swatch`, `PatternLayer`, `QuoteBlock`

#### Adições intencionais
O documento-fonte é um manual de marca, não uma biblioteca de código: ele define **Button, Chip,
Input (claro e escuro), tabela, barra, sparkline, KPI, card de vidro, tile, swatch, logo-card, regra
faça/não-faça, ponto de sinal, kicker e fio**. Tudo isso está reproduzido com os valores originais.
Foram acrescentados, porque o pedido pede um sistema completo e porque as telas do manual já os
insinuam: `IconButton`, `Icon`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `SearchField`,
`ProgressRing`, `StatRow`, `Alert`, `StatusPill`, `Tooltip`, `EmptyState`, `Skeleton`, `Tabs`,
`DotNav`, `Breadcrumb`, `Pagination`, `TopBar`, `PatternLayer`, `QuoteBlock`, `Surface`,
`SectionHeader`, `Divider`. Todos usam apenas os tokens e o vocabulário visual do manual.

---

## FUNDAMENTOS DE CONTEÚDO

**Idioma.** Português brasileiro, sempre. Sem anglicismo de tela: escreva “diagnóstico” e
“acompanhamento”, não “dashboard” e “monitoring”.

**Quatro pilares de voz** — declarados no §08.6 do manual:

1. **Positivo.** A safra é um ciclo de possíveis acertos. “Janela ideal para correção”, não “talhão em risco”.
2. **Profissional.** Tratamento formal, sem gíria e sem informalidade forçada. O vocabulário é o do campo: CREA, ART, laudo, prescrição, talhão, entressafra, estádio fenológico.
3. **Agronômico.** Sempre com número, unidade e contexto: “82,4 sc/ha, 18 % acima da média regional” — nunca “ótima produtividade”.
4. **Sério e verdadeiro.** Toda afirmação passa por verificação de campo. Quando o dado é estimado, dizemos. Quando depende de fatores externos, dizemos.

**Diga**
> “Fertilidade do talhão Aurora corrigida em 22 unidades de K antes do plantio.”
> “Produtividade 18 % acima da média regional na safra 24/25, verificada em campo.”
> “Recomendação entregue no formato do controlador da máquina do produtor.”

**Não diga**
> ~~“Safra explosiva, resultado impressionante.”~~
> ~~“Revolucionamos a agricultura do MT.”~~
> ~~“Dashboard inteligente com IA de última geração.”~~

**Pessoa.** A marca fala em primeira pessoa do plural (“trabalhamos lado a lado”, “o objetivo é
entregar”) e trata o cliente por “a fazenda”, “o produtor”, “a Fazenda Exemplo”. Nunca “você” em material
institucional; “você” aparece só em microcópia de interface.

**Caixa.** Títulos em caixa de frase, nunca em caixa alta. Caixa alta é exclusiva de `label`,
`kicker` e `chip` — sempre 11–12 px com tracking de .14em a .18em.

**Números.** Vírgula decimal e ponto de milhar no padrão brasileiro (82,4 · 3.450 · R$ 12.345,67).
Espaço fino antes de unidade e de `%`. Números sempre tabulares (`font-variant-numeric: tabular-nums`).

**Numeração de seção.** Georgia itálico, com `§`: “§ 04.2”. Nunca em Be Vietnam Pro.

**Pontuação e ênfase.** O travessão (—) estrutura o pensamento; parênteses são raros. A ênfase forte
é `<strong>` (peso 500/800); a ênfase de inflexão é uma palavra em Georgia itálico dentro do título:
“Produtividade *incomum*.” Aspas curvas duplas (“ ”) em citação.

**Emoji.** Nunca. Nenhum, em nenhuma peça. Símbolos permitidos: `§`, `·`, `—`, `▲`, `▼`, `×`, `✓`, `✕`.

**Comprimento.** Título até 3 linhas; parágrafo de abertura até 4 linhas; corpo em medida de 60–66
caracteres. Legenda técnica em uma linha, sem ponto final.

---

## FUNDAMENTOS VISUAIS

### Cor
Oito tokens, nenhum a mais. **Nenhuma cor fora desta lista pode aparecer em qualquer peça FarmSense.**

| Token | Hex | Papel |
| --- | --- | --- |
| `--bege-perola` | `#F7F3ED` | Superfície padrão |
| `--bege-rastro` | `#F3EAD9` | Superfície 2 |
| `--bege-estrada` | `#E7D7BC` | Acento |
| `--bege-escuro` | `#D8BE98` | Acento forte |
| `--verde-sombra` | `#004141` | Tinta primária + superfície escura |
| `--verde-anil` | `#00655C` | Tinta secundária |
| `--verde-neon` | `#0ADC14` | Sinal (detalhe) |
| `--ciano-neon` | `#33FFC2` | Sinal (detalhe, ao vivo) |

Sobre bege, a tinta é **sempre** Verde Sombra. Sobre Verde Sombra, a tinta é **sempre** branco. A
hierarquia vem da opacidade — 100 / 85 / 70 / 55 / 40 / 22 %. Os neons nunca são fundo de bloco,
nunca são cor de texto corrido e **nunca são impressos** (não existem em CMYK fiel).

### Tipografia
**Be Vietnam Pro** — 800 nos títulos, 500 em subtítulo e UI, 400 no corpo. Normal e itálico.
Os seis arquivos `.ttf` oficiais estão em `fonts/` e a família também está disponível
gratuitamente no **Google Fonts** (`fonts.google.com/specimen/Be+Vietnam+Pro`).
**Georgia** itálico é o sussurro: numeração de seção, citação curta, uma palavra de inflexão dentro
do título, nota marginal de versão. Nunca um parágrafo inteiro.

Tracking negativo nos títulos (−.022em no Display, −.015em no H2), zero no corpo, muito positivo nos
rótulos (+.14em) e nos kickers (+.18em).

### Espaço e forma
Escala de 4 px com saltos editoriais: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
Container de 1280 px (980 px em documento). Grid de 12 colunas a partir de MD, 6 em SM, 1 em XS.
Raios: 6 · 10 · 16 · 22 · 32 · pílula. Botões e chips são sempre pílula; cards são 16 ou 22 px.

### Fundos
Nunca fotografia genérica de banco de imagem. O fundo é uma **superfície tonal com padrão ambiente**:
oito superfícies prontas em `components/bundle.css` — quatro claras (`perola`, `rastro`, `estrada`,
`papel`) e quatro escuras (`grade`, `relevo`, `alvo`, `solo`). Os padrões vêm de `components/bundle.css`:
curvas de nível (SVG oficial da marca), grade de mapeamento aéreo, malha de amostragem em pontos,
alvo concêntrico de precisão, varredura de sensor, estratos de perfil de solo, listras de talhão.

Regra de ouro do padrão: **ancorado num canto (de preferência o superior direito) e cortado pela
borda da superfície** — nunca inteiro, nunca centralizado. Ele é assinatura ambiente, não protagonista.

Alternância de página: clara → escura → clara. No máximo duas superfícies escuras por peça e nunca
duas iguais em sequência.

### Vidro e transparência
Cards sobrepostos usam `backdrop-filter: blur(16px) saturate(140%)`. Três receitas:
`glass-tone` (bege sobre bege), `glass-light` (branco 65→35 % sobre bege), `glass-dark`
(branco 7→2 % sobre Verde Sombra). O vidro escuro pode receber borda interna neon a 22 % — **só
quando o card mostra dado em tempo real**. Sem dado ao vivo, sem neon.

### Sombra
Sombras são verdes e frias, nunca cinzas: `rgba(0,65,65,α)`. Cinco níveis (`--sh-1` a `--sh-5`),
mais um brilho neon (`--sh-neon`) reservado ao botão de ação ao vivo. Superfícies claras ganham
também um brilho interno branco (`--sh-inset-light`) para simular a lâmina de vidro.

### Bordas e fios
Hairline de 1 px a 12 % no claro, 14 % no escuro. Divisores usam `currentColor` a 15 %. Cards tonais
têm borda a 8 %. O tracejado marca o que ainda não existe (estado vazio, espaço de proteção da logo).

### Gradientes de proteção
Texto sobre padrão recebe scrim direcional (`fs-scrim-b`, `fs-scrim-t`, `fs-scrim-l`) ou vinheta
(`fs-vignette`) em Verde Sombra. Nunca cápsula sólida atrás do texto: a lâmina é sempre gradiente.

### Movimento
118 efeitos nomeados em `components/bundle.css`. Filosofia: **nada quica**. Entrada rápida, chegada
longa. Seis durações (80 · 150 · 240 · 420 · 700 · 900 ms) e seis curvas — `--e-standard`
(.2,.7,.2,1) para tudo, `--e-entrance` (.16,1,.3,1) para blocos que chegam, `--e-contour` para
revelação por corte, `--e-scan` para varredura. Nada acima de 900 ms; `prefers-reduced-motion`
desliga tudo.

- **Hover** — elevação de 1 px em botão, 3 px em card. Nunca escala em botão; escala só em ícone e imagem. Ghost escurece pela borda, não pelo fundo.
- **Press** — `scale(.985)` e volta à linha de base. Sem afundamento profundo.
- **Foco** — anel duplo: 2 px da cor da superfície + 2 px de Verde Sombra (ou Ciano Neon no escuro).
- **Ambiente** — pulso de 2,4 s no ponto de sinal, deriva de 22 s nas curvas de nível, varredura de 3,2 s em card de sensor. Loops lentos o bastante para não roubar atenção.

### Iconografia
Traço de **1,5 px**, cantos retos, `viewBox` de 24, sem preenchimento. Ícones **nunca recebem cor** —
recebem opacidade (100 / 70 / 55 / 40 %). O documento-fonte desenhava os ícones inline nesse mesmo
estilo, sem fonte de ícone nem sprite; adotamos **Lucide** por CDN
(`https://unpkg.com/lucide@0.460.0`) como o equivalente mais próximo — mesma espessura, mesmo
tamanho de grade, mesmo desenho de linha. **Esta é uma substituição declarada**: se a FarmSense tiver
um conjunto próprio, ele substitui o Lucide sem outras mudanças.
Não há fonte de ícone, não há PNG de ícone, não há emoji. Símbolos unicode usados como marca
tipográfica: `§` (seção), `·` (separador), `▲ ▼` (delta), `✓ ✕` (regra faça/não-faça).
As imagens da marca são apenas os seis arquivos de logo em `assets/Logos/` e os cinco SVGs de padrão em
`assets/Patterns/` — não há ilustração, não há fotografia no material fornecido.

### Logo
Duas formas — **horizontal** (padrão) e **compacta** (empilhada, só quando falta largura) — cada uma
em três variantes: colorida, monocromática branca, monocromática escura.
Espaço de proteção = altura do “F”. Mínimos: horizontal 96 px / 30 mm, compacta 48 px / 10 mm.
Sempre dimensionada pela largura, com `height: auto`. Sobre Verde Sombra ou Anil, use a
monocromática branca — o degradê da folha some no escuro.

---

## Como consumir

```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components/bundle.css">
<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js"></script>
<script src="components/bundle.js"></script>
<script>
  const { Button, GlassCard, KpiTile } = window.FarmSenseDesignSystem_c4c636;
</script>
```

As classes utilitárias (`.display`, `.h2`, `.body`, `.kicker`, `.tile`, `.glass-dark`, `.chip`,
`.fs-light-perola`, `.fs-hv-lift`, …) funcionam em HTML puro, sem React.

`Logo`, `LogoCard` e `TopBar` recebem `base` — o caminho da página até a raiz do sistema — para achar
os arquivos em `assets/Logos/` (nas prévias, `base="../.."`).

---

## TOKENS — COMO APLICAR

Os nomes abaixo são os de `tokens.json`; em CSS viram `var(--nome)`.

- **Superfície clara:** fundo `bege-perola` (`surface-base`); seção alternada `bege-rastro`; acento
  `bege-estrada`; papel impresso `branco`. Título em `text-title`, corpo em `text-body`, metadado em
  `text-meta`, borda em `border-hairline`.
- **Superfície escura:** fundo `verde-sombra` (`surface-dark`); segunda escura `verde-anil`. Título
  `text-title-dark`, corpo `text-body-dark`, metadado `text-meta-dark`, borda `border-hairline-dark`.
- **Sinal:** `signal-live` (Ciano Neon) só quando o dado é ao vivo; `signal-on` (Verde Neon) para
  estação ligada. Halo `signal-glow`; botão de ação ao vivo com `sh-neon`.
- **Opacidade de tinta:** `ink-100` · `ink-085` · `ink-070` · `ink-055` · `ink-040` · `ink-022` — ou as
  classes `.t-100` a `.t-22`. Nunca uma cor nova para criar hierarquia.
- **Texto:** `display` → `h1` → `h2` → `h3` → `h4` → `body-lg` → `body` → `body-sm`; rótulos `label` e
  `kicker`; numeração `eyebrow-num` (Georgia itálico). Display, H1 e H2 são fluidos — o `clamp()` está
  em `components/bundle.css` (`--fs-display`, `--fs-h1`, `--fs-h2`).
- **Espaço:** `s-1` (4) a `s-10` (128); padding de card `s-5`, de vidro `s-6`, de seção `s-8`;
  container `wrap-max` (1280) ou `wrap-tight` (980); calha `gutter`.
- **Forma:** `r-pill` em botão e chip; `r-md` ou `r-lg` em card; `r-sm` em regra e tile pequeno.
- **Elevação:** `sh-1` a `sh-5`, sempre verde-fria; `sh-inset-light` na lâmina de vidro claro.
- **Movimento:** durações `--d-instant` (80) · `--d-fast` (150) · `--d-base` (240) · `--d-slow` (420) ·
  `--d-slower` (700) · `--d-ambient` (900) e curvas `--e-standard`, `--e-entrance`, `--e-exit`,
  `--e-contour`, `--e-scan`, em `components/bundle.css` (movimento não é família de token).

---

## ACESSIBILIDADE E CONTRASTE

Medido em WCAG 2 sobre os valores exatos da marca — nenhum foi retingido.

| Tinta | Pérola | Rastro | Estrada | Branco | Sombra | Anil |
| --- | --- | --- | --- | --- | --- | --- |
| Verde Sombra 100 % (`text-title`) | 10,4 | 9,6 | 8,1 | 11,5 | — | — |
| Verde Sombra 70 % (`text-body`) | 4,6 | **4,4** | **4,0** | 4,8 | — | — |
| Verde Sombra 55 % (`text-meta`) | **3,1** | **3,0** | **2,9** | **3,2** | — | — |
| Branco 100 % (`text-title-dark`) | — | — | — | — | 11,5 | 7,0 |
| Branco 70 % (`text-body-dark`) | — | — | — | — | 6,4 | **4,3** |
| Branco 55 % (`text-meta-dark`) | — | — | — | — | 4,6 | **3,3** |
| Ciano Neon (sinal) | 1,2 | 1,1 | 1,1 | 1,3 | 8,9 | 5,4 |

Em negrito, os pares abaixo de 4,5:1. Regras que decorrem daí:

- Corpo de texto pequeno em `text-body` só sobre Pérola ou branco; sobre Rastro e Estrada use
  `text-title`. Sobre Verde Anil, use `text-title-dark`.
- `text-meta` e o kicker a 55 % servem a texto ≥ 24 px, bold ≥ 19 px ou informação não essencial —
  nunca a um dado que o produtor precise ler.
- Neon nunca é texto sobre bege. Sobre Verde Sombra, o Ciano Neon passa (8,9:1).
- O botão `neon` leva tinta `verde-sombra` sobre Ciano (8,9:1).
- **Foco:** anel duplo — 2 px da cor da superfície + 2 px de `verde-sombra` no claro (10,4:1 sobre
  Pérola) ou `ciano-neon` no escuro (8,9:1 sobre Verde Sombra). Classes `.fs-fx-ring` e
  `.fs-fx-ring-neon`.
- **Estado sem vermelho:** a marca não usa vermelho nem amarelo. Severidade vem do peso, da palavra e
  do ícone (`Alert`, `StatusPill`), nunca só da cor.

---

## FICHAS DO SISTEMA

Além das prévias dos 40 componentes, o sistema traz as fichas do manual como páginas:

| Grupo | Fichas |
| --- | --- |
| Brand | Logo principal, logo compacta, espaço de proteção, tamanhos mínimos, proibições |
| Cores | Escala Bege, Escala Verde, neons, tinta no claro, tinta no escuro, pareamento |
| Tipografia | Display 800, escala, pesos e itálicos, Georgia, kicker, arquivos de fonte |
| Espaço | Escala, raios, elevação, fios, breakpoints |
| Superfícies | As oito superfícies, de `01 · Pérola` a `08 · Solo` |
| Padrões | Curvas de nível, grade, alvo e varredura, solo e talhão, gradientes de proteção |
| Movimento | Durações e curvas, entrada, hover, press e foco, texto, ambiente, dados |
| Catálogo | 16 fichas, 412 elementos: botões a impresso |
| Kits | Manual de marca, Painel de campo, Proposta editorial |

Os dois templates em `templates/` (relatório técnico e apresentação 16:9) carregam o sistema por
`ds-base.js` — ajuste a linha `base` ao copiar para outro projeto.


---

## Consuming this system (generated — do not edit)

Every path named below is under `project/` in this design system: read `project/api/tokens.md`, not `api/tokens.md`.

`components/bundle.js` defines `window.FarmSenseDesignSystem_c4c636` (40 components); `components/bundle.css` is its stylesheet; `tokens.css` is every token as a CSS variable plus `@font-face` for the fonts. `components/bundle.css` reads its variables from `tokens.css`. The bundle needs react 18.3.1 (not packed in this system: bring your own copy) (`window.React`), react-dom 18.3.1 (not packed in this system: bring your own copy) (`window.ReactDOM`), loaded before it. Build any UI by mounting these components; never hand-build a control or draw an icon the system provides.

- **Standalone page:** inline `tokens.css` and `components/bundle.css` in a `<style>`, then the library files and `components/bundle.js` as classic scripts (a file containing `</style`, `</script` or `<!--` breaks an inline element: write the sequence `<\/style`, `<\/script` or `\x3C!--` in your copy, or load that file by URL).
- **Design canvas:** bring `components/bundle.css`, `components/bundle.js` and `components/index.d.ts` (for the editor’s props panel) onto the canvas in full, as the canvas type’s design-system components reference says (a server-side copy first where it offers one); load the stylesheet before the script; skip the library files (the artboard supplies React); mount with `<x-import component-from-global-scope="FarmSenseDesignSystem_c4c636.<Comp>" …>`.
- **Slides deck, or any surface that cannot run the bundle:** tokens and fonts — the values are on `api/tokens.md`; the deck takes `tokens.json` by file path for its colour pickers, and fonts as “Fonts” below says.

Fonts: `tokens.css` loads each font from its file, by path.

- **Design canvas:** copy `tokens.css`, `fonts/BeVietnamPro-Regular.ttf`, `fonts/BeVietnamPro-Italic.ttf`, `fonts/BeVietnamPro-Medium.ttf`, `fonts/BeVietnamPro-MediumItalic.ttf`, `fonts/BeVietnamPro-ExtraBold.ttf` and `fonts/BeVietnamPro-ExtraBoldItalic.ttf` to the same paths under the canvas’s `project/ds/<folder>/` (`<folder>` is the folder you install this system under; `fonts/BeVietnamPro-Regular.ttf` lands on `project/ds/<folder>/fonts/BeVietnamPro-Regular.ttf`), in the same call that installs this system. Link that copy of `tokens.css` in the artboard’s `<head>` as `ds/<folder>/tokens.css`, or as Design’s instructions say for an artboard in a folder. If the install’s reply leaves a font out, bring that font in as for any other page.
- **Slides deck:** for each family you use in the deck (`faces` holds at most the number of typefaces Slides’ `deck-files.md` gives), install its file with the system and name the path it lands on as that family’s `src` in `project/deck.json` `faces`, under the key in the Slides column. A deck takes a font as a file only under the rule in Slides’ `fonts.md` (no space or leading underscore in its path, for two): any other font, or one kept by id, is uploaded as `fonts.md` says.
- **Any other page:** one file per family is enough (below: the upright face nearest regular weight; bold and italic synthesize). Fetch it as the fetch column says (Artifact tool `read`, that id or path as `path`), upload it as an asset (`publish`, `file_path`, `asset:true`) and declare it with an `@font-face { font-family: "<family>"; src: url(<uploaded>) }` rule.

| family | file | fetch | CSS | Slides `faces` key |
| --- | --- | --- | --- | --- |
| Be Vietnam Pro | `fonts/BeVietnamPro-Regular.ttf` (weight 400) | `read` the file with `project/` in front | `var(--font-sans)` | `be-vietnam-pro` |

**Read, per thing:** a component’s props, parts and examples: `api/components/<Comp>.md`; token values: `api/tokens.md`. After this README, fetch the cards and fonts you need in ONE message as parallel calls — none depends on another.

**Two rules.** Before you use a thing — a component, a token group, an icon, an asset — read its card from the index below; a value you did not read from a card is a guess. `tokens.json`, `manifest.json`, `components/index.d.ts` and `design-system.json` are sources for tools: hand them over. `components/<Comp>/README.md` is the long-form second read a card links to; `SKILL.md` and `artifact-type/` beside them are authoring guidance, not needed to consume the system.

## Index (generated — do not edit)

**Tokens**

- `api/tokens.md` — Every token: surface, text, border, palette, type, spacing, radius, shadow, opacidade, breakpoints, espessura, vidro. (13.8k)

**Components** (`api/components/<Comp>.md`, 106; 66 of them showcase pages)

- **Brand**: `LogoCard` — Cartão de aplicação da marca — usado no manual para mostrar a variante correta em cada fundo · `PatternLayer` — Assinatura ambiente da FarmSense · `QuoteBlock` — Citação editorial · `Swatch` — Amostra de cor do manual de marca · `MarcaEspacoDeProtecao` (showcase page) — MarcaEspacoDeProtecao · `MarcaLogoCompacta` (showcase page) — MarcaLogoCompacta · `MarcaLogoPrincipal` (showcase page) — MarcaLogoPrincipal · `MarcaProibicoes` (showcase page) — MarcaProibicoes · `MarcaTamanhosMinimos` (showcase page) — MarcaTamanhosMinimos
- **Core**: `Button` — Botão principal da FarmSense — pílula, Be Vietnam Pro 500, usado em CTAs, cards e barras de ação · `Chip` — Etiqueta de metadado em caixa alta, 11 px, tracking .12em · `Divider` — Fio de 1 px em currentColor a 15 % · `GlassCard` — Card de vidro fosco. É o container padrão para conteúdo sobreposto a uma superfície com padrão · `Icon` — Ícone de linha do sistema — Lucide, traço 1,5 px, cantos retos, sempre em Verde Sombra (ou branco no escuro) com variação por opacidade, nunca por cor · `IconButton` — Botão circular só-ícone, para barras de ferramentas, fechar e navegação compacta · `Kicker` — Sobretítulo de seção: 11 px, caixa alta, tracking .18em, fio horizontal antes do texto · `Logo` — Marca FarmSense em seis arquivos: horizontal e compacta × cor, mono branca e mono escura · `NeonDot` — Ponto luminoso de 8 px que sinaliza estado · `SectionHeader` — Abre toda seção do sistema · `Surface` — Fundo de seção completo, com padrão ambiente já embutido. É a peça que dá ritmo a uma página · `Tile` — Bloco tonal de conteúdo — o card mais simples do sistema, sem vidro e sem sombra
- **Data**: `BarMeter` — Barra de comparação entre talhões · `DataTable` — Tabela de relatório técnico · `KpiTile` — Indicador-chave da FarmSense · `ProgressRing` — Anel de progresso · `Sparkline` — Série temporal de leitura contínua · `StatRow` — Faixa horizontal de números institucionais, separados por fio vertical
- **Feedback**: `Alert` — Aviso em bloco com fio de 3 px à esquerda · `EmptyState` — Estado vazio — escreva o próximo passo, não a ausência · `RuleCard` — Regra de uso do manual — o par faça/não faça aparece sempre em grade de três · `Skeleton` — Placeholder enquanto o dado de campo carrega · `StatusPill` — Estado de equipamento ou leitura · `Tooltip` — Dica de uma linha, em Verde Sombra sólido
- **Forms**: `Checkbox` — Seleção múltipla — escopo de serviço, itens de checklist de visita · `Input` — Campo de texto com rótulo em label e dica em body-sm a 55 % · `Radio` — Escolha exclusiva — plano contratado, tipo de amostragem · `SearchField` — Busca ao vivo em pílula · `Select` — Seleção única com chevron próprio, para cultura, safra e talhão · `Switch` — Interruptor para camadas de mapa e alertas · `Textarea` — Campo multilinha para observação de campo e recomendação técnica
- **Navigation**: `Breadcrumb` — Trilha de navegação · `DotNav` — Índice lateral de um documento longo · `Pagination` — Paginação de listas e relatórios longos · `Tabs` — Abas de seção · `TopBar` — Barra superior de produto e site
- **Catálogo**: `Catalogo01Botoes` (showcase page) — Catalogo01Botoes · `Catalogo02Chips` (showcase page) — Catalogo02Chips · `Catalogo03Indicadores` (showcase page) — Catalogo03Indicadores · `Catalogo04Campos` (showcase page) — Catalogo04Campos · `Catalogo05Cards` (showcase page) — Catalogo05Cards · `Catalogo06Kpis` (showcase page) — Catalogo06Kpis · `Catalogo07Graficos` (showcase page) — Catalogo07Graficos · `Catalogo08Tabelas` (showcase page) — Catalogo08Tabelas · `Catalogo09Editorial` (showcase page) — Catalogo09Editorial · `Catalogo10Fios` (showcase page) — Catalogo10Fios · `Catalogo11Icones` (showcase page) — Catalogo11Icones · `Catalogo12Estados` (showcase page) — Catalogo12Estados · `Catalogo13Navegacao` (showcase page) — Catalogo13Navegacao · `Catalogo14Padroes` (showcase page) — Catalogo14Padroes · `Catalogo15Selos` (showcase page) — Catalogo15Selos · `Catalogo16Impresso` (showcase page) — Catalogo16Impresso
- **Cores**: `CoresEscalaBege` (showcase page) — CoresEscalaBege · `CoresEscalaVerde` (showcase page) — CoresEscalaVerde · `CoresNeons` (showcase page) — CoresNeons · `CoresPareamento` (showcase page) — CoresPareamento · `CoresTintaClara` (showcase page) — CoresTintaClara · `CoresTintaEscura` (showcase page) — CoresTintaEscura
- **Espaço**: `EspacoBreakpoints` (showcase page) — EspacoBreakpoints · `EspacoElevacao` (showcase page) — EspacoElevacao · `EspacoEscala` (showcase page) — EspacoEscala · `EspacoFios` (showcase page) — EspacoFios · `EspacoRaios` (showcase page) — EspacoRaios
- **Manual de marca**: `KitManualDeMarca` (showcase page) — KitManualDeMarca
- **Painel de campo**: `KitPainelDeCampo` (showcase page) — KitPainelDeCampo
- **Proposta**: `KitPropostaEditorial` (showcase page) — KitPropostaEditorial
- **Movimento**: `MovimentoAmbientePulso` (showcase page) — MovimentoAmbientePulso · `MovimentoAmbienteVarredura` (showcase page) — MovimentoAmbienteVarredura · `MovimentoDadosCarregamento` (showcase page) — MovimentoDadosCarregamento · `MovimentoDuracoesCurvas` (showcase page) — MovimentoDuracoesCurvas · `MovimentoEntradaCorte` (showcase page) — MovimentoEntradaCorte · `MovimentoEntradaDirecao` (showcase page) — MovimentoEntradaDirecao · `MovimentoHoverBorda` (showcase page) — MovimentoHoverBorda · `MovimentoHoverElevacao` (showcase page) — MovimentoHoverElevacao · `MovimentoHoverLuz` (showcase page) — MovimentoHoverLuz · `MovimentoHoverMarcas` (showcase page) — MovimentoHoverMarcas · `MovimentoPressFoco` (showcase page) — MovimentoPressFoco · `MovimentoTexto` (showcase page) — MovimentoTexto
- **Padrões**: `PadraoAlvoVarredura` (showcase page) — PadraoAlvoVarredura · `PadraoCurvasDeNivel` (showcase page) — PadraoCurvasDeNivel · `PadraoGrade` (showcase page) — PadraoGrade · `PadraoGradientesProtecao` (showcase page) — PadraoGradientesProtecao · `PadraoSoloTalhao` (showcase page) — PadraoSoloTalhao
- **Superfícies**: `Superficie01Perola` (showcase page) — Superficie01Perola · `Superficie02Rastro` (showcase page) — Superficie02Rastro · `Superficie03Estrada` (showcase page) — Superficie03Estrada · `Superficie04Papel` (showcase page) — Superficie04Papel · `Superficie05Grade` (showcase page) — Superficie05Grade · `Superficie06Relevo` (showcase page) — Superficie06Relevo · `Superficie07Alvo` (showcase page) — Superficie07Alvo · `Superficie08Solo` (showcase page) — Superficie08Solo
- **Tipografia**: `TipoArquivosDeFonte` (showcase page) — TipoArquivosDeFonte · `TipoDisplay` (showcase page) — TipoDisplay · `TipoEscala` (showcase page) — TipoEscala · `TipoGeorgia` (showcase page) — TipoGeorgia · `TipoKicker` (showcase page) — TipoKicker · `TipoPesos` (showcase page) — TipoPesos
