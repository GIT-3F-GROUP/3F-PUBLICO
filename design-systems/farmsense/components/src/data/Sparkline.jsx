import React from 'react';

export function Sparkline({ points = [], color = 'var(--ciano-neon)', height = 140, fillOpacity = 0.35, showHead = true, animate = true, className = '', ...rest }) {
  const w = 400, h = 140;
  const max = Math.max(...points, 1), min = Math.min(...points, 0);
  const span = max - min || 1;
  const step = points.length > 1 ? w / (points.length - 1) : w;
  const coords = points.map((p, i) => [i * step, h - ((p - min) / span) * (h - 20) - 10]);
  const d = coords.map(([x, y], i) => (i ? 'L ' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1)).join(' ');
  const area = d + ' L ' + w + ' ' + h + ' L 0 ' + h + ' Z';
  const id = React.useId ? React.useId().replace(/:/g, '') : 'spk';
  const head = coords[coords.length - 1] || [0, 0];
  return (
    <svg viewBox={'0 0 ' + w + ' ' + h} className={className} style={{ width: '100%', height }} aria-hidden="true" {...rest}>
      <defs>
        <linearGradient id={'g' + id} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity={fillOpacity} />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={'url(#g' + id + ')'} />
      <path d={d} stroke={color} strokeWidth="1.5" fill="none" className={animate ? 'fs-dv-draw' : ''} />
      {showHead && (
        <>
          <circle cx={head[0]} cy={head[1]} r="10" fill={color} opacity=".25" />
          <circle cx={head[0]} cy={head[1]} r="4" fill={color} />
        </>
      )}
    </svg>
  );
}
