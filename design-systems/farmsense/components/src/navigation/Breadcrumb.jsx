import React from 'react';

export function Breadcrumb({ items = [], tone = 'light', className = '', ...rest }) {
  return (
    <nav className={['row-tight', className].filter(Boolean).join(' ')} aria-label="Trilha" style={{ gap: 8, color: tone === 'dark' ? '#fff' : 'var(--verde-sombra)' }} {...rest}>
      {items.map((it, i) => {
        const label = typeof it === 'string' ? it : it.label;
        const href = typeof it === 'string' ? undefined : it.href;
        const last = i === items.length - 1;
        return (
          <React.Fragment key={label}>
            {i > 0 && <span className="serif" style={{ opacity: 0.4, fontSize: 13 }}>·</span>}
            {last || !href
              ? <span className="label" style={{ opacity: last ? 1 : 0.55 }}>{label}</span>
              : <a href={href} className="label fs-hv-underline" style={{ opacity: 0.55, textDecoration: 'none', color: 'inherit', border: 0 }}>{label}</a>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
