import React from 'react';

export function Tabs({ items = [], value, onChange, tone = 'light', className = '', ...rest }) {
  const dark = tone === 'dark';
  const active = value != null ? value : items[0];
  return (
    <div className={['row-tight', className].filter(Boolean).join(' ')} style={{ gap: 0, borderBottom: dark ? '1px solid rgba(255,255,255,.14)' : '1px solid rgba(0,65,65,.12)' }} {...rest}>
      {items.map((it) => {
        const on = it === active;
        return (
          <button
            key={it}
            type="button"
            onClick={() => onChange && onChange(it)}
            className="fs-t-base fs-fx-ring"
            style={{
              border: 0, background: 'transparent', cursor: 'pointer', font: 'inherit', fontWeight: 500, fontSize: 14,
              padding: '10px 18px', color: dark ? '#fff' : 'var(--verde-sombra)', opacity: on ? 1 : 0.5,
              boxShadow: on ? 'inset 0 -2px 0 ' + (dark ? 'var(--ciano-neon)' : 'var(--verde-sombra)') : 'none',
            }}
          >
            {it}
          </button>
        );
      })}
    </div>
  );
}
