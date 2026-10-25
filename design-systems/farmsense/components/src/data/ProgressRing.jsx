import React from 'react';

export function ProgressRing({ value = 0, size = 96, stroke = 6, color = 'var(--verde-sombra)', track = 'rgba(0,65,65,.10)', label, className = '', ...rest }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c - (Math.max(0, Math.min(100, value)) / 100) * c;
  return (
    <div className={className} style={{ position: 'relative', width: size, height: size }} {...rest}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} stroke={track} strokeWidth={stroke} fill="none" />
        <circle cx={size / 2} cy={size / 2} r={r} stroke={color} strokeWidth={stroke} fill="none" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={off} style={{ transition: 'stroke-dashoffset var(--d-slower) var(--e-entrance)' }} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', fontVariantNumeric: 'tabular-nums', fontWeight: 800, fontSize: size * 0.24, letterSpacing: '-.02em' }}>
        {label != null ? label : Math.round(value) + '%'}
      </div>
    </div>
  );
}
