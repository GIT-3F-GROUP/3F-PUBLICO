Sistema visual e verbal do **3F Group**. O grupo aparece em segundo plano: dá coesão e respaldo institucional às empresas e deixa cada uma protagonizar. A identidade é minimalista e compacta: preto sobre branco, uma única família tipográfica, texto contido, espaço organizado e um único verde, usado com parcimônia.

**O agro se constrói com gente de confiança.** Esta é a frase institucional do grupo.

## Regras de ouro

Estas doze regras valem para toda peça digital. Na dúvida, elas decidem.

1. **Monte com o catálogo.** Toda tela e toda peça saem dos componentes e seções listados em "Catálogo". O que não está lá não se inventa: compõe-se com o que existe.
2. **Cor só por token.** Nenhum valor de cor escrito à mão. Em interface, use os tokens de tema (`fundo`, `superficie`, `texto`, `borda`, `acao`, `acento`).
3. **Claro e escuro, sempre os dois.** Toda peça de interface funciona nos dois temas sem ajuste manual.
4. **Uma família, quatro pesos.** Be Vietnam Pro em 400, 500, 700 e 800.
5. **Texto entre 11 e 60px.** O de 60px aparece uma vez por página.
6. **Espaço em múltiplos de 4**, até 96px. O espaço organiza; a linha só entra quando o espaço não basta.
7. **Cantos levemente arredondados:** 6px em chip e selo, 8px em botão e campo, 12px em cartão. Pílula fica fora.
8. **Preto, branco e cinza carregam a marca.** O verde entra no logo e nos estados; nunca em botão, título ou fundo de seção.
9. **Uma ação primária por bloco** e uma ideia por seção.
10. **Vidro só no que flutua**, uma camada por vez.
11. **Movimento uma vez só**, curto, e desligado quando o sistema pede.
12. **A marca é o arquivo oficial**, na versão certa para o fundo. Não se redesenha, não se recolore.

O sistema serve a quatro superfícies:

1. **Portal público** (`3f.group`) e sites institucionais: fundo limpo, texto de alto contraste, bordas de 1px, sem sombra. Tema claro por padrão, com tema escuro pronto.
2. **Área interna** (`/painel`, `/admin`): tom sobre tom. Página em `i-bg`, cartões brancos com `sombra-cartao`, campos em `i-s2`.
3. **BI** (`/bi`): mesmas camadas da área interna, com tema claro e escuro (tokens `bi-*`).
4. **Aplicativos Apple** (iPhone, iPad, Mac): as mesmas cores, a mesma família e as mesmas regras, nos limites da seção "Aplicativos Apple".

## Voz e texto

- A frase institucional é "O agro se constrói com gente de confiança." Use-a inteira, com ponto final, em capas, aberturas e assinaturas.
- Os valores que sustentam a fala do grupo são confiança e caráter: texto realista e honesto, que só afirma o que o campo confirma.
- O propósito: servir o agro com confiança e caráter, unindo as pessoas que trabalham em torno dele, em indústrias e empresas de serviço que beneficiam o homem do campo.
- A frase "Sete empresas. Um propósito." foi aposentada e não entra em material novo.
- Escreva em português do Brasil com acentuação completa.
- Tom institucional, sóbrio e claro. Fale pelo conjunto das empresas e deixe cada empresa protagonizar a própria história.
- Use vocabulário agronômico preciso ao descrever as empresas: "tecnologia de aplicação agrícola", "melhoramento genético de milho", "consultoria agronômica de campo".
- Ancore no território: Sorriso, MT, o Norte do Mato Grosso, o cerrado.
- Frases curtas, com ponto final: "Foco. Força. Fé."
- Prefira afirmações positivas. Diga o que a empresa faz.
- Pontue com vírgula, ponto, dois-pontos ou parênteses. Travessão fica fora de todo texto público.
- Emoji fica fora de todo material.
- Caixa alta só em sobretítulos e rótulos curtos, sempre com espaçamento de letras aberto (`eyebrow`, `micro`). Títulos e botões vão em caixa de frase: "Conheça as empresas", "Ver todas", "Ler o blog".
- Sobretítulos com mais de um termo separam por ponto mediano: "SORRISO, MT · BRASIL".
- A empresa fala em "nós". O leitor é convidado pelo imperativo de cortesia: "Conheça", "Leia".
- Todo horário exibido segue o fuso de Sorriso e Cuiabá (`America/Cuiaba`).

## Temas

- Há dois temas, claro e escuro, trocados pelo atributo `data-theme="light"` ou `data-theme="dark"` em qualquer elemento. Tudo o que está dentro dele acompanha.
- Os tokens de tema fazem a troca sozinhos:

