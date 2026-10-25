const {SearchBox,Select,Field,Chip,Table,Badge,Button,Pagination,EmptyState,Icon,PillTabs}=window.BarygenDesignSystem_a84d4b;

function Campos({mode='campos'}){
  const [busca,setBusca]=React.useState('');
  const [uf,setUf]=React.useState('Mato Grosso');
  const [page,setPage]=React.useState(1);
  const base=mode==='eventos'
    ? [['1º VIP Tour BARYGEN','Sorriso · MT','12/05/2026','Confirmado','success'],['Norte Show','Sinop · MT','24 a 28/03/2026','Confirmado','success'],['Dia de Campo BG307 Max','Lucas do Rio Verde · MT','03/02/2026','Últimas vagas','warning'],['Showtec','Maracaju · MS','14/01/2026','Em análise','info']]
    : [['Fazenda Exemplo 1','Sorriso · MT','BG307 Max','Aberto','success'],['Fazenda Exemplo 2','Sinop · MT','BG307 Max','Aberto','success'],['Fazenda Exemplo 3','Nova Mutum · MT','BG307 Max','Colhido','neutral'],['Fazenda Exemplo 4','Rio Verde · GO','BG307 Max','Aberto','success'],['Fazenda Exemplo 5','Maracaju · MS','BG307 Max','Colhido','neutral']];
  const rows=base.filter(r=>r[0].toLowerCase().includes(busca.toLowerCase()));
  return <main className="bry-sec-light-1" style={{padding:'var(--sec-y-sm) 0 var(--sec-y)',minHeight:'70vh'}}>
    <div className="site-wrap">
      <window.SectionHead num={mode==='eventos'?'Agenda':'Campos'} title={mode==='eventos'?<>Onde a BARYGEN <span style={{fontWeight:600}}>vai estar.</span></>:<>Campos <span style={{fontWeight:600}}>demonstrativos.</span></>}
        desc={mode==='eventos'?'Feiras, dias de campo e tours técnicos da safra 26/27.':'Veja a espiga de perto. Todos os campos são acompanhados por um consultor técnico da BARYGEN.'}/>
      <div style={{display:'flex',gap:16,alignItems:'flex-end',flexWrap:'wrap',marginBottom:20}}>
        <SearchBox placeholder="Buscar fazenda, cidade, híbrido..." value={busca} onChange={e=>setBusca(e.target.value)}/>
        <Field label="Estado" style={{maxWidth:220}}><Select value={uf} onChange={e=>setUf(e.target.value)} options={['Mato Grosso','Goiás','Mato Grosso do Sul','Pará','Minas Gerais']}/></Field>
        <PillTabs tabs={['Grãos','Silagem','Ambos']} value="Grãos"/>
        <Button variant="outline" iconLeft={<Icon name="filtrar" size={16} strokeWidth={2}/>}>Mais filtros</Button>
      </div>
      {rows.length>0
        ? <><Table columns={mode==='eventos'
            ?[{key:'a',label:'Evento'},{key:'b',label:'Local'},{key:'c',label:'Data'},{key:'d',label:'Status'}]
            :[{key:'a',label:'Campo'},{key:'b',label:'Município'},{key:'c',label:'Híbrido'},{key:'d',label:'Status'}]}
            rows={rows.map(r=>({a:<b>{r[0]}</b>,b:r[1],c:r[2],d:<Badge tone={r[4]} dot>{r[3]}</Badge>}))}/>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:24}}>
            <span className="bry-micro">{rows.length} resultados em {uf}</span>
            <Pagination page={page} total={4} onChange={setPage}/>
          </div></>
        : <EmptyState title="Nenhum campo encontrado" action={<Button variant="outline" size="sm" onClick={()=>setBusca('')}>Limpar filtros</Button>}>
            Ajuste os filtros ou amplie a região de busca para ver campos demonstrativos.</EmptyState>}
    </div>
  </main>;
}
Object.assign(window,{Campos});
