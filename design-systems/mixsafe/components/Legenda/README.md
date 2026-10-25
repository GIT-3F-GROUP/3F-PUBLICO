A legenda que identifica quem fala no vídeo, aberta pelo gesto da Órbita.
A legenda de vídeo diz quem está na tela. É **uma só**, para cena clara e para cena escura: texto branco direto sobre a imagem, com uma sombra leve, sem placa por trás. Ela entra pela **Órbita**, a animação principal da logo, e é esse gesto que amarra o vídeo à marca sem repetir o logotipo inteiro a cada pessoa.

**O ciclo, na ordem.** O rastro corre as três cápsulas e desenha o símbolo, que acende com um sopro de verde. A **linha de divisão nasce do centro para as pontas**, com as duas extremidades transparentes, e uma luz corre por ela uma vez, da esquerda para a direita. Então **o nome sobe de dentro da linha** e **o cargo e a empresa descem dela**, um atrás do outro: cada linha de texto chega borrada e vai ganhando foco, com o espaço entre letras se fechando até o lugar, como coisa que se materializa. A barra verde cresce do meio junto com a linha. A legenda fica parada enquanto a pessoa fala. Na saída tudo volta para dentro da linha, a linha se recolhe para o centro e o símbolo apaga por último.

**Orgânico e digital ao mesmo tempo.** As curvas são de saída lenta (`cubic-bezier(.18,.7,.22,1)`), sem salto nem quique: o movimento desacelera chegando, como coisa viva. O que dá o digital é o foco chegando (de 5 px de borrão a nítido) e a luz correndo a linha. Nenhum elemento pisca e nada repete fora do laço de revisão.

**Mais rápida do que o padrão.** O rastro fecha o símbolo em **1,15 s**, contra os 1,9 s da volta do padrão da Órbita. Aqui ele abre uma informação, não uma espera. A entrada inteira termina em **1,95 s**; a saída leva 0,6 s.

**A estrutura do texto, sempre nesta ordem:**

1. **Nome da pessoa**, em Exo 700. A única linha em negrito e a maior das três.
2. **Linha de divisão**, um fio de 1 px com as pontas transparentes, que nasce do centro e é de onde os textos saem.
3. **Cargo**, em Be Vietnam Pro regular.
4. **Nome da empresa**, na parte de baixo, em caixa alta com entreletras de 0,16 em. A menor linha, e fecha o bloco.

**Sombra leve, não contorno.** Todo o texto e o símbolo levam a mesma sombra: curta e um pouco difusa, em azul-noite a 50 % e a 28 %. É ela que segura a leitura sobre céu claro ao meio-dia e sobre lavoura escura, sem placa e sem contorno. Não engrosse a sombra para "garantir": sombra pesada vira borrão em tela pequena.

**Tamanhos em proporção do quadro, nunca em pixel.** Tudo é medido em `cqi`, um centésimo da largura do vídeo: nome 3 cqi, cargo 1,85 cqi, empresa 1,4 cqi, símbolo 7,4 cqi. A mesma legenda serve para 1080p, 4K e vertical sem refazer nada. Em 1920 px o nome sai com 58 px.

**Onde fica.** Canto inferior esquerdo, a 6 % da margem esquerda e 11 % da base, dentro da área segura de 10 % que emissoras e redes cortam. No vertical, suba a legenda para fora da faixa dos botões do aplicativo.

**Quanto tempo fica.** Entre 3 e 5 segundos parada, o bastante para ler duas vezes. **No vídeo ela entra uma vez e sai uma vez.** O laço de 7 s que você vê aqui existe só para rever o movimento. Os dois palcos abaixo mostram a mesma legenda sobre uma cena escura e sobre uma cena clara.

## Aplicações

| Código | Aplicação |
|---|---|
| `LEG-01` | A legenda, no ciclo inteiro: símbolo, texto, pausa e saída |
