A mixsafe é o SaaS de gestão de calda para aplicação agrícola: diz se os produtos podem ir juntos no tanque, em que ordem, com que água e em que janela de clima. É uma empresa digital do 3F Group, com sócios na indústria de tecnologia de aplicação.

Este sistema tem **dois temas** (Escuro, o preferencial da marca, e Claro), **duas famílias** (Exo e Be Vietnam Pro), **87 famílias de componentes** e **409 aplicações numeradas**, cada uma com código próprio (`BTN-01`, `HER-02`) para ser citada em briefing e revisão.


## Regras que valem antes de qualquer outra

1. **Toda criação ou recriação de design obedece às exigências da App Store da Apple.** A mixsafe é um aplicativo da App Store, e a Apple revisa com régua. Qualquer tela, componente, peça ou variação nova, e qualquer refeitura do que já existe, nasce dentro dessas regras: alvo de toque de 44 pt, texto nunca menor que 11 pt, texto que acompanha o ajuste de tamanho do sistema, contraste de 4,5:1 (7:1 no tema claro), nada rolando para o lado, campos com 16 px, áreas seguras respeitadas, tema claro e escuro completos, menos movimento quando a pessoa pede. A lista inteira, com o que o sistema garante e o que fica para o produto, está na família **AppleRegras**. Nada pode ficar fora.
2. **Nada se publica sem a auditoria no navegador zerada.** A auditoria no navegador mede sete coisas nas 86 famílias, nos dois temas, em 375 px, 320 px e na largura de mesa: estouro horizontal, contraste real, alvos de toque, campos, texto mínimo, sobreposição entre textos e corte por caixa escondida. O resultado exigido é zero nas sete. Qualquer item fora disso é defeito, e entra antes da publicação.
3. **A marca não se redesenha.** Logo, símbolo e palavra saem sempre dos arquivos oficiais; nenhum ícone imita o símbolo; nada da marca existe abaixo de 28 px.
4. **A cor com significado não identifica categoria.** Paleta e status (`acao`, `sucesso`, `atencao`, `erro`, `info`) carregam sentido; grupo e categoria usam as seis cores intermediárias.
5. **Tom sobre tom, nunca o tema invertido.** Caixa, aviso e dica se destacam por fio, luz e sombra curta, não por saltar para o tema oposto.

## Conteúdo e voz

**Tom.** Técnico e direto, com a calma de quem já viu muita safra. A mixsafe explica o porquê em uma frase e parte para a ação. Fala com produtor, agrônomo, operador e revenda.

**Pessoa.** Trate por **você**. A marca fala em primeira pessoa do plural só em institucional ("A mixsafe cruza produtos, água e clima").

**Caixa.**
- O nome é sempre **mixsafe**, em minúsculas, inclusive no começo da frase e em títulos. Site: mixsafe.com.br; aplicativo: mixsafe.ai; e-mail: contato@mixsafe.ai.
- Frases de impacto (`display-1`, `display-2`) vão em minúsculas, como a logo: "da calda agrícola até a gota".
- Títulos funcionais e botões usam caixa de frase: "Validar calda", "Receita de dessecação".
- Sobretítulos em caixa alta pela classe `ms-sobretitulo`, nunca digitados em maiúsculas.

**Regras fixas.**
- Português com acentuação completa em todo texto público.
- Sem travessão em texto público: use vírgula, dois-pontos ou ponto.
- Afirmações positivas: "Aguarde para aplicar" em vez de "Não aplique agora".
- Nada de "revolucionário", "garantido", "o melhor do mercado", urgência artificial ou depoimento inventado.
- Números sempre com unidade e vírgula decimal: 150 L/ha, 5,8, 26 °C, 84,5 ha. Milhar com ponto: 2.000 L.
- Status sempre com ícone **e** palavra: Compatível, Atenção, Incompatível, Sem dados, Em análise.
- A mixsafe é digital: publique o site mixsafe.com.br, o e-mail contato@mixsafe.ai, o WhatsApp oficial (66) 99213-4444 e o Instagram @mixsafe.ai. O WhatsApp é canal da empresa: publique sem nome de pessoa. O aplicativo fica em mixsafe.ai. Nunca publique endereço.
- Exemplos de produto, dose e compatibilidade nas telas são ilustrativos. Recomendação técnica só com validação agronômica.
- Sem emoji na interface e nas peças institucionais.

**Frases de referência.**
- Assinatura, a linha inteira: "inteligência em tecnologia de aplicação, da calda agrícola até a gota".
- Frase de impacto, a metade curta: "da calda agrícola até a gota". É a mesma ideia em dois comprimentos: a longa assina, a curta grita.
- Hero: "mistura segura do tanque ao talhão".
- Apoio: "Compatibilidade, dose e ordem de mistura calculadas antes do primeiro produto entrar no tanque."
- Botões: "Validar calda", "Criar receita", "Falar com a equipe", "Ver ordem de mistura".
- Vazio: "Nenhuma receita ainda. Monte a primeira calda e ela fica salva para as próximas aplicações."

