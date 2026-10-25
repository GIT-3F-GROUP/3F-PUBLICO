# BARYGEN · Design System

Sistema de design e brand da **BARYGEN Seeds Corporation do Brasil** (BARYGEN
Sementes, uma empresa 3F Group): empresa produtora e comercializadora de
sementes, com foco em híbridos de milho para as regiões produtoras brasileiras.
Nascida no Mato Grosso, atua em todo o território nacional.

O tom é **científico e sério**. A marca é limpa: preto e amarelo, a logo e a
tipografia. As seções principais são lisas. O destaque preferido é o **tom sobre
tom** (amarelo com amarelo, preto com preto); degradês, papel, textura de pontos,
seções com as curvas da palheta e o vidro amarelo são alternativas, usadas com
moderação.
Toda informação escrita é técnica, verificável e direta.

O nome vem de **Bary + Genética**: Heinrich Anton de Bary, cientista do século
XIX que ajudou a fundar a compreensão moderna da vida vegetal.

> A BARYGEN existe para uma coisa: a rentabilidade do produtor brasileiro.

---

## Regras de marca: nome e tipografia

Estas regras valem para qualquer peça, em qualquer canal, e prevalecem sobre
qualquer outro trecho deste documento.

**O nome é sempre BARYGEN.** Escreva sempre em caixa alta e em Commissioner:
**BARY em Commissioner SemiBold (600)** e **GEN em Commissioner ExtraBold
(800)**, juntos, sem espaço. Nunca use "Barygen" nem "barygen" em texto
visível. É assim que o nome aparece desenhado na logo, que junta o
**símbolo**, o **nome** BARYGEN e a **atividade** SEMENTES. Em HTML, a classe
`.bry-wordmark` aplica a regra no texto corrido: `<span class="bry-wordmark">BARY<b>GEN</b></span>`. Nos tokens, os
estilos `logo-bary` e `logo-gen` ficam no grupo Logotipo.

**Tamanho máximo de 56 px.** Nenhum texto passa de 56 px, título ou não.

**Corpo de texto em Be Vietnam Pro, até 30 px.** Parágrafos, listas, rótulos
e legendas usam Be Vietnam Pro e nunca passam de 30 px.

**Nenhuma palavra se divide em duas linhas.** Nem com hífen, nem sem ele: o
texto só quebra entre palavras. Se um título não cabe na largura (no celular,
por exemplo), o tamanho diminui ou o texto é reescrito, nunca a palavra é
partida. Na folha `components/bundle.css`, a hifenização automática fica
desligada (`hyphens: none`).

**Sem travessão.** Nenhum texto usa travessão (— ou –). No lugar dele, use
dois-pontos, vírgula ou ponto; em intervalos, "a" (0,0 a 2,0 s; 12 a 14 px).
O sinal de menos (−) dos botões de quantidade não é travessão.

**Títulos em Commissioner, sempre em caixa alta.** O peso vai de SemiBold (600)
a ExtraBold (800), conforme a hierarquia: `fs-display` 56 px, `fs-h1` 56,
`fs-h2` 48, `fs-h3` 40, `fs-h4` 32 (ExtraBold), `fs-h5` 24 e `fs-h6` 20 (Bold), no computador; no celular eles diminuem sozinhos (ver Tipografia fluida, nas boas práticas Apple).
A mistura ExtraBold + SemiBold no mesmo título, o contraste do nome na logo, continua
valendo. Na folha `components/bundle.css`, `--ff-display` é a Commissioner, e
todo `h1` a `h6` e toda classe de título (`.bry-display`, `.bry-h1`…`.bry-h6`,
títulos de cartão, modal, hero, faixa de CTA e divisor) já sai em Commissioner
caixa alta.

**Tipografia western só sob pedido.** A fonte de faroeste (Rye), usada numa
palavra de destaque, só entra quando quem pede a peça pedir explicitamente
tipografia country, tipografia do velho oeste ou tipografia texana. Sem esse
pedido, todo título segue em Commissioner.

---

## Logo

A logo BARYGEN tem três partes. O **símbolo** é uma palheta de violão em amarelo #F6A200 com uma hélice de DNA em preto, de pé, dentro dela. O **nome** é BARYGEN, com BARY em Commissioner SemiBold e GEN em ExtraBold. A **atividade** é SEMENTES, centralizada sob o nome. As páginas Marca › Construção da logo, Versões e Uso trazem tudo em detalhe; o resumo:

- **Os 16 arquivos oficiais** estão em Assets › Logos, com o nome de cada um dizendo o que ele tem: `Logo BARYGEN horizontal principal.svg`, `… horizontal símbolo e nome …`, `… vertical principal …`, `… vertical símbolo e nome …`, cada um colorido, em monocromática preta e em monocromática branca; e, só texto, `… nome e atividade …` e `… nome …`, em monocromática preta e branca. A única peça colorida da marca é o símbolo: sem ele, a logo é sempre de uma cor só.
- **Padrão: horizontal principal** (símbolo, nome e atividade). Com atividade sempre que der; símbolo e nome só quando SEMENTES ficaria pequeno demais para ler, ou quando for mais conveniente.
- **Horizontal ou vertical.** O espaço decide: largo → horizontal; quadrado ou alto → vertical; mínimo ou marca já identificada → só o símbolo (ícone de app, favicon, avatar). **Na dúvida, quando não há descrição do espaço, use a horizontal principal.**
- **Versões por fundo.** Colorida em fundo claro. Monocromática preta em fundo claro ou amarelo, quando a peça pede uma cor só. Monocromática branca em fundo escuro, colorido ou foto, quando a peça pede uma cor só. Nas monocromáticas, a hélice é vazada: o fundo aparece por ela.
- **Principal sobre o preto** (`version="colorida-escuro"`): palheta amarela, hélice preta e letras brancas. É a logo da barra de navegação escura, do rodapé escuro e dos vídeos.
- **Favicon: sempre o símbolo**, a palheta amarela com a hélice preta, sem nome e sem fundo (Assets › Favicon: `Favicon BARYGEN.svg`, `-32.png` e `-180.png`).
- **Unidade H**, a altura das letras do nome. Horizontal principal: palheta de 3,3 H, a 0,85 H do nome (3,12 : 1). Horizontal símbolo e nome: palheta de 2,5 H, a 1,0 H (3,85 : 1). Verticais: palheta de 3,2 H, centralizada, a 0,8 H do nome (1,10 : 1 com atividade, 1,30 : 1 sem). SEMENTES mede 0,48 H e fica 0,42 H abaixo do nome.
- **Área de proteção.** 1 H em todos os lados.
- **Tamanhos mínimos** (altura). Horizontal principal 40 px / 12 mm; horizontal símbolo e nome 24 px / 8 mm; vertical principal 72 px / 22 mm; vertical símbolo e nome 40 px / 14 mm; nome e atividade 24 px / 8 mm; nome 12 px / 4 mm; símbolo 16 px / 6 mm.
- **Camada única.** Todo SVG tem uma camada só, `ARTE`, com as peças nomeadas: `SIMBOLO` › `SIMBOLO_PALHETA` + `SIMBOLO_HELICE_DNA`; `BARYGEN` › `B A R Y G E N`; `SEMENTES` › `S1_DE_SEMENTES` … `S2_DE_SEMENTES`. Nas monocromáticas, o símbolo é uma peça só, `SIMBOLO_PALHETA_HELICE_DNA_VAZADA`, e a cor fica declarada uma vez, na camada `ARTE`. Preserve esses nomes ao exportar.
- **Código.** `<Logo />` desenha exatamente os arquivos oficiais: `type` = `horizontal` (padrão), `horizontal-nome`, `vertical`, `vertical-nome`, `nome-atividade`, `nome` ou `simbolo`; `onBackground` = `light`, `dark` ou `amber`; `version` = `colorida`, `colorida-escuro`, `mono-preta` ou `mono-branca`. Fora do React, `BARYGEN_LOGO.svg({ type, version })`; `BARYGEN_LOGO.arquivo(type, version)` dá o nome do arquivo.
- **O símbolo é sempre a palheta com a hélice.** Como marca, as duas vão juntas: nunca use uma delas sozinha no lugar da logo e nunca coloque a hélice dentro de outra forma (círculo, quadrado, pílula, selo, mancha).

