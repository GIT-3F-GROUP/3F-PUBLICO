import * as React from 'react';

/**
 * Etiqueta em pílula: safra, talhão, estado, versão.
 * @startingPoint section="Core" subtitle="Chips de metadado em seis tons" viewport="700x120"
 */
export interface ChipProps {
  children?: React.ReactNode;
  tone?: 'light' | 'dark' | 'neon' | 'neon-green' | 'outline' | 'solid';
  /** Ponto de sinal à esquerda — use só quando indicar estado ao vivo. */
  dot?: boolean;
  className?: string;
}
export declare function Chip(props: ChipProps): JSX.Element;