**Vocabulário.** calda, receita, ordem de mistura, compatível, formulação (WG, SC, EC, SL), condicionador de calda, pH, dureza, janela de aplicação, Delta T, deriva, talhão, safra, pulverizador, bico, vazão.

## Fundamentos visuais

### Cor

A identidade é **azul-business-04 com a logo toda branca**. O `verde-80` é a cor da ação e da calda compatível, usada com parcimônia.

- Fundo preferencial: `azul-business-04` (token `fundo` no tema Escuro). Tema Claro: `web-tom`.
- Degradês só entre azuis da paleta, sempre terminando em `azul-business-04`: `--ms-degrade-marca` (160°, `azul-business-03` para `azul-business-04`), `--ms-degrade-radial`, `--ms-degrade-profundo` (com `azul-business-02`), `--ms-degrade-luz`, `--ms-degrade-horizonte` e `--ms-degrade-noite` (até `azul-noite`).
- Botão primário em `acao` (`verde-80`) com `texto-sobre-acao` (`azul-noite`). Nunca texto branco sobre verde.
- `azul-business-01` e `azul-business-02` são cores de apoio: gráficos, luz de degradê, ilustração. Não servem como texto pequeno sobre o fundo escuro.
- Adições derivadas da paleta: `azul-noite`, `verde-claro` e `verde-escuro`, para texto sobre verde, foco e status legíveis nos dois temas.
- Status: `sucesso`, `atencao`, `erro` e `info`, cada um com `-fundo` e, quando precisa de preenchimento sólido, `-solido`. Verde e vermelho sempre acompanhados de ícone e palavra.

**A regra que protege a paleta.** As cores da marca e as de status carregam significado: verde quer dizer compatível, amarelo quer dizer atenção, vermelho quer dizer incompatível, azul quer dizer informação, e azul business é a própria marca. **Nenhuma delas identifica grupo.** No momento em que uma categoria qualquer vira verde, o verde deixa de querer dizer compatível, e quem olha rápido no sol perde a única pista que tinha.

Para identificar categoria, tipo, linha ou etiqueta de cliente, use as seis **cores de categoria**: `categoria-roxo`, `categoria-rosa`, `categoria-ameixa`, `categoria-indigo`, `categoria-turquesa` e `categoria-bronze`. São cores intermediárias, nascidas da mistura das principais e distantes de todas elas, e não carregam estado nenhum. Detalhe na família **CoresDeCategoria**.

### Tipografia

- **Exo** (marca): títulos, botões, números, rótulos de navegação. O **mix** da logo é Exo ExtraBold Italic e o **safe** é Exo Medium Italic. Frases de impacto usam ExtraBold Italic (`display-1`, `display-2`).
- **Be Vietnam Pro** (texto): parágrafos, campos, tabelas, legendas.
- Escala: `display-1` 42, `display-2` 32, `titulo-1` 28, `titulo-2` 22, `titulo-3` 19, `titulo-4` 17, `corpo-g` 18, `corpo` 16, `corpo-p` 14, `legenda` 12.
- **A escala é contida de propósito.** O topo dela foi encolhido para a marca soar técnica, e não publicitária: título grande grita, e quem lê a mixsafe está resolvendo um problema, não sendo convencido. O texto de leitura continua em 16, que é o tamanho confortável, e nada do corpo foi reduzido.
- Números de campo em `dado-g` ou `dado`, sempre com algarismos tabulares (`ms-tabular`).
- Texto corrido até 65 caracteres por linha; títulos com `text-wrap: balance`.
- **Todo tamanho de texto está em `rem`**, com raiz de 16 px, para acompanhar o ajuste de tamanho de texto do sistema (Dynamic Type, na Apple). Alturas de controle, espaços e raios ficam em px de propósito: a letra cresce, a estrutura não desmonta.
- **Piso de 11 px** em qualquer texto, que é o mínimo que a Apple aceita.

### Tema: claro e escuro

O sistema tem dois temas completos e igualmente definidos, e a escolha se faz na barra da esquerda.

**Escuro** (`azul-business-04` de fundo, logo branca) é o tema da marca e o padrão do produto, do site e das peças.

**Claro** (fundo `#e3e9ee`, `branco` nas superfícies, logo em `azul-business-04`) é o tema do campo e do trabalho longo: a tela do celular embaixo do sol, a tabela cheia, o relatório aberto por horas. No claro a superfície é mais clara que o fundo, o contrário do escuro; a borda ganha peso, porque é ela que separa o cartão do fundo; e a sombra fica mais fraca, porque sombra forte em fundo claro suja. O verde da ação é a única cor que não muda entre os dois.

O claro é medido com régua mais curta do que a do escuro, de propósito. No sol o olho perde faixa: o que seria confortável na sombra vira cinza apagado no talhão. Por isso, no tema claro, **todo texto fica em 7:1 ou mais** sobre a superfície em que vive, contra os 4,5:1 que a norma pede, e o preenchimento translúcido do botão de alvo fica em 1,3:1 ou mais contra o cartão, para continuar visível quando a tela lava. A conferência roda a cada geração e o sistema recusa gerar se um par falhar.

