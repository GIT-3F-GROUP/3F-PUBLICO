import React from "react";
import { Icon } from "../foundation/Icon.jsx";

const cx = (...a) => a.filter(Boolean).join(" ");

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  block = false,
  pill = false,
  loading = false,
  disabled = false,
  as,
  href,
  className = "",
  ...rest
}) {
  const Tag = as || (href ? "a" : "button");
  return (
    <Tag
      href={href}
      className={cx("ovx-btn", `ovx-btn--${variant}`, size !== "md" && `ovx-btn--${size}`, block && "ovx-btn--block", pill && "ovx-btn--pill", className)}
      disabled={Tag === "button" ? disabled || loading : undefined}
      aria-disabled={Tag !== "button" && (disabled || loading) ? true : undefined}
      {...rest}
    >
      {loading ? <span className="ovx-btn__spinner" /> : icon ? <Icon name={icon} size={size === "md" ? 15 : 13} className="ovx-btn__icon" /> : null}
      {children}
      {iconRight && !loading ? <Icon name={iconRight} size={size === "md" ? 15 : 13} className="ovx-btn__icon" /> : null}
    </Tag>
  );
}

export function IconButton({ icon, label, variant = "default", size = "md", round = false, disabled = false, className = "", ...rest }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      className={cx("ovx-iconbtn", variant !== "default" && `ovx-iconbtn--${variant}`, size !== "md" && `ovx-iconbtn--${size}`, round && "ovx-iconbtn--round", className)}
      {...rest}
    >
      <Icon name={icon} size={size === "sm" ? 14 : size === "lg" ? 19 : 16} />
    </button>
  );
}

export function ButtonGroup({ children, className = "", ...rest }) {
  return (
    <div className={cx("ovx-btngroup", className)} role="group" {...rest}>
      {children}
    </div>
  );
}

export function LinkAction({ children, icon, arrow = true, tone = "accent", underline = false, href, className = "", ...rest }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      type={href ? undefined : "button"}
      className={cx("ovx-linkaction", tone === "muted" && "ovx-linkaction--muted", underline && "ovx-linkaction--underline", className)}
      {...rest}
    >
      {icon ? <Icon name={icon} size={14} /> : null}
      {children}
      {arrow ? <Icon name="arrow-right" size={14} className="ovx-linkaction__arrow" /> : null}
    </Tag>
  );
}
