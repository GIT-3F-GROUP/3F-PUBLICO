import * as React from 'react';

/** Ponto de sinal — o único lugar onde o neon aparece sozinho. */
export interface NeonDotProps {
  color?: 'ciano' | 'verde' | 'mudo';
  /** Pulsa a 2,4 s quando o dado é ao vivo. */
  pulse?: boolean;
  className?: string;
}
export declare function NeonDot(props: NeonDotProps): JSX.Element;