Todo componente existe nos dois, e nenhum escreve cor fixa: todos leem o token, que tem um valor por tema. **Cada família deste sistema é mostrada duas vezes, no escuro e no claro, uma abaixo da outra**, para que a decisão de tema nunca dependa de imaginar como ficaria do outro lado. Detalhe na família **Tema**.

### Forma: a cápsula

O símbolo são três cápsulas. A cápsula (`raio-capsula`) é a forma de tudo que se toca: botões, selos, etiquetas, chaves, abas em cápsula, item ativo do menu. Superfícies usam no máximo `raio-3` (12 px); campos, `raio-2`.

### Espaço e layout

- Grade de 4 px: `espaco-1` a `espaco-24`.
- Site: largura máxima de conteúdo 1200 px, margem lateral `espaco-8` no desktop e `espaco-4` no celular, seções com `espaco-16` de respiro vertical.
- App: menu lateral de 248 px (76 px recolhido), conteúdo com `espaco-8`. No celular, navegação inferior e botão flutuante.
- Pontos de quebra: 375, 768 e 1440 px.

### Sombra, borda e foco

- Sombras curtas e próximas do elemento: `sombra-1` em cartão em repouso e `sombra-2` em tudo que flutua pouco, que é menu, calendário, botão flutuante, aviso e cartão elevado. `sombra-3` fica só para diálogo modal, e deve ser evitada no resto: em cartão e em aviso ela afasta demais o elemento do fundo.
- `borda` separa; `borda-forte` delimita controles (3:1 ou mais).
- Foco: anel sólido de 3 px em `foco` com 2 px de afastamento em botões; em campos, borda `foco` com halo `foco-anel`.

### Movimento

- Transições de interface em 180 ms, `cubic-bezier(.2, .7, .2, 1)`.
- Carregamento com tempo desconhecido: o símbolo em movimento, nunca spinner genérico. São dois movimentos, o **giro** lento e contínuo e a **varredura**, que repete o gesto da 06 Órbita. Os dois têm velocidade constante: nada acelera e freia a cada volta.
- Logo animada: a entrada oficial é a **Órbita**, chamada assim e não pelo número. É ela que se reproduz quando alguém pedir a logo animada, e as outras oito só entram quando pedidas pelo nome. O mesmo movimento dos três pontos vira a espera longa da família **Progresso**. Giros desaceleram com `ease-out` de quarta ordem; deslizes em `ease-in-out` cúbico; o ® pinga uma gota no fim.
- Sempre respeite `prefers-reduced-motion`: mostre o estado final.

### App na App Store

A mixsafe também vai para a App Store, onde o desenho passa por revisão humana. O grupo **App iOS** traz o que a Apple cobra e onde o sistema responde:

- **Ícone da loja** em 1024 px, **canto reto** e **sem canal alfa**, nas variantes clara, escura e matizada. A Apple aplica a máscara de canto dela: ícone que chega arredondado fica com a borda cortada duas vezes. Arquivos em `assets/app/ios/`. O ícone arredondado da web continua em `assets/app/` e os dois não se misturam.
- **Área de toque de 44 pt** em todo controle, pelo token `toque-minimo` e pela classe `ms-toque`, que cresce a área sem mexer no desenho.
- **Áreas seguras** somadas na navegação inferior, no cabeçalho móvel e no botão flutuante.
- **Texto que acompanha o tamanho escolhido no sistema**, com o mapa da escala da mixsafe para os estilos do iOS.
- **Entrar com a Apple, excluir a conta no app e texto de finalidade em cada permissão**: desenhados na família **AppleConta**.
- **Tela de abertura sem marca animada.** No iOS ela é a casca vazia da primeira tela.

Trate a família **Planos** como conteúdo de site, e não de app.

### Padrão de fundo

Padrão é exceção, e sobraram dois: o **pontilhado**, que dá grão sem desenhar nada, e o **fluxo**, para peça que fala de ordem. Nunca atrás de texto corrido, nunca acima de 12 % de opacidade, nunca dois na mesma peça, e nunca em documento impresso. Detalhe na família **Padroes**.

### Imagens

- Foto só de campo real do Mato Grosso e de operação real. Sem banco de imagem genérico.
- Sem foto disponível: capa com degradê de marca e padrão de cápsulas (família Padroes).
- Texto sobre foto exige película `sobreposicao`.

## Logo

A marca tem seis famílias só para ela, porque é o que mais se reproduz errado. **Construcao** traz o desenho cotado, **EscalaOtica** a espessura por tamanho, **PalavraReduzida** o que fica abaixo de 28 px, **AreaDeProtecao** o espaço livre, **Reproducao** o meio de saída e **Conferencia** a ferramenta que audita um arquivo.

A **animação da marca é a 06 Órbita**. As outras oito ficam guardadas na família **LogoAnimada** e só entram quando alguém pedir pelo nome.

