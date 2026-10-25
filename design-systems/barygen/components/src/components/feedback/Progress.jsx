import React from 'react';

export function Progress({ value = 0, label, className = '' }) {
  return (
    <div className={className} style={{ width: '100%', maxWidth: 380 }}>
      <div className="bry-progress" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
        <div className="bry-progress__fill" style={{ width: `${value}%` }} />
      </div>
      {label && <div style={{ marginTop: 8, fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>{label}</div>}
    </div>
  );
}
