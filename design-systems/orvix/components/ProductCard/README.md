Produto ORVIX: `ProductCard`, `LineCard`, `SpecChip`, `DoseTable`, `PhScale`, `DocLink`, `AxisTrio` (calda, gota, alvo).

```jsx
<ProductCard
  lineKey="orv7" line="Adjuvante premium" name="ORV7 Drop Power"
  claim="Emulsificante, dispersante e antiespumante em um só produto."
  image="../../assets/products/orv7-drop-power.png"
  specs={[{label:"Dose",value:"30 a 200 mL/ha"},{label:"Embalagem",value:"5 L"}]}
  action={<LinkAction href="#">Ver ficha técnica</LinkAction>}
/>
<LineCard lineKey="orv7" badge="Linha premium" name="Adjuvantes e ORV7"
  promise="Calda estável, gota uniforme e alvo bem coberto." count={5} />
<DoseTable rows={[["Soja","120 mL/ha","80 L/ha"],["Milho","150 mL/ha","100 L/ha"]]} />
<PhScale value={4.2} />
<DocLink type="FISPQ" name="FISPQ ORV7 Drop Power" size="380 KB" />
```

Notas
- Sem caractere ou número gigante solto dentro da caixa: o card de linha é só badge, nome, promessa e contagem.
- `lineKey` escolhe a cor secundária da linha. Uma cor de produto por bloco, sempre com o verde institucional na ação.
- Nome de produto e nome de linha saem sempre em Exo ExtraBold caixa alta, pelo próprio componente.
- Use os renders 3D oficiais de `assets/products/`. Não recorte nem recolora o produto.
- `DoseTable` e `SpecChip` sempre em numerais tabulares. Toda dose publicada exige conferência com o rótulo vigente.