- **Uma fonte de verdade.** Todos os números vivem num único arquivo de origem. O desenho, os arquivos, o CSS e o JavaScript são gerados dali: nenhum valor é digitado duas vezes.
- **Construção.** Caixa do símbolo de 200 unidades; cápsula de 180 por 43, traço de 6, núcleo de raio 11, a 0°, 60° e 120°. No logotipo: símbolo de 122, respiro de 26, palavra de 368,8 e ® de 30, em 553 por 128.
- **Proporção travada.** 4,32 de largura para 1 de altura. Escale pelos dois lados juntos.
- **Espessura por tamanho.** `traço = máximo entre 1,5 px e 3 % da caixa`. Abaixo de 28 px a marca deixa de ser o símbolo e passa a ser só a palavra, em Exo Medium Italic.
- **Versões.** Branca (preferencial) sobre fundos escuros; `azul-business-04` sobre fundos claros; sem ® abaixo de 44 px de altura.
- **Área de proteção.** O espaço de uma cápsula, nos quatro lados.
- **Mínimos.** 28 px de altura na tela e 39 mm de largura em offset. Abaixo disso, só a palavra. E mesmo o mínimo deve ser evitado: ele existe para o caso raro.
- **Arquivos** em `assets/`, todos gerados do mesmo desenho. Em código: `MixSafe.logo({cor, altura})`.
- **Conferência.** A ferramenta da família **Conferencia** diz se uma reprodução está no padrão, e o quanto saiu dele.
- O que nunca fazer: família UsosIncorretos.

## Iconografia

- Conjunto próprio de 57 ícones em cinco grupos (Produto e calda, Aplicação e campo, Clima, Status, Interface), grade 24 px, traço 1,75 px, pontas arredondadas, sem preenchimento.
- O ícone `mistura` é o símbolo reduzido: use para compatibilidade e para a própria marca em espaço pequeno.
- Em código: `MixSafe.icone('gota')` ou `<span class="ms-ico" data-ms-icone="gota"></span>` seguido de `MixSafe.hidratar()`. Folha completa: `mixsafe-icones.svg`.
- Sem emoji e sem bibliotecas de ícones de terceiros misturadas ao conjunto.

## Acessibilidade: contraste medido

Texto 4,5:1 ou mais; foco e borda de controle 3:1 ou mais. Cores com transparência medidas sobre `superficie`.

| Texto ou traço | Fundo | Escuro | Claro |
|---|---|---|---|
| texto | fundo | 12.8:1 | 10.4:1 |
| texto | superficie | 11.2:1 | 12.8:1 |
| texto | superficie-elevada | 10.1:1 | 12.8:1 |
| texto | superficie-destaque | 8.7:1 | 10.3:1 |
| texto-suave | fundo | 8.8:1 | 7.7:1 |
| texto-suave | superficie | 7.7:1 | 9.5:1 |
| texto-suave | superficie-elevada | 7.0:1 | 9.5:1 |
| texto-apagado | fundo | 7.7:1 | 7.2:1 |
| texto-apagado | superficie | 6.8:1 | 8.8:1 |
| texto-apagado | superficie-elevada | 6.1:1 | 8.8:1 |
| destaque | fundo | 6.2:1 | 7.8:1 |
| destaque | superficie | 5.4:1 | 9.6:1 |
| texto-sobre-acao | acao | 5.0:1 | 5.0:1 |
| texto-sobre-acao | acao-hover | 6.7:1 | 6.7:1 |
| texto-invertido | superficie-invertida | 12.8:1 | 12.8:1 |
| sucesso | sucesso-fundo | 4.8:1 | 7.0:1 |
| atencao | atencao-fundo | 5.6:1 | 7.1:1 |
| erro | erro-fundo | 5.0:1 | 7.5:1 |
| info | info-fundo | 4.7:1 | 7.2:1 |
| sucesso | superficie | 6.0:1 | 9.2:1 |
| atencao | superficie | 7.5:1 | 9.4:1 |
| erro | superficie | 5.5:1 | 10.3:1 |
| info | superficie | 6.2:1 | 9.6:1 |
| foco | fundo | 6.8:1 | 4.5:1 |
| foco | superficie | 6.0:1 | 5.5:1 |
| foco | superficie-elevada | 5.4:1 | 5.5:1 |
| borda-forte | superficie | 3.3:1 | 4.3:1 |
| borda-forte | fundo | 3.5:1 | 3.9:1 |
| alvo-tinta | alvo-fundo | 6.3:1 | 9.9:1 |
| alvo-tinta | alvo-fundo-forte | 5.5:1 | 8.7:1 |
| placeholder | superficie | 5.9:1 | 6.8:1 |
| rodape-texto | rodape-fundo | 11.3:1 | 7.9:1 |
| rodape-titulo | rodape-fundo | 7.4:1 | 7.4:1 |
| texto | rodape-fundo | 16.4:1 | 9.4:1 |
| texto | vidro | 9.5:1 | 12.8:1 |
| texto-suave | vidro | 6.5:1 | 9.5:1 |
| texto-apagado | vidro | 5.7:1 | 8.8:1 |
| destaque | vidro | 4.6:1 | 9.6:1 |
| categoria-roxo | categoria-roxo-fundo | 5.0:1 | 6.3:1 |
| categoria-rosa | categoria-rosa-fundo | 5.4:1 | 5.2:1 |
| categoria-ameixa | categoria-ameixa-fundo | 5.4:1 | 6.2:1 |
| categoria-indigo | categoria-indigo-fundo | 5.3:1 | 6.0:1 |
| categoria-turquesa | categoria-turquesa-fundo | 4.8:1 | 4.9:1 |
| categoria-bronze | categoria-bronze-fundo | 5.5:1 | 5.6:1 |
| categoria-roxo | superficie | 5.9:1 | 7.7:1 |
| categoria-rosa | superficie | 6.5:1 | 6.3:1 |
| categoria-ameixa | superficie | 6.3:1 | 7.5:1 |
| categoria-indigo | superficie | 6.4:1 | 7.3:1 |
| categoria-turquesa | superficie | 6.5:1 | 5.7:1 |
| categoria-bronze | superficie | 6.8:1 | 6.6:1 |

