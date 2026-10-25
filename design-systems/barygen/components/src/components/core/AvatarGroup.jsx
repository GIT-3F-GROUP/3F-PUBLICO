import React from 'react';
import { Avatar } from './Avatar.jsx';

export function AvatarGroup({ people = [], max = 3, size = 'sm', className = '' }) {
  const shown = people.slice(0, max);
  const rest = people.length - shown.length;
  return (
    <div className={`bry-avatar-group ${className}`}>
      {shown.map((p, i) => (
        <Avatar key={p.initials + i} initials={p.initials} src={p.src} size={size} tone={i % 2 ? 'dark' : 'brand'} />
      ))}
      {rest > 0 && <Avatar initials={`+${rest}`} size={size} tone="muted" />}
    </div>
  );
}
