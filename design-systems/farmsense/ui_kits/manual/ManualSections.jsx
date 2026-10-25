const { Surface, SectionHeader, Kicker, Chip, Button, Logo, Swatch, LogoCard, RuleCard, GlassCard, KpiTile, Sparkline, NeonDot, PatternLayer, QuoteBlock, Divider, StatRow, DataTable, BarMeter, StatusPill, Tile } = window.FarmSenseDesignSystem_c4c636;
const B = '../..';

function Hero() {
  return (
    <Surface variant="grade" wrap={false} id="identidade" data-screen-label="01 Identidade">
      <div className="wrap" style={{ paddingTop: 'var(--s-10)', paddingBottom: 'var(--s-10)' }}>
        <div className="row" style={{ justifyContent: 'space-between', marginBottom: 'var(--s-9)' }}>
          <Logo base={B} variant="branca" width={280} />
          <div className="row" style={{ gap: 'var(--s-5)' }}>
            <Chip tone="dark">v 1.0 · 2026</Chip>
            <Chip tone="neon" dot>Brand System</Chip>
          </div>
        </div>
        <Kicker>Manual de Marca · FarmSense Agro</Kicker>
        <h1 className="display fs-in-up" style={{ marginTop: 'var(--s-5)' }}>
          <span className="t-100">Agronomia de</span><br />
          <span className="serif" style={{ fontSize: '.95em' }}>precisão,</span> <span className="t-100">sistema</span><br />
          <span className="t-100">de marca em </span><span style={{ color: 'var(--ciano-neon)' }}>tom sobre tom.</span>
        </h1>
        <div className="grid g-3 fs-stagger" style={{ marginTop: 'var(--s-9)', gap: 'var(--s-6)' }}>
          {[['Base','Um sistema visual restrito a oito cores e duas famílias tipográficas. Bege para a leitura do dia. Verde Sombra para a noite digital. Neons só para o detalhe.'],
            ['Origem','Construído a partir do epicentro agrícola do Brasil, em Sorriso (MT). Consultoria agronômica e agricultura de precisão.'],
            ['Princípio','Tom sobre tom. Sempre. Contraste pelo peso, pela escala e pela opacidade — não pela invenção de cores.']].map(([k, p]) => (
            <div className="stack" key={k}><span className="label t-55">{k}</span><p className="body t-85" style={{ margin: 0 }}>{p}</p></div>
          ))}
        </div>
        <hr className="hairline" style={{ marginTop: 'var(--s-9)' }} />
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <span className="serif t-70" style={{ fontSize: 14 }}>01 · Visão geral</span>
          <span className="serif t-70" style={{ fontSize: 14 }}>FarmSense Agro · Sorriso, MT</span>
          <span className="serif t-70" style={{ fontSize: 14 }}>12.05.2026</span>
        </div>
      </div>
    </Surface>
  );
}

function Principios() {
  return (
    <Surface variant="perola" id="principios">
      <SectionHeader num="01">Princípios</SectionHeader>
      <div className="grid g-4">
        {[['Tom sobre tom.','Camadas próximas em valor criam profundidade sem ruído. Use no máximo três níveis de bege ou três níveis de verde por composição.'],
          ['Contraste pelo peso.','Hierarquia vem da escala tipográfica e da opacidade — 100 %, 85 %, 70 %, 55 %, 40 %. Não introduzimos cores novas para destacar.'],
          ['Neon raro.','Verde Neon e Ciano Neon são tinta de assinatura tecnológica. Pontos, linhas, indicadores. Nunca como cor de fundo ou bloco amplo.'],
          ['Vidro fosco.','Cards em camadas usam backdrop-filter. Vidro sobre vidro, sempre com leve borda interna para o destaque.']].map(([t, d]) => (
          <div className="stack" key={t}><span className="h3 t-100">{t}</span><p className="body t-70" style={{ margin: 0 }}>{d}</p></div>
        ))}
      </div>
    </Surface>
  );
}

