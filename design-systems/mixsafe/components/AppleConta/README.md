Entrar com a Apple, excluir a conta e pedir permissão.
Três exigências que a Apple cobra de qualquer app com conta.

**1. Entrar com a Apple.** Quando o app oferece login de outro serviço, como o Google, a Apple exige que ofereça também a opção dela, com o mesmo destaque. É uma das recusas mais comuns.

- O botão vem **pronto da Apple**, pelo componente `ASAuthorizationAppleIDButton` ou pelos arquivos oficiais dela. **Não redesenhe a maçã, não recolora, não mude a proporção.** O sistema da mixsafe não guarda esse desenho de propósito: a marca é da Apple, e o uso é regulado por ela.
- Ele fica **acima ou ao lado do Google**, nunca menor nem menos visível.
- Altura mínima de 44 pt, canto arredondado, e só as três formas que a Apple publica: preto, branco e branco com contorno.
- O texto é o que a Apple define, traduzido por ela. Não escreva o seu.

**2. Excluir a conta dentro do app.** Quem cria conta no app precisa conseguir apagá-la ali dentro, sem ligar, sem e-mail e sem abrir o site. Fica em Perfil, com aviso claro do que se perde e uma confirmação que exige digitar.

- A exclusão apaga a conta da pessoa, e não a fazenda inteira quando há outros usuários nela. Nesse caso o texto explica o que fica.
- Receita e laudo que a lei mandar guardar continuam guardados: diga isso na tela, com a base e o prazo.

**3. Texto de finalidade em cada permissão.** O iOS mostra a frase que o app escreve, e a Apple recusa frase genérica. Peça sempre **depois de explicar**, numa tela da mixsafe, e só então deixe o sistema perguntar.

| Permissão | Texto de finalidade |
|---|---|
| Localização | "A mixsafe usa a sua localização para identificar o talhão em que você está e trazer o clima daquele ponto." |
| Câmera | "A mixsafe usa a câmera para ler o rótulo do produto e preencher a receita sem digitação." |
| Notificação | "A mixsafe avisa quando a janela de aplicação abre e quando o clima muda no seu talhão." |
| Fotos | "A mixsafe usa as suas fotos para anexar o registro da aplicação à receita." |

**Nunca peça permissão na abertura.** Peça no momento em que ela é necessária, com a tela que explica o porquê antes. Quem nega na primeira tela não volta atrás.

## Aplicações

| Código | Aplicação |
|---|---|
| `ICO2-01` | Entrar: a opção da Apple vem primeiro |
| `ICO2-02` | Excluir a conta, dentro do perfil |
| `ICO2-03` | Permissão: explique antes de o sistema perguntar |
