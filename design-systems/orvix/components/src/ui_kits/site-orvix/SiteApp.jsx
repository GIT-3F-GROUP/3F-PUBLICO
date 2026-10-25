import React from "react";
import { Logo, Eyebrow, SectionHeading, Callout, Capsule, TerritoryBadge } from "../../components/brand/Logo.jsx";
import { Navbar, Breadcrumbs, Tabs, SiteFooter, Pagination } from "../../components/navigation/Navbar.jsx";
import { Button, LinkAction, IconButton } from "../../components/actions/Button.jsx";
import { Card, CardHeader, GlassPanel, Stat, StatGrid, KeyValue, Badge, Tag, Divider, DataTable } from "../../components/data-display/Card.jsx";
import { ProductCard, LineCard, DoseTable, PhScale, DocLink, AxisTrio } from "../../components/product/ProductCard.jsx";
import { Field, Input, Textarea, Select, Checkbox, SearchField } from "../../components/forms/Field.jsx";
import { Alert, Toast, EmptyState } from "../../components/feedback/Alert.jsx";
import { Icon } from "../../components/foundation/Icon.jsx";
import { ovxAsset, XTexture } from "../../components/brand/Logo.jsx";
import { HeroPrecisao, MarqueeTecnico, ManifestoCentrado, TrilhaDoCiclo, TresEixos, DestaqueORV7, GradeDeLinhas, FaixaDeNumeros, ClubeOrvix, TerritorioMT, VendaDireta, EditorialBlog, FechamentoCTA } from "../../sections/HomeSections.jsx";

const B = "";

const NAV = [
  { label: "Tecnologia de Aplicação", key: "tecnologia" },
  { label: "Linhas", key: "linhas" },
  { label: "Blog", key: "blog" },
  { label: "Sobre", key: "sobre" },
  { label: "Contato", key: "contato" },
];

const PRODUTOS_ORV7 = [
  { name: "ORV7 Drop Power", line: "Adjuvante premium", lineKey: "orv7", claim: "Emulsificante, dispersante e antiespumante em um só produto.", specs: [{ label: "Dose", value: "30 a 200 mL/ha" }, { label: "5 L" }] },
  { name: "ORV7 Aero Guard", line: "Redução de deriva", lineKey: "orv7-aero", claim: "Gota uniforme na aplicação aérea e de precisão.", specs: [{ label: "Aéreo" }, { label: "5 L" }] },
  { name: "ORV Surfact Emulsifier", line: "Surfactante", lineKey: "orv", claim: "Molhamento da cutícula e emulsão mais estável.", specs: [{ label: "Cutícula" }] },
  { name: "ORV Spume Control", line: "Antiespumante", lineKey: "orv", claim: "Redução de espuma na calda agrícola.", specs: [{ label: "Antiespuma" }] },
  { name: "ORV Blitz Max", line: "Bioativação", lineKey: "blitz", claim: "Bioativação de inseticidas com efeito desalojante.", specs: [{ label: "1 L" }] },
];

export function ScreenHome({ go }) {
  return (
    <div>
      <HeroPrecisao base={B} />
      <MarqueeTecnico />
      <ManifestoCentrado />
      <TrilhaDoCiclo />
      <TresEixos />
      <DestaqueORV7 base={B} />
      <div onClick={() => go("linha")} style={{ cursor: "pointer" }}>
        <GradeDeLinhas />
      </div>
      <FaixaDeNumeros />
      <ClubeOrvix />
      <TerritorioMT base={B} />
      <VendaDireta base={B} />
      <div onClick={() => go("blog")} style={{ cursor: "pointer" }}>
        <EditorialBlog />
      </div>
      <FechamentoCTA />
    </div>
  );
}

