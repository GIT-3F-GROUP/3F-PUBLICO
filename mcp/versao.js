#!/usr/bin/env node
// Numeração de versão do 3F GROUP DESIGN, no formato 01.001:
//   - o primeiro número sobe quando um design system entra ou sai do
//     conjunto (e o segundo volta para 001);
//   - o segundo número sobe a cada commit.
// Rode `npm run versao` antes de cada commit: o script compara os design
// systems de agora com os da versão anterior, grava versao.json e atualiza
// a linha de versão no início do README.

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { RAIZ_EMBUTIDA } from './biblioteca.js';
import { DESIGN_SYSTEMS } from './empresas.js';

const RAIZ_REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ARQUIVO = path.join(RAIZ_REPO, 'versao.json');
const README = path.join(RAIZ_REPO, 'README.md');
export const LINHA_VERSAO = /^\*\*Versão \d{2}\.\d{3} · \d{2}\/\d{2}\/\d{4}\*\*$/m;

export function lerVersao() {
  return JSON.parse(readFileSync(ARQUIVO, 'utf8'));
}

export function linhaDaVersao({ versao, data }) {
  return `**Versão ${versao} · ${data}**`;
}

function hoje() {
  return new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Cuiaba', day: '2-digit', month: '2-digit', year: 'numeric' }).format(
    new Date(),
  );
}

// Design systems presentes de fato na pasta e no cadastro.
function designSystemsAtuais() {
  return Object.keys(DESIGN_SYSTEMS).filter((ds) => existsSync(path.join(RAIZ_EMBUTIDA, ds)));
}

export function proximaVersao(anterior, designSystems) {
  const [conjunto, commit] = anterior.versao.split('.').map(Number);
  const mudouConjunto = [...designSystems].sort().join() !== [...anterior.designSystems].sort().join();
  const pad = (n, t) => String(n).padStart(t, '0');
  return mudouConjunto ? `${pad(conjunto + 1, 2)}.001` : `${pad(conjunto, 2)}.${pad(commit + 1, 3)}`;
}

function gravar(estado) {
  writeFileSync(ARQUIVO, `${JSON.stringify(estado, null, 2)}\n`);
  const readme = readFileSync(README, 'utf8');
  if (!LINHA_VERSAO.test(readme)) throw new Error('README.md sem a linha de versão (**Versão 01.001 · dd/mm/aaaa**).');
  writeFileSync(README, readme.replace(LINHA_VERSAO, linhaDaVersao(estado)));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const anterior = lerVersao();
  const designSystems = designSystemsAtuais();
  const estado = { versao: proximaVersao(anterior, designSystems), data: hoje(), designSystems };
  gravar(estado);
  console.log(`Versão ${anterior.versao} → ${estado.versao} (${estado.data}).`);
}
