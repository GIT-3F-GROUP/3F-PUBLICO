import React from "react";
import { Icon } from "../foundation/Icon.jsx";

const cx = (...a) => a.filter(Boolean).join(" ");

/* Uploads do design system: caminho do asset -> URL servida pelo artifact. Fora do artifact, passe `base`. */
export const ORVIX_ASSET_URL = {
  "assets/logos/logo-orvix-principal-preto.svg": "/_blob/99d1e572cb82297f7babbb86f84b2d3d",
  "assets/logos/logo-orvix-principal-branco.svg": "/_blob/319c85b4a15f2b9661f9558975cdf54e",
  "assets/logos/logo-orvix-quadrada-preto.svg": "/_blob/d7af7805942277353d37ab0d6f75a301",
  "assets/logos/logo-orvix-quadrada-branco.svg": "/_blob/9cab002f3bb5ebe4c8a25cdca9cd8554",
  "assets/logos/logo-orvix-para-videos-preto.svg": "/_blob/ca1380471d5c6924e4b01ed603b6ad1a",
  "assets/logos/logo-orvix-para-videos-branco.svg": "/_blob/d2532e2c26f5d81d2637dfa96e294105",
  "assets/logos/logo-orvix-x-detalhe-minimo-preto.svg": "/_blob/88836e101f2863253673ba81e5fb591e",
  "assets/logos/logo-orvix-x-detalhe-minimo-branco.svg": "/_blob/fe4a3cfc622fdf3b93ea00be0bbe50dc",
  "assets/logos/logo-orvix-sem-detalhes-preto.svg": "/_blob/9d037d227853264281ec7ae48ed68fff",
  "assets/logos/logo-orvix-sem-detalhes-branco.svg": "/_blob/6acfff50fcf3e7eef45422bc5b972b9f",
  "assets/logos/elemento-x-orvix-preto.svg": "/_blob/2edacab321bb6041dfc821e9f8ba47f2",
  "assets/logos/elemento-x-orvix-branco.svg": "/_blob/3d3c722f4e7207f389a8f961448d0b69",
  "assets/logos/elemento-orvix-preto.svg": "/_blob/e6ff050076ce3fa5d32cbdfc9a0dff73",
  "assets/logos/elemento-orvix-branco.svg": "/_blob/334c7fdf95f8d201989a61ee8118137c",
  "assets/logos/logo-clube-orvix-preto.svg": "/_blob/244d261495fff3e4a55fafd491f0d7cb",
  "assets/logos/logo-clube-orvix-branco.svg": "/_blob/78df973a39b40458439e925099b645b5",
  "assets/logos/logo-orvix-principal-sem-assinatura-preto.svg": "/_blob/40f50f66c4eaf113498664c66f66b35d",
  "assets/logos/logo-orvix-principal-sem-assinatura-branco.svg": "/_blob/00dbc2dfede08926f53e92da61b7bef7",
  "assets/logos/logo-orvix-quadrada-sem-assinatura-preto.svg": "/_blob/54999bd7002ce852ceb9acf9ab35cdda",
  "assets/logos/logo-orvix-quadrada-sem-assinatura-branco.svg": "/_blob/deda07ef6b13d655d944b26e71a21c51",
  "assets/logos/logo-orvix-x-detalhe-minimo-sem-assinatura-preto.svg": "/_blob/7e8b220cbb82bf6cf7c487217066badf",
  "assets/logos/logo-orvix-x-detalhe-minimo-sem-assinatura-branco.svg": "/_blob/afe2f613b0635d1b1d3b19f62823fdae",
  "assets/logos/logo-orvix-sem-detalhes-sem-assinatura-preto.svg": "/_blob/cc8a80429a862a4d91e5f8edfcd8bf7c",
  "assets/logos/logo-orvix-sem-detalhes-sem-assinatura-branco.svg": "/_blob/52553c25023f16df3df3622d01ba95d1"
};
export const ovxAsset = (base, path) => (base ? base + path : (ORVIX_ASSET_URL[path] || path));

const LOGO_FILES = {
  principal: "logo-orvix-principal",
  quadrada: "logo-orvix-quadrada",
  video: "logo-orvix-para-videos",
  "detalhe-minimo": "logo-orvix-x-detalhe-minimo",
  "sem-detalhes": "logo-orvix-sem-detalhes",
  "elemento-x": "elemento-x-orvix",
  elemento: "elemento-orvix",
  clube: "logo-clube-orvix",
  "principal-sem-assinatura": "logo-orvix-principal-sem-assinatura",
  "quadrada-sem-assinatura": "logo-orvix-quadrada-sem-assinatura",
  "detalhe-minimo-sem-assinatura": "logo-orvix-x-detalhe-minimo-sem-assinatura",
  "sem-detalhes-sem-assinatura": "logo-orvix-sem-detalhes-sem-assinatura",
};
const LOGO_ALIAS = { clara: "principal", escura: "principal", pontilhada: "principal", simbolo: "quadrada", selo: "quadrada", perfil: "quadrada", "2d": "sem-detalhes", mono: "sem-detalhes", "x-verde": "elemento-x", "elemento-escuro": "elemento-x", "clara-x-verde": "principal" };
export const logoSrc = (base, variant, tone) => ovxAsset(base, "assets/logos/" + (LOGO_FILES[LOGO_ALIAS[variant] || variant] || LOGO_FILES.principal) + "-" + tone + ".svg");

