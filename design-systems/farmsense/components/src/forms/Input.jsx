import React from 'react';

export function Input({ label, hint, value, placeholder, tone = 'light', icon, trailing, onChange, disabled, className = '', ...rest }) {
  const dark = tone === 'dark';
  return (
    <div className={['stack', className].filter(Boolean).join(' ')} style={{ gap: 'var(--s-2)', color: dark ? '#fff' : 'var(--verde-sombra)' }}>
      {label && <label className="label" style={{ opacity: 0.55 }}>{label}</label>}
      <div
        className="fs-fx-border-neon fs-t-base"
        style={{
          background: dark ? 'rgba(255,255,255,.06)' : '#fff',
          border: dark ? '1px solid rgba(51,255,194,.3)' : '1px solid rgba(0,65,65,.18)',
          borderRadius: 'var(--r-sm)', padding: '12px 14px',
          display: 'flex', alignItems: 'center', gap: 10, opacity: disabled ? 0.45 : 1,
        }}
      >
        {icon}
        <input
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          style={{ flex: 1, border: 0, outline: 'none', background: 'transparent', font: 'inherit', fontSize: 16, color: 'inherit' }}
          {...rest}
        />
        {trailing}
      </div>
      {hint && <span className="body-sm" style={{ opacity: 0.55 }}>{hint}</span>}
    </div>
  );
}