export function ScreenLinha({ go }) {
  const [eixo, setEixo] = React.useState("Todos");
  return (
    <div>
      <section className="ovx-section ovx-section--sm ovx-section--deep" style={{ position: "relative" }}>
        <span className="ovx-pontos-fundo orvix-dots--dense" aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
        <div className="orvix-container ovx-section__inner" style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
          <Breadcrumbs items={[{ label: "Linhas", href: "#" }, { label: "Linha TEC" }]} />
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--space-10)", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "56ch", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <Eyebrow ornament="chevron">Tecnologia de aplicação</Eyebrow>
              <h1 style={{ font: "var(--type-h1)" }}>Linha TEC</h1>
              <p className="orvix-lead">
                A frente premium da tecnologia de aplicação. Calda estável, gota uniforme e alvo bem coberto, com tecnologia de
                tensoativos e ácidos poliorgânicos multifuncionais.
              </p>
            </div>
            <StatGrid items={[{ label: "Famílias", value: "3" }, { label: "Eixos cobertos", value: "3" }, { label: "Culturas", value: "Todas" }]} />
          </div>
        </div>
      </section>
      <section className="ovx-section">
        <div className="orvix-container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--gap)", marginBottom: "var(--space-6)", flexWrap: "wrap" }}>
            <Tabs variant="pill" tabs={["Todos", "Calda", "Gota", "Alvo"]} value={eixo} onChange={setEixo} />
            <div style={{ maxWidth: 280, flex: "1 1 220px" }}>
              <SearchField placeholder="Buscar produto da linha" size="sm" />
            </div>
          </div>
          <div className="ovx-linegrid">
            {PRODUTOS_ORV7.map((p) => (
              <div key={p.name} onClick={() => go("produto")} style={{ cursor: "pointer" }}>
                <ProductCard {...p} action={<><span className="orvix-mono">Ficha técnica</span><Icon name="arrow-right" size={14} /></>} />
              </div>
            ))}
          </div>
          <div style={{ marginTop: "var(--space-10)" }}>
            <Callout variant="bare">O segredo de caldas fluidas está na adequação química.</Callout>
          </div>
        </div>
      </section>
      <MarqueeTecnico />
    </div>
  );
}

