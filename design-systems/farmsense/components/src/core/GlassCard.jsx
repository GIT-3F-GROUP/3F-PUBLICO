import React from 'react';

export function GlassCard({ children, tone = 'tone', accent, pattern, className = '', style, ...rest }) {
  const toneCls = tone === 'dark' ? 'glass-dark' : tone === 'light' ? 'glass-light' : 'glass-tone';
  const accentCls = accent === 'ciano' ? 'with-neon' : accent === 'verde' ? 'with-neon-green' : '';
  return (
    <div className={['glass', toneCls, accentCls, className].filter(Boolean).join(' ')} style={style} {...rest}>
      {pattern && <div className={pattern} />}
      <div style={{ position: 'relative' }}>{children}</div>
    </div>
  );
}
