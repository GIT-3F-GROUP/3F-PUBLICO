# SiteFooter

Rodapé do site com marca, descrição curta, colunas de links e a linha de base com dados legais, Política de Privacidade, Termos e a assinatura de design.

- `columns`: `[{ title, links }]`; cada link pode ser texto simples ou `{ label, href }`.
- `brand`: normalmente `Logo variant="principal-sem-assinatura" size="md"`.
- `desc`: frase curta abaixo da marca (opcional).
- `legal`: texto da linha de base.

O layout responde à largura do próprio rodapé, não da janela: acima de 720px, marca à esquerda e colunas à direita; abaixo disso, marca em cima e colunas embaixo; abaixo de 400px, colunas em duas por linha. A linha de base quebra sem vazar. Títulos de coluna em Exo ExtraBold 11px, caixa alta, tracking 0,14em, a 40%. Todo link do rodapé é Exo Medium em caixa alta, tracking 0,06em: 11px nas colunas e 10,5px na linha de base. A logo entra a 41px de altura.
