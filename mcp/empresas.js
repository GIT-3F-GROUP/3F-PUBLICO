// Cadastro das marcas do 3F Group e de qual design system cada uma usa.
// A regra: uma empresa com design system próprio usa o dela; mais de uma
// empresa, nenhuma empresa identificada ou uma empresa sem design system
// próprio usa o 3F Group Design System.
// Os contatos são os dados públicos e oficiais de cada empresa.

const SEDE = 'R. Genésio Roberto Baggio, 1098, Sala 4, Centro, Sorriso, MT, CEP 78890-082';

export const DESIGN_SYSTEMS = {
  '3fgroup': {
    nome: '3F Group Design System',
    marca: '3F Group',
    site: 'https://3f.group',
    atuacao: 'Grupo de empresas brasileiras do agronegócio, com sede em Sorriso (MT).',
    artifact: 'https://claude.ai/artifact/CZnyJUpCsQkZhuHMx2Hefy',
    contato: { site: '3f.group', email: 'contato@3f.group' },
    apelidos: ['3fgroup', '3f', 'grupo3f', '3fgrupo', 'tresfgroup'],
  },
  orvix: {
    nome: 'ORVIX Design System',
    marca: 'ORVIX Agroquímica',
    site: 'https://orvix.com.br',
    atuacao: 'Tecnologia de aplicação agrícola.',
    artifact: 'https://claude.ai/artifact/41srcYzUX2Et1EGtx2zqSS',
    contato: {
      razaoSocial: 'ORVIX Agroquímica Ltda',
      cnpj: '54.306.557/0001-84',
      site: 'orvix.com.br',
      email: 'contato@orvix.com.br',
      telefone: '(66) 3545-1804',
      whatsapp: '(66) 99907-9976 (comercial)',
      endereco: SEDE,
      instagram: '@orvix.agro',
    },
    apelidos: ['orvix', 'orvixagroquimica'],
  },
  barygen: {
    nome: 'BARYGEN Design System',
    marca: 'BARYGEN Sementes',
    site: 'https://barygen.com.br',
    atuacao: 'Indústria produtora de sementes. Produto: o híbrido de milho BG307 Max.',
    artifact: 'https://claude.ai/artifact/Cj3XwnxnwHZmL7jKpcqjKZ',
    contato: {
      razaoSocial: 'BARYGEN Seeds Corporation do Brasil Ltda',
      cnpj: '63.608.124/0001-74',
      site: 'barygen.com.br',
      email: 'contato@barygen.com.br',
      whatsapp: '(66) 99712-3214',
      endereco: SEDE,
      instagram: '@barygen.sementes',
    },
    apelidos: ['barygen', 'barigen', 'barygensementes'],
  },
  mixsafe: {
    nome: 'MixSafe Design System',
    marca: 'MixSafe',
    site: 'https://mixsafe.com.br',
    atuacao: 'Inteligência artificial para tecnologia de aplicação.',
    artifact: 'https://claude.ai/artifact/5qyoNs1EUw13iXXWF5z7iS',
    contato: {
      site: 'mixsafe.com.br',
      aplicativo: 'mixsafe.ai',
      email: 'contato@mixsafe.ai',
      whatsapp: '(66) 99213-4444',
      endereco: SEDE,
      instagram: '@mixsafe.ai',
    },
    apelidos: ['mixsafe', 'mixsafeia'],
  },
  farmsense: {
    nome: 'FarmSense Design System',
    marca: 'FarmSense',
    site: 'https://farmsense.com.br',
    atuacao: 'Assessoria agronômica e agricultura de precisão.',
    artifact: 'https://claude.ai/artifact/5jPHoTQS426ssXSMCehpg6',
    contato: {
      razaoSocial: 'FarmSense Consultoria Agronômica e Agricultura de Precisão Ltda',
      cnpj: '64.055.782/0001-49',
      site: 'farmsense.com.br',
      email: 'contato@farmsense.com.br',
      whatsapp: '(66) 99681-7145',
      endereco: SEDE,
      instagram: '@farmsense.oficial',
    },
    apelidos: ['farmsense', 'farmasense', 'farmsence'],
  },
};

