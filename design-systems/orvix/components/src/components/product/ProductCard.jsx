import React from "react";
import { Icon } from "../foundation/Icon.jsx";

const cx = (...a) => a.filter(Boolean).join(" ");

/* Cores secundárias por linha de produto. A cor entra só para salientar a linha. */
export const LINE_COLORS = {
  tec: "var(--produto-verde)",
  orv7: "var(--produto-verde)",
  "orv7-aero": "var(--produto-azul)",
  orv: "var(--produto-teal)",
  blitz: "var(--produto-magenta)",
  solv: "var(--produto-violeta)",
  orvclear: "var(--produto-azul-profundo)",
  orvale: "var(--produto-laranja)",
  "orvale-mineral": "var(--produto-ambar)",
  vix: "var(--produto-lima)",
  "vix-hs": "var(--produto-lima)",
  "vix-ss": "var(--produto-oliva)",
  "vix-classe-a": "var(--produto-ouro-classe-a)",
  "vix-exclusive": "var(--produto-prata)",
};

export function ProductCard({ name, line, lineKey = "orv7", claim, image, specs = [], action, rail = false, hero = false, className = "" }) {
  return (
    <article
      className={cx("ovx-product", hero && "ovx-product--hero", className)}
      style={{ "--linha": LINE_COLORS[lineKey] || LINE_COLORS.orv7 }}
    >
      {rail ? <span className="ovx-product__rail" /> : null}
      {image ? (
        <div className="ovx-product__shot">
          <img src={image} alt={name} />
        </div>
      ) : null}
      <div className="ovx-product__body">
        {line ? <span className="ovx-product__line">{line}</span> : null}
        <h3 className="ovx-product__name">{name}</h3>
        {claim ? <p className="ovx-product__claim">{claim}</p> : null}
        {specs.length ? (
          <div className="ovx-product__specs">
            {specs.map((s, i) => (
              <SpecChip key={i} label={s.label} value={s.value} />
            ))}
          </div>
        ) : null}
      </div>
      {action ? <div className="ovx-product__foot">{action}</div> : null}
    </article>
  );
}

export function LineCard({ name, badge, promise, count, lineKey = "orv7", action, className = "" }) {
  return (
    <article className={cx("ovx-line", className)} style={{ "--linha": LINE_COLORS[lineKey] || LINE_COLORS.orv7 }}>
      {badge ? <span className="ovx-line__badge">{badge}</span> : null}
      <h3 className="ovx-line__name">{name}</h3>
      {promise ? <p className="ovx-line__promise">{promise}</p> : null}
      {count != null ? <span className="ovx-line__count">{count} produtos</span> : null}
      {action}
    </article>
  );
}

export function SpecChip({ label, value }) {
  return (
    <span className="ovx-spec">
      {label}
      {value != null ? <b>{value}</b> : null}
    </span>
  );
}

export function DoseTable({ columns = ["Cultura", "Dose", "Volume de calda"], rows = [], className = "" }) {
  return (
    <table className={cx("ovx-dose", className)}>
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {r.map((c, j) => (
              <td key={j}>{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function PhScale({ value = 7, className = "" }) {
  const pct = ((value - 1) / 13) * 100;
  return (
    <div className={cx("ovx-phscale", className)}>
      <div className="ovx-phscale__bar">
        <span className="ovx-phscale__pin" style={{ left: `${Math.max(1, Math.min(99, pct))}%` }} />
      </div>
      <div className="ovx-phscale__ticks">
        <span>pH 1</span>
        <span>4</span>
        <span>7</span>
        <span>10</span>
        <span>pH 14</span>
      </div>
    </div>
  );
}

export function DocLink({ type = "PDF", name, size, href = "#", className = "" }) {
  return (
    <a className={cx("ovx-doc", className)} href={href}>
      <span className="ovx-doc__type">{type}</span>
      <span className="ovx-doc__meta">
        <span className="ovx-doc__name">{name}</span>
        {size ? <span className="ovx-doc__size">{size}</span> : null}
      </span>
      <Icon name="download" size={15} style={{ marginLeft: "auto", color: "var(--text-subtle)" }} />
    </a>
  );
}

export function AxisTrio({ items = [], className = "" }) {
  return (
    <div className={cx("ovx-axis", className)}>
      {items.map((it, i) => (
        <div className="ovx-axis__cell" key={i}>
          <span className="ovx-axis__num">{it.num || `0${i + 1}`}</span>
          {it.icon ? <Icon name={it.icon} size={20} style={{ color: "var(--verde-400)" }} /> : null}
          <h4 className="ovx-axis__title">{it.title}</h4>
          <p className="ovx-axis__text">{it.text}</p>
          {it.tags ? (
            <div className="ovx-taglist" style={{ marginTop: "var(--space-2)" }}>
              {it.tags.map((t) => (
                <span className="ovx-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
