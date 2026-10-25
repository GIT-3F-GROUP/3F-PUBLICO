const {Button,Badge,ProductCard,KPI,CTAStrip,Accordion,Chip}=window.BarygenDesignSystem_a84d4b;

function Home({go}){
  const [filtro,setFiltro]=React.useState('Grãos');
  return <main>
    <section className="bry-sec-tom-preto-grad" style={{padding:'var(--sec-y) 0'}}>
      <div className="site-wrap kit-grid" style={{display:'grid',gridTemplateColumns:'1.15fr .85fr',gap:'clamp(32px,4vw,56px)',alignItems:'center'}}>
        <div>
          <div className="bry-eyebrow bry-eyebrow-rule">Híbrido de milho · Lançamento</div>
          <h1 style={{marginTop:20,fontSize:'var(--fs-display)',fontWeight:800,lineHeight:1.02,letterSpacing:'-.02em',textTransform:'uppercase',maxWidth:'16ch'}}>
            Feito para a rentabilidade <span style={{fontWeight:600,color:'var(--brand-amarelo-principal)'}}>do produtor.</span></h1>
          <p style={{marginTop:20,fontSize:'var(--fs-body-lg)',color:'var(--text-on-dark-muted)',maxWidth:'48ch',lineHeight:1.6}}>
            BG307 Max: o híbrido que fará frente aos melhores do mercado nos próximos anos. Veja a espiga de perto em um campo demonstrativo.</p>
          <div className="bry-acoes" style={{marginTop:32}}>
            <Button variant="primary" onClick={()=>go('Onde comprar')}>Encontrar um campo</Button>
            <Button variant="on-dark" onClick={()=>go('Tecnologia')}>Ficha técnica</Button>
          </div>
        </div>
        <div style={{position:'relative'}}>
          <window.Photo label="Foto oficial · espiga em campo" height={320}/>
        </div>
      </div>
    </section>

    <section className="bry-sec-light-1" style={{padding:'var(--sec-y) 0'}}>
      <div className="site-wrap">
        <window.SectionHead num="01 · Portfólio" title={<>Híbrido <span style={{fontWeight:600}}>em linha.</span></>}
          desc="Genética desenvolvida para a realidade de cada região produtora brasileira. Posicionamento técnico validado em campo demonstrativo."/>
        <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:24}}>
          {['Grãos','Silagem','Ambos'].map(f=><Chip key={f} selected={f===filtro} onClick={()=>setFiltro(f)}>{f}</Chip>)}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:16}}>
          <ProductCard name="BG307 Max" badge="Lançamento" regions="MT · GO · MS"
            description="Híbrido precoce de alto investimento, feito para a rentabilidade do produtor." onAction={()=>go('Tecnologia')}/>
        </div>
      </div>
    </section>

    <section className="bry-sec-tom-preto" style={{padding:'var(--sec-y) 0'}}>
      <div className="site-wrap">
        <window.SectionHead dark num="02 · Resultados" title={<>Números da <span style={{fontWeight:600}}>safra 26/27.</span></>}
          desc={<>Dados de campos demonstrativos acompanhados por consultores técnicos da <span className="bry-wordmark">BARY<b>GEN</b></span>.</>}/>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:16}}>
          <KPI label="Produtividade média" value="218 sc/ha" trend="12% vs. safra anterior" direction="up"/>
          <KPI label="Campos demonstrativos" value="47" trend="9 novos no MT" direction="up"/>
          <KPI label="Municípios atendidos" value="126" trend="Estável" />
          <KPI label="Perda de stand" value="1,2%" trend="0,4 p.p." direction="down"/>
        </div>
      </div>
    </section>

    {/* Seção Van Gogh: o padrão de milho como imagem; o texto só dentro da forma em degradê */}
    <section className="bry-sec-vangogh">
      <svg className="bry-vangogh__forma" viewBox="0 0 1440 560" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
        <defs><linearGradient id="home-vg" x1="0" y1="0" x2=".35" y2="1"><stop offset="0" stopColor="#f6a200"/><stop offset="1" stopColor="#e18800"/></linearGradient></defs>
        <path fill="url(#home-vg)" d="M1440 0 H905 C 812 34 786 122 830 206 C 878 298 858 384 774 444 C 712 488 690 530 706 560 H1440 Z"/>
        <path className="bry-borda-curva" d="M905 0 C 812 34 786 122 830 206 C 878 298 858 384 774 444 C 712 488 690 530 706 560"/>
      </svg>
      <div className="bry-vangogh__texto">
        <div className="bry-eyebrow">Campos demonstrativos</div>
        <h2 style={{marginTop:12,fontSize:'var(--fs-h2)',fontWeight:800,lineHeight:1.05,textTransform:'uppercase'}}>Veja a espiga <span style={{fontWeight:600}}>de perto.</span></h2>
        <p style={{marginTop:16,fontSize:'var(--fs-body-lg)',lineHeight:1.6,maxWidth:'40ch'}}>A <span className="bry-wordmark">BARY<b>GEN</b></span> mantém campos demonstrativos em todas as regiões de atuação. Encontre o mais próximo e agende uma visita com o consultor.</p>
        <div className="bry-acoes" style={{marginTop:24}}>
          <Button variant="primary" onClick={()=>go('Onde comprar')}>Encontrar um campo</Button>
          <Button variant="seta" onClick={()=>go('Eventos')}>Ver eventos</Button>
        </div>
      </div>
    </section>

    <section className="bry-sec-light-2" style={{padding:'var(--sec-y) 0'}}>
      <div className="site-wrap kit-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'clamp(32px,4vw,56px)',alignItems:'start'}}>
        <div>
          <window.SectionHead num="03 · Dúvidas" title={<>Posicionamento <span style={{fontWeight:600}}>técnico.</span></>}/>
          <Accordion items={[
            {q:'Qual a população recomendada do BG307 Max?',a:'A recomendação varia por ambiente de produção e época de plantio. Consulte o posicionamento técnico oficial com o consultor da sua região.',open:true},
            {q:'O híbrido tem tolerância às principais doenças foliares?',a:'O pacote sanitário completo está descrito na ficha técnica do produto, disponível para download.'},
            {q:'Onde encontro um campo demonstrativo?',a:'A BARYGEN mantém campos demonstrativos em todas as regiões de atuação. Use o mapa de campos no site para localizar o mais próximo.'}]}/>
        </div>
        <window.Photo label="Foto oficial · campo demonstrativo" height={380}/>
      </div>
    </section>

    <CTAStrip title="Fale com um consultor da sua região." action={<Button variant="secondary" onClick={()=>go('Contato')}>Quero plantar BARYGEN</Button>}/>
  </main>;
}
Object.assign(window,{Home});
