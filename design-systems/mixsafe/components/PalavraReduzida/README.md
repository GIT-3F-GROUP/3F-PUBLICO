A marca abaixo de 28 px: só o nome, em Exo Medium Italic.
Abaixo de 28 px o símbolo deixa de se ler, e insistir nele entrega um borrão no lugar da marca. O que sobrevive nesse tamanho é o nome.

**O desenho:** **mixsafe** inteiro em Exo Medium Italic, em curvas, com o mesmo entreletras do logotipo. Repare que aqui o **mix** não é ExtraBold: em tamanho pequeno o contraste entre os dois pesos some, e um peso só lê melhor.

**Altura mínima:** 12 px.

**Quando usar:** favicon ao lado do nome do site, selo de rodapé muito estreito, assinatura em peça onde a logo inteira não cabe.

**Quando não usar:** no lugar da logo quando há espaço, em cabeçalho de site, em apresentação e em documento impresso. Esta é uma redução de emergência, e não uma segunda assinatura.

**A exceção do quadrado.** O favicon e o ícone de app são um quadrado de cor com o símbolo dentro. Ali, abaixo de 28 px, o símbolo trabalha como marcador de cor, e não como desenho legível. É o único lugar onde ele pode aparecer pequeno.

**Em código:** `MixSafe.palavra({ altura })`, ou `MixSafe.logo({ altura: 20 })`, que já devolve a palavra sozinha.

## Aplicações

| Código | Aplicação |
|---|---|
| `RED-01` | A palavra, em três alturas |
| `RED-02` | Sobre fundo claro |
| `RED-03` | No lugar da logo, quando ela não cabe |
| `RED-04` | A exceção: o quadrado do favicon |
