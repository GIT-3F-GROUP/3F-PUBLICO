import React from 'react';

export function SearchField({ value, placeholder = 'Buscar…', tone = 'light', trailing, onChange, className = '', ...rest }) {
  const dark = tone === 'dark';
  return (
    <div
      className={['fs-fx-border-neon fs-t-base', className].filter(Boolean).join(' ')}
      style={{
        background: dark ? 'rgba(255,255,255,.06)' : '#fff',
        border: dark ? '1px solid rgba(51,255,194,.3)' : '1px solid rgba(0,65,65,.18)',
        borderRadius: 'var(--r-pill)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10,
        color: dark ? '#fff' : 'var(--verde-sombra)',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.6, flex: '0 0 auto' }}>
        <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
      </svg>
      <input value={value} placeholder={placeholder} onChange={onChange} style={{ flex: 1, border: 0, outline: 'none', background: 'transparent', font: 'inherit', fontSize: 15, color: 'inherit' }} {...rest} />
      {trailing}
    </div>
  );
}
