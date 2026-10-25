import * as React from 'react';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** brand/dark são de marca; success…info são estados de sistema. */
  tone?: 'brand' | 'dark' | 'neutral' | 'success' | 'warning' | 'error' | 'info';
  /** Ponto de status à esquerda: use nos tons de estado. */
  dot?: boolean;
}
export declare function Badge(props: BadgeProps): JSX.Element;
