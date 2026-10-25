import React from 'react';

export function InputGroup({ addon, addonSide = 'left', className = '', children }) {
  return (
    <div className={`bry-input-group ${className}`}>
      {addonSide === 'left' && <span className="bry-input-group__addon">{addon}</span>}
      {children}
      {addonSide === 'right' && (
        <span className="bry-input-group__addon" style={{ borderRadius: '0 8px 8px 0', border: '1.5px solid var(--ui-border)', borderLeft: 'none' }}>{addon}</span>
      )}
    </div>
  );
}
