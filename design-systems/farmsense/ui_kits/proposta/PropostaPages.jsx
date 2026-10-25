const { Logo, Kicker, SectionHeader, Chip, Divider, KpiTile, DataTable, PatternLayer, QuoteBlock, Tile, StatusPill, Button, ProgressRing } = window.FarmSenseDesignSystem_c4c636;
const B = '../..';
const N = 'FAZ-000-0000';

function Pe({ secao, pagina }) {
  return (
    <div className="pe">
      <span className="label t-55">Proposta · {N}</span>
      <span className="label t-55">{secao}</span>
      <span className="serif t-70" style={{ fontSize: 14 }}>{pagina}</span>
    </div>
  );
}

function Capa() {
  return (
    <div className="folha" data-screen-label="01 Capa" style={{ background: 'var(--verde-sombra)', color: '#fff' }}>
      <PatternLayer pattern="curvas-neon" corner="tr" />
      <PatternLayer pattern="grade" corner={null} />
      <div className="miolo" style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <Logo base={B} variant="branca" width={240} />
          <Chip tone="neon" dot>Proposta nº {N.replace('FAZ-', 'FAZ · ').replace('-', ' / ')}</Chip>
        </div>
        <div>
          <Kicker tone="neon">Programa integrado de agricultura de precisão · Safra 0000/00</Kicker>
          <h1 className="display fs-in-up" style={{ marginTop: 'var(--s-5)', fontSize: 96 }}>
            Exemplo<span style={{ color: 'var(--ciano-neon)' }}>.</span>
          </h1>
          <p className="body-lg t-70" style={{ maxWidth: '46ch', marginTop: 'var(--s-5)' }}>
            Diagnóstico de solo georreferenciado, sensoriamento ao longo do ciclo, consultoria agronômica embarcada e planejamento de manejo por zona.
          </p>
        </div>
        <div className="grid g-4" style={{ gap: 'var(--s-5)' }}>
          {[['Cliente', 'Fazenda Exemplo'], ['Área', '0.000 ha'], ['Culturas', 'Soja · Algodão'], ['Investimento', 'R$ 00.000,00']].map(([k, v]) => (
            <div key={k}><span className="label t-55">{k}</span><div className="h4 t-100" style={{ marginTop: 6 }}>{v}</div></div>
          ))}
        </div>
      </div>
      <div className="pe" style={{ borderColor: 'rgba(255,255,255,.14)' }}>
        <span className="label t-55">FarmSense Agro · Cuiabá, MT</span>
        <span className="serif t-55" style={{ fontSize: 13 }}>válida por 30 dias</span>
      </div>
    </div>
  );
}

function Carta() {
  return (
    <div className="folha" data-screen-label="02 Carta">
      <div className="miolo">
        <SectionHeader>Carta de apresentação · Cuiabá, MT</SectionHeader>
        <h2 className="h1" style={{ maxWidth: '20ch' }}>
          A precisão começa antes da máquina entrar no talhão <span className="serif">— ela começa em conhecer</span> profundamente o solo, o ciclo e a operação que sustenta a safra.
        </h2>
        <Divider spacing="var(--s-7)" />
        <div className="grid g-2" style={{ gap: 'var(--s-7)' }}>
          <p className="body t-70" style={{ margin: 0 }}>
            Esta proposta apresenta o programa que a FarmSense recomenda para a Fazenda Exemplo na safra 0000/00. O escopo combina diagnóstico de solo georreferenciado, sensoriamento ao longo do ciclo, consultoria agronômica embarcada e planejamento de manejo por zona. Trabalhamos lado a lado com a equipe da fazenda — não como fornecedor, mas como time de campo.
          </p>
          <p className="body t-70" style={{ margin: 0 }}>
            O objetivo é entregar uma safra mais previsível, com decisões tomadas a partir de dado real. O programa foi dimensionado a partir dos 0.000 hectares produtivos, do histórico de manejo das últimas três safras e das particularidades da transição soja–algodão no calendário do Mato Grosso. Estamos à disposição para ajustar escopo, cronograma e investimento ao que melhor servir à fazenda.
          </p>
        </div>
        <div style={{ marginTop: 'var(--s-9)' }}>
          <div style={{ width: 220, height: 1, background: 'rgba(0,65,65,.3)' }} />
          <div className="h4 t-100" style={{ marginTop: 10 }}>Nome Sobrenome</div>
          <span className="serif t-70" style={{ fontSize: 14 }}>Diretor · FarmSense Agro</span>
        </div>
      </div>
      <Pe secao="Apresentação" pagina="ii" />
    </div>
  );
}

