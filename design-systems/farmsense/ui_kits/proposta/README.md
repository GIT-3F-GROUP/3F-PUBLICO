# UI kit · Proposta editorial

Recriação do documento de proposta editorial fornecido pelo cliente: uma
proposta comercial paginada, formato retrato, com a mesma paleta e tipografia do manual.
O texto segue o documento original; cliente, número, valores e assinaturas são fictícios
(proposta FAZ-000-0000 · Fazenda Exemplo).

## Telas
| Arquivo | Conteúdo |
| --- | --- |
| `components/KitPropostaEditorial/preview.html` | Documento paginado com barra superior fixa. |
| `PropostaPages.jsx` | Sete folhas: Capa, Carta, Sumário, A propriedade, Programa em fases, Investimento, Aceite. |
| `PropostaApp.jsx` | Navegação entre folhas + sumário clicável. |

## Padrões usados
- Capa em superfície escura com curvas neon e grade — a única folha escura do documento.
- Miolo em papel branco, tinta Verde Sombra, com blocos em Bege Pérola.
- Rodapé de página repetido: número da proposta · seção · página em Georgia itálico.
