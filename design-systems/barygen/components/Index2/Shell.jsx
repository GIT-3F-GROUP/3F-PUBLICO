const {Logo,Icon,SearchBox,Avatar,Dropdown,Badge,IconButton}=window.BarygenDesignSystem_a84d4b;

function Shell({page,setPage,onExit}){
  const [menu,setMenu]=React.useState(false);
  const items=[['Visão geral','casa'],['Campos','local'],['Pedidos','filtrar'],['Preferências','conta']];
  const Screen={'Visão geral':window.VisaoGeral,'Campos':window.VisaoGeral,'Pedidos':window.Pedidos,'Preferências':window.Preferencias}[page];
  return <div className="app">
    <aside className="rail">
      <Logo type="horizontal-nome" version="colorida-escuro" height={28}/>
      <nav style={{display:'flex',flexDirection:'column',gap:4}}>
        {items.map(([l,ic])=><a key={l} className={l===page?'on':''} onClick={()=>setPage(l)}><Icon name={ic} size={16} strokeWidth={2}/>{l}</a>)}
      </nav>
      <div style={{marginTop:'auto',borderTop:'1px solid var(--rule-on-dark)',paddingTop:16}}>
        <div className="bry-eyebrow" style={{color:'var(--brand-amarelo-principal)',fontSize:11}}>Safra 26/27</div>
        <p style={{fontSize:12.5,color:'var(--text-on-dark-muted)',marginTop:8,lineHeight:1.5}}>Fazenda Exemplo · Sorriso, MT<br/>1.240 ha cadastrados</p>
      </div>
    </aside>
    <div className="main">
      <header className="bar">
        <SearchBox placeholder="Buscar campo, pedido, híbrido..."/>
        <div style={{display:'flex',alignItems:'center',gap:16}}>
          <Badge tone="neutral">Safra 26/27</Badge>
          <IconButton label="Notificações" variant="ghost"><Icon name="agenda" size={18} strokeWidth={2}/></IconButton>
          <div style={{position:'relative'}}>
            <span onClick={()=>setMenu(!menu)} style={{cursor:'pointer',display:'flex',alignItems:'center',gap:10}}>
              <Avatar initials="NS" size="sm"/>
              <span style={{fontSize:13,fontWeight:700}}>Nome Sobrenome</span>
            </span>
            {menu&&<Dropdown style={{position:'absolute',right:0,top:'calc(100% + 10px)',zIndex:20}}
              onSelect={l=>{setMenu(false);if(l==='Sair da conta')onExit();if(l==='Preferências')setPage('Preferências')}}
              items={[{label:'Ver perfil'},{label:'Minhas lavouras'},{label:'Preferências'},{separator:true},{label:'Sair da conta',danger:true}]}/>}
          </div>
        </div>
      </header>
      <Screen page={page} setPage={setPage}/>
    </div>
  </div>;
}
Object.assign(window,{Shell});
