import React from 'react';

const TONES = {
  light: 'chip-tone-light',
  dark: 'chip-tone-dark',
  neon: 'chip-neon',
  'neon-green': 'chip-neon-green',
  outline: 'chip-outline',
  solid: 'chip-solid',
};

export function Chip({ children, tone = 'light', dot = false, className = '', ...rest }) {
  return (
    <span className={['chip', TONES[tone] || TONES.light, className].filter(Boolean).join(' ')} {...rest}>
      {dot && <span className={'neon-dot' + (tone === 'neon-green' ? ' green' : tone === 'light' || tone === 'outline' ? ' green' : '')} />}
      {children}
    </span>
  );
}