| Papel | Token | Claro | Escuro |
|---|---|---|---|
| Página | `fundo` | branco | quase preto |
| Seção alternada | `fundo-2` | `web-1` | um degrau acima |
| Cartão, campo, menu | `superficie` | branco | um degrau acima da página |
| Hover e fundo neutro | `superficie-2` | `web-1` | dois degraus acima |
| Linha | `borda` | `web-2` | cinza escuro |
| Texto principal | `texto` | preto | quase branco |
| Texto de apoio | `texto-2` | preto a 70% | cinza claro |
| Metadado | `texto-3` | preto a 60% | cinza médio |
| Botão primário | `acao` com `sobre-acao` | preto com branco | claro com escuro |
| Estado positivo | `acento`, `acento-fundo` | verde profundo | verde 3F |
| Atenção | `aviso`, `aviso-fundo` | âmbar escuro | âmbar claro |
| Erro | `perigo`, `perigo-fundo` | vermelho | vermelho claro |

- O que é preto nos dois temas: rodapé, seção preta, bloco de código e peças de marca sobre preto.
- A marca embutida na interface (`.logo-3f`) acompanha o tema: colorida no claro, branca no escuro. Em peça de fundo fixo, escolha a versão pelo fundo: colorida ou escura sobre claro, branca sobre escuro.
- Todo par de texto e fundo dos tokens de tema guarda pelo menos 4,5:1 nos dois temas.

## Cor

- Monte toda tela pública com `branco`, `preto` e a escala `web-1`, `web-2`, `web-3`. Texto principal em `preto` sobre `branco`.
- Texto secundário é o preto em opacidade: `preto-70` para lead e parágrafo de cartão, `preto-60` para sobretítulo, metadado e placeholder, `preto-80` para chip.
- `preto-60` é o piso de todo texto sobre branco. `preto-50` e `preto-40` ficam para linhas e elementos decorativos.
- Todo par de texto e fundo guarda pelo menos 4,5:1 de contraste; texto a partir de 18px ou em negrito, pelo menos 3:1. Confira nos dois temas.
- Cor nunca carrega informação sozinha: estado, alerta e variação levam também palavra, seta ou ícone.
- Hierarquia no portal vem de borda `web-2` de 1px e de fundo `web-1`. Sombra fica para menus suspensos (`sombra-menu`).
- O `verde-3f` vive dentro do logo e nos **estados** da interface: halo e contorno de foco (`foco-halo`, `foco-contorno`), seleção de texto (`selecao`), checkbox e radio, filtro aplicado (`filtro-fundo`, `filtro-borda`). Botões, títulos e texto institucional permanecem pretos.
- Verde como texto sobre fundo claro usa sempre `verde-texto`. O `verde-3f` puro só é texto sobre fundo escuro (BI escuro).
- Fundo preto aparece no rodapé e no botão primário. Sobre ele use `branco`, `branco-80`, `branco-70` e `branco-50`, com divisor `branco-15`.
- Na área interna e no BI, empilhe camadas em vez de contornos: `bi-bg`, depois `bi-s1`, `bi-s2`, `bi-s3`. Texto em `bi-tx` e `bi-tx2`; `bi-tx3` só em informação que já aparece de outra forma.
- Vermelho (`bi-verm`) só comunica variação negativa ou alerta, sempre junto de seta, sinal ou palavra.
- Imagens em preto e branco ou em tons neutros, sempre que possível.

## Tipografia

- **Be Vietnam Pro** é a única família, em todos os contextos. Pesos: 400, 500, 700 e 800, com itálicos. Pesos finos (100 a 300) ficam fora.
- **Nenhum texto passa de 60px.** O maior título do sistema é `titulo-hero`, com 60px. **Nenhum texto fica abaixo de 11px.**
- A escala é curta e contida:

| Estilo | Tamanho | Entrelinha | Peso | Uso |
|---|---|---|---|---|
| `titulo-hero` | 60px (40px no celular) | 1.05 | 800 | Uma vez por página, na abertura |
| `titulo-pagina` | 48px (32px no celular) | 1.05 | 800 | Título de página interna |
| `titulo-secao` | 36px (28px no celular) | 1.1 | 800 | Título de seção |
| `titulo-bloco` | 24px | 1.25 | 800 | Título de bloco e de painel |
| `titulo-cartao` | 18px | 1.35 | 700 | Título de cartão e de item de lista |
| `lead` | 18px | 1.6 | 400 | Parágrafo de abertura |
| `corpo` | 16px | 1.5 | 400 | Texto corrido |
| `corpo-sm` | 14px | 20px | 400 | Texto de interface |
| `rotulo` | 12px | 16px | 500 | Chip, botão compacto, metadado |
| `eyebrow` | 12px | 16px | 700 | Sobretítulo em caixa alta, 0.22em |
| `micro` | 11px | 16px | 500 | Rótulo mínimo em caixa alta, 0.12em |