function Cores() {
  const beges = [['Bege Pérola','#F7F3ED','247, 243, 237','Surface · default'],['Bege Rastro','#F3EAD9','243, 234, 217','Surface · 2'],['Bege Estrada','#E7D7BC','231, 215, 188','Accent'],['Bege Escuro','#D8BE98','216, 190, 152','Accent · strong']];
  const verdes = [['Verde Sombra','#004141','0, 65, 65','Ink · primary',1],['Verde Anil','#00655C','0, 101, 92','Ink · secondary',1],['Verde Neon Farm','#0ADC14','10, 220, 20','Neon · detalhe'],['Ciano Neon Farm','#33FFC2','51, 255, 194','Neon · detalhe']];
  return (
    <Surface variant="perola" id="cores">
      <SectionHeader num="02">Cores · 8 tokens, nada mais</SectionHeader>
      <h2 className="h2" style={{ maxWidth: '22ch' }}>A paleta inteira <span className="serif">cabe em uma mão.</span></h2>
      <p className="body-lg t-70" style={{ maxWidth: '60ch', marginTop: 'var(--s-4)' }}>
        Quatro beges em escala térmica do norte do Mato Grosso. Dois verdes do dossel agrícola depois das 17h. Dois neons que existem apenas para sinalizar tecnologia. Nenhuma cor fora desta lista pode aparecer em qualquer peça FarmSense.
      </p>
      <div className="grid g-4" style={{ marginTop: 'var(--s-7)' }}>
        {beges.concat(verdes).map(([n, h, r, t, d]) => <Swatch key={n} name={n} hex={h} rgb={r} tag={t} dark={!!d} />)}
      </div>
      <div style={{ marginTop: 'var(--s-9)' }}>
        <SectionHeader num="02.2">Regras de pareamento</SectionHeader>
        <div className="grid g-3">
          <RuleCard ok title="Bege como fundo">Tinta sempre em <strong>Verde Sombra</strong>. Variar pela opacidade.</RuleCard>
          <RuleCard ok title="Verde Sombra como fundo">Tinta sempre em <strong>branco</strong>. Variar pela opacidade.</RuleCard>
          <RuleCard ok title="Neons como detalhe">Pontos, linhas, badges, contornos. Nunca grandes blocos de fundo.</RuleCard>
          <RuleCard ok={false} title="Não pinte texto em neon">Verde/Ciano Neon não substituem a tinta. São indicadores.</RuleCard>
          <RuleCard ok={false} title="Não invente cores">Nenhum laranja, vermelho, azul ou cinza. Use opacidade do verde.</RuleCard>
          <RuleCard ok={false} title="Não misture Bege e Sombra crus">Use camada de vidro intermediária para a transição.</RuleCard>
        </div>
      </div>
    </Surface>
  );
}

function Tipografia() {
  return (
    <Surface variant="rastro" id="tipografia">
      <SectionHeader num="03">Tipografia</SectionHeader>
      <div className="grid g-2" style={{ alignItems: 'end', gap: 'var(--s-7)' }}>
        <h2 className="h2" style={{ maxWidth: '16ch' }}>Be Vietnam Pro <span className="serif">para tudo,</span> Georgia para o sussurro.</h2>
        <p className="body-lg t-70" style={{ margin: 0 }}>
          Be Vietnam Pro 800 carrega os títulos. 500 estrutura subtítulos e UI. 400 sustenta o corpo. Georgia <em className="serif">itálico</em> aparece em pinceladas — números de seção, citações, palavras de inflexão. Nunca em parágrafos inteiros. Os arquivos oficiais acompanham este sistema em <code>fonts/</code> e a família está disponível no <strong>Google Fonts</strong>.
        </p>
      </div>
      <Tile style={{ marginTop: 'var(--s-8)', background: 'rgba(255,255,255,.4)', padding: 'var(--s-7)' }}>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <span className="label t-55">Be Vietnam Pro · ExtraBold 800</span>
          <span className="serif t-55">Aa Bb Cc · 0–9</span>
        </div>
        <div className="display t-100" style={{ marginTop: 'var(--s-3)', fontSize: 'clamp(64px,9vw,144px)' }}>Produtividade</div>
      </Tile>
      <div className="grid g-3" style={{ marginTop: 'var(--s-5)' }}>
        <Tile style={{ background: 'rgba(255,255,255,.4)' }}><span className="label t-55">Medium 500</span><div className="h2 t-100" style={{ marginTop: 'var(--s-3)' }}>Manejo de solo na entressafra</div></Tile>
        <Tile style={{ background: 'rgba(255,255,255,.4)' }}><span className="label t-55">Regular 400</span><p className="body-lg t-85" style={{ margin: 'var(--s-3) 0 0' }}>A consultoria agronômica é, antes de tudo, leitura de campo. Mapas, amostras, conversa direta com o produtor.</p></Tile>
        <Tile style={{ background: 'rgba(255,255,255,.4)' }}><span className="label t-55">Georgia · Italic</span><p className="serif t-85" style={{ fontSize: 24, lineHeight: 1.3, margin: 'var(--s-3) 0 0' }}>— a precisão começa antes do plantio.</p></Tile>
      </div>
    </Surface>
  );
}

