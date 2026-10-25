import React from 'react';

export function Chip({ selected = false, removable = false, onRemove, className = '', children, ...rest }) {
  return (
    <button type="button" className={`bry-chip${selected ? ' is-selected' : ''} ${className}`} {...rest}>
      {children}
      {removable && (
        <span className="bry-chip__x" onClick={e => { e.stopPropagation(); onRemove && onRemove(); }}>✕</span>
      )}
    </button>
  );
}
