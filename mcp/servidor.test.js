import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';
import { criarServidor } from './servidor.js';
import { disponiveis } from './biblioteca.js';
import { escolherDesignSystem, resolverDesignSystem } from './empresas.js';

async function conectar() {
  const [lado1, lado2] = InMemoryTransport.createLinkedPair();
  const cliente = new Client({ name: 'teste', version: '0.0.0' });
  await Promise.all([criarServidor().connect(lado1), cliente.connect(lado2)]);
  return cliente;
}

const chamar = async (cliente, name, args = {}) => {
  const r = await cliente.callTool({ name, arguments: args });
  return { ...r, texto: r.content.map((c) => c.text ?? '').join('\n') };
};

test('resolve nomes livres das marcas', () => {
  assert.equal(resolverDesignSystem('ORVIX'), 'orvix');
  assert.equal(resolverDesignSystem('barigen'), 'barygen');
  assert.equal(resolverDesignSystem('Farmasense'), 'farmsense');
  assert.equal(resolverDesignSystem('3F Group'), '3fgroup');
  assert.equal(resolverDesignSystem('MixSafe IA'), 'mixsafe');
  assert.equal(resolverDesignSystem('Agro 3F'), null);
});

test('aplica a regra de escolha do design system', () => {
  assert.equal(escolherDesignSystem(['Orvix']).designSystem, 'orvix');
  assert.equal(escolherDesignSystem([]).designSystem, '3fgroup');
  assert.equal(escolherDesignSystem(['BARYGEN', 'FarmSense']).designSystem, '3fgroup');
  assert.equal(escolherDesignSystem(['Agro 3F']).designSystem, '3fgroup');
  assert.equal(escolherDesignSystem(['ORVIX', 'orvix']).designSystem, 'orvix');
});

test('expõe as ferramentas e lista os design systems exportados', async () => {
  const cliente = await conectar();
  const { tools } = await cliente.listTools();
  for (const nome of ['listar_design_systems', 'ler_guia', 'ler_tokens', 'ler_componente', 'obter_logo', 'buscar']) {
    assert.ok(tools.some((t) => t.name === nome), nome);
  }
  const r = await chamar(cliente, 'listar_design_systems');
  for (const ds of disponiveis()) assert.match(r.texto, new RegExp(`"designSystem": "${ds}"`));
});

for (const ds of disponiveis()) {
  test(`lê guia, tokens, componentes e logos de ${ds}`, async () => {
    const cliente = await conectar();

    const guia = await chamar(cliente, 'ler_guia', { design_system: ds });
    assert.ok(!guia.isError && guia.texto.length > 200, guia.texto.slice(0, 200));

    const tokens = await chamar(cliente, 'ler_tokens', { design_system: ds });
    assert.ok(!tokens.isError);
    assert.ok(JSON.parse(tokens.texto).color, 'tokens.json sem cores');

    const componentes = await chamar(cliente, 'listar_componentes', { design_system: ds });
    const primeiro = componentes.texto.match(/^- ([^:]+):/m)?.[1];
    assert.ok(primeiro, 'nenhum componente');
    const componente = await chamar(cliente, 'ler_componente', { design_system: ds, componente: primeiro });
    assert.ok(!componente.isError, componente.texto);

    const logos = await chamar(cliente, 'listar_logos', { design_system: ds });
    assert.ok(!logos.isError, logos.texto);
    const logo = logos.texto.match(/^- (.+\.(?:svg|png))$/m)?.[1];
    assert.ok(logo, 'nenhuma logo disponível');
    const arquivo = await cliente.callTool({ name: 'obter_logo', arguments: { design_system: ds, arquivo: logo } });
    assert.ok(!arquivo.isError);
    if (logo.endsWith('.svg')) assert.match(arquivo.content[0].text, /<svg/);
    else assert.equal(arquivo.content[0].type, 'image');
  });
}

