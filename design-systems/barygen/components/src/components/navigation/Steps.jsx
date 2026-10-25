import React from 'react';

export function Steps({ steps = [], current = 0, className = '' }) {
  return (
    <div className={`bry-steps ${className}`}>
      {steps.map((s, i) => {
        const st = i < current ? 'is-done' : i === current ? 'is-cur' : '';
        return (
          <div key={s} className={`bry-steps__stp ${st}`}>
            <span className="bry-steps__dot">{i < current ? '✓' : i + 1}</span>
            <span className="bry-steps__lb">{s}</span>
          </div>
        );
      })}
    </div>
  );
}
