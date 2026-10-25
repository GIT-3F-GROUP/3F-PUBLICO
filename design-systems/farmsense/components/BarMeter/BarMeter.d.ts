import * as React from 'react';

/** Barra horizontal tom-sobre-tom. Categorias se diferenciam pela escala bege/verde. */
export interface BarMeterProps {
  label?: string;
  value?: number;
  max?: number;
  /** Valor mostrado à direita, se diferente de value. */
  display?: React.ReactNode;
  fill?: 'sombra' | 'anil' | 'bege' | 'neon';
  tone?: 'light' | 'dark';
  animate?: boolean;
  className?: string;
}
export declare function BarMeter(props: BarMeterProps): JSX.Element;
