const {Table,Badge,Button,Steps,Field,Select,InputGroup,Input,QtyStepper,Modal,Toast,Pagination,Icon,ButtonGroup,KPI}=window.BarygenDesignSystem_a84d4b;

function Pedidos(){
  const [novo,setNovo]=React.useState(false);
  const [ok,setOk]=React.useState(false);
  const [qtd,setQtd]=React.useState(120);
  const [periodo,setPeriodo]=React.useState('safra');
  const [page,setPage]=React.useState(1);
  const pedidos=[['#4821','BG307 Max','240 sc','12/08/2026','success','Entregue'],
    ['#4830','BG307 Max','120 sc','18/08/2026','info','Em separação'],
    ['#4844','BG307 Max','60 sc','20/08/2026','warning','Aguardando pagamento'],
    ['#4802','BG307 Max','80 sc','02/07/2026','neutral','Cancelado']];
  return <main className="content">
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:16,flexWrap:'wrap'}}>
      <div>
        <h1 style={{fontSize:'var(--fs-h3)',fontWeight:800,textTransform:'uppercase',letterSpacing:'-.01em'}}>Pedidos</h1>
        <p className="bry-lead" style={{marginTop:8}}>Sementes reservadas para a safra 26/27.</p>
      </div>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <ButtonGroup value={periodo} onChange={setPeriodo} options={[{value:'mes',label:'Mês'},{value:'safra',label:'Safra'},{value:'tudo',label:'Tudo'}]}/>
        <Button variant="primary" onClick={()=>setNovo(true)} iconLeft={<Icon name="confirmar" size={16} strokeWidth={2}/>}>Novo pedido</Button>
      </div>
    </div>
    <div style={{display:'flex',gap:16,flexWrap:'wrap'}}>
      <KPI label="Sacas reservadas" value="500 sc"/>
      <KPI label="Pedidos ativos" value="3"/>
      <KPI label="Próxima entrega" value="26/08" trend="Talhão 07"/>
    </div>
    <div className="panel">
      <div className="h">Histórico</div>
      <Table columns={[{key:'a',label:'Pedido'},{key:'b',label:'Híbrido'},{key:'c',label:'Quantidade'},{key:'d',label:'Data'},{key:'e',label:'Status'}]}
        rows={pedidos.map(p=>({a:<b>{p[0]}</b>,b:p[1],c:p[2],d:p[3],e:<Badge tone={p[4]} dot>{p[5]}</Badge>}))}/>
      <div style={{display:'flex',justifyContent:'flex-end',marginTop:20}}><Pagination page={page} total={3} onChange={setPage}/></div>
    </div>
    {novo&&<Modal title="Novo pedido" onClose={()=>setNovo(false)}
      actions={<><Button variant="ghost" onClick={()=>setNovo(false)}>Cancelar</Button>
        <Button variant="primary" onClick={()=>{setNovo(false);setOk(true)}}>Reservar sementes</Button></>}>
      <div style={{display:'grid',gap:18,marginTop:8}}>
        <Steps steps={['Híbrido','Quantidade','Confirmação']} current={1}/>
        <Field label="Híbrido"><Select options={['BG307 Max']}/></Field>
        <div style={{display:'flex',gap:16,alignItems:'flex-end'}}>
          <Field label="Sacas"><InputGroup addon="sc"><Input value={qtd} onChange={e=>setQtd(e.target.value)}/></InputGroup></Field>
          <div><div className="h" style={{marginBottom:6}}>Ajuste rápido</div><QtyStepper value={Number(qtd)||0} onChange={setQtd} step={20}/></div>
        </div>
        <Field label="Talhão de destino"><Select options={['Talhão 04 · Fazenda Exemplo','Talhão 07 · Fazenda Exemplo','Talhão 11 · Fazenda Exemplo 2']}/></Field>
      </div>
    </Modal>}
    {ok&&<div style={{position:'fixed',bottom:28,left:'50%',transform:'translateX(-50%)',zIndex:60}}>
      <Toast onClose={()=>setOk(false)}>Pedido registrado. O consultor confirmará a entrega.</Toast></div>}
  </main>;
}
Object.assign(window,{Pedidos});
