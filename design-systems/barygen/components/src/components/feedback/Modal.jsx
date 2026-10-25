import React from 'react';

export function Modal({ title, children, actions, onClose, embedded = false, className = '' }) {
  const card = (
    <div className={`bry-modal ${className}`} role="dialog" aria-modal="true" aria-label={title}>
      <h5 className="bry-modal__title">{title}</h5>
      <div className="bry-modal__body">{children}</div>
      {actions && <div className="bry-modal__acts">{actions}</div>}
    </div>
  );
  if (embedded) return <div className="bry-modal-scrim">{card}</div>;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(10,10,10,.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, zIndex: 50 }}>
      <div onClick={e => e.stopPropagation()}>{card}</div>
    </div>
  );
}
