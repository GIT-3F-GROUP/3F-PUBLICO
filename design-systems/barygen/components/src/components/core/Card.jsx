import React from 'react';

export function Card({ eyebrow, pill, title, children, tone = 'light', className = '', style, ...rest }) {
  return (
    <div className={`bry-card${tone === 'dark' ? ' bry-card--dark' : ''} ${className}`} style={style} {...rest}>
      {(eyebrow || pill) && (
        <div className="bry-card__head">
          <span>{eyebrow}</span>
          {pill && <span style={{ background: 'var(--brand-amarelo-principal)', color: 'var(--text-body)', padding: '3px 9px', borderRadius: 'var(--r-pill)', fontSize: 10, letterSpacing: '.12em' }}>{pill}</span>}
        </div>
      )}
      {title && <h4 className="bry-card__title">{title}</h4>}
      {children && <div className="bry-card__desc">{children}</div>}
    </div>
  );
}
