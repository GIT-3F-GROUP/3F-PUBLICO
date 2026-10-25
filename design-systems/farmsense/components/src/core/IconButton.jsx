import React from 'react';

export function IconButton({ children, label, tone = 'light', size = 40, onClick, className = '', ...rest }) {
  const light = tone === 'light';
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={['fs-hv-tint', 'fs-pr-scale', 'fs-fx-ring', className].filter(Boolean).join(' ')}
      style={{
        width: size, height: size, display: 'grid', placeItems: 'center',
        borderRadius: 'var(--r-pill)', cursor: 'pointer',
        background: 'transparent',
        border: light ? '1px solid rgba(0,65,65,.18)' : '1px solid rgba(255,255,255,.22)',
        color: light ? 'var(--verde-sombra)' : '#fff',
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
