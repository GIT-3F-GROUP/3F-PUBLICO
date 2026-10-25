import React from 'react';

export function Skeleton({ width = '100%', height = 12, radius = 'var(--r-xs)', surface = 'light', lines = 1, className = '', style, ...rest }) {
  const cls = surface === 'dark' ? 'fs-ld-skeleton-dark' : 'fs-ld-skeleton';
  if (lines > 1) {
    return (
      <div className={className} style={{ display: 'grid', gap: 8, ...style }} {...rest}>
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className={cls} style={{ width: i === lines - 1 ? '62%' : width, height, borderRadius: radius }} />
        ))}
      </div>
    );
  }
  return <div className={[cls, className].filter(Boolean).join(' ')} style={{ width, height, borderRadius: radius, ...style }} {...rest} />;
}
