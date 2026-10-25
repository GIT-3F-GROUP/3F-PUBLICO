import React from 'react';

export function Tile({ children, tone = 'light', pattern, padding, className = '', style, ...rest }) {
  const cls = ['tile', tone === 'dark' ? 'tile-dark' : tone === 'print' ? 'tile-print' : '', className].filter(Boolean).join(' ');
  const base = tone === 'dark'
    ? { background: 'var(--verde-sombra)', borderColor: 'transparent', color: '#fff' }
    : {};
  return (
    <div className={cls.replace('tile tile-dark', 'tile')} style={{ position: 'relative', overflow: 'hidden', ...base, ...(padding ? { padding } : null), ...style }} {...rest}>
      {pattern && <div className={pattern} />}
      <div style={{ position: 'relative' }}>{children}</div>
    </div>
  );
}
