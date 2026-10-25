const {KPI,Table,Badge,Button,Alert,Progress,Tabs,Chip,Icon,Accordion,AvatarGroup,Tooltip}=window.BarygenDesignSystem_a84d4b;

function VisaoGeral({page,setPage}){
  const [tab,setTab]=React.useState('Todos');
  const campos=[['Talhão 04 · Fazenda Exemplo','BG307 Max','62 mil/ha','V8','success','Em desenvolvimento'],
    ['Talhão 07 · Fazenda Exemplo','BG307 Max','56 mil/ha','R3','success','Em desenvolvimento'],
    ['Talhão 11 · Fazenda Exemplo 2','BG307 Max','65 mil/ha','R6','neutral','Pronto para colheita'],
    ['Talhão 02 · Fazenda Exemplo 2','BG307 Max','58 mil/ha','V4','warning','Atenção sanitária']];
  return <main className="content">
    <div>
      <h1 style={{fontSize:'var(--fs-h3)',fontWeight:800,textTransform:'uppercase',letterSpacing:'-.01em'}}>{page}</h1>
      <p className="bry-lead" style={{marginTop:8}}>Acompanhamento dos talhões cadastrados na safra 26/27.</p>
    </div>
    <Alert tone="warning" title="Atenção sanitária no Talhão 02.">Consultor técnico registrou mancha branca em nível de controle. Recomendação enviada em 18/08.</Alert>
    <div style={{display:'flex',gap:16,flexWrap:'wrap'}}>
      <KPI label="Área acompanhada" value="1.240 ha" trend="120 ha vs. safra anterior" direction="up"/>
      <KPI label="Produtividade projetada" value="214 sc/ha" trend="8% vs. safra anterior" direction="up"/>
      <KPI label="Talhões ativos" value="12"/>
      <KPI label="Perda de stand" value="1,4%" trend="0,3 p.p." direction="down"/>
    </div>
    <div className="panel">
      <div className="h">Talhões</div>
      <Tabs tabs={['Todos','BG307 Max']} value={tab} onChange={setTab}/>
      <div style={{marginTop:20}}>
        <Table columns={[{key:'a',label:'Talhão'},{key:'b',label:'Híbrido'},{key:'c',label:'População'},{key:'d',label:'Estádio'},{key:'e',label:'Status'}]}
          rows={campos.filter(c=>tab==='Todos'||c[1]===tab).map(c=>({a:<b>{c[0]}</b>,b:c[1],c:c[2],d:c[3],e:<Badge tone={c[4]} dot>{c[5]}</Badge>}))}/>
      </div>
    </div>
    <div className="kit-grid" style={{display:'grid',gridTemplateColumns:'1.2fr .8fr',gap:24}}>
      <div className="panel">
        <div className="h">Cronograma da safra</div>
        <div className="bry-stack" style={{gap:18}}>
          {[['Plantio concluído',100],['Aplicação V8',100],['Aplicação R1',64],['Colheita',12]].map(([l,v])=>
            <div key={l}><div style={{display:'flex',justifyContent:'space-between',fontSize:13,fontWeight:700,marginBottom:6}}><span>{l}</span><span className="bry-micro">{v}%</span></div>
            <Progress value={v}/></div>)}
        </div>
      </div>
      <div className="panel">
        <div className="h">Equipe técnica da região</div>
        <AvatarGroup people={[{initials:'NS'},{initials:'NZ'},{initials:'FF'},{initials:'AL'}]}/>
        <p style={{fontSize:13,color:'var(--text-muted)',marginTop:14,lineHeight:1.6}}>Consultor responsável: Nome Sobrenome · Norte do Mato Grosso.</p>
        <Button variant="outline" size="sm" style={{marginTop:16}} iconLeft={<Icon name="telefone" size={16} strokeWidth={2}/>}>Falar com o consultor</Button>
      </div>
    </div>
    <div className="panel">
      <div className="h">Recomendações técnicas</div>
      <Accordion items={[
        {q:'Talhão 02 · mancha branca em nível de controle',a:'Aplicar fungicida triazol + estrobilurina em até cinco dias, com volume de calda de 150 l/ha. Reavaliar em 14 dias.',open:true},
        {q:'Talhão 11 · janela de colheita',a:'Umidade de grão estimada em 18%. Programar colheita entre 26/08 e 02/09.'},
        {q:'Talhão 04 · adubação de cobertura',a:'Aplicar 120 kg/ha de N em V8, conforme análise de solo de 12/07.'}]}/>
    </div>
  </main>;
}
Object.assign(window,{VisaoGeral});
