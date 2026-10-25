import * as React from 'react';
export interface TooltipProps {
  /** Texto curto: uma linha, sem ponto final. */
  label: string;
  /** Alvo do tooltip. Sem children, renderiza apenas a bolha (para catálogos). */
  children?: React.ReactNode;
  className?: string;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
