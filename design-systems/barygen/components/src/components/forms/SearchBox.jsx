import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function SearchBox({ placeholder = 'Buscar', className = '', ...rest }) {
  return (
    <div className={`bry-search ${className}`}>
      <Icon name="buscar" size={16} strokeWidth={2} style={{ color: 'var(--text-muted)' }} />
      <input className="bry-input" placeholder={placeholder} {...rest} />
    </div>
  );
}
