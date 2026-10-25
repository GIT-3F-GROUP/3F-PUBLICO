# UI kit · Manual de marca FarmSense

Recriação do documento-fonte `FarmSense Design System.html` (fornecido pelo cliente) usando os
componentes deste design system. É o documento vivo da marca — a referência que qualquer peça
FarmSense deve conseguir citar.

## Telas
| Arquivo | Conteúdo |
| --- | --- |
| `components/KitManualDeMarca/preview.html` | Documento completo, com sumário lateral em pontos e rolagem observada. |
| `ManualSections.jsx` | As dez seções: Hero, Princípios, Cores, Tipografia, Logo, Superfícies, Dados, Componentes, Tom de voz, Rodapé. |
| `ManualApp.jsx` | Composição + `IntersectionObserver` que sincroniza o `DotNav` com a seção visível. |

## Interações
- Sumário lateral (`DotNav`) marca a seção visível e rola suavemente ao clicar.
- Cards de superfície e de recurso elevam 3 px no hover (`fs-hv-lift-card`).
- Blocos do hero entram em cascata (`fs-stagger`).
