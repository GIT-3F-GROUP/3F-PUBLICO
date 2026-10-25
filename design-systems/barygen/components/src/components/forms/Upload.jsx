import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Upload({ title = 'Arraste o arquivo', hint = 'ou clique para selecionar', formats = 'PDF, JPG ou PNG · máx. 10 MB', className = '', ...rest }) {
  return (
    <div className={`bry-upload ${className}`} {...rest}>
      <Icon name="enviar" size={28} style={{ color: 'var(--brand-laranjado)' }} />
      <span><b>{title}</b> {hint}</span>
      <span style={{ fontSize: 11.5 }}>{formats}</span>
    </div>
  );
}
