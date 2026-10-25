Design system da **ORVIX Agroquímica**, indústria genuinamente mato-grossense de tecnologia de aplicação agrícola e nutrição de precisão, sediada em Sorriso (MT) e integrante do 3F Group.

**Dois temas**, escuro (`dark`, o padrão, sobre o preto ORVIX) e claro (`light`, sobre o cinza web-1 `#F0F2F4`), com os mesmos tokens semânticos. Em ambos a regra é **tom sobre tom**: toda caixa à frente de outra é sempre um pouco mais clara que a de trás; nenhum tom na frente é mais escuro que o anterior. O vidro é o material padrão. Ative o claro com `data-theme="light"` no `html` ou em qualquer bloco. Todo preview deste sistema se desenha sobre um palco próprio (`.ovx-stage`, fundo `bg-deep`).

---

## Regra zero: Apple em toda peça

**Toda criação ORVIX, seja tela, peça, componente, campanha ou ação, nasce já conforme as Human Interface Guidelines da Apple e as App Store Review Guidelines.** Isso não é uma etapa de revisão antes de publicar um app: é critério de projeto desde o primeiro rascunho, porque o site, o painel e qualquer material digital da marca podem virar app iOS, iPadOS ou macOS sem retrabalho. A seção 4 lista os itens; o card **Apple HIG e App Store** mostra cada um em uso. Em resumo, toda peça entrega:

- alvo de toque de 44 × 44 pt em qualquer controle, inclusive link de texto, slider e botão sem moldura (o sistema garante por `--touch-min`);
- nenhum texto abaixo de 11px, em nenhuma legenda, chip, código ou rótulo de especificação;
- contraste de 4,5:1 em texto e 3:1 em texto grande, ícone, borda de controle e halo de foco, nos dois temas;
- leitura perfeita em 375px, sem rolagem horizontal, com grades `auto-fit` e controles que quebram linha;
- safe areas respeitadas, foco visível, `aria-label` em ícone de ação, `prefers-reduced-motion` respeitado;
- tema escuro e tema claro nativos, seguindo a aparência do sistema; nada depende de inversão automática;
- nenhum recurso externo em tempo de execução: ícones, logos e fontes vivem no próprio sistema;
- sem placeholder, sem "em breve", sem promessa de resultado, sem superlativo vazio.

---

## 1. Contexto de empresa e produto

A ORVIX desenvolve e comercializa soluções que acompanham o **ciclo completo da aplicação**: do preparo da calda ao cuidado com o equipamento. A tese de marca é dupla e atravessa toda a comunicação:

- **Elo de força com a produtividade** (slogan-âncora).
- **O segredo não está só na dose. Está na fisiologia** (tese técnica).

O foco principal é **tecnologia de aplicação agrícola** e a **assessoria técnica** que a acompanha: calda, gota, alvo e equipamento. A nutrição de precisão (linha VIX) é o segundo eixo.

### Portfólio: 4 linhas

A classificação oficial do portfólio tem **quatro linhas**. Toda navegação, card, filtro e breadcrumb usa estes nomes e esta ordem; nunca trate uma família (ORV7, SOLV, VIX HS) como linha.

| Linha | O que reúne | Famílias e produtos-chave | `lineKey` | Cor secundária |
|---|---|---|---|---|
| **Linha TEC** (Tecnologia de Aplicação) | Tudo que age na calda, na gota e no alvo | **Adjuvantes ORV7** (ORV7 Drop Power, ORV7 Aero Guard) · **Adjuvantes ORV** (ORV Surfact Emulsifier, ORV Spume Control, ORV Blitz Max) · **SOLV pH** (SOLV pH+, SOLV pH−) | `tec` (famílias: `orv7`, `orv7-aero`, `orv`, `blitz`, `solv`) | verde; por família: azul, teal, magenta, violeta, vermelho |
| **Linha ORV Clear** | Limpeza e descontaminação de equipamento | ORVClear Limpa Tanque, ORVClear Limpa Fuso | `orvclear` | azul profundo / ciano |
| **Linha ORVALE** | Óleos agrícolas | Citrus Prime, Mineral Gold, Mineral Platinum, Vegetal Supra, Vegetal MET | `orvale`, `orvale-mineral` | laranja / âmbar / prata |
| **Linha VIX** | Fertilizantes | **VIX HS** hidrossolúveis (B10, K32, Mg8, Zn21, MOL15, CoMoNi, ZUM) · **VIX SS** sólidos solúveis (Falcon, Raptor, Start, NPK55, MnS48, ZnS30, CS37) · **VIX Classe A** organominerais por estádio fenológico (Raiz Alfa, Estruturalle, Stop Stress, Mátria) | `vix` (famílias: `vix-hs`, `vix-ss`, `vix-classe-a`) | lima / oliva / ouro |

**Não existe linha de tratamento de sementes.** Polistar não é produto ORVIX e não aparece em nenhum material, catálogo, card ou biblioteca.

Os totais de produtos por linha não estão fixados neste documento: a contagem vem das fichas técnicas vigentes. `LineCard` só mostra `count` quando o consumidor passa o número conferido.

Produtos-âncora: **ORV7 Drop Power** (adjuvante premium completo) e **ORV7 Aero Guard** (redução de deriva, aplicação aérea).

### Superfícies digitais

1. **Site público `orvix.com.br`**: home, página-pilar de Tecnologia de Aplicação, índice de linhas, página de linha, ficha de produto (modelo híbrido: dado técnico vindo da base técnica de produtos, editorial próprio), blog técnico, sobre, Clube ORVIX, contato.
2. **Painel do representante**: área restrita com catálogo técnico e biblioteca de documentos.
3. **Programa de relacionamento Clube ORVIX**, sobre a plataforma Orbia.

### Fontes consultadas

Este guia foi construído a partir dos materiais oficiais de marca da ORVIX: manual de marca, logos, fontes, copy oficial e fichas de produto.

---

## 2. Content fundamentals

### Como a copy é escrita

Voz **técnica, fria, precisa e regional com orgulho**. A ORVIX fala como uma indústria que domina a fisiologia da aplicação, com a sobriedade de quem entende de calda, deriva, tensão superficial e cutícula. Confiante sem exagero, próxima do produtor mato-grossense sem rusticidade.

### Regras obrigatórias

- **Sem travessão em meio a texto.** Usar vírgula, ponto, dois-pontos ou parênteses.
- **Afirmações positivas.** A marca afirma, não nega. Evitar construção negativa e tom alarmista.
- **Acentuação completa do português.**
- **Sem superlativo vazio:** nada de "o melhor do mercado", "revolucionário", "resultado garantido".
- **Sem nome de concorrente.** Usar a categoria "soluções tradicionais".
- **Nunca inventar dado técnico.** Toda dose, garantia, percentual de calda e registro entra marcado como pendente de conferência até checagem com rótulo e ficha vigentes.
- **Emoji: nunca.** Em nenhum material da marca.

### Pessoa e tratamento

Trata o produtor por **você**, direto e sem cerimônia: "Fale com seu consultor ORVIX", "Compre ORVIX diretamente da indústria". A empresa fala em **nós** quando assume autoria técnica: "Por isso desenvolvemos soluções que acompanham o caminho completo". Nunca "a gente", nunca "o senhor".

### Caixa e pontuação

- **Eyebrow** e labels em CAIXA-ALTA com tracking largo: `INDÚSTRIA GENUINAMENTE MATO-GROSSENSE`, `TECNOLOGIA DE APLICAÇÃO`.
- **Headline** em caixa de frase, com ponto final: `Elo de força com a produtividade.`
- **Nome da marca** sempre `ORVIX` em maiúsculas na assinatura; `ORVIX` capitalizado admitido em texto corrido.
- **Nome de produto** como no rótulo: `ORV7 Drop Power`, `SOLV pH Menos`, `VIX HS K32`, `ORVClear Limpa Tanque`.
- **Números técnicos** com vírgula decimal e unidade colada por espaço: `30 a 200 mL/ha`, `pH 2,0 a 4,0`, `densidade 1,24`.

### Vibe

Laboratório de campo. Frases curtas, encadeadas por precisão: **"Calda fluida. Gota precisa. Alvo atingido."** Cada bloco de copy fecha em um ganho agronômico verificável, não em promessa.

### Exemplos reais

| Contexto | Copy oficial |
|---|---|
| Eyebrow do hero | `INDÚSTRIA GENUINAMENTE MATO-GROSSENSE` |
| H1 do hero | `Elo de força com a produtividade.` |
| Subtítulo | `Soluções que acompanham o ciclo completo da aplicação, do preparo da calda ao cuidado com o equipamento.` |
| Microcopy | `Calda fluida. Gota precisa. Alvo atingido.` |
| Callout de tese | `"O segredo não está só na dose. Está na fisiologia."` |
| Título de seção | `Três frentes de ação, um único objetivo: levar mais produto ao alvo.` |
| Card de linha | `Calda estável, gota uniforme e alvo bem coberto.` |
| CTA primário | `Fale com um consultor ORVIX` |
| CTA secundário | `Conheça a linha ORV7` |
| Clube ORVIX | `Cada compra ORVIX vira ponto. Cada ponto vira mais para a sua operação.` |
| Fechamento | `O sucesso do agricultor é o sucesso da ORVIX.` |
| 404 | `Essa rota saiu da calda. Vamos recalibrar a aplicação.` |
| Hashtag | `#AGRICULTORORVIX` |

### Vocabulário próprio

Manejo fitossanitário · calda · preparo de calda · fisiologia · fenologia · estádio fenológico · fotoassimilados · translocação · deriva · tensão superficial · cutícula · umectância · adjuvação · qualidade de água · ponto de orvalho · circuito hidráulico · contaminação cruzada · incrustação · cátions livres · cuidado com o equipamento · indústria genuinamente mato-grossense · produtor.

### Anti-vocabulário

Orgânico · natural · terroso · agro raiz · receita milagrosa · revolucionário · o melhor do mercado · resultado garantido · nome de concorrente.

---

## 3. Visual foundations

### Cores

