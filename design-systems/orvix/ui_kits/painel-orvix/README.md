# UI Kit: Painel do representante ORVIX

Área restrita do representante, com entrada por conta Google e dados estáticos.

## Telas

| Tela | Export | Conteúdo |
|---|---|---|
| Login | `PainelLogin` | Split com alvo tecnológico animado, entrada por Google, por email corporativo e, no app iOS, Sign in with Apple (App Store 4.8) |
| Visão geral | `PainelVisaoGeral` | Números do catálogo, cobertura de ficha por linha e alvo do trimestre |
| Catálogo técnico | `PainelCatalogo` | Tabela do catálogo com busca, filtro pelas quatro linhas (TEC, ORV Clear, ORVALE, VIX) e status de publicação |
| Biblioteca técnica | `PainelBiblioteca` | Fichas, bulas, FISPQ e material de apoio, com aviso de auditoria |
| Calculadora de calda | `PainelCalculadora` | Volume de calda, área e percentual, com validação de faixa de dose |
| Perfil | `PainelPerfil` | Dados do representante e preferências de alerta |

`PainelApp` é o shell: navbar compacta sólida, sidebar com item ativo em borda verde e roteamento por estado.

## Interações reais

- Login entra no painel; o ícone de sair volta para a tela de login.
- A sidebar troca de tela e marca o item corrente.
- A busca do catálogo filtra a tabela e cai em estado vazio quando não há resultado.
- A calculadora recalcula dose e volume total, e alerta quando a dose sai da faixa de 30 a 200 mL/ha.

## Fidelidade

Esta recriação segue a arquitetura descrita na especificação e reaproveita apenas padrões já definidos pelo grupo. A calculadora de calda é uma **adição intencional**: a especificação prevê "materiais de apoio para a força de venda" sem detalhar a ferramenta.
