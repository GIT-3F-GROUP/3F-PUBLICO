Campo de formulário de uma linha, com rótulo, ajuda e erro.

## Quando usar

- Todo dado curto: nome, e-mail, telefone, cidade.
- Sempre dentro de `.campo`, com rótulo visível.

## Estrutura

```html
<label class="campo">
  <span class="campo__rotulo">E-mail</span>
  <input class="entrada" type="email" placeholder="nome@empresa.com.br">
  <span class="campo__ajuda">Usamos só para responder.</span>
</label>
```

## Variações desenhadas

- Vazio
- Preenchido
- Em foco
- Com ajuda
- Com erro
- Desabilitado
- Data
- Número

## Regras

- Raio `radius-lg` (8px), altura de 44px, texto de 14px, borda `borda`, fundo `superficie`.
- Rótulo visível acima do campo, em 12px peso 500. O placeholder é só dica de formato.
- Foco, por teclado ou por clique: borda `foco-borda` mais `foco-halo`. O campo nunca ganha anel preto.
- Erro: borda `perigo-borda` e mensagem com ícone, dizendo como corrigir.
- Ajuda em `texto-3`, abaixo do campo, quando o formato precisa de explicação.
- Vale nos dois temas: as cores vêm dos tokens de tema, nunca de valor fixo.