**Cores principais:** **branco `#FFFFFF`** (`branco`) e **preto ORVIX `#101720`** (`preto`, igual a `grafite-900`, RGB 16, 23, 32). O preto ORVIX carrega o viés azulado frio de toda a escala; **o preto absoluto `#000000` não entra** em fundo, texto ou superfície. As logos, por regra do arquivo de marca, ficam em preto puro e branco puro.

**Cores secundárias:** **claro ORVIX `#E8EAEE`** (`claro`) e **verde `#13A538`** (`verde`, `verde-500`), a única cor saturada da marca. Rampa do verde de 50 a 950; variante impressa de campanha MT `#009247`.

**Cinzas:** a escala `grafite` (100 a 1000, viés azulado frio) para as camadas do tema escuro; os cinzas **web 1, 2 e 3** do manual (`web-1 #F0F2F4`, `web-2 #DCE1E4`, `web-3 #C8CFD4`) para as camadas do tema claro; a rampa `branco-50` a `branco-900` para texto de apoio.

| Papel | Tema escuro | Tema claro |
|---|---|---|
| `bg-deep` (fundo mais profundo) | preto ORVIX | web-1 `#F0F2F4` |
| `bg` (fundo de página) | preto ORVIX | web-1 |
| `fundo-grafite` (base de seção) | grafite-800 | branco-50 |
| `surface-1` a `surface-4` | grafite-800, 700, 600, 500 | branco-50, branco, branco, branco |
| `surface-sunken` · `field-bg` | grafite-700 · claro a 6% (um tom acima do contêiner) | branco · branco |
| `text-strong` · `text-body` · `text-muted` | branco · claro · branco-500 | preto · grafite-800 · grafite-300 |
| `text-accent` · `link` | verde-400 | verde-700 |
| `border` · `divider` · `hairline` | claro a 10% | web-2 `#DCE1E4` |
| `border-subtle` · hover · linha alternada | claro a 3% a 6% | web-1 `#F0F2F4` |
| `border-strong` · contorno de campo · rolagem | claro a 14% a 24% | web-3 `#C8CFD4` (uso raro) |
| Vidro `glass-1` a `glass-3` | grafite a 30, 42, 62% | branco a 55, 70, 86% |

**Tom sobre tom:** trabalhe sempre do mais escuro, no fundo, para o mais claro, à frente. **Nenhum tom na frente é mais escuro que o anterior.** No escuro, a página fica no preto ORVIX e cada camada sobe um passo na rampa grafite (800, 700, 600, 500); grafite-950 e grafite-1000 são mais escuros que o preto e não servem de camada. A caixa de baixo não precisa ser a mais escura da paleta: dado o tom dela, a próxima caixa à frente é sempre um tom mais clara. Isso vale também para o que antes "afundava" (trilho de abas, área de mídia, busca) e para o campo, que fica um passo mais claro que o card. Degradê continua permitido em seção e em caixa, desde que sutil: ele parte do tom da caixa e varia pouco, sem criar uma área visivelmente mais escura que a caixa de trás. Amostra de logo branca usa um tom grafite um passo acima do card (grafite-700); no tema claro, essa amostra é a única caixa escura admitida, porque mostra a versão branca da logo. Quando o tom não pode subir mais, a separação vem da hairline e do vidro, nunca de uma caixa de cor oposta ao fundo. Card Tom sobre tom. O card de vidro é `surface-card` (grafite a 72% no escuro, branco a 82% no claro) com blur de 16px.

**Tema claro: Web 1, Web 2 e Web 3.** O tema claro é construído com os três cinzas web do manual, cada um com papel fixo:

- **Web 1 `#F0F2F4`**: a cor principal de fundo. Página e fundo profundo em Web 1, nunca o branco. Também é o hover de item de menu, de botão de ícone e de linha de tabela, a linha alternada da tabela e o fundo suave de badge neutro.
- **Web 2 `#DCE1E4`**: a linha. Borda, divisor e hairline padrão de card, cabeçalho, tabela, campo de busca, chip e skeleton. Só contorno, nunca texto.
- **Web 3 `#C8CFD4`**: uso raro. Contorno de campo, borda forte em hover, barra de rolagem e texto desativado.

Card, campo, painel e botão secundário ficam em branco, um passo acima do Web 1 (tom sobre tom). Camadas à frente do branco continuam no branco e se separam pela hairline Web 2. Web 2 e Web 3 nunca são fundo de caixa à frente de algo mais claro. Os véus claros do tema escuro (claro a 3% a 24%) não existem no claro: viram Web 1, 2 ou 3. Preto ORVIX e as cores de linha de produto são as mesmas nos dois temas.

A marca prefere **tonalidade por transparência** a novos hexadecimais: rampas `claro-a90` a `claro-a03` (claro sobre escuro), `escuro-a90` a `escuro-a10` (preto ORVIX sobre claro) e `verde-a40` a `verde-a06`.

**Cores secundárias de produto** (`produto-*`): 14 acentos, um por família de produto, agrupados nas quatro linhas (card Cores de Produto). Existem para salientar a presença de um produto ou de uma linha, **nunca para vestir a interface**. Regra: uma cor de produto por bloco, sempre com o verde institucional na ação. A **escala de pH** (`ph-1` a `ph-13`) só entra no componente `PhScale` e em gráfico.

**Estados de sistema:** sucesso = verde, aviso = âmbar `#E0A81E`, erro = vermelho `#D22E3A`, informação = azul `#1C7FC4`. **O verde nunca vira alerta.**

**Contraste** (card Contraste): branco sobre preto ORVIX 18:1, claro sobre preto ORVIX 15:1, preto ORVIX sobre branco 18:1, verde-400 sobre preto ORVIX 6,8:1, verde-700 sobre branco 6,2:1. O verde-500 sobre claro ou branco reprova em texto (2,7:1 e 3,2:1): só em elemento gráfico.

### Tipografia

**Exo é a fonte principal da marca.** Todo título é **Exo ExtraBold 800 em caixa alta**. **Be Vietnam Pro** é fonte de corpo de texto: **nunca acima de 30px e nunca em título.** Acima de 30px só existe Exo.

| Uso | Fonte | Peso |
|---|---|---|
| **Títulos e nomes de produto** | **Exo** | **ExtraBold 800, caixa alta. Sem exceção.** |
| Claims, eyebrow, label, número técnico | Exo | Medium 500 |
| Corpo, ficha técnica, artigo, UI | Be Vietnam Pro | Regular 400, Medium 500, ExtraBold 800 |

- **Todo título e todo nome de produto: Exo, ExtraBold 800, CAIXA ALTA.** Vale para display, H1 a H5, título de card, nome de linha, nome de produto, callout e citação. A hierarquia vem só da escala, não do peso.
- **Itálico é exceção.** A ORVIX raramente escreve em itálico. Nenhum componente do sistema usa itálico; os arquivos ficam carregados apenas para uso pontual autorizado.
- **A palavra ORVIX é sempre em caixa alta**, em qualquer contexto, inclusive em texto corrido.
- **Labels:** todo label do sistema (rótulo de campo, de número, de tabela, de grupo do menu, de divisor) é Exo ExtraBold, caixa alta, 11px, tracking leve de 0,06em (`ls-label`) e cor a 50% (`label-fg`: branco a 50% no escuro, preto ORVIX a 50% no claro).
- **Navegação sempre em caixa alta:** links da navbar, botões, abas e trilha (breadcrumbs) em Exo caixa alta, com tracking de 0,04em a 0,06em. Vale também para o menu do site e das peças.
- **Escala contida.** display 52 (máximo do sistema) · h1 40 · h2 32 · h3 26 · h4 22 · h5 18 · lead 18 · corpo 16. Os títulos fluidos (`--fs-fluid-*`) chegam no máximo a esses valores. A hierarquia vem do par tipográfico e do peso; a tela nunca fica pesada por tamanho. Manifesto e fechamento usam h2, não h1; o hero do site usa h1, não display.
- **Be Vietnam Pro nunca acima de 30px e nunca em título.** O maior corpo dela no sistema é o `lead` de 18px; de `fs-h3` para cima só existe Exo. Texto longo nunca em Exo.
- Em título, o Exo é sempre ExtraBold. O Medium do Exo fica reservado a eyebrow, label, legenda e número de apoio.
- **Respiro e medida.** Título com no máximo 24 caracteres por linha em manifesto e fechamento, corpo com 58 a 70 caracteres por linha, blocos com `max-width` sempre declarado. Densidade é falha de projeto, não de conteúdo.
- Tracking levemente negativo em display (`-0.015em`), largo em eyebrow (`0.18em`) e no descritor da marca (`0.34em`). Em caixa alta o tracking nunca fecha demais.
- Numerais **tabulares** em toda ficha, dose, tabela e número técnico.
- Mono do sistema (`ui-monospace`) para registro, CNPJ, código e dado bruto. A marca não tem fonte mono própria.

### Espaçamento

Base **4px**, escala `--space-1` a `--space-48`. Padding canônico: controle 9/14px, card 20px, painel 32px. Ritmo de seção: 64 · 96 · 128 · 160px. Alvo de toque mínimo **44px** (`--touch-min`): regra da Apple HIG e necessidade de campo, o produtor acessa com luva e sob sol. Grid firme, alinhamento rigoroso, dado técnico com mais respiro que UI comum.

**Respiro nas quatro bordas, sempre.** Toda tela, seção, card e peça tem margem interna em cima, à direita, embaixo e à esquerda; nenhum conteúdo encosta na borda. Antes de entregar qualquer design, revise as quatro bordas em desktop e em celular. Telas de painel: `.ovx-painel-pagina` (20 a 40px no topo e nas laterais, 28 a 48px na base). Barras de ferramentas: busca, filtro e botão na mesma altura, quebrando de linha antes de apertar; nunca um campo espremido com o placeholder cortado. Grades de duas colunas viram uma coluna abaixo de 760px. Tabela larga rola na horizontal dentro do próprio quadro, sem quebrar palavra em três linhas.

### Raios de canto

**Raio contido.** Botão, campo, tab e badge: **6px**. Card e painel: **8px**. Teto absoluto de qualquer caixa: **10px**. Os valores preferenciais são 6 e 8.

