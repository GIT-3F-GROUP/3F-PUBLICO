import React from 'react';

export function Spinner({ size = 32, className = '', style }) {
  return <div className={`bry-spinner ${className}`} role="status" aria-label="Carregando"
    style={{ width: size, height: size, borderWidth: Math.max(2, Math.round(size / 11)), ...style }} />;
}