// Empresas do grupo que ainda não têm design system próprio.
export const EMPRESAS_SEM_DS = {
  agro3f: {
    marca: 'Agro 3F Insumos Agrícolas',
    site: 'https://agro3f.com.br',
    atuacao: 'Distribuição de defensivos, fertilizantes e sementes.',
    apelidos: ['agro3f', 'agro3finsumos', 'agro3finsumosagricolas'],
    contato: {
      razaoSocial: 'Fiut e Ficagna Ltda',
      cnpj: '37.195.982/0001-24',
      site: 'agro3f.com.br',
      email: 'contato@agro3f.com.br',
      telefone: '(66) 3545-1804',
      endereco: SEDE,
      instagram: '@agro_3f',
    },
  },
  adisa: {
    marca: 'ADISA Genética e Melhoramento',
    site: 'https://adisa.agr.br',
    atuacao: 'Melhoramento genético agrícola, principalmente de milho.',
    apelidos: ['adisa', 'adisagenetica', 'adisageneticaemelhoramento'],
    contato: {
      razaoSocial: 'ADISA Genética e Melhoramento de Sementes Ltda',
      cnpj: '29.203.853/0001-02',
      site: 'adisa.agr.br',
      email: 'contato@adisa.agr.br',
      whatsapp: '(66) 99920-9087',
      endereco: 'Rodovia BR-163, km 720, Distrito de Primavera, Fazenda Alegria II, Zona Rural, Sorriso, MT, CEP 78899-500',
      instagram: '@adisa.genetica',
    },
  },
  matria: {
    marca: 'Mátria Fertilizantes',
    site: null,
    atuacao: 'Fertilizantes. Empresa em projeto: construção não iniciada, sem operação e sem site.',
    apelidos: ['matria', 'matriafertilizantes'],
    contato: {
      razaoSocial: 'Mátria Fertilizantes Ltda',
      nire: '51203152800',
      email: 'contato@matriafertiizantes.com.br',
      telefone: '(66) 3545-1804',
      endereco: SEDE,
    },
  },
  farmcast: {
    marca: 'FarmCast Brazil',
    site: 'https://farmcast.com.br',
    atuacao: null,
    apelidos: ['farmcast', 'farmcastbrazil'],
    contato: {
      site: 'farmcast.com.br',
      email: 'contato@farmcast.com.br',
      whatsapp: '(66) 99999-8847',
      endereco: SEDE,
    },
  },
  fa: { marca: 'FA Incorporadora', site: null, atuacao: 'Ramo imobiliário.', apelidos: ['faincorporadora', 'fa'] },
};

// Dados públicos de uma empresa a partir de um nome livre, ou null.
export function dadosDaEmpresa(nome) {
  const ds = procurar(DESIGN_SYSTEMS, nome);
  if (ds) {
    const { marca, site, atuacao, contato } = DESIGN_SYSTEMS[ds];
    return { marca, site, atuacao, designSystem: ds, contato };
  }
  const chave = procurar(EMPRESAS_SEM_DS, nome);
  if (!chave) return null;
  const { marca, site, atuacao, contato } = EMPRESAS_SEM_DS[chave];
  return { marca, site, atuacao, designSystem: '3fgroup', contato: contato ?? null };
}

export function normalizar(texto) {
  return String(texto)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

function procurar(cadastro, nome) {
  const alvo = normalizar(nome);
  if (!alvo) return null;
  for (const [slug, item] of Object.entries(cadastro)) {
    if (slug === alvo || item.apelidos.includes(alvo)) return slug;
  }
  // Aceita nomes compostos, como "ORVIX Agroquímica Ltda" ou "site da barygen".
  for (const [slug, item] of Object.entries(cadastro)) {
    if (item.apelidos.some((a) => a.length >= 4 && alvo.includes(a))) return slug;
  }
  return null;
}

// Devolve o slug do design system a partir de um nome livre ("Orvix",
// "barigen", "3F Group"...), ou null se não reconhecer.
export function resolverDesignSystem(nome) {
  return procurar(DESIGN_SYSTEMS, nome);
}

// Aplica a regra de escolha a uma lista de empresas citadas no pedido.
export function escolherDesignSystem(empresas = []) {
  const reconhecidas = [];
  const desconhecidas = [];
  for (const nome of empresas) {
    const ds = procurar(DESIGN_SYSTEMS, nome);
    if (ds) {
      reconhecidas.push({ nome, marca: DESIGN_SYSTEMS[ds].marca, designSystem: ds });
      continue;
    }
    const semDs = procurar(EMPRESAS_SEM_DS, nome);
    if (semDs) {
      reconhecidas.push({ nome, marca: EMPRESAS_SEM_DS[semDs].marca, designSystem: null });
    } else {
      desconhecidas.push(nome);
    }
  }

  const marcas = [...new Set(reconhecidas.map((r) => r.marca))];
  let designSystem = '3fgroup';
  let motivo;
  if (marcas.length === 0) {
    motivo = 'Nenhuma empresa identificada: o padrão é o 3F Group Design System.';
  } else if (marcas.length > 1) {
    motivo = `Mais de uma empresa (${marcas.join(', ')}): use o 3F Group Design System.`;
  } else if (reconhecidas[0].designSystem) {
    designSystem = reconhecidas[0].designSystem;
    motivo = `Uma única empresa (${marcas[0]}): use o design system dela.`;
  } else {
    motivo = `${marcas[0]} ainda não tem design system próprio: use o 3F Group Design System.`;
  }
  return { designSystem, motivo, reconhecidas, desconhecidas };
}
