import React from 'react';

export function Input({ state = 'default', className = '', ...rest }) {
  const s = state === 'error' ? ' is-error' : state === 'success' ? ' is-success' : '';
  return <input className={`bry-input${s} ${className}`} {...rest} />;
}