## Catálogo de aplicações (409)

Cada código aparece no canto da aplicação dentro da prévia do componente.

### Marca (74)

- **Logotipo** (10): `LOG-01` Branco sobre azul business 04; `LOG-02` Branco sobre degradê de marca; `LOG-03` Branco sobre degradê profundo; `LOG-04` Branco sobre degradê com luz; `LOG-05` Azul business 04 sobre branco; `LOG-06` Azul business 04 sobre web tom; `LOG-07` Azul noite sobre verde 80 (excepcional); `LOG-08` Versão sem ®, abaixo de 44 px de altura; `LOG-09` Tamanho mínimo na tela: 28 px de altura; `LOG-10` Área de proteção: uma cápsula.
- **Simbolo** (9): `SIM-01` Escala de tamanhos: 28, 32, 48, 64 e 96 px; `SIM-02` Branco sobre azul; `SIM-03` Azul sobre web tom; `SIM-04` Ícone de app; `SIM-05` Favicon; `SIM-06` Avatar de perfil; `SIM-07` Carregamento (símbolo girando); `SIM-08` Selo circular; `SIM-09` Marca d'água a 8 %.
- **Registro** (3): `REG-01` Posição no logotipo; `REG-02` Gota formada (quadro da animação); `REG-03` Onda final na linha de base.
- **LogoAnimada** (9): `ANI-01` Giro rápido; `ANI-02` Três gotas; `ANI-03` Gota de origem; `ANI-04` Vórtice; `ANI-05` Partículas; `ANI-06` Órbita, a animação principal da logo; `ANI-07` Enchimento; `ANI-08` Pulso; `ANI-09` Carimbo.
- **Legenda** (1): `LEG-01` A legenda, no ciclo inteiro: símbolo, texto, pausa e saída.
- **UsosIncorretos** (10): `ERR-01` Distorcer; `ERR-02` Girar; `ERR-03` Recolorir partes; `ERR-04` Sombra ou contorno; `ERR-05` Branca em fundo claro; `ERR-06` Trocar a fonte; `ERR-07` Separar o ®; `ERR-08` Inverter a ordem; `ERR-09` Engrossar o traço à mão; `ERR-10` Contorno abaixo de 24 px.
- **Construcao** (4): `CON-01` Símbolo cotado; `CON-02` Logotipo cotado; `CON-03` A cápsula é um estádio, não uma elipse; `CON-04` Um desenho, três giros.
- **EscalaOtica** (4): `OTI-01` Sem compensação: o traço esmaece; `OTI-02` Com compensação: o que o sistema entrega; `OTI-03` Tabela de espessura por tamanho; `OTI-04` Onde a marca para: abaixo de 28 px só a palavra.
- **PalavraReduzida** (4): `RED-01` A palavra, em três alturas; `RED-02` Sobre fundo claro; `RED-03` No lugar da logo, quando ela não cabe; `RED-04` A exceção: o quadrado do favicon.
- **AreaDeProtecao** (3): `PRO-01` A medida; `PRO-02` Cabeçalho: a marca respira; `PRO-03` Assinatura conjunta: as áreas se encostam.
- **Reproducao** (6): `REP-01` Tela: o logotipo inteiro; `REP-02` Abaixo do mínimo: só a palavra; `REP-03` Papel claro: azul business 04; `REP-04` Sobre foto: só com película; `REP-05` Uma cor sobre papel claro; `REP-06` Uma cor em negativo, sobre o azul da marca.
- **Conferencia** (3): `CNF-01` Saída da conferência; `CNF-02` Como rodar; `CNF-03` O que cada nota quer dizer.
- **ArquivosDaMarca** (6): `ARQ-01` Logotipo branco, o preferencial; `ARQ-02` Logotipo azul, para fundo claro; `ARQ-03` Logotipo sem ®, abaixo de 44 px; `ARQ-04` Símbolo, quando a marca já está perto; `ARQ-05` Ícone de app; `ARQ-06` Palavra reduzida, abaixo de 28 px.
- **CodigoDaMarca** (2): `COD-01` O mesmo código em três tamanhos; `COD-02` A marca troca de desenho sozinha.

