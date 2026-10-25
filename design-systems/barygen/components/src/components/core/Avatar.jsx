import React from 'react';

export function Avatar({ initials, size = 'sm', tone = 'brand', src, alt = '', className = '', ...rest }) {
  return (
    <span className={`bry-avatar bry-avatar--${size}${tone !== 'brand' ? ' bry-avatar--' + tone : ''} ${className}`} {...rest}>
      {src ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} /> : initials}
    </span>
  );
}
