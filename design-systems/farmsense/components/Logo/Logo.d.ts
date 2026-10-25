import * as React from 'react';

/**
 * Marca FarmSense. Horizontal por padrão; compacta só quando falta largura.
 * @startingPoint section="Brand" subtitle="Marca em todas as variantes e superfícies" viewport="700x180"
 */
export interface LogoProps {
  shape?: 'horizontal' | 'compacta';
  /** cor sobre bege/branco · branca sobre Verde Sombra/Anil · escura em chapa única. */
  variant?: 'cor' | 'branca' | 'escura';
  /** Dimensione sempre pela largura; a altura fica em auto. */
  width?: number | string;
  height?: number | string;
  /** Prefixo até a raiz do design system, ex.: "..". */
  base?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
