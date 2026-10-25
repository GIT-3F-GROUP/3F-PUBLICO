import React from 'react';

export function Skeleton({ lines = [40, 100, 86, 62], className = '' }) {
  return (
    <div className={`bry-skeleton ${className}`} aria-hidden="true">
      {lines.map((w, i) => (
        <div key={i} className="bry-skeleton__sk" style={{ height: i === 0 ? 14 : 10, width: `${w}%` }} />
      ))}
    </div>
  );
}
