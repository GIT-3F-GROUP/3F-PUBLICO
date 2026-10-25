import React from "react";
import { Logo, Eyebrow, TargetMark, Capsule } from "../../components/brand/Logo.jsx";
import { Navbar, SidebarNav, Tabs, Breadcrumbs } from "../../components/navigation/Navbar.jsx";
import { Button, IconButton, LinkAction } from "../../components/actions/Button.jsx";
import { Card, CardHeader, GlassPanel, Stat, StatGrid, DataTable, KeyValue, Badge, Tag, Meter, ProgressRing, Divider } from "../../components/data-display/Card.jsx";
import { Field, Input, Select, SearchField, Switch, Checkbox } from "../../components/forms/Field.jsx";
import { Alert, Toast, EmptyState, InlineStatus, Skeleton } from "../../components/feedback/Alert.jsx";
import { DocLink, SpecChip, PhScale } from "../../components/product/ProductCard.jsx";
import { Icon } from "../../components/foundation/Icon.jsx";

const B = "";

const CATALOGO = [
  ["ORV7 Drop Power", "TEC · Adjuvantes ORV7", "30 a 200 mL/ha", "5 L", "Publicado"],
  ["ORV7 Aero Guard", "TEC · Adjuvantes ORV7", "50 a 150 mL/ha", "5 L", "Publicado"],
  ["ORV Surfact Emulsifier", "TEC · Adjuvantes ORV", "0,05% v/v", "5 L", "Publicado"],
  ["ORV Spume Control", "TEC · Adjuvantes ORV", "10 a 30 mL/100 L", "1 L", "Verificar"],
  ["SOLV pH Menos", "TEC · SOLV", "conforme análise", "5 L", "Publicado"],
  ["SOLV pH Mais", "TEC · SOLV", "conforme análise", "5 L", "Publicado"],
  ["ORVClear Limpa Tanque", "ORV Clear", "100 mL/100 L", "5 L", "Publicado"],
  ["VIX HS K32", "VIX · HS", "1,5 a 3 L/ha", "20 L", "Verificar"],
];

