import React from 'react';

export function Radio({ label, checked = false, name, tone = 'light', onChange, disabled, className = '', ...rest }) {
  const dark = tone === 'dark';
  return (
    <label className={['row-tight fs-t-base', className].filter(Boolean).join(' ')} style={{ gap: 10, cursor: disabled ? 'default' : 'pointer', opacity: disabled ? 0.45 : 1, color: dark ? '#fff' : 'var(--verde-sombra)' }}>
      <input type="radio" name={name} checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span
        className="fs-t-fast"
        style={{
          width: 18, height: 18, borderRadius: '50%', display: 'grid', placeItems: 'center', flex: '0 0 auto',
          border: checked ? '1px solid var(--verde-sombra)' : dark ? '1px solid rgba(255,255,255,.3)' : '1px solid rgba(0,65,65,.28)',
        }}
      >
        {checked && <span style={{ width: 8, height: 8, borderRadius: '50%', background: dark ? 'var(--ciano-neon)' : 'var(--verde-sombra)' }} />}
      </span>
      <span className="body-sm">{label}</span>
    </label>
  );
}
