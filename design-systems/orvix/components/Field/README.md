Formulários da ORVIX: `Field` (rótulo, hint e erro), `Input`, `Textarea`, `Select`, `SearchField`, `Checkbox`, `Radio`, `Switch`, `Slider`, `Fieldset`.

```jsx
<Field label="Município" hint="Onde está a lavoura" htmlFor="mun">
  <Input id="mun" iconLeft="map-pin" placeholder="Sorriso" />
</Field>
<Field label="Volume de calda" htmlFor="vol">
  <Input id="vol" mono unit="L/ha" defaultValue="80" />
</Field>
<Field label="Cultura" htmlFor="cult">
  <Select id="cult" placeholder="Selecione" options={["Soja","Milho","Algodão","Feijão"]} />
</Field>
<Checkbox label="Aceito receber conteúdo técnico" description="Consentimento de marketing, desmarcado por padrão" />
<Switch label="Notificar por WhatsApp" />
<Slider min={30} max={200} defaultValue={120} scale={["30 mL/ha","200 mL/ha"]} />
```

Notas
- Consentimento de marketing sempre em checkbox separado e desmarcado por padrão (LGPD).
- Use `mono` em qualquer campo de dado técnico: dose, registro MAPA, CNPJ, pH.
- `size="lg"` (44px) para formulários acessados no campo.
