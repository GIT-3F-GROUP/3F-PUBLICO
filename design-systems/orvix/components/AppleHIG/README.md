# Apple HIG e App Store

Regra zero da ORVIX: nem a Apple nem a ORVIX aceitam tela sem responsividade. Toda tela, peça e componente nasce conforme as Human Interface Guidelines e as App Store Review Guidelines.

- **Layout adaptativo:** de 320px ao desktop, sem rolagem horizontal; grades com `minmax(min(100%, X), 1fr)` e consultas de contêiner; duas colunas viram uma abaixo de 760px; tabela larga rola no próprio quadro; respiro nas quatro bordas; safe areas.
- **Toque:** 44 × 44 pt em todo controle (botão de 34px dentro de área de 44px; campo com 44px de altura); nada depende de hover.
- **Texto:** mínimo de 11px; corpo em 16px; no celular todo campo usa 16px (sem zoom do iOS); Dynamic Type com `rem` e títulos fluidos.
- **Contraste:** 4,5:1 em todo texto (label, metadado, botão), 3:1 em texto grande, ícone, borda e foco. Primário verde-700 com texto branco; label a 55% (escuro) e 62% (claro); texto de apoio branco-600 / branco-800.
- **Ajustes do sistema:** tema escuro e claro, Reduce Motion, Reduce Transparency (vidro vira sólido), Increase Contrast, Bold Text.
- **VoiceOver e teclado:** nome em todo controle, `aria-hidden` no decorativo, foco visível, label em todo campo, diálogo com foco preso e Escape.
- **Navegação:** sempre um caminho de volta; até cinco abas; ação destrutiva confirmada.
- **App Store:** Sign in with Apple (4.8), exclusão de conta (5.1.1(v)), política de privacidade (5.1.1), completude (2.1), metadados exatos (2.3), funcionalidade mínima (4.2), recursos embutidos, ícone 1024 px.
- **Verificação:** auditoria automática de todos os cards em 320, 390 e 768px, nos dois temas.
