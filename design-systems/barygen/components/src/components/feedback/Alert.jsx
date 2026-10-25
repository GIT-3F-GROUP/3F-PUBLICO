import React from 'react';

const GLYPH = { success: '✓', warning: '!', error: '✕', info: 'i' };

export function Alert({ tone = 'info', title, children, className = '' }) {
  return (
    <div className={`bry-alert bry-alert--${tone} ${className}`} role={tone === 'error' ? 'alert' : 'status'}>
      <span className="bry-alert__ic">{GLYPH[tone]}</span>
      <span>{title && <b>{title}</b>}{children}</span>
    </div>
  );
}