- A hierarquia vem de peso e de espaço, não de tamanho: um título de seção de 36px sobre um corpo de 16px já basta. Evite saltar mais de dois degraus entre um título e o texto logo abaixo dele.
- 800 para títulos, 700 para sobretítulos, rótulos em caixa alta e títulos de cartão, 500 para botões, chips e navegação, 400 para texto corrido. Itálico é editorial: citação e ênfase pontual.
- Títulos com `letter-spacing: -0.025em`. Use `text-wrap: balance` em títulos e leads.
- Bloco de leitura com 60 a 75 caracteres por linha: `leitura` (48rem) para página, `prosa` (68ch) para artigo, 36rem para lead.
- Três linhas ou mais de texto nunca usam entrelinha abaixo de 1.4.
- O corpo liga os recursos OpenType `ss01` e `cv11` e a suavização de fonte.
- Artigos do blog: títulos em 800, link sublinhado com afastamento de 3px, legenda em `prosa-legenda`, bloco de código com fundo `preto` e texto `web-1`.

## Layout e espaço

Compacto não é comprimido: o texto é contido e o espaço entre os blocos é que organiza a página.

- Todo espaçamento é múltiplo de 4px e sai da escala `space-*`. Dentro de um componente, passos curtos (`space-2` a `space-4`); entre componentes de um mesmo bloco, `space-6` a `space-8`; entre blocos de uma seção, `space-12`; entre seções, `space-16` a `space-20`.
- Regra de proximidade: o espaço acima de um título é sempre maior do que o espaço abaixo dele. Sobretítulo a `space-3` do título; título a `space-4` do texto; texto a `space-8` das ações.
- Toda tela abre com o contêiner: largura máxima `container` (80rem), centralizado, margem lateral `space-6` e, a partir de `sm`, `space-8`.
- Seções se separam por `border-top` em `web-2` e recuo vertical de `space-16` no celular e `space-20` a partir de `md`. O hero usa `space-16` e `space-24`.
- Cartão com recuo `space-6`; cartão amplo, `space-8`. Vão entre cartões soltos, `space-6`.
- Grades de cartões do portal são grades de 1px: `gap: 1px` sobre fundo `web-2`, células em `branco`, moldura `web-2`. Cantos retos.
- Alinhe à esquerda. Centralizado só em capa e em estado vazio.
- Uma ideia por seção e uma ação primária por bloco.
- Cabeçalho fixo no topo, altura `cabecalho`, em vidro (ver "Vidro"). O menu de desktop entra em `lg`.
- Rodapé em `preto`, com `space-24` de margem acima e `space-16` de recuo vertical, grade de 12 colunas (5, 4, 3).
- Em tela de toque, todo alvo tem pelo menos 44 por 44px e fica a 12px ou mais do alvo vizinho.

## Responsividade

Toda peça se adapta sozinha, de 320px de largura até telas largas. Nada tem largura fixa.

- **Grades por largura disponível.** Colunas se reorganizam conforme o espaço do contêiner: quatro viram duas, três viram uma. Use as classes `.colunas-2`, `.colunas-3`, `.colunas-4` e `.grade-1px`; não escreva número fixo de colunas.
- **Texto em `rem`.** Todo tamanho de texto está em `rem`, para acompanhar o ajuste de tamanho de letra do sistema e o zoom até 200% sem cortar.
- **Títulos fluidos.** O título de abertura vai de 40 a 60px e o de seção de 28 a 36px, de forma contínua, sem salto.
- **Espaço fluido.** O recuo vertical de seção vai de 48 a 80px e o do hero de 48 a 96px. A margem lateral é de 16px em telas estreitas, 24px a partir de 480px e 32px a partir de 768px.
- **Cabeçalho.** Quando a navegação não cabe, ela dá lugar ao botão de menu, que abre o `MenuMobile`.
- **Ações.** Em telas estreitas, os botões de hero, formulário, modal e aviso de cookies ocupam a largura toda e se empilham, com a primária em cima.
- **Tabelas** rolam na horizontal dentro da própria moldura; abas também. A página nunca rola para o lado.
- **Imagens** mantêm a proporção (16:9, 4:3 ou 1:1) e ocupam a largura do contêiner.
- **Áreas seguras.** Cabeçalho, rodapé e margens laterais respeitam o entalhe e a barra de início (`env(safe-area-inset-*)`); a página declara `viewport-fit=cover`.
- **Toque.** Em tela de toque, todo controle chega a 44px de altura, inclusive links de rodapé, caixas de marcar e itens de menu.
- **No catálogo,** cada componente aparece três vezes: claro, escuro e **Celular · 375px** (claro e escuro lado a lado, já com os alvos de toque de 44px). O desenho do celular é o mesmo código, só mais estreito.
- **Como funciona:** as regras de largura medem o contêiner da página (`body` ou `.pagina-3f`), não a janela. Um bloco posto em coluna estreita se comporta como em celular.
- **Larguras de conferência:** 320, 375, 768, 1024 e 1440px, nos dois temas, com o texto do sistema no tamanho padrão e no maior.

