const {LoginCard,Field,Input,Button,Checkbox,Alert}=window.BarygenDesignSystem_a84d4b;

function Login({onEnter}){
  const [err,setErr]=React.useState(false);
  const {BARYGEN_LOGO}=window.BarygenDesignSystem_a84d4b;
  // Preto tom sobre tom: a palheta em preto quase absoluto atrás do cartão
  return <div className="bry-sec-tom-preto bry-sec-palheta" style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:24}}>
    <span aria-hidden="true" style={{position:'absolute',right:'-8vw',bottom:'-14vh',height:'92vh',zIndex:-1,display:'flex'}} dangerouslySetInnerHTML={{__html:BARYGEN_LOGO.svg({type:'palheta',color:'var(--tom-preto-1)',height:'100%'}).replace(/ width="[^"]*"/,'')}}/>
    <div style={{position:'relative'}}>
      <LoginCard surface="dark">
        {err&&<Alert tone="error" title="Não foi possível entrar.">Confira o e-mail e a senha e tente novamente.</Alert>}
        <Field label="E-mail"><Input placeholder="nome@fazenda.com.br" defaultValue="nome@fazendaexemplo.com.br"/></Field>
        <Field label="Senha"><Input type="password" defaultValue="········"/></Field>
        <Checkbox label="Manter conectado" defaultChecked/>
        <Button variant="primary" fullWidth onClick={onEnter}>Entrar</Button>
        <Button variant="link" style={{alignSelf:'center'}} onClick={()=>setErr(!err)}>Esqueci minha senha</Button>
      </LoginCard>
    </div>
  </div>;
}
Object.assign(window,{Login});
