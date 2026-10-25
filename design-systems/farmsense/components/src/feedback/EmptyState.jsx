import React from 'react';

export function EmptyState({ title, children, action, surface = 'light', className = '', ...rest }) {
  const dark = surface === 'dark';
  return (
    <div
      className={['fs-in-fade', className].filter(Boolean).join(' ')}
      style={{
        position: 'relative', overflow: 'hidden', textAlign: 'center', padding: 'var(--s-8) var(--s-6)',
        borderRadius: 'var(--r-md)',
        border: dark ? '1px dashed rgba(255,255,255,.2)' : '1px dashed rgba(0,65,65,.22)',
        color: dark ? '#fff' : 'var(--verde-sombra)',
      }}
      {...rest}
    >
      <div className={dark ? 'fs-dots fs-dots--dark' : 'fs-dots'} />
      <div style={{ position: 'relative' }}>
        <div className="h3 t-100">{title}</div>
        {children && <p className="body-sm t-70" style={{ margin: '10px auto 0', maxWidth: '46ch' }}>{children}</p>}
        {action && <div style={{ marginTop: 'var(--s-5)' }}>{action}</div>}
      </div>
    </div>
  );
}
