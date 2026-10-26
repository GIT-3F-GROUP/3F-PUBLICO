// Leitura dos design systems exportados para a pasta design-systems/.
// Cada design system segue o formato do tipo Design System do Claude:
// README.md (brand book), tokens.json, design-system.json, components/,
// assets/, fonts/ e, em alguns, api/ e tokens.css.
//
// Os arquivos vêm de uma "fonte", que pode ser a pasta no disco (Node, ver
// arquivos.js) ou os assets do Cloudflare Worker (ver worker.js). A fonte
// tem a lista de todos os caminhos ("<ds>/<caminho>") e lê o conteúdo.

import path from 'node:path';
import { DESIGN_SYSTEMS, normalizar } from './empresas.js';

const posix = path.posix;

let fonte = null;

// fonte = { arquivos: string[] (ordenados, "<ds>/<caminho>"), ler: async (caminho) => Uint8Array }
export function definirFonte(nova) {
  fonte = { ...nova, conjunto: new Set(nova.arquivos) };
}

function exigirFonte() {
  if (!fonte) throw new Error('Nenhuma fonte de design systems configurada.');
  return fonte;
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
  return TIPOS[posix.extname(caminho).toLowerCase()] ?? 'application/octet-stream';
}

export function ehTexto(caminho) {
  const tipo = tipoDoArquivo(caminho);
  return tipo.startsWith('text/') || tipo === 'application/json' || tipo === 'image/svg+xml';
}

export function disponiveis() {
  const { arquivos } = exigirFonte();
  return Object.keys(DESIGN_SYSTEMS).filter((ds) => arquivos.some((f) => f.startsWith(`${ds}/`)));
}

// Normaliza um caminho relativo dentro do design system, sem deixar sair dele.
export function resolverCaminho(relativo = '') {
  const limpo = posix.normalize(String(relativo).replace(/^\/+/, ''));
  if (limpo === '..' || limpo.startsWith('../')) throw new Error(`Caminho fora do design system: ${relativo}`);
  return limpo === '.' ? '' : limpo.replace(/\/+$/, '');
}

export function existe(ds, relativo) {
  return exigirFonte().conjunto.has(`${ds}/${resolverCaminho(relativo)}`);
}

export async function lerBinario(ds, relativo) {
  const caminho = resolverCaminho(relativo);
  if (!existe(ds, caminho)) throw new Error(`Arquivo não encontrado: ${ds}/${caminho}.`);
  return exigirFonte().ler(`${ds}/${caminho}`);
}

export async function lerTexto(ds, relativo) {
  return new TextDecoder().decode(await lerBinario(ds, relativo));
}

export async function lerJson(ds, relativo) {
  return JSON.parse(await lerTexto(ds, relativo));
}

export function paraBase64(bytes) {
  let binario = '';
  for (let i = 0; i < bytes.length; i += 0x8000) binario += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(binario);
}

