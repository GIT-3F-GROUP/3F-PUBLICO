import * as React from 'react';

/** Sobretítulo em caixa alta com fio de 28 px à esquerda. */
export interface KickerProps {
  children?: React.ReactNode;
  tone?: 'default' | 'neon' | 'neon-green';
  className?: string;
}
export declare function Kicker(props: KickerProps): JSX.Element;
