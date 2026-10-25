import React from 'react';

export function StatusPill({ children, status = 'ativo', surface = 'light', className = '', ...rest }) {
  const map = {
    ativo: { dot: 'green', tone: surface === 'dark' ? 'chip-neon-green' : 'chip-tone-light' },
    live: { dot: '', tone: 'chip-neon' },
    inativo: { dot: 'mute', tone: surface === 'dark' ? 'chip-tone-dark' : 'chip-tone-light' },
  };
  const cfg = map[status] || map.ativo;
  return (
    <span className={['chip', cfg.tone, status === 'live' ? 'fs-am-pulse' : '', className].filter(Boolean).join(' ')} {...rest}>
      <span className={'neon-dot ' + cfg.dot} />
      {children}
    </span>
  );
}