## Forma, borda e sombra

- Toda peça de interface tem cantos levemente arredondados. A forma de pílula, totalmente circular nas pontas, fica fora do sistema.
- Chip, etiqueta e selo: `radius-md` (6px).
- Botão, item de navegação, campo de formulário e item de menu: `radius-lg` (8px).
- Cartão e painel: `radius-xl` (12px), que é o teto para essas peças.
- `radius-full` fica restrito ao que é circular por natureza: foto de avatar e ponto indicador.
- Bordas têm 1px. No portal, `web-2`; no hover de cartão ou chip, `preto`.
- Sombras são médias e sutis: uma sombra de contato mais uma sombra difusa, como em `sombra-cartao`. Sombra elevada e dramática fica fora do sistema.
- Na área interna o cartão troca contorno por superfície mais `sombra-cartao`, e responde ao hover com `sombra-cartao-hover`. Em telas densas de gestão o cartão volta a ser plano, com `i-plano-borda`.

## Vidro

O vidro é a camada de navegação e de controle que flutua sobre o conteúdo e deixa o conteúdo passar por baixo, desfocado.

- **Onde usar:** cabeçalho fixo ao rolar a página, barra de filtros fixa, menu e popover que abrem sobre conteúdo, cartão de acesso sobre fundo escuro. Só em peças que flutuam.
- **Onde não usar:** no conteúdo. Cartão de conteúdo, seção, tabela e texto corrido ficam em superfície sólida.
- **Vidro do tema** (`.vidro`): fundo `vidro` (branco a 90% no claro, quase preto a 80% no escuro), desfoque `desfoque-vidro` (12px), borda `borda`. É o do cabeçalho.
- **Vidro escuro** (`.vidro-escuro`): fundo `vidro-escuro` (preto a 85%), desfoque `desfoque-vidro-forte` (16px) com saturação de 1.4, borda `branco-15`, texto `branco`. É o do popover de marca.
- **Véu** (`.veu`): `vidro-veu` (preto a 60%) com `desfoque-veu` (4px), atrás de modal e de imagem ampliada.
- Use o vidro com parcimônia: uma camada de vidro por vez na tela. Vidro sobre vidro fica fora do sistema.
- O texto sobre vidro guarda o mesmo contraste do texto sobre sólido. Por isso o vidro claro é quase opaco e o escuro leva texto branco.
- Menu com lista longa de texto usa fundo opaco (`branco`), não vidro.
- Com "Reduzir transparência" ligado (`prefers-reduced-transparency`), o vidro vira a cor sólida correspondente, sem desfoque. As classes já fazem isso.

## Estados

- **Foco de teclado em botão e link:** contorno de 2px sólidos em `foco-contorno` (verde), afastado 2px, com pelo menos 3:1 de contraste nos dois temas. Clique de mouse não desenha contorno.
- **Foco em campo:** borda `foco-borda` (verde) mais `foco-halo`, tanto por teclado quanto por clique. Anel preto fica fora do sistema.
- **Seleção de texto:** fundo `selecao`, cor herdada. No BI, `bi-selecao` com texto branco.
- **Hover:** botão primário vai a `preto-85`; contorno preenche de `preto` e inverte o texto; fantasma e item de menu ganham fundo `web-1`; chip e cartão de cor escurecem a borda para `preto`.
- **Desabilitado:** opacidade de 50% e cursor bloqueado.
- **Filtro aplicado:** `filtro-fundo`, `filtro-borda`, texto `verde-texto` em peso 700.

## Movimento

O movimento é feito com o pacote **Motion** (`motion`, importado de `motion/react`), o mesmo em todos os sites do grupo.

- **Surgir** é o efeito padrão: o bloco entra com opacidade de 0 a 1 e sobe 14px, em `duracao-surgir` (450ms), com a curva `curva-surgir` (`cubic-bezier(.22, 1, .36, 1)`). Dispara uma vez, quando o bloco entra na tela.

