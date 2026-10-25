Barras, círculo, esqueletos e as duas esperas: o giro lento e a órbita da logo.
**Tempo conhecido:** barra ou círculo com porcentagem. A pessoa precisa saber quanto falta.

**Tempo desconhecido:** o símbolo em movimento, nunca um spinner genérico. São dois movimentos, os dois **contínuos e de velocidade constante**, sem parar enquanto a espera durar. Nada acelera e freia a cada volta: esse vaivém puxa o olho e cansa quem está esperando.

| Movimento | O que sugere | Onde usar |
|---|---|---|
| **Giro** | trabalho em curso, sem fim previsto | o padrão. Carregamento de tela, sincronização, qualquer espera comum. Uma volta a cada 4,2 s. |
| **Órbita** | o sistema conferindo as coisas uma a uma | cálculo de compatibilidade, validação de uma lista de produtos, leitura de laudo. É o mesmo movimento da **animação principal da logo**, em laço contínuo: três pontos correm as cápsulas e vão desenhando o símbolo atrás de si. |

**Regras.** Um movimento por tela. O giro é o padrão, e a órbita entra quando o sistema está conferindo coisas uma a uma, e na espera longa que ocupa o centro da tela. Tamanho de 24 a 40 px ao lado de um texto, e até 72 px sozinho no centro da tela. A cor é `texto` em espera comum e `acao` quando o resultado da espera é um cálculo da mixsafe.

**Sempre acompanhado de texto.** "Calculando compatibilidade", "Validando produtos". O movimento diz que algo acontece; o texto diz o quê.

**Movimento reduzido.** Com `prefers-reduced-motion` os dois param no símbolo aceso e parado.

## Aplicações

| Código | Aplicação |
|---|---|
| `PRG-01` | Giro, o padrão |
| `PRG-02` | Órbita, o movimento da animação principal |
| `PRG-03` | Espera grande, no centro da tela |
| `PRG-04` | Barra |
| `PRG-05` | Barra de atenção |
| `PRG-06` | Círculo |
| `PRG-07` | Esqueleto de cartão |
| `PRG-08` | Esqueleto de lista |
