import React from 'react';
import { Logo } from '../core/Logo.jsx';

const BG = { perola: 'bg-perola', rastro: 'bg-rastro', estrada: 'bg-estrada', escuro: 'bg-escuro', sombra: 'bg-sombra', anil: 'bg-anil', branco: 'bg-white' };
const DARK_BG = ['sombra', 'anil'];

export function LogoCard({ background = 'perola', shape = 'horizontal', variant, tag, base = '', className = '', ...rest }) {
  const auto = variant || (DARK_BG.includes(background) ? 'branca' : 'cor');
  return (
    <div className={['logo-card', BG[background], shape === 'compacta' ? 'has-compact' : '', className].filter(Boolean).join(' ')} {...rest}>
      <Logo base={base} shape={shape} variant={auto} width="100%" style={{ maxWidth: shape === 'compacta' ? 180 : 320 }} />
      {tag && <span className="tag" style={DARK_BG.includes(background) ? { color: 'rgba(255,255,255,.6)' } : undefined}>{tag}</span>}
    </div>
  );
}
