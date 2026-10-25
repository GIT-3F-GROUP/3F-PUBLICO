# Tom sobre tom

A regra de camadas da ORVIX: **toda caixa à frente de outra é sempre um pouco mais clara que a de trás. Nenhum tom na frente é mais escuro que o anterior.** A caixa de baixo não precisa ser a mais escura da paleta: dado o tom dela, a próxima é um tom mais clara.

- Escuro: preto ORVIX (`bg`) → grafite-800 (`surface-1`) → 700 → 600 → 500.
- Claro: web-1 (`bg`) → branco-50 (`surface-1`) → branco (`surface-2` a `surface-4`). Web-2 e web-3 nunca ficam à frente do web-1.
- grafite-950 e grafite-1000 são mais escuros que o preto: não servem de camada.
- Nada afunda: trilho de abas, área de mídia e campo ficam um tom acima do contêiner, com hairline.
- Só quando o tom já está no teto (branco no claro) a separação fica por conta da hairline.
- Exceção do pontilhado no tema claro: os pontos são textura da própria base, não caixa à frente, e ficam um tom mais escuros que ela.
