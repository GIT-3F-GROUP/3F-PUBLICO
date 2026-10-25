import React from 'react';

export function Button({
  variant = 'primary', size = 'md', loading = false, disabled = false,
  iconLeft, iconRight, fullWidth = false, as: Tag = 'button',
  className = '', style, children, ...rest
}) {
  const cls = [
    'bry-btn', `bry-btn--${variant}`,
    size !== 'md' ? `bry-btn--${size}` : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <Tag className={cls} disabled={disabled || loading}
      style={fullWidth ? { width: '100%', ...style } : style} {...rest}>
      {loading && <span className="bry-btn__spin" />}
      {!loading && iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
