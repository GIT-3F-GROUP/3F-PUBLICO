# UI kit · Site institucional BARYGEN

Recriação da presença digital pública da marca, montada com os componentes
deste design system (nenhum componente reimplementado).

## Telas

| Tela | Arquivo | O que mostra |
|---|---|---|
| Home | `Home.jsx` | Herói escuro 03, portfólio de híbridos com filtro, faixa de resultados, FAQ, faixa de conversão |
| Híbrido | `Hibrido.jsx` | Trilha, herói de produto, abas de características / posicionamento / resultados / downloads |
| Campos e Eventos | `Campos.jsx` | Busca, filtros, tabela com status, paginação e estado vazio (a mesma tela serve às duas rotas, como no site) |
| Contato | `Contato.jsx` | Formulário em 4 passos, cartão do consultor, toast de confirmação |
| Cabeçalho e blocos | `Sections.jsx` | Barra superior fixa, cabeçalho de seção, marcador de foto |

`index.html` amarra tudo: a navegação da barra superior troca de tela, os
filtros e o formulário funcionam.

## Notas

- **Fotografia:** o pacote entregue não inclui imagens. Onde a marca usa foto de
  lavoura, o kit mostra um marcador escuro com a legenda do conteúdo esperado.
  Substitua por imagens oficiais.
- Fundos usados: escuro 03 (herói), escuro 02 (resultados), escuro 04 (herói de
  produto), claro 01/02/03/04: nunca mais de dois por tela.
- Rota "Eventos" reaproveita a tela de listagem com outro conteúdo, como no site.
