---
name: barygen-design
description: Use this skill to generate well-branded interfaces and assets for Barygen, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Notes specific to Barygen:

- `readme.md` is the design guide (context, tone of voice, visual foundations, iconography, component index).
- Link `styles.css` — it imports every token file, the component classes and the base reset.
- Colors: the vigent palette is the one in `assets/reference/cores-certas.jpg` and `tokens/colors.css`, NOT the older hexes from the v03 package. HEX/RGB for screen, CMYK for print — never convert between them automatically.
- Typography: Be Vietnam Pro only (`assets/fonts/`, also free on Google Fonts). Titles in uppercase; BARYGEN is written BARY (Medium 500) + GEN (ExtraBold 800). Hard ceiling of 70px.
- Logos live in `assets/logos/` — never redraw or retype the mark. Light background → colorida escura; black → colorida clara; yellow → monocromática escura.
- Copy is technical, direct and in pt-BR. **No emoji, ever.**
- `catalogo/` holds the visual verification pages (elements, effects, section backgrounds); `ui_kits/` holds the two product recreations (site institucional, portal do produtor).
- Next.js: import `styles.css` in `app/layout.tsx`, copy `assets/` to `public/`, and add `'use client'` only in your own stateful wrappers — the components themselves are stateless.
