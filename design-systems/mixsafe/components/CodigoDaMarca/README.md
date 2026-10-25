A marca como função: peça o tamanho e receba o desenho certo.
O jeito mais seguro de manter o padrão é não depender de ninguém lembrar dele. O pacote em `codigo/` entrega a marca como função.

    import { logo, simbolo, respiro } from './mixsafe-marca.js';

    logo({ altura: 20 })          // abaixo de 28 px devolve só a palavra
    logo({ altura: 32 })          // sem ®, que abaixo de 44 px não se lê
    logo({ altura: 64 })          // com ®
    simbolo({ tamanho: 48 })      // traço já travado em 1,5 px
    palavra({ altura: 16 })       // a palavra sozinha
    respiro(40)                   // 13,4 px de área de proteção

Em HTML puro, marque e hidrate:

    <span data-ms-logo data-altura="40"></span>
    <script type="module">MixSafe.hidratar();</script>

No CSS, a proporção é travada por variável, então a largura vem da altura e ninguém estica sem querer:

    .ms-logo { height: var(--ms-altura); width: calc(var(--ms-altura) * var(--ms-logo-proporcao)); }

**Garantia.** Um teste automático compara, em 14 tamanhos e 13 alturas, o desenho que o JavaScript produz com o que o Python produz. Os dois precisam sair idênticos, caractere por caractere. Se divergirem, o padrão já se perdeu em algum lugar e o teste falha.

## Aplicações

| Código | Aplicação |
|---|---|
| `COD-01` | O mesmo código em três tamanhos |
| `COD-02` | A marca troca de desenho sozinha |
