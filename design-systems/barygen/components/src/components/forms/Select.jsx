import React from 'react';

export function Select({ options = [], state = 'default', className = '', children, ...rest }) {
  const s = state === 'error' ? ' is-error' : state === 'success' ? ' is-success' : '';
  return (
    <select className={`bry-input${s} ${className}`} {...rest}>
      {children || options.map(o => (
        typeof o === 'string'
          ? <option key={o} value={o}>{o}</option>
          : <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}