export function ScreenProduto({ go }) {
  const [tab, setTab] = React.useState("Ficha técnica");
  return (
    <div>
      <section className="ovx-section ovx-section--sm">
        <div className="orvix-container">
          <Breadcrumbs items={[{ label: "Linhas", href: "#" }, { label: "Linha TEC", href: "#" }, { label: "ORV7 Drop Power" }]} />
          <div style={{ height: "var(--space-6)" }} />
          <div className="ovx-split" style={{ gap: "var(--space-12)", alignItems: "start" }}>
            <div style={{ position: "relative", borderRadius: "var(--radius-surface)", overflow: "hidden", border: "var(--hairline)", display: "grid", placeItems: "center", background: "var(--surface-sunken)", minHeight: 380 }}>
              <span className="ovx-pontos-fundo orvix-dots--dense" aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />
              <XTexture tone="suave" size={4} style={{ position: "absolute", inset: 0, borderRadius: "var(--radius-panel)" }} />
              <span style={{ position: "absolute", left: 14, top: 14 }}>
                <Badge variant="solid">Herói técnico</Badge>
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <Eyebrow ornament="dot">Adjuvante premium multifuncional</Eyebrow>
              <h1 style={{ font: "var(--type-h1)" }}>ORV7 Drop Power</h1>
              <p className="orvix-lead">
                Adjuvante agrícola de última geração, desenvolvido para otimizar o preparo da calda e a aplicação de defensivos.
                Atua nas três frentes ao mesmo tempo. Indicado para todas as culturas.
              </p>
              <div className="ovx-taglist">
                <Tag>Emulsificante</Tag>
                <Tag>Dispersante</Tag>
                <Tag>Antiespumante</Tag>
              </div>
              <Divider />
              <KeyValue items={[["Dose de referência", "30 a 200 mL/ha"], ["Percentual de calda", "0,05% a 0,3%"], ["Embalagem", "5 L"], ["Registro", "EC MT 002087-7"]]} />
              <Alert tone="warning" title="Dado técnico sujeito a conferência">
                Confirme dose e percentual na ficha técnica vigente antes de publicar.
              </Alert>
              <div style={{ display: "flex", gap: "var(--gap-tight)", flexWrap: "wrap" }}>
                <Button variant="primary" onClick={() => go("contato")}>Solicitar recomendação técnica</Button>
                <Button variant="secondary" icon="download">Ficha técnica</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ovx-section ovx-section--raised">
        <div className="orvix-container">
          <Tabs tabs={["Ficha técnica", "Doses por cultura", "Documentos", "Comparativo"]} value={tab} onChange={setTab} />
          <div style={{ height: "var(--space-6)" }} />
          {tab === "Ficha técnica" ? (
            <AxisTrio
              items={[
                { icon: "flask-conical", title: "Ações de calda", text: "Maior qualidade nas emulsões, melhor dispersão, menos espuma e menos incrustação no circuito.", tags: ["Emulsão", "Dispersão"] },
                { icon: "droplet", title: "Ações de gota", text: "Gotas mais uniformes em qualquer classe e redução de deriva na aplicação.", tags: ["Uniformidade", "Deriva"] },
                { icon: "target", title: "Ações no alvo", text: "Amplia a área de contato, melhora a absorção e reduz a evaporação sobre a folha.", tags: ["Absorção", "Umectância"] },
              ]}
            />
          ) : null}
          {tab === "Doses por cultura" ? (
            <div className="ovx-tablewrap">
              <DoseTable
                rows={[
                  ["Soja", "120 mL/ha", "80 L/ha"],
                  ["Milho", "150 mL/ha", "100 L/ha"],
                  ["Algodão", "180 mL/ha", "120 L/ha"],
                  ["Feijão", "100 mL/ha", "70 L/ha"],
                ]}
              />
            </div>
          ) : null}
          {tab === "Documentos" ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "var(--gap)" }}>
              <DocLink type="PDF" name="Ficha técnica ORV7 Drop Power" size="1,2 MB" />
              <DocLink type="BULA" name="Bula ORV7 Drop Power" size="640 KB" />
              <DocLink type="FISPQ" name="FISPQ ORV7 Drop Power" size="380 KB" />
            </div>
          ) : null}
          {tab === "Comparativo" ? (
            <DataTable
              numeric
              caption="Comparativo contra soluções tradicionais, em ensaio interno"
              columns={["Indicador", "ORV7 Drop Power", "Soluções tradicionais"]}
              rows={[
                ["Uniformidade da gota", "86%", "62%"],
                ["Deriva relativa", "22%", "48%"],
                ["Área de contato foliar", "+38%", "referência"],
              ]}
            />
          ) : null}
        </div>
      </section>
      <section className="ovx-section">
        <div className="orvix-container">
          <SectionHeading eyebrow="Química da calda" title="pH corrigido antes de qualquer ativo entrar no tanque." />
          <div style={{ height: "var(--space-5)", }} />
          <GlassPanel density="thin" compact>
            <PhScale value={4.2} />
          </GlassPanel>
        </div>
      </section>
    </div>
  );
}

export function ScreenBlog({ go }) {
  const [cat, setCat] = React.useState("Todas");
  return (
    <div>
      <section className="ovx-section ovx-section--sm ovx-section--deep">
        <div className="orvix-container" style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          <Eyebrow ornament="rule">Blog técnico</Eyebrow>
          <h1 style={{ font: "var(--type-h1)", maxWidth: "40ch" }}>Conhecimento de manejo, publicado como engenharia de campo.</h1>
          <div style={{ maxWidth: 380 }}>
            <SearchField placeholder="Buscar artigo" />
          </div>
        </div>
      </section>
      <section className="ovx-section">
        <div className="orvix-container">
          <Tabs variant="pill" tabs={["Todas", "Tecnologia de Aplicação", "Nutrição", "Manejo", "Fisiologia"]} value={cat} onChange={setCat} />
          <div style={{ height: "var(--space-6)" }} />
          <EditorialBlog />
          <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--space-10)" }}>
            <Pagination page={1} pages={7} />
          </div>
        </div>
      </section>
    </div>
  );
}

