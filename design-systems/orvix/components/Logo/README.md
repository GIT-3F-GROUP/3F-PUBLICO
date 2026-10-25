Marca ORVIX: `Logo`, `WordmarkType`, `Eyebrow`, `SectionHeading`, `XTexture`/`XMark`, `TargetMark` (alvo tecnológico), `Callout`, `PullQuote`, `Seal`, `TerritoryBadge`, `Hashtag`, `Capsule`.

```jsx
<Logo variant="principal" size="xl" base="../../" />          {/* com AGROQUÍMICA: mínimo 80px */}
<Logo variant="principal-sem-assinatura" size="md" />       {/* X pontilhado: mínimo 32px */}
<Logo variant="sem-detalhes-sem-assinatura" size="sm" />    {/* abaixo disso: só a escrita ORVIX */}
<Eyebrow ornament="rule">Tecnologia de aplicação</Eyebrow>
<SectionHeading split eyebrow="Portfólio ORVIX"
  title="Um portfólio completo para cada etapa da aplicação."
  lead="Da estabilidade da calda à nutrição foliar de precisão." />
<TargetMark size={140} live glass />
<Callout source="Tese ORVIX">O segredo não está só na dose. Está na fisiologia.</Callout>
<TerritoryBadge base="../../" />
<Hashtag size="lg" />
```

Notas
- Tamanhos mínimos (card Logo: tamanhos mínimos): com AGROQUÍMICA, 80px na principal e na de vídeo, 64px no X com detalhe mínimo, 48px na sem detalhes, 144px na quadrada e 64px no Clube; X pontilhado sem escrita, 32px (quadrada 40px); abaixo disso, só a escrita ORVIX (`sem-detalhes-sem-assinatura`), até 12px.
- Sobre fundo escuro use sempre `variant="clara"`. `escura` existe só para peças de fundo claro fora da interface.
- Nunca redesenhe o lockup: use os SVGs de `assets/logos/`. `WordmarkType` é o recurso tipográfico quando o arquivo não está disponível.
- `Callout` e `PullQuote` saem em Exo ExtraBold caixa alta, nunca em itálico.
- `TargetMark` é o motivo de alvo tecnológico da marca. Combine com vidro (`glass`) e use `live` só uma vez por tela.
- `base` é o caminho relativo até a raiz do design system, porque os SVGs vivem em `assets/`.
