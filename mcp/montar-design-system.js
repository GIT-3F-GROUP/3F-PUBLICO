#!/usr/bin/env node
// Monta design-systems/<ds> a partir dos arquivos baixados de um artifact do
// tipo Design System (usado pela sincronização; ver SINCRONIZAR.md).
//
//   node mcp/montar-design-system.js <ds> <pasta-baixada> <versao>
//
// <pasta-baixada> é a pasta onde o Artifact tool salvou os arquivos: os
// publicados em project/… e os assets do armazenamento como <id>.<extensão>.
// Fica de fora o que é do tipo de artifact (artifact-type/, index.html,
// SKILL.md) e os assets que o design-system.json não cita (versões antigas).

import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { RAIZ_EMBUTIDA } from './biblioteca.js';
import { DESIGN_SYSTEMS } from './empresas.js';

const [ds, baixada, versao] = process.argv.slice(2);
if (!DESIGN_SYSTEMS[ds] || !baixada || !versao) {
  console.error(`Uso: node mcp/montar-design-system.js <${Object.keys(DESIGN_SYSTEMS).join('|')}> <pasta-baixada> <versao>`);
  process.exit(2);
}

const projeto = path.join(baixada, 'project');
if (!existsSync(path.join(projeto, 'design-system.json'))) {
  console.error(`Não achei ${projeto}/design-system.json. Baixe os arquivos publicados de project/ primeiro.`);
  process.exit(1);
}

// Índice dos assets baixados: id → caminho do arquivo.
const baixados = new Map();
const indexar = (pasta) => {
  for (const item of readdirSync(pasta, { withFileTypes: true })) {
    const completo = path.join(pasta, item.name);
    if (item.isDirectory()) {
      if (completo !== projeto) indexar(completo);
    } else {
      const id = item.name.match(/^([0-9a-f]{32})(\.|$)/)?.[1];
      if (id) baixados.set(id, completo);
    }
  }
};
indexar(baixada);

const destino = path.join(RAIZ_EMBUTIDA, ds);
const temporaria = `${destino}.montando`;
rmSync(temporaria, { recursive: true, force: true });
cpSync(projeto, temporaria, { recursive: true });

const manifesto = JSON.parse(readFileSync(path.join(projeto, 'design-system.json'), 'utf8'));
const faltando = [];
let assets = 0;
for (const [chave, grupo] of Object.entries(manifesto.assetGroups ?? {})) {
  for (const [nome, arquivo] of Object.entries(grupo.files ?? {})) {
    if (!arquivo.blob) continue;
    const origem = baixados.get(arquivo.blob);
    if (!origem) {
      faltando.push(`${chave}/${nome} (${arquivo.blob})`);
      continue;
    }
    mkdirSync(path.join(temporaria, 'assets', chave), { recursive: true });
    cpSync(origem, path.join(temporaria, 'assets', chave, nome));
    assets += 1;
  }
}

if (faltando.length) {
  rmSync(temporaria, { recursive: true, force: true });
  console.error(`Assets não baixados (baixe pelo id e rode de novo):\n${faltando.join('\n')}`);
  process.exit(1);
}

rmSync(destino, { recursive: true, force: true });
cpSync(temporaria, destino, { recursive: true });
rmSync(temporaria, { recursive: true, force: true });

// Registra de qual versão do artifact veio a cópia.
const arquivoOrigem = path.join(RAIZ_EMBUTIDA, 'origem.json');
const origem = existsSync(arquivoOrigem) ? JSON.parse(readFileSync(arquivoOrigem, 'utf8')) : {};
origem[ds] = { artifact: DESIGN_SYSTEMS[ds].artifact, versao };
writeFileSync(arquivoOrigem, `${JSON.stringify(origem, null, 2)}\n`);

console.log(`${ds}: montado em design-systems/${ds} com ${assets} asset(s), versão ${versao}.`);
