const {Field,Input,Select,Switch,Range,Checkbox,Button,Upload,Alert,Card,Tabs,EmptyState,Skeleton,Spinner}=window.BarygenDesignSystem_a84d4b;

function Preferencias(){
  const [tab,setTab]=React.useState('Conta');
  const [not,setNot]=React.useState(true);
  const [sem,setSem]=React.useState(false);
  const [loading,setLoading]=React.useState(false);
  return <main className="content">
    <div>
      <h1 style={{fontSize:'var(--fs-h3)',fontWeight:800,textTransform:'uppercase',letterSpacing:'-.01em'}}>Preferências</h1>
      <p className="bry-lead" style={{marginTop:8}}>Dados da conta, avisos e documentos da fazenda.</p>
    </div>
    <Tabs tabs={['Conta','Avisos','Documentos']} value={tab} onChange={setTab}/>
    {tab==='Conta'&&<div className="panel" style={{display:'grid',gap:20,maxWidth:760}}>
      <div style={{display:'flex',gap:20,flexWrap:'wrap'}}>
        <Field label="Nome completo"><Input defaultValue="Nome Sobrenome"/></Field>
        <Field label="E-mail" required><Input defaultValue="nome@fazendaexemplo.com.br"/></Field>
      </div>
      <div style={{display:'flex',gap:20,flexWrap:'wrap'}}>
        <Field label="Telefone"><Input defaultValue="(66) 0000-0000"/></Field>
        <Field label="Estado"><Select options={['Mato Grosso','Goiás','Mato Grosso do Sul']}/></Field>
      </div>
      <div style={{display:'flex',gap:12}}>
        <Button variant="primary" loading={loading} onClick={()=>{setLoading(true);setTimeout(()=>setLoading(false),1600)}}>Salvar alterações</Button>
        <Button variant="ghost">Descartar</Button>
      </div>
    </div>}
    {tab==='Avisos'&&<div className="panel" style={{display:'grid',gap:22,maxWidth:760}}>
      <Alert tone="info" title="Avisos técnicos são enviados pelo consultor.">Alterações valem para todos os talhões da fazenda.</Alert>
      <Switch label="Notificações de recomendação técnica" checked={not} onChange={e=>setNot(e.target.checked)}/>
      <Switch label="Resumo semanal da lavoura" checked={sem} onChange={e=>setSem(e.target.checked)}/>
      <Switch label="Convites para eventos e dias de campo" disabled/>
      <Range label="Antecedência do aviso de colheita (dias)" min={3} max={21} defaultValue={10}/>
      <div className="bry-stack" style={{gap:10}}>
        <Checkbox label="Receber por e-mail" defaultChecked/>
        <Checkbox label="Receber por WhatsApp" defaultChecked/>
        <Checkbox label="Receber por SMS"/>
      </div>
    </div>}
    {tab==='Documentos'&&<div className="kit-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,alignItems:'start'}}>
      <div className="panel"><div className="h">Enviar documento</div>
        <Upload formats="PDF, JPG ou PNG · máx. 10 MB"/>
        <p className="bry-micro" style={{marginTop:12}}>Análise de solo, laudo de sanidade ou nota fiscal de semente.</p>
      </div>
      <div className="panel"><div className="h">Enviados</div>
        <EmptyState title="Nenhum documento enviado" action={<Button variant="outline" size="sm">Enviar o primeiro</Button>}>
          Documentos enviados ficam disponíveis para o consultor técnico da sua região.</EmptyState>
      </div>
      <Card eyebrow="Carregando" title="Exemplo de estado de espera" style={{gridColumn:'1 / -1'}}>
        <div style={{display:'flex',gap:28,alignItems:'center',marginTop:8}}><Skeleton/><Spinner/></div>
      </Card>
    </div>}
  </main>;
}
Object.assign(window,{Preferencias});
