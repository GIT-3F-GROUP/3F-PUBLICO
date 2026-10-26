#!/usr/bin/env node
// Monta .worker/publico, a pasta de assets do Cloudflare Worker:
//   ds/…               cópia de design-systems/ (servida em /ds/…)
//   _mcp/indice.json   lista de arquivos ("<ds>/<caminho>")
//   _mcp/textos.json   conteúdo dos .md e .json, lidos de uma vez pelo Worker
// O wrangler roda este script antes de cada publicação (wrangler.jsonc).

import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { RAIZ_EMBUTIDA } from './arquivos.js';
import { disponiveis, listarArquivos } from './biblioteca.js';

const SAIDA = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '.worker', 'publico');

rmSync(SAIDA, { recursive: true, force: true });
mkdirSync(path.join(SAIDA, '_mcp'), { recursive: true });

const indice = [];
const textos = {};
for (const ds of disponiveis()) {
  cpSync(path.join(RAIZ_EMBUTIDA, ds), path.join(SAIDA, 'ds', ds), { recursive: true });
  for (const arquivo of listarArquivos(ds)) {
    const caminho = `${ds}/${arquivo}`;
    indice.push(caminho);
    if (/\.(md|json)$/.test(arquivo)) textos[caminho] = readFileSync(path.join(RAIZ_EMBUTIDA, caminho), 'utf8');
  }
}

writeFileSync(path.join(SAIDA, '_mcp', 'indice.json'), JSON.stringify(indice));
writeFileSync(path.join(SAIDA, '_mcp', 'textos.json'), JSON.stringify(textos));
console.log(`Worker: ${indice.length} arquivos, ${Object.keys(textos).length} textos em .worker/publico.`);