```jsx
<motion.div
  initial={{ opacity: 0, y: 14 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "0px 0px -8% 0px" }}
  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
/>
```

- Blocos em sequência entram em cascata, com 60 a 80ms de atraso entre um e outro, e no máximo seis por grupo.
- Toda a árvore fica dentro de `<MotionConfig reducedMotion="user">`: com "Reduzir movimento" ligado, o deslocamento some e o conteúdo aparece direto.
- Anime só opacidade e deslocamento curto. Escala, rotação, desfoque animado e paralaxe ficam fora do portal institucional.
- Cada efeito roda uma vez e termina com o conteúdo aceso. Laço contínuo fica restrito a indicador de carregamento, ao pulso do modo de exposição do BI e às órbitas de capa de apresentação.
- Transições de interface em CSS: `duracao-rapida` (150ms) em chip e campo, `duracao-base` (200ms) em botão, curva `curva-padrao`. Prefira transição de cor.
- Carregamento: surge em 500ms e pulsa raso (opacidade de 0.9 a 0.55) a cada 2.6s.
- Gráficos em telas de exposição desenham em cerca de 2000ms, `ease-in-out`.
- O movimento nunca atrasa a leitura nem a ação: nada bloqueia o toque enquanto anima.

## Aplicativos Apple

Regras para levar o sistema a iPhone, iPad e Mac, alinhadas às Human Interface Guidelines da Apple.

- **Tamanho de texto:** em iPhone e iPad o corpo parte de 17pt e nenhum texto fica abaixo de 11pt; no Mac, 13pt e 10pt. O teto de 60 do sistema já cobre o maior estilo da Apple.
- **Estilos de texto:** a Be Vietnam Pro entra como fonte personalizada, sempre ligada aos estilos de texto do sistema para acompanhar o Dynamic Type e o "Texto em negrito".

| Estilo do sistema | No app | Estilo da Apple | Tamanho padrão |
|---|---|---|---|
| `titulo-pagina` | Título grande de tela | Large Title | 34pt, peso 800 |
| `titulo-secao` | Título de seção | Title 1 | 28pt, peso 800 |
| `titulo-bloco` | Título de bloco | Title 2 | 22pt, peso 800 |
| `titulo-cartao` | Título de cartão e de linha | Headline | 17pt, peso 700 |
| `corpo` | Texto corrido | Body | 17pt, peso 400 |
| `corpo-sm` | Texto de apoio | Subheadline | 15pt, peso 400 |
| `rotulo` | Metadado | Footnote | 13pt, peso 500 |
| `eyebrow` | Sobretítulo | Caption 1 | 12pt, peso 700 |
| `micro` | Rótulo mínimo | Caption 2 | 11pt, peso 500 |

- **Texto ampliável:** todo texto cresce com o ajuste do sistema, até pelo menos 200%, sem cortar nem sobrepor. O layout reflui; a hierarquia se mantém.
- **Alvo de toque:** 44 por 44pt em iPhone e iPad (nunca abaixo de 28 por 28pt); 28 por 28pt no Mac. Cerca de 12pt de respiro entre controles com contorno e 24pt entre controles sem contorno.
- **Contraste:** 4,5:1 para texto de até 17pt; 3:1 a partir de 18pt ou em negrito. Confira no claro e no escuro, e ofereça a versão de alto contraste quando "Aumentar contraste" estiver ligado.
- **Claro e escuro:** o app acompanha a aparência do sistema. No escuro valem os tokens `bi-*` do tema escuro; no claro, `branco`, `preto` e a escala `web-*`.
- **Vidro:** na camada de navegação (barras, abas, barra lateral) use o material do próprio sistema; o vidro do grupo não substitui o da Apple. No conteúdo, superfícies sólidas. Com "Reduzir transparência", tudo vira sólido.
- **Movimento:** com "Reduzir movimento", o Surgir vira aparecimento direto.
- **Margens e áreas seguras:** margem lateral de 16pt em iPhone e 20pt em iPad; nada de conteúdo ou controle sob o entalhe, a ilha e o indicador de início.
- **Navegação e controles:** barras, abas, listas, alertas e folhas são os componentes nativos, tingidos com as cores do grupo. Os componentes deste sistema (botão, chip, campo, cartão) vivem dentro do conteúdo.
- **Ícones:** SF Symbols dentro dos aplicativos Apple, no peso do texto vizinho. Lucide segue na web.
- **Cor sozinha não informa:** todo estado leva também palavra ou símbolo.
- **Leitor de tela:** todo controle tem rótulo; toda imagem que informa tem descrição.
- **Marca da Apple:** logotipos, nomes e imagens de produtos da Apple só aparecem como as diretrizes de marca dela permitem.