**Caixa com barra colorida** (lateral esquerda, inferior ou qualquer lado engrossado em cor: card de produto com `rail`, card de linha, item de sidebar ativo, callout `bare`): raio de **no máximo 3px** (`radius-rail`) e a própria barra com **no máximo 3px** de espessura. A barra é um traço técnico, não uma moldura.

**Acima de 10px só existe a pílula** (`radius-pill`), usada raramente e só quando pedida; nunca por padrão em tag, botão ou superfície. Trilhos finos (switch, meter, escala de pH) podem ser arredondados porque não são caixas.

### Sombras e elevação

Sombras **curtas, próximas e de baixa difusão**: blur máximo 14px, offset máximo 4px. Nada de sombra distante ou aberta. A separação prioritária entre blocos vem da **hairline de 1px** (`--claro-a10`), não da elevação. Assinatura do vidro: **sheen de 1px** no topo (`inset 0 1px 0` claro a 6%). Foco: halo curto de 3px em verde a 40%, nunca glow difuso.

### Vidro e transparência

O vidro é o material padrão da interface, não um efeito pontual. Três densidades (`glass-1-bg`, `glass-2-bg`, `glass-3-bg`, com blur 14, 20 e 28px) mais a variante de acento verde. No tema escuro o vidro é grafite translúcido com hairline clara; no tema claro é branco translúcido com hairline preta a 10% e sheen branco. Em ambos o fundo atravessa o vidro, o que é o que garante o tom sobre tom. **Botão, cápsula e controle de vidro só existem sobre foto ou fundo irregular**: sobre fundo liso ou degradê não há nada para o vidro mostrar, e o resultado parece um botão apagado. Ali, use o botão secundário.

No **tema claro** as ações não são de vidro: botão primário verde-700 sólido com texto branco, secundário branco com borda Web 3 e texto preto, campo branco com borda Web 3. Como no escuro, vidro só sobre foto ou fundo irregular.

São de vidro por padrão no escuro: **card** (blur 16px sobre `surface-card`), **campo de formulário**, **tag**, **selo**, **callout**, **toast**, **diálogo** e **header**. Use `.ovx-card--opaco` e `Button variant="verde-solido"` quando o bloco precisar de superfície chapada.

Para texto sobre imagem, `--scrim-bottom` (preto ORVIX em gradiente) ou cápsula (`.ovx-capsule`) com blur curto. A logo sobre foto sempre com scrim ou cápsula.

### Fundos, texturas e imagens

- **Padrões de pontos:** a malha de pontos da marca, densa (3px; 4px na variante suave) e sempre a 25% de opacidade (claro sobre escuro, preto ORVIX sobre claro), em versão cheia ou em degradê. O degradê é só de transparência (máscara), nunca de cor. Classes `orvix-dots--suave` e `orvix-dots--fade-y`, `-fade-x`, `-fade-radial`, `-fade-diagonal`, `-fade-band`; componente `XTexture tone="suave" fade="…"`. Card Padrões de pontos.
- **Grade técnica:** malha de 48px a 3% de opacidade em seções de alta densidade.
- **Gradientes:** no escuro, só de **preto ORVIX para grafite** (`.ovx-grad-preto`, `.ovx-grad-preto--radial`: `bg-deep` para `surface-1` ou `surface-2`). No claro, **web-1 para branco** em degradê horizontal (`.ovx-grad-claro`: web-1 à esquerda, branco à direita; `.ovx-grad-claro--inv`: o inverso; `.ovx-grad-claro--diagonal`: no ângulo da perna do X), uma segunda opção de fundo de página ao lado do web-1 chapado. **Nunca degradê com verde**, nem verde claro de fundo, nem gradiente colorido aberto. O verde fica na ação e na tipografia de acento.
- **Onde não há foto:** o fundo pontilhado parado (`.ovx-pontos-fundo`), o `XMark` ou o `TargetMark`; nunca partículas animadas (ver seção 7).
- **Sem imagem de produto:** este design system não traz render, foto ou embalagem de produto. Onde um produto precisa de presença visual, use `TargetMark`, o pontilhado parado ou a cor secundária da linha.
- **Cor da imagem:** tratamento **frio**, saturação reduzida (0,72), contraste levemente elevado, brilho baixo em hero. Foco em equipamento de aplicação, gota, calda, planta industrial e lavoura mato-grossense. Sem céu azul de banco de imagens, sem dourado, sem trator genérico.
- **Três bases de seção:** preto (`.ovx-fundo--preto`), grafite (`.ovx-fundo--grafite`) e degradê de grafite para preto (`.ovx-fundo--degrade`). Alternar as bases entre seções dá tom sobre tom entre elas e tira a página do escuro chapado. No claro, as mesmas classes viram web-1, branco-50 e o degradê entre eles.
- **Padrão pontilhado ORVIX:** ver a seção abaixo.

### Padrão pontilhado ORVIX

Malha de pontos em colmeia, **adensada** e parada na tela: **5 px entre centros** no tom sobre tom (pontos de 0,6 a 1,5 px) e 11 px sobre imagem, como nas referências FP. Traz um pouco de rusticidade e quebra o design totalmente limpo, mas de forma sutil. Componente `PadraoPontilhado`; cards Padrão pontilhado, Padrão pontilhado sobre imagem e Padrão pontilhado: ideias de uso.

- **Tom sobre tom, sem imagem:** no tema escuro, pontos um tom mais claros que a base (claro a 8%); no tema claro, um tom mais escuros que a base (preto ORVIX a 9%) (`--pontilhado-ponto`). O pontilhado é textura da base, não caixa à frente, por isso no claro ele escurece; em onda ou nas **faixas do X** (na inclinação das pernas), sempre com pontos pequenos e próximos. No escuro, ponto mais escuro que a base é proibido; no claro, ponto mais claro que a base some e também não se usa.
- **Onde usar:** em algumas seções sem imagem, nunca como regra da página e nunca em duas seções seguidas; em publicidade (story, feed, banner); em abertura e fechamento de vídeo. Não use atrás de texto longo, tabela ou formulário.
- **Sobre imagem (HTML e vídeo):** nove referências aprovadas, FP-01 a FP-09, no grupo de assets **Pontilhado**. FP-01 (pontos de luz em onda) e FP-05 (tela perfurada escura) estão em uso. A cor da filmagem não muda; nada de camada cinza ou azulada: a imagem escurece por curva (0,8 · claridade^1,55). O ponto é a própria imagem mais clara ou mais escura, ou a cor do produto a 30%; nunca um ponto cinza chapado. Sem desenhos, molduras ou áreas fechadas (exceto FP-08). A textura fica parada e a imagem se move por baixo.
- **Recusados:** malha fina uniforme, inclinada ou quadrada; malha que some no centro ou cresce da base; meio-tom pelo brilho; pernas do X num canto; tela perfurada clara ou média; adensamento que fecha no escuro; faixas largas; pontos no Verde 80; imagem em cor única.

```jsx
<PadraoPontilhado className="ovx-fundo--grafite">…</PadraoPontilhado>
<PadraoPontilhado desenho="faixas" className="ovx-fundo--preto">…</PadraoPontilhado>
<PadraoPontilhado modo="luz" imagem={foto} alt="…" />      {/* FP-01; modo="perfurada" = FP-05; modo="produto" cor="#95C11F" = FP-06 */}
```

### Animação

Movimento de **precisão lenta**: transições longas, contínuas e controladas. Nada brusco, nada elástico, nunca bounce ou overshoot. Durações 140 · 240 · 360 · 520 · 820 · 1200ms. Curva padrão `cubic-bezier(.22,.7,.24,1)`. Os elementos de calda rodam a `speed 0.55` por padrão, com deriva de 16s e giros de 30s. Um elemento animado por dobra. `prefers-reduced-motion` desliga tudo e congela o canvas em um quadro estático.

### Botões e tags

**Botão:** texto sempre em **Exo ExtraBold (ou Bold), caixa alta**, tamanho contido (12px no `md`, 11px no `sm` e no `xs`; alturas de 34, 29 e 24px, sempre dentro de área de toque de 44px), raio 6px, **sem vidro, sem brilho, sem sombra**: o botão ORVIX é chapado, nunca de plástico. Primário verde sólido com texto branco; secundário contornado (hairline no escuro, branco com borda `web-3` no claro); ghost só texto; `glass` só sobre foto ou fundo irregular, nunca sobre fundo liso ou degradê (ali use o secundário); `inverse` para login social; `danger` para destruição. **Hover sempre clareia**, nunca escurece: quando o fundo vira verde, o texto é branco, nunca preto.

**Botão alvo** (`Button variant="alvo"`): contorno verde com a mira à esquerda, texto verde em caixa alta, hover que clareia. **Raro**: só em temas de tecnologia de aplicação e alvo, nunca como ação genérica de página.

**Tag é outra coisa e nunca pode ser confundida com botão** no mesmo tema: reta (raio 3px), pequena (22px), **sem preenchimento**, contorno fino, texto em Be Vietnam Pro 11px sem caixa alta. Selecionada: contorno e texto verdes, ainda sem preenchimento. Se um elemento tem a forma, a cor e a fonte de um botão, ele é um botão.

### Estados de interação

