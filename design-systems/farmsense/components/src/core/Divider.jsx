import React from 'react';

export function Divider({ vertical = false, spacing, className = '', style, ...rest }) {
  if (vertical) return <span className={['vrule', className].filter(Boolean).join(' ')} style={style} {...rest} />;
  return <hr className={['hairline', className].filter(Boolean).join(' ')} style={{ ...(spacing ? { margin: spacing + ' 0' } : null), ...style }} {...rest} />;
}