## Elementos da marca

A palheta e a hélice de DNA, soltas e de uma cor só, também são peças de design (Marca › Elementos da marca; arquivos em Assets › Elementos). Uso pouco frequente, sempre como forma de fundo, grande e cortada pela borda, e nunca no lugar da logo.

- **Hélice tom sobre tom**, a mais interessante: um passo de tom acima do fundo (preto 2 sobre o preto, amarelo detalhe sobre o principal, areia sobre o suave), no lado oposto ao texto, uma por peça.
- **Palheta** como forma de fundo, sem a hélice, saindo pela borda (como no rodapé).
- No código: `BARYGEN_LOGO.svg({ type: 'dna', color })` e `BARYGEN_LOGO.svg({ type: 'palheta', color })`.

---

## Fundos e textura

**Principais, limpos:** escuro (preto, `.bry-sec-dark-1`) e claro (suave, `.bry-sec-light-1`). São o padrão de toda página e peça.

**Seções claras** (Efeitos › Seções claras): três estilos vizinhos, suave (`.bry-sec-light-1`), branco (`.bry-sec-branco`) e creme (`.bry-sec-creme`). Alternados, a troca de tom separa os assuntos; o mesmo estilo seguido, até três vezes, leva um fio de 1 px (`.bry-sec-fio`) ou um título com mais respiro; o creme não se repete em seguida. `.bry-sec-claro-grad` passa do suave ao creme sem corte.

**Tom sobre tom, o destaque preferido:** `.bry-sec-tom-amarelo`, `.bry-sec-tom-amarelo-grad`, `.bry-sec-tom-amarelo-claro`, `.bry-sec-tom-preto` e `.bry-sec-tom-preto-grad` (ver Tom sobre tom).

**Alternativos, no máximo um por página:**

- **Degradês** do preto com o amarelo: `.bry-sec-grad-ambar` (luz amarela no canto) e `.bry-sec-grad-aurora` (versão clara). O texto fica na parte mais escura.
- **Degradês terciários, uso raro:** `.bry-sec-grad-marrom` (sobe da base) e `.bry-sec-grad-laranjado` (entra pelo canto inferior esquerdo). Só numa peça especial, nunca como fundo padrão.
- **Seções Van Gogh** (`.bry-sec-vangogh`, ver "Quando usar o Van Gogh" logo abaixo): o padrão de milho Van Gogh (módulo de 230 × 230 px, sempre no tamanho original) como fundo. O padrão é imagem e **nunca leva texto por cima**: o texto entra numa forma grande, em degradê entre o amarelo principal e o amarelo contraste, que entra pelo topo, sai pela base e encosta na borda direita ou esquerda (página Efeitos › Seções Van Gogh). Na curva, a forma leva um fio fino de amarelo detalhe. Toda seção Van Gogh abre e fecha com uma faixa de amarelo detalhe de 15 a 50 px, conforme a tela. Seções Van Gogh seguidas formam uma sequência (`.bry-vangogh-seq`): o milho corre contínuo, as faixas ficam só no começo e no fim, e a forma é uma só, dividida entre as seções. Ela pode começar solta (sem tocar o topo da primeira) ou terminar solta (sem tocar a base da última), mas uma das pontas sempre encosta: nunca solta no começo e no fim ao mesmo tempo.
- **Papel** (`.bry-sec-papel`): linhas horizontais muito sutis e pontos finos, como papel antigo, para conteúdo editorial.
- **Seções com as curvas da palheta** (ver Formas da palheta).

### Quando usar o Van Gogh

O Van Gogh é uma alternativa rara: no dia a dia, entra quando alguém pede. **A exceção é a própria BARYGEN.** Quando o assunto da peça ou da página é só a empresa, ele é o fundo indicado, e vale sugerir o uso mesmo sem pedido. O milho pintado fala de origem, de campo e de quem a BARYGEN é.

- **Indicado, pode sugerir:** quem somos, história e origem da empresa, propósito e valores, manifesto, apresentação institucional da BARYGEN, abertura de relatório anual, data comemorativa da empresa, página ou post "Sobre a BARYGEN", capa de material sobre a empresa. Numa página só sobre a BARYGEN, cabe uma sequência Van Gogh inteira.
- **Só quando pedirem:** home, híbridos e catálogo, campanhas de produto, resultados de campo, eventos, notícias e qualquer peça em que a empresa divide o assunto com outra coisa. Se uma página mistura assuntos, o Van Gogh fica de fora, a não ser que peçam.
- **Não usar:** portal do produtor e sistemas, formulários, tabelas e fichas técnicas, e materiais que falam de mais de uma empresa do 3F Group (esses seguem o design system do grupo).

O teste é simples: se o assunto continua sendo a BARYGEN quando se tira o nome do produto, do evento ou da campanha, o Van Gogh é bem-vindo.

Os nomes antigos `dark-3`, `dark-4`, `light-2` e `light-4` abrem, nessa ordem, o marrom, o âmbar, o papel e a aurora; `dark-2` e `light-3` são o fundo liso.

**Textura de pontos.** A única textura: pontos de 1,4 px a cada 4 px, em preto no claro ou em branco no escuro, numa camada atrás do conteúdo com opacidade de **0 (totalmente transparente) a 15%**, nunca mais. Classes: `.bry-tex-pontos` e `.bry-tex-pontos--escuro`, mais `--fade-baixo`, `--fade-cima`, `--fade-lado` e `--fade-canto` para a textura sumir até o transparente. **Use com cautela:** no máximo uma área texturizada por tela, nunca sob texto de leitura longa, tabela ou formulário; na dúvida, sem textura.

**Fora da marca:** malhas, retículas, alvos, pinceladas, grãos, halftone, formas tecnológicas, entradas e laços animados, e formas soltas dentro da seção (contêiner orgânico).

---

## Elementos naturais e amarelo detalhe

- **Elementos naturais com desenho natural.** Quando a peça desenha um elemento da natureza (milho, grão, espiga, planta, solo) ou um lugar (mapa do Brasil, estados), o desenho segue os contornos e as formas da realidade, com contexto. Nunca uma forma qualquer ou abstrata no lugar dele (um círculo não é um grão). Vale para posts, carrosséis, cartões e qualquer elemento gráfico.
- **Amarelo detalhe nunca é fundo.** Em fundos e grandes áreas amarelas, use o amarelo principal e o amarelo contraste. O amarelo detalhe fica para fios, bordas, formas de destaque e elementos.
- **Conferência antes de entregar.** Antes de mostrar qualquer peça ou elemento, confira o desenho contra o objeto real. O que estiver longe da forma real, feio ou desconectado do assunto sai na hora: é refeito com a forma certa ou retirado da peça, nunca entregue como está.

## Milho: como desenhar sem errar

O milho é o elemento mais importante da BARYGEN. Toda planta, espiga, folha ou grão desenhado segue a anatomia real abaixo. Antes de entregar, confira o desenho item por item; o que não bater sai da peça.

