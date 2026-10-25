import React from 'react';

export function Stage({ label, note, tone = 'light', direction = 'row', className = '', style, children }) {
  const cls = ['bry-stage', tone === 'dark' ? 'bry-stage--dark' : tone === 'soft' ? 'bry-stage--soft' : '',
    direction === 'col' ? 'bry-stage--col' : '', className].filter(Boolean).join(' ');
  return (
    <div>
      {label && <p className="bry-stage__label">{label}</p>}
      <div className={cls} style={style}>{children}</div>
      {note && <p className="bry-stage__note">{note}</p>}
    </div>
  );
}
