import * as React from 'react';
export interface StageProps {
  /** Rótulo micro acima do palco. */
  label?: string;
  /** Nota de uso abaixo do palco. */
  note?: string;
  tone?: 'light' | 'soft' | 'dark';
  direction?: 'row' | 'col';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Stage(props: StageProps): JSX.Element;
