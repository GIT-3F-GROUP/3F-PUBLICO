import * as React from 'react';

/**
 * Card em vidro fosco — backdrop-filter blur 16 px, saturate 140 %.
 * @startingPoint section="Core" subtitle="Cards de vidro claro, tonal e escuro" viewport="700x260"
 */
export interface GlassCardProps {
  children?: React.ReactNode;
  /** tone = bege sobre bege · light = branco sobre bege · dark = sobre Verde Sombra. */
  tone?: 'tone' | 'light' | 'dark';
  /** Borda interna neon — só em tone="dark" e só quando o card mostra dado ao vivo. */
  accent?: 'ciano' | 'verde';
  pattern?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function GlassCard(props: GlassCardProps): JSX.Element;