/* tone: "auto" segue o tema (branca no escuro, preta no claro); "branco" ou "preto" fixa a versão. */
export function Logo({ variant = "principal", size = "md", tone = "auto", base = "", protect = false, alt = "ORVIX Agroquímica", className = "" }) {
  const v = LOGO_ALIAS[variant] || variant;
  const wrap = cx("ovx-logo", `ovx-logo--${size}`, (v === "quadrada" || v === "quadrada-sem-assinatura" || v === "clube") && "ovx-logo--quadrada", protect && "ovx-logo__protect", className);
  if (tone === "preto" || tone === "branco") {
    return (
      <span className={wrap}>
        <img src={logoSrc(base, v, tone)} alt={alt} />
      </span>
    );
  }
  return (
    <span className={wrap}>
      <img className="ovx-logo__img ovx-logo__img--dark" src={logoSrc(base, v, "branco")} alt={alt} />
      <img className="ovx-logo__img ovx-logo__img--light" src={logoSrc(base, v, "preto")} alt="" aria-hidden="true" />
    </span>
  );
}

/* Tipográfica de apoio, monocromática: a logo nunca colore um único elemento. */
export function WordmarkType({ size = 48, descritor = "Agroquímica", className = "" }) {
  return (
    <span className={cx("ovx-wordmark-type", className)} style={{ fontSize: size }}>
      ORVIX
      {descritor ? <small>{descritor}</small> : null}
    </span>
  );
}

export function Eyebrow({ children, ornament = "rule", muted = false, className = "" }) {
  return (
    <span className={cx("ovx-eyebrow", ornament && `ovx-eyebrow--${ornament}`, muted && "ovx-eyebrow--muted", className)}>{children}</span>
  );
}

export function SectionHeading({ eyebrow, title, lead, align = "start", split = false, ornament = "rule", className = "" }) {
  return (
    <div className={cx("ovx-sectionhead", align === "center" && "ovx-sectionhead--center", split && "ovx-sectionhead--split", className)}>
      <div>
        {eyebrow ? <Eyebrow ornament={ornament}>{eyebrow}</Eyebrow> : null}
        {title ? <h2 className="ovx-sectionhead__title" style={{ marginTop: eyebrow ? "var(--space-3)" : 0 }}>{title}</h2> : null}
      </div>
      {lead ? <p className="ovx-sectionhead__lead">{lead}</p> : null}
    </div>
  );
}

/* Padrão de pontos da marca. tone: claro (14%), suave (8%), denso (10% a 4px) ou verde (só gráfico).
   fade: none, x, y, radial, diagonal: degradê só de transparência, nunca de cor. */
export function XTexture({ tone = "claro", size = 4, fade = "none", style, className = "" }) {
  return (
    <span
      className={cx("ovx-xtexture", tone === "verde" && "ovx-xtexture--verde", tone === "suave" && "ovx-xtexture--suave", fade !== "none" && `ovx-xtexture--fade-${fade}`, className)}
      style={{ backgroundSize: `${size}px ${size}px`, ...style }}
    />
  );
}

/* XMark é o elemento oficial da marca, nunca um X redesenhado:
   variant "x" = Elemento X (perna direita sólida e as pernas pontilhadas da esquerda);
   variant "pernas" = Elemento ORVIX (as três pernas pontilhadas). Mínimo de 32px de altura. */
export function XMark({ size = 32, variant = "x", alt = "", style, className = "" }) {
  return (
    <span className={cx("ovx-xmark", className)} style={{ "--xmark-h": Math.max(32, size) + "px", ...style }}>
      <Logo variant={variant === "pernas" ? "elemento" : "elemento-x"} alt={alt} />
    </span>
  );
}

/* Alvo da marca, com cara de alvo: redondo (anéis, retícula com vão no centro e marcas de grau) ou
   quadrado (cantos em L, quadro interno e retícula). O verde fica só no anel ou quadro central e no núcleo. */
