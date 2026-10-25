# Padrões

Cinco SVGs oficiais de padrão ambiente. Ancorados num canto (de preferência o superior direito) e cortados pela borda da superfície — nunca inteiros, nunca centralizados. São assinatura, não protagonista.

- `contour-tonal.svg` — Curvas de nível em Bege Escuro (`#D8BE98`), tom sobre tom, sobre Bege Rastro e Pérola. Classe `fs-contour--tonal` (opacidade .55, `multiply`).
- `contour-neon.svg` — Curvas de nível em Ciano Neon (`#33FFC2`), sobre Verde Sombra. Classe `fs-contour--neon` (opacidade .4). Nunca impresso.
- `contour-sombra.svg` — Curvas de nível em Verde Sombra (`#004141`), sobre beges e branco. Classe `fs-contour--sombra` (opacidade .6).
- `ridge-neon.svg` — Cristas (perfil de relevo) em Ciano Neon, sobre Verde Sombra. Classe `fs-ridge--neon`. Nunca impresso.
- `ridge-sombra.svg` — Cristas em Verde Sombra, sobre Bege Estrada. Classe `fs-ridge--sombra` (opacidade .5).

No React, use `PatternLayer` (`curvas-tonal`, `curvas-neon`, `curvas-sombra`, `cristas-neon`, `cristas-sombra` e os padrões em CSS: grade, pontos, alvo, varredura, estratos, listras, linhas).
