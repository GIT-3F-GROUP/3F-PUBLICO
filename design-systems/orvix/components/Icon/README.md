Ícone de interface da ORVIX: conjunto Lucide embutido no bundle (`ORVIX_ICONS`, 120 glifos em SVG inline) e herda `currentColor`, para qualquer glifo de UI (ação, status, navegação, ficha técnica). Nenhum ícone depende de CDN: página publicada e app empacotado desenham tudo sem rede.

```jsx
<Icon name="droplet" size={18} />
<Icon name="target" size={20} label="Alvo" style={{ color: "var(--verde-400)" }} />
```

```js
// HTML estático
el.innerHTML = ORVIXDesignSystem_019de6.iconSvg("search", 18);
```

Notas
- `name` é o nome Lucide em kebab-case. Ícones recorrentes na ORVIX: `droplet`, `droplets`, `target`, `crosshair`, `spray-can`, `flask-conical`, `beaker`, `gauge`, `wind`, `sprout`, `leaf`, `tractor`, `plane`, `wrench`, `shield-check`, `file-text`, `download`, `activity`, `thermometer`.
- A cor vem do contexto (`color`), não de prop. Para acento use `var(--verde-400)`.
- Um glifo fora de `ORVIX_ICONS` renderiza vazio: adicione o SVG ao mapa no bundle antes de usar.
- Substituição sinalizada: a ORVIX não possui icon set proprietário nos arquivos de marca.
