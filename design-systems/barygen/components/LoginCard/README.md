Cartão de acesso: logo centralizada, campos, botão de largura total.

```jsx
<LoginCard>
  <Field label="E-mail"><Input placeholder="nome@fazenda.com.br" /></Field>
  <Button variant="primary" fullWidth>Entrar</Button>
</LoginCard>
```

Máx. 380px, raio 16px. "Esqueci minha senha" como Button variant="link".

**Tom sobre tom.** Sobre fundo preto, use `surface="dark"`: o cartão vira uma camada de preto (`--tom-preto-2`) com borda sutil, os campos ficam escuros e a logo passa para a monocromática branca. Nunca um cartão branco sobre o preto.

```jsx
<div className="bry-sec-tom-preto">
  <LoginCard surface="dark">…</LoginCard>
</div>
```