function LogoSection() {
  return (
    <Surface variant="perola" id="logo">
      <SectionHeader num="04">Sistema de logo · cor, monocromática, compacta</SectionHeader>
      <div className="grid g-2" style={{ alignItems: 'end', gap: 'var(--s-7)' }}>
        <h2 className="h2" style={{ maxWidth: '20ch' }}>Duas marcas, <span className="serif">uma família.</span> A horizontal primeiro, a compacta no aperto.</h2>
        <p className="body-lg t-70" style={{ margin: 0 }}>A FarmSense tem uma marca <strong>principal</strong> (horizontal) e uma <strong>compacta</strong> (empilhada). Cada uma com três variantes: <strong>colorida</strong>, <strong>monocromática branca</strong> e <strong>monocromática escura</strong>. Use SVG sempre que possível.</p>
      </div>
      <div className="label t-55" style={{ margin: 'var(--s-7) 0 var(--s-4)' }}>Marca principal</div>
      <div className="grid g-4" style={{ gap: 'var(--s-3)' }}>
        <LogoCard base={B} background="perola" tag="Pérola · cor" />
        <LogoCard base={B} background="rastro" tag="Rastro · cor" />
        <LogoCard base={B} background="estrada" tag="Estrada · cor" />
        <LogoCard base={B} background="escuro" tag="Escuro · cor" />
        <LogoCard base={B} background="sombra" tag="Sombra · mono branca" />
        <LogoCard base={B} background="anil" tag="Anil · mono branca" />
        <LogoCard base={B} background="branco" variant="escura" tag="Branco · mono escura" />
        <LogoCard base={B} background="branco" tag="Branco · cor (impresso)" />
      </div>
      <div className="label t-55" style={{ margin: 'var(--s-7) 0 var(--s-4)' }}>Marca compacta</div>
      <div className="grid g-4" style={{ gap: 'var(--s-3)' }}>
        <LogoCard base={B} shape="compacta" background="perola" tag="Pérola · cor" />
        <LogoCard base={B} shape="compacta" background="estrada" tag="Estrada · cor" />
        <LogoCard base={B} shape="compacta" background="sombra" tag="Sombra · mono branca" />
        <LogoCard base={B} shape="compacta" background="branco" variant="escura" tag="Branco · mono escura" />
      </div>
    </Surface>
  );
}

