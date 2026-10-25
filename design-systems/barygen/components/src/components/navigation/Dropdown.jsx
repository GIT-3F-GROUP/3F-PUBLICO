import React from 'react';

export function Dropdown({ items = [], onSelect, className = '', style }) {
  return (
    <div className={`bry-dropdown ${className}`} style={style} role="menu">
      {items.map((it, i) => it.separator
        ? <div key={'sep' + i} className="bry-dropdown__sep" />
        : <a key={it.label} role="menuitem" className={it.danger ? 'is-danger' : ''}
            onClick={() => onSelect && onSelect(it.label)}>{it.label}</a>)}
    </div>
  );
}
