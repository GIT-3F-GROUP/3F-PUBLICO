const {Field,Input,Select,Textarea,InputGroup,Checkbox,Radio,Button,Steps,Alert,Toast,Card,Avatar,Icon}=window.BarygenDesignSystem_a84d4b;

function Contato(){
  const [step,setStep]=React.useState(0);
  const [sent,setSent]=React.useState(false);
  return <main className="bry-sec-light-4" style={{padding:'var(--sec-y-sm) 0 var(--sec-y)'}}>
    <div className="site-wrap">
      <window.SectionHead num="Contato" title={<>Fale com um <span style={{fontWeight:600}}>consultor.</span></>}
        desc="Um consultor técnico da sua região responde em até um dia útil."/>
      <div className="kit-grid" style={{display:'grid',gridTemplateColumns:'1.2fr .8fr',gap:40,alignItems:'start'}}>
        <div className="bry-card" style={{padding:32}}>
          <Steps steps={['Dados','Fazenda','Interesse','Confirmação']} current={step}/>
          <div style={{marginTop:32,display:'grid',gap:20}}>
            {step===0&&<><div style={{display:'flex',gap:20,flexWrap:'wrap'}}>
              <Field label="Nome completo" required helper="Como consta no documento."><Input placeholder="Digite seu nome"/></Field>
              <Field label="Telefone" required><Input placeholder="(65) 9 0000-0000"/></Field></div>
              <Field label="E-mail" required><Input placeholder="nome@fazenda.com.br"/></Field></>}
            {step===1&&<><div style={{display:'flex',gap:20,flexWrap:'wrap'}}>
              <Field label="Fazenda"><Input placeholder="Fazenda Exemplo"/></Field>
              <Field label="Estado"><Select options={['Mato Grosso','Goiás','Mato Grosso do Sul']}/></Field></div>
              <div style={{display:'flex',gap:20,flexWrap:'wrap'}}>
                <Field label="Área plantada"><InputGroup addon="ha"><Input placeholder="0"/></InputGroup></Field>
                <Field label="Município"><Input placeholder="Sorriso"/></Field></div></>}
            {step===2&&<><div style={{display:'flex',gap:28,flexWrap:'wrap'}}>
              <div className="bry-stack" style={{gap:10}}>
                <span className="bry-stage__label">Época de plantio</span>
                <Radio name="ep" label="Safra verão" defaultChecked/><Radio name="ep" label="Safrinha"/><Radio name="ep" label="Irrigado"/></div>
              <div className="bry-stack" style={{gap:10}}>
                <span className="bry-stage__label">Interesse</span>
                <Checkbox label="Quero receber o catálogo" defaultChecked/><Checkbox label="Tenho interesse em silagem"/><Checkbox label="Quero visitar um campo"/></div></div>
              <Field label="Mensagem"><Textarea placeholder="Escreva aqui"/></Field></>}
            {step===3&&<Alert tone="success" title="Dados conferidos.">Confirme o envio para que um consultor da sua região entre em contato.</Alert>}
          </div>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:28}}>
            <Button variant="ghost" onClick={()=>setStep(Math.max(0,step-1))}>Voltar</Button>
            {step<3
              ? <Button variant="primary" onClick={()=>setStep(step+1)}>Continuar</Button>
              : <Button variant="primary" onClick={()=>setSent(true)}>Enviar cadastro</Button>}
          </div>
        </div>
        <div className="bry-stack" style={{gap:20}}>
          <Card eyebrow="Consultor da sua região" title="Mato Grosso · Norte">
            <div style={{display:'flex',gap:14,alignItems:'center',marginTop:6}}>
              <Avatar initials="NS" size="lg"/>
              <div><div style={{fontSize:15,fontWeight:800,color:'var(--text-body)'}}>Nome Sobrenome</div>
              <div style={{fontSize:12,color:'var(--text-accent)',fontWeight:700}}>Consultor Técnico de Vendas</div>
              <div style={{fontSize:12,marginTop:6}}>(66) 0000-0000<br/>nome@barygen.com.br</div></div>
            </div>
          </Card>
          <Card eyebrow="Atendimento" title="Canais diretos">
            <div className="bry-stack" style={{gap:10,marginTop:6}}>
              <span style={{display:'flex',gap:10,alignItems:'center'}}><Icon name="telefone" size={16}/>+55 (65) 3000-0000</span>
              <span style={{display:'flex',gap:10,alignItems:'center'}}><Icon name="email" size={16}/>contato@barygen.com.br</span>
              <span style={{display:'flex',gap:10,alignItems:'center'}}><Icon name="local" size={16}/>Sorriso · Mato Grosso</span>
            </div>
          </Card>
        </div>
      </div>
      {sent&&<div style={{position:'fixed',bottom:28,left:'50%',transform:'translateX(-50%)',zIndex:40}}>
        <Toast onClose={()=>setSent(false)}>Cadastro enviado. Um consultor entrará em contato.</Toast></div>}
    </div>
  </main>;
}
Object.assign(window,{Contato});