function Superficies() {
  const claras = [['perola','01 · Pérola limpa','Leitura longa, editorial. O default do sistema.'],['rastro','02 · Rastro topográfico','Curvas de nível tom-sobre-tom, em multiply, no canto.'],['estrada','03 · Estrada em vidro','Bege quente sob lâmina de vidro branco. Peças comerciais.'],['papel','04 · Papel impresso','Branco com listras de talhão. Relatório, ficha, contrato.']];
  const escuras = [['grade','05 · Sombra em grade','Mapeamento aéreo. Hero institucional.'],['relevo','06 · Sombra topográfica','Curvas neon no canto superior direito.'],['alvo','07 · Anil alvo','Anéis concêntricos de precisão. Tecnologia e sensoriamento.'],['solo','08 · Perfil de solo','Camadas estratigráficas. Seções de dado.']];
  const Card = ({ v, t, d, dark }) => (
    <div className={'fs-surface fs-' + (dark ? 'dark-' : 'light-') + v + ' fs-hv-lift-card'} style={{ borderRadius: 'var(--r-md)', minHeight: 190, padding: 'var(--s-5)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: dark ? '#fff' : 'var(--verde-sombra)' }}>
      <span className="label" style={{ opacity: .55 }}>{t}</span>
      <p className="body-sm" style={{ margin: 0, opacity: .8, maxWidth: '32ch' }}>{d}</p>
    </div>
  );
  return (
    <Surface variant="estrada" id="superficies">
      <SectionHeader num="05">Superfícies · quatro claras, quatro escuras</SectionHeader>
      <h2 className="h2" style={{ maxWidth: '20ch' }}>Oito fundos, <span className="serif">um só ritmo.</span></h2>
      <p className="body-lg t-70" style={{ maxWidth: '62ch', marginTop: 'var(--s-4)' }}>Cada página alterna clara → escura → clara. Máximo de duas superfícies escuras por peça, nunca duas iguais em sequência.</p>
      <div className="grid g-4" style={{ marginTop: 'var(--s-7)', gap: 'var(--s-3)' }}>
        {claras.map(([v, t, d]) => <Card key={v} v={v} t={t} d={d} />)}
        {escuras.map(([v, t, d]) => <Card key={v} v={v} t={t} d={d} dark />)}
      </div>
    </Surface>
  );
}

function Dados() {
  return (
    <Surface variant="relevo" id="dados">
      <SectionHeader num="06" tone="neon">Superfície · Verde Sombra + neon</SectionHeader>
      <div className="grid g-2" style={{ alignItems: 'end', gap: 'var(--s-7)' }}>
        <h2 className="h2 t-100" style={{ maxWidth: '18ch' }}>O modo noturno <span className="serif">da operação</span> — onde a tecnologia respira.</h2>
        <p className="body-lg t-85" style={{ margin: 0 }}>Fundos em Verde Sombra recebem cards de <strong>vidro fosco</strong>, com borda interna em Ciano Neon ou Verde Neon a 22 %. Neon é fino, raro, e sempre sinaliza dado em tempo real.</p>
      </div>
      <div className="grid g-3" style={{ marginTop: 'var(--s-7)' }}>
        <GlassCard tone="dark" accent="ciano" style={{ gridColumn: 'span 2', minHeight: 280 }}>
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <StatusPill status="live" surface="dark">Ao vivo · NDVI</StatusPill>
            <span className="serif t-55" style={{ fontSize: 12 }}>Talhão Aurora · 12.05 · 14:22</span>
          </div>
          <div style={{ marginTop: 'var(--s-5)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--s-5)' }}>
            <div><Kicker>Vigor médio</Kicker><KpiTile tone="dark" value="0,78" unit="ndvi" delta="▲ + 0,06 nas últimas 24 h" deltaTone="neon" /></div>
            <Sparkline points={[.60,.62,.61,.64,.66,.65,.69,.71,.70,.74,.76,.78]} height={140} />
          </div>
        </GlassCard>
        <GlassCard tone="dark" accent="verde" style={{ minHeight: 280, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <StatusPill status="ativo" surface="dark">Estação ON</StatusPill>
            <h4 className="h3 t-100" style={{ marginTop: 'var(--s-4)' }}>3 estações<br />climáticas ativas</h4>
          </div>
          <div className="stack" style={{ gap: 6 }}>
            {[['Sorriso · MT','26,4° · 62%'],['Sinop · MT','25,1° · 68%'],['Vera · MT','27,0° · 58%']].map(([a, b]) => (
              <div className="row" key={a} style={{ justifyContent: 'space-between' }}><span className="body-sm t-70">{a}</span><span className="body-sm t-100">{b}</span></div>
            ))}
          </div>
        </GlassCard>
      </div>
      <div className="grid g-4" style={{ marginTop: 'var(--s-5)' }}>
        {[['01 · Diagnóstico','Amostragem em grade','Solo coletado em malha de 2 ha, integrado a histórico de produtividade do talhão.',''],
          ['02 · Sensoriamento','NDVI multi-temporal','Janelas semanais comparadas com a curva ideal para a cultura e o estádio fenológico.','ciano'],
          ['03 · Recomendação','Aplicação por taxa variável','Mapas de prescrição entregues no formato do controlador da máquina do produtor.',''],
          ['04 · Acompanhamento','12 visitas por safra','Inspeção em campo presencial — a tecnologia confirma o que o engenheiro vê.','verde']].map(([k, t, d, a]) => (
          <GlassCard key={t} tone="dark" accent={a || undefined} className="fs-hv-lift-card">
            <Kicker tone={a === 'ciano' ? 'neon' : a === 'verde' ? 'neon-green' : 'default'}>{k}</Kicker>
            <h4 className="h3 t-100" style={{ marginTop: 'var(--s-3)' }}>{t}</h4>
            <p className="body-sm t-70" style={{ margin: 'var(--s-3) 0 0' }}>{d}</p>
          </GlassCard>
        ))}
      </div>
    </Surface>
  );
}

function Componentes() {
  return (
    <Surface variant="perola" id="componentes">
      <SectionHeader num="09">Componentes · biblioteca-base</SectionHeader>
      <div className="grid g-2" style={{ gap: 'var(--s-5)' }}>
        <Tile><span className="label t-55">Botões · superfície clara</span>
          <div className="row" style={{ gap: 'var(--s-3)', marginTop: 'var(--s-4)' }}>
            <Button withArrow>Primário</Button><Button variant="ghost-light">Secundário</Button><Button variant="ghost-light" size="sm">Terciário</Button>
          </div></Tile>
        <Tile style={{ background: 'var(--verde-sombra)', borderColor: 'transparent' }}>
          <span className="label" style={{ color: 'rgba(255,255,255,.55)' }}>Botões · superfície escura</span>
          <div className="row" style={{ gap: 'var(--s-3)', marginTop: 'var(--s-4)' }}>
            <Button variant="primary-light" withArrow>Primário</Button><Button variant="neon">Ação ao vivo</Button><Button variant="ghost-dark">Secundário</Button>
          </div></Tile>
      </div>
      <div className="grid g-2" style={{ gap: 'var(--s-5)', marginTop: 'var(--s-5)' }}>
        <Tile style={{ background: 'rgba(255,255,255,.5)' }}><span className="label t-55">Tabela · relatório</span>
          <div style={{ marginTop: 'var(--s-4)' }}>
            <DataTable columns={[{ key: 't', label: 'Talhão' }, { key: 'ha', label: 'Ha', align: 'right' }, { key: 'sc', label: 'sc/ha', align: 'right', strong: true }, { key: 'd', label: 'Δ', align: 'right' }]}
              rows={[{ t: 'Aurora', ha: 412, sc: '82,4', d: '+18,1', d_tone: 'positivo' }, { t: 'Chapada', ha: 228, sc: '74,9', d: '+9,4', d_tone: 'positivo' }, { t: 'Cerrado-Norte', ha: 580, sc: '69,2', d: '+2,1' }, { t: 'Pampulha', ha: 250, sc: '66,8', d: '−0,6' }]} />
          </div></Tile>
        <Tile style={{ background: 'rgba(255,255,255,.5)', display: 'grid', gap: 10, alignContent: 'start' }}>
          <span className="label t-55">Gráfico · barras</span>
          <BarMeter label="Aurora" value={82.4} max={90} display="82,4" fill="sombra" />
          <BarMeter label="Chapada" value={74.9} max={90} display="74,9" fill="anil" />
          <BarMeter label="Cerrado-N." value={69.2} max={90} display="69,2" fill="bege" />
          <BarMeter label="Pampulha" value={66.8} max={90} display="66,8" fill="bege" />
          <p className="body-sm t-55 serif" style={{ margin: 0 }}>Tom-sobre-tom em escala bege/verde para diferenciar categorias.</p>
        </Tile>
      </div>
    </Surface>
  );
}

function Voz() {
  return (
    <Surface variant="rastro" id="voz">
      <SectionHeader num="10">Tom de comunicação · a marca falando</SectionHeader>
      <div className="grid g-2" style={{ alignItems: 'end', gap: 'var(--s-7)' }}>
        <h2 className="h2" style={{ maxWidth: '20ch' }}>Positiva, profissional, <span className="serif">agronômica.</span></h2>
        <p className="body-lg t-70" style={{ margin: 0 }}>A FarmSense fala como um engenheiro agrônomo experiente conversando com o produtor: com seriedade no que afirma, verdade no que verifica, e otimismo realista sobre o que vem pela frente. Nada de exagero, nada de promessa vazia, nada de jargão de marketing.</p>
      </div>
      <div className="grid g-2" style={{ gap: 'var(--s-5)', marginTop: 'var(--s-7)' }}>
        <Tile style={{ background: 'rgba(255,255,255,.5)' }}><span className="label t-55">Diga</span>
          <div className="stack" style={{ marginTop: 'var(--s-3)', gap: 10 }}>
            <p className="body t-100" style={{ margin: 0 }}>“Fertilidade do talhão Aurora corrigida em 22 unidades de K antes do plantio.”</p>
            <p className="body t-100" style={{ margin: 0 }}>“Produtividade 18 % acima da média regional na safra 24/25, verificada em campo.”</p>
            <p className="body t-100" style={{ margin: 0 }}>“Recomendação entregue no formato do controlador da máquina do produtor.”</p>
          </div></Tile>
        <Tile><span className="label t-55">Não diga</span>
          <div className="stack" style={{ marginTop: 'var(--s-3)', gap: 10 }}>
            <p className="body t-55" style={{ margin: 0, textDecoration: 'line-through' }}>“Safra explosiva, resultado impressionante.”</p>
            <p className="body t-55" style={{ margin: 0, textDecoration: 'line-through' }}>“Revolucionamos a agricultura do MT.”</p>
            <p className="body t-55" style={{ margin: 0, textDecoration: 'line-through' }}>“Dashboard inteligente com IA de última geração.”</p>
          </div></Tile>
      </div>
      <div style={{ marginTop: 'var(--s-7)', position: 'relative', overflow: 'hidden', borderRadius: 'var(--r-lg)', background: 'var(--bege-estrada)', padding: 'var(--s-7)' }}>
        <PatternLayer pattern="curvas-tonal" corner="tr" />
        <div style={{ position: 'relative' }}>
          <QuoteBlock author="Nome Sobrenome" role="Eng. Agr., CEO">A precisão começa antes do plantio — começa na conversa com o produtor.</QuoteBlock>
        </div>
      </div>
    </Surface>
  );
}

function Rodape() {
  return (
    <footer className="foot on-dark" data-screen-label="11 Footer" id="rodape">
      <div className="wrap" style={{ padding: 0 }}>
        <div className="grid g-3" style={{ gap: 'var(--s-7)', alignItems: 'end' }}>
          <div>
            <Logo base={B} variant="branca" width={220} />
            <p className="body t-70" style={{ margin: 'var(--s-5) 0 0', maxWidth: '32ch' }}>Consultoria agronômica e agricultura de precisão. Sorriso · MT — atendendo MT, MS e PA.</p>
          </div>
          <div className="stack">
            <Kicker>Sumário</Kicker>
            {[['cores','02 · Cores'],['tipografia','03 · Tipografia'],['logo','04 · Logo'],['superficies','05 · Superfícies'],['dados','06 · Dados'],['componentes','09 · Componentes']].map(([h, l]) => (
              <a key={h} href={'#' + h} className="body-sm t-85" style={{ textDecoration: 'none', color: 'inherit', border: 0 }}>{l}</a>
            ))}
          </div>
          <div className="stack right" style={{ alignItems: 'end' }}>
            <Chip tone="neon" dot>Design System · v 1.0</Chip>
            <span className="body-sm t-70">Emissão · 12 / 05 / 2026</span>
            <span className="serif t-55" style={{ fontSize: 13 }}>— “a precisão começa antes do plantio.”</span>
          </div>
        </div>
        <Divider spacing="var(--s-7)" />
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <span className="legal">© FarmSense Agro · Sorriso, MT · 2026</span>
          <span className="legal">Be Vietnam Pro · Georgia</span>
          <span className="legal">8 cores · nenhuma a mais</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Hero, Principios, Cores, Tipografia, LogoSection, Superficies, Dados, Componentes, Voz, Rodape });