### Fundações (93)

- **Fundos** (8): `FUN-01` Azul business 04 sólido; `FUN-02` Degradê de marca; `FUN-03` Degradê radial; `FUN-04` Degradê profundo; `FUN-05` Degradê com luz; `FUN-06` Degradê horizonte; `FUN-07` Degradê noite; `FUN-08` Web tom sólido.
- **CoresDeCategoria** (5): `CAT-01` As seis cores de categoria; `CAT-02` Em etiqueta, como aparecem de verdade; `CAT-03` Numa lista de produtos; `CAT-04` O que não fazer: categoria na cor da marca; `CAT-05` Quando as seis acabarem: cor mais uma segunda pista.
- **Caixas** (4): `CXA-01` Grupo dentro do cartão; `CXA-02` Grupo com contorno de ação; `CXA-03` Vidro sobre a tela; `CXA-04` O que não fazer: inverter o tema.
- **Padroes** (9): `PAD-01` 1. Grão uniforme sobre o azul; `PAD-02` 1. Grão uniforme sobre o claro; `PAD-03` 2. Degradê de densidade; `PAD-04` 3. Faixa entre blocos; `PAD-05` 4. Quina atrás do símbolo; `PAD-06` 5. No lugar da foto, em cartão de blog; `PAD-07` Fluxo, a outra textura, só em faixa; `PAD-08` O que não fazer: padrão atrás de texto; `PAD-09` O que não fazer: opacidade alta.
- **TipografiaEmUso** (6): `TIP-01` Hero de site; `TIP-02` Título de tela do app; `TIP-03` Números de campo; `TIP-04` Texto técnico longo; `TIP-05` Rótulos e legendas; `TIP-06` Citação de campo.
- **Iconografia** (57): `ICO-01` mistura; `ICO-02` gota; `ICO-03` calda; `ICO-04` tanque; `ICO-05` produto; `ICO-06` dose; `ICO-07` ph; `ICO-08` agua; `ICO-09` ordem; `ICO-10` receita; `ICO-11` bico; `ICO-12` pulverizador; `ICO-13` vazao; `ICO-14` area; `ICO-15` talhao; `ICO-16` fazenda; `ICO-17` mapa-local; `ICO-18` vento; `ICO-19` temperatura; `ICO-20` umidade; `ICO-21` sol; `ICO-22` chuva; `ICO-23` compativel; `ICO-24` atencao; `ICO-25` incompativel; `ICO-26` sem-dados; `ICO-27` em-analise; `ICO-28` info; `ICO-29` alvo; `ICO-30` escudo; `ICO-31` check; `ICO-32` ia; `ICO-33` busca; `ICO-34` filtro; `ICO-35` ajustes; `ICO-36` menu; `ICO-37` mais; `ICO-38` fechar; `ICO-39` seta-direita; `ICO-40` seta-esquerda; `ICO-41` chevron-baixo; `ICO-42` chevron-direita; `ICO-43` notificacao; `ICO-44` calendario; `ICO-45` relogio; `ICO-46` usuario; `ICO-47` relatorio; `ICO-48` grafico; `ICO-49` download; `ICO-50` enviar-arquivo; `ICO-51` mensagem; `ICO-52` editar; `ICO-53` lixeira; `ICO-54` copiar; `ICO-55` olho; `ICO-56` sair; `ICO-57` casa.
- **Tema** (4): `TEM-01` A mesma tela nos dois temas; `TEM-02` Tabela cheia, onde o tema claro costuma ser preferido; `TEM-03` Formulário nos dois temas; `TEM-04` Os mesmos tokens, dois valores.

### Ações (30)

- **Botao** (20): `BTN-01` Primário, o botão de todo dia; `BTN-02` Alvo escala, peça rara; `BTN-03` Alvo moldura, peça rara; `BTN-04` Mira, a secundária de cálculo; `BTN-05` Contraste; `BTN-06` Secundário; `BTN-07` Fantasma; `BTN-08` Perigo; `BTN-09` Link; `BTN-10` Pequeno; `BTN-11` O caso que justifica o alvo: a mira da calda; `BTN-12` Os dois pequenos, lado a lado; `BTN-13` A régua de perto; `BTN-14` A cantoneira de perto; `BTN-15` A exceção: botão só de ícone; `BTN-16` Carregando; `BTN-17` Desabilitado; `BTN-18` Bloco no celular; `BTN-19` O que não fazer: alvo repetido na lista; `BTN-20` O que não fazer: ícone decorativo no botão.
- **ControleSegmentado** (3): `SEG-01` Texto; `SEG-02` Ícone e texto; `SEG-03` Unidade de medida.
- **BotaoFlutuante** (4): `FAB-01` Redondo com mira; `FAB-02` Estendido; `FAB-03` Redondo liso; `FAB-04` Em contexto, sobre a navegação inferior.
- **Links** (3): `LNK-01` Em texto corrido; `LNK-02` Navegação; `LNK-03` Externo.

