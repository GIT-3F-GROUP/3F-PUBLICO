// Fonte de design systems no disco, para o servidor em Node e os scripts.
// Ao ser importado, já aponta a biblioteca para a pasta design-systems/ que
// vem com o pacote (ou para DS_DIR).

import { readdirSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { definirFonte } from './biblioteca.js';

export const RAIZ_EMBUTIDA = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'design-systems');

function listar(raiz) {
  const saida = [];
  const visitar = (dir) => {
    for (const item of readdirSync(dir, { withFileTypes: true })) {
      const completo = path.join(dir, item.name);
      if (item.isDirectory()) visitar(completo);
      else saida.push(path.relative(raiz, completo).split(path.sep).join('/'));
    }
  };
  visitar(raiz);
  return saida.sort();
}

export function usarPasta(raiz) {
  definirFonte({ arquivos: listar(raiz), ler: async (caminho) => new Uint8Array(await readFile(path.join(raiz, caminho))) });
}

usarPasta(process.env.DS_DIR ? path.resolve(process.env.DS_DIR) : RAIZ_EMBUTIDA);
