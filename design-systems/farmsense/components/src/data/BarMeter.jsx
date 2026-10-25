import React from 'react';

const FILLS = { sombra: 'var(--verde-sombra)', anil: 'var(--verde-anil)', bege: 'var(--bege-escuro)', neon: 'var(--ciano-neon)' };

export function BarMeter({ label, value, max = 100, display, fill = 'sombra', tone = 'light', animate = true, className = '', ...rest }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const dark = tone === 'dark';
  return (
    <div className={className} style={{ color: dark ? '#fff' : 'var(--verde-sombra)' }} {...rest}>
      <div className="row" style={{ justifyContent: 'space-between', marginBottom: 4, gap: 8 }}>
        <span className="body-sm t-70">{label}</span>
        <span className="body-sm t-100" style={{ fontWeight: 500, fontVariantNumeric: 'tabular-nums' }}>{display != null ? display : value}</span>
      </div>
      <div style={{ height: 10, background: dark ? 'rgba(255,255,255,.10)' : 'rgba(0,65,65,.08)', borderRadius: 999, overflow: 'hidden' }}>
        <div className={animate ? 'fs-dv-bar' : ''} style={{ height: '100%', width: pct + '%', background: FILLS[fill] || FILLS.sombra }} />
      </div>
    </div>
  );
}
