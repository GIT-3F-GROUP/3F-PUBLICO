import React from "react";
import { Icon } from "../foundation/Icon.jsx";

const cx = (...a) => a.filter(Boolean).join(" ");

export function Navbar({ logo, links = [], actions, current, compact = false, solid = false, className = "" }) {
  return (
    <header className={cx("ovx-navbar", compact && "ovx-navbar--compact", solid && "ovx-navbar--solid", className)}>
      <div className="ovx-navbar__brand">{logo}</div>
      <nav className="ovx-navbar__links">
        {links.map((l) => (
          <a key={l.label} href={l.href || "#"} className="ovx-navlink" aria-current={l.label === current ? "page" : undefined}>
            {l.label}
          </a>
        ))}
      </nav>
      {actions ? <div className="ovx-navbar__actions">{actions}</div> : null}
    </header>
  );
}

export function SidebarNav({ groups = [], current, footer, className = "" }) {
  return (
    <aside className={cx("ovx-sidebar", className)}>
      {groups.map((g, i) => (
        <div className="ovx-sidebar__group" key={i}>
          {g.label ? <div className="ovx-sidebar__grouplabel">{g.label}</div> : null}
          {g.items.map((it) => (
            <a key={it.label} href={it.href || "#"} className="ovx-sideitem" aria-current={it.label === current ? "true" : undefined}>
              {it.icon ? <Icon name={it.icon} size={16} className="ovx-sideitem__icon" /> : null}
              <span>{it.label}</span>
              {it.count != null ? <span className="ovx-sideitem__count">{it.count}</span> : null}
            </a>
          ))}
        </div>
      ))}
      {footer ? <div style={{ marginTop: "auto" }}>{footer}</div> : null}
    </aside>
  );
}

export function Tabs({ tabs = [], value, onChange, variant = "underline", className = "" }) {
  return (
    <div className={cx("ovx-tabs", variant === "pill" && "ovx-tabs--pill", className)} role="tablist">
      {tabs.map((t) => {
        const label = typeof t === "string" ? t : t.label;
        return (
          <button
            key={label}
            role="tab"
            type="button"
            className="ovx-tab"
            aria-selected={label === value}
            onClick={onChange ? () => onChange(label) : undefined}
          >
            {typeof t !== "string" && t.icon ? <Icon name={t.icon} size={14} /> : null}
            {label}
          </button>
        );
      })}
    </div>
  );
}

export function Breadcrumbs({ items = [], className = "" }) {
  return (
    <nav className={cx("ovx-breadcrumbs", className)} aria-label="Trilha">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 ? <span className="ovx-breadcrumbs__sep" aria-hidden="true">/</span> : null}
          {it.href ? <a href={it.href}>{it.label}</a> : <span className="ovx-breadcrumbs__current">{it.label}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}

export function Pagination({ page = 1, pages = 1, onChange, className = "" }) {
  const list = [];
  for (let i = 1; i <= pages; i++) {
    if (i === 1 || i === pages || Math.abs(i - page) <= 1) list.push(i);
    else if (list[list.length - 1] !== "gap") list.push("gap");
  }
  return (
    <nav className={cx("ovx-pagination", className)} aria-label="Paginação">
      <button type="button" className="ovx-pagination__item" aria-label="Página anterior" onClick={onChange ? () => onChange(Math.max(1, page - 1)) : undefined}>
        <Icon name="chevron-left" size={14} />
      </button>
      {list.map((n, i) =>
        n === "gap" ? (
          <span key={`g${i}`} className="ovx-pagination__gap">
            ...
          </span>
        ) : (
          <button
            key={n}
            type="button"
            className="ovx-pagination__item"
            aria-current={n === page ? "page" : undefined}
            onClick={onChange ? () => onChange(n) : undefined}
          >
            {n}
          </button>
        )
      )}
      <button type="button" className="ovx-pagination__item" aria-label="Próxima página" onClick={onChange ? () => onChange(Math.min(pages, page + 1)) : undefined}>
        <Icon name="chevron-right" size={14} />
      </button>
    </nav>
  );
}

export function StepFlow({ steps = [], active = 0, className = "" }) {
  return (
    <div className={cx("ovx-steps", className)}>
      {steps.map((s, i) => (
        <div className="ovx-step" key={i} data-state={i < active ? "done" : i === active ? "active" : "todo"}>
          <span className="ovx-step__line" />
          <span className="ovx-step__marker">{i < active ? <Icon name="check" size={12} /> : i + 1}</span>
          <span className="ovx-step__title">{s.title}</span>
          {s.desc ? <span className="ovx-step__desc">{s.desc}</span> : null}
        </div>
      ))}
    </div>
  );
}

export function SiteFooter({ columns = [], brand, desc, legal = "ORVIX Agroquímica · Sorriso, MT · sac@orvix.com.br · +55 (66) 3545-1804", className = "" }) {
  /* Links aceitam texto simples ou { label, href }. */
  const link = (l) => (typeof l === "string" ? { label: l } : l);
  return (
    <footer className={cx("ovx-footer", className)}>
      <div className="orvix-container">
        <div className="ovx-footer__top">
          <div className="ovx-footer__brand">
            {brand}
            {desc ? <p className="ovx-footer__desc">{desc}</p> : null}
          </div>
          <nav className="ovx-footer__cols" aria-label="Rodapé">
            {columns.map((c, i) => (
              <div className="ovx-footer__col" key={i}>
                <div className="ovx-footer__coltitle">{c.title}</div>
                {(c.links || []).map(link).map((l) => (
                  <a key={l.label} href={l.href || "#"}>
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>
        <div className="ovx-footer__base">
          <span className="ovx-footer__legal">{legal}</span>
          <span className="ovx-footer__meta">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos</a>
            <span className="ovx-footer__signature">Designed by xerxiz.com</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
