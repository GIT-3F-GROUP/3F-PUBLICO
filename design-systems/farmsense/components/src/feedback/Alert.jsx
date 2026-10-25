import React from 'react';

export function Alert({ title, children, tone = 'info', surface = 'light', className = '', ...rest }) {
  const dark = surface === 'dark';
  const accent = tone === 'ok' ? 'var(--verde-anil)' : tone === 'live' ? 'var(--ciano-neon)' : 'var(--verde-sombra)';
  return (
    <div
      className={['fs-in-up', className].filter(Boolean).join(' ')}
      style={{
        display: 'flex', gap: 'var(--s-3)', alignItems: 'flex-start', padding: 'var(--s-4)',
        borderRadius: 'var(--r-sm)', borderLeft: '3px solid ' + accent,
        background: dark ? 'rgba(255,255,255,.05)' : 'rgba(0,65,65,.05)',
        color: dark ? '#fff' : 'var(--verde-sombra)',
      }}
      {...rest}
    >
      <span style={{ width: 22, height: 22, flex: '0 0 auto', borderRadius: '50%', display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 700, background: tone === 'ok' ? 'var(--verde-sombra)' : dark ? 'rgba(255,255,255,.12)' : 'rgba(0,65,65,.1)', color: tone === 'ok' ? 'var(--ciano-neon)' : 'inherit' }}>
        {tone === 'ok' ? '✓' : tone === 'atencao' ? '!' : '·'}
      </span>
      <div>
        {title && <div className="h4 t-100">{title}</div>}
        {children && <p className="body-sm t-70" style={{ margin: title ? '6px 0 0' : 0 }}>{children}</p>}
      </div>
    </div>
  );
}
