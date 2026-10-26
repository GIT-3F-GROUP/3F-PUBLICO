#!/usr/bin/env node
// Ponto de entrada do 3F GROUP DESIGN.
//   node mcp/index.js          → stdio (Claude Code, Claude Desktop, Cursor…)
//   node mcp/index.js --http   → Streamable HTTP em /mcp (conector remoto)

import { createServer } from 'node:http';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import './arquivos.js';
import { iniciarAtualizacao } from './atualizador.js';
import { criarServidor } from './servidor.js';
import { lerVersao } from './versao.js';

async function lerCorpo(req) {
  const partes = [];
  for await (const parte of req) partes.push(parte);
  const texto = Buffer.concat(partes).toString('utf8');
  return texto ? JSON.parse(texto) : undefined;
}

function iniciarHttp(porta) {
  const http = createServer(async (req, res) => {
    const { pathname } = new URL(req.url, 'http://localhost');
    if (pathname === '/' || pathname === '/saude') {
      res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({ ok: true, mcp: '/mcp' }));
      return;
    }
    if (pathname !== '/mcp') {
      res.writeHead(404).end();
      return;
    }
    if (req.method !== 'POST') {
      // Modo sem sessão: não há fluxo SSE para abrir nem sessão para encerrar.
      res.writeHead(405, { allow: 'POST' }).end();
      return;
    }
    try {
      const corpo = await lerCorpo(req);
      const servidor = criarServidor({ versao: lerVersao() });
      const transporte = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined, enableJsonResponse: true });
      res.on('close', () => {
        transporte.close();
        servidor.close();
      });
      await servidor.connect(transporte);
      await transporte.handleRequest(req, res, corpo);
    } catch (e) {
      if (!res.headersSent) {
        res.writeHead(400, { 'content-type': 'application/json' }).end(
          JSON.stringify({ jsonrpc: '2.0', error: { code: -32700, message: e.message }, id: null }),
        );
      }
    }
  });
  http.listen(porta, () => console.error(`3F GROUP DESIGN em http://localhost:${porta}/mcp`));
}

iniciarAtualizacao();

if (process.argv.includes('--http')) {
  iniciarHttp(Number(process.env.PORT) || 3000);
} else {
  await criarServidor({ versao: lerVersao() }).connect(new StdioServerTransport());
}
