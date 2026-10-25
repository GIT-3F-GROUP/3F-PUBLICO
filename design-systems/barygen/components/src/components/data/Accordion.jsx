import React from 'react';

export function Accordion({ items = [], className = '' }) {
  return (
    <div className={`bry-accordion ${className}`}>
      {items.map((it, i) => (
        <details key={it.q} className="bry-accordion__item" open={it.open}>
          <summary>{it.q}</summary>
          <div className="bry-accordion__body">{it.a}</div>
        </details>
      ))}
    </div>
  );
}
