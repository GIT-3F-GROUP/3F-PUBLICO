Grupo segmentado de botões para alternar recortes de um mesmo dado (dia/semana/safra).

```jsx
<ButtonGroup value="semana" onChange={setP} options={[{value:'dia',label:'Dia'},{value:'semana',label:'Semana'},{value:'safra',label:'Safra'}]} />
```

Até 4 opções. O selecionado fica preto com texto amarelo. Para filtros de conteúdo prefira PillTabs.
