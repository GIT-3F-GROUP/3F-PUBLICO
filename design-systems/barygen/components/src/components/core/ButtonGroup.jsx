import React from 'react';

export function ButtonGroup({ options = [], value, onChange, size = 'sm', className = '' }) {
  return (
    <div className={`bry-btn-group ${className}`} role="group">
      {options.map(o => {
        const active = o.value === value;
        return (
          <button key={o.value} type="button" onClick={() => onChange && onChange(o.value)}
            className={`bry-btn bry-btn--outline${size !== 'md' ? ' bry-btn--' + size : ''}`}
            style={active ? { background: 'var(--brand-preto)', color: 'var(--brand-amarelo-principal)', borderColor: 'var(--brand-preto)' } : undefined}>
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
