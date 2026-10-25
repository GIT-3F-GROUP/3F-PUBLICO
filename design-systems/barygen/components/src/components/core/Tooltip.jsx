import React from 'react';

export function Tooltip({ label, children, className = '' }) {
  if (!children) return <span className={`bry-tooltip ${className}`}>{label}</span>;
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }} className={className}>
      {children}
      <span className="bry-tooltip" role="tooltip"
        style={{ position: 'absolute', bottom: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)' }}>
        {label}
      </span>
    </span>
  );
}