function Sumario({ onIr }) {
  const linhas = [['i', 'Apresentação', 'Carta da diretoria e contexto da safra', '02', 1],
    ['01', 'A propriedade', 'Perfil da Fazenda Exemplo e premissas', '04', 2],
    ['02', 'Diagnóstico', 'Solo, talhão e leitura do território', '05', 2],
    ['03', 'Programa em fases', 'Quatro etapas do trabalho de campo', '06', 3],
    ['04', 'Cronograma', 'Linha do tempo · agosto a julho', '07', 3],
    ['05', 'Investimento', 'Desdobramento dos serviços contratados', '08', 4],
    ['06', 'Condições comerciais', 'Pagamento, vigência e propriedade intelectual', '09', 4],
    ['07', 'Equipe', 'Quem está dedicado a essa safra', '10', 5],
    ['08', 'Próximos passos', 'Etapas até a primeira ida a campo', '11', 5],
    ['09', 'Aceite', 'Assinatura e formalização', '12', 6]];
  return (
    <div className="folha" data-screen-label="03 Sumário">
      <div className="miolo">
        <SectionHeader>Sumário</SectionHeader>
        <h2 className="h1" style={{ maxWidth: '16ch' }}>Sumário. <span className="serif">Nove capítulos</span> · Safra 0000/00</h2>
        <div style={{ marginTop: 'var(--s-8)' }}>
          {linhas.map(([n, t, d, p, ir]) => (
            <button key={n + t} type="button" onClick={() => onIr && onIr(ir)}
              className="fs-hv-tint fs-t-base fs-fx-ring"
              style={{ width: '100%', display: 'grid', gridTemplateColumns: '52px 1fr auto', gap: 18, alignItems: 'baseline', padding: '16px 8px', border: 0, borderBottom: '1px solid rgba(0,65,65,.08)', background: 'transparent', font: 'inherit', textAlign: 'left', cursor: 'pointer', color: 'inherit' }}>
              <span className="serif t-55" style={{ fontSize: 16 }}>{n}</span>
              <span><span className="h4 t-100">{t}</span><span className="body-sm t-55" style={{ marginLeft: 12 }}>{d}</span></span>
              <span className="mono-num t-55 body-sm">{p}</span>
            </button>
          ))}
        </div>
      </div>
      <Pe secao="Sumário" pagina="iii" />
    </div>
  );
}

function Propriedade() {
  return (
    <div className="folha" data-screen-label="04 A propriedade">
      <div className="miolo">
        <SectionHeader num="01">A propriedade · Premissas do programa</SectionHeader>
        <h2 className="h1" style={{ maxWidth: '18ch' }}>A propriedade, <span className="serif">antes do trator.</span></h2>
        <p className="body-lg t-70" style={{ maxWidth: '62ch', marginTop: 'var(--s-4)' }}>
          Conhecer o terreno em detalhe é o que separa um programa que reage de um programa que antecipa. A Fazenda Exemplo opera 0.000 ha produtivos em rotação soja–algodão, com janela de plantio iniciada em setembro e fechamento em fevereiro.
        </p>
        <div className="grid g-3" style={{ marginTop: 'var(--s-7)', gap: 'var(--s-5)' }}>
          {[['Variabilidade reconhecida.', 'Os mapas de produtividade das três últimas safras mostram diferenças superiores a 18 % entre zonas dentro do mesmo talhão. Esse delta justifica investimento em manejo por zona.'],
            ['Decisão por dado.', 'Toda recomendação é entregue com a evidência de campo que a sustenta — não há receita pronta sem leitura prévia.'],
            ['Time único.', 'Agrônomo da fazenda e agrônomo FarmSense atuam como um único time, com reuniões semanais e visita técnica quinzenal no pico.']].map(([t, d], i) => (
            <Tile key={t} className="fs-hv-lift-card"><span className="serif t-55">0{i + 1}</span><div className="h4 t-100" style={{ marginTop: 8 }}>{t}</div><p className="body-sm t-70" style={{ margin: '10px 0 0' }}>{d}</p></Tile>
          ))}
        </div>
        <Divider spacing="var(--s-7)" />
        <div className="grid g-4">
          {[['0.000', 'ha', 'Área produtiva', 'Distribuída em 00 talhões mapeados.'],
            ['Soja', '· Algodão', 'Ciclo principal', 'Soja precoce + algodão de segunda.'],
            ['00', '', 'Talhões', 'Variando de 00 a 000 ha.'],
            ['3', 'safras', 'Histórico', 'Base de dados anterior carregada.']].map(([v, u, l, d]) => (
            <div key={l}><KpiTile label={l} value={v} unit={u || undefined} /><p className="body-sm t-55" style={{ margin: '8px 0 0' }}>{d}</p></div>
          ))}
        </div>
      </div>
      <Pe secao="A propriedade" pagina="04" />
    </div>
  );
}

