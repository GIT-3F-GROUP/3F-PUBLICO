import React from 'react';

export function Textarea({ label, hint, value, placeholder, rows = 4, tone = 'light', onChange, className = '', ...rest }) {
  const dark = tone === 'dark';
  return (
    <div className={['stack', className].filter(Boolean).join(' ')} style={{ gap: 'var(--s-2)', color: dark ? '#fff' : 'var(--verde-sombra)' }}>
      {label && <label className="label" style={{ opacity: 0.55 }}>{label}</label>}
      <textarea
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="fs-fx-border"
        style={{
          background: dark ? 'rgba(255,255,255,.06)' : '#fff',
          border: dark ? '1px solid rgba(255,255,255,.18)' : '1px solid rgba(0,65,65,.18)',
          borderRadius: 'var(--r-sm)', padding: '12px 14px', font: 'inherit', fontSize: 16,
          color: 'inherit', outline: 'none', resize: 'vertical', lineHeight: 1.55,
        }}
        {...rest}
      />
      {hint && <span className="body-sm" style={{ opacity: 0.55 }}>{hint}</span>}
    </div>
  );
}
