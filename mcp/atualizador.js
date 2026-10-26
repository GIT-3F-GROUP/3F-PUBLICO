// Mantém os design systems em dia com o GitHub sem reinstalar o servidor.
// A cada intervalo pergunta ao GitHub qual é o último commit do ramo; se
// mudou, baixa o pacote do repositório, extrai só a pasta design-systems/ e
// passa a ler dela. Enquanto isso (ou sem internet) usa a cópia embutida.

import { existsSync, mkdirSync, readdirSync, renameSync, rmSync, statSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import * as tar from 'tar';
import { usarPasta } from './arquivos.js';

const REPO = process.env.DS_REPO || 'GIT-3F-GROUP/3F-PUBLICO';
const RAMO = process.env.DS_RAMO || 'main';
const MINUTOS = Number(process.env.DS_ATUALIZAR_MIN) || 15;
const CACHE = process.env.DS_CACHE || path.join(os.tmpdir(), '3f-group-design');
const CABECALHOS = { 'user-agent': '3f-group-design', accept: 'application/vnd.github+json' };

let etag;
let commitAtual;

const log = (...partes) => console.error('[design-systems]', ...partes);

async function ultimoCommit() {
  const resposta = await fetch(`https://api.github.com/repos/${REPO}/commits/${RAMO}`, {
    headers: { ...CABECALHOS, ...(etag ? { 'if-none-match': etag } : {}) },
  });
  if (resposta.status === 304) return commitAtual;
  if (!resposta.ok) throw new Error(`GitHub respondeu ${resposta.status}`);
  etag = resposta.headers.get('etag') ?? undefined;
  return (await resposta.json()).sha;
}

async function baixar(sha) {
  const destino = path.join(CACHE, sha);
  if (existsSync(path.join(destino, 'design-systems'))) return destino;
  const temporaria = `${destino}.baixando`;
  rmSync(temporaria, { recursive: true, force: true });
  mkdirSync(temporaria, { recursive: true });
  const resposta = await fetch(`https://codeload.github.com/${REPO}/tar.gz/${sha}`, { headers: CABECALHOS });
  if (!resposta.ok) throw new Error(`download respondeu ${resposta.status}`);
  // O pacote vem com uma pasta raiz "<repo>-<sha>/"; strip: 1 tira essa pasta.
  await pipeline(
    Readable.fromWeb(resposta.body),
    tar.x({ cwd: temporaria, strip: 1, filter: (caminho) => caminho.split('/')[1] === 'design-systems' }),
  );
  renameSync(temporaria, destino);
  return destino;
}

// Apaga cópias antigas, mas só depois de um dia: outro processo do servidor
// (outra janela do Claude, por exemplo) pode ainda estar lendo uma delas.
function limparAntigas(manter) {
  const limite = Date.now() - 24 * 60 * 60 * 1000;
  for (const nome of readdirSync(CACHE)) {
    const pasta = path.join(CACHE, nome);
    if (nome !== manter && statSync(pasta).mtimeMs < limite) rmSync(pasta, { recursive: true, force: true });
  }
}

export async function atualizar() {
  try {
    const sha = await ultimoCommit();
    if (!sha || sha === commitAtual) return false;
    const pasta = await baixar(sha);
    if (!existsSync(path.join(pasta, 'design-systems'))) throw new Error(`${RAMO} não tem a pasta design-systems/`);
    usarPasta(path.join(pasta, 'design-systems'));
    commitAtual = sha;
    limparAntigas(sha);
    log(`atualizado para ${REPO}@${sha.slice(0, 7)}`);
    return true;
  } catch (e) {
    log(`sem atualização (${e.message}); seguindo com a cópia ${commitAtual ? commitAtual.slice(0, 7) : 'embutida'}`);
    return false;
  }
}

// Liga a atualização automática. DS_FONTE=local desliga (lê só a cópia
// embutida ou a pasta de DS_DIR).
export function iniciarAtualizacao() {
  if (process.env.DS_FONTE === 'local' || process.env.DS_DIR) return;
  mkdirSync(CACHE, { recursive: true });
  atualizar();
  setInterval(atualizar, MINUTOS * 60 * 1000).unref();
}
