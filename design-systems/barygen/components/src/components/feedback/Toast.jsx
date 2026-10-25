import React from 'react';

export function Toast({ children, onClose, className = '' }) {
  return (
    <div className={`bry-toast ${className}`} role="status">
      <span className="bry-toast__ic">✓</span>
      {children}
      {onClose && <span className="bry-toast__close" onClick={onClose}>✕</span>}
    </div>
  );
}
