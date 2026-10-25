// Leitura dos design systems exportados para a pasta design-systems/.
// Cada design system segue o formato do tipo Design System do Claude:
// README.md (brand book), tokens.json, design-system.json, components/,
// assets/, fonts/ e, em alguns, api/ e tokens.css.

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DESIGN_SYSTEMS, normalizar } from './empresas.js';

export const RAIZ_EMBUTIDA = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'design-systems');

// Pasta de onde os design systems são lidos. Começa na cópia que veio com o
// pacote e passa para a cópia baixada do GitHub quando ela fica pronta.
let raiz = process.env.DS_DIR ? path.resolve(process.env.DS_DIR) : RAIZ_EMBUTIDA;

export function raizAtual() {
  return raiz;
}

export function definirRaiz(pasta) {
  raiz = pasta;
}

const TIPOS = {
  '.md': 'text/markdown',
  '.json': 'application/json',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.jsx': 'text/javascript',
  '.ts': 'text/plain',
  '.html': 'text/html',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.pdf': 'application/pdf',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

export function tipoDoArquivo(caminho) {
  return TIPOS[path.extname(caminho).toLowerCase()] ?? 'application/octet-stream';
}

export function ehTexto(caminho) {
  const tipo = tipoDoArquivo(caminho);
  return tipo.startsWith('text/') || tipo === 'application/json' || tipo === 'image/svg+xml';
}

export function pastaDo(ds) {
  return path.join(raiz, ds);
}

export function disponiveis() {
  return Object.keys(DESIGN_SYSTEMS).filter((ds) => existsSync(pastaDo(ds)));
}

// Resolve um caminho relativo dentro do design system, sem deixar sair dele.
export function resolverCaminho(ds, relativo = '') {
  const base = pastaDo(ds);
  const alvo = path.resolve(base, relativo.replace(/^\/+/, ''));
  if (alvo !== base && !alvo.startsWith(base + path.sep)) {
    throw new Error(`Caminho fora do design system: ${relativo}`);
  }
  return alvo;
}

export function existe(ds, relativo) {
  return existsSync(resolverCaminho(ds, relativo));
}

export function lerTexto(ds, relativo) {
  return readFileSync(resolverCaminho(ds, relativo), 'utf8');
}

export function lerBinario(ds, relativo) {
  return readFileSync(resolverCaminho(ds, relativo));
}

export function lerJson(ds, relativo) {
  return JSON.parse(lerTexto(ds, relativo));
}

// Lista os arquivos (recursivamente) de uma pasta do design system.
export function listarArquivos(ds, pasta = '') {
  const inicio = resolverCaminho(ds, pasta);
  if (!existsSync(inicio)) return [];
  if (statSync(inicio).isFile()) return [path.relative(pastaDo(ds), inicio)];
  const saida = [];
  const visitar = (dir) => {
    for (const item of readdirSync(dir, { withFileTypes: true })) {
      if (item.name.startsWith('.')) continue;
      const completo = path.join(dir, item.name);
      if (item.isDirectory()) visitar(completo);
      else saida.push(path.relative(pastaDo(ds), completo).split(path.sep).join('/'));
    }
  };
  visitar(inicio);
  return saida.sort();
}

// ---------- Guia (README.md) ----------

// Divide um Markdown nas seções de nível 2 (##), mantendo as subseções dentro.
export function secoes(markdown) {
  const linhas = markdown.split('\n');
  const lista = [{ titulo: '', linhas: [] }];
  let emCodigo = false;
  for (const linha of linhas) {
    if (linha.startsWith('```')) emCodigo = !emCodigo;
    if (!emCodigo && /^##\s+/.test(linha)) lista.push({ titulo: linha.replace(/^##\s+/, '').trim(), linhas: [] });
    lista[lista.length - 1].linhas.push(linha);
  }
  return lista.map((s) => ({ titulo: s.titulo, texto: s.linhas.join('\n').trim() }));
}

export function subtitulos(texto) {
  return texto
    .split('\n')
    .filter((l) => /^###\s+/.test(l))
    .map((l) => l.replace(/^###\s+/, '').trim());
}

// ---------- Componentes ----------

function primeiraFrase(markdown) {
  for (const linha of markdown.split('\n')) {
    const limpa = linha.trim();
    if (!limpa || limpa.startsWith('#') || limpa.startsWith('```') || limpa.startsWith('<')) continue;
    return limpa.replace(/\*\*/g, '');
  }
  return '';
}

export function listarComponentes(ds) {
  const pasta = resolverCaminho(ds, 'components');
  if (!existsSync(pasta)) return [];
  return readdirSync(pasta, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !['lib', 'src'].includes(d.name))
    .map((d) => {
      const nome = d.name;
      const readme = existe(ds, `components/${nome}/README.md`) ? lerTexto(ds, `components/${nome}/README.md`) : '';
      const api = existe(ds, `api/components/${nome}.md`) ? lerTexto(ds, `api/components/${nome}.md`) : '';
      return { nome, descricao: primeiraFrase(readme) || primeiraFrase(api) };
    })
    .sort((a, b) => a.nome.localeCompare(b.nome));
}

export function resolverComponente(ds, nome) {
  const lista = listarComponentes(ds);
  const alvo = normalizar(nome);
  return (
    lista.find((c) => normalizar(c.nome) === alvo) ??
    lista.find((c) => normalizar(c.nome).includes(alvo) || alvo.includes(normalizar(c.nome)))
  )?.nome;
}

// Arquivos de código-fonte (.jsx) cujo nome é o do componente.
export function fontesDoComponente(ds, nome) {
  return listarArquivos(ds, 'components/src').filter((f) => path.basename(f, path.extname(f)) === nome);
}

// ---------- Logos e outros assets ----------

// Lê os grupos de assets descritos no design-system.json.
export function gruposDeAssets(ds) {
  if (!existe(ds, 'design-system.json')) return [];
  const manifesto = lerJson(ds, 'design-system.json');
  const grupos = manifesto.assetGroups ?? {};
  return Object.entries(grupos).map(([chave, grupo]) => {
    // Alguns design systems guardam os arquivos no armazenamento de assets
    // (listados em "files"); outros como arquivos publicados na pasta, só
    // com a ordem no manifesto. Junta os dois casos.
    const naPasta = listarArquivos(ds, `assets/${chave}`)
      .map((f) => path.basename(f))
      .filter((nome) => nome !== 'README.md');
    const nomes = [...new Set([...(grupo.order ?? []), ...Object.keys(grupo.files ?? {}), ...naPasta])];
    const arquivos = nomes
      .filter((nome) => grupo.files?.[nome] || naPasta.includes(nome))
      .map((nome) => {
        const caminho = `assets/${chave}/${nome}`;
        return { nome, caminho, tipo: grupo.files?.[nome]?.type ?? tipoDoArquivo(nome), disponivel: existe(ds, caminho) };
      });
    const leiaMe = existe(ds, `assets/${chave}/README.md`) ? lerTexto(ds, `assets/${chave}/README.md`) : '';
    return { grupo: grupo.name ?? chave, pasta: `assets/${chave}`, orientacoes: leiaMe, arquivos };
  });
}

export function resolverAsset(ds, nome) {
  const alvo = nome.trim().toLowerCase();
  for (const grupo of gruposDeAssets(ds)) {
    for (const arquivo of grupo.arquivos) {
      if (arquivo.nome.toLowerCase() === alvo || arquivo.caminho.toLowerCase() === alvo) return arquivo.caminho;
    }
  }
  return existe(ds, nome) ? nome : null;
}

// ---------- Busca ----------

const PASTAS_DE_BUSCA = ['README.md', 'SKILL.md', 'components', 'api', 'assets', 'ui_kits'];

export function buscar(termo, lista, limite = 40) {
  const alvo = normalizar(termo);
  const palavras = String(termo)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  const achados = [];
  for (const ds of lista) {
    const arquivos = PASTAS_DE_BUSCA.flatMap((p) => listarArquivos(ds, p)).filter((f) => f.endsWith('.md'));
    for (const arquivo of arquivos) {
      const linhas = lerTexto(ds, arquivo).split('\n');
      linhas.forEach((linha, i) => {
        const plana = linha.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
        const casa = palavras.every((p) => plana.includes(p)) || (alvo && normalizar(linha).includes(alvo));
        if (casa) achados.push({ designSystem: ds, arquivo, linha: i + 1, trecho: linha.trim().slice(0, 240) });
      });
    }
  }
  return { total: achados.length, achados: achados.slice(0, limite) };
}
