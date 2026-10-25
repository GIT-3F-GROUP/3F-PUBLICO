import React from "react";
import { Icon } from "../foundation/Icon.jsx";

const cx = (...a) => a.filter(Boolean).join(" ");

export function Card({ children, variant, padding, dots = false, interactive = false, className = "", ...rest }) {
  return (
    <div
      className={cx(
        "ovx-card",
        interactive && "ovx-card--interactive",
        variant && `ovx-card--${variant}`,
        padding === "lg" && "ovx-card--lg",
        padding === "none" && "ovx-card--flush",
        dots && "ovx-card--dots",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHeader({ title, sub, action, className = "" }) {
  return (
    <div className={cx("ovx-card__header", className)}>
      <div>
        <div className="ovx-card__title">{title}</div>
        {sub ? <div className="ovx-card__sub">{sub}</div> : null}
      </div>
      {action}
    </div>
  );
}

export function GlassPanel({ children, density = "base", tone = "neutral", compact = false, surface = false, className = "", ...rest }) {
  return (
    <div
      className={cx(
        "ovx-panel",
        density === "thin" && "ovx-panel--thin",
        density === "solid" && "ovx-panel--solid",
        tone === "verde" && "ovx-panel--verde",
        compact && "ovx-panel--compact",
        surface && "ovx-panel--surface",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export function Stat({ label, value, unit, accent = false, delta, size = "md", className = "" }) {
  return (
    <div className={cx("ovx-stat", size === "lg" && "ovx-stat--lg", className)}>
      {label ? <span className="ovx-stat__label">{label}</span> : null}
      <span className={cx("ovx-stat__value", accent && "ovx-stat__value--accent")}>
        {value}
        {unit ? <span className="ovx-stat__unit">{unit}</span> : null}
      </span>
      {delta ? (
        <span className={cx("ovx-stat__delta", delta.dir === "down" ? "ovx-stat__delta--down" : "ovx-stat__delta--up")}>
          <Icon name={delta.dir === "down" ? "trending-down" : "trending-up"} size={12} />
          {delta.label}
        </span>
      ) : null}
    </div>
  );
}

export function StatGrid({ items = [], className = "" }) {
  return (
    <div className={cx("ovx-statgrid", className)}>
      {items.map((it, i) => (
        <div key={i}>
          <Stat {...it} />
        </div>
      ))}
    </div>
  );
}

export function DataTable({ columns = [], rows = [], caption, zebra = false, hover = true, numeric = false, className = "" }) {
  return (
    <div className={cx("ovx-tablewrap", className)}>
      <table className={cx("ovx-table", hover && "ovx-table--hover", zebra && "ovx-table--zebra", numeric && "ovx-table--numeric")}>
        {caption ? <caption>{caption}</caption> : null}
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function KeyValue({ items = [], className = "" }) {
  return (
    <dl className={cx("ovx-kv", className)}>
      {items.map(([k, v], i) => (
        <React.Fragment key={i}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

export function Badge({ children, tone = "neutral", variant, dot = false, size = "md", icon, className = "" }) {
  return (
    <span
      className={cx(
        "ovx-badge",
        tone !== "neutral" && `ovx-badge--${tone}`,
        variant && `ovx-badge--${variant}`,
        dot && "ovx-badge--dot",
        size === "lg" && "ovx-badge--lg",
        className
      )}
    >
      {icon ? <Icon name={icon} size={11} /> : null}
      {children}
    </span>
  );
}

export function Tag({ children, selected = false, interactive = false, onRemove, className = "", ...rest }) {
  return (
    <span
      className={cx("ovx-tag", (interactive || onRemove) && "ovx-tag--interactive", selected && "ovx-tag--selected", className)}
      {...rest}
    >
      {children}
      {onRemove ? <Icon name="x" size={11} className="ovx-tag__x" onClick={onRemove} /> : null}
    </span>
  );
}

export function Meter({ label, value = 0, max = 100, hint, tone = "success", thick = false, striped = false, className = "" }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div
      className={cx(
        "ovx-meter",
        tone === "warning" && "ovx-meter--warning",
        tone === "danger" && "ovx-meter--danger",
        thick && "ovx-meter--thick",
        striped && "ovx-meter--striped",
        className
      )}
    >
      {label || hint ? (
        <div className="ovx-meter__head">
          <span>{label}</span>
          <span>{hint}</span>
        </div>
      ) : null}
      <div className="ovx-meter__track">
        <div className="ovx-meter__fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function ProgressRing({ value = 0, size = 56, stroke = 4, label }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <span style={{ position: "relative", display: "inline-grid", placeItems: "center", width: size, height: size }}>
      <svg className="ovx-progressring" width={size} height={size}>
        <circle className="ovx-progressring__track" cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} />
        <circle
          className="ovx-progressring__fill"
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - Math.max(0, Math.min(1, value / 100)))}
        />
      </svg>
      {label ? (
        <span style={{ position: "absolute", font: "var(--type-mono)", color: "var(--text-body)" }}>{label}</span>
      ) : null}
    </span>
  );
}

export function Divider({ label, variant, vertical = false, className = "" }) {
  if (label)
    return (
      <div className={cx("ovx-divider__label", className)}>
        <span>{label}</span>
      </div>
    );
  return <hr className={cx("ovx-divider", variant && `ovx-divider--${variant}`, vertical && "ovx-divider--vertical", className)} />;
}
