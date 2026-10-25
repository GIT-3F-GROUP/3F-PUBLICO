import React from 'react';

const VARIANTS = {
  'primary-dark': 'btn-primary-dark',
  'primary-light': 'btn-primary-light',
  'ghost-dark': 'btn-ghost-dark',
  'ghost-light': 'btn-ghost-light',
  neon: 'btn-neon',
};

export function Button({
  children,
  variant = 'primary-dark',
  size = 'md',
  withArrow = false,
  disabled = false,
  href,
  onClick,
  className = '',
  ...rest
}) {
  const cls = [
    'btn',
    VARIANTS[variant] || VARIANTS['primary-dark'],
    size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '',
    'fs-hv-lift',
    'fs-pr-scale',
    'fs-fx-ring',
    withArrow ? 'fs-hv-arrow' : '',
    disabled ? 'is-disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  const inner = (
    <>
      {children}
      {withArrow && (
        <svg className="chev" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      )}
    </>
  );

  if (href) return <a className={cls} href={href} onClick={onClick} {...rest}>{inner}</a>;
  return <button className={cls} type="button" disabled={disabled} onClick={onClick} {...rest}>{inner}</button>;
}