### Conferência antes de enviar à App Store

Todo aplicativo do grupo passa por esta lista. Um item em aberto segura o envio.

1. Texto: nada abaixo de 11pt; corpo em 17pt; tudo cresce com o ajuste de tamanho de letra, sem cortar nem sobrepor.
2. Toque: todo controle com 44 por 44pt ou mais, e respiro entre vizinhos.
3. Contraste: 4,5:1 em texto e 3:1 em texto grande, ícone, borda de controle e foco, no claro e no escuro.
4. Aparência: claro e escuro completos; "Aumentar contraste", "Reduzir movimento" e "Reduzir transparência" atendidos.
5. Áreas seguras: nada sob o entalhe, a ilha ou o indicador de início; funciona em pé e deitado no iPad.
6. Leitor de tela: todo controle com rótulo, toda imagem informativa com descrição, ordem de leitura igual à ordem visual.
7. Cor: nenhuma informação depende só de cor.
8. Navegação: barras, abas, voltar e folhas nativos; gesto de voltar da borda preservado.
9. Ícone do app: arte quadrada, sem transparência e sem cantos arredondados, nas versões clara e escura.
10. Tela de abertura: fundo liso com a marca, igual ao primeiro quadro do app.
11. Conteúdo: sem texto de exemplo, sem link quebrado, sem menção a outras plataformas.
12. Conta e privacidade: política de privacidade acessível dentro do app; quem cria conta consegue excluí-la pelo próprio app; só se pede a permissão necessária, com o motivo escrito.

Três exigências da Apple vão além do desenho e precisam ser decididas no projeto de cada aplicativo:

- Aplicativo que é só o site dentro de uma moldura costuma ser recusado: ele precisa de função própria de app.
- Aplicativo aberto ao público com acesso por Google ou Microsoft precisa oferecer também uma opção equivalente, como "Iniciar sessão com a Apple". Aplicativo restrito a colaboradores com conta da empresa fica dispensado.
- A aprovação final é da revisão da Apple, que avalia funcionamento, privacidade e conteúdo. Este sistema garante a parte de desenho.

## Logos

Os arquivos estão no grupo **Logos**; as marcas das empresas, no grupo **Empresas**.

- Use `principal-3fgroup-colorida` por padrão. `principal-3fgroup-escura` quando não houver cor. `principal-3fgroup-branca` sobre fundo escuro.
- `horizontal-*` para cabeçalhos e faixas largas; `vertical-*` para selos e formatos quadrados.
- No cabeçalho do portal a marca tem 28px de altura; no rodapé, 40px.
- `pattern-lavoura-3fgroup` é um quadrado de 103px formado por quadrados de 50px com 1,3px de intervalo, repetível como fundo decorativo ou marca d'água em `web-2`. É o fundo padrão de capas e peças institucionais, ao lado da marca colorida.
- As marcas das empresas, quando aparecem juntas no contexto do grupo, usam as versões monocromáticas em tela de 150 por 80: `escura` sobre claro, `clara` sobre escuro. A marca completa de cada empresa, com cores próprias, vive no design system dela.
- Em produção as marcas são servidas de `https://brand.3f.group/3fgroup/logos/`.
- Na interface, a marca entra embutida na própria página, como SVG em linha, e nunca por link para arquivo externo: assim ela aparece sempre, em qualquer ambiente.
- Todos os SVG têm uma única camada (`<g id="logo">`), sem estilos internos nem classes; a cor está no atributo `fill`. Para outra tinta única, troque só esse `fill`.
- O FarmCast tem versão monocromática (preta e branca) e versão colorida.
- Preserve as proporções e o desenho de cada arquivo. Redesenhar, recolorir ou reconstruir a marca fica fora do sistema.
- Rodapé de todos os sites: a linha "Designed by XERXIZ.COM". Nos sites das empresas, acrescenta-se "Uma empresa" seguido da marca do 3F Group; no portal do grupo essa assinatura não aparece.

## Ícones

- Na web, biblioteca única: **Lucide** (`lucide-react`), traço de 2px, cantos arredondados, cor herdada do texto (`currentColor`). Nos aplicativos Apple, SF Symbols.
- Tamanhos em uso: 14 e 16px ao lado de texto `corpo-sm`, 12 e 13px em rótulos, 18 e 22px em destaque.
- Ícone acompanha texto; sozinho, só em controle com `aria-label`.
- Setas (`arrow-right`) fecham chamadas de ação e deslizam 4px no hover do cartão.

## Catálogo

