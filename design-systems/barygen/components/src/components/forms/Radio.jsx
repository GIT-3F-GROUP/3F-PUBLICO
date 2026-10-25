import React from 'react';

export function Radio({ label, className = '', ...rest }) {
  return <label className={`bry-radio ${className}`}><input type="radio" {...rest} />{label}</label>;
}
