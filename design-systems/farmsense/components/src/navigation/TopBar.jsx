import React from 'react';
import { Logo } from '../core/Logo.jsx';

export function TopBar({ items = [], active, onSelect, actions, tone = 'dark', base = '', className = '', ...rest }) {
  const dark = tone === 'dark';
  return (
    <header
      className={['row', className].filter(Boolean).join(' ')}
      style={{
        justifyContent: 'space-between', padding: '18px var(--s-6)', gap: 'var(--s-6)',
        borderBottom: dark ? '1px solid rgba(255,255,255,.12)' : '1px solid rgba(0,65,65,.10)',
        color: dark ? '#fff' : 'var(--verde-sombra)',
      }}
      {...rest}
    >
      <Logo base={base} variant={dark ? 'branca' : 'cor'} width={168} />
      <nav className="row-tight" style={{ gap: 'var(--s-5)' }}>
        {items.map((it) => (
          <button
            key={it}
            type="button"
            onClick={() => onSelect && onSelect(it)}
            className="fs-hv-underline fs-fx-ring fs-t-base"
            style={{ border: 0, background: 'transparent', font: 'inherit', fontSize: 14, fontWeight: 500, color: 'inherit', cursor: 'pointer', opacity: it === active ? 1 : 0.6, padding: '4px 0' }}
          >{it}</button>
        ))}
      </nav>
      <div className="row-tight" style={{ gap: 'var(--s-3)' }}>{actions}</div>
    </header>
  );
}
