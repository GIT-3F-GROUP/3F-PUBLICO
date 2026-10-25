import * as React from 'react';

/**
 * Aviso em bloco. A marca não usa vermelho nem amarelo — a severidade
 * vem do peso, da opacidade e da tinta verde.
 * @startingPoint section="Feedback" subtitle="Avisos, estados e vazios" viewport="700x280"
 */
export interface AlertProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  tone?: 'info' | 'ok' | 'atencao' | 'live';
  surface?: 'light' | 'dark';
  className?: string;
}
export declare function Alert(props: AlertProps): JSX.Element;