### Formulários (36)

- **CampoTexto** (9): `CAM-01` Padrão; `CAM-02` Com foco; `CAM-03` Preenchido; `CAM-04` Erro; `CAM-05` Sucesso; `CAM-06` Desabilitado; `CAM-07` Com unidade; `CAM-08` Com ícone à esquerda; `CAM-09` Área de texto.
- **Selecao** (3): `SEL-01` Fechada; `SEL-02` Aberta; `SEL-03` Múltipla.
- **CampoDose** (3): `DOS-01` Dose por hectare; `DOS-02` Volume por tanque; `DOS-03` Fora da faixa.
- **CaixaSelecao** (4): `CHK-01` Desmarcada; `CHK-02` Marcada; `CHK-03` Parcial; `CHK-04` Desabilitada.
- **Radio** (3): `RAD-01` Grupo vertical; `RAD-02` Grupo horizontal; `RAD-03` Cartão de escolha.
- **Chave** (3): `CHV-01` Desligada; `CHV-02` Ligada; `CHV-03` Desabilitada.
- **Deslizante** (3): `DES-01` Vazão; `DES-02` Escala de pH; `DES-03` Intervalo de horário.
- **BuscaProduto** (3): `BUS-01` Vazia; `BUS-02` Com sugestões; `BUS-03` Sem resultado.
- **EnvioArquivo** (3): `UPL-01` Pronta; `UPL-02` Arrastando; `UPL-03` Arquivo enviado.
- **Data** (2): `DAT-01` Campo de data; `DAT-02` Calendário com janela ideal.

### Navegação (21)

- **Cabecalho** (4): `CAB-01` Desktop; `CAB-02` Transparente sobre hero; `CAB-03` Celular fechado; `CAB-04` Celular com menu aberto.
- **MenuLateral** (2): `LAT-01` Expandido; `LAT-02` Recolhido.
- **Abas** (3): `ABA-01` Linha; `ABA-02` Com contador; `ABA-03` Cápsula.
- **Trilha** (2): `TRI-01` Completa; `TRI-02` Encurtada no celular.
- **Paginacao** (2): `PAG-01` Numerada; `PAG-02` Compacta com contagem.
- **Etapas** (3): `ETP-01` Horizontal em andamento; `ETP-02` Concluída; `ETP-03` Vertical.
- **NavegacaoInferior** (2): `NAV-01` Quatro destinos; `NAV-02` Com ação central.
- **Rodape** (3): `ROD-01` Site completo; `ROD-02` App mínimo; `ROD-03` Selo do grupo.

### Retorno (38)

- **StatusCompatibilidade** (8): `STA-01` Compatível; `STA-02` Atenção; `STA-03` Incompatível; `STA-04` Sem dados; `STA-05` Em análise; `STA-06` Pequeno; `STA-07` Sólido compatível; `STA-08` Sólido incompatível.
- **Etiquetas** (4): `ETQ-01` Filtros; `ETQ-02` Filtro com ícone; `ETQ-03` Formulação; `ETQ-04` Removível.
- **Alertas** (5): `ALE-01` Informação; `ALE-02` Sucesso; `ALE-03` Atenção; `ALE-04` Erro; `ALE-05` Com ação.
- **Avisos** (4): `AVI-01` Confirmação; `AVI-02` Com desfazer; `AVI-03` Atenção; `AVI-04` Erro.
- **Dica** (2): `DIC-01` Acima; `DIC-02` À direita.
- **Dialogo** (3): `DLG-01` Confirmação; `DLG-02` Destrutivo; `DLG-03` Formulário.
- **Progresso** (8): `PRG-01` Giro, o padrão; `PRG-02` Órbita, o movimento da animação principal; `PRG-03` Espera grande, no centro da tela; `PRG-04` Barra; `PRG-05` Barra de atenção; `PRG-06` Círculo; `PRG-07` Esqueleto de cartão; `PRG-08` Esqueleto de lista.
- **EstadoVazio** (4): `VAZ-01` Sem receitas; `VAZ-02` Busca sem resultado; `VAZ-03` Sem conexão; `VAZ-04` Primeiro acesso.

### Dados (43)

