import React from 'react';

export function DotNav({ items = [], value, onChange, className = '', ...rest }) {
  return (
    <nav className={className} aria-label="Sumário" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14, mixBlendMode: 'difference', color: '#fff' }} {...rest}>
      {items.map((it) => {
        const id = typeof it === 'string' ? it : it.id;
        const label = typeof it === 'string' ? it : it.label;
        const on = id === value;
        return (
          <a
            key={id}
            href={'#' + id}
            title={label}
            aria-label={label}
            onClick={onChange ? (e) => { e.preventDefault(); onChange(id); } : undefined}
            className="fs-t-base"
            style={{ display: 'block', width: 8, height: 8, borderRadius: '50%', background: 'currentColor', color: 'inherit', opacity: on ? 1 : 0.4, transform: on ? 'scale(1.5)' : 'none', fontSize: 0, border: 0 }}
          />
        );
      })}
    </nav>
  );
}
