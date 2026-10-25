const {Logo,Button,Badge}=window.BarygenDesignSystem_a84d4b;

function SiteHeader({page,go}){
  const links=['Híbridos','Tecnologia','Onde comprar','Eventos','Contato'];
  return <header className="site-topbar"><div className="inner">
    <Logo type="horizontal-nome" version="colorida-escuro" height={30}/>
    <nav className="site-links">{links.map(l=><span key={l} className={l===page?'on':''} onClick={()=>go(l)}>{l}</span>)}</nav>
    <Button variant="primary" size="sm" onClick={()=>go('Contato')}>Fale com um consultor</Button>
  </div></header>;
}

function SectionHead({num,title,desc,dark}){
  return <div className="kit-grid" style={{display:'grid',gridTemplateColumns:'180px 1fr',gap:'clamp(12px,3vw,48px)',alignItems:'start',marginBottom:'clamp(24px,3.5vw,48px)'}}>
    <div style={{fontSize:12,fontWeight:700,letterSpacing:'.24em',textTransform:'uppercase',color:dark?'var(--brand-amarelo-principal)':'var(--text-accent)',paddingTop:10}}>{num}</div>
    <div>
      <h2 style={{fontSize:'var(--fs-h2)',fontWeight:800,letterSpacing:'-.01em',lineHeight:1.06,textTransform:'uppercase'}}>{title}</h2>
      {desc&&<p style={{marginTop:16,fontSize:'var(--fs-body-lg)',color:dark?'var(--text-on-dark-muted)':'var(--text-muted)',maxWidth:'60ch',lineHeight:1.6}}>{desc}</p>}
    </div>
  </div>;
}

function Photo({label,height=280,className=''}){
  return <div className={`ph ${className}`} style={{height,borderRadius:14}}>{label}</div>;
}

Object.assign(window,{SiteHeader,SectionHead,Photo});
