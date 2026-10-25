import React from 'react';

export function Checkbox({ label, className = '', ...rest }) {
  return <label className={`bry-check ${className}`}><input type="checkbox" {...rest} />{label}</label>;
}
