Marca do 3F Group em três composições (principal, horizontal, vertical) e três cores, mais o pattern.

- `colorida`: letras em preto e folha em `verde-3f` (#78be21). Uso padrão, sobre fundo claro.
- `escura`: tinta única preta (#000000). Para quando não houver cor, sobre fundo claro.
- `branca`: tinta única branca (#ffffff). Sobre `preto` e fundos escuros.
- `principal`: uso geral. `horizontal`: cabeçalhos e faixas largas. `vertical`: selos e formatos quadrados.
- `pattern-lavoura-3fgroup`: quadrado repetível de 103px, em `web-2` (#dce1e4), para fundo decorativo e marca d'água.

Cada SVG tem uma única camada (`<g id="logo">`), sem folha de estilo, sem classes e sem formas ocultas: a cor está no atributo `fill`. Assim o arquivo pode ser embutido direto na página ao lado de outros sem que os estilos se misturem, e a tinta troca mudando um único `fill`.

As versões `branca` só aparecem sobre fundo escuro. Em produção, as marcas são servidas de `https://brand.3f.group/3fgroup/logos/`.
