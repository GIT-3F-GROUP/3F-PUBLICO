O código que confere se uma reprodução saiu no padrão.
Manual de marca costuma terminar onde começa o problema: alguém refaz a logo e ninguém percebe. Aqui existe uma ferramenta que responde.

    conferir caminho/do/arquivo.svg
    conferir pasta/inteira

Ela aceita SVG, PNG, JPG e WEBP, e trabalha em dois níveis. No **vetor**, lê os números direto no desenho: cápsula, traço, ângulos, núcleo. Em **qualquer arquivo**, desenha a marca oficial no tamanho exato dele e mede quanto um cobre o outro.

O cuidado principal é não cobrar do arquivo aquilo que é método: a referência nasce no tamanho do arquivo, com a compensação óptica daquele tamanho; o arquivo nunca é reamostrado; e o encaixe procura até um pixel de deslocamento, que é fase de amostragem, e não desvio de marca.

**O que ela pega:** desenho esticado ou achatado, marca girada ou espelhada, traço fino ou grosso demais, núcleo fora de medida, cápsula desenhada como elipse, ponta que não é meia-volta, cor fora da paleta, sombra ou desfoque, degradê dentro do desenho e palavra em texto vivo.

**Veredito:** aprovado, atenção ou reprovado, com a lista do que saiu do padrão e o quanto saiu.

Um teste automático roda a bateria inteira: a coerência dos números, a igualdade entre o desenho do Python e o do JavaScript, todos os arquivos oficiais e um lote de desvios plantados de propósito.

## Aplicações

| Código | Aplicação |
|---|---|
| `CNF-01` | Saída da conferência |
| `CNF-02` | Como rodar |
| `CNF-03` | O que cada nota quer dizer |
