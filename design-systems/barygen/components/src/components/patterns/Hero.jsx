import React from 'react';

export function Hero({ eyebrow, title, subtitle, actions, background = 'dark-2', className = '', style, children }) {
  return (
    <section className={`bry-hero bry-sec-${background} ${className}`} style={style}>
      {eyebrow && <div className="bry-hero__ey">{eyebrow}</div>}
      {title && <h3 className="bry-hero__ttl">{title}</h3>}
      {subtitle && <p className="bry-hero__sub">{subtitle}</p>}
      {actions && <div className="bry-hero__acts">{actions}</div>}
      {children}
    </section>
  );
}
