import React from 'react';

export function IconButton({ variant = 'secondary', size = 'md', round = false, label, className = '', children, ...rest }) {
  const cls = ['bry-btn', `bry-btn--${variant}`, 'bry-btn--icon',
    size !== 'md' ? `bry-btn--${size}` : '', round ? 'bry-btn--round' : '', className]
    .filter(Boolean).join(' ');
  return <button className={cls} aria-label={label} {...rest}>{children}</button>;
}
