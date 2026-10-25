import React from 'react';

export function QtyStepper({ value = 0, onChange, min = 0, max = 9999, step = 1, className = '' }) {
  const set = v => onChange && onChange(Math.max(min, Math.min(max, v)));
  return (
    <div className={`bry-qty ${className}`}>
      <button type="button" aria-label="Diminuir" onClick={() => set(value - step)}>−</button>
      <span>{value}</span>
      <button type="button" aria-label="Aumentar" onClick={() => set(value + step)}>+</button>
    </div>
  );
}
