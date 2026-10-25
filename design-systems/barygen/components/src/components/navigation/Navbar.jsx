import React from 'react';
import { Logo } from '../core/Logo.jsx';

export function Navbar({ links = [], active, onNavigate, tone = 'dark', action, className = '' }) {
  return (
    <nav className={`bry-navbar${tone === 'light' ? ' bry-navbar--light' : ''} ${className}`}>
      <Logo type="horizontal-nome" version={tone === 'light' ? 'colorida' : 'colorida-escuro'} height={30} />
      <div className="bry-navbar__links">
        {links.map(l => (
          <span key={l} className={l === active ? 'is-active' : ''} onClick={() => onNavigate && onNavigate(l)}>{l}</span>
        ))}
      </div>
      {action}
    </nav>
  );
}
