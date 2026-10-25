import React from "react";
import { Icon } from "../components/foundation/Icon.jsx";
import { Logo, Eyebrow, SectionHeading, Callout, TargetMark, TerritoryBadge, Hashtag, Capsule, XMark } from "../components/brand/Logo.jsx";
import { Button, LinkAction } from "../components/actions/Button.jsx";
import { Card, Stat, Badge, GlassPanel } from "../components/data-display/Card.jsx";
import { LineCard, AxisTrio, ProductCard } from "../components/product/ProductCard.jsx";
import { ovxAsset, XTexture } from "../components/brand/Logo.jsx";
import { StepFlow } from "../components/navigation/Navbar.jsx";

/* Padrões de seção da home da ORVIX. Cada padrão é um estilo de abertura ou de
   bloco, todos em tema escuro, com movimento de precisão e vidro. */

/* Divisão diagonal: duas metades separadas por uma linha no ângulo da perna do X (token --x-leg-angle). */
export function SplitDiagonal({ left, right, paneA, paneB, at, edge = "hairline", className = "" }) {
  return (
    <div className={["ovx-split", className].filter(Boolean).join(" ")} style={at ? { "--split-at": at } : undefined}>
      <div className="ovx-split__pane ovx-split__pane--a" aria-hidden="true">{paneA || <div style={{ position: "absolute", inset: 0, background: "var(--bg-deep)" }} />}</div>
      <div className="ovx-split__pane ovx-split__pane--b" aria-hidden="true">{paneB || <XTexture tone="suave" size={4} fade="x" style={{ position: "absolute", inset: 0 }} />}</div>
      {edge !== "none" ? <span className={["ovx-split__edge", edge === "verde" && "ovx-split__edge--verde"].filter(Boolean).join(" ")} aria-hidden="true" /> : null}
      <div className="ovx-split__a">{left}</div>
      <div className="ovx-split__b">{right}</div>
    </div>
  );
}

export function HeroPrecisao({ base = "" }) {
  return (
    <section className="ovx-hero ovx-hero--pontilhado" style={{ minHeight: 460 }}>
      {/* Pontilhado adensado da marca, parado, entrando na inclinação da perna do X. */}
      <div className="ovx-hero__bg" aria-hidden="true">
        <span className="ovx-hero__dots orvix-dots--dense" />
        <span className="ovx-hero__edge" />
      </div>
      <div className="orvix-container ovx-hero__content">
        <Eyebrow ornament="rule">Indústria genuinamente mato-grossense</Eyebrow>
        <h1 className="ovx-hero__title">Elo de força com a produtividade.</h1>
        <p className="orvix-lead">
          Soluções que acompanham o ciclo completo da aplicação, do preparo da calda ao cuidado com o equipamento.
        </p>
        <div className="ovx-hero__cta">
          <Button variant="primary" icon="phone">Fale com um consultor ORVIX</Button>
          <Button variant="secondary" iconRight="arrow-right">Conheça a linha ORV7</Button>
        </div>
      </div>
      <div className="ovx-hero__meta">
        <Capsule icon="map-pin">Sorriso, MT</Capsule>
      </div>
    </section>
  );
}

export function ManifestoCentrado() {
  return (
    <section className="ovx-section ovx-section--deep">
      <span className="ovx-section__fx orvix-dots" style={{ opacity: 0.35 }} />
      <div className="orvix-container ovx-section__inner">
        <div className="ovx-manifesto">
          <Eyebrow ornament="dot">Tecnologia de aplicação</Eyebrow>
          <h2 className="ovx-manifesto__title">O resultado da lavoura começa muito antes do alvo.</h2>
          <p className="ovx-manifesto__body">
            A ORVIX entende a aplicação como um ciclo, não como um evento isolado. Cada decisão conta: a qualidade da calda, a
            uniformidade da gota, a chegada ao alvo e a integridade do equipamento depois do uso.
          </p>
          <Callout source="Tese ORVIX">O segredo não está só na dose. Está na fisiologia.</Callout>
        </div>
      </div>
    </section>
  );
}

const CICLO = [
  { name: "Preparo da calda", desc: "Emulsão, dispersão e fluidez" },
  { name: "Ajuste de pH", desc: "Adequação química da mistura" },
  { name: "Formação da gota", desc: "Tensão superficial e uniformidade" },
  { name: "Deposição no alvo", desc: "Cobertura, absorção e umectância" },
  { name: "Cuidado do equipamento", desc: "Descontaminação do circuito" },
];

