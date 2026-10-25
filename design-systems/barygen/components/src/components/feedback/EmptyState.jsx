import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function EmptyState({ icon = 'buscar', title, children, action, className = '' }) {
  return (
    <div className={`bry-empty ${className}`}>
      <Icon name={icon} size={32} style={{ color: 'var(--ui-border-strong)' }} />
      <div className="bry-empty__ttl">{title}</div>
      {children && <p>{children}</p>}
      {action}
    </div>
  );
}