São 95 componentes e seções, com 324 variações desenhadas. As 265 variações de interface aparecem no tema claro e no escuro; as 59 peças de fundo fixo (versões da marca, cartões de link, posts, banners, e-mails, slides e o mapa do Mato Grosso) aparecem uma vez, porque não mudam com o tema. Cada item tem um guia com quando usar, estrutura e regras. As classes vivem em `components/bundle.css`.

Antes de criar qualquer tela: escolha a seção no grupo 7, preencha com os componentes dos grupos 1 a 6 e confira a marca no grupo 9. Os valores numéricos dos exemplos são ilustrativos.

### 1 · Ações

- **Botao** (18): Botão de cantos levemente arredondados: primário, contorno, fantasma e perigo.
- **GrupoDeAcoes** (6): Combinações fixas de botões: par de ações, controle segmentado e barra de ações.
- **Link** (6): Link de texto: no meio da frase, com seta, externo e discreto.
- **Chip** (8): Etiqueta de cantos levemente arredondados para categoria, segmento e filtro.

### 2 · Formulário

- **Entrada** (8): Campo de formulário de uma linha, com rótulo, ajuda e erro.
- **AreaDeTexto** (2): Campo de várias linhas para mensagem e observação.
- **Selecao** (3): Lista de escolha única em campo fechado.
- **CaixaDeMarcar** (5): Caixa de marcar para escolhas independentes e consentimento.
- **Radio** (3): Escolha única entre poucas opções, em linha simples ou em cartão.
- **Interruptor** (3): Liga e desliga uma preferência com efeito imediato.
- **Busca** (3): Campo de busca com lupa, com ou sem atalho de teclado.
- **EnvioDeArquivo** (3): Área de envio de arquivo e linha de arquivo anexado.
- **Contador** (2): Ajuste de quantidade com menos e mais.
- **Formulario** (3): Formulários completos e prontos: contato, newsletter e acesso.

### 3 · Texto

- **Titulos** (7): A escala de títulos, de 60 a 18px.
- **Eyebrow** (3): Sobretítulo em caixa alta que abre cada seção, acima do título.
- **Paragrafo** (5): Os três tamanhos de texto corrido: lead, corpo e texto de interface.
- **Lista** (4): Listas de texto: marcadores, numerada, de checagem e de definições.
- **Citacao** (2): Frase em destaque, com ou sem autor.
- **Codigo** (2): Trecho técnico no meio da frase e bloco de código.
- **Prosa** (1): Texto longo de artigo, com títulos, link, lista e imagem.
- **Divisor** (3): Linha de separação, simples ou com rótulo.
- **Numero** (2): Número em destaque com rótulo.

### 4 · Conteúdo

- **Cartao** (8): Cartão de conteúdo: simples, com imagem, clicável, com rodapé, horizontal e elevado.
- **CartaoEmpresa** (2): Cartão de empresa do grupo, montado em grade de 1px.
- **CartaoArtigo** (4): Cartão de artigo do blog: vertical, horizontal e em destaque.
- **CartaoPessoa** (4): Apresentação de uma pessoa: liderança, autor e contato.
- **CartaoVaga** (2): Vaga aberta, em cartão e em linha de lista.
- **Avatar** (5): Círculo com foto ou iniciais de uma pessoa.
- **Selo** (9): Etiqueta de estado: neutra, positiva, de aviso, de alerta, de contorno e forte.
- **CartaoMetrica** (4): Indicador numérico do BI e dos painéis internos.
- **Tabela** (3): Tabela de dados: simples, com estado e ações, e densa.
- **ListaDeItens** (3): Lista de linhas com ícone, texto e valor ou seta.
- **LinhaDoTempo** (2): Sequência de marcos em ordem cronológica.
- **Acordeao** (1): Perguntas e respostas que abrem e fecham.
- **Abas** (2): Troca de conteúdo dentro da mesma página.
- **Imagem** (6): Molduras de imagem nas três proporções do sistema, com legenda e vídeo.
- **GradeDeLogos** (1): As marcas das empresas lado a lado, em grade de 1px.

### 5 · Navegação

- **Cabecalho** (4): Cabeçalho fixo de todas as páginas, em vidro.
- **MenuSuspenso** (4): Lista de ações ou de destinos que abre a partir de um botão.
- **MenuMobile** (1): Painel de navegação do celular.
- **Rodape** (3): Rodapé preto: completo, compacto e a assinatura do grupo nos sites das empresas.
- **Trilha** (2): Caminho da página atual dentro do site.
- **Paginacao** (3): Troca de página em listas longas.
- **BarraLateral** (1): Navegação lateral da área interna e do BI.
- **Passos** (2): Etapas de um processo em sequência.
- **Sumario** (1): Índice das seções de uma página longa.

