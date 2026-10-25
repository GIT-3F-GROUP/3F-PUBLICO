import React from 'react';

export function Pagination({ page = 1, total = 1, onChange, tone = 'light', className = '', ...rest }) {
  const dark = tone === 'dark';
  const btn = (label, target, disabled) => (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onChange && onChange(target)}
      className="fs-hv-tint fs-pr-scale fs-fx-ring fs-t-base"
      style={{
        border: dark ? '1px solid rgba(255,255,255,.2)' : '1px solid rgba(0,65,65,.18)',
        background: 'transparent', color: 'inherit', font: 'inherit', fontSize: 13, fontWeight: 500,
        borderRadius: 'var(--r-pill)', padding: '8px 16px', cursor: disabled ? 'default' : 'pointer', opacity: disabled ? 0.35 : 1,
      }}
    >{label}</button>
  );
  return (
    <div className={['row-tight', className].filter(Boolean).join(' ')} style={{ gap: 10, color: dark ? '#fff' : 'var(--verde-sombra)' }} {...rest}>
      {btn('Anterior', page - 1, page <= 1)}
      <span className="label t-55 mono-num">{page} / {total}</span>
      {btn('Próxima', page + 1, page >= total)}
    </div>
  );
}
