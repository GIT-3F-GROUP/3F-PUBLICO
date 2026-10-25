import * as React from 'react';

/** Placeholder de carregamento com varredura de 1,4 s. */
export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  radius?: string;
  surface?: 'light' | 'dark';
  /** Mais de uma linha: a última sai a 62 % da largura. */
  lines?: number;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Skeleton(props: SkeletonProps): JSX.Element;
