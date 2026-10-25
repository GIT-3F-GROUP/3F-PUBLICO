# Política de dados dos design systems

Os design systems do 3F Group são públicos: ficam neste repositório aberto e são servidos pelo MCP sem autenticação. Por isso **nenhum design system pode conter dados sensíveis**, nem no guia, nem nos componentes, prévias, bundles, exemplos ou arquivos de origem.

## O que sai

| Tipo | Exemplos | O que fazer |
|---|---|---|
| Pessoas reais | nome de colaborador, diretor, cliente; e-mail pessoal (`fulano@empresa`); celular; registro profissional (CREA etc.) | Trocar por `Nome Sobrenome`, `nome@<domínio da empresa>`, `(66) 0000-0000`, `CREA 000000/MT`. |
| Negócios reais | proposta comercial, cliente com nome de fazenda, preço, condição de pagamento, desconto, regra de pontuação | Trocar por cliente fictício (`Fazenda Exemplo`) e valores-modelo (`R$ 00.000,00`), ou remover o arquivo. |
| Estrutura interna | pastas e caminhos internos, nomes de repositórios, monorepo, vault, banco de dados, APIs internas, ferramentas internas, rotas restritas (`/admin`, `/bi`, `/painel`) | Remover, ou dizer de forma genérica ("base técnica de produtos", "área restrita"). |
| Planos e lacunas | roadmap, "fase futura", "ainda falta no produto", "decisão pendente" | Remover a frase. |
| Quantidade de empresas do grupo | qualquer frase que diga quantas empresas o grupo tem | Reescrever sem o número ("as empresas do grupo"). |

## O que fica

Cores, tipografia, fontes, logos, regras de marca e de voz, nomes de produtos e os **dados oficiais das empresas** listados no [README](README.md#empresas-e-contatos): razão social, CNPJ, site, e-mail `contato@…`, telefone e WhatsApp oficiais, endereço e Instagram. Os telefones oficiais ficam liberados em `mcp/sensiveis-permitidos.json`; um número novo só entra ali depois de confirmado como canal oficial da empresa.

## Como é garantido

- Os artifacts de origem foram revisados e limpos.
- `npm test` roda `mcp/verificar-sensiveis.js`, que procura os padrões acima em todos os arquivos de texto e falha se encontrar algum.
- A sincronização automática roda a mesma verificação antes de publicar e não publica um design system reprovado.
