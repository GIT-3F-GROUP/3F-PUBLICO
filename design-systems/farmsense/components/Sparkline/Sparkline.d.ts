import * as React from 'react';

/** Série temporal fina — NDVI, chuva acumulada, temperatura. */
export interface SparklineProps {
  points?: number[];
  color?: string;
  height?: number;
  fillOpacity?: number;
  /** Ponto luminoso na última leitura. */
  showHead?: boolean;
  animate?: boolean;
  className?: string;
}
export declare function Sparkline(props: SparklineProps): JSX.Element;
