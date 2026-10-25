import React from 'react';

export function PillTabs({ tabs = [], value, onChange, className = '' }) {
  return (
    <div className={`bry-tabs-pill ${className}`} role="tablist">
      {tabs.map(t => (
        <button key={t} role="tab" aria-selected={t === value} type="button"
          className={`bry-tabs-pill__tab${t === value ? ' is-active' : ''}`}
          onClick={() => onChange && onChange(t)}>{t}</button>
      ))}
    </div>
  );
}
