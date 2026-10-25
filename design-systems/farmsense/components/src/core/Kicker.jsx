import React from 'react';

export function Kicker({ children, tone = 'default', className = '', ...rest }) {
  const style = tone === 'neon'
    ? { color: 'var(--ciano-neon)', opacity: 1 }
    : tone === 'neon-green'
      ? { color: 'var(--verde-neon)', opacity: 1 }
      : undefined;
  return <span className={['kicker', className].filter(Boolean).join(' ')} style={style} {...rest}>{children}</span>;
}
