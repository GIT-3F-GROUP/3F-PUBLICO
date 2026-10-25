import React from 'react';

export function Range({ label, min = 0, max = 100, className = '', ...rest }) {
  return (
    <div className={className}>
      <input type="range" className="bry-range" min={min} max={max} {...rest} />
      {label && <div style={{ fontSize: 10.5, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginTop: 4 }}>{label}</div>}
    </div>
  );
}
