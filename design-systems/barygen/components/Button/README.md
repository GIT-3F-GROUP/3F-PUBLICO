Botão de ação. A hierarquia da tela nasce dele: um primário e o resto em secundário, contorno, fantasma ou seta.

```jsx
<Button variant="primary" iconLeft={<Icon name="baixar" size={16} strokeWidth={2} />}>Baixar catálogo</Button>
<Button variant="outline">Ficha técnica</Button>
<Button variant="seta">Ver os campos</Button>
<Button variant="tom-preto">Ver talhões</Button>      {/* no preto */}
<Button variant="tom-amarelo">Saiba mais</Button>     {/* sobre amarelo */}
<Button variant="vidro">Assistir ao vídeo</Button>    {/* sobre foto */}
```

- **Forma:** retângulo com cantos de 8 px em todos os tamanhos. Nunca pílula (isso é chip e selo) e nunca círculo com letras (isso é avatar).
- **Tamanhos:** compactos no desenho e generosos no toque. sm 32 px, md 40 px, lg 48 px de altura; 12, 20 e 24 px nas laterais; ícone de 16 px a 8 px do texto; 16 px entre botões vizinhos. A área de toque invisível chega a 44 px.
- **Por seção:** no claro, primário + contorno, fantasma ou seta. No preto, primário + tom sobre tom preto ou contorno no escuro. Sobre o amarelo (tom sobre tom, faixa de CTA, forma Van Gogh), o primário vira preto sozinho, e a segunda ação é o tom sobre tom amarelo. Sobre foto, primário + vidro ou contorno no escuro.
- **Texto:** até três palavras, com verbo, em caixa normal, sem exclamação.
- `loading` mostra o spinner e bloqueia o clique. Desabilitado fica a 38% de opacidade.

A página Componentes › Botões mostra todas as variantes e qual usar em cada seção.
