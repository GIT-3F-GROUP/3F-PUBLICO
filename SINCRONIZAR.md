# Sincronização dos design systems

Os design systems são editados nos artifacts do claude.ai. Uma rotina automática roda este procedimento periodicamente e publica as mudanças no ramo `main`. O MCP confere o `main` a cada 15 minutos e passa a servir a versão nova sem reinstalar nada.

Este arquivo é o roteiro da rotina; também serve para rodar a sincronização à mão (peça ao Claude: "sincronize os design systems seguindo o SINCRONIZAR.md").

## Procedimento

1. No repositório `GIT-3F-GROUP/3F-PUBLICO`, vá para o `main` atualizado (`git fetch origin main && git checkout -B main origin/main`) e rode `npm ci`.
2. Para cada design system em `design-systems/origem.json`:
   1. Liste os arquivos do artifact (Artifact tool, `action: "list"`, `scope: "files"`, `url` do artifact). O cabeçalho da listagem traz a versão (`version 1792190020-9b61`).
   2. Se a versão for igual à de `origem.json`, pule para o próximo.
   3. Baixe todos os arquivos publicados que começam com `project/` (`action: "read"` com `paths`, até 256 por chamada, sem `out_dir`). Anote a pasta onde foram salvos.
   4. Liste os assets (`scope: "assets"`, seguindo `next` se houver) e baixe cada um pelo id (`action: "read"`, `path: <id>`); eles caem na mesma pasta do artifact.
   5. Rode `node mcp/montar-design-system.js <ds> <pasta> <versao>`.
   6. Rode `node mcp/verificar-sensiveis.js <ds>`. Se acusar algo, **não publique esse design system**: desfaça a cópia (`git checkout -- design-systems/<ds> design-systems/origem.json` e `git clean -fd design-systems/<ds>`) e anote os trechos para o relatório. Não edite o artifact por conta própria.
3. Rode `npm test`. Se falhar, não publique nada e relate o erro.
4. Se houver mudanças, rode `npm run versao` (atualiza a versão e a data no início do README), faça um commit `Sincroniza design systems: <lista>` e `git push origin main`.
5. Relate em poucas linhas: o que foi publicado (design system e versão), o que foi pulado por não ter mudado, e o que foi barrado pela verificação de dados sensíveis (arquivo, linha e tipo), para alguém corrigir no artifact.

## Regras

- Nunca publique dados sensíveis: siga a [política de dados](POLITICA-DE-DADOS.md).
- Só a pasta `design-systems/` muda numa sincronização. Mudanças de código passam por pull request.
- Um design system novo entra primeiro no cadastro (`mcp/empresas.js`) e em `origem.json`, por pull request.
