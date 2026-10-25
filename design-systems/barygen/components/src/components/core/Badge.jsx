import React from 'react';

export function Badge({ tone = 'brand', dot = false, className = '', children, ...rest }) {
  return (
    <span className={`bry-badge bry-badge--${tone} ${className}`} {...rest}>
      {dot && <span className="bry-badge__dot" />}
      {children}
    </span>
  );
}
