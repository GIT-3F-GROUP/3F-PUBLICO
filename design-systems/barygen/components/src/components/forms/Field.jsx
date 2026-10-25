import React from 'react';

export function Field({ label, required = false, helper, state, htmlFor, className = '', style, children }) {
  const cls = state === 'error' ? 'bry-helper bry-helper--err' : state === 'success' ? 'bry-helper bry-helper--ok' : 'bry-helper';
  return (
    <div className={`bry-field ${className}`} style={style}>
      {label && <label className="bry-field__label" htmlFor={htmlFor}>{label}{required && <span className="bry-field__req"> *</span>}</label>}
      {children}
      {helper && <span className={cls}>{helper}</span>}
    </div>
  );
}
