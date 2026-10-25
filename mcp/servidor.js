// Monta o 3F GROUP DESIGN: ferramentas, recursos
// e prompts. O transporte (stdio ou HTTP) fica em index.js.

import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { lerVersao } from './versao.js';
import * as bib from './biblioteca.js';
import { DESIGN_SYSTEMS, EMPRESAS_SEM_DS, dadosDaEmpresa, escolherDesignSystem, resolverDesignSystem } from './empresas.js';

const LIMITE_GUIA = 40000;
const LIMITE_PREVIEW = 30000;

const INSTRUCOES = `Design systems oficiais do 3F Group: 3F Group, ORVIX, BARYGEN, MixSafe e FarmSense.

Como escolher: um pedido sobre uma única empresa usa o design system dela. Mais de uma empresa, nenhuma empresa identificada ou uma empresa sem design system próprio (Agro 3F, ADISA, Mátria, FarmCast, FA Incorporadora) usa o 3F Group Design System. Na dúvida, chame escolher_design_system.

Para contatos, razão social, CNPJ, endereço e redes de uma empresa, use dados_da_empresa e nunca invente esses dados.

Antes de produzir qualquer peça, leia o guia (ler_guia) e os tokens (ler_tokens) do design system escolhido e siga as regras de marca, cores, tipografia e logos. Use sempre os arquivos de logo oficiais (obter_logo) sem redesenhar, recolorir fora das versões previstas ou distorcer. Nunca informe a quantidade de empresas do grupo.`;

function texto(conteudo) {
  return { content: [{ type: 'text', text: typeof conteudo === 'string' ? conteudo : JSON.stringify(conteudo, null, 2) }] };
}

function erro(mensagem) {
  return { content: [{ type: 'text', text: mensagem }], isError: true };
}

const opcoesDS = () => bib.disponiveis().map((ds) => `${ds} (${DESIGN_SYSTEMS[ds].marca})`).join(', ');

// Converte o nome livre informado pelo modelo no slug do design system.
function exigirDS(nome) {
  const ds = resolverDesignSystem(nome);
  if (!ds || !bib.disponiveis().includes(ds)) {
    throw new Error(`Design system não encontrado: "${nome}". Disponíveis: ${opcoesDS()}.`);
  }
  return ds;
}

// Envolve o handler para transformar exceções em respostas de erro legíveis.
const seguro = (fn) => async (args) => {
  try {
    return await fn(args);
  } catch (e) {
    return erro(e.message);
  }
};

function cortar(conteudo, limite, dica) {
  if (conteudo.length <= limite) return conteudo;
  return `${conteudo.slice(0, limite)}\n\n[… cortado em ${limite} de ${conteudo.length} caracteres. ${dica}]`;
}

const campoDS = z
  .string()
  .describe('Design system: 3fgroup, orvix, barygen, mixsafe ou farmsense (aceita o nome da empresa, como "ORVIX" ou "3F Group").');

