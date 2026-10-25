import React from "react";
import { Icon } from "../foundation/Icon.jsx";

const cx = (...a) => a.filter(Boolean).join(" ");

export function Field({ label, hint, error, required = false, htmlFor, children, className = "" }) {
  return (
    <div className={cx("ovx-field", className)}>
      {label ? (
        <label className="ovx-field__label" htmlFor={htmlFor} data-required={required ? "" : undefined}>
          {label}
        </label>
      ) : null}
      {children}
      {error ? (
        <span className="ovx-field__error">
          <Icon name="alert-circle" size={12} />
          {error}
        </span>
      ) : hint ? (
        <span className="ovx-field__hint">{hint}</span>
      ) : null}
    </div>
  );
}

export function Input({ size = "md", mono = false, invalid = false, iconLeft, unit, className = "", ...rest }) {
  const input = (
    <input
      className={cx("ovx-input", size !== "md" && `ovx-input--${size}`, mono && "ovx-input--mono", className)}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
  if (!iconLeft && !unit) return input;
  return (
    <span className={cx("ovx-inputwrap", iconLeft && "ovx-inputwrap--has-left", unit && "ovx-inputwrap--has-right")}>
      {iconLeft ? (
        <span className="ovx-inputwrap__addon ovx-inputwrap__addon--left">
          <Icon name={iconLeft} size={15} />
        </span>
      ) : null}
      {input}
      {unit ? <span className="ovx-inputwrap__unit">{unit}</span> : null}
    </span>
  );
}

export function Textarea({ invalid = false, className = "", ...rest }) {
  return <textarea className={cx("ovx-input", "ovx-textarea", className)} aria-invalid={invalid || undefined} {...rest} />;
}

export function Select({ options = [], size = "md", placeholder, className = "", ...rest }) {
  return (
    <select className={cx("ovx-input", "ovx-select", size !== "md" && `ovx-input--${size}`, className)} {...rest}>
      {placeholder ? <option value="">{placeholder}</option> : null}
      {options.map((o) => {
        const v = typeof o === "string" ? o : o.value;
        const l = typeof o === "string" ? o : o.label;
        return (
          <option key={v} value={v}>
            {l}
          </option>
        );
      })}
    </select>
  );
}

export function SearchField({ placeholder = "Buscar produto, linha ou artigo", size = "md", ...rest }) {
  return <Input type="search" iconLeft="search" placeholder={placeholder} size={size} {...rest} />;
}

export function Checkbox({ label, description, checked, disabled = false, className = "", ...rest }) {
  return (
    <label className={cx("ovx-check", className)} data-disabled={disabled ? "" : undefined}>
      <input type="checkbox" checked={checked} disabled={disabled} {...rest} />
      <span className="ovx-check__box">
        <Icon name="check" size={9} className="ovx-check__mark" />
      </span>
      <span className="ovx-check__text">
        <span>{label}</span>
        {description ? <span className="ovx-check__desc">{description}</span> : null}
      </span>
    </label>
  );
}

export function Radio({ label, description, name, checked, disabled = false, className = "", ...rest }) {
  return (
    <label className={cx("ovx-check", "ovx-check--radio", className)} data-disabled={disabled ? "" : undefined}>
      <input type="radio" name={name} checked={checked} disabled={disabled} {...rest} />
      <span className="ovx-check__box">
        <span className="ovx-check__dot" />
      </span>
      <span className="ovx-check__text">
        <span>{label}</span>
        {description ? <span className="ovx-check__desc">{description}</span> : null}
      </span>
    </label>
  );
}

export function Switch({ label, checked, disabled = false, className = "", ...rest }) {
  return (
    <label className={cx("ovx-switch", className)} data-disabled={disabled ? "" : undefined}>
      <input type="checkbox" role="switch" checked={checked} disabled={disabled} {...rest} />
      <span className="ovx-switch__track">
        <span className="ovx-switch__thumb" />
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}

export function Slider({ min = 0, max = 100, step = 1, value, scale, className = "", ...rest }) {
  return (
    <span className={cx("ovx-slider", className)}>
      <input className="ovx-slider__range" type="range" min={min} max={max} step={step} value={value} {...rest} />
      {scale ? (
        <span className="ovx-slider__scale">
          {scale.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </span>
      ) : null}
    </span>
  );
}

export function Fieldset({ legend, children, className = "" }) {
  return (
    <fieldset className={cx("ovx-fieldset", className)}>
      {legend ? <legend className="ovx-fieldset__legend">{legend}</legend> : null}
      {children}
    </fieldset>
  );
}
