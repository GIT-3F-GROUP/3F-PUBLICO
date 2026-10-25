const {Badge,Button,Tabs,Table,KPI,Breadcrumb,Icon,Alert}=window.BarygenDesignSystem_a84d4b;

function Hibrido({go}){
  const [tab,setTab]=React.useState('Características');
  return <main>
    <section className="bry-sec-dark-4" style={{padding:'var(--sec-y-sm) 0 var(--sec-y)'}}>
      <div className="site-wrap">
        <div style={{color:'var(--text-on-dark-muted)'}}><Breadcrumb items={['Início','Híbridos','BG307 Max']} onNavigate={()=>go('Híbridos')}/></div>
        <div className="kit-grid" style={{display:'grid',gridTemplateColumns:'1fr .9fr',gap:48,alignItems:'center',marginTop:28}}>
          <div>
            <Badge tone="brand">Lançamento</Badge>
            <h1 style={{marginTop:16,fontSize:'var(--fs-display)',fontWeight:800,lineHeight:1,letterSpacing:'-.02em',textTransform:'uppercase'}}>BG307 <span style={{fontWeight:600,color:'var(--brand-amarelo-principal)'}}>Max</span></h1>
            <p style={{marginTop:20,fontSize:'var(--fs-body-lg)',color:'var(--text-on-dark-muted)',maxWidth:'46ch',lineHeight:1.6}}>Híbrido precoce de alto investimento para MT, GO e MS. Espiga uniforme, sanidade foliar consistente e stand estável em alta densidade.</p>
            <div style={{display:'flex',gap:12,marginTop:28}}>
              <Button variant="primary" iconLeft={<Icon name="baixar" size={16} strokeWidth={2}/>}>Baixar ficha técnica</Button>
              <Button variant="on-dark" onClick={()=>go('Onde comprar')}>Ver campos demonstrativos</Button>
            </div>
          </div>
          <window.Photo label="Foto oficial · espiga BG307 Max" height={300}/>
        </div>
      </div>
    </section>

    <section className="bry-sec-light-3" style={{padding:'var(--sec-y-sm) 0 var(--sec-y)'}}>
      <div className="site-wrap">
        <Tabs tabs={['Características','Posicionamento','Resultados','Downloads']} value={tab} onChange={setTab}/>
        <div style={{marginTop:32}}>
          {tab==='Características'&&<div style={{display:'flex',gap:16,flexWrap:'wrap'}}>
            <KPI label="Ciclo" value="Precoce"/><KPI label="Finalidade" value="Grãos"/>
            <KPI label="Altura de planta" value="2,45 m"/><KPI label="Inserção de espiga" value="1,15 m"/>
            <KPI label="População" value="55 a 68 mil/ha"/><KPI label="Tolerância" value="Alta" trend="Cercospora e mancha branca"/>
          </div>}
          {tab==='Posicionamento'&&<Table columns={[{key:'a',label:'Ambiente'},{key:'b',label:'Época'},{key:'c',label:'População'},{key:'d',label:'Espaçamento'}]}
            rows={[{a:'Cerrado alto investimento',b:'Safra verão',c:'62 a 68 mil/ha',d:'0,45 a 0,50 m'},
                   {a:'Cerrado médio investimento',b:'Safra verão',c:'55 a 62 mil/ha',d:'0,50 m'},
                   {a:'Segunda safra',b:'Safrinha',c:'52 a 58 mil/ha',d:'0,50 m'},
                   {a:'Irrigado',b:'Inverno',c:'68 a 72 mil/ha',d:'0,45 m'}]}/>}
          {tab==='Resultados'&&<div>
            <Alert tone="info" title="Dados de campo demonstrativo.">Médias de 47 campos acompanhados na safra 25/26, com testemunha comercial na mesma área.</Alert>
            <div style={{display:'flex',gap:16,marginTop:20,flexWrap:'wrap'}}>
              <KPI label="Produtividade média" value="218 sc/ha" trend="12% vs. testemunha" direction="up"/>
              <KPI label="Melhor resultado" value="264 sc/ha" trend="Sorriso · MT"/>
              <KPI label="Campos avaliados" value="47"/>
            </div></div>}
          {tab==='Downloads'&&<div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            {['Ficha técnica BG307 Max','Posicionamento safra 26/27','Laudo de sanidade','Catálogo completo'].map(d=>
              <Button key={d} variant="outline" iconLeft={<Icon name="baixar" size={16} strokeWidth={2}/>}>{d}</Button>)}
          </div>}
        </div>
      </div>
    </section>
  </main>;
}
Object.assign(window,{Hibrido});