// Lista os arquivos (recursivamente) de uma pasta do design system.
export function listarArquivos(ds, pasta = '') {
  const relativo = resolverCaminho(pasta);
  const prefixo = relativo ? `${ds}/${relativo}` : ds;
  const { arquivos, conjunto } = exigirFonte();
  if (relativo && conjunto.has(prefixo)) return [relativo];
  return arquivos
    .filter((f) => f.startsWith(`${prefixo}/`))
    .map((f) => f.slice(ds.length + 1))
    .filter((f) => !f.split('/').some((parte) => parte.startsWith('.')));
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

// Subseções de nível 3 (###) de todo o Markdown, cada uma até o próximo ### ou ##.
export function subsecoes(markdown) {
  const lista = [];
  let atual = null;
  let emCodigo = false;
  for (const linha of markdown.split('\n')) {
    if (linha.startsWith('```')) emCodigo = !emCodigo;
    if (!emCodigo && /^#{2,3}\s+/.test(linha)) {
      atual = /^###\s+/.test(linha) ? { titulo: linha.replace(/^###\s+/, '').trim(), linhas: [] } : null;
      if (atual) lista.push(atual);
    }
    atual?.linhas.push(linha);
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

function nomesDeComponentes(ds) {
  const nomes = new Set();
  for (const f of listarArquivos(ds, 'components')) {
    const partes = f.split('/');
    if (partes.length > 2 && !['lib', 'src'].includes(partes[1])) nomes.add(partes[1]);
  }
  return [...nomes].sort((a, b) => a.localeCompare(b));
}

const lerSeExistir = async (ds, caminho) => (existe(ds, caminho) ? lerTexto(ds, caminho) : '');

export async function listarComponentes(ds) {
  return Promise.all(
    nomesDeComponentes(ds).map(async (nome) => {
      const readme = await lerSeExistir(ds, `components/${nome}/README.md`);
      const descricao = primeiraFrase(readme) || primeiraFrase(await lerSeExistir(ds, `api/components/${nome}.md`));
      return { nome, descricao };
    }),
  );
}

export function contarComponentes(ds) {
  return nomesDeComponentes(ds).length;
}

export function resolverComponente(ds, nome) {
  const lista = nomesDeComponentes(ds);
  const alvo = normalizar(nome);
  return lista.find((c) => normalizar(c) === alvo) ?? lista.find((c) => normalizar(c).includes(alvo) || alvo.includes(normalizar(c)));
}

// Arquivos de código-fonte (.jsx) cujo nome é o do componente.
export function fontesDoComponente(ds, nome) {
  return listarArquivos(ds, 'components/src').filter((f) => posix.basename(f, posix.extname(f)) === nome);
}

// ---------- Logos e outros assets ----------

// Lê os grupos de assets descritos no design-system.json.
export async function gruposDeAssets(ds) {
  if (!existe(ds, 'design-system.json')) return [];
  const manifesto = await lerJson(ds, 'design-system.json');
  const grupos = manifesto.assetGroups ?? {};
  return Promise.all(
    Object.entries(grupos).map(async ([chave, grupo]) => {
      // Alguns design systems guardam os arquivos no armazenamento de assets
      // (listados em "files"); outros como arquivos publicados na pasta, só
      // com a ordem no manifesto. Junta os dois casos.
      const naPasta = listarArquivos(ds, `assets/${chave}`)
        .map((f) => posix.basename(f))
        .filter((nome) => nome !== 'README.md');
      const nomes = [...new Set([...(grupo.order ?? []), ...Object.keys(grupo.files ?? {}), ...naPasta])];
      const arquivos = nomes
        .filter((nome) => grupo.files?.[nome] || naPasta.includes(nome))
        .map((nome) => {
          const caminho = `assets/${chave}/${nome}`;
          return { nome, caminho, tipo: grupo.files?.[nome]?.type ?? tipoDoArquivo(nome), disponivel: existe(ds, caminho) };
        });
      const orientacoes = await lerSeExistir(ds, `assets/${chave}/README.md`);
      return { grupo: grupo.name ?? chave, pasta: `assets/${chave}`, orientacoes, arquivos };
    }),
  );
}

export async function resolverAsset(ds, nome) {
  const alvo = nome.trim().toLowerCase();
  for (const grupo of await gruposDeAssets(ds)) {
    for (const arquivo of grupo.arquivos) {
      if (arquivo.nome.toLowerCase() === alvo || arquivo.caminho.toLowerCase() === alvo) return arquivo.caminho;
    }
  }
  return existe(ds, nome) ? resolverCaminho(nome) : null;
}

// ---------- Busca ----------

const PASTAS_DE_BUSCA = ['README.md', 'components', 'api', 'assets', 'ui_kits'];
const plano = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export async function buscar(termo, lista, limite = 40) {
  const alvo = normalizar(termo);
  const palavras = plano(String(termo)).split(/\s+/).filter(Boolean);
  const achados = [];
  for (const ds of lista) {
    const arquivos = PASTAS_DE_BUSCA.flatMap((p) => listarArquivos(ds, p)).filter((f) => f.endsWith('.md'));
    const textos = await Promise.all(arquivos.map((f) => lerTexto(ds, f)));
    arquivos.forEach((arquivo, n) => {
      textos[n].split('\n').forEach((linha, i) => {
        const casa = palavras.every((p) => plano(linha).includes(p)) || (alvo && normalizar(linha).includes(alvo));
        if (casa) achados.push({ designSystem: ds, arquivo, linha: i + 1, trecho: linha.trim().slice(0, 240) });
      });
    });
  }
  return { total: achados.length, achados: achados.slice(0, limite) };
}
