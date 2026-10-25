import React from 'react';

export function NeonDot({ color = 'ciano', pulse = false, className = '', ...rest }) {
  const cls = [
    'neon-dot',
    color === 'verde' ? 'green' : color === 'mudo' ? 'mute' : '',
    pulse ? 'fs-am-pulse' : '',
    className,
  ].filter(Boolean).join(' ');
  return <span className={cls} aria-hidden="true" {...rest} />;
}
