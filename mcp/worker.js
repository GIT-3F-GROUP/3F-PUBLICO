// 3F GROUP DESIGN no Cloudflare Workers: o endereço público que se cola no
// Claude, no ChatGPT ou em qualquer cliente MCP. O Cloudflare publica de novo
// a cada push no main, então o que está no GitHub é o que o conector serve.
//
//   /mcp      → servidor MCP (Streamable HTTP, sem login, só leitura)
//   /ds/…     → arquivos dos design systems (logos, fontes, guias)
//   /         → página com o endereço e o passo a passo para conectar
//
// Os arquivos vêm dos assets do Worker, montados por construir-worker.js.

import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js';
import versao from '../versao.json' with { type: 'json' };
import { definirFonte } from './biblioteca.js';
import { criarServidor } from './servidor.js';

const CORS = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization, mcp-session-id, mcp-protocol-version, last-event-id',
  'access-control-expose-headers': 'mcp-session-id, mcp-protocol-version',
};

let preparando;

// Carrega uma vez por instância a lista de arquivos e os textos (guias,
// READMEs e JSON); o resto (prévias, código, imagens, fontes) é lido sob
// demanda dos assets.
function prepararFonte(env, origem) {
  preparando ??= (async () => {
    const asset = (caminho) => env.ASSETS.fetch(new URL(caminho, origem));
    const [indice, textos] = await Promise.all([
      asset('/_mcp/indice.json').then((r) => r.json()),
      asset('/_mcp/textos.json').then((r) => r.json()),
    ]);
    const codificador = new TextEncoder();
    definirFonte({
      arquivos: indice,
      ler: async (caminho) => {
        if (caminho in textos) return codificador.encode(textos[caminho]);
        const resposta = await asset(`/ds/${caminho.split('/').map(encodeURIComponent).join('/')}`);
        if (!resposta.ok) throw new Error(`Arquivo não encontrado: ${caminho}.`);
        return new Uint8Array(await resposta.arrayBuffer());
      },
    });
  })().catch((e) => {
    preparando = undefined;
    throw e;
  });
  return preparando;
}

function comCors(resposta) {
  const cabecalhos = new Headers(resposta.headers);
  for (const [nome, valor] of Object.entries(CORS)) cabecalhos.set(nome, valor);
  return new Response(resposta.body, { status: resposta.status, statusText: resposta.statusText, headers: cabecalhos });
}

function paginaInicial(origem) {
  const endereco = `${origem}/mcp`;
  const html = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>3F GROUP DESIGN</title>
<style>
  @font-face { font-family: "Be Vietnam Pro"; src: url("/ds/3fgroup/fonts/BeVietnamPro-Regular.ttf"); font-weight: 400; }
  @font-face { font-family: "Be Vietnam Pro"; src: url("/ds/3fgroup/fonts/BeVietnamPro-Bold.ttf"); font-weight: 700; }
  :root { --tinta: #000; --fundo: #fff; --linha: #dce1e4; --marca: #78be21; --suave: #5b6670; }
  @media (prefers-color-scheme: dark) { :root { --tinta: #fff; --fundo: #000; --linha: #2a3238; --suave: #a7b0b8; } }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: "Be Vietnam Pro", system-ui, sans-serif; color: var(--tinta); background: var(--fundo); line-height: 1.55; }
  main { max-width: 680px; margin: 0 auto; padding: 48px 16px 64px; }
  h1 { font-size: 28px; margin: 0 0 4px; }
  .versao { color: var(--suave); margin: 0 0 32px; }
  .endereco { display: flex; gap: 8px; align-items: stretch; margin: 8px 0 32px; }
  code { flex: 1; padding: 12px 14px; border: 1px solid var(--linha); border-radius: 6px; font-size: 15px; overflow-wrap: anywhere; }
  button { font: inherit; font-weight: 700; padding: 0 18px; border: 0; border-radius: 6px; background: var(--marca); color: #000; cursor: pointer; }
  h2 { font-size: 17px; margin: 28px 0 8px; }
  ol { padding-left: 20px; margin: 0; }
  li { margin: 4px 0; }
  a { color: inherit; }
</style>
</head>
<body>
<main>
  <h1>3F GROUP DESIGN</h1>
  <p class="versao">Versão ${versao.versao} · ${versao.data} · design systems e contatos oficiais do 3F Group</p>
  <strong>Endereço do conector</strong>
  <div class="endereco"><code id="endereco">${endereco}</code><button type="button" onclick="navigator.clipboard.writeText(document.getElementById('endereco').textContent);this.textContent='Copiado'">Copiar</button></div>

  <h2>Claude (claude.ai, app e celular)</h2>
  <ol>
    <li>Configurações → Conectores → Adicionar conector personalizado.</li>
    <li>Nome: <b>3F GROUP DESIGN</b>. URL: o endereço acima. Sem login.</li>
    <li>Em contas Team e Enterprise, o administrador faz isso uma vez em Configurações da organização → Conectores, e cada pessoa só ativa.</li>
  </ol>

  <h2>ChatGPT</h2>
  <ol>
    <li>Configurações → Aplicativos e conectores → Configurações avançadas → ative o modo desenvolvedor.</li>
    <li>Criar conector: nome <b>3F GROUP DESIGN</b>, URL do servidor MCP: o endereço acima, autenticação: nenhuma.</li>
  </ol>

  <h2>Claude Code</h2>
  <ol>
    <li><code>claude mcp add --transport http 3f-group-design ${endereco}</code></li>
  </ol>

  <h2>Atualização</h2>
  <p>Não precisa fazer nada: quando um design system muda, o conector passa a servir a versão nova sozinho. Código e arquivos: <a href="https://github.com/GIT-3F-GROUP/3F-PUBLICO">GIT-3F-GROUP/3F-PUBLICO</a>.</p>
</main>
</body>
</html>`;
  return new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8' } });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
    if (url.pathname === '/' || url.pathname === '') return paginaInicial(url.origin);
    if (url.pathname === '/saude') return Response.json({ ok: true, versao: versao.versao, mcp: '/mcp' });
    if (url.pathname !== '/mcp') return new Response('Não encontrado', { status: 404 });

    try {
      await prepararFonte(env, url.origin);
      const servidor = criarServidor({ versao, urlPublica: `${url.origin}/ds` });
      const transporte = new WebStandardStreamableHTTPServerTransport({ sessionIdGenerator: undefined, enableJsonResponse: true });
      await servidor.connect(transporte);
      return comCors(await transporte.handleRequest(request));
    } catch (e) {
      return comCors(Response.json({ jsonrpc: '2.0', error: { code: -32603, message: e.message }, id: null }, { status: 500 }));
    }
  },
};
