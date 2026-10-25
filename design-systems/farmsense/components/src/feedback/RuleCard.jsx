import React from 'react';

export function RuleCard({ ok = true, title, children, className = '', ...rest }) {
  return (
    <div className={['rule', ok ? 'ok' : 'no', className].filter(Boolean).join(' ')} {...rest}>
      <div className="icon">{ok ? '✓' : '✕'}</div>
      <div>
        <div className="h4 t-100">{title}</div>
        {children && <p className="body-sm t-70" style={{ margin: '6px 0 0' }}>{children}</p>}
      </div>
    </div>
  );
}