function Fases() {
  const fases = [['01', 'Ago — Set', 'Linha de base.', 'Coleta georreferenciada de solo, levantamento topográfico fino e instalação das estações climáticas. Definição da grade de zonas de manejo para o ciclo.', ['Amostragem · 2 ha', 'Topografia 1:5.000', '6 estações ativas', 'Mapa de zonas v1']],
    ['02', 'Set — Dez', 'Plantio e estabelecimento.', 'Acompanhamento semanal das primeiras semanas, mapas de população real vs. planejada e ajuste fino de adubação por zona durante a janela de plantio da soja.', ['Mapa de população', 'Adubação variável', 'Visita semanal', 'Boletim quinzenal']],
    ['03', 'Jan — Mai', 'Ciclo principal.', 'Sensoriamento NDVI/NDRE multitemporal, alertas de pragas com base nas estações, manejo de defensivos por zona e gestão da janela soja/algodão.', ['NDVI · 3 em 3 dias', 'Alerta de praga', 'Manejo por zona', 'Curva de produtividade']],
    ['04', 'Jun — Jul', 'Colheita e fechamento.', 'Mapa de colheita por talhão, fechamento técnico da safra, leitura comparativa com o histórico e recomendações para o próximo ciclo de manejo.', ['Mapa de colheita', 'Relatório de safra', 'Reunião de fechamento', 'Plano para a próxima safra']]];
  return (
    <div className="folha" data-screen-label="05 Programa em fases">
      <div className="miolo">
        <SectionHeader num="03">Programa em fases · Estrutura do trabalho</SectionHeader>
        <h2 className="h1" style={{ maxWidth: '18ch' }}>Quatro fases, <span className="serif">uma safra.</span></h2>
        <p className="body-lg t-70" style={{ maxWidth: '60ch', marginTop: 'var(--s-4)' }}>O programa avança em fases sobrepostas. A entrega de cada uma alimenta a decisão da seguinte.</p>
        <div className="stack" style={{ marginTop: 'var(--s-7)', gap: 'var(--s-4)' }}>
          {fases.map(([n, per, t, d, tags]) => (
            <div key={n} className="fs-hv-lift-card fs-t-base" style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 'var(--s-6)', padding: 'var(--s-5)', borderRadius: 'var(--r-md)', background: 'var(--bege-perola)' }}>
              <div><span className="serif t-40" style={{ fontSize: 44, lineHeight: 1 }}>{n}</span><div className="label t-55" style={{ marginTop: 8 }}>{per}</div></div>
              <div>
                <div className="h3 t-100">{t}</div>
                <p className="body-sm t-70" style={{ margin: '8px 0 12px' }}>{d}</p>
                <div className="row-tight" style={{ gap: 6 }}>{tags.map((x) => <Chip key={x}>{x}</Chip>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pe secao="Programa em fases" pagina="06" />
    </div>
  );
}

function Investimento() {
  const itens = [['01', 'Amostragem georreferenciada de solo', 'Grade de 2 ha · 0.000 pontos', '0.000', 'R$ 00,00', 'R$ 00.000,00'],
    ['02', 'Estações climáticas + monitoramento', '6 unidades, 11 meses ativas', '6', 'R$ 0.000,00', 'R$ 00.000,00'],
    ['03', 'Sensoriamento espectral multitemporal', 'NDVI/NDRE · revisita 3 dias', '0.000 ha', 'R$ 00,00', 'R$ 00.000,00'],
    ['04', 'Consultoria agronômica integral', 'Visita quinzenal + reuniões semanais', '11 meses', 'R$ 0.000,00', 'R$ 00.000,00'],
    ['05', 'Plataforma de campo + relatórios', 'Acesso · 4 usuários · 12 meses', '12 meses', 'R$ 0.000,00', 'R$ 00.000,00']];
  return (
    <div className="folha" data-screen-label="06 Investimento">
      <div className="miolo">
        <SectionHeader num="05">Investimento · Programa Safra 0000/00 · 0.000 ha</SectionHeader>
        <h2 className="h1" style={{ maxWidth: '18ch' }}>O número, <span className="serif">e o que cabe nele.</span></h2>
        <div style={{ marginTop: 'var(--s-6)', position: 'relative', overflow: 'hidden', borderRadius: 'var(--r-lg)', background: 'var(--verde-sombra)', color: '#fff', padding: 'var(--s-7)' }}>
          <PatternLayer pattern="alvo" corner="tr" />
          <div className="row" style={{ position: 'relative', justifyContent: 'space-between', alignItems: 'end' }}>
            <div>
              <span className="label t-55">Total · programa completo</span>
              <div className="display t-100" style={{ marginTop: 10, fontSize: 68 }}>R$ 000.000<span style={{ fontSize: '.5em', opacity: .6 }}>,00</span></div>
              <p className="body-sm t-70" style={{ margin: '14px 0 0', maxWidth: '46ch' }}>Equivalente a <strong>R$ 00,00 / hectare</strong> sobre os 0.000 ha mapeados, considerando contrato anual integrado. Pagamento conforme negociação (§06).</p>
            </div>
            <ProgressRing value={100} size={120} color="var(--ciano-neon)" track="rgba(255,255,255,.12)" label="0.000 ha" />
          </div>
        </div>
        <div style={{ marginTop: 'var(--s-6)' }}>
          <DataTable
            columns={[{ key: 'n', label: '#' }, { key: 's', label: 'Serviço contratado' }, { key: 'q', label: 'Qtd', align: 'right' }, { key: 'u', label: 'Unitário', align: 'right' }, { key: 't', label: 'Total', align: 'right', strong: true }]}
            rows={itens.map(([n, s, sub, q, u, t]) => ({ n: <span className="serif t-55">{n}</span>, s: <span><span className="body-sm t-100" style={{ fontWeight: 500 }}>{s}</span><br /><span className="body-sm t-55">{sub}</span></span>, q, u, t }))} />
        </div>
      </div>
      <Pe secao="Investimento" pagina="08" />
    </div>
  );
}

function Aceite() {
  return (
    <div className="folha" data-screen-label="07 Aceite">
      <div className="miolo">
        <SectionHeader num="09">Aceite · Formalização da proposta</SectionHeader>
        <h2 className="h1" style={{ maxWidth: '16ch' }}>Aceite.</h2>
        <p className="body-lg t-70" style={{ maxWidth: '62ch', marginTop: 'var(--s-4)' }}>
          A assinatura abaixo formaliza a contratação do programa descrito nesta proposta, conforme escopo (§03), cronograma (§04), investimento (§05) e condições comerciais (§06).
        </p>
        <Tile style={{ marginTop: 'var(--s-6)' }}>
          <p className="body t-85" style={{ margin: 0 }}>
            Declaramos ter lido e aceito integralmente os termos desta proposta, identificada sob o número <strong>{N}</strong>, emitida pela FarmSense Agro em favor da Fazenda Exemplo para a safra 0000/00. Esta proposta, uma vez assinada, passa a operar como instrumento contratual entre as partes e suplanta qualquer entendimento prévio sobre o escopo aqui descrito.
          </p>
        </Tile>
        <div className="grid g-2" style={{ marginTop: 'var(--s-8)', gap: 'var(--s-8)' }}>
          {[['Pela Fazenda Exemplo', 'Nome do responsável', 'Cargo · CPF / CNPJ'], ['Pela FarmSense Agro', 'Nome Sobrenome', 'Diretor · CREA 000000/MT']].map(([t, n, c]) => (
            <div key={t}>
              <span className="label t-55">{t}</span>
              <div style={{ height: 56 }} />
              <div style={{ height: 1, background: 'rgba(0,65,65,.3)' }} />
              <div className="h4 t-100" style={{ marginTop: 10 }}>{n}</div>
              <span className="serif t-70" style={{ fontSize: 13 }}>{c}</span>
            </div>
          ))}
        </div>
        <div className="row" style={{ marginTop: 'var(--s-8)', gap: 'var(--s-5)' }}>
          <div style={{ flex: 1 }}><span className="label t-55">Local</span><div style={{ height: 1, background: 'rgba(0,65,65,.25)', marginTop: 30 }} /></div>
          <div style={{ flex: 1 }}><span className="label t-55">Data</span><div style={{ height: 1, background: 'rgba(0,65,65,.25)', marginTop: 30 }} /></div>
        </div>
      </div>
      <Pe secao="Aceite" pagina="12" />
    </div>
  );
}

Object.assign(window, { Capa, Carta, Sumario, Propriedade, Fases, Investimento, Aceite });