| Estado | Comportamento |
|---|---|
| **Repouso** em ação verde | Verde **sólido** verde-700 nos dois temas, texto branco (6,2:1, Apple HIG), sem vidro, sem brilho, sem sombra |
| **Hover** em ação verde | **Clareia** um passo (#0E842C, ainda 4,8:1). Texto segue **branco** sobre o verde. Nunca escurece, nunca texto preto sobre verde |
| **Hover** em superfície e no secundário | Clareia: véu claro a 10%, borda mais presente, texto para `--text-strong` |
| **Press** | Um passo mais escuro que o repouso e escala `0.99` |
| **Foco** | Halo de 3px em verde a 40% com anel interno da cor do fundo |
| **Desativado** | Opacidade 0,42, sem sombra, `pointer-events: none` |
| **Selecionado** (tag, filtro) | Sem preenchimento: só contorno verde e texto verde |
| **Link ativo em nav** | Barra verde de 2px na base, nunca fundo verde |

### Cards e superfícies

Card padrão: vidro sobre `rgba(24,32,42,.72)` com blur de 16px, hairline clara a 10%, sheen de 1px no topo, raio 10px, `--shadow-1`, padding 20px, rodapé separado por hairline. Card interativo sobe 1px no hover. Card de acento troca a hairline por verde a 40% e ganha brilho verde suave. Painel de vidro usa raio 14 ou 18px e o sheen superior.

### Layout

Container 1280px (1520px em faixa larga), prosa 680px, gutter 20px em mobile e 32px em desktop. Header fixo de 68px em vidro, abaixo do `safe-area-inset-top`. Sidebar de painel 264px, que vira gaveta abaixo de `--bp-lg`. **Mobile primeiro:** leitura impecável em 375px, sem rolagem horizontal. Toda grade de cards usa `repeat(auto-fit, minmax(…, 1fr))` em vez de contagem fixa de colunas; toda linha de controles usa `flex-wrap: wrap`. Nenhum preview deste sistema fixa largura em pixels.

### Divisão diagonal

**A ORVIX nunca divide uma tela em linha reta.** Quando uma tela ou um bloco se parte em duas áreas (login do painel, hero com metade visual, card de duas metades, slide), a divisória é inclinada **no mesmo ângulo da perna do X grande da logo: 30,5° a partir da vertical**, lido da perna sólida da logo principal. O ângulo vive nos tokens `--x-leg-angle` (30,5deg) e `--split-angle` (120,5deg, a mesma inclinação expressa para `linear-gradient` e `mask-image`). A direção é sempre a da perna direita: topo à direita, base à esquerda. O que muda de uma peça para outra é a proporção (`--split-at`, 50% por padrão), nunca o ângulo nem a direção. Abaixo de 640px as metades empilham com hairline reta.

Em código: componente `SplitDiagonal` (`left`, `right`, `paneA`, `paneB`, `at`, `edge` hairline, verde ou none) ou as classes `.ovx-split`, `.ovx-split__pane--a/--b`, `.ovx-split__edge`. O login do painel (`.ovx-login`) e o scrim do hero do site já usam a divisão. Card: Divisão diagonal, no grupo Layout e Grid.

---

## 4. Conformidade Apple: HIG e App Store

Toda tela, peça ou ação ORVIX já nasce dentro desta lista (ver Regra zero no início). Nada é adaptado depois. O card **Apple HIG e App Store** (grupo Acessibilidade) mostra os itens em uso.

### Human Interface Guidelines

- **Responsividade obrigatória**: nem a Apple nem a ORVIX aceitam tela sem responsividade. Tudo funciona de 320px ao desktop, sem rolagem horizontal da página; grades com `minmax(min(100%, X), 1fr)` e consultas de contêiner (o componente se ajusta à própria largura); duas colunas viram uma abaixo de 760px; barra de ferramentas quebra de linha antes de espremer um campo; tabela larga rola dentro do próprio quadro.
- **Campos no celular**: altura de 44px e texto de 16px abaixo de 600px de largura, para o iOS não dar zoom ao focar.
- **Reduce Transparency**: com `prefers-reduced-transparency`, todo vidro (botão, cápsula, painel, navbar, toast, diálogo) vira superfície sólida, tom sobre tom.
- **Nada depende de hover**: dica (`Tooltip`) só complementa um controle que já tem nome e abre também no foco; ação nunca fica escondida atrás de hover.
- **Navegação**: sempre um caminho de volta (trilha, voltar ou fechar); barra de abas com até cinco destinos; ação destrutiva pede confirmação.
- **Verificação**: todos os cards passam por auditoria automática em 320, 390 e 768px, nos dois temas (rolagem horizontal, área de toque, texto mínimo, contraste, nome acessível, zoom de campo, Reduce Motion). O que falha é corrigido antes de publicar.
- **Alvo de toque de 44 × 44 pt** em todo controle. Botão `md` tem 34px e vive dentro de uma área de toque de 44px; link de texto (`LinkAction`, links do rodapé e do breadcrumb), botão sem moldura e slider também (`--touch-min`).
- **Safe areas**: header, barra inferior e toast respeitam `env(safe-area-inset-*)`. Nada fica atrás da Dynamic Island, da barra de status ou do indicador de Home.
- **Legibilidade**: nenhum texto abaixo de 11px, nem em chip, código ou legenda de especificação; corpo em `rem` para acompanhar Dynamic Type; títulos fluidos com `--fs-fluid-*` e escala contida (display até 52px).
- **Contraste**: 4,5:1 em todo texto, inclusive label, metadado, legenda e texto de botão; 3:1 em texto grande (24px, ou 19px bold), borda de controle, ícone e halo de foco. Por isso o primário é verde-700 com texto branco (6,2:1; hover em #0E842C, 4,8:1), o label é branco a 55% no escuro e preto ORVIX a 62% no claro, e `text-subtle` é branco-600 no escuro e branco-800 no claro, todos acima de 4,5:1 sobre as superfícies onde aparecem.
- **Cor nunca é a única informação**: sucesso, aviso e erro trazem palavra ou ícone. O verde nunca vira alerta.
- **Reduce Motion**: `prefers-reduced-motion` desliga transições, marquee e pulsos; o conteúdo aparece pronto.
- **Increase Contrast e Bold Text**: com `prefers-contrast: more`, texto de apoio sobe a corpo, labels vão a 78% (escuro) e 82% (claro) e as bordas ganham corpo; nenhuma informação depende de peso fino.
- **Aparência**: tema escuro (padrão) e tema claro nativos, com `color-scheme` declarado em cada um e `data-theme` seguindo o ajuste do sistema. Nada depende de inversão automática. No claro, botão primário e secundário são sólidos (verde-700 com texto branco; cinza claro ORVIX com texto preto), nunca vidro.
- **VoiceOver**: todo `IconButton` leva `aria-label`; ícone decorativo leva `aria-hidden`; imagem de produto leva `alt` com o nome do rótulo; campo leva label visível ligada por `htmlFor`; erro é anunciado por `aria-describedby`.
- **Foco e teclado**: halo de 3px (`--ring-focus`) sempre visível, nunca `outline: none` isolado; diálogo modal recebe o foco ao abrir, prende o Tab dentro dele, fecha com Escape e devolve o foco a quem o abriu.
- **Ícone do app**: 1024 × 1024 px, sem transparência e sem cantos arredondados (o sistema aplica a máscara). Tela de abertura estática, sem texto.

### App Store Review Guidelines

- **Login (4.8)**: o painel oferece entrada com conta Google, portanto a tela de login oferece também **Sign in with Apple** como opção equivalente.
- **Exclusão de conta (5.1.1)**: onde há criação de conta, há exclusão de conta dentro do app.
- **Privacidade (5.1.1)**: política de privacidade linkada no app e na ficha da loja; rótulo de privacidade da App Store preenchido com os dados que o painel coleta.
- **Completude (2.1)**: sem placeholder, sem link quebrado, sem "em breve". Dado técnico marcado como pendente de conferência fica fora do build enviado.
- **Metadados (2.3)**: capturas de tela do app real, descrição sem promessa de resultado e sem superlativo vazio, como manda a voz da marca.
- **Funcionalidade mínima (4.2)**: o app entrega catálogo técnico, calculadora de calda e biblioteca de documentos; não é um site empacotado.
- **Compras físicas (3.1.5)**: a compra direta de produto ORVIX acontece fora do app, por consultor; não há compra in-app a oferecer.

---

## 5. Iconografia

**A ORVIX não possui icon set proprietário.** Nenhuma pasta de marca, nenhum arquivo técnico e nenhum material entregue traz fonte de ícone, sprite ou biblioteca de SVG de interface.

**Substituição sinalizada:** este design system adota **Lucide** (traço 2px, geometria técnica, terminais retos), a família que mais se aproxima da linguagem de engenharia da marca. Os 120 glifos em uso estão **embutidos no bundle** (`ORVIX_ICONS`, SVG inline com `currentColor`), sem nenhuma chamada a CDN: página publicada não carrega host externo, e app empacotado não depende de rede para desenhar ícone. `iconSvg(name, size)` devolve o SVG como string para HTML estático.

> **Ação para o time ORVIX:** se existir um set proprietário fora dos arquivos entregues, envie para substituirmos o Lucide.

### Regras

- Tamanhos 14, 16 ou 20px. Um único peso de traço por tela.
- O ícone herda a cor do texto ao redor. Verde só quando marca ação ou sucesso.
- Ícone decorativo com `aria-hidden`. Ícone informativo com `label`.
- **Nunca** ícone preenchido, com sombra, colorido por cor de produto, ou desenhado à mão.
- **Emoji nunca.** Caracteres unicode não são usados como ícone.

### Glifos recorrentes

`droplet` `droplets` `spray-can` `target` `crosshair` `flask-conical` `beaker` `gauge` `wind` `thermometer` `sprout` `leaf` `tractor` `plane` `wrench` `shield-check` `file-text` `download` `activity` `factory` `map-pin` `radar` `scan-line` `waves` `test-tube`

### Elementos gráficos proprietários

Estes **substituem** o ícone quando o assunto é a própria marca:

- **Elemento X da ORVIX** (`Logo variant="elemento-x"`): o símbolo sozinho, com as três pernas pontilhadas e a perna sólida. Assinatura reduzida, ícone, marca d'água.
- **Elemento ORVIX** (`Logo variant="elemento"`): só as três pernas pontilhadas, com a perna 3 completa. Grafismo de fundo, faixa e legenda de vídeo. Não substitui a logo.
- **Alvo tecnológico** (`.ovx-target`, componente `TargetMark`): **elemento terciário**. Entra só quando o assunto é tecnologia de aplicação e, em especial, o alvo (deposição, cobertura, gota na folha), pequeno e estático, um por tela, como marcador técnico ao lado do eixo alvo. Nunca como ilustração de hero, animado em login ou painel, nem grande em vidro. Régua, escala, grade técnica e malha de pontos são sinais de precisão tão válidos quanto ele. O design da ORVIX é sério.
- **Textura pontilhada** (`.orvix-dots`) e **grade técnica** (`.orvix-grid-fx`).
- `TerritoryBadge` usa o Elemento X como marca enquanto os SVGs de campanha MT (bandeira, placa) não forem enviados.

---

### Fidelidade de forma: infográfico, elemento gráfico e movimento

Regra para toda peça que represente algo que existe no mundo real (gota, folha, bico, jato, planta, solo, equipamento): **os contornos, as proporções e as inclinações seguem o que a natureza e a física descrevem.** Não é realismo; o traço continua gráfico, limpo e da marca. Mas a forma tem de ser fiel. Card **Fidelidade de forma**.

- **Gota em queda** tem forma de gota: ponta para cima, base arredondada. Nunca um círculo. Com vento, a ponta inclina contra o vento.
- **Gota sobre a folha** é uma calota cortada pela superfície, com base reta. Sem adjuvante, a tensão superficial alta mantém a gota alta, com ângulo de contato acima de 90° (cerca de 120° a 140°). Com a tensão quebrada, ela se espalha numa lente baixa e larga, com ângulo de 20° a 30°. Nunca um círculo apoiado na folha.
- **Folha** tem pecíolo, base, ponta assimétrica, nervura central e secundárias em ângulo agudo, apontando para a ponta. Em corte, a superfície tem cutícula. Nunca uma elipse.
- **Leque de bico** abre no ângulo do modelo (80° ou 110° no jato plano) e nasce no orifício.
- Antes de desenhar, procure a forma real (foto, corte técnico, ficha do fabricante). Simplifique o detalhe, nunca a forma. Respeite gravidade, vento, ângulo de contato e trajetória.
- Partícula abstrata (molécula, ativo, íon) pode ser ponto. Gota, folha, bico e planta, não.
- Movimento segue a mesma regra: a gota que cai é gota; a que pousa vira calota ou lente, nunca um anel que se expande.

---

## 6. Logos: descritivo, uso e nomenclatura

A logo da ORVIX é de alta complexidade: o X é formado por muitas peças pequenas, e parte delas tem transparência. Por isso **a escolha da versão faz parte do uso correto da marca**. São oito arquivos oficiais, cada um em preto puro (#000000, como no arquivo de marca) e em branco puro (`assets/logos/<nome>-preto.svg` e `-branco.svg`). **Nenhuma outra logo entra neste sistema.** O tema escolhe a cor: branca no escuro, preta no claro (`Logo tone="auto"`); `tone="preto"` ou `tone="branco"` fixa uma delas, por exemplo sobre foto.

### Hierarquia de uso

| Nível | Logo | `variant` | Papel |
|---|---|---|---|
| Principal | Logo ORVIX principal | `principal` | A logo da marca. Primeira escolha sempre: web, digital, vídeo e impressão simples. |
| Secundária | Logo ORVIX quadrada | `quadrada` | Perfis, uso circular, espaço quadrado ou estreito, ou para destacar o X. Com cautela. |
| Terciária | Logo ORVIX, X com detalhe mínimo | `detalhe-minimo` | O X com a perna sólida e uma perna pontilhada só, sem transparência. |
| Terciária | Logo ORVIX, sem detalhes | `sem-detalhes` | Bordado e recortes muito pequenos: o X não tem nenhum detalhe. |
| Terciária | Logo ORVIX para vídeos | `video` | A principal preparada para animação. Nunca em peça estática. |
| Elemento | Elemento X da ORVIX | `elemento-x` | O símbolo X sozinho. |
| Elemento | Elemento ORVIX | `elemento` | As três pernas pontilhadas sozinhas, como grafismo. |
| Submarca | Logo Clube ORVIX | `clube` | Programa de relacionamento. O X segue as mesmas regras de perna. |

O card **Logo: hierarquia** detalha cada uma das oito logos em bloco próprio (papel, quando usar, o que nunca fazer, pernas, mínimo, proporção); o card **Logo: uso** é o guia de decisão em quatro passos.

**Regra de escolha:** use a principal. A quadrada entra só quando a principal ficaria pequena demais ou o espaço for quadrado ou estreito. As terciárias entram quando a produção não consegue reproduzir os pontos ou a transparência do X. **Nunca** usar o X com todas as pernas pontilhadas em cor sólida, sem transparência: sem a diferença de transparência entre as pernas os pontos viram uma bagunça visual. Quando a transparência não pode ser reproduzida, troca-se de versão em vez de adaptar a principal.

### Como todo arquivo está montado

Todos têm uma única camada, `ARTE`, com até três grupos:

| Grupo | O que é | Peças |
|---|---|---|
| `X` | O símbolo | `X_PERNA_DIREITA_SOLIDA` e as pernas pontilhadas `P1`, `P2`, `P3` |
| `ORVI` ou `ORVIX` | O nome | `O`, `R`, `V`, `I` e, quando o X é letra inteira, `X_LETRA` |
| `AGROQUIMICA` | A assinatura | Uma peça por letra (`A1_DE_AGROQUIMICA` a `A2_DE_AGROQUIMICA`; letra repetida leva número na ordem de leitura) |

**Pernas do X:** `X_PERNA_DIREITA_SOLIDA` é a perna cheia, à direita. `P1`, `P2`, `P3` são as pernas pontilhadas, da esquerda para a direita: P1 a mais apagada, P2 a do meio, P3 a vizinha da perna sólida (100%). **Opacidade:** na logo principal P1 tem 20% e P2 tem 50%; em todas as outras versões P1 tem 30% e P2 tem 60%. Os pontos são `P1.1`, `P1.2` e assim por diante, de cima para baixo e da esquerda para a direita; P1 e P2 têm 60 pontos cada, P3 tem 51 porque a perna sólida ocupa o lugar dos outros 9. Os pontos extras `P3.101` a `P3.109` completam a perna 3 e existem só na versão para vídeos e no Elemento ORVIX. Na versão para vídeos a assinatura está a 60%.

Os arquivos entregues chegaram sem os estilos de opacidade (as classes `cls-1` e `cls-2` estavam vazias, o que renderizava as três pernas sólidas). Os SVGs deste sistema trazem a opacidade declarada no próprio grupo (`<g id="P1" opacity="0.2">`), por isso qualquer consumidor os lê certo. A **Logo Clube ORVIX** recebeu a mesma estrutura: 144 pontos foram agrupados em `P1` (48, 30%), `P2` (48, 60%) e `P3` (51, 100%), mais a perna sólida e os grupos `CLUBE` e `ORVIX`.

### Logos sem assinatura

As quatro logos com nome (principal, quadrada, X com detalhe mínimo e sem detalhes) existem também **sem a escrita AGROQUÍMICA na base**, em preto puro e em branco puro: `assets/logos/<nome>-sem-assinatura-preto.svg` e `-branco.svg`, `Logo variant="principal-sem-assinatura"`, `quadrada-sem-assinatura`, `detalhe-minimo-sem-assinatura` e `sem-detalhes-sem-assinatura`. A anatomia do X e as regras de perna são as mesmas da versão completa (principal 20/50/100, as demais 30/60/100). Use-as onde AGROQUÍMICA ficaria ilegível ou redundante: alturas pequenas em tela (abaixo de 32px na principal), header compacto, selo, assinatura de vídeo e peças em que o descritor já aparece por perto. A hierarquia de escolha é a mesma: principal primeiro. Card: Logos sem assinatura.

### Cada logo

- **Logo ORVIX principal** (horizontal, cerca de 2,4 para 1; 189 peças): ORVI em letras grandes, o X formado pelas três pernas pontilhadas e a perna sólida, e a assinatura AGROQUÍMICA embaixo na largura toda. P1 20%, P2 50%, P3 100%.
- **Logo ORVIX quadrada** (quase quadrada, cerca de 1,1 para 1; 190 peças): o X grande em cima, ORVIX completo embaixo (com `X_LETRA`) e a assinatura na base. Só quando a principal ficaria muito pequena ou o espaço for muito estreito.
- **Logo ORVIX, X com detalhe mínimo** (horizontal; 69 peças): perna sólida e só a P3, sem transparência. Para produção que reproduz uma perna pontilhada, mas não três com transparência.
- **Logo ORVIX, sem detalhes** (horizontal; 18 peças): ORVIX com o X como letra inteira, sem nenhum ponto. Bordado e recorte muito pequeno.
- **Logo ORVIX para vídeos** (igual à principal; 198 peças): a principal com os 9 pontos extras da perna 3 escondidos atrás da perna sólida, para a animação. P1 30%, P2 60%, assinatura 60%.
- **Elemento X da ORVIX** (172 peças): só o símbolo. Assinatura reduzida onde o nome ORVIX já aparece por perto.
- **Elemento ORVIX** (180 peças): só as três pernas pontilhadas, com a perna 3 completa. Grafismo de apoio.
- **Logo Clube ORVIX**: X com as pernas no padrão 30/60/100, perna sólida, e as palavras CLUBE e ORVIX.

### Uso em tela

- Em tema escuro a logo é **branca**; em tema claro, **preta**. Nunca verde, cinza ou cor de produto.
- A logo é **monocromática por inteiro**: nunca um único elemento em outra cor (um X verde, por exemplo). O que varia dentro dela é só a transparência das pernas, como especificado. `WordmarkType` segue a mesma regra.
- **Tamanhos mínimos** (card Logo: tamanhos mínimos). Com a escrita AGROQUÍMICA, abaixo destes tamanhos ela some: 80px de altura na principal e na de vídeo, 64px no X com detalhe mínimo e no Clube ORVIX, 48px na sem detalhes, 144px na quadrada. O X pontilhado sem a escrita também tem mínimo, porque abaixo dele os pontos se deformam: 32px na principal sem assinatura, no X com detalhe mínimo sem assinatura e no Elemento X, 40px na quadrada sem assinatura. Abaixo disso, use só a escrita ORVIX, sem nenhum detalhe no X (`sem-detalhes-sem-assinatura`), que é a logo na fonte correta, até 12px.
- Área de proteção: a altura do X em toda a volta (`Logo protect`).
- Sobre foto, sempre com scrim ou cápsula de vidro.
- Header e rodapé: `Logo variant="principal-sem-assinatura" size="md"` (32px no header). Favicon e avatar: `elemento-x` ou `quadrada`. Fechamento de página (`FechamentoCTA`): principal a 112px (96px no celular), no lugar de qualquer grafismo.

---

### Mapas com ponto de referência (instrução, sem componente)

O design system não traz mapa pronto nem o reproduz. Quando uma peça pedir mapa de presença, atuação ou cobertura, monte-o seguindo estas regras:

- **Malha de hexágonos.** O território vira uma malha regular de hexágonos com a ponta para cima, todos do mesmo tamanho. Cada hexágono ocupa cerca de 82% do passo, e o respiro entre eles mostra o fundo como um fio. Não se desenha nenhuma linha de divisa: o contorno do estado nasce da própria malha, com os hexágonos da borda encolhidos.
- **Base cinza, tom sobre tom.** O estado em foco fica num cinza um tom acima do fundo: no escuro, `#2D373B` sobre `#252F37`; no claro, `#C8CFD4` sobre `#DCE1E4`. Estados vizinhos e países ficam no tom do fundo e perdem opacidade com a distância (até cerca de 5%), para o olhar ficar no estado.
- **Áreas de destaque: o degradê é obrigatório.** Todo ponto de referência (matriz, escritório, município atendido) acende os hexágonos ao redor em verde-500 (`#13A538`). O verde é forte no núcleo e cai com a distância, numa curva suave (expoente ~1,7). O raio do halo é proporcional ao menor lado do mapa: 14% na matriz, 10% no escritório e 7% no município. Varie o raio em ±18% de hexágono para hexágono, para a mancha não virar um círculo perfeito. Abaixo de 12% de intensidade o hexágono volta ao cinza, sem véu esverdeado sobre o mapa inteiro. Mapa com ponto de referência sem esse degradê está errado.
- **Hexágonos das sedes.** O hexágono mais próximo de cada sede cresce: 1,5× na matriz, 1,12× no escritório.
  - Matriz: branca no escuro e verde-800 (`#0A591E`) no claro. Leva um brilho radial suave e um anel fino que sai devagar (2,6 s) e se desfaz.
  - Escritório: verde-300 no escuro e verde-700 a 78% no claro.
  - "Em breve": a 55% no escuro e a 38% no claro.
- **Cor.** O verde é a única cor do mapa. Nunca âmbar, amarelo ou escala de calor colorida. No claro, nunca preto nem verde claro vivo.
- **Legenda e lista.**
  - Legenda curta em caption: Matriz, Escritório, Área de atuação.
  - Os municípios aparecem como chips com hairline. Ao passar o mouse ou focar, o halo correspondente pulsa por 0,55 s. Alvo de toque de 44px.
- **Movimento.** Só o anel da matriz e o pulso do município destacado. Respeite o movimento reduzido e pare a animação fora da tela.
- **Bordas.** Quando o mapa é fundo de slide, pode levar um véu elíptico nas bordas (máscara radial), sumindo para o fundo.

---

## 7. Movimento

**A ORVIX não usa elementos animados de calda.** O antigo conjunto de canvas (`MixMotion` e as suas variantes) foi retirado do sistema: partículas e correntes em movimento não pertencem à linguagem da marca, que é o **pontilhado adensado e parado**, o elemento X oficial e o alvo. Onde antes entrava um elemento animado, entra o fundo pontilhado parado (`.ovx-pontos-fundo`), o `XMark` ou o `TargetMark`.

O movimento que existe é funcional, como pede a Apple HIG:
- **Estados de controle:** hover, press e foco em 120 a 200 ms (`--dur-fast`), curva de precisão (`--ease-precise`), sem quique nem elástico.
- **Entrada de conteúdo:** só opacidade e deslocamento curto (até 8px), uma vez, ao entrar na tela.
- **Pulso pontual:** o núcleo do `TargetMark` com `live` pulsa uma vez por tela, para indicar um alvo ativo.
- **Reduce Motion:** com `prefers-reduced-motion`, tudo isso é desligado e o conteúdo aparece pronto.
- **Nada em loop** decorativo competindo com a leitura; nada se move sem que o usuário tenha causado ou precise saber.

Infográfico que represente algo real (gota, folha, bico, leque) segue a forma real, como manda a seção de fidelidade de forma (`FormaReal`).

---|---|---|
| 18 | Corrente Helicoidal | FLX-18 |
| 20 | Varredura de Alvo | ALV-20 |
| 22 | Deposição no Alvo | ALV-22 |
| 25 | Absorção Foliar | CUT-25 |
| 26 | Trilhas de Moléculas | MOL-26 |
| 31 | Gradiente de pH | PHG-31 |
| 34 | Descontaminação | INC-34 |

Paleta institucional em todos: verde de marca, claro ORVIX e cinzas frios. `gradiente-de-ph` é a única exceção, por representar a escala de cor da linha SOLV.

---

## 8. Índice do sistema

| Caminho | O que é |
|---|---|
| `tokens.json` | Todos os tokens: cores nos temas `dark` e `light`, tipografia, espaçamento, raios, sombras, movimento. `tokens.css` é gerado |
| `components/bundle.css` | Estilos de todos os componentes, prefixo `ovx-` |
| `components/bundle.js` | Bundle React (`window.ORVIXDesignSystem_019de6`). Inclui `ovxAsset(base, path)`, que resolve as logos a partir do asset store; um consumidor fora do artifact passa `base` apontando para a pasta onde copiou `assets/` |
| `components/src/` | Fontes JSX: `components/*`, `sections/HomeSections.jsx`, `ui_kits/*` |
| `components/<Card>/preview.html` | Páginas de especificação e de componente, todas sobre `.ovx-stage` |
| `components/Cover/preview.html` | Capa do sistema |
| `fonts/` | Exo e Be Vietnam Pro, 12 TTF |
| `assets/logos/` | As oito logos oficiais mais as quatro sem assinatura, em preto e em branco, no asset store |
| `assets/Pontilhado/` | As nove referências do padrão pontilhado ORVIX sobre imagem (FP-01 a FP-09) |
| `ui_kits/` | Guias das recriações de tela (site e painel) |
| `templates/` | Starters da versão standalone, mantidos como estavam |

### Componentes do bundle

| Grupo | Exports |
|---|---|
| `foundation/` | `Icon`, `ORVIX_ICONS`, `iconSvg` |
| `actions/` | `Button` (xs, sm, md), `IconButton`, `ButtonGroup`, `LinkAction` |
| `forms/` | `Field`, `Input`, `Textarea`, `Select`, `SearchField`, `Checkbox`, `Radio`, `Switch`, `Slider`, `Fieldset` |
| `data-display/` | `Card`, `CardHeader`, `GlassPanel`, `Stat`, `StatGrid`, `DataTable`, `KeyValue`, `Badge`, `Tag`, `Meter`, `ProgressRing`, `Divider` |
| `navigation/` | `Navbar`, `SidebarNav`, `Tabs`, `Breadcrumbs`, `Pagination`, `StepFlow`, `SiteFooter` |
| `feedback/` | `Alert`, `Toast`, `ToastStack`, `Tooltip`, `Dialog`, `Skeleton`, `Spinner`, `EmptyState`, `InlineStatus` |
| `brand/` | `Logo`, `PadraoPontilhado`, `WordmarkType`, `Eyebrow`, `SectionHeading`, `XTexture`, `XMark`, `TargetMark`, `Callout`, `PullQuote`, `Seal`, `TerritoryBadge`, `Hashtag`, `Capsule` |
| `product/` | `ProductCard`, `LineCard`, `SpecChip`, `DoseTable`, `PhScale`, `DocLink`, `AxisTrio`, `LINE_COLORS` (`tec`, `orvclear`, `orvale`, `vix` e as famílias) |
| `sections/` | `SplitDiagonal`, `HeroPrecisao`, `ManifestoCentrado`, `TrilhaDoCiclo`, `TresEixos`, `DestaqueORV7`, `GradeDeLinhas` (4 linhas), `FaixaDeNumeros` (quatro números com nota: linhas, frentes, municípios, origem), `MarqueeTecnico`, `TerritorioMT`, `ClubeOrvix`, `EditorialBlog`, `FechamentoCTA`, `VendaDireta` |
| `ui_kits/` | `SiteApp` (home, linha, produto, blog, contato) e `PainelApp` (login, visão geral, catálogo, biblioteca, calculadora, perfil) |

---

## 9. Adições intencionais

Não existe biblioteca de componentes ORVIX. Estas primitivas foram autoradas a partir das diretrizes de marca e da especificação de site, e devem ser validadas pelo time:

| Adição | Motivo |
|---|---|
| `Icon` | Envelope para o glifo Lucide, necessário porque a marca não tem icon set |
| `TargetMark` | O alvo tecnológico é motivo declarado da marca, mas não existia como ativo |
| `PhScale` | A linha SOLV usa a escala de pH como argumento central de venda |
| `DoseTable`, `SpecChip`, `DocLink` | A ficha de produto é a página mais importante do site e precisa desses três blocos |
| `AxisTrio` | Os eixos calda, gota e alvo são o esqueleto de copy reutilizável da marca |
| `PainelCalculadora` | Ferramenta de apoio à força de venda, prevista de forma genérica na especificação |
| Rampas de 50 a 950 | O manual define pontos isolados da escala; as rampas completas foram interpoladas para uso em web |
| 14 cores secundárias de produto | Derivadas por amostragem dos renders 3D oficiais (que não fazem mais parte do sistema), porque nenhum documento as define em hex |
| Card Apple HIG e App Store | Lista de verificação para empacotar painel e site como app iOS, pedida pelo time |
| Tema claro | Pedido do time: mesmo sistema em dois temas, tom sobre tom, com os cinzas web 1 a 3 do manual |

## Starters

In the standalone version, this design system came with 3 starter template(s). Each is a small project of its own, not a part of the design system the page shows; its files are kept in this artifact as they were, under its folder, for a later migration of its own.

- **Home ORVIX**: Landing page da ORVIX em tema escuro: hero de precisão, tese do ciclo, três eixos, destaque ORV7, linhas, Clube ORVIX e fechamento. (3 files, entry `templates/home-orvix/HomeOrvix.dc.html`)
- **Painel ORVIX**: Área interna do representante: login, visão geral, catálogo técnico, biblioteca, calculadora de calda e perfil. (3 files, entry `templates/painel-orvix/PainelOrvix.dc.html`)
- **Site ORVIX**: Site público da ORVIX: home completa, página de linha, ficha de produto, blog e contato, navegáveis. (3 files, entry `templates/site-orvix/SiteOrvix.dc.html`)


---

## Consuming this system (generated — do not edit)

Every path named below is under `project/` in this design system: read `project/api/tokens.md`, not `api/tokens.md`.

`components/bundle.js` defines `window.ORVIXDesignSystem_019de6` (105 components); `components/bundle.css` is its stylesheet; `tokens.css` is every token as a CSS variable plus `@font-face` for the fonts. `components/bundle.css` reads its variables from `tokens.css`. The bundle needs `components/lib/react.production.min.js` (`window.React`), `components/lib/react-dom.production.min.js` (`window.ReactDOM`), loaded before it. Build any UI by mounting these components; never hand-build a control or draw an icon the system provides.

- **Standalone page:** inline `tokens.css` and `components/bundle.css` in a `<style>`, then the library files and `components/bundle.js` as classic scripts (a file containing `</style`, `</script` or `<!--` breaks an inline element: write the sequence `<\/style`, `<\/script` or `\x3C!--` in your copy, or load that file by URL).
- **Design canvas:** bring `components/bundle.css` and `components/bundle.js` onto the canvas in full, as the canvas type’s design-system components reference says (a server-side copy first where it offers one); load the stylesheet before the script; skip the library files (the artboard supplies React); mount with `<x-import component-from-global-scope="ORVIXDesignSystem_019de6.<Comp>" …>`.
- **Slides deck, or any surface that cannot run the bundle:** tokens and fonts — the values are on `api/tokens.md`; the deck takes `tokens.json` by file path for its colour pickers, and fonts as “Fonts” below says.

Fonts: `tokens.css` loads each font from its file, by path.

- **Design canvas:** copy `tokens.css`, `fonts/Exo-Medium.ttf`, `fonts/Exo-MediumItalic.ttf`, `fonts/Exo-Regular.ttf`, `fonts/Exo-Italic.ttf`, `fonts/Exo-ExtraBold.ttf`, `fonts/Exo-ExtraBoldItalic.ttf`, `fonts/BeVietnamPro-Regular.ttf`, `fonts/BeVietnamPro-Italic.ttf`, `fonts/BeVietnamPro-Medium.ttf`, `fonts/BeVietnamPro-MediumItalic.ttf`, `fonts/BeVietnamPro-ExtraBold.ttf` and `fonts/BeVietnamPro-ExtraBoldItalic.ttf` to the same paths under the canvas’s `project/ds/<folder>/` (`<folder>` is the folder you install this system under; `fonts/Exo-Medium.ttf` lands on `project/ds/<folder>/fonts/Exo-Medium.ttf`), in the same call that installs this system. Link that copy of `tokens.css` in the artboard’s `<head>` as `ds/<folder>/tokens.css`, or as Design’s instructions say for an artboard in a folder. If the install’s reply leaves a font out, bring that font in as for any other page.
- **Slides deck:** for each family you use in the deck (`faces` holds at most the number of typefaces Slides’ `deck-files.md` gives), install its file with the system and name the path it lands on as that family’s `src` in `project/deck.json` `faces`, under the key in the Slides column. A deck takes a font as a file only under the rule in Slides’ `fonts.md` (no space or leading underscore in its path, for two): any other font, or one kept by id, is uploaded as `fonts.md` says.
- **Any other page:** one file per family is enough (below: the upright face nearest regular weight; bold and italic synthesize). Fetch it as the fetch column says (Artifact tool `read`, that id or path as `path`), upload it as an asset (`publish`, `file_path`, `asset:true`) and declare it with an `@font-face { font-family: "<family>"; src: url(<uploaded>) }` rule.

| family | file | fetch | CSS | Slides `faces` key |
| --- | --- | --- | --- | --- |
| Exo | `fonts/Exo-Regular.ttf` (weight 400) | `read` the file with `project/` in front | `var(--font-display)` | `exo` |
| Be Vietnam Pro | `fonts/BeVietnamPro-Regular.ttf` (weight 400) | `read` the file with `project/` in front | `var(--font-body)` | `be-vietnam-pro` |

**Read, per thing:** a component’s props, parts and examples: `api/components/<Comp>.md`; token values: `api/tokens.md`; stored assets and their paths: `api/assets/<Group>.md`. After this README, fetch the cards and fonts you need in ONE message as parallel calls — none depends on another.

**Two rules.** Before you use a thing — a component, a token group, an icon, an asset — read its card from the index below; a value you did not read from a card is a guess. `tokens.json`, `manifest.json` and `design-system.json` are sources for tools: hand them over. `components/<Comp>/README.md` and `assets/<Group>/README.md` are the long-form second read a card links to; `SKILL.md` and `artifact-type/` beside them are authoring guidance, not needed to consume the system.

## Index (generated — do not edit)

**Tokens**

- `api/tokens.md` — Every token: surface, text, fill, border, palette, type, spacing, radius, shadow, motion, font-weight, other, line-height, letter-spacing. (38.9k)

**Icons and assets**

- `api/assets/Logos.md` — 24 files, by asset id. (3.6k)
- `api/assets/Pontilhado.md` — 9 files, by asset id. (2.7k)
- `api/assets/Uploads.md` — 12 files, by asset id. (1.7k)

**Components** (`api/components/<Comp>.md`, 186; 81 of them showcase pages)

- **Ações**: `Button` — Ações da ORVIX: Button (verde primário sólido, contorno secundário, vidro só sobre foto), IconButton, ButtonGroup e LinkAction (link com seta que avança) · `Actions` (showcase page) — Vidro em todas as variantes, verde translúcido que ganha corpo no hover, três tamanhos
- `IconButton` — IconButton · `ButtonGroup` — ButtonGroup · `LinkAction` — LinkAction · `WordmarkType` — WordmarkType · `Eyebrow` — Eyebrow · `SectionHeading` — SectionHeading · `XTexture` — XTexture · `XMark` — XMark · `TargetMark` — TargetMark · `Callout` — Callout · `PullQuote` — PullQuote · `Seal` — Seal · `TerritoryBadge` — TerritoryBadge · `Hashtag` — Hashtag · `Capsule` — Capsule · `CardHeader` — CardHeader · `GlassPanel` — GlassPanel · `Stat` — Stat · `StatGrid` — StatGrid · `DataTable` — DataTable · `KeyValue` — KeyValue · `Badge` — Badge · `Tag` — Tag · `Meter` — Meter · `ProgressRing` — ProgressRing · `Divider` — Divider · `Toast` — Toast · `ToastStack` — ToastStack · `Tooltip` — Tooltip · `Dialog` — Dialog · `Skeleton` — Skeleton · `Spinner` — Spinner · `EmptyState` — EmptyState · `InlineStatus` — InlineStatus · `Input` — Input · `Textarea` — Textarea · `Select` — Select · `SearchField` — SearchField · `Checkbox` — Checkbox · `Radio` — Radio · `Switch` — Switch · `Slider` — Slider · `Fieldset` — Fieldset · `SidebarNav` — SidebarNav · `Tabs` — Tabs · `Breadcrumbs` — Breadcrumbs · `Pagination` — Pagination · `StepFlow` — StepFlow · `SiteFooter` — SiteFooter · `LINE_COLORS` — LINE_COLORS · `LineCard` — LineCard · `SpecChip` — SpecChip · `DoseTable` — DoseTable · `PhScale` — PhScale · `DocLink` — DocLink · `AxisTrio` — AxisTrio · `HeroPrecisao` — HeroPrecisao · `ManifestoCentrado` — ManifestoCentrado · `TrilhaDoCiclo` — TrilhaDoCiclo · `TresEixos` — TresEixos · `DestaqueORV7` — DestaqueORV7 · `GradeDeLinhas` — GradeDeLinhas · `FaixaDeNumeros` — FaixaDeNumeros · `MarqueeTecnico` — MarqueeTecnico · `TerritorioMT` — TerritorioMT · `ClubeOrvix` — ClubeOrvix · `EditorialBlog` — EditorialBlog · `FechamentoCTA` — FechamentoCTA · `VendaDireta` — VendaDireta · `PainelLogin` — PainelLogin · `PainelVisaoGeral` — PainelVisaoGeral · `PainelCatalogo` — PainelCatalogo · `PainelBiblioteca` — PainelBiblioteca · `PainelCalculadora` — PainelCalculadora · `PainelPerfil` — PainelPerfil · `PainelApp` — PainelApp · `ScreenHome` — ScreenHome · `ScreenLinha` — ScreenLinha · `ScreenProduto` — ScreenProduto · `ScreenBlog` — ScreenBlog · `ScreenContato` — ScreenContato · `ScreenTecnologia` — ScreenTecnologia · `SiteApp` — SiteApp
- **Logo**: `Logo` — Marca ORVIX: Logo, WordmarkType, Eyebrow, SectionHeading, XTexture/XMark, TargetMark (alvo tecnológico), Callout, PullQuote, Seal, TerritoryBadge, Hashtag, Cap… · `LogoHierarquia` (showcase page) — As oito marcas oficiais, uma a uma, em bloco próprio: papel, quando usar, o que nunca fazer, pernas e opacidades, tamanho mínimo, proporção e arquivo · `LogoPernas` (showcase page) — Perna sólida à direita e três pernas pontilhadas (P1, P2, P3) com opacidade crescente: 20/50/100 na logo principal, 30/60/100 em todas as outras · `LogoSemAssinatura` (showcase page) — As quatro logos (principal, quadrada, X com detalhe mínimo e sem detalhes) sem a escrita AGROQUÍMICA na base, em preto puro e branco puro · `LogoTamanhoMinimo` (showcase page) — A logo ORVIX tem escrita pequena (AGROQUÍMICA) e um X feito de pontos · `LogoUso` (showcase page) — Guia de decisão em quatro passos: comece pela principal; espaço pequeno, quadrado ou estreito; produção que não reproduz pontos ou transparência; foto, grafism…
- **Marca**: `Brand` (showcase page) — Os elementos de marca em uso, um bloco por elemento: logo (sempre monocromática, o tema escolhe branco ou preto), eyebrow, cabeçalho de seção, callout, citação… · `BrandAlvo` (showcase page) — Elemento terciário
- **Padrões de Fundo**: `PadraoPontilhado` — Malha de pontos em colmeia, adensada e parada na tela: 5 px entre centros no tom sobre tom (pontos de 0,6 a 1,5 px) e 11 px sobre imagem, como nas referências… · `BrandTexturaX` (showcase page) — Malha pontilhada como assinatura gráfica, grade de precisão como fundo de seção · `PadraoPontilhadoImagem` — As nove referências aprovadas em 12/10/2026 no projeto ESTRUTURALLE, para HTML e edição de vídeo · `PadraoPontilhadoSecoes` — Página · `PadroesPontos` (showcase page) — A malha de pontos da marca como padrão de fundo: densa (4px), sempre suave (claro a 6%, no máximo 10%), em versão cheia ou em degradê de transparência (vertica…
- **Dados**: `Card` — Superfícies e dados da ORVIX: Card e CardHeader, GlassPanel, Stat/StatGrid, DataTable, KeyValue, Badge, Tag, Meter, ProgressRing, Divider · `Data` (showcase page) — Card sólido, painel de vidro, números técnicos, tabela de ficha e badges
- **Feedback**: `Alert` — Feedback da ORVIX: Alert, Toast/ToastStack, Tooltip, Dialog, Skeleton, Spinner, EmptyState, InlineStatus · `Feedback` (showcase page) — Alertas por tom, toast de vidro, diálogo, skeleton e estado vazio
- **Formulários**: `Field` — Formulários da ORVIX: Field (rótulo, hint e erro), Input, Textarea, Select, SearchField, Checkbox, Radio, Switch, Slider, Fieldset · `Forms` (showcase page) — Campo escuro afundado, foco verde, escolha, alternância e escala
- **Iconografia**: `Icon` — Ícone de interface da ORVIX: conjunto Lucide embutido no bundle (ORVIX_ICONS, 120 glifos em SVG inline) e herda currentColor, para qualquer glifo de UI (ação,… · `FormaReal` (showcase page) — Regra de criação para infográficos, elementos gráficos, ícones e movimento: tudo o que representa algo real segue as formas, as proporções e as inclinações do… · `Icon2` (showcase page) — Glifo Lucide por mask-image, herda currentColor · `IconGrade` (showcase page) — Lucide, traço 2px · `IconRegras` (showcase page) — Ícone é apoio de leitura técnica, não decoração
- **Navegação**: `Navbar` — Navegação da ORVIX: Navbar (vidro fixo no topo), SidebarNav (painel interno), Tabs, Breadcrumbs, Pagination, StepFlow, SiteFooter · `Navigation` (showcase page) — Navbar de vidro, abas, trilha, paginação e fluxo de etapas
- **Produto**: `ProductCard` — Produto ORVIX: ProductCard, LineCard, SpecChip, DoseTable, PhScale, DocLink, AxisTrio (calda, gota, alvo) · `LinhasProduto` (showcase page) — LinhasProduto · `Product` (showcase page) — Cor secundária por linha, ficha rápida, doses e documentos
- **Seções de Home**: `HomeSections` — Padrões de seção da home da ORVIX, prontos para montar uma página inteira em tema escuro · `ClubeOrvix2` (showcase page) — Regra-âncora de pontos e a mecânica em quatro passos · `DestaqueOrv7` (showcase page) — Produto-âncora com o 7 gigante ao fundo e ficha rápida · `EditorialBlog2` (showcase page) — Grade de artigos com capas em movimento · `FaixaNumeros` (showcase page) — Números do portfólio entre duas hairlines · `FechamentoCta` (showcase page) — Alvo tecnológico, CTA duplo e a hashtag da comunidade · `GradeLinhas` (showcase page) — Seis linhas, cada card com a cor secundária da sua linha · `HeroPrecisao2` (showcase page) — Full-bleed com o pontilhado adensado da marca, parado, entrando na inclinação da perna do X, e dois CTAs · `Manifesto` (showcase page) — Tese da marca sobre textura pontilhada, fechada por callout · `MarqueeTecnico2` (showcase page) — Vocabulário agronômico em rolagem contínua, conector entre seções · `Sections` (showcase page) — As 13 seções da home na ordem canônica, com o padrão de fundo de cada uma · `TerritorioMt` (showcase page) — Bandeira de Mato Grosso e o claim de origem · `TresEixos2` (showcase page) — Ações de calda, de gota e no alvo em grade de três · `TrilhaCiclo` (showcase page) — Cinco etapas da aplicação com fluxo animado na base · `VendaDireta2` (showcase page) — Vantagens da compra direta e portfólio completo
- **Acessibilidade**: `A11yContraste` (showcase page) — WCAG AA em todo texto · `AppleHIG` (showcase page) — Regra zero da ORVIX: toda peça, tela ou ação já nasce conforme as Human Interface Guidelines e as App Store Review Guidelines
- **Cores**: `ColorBranco` (showcase page) — Principais: branco (#FFFFFF) e preto ORVIX (#101720, nunca o preto absoluto) · `ColorContraste` (showcase page) — Pares medidos (WCAG 2) · `ColorEstados` (showcase page) — O verde nunca vira alerta: sucesso é o único tom verde · `ColorGrafite` (showcase page) — Rampa de cinzas azulados frios (100 a 1000) para superfícies e texto de apoio do tema escuro · `ColorSuperficies` (showcase page) — Dois temas (dark padrão, light) com as mesmas camadas: bg-deep, bg, surface-1 a surface-4 · `ColorTexto` (showcase page) — Quatro níveis de leitura sobre superfície escura · `ColorTransparencia` (showcase page) — A marca prefere opacidade sobre os dois tons-base a criar novos hexadecimais · `ColorVerde` (showcase page) — Rampa completa da única cor saturada da marca · `Temas` (showcase page) — data-theme="dark" (padrão) e data-theme="light", no html ou em qualquer bloco · `TomSobreTom` — A regra de camadas da ORVIX: toda caixa à frente de outra é sempre um pouco mais clara que a de trás
- **Cores de Produto**: `ColorPh` (showcase page) — Única gradiente multicolor do sistema · `ColorProduto` (showcase page) — Existem para salientar um produto ou linha, nunca para vestir a interface · `ColorRegraProduto` (showcase page) — Uma cor de produto por bloco, sempre com o verde institucional na ação
- **Dado Técnico**: `DadoTecnico` (showcase page) — Vírgula decimal, unidade separada por espaço, faixa com a palavra a
- **Layout e Grid**: `DivisaoDiagonal` (showcase page) — A ORVIX nunca divide uma tela em linha reta · `LayoutBreakpoints` (showcase page) — Mobile primeiro · `LayoutContainer` (showcase page) — 1280px de largura máxima, gutter 20px, prosa em 680px
- **Elevação e Sombra**: `ElevFoco` (showcase page) — Halo curto de 3px no foco · `ElevHairline` (showcase page) — A separação entre blocos vem da linha de 1px com uma sombra baixa e suave: --shadow-1 ou, no máximo, --shadow-2 · `ElevSombras` (showcase page) — Sombras curtas e próximas
- **Vidro e Blur**: `GlassAcao` (showcase page) — Botão, cápsula e card de vidro só existem sobre foto ou fundo irregular, porque o vidro depende do que aparece por trás dele · `GlassDensidades` (showcase page) — Três densidades mais a variante verde · `GlassScrim` (showcase page) — Sobre foto o contexto é sempre escuro, em qualquer tema: scrim sutil em preto ORVIX só na área do texto (.ovx-scrim-bottom, .ovx-scrim-top), texto branco e cáp…
- **Painel ORVIX**: `Index` (showcase page) — Login, visão geral, catálogo técnico, biblioteca, calculadora de calda e perfil
- **Site ORVIX**: `Index2` (showcase page) — Home, linha, produto, blog e contato, navegáveis
- **Estados**: `MotionEstados` (showcase page) — O verde da ação entra a 20% e sobe a 62% no hover
- **Prosa Técnica**: `ProsaTecnica` (showcase page) — Prosa em 680px, marcador verde, citação com barra verde de 2px
- **Raios**: `RadiusEscala` (showcase page) — Levemente arredondado: nunca quadrado, nunca pílula em superfície · `RadiusUso` (showcase page) — Controle 6px, card 10px, painel 14px, superfície 18px
- **Rodapé**: `RodapeAssinaturas` (showcase page) — DESIGNED BY XERXIZ.COM, UMA EMPRESA 3F Group, Política e Termos
- **Espaçamento**: `SpaceEscala` (showcase page) — Base 4px · `SpaceSecao` (showcase page) — Quatro alturas de respiro entre blocos de página · `SpaceUso` (showcase page) — Card canônico: padding 20, gap 12, rodapé separado por hairline
- **Tabelas**: `TabelaChaveValor` (showcase page) — Ficha rápida de produto: rótulo à esquerda, dado alinhado à direita · `TabelaFicha` (showcase page) — Cabeçalho em Exo caixa-alta, hairline entre linhas, numerais tabulares
- **Escala Tipográfica**: `TypeCorpo` (showcase page) — Be Vietnam Pro, altura de linha 1,6 · `TypeDisplay` (showcase page) — Exo ExtraBold em caixa alta · `TypeTitulos` (showcase page) — Todo título em Exo ExtraBold, caixa alta
- **Tipografia**: `TypeLabels` (showcase page) — Exo caixa-alta com tracking largo · `TypeNumerico` (showcase page) — Numerais tabulares em toda ficha, dose e tabela · `TypePar` (showcase page) — Exo ExtraBold em título e nome de produto
- **Voz e Tom**: `VozExemplos` (showcase page) — Frases oficiais da marca, prontas para diagramar · `VozVocabulario` (showcase page) — Voz técnica, fria e precisa
