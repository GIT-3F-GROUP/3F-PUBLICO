Mapa do Mato Grosso em hexágonos, com os municípios atendidos acesos, em preto, branco e nos cinzas da marca.

## Quando usar

- Mostrar a presença do grupo ou de uma empresa no estado: página institucional, página de contato, apresentação.
- Seção completa: texto à esquerda, mapa ao centro e lista de municípios à direita.
- Mapa solto: quando o mapa entra dentro de outro bloco, sem texto por cima.

## Estrutura

```html
<section class="secao-mapa" data-secao-mapa>
  <div class="secao-mapa__mapa"><canvas data-mapa data-tom="claro" data-veu="1"></canvas></div>
  <div class="secao-mapa__texto">… sobretítulo, título, texto, legenda …</div>
  <aside class="secao-mapa__lista" data-lista></aside>
</section>
<script>ligarMapas(GEO, MUNICIPIOS)</script>
```

## Variações desenhadas

- Seção sobre branco
- Seção sobre preto
- Mapa solto, sobre branco
- Mapa solto, sobre preto

## Regras

- Só preto, branco e os cinzas da marca. Sobre branco: Mato Grosso em `web-3`, entorno em `web-2`, atuação em preto. Sobre preto: tudo se inverte, com a atuação em branco.
- Nenhuma outra cor entra no mapa: nem o verde, nem âmbar, nem amarelo.
- A hierarquia das sedes vem do tamanho e do traço: matriz é o hexágono maior, com miolo e brilho; escritório é o hexágono contornado; "em breve" tem contorno tracejado; área de atuação é a mancha que escurece para o centro.
- Nenhuma linha de divisa é desenhada: a divisa nasce do encolhimento dos hexágonos que têm vizinho de outra região.
- O Mato Grosso é o único em cinza cheio; os estados vizinhos e os países apagam conforme se afastam.
- O raio de cada mancha varia um pouco de hexágono para hexágono, para a área de atuação ficar orgânica e não virar círculo.
- Movimento: o anel da matriz sai duas vezes ao abrir e o mapa fica parado. Ao apontar um município na lista, a mancha dele pisca por meio segundo e fica mais forte. Com "Reduzir movimento" ligado, nada se mexe.
- Responsivo: o mapa se redesenha quando a largura muda. Abaixo de 720px a seção empilha: texto, mapa e lista em duas colunas.
- A lista de municípios é o dado que muda: nome, tipo (`matriz`, `escritorio`, `breve`, `ponto`) e longitude e latitude. Só entram municípios com atendimento confirmado.
- O mapa é um desenho em `canvas`, sem biblioteca. O código (`MapaHexagonos`) e os contornos vêm do arquivo de referência "Mapa de presença em hexágonos - 3F Group", nos materiais da marca; aqui só as tintas mudaram.
- O canvas leva ao lado a lista em texto, que é o que o leitor de tela lê.
- Cada peça tem fundo fixo e não muda com o tema da tela: escolha a versão da marca pelo fundo da peça (colorida ou escura sobre claro, branca sobre escuro).
