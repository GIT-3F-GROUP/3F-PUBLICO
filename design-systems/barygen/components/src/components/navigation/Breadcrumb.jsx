import React from 'react';

export function Breadcrumb({ items = [], onNavigate, className = '' }) {
  return (
    <nav className={`bry-breadcrumb ${className}`} aria-label="Trilha">
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={it}>
            <span className={last ? 'bry-breadcrumb__cur' : ''} onClick={() => !last && onNavigate && onNavigate(it)}
              style={!last && onNavigate ? { cursor: 'pointer' } : undefined}>{it}</span>
            {!last && <span className="bry-breadcrumb__sep">/</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
