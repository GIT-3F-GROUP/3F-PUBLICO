import * as React from 'react';
export interface AlertProps {
  tone?: 'success' | 'warning' | 'error' | 'info';
  /** Primeira frase, em negrito, com ponto final. */
  title?: string;
  children?: React.ReactNode;
  className?: string;
}
export declare function Alert(props: AlertProps): JSX.Element;
