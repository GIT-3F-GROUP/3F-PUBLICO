import React from 'react';

export function SectionDivider({ kicker, title, description, stats = [], background = 'dark-1', className = '' }) {
  return (
    <section className={`bry-divider bry-sec-${background} ${className}`}>
      <div className="bry-wrap">
        {kicker && <div className="bry-divider__pk">{kicker}</div>}
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
        {stats.length > 0 && (
          <div className="bry-divider__stats">
            {stats.map(s => (
              <div key={s.label}>
                <div className="bry-divider__k">{s.value}</div>
                <div className="bry-divider__v">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
