import React from 'react';

export function Tabs({ tabs = [], value, onChange, className = '' }) {
  return (
    <div className={`bry-tabs ${className}`} role="tablist">
      {tabs.map(t => (
        <button key={t} role="tab" aria-selected={t === value} type="button"
          className={`bry-tabs__tab${t === value ? ' is-active' : ''}`}
          onClick={() => onChange && onChange(t)}>{t}</button>
      ))}
    </div>
  );
}
