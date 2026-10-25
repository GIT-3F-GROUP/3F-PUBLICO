import React from 'react';

export function KpiTile({ label, value, unit, delta, deltaTone = 'neutro', tone = 'light', className = '', ...rest }) {
  const deltaColor = deltaTone === 'positivo' ? 'var(--verde-anil)' : deltaTone === 'neon' ? 'var(--ciano-neon)' : 'inherit';
  return (
    <div className={['kpi', className].filter(Boolean).join(' ')} style={{ color: tone === 'dark' ? '#fff' : 'var(--verde-sombra)' }} {...rest}>
      {label && <div className="lab">{label}</div>}
      <div className="v t-100">{value}{unit && <sup>{unit}</sup>}</div>
      {delta && <div className="delta" style={{ color: deltaColor, opacity: deltaTone === 'neutro' ? 0.7 : 1 }}>{delta}</div>}
    </div>
  );
}
