import React from 'react';

export function Switch({ label, checked, onChange, disabled = false, className = '', ...rest }) {
  return (
    <label className={`bry-switch ${className}`} style={disabled ? { opacity: .5, cursor: 'not-allowed' } : undefined}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} {...rest} />
      <span className="bry-switch__track" />
      {label}
    </label>
  );
}
