import React from 'react';

export function CTAStrip({ title, action, className = '' }) {
  return (
    <div className={`bry-cta-strip ${className}`}>
      <div className="bry-cta-strip__tt">{title}</div>
      {action}
    </div>
  );
}
