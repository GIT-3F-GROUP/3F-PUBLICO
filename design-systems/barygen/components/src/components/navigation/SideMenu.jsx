import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function SideMenu({ items = [], active, onNavigate, className = '' }) {
  return (
    <nav className={`bry-sidemenu ${className}`}>
      {items.map(it => (
        <a key={it.label} className={it.label === active ? 'is-active' : ''}
          onClick={() => onNavigate && onNavigate(it.label)}>
          {it.icon && <Icon name={it.icon} size={16} strokeWidth={2} />}
          {it.label}
        </a>
      ))}
    </nav>
  );
}
