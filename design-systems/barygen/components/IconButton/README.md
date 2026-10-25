Botão quadrado (40 px, cantos de 8 px) ou circular para uma ação sem texto: busca, fechar, avançar.

```jsx
<IconButton label="Buscar" variant="secondary"><Icon name="buscar" size={17} strokeWidth={2} /></IconButton>
<IconButton label="Avançar" variant="primary" round><Icon name="avancar" size={17} strokeWidth={2} /></IconButton>
```

`label` é obrigatório. Alturas 32, 40 e 48 px, as mesmas dos botões de texto, sempre com área de toque de 44 px. O redondo é só para avançar e voltar.
