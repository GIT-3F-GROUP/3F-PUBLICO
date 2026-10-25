import * as React from 'react';

/**
 * Botão da FarmSense. Pílula, peso 500, 14 px, com elevação de 1 px no hover.
 * @startingPoint section="Core" subtitle="Botões em cinco variantes de superfície" viewport="700x160"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Variante por superfície. Em bege use primary-dark/ghost-light; em Verde Sombra use primary-light/ghost-dark/neon. */
  variant?: 'primary-dark' | 'primary-light' | 'ghost-dark' | 'ghost-light' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  /** Chevron que desliza 4 px no hover. */
  withArrow?: boolean;
  disabled?: boolean;
  /** Renderiza como <a> quando presente. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}
export declare function Button(props: ButtonProps): JSX.Element;
