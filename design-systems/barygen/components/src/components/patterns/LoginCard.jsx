import React from 'react';
import { Logo } from '../core/Logo.jsx';

// surface="dark": cartão em preto tom sobre tom, para telas de fundo preto
export function LoginCard({ surface = 'light', children, className = '' }) {
  return (
    <div className={`bry-login ${surface === 'dark' ? 'bry-login--escuro' : ''} ${className}`}>
      <Logo type="horizontal" version={surface === 'dark' ? 'colorida-escuro' : 'colorida'} height={48} style={{ margin: '0 auto 22px' }} />
      <div className="bry-stack">{children}</div>
    </div>
  );
}
