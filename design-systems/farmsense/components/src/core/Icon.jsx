import React from 'react';

export function Icon({ name, size = 20, stroke = 1.5, color = 'currentColor', className = '', style, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      try { window.lucide.createIcons({ nameAttr: 'data-lucide', attrs: {}, icons: window.lucide.icons }); } catch (e) { /* noop */ }
    }
  }, [name]);
  return (
    <i
      ref={ref}
      data-lucide={name}
      className={className}
      style={{ display: 'inline-flex', width: size, height: size, color, strokeWidth: stroke, ...style }}
      aria-hidden="true"
      {...rest}
    />
  );
}
