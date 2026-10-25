const { TopBar, Tabs, SearchField, Chip, StatusPill, NeonDot, GlassCard, KpiTile, Sparkline, DataTable, BarMeter, ProgressRing, Button, Kicker, Divider, PatternLayer, Switch, EmptyState, Skeleton, Breadcrumb, Icon, Alert } = window.FarmSenseDesignSystem_c4c636;
const { useState } = React;

const TALHOES = [
  { t: 'Aurora', ha: 412, ndvi: '0,78', sc: '82,4', d: '+18,1', ok: true },
  { t: 'Chapada', ha: 228, ndvi: '0,71', sc: '74,9', d: '+9,4', ok: true },
  { t: 'Cerrado-Norte', ha: 580, ndvi: '0,66', sc: '69,2', d: '+2,1', ok: true },
  { t: 'Pampulha', ha: 250, ndvi: '0,58', sc: '66,8', d: '−0,6', ok: false },
];

function Painel() {
  const [aba, setAba] = useState('Sensoriamento');
  const [talhao, setTalhao] = useState('Aurora');
  const [busca, setBusca] = useState('');
  const [camadas, setCamadas] = useState({ ndvi: true, zonas: true, estacoes: false });
  const sel = TALHOES.find((x) => x.t === talhao) || TALHOES[0];
  const lista = TALHOES.filter((x) => x.t.toLowerCase().includes(busca.toLowerCase()));

  return (
    <div>
      <TopBar base="../.." items={['Talhões', 'Mapas', 'Relatórios', 'Equipe']} active="Mapas"
        actions={<><StatusPill status="live" surface="dark">Ao vivo</StatusPill><Button variant="ghost-dark" size="sm">Fazenda São Bento</Button></>} />

      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 'var(--s-5)', padding: 'var(--s-5) var(--s-6)' }}>
        <aside className="stack" style={{ gap: 'var(--s-4)' }}>
          <SearchField tone="dark" value={busca} placeholder="Buscar talhão…" onChange={(e) => setBusca(e.target.value)}
            trailing={<Chip tone="neon">{lista.length} talhões</Chip>} />
          {lista.length === 0 ? (
            <EmptyState surface="dark" title="Nenhum talhão encontrado" action={<Button variant="ghost-dark" size="sm" onClick={() => setBusca('')}>Limpar busca</Button>}>
              Ajuste o termo da busca ou cadastre um novo talhão na malha de amostragem.
            </EmptyState>
          ) : lista.map((x) => (
            <button key={x.t} type="button" onClick={() => setTalhao(x.t)}
              className="fs-hv-tint-dark fs-t-base fs-fx-ring-neon"
              style={{ textAlign: 'left', font: 'inherit', color: '#fff', cursor: 'pointer', padding: 'var(--s-4)', borderRadius: 'var(--r-md)',
                background: x.t === talhao ? 'rgba(51,255,194,.08)' : 'rgba(255,255,255,.04)',
                border: x.t === talhao ? '1px solid rgba(51,255,194,.35)' : '1px solid rgba(255,255,255,.08)' }}>
              <div className="row" style={{ justifyContent: 'space-between' }}>
                <span className="h4 t-100">{x.t}</span>
                <NeonDot color={x.ok ? 'verde' : 'mudo'} />
              </div>
              <div className="row" style={{ justifyContent: 'space-between', marginTop: 8 }}>
                <span className="body-sm t-55">{x.ha} ha</span>
                <span className="body-sm t-70 mono-num">NDVI {x.ndvi}</span>
              </div>
            </button>
          ))}
          <Divider spacing="var(--s-2)" />
          <Kicker>Camadas do mapa</Kicker>
          <Switch tone="dark" label="NDVI multitemporal" checked={camadas.ndvi} onChange={() => setCamadas({ ...camadas, ndvi: !camadas.ndvi })} />
          <Switch tone="dark" label="Zonas de manejo" checked={camadas.zonas} onChange={() => setCamadas({ ...camadas, zonas: !camadas.zonas })} />
          <Switch tone="dark" label="Estações climáticas" checked={camadas.estacoes} onChange={() => setCamadas({ ...camadas, estacoes: !camadas.estacoes })} />
        </aside>

        <main className="stack" style={{ gap: 'var(--s-5)' }}>
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <Breadcrumb tone="dark" items={[{ label: 'Fazendas', href: '#' }, { label: 'São Bento', href: '#' }, 'Talhão ' + sel.t]} />
            <span className="serif t-55" style={{ fontSize: 13 }}>atualizado às 14:22 · 12.05.2026</span>
          </div>
          <Tabs tone="dark" items={['Diagnóstico', 'Sensoriamento', 'Recomendação', 'Acompanhamento']} value={aba} onChange={setAba} />

          {aba === 'Sensoriamento' && (
            <>
              <div className="grid g-3" style={{ gap: 'var(--s-5)' }}>
                <GlassCard tone="dark" accent="ciano" style={{ gridColumn: 'span 2', minHeight: 300 }} pattern={camadas.ndvi ? 'fs-grid fs-grid--neon' : undefined}>
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    <StatusPill status="live" surface="dark">Ao vivo · NDVI</StatusPill>
                    <span className="serif t-55" style={{ fontSize: 12 }}>Talhão {sel.t} · {sel.ha} ha</span>
                  </div>
                  <div style={{ marginTop: 'var(--s-5)', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'var(--s-5)', alignItems: 'center' }}>
                    <div><Kicker>Vigor médio</Kicker><KpiTile tone="dark" value={sel.ndvi} unit="ndvi" delta="▲ + 0,06 nas últimas 24 h" deltaTone="neon" /></div>
                    <Sparkline points={[.60, .62, .61, .64, .66, .65, .69, .71, .70, .74, .76, Number(sel.ndvi.replace(',', '.'))]} height={150} />
                  </div>
                </GlassCard>
                <GlassCard tone="dark" accent="verde" style={{ minHeight: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <StatusPill status={camadas.estacoes ? 'ativo' : 'inativo'} surface="dark">{camadas.estacoes ? 'Estação ON' : 'Camada desligada'}</StatusPill>
                    <h4 className="h3 t-100" style={{ marginTop: 'var(--s-4)' }}>3 estações<br />climáticas ativas</h4>
                  </div>
                  <div className="stack" style={{ gap: 6 }}>
                    {[['Sorriso · MT', '26,4° · 62%'], ['Sinop · MT', '25,1° · 68%'], ['Vera · MT', '27,0° · 58%']].map(([a, b]) => (
                      <div className="row" key={a} style={{ justifyContent: 'space-between' }}><span className="body-sm t-70">{a}</span><span className="body-sm t-100 mono-num">{b}</span></div>
                    ))}
                  </div>
                </GlassCard>
              </div>
              <div className="grid g-3" style={{ gap: 'var(--s-5)' }}>
                <GlassCard tone="dark" style={{ gridColumn: 'span 2' }}>
                  <Kicker>Comparativo de talhões · sc/ha</Kicker>
                  <div style={{ marginTop: 'var(--s-4)' }}>
                    <DataTable tone="dark"
                      columns={[{ key: 't', label: 'Talhão' }, { key: 'ha', label: 'Ha', align: 'right' }, { key: 'ndvi', label: 'NDVI', align: 'right' }, { key: 'sc', label: 'sc/ha', align: 'right', strong: true }, { key: 'd', label: 'Δ', align: 'right' }]}
                      rows={TALHOES} />
                  </div>
                </GlassCard>
                <GlassCard tone="dark" style={{ display: 'grid', gap: 12, alignContent: 'start' }}>
                  <Kicker>Cobertura de amostragem</Kicker>
                  <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0' }}>
                    <ProgressRing value={86} size={120} color="var(--ciano-neon)" track="rgba(255,255,255,.12)" />
                  </div>
                  {TALHOES.map((x) => <BarMeter key={x.t} tone="dark" label={x.t} value={Number(x.sc.replace(',', '.'))} max={90} display={x.sc} fill={x.ok ? 'neon' : 'bege'} />)}
                </GlassCard>
              </div>
            </>
          )}

          {aba === 'Diagnóstico' && (
            <div className="grid g-3" style={{ gap: 'var(--s-5)' }}>
              <GlassCard tone="dark" style={{ gridColumn: 'span 2' }}>
                <Kicker>Fertilidade · talhão {sel.t}</Kicker>
                <div className="grid g-3" style={{ marginTop: 'var(--s-5)' }}>
                  <KpiTile tone="dark" label="pH" value="5,8" />
                  <KpiTile tone="dark" label="P (mg/dm³)" value="22" />
                  <KpiTile tone="dark" label="K (cmol)" value="0,18" />
                </div>
                <Divider spacing="var(--s-5)" />
                <p className="body-sm t-70" style={{ margin: 0 }}>Recomendação: correção de potássio em pré-plantio, KCl 60 % a 90 kg/ha aplicado em taxa variável conforme zoneamento.</p>
              </GlassCard>
              <GlassCard tone="dark"><Kicker>Amostragem</Kicker><KpiTile tone="dark" label="Pontos coletados" value="1 725" delta="grade de 2 ha" />
                <Divider spacing="var(--s-4)" /><Skeleton surface="dark" lines={3} /></GlassCard>
            </div>
          )}

          {aba === 'Recomendação' && (
            <div className="stack" style={{ gap: 'var(--s-4)' }}>
              <Alert surface="dark" tone="ok" title="Prescrição gerada">Mapa de taxa variável para {sel.t} exportado no formato do controlador da máquina.</Alert>
              <Alert surface="dark" tone="atencao" title="Janela de correção fechando">Restam 12 dias para a aplicação de potássio em pré-plantio.</Alert>
              <GlassCard tone="dark">
                <Kicker>Escopo aplicado</Kicker>
                <div className="row-tight" style={{ gap: 8, marginTop: 'var(--s-4)' }}>
                  {['Adubação variável', 'Manejo por zona', 'Defensivo por zona', 'KCl 60 %', '90 kg/ha'].map((x) => <Chip key={x} tone="dark">{x}</Chip>)}
                </div>
              </GlassCard>
            </div>
          )}

          {aba === 'Acompanhamento' && (
            <div className="grid g-2" style={{ gap: 'var(--s-5)' }}>
              {[['01 · Ago — Set / 26', 'Linha de base', 'Coleta georreferenciada, topografia fina e instalação das estações.', 100],
                ['02 · Set — Dez / 26', 'Plantio e estabelecimento', 'Mapas de população real vs. planejada e ajuste de adubação por zona.', 74],
                ['03 · Jan — Mai / 27', 'Ciclo principal', 'NDVI/NDRE multitemporal, alertas de praga e manejo por zona.', 28],
                ['04 · Jun — Jul / 27', 'Colheita e fechamento', 'Mapa de colheita, relatório de safra e plano para 27/28.', 0]].map(([k, t, d, v]) => (
                <GlassCard key={t} tone="dark" accent={v > 0 && v < 100 ? 'ciano' : undefined} className="fs-hv-lift-card">
                  <div className="row" style={{ justifyContent: 'space-between', alignItems: 'start' }}>
                    <div><Kicker>{k}</Kicker><h4 className="h3 t-100" style={{ marginTop: 'var(--s-3)' }}>{t}</h4>
                      <p className="body-sm t-70" style={{ margin: 'var(--s-3) 0 0', maxWidth: '38ch' }}>{d}</p></div>
                    <ProgressRing value={v} size={72} stroke={5} color="var(--ciano-neon)" track="rgba(255,255,255,.12)" />
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Painel />);
if (window.lucide) window.lucide.createIcons();
