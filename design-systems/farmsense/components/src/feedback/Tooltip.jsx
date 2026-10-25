import React from 'react';

export function Tooltip({ children, content, side = 'top', className = '', ...rest }) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: { bottom: '100%', left: '50%', transform: 'translate(-50%,-8px)' },
    bottom: { top: '100%', left: '50%', transform: 'translate(-50%,8px)' },
    left: { right: '100%', top: '50%', transform: 'translate(-8px,-50%)' },
    right: { left: '100%', top: '50%', transform: 'translate(8px,-50%)' },
  }[side];
  return (
    <span
      className={className}
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      {...rest}
    >
      {children}
      {open && (
        <span
          role="tooltip"
          className="fs-in-fade"
          style={{
            position: 'absolute', ...pos, whiteSpace: 'nowrap', zIndex: 30,
            background: 'var(--verde-sombra)', color: '#fff', padding: '6px 10px',
            borderRadius: 'var(--r-xs)', fontSize: 12, letterSpacing: '.01em', boxShadow: 'var(--sh-3)',
          }}
        >
          {content}
        </span>
      )}
    </span>
  );
}
