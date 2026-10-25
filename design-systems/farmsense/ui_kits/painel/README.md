# UI kit · Painel de campo

O "modo noturno da operação" descrito no §06 do manual, montado como produto: lista de talhões,
leitura NDVI ao vivo, estações climáticas, tabela comparativa e avanço das quatro fases do programa.

Todos os números e textos vêm dos mocks do manual e da proposta — nada foi inventado.

## Telas e interações
| Arquivo | Conteúdo |
| --- | --- |
| `components/KitPainelDeCampo/preview.html` | Casca escura + carregamento do bundle. |
| `PainelApp.jsx` | App inteiro: barra superior, busca de talhão, camadas do mapa e quatro abas. |

- Buscar filtra a lista lateral; sem resultado, aparece o `EmptyState`.
- Clicar num talhão troca o card de NDVI e a trilha de navegação.
- As quatro abas (Diagnóstico · Sensoriamento · Recomendação · Acompanhamento) trocam o miolo.
- Os interruptores de camada mudam o padrão de fundo do card principal e o estado das estações.