### 6 · Retorno

- **Alerta** (6): Mensagem dentro da página: informação, confirmação, aviso e erro.
- **AvisoFlutuante** (2): Aviso curto que aparece e some sozinho.
- **Modal** (3): Janela sobre a página, para confirmar ou preencher algo curto.
- **DicaEPopover** (2): Dica curta ao passar o mouse e painel pequeno ao clicar.
- **Progresso** (4): Andamento de uma tarefa: barra e indicador giratório.
- **Esqueleto** (3): Forma cinza que ocupa o lugar do conteúdo enquanto ele carrega.
- **EstadoVazio** (4): O que a tela mostra quando não há conteúdo, resultado ou página.
- **AvisoDeCookies** (1): Aviso de cookies e consentimento (LGPD).
- **FaixaDeAviso** (2): Faixa estreita no topo da página com um aviso e um link.

### 7 · Seções

- **SecaoHero** (5): Abertura de página: título de até 60px, lead e ações.
- **CabecalhoDePagina** (3): Abertura de página interna: trilha, título de 48px e apoio.
- **SecaoEmpresas** (2): Seção que apresenta as empresas do grupo.
- **SecaoValores** (3): Três ideias lado a lado: pilares, valores ou diferenciais.
- **SecaoRecursos** (3): Lista de frentes, serviços ou recursos com ícone, em quatro ou duas colunas.
- **SecaoNumeros** (3): Faixa de números institucionais.
- **SecaoChamada** (4): Convite para uma única ação, no fim da página.
- **SecaoBlog** (2): Três artigos recentes, com link para o blog.
- **SecaoNewsletter** (2): Convite para assinar a newsletter, com o campo na própria seção.
- **SecaoCitacao** (3): Uma frase forte ocupando a seção inteira.
- **SecaoPerguntas** (1): Perguntas frequentes em duas colunas: título à esquerda, respostas à direita.
- **SecaoContato** (2): Dados de contato ao lado do formulário.
- **SecaoLideranca** (1): Grade de pessoas da liderança.
- **SecaoTextoImagem** (2): Texto de um lado e imagem do outro.
- **SecaoHistoria** (1): Linha do tempo em seção, ao lado do título.
- **SecaoVagas** (1): Lista de vagas abertas em seção.
- **PaginaLegal** (1): Página de texto corrido: política de privacidade e termos.
- **SecaoMapaMatoGrosso** (4): Mapa do Mato Grosso em hexágonos, com os municípios atendidos acesos, em preto, branco e nos cinzas da marca.

### 8 · Interface interna

- **TomSobreTom** (2): As camadas de cor da área interna e do BI.
- **BarraDeFiltros** (2): Barra fixa de filtros do BI e das listas internas, em vidro.
- **CartaoGrafico** (3): Gráfico dentro de cartão: barras e linha, em série única.
- **Ranking** (1): Lista ordenada com barra de proporção.
- **PainelDeIndicadores** (1): Tela de indicadores montada: título, filtros, indicadores e gráficos.
- **Vidro** (2): Superfície translúcida com desfoque, para a camada que flutua sobre o conteúdo.

### 9 · Marca e formatos digitais

- **MarcaVersoes** (9): As nove versões da marca do grupo: três composições em três cores.
- **MarcaFundos** (4): A marca sobre os quatro fundos permitidos.
- **MarcaProtecao** (3): Área de proteção e tamanhos mínimos da marca em tela.
- **MarcaUsosIncorretos** (6): O que não se faz com a marca.
- **PatternLavoura** (4): O pattern lavoura, o fundo de marca do grupo.
- **Cores** (5): A paleta em uso, com o papel de cada cor nos dois temas.
- **CartaoDeLink** (4): Imagem que aparece quando um link do site é compartilhado (1200 por 630).
- **PostSocial** (6): Peças para redes sociais: quadrado, retrato e story.
- **PerfilSocial** (4): Foto de perfil e capa de perfil para redes sociais.
- **IconeDeApp** (4): Ícone de aplicativo e de atalho do site.
- **AssinaturaDeEmail** (2): Assinatura de e-mail dos colaboradores.
- **EmailInstitucional** (2): Estrutura de e-mail enviado pelo grupo: newsletter e avisos.
- **SlideDeApresentacao** (4): Os três tipos de slide de uma apresentação digital do grupo.
- **BannerDigital** (3): Banners de mídia digital nos três formatos mais usados.
- **FraseInstitucional** (4): As formas fixas de escrever a frase do grupo.