export function ScreenContato() {
  const [sent, setSent] = React.useState(false);
  return (
    <section className="ovx-section" style={{ position: "relative" }}>
      <span className="ovx-pontos-fundo orvix-dots--dense" aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.35 }} />
      <div className="orvix-container ovx-section__inner">
        <div className="ovx-split" style={{ alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <Eyebrow ornament="rule">Ao lado do produtor</Eyebrow>
            <h1 style={{ font: "var(--type-h2)" }}>Fale com seu consultor ORVIX para a recomendação adequada à sua operação.</h1>
            <p className="orvix-lead">
              Cada operação tem suas condições: temperatura, volume de calda, complexidade do circuito e pressão de daninhas
              resistentes. A recomendação é técnica e personalizada.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", font: "var(--type-body-sm)", color: "var(--text-muted)" }}>
              <span style={{ display: "flex", gap: 9, alignItems: "center" }}><Icon name="mail" size={15} />sac@orvix.com.br</span>
              <span style={{ display: "flex", gap: 9, alignItems: "center" }}><Icon name="phone" size={15} />+55 (66) 3545-1804</span>
              <span style={{ display: "flex", gap: 9, alignItems: "center" }}><Icon name="map-pin" size={15} />R. Genésio Roberto Baggio, 1111, Sorriso, MT</span>
            </div>
            <TerritoryBadge base={B} />
          </div>
          <GlassPanel surface>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                <Alert tone="success" title="Solicitação registrada">O consultor ORVIX da sua região entra em contato.</Alert>
                <Button variant="secondary" onClick={() => setSent(false)}>Enviar outra solicitação</Button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                style={{ display: "flex", flexDirection: "column", gap: "var(--gap)" }}
              >
                <div className="ovx-formgrid">
                  <Field label="Nome" htmlFor="n"><Input id="n" placeholder="Nome completo" /></Field>
                  <Field label="Telefone" htmlFor="t"><Input id="t" mono placeholder="(66) 90000-0000" /></Field>
                  <Field label="Email" htmlFor="e"><Input id="e" type="email" placeholder="voce@fazenda.com.br" /></Field>
                  <Field label="Município" htmlFor="m"><Input id="m" iconLeft="map-pin" placeholder="Sorriso" /></Field>
                  <Field label="Cultura" htmlFor="c"><Select id="c" placeholder="Selecione" options={["Soja", "Milho", "Algodão", "Feijão", "Outra"]} /></Field>
                  <Field label="Volume de calda" htmlFor="v"><Input id="v" mono unit="L/ha" placeholder="80" /></Field>
                </div>
                <Field label="Mensagem" htmlFor="msg"><Textarea id="msg" rows={3} placeholder="Descreva a operação e o objetivo do manejo" /></Field>
                <Checkbox label="Aceito receber conteúdo técnico da ORVIX" description="Consentimento de marketing, desmarcado por padrão" />
                <Button variant="primary" block>Falar com um consultor</Button>
              </form>
            )}
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}

