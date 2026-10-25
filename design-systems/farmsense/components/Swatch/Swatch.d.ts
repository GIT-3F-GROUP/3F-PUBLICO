import * as React from 'react';

/** Amostra de cor do manual: nome, hex e RGB, com etiqueta de função. */
export interface SwatchProps {
  name?: string;
  hex?: string;
  rgb?: string;
  /** Função do token, ex.: "Surface · default", "Ink · primary". */
  tag?: string;
  /** true quando o fundo pede tinta branca. */
  dark?: boolean;
  minHeight?: number;
  className?: string;
}
export declare function Swatch(props: SwatchProps): JSX.Element;
