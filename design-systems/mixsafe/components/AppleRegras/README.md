O que a Apple exige, o que o sistema garante sozinho e o que fica para o produto.
A mixsafe vai para a App Store, e a Apple revisa com régua. Esta família separa três coisas: **o que a Apple exige**, **o que este design system já garante por construção** (e confere a cada geração), e **o que fica para o produto**, porque depende de código nativo ou de decisão de negócio.

### O que o sistema garante, e confere a cada geração

| Regra da Apple | Como o sistema cumpre | Como é conferido |
|---|---|---|
| **Alvo de toque de 44 pt** em todo controle | Botão, campo e chave têm 44 px. Todo controle que se desenha menor (botão pequeno, etiqueta, aba, paginação, link, caixa de seleção, item de menu) carrega uma área invisível de 44 pt centrada nele, embutida no próprio componente. O alvo pequeno cresce para 44 no dedo | Auditoria no navegador: 0 controles abaixo de 44 pt |
| **Texto nunca menor que 11 pt** | O piso de todo texto do sistema é 11 px; a legenda de interface é 12 px e o corpo é 16 px | Auditoria: 0 textos abaixo de 11 px |
| **Texto acompanha o ajuste de tamanho do sistema** (Dynamic Type) | Todo tamanho de texto está em `rem`, com raiz de 16 px. Alturas de controle, espaços e raios ficam em px, para a letra crescer sem a tela desmontar | Folha gerada: 0 tamanhos de texto em px |
| **Contraste** de 4,5:1 (7:1 no tema claro, pela régua do sol) | Tokens conferidos par a par no build; selos de status com fundo sólido, para não dependerem da linha em que estão | Build recusa gerar se um par falhar; auditoria por renderização: 0 falhas |
| **Nada rola para o lado** | Tabela vira cartões abaixo de 560 px; ações de diálogo empilham; cabeçalho e faixas quebram linha; painel vira coluna única | Auditoria em 375 px e em 320 px: 0 estouros |
| **Campo não dispara zoom ao focar** | Todo campo de texto tem 16 px, que é o mínimo que o iPhone aceita sem aproximar a tela | Auditoria: 0 campos abaixo de 16 px |
| **Áreas seguras** (recorte da câmera e indicador de início) | Barra inferior, cabeçalho do celular e botão flutuante somam `env(safe-area-inset-*)` | Classes `ms-nav-inferior`, `ms-cabecalho--movel`, `ms-fab-ancora` |
| **Barra de abas** com 3 a 5 destinos, ícone e rótulo, estado ativo | Família NavegacaoInferior | Auditoria: todas as barras entre 3 e 5 |
| **Tema claro e escuro** completos | Cada família mostrada nos dois | Família Tema |
| **Menos movimento** quando a pessoa pede | `prefers-reduced-motion` desliga retícula, órbita, legenda e brilho | Regras no fim da folha |
| **Ícone da loja** de 1024 px, canto reto, sem transparência, em três variantes | `assets/app/ios/` | Teste "Ícones da App Store" |
| **Diálogo** com título que diz a decisão e botões que dizem o resultado | Família Dialogo; no estreito, principal em cima e cancelar embaixo, como o alerta do iOS | Família Dialogo |
| **Destrutivo** sempre em vermelho e nunca como ação padrão | Variante `perigo`; o diálogo de excluir pede confirmação | Famílias Botao e AppleConta |

### O que fica para o produto

Isto não cabe no design system, porque é código nativo ou decisão de negócio. Sem isso a revisão reprova, por mais que a tela esteja certa.

- **Entrar com a Apple** ao lado do Google (regra 4.8: quem oferece login de terceiro oferece o da Apple). O botão é o componente oficial da Apple, nunca redesenhado.
- **Excluir a conta dentro do app** (regra 5.1.1(v)), com o fluxo da família AppleConta.
- **Texto de finalidade em cada permissão** (localização, câmera, fotos, notificações). Os textos já estão escritos na família AppleConta; o produto os coloca no `Info.plist`.
- **Dynamic Type de verdade**: o lado nativo lê o tamanho de texto preferido do sistema e ajusta o `font-size` da raiz da página (`UIFont.preferredFont(forTextStyle: .body).pointSize / 17`). O design system já está pronto para isso; sem esse ajuste, o `rem` fica parado em 16 px.
- **Tela de abertura** como a casca vazia da primeira tela. A animação da logo não entra ali.
- **Venda de assinatura dentro do app**: a família Planos é conteúdo de site, e nenhuma tela do app fala em preço ou em comprar fora da loja.
- **Sem funcionalidade de site dentro do app**: o que a pessoa abre no app precisa funcionar como app. Links para o site ficam em "Sobre" e em "Ajuda", nunca no caminho principal.

### Como repetir a auditoria

A auditoria tem quatro passos: gerar, montar a página com as 86 famílias nos dois temas, abrir no navegador em 375 px, 320 px e na largura de mesa, e rodar o script de auditoria no console. O resultado precisa ser zero em todas as cinco medidas. Qualquer coisa diferente de zero é defeito, e entra antes de qualquer publicação.

## Aplicações

| Código | Aplicação |
|---|---|
| `IOS-01` | A lista da revisão |
| `IOS-02` | Tela de abertura: a casca da primeira tela |
| `IOS-03` | O que não fazer: abertura com a marca animada |
