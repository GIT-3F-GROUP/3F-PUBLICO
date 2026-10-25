import * as React from 'react';

/** Dica curta em Verde Sombra sólido. Uma linha, sem pontuação final. */
export interface TooltipProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
