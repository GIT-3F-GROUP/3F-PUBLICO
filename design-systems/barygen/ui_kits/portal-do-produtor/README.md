# UI kit · Portal do produtor

Sistema logado da BARYGEN: acompanhamento de talhões, pedidos de semente e
preferências. Montado com os componentes deste design system.

## Telas

| Tela | Arquivo | O que mostra |
|---|---|---|
| Acesso | `Login.jsx` | Cartão de acesso sobre fundo escuro 03 com anel de retícula girando; "Esqueci minha senha" alterna o estado de erro |
| Casca do app | `Shell.jsx` | Menu lateral preto de 264px, barra superior branca com busca, notificações e dropdown de conta |
| Visão geral / Campos | `VisaoGeral.jsx` | Alerta de sanidade, 4 indicadores, tabela de talhões com abas, cronograma em barras de progresso, recomendações em acordeão |
| Pedidos | `Pedidos.jsx` | Grupo segmentado de período, histórico com status, modal de novo pedido com passos e toast de confirmação |
| Preferências | `Preferencias.jsx` | Abas de conta / avisos / documentos, switches, faixa, upload, estado vazio e estados de carregamento |

## Interações que funcionam

Entrar e sair, trocar de tela pelo menu, filtrar talhões por híbrido, abrir o
dropdown da conta, criar um pedido (modal → toast), alternar avisos, e o botão
"Salvar alterações" em estado de carregamento.

## Notas

- A navegação lateral usa o item ativo em **amarelo com texto preto** (variação
  do `.bry-sidemenu` para trilho escuro); o guia v03 define o inverso para menu
  lateral claro: as duas formas estão no sistema.
- Sem fotografia: o portal é todo dado e texto, como no material entregue.
