const { DotNav } = window.FarmSenseDesignSystem_c4c636;

function ManualApp() {
  const secoes = [
    { id: 'identidade', label: 'Identidade' }, { id: 'cores', label: 'Cores' },
    { id: 'tipografia', label: 'Tipografia' }, { id: 'logo', label: 'Logo' },
    { id: 'superficies', label: 'Superfícies' }, { id: 'dados', label: 'Dados' },
    { id: 'componentes', label: 'Componentes' }, { id: 'voz', label: 'Tom de voz' },
  ];
  const [ativa, setAtiva] = React.useState('identidade');

  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setAtiva(e.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    secoes.forEach((s) => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const irPara = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    setAtiva(id);
  };

  return (
    <>
      <div style={{ position: 'fixed', top: '50%', right: 24, transform: 'translateY(-50%)', zIndex: 50 }}>
        <DotNav items={secoes} value={ativa} onChange={irPara} />
      </div>
      <Hero /><Principios /><Cores /><Tipografia /><LogoSection /><Superficies /><Dados /><Componentes /><Voz /><Rodape />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ManualApp />);
if (window.lucide) window.lucide.createIcons();
