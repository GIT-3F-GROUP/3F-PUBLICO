Superfícies e dados da ORVIX: `Card` e `CardHeader`, `GlassPanel`, `Stat`/`StatGrid`, `DataTable`, `KeyValue`, `Badge`, `Tag`, `Meter`, `ProgressRing`, `Divider`.

```jsx
<Card interactive>
  <CardHeader title="ORV7 Drop Power" sub="Adjuvante premium" action={<Badge tone="success">Herói técnico</Badge>} />
  <p className="ovx-card__body">Emulsificante, dispersante e antiespumante em um só produto.</p>
</Card>

<GlassPanel density="base" surface>
  <StatGrid items={[
    { label: "Linhas", value: "8" },
    { label: "Produtos", value: "41" },
    { label: "Dose ORV7", value: "30–200", unit: "mL/ha", accent: true },
  ]} />
</GlassPanel>

<DataTable numeric columns={["Cultura","Dose","Volume de calda"]}
  rows={[["Soja","120 mL/ha","80 L/ha"],["Milho","150 mL/ha","100 L/ha"]]} />
<KeyValue items={[["Densidade","1,24"],["pH","2,0 a 4,0"],["Embalagem","5 L"]]} />
<Meter label="Uniformidade da gota" value={86} hint="86%" />
```

Notas
- `Card` sólido sobre fundo chapado. `GlassPanel` só sobre imagem, gradiente ou textura.
- Separação entre blocos vem da hairline, não da sombra. Sombra é sempre curta.
- Números técnicos usam numerais tabulares por padrão em `Stat`, `DataTable numeric` e `KeyValue`.
