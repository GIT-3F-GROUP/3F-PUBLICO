import React from 'react';

const SURFACES = {
  perola: 'fs-light-perola', rastro: 'fs-light-rastro', estrada: 'fs-light-estrada', papel: 'fs-light-papel',
  grade: 'fs-dark-grade', relevo: 'fs-dark-relevo', alvo: 'fs-dark-alvo', solo: 'fs-dark-solo',
};
const DARK = ['grade', 'relevo', 'alvo', 'solo'];

export function Surface({ children, variant = 'perola', wrap = true, className = '', style, ...rest }) {
  const dark = DARK.includes(variant);
  return (
    <section
      className={['fs-surface', SURFACES[variant] || SURFACES.perola, dark ? 'on-dark' : 'on-light', className].filter(Boolean).join(' ')}
      style={style}
      {...rest}
    >
      {wrap ? <div className="wrap">{children}</div> : children}
    </section>
  );
}
