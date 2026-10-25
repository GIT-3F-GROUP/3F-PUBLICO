import React from 'react';

export function Swatch({ name, hex, rgb, tag, dark = false, minHeight = 200, className = '', ...rest }) {
  return (
    <div
      className={['swatch', dark ? 'dark' : 'light', className].filter(Boolean).join(' ')}
      style={{ background: hex, minHeight, border: hex && hex.toUpperCase() === '#F7F3ED' ? '1px solid rgba(0,65,65,.06)' : undefined }}
      {...rest}
    >
      {tag && <span className="corner-tag">{tag}</span>}
      <div>
        <div className="name">{name}</div>
        <div className="hex" style={{ marginTop: 'var(--s-2)' }}>{hex}</div>
        {rgb && <div className="rgb">RGB {rgb}</div>}
      </div>
    </div>
  );
}