**A planta inteira (porte médio, perto de 2,4 m)**
- **Colmo:** um caule só, reto ou levemente inclinado, mais grosso na base (perto de 2,5 cm) e afinando até o pendão. Tem nós e entrenós: curtos embaixo, longos no meio, menores no alto.
- **Folhas:** de 18 a 21 no total, **alternadas em dois lados opostos** (uma para cada lado, subindo pelo colmo). Cada folha tem a **bainha**, que abraça o colmo de um nó até perto do nó seguinte, o **colar** (lígula e aurículas) e a **lâmina**. A lâmina é longa e estreita: de 80 a 100 cm por 8 a 10 cm nas folhas do meio, estreita na base, mais larga perto do meio, **ponta aguda**, borda levemente ondulada, nervura central clara e veias paralelas. Ela sai do colmo subindo e depois arqueia e cai; as de baixo caem mais, as do alto ficam mais em pé. As folhas do meio são as maiores; as de baixo e as do alto são menores.
- **Pendão:** no topo, um eixo central de pé e de 7 a 11 ramos que saem quase na horizontal e caem, com as espiguetas aos pares e as anteras penduradas.
- **Espiga:** sai da axila de uma folha **no meio da planta** (perto de 1 m do chão no porte médio), inclinada para fora entre 25 e 40 graus. Envolvida pela **palha**, com as pontas da palha passando um pouco da espiga e o **cabelo** saindo pela ponta. Às vezes há uma segunda espiga menor um nó abaixo.
- **Raízes:** nodais saem da coroa, 2 cm abaixo do solo; **raízes de escora** saem dos primeiros nós acima do solo (a partir do V10), arqueiam e entram na terra. Na planta jovem ainda aparecem a semente, o mesocótilo e as raízes seminais.
- **Proporções:** espiga com palha de 25 a 30 cm (perto de um nono da altura da planta); o pendão ocupa uns 15% da altura; a envergadura das folhas é menor que a altura da planta.

**Estádios (V e R, guia da Iowa State)**
- **Germinação:** a semente incha, sai a radícula para baixo, depois as seminais, e o coleóptilo sobe empurrado pelo mesocótilo.
- **VE:** só a ponta do coleóptilo acima do solo, com a primeira folha despontando.
- **V1 a V18:** o número é a quantidade de folhas com colar visível. A **folha 1 tem a ponta arredondada**; todas as outras são pontudas. As folhas novas ficam **enroladas e de pé no cartucho**, no alto. O ponto de crescimento fica abaixo do solo até perto do V5; a partir do V6 os entrenós alongam e as primeiras folhas de baixo secam.
- **VT:** o pendão todo aberto; a espiga é só um broto, sem cabelo.
- **R1:** cabelo novo, claro e longo, para fora da palha. **R2:** cabelo escurecendo; grão bolha, branco. **R3:** grão leitoso, amarelo; cabelo seco. **R4:** pastoso; pendão seco. **R5:** grão com dente na coroa e a linha do leite descendo; folhas de baixo secando. **R6:** camada preta na ponta do grão; palha e folhas secas, estreitas e caídas; a espiga **pende para baixo**.

**A espiga e o grão**
- Espiga cilíndrica que afina pouco na ponta e termina arredondada, nunca em cone fino. Fileiras retas e **em número par** (14 a 18); de 35 a 45 grãos por fileira. No desenho, as fileiras do meio aparecem largas e claras e as das bordas, estreitas e mais escuras, como num cilindro.
- Grão dentado visto de frente: coroa larga, quase reta (com o dente no R5), afinando até a ponta; o embrião aparece como uma mancha oval na face. Por dentro: pericarpo, endosperma vítreo nas bordas, farináceo no centro, embrião com plúmula e radícula.
- Palha aberta: as folhas da palha ficam presas na base da espiga, largas, com nervuras paralelas, caindo para os lados; nunca soltas no ar nem simétricas como chifres.

**Erros que não podem acontecer**
- Espiga oval, em cone ou como uma forma qualquer com um fio por cima; palha simétrica como chifres; grão redondo como uma bolinha (só o grão bolha do R2 é arredondado).
- Folhas saindo todas do mesmo ponto, em leque, curtas e largas, ou com ponta redonda depois da primeira.
- Espiga no alto da planta, no lugar do pendão; pendão como um penacho sem ramos; planta sem nós ou sem raiz de escora quando adulta.
- Silhueta de planta com envergadura maior que a altura, ou com todas as folhas iguais e simétricas.

**Silhueta e tom sobre tom.** A maioria das silhuetas é cheia, numa cor só. Tom sobre tom, com nervuras, cabelo e rótulos, entra só quando o assunto pede detalhe fisiológico.

## Tom sobre tom

O destaque preferido da marca: tons da mesma cor, um sobre o outro. A peça ganha profundidade sem contraste brusco.

