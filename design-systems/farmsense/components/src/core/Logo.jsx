import React from 'react';

const SRC = {
  'horizontal:cor': 'assets/Logos/logo-horizontal.png',
  'horizontal:branca': 'assets/Logos/logo-horizontal-mono-branca.svg',
  'horizontal:escura': 'assets/Logos/logo-horizontal-mono-escura.svg',
  'compacta:cor': 'assets/Logos/logo-compacta.png',
  'compacta:branca': 'assets/Logos/logo-compacta-mono-branca.svg',
  'compacta:escura': 'assets/Logos/logo-compacta-mono-escura.svg',
};

export function Logo({ shape = 'horizontal', variant = 'cor', width, height, base = '', className = '', style, ...rest }) {
  const key = shape + ':' + variant;
  const src = (base ? base.replace(/\/$/, '') + '/' : '') + (SRC[key] || SRC['horizontal:cor']);
  return (
    <img
      src={src}
      alt="FarmSense"
      className={className}
      style={{ width: width || (height ? 'auto' : '200px'), height: height || 'auto', ...style }}
      {...rest}
    />
  );
}