export function TargetMark({ size = 120, forma = "redondo", live = false, className = "" }) {
  const h = React.createElement;
  const circ = (cx, cy, r, extra) => h("circle", Object.assign({ cx, cy, r, fill: "none" }, extra));
  const ln = (x1, y1, x2, y2, extra) => h("line", Object.assign({ x1, y1, x2, y2 }, extra));
  const fio = { stroke: "currentColor", strokeWidth: 1.2, vectorEffect: "non-scaling-stroke" };
  const verde = { stroke: "var(--verde-500)", strokeWidth: 1.6, vectorEffect: "non-scaling-stroke", opacity: .6 };
  let marcas;
  if (forma === "quadrado") {
    const c = 22;
    marcas = [
      /* cantos em L do enquadramento */
      h("path", { key: "c", d: `M4 ${4 + c} V4 H${4 + c} M${96 - c} 4 H96 V${4 + c} M96 ${96 - c} V96 H${96 - c} M${4 + c} 96 H4 V${96 - c}`, fill: "none", stroke: "currentColor", strokeWidth: 2, vectorEffect: "non-scaling-stroke", opacity: .45 }),
      h("rect", { key: "q1", x: 26, y: 26, width: 48, height: 48, fill: "none", stroke: "currentColor", strokeWidth: 1, vectorEffect: "non-scaling-stroke", opacity: .18 }),
      h("rect", { key: "q2", x: 41, y: 41, width: 18, height: 18, fill: "none", ...verde }),
      ln(50, 12, 50, 38, { key: "v1", ...fio, opacity: .32 }), ln(50, 62, 50, 88, { key: "v2", ...fio, opacity: .32 }),
      ln(12, 50, 38, 50, { key: "h1", ...fio, opacity: .32 }), ln(62, 50, 88, 50, { key: "h2", ...fio, opacity: .32 })
    ];
  } else {
    const ticks = [];
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2, r1 = 42, r2 = i % 3 === 0 ? 34 : 38;
      ticks.push(ln(50 + Math.cos(a) * r1, 50 + Math.sin(a) * r1, 50 + Math.cos(a) * r2, 50 + Math.sin(a) * r2, { key: "t" + i, ...fio, opacity: .26 }));
    }
    marcas = [
      circ(50, 50, 46, { key: "r1", ...fio, opacity: .3 }),
      circ(50, 50, 30, { key: "r2", ...fio, opacity: .16 }),
      circ(50, 50, 18, { key: "r3", ...verde }),
      ...ticks,
      ln(50, 0, 50, 40, { key: "v1", ...fio, opacity: .36 }), ln(50, 60, 50, 100, { key: "v2", ...fio, opacity: .36 }),
      ln(0, 50, 40, 50, { key: "h1", ...fio, opacity: .36 }), ln(60, 50, 100, 50, { key: "h2", ...fio, opacity: .36 })
    ];
  }
  return h("svg", { className: cx("ovx-alvo", "ovx-alvo--" + forma, live && "ovx-alvo--live", className), width: size, height: size, viewBox: "0 0 100 100", "aria-hidden": "true" },
    marcas, h("circle", { className: "ovx-alvo__nucleo", cx: 50, cy: 50, r: 3.2, fill: "var(--verde-500)", opacity: .85 }));
}

export function Callout({ children, source, variant, className = "" }) {
  return (
    <div className={cx("ovx-callout", variant && `ovx-callout--${variant}`, className)}>
      <div className="ovx-callout__text">{children}</div>
      {source ? <div className="ovx-callout__source">{source}</div> : null}
    </div>
  );
}

export function PullQuote({ children, author, role, className = "" }) {
  return (
    <blockquote className={cx("ovx-quote", className)}>
      <span className="ovx-quote__text">{children}</span>
      {author ? (
        <span className="ovx-quote__meta">
          <span>
            {author}
            {role ? `, ${role}` : ""}
          </span>
        </span>
      ) : null}
    </blockquote>
  );
}

export function Seal({ title, sub, mark, tone = "neutral", className = "" }) {
  return (
    <span className={cx("ovx-seal", tone === "verde" && "ovx-seal--verde", className)}>
      {mark ? <span className="ovx-seal__mark">{mark}</span> : null}
      <span className="ovx-seal__label">
        <b>{title}</b>
        {sub ? <span>{sub}</span> : null}
      </span>
    </span>
  );
}

export function TerritoryBadge({ base = "", label = "Indústria genuinamente mato-grossense", className = "" }) {
  return <Seal className={className} title={label} sub="Sorriso · Mato Grosso" mark={<XMark size={40} />} />;
}

export function Hashtag({ children = "#AGRICULTORORVIX", size = "md", className = "" }) {
  return <span className={cx("ovx-hashtag", size === "lg" && "ovx-hashtag--lg", className)}>{children}</span>;
}

export function Capsule({ children, icon, className = "" }) {
  return (
    <span className={cx("ovx-capsule", className)}>
      {icon ? <Icon name={icon} size={13} /> : null}
      {children}
    </span>
  );
}
