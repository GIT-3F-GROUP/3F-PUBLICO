import React from 'react';

export function Textarea({ state = 'default', rows = 4, className = '', ...rest }) {
  const s = state === 'error' ? ' is-error' : state === 'success' ? ' is-success' : '';
  return <textarea rows={rows} className={`bry-input${s} ${className}`} {...rest} />;
}
