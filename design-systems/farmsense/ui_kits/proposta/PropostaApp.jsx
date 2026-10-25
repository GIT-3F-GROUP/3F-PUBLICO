const { Pagination, Logo, Chip, Button } = window.FarmSenseDesignSystem_c4c636;

function PropostaApp() {
  const paginas = [<Capa />, <Carta />, null, <Propriedade />, <Fases />, <Investimento />, <Aceite />];
  const [i, setI] = React.useState(1);
  const total = 7;
  const conteudo = i === 3 ? <Sumario onIr={(n) => setI(n === 1 ? 2 : n === 2 ? 4 : n === 3 ? 5 : n === 4 ? 6 : 7)} /> : paginas[i - 1];

  return (
    <div style={{ minHeight: '100vh', paddingBottom: 96 }}>
      <header className="row" style={{ position: 'sticky', top: 0, zIndex: 20, justifyContent: 'space-between', padding: '14px 32px', background: 'var(--verde-sombra)', color: '#fff' }}>
        <div className="row-tight" style={{ gap: 16 }}>
          <Logo base="../.." variant="branca" width={140} />
          <Chip tone="dark">Proposta · FAZ-000-0000</Chip>
        </div>
        <div className="row-tight" style={{ gap: 14 }}>
          <Pagination tone="dark" page={i} total={total} onChange={(p) => setI(Math.min(total, Math.max(1, p)))} />
          <Button variant="neon" size="sm">Aceitar proposta</Button>
        </div>
      </header>
      <div style={{ padding: '40px 0' }} key={i} className="fs-in-up">{conteudo}</div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PropostaApp />);
if (window.lucide) window.lucide.createIcons();
