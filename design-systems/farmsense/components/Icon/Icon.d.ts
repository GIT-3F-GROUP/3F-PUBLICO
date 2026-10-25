import * as React from 'react';

/**
 * Ícone de linha. Conjunto Lucide (traço 1,5 px, viewBox 24) — substituição
 * documentada: a fonte original desenhava os ícones inline no mesmo estilo.
 * Requer <script src="https://unpkg.com/lucide@latest"></script> na página.
 */
export interface IconProps {
  /** Nome Lucide em kebab-case, ex.: "map-pin", "trending-up", "layers". */
  name: string;
  size?: number;
  /** Espessura do traço. O padrão da marca é 1,5. */
  stroke?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
