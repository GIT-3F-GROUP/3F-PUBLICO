import * as React from 'react';

/** Pílula de estado com ponto de sinal. */
export interface StatusPillProps {
  children?: React.ReactNode;
  status?: 'ativo' | 'live' | 'inativo';
  surface?: 'light' | 'dark';
  className?: string;
}
export declare function StatusPill(props: StatusPillProps): JSX.Element;
