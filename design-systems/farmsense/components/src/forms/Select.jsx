import React from 'react';

export function Select({ label, options = [], value, tone = 'light', onChange, className = '', ...rest }) {
  const dark = tone === 'dark';
  return (
    <div className={['stack', className].filter(Boolean).join(' ')} style={{ gap: 'var(--s-2)', color: dark ? '#fff' : 'var(--verde-sombra)' }}>
      {label && <label className="label" style={{ opacity: 0.55 }}>{label}</label>}
      <div style={{ position: 'relative' }}>
        <select
          value={value}
          onChange={onChange}
          className="fs-fx-border fs-hv-border"
          style={{
            width: '100%', appearance: 'none', background: dark ? 'rgba(255,255,255,.06)' : '#fff',
            border: dark ? '1px solid rgba(255,255,255,.18)' : '1px solid rgba(0,65,65,.18)',
            borderRadius: 'var(--r-sm)', padding: '12px 38px 12px 14px', font: 'inherit', fontSize: 16,
            color: 'inherit', outline: 'none', cursor: 'pointer',
          }}
          {...rest}
        >
          {options.map((o) => (
            <option key={typeof o === 'string' ? o : o.value} value={typeof o === 'string' ? o : o.value}>
              {typeof o === 'string' ? o : o.label}
            </option>
          ))}
        </select>
        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', opacity: 0.5, pointerEvents: 'none' }}>
          <path d="M4 6l4 4 4-4" />
        </svg>
      </div>
    </div>
  );
}
