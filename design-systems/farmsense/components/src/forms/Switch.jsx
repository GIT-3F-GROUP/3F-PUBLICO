import React from 'react';

export function Switch({ label, checked = false, tone = 'light', onChange, disabled, className = '', ...rest }) {
  const dark = tone === 'dark';
  return (
    <label className={['row-tight fs-t-base', className].filter(Boolean).join(' ')} style={{ gap: 10, cursor: disabled ? 'default' : 'pointer', opacity: disabled ? 0.45 : 1, color: dark ? '#fff' : 'var(--verde-sombra)' }}>
      <input type="checkbox" role="switch" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span
        className="fs-t-base"
        style={{
          width: 38, height: 22, borderRadius: 'var(--r-pill)', flex: '0 0 auto', position: 'relative',
          background: checked ? (dark ? 'rgba(51,255,194,.9)' : 'var(--verde-sombra)') : dark ? 'rgba(255,255,255,.14)' : 'rgba(0,65,65,.15)',
        }}
      >
        <span
          className="fs-t-base"
          style={{
            position: 'absolute', top: 3, left: checked ? 19 : 3, width: 16, height: 16, borderRadius: '50%',
            background: checked && dark ? 'var(--verde-sombra)' : '#fff', boxShadow: '0 1px 2px rgba(0,65,65,.25)',
          }}
        />
      </span>
      <span className="body-sm">{label}</span>
    </label>
  );
}
