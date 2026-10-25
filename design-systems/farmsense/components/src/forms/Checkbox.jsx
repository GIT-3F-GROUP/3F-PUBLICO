import React from 'react';

export function Checkbox({ label, checked = false, tone = 'light', onChange, disabled, className = '', ...rest }) {
  const dark = tone === 'dark';
  return (
    <label className={['row-tight fs-t-base', className].filter(Boolean).join(' ')} style={{ gap: 10, cursor: disabled ? 'default' : 'pointer', opacity: disabled ? 0.45 : 1, color: dark ? '#fff' : 'var(--verde-sombra)' }}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span
        className="fs-t-fast"
        style={{
          width: 18, height: 18, borderRadius: 'var(--r-xs)', display: 'grid', placeItems: 'center', flex: '0 0 auto',
          border: checked ? '1px solid var(--verde-sombra)' : dark ? '1px solid rgba(255,255,255,.3)' : '1px solid rgba(0,65,65,.28)',
          background: checked ? (dark ? 'var(--ciano-neon)' : 'var(--verde-sombra)') : 'transparent',
        }}
      >
        {checked && (
          <svg viewBox="0 0 16 16" width="11" height="11" fill="none" stroke={dark ? 'var(--verde-sombra)' : 'var(--ciano-neon)'} strokeWidth="2.4"><path d="M3 8.5l3.4 3.4L13 5" /></svg>
        )}
      </span>
      <span className="body-sm">{label}</span>
    </label>
  );
}