export function TrilhaDoCiclo() {
  return (
    <section className="ovx-section">
      <div className="orvix-container">
        <SectionHeading split eyebrow="Ciclo completo" title="Do preparo da calda ao cuidado com o equipamento." lead="Cada etapa aponta para a linha de produto correspondente." />
        <div style={{ height: "var(--space-8)" }} />
        <div className="ovx-cycle">
          {CICLO.map((c, i) => (
            <div className="ovx-cycle__step" key={c.name}>
              <span className="ovx-cycle__idx">{`0${i + 1}`}</span>
              <span className="ovx-cycle__name">{c.name}</span>
              <span className="ovx-cycle__desc">{c.desc}</span>
              <span className="ovx-cycle__flow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TresEixos() {
  return (
    <section className="ovx-section ovx-section--raised">
      <div className="orvix-container">
        <SectionHeading eyebrow="Do preparo da calda ao alvo" title="Três frentes de ação, um único objetivo: levar mais produto ao alvo." />
        <div style={{ height: "var(--space-8)" }} />
        <AxisTrio
          items={[
            { icon: "flask-conical", title: "Calda mais estável, do tanque ao bico.", text: "Emulsões de maior qualidade, melhor dispersão dos ativos e menos espuma na mistura.", tags: ["Emulsão", "Dispersão", "Antiespuma"] },
            { icon: "droplet", title: "Gota uniforme, deriva sob controle.", text: "Gotas uniformes em qualquer classe, com menos desperdício de produto fora do alvo.", tags: ["Uniformidade", "Redução de deriva"] },
            { icon: "target", title: "Mais contato, mais absorção, menos perda.", text: "Maior área de contato sobre a folha, absorção facilitada e ação umectante.", tags: ["Área de contato", "Absorção"] },
          ]}
        />
      </div>
    </section>
  );
}

export function DestaqueORV7({ base = "" }) {
  return (
    <section className="ovx-section">
      <div className="orvix-container">
        <div className="ovx-flagship">
          <span className="ovx-flagship__ghost">7</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", position: "relative" }}>
            <Eyebrow ornament="chevron">Linha premium de adjuvantes</Eyebrow>
            <h2 style={{ font: "var(--type-h2)" }}>ORV7 Drop Power. O adjuvante que cuida da calda, da gota e do alvo.</h2>
            <p style={{ font: "var(--type-body)", color: "var(--text-muted)", maxWidth: "46ch" }}>
              Reúne em um só produto as funções de emulsificante, dispersante e antiespumante. Indicado para todas as culturas.
            </p>
            <div style={{ display: "flex", gap: "var(--space-8)", flexWrap: "wrap" }}>
              <Stat label="Dose" value="30 a 200" unit="mL/ha" accent />
              <Stat label="Embalagem" value="5" unit="L" />
              <Stat label="Culturas" value="Todas" />
            </div>
            <div style={{ display: "flex", gap: "var(--gap-tight)", marginTop: "var(--space-2)" }}>
              <Button variant="primary">Solicitar recomendação técnica</Button>
              <Button variant="secondary" iconRight="arrow-right">Ver ficha</Button>
            </div>
          </div>
          <div style={{ position: "relative", display: "grid", placeItems: "center" }}>
            <span className="ovx-pontos-fundo orvix-dots--dense" aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.55 }} />
            <XTexture tone="suave" size={4} style={{ position: "absolute", inset: 0, borderRadius: "var(--radius-panel)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

const LINHAS = [
  { name: "Linha TEC", lineKey: "tec", badge: "Tecnologia de aplicação", promise: "Adjuvantes ORV7, adjuvantes ORV e SOLV pH: calda estável, gota uniforme e alvo bem coberto." },
  { name: "Linha ORV Clear", lineKey: "orvclear", badge: "Limpeza de equipamento", promise: "Descontaminação do circuito e cuidado com o equipamento depois do uso." },
  { name: "Linha ORVALE", lineKey: "orvale", badge: "Óleos agrícolas", promise: "Óleos citrus, mineral e vegetal: penetração, aderência e proteção da gota." },
  { name: "Linha VIX", lineKey: "vix", badge: "Fertilizantes", promise: "VIX HS, VIX SS e VIX Classe A: nutrição de precisão por estádio fenológico." },
];

export function GradeDeLinhas() {
  return (
    <section className="ovx-section">
      <div className="orvix-container">
        <SectionHeading split eyebrow="Portfólio ORVIX" title="Um portfólio completo para cada etapa da aplicação e da nutrição." lead="Todas as linhas desenvolvidas e comercializadas pela indústria mato-grossense." />
        <div style={{ height: "var(--space-8)" }} />
        <div className="ovx-linegrid">
          {LINHAS.map((l) => (
            <LineCard key={l.name} {...l} action={<LinkAction href="#">Ver linha</LinkAction>} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaixaDeNumeros() {
  return (
    <section className="ovx-section ovx-section--sm">
      <div className="orvix-container">
        <div className="ovx-figures">
          {[
            { label: "Linhas de produto", value: "4", note: "TEC, ORV Clear, ORVALE e VIX" },
            { label: "Frentes de ação", value: "3", note: "Calda, gota e alvo" },
            { label: "Municípios com presença", value: "21", note: "Mato Grosso", accent: true },
            { label: "Origem", value: "Sorriso", unit: "MT", note: "Indústria mato-grossense" },
          ].map((d, i) => (
            <div className="ovx-figures__item" key={i}>
              <Stat size="lg" label={d.label} value={d.value} unit={d.unit} accent={!!d.accent} />
              {d.note ? <span className="ovx-figures__note">{d.note}</span> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const VOCAB = ["Calda", "Deriva", "Tensão superficial", "Cutícula", "Umectância", "Adjuvação", "Fenologia", "Fotoassimilados", "Circuito hidráulico", "Contaminação cruzada", "Ponto de orvalho", "Qualidade de água"];

export function MarqueeTecnico() {
  return (
    <div className="ovx-marquee">
      <div className="ovx-marquee__track">
        {[...VOCAB, ...VOCAB].map((v, i) => (
          <span className="ovx-marquee__item" key={i}>
            {v}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TerritorioMT({ base = "" }) {
  /* Sem mapa desenhado: o mapa de presença é uma instrução em texto (README, "Mapas com ponto de referência"). */
  return (
    <section className="ovx-section">
      <div className="orvix-container">
        <div className="ovx-territory">
          <div className="ovx-territory__texto">
            <Eyebrow ornament="rule">Origem e propósito</Eyebrow>
            <h2 style={{ font: "var(--type-h3)" }}>Indústria genuinamente mato-grossense, calibrada para o seu campo.</h2>
            <p style={{ font: "var(--type-body-sm)", color: "var(--text-muted)", maxWidth: "62ch" }}>
              Da matriz em Sorriso, a ORVIX atende produtores em municípios de todas as regiões produtivas do estado. Altas
              temperaturas, volumes de calda reduzidos e circuitos de alta complexidade pedem tecnologia de aplicação feita aqui.
            </p>
            <TerritoryBadge base={base} />
          </div>
          <XMark size={120} className="ovx-territory__x" />
        </div>
      </div>
    </section>
  );
}

export function ClubeOrvix() {
  return (
    <section className="ovx-section ovx-section--raised">
      <div className="orvix-container">
        <SectionHeading eyebrow="Programa de relacionamento" title="Cada compra ORVIX vira ponto. Cada ponto vira mais para a sua operação." />
        <div style={{ height: "var(--space-6)" }} />
        <GlassPanel density="thin" surface>
          <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-4)", marginBottom: "var(--space-8)" }}>
            <span style={{ font: "var(--type-h2)", color: "var(--text-accent)" }}>Pontos Orbia</span>
            <span style={{ font: "var(--type-lead)", color: "var(--text-muted)" }}>em todas as compras ORVIX</span>
          </div>
          <StepFlow
            active={1}
            steps={[
              { title: "Acesse sua conta na Orbia", desc: "Site orbia.ag ou aplicativo" },
              { title: "Cadastre sua nota fiscal", desc: "PDF ou XML, até 90 dias" },
              { title: "Aguarde a validação", desc: "Em até 30 dias, crédito automático" },
              { title: "Resgate seus pontos", desc: "Mais de 25 mil produtos e serviços" },
            ]}
          />
        </GlassPanel>
      </div>
    </section>
  );
}

const POSTS = [
  { cat: "Tecnologia de aplicação", title: "Limpeza de pulverizadores: o risco da contaminação cruzada", meta: "8 min de leitura" },
  { cat: "Fisiologia", title: "Cutícula, tensão superficial e o que decide a absorção foliar", meta: "6 min de leitura" },
  { cat: "Manejo", title: "Volume de calda reduzido em Mato Grosso: o que ajustar primeiro", meta: "11 min de leitura" },
];

export function EditorialBlog() {
  return (
    <section className="ovx-section">
      <div className="orvix-container">
        <SectionHeading split eyebrow="Blog técnico" title="Conhecimento de manejo, publicado como engenharia de campo." lead="Tecnologia de aplicação, nutrição, manejo e fisiologia vegetal." />
        <div style={{ height: "var(--space-8)" }} />
        <div className="ovx-postgrid">
          {POSTS.map((p, i) => (
            <a className="ovx-post" href="#" key={p.title}>
              <div className="ovx-post__cover">
                <span className="ovx-pontos-fundo orvix-dots--dense" aria-hidden="true" style={{ height: "100%" }} />
              </div>
              <div className="ovx-post__body">
                <span className="ovx-post__cat">{p.cat}</span>
                <h3 className="ovx-post__title">{p.title}</h3>
                <span className="ovx-post__meta">{p.meta}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FechamentoCTA() {
  return (
    <section className="ovx-section">
      <div className="orvix-container">
        <div className="ovx-closing">
          <div style={{ display: "grid", placeItems: "center", marginBottom: "var(--space-6)" }}>
            <Logo variant="principal" size="sm" tone="auto" className="ovx-closing__logo" />
          </div>
          <Eyebrow ornament="dot">Assinatura ORVIX</Eyebrow>
          <h2 className="ovx-closing__title" style={{ marginTop: "var(--space-3)" }}>O sucesso do agricultor é o sucesso da ORVIX.</h2>
          <p className="orvix-lead" style={{ maxWidth: "56ch", margin: "var(--space-4) auto 0" }}>
            Trabalhamos juntos em prol da produtividade e da rentabilidade, do preparo da calda à colheita.
          </p>
          <div style={{ display: "flex", gap: "var(--gap-tight)", justifyContent: "center", marginTop: "var(--space-6)" }}>
            <Button variant="primary">Fale com um consultor ORVIX</Button>
            <Button variant="secondary">Participe do Clube ORVIX</Button>
          </div>
          <div style={{ marginTop: "var(--space-8)" }}>
            <Hashtag size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function VendaDireta({ base = "" }) {
  return (
    <section className="ovx-section ovx-section--deep">
      <span className="ovx-section__fx orvix-grid-fx" />
      <div className="orvix-container ovx-section__inner">
        <div className="ovx-split">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <Eyebrow ornament="rule">Da indústria para a sua lavoura</Eyebrow>
            <h2 style={{ font: "var(--type-h2)" }}>Compre ORVIX diretamente da indústria.</h2>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {["Relação direta com a indústria", "Recomendação técnica de quem desenvolve os produtos", "Vantagens exclusivas para o cliente ORVIX"].map((t) => (
                <li key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start", font: "var(--type-body-sm)", color: "var(--text-muted)" }}>
                  <Icon name="check" size={16} style={{ color: "var(--text-accent)", marginTop: 2 }} />
                  {t}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: "var(--gap-tight)", marginTop: "var(--space-2)" }}>
              <Button variant="primary">Comprar direto da indústria</Button>
              <Button variant="ghost">Solicitar orçamento</Button>
            </div>
          </div>
          <div className="ovx-split__visual">
            <span className="ovx-pontos-fundo orvix-dots--dense" aria-hidden="true" style={{ width: "100%", height: "100%" }} />
            <XMark size={140} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Registro nomeado das seções. A ordem da página é decidida em cada projeto. */
export const HomeSections = {
  HeroPrecisao, ManifestoCentrado, TrilhaDoCiclo, TresEixos, DestaqueORV7, GradeDeLinhas,
  FaixaDeNumeros, MarqueeTecnico, TerritorioMT, ClubeOrvix, EditorialBlog, FechamentoCTA, VendaDireta,
};
