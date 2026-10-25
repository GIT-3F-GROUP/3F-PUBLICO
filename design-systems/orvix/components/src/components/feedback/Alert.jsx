import React from "react";
import { Icon } from "../foundation/Icon.jsx";

const cx = (...a) => a.filter(Boolean).join(" ");
const TONE_ICON = { success: "check-circle-2", warning: "alert-triangle", danger: "octagon-alert", info: "info", neutral: "info" };

export function Alert({ title, children, tone = "neutral", bar = false, onClose, className = "" }) {
  return (
    <div className={cx("ovx-alert", tone !== "neutral" && `ovx-alert--${tone}`, bar && "ovx-alert--bar", className)} role="status">
      <Icon name={TONE_ICON[tone]} size={18} className="ovx-alert__icon" />
      <div className="ovx-alert__body">
        {title ? <div className="ovx-alert__title">{title}</div> : null}
        {children ? <div className="ovx-alert__text">{children}</div> : null}
      </div>
      {onClose ? (
        <button type="button" className="ovx-iconbtn ovx-iconbtn--bare ovx-iconbtn--sm ovx-alert__close" aria-label="Fechar" onClick={onClose}>
          <Icon name="x" size={14} />
        </button>
      ) : null}
    </div>
  );
}

export function Toast({ children, icon = "check-circle-2", progress, className = "" }) {
  return (
    <div className={cx("ovx-toast", className)} style={{ position: "relative" }} role="status">
      <Icon name={icon} size={16} className="ovx-toast__icon" />
      <span className="ovx-toast__text">{children}</span>
      {progress != null ? <span className="ovx-toast__bar" style={{ width: `${progress}%` }} /> : null}
    </div>
  );
}

export function ToastStack({ children, className = "" }) {
  return <div className={cx("ovx-toaststack", className)}>{children}</div>;
}

export function Tooltip({ label, children, className = "" }) {
  return (
    <span className={cx("ovx-tooltip", className)}>
      {children}
      <span className="ovx-tooltip__bubble" role="tooltip">
        {label}
      </span>
    </span>
  );
}

export function Dialog({ title, sub, children, footer, onClose, inline = false, className = "" }) {
  /* Modal (Apple HIG): foco vai para o diálogo, Tab circula dentro dele, Escape fecha e o foco volta para onde estava. */
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (inline || !ref.current) return undefined;
    const el = ref.current;
    const antes = document.activeElement;
    const focaveis = () => [...el.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')];
    (focaveis()[0] || el).focus();
    const tecla = e => {
      if (e.key === "Escape" && onClose) { e.preventDefault(); onClose(); return; }
      if (e.key !== "Tab") return;
      const f = focaveis(); if (!f.length) { e.preventDefault(); return; }
      const primeiro = f[0], ultimo = f[f.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
      else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
    };
    el.addEventListener("keydown", tecla);
    return () => { el.removeEventListener("keydown", tecla); if (antes && antes.focus) antes.focus(); };
  }, [inline, onClose]);
  const body = (
    <div ref={ref} tabIndex={-1} className={cx("ovx-dialog", className)} role="dialog" aria-modal={inline ? undefined : "true"} aria-label={title}>
      <div className="ovx-dialog__header">
        <div style={{ flex: 1 }}>
          <div className="ovx-dialog__title">{title}</div>
          {sub ? <div className="ovx-dialog__sub">{sub}</div> : null}
        </div>
        {onClose ? (
          <button type="button" className="ovx-iconbtn ovx-iconbtn--bare ovx-iconbtn--sm" aria-label="Fechar" onClick={onClose}>
            <Icon name="x" size={14} />
          </button>
        ) : null}
      </div>
      <div className="ovx-dialog__body">{children}</div>
      {footer ? <div className="ovx-dialog__footer">{footer}</div> : null}
    </div>
  );
  if (inline) return body;
  return <div className="ovx-scrim">{body}</div>;
}

export function Skeleton({ variant = "text", width, height, className = "" }) {
  return <span className={cx("ovx-skeleton", `ovx-skeleton--${variant}`, className)} style={{ display: "block", width, height }} />;
}

export function Spinner({ size = "md", className = "" }) {
  return <span className={cx("ovx-spinner", size !== "md" && `ovx-spinner--${size}`, className)} role="status" aria-label="Carregando" />;
}

export function EmptyState({ icon = "inbox", title, children, action, className = "" }) {
  return (
    <div className={cx("ovx-empty", className)}>
      <Icon name={icon} size={26} style={{ color: "var(--text-subtle)" }} />
      {title ? <div className="ovx-empty__title">{title}</div> : null}
      {children ? <div className="ovx-empty__text">{children}</div> : null}
      {action}
    </div>
  );
}

export function InlineStatus({ children, idle = false, className = "" }) {
  return (
    <span className={cx("ovx-inlinestatus", idle && "ovx-inlinestatus--idle", className)}>
      <span className="ovx-inlinestatus__dot" />
      {children}
    </span>
  );
}
