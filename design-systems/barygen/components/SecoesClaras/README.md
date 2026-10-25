Seções claras: três estilos muito próximos, para dar ritmo às páginas sem cortar.

| Estilo | Classe | Cor | Uso | Caixas |
|---|---|---|---|---|
| Suave | `.bry-sec-light-1` | #FBF9F5 | o padrão, leitura e conteúdo institucional | branca (elevada) ou areia (rebaixada) |
| Branco | `.bry-sec-branco` | #FFFFFF | catálogo, ficha técnica, tabela, formulário | suave ou creme |
| Creme | `.bry-sec-creme` | #FEF7E6 | destaque leve: depoimento, dado, chamada | só branca |

**Em sequência, alternados:** a troca de tom já separa os assuntos (suave, branco, suave; branco, creme, branco). Sem fio, sem sombra e sem caixa.

**O mesmo estilo em sequência:** até três seguidas, separadas por um fio de 1 px (`.bry-sec-fio`, em `--tom-claro-linha`) ou por um título com mais respiro. O creme nunca se repete em seguida.

**Passagem em degradê:** `.bry-sec-claro-grad` (do suave para o creme) e `.bry-sec-claro-grad--sobe` (do creme para o suave).

```html
<section class="bry-sec-light-1 bry-sec-pad">…</section>
<section class="bry-sec-branco bry-sec-pad">…</section>
<section class="bry-sec-creme bry-sec-pad">…</section>
<section class="bry-sec-light-1 bry-sec-pad">…</section>
<section class="bry-sec-light-1 bry-sec-pad bry-sec-fio">…</section>
```

Nada de fio grosso ou colorido entre seções claras (a faixa amarela é das seções Van Gogh), sombra entre seções ou outros claros inventados; areia é tom de caixa, não de seção.
