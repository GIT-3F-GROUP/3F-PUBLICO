import React from 'react';

/* Glifos oficiais do guia de interface BARYGEN v03: traço 1,5px, grade 24px,
   cantos arredondados. Nenhum ícone foi inventado: os caminhos vêm do manual. */
export const BARYGEN_ICONS = {
  buscar: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>,
  conta: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
  agenda: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
  local: <><path d="M12 22s-7-7.5-7-13a7 7 0 1 1 14 0c0 5.5-7 13-7 13z" /><circle cx="12" cy="9" r="2.5" /></>,
  telefone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  email: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 6L2 7" /></>,
  avancar: <path d="M5 12h14M13 6l6 6-6 6" />,
  voltar: <path d="M19 12H5M11 18l-6-6 6-6" />,
  baixar: <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />,
  enviar: <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />,
  filtrar: <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  fechar: <path d="M18 6L6 18M6 6l12 12" />,
  confirmar: <path d="M20 6L9 17l-5-5" />,
  casa: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
};

export function Icon({ name, size = 24, strokeWidth = 1.5, className = '', style, ...rest }) {
  const glyph = BARYGEN_ICONS[name];
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" className={className} style={style} {...rest}
    >
      {glyph || null}
    </svg>
  );
}