export function criarServidor() {
  const servidor = new McpServer(
    { name: '3f-group-design', title: '3F GROUP DESIGN', version: lerVersao().versao },
    { instructions: INSTRUCOES },
  );

  servidor.registerTool(
    'listar_design_systems',
    {
      title: 'Listar design systems',
      description: 'Lista os design systems do 3F Group disponíveis, com marca, site, área de atuação e quantidade de componentes.',
      inputSchema: {},
    },
    seguro(async () => {
      const lista = bib.disponiveis().map((ds) => ({
        designSystem: ds,
        nome: DESIGN_SYSTEMS[ds].nome,
        marca: DESIGN_SYSTEMS[ds].marca,
        site: DESIGN_SYSTEMS[ds].site,
        atuacao: DESIGN_SYSTEMS[ds].atuacao,
        componentes: bib.listarComponentes(ds).length,
        artifact: DESIGN_SYSTEMS[ds].artifact,
      }));
      const { versao, data } = lerVersao();
      return texto({
        versao: `${versao} · ${data}`,
        designSystems: lista,
        semDesignSystemProprio: Object.values(EMPRESAS_SEM_DS).map((e) => `${e.marca}: usa o 3F Group Design System`),
      });
    }),
  );

  servidor.registerTool(
    'dados_da_empresa',
    {
      title: 'Dados da empresa',
      description:
        'Devolve os dados públicos e oficiais de uma empresa do 3F Group: site, e-mail, telefone, WhatsApp, endereço, Instagram, razão social e CNPJ, além do design system que ela usa. Use em rodapés, assinaturas, cartões e peças com contato.',
      inputSchema: {
        empresa: z.string().describe('Nome da empresa, como "ORVIX", "Agro 3F", "ADISA" ou "3F Group".'),
      },
    },
    seguro(async ({ empresa }) => {
      const dados = dadosDaEmpresa(empresa);
      if (!dados) return erro(`Empresa "${empresa}" não reconhecida.`);
      return texto(dados);
    }),
  );

  servidor.registerTool(
    'escolher_design_system',
    {
      title: 'Escolher design system',
      description:
        'Aplica a regra do 3F Group para decidir qual design system usar a partir das empresas citadas no pedido. Uma empresa com design system próprio usa o dela; mais de uma, nenhuma ou uma sem design system próprio usa o 3F Group.',
      inputSchema: {
        empresas: z.array(z.string()).default([]).describe('Empresas citadas no pedido, como ["ORVIX"] ou ["BARYGEN", "FarmSense"]. Vazio se nenhuma.'),
      },
    },
    seguro(async ({ empresas }) => texto(escolherDesignSystem(empresas))),
  );

  servidor.registerTool(
    'ler_guia',
    {
      title: 'Ler guia da marca',
      description:
        'Lê o guia (brand book) de um design system: regras de ouro, voz, cores, tipografia, layout, logos, ícones e catálogo de componentes. Sem "secao", devolve o guia inteiro quando é curto, ou a abertura e o índice de seções quando é longo.',
      inputSchema: {
        design_system: campoDS,
        secao: z.string().optional().describe('Título (ou parte) de uma seção de nível ##, como "Cor", "Tipografia" ou "Logos".'),
        completo: z.boolean().default(false).describe('Devolve o guia inteiro mesmo se for longo.'),
      },
    },
    seguro(async ({ design_system, secao, completo }) => {
      const ds = exigirDS(design_system);
      const guia = bib.lerTexto(ds, 'README.md');
      const lista = bib.secoes(guia);
      const indice = lista
        .filter((s) => s.titulo)
        .map((s) => {
          const subs = bib.subtitulos(s.texto);
          return `- ${s.titulo}${subs.length ? ` (${subs.join('; ')})` : ''}`;
        })
        .join('\n');

      if (secao) {
        const alvo = secao.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
        const plano = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
        const achadas = lista.filter((s) => s.titulo && plano(s.titulo) === alvo);
        const escolhidas = achadas.length ? achadas : lista.filter((s) => s.titulo && plano(s.titulo).includes(alvo));
        if (!escolhidas.length) return erro(`Seção "${secao}" não encontrada no guia de ${ds}. Seções:\n${indice}`);
        return texto(escolhidas.map((s) => s.texto).join('\n\n'));
      }
      if (completo || guia.length <= LIMITE_GUIA) return texto(guia);
      return texto(
        `${lista[0].texto}\n\n---\nO guia completo tem ${guia.length} caracteres. Leia as seções de que precisa com ler_guia(secao), ou passe completo=true.\n\nSeções:\n${indice}`,
      );
    }),
  );

  servidor.registerTool(
    'ler_tokens',
    {
      title: 'Ler tokens',
      description:
        'Lê os design tokens de um design system: cores e temas, tipografia e fontes, espaçamento, raios, sombras, larguras, breakpoints e movimento. Formato json (tokens.json) ou css (variáveis CSS, quando o design system tem tokens.css).',
      inputSchema: {
        design_system: campoDS,
        formato: z.enum(['json', 'css']).default('json'),
        grupo: z.string().optional().describe('Só no formato json: chave de primeiro nível, como "color", "type", "spacing" ou "radius".'),
      },
    },
    seguro(async ({ design_system, formato, grupo }) => {
      const ds = exigirDS(design_system);
      if (formato === 'css') {
        if (bib.existe(ds, 'tokens.css')) return texto(bib.lerTexto(ds, 'tokens.css'));
        if (bib.existe(ds, 'components/bundle.css')) {
          return texto(`/* ${ds} não tem tokens.css; este é o components/bundle.css, que declara as variáveis no :root. */\n${bib.lerTexto(ds, 'components/bundle.css')}`);
        }
        return erro(`${ds} não tem tokens em CSS. Use formato json.`);
      }
      const tokens = bib.lerJson(ds, 'tokens.json');
      if (!grupo) return texto(tokens);
      if (!(grupo in tokens)) return erro(`Grupo "${grupo}" não existe. Grupos: ${Object.keys(tokens).join(', ')}.`);
      return texto({ [grupo]: tokens[grupo] });
    }),
  );

  servidor.registerTool(
    'listar_componentes',
    {
      title: 'Listar componentes',
      description: 'Lista os componentes de um design system, cada um com sua descrição curta.',
      inputSchema: { design_system: campoDS },
    },
    seguro(async ({ design_system }) => {
      const ds = exigirDS(design_system);
      return texto(bib.listarComponentes(ds).map((c) => `- ${c.nome}: ${c.descricao}`).join('\n'));
    }),
  );

  servidor.registerTool(
    'ler_componente',
    {
      title: 'Ler componente',
      description:
        'Lê um componente: diretrizes de uso (README), referência de API, tipos (.d.ts), código-fonte (.jsx) quando houver, e a prévia em HTML, que mostra a marcação e as classes reais.',
      inputSchema: {
        design_system: campoDS,
        componente: z.string().describe('Nome do componente, como "Botao", "Cartao" ou "Button".'),
        incluir_preview: z.boolean().default(true).describe('Inclui o preview.html (marcação de referência).'),
      },
    },
    seguro(async ({ design_system, componente, incluir_preview }) => {
      const ds = exigirDS(design_system);
      const nome = bib.resolverComponente(ds, componente);
      if (!nome) return erro(`Componente "${componente}" não encontrado em ${ds}. Use listar_componentes.`);
      const partes = [`# ${nome} (${DESIGN_SYSTEMS[ds].nome})`];
      const anexar = (titulo, caminho, limite) => {
        if (!bib.existe(ds, caminho)) return;
        const conteudo = bib.lerTexto(ds, caminho);
        if (!conteudo.trim()) return;
        partes.push(`## ${titulo} · ${caminho}\n\n${limite ? cortar(conteudo, limite, `Leia o arquivo inteiro com ler_arquivo("${caminho}").`) : conteudo}`);
      };
      anexar('Diretrizes', `components/${nome}/README.md`);
      anexar('API', `api/components/${nome}.md`);
      anexar('Tipos', `components/${nome}/${nome}.d.ts`);
      for (const fonte of bib.fontesDoComponente(ds, nome)) anexar('Código-fonte', fonte, LIMITE_PREVIEW);
      if (incluir_preview) anexar('Prévia', `components/${nome}/preview.html`, LIMITE_PREVIEW);
      return texto(partes.join('\n\n'));
    }),
  );

  servidor.registerTool(
    'listar_logos',
    {
      title: 'Listar logos e assets',
      description:
        'Lista as logos e demais assets oficiais de um design system, por grupo, com as orientações de uso de cada grupo (versões, cores, fundos).',
      inputSchema: { design_system: campoDS },
    },
    seguro(async ({ design_system }) => {
      const ds = exigirDS(design_system);
      const grupos = bib.gruposDeAssets(ds);
      if (!grupos.length) return erro(`${ds} não tem assets registrados no design-system.json.`);
      return texto(
        grupos
          .map((g) => {
            const arquivos = g.arquivos.map((a) => `- ${a.nome}${a.disponivel ? '' : ' (arquivo ausente na exportação)'}`).join('\n');
            return `## ${g.grupo} · ${g.pasta}\n\n${g.orientacoes.trim()}\n\n${arquivos}`;
          })
          .join('\n\n'),
      );
    }),
  );

  servidor.registerTool(
    'obter_logo',
    {
      title: 'Obter logo',
      description:
        'Devolve o arquivo oficial de uma logo ou asset. SVG vem como texto, pronto para embutir; PNG, JPG e WEBP vêm como imagem. Nunca redesenhe a logo: use este arquivo.',
      inputSchema: {
        design_system: campoDS,
        arquivo: z.string().describe('Nome do arquivo como aparece em listar_logos, como "principal-3fgroup-colorida-171x48px.svg".'),
      },
    },
    seguro(async ({ design_system, arquivo }) => {
      const ds = exigirDS(design_system);
      const caminho = bib.resolverAsset(ds, arquivo);
      if (!caminho || !bib.existe(ds, caminho)) return erro(`Asset "${arquivo}" não encontrado em ${ds}. Use listar_logos.`);
      const tipo = bib.tipoDoArquivo(caminho);
      if (bib.ehTexto(caminho)) return texto(bib.lerTexto(ds, caminho));
      if (tipo.startsWith('image/')) {
        return { content: [{ type: 'image', data: bib.lerBinario(ds, caminho).toString('base64'), mimeType: tipo }] };
      }
      return erro(`${caminho} é ${tipo}; baixe pelo recurso ds://${ds}/${caminho}.`);
    }),
  );

  servidor.registerTool(
    'buscar',
    {
      title: 'Buscar nos design systems',
      description: 'Busca um termo (sem diferenciar acentos e maiúsculas) nos guias, componentes, APIs e orientações de assets. Útil para achar uma regra, cor ou componente.',
      inputSchema: {
        termo: z.string().min(2),
        design_system: campoDS.optional().describe('Restringe a busca a um design system. Sem ele, busca em todos.'),
      },
    },
    seguro(async ({ termo, design_system }) => {
      const lista = design_system ? [exigirDS(design_system)] : bib.disponiveis();
      const { total, achados } = bib.buscar(termo, lista);
      if (!total) return texto(`Nada encontrado para "${termo}".`);
      const linhas = achados.map((a) => `${a.designSystem}/${a.arquivo}:${a.linha}  ${a.trecho}`);
      return texto(`${total} ocorrência(s)${total > achados.length ? `, mostrando ${achados.length}` : ''}:\n${linhas.join('\n')}`);
    }),
  );

  servidor.registerTool(
    'listar_arquivos',
    {
      title: 'Listar arquivos',
      description: 'Lista os arquivos de um design system, ou de uma pasta dele (como "fonts", "assets" ou "ui_kits").',
      inputSchema: { design_system: campoDS, pasta: z.string().default('') },
    },
    seguro(async ({ design_system, pasta }) => {
      const ds = exigirDS(design_system);
      const arquivos = bib.listarArquivos(ds, pasta);
      if (!arquivos.length) return erro(`Nada em ${ds}/${pasta}.`);
      return texto(arquivos.join('\n'));
    }),
  );

  servidor.registerTool(
    'ler_arquivo',
    {
      title: 'Ler arquivo',
      description: 'Lê qualquer arquivo de texto de um design system pelo caminho (como "design-system.json" ou "components/bundle.css"). Imagens vêm como imagem.',
      inputSchema: { design_system: campoDS, caminho: z.string() },
    },
    seguro(async ({ design_system, caminho }) => {
      const ds = exigirDS(design_system);
      if (!bib.existe(ds, caminho)) return erro(`Arquivo não encontrado: ${ds}/${caminho}.`);
      const tipo = bib.tipoDoArquivo(caminho);
      if (bib.ehTexto(caminho)) return texto(bib.lerTexto(ds, caminho));
      if (tipo.startsWith('image/')) {
        return { content: [{ type: 'image', data: bib.lerBinario(ds, caminho).toString('base64'), mimeType: tipo }] };
      }
      return erro(`${caminho} é binário (${tipo}); baixe pelo recurso ds://${ds}/${caminho}.`);
    }),
  );

  // Cada arquivo dos design systems também fica disponível como recurso MCP.
  servidor.registerResource(
    'arquivo',
    new ResourceTemplate('ds://{design_system}/{+caminho}', {
      list: async () => ({
        resources: bib.disponiveis().flatMap((ds) =>
          ['README.md', 'SKILL.md', 'tokens.json', 'tokens.css', 'design-system.json']
            .filter((f) => bib.existe(ds, f))
            .map((f) => ({ uri: `ds://${ds}/${f}`, name: `${DESIGN_SYSTEMS[ds].marca} · ${f}`, mimeType: bib.tipoDoArquivo(f) })),
        ),
      }),
      complete: { design_system: () => bib.disponiveis() },
    }),
    { title: 'Arquivo de design system', description: 'Qualquer arquivo de um design system do 3F Group, inclusive fontes e logos.' },
    async (uri, { design_system, caminho }) => {
      const ds = exigirDS(design_system);
      const relativo = decodeURIComponent(String(caminho));
      if (!bib.existe(ds, relativo)) throw new Error(`Arquivo não encontrado: ${uri.href}`);
      const mimeType = bib.tipoDoArquivo(relativo);
      if (bib.ehTexto(relativo)) return { contents: [{ uri: uri.href, mimeType, text: bib.lerTexto(ds, relativo) }] };
      return { contents: [{ uri: uri.href, mimeType, blob: bib.lerBinario(ds, relativo).toString('base64') }] };
    },
  );

  servidor.registerPrompt(
    'usar_design_system',
    {
      title: 'Usar o design system de uma empresa',
      description: 'Prepara o contexto para produzir uma peça seguindo o design system certo.',
      argsSchema: {
        empresas: z.string().optional().describe('Empresas envolvidas, separadas por vírgula. Vazio se nenhuma.'),
        peca: z.string().optional().describe('O que vai ser produzido e em que meio (digital, impressão, bordado…).'),
      },
    },
    ({ empresas, peca }) => {
      const lista = (empresas ?? '').split(',').map((e) => e.trim()).filter(Boolean);
      const { designSystem, motivo } = escolherDesignSystem(lista);
      return {
        messages: [
          {
            role: 'user',
            content: {
              type: 'text',
              text: `${motivo}\n\nAntes de produzir${peca ? ` "${peca}"` : ''}, leia o guia (ler_guia com design_system "${designSystem}"), os tokens (ler_tokens) e as logos (listar_logos). Siga as regras de marca, cores, tipografia e logos, e use os arquivos de logo oficiais sem redesenhar.${peca ? '' : ' Confirme o uso e o meio da peça antes de escolher versões e formatos.'}`,
            },
          },
        ],
      };
    },
  );

  return servidor;
}