test('lê seção do guia, busca e recursos', async () => {
  const cliente = await conectar();
  const secao = await chamar(cliente, 'ler_guia', { design_system: '3fgroup', secao: 'tipografia' });
  assert.match(secao.texto, /^## Tipografia/);

  const busca = await chamar(cliente, 'buscar', { termo: 'Be Vietnam' });
  assert.match(busca.texto, /ocorrência/);

  const { resources } = await cliente.listResources();
  assert.ok(resources.some((r) => r.uri === 'ds://3fgroup/README.md'));
  const recurso = await cliente.readResource({ uri: 'ds://3fgroup/tokens.json' });
  assert.ok(JSON.parse(recurso.contents[0].text).color);
  const fonte = await cliente.readResource({ uri: 'ds://3fgroup/fonts/BeVietnamPro-Regular.ttf' });
  assert.ok(fonte.contents[0].blob.length > 1000);
});

test('não deixa ler fora da pasta do design system', async () => {
  const cliente = await conectar();
  const r = await chamar(cliente, 'ler_arquivo', { design_system: '3fgroup', caminho: '../../package.json' });
  assert.ok(r.isError);
  assert.match(r.texto, /fora do design system/);
});

test('recusa design system desconhecido com a lista de opções', async () => {
  const cliente = await conectar();
  const r = await chamar(cliente, 'ler_guia', { design_system: 'Agro 3F' });
  assert.ok(r.isError);
  assert.match(r.texto, /Disponíveis/);
});

test('nenhum design system tem dados sensíveis (POLITICA-DE-DADOS.md)', async () => {
  const { verificar } = await import('./verificar-sensiveis.js');
  const achados = disponiveis().flatMap(verificar);
  const resumo = achados.slice(0, 20).map((a) => `${a.ds}/${a.arquivo}:${a.linha} [${a.tipo}] ${a.trecho}`);
  assert.equal(achados.length, 0, `Rode "node mcp/verificar-sensiveis.js":\n${resumo.join('\n')}`);
});

test('devolve os dados oficiais das empresas', async () => {
  const cliente = await conectar();
  const orvix = JSON.parse((await chamar(cliente, 'dados_da_empresa', { empresa: 'ORVIX' })).texto);
  assert.equal(orvix.designSystem, 'orvix');
  assert.equal(orvix.contato.site, 'orvix.com.br');
  const adisa = JSON.parse((await chamar(cliente, 'dados_da_empresa', { empresa: 'ADISA Genética' })).texto);
  assert.equal(adisa.designSystem, '3fgroup');
  assert.equal(adisa.contato.site, 'adisa.agr.br');
  const farmcast = JSON.parse((await chamar(cliente, 'dados_da_empresa', { empresa: 'FarmCast' })).texto);
  assert.equal(farmcast.contato.site, 'farmcast.com.br');
  assert.ok((await chamar(cliente, 'dados_da_empresa', { empresa: 'Empresa Qualquer' })).isError);
});

test('numera as versões e mantém o README em dia', async () => {
  const { LINHA_VERSAO, lerVersao, linhaDaVersao, proximaVersao } = await import('./versao.js');
  const base = { versao: '01.001', designSystems: ['3fgroup', 'orvix'] };
  assert.equal(proximaVersao(base, ['orvix', '3fgroup']), '01.002');
  assert.equal(proximaVersao({ ...base, versao: '01.009' }, ['3fgroup', 'orvix']), '01.010');
  assert.equal(proximaVersao({ ...base, versao: '01.014' }, ['3fgroup', 'orvix', 'barygen']), '02.001');
  assert.equal(proximaVersao({ ...base, versao: '02.003' }, ['3fgroup']), '03.001');

  const { readFileSync } = await import('node:fs');
  const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
  assert.equal(readme.match(LINHA_VERSAO)?.[0], linhaDaVersao(lerVersao()), 'Rode "npm run versao".');
});
