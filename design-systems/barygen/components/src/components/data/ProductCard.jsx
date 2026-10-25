import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { Button } from '../core/Button.jsx';
import { Logo } from '../core/Logo.jsx';

export function ProductCard({ name, description, badge, badgeTone = 'brand', regions, tone = 'claro', logoSrc, action = 'Ver detalhes', onAction, className = '' }) {
  return (
    <div className={`bry-product ${className}`}>
      <div className="bry-product__ph" style={tone === 'amber' ? { background: 'var(--brand-amarelo-principal)' } : undefined}>
        {logoSrc ? <img src={logoSrc} alt="" /> : <Logo type="simbolo" version={tone === 'amber' ? 'mono-preta' : 'colorida'} height={48} title="" />}
      </div>
      <div className="bry-product__bd">
        {badge && <Badge tone={badgeTone}>{badge}</Badge>}
        <div className="bry-product__nm" style={{ marginTop: 12 }}>{name}</div>
        <div className="bry-product__ds">{description}</div>
        <div className="bry-product__ft">
          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>{regions}</span>
          <Button variant={tone === 'amber' ? 'outline' : 'secondary'} size="sm" onClick={onAction}>{action}</Button>
        </div>
      </div>
    </div>
  );
}
