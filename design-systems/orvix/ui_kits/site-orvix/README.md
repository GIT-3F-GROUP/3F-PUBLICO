# UI Kit — Site público ORVIX

Recriação navegável do site público da ORVIX Agroquímica (`orvix.com.br`), montada sobre os componentes e as seções deste design system.

## Telas

| Tela | Export | Conteúdo |
|---|---|---|
| Home | `ScreenHome` | As seções de `sections/HomeSections.jsx` montadas como página |
| Tecnologia de Aplicação | `ScreenTecnologia` | Página-pilar editorial, trilha do ciclo e prosa técnica |
| Página de linha | `ScreenLinha` | Cabeçalho da linha, filtro por eixo e grade de produtos |
| Página de produto | `ScreenProduto` | Ficha híbrida: render 3D, ficha rápida, abas de doses, documentos e comparativo |
| Blog técnico | `ScreenBlog` | Feed por categoria com busca e paginação |
| Contato | `ScreenContato` | Formulário comercial com município, cultura e consentimento LGPD |

`SiteApp` é o shell: navbar sólida (vidro só sobre foto), roteamento por estado e o rodapé padrão do grupo.

## Interações reais

- Clicar em um card de linha na home abre a página de linha.
- Clicar em um produto abre a ficha do produto.
- As abas da ficha trocam entre eixos, doses, documentos e comparativo.
- O formulário de contato valida e mostra o estado de confirmação.
- Os links do menu navegam entre as telas.

## Fidelidade

Esta recriação segue a **especificação** do site e a **copy oficial** da home, não um código existente. Onde a fonte não define nada, a tela fica de fora em vez de inventar:

- A página Sobre não faz parte desta recriação.
- O Clube ORVIX aparece como seção da home, não como página própria.
- Fotografia de campo não existe nos arquivos fornecidos. No lugar dela, os heros usam o pontilhado adensado e parado da marca, na diagonal do X, e o elemento X oficial.
- Doses, garantias e registros exibidos são os das fichas técnicas e estão marcados como sujeitos a conferência.
