import React from 'react';

export function StatRow({ items = [], tone = 'light', className = '', ...rest }) {
  return (
    <div className={['row', className].filter(Boolean).join(' ')} style={{ gap: 'var(--s-7)', color: tone === 'dark' ? '#fff' : 'var(--verde-sombra)' }} {...rest}>
      {items.map((it, i) => (
        <React.Fragment key={it.label}>
          {i > 0 && <span className="vrule" />}
          <div className="kpi">
            <div className="v t-100">{it.value}{it.unit && <sup>{it.unit}</sup>}</div>
            <div className="lab">{it.label}</div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