export function ScreenTecnologia() {
  return (
    <div>
      <section className="ovx-section ovx-section--deep" style={{ position: "relative" }}>
        <span className="ovx-pontos-fundo orvix-dots--dense" aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.55 }} />
        <div className="orvix-container ovx-section__inner" style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", maxWidth: 760 }}>
          <Eyebrow ornament="rule">Página-pilar</Eyebrow>
          <h1 style={{ font: "var(--type-display)" }}>Tecnologia de aplicação</h1>
          <p className="orvix-lead">
            A tecnologia de aplicação integra os produtos e suas formulações, os adjuvantes, o processo de pulverização, o alvo e o
            ambiente. É esse conjunto que define quanto do que entra no tanque chega de fato à planta.
          </p>
        </div>
      </section>
      <TrilhaDoCiclo />
      <section className="ovx-section">
        <div className="orvix-container">
          <div className="ovx-prose">
            <h2>Preparo da calda</h2>
            <p>
              A adequação química da mistura define a fluidez. Cátions livres, dureza da água e pH fora de faixa reduzem a
              disponibilidade dos ativos e aumentam a incrustação no circuito hidráulico.
            </p>
            <ul>
              <li>Corrija o pH antes de adicionar o primeiro ativo.</li>
              <li>Use antiespumante quando a calda gerar espuma no enchimento.</li>
              <li>Respeite a ordem de diluição indicada em cada rótulo.</li>
            </ul>
            <blockquote>Do preparo da calda ao cuidado com o equipamento.</blockquote>
            <h2>Formação e uniformidade da gota</h2>
            <p>
              A tensão superficial governa o tamanho e a estabilidade da gota. Gotas uniformes reduzem deriva e ampliam a cobertura
              do alvo sem aumentar o volume aplicado.
            </p>
          </div>
        </div>
      </section>
      <FechamentoCTA />
    </div>
  );
}

export function SiteApp() {
  const [screen, setScreen] = React.useState("home");
  const go = (s) => {
    setScreen(s);
    window.scrollTo(0, 0);
  };
  const current = { home: "", linhas: "Linhas", linha: "Linhas", produto: "Linhas", blog: "Blog", contato: "Contato", tecnologia: "Tecnologia de Aplicação" }[screen];
  return (
    <div>
      <Navbar
        logo={
          <span onClick={() => go("home")} style={{ cursor: "pointer", display: "flex" }}>
            <Logo base={B} variant="principal-sem-assinatura" size="md" />
          </span>
        }
        current={current}
        links={NAV.map((n) => ({ label: n.label, href: "#" }))}
        actions={
          <>
            <IconButton icon="search" label="Buscar" variant="bare" />
            <Button variant="primary" size="sm" onClick={() => go("contato")}>Falar com consultor</Button>
          </>
        }
      />
      <div
        onClickCapture={(e) => {
          const a = e.target.closest && e.target.closest("a.ovx-navlink");
          if (!a) return;
          e.preventDefault();
          const key = { "Tecnologia de Aplicação": "tecnologia", Linhas: "linha", Blog: "blog", Sobre: "home", Contato: "contato" }[a.textContent.trim()];
          if (key) go(key);
        }}
      >
        {screen === "home" ? <ScreenHome go={go} /> : null}
        {screen === "linha" ? <ScreenLinha go={go} /> : null}
        {screen === "produto" ? <ScreenProduto go={go} /> : null}
        {screen === "blog" ? <ScreenBlog go={go} /> : null}
        {screen === "contato" ? <ScreenContato /> : null}
        {screen === "tecnologia" ? <ScreenTecnologia /> : null}
      </div>
      <SiteFooter
        brand={
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <Logo base={B} variant="principal-sem-assinatura" size="md" />
            <p style={{ font: "var(--type-body-sm)", color: "var(--text-muted)", maxWidth: "34ch" }}>
              Indústria genuinamente mato-grossense de tecnologia de aplicação e nutrição de precisão.
            </p>
            <Capsule icon="map-pin">Sorriso, MT</Capsule>
          </div>
        }
        columns={[
          { title: "Portfólio", links: [{ label: "Linha TEC" }, { label: "Linha ORV Clear" }, { label: "Linha ORVALE" }, { label: "Linha VIX" }] },
          { title: "Conteúdo", links: [{ label: "Tecnologia de Aplicação" }, { label: "Blog técnico" }, { label: "Materiais de apoio" }] },
          { title: "Institucional", links: [{ label: "Sobre a ORVIX" }, { label: "Clube ORVIX" }, { label: "Contato" }] },
        ]}
      />
    </div>
  );
}