- **CartaoProduto** (3): `PRD-01` Compacto; `PRD-02` Detalhado; `PRD-03` Selecionado.
- **MatrizCompatibilidade** (3): `MTZ-01` Três produtos; `MTZ-02` Cinco produtos; `MTZ-03` Com legenda.
- **OrdemMistura** (3): `ORD-01` Lista completa; `ORD-02` Em linha; `ORD-03` Em execução no campo.
- **CartaoReceita** (3): `REC-01` Validada; `REC-02` Com atenção; `REC-03` Destaque de marca.
- **Tabela** (4): `TAB-01` Padrão; `TAB-02` Zebrada; `TAB-03` Com ações e linha selecionada; `TAB-04` Densa.
- **Indicadores** (4): `KPI-01` Área aplicada; `KPI-02` Caldas validadas; `KPI-03` Alertas resolvidos; `KPI-04` Destaque de marca.
- **Graficos** (4): `GRF-01` Barras; `GRF-02` Linha com área; `GRF-03` Rosca; `GRF-04` Medidor.
- **QualidadeAgua** (2): `AGU-01` pH; `AGU-02` Dureza.
- **CondicoesClima** (3): `CLI-01` Condição favorável; `CLI-02` Condição desfavorável; `CLI-03` Previsão por hora (Delta T).
- **LinhaTempo** (2): `LTP-01` Aplicação do dia; `LTP-02` Histórico de versões.
- **Assistente** (4): `IA-01` Pergunta; `IA-02` Resposta; `IA-03` Sugestões rápidas; `IA-04` Digitando e caixa de mensagem.
- **Pessoas** (3): `AVT-01` Tamanhos; `AVT-02` Grupo; `AVT-03` Nome e papel.
- **Lista** (3): `LST-01` Simples; `LST-02` Com detalhe; `LST-03` Com seleção.
- **Sanfona** (2): `SAN-01` Fechada; `SAN-02` Aberta.

### Seções (22)

- **Hero** (3): `HER-01` Centrado com logo; `HER-02` Dividido com tela do produto; `HER-03` Compacto para páginas internas.
- **Beneficios** (3): `BEN-01` Três colunas; `BEN-02` Quatro com fundo de superfície; `BEN-03` Lista alternada.
- **ComoFunciona** (2): `PAS-01` Quatro passos; `PAS-02` Sobre fundo de marca.
- **GrupoParceiros** (2): `PAR-01` Faixa do grupo; `PAR-02` Bloco institucional.
- **Planos** (2): `PLA-01` Três planos; `PLA-02` Comparativo simples.
- **FaixaChamada** (3): `CTA-01` Com botão; `CTA-02` Com logo e WhatsApp; `CTA-03` Centrada.
- **SecaoFaq** (1): `FAQ-01` Duas colunas.
- **Contato** (2): `CTT-01` Cartões de canal; `CTT-02` Formulário.
- **Blog** (3): `BLG-01` Cartão de artigo; `BLG-02` Grade de artigos; `BLG-03` Artigo em destaque.
- **Newsletter** (1): `NWS-01` Faixa de inscrição.

### Telas (9)

- **TelaAcesso** (3): `ACE-01` Entrar; `ACE-02` Criar conta; `ACE-03` Recuperar senha.
- **PainelApp** (2): `PNL-01` Painel desktop; `PNL-02` Painel no celular.
- **PaginaErro** (2): `PGE-01` Não encontrada; `PGE-02` Instabilidade.
- **Boasvindas** (2): `ONB-01` Tela de abertura; `ONB-02` Tela de cadastro.

### Peças (29)

- **RedesSociais** (9): `SOC-01` Post de frase; `SOC-02` Post de dica técnica; `SOC-03` Post de ordem de mistura; `SOC-04` Post claro institucional; `SOC-05` Retrato de lançamento; `SOC-06` Story de frase; `SOC-07` Story de clima; `SOC-08` Story com enquete; `SOC-09` Capa do LinkedIn.
- **Papelaria** (5): `PAP-01` Cartão de visita, frente; `PAP-02` Cartão de visita, verso; `PAP-03` Assinatura de e-mail; `PAP-04` Papel timbrado A4; `PAP-05` Crachá.
- **Apresentacao** (4): `SLD-01` Capa; `SLD-02` Divisória de capítulo; `SLD-03` Conteúdo com lista; `SLD-04` Encerramento.
- **PecasDigitais** (11): `DIG-01` Ícone de loja; `DIG-02` Abertura do app; `DIG-03` Notificação no celular; `DIG-04` Widget da tela inicial; `DIG-05` E-mail transacional; `DIG-06` Newsletter por e-mail; `DIG-07` Banner 728 x 90; `DIG-08` Banner 300 x 250; `DIG-09` Banner 1200 x 628; `DIG-10` Miniatura de vídeo; `DIG-11` Outdoor.

### App iOS (14)

- **AppleRegras** (3): `IOS-01` A lista da revisão; `IOS-02` Tela de abertura: a casca da primeira tela; `IOS-03` O que não fazer: abertura com a marca animada.
- **AppleIcone** (4): `ICA-01` As três variantes, em canto reto; `ICA-02` O sistema é que arredonda; `ICA-03` O arquivo certo e o errado, sobre o xadrez; `ICA-04` No tamanho da busca, 40 px.
- **AppleTela** (4): `IOT-01` A área cresce, o desenho não; `IOT-02` Espaço entre alvos vizinhos; `IOT-03` Área segura embaixo da navegação; `IOT-04` O texto cresce e a linha quebra.
- **AppleConta** (3): `ICO2-01` Entrar: a opção da Apple vem primeiro; `ICO2-02` Excluir a conta, dentro do perfil; `ICO2-03` Permissão: explique antes de o sistema perguntar.
