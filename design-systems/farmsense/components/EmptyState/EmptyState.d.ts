import * as React from 'react';

/** Estado vazio com malha de amostragem ao fundo. */
export interface EmptyStateProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  action?: React.ReactNode;
  surface?: 'light' | 'dark';
  className?: string;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
