import React from 'react';

const MAP = {
  'curvas-neon': 'fs-contour fs-contour--neon',
  'curvas-tonal': 'fs-contour fs-contour--tonal',
  'curvas-sombra': 'fs-contour fs-contour--sombra',
  'cristas-neon': 'fs-ridge fs-ridge--neon',
  'cristas-sombra': 'fs-ridge fs-ridge--sombra',
  grade: 'fs-grid',
  'grade-fina': 'fs-grid fs-grid--fine',
  'grade-larga': 'fs-grid fs-grid--wide',
  'grade-clara': 'fs-grid fs-grid--light',
  'grade-neon': 'fs-grid fs-grid--neon',
  pontos: 'fs-dots',
  'pontos-escuro': 'fs-dots fs-dots--dark',
  'pontos-neon': 'fs-dots fs-dots--neon',
  alvo: 'fs-target',
  'alvo-claro': 'fs-target fs-target--light',
  'alvo-centro': 'fs-target fs-target--center',
  varredura: 'fs-sweep',
  estratos: 'fs-strata',
  'estratos-claro': 'fs-strata--light',
  listras: 'fs-stripes',
  'listras-escuro': 'fs-stripes--dark',
  'listras-neon': 'fs-stripes--neon',
  linhas: 'fs-rows',
};

export function PatternLayer({ pattern = 'curvas-neon', corner = 'tr', animate = false, opacity, className = '', style, ...rest }) {
  const cls = [
    MAP[pattern] || MAP['curvas-neon'],
    corner ? 'fs-corner-' + corner : '',
    animate ? (pattern.startsWith('curvas') ? 'fs-am-contour' : pattern.startsWith('grade') ? 'fs-am-grid' : 'fs-am-drift') : '',
    className,
  ].filter(Boolean).join(' ');
  const needsBox = ['fs-stripes', 'fs-strata--light', 'fs-rows'].some((c) => cls.includes(c));
  return <div className={cls} style={{ ...(needsBox ? { position: 'absolute', inset: 0, pointerEvents: 'none' } : null), ...(opacity != null ? { opacity } : null), ...style }} aria-hidden="true" {...rest} />;
}
