O ícone da App Store: canto reto, sem transparência, em três variantes.
O ícone que vai para a loja segue regras diferentes do ícone que vai para a web.

**Canto reto.** A Apple aplica a máscara de canto dela por cima do arquivo. Um ícone que já chega arredondado fica com a borda cortada duas vezes, e o resultado é um canto sujo. O arquivo da loja é um quadrado inteiro.

**Sem transparência.** O PNG vai em sRGB e **sem canal alfa**. Arquivo com transparência é recusado no envio.

**1024 por 1024, e só.** Os tamanhos menores o sistema gera sozinho a partir desse. O desenho tem de continuar legível quando ele vira o ícone de 40 px da busca, e é por isso que o símbolo ocupa 66 % do lado: menos que isso some, mais que isso encosta na máscara.

**Três variantes, desde o iOS 18:**

| Variante | Fundo | Símbolo | Para quê |
|---|---|---|---|
| Clara | degradê `azul-business-03` para `04` | branco | o padrão |
| Escura | `azul-noite` | branco | quando o sistema está no modo escuro |
| Matizada | cinza escuro | cinza claro | o sistema pinta por cima com a cor escolhida pela pessoa, e lê só a luminosidade |

**Sem texto no ícone.** O nome do app já aparece embaixo dele. Texto dentro do quadrado some no tamanho pequeno e concorre com o símbolo.

**Onde estão os arquivos:** `assets/app/ios/`. O ícone arredondado da web continua em `assets/app/`, e os dois não se misturam.

## Aplicações

| Código | Aplicação |
|---|---|
| `ICA-01` | As três variantes, em canto reto |
| `ICA-02` | O sistema é que arredonda |
| `ICA-03` | O arquivo certo e o errado, sobre o xadrez |
| `ICA-04` | No tamanho da busca, 40 px |