export function PainelLogin({ onEnter }) {
  return (
    /* Tela dividida no ângulo da perna do X (nunca em linha reta): .ovx-login */
    <div className="ovx-login">
      <div className="ovx-login__visual" aria-hidden="true">
        <span className="ovx-login__dots orvix-dots--dense" />
      </div>
      <span className="ovx-login__edge" aria-hidden="true" />
      <div className="ovx-login__brand">
        <Logo base={B} variant="clara" size="2xl" className="ovx-login__logo" />
        <p className="orvix-callout" style={{ maxWidth: "26ch" }}>Do preparo da calda ao cuidado com o equipamento.</p>
        <Capsule icon="map-pin">Sorriso, MT</Capsule>
      </div>
      <div className="ovx-login__form">
        <GlassPanel surface style={{ width: "100%", maxWidth: 380 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <Eyebrow ornament="dot">Área do representante</Eyebrow>
              <h1 style={{ font: "var(--type-h3)" }}>Acesse o painel técnico</h1>
              <p style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>Acesso restrito a representantes e distribuidores ORVIX.</p>
            </div>
            <Button variant="inverse" block icon="chrome" onClick={onEnter}>Entrar com Google</Button>
            <Divider label="ou" />
            <Field label="Email corporativo" htmlFor="lg"><Input id="lg" type="email" placeholder="voce@orvix.com.br" size="lg" /></Field>
            <Button variant="primary" block onClick={onEnter}>Entrar</Button>
            <p style={{ font: "var(--type-caption)", color: "var(--text-subtle)" }}>
              Ao entrar você concorda com os Termos de Uso e a Política de Privacidade da ORVIX.
            </p>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}

export function PainelVisaoGeral() {
  return (
    <div className="ovx-painel-pagina" style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--gap)", flexWrap: "wrap" }}>
        <div>
          <Eyebrow ornament="dot">Painel</Eyebrow>
          <h1 style={{ font: "var(--type-h3)", marginTop: "var(--space-2)" }}>Visão geral</h1>
        </div>
        <InlineStatus>Dados técnicos sincronizados com a base técnica</InlineStatus>
      </div>
      <StatGrid
        items={[
          { label: "Produtos no catálogo", value: "41" },
          { label: "Linhas ativas", value: "4" },
          { label: "Documentos técnicos", value: "86" },
          { label: "Fichas a conferir", value: "4", accent: true },
        ]}
      />
      <div className="ovx-painel-grid ovx-painel-grid--destaque">
        <Card>
          <CardHeader title="Cobertura de ficha técnica por linha" sub="Percentual de produtos com editorial publicado" />
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", marginTop: "var(--space-2)" }}>
            <Meter label="Linha TEC" value={100} hint="editorial completo" />
            <Meter label="Linha ORV Clear" value={100} hint="editorial completo" />
            <Meter label="Linha ORVALE" value={62} hint="em revisão" tone="warning" />
            <Meter label="Linha VIX" value={45} hint="em revisão" tone="warning" />
          </div>
        </Card>
        <Card variant="accent" dots>
          <CardHeader title="Alvo do trimestre" />
          <div style={{ display: "grid", placeItems: "center", padding: "var(--space-4) 0" }}>
            <TargetMark forma="redondo" size={112} />
          </div>
          <p style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>
            Publicar o editorial das 4 linhas antes do início da safra.
          </p>
        </Card>
      </div>
      <Alert tone="warning" title="Quatro fichas dependem de conferência com o rótulo vigente">
        Garantias e nomes comerciais dessas fichas seguem marcados como pendentes.
      </Alert>
    </div>
  );
}

export function PainelCatalogo() {
  const [q, setQ] = React.useState("");
  const rows = CATALOGO.filter((r) => r[0].toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="ovx-painel-pagina" style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
      <Breadcrumbs items={[{ label: "Painel", href: "#" }, { label: "Catálogo técnico" }]} />
      <div className="ovx-painel-head">
        <h1 style={{ font: "var(--type-h3)" }}>Catálogo técnico</h1>
        <div className="ovx-painel-toolbar">
          <div className="ovx-painel-toolbar__busca">
            <SearchField placeholder="Buscar produto" size="sm" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <Select size="sm" placeholder="Todas as linhas" options={["TEC", "ORV Clear", "ORVALE", "VIX"]} />
          <Button variant="secondary" size="sm" icon="download">Exportar</Button>
        </div>
      </div>
      {rows.length ? (
        <DataTable
          zebra
          className="ovx-painel-tabela"
          columns={["Produto", "Linha", "Dose de referência", "Embalagem", "Status"]}
          rows={rows.map((r) => [
            <span style={{ color: "var(--text-strong)" }}>{r[0]}</span>,
            r[1],
            <span className="orvix-mono">{r[2]}</span>,
            <SpecChip label={r[3]} />,
            <Badge tone={r[4] === "Publicado" ? "success" : "warning"} dot>{r[4]}</Badge>,
          ])}
        />
      ) : (
        <EmptyState icon="search-x" title="Nenhum produto encontrado">Ajuste o termo de busca ou o filtro de linha.</EmptyState>
      )}
    </div>
  );
}

export function PainelBiblioteca() {
  const [tab, setTab] = React.useState("Fichas técnicas");
  const DOCS = {
    "Fichas técnicas": [["PDF", "Ficha técnica ORV7 Drop Power", "1,2 MB"], ["PDF", "Ficha técnica ORV7 Aero Guard", "1,1 MB"], ["PDF", "Ficha técnica ORV Surfact", "980 KB"], ["PDF", "Ficha técnica SOLV pH Menos", "870 KB"]],
    Bulas: [["BULA", "Bula ORV Blitz Max", "640 KB"], ["BULA", "Bula ORV7 Aero Guard", "520 KB"]],
    FISPQ: [["FISPQ", "FISPQ ORV7 Drop Power", "380 KB"], ["FISPQ", "FISPQ ORVClear Limpa Tanque", "410 KB"], ["FISPQ", "FISPQ SOLV pH Mais", "360 KB"]],
    "Material de apoio": [["PPT", "Apresentação institucional ORVIX", "8,4 MB"], ["PDF", "Boas práticas de aplicação", "2,6 MB"]],
  };
  return (
    <div className="ovx-painel-pagina" style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
      <Breadcrumbs items={[{ label: "Painel", href: "#" }, { label: "Biblioteca técnica" }]} />
      <h1 style={{ font: "var(--type-h3)" }}>Biblioteca técnica</h1>
      <Tabs tabs={Object.keys(DOCS)} value={tab} onChange={setTab} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "var(--gap)" }}>
        {DOCS[tab].map((d) => (
          <DocLink key={d[1]} type={d[0]} name={d[1]} size={d[2]} />
        ))}
      </div>
      <Alert tone="info">Todo download de material técnico é registrado para auditoria de acesso.</Alert>
    </div>
  );
}

