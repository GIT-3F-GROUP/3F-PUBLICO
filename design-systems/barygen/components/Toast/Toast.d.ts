import * as React from 'react';
export interface ToastProps {
  children?: React.ReactNode;
  onClose?: () => void;
  /** Use 'bry-toast--escuro' em telas pretas: o aviso fica em preto tom sobre tom. O padrão é branco, para telas claras. */
  className?: string;
}
export declare function Toast(props: ToastProps): JSX.Element;
