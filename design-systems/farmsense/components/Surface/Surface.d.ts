import * as React from 'react';

/**
 * Superfície de seção full-bleed. Quatro claras, quatro escuras.
 * @startingPoint section="Layout" subtitle="Oito fundos de seção da marca" viewport="700x240"
 */
export interface SurfaceProps {
  children?: React.ReactNode;
  /** perola · rastro · estrada · papel (claras) — grade · relevo · alvo · solo (escuras). */
  variant?: 'perola' | 'rastro' | 'estrada' | 'papel' | 'grade' | 'relevo' | 'alvo' | 'solo';
  /** Envolve o conteúdo no container de 1280 px. */
  wrap?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Surface(props: SurfaceProps): JSX.Element;