export function PainelCalculadora() {
  const [vol, setVol] = React.useState(80);
  const [ha, setHa] = React.useState(120);
  const [pct, setPct] = React.useState(0.15);
  const dose = Math.round(vol * (pct / 100) * 1000);
  const total = ((dose * ha) / 1000).toFixed(1);
  return (
    <div className="ovx-painel-pagina" style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
      <Breadcrumbs items={[{ label: "Painel", href: "#" }, { label: "Calculadora de calda" }]} />
      <h1 style={{ font: "var(--type-h3)" }}>Calculadora de calda</h1>
      <div className="ovx-painel-grid">
        <Card padding="lg">
          <div className="ovx-formgrid">
            <Field label="Volume de calda" htmlFor="v1" hint="Litros por hectare">
              <Input id="v1" mono unit="L/ha" value={vol} onChange={(e) => setVol(+e.target.value || 0)} />
            </Field>
            <Field label="Área a aplicar" htmlFor="v2" hint="Hectares da operação">
              <Input id="v2" mono unit="ha" value={ha} onChange={(e) => setHa(+e.target.value || 0)} />
            </Field>
            <Field label="Percentual de calda" htmlFor="v3" hint="ORV7: 0,05% a 0,3%">
              <Input id="v3" mono unit="%" value={pct} onChange={(e) => setPct(+e.target.value || 0)} />
            </Field>
            <Field label="Produto" htmlFor="v4"><Select id="v4" options={["ORV7 Drop Power", "ORV7 Aero Guard", "ORV Surfact"]} /></Field>
          </div>
          <div style={{ marginTop: "var(--space-5)" }}>
            <PhScale value={4.2} />
          </div>
        </Card>
        <Card padding="lg" variant="accent">
          <CardHeader title="Resultado" sub="Cálculo de referência, sempre confirmar com o consultor" />
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", marginTop: "var(--space-3)" }}>
            <Stat size="lg" label="Dose por hectare" value={dose} unit="mL/ha" accent />
            <Stat size="lg" label="Volume total de produto" value={total} unit="L" />
            <KeyValue items={[["Volume total de calda", `${vol * ha} L`], ["Embalagens de 5 L", Math.ceil(total / 5)], ["Faixa recomendada", "30 a 200 mL/ha"]]} />
            {dose > 200 || dose < 30 ? (
              <Alert tone="danger" title="Dose fora da faixa">Ajuste o percentual ou o volume de calda.</Alert>
            ) : (
              <Alert tone="success" title="Dose dentro da faixa de referência">Confirme a recomendação com o consultor da região.</Alert>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

export function PainelPerfil() {
  return (
    <div className="ovx-painel-pagina" style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", maxWidth: 620 }}>
      <Breadcrumbs items={[{ label: "Painel", href: "#" }, { label: "Perfil" }]} />
      <h1 style={{ font: "var(--type-h3)" }}>Perfil do representante</h1>
      <Card padding="lg">
        <div className="ovx-formgrid">
          <Field label="Nome" htmlFor="p1"><Input id="p1" defaultValue="Nome Sobrenome" /></Field>
          <Field label="Email" htmlFor="p2"><Input id="p2" defaultValue="nome@orvix.com.br" /></Field>
          <Field label="Região" htmlFor="p3"><Select id="p3" options={["Sorriso", "Sinop", "Lucas do Rio Verde", "Primavera do Leste"]} /></Field>
          <Field label="Telefone" htmlFor="p4"><Input id="p4" mono defaultValue="(66) 0000-0000" /></Field>
        </div>
        <Divider />
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <Switch label="Receber alerta de ficha pendente de conferência" defaultChecked />
          <Switch label="Receber resumo semanal do catálogo" />
          <Checkbox label="Permitir auditoria de downloads no meu nome" defaultChecked />
        </div>
        <div style={{ display: "flex", gap: "var(--gap-inline)", marginTop: "var(--space-5)" }}>
          <Button variant="primary">Salvar alterações</Button>
          <Button variant="ghost">Cancelar</Button>
        </div>
      </Card>
    </div>
  );
}

export function PainelApp() {
  const [logged, setLogged] = React.useState(false);
  const [page, setPage] = React.useState("Visão geral");
  if (!logged) return <PainelLogin onEnter={() => setLogged(true)} />;
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg-deep)" }}>
      <Navbar
        solid
        compact
        logo={<Logo base={B} variant="principal-sem-assinatura" size="md" />}
        links={[]}
        actions={
          <>
            <Capsule icon="shield-check">Representante</Capsule>
            <IconButton icon="bell" label="Notificações" variant="bare" />
            <IconButton icon="log-out" label="Sair" variant="bare" onClick={() => setLogged(false)} />
          </>
        }
      />
      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        <div
          onClickCapture={(e) => {
            const a = e.target.closest && e.target.closest(".ovx-sideitem");
            if (!a) return;
            e.preventDefault();
            const t = a.textContent.replace(/\d+$/, "").trim();
            if (t === "Sair") setLogged(false);
            else setPage(t);
          }}
        >
          <SidebarNav
            current={page}
            groups={[
              { label: "Painel", items: [{ label: "Visão geral", icon: "layout-dashboard" }, { label: "Catálogo técnico", icon: "package", count: 41 }, { label: "Biblioteca técnica", icon: "file-text", count: 86 }, { label: "Calculadora de calda", icon: "flask-conical" }] },
              { label: "Conta", items: [{ label: "Perfil", icon: "user" }, { label: "Sair", icon: "log-out" }] },
            ]}
            footer={<Capsule icon="activity">Base técnica conectada</Capsule>}
          />
        </div>
        <main style={{ flex: 1, padding: 0, minWidth: 0, overflow: "auto" }}>
          {page === "Visão geral" ? <PainelVisaoGeral /> : null}
          {page === "Catálogo técnico" ? <PainelCatalogo /> : null}
          {page === "Biblioteca técnica" ? <PainelBiblioteca /> : null}
          {page === "Calculadora de calda" ? <PainelCalculadora /> : null}
          {page === "Perfil" ? <PainelPerfil /> : null}
        </main>
      </div>
    </div>
  );
}