- **Amarelo tom sobre tom.** Amarelo claro (#FFE6A1), detalhe (#FBBA00), principal (#F6A200) e contraste (#E18800) juntos, sem outra cor. Texto, ícones e logo em preto (monocromática preta). A palheta pode entrar como forma em amarelo detalhe sobre o principal. Cartões: `rgba(255,230,161,.55)` com borda `rgba(10,10,10,.08)`.
- **Preto tom sobre tom.** O fundo é sempre o **preto absoluto (#000)**. Cartões, campos, formas e botões secundários são camadas de pretos muito próximos: `--tom-preto-1` #0B0B0B (campos e formas), `--tom-preto-2` #141414 (cartões), `--tom-preto-3` #1F1F1F (cartão elevado, botão secundário), borda `--tom-preto-linha` `rgba(255,255,255,.08)`. O amarelo fica para o dado e a ação principal.
- **Sem caixas de alto contraste.** Nada de caixa preta sobre o claro nem caixa branca sobre o preto. No preto, camadas de preto; no claro, branco, suave e amarelo claro; no amarelo, outros amarelos. Dentro de uma seção escura, `KPI`, `Card`, `Table`, `Accordion` e `ProductCard` viram camadas de preto sozinhos; o `LoginCard` usa `surface="dark"` e o `Toast` usa `bry-toast--escuro`. Ficam fora da regra botões, selos e avatares (pequenos, precisam de contraste) e as amostras de logo deste manual.
- **Claro tom sobre tom (caixas claras).** No claro, camadas de claros vizinhos com borda `--tom-claro-linha` `rgba(89,51,0,.10)`: `.bry-caixa-clara` branca (`--tom-claro-branco`), `--suave` (#FBF9F5), `--creme` (#FEF7E6) e `--areia` (#F4EFE5). Seção suave: caixa branca para elevar, areia para rebaixar. Seção branca: suave ou creme. Seção creme: só branca.
- **Contraste continua no texto.** A caixa é suave; o texto sobre ela segue as regras Apple (4,5 : 1).

### Vidro amarelo · ocasional

`.bry-glass-amarelo`: painel de amarelo translúcido (34% a 14%) com desfoque de 20 px, borda em amarelo claro e brilho interno de 1 px, como o material do iOS. Opção pouco usada e interessante: **no máximo um por tela**, só sobre foto ou fundo escuro, para uma legenda, um selo ou um dado. Sobre fundo amarelo, use `.bry-glass-amarelo--claro` (texto preto). Nunca em formulário, tabela ou texto longo. Com **Reduzir transparência** ligado, ou sem suporte a desfoque, vira painel sólido.

---

## Formas da palheta

Seções alternativas que usam o **ritmo do contorno da palheta**: um lado longo e suave, uma virada fechada, uma curva larga. A forma não precisa ser a palheta inteira, mas mantém essas curvas e sempre vai de **borda a borda**, de um lado ao outro ou de cima a baixo. Quatro modelos (página Effects › Seções da palheta):

1. **Borda curva:** o fim de uma seção escura vira uma curva com um fio amarelo.
2. **Forma contínua de cima a baixo:** uma forma encostada na borda divide texto e dado. Toda forma que sai do topo e chega à base, em qualquer seção, é um degradê entre o amarelo principal e o amarelo contraste (nunca amarelo sólido) e leva no trecho curvo um fio fino de amarelo detalhe (`.bry-borda-curva`); as bordas retas ficam sem fio.
3. **Faixa de transição:** uma faixa de espessura variável entre o preto e o claro, em degradê do amarelo principal ao amarelo contraste.
4. **Contornos sutis:** linhas finas repetindo a curva, em amarelo de baixa opacidade, no lado oposto ao texto.

As regras:

- uma curva por transição, no máximo uma forma de fluxo por seção e uma seção alternativa por página;
- cores sólidas da marca, e a curva toma a cor da seção seguinte;
- bordas de 40 a 120 px de altura;
- nenhum texto atravessa a forma.

**Proibido:** forma grande solta dentro da seção, contêiner orgânico e o DNA dentro de qualquer forma que não seja a palheta. Classes em `components/bundle.css`: `.bry-sec-palheta`, `.bry-curva` (`--base`, `--topo`, `__fio`), `.bry-forma-fluxo` e `.bry-contorno`.

---

## Vídeo

Página Marca › Vídeo.

- **Encerramento padrão: Linha de origem.** Todo vídeo termina com essa entrada da horizontal principal, de cerca de 4,3 s. A linha amarela se estica e vira um ponto, BARY sobe e GEN desce, SEMENTES aparece embaixo, o ponto vira a palheta e a hélice é escrita por último. Sempre a logo principal, com a palheta amarela e a hélice preta: no fundo preto (padrão) as letras ficam brancas; no claro, pretas. Logo centralizada.
- **Opcionais, somente quando solicitados:** Hélice gigante, Giro do grão e Três tempos, nessa ordem de preferência.
- **Legenda de nome: Da palheta.** O símbolo da logo principal (palheta amarela, hélice preta) aparece à esquerda, a hélice é escrita e a linha amarela sai dela, com as pontas em transparência. O nome sobe em caixa alta e ExtraBold; o cargo e a empresa ou fazenda descem. A legenda fica 3 s na tela e sai com a entrada ao contrário. Medidas em % da largura do quadro: símbolo 6,6%, nome 3,3%, cargo 1,8%, empresa 1,25%.
- **Contraste da legenda.** Sobre a imagem, a legenda leva sempre um gradiente de proteção escuro atrás (preto de 62% a transparente), para o texto branco ficar acima de 4,5 : 1 em qualquer foto. Só a sombra no texto não basta.
- **Posição.** Encerramento centralizado. Legenda acima dos 18% inferiores no vertical (35% no patrocinado), e no canto inferior esquerdo dentro da margem no feed e no horizontal.

---

## Mídias sociais

Página Marca › Mídias sociais. Formatos: vertical 9:16 (Reels e Stories, 1080 × 1920), feed 4:5 (1080 × 1350) e horizontal 16:9 (1920 × 1080). Margens de segurança:

| Formato | Topo | Base | Lados | Área livre |
| --- | --- | --- | --- | --- |
| Vertical · normal | 14% (269 px) | 18% (346 px) | 6% (65 px) | 950 × 1305 px |
| Vertical · patrocinado | 14% (269 px) | 35% (672 px) | 6% (65 px) | 950 × 979 px |
| Feed 4:5 | 6% (81 px) | 6% (81 px) | 6% (65 px) | 950 × 1188 px |
| Horizontal 16:9 | 5% (54 px) | 5% (54 px) | 5% (96 px) | 1728 × 972 px |

Dentro da área livre fica tudo o que precisa ser lido: legendas, títulos, números, logos, site, telefone, QR Code e o rosto de quem fala. Na margem pode ficar só o que serve de fundo: a imagem, fotos, fundos de cor, a textura de pontos e o fundo do encerramento. Se o vídeo pode virar patrocinado depois, edite já com 35%. A peça feita para vários formatos segue a regra mais apertada. Os 14%, 6% e 35% do vertical vêm da Meta; os 18%, os 6% do feed e os 5% do horizontal são regra da BARYGEN. Vale conferir as regras da Meta uma vez por ano.

**Posts** (página Marca › Posts): 25 modelos aprovados no 9:16 e no 4:5, como ponto de partida. Logo horizontal entre 130 e 160 px de altura no quadro de 1080 px, no mesmo lugar e tamanho dentro de uma série; título até 56 px, maior só quando o título é a própria peça.

**Carrosséis** (página Marca › Carrosséis): modelos aprovados como ponto de partida, não como regra; cada peça é adaptada ao assunto. Fixo: a logo não muda de lugar nem de tamanho (horizontal principal com 140 px no topo à esquerda da capa e no rodapé à esquerda do último slide) e todo último slide traz logo, site e telefone; contato pessoal só quando pedido. Livre: a conexão entre slides (opcional), o elemento de conexão (qualquer elemento ligado ao assunto, tom sobre tom; a palheta não é obrigatória) e a mistura de fotos com infográficos. Van Gogh principalmente para assuntos da própria empresa.

---

## Boas práticas Apple (App Store e Human Interface Guidelines)

Todo o sistema segue as regras de bom design da Apple, que valem para os apps na App Store e servem de referência também para a web. **São regras, não sugestões: toda página e todo componente são conferidos contra elas antes de publicar.**

- **Alvos de toque de no mínimo 44 × 44 pt**: botões, ícones, itens de lista e links isolados. O desenho pode ser menor e discreto (botão de 40 px, chip de 32 px, selo de 19 px); a área clicável invisível é que chega a 44.
- **Nada grande demais.** Controles compactos, como na App Store: botões de 32, 40 e 48 px, selos pequenos, ícones de 16 a 18 px. O tamanho grande fica só para a chamada principal de um herói.
- **Contraste.** Texto com no mínimo 4,5 : 1; 3 : 1 para texto a partir de 24 px (ou 19 px em negrito), ícones e bordas de controle. Pares da marca: preto sobre amarelo, 10,1 : 1; âmbar escuro `--text-accent` sobre o suave, 6,1 : 1; branco sobre laranjado, 4,7 : 1. Amarelo sobre branco (2,1 : 1) nunca é usado em texto.
- **Nenhum texto herda cor do lugar errado.** Todo componente de fundo próprio declara a cor do seu texto. Um cartão claro dentro de uma seção escura nunca pode ficar com texto claro: foi o que deixou o "Manter conectado" invisível no login.
- **Clareza, deferência e profundidade.** O conteúdo é o protagonista; a interface recua. Profundidade vem de camadas tom sobre tom, não de caixas de alto contraste nem de sombras longas.
- **Modo escuro e claro.** Cada tela funciona nos dois. No escuro, o fundo é o preto absoluto e as camadas sobem em pretos próximos; o texto nunca é branco puro em bloco longo (use o suave #FBF9F5).
- **Layout responsivo.** A mesma tela funciona de 320 px a desktop: colunas viram uma, nada estoura na horizontal, o texto quebra entre palavras (nunca no meio de uma palavra) em vez de cortar e nenhum campo corta o conteúdo digitado.
- **Tipografia fluida.** Os títulos diminuem junto com a tela, sem saltos (`clamp()` entre 390 e 1440 px), sempre dentro do teto de 56 px:

  | Token | Celular (390 px) | Computador (1440 px) |
  |---|---|---|
  | `--fs-display`, `--fs-h1` | 32 px | 56 px |
  | `--fs-h2` | 28 px | 48 px |
  | `--fs-h3` | 24 px | 40 px |
  | `--fs-h4` | 22 px | 32 px |
  | `--fs-h5` | 19 px | 24 px |
  | `--fs-h6` | 17 px | 20 px |
  | `--fs-body-lg` | 16 px | 18 px |
  | `--fs-body` | 16 px | 16 px |

  Use sempre os tokens, nunca um tamanho fixo em px no título. Linhas de 45 a 75 caracteres (`--measure-lead` 52ch, `--measure-body` 62ch); entrelinha de 1,05 a 1,15 nos títulos e de 1,55 a 1,6 no corpo.
- **Espaço fluido.** A margem lateral (`--gutter`) vai de 16 px no celular a 56 px no computador; o respiro vertical das seções (`--sec-y`) vai de 48 a 112 px, e o menor (`--sec-y-sm`) de 32 a 72 px. Entre blocos, 24 ou 32 px; dentro de cartões, 16 ou 24 px. Tudo na escala de 8 px, com 4 px de meio passo. Classes: `.bry-wrap` (container de 1240 px com a margem fluida), `.bry-sec-pad` (respiro da seção) e `.bry-acoes` (grupo de botões que empilha no celular).
- **Pontos de quebra.** Até 640 px é celular (uma coluna, margem de 16 a 24 px); até 900 px é tablet (colunas de dois para um); acima, computador, com o conteúdo limitado a 1240 px. O desenho parte do celular e cresce.
- **Leitura.** O corpo de texto nunca fica abaixo de 16 px na web (no iOS, o corpo padrão é 17 pt), e nenhum rótulo fica abaixo de 11 px. Nos apps, respeite o tamanho de texto escolhido pelo usuário (Dynamic Type).
- **Áreas seguras.** Conteúdo e logo ficam fora do entalhe e do indicador de início; margens laterais de 16 a 24 px no celular.
- **Hierarquia clara.** Uma ação primária por tela, e nenhuma informação dada só por cor.
- **Movimento.** Respeite a opção Reduzir movimento (`prefers-reduced-motion`): as animações de entrada viram transições simples.
- **Transparência.** Respeite Reduzir transparência (`prefers-reduced-transparency`): vidro e desfoque viram superfícies sólidas.
- **Acessibilidade.** Toda imagem e ícone com função tem rótulo para o VoiceOver; formas decorativas ficam ocultas (`aria-hidden`). Estados de foco sempre visíveis.
- **Consistência.** Controles padrão se comportam como o usuário espera: o mesmo componente, a mesma aparência e o mesmo lugar em todas as telas.
- **Ícone de app.** 1024 × 1024 px, opaco, sem cantos e sem texto, com o símbolo centralizado em 60% da altura sobre o preto (página Marca › Uso da logo).

---

## Fontes deste design system

Tudo aqui foi reconstruído a partir de material entregue pela marca: nada foi
inventado ou recriado de memória:

| Fonte | Conteúdo |
|---|---|
| Pacote entregue pela marca | Pacote v03 completo |
| `BARYGEN Design System v03 Manual e Interface.html` | Manual de marca (7 seções) + guia de interface (7 categorias) |
| `tokens.css`, `ds-v02.css`, `barygen-ui.css` | Tokens e componentes originais: valores numéricos copiados sem arredondamento |
| `fonts/` (9 arquivos .ttf) | Be Vietnam Pro 400 a 900 + itálicos |
| `logos/` + `logos-svg-extras/` | Logos oficiais em SVG e PNG, todas as versões |
| `JPG/cores certas.jpg` | **Paleta correta e vigente** (RGB/HEX + CMYK): substitui os HEX do `tokens.css` v03 |

O JPG "cores certas" está preservado em `assets/reference/cores-certas.jpg`.

### Correção de paleta aplicada

Os HEX do pacote v03 estavam desatualizados. Valem os do arquivo "cores certas":

| Cor | v03 (obsoleto) | **Vigente** |
|---|---|---|
| Amarelo principal | #F8B124 | **#F6A200** |
| Amarelo detalhe | #FBC501 | **#FBBA00** |
| Amarelo contraste | #E58F02 | **#E18800** |
| Laranjado | #B15E17 | **#B25D17** |
| Sombra marrom | #3D2410 | **#593300** |
| Amarelo claro | #FFE49F | **#FFE6A1** |
| Amarelo suave | #FBF9F4 | **#FBF9F5** |

### RGB/HEX vs. CMYK · o que usar

- **HEX/RGB é para tela.** Todo token CSS deste sistema é HEX.
- **CMYK é para impresso** e está anotado como comentário em
  `tokens/colors.css` e no card "Cores oficiais · CMYK". São valores de chapa
  definidos pela marca: **nunca converta o HEX para CMYK automaticamente**
  (nem o contrário): a conversão de máquina desloca o amarelo para o verde.
- O preto da marca imprime como **rich black 0/80/100/100** (não K100 puro), o
  que lhe dá o calor marrom característico. Em tela é #000000.
- `--brand-sombra-marrom` (#593300) nasceu como cor de impressão (sombras e
  gravuras); em tela ela é usada como base das sombras quentes e do fundo
  escuro 04.

---

## Conteúdo · fundamentos (CONTENT FUNDAMENTALS)

**Como a BARYGEN escreve.** Fala com o produtor de igual para igual: direta,
técnica quando precisa, sem promessa vazia e sem jargão de agência.

Três princípios, do manual:

1. **Direto ao ponto.** Frases curtas. O dado primeiro, o adjetivo depois: se
   sobrar espaço.
2. **Técnico sem arrogância.** Genética, sanidade e stand com precisão, em
   linguagem que o campo entende.
3. **Confiante, nunca exagerado.** A marca afirma o que pode provar na lavoura.
   Resultado se mostra, não se grita.

Assim:

- "BG307 Max: feito para a rentabilidade do produtor."
- "Venha ver a espiga em área comercial."
- "Recorde de vendas na Norte Show 2026."

Assim não:

- "A revolução definitiva que vai mudar sua vida!"
- "O milho mais incrível do universo."
- "Solução disruptiva e inovadora de agrotech."

Regras de escrita:

- **Emoji e emoticons: proibidos**, em qualquer peça, canal ou mensagem.
- Idioma: **português do Brasil**. Unidades do campo abreviadas em minúsculas
  (`sc/ha`, `ha`, `mm`). Safra escrita como `26/27`.
- Terceira pessoa institucional ("A BARYGEN mantém campos demonstrativos") ou
  imperativo convidativo ("Fale com um consultor da sua região."): nunca "nós
  somos os melhores".
- **Títulos em caixa alta**; frases de corpo em caixa normal.
- Rótulos micro (eyebrow, cabeçalho de tabela, KPI) em caixa alta com
  tracking largo. Rótulos de passo e de coluna: uma palavra.
- Números **sempre com unidade e base de comparação**: "218 sc/ha · ▲ 12% vs.
  safra anterior".
- Alerta: primeira frase afirma o fato (negrito, com ponto), segunda explica a
  consequência. Toast: uma linha, sem ponto final.
- Nada de reticências decorativas, exclamação múltipla ou superlativo sem dado.

---

## Fundamentos visuais (VISUAL FOUNDATIONS)

**Cor.** Paleta curta de propósito, em três níveis:
**principais**: preto (base de seriedade, com o preto absoluto #000 de fundo) e
amarelo principal (a cor do grão); **tons de amarelo**: detalhe, contraste,
claro e suave, para o tom sobre tom; **terciárias**: laranjado e sombra marrom,
de uso raro, numa peça especial e nunca como fundo padrão. Proporção de uso:
**45 preto · 30 amarelos (principal e tons) · 20 suave/branco · até 5
terciárias**. O texto de destaque sobre o claro é o âmbar escuro `--text-accent`
(#865400, um tom do amarelo), não o laranjado. Cores funcionais (verde, vermelho, azul,
laranja) só marcam estado de sistema: proibidas em títulos, CTAs e peças de
marca. Cada cor oficial tem escala 50 (fraca) → 900 (forte) em
`tokens/colors.css`, gerada por mistura quente: os passos claros vão para
#FFFDF7, os escuros para #241300: nunca para cinza neutro.

**Tipografia.** Duas famílias, cada uma com seu papel. **Commissioner** é a
dos títulos e do nome na logo: sempre em caixa alta, de SemiBold (600) a ExtraBold
(800) conforme a hierarquia. **Be Vietnam Pro** é a do corpo de texto, até
30 px. Teto rígido de **56 px**: nenhum texto, em nenhuma peça, ultrapassa.
Título em ExtraBold 800 puro ou na mistura ExtraBold + SemiBold (o mesmo
contraste do nome na logo). O nome é sempre **BARY em Commissioner SemiBold, GEN em
Commissioner ExtraBold** (ver "Regras de marca: nome e tipografia").

**Espaçamento e grid.** Tudo múltiplo de 8 (4 px é o único meio-passo).
Container 1240 px, gôtera 56 px (36 px em tablet, 24 px em celular). Seções
respiram 96 a 128 px na vertical em páginas institucionais.

**Cantos.** 6 px campos · 8 px botões · 12 a 14 px cartões · pílula (99 px) em
selos e chips. Nada de raio grande e macio: a marca é técnica.

**Cartões.** Sempre tom sobre tom com o fundo. No claro: branco, borda de 1 px
em `rgba(10,10,10,.10)`, raio 14 px, **sem sombra em repouso** (a sombra aparece
no hover, nível 2). No preto: `--tom-preto-2` com borda `--tom-preto-linha`.
Nunca cartão branco sobre o preto nem cartão preto sobre o claro.

**Sombras.** Fracas e curtas, nunca distantes nem dispersas. Três níveis:
1 cartões, 2 hover, 3 dropdown e modal (o maior permitido). As sombras longas
`sh-4` e `ui-shadow-4` foram retiradas. Existe uma família paralela quente
(`--sh-warm-*`) baseada em `rgba(89,51,0,…)`, usada quando o elemento está sobre
fundo amarelo. **Nunca sombra cinza-azulada.** Sombras internas só em campos
afundados.

**Bordas e traços.** 1 px para regras e cartões, 1,5 px para controles de
formulário e botões de contorno, 2,5 px para o sublinhado de aba ativa. Linhas
sobre preto: `rgba(251,249,245,.16)`.

**Fundos.** Principais e limpos: preto absoluto e claro (suave), mais a faixa
amarela. Destaque preferido: tom sobre tom. Alternativos, um por página:
degradês do preto com o amarelo, papel e seções com as curvas da palheta;
degradês marrom e laranjado só raramente (ver Fundos e textura).
Gradientes existem só em dois papéis: faixa de marca (amarelo detalhe →
contraste) e **gradiente de proteção** sobre imagem (scrim inferior, lateral,
plano ou cápsula com blur de 6 px). Sem gradiente arco-íris, sem roxo-azulado.

**Textura.** Só a tela de pontos adensados, de 0 a 15% de opacidade e com
cautela (ver Fundos e textura). Nada de malhas, retículas, pinceladas ou formas
soltas.

**Animação.** Na interface, só transições curtas de estado (hover, press,
foco): easing `cubic-bezier(.16,.84,.44,1)`, 120 ms (micro) e 180 ms (UI). **Sem
bounce, sem elástico.** As entradas e os laços decorativos foram retirados; o
movimento de marca vive no vídeo (página Vídeo). Tudo desligado sob
`prefers-reduced-motion`.

**Botões.** Retângulo compacto com cantos de 8 px, texto em negrito sem caixa
alta, em três alturas: 32, 40 (padrão) e 48 px, com 12, 20 e 24 px nas
laterais e 16 px entre botões vizinhos. Pequeno no desenho, generoso no toque:
a área clicável chega a 44 px. Selos têm cerca de 19 px e chips 32 px. Botão
nunca é pílula (chip e selo) nem círculo com letras (avatar). Um primário por
tela. Cada seção tem os seus: no claro, primário com contorno, fantasma ou
seta; no preto, primário com tom sobre tom preto; sobre o amarelo, o primário
vira preto e a segunda ação é o tom sobre tom amarelo; sobre foto, primário
com vidro amarelo (página Componentes › Botões).

**Hover.** Botão primário: escurece para amarelo contraste. Botão de contorno e
fantasma: fundo `rgba(10,10,10,.05 a .06)`. Item de lista/menu: mesmo tint.
Cartão: sobe 3 px e ganha sombra quente. Link de texto: sublinhado cresce da
esquerda. Item de índice: recua 12 px e vira amarelo.

**Press.** Escala 0,985 a 0,97, sem mudança de cor. Foco: **anel de 2 px em
amarelo contraste com offset de 2 px**: sempre visível, nunca removido.

**Transparência e blur.** Usados com parcimônia: scrim sobre imagem, cápsula de
legenda (blur 6 px), overlay de modal (`rgba(10,10,10,.55)`) e, ocasionalmente,
o **vidro amarelo** (`.bry-glass-amarelo`, um por tela, sobre foto ou fundo
escuro; ver Tom sobre tom). Nenhum outro vidro fosco.

**Imagem.** Fotografia de lavoura, espiga e campo: luz quente de fim de tarde,
saturação natural, grão leve aceitável. Sem filtro azulado, sem preto e branco,
sem colagem. O sistema **não inclui fotos**: use as imagens oficiais da marca e,
em mocks, marcadores neutros com o fundo escuro.

**Layout.** Barra superior preta é o padrão institucional. Herói full-bleed;
conteúdo em container de 1240 px. Elementos fixos: apenas a barra superior e,
em portal, o menu lateral de 240 px. Nada flutua sobre o conteúdo além de
modal, dropdown e toast.

---

## Iconografia (ICONOGRAPHY)

- Sistema **próprio, de linha**: traço 1,5 px, grade 24 px, cantos
  arredondados, sem preenchimento. Herda a cor do texto que acompanha:
  **nunca multicolorido**.
- Não existe fonte de ícones nem sprite no pacote entregue: os glifos vinham
  como **SVG inline** no manual v03. Todos os **15 glifos oficiais** foram
  portados para `components/core/Icon.jsx` (`buscar, conta, agenda, local,
  telefone, email, avancar, voltar, baixar, enviar, filtrar, menu, fechar,
  confirmar, casa`) e estão no card "Iconografia".
- Dentro de botões: 16 px com traço 2. Em menus e listas: 16 px, traço 1,5.
  Ícone decorativo grande (upload, estado vazio): 28 a 32 px.
- **Substituição declarada:** para necessidades além dos 15 glifos, use
  [Lucide](https://lucide.dev): mesma família de traço fino e cantos
  arredondados. Nenhum ícone novo foi desenhado à mão aqui.
- **Emoji não é usado em nenhuma hipótese.** Caracteres unicode aparecem só
  como sinais funcionais herdados do manual: `✓ ✕ ! i` em alertas e passos,
  `+ −` no acordeão, `‹ › …` na paginação, `▲ ▼` em tendência de KPI,
  `·` como separador editorial.
- Logos: sempre o componente `<Logo>` ou os arquivos oficiais em Assets ›
  Logos (SVG preferencial; PNG só onde SVG não for aceito). Nunca redesenhe,
  redigite ou reconstrua a marca.

---

## Fontes de texto (arquivos)

**Be Vietnam Pro**: 9 arquivos .ttf oficiais em `assets/fonts/`, declarados em
`tokens/fonts.css`. A família também está **disponível gratuitamente no Google
Fonts**: <https://fonts.google.com/specimen/Be+Vietnam+Pro>. Para projetos que
não podem embarcar os .ttf, o CDN equivalente está comentado no mesmo arquivo.
**Commissioner** é a família dos títulos e do nome na logo, também disponível no
Google Fonts: <https://fonts.google.com/specimen/Commissioner>. Em `fonts/` ela
é uma fonte variável (eixo de peso 100 a 900), então SemiBold 600 e ExtraBold 800
saem do mesmo arquivo. Use `fonts/Commissioner-700.woff2`, o subconjunto latino,
com A a Z e os acentos do português. Os arquivos `Commissioner-400/500/600.woff2`
são idênticos entre si: são o subconjunto *latin-ext*, que não tem A a Z, e por
isso não estão declarados em `tokens.json`.

Nenhuma fonte foi substituída: todos os arquivos originais estavam no pacote.

---

## Como usar

### HTML puro

```html
<link rel="stylesheet" href="styles.css">
```

Um único arquivo importa tudo (fontes, cores, tipografia, espaçamento,
elevação, movimento, formas, texturas, fundos, classes de componente e base).

### Next.js (App Router)

```tsx
// app/layout.tsx
import '@/design-system/styles.css';
```

Copie `assets/fonts` para `public/` e ajuste os `url()` do `tokens/fonts.css`.
O `<Logo>` desenha o SVG sozinho e não precisa de arquivos. Todos os
componentes são **apresentacionais e sem estado**: funcionam como Server
Components; adicione `'use client'` apenas no seu arquivo que controla o
estado (aba ativa, valor de campo, abertura de modal). Sem dependências npm:
apenas React.

---

## Índice do repositório

| Caminho | O que é |
|---|---|
| `styles.css` | Entrada única: apenas `@import` |
| `tokens/colors.css` | Cores oficiais, escalas 50 a 900, funcionais, aliases semânticos, CMYK anotado |
| `tokens/fonts.css` | `@font-face` de Be Vietnam Pro |
| `tokens/typography.css` | Escala, pesos, medidas, classes de texto |
| `tokens/spacing.css` | Espaço, container, breakpoints, raios |
| `tokens/elevation.css` | Sombras, sombras quentes, brilhos, anéis |
| `tokens/motion.css` | Easing, durações e estados de hover |
| `tokens/shapes.css` | Vazio: formas decorativas retiradas |
| `tokens/textures.css` | A textura de pontos adensados |
| `tokens/backgrounds.css` | Fundos principais, degradês, papel, faixas de marca, scrims |
| `tokens/components.css` | Classes `.bry-*` de todos os componentes |
| `tokens/base.css` | Reset e defaults de documento |
| `components/` | Componentes React (ver lista abaixo) |
| `guidelines/` | Cards de fundamentos do painel Design System |
| `catalogo/` | Catálogo navegável de elementos |
| `ui_kits/site-institucional/` | Recriação do site da marca |
| `ui_kits/portal-do-produtor/` | Recriação do portal/sistema |
| `assets/logos/` | Logos SVG (+ PNG em `png/`, variações em `extras/`) |
| `assets/fonts/` | Be Vietnam Pro .ttf |
| `assets/reference/` | `cores-certas.jpg`: paleta vigente |
| `SKILL.md` | Uso como Agent Skill |

## Componentes

**core**: Button, IconButton, ButtonGroup, Badge, Chip, Avatar, AvatarGroup,
Tooltip, Card, Icon, Logo.

**forms**: Field, Input, Textarea, Select, InputGroup, Checkbox, Radio,
Switch, Range, SearchBox, Upload, QtyStepper.

**navigation**: Navbar, Tabs, PillTabs, Breadcrumb, Pagination, Steps,
SideMenu, Dropdown.

**data**: Table, Accordion, KPI, ProductCard.

**feedback**: Alert, Toast, Modal, Progress, Skeleton, Spinner, EmptyState.

**patterns**: Hero, CTAStrip, LoginCard, SiteFooter, SectionDivider, Stage.

Cada componente traz `<Nome>.d.ts` (contrato de props) e `<Nome>.prompt.md`
(quando usar + exemplo). O inventário reproduz exatamente as sete categorias do
guia de interface v03.

### Adições intencionais

Três componentes não existiam como peça isolada no pacote entregue e foram
criados para tornar o sistema utilizável sem reinventar nada:

- **Icon**: invólucro dos 15 glifos SVG que estavam soltos no manual.
- **Logo**: desenha a logo oficial em SVG e aplica a regra de versão por
  fundo, para que ninguém escolha o arquivo errado.
- **Field**: o manual mostra rótulo + campo + mensagem sempre juntos; o
  componente formaliza esse trio.

`Stage` e `SectionDivider` vêm do próprio manual (palco de componentes e
divisor de parte).

## Migrated from a legacy design system

This system was carried over from the standalone version on 2026-09-16. The part of this README the author wrote predates the move, so any file names in it are the old ones. Where things are now:

- `styles.css`, `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/elevation.css`, … and 6 more (the global stylesheets) → `project/components/bundle.css`, with the token declarations moved to `project/tokens.json` (`project/tokens.css` is generated from them)
- `_ds_bundle.js` → `project/components/bundle.js`
- showcase pages, each kept whole as one component’s preview (a page of examples, not an export of the bundle): `catalogo/index.html` → `project/components/Index/preview.html`; `components/core/core.card.html` → `project/components/Core/preview.html`; `components/data/data.card.html` → `project/components/Data/preview.html`; `components/feedback/feedback.card.html` → `project/components/Feedback/preview.html`; `components/forms/forms.card.html` → `project/components/Forms/preview.html`; `components/navigation/navigation.card.html` → `project/components/Navigation/preview.html`; `components/patterns/patterns.card.html` → `project/components/Patterns/preview.html`; `guidelines/bg-dark-1.card.html` → `project/components/BgDark1/preview.html`; … and 17 more
- the migration report, which lists what did not come across: `project/assets/notes/MIGRATION-REPORT.md`

---

## Consuming this system (generated — do not edit)

Every path named below is under `project/` in this design system: read `project/api/tokens.md`, not `api/tokens.md`.

`components/bundle.js` defines `window.BarygenDesignSystem_a84d4b` (50 components); `components/bundle.css` is its stylesheet; `tokens.css` is every token as a CSS variable plus `@font-face` for the fonts. `components/bundle.css` reads its variables from `tokens.css`. The bundle needs `components/lib/react.production.min.js` (`window.React`), `components/lib/react-dom.production.min.js` (`window.ReactDOM`), loaded before it. Build any UI by mounting these components; never hand-build a control or draw an icon the system provides.

- **Standalone page:** inline `tokens.css` and `components/bundle.css` in a `<style>`, then the library files and `components/bundle.js` as classic scripts (a file containing `</style`, `</script` or `<!--` breaks an inline element: write the sequence `<\/style`, `<\/script` or `\x3C!--` in your copy, or load that file by URL).
- **Design canvas:** bring `components/bundle.css` and `components/bundle.js` onto the canvas in full, as the canvas type’s design-system components reference says (a server-side copy first where it offers one); load the stylesheet before the script; skip the library files (the artboard supplies React); mount with `<x-import component-from-global-scope="BarygenDesignSystem_a84d4b.<Comp>" …>`.
- **Slides deck, or any surface that cannot run the bundle:** tokens and fonts — the values are on `api/tokens.md`; the deck takes `tokens.json` by file path for its colour pickers, and fonts as “Fonts” below says.

Fonts: `tokens.css` loads each font from its file, by path.

- **Design canvas:** copy `tokens.css`, `fonts/Commissioner-700.woff2`, `fonts/BeVietnamPro-Regular.ttf`, `fonts/BeVietnamPro-Italic.ttf`, `fonts/BeVietnamPro-Medium.ttf`, `fonts/BeVietnamPro-MediumItalic.ttf`, `fonts/BeVietnamPro-SemiBold.ttf`, `fonts/BeVietnamPro-Bold.ttf`, `fonts/BeVietnamPro-BoldItalic.ttf`, `fonts/BeVietnamPro-ExtraBold.ttf` and `fonts/BeVietnamPro-Black.ttf` to the same paths under the canvas’s `project/ds/<folder>/` (`<folder>` is the folder you install this system under; `fonts/Commissioner-700.woff2` lands on `project/ds/<folder>/fonts/Commissioner-700.woff2`), in the same call that installs this system. Link that copy of `tokens.css` in the artboard’s `<head>` as `ds/<folder>/tokens.css`, or as Design’s instructions say for an artboard in a folder. If the install’s reply leaves a font out, bring that font in as for any other page.
- **Slides deck:** for each family you use in the deck (`faces` holds at most the number of typefaces Slides’ `deck-files.md` gives), install its file with the system and name the path it lands on as that family’s `src` in `project/deck.json` `faces`, under the key in the Slides column. A deck takes a font as a file only under the rule in Slides’ `fonts.md` (no space or leading underscore in its path, for two): any other font, or one kept by id, is uploaded as `fonts.md` says.
- **Any other page:** one file per family is enough (below: the upright face nearest regular weight; bold and italic synthesize). Fetch it as the fetch column says (Artifact tool `read`, that id or path as `path`), upload it as an asset (`publish`, `file_path`, `asset:true`) and declare it with an `@font-face { font-family: "<family>"; src: url(<uploaded>) }` rule.

| family | file | fetch | CSS | Slides `faces` key |
| --- | --- | --- | --- | --- |
| Commissioner | `fonts/Commissioner-700.woff2` (weight 100 900) | `read` the file with `project/` in front | `var(--font-display)` | `commissioner` |
| Be Vietnam Pro | `fonts/BeVietnamPro-Regular.ttf` (weight 400) | `read` the file with `project/` in front | `var(--font-body)` | `be-vietnam-pro` |

**Read, per thing:** a component’s props, parts and examples: `api/components/<Comp>.md`; token values: `api/tokens.md`; stored assets and their paths: `api/assets/<Group>.md`. After this README, fetch the cards and fonts you need in ONE message as parallel calls — none depends on another.

**Two rules.** Before you use a thing — a component, a token group, an icon, an asset — read its card from the index below; a value you did not read from a card is a guess. `tokens.json`, `manifest.json` and `design-system.json` are sources for tools: hand them over. `components/<Comp>/README.md` and `assets/<Group>/README.md` are the long-form second read a card links to; `SKILL.md` and `artifact-type/` beside them are authoring guidance, not needed to consume the system.

## Index (generated — do not edit)

**Tokens**

- `api/tokens.md` — Every token: surface, text, fill, palette, type, spacing, shadow, motion, font-weight, line-height, letter-spacing, other. (15.9k)

**Icons and assets**

- `api/assets/Logos.md` — 8 files, by asset id. (2.1k)
- `api/assets/Elementos.md` — 11 files, by asset id. (2.2k)
- `api/assets/cone-de-app.md` — 2 files, by asset id. (0.9k)

**Components** (`api/components/<Comp>.md`, 72; 22 of them showcase pages)

- `Avatar` — Avatar circular com iniciais (ou foto) — consultores, usuários do portal · `AvatarGroup` — Pilha de avatares com contador — equipe de consultores de uma região · `Badge` — Selo de status ou etiqueta de produto — texto curto, caixa alta, pílula · `Button` — Botão de ação — a hierarquia da tela nasce dele: um primário, o resto secundário/contorno/fantasma · `ButtonGroup` — Grupo segmentado de botões para alternar recortes de um mesmo dado (dia/semana/safra) · `Card` — Cartão base — a caixa de conteúdo padrão do sistema (raio 14px, borda 1px, sem sombra em repouso) · `Chip` — Filtro selecionável de uma lista — safra, finalidade, região · `BARYGEN_ICONS` — BARYGEN_ICONS · `Icon` — Ícone de linha oficial da BARYGEN — use sempre que uma interface precisar de um glifo; nunca desenhe SVG novo à mão · `IconButton` — Botão quadrado (42px) ou circular para uma ação sem texto — busca, fechar, avançar · `Logo` — Logo oficial BARYGEN em SVG, com a versão escolhida pelo fundo; na dúvida entre arranjos, use a horizontal · `BARYGEN_LOGO` — BARYGEN_LOGO · `Tooltip` — Bolha preta de apoio, sempre acima do alvo · `Accordion` — Perguntas frequentes e fichas técnicas dobradas · `KPI` — Indicador de resultado — produtividade, campos, ciclo · `ProductCard` — Cartão de híbrido — 280px, topo preto (ou amarelo) com o ícone da marca · `Table` — Tabela de conteúdo técnico — cabeçalho micro em caixa alta, linhas de 14px · `Alert` — Aviso fixo no fluxo da página — resultado de envio, estoque, atualização técnica · `EmptyState` — Estado vazio com caminho de saída — nunca uma tela em branco · `Modal` — Janela de confirmação — decisão que não pode acontecer por engano · `Progress` — Barra de progresso determinada (envio, preenchimento de cadastro) · `Skeleton` — Placeholder de carregamento com brilho horizontal · `Spinner` — Carregamento indeterminado — anel neutro com topo amarelo-contraste · `Toast` — Confirmação flutuante e passageira — preta, com selo amarelo · `Checkbox` — Caixa de marcação de 18px com accent-color amarelo-contraste · `Field` — Invólucro de campo: rótulo, controle e mensagem de apoio na vertical · `Input` — Campo de texto padrão — 11px/14px de padding, borda 1.5px, raio 8px · `InputGroup` — Campo com unidade colada — área em hectares, sacas, valores · `QtyStepper` — Contador de quantidade — sacas, bolsas, hectares inteiros · `Radio` — Escolha única em lista curta (2–4 opções) — safra verão, safrinha, irrigado · `Range` — Controle deslizante para faixas aproximadas (população, área) · `SearchBox` — Campo de busca com o ícone oficial à esquerda · `Select` — Lista suspensa com a seta oficial (SVG embutido no CSS) · `Switch` — Chave de preferência com efeito imediato (não precisa de "Salvar") · `Textarea` — Campo de texto longo — altura mínima de 96px, redimensionável na vertical · `Upload` — Área de envio de arquivo com borda tracejada · `Breadcrumb` — Trilha de navegação — sempre no topo do conteúdo, nunca dentro de cartão · `Dropdown` — Menu suspenso de conta e ações secundárias — sombra nível 3, largura 220px · `Navbar` — Barra superior da marca: logo à esquerda, links no centro, uma ação à direita · `Pagination` — Paginação numérica de listas longas (catálogo, notícias, campos) · `PillTabs` — Alternador compacto em pílula para recortes curtos — grãos, silagem, ambos · `SideMenu` — Menu lateral de 240px para portais e sistemas · `Steps` — Indicador de progresso de formulário longo — cadastro, pedido, inscrição em evento · `Tabs` — Abas de conteúdo de uma mesma página — características, posicionamento, resultados · `CTAStrip` — Faixa amarela de conversão, entre seções · `Hero` — Herói de página ou de produto, sobre o fundo escuro (padrão) ou claro da marca; em destaque, sobre um degradê (dark-3 marrom, dark-4 âmbar, light-4 aurora) · `LoginCard` — Cartão de acesso — logo centralizada, campos, botão de largura total · `SectionDivider` — Divisor de parte, em página longa — preto, título grande, números de apoio · `SiteFooter` — Rodapé institucional preto, 1,4fr + três colunas de links · `Stage` — Palco de demonstração — a caixa em que o manual exibe componentes
- **Effects**: `BgDark1` (showcase page) — Preto puro — padrão institucional, sem ornamento · `BgLight1` (showcase page) — Fundo de leitura padrão (#FBF9F5) · `BgScrims` (showcase page) — Legibilidade sobre imagem — scrim e cápsula · `EffectsHover` (showcase page) — 24 comportamentos de hover e press — passe o mouse para ver · `Fundos` (showcase page) — Fundos de seção: os principais, limpos (escuro e claro), e os alternativos, com degradês entre o preto e as cores da marca e o papel com linhas sutis · `SecoesPalheta` (showcase page) — Seções alternativas com as curvas da palheta: borda curva, forma contínua de cima a baixo, faixa de transição e contornos sutis, sempre de borda a borda · `Textura` (showcase page) — A única textura da marca: pontos adensados com opacidade de 0 a 15%, a ser usada com cautela
- **Components**: `Core` (showcase page) — Botões, selos, chips, avatares, tooltip · `Data` (showcase page) — Tabela, indicadores, cartão de híbrido, acordeão · `Feedback` (showcase page) — Alertas, toast, modal, progresso, vazio · `Forms` (showcase page) — Campos, seleção, opções, upload · `Navigation` (showcase page) — Barra, abas, trilha, paginação, passos, menus · `Patterns` (showcase page) — Herói, faixa de conversão, acesso, rodapé
- **Catálogo**: `Index` (showcase page) — Índice do catálogo visual
- **Portal do produtor**: `Index2` (showcase page) — Acesso, visão geral, campos, pedidos e preferências
- **Site institucional**: `Index3` (showcase page) — Home, híbrido, campos, eventos e contato — clicável
- **Marca**: `LogoConstrucao` (showcase page) — Construção da logo BARYGEN: anatomia, o módulo B, a malha, as proporções e as medidas das versões horizontal e vertical · `LogoElementos` (showcase page) — Os elementos da logo separados (palheta, hélice de DNA, símbolo e logotipo), os nomes de cada peça no SVG e as cores que os elementos podem receber · `LogoUso` (showcase page) — Regras de uso da logo: quando usar horizontal, vertical ou só o símbolo, tamanhos mínimos, ícone de app para a App Store e usos incorretos · `LogoVersoes` (showcase page) — As quatro versões da logo (principal, principal branca, monocromática preta e monocromática branca) nos arranjos horizontal e vertical, e qual usar em cada fun… · `MidiasSociais` (showcase page) — Regras para publicações no Instagram e no Facebook: formatos (9:16, 4:5 e 16:9) e margens de segurança para publicação normal e patrocinada · `Video` (showcase page) — Padrão de vídeo da BARYGEN: o encerramento com a logo (padrão e opcionais), a legenda de nome e a posição de cada elemento na tela
