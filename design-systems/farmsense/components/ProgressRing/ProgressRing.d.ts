import * as React from 'react';

/** Anel de progresso — avanço de fase, cobertura de amostragem. */
export interface ProgressRingProps {
  value?: number;
  size?: number;
  stroke?: number;
  color?: string;
  track?: string;
  label?: React.ReactNode;
  className?: string;
}
export declare function ProgressRing(props: ProgressRingProps): JSX.Element;
