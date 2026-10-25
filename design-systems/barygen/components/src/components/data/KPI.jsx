import React from 'react';

export function KPI({ label, value, trend, direction = 'flat', className = '' }) {
  return (
    <div className={`bry-kpi ${className}`}>
      <div className="bry-kpi__lb">{label}</div>
      <div className="bry-kpi__vl">{value}</div>
      {trend && <div className={`bry-kpi__tr is-${direction}`}>{direction === 'up' ? '▲ ' : direction === 'down' ? '▼ ' : ''}{trend}</div>}
    </div>
  );
}
