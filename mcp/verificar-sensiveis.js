#!/usr/bin/env node
// Procura dados sensíveis nos design systems (ver POLITICA-DE-DADOS.md).
//   node mcp/verificar-sensiveis.js            → verifica todos
//   node mcp/verificar-sensiveis.js orvix      → verifica um
// Sai com código 1 se encontrar algo. Trechos liberados de propósito ficam
// em mcp/sensiveis-permitidos.json.

import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import './arquivos.js';
import * as bib from './biblioteca.js';

const PERMITIDOS = JSON.parse(
  readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), 'sensiveis-permitidos.json'), 'utf8'),
);

// Telefones liberados valem em qualquer formato: "(66) 3545-1804", "+55 66 3545-1804"…
const soDigitos = (t) => t.replace(/\D/g, '').replace(/^55(?=\d{10,11}$)/, '');
const TELEFONES_PERMITIDOS = new Set(PERMITIDOS.map(soDigitos).filter((d) => d.length >= 10));
const permitido = (trecho, tipo) =>
  PERMITIDOS.includes(trecho) || (tipo === 'telefone' && TELEFONES_PERMITIDOS.has(soDigitos(trecho)));

// Partes locais de e-mail que são genéricas (não identificam uma pessoa).
const EMAILS_GENERICOS = new Set([
  'contato', 'sac', 'nome', 'email', 'seu', 'seunome', 'voce', 'exemplo', 'usuario', 'comercial', 'atendimento',
  'marketing', 'rh', 'vendas', 'suporte', 'ola', 'oi', 'noreply', 'no-reply', 'privacidade', 'imprensa',
  'financeiro', 'ouvidoria', 'parcerias', 'carreiras', 'vagas', 'faleconosco', 'dpo', 'lgpd', 'produtor',
]);
const DOMINIOS_FICTICIOS = /(^|\.)(example\.(com|org)|exemplo\.com(\.br)?|empresa\.com(\.br)?|fazendaexemplo\.com(\.br)?|dominio\.com(\.br)?)$/;

// Valor fictício: metade ou mais de zeros, terminado em 0000, dígitos
// repetidos ou sequenciais (0000-0000, 9 9999-0000, 12.345,67).
function ficticio(digitos) {
  const zeros = (digitos.match(/0/g) ?? []).length;
  return (
    zeros >= Math.ceil(digitos.length / 2) ||
    digitos.endsWith('0000') ||
    /^(\d)\1+$/.test(digitos) ||
    /1234|2345|3456/.test(digitos)
  );
}

const REGRAS = [
  {
    tipo: 'telefone',
    padrao: /(?:\+55\s?)?\(\d{2}\)\s?9?\s?\d{4}[-\s.]?\d{4}|\+55\s?\d{2}\s?9?\s?\d{4}[-\s.]?\d{4}/g,
    sensivel: (t) => !ficticio(t.replace(/\D/g, '').replace(/^55/, '').slice(2)),
  },
  {
    tipo: 'e-mail',
    padrao: /[a-z0-9._%+-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-z]{2,}/gi,
    sensivel: (t) => {
      const [local, dominio] = t.toLowerCase().split('@');
      return !EMAILS_GENERICOS.has(local) && !DOMINIOS_FICTICIOS.test(dominio) && !/\.(png|jpe?g|svg|webp)$/.test(dominio);
    },
  },
  {
    tipo: 'valor em reais',
    padrao: /R\$\s?\d{1,3}(?:\.\d{3})+(?:,\d{2})?/g,
    sensivel: (t) => !ficticio(t.replace(/\D/g, '')),
  },
  {
    tipo: 'registro profissional',
    padrao: /\bCREA[\s-]*(?:[A-Z]{2}[\s-]*)?\d{4,}/g,
    sensivel: (t) => !ficticio(t.replace(/\D/g, '')),
  },
  {
    tipo: 'estrutura interna',
    padrao: /\bAMOX\b|REPOSITORIO_GIT|\bsupabase\b|\bmonorepo\b|\[XDESIGN\]|CONTEXTOS\/|MATERIAIS\/|Entrega - Design System|ferramentas\/[a-z_]+/gi,
    sensivel: () => true,
  },
  {
    tipo: 'plano ou lacuna de produto',
    padrao: /fase futura|ainda falta|hoje faltam|decisão pendente|ainda por implementar/gi,
    sensivel: () => true,
  },
  {
    tipo: 'quantidade de empresas',
    padrao: /\b(?:\d+|duas|três|quatro|cinco|seis|sete|oito|nove|dez)\s+empresas\b/gi,
    sensivel: () => true,
  },
];

// Arquivos de terceiros, sem conteúdo da marca.
const IGNORAR = /(^|\/)(lib\/|fonts\/)|\.min\.js$/;

export async function verificar(ds) {
  const achados = [];
  for (const arquivo of bib.listarArquivos(ds)) {
    if (IGNORAR.test(arquivo) || !bib.ehTexto(arquivo) || arquivo.endsWith('.svg')) continue;
    const linhas = (await bib.lerTexto(ds, arquivo)).split('\n');
    linhas.forEach((linha, i) => {
      for (const regra of REGRAS) {
        for (const [trecho] of linha.matchAll(regra.padrao)) {
          if (!regra.sensivel(trecho) || permitido(trecho, regra.tipo)) continue;
          const inicio = Math.max(0, linha.indexOf(trecho) - 50);
          achados.push({ ds, arquivo, linha: i + 1, tipo: regra.tipo, trecho, contexto: linha.slice(inicio, inicio + 140).trim() });
        }
      }
    });
  }
  return achados;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const pedidos = process.argv.slice(2);
  const lista = pedidos.length ? pedidos : bib.disponiveis();
  const achados = (await Promise.all(lista.map(verificar))).flat();
  for (const a of achados) console.log(`${a.ds}/${a.arquivo}:${a.linha}  [${a.tipo}] ${a.trecho}  …${a.contexto}…`);
  console.log(achados.length ? `\n${achados.length} trecho(s) sensível(is).` : 'Nenhum dado sensível encontrado.');
  process.exit(achados.length ? 1 : 0);
}
