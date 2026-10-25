import * as React from 'react';

/** Citação editorial em Georgia itálico, com aspa d'água atrás. */
export interface QuoteBlockProps {
  children?: React.ReactNode;
  author?: string;
  role?: string;
  tone?: 'light' | 'dark';
  mark?: boolean;
  className?: string;
}
export declare function QuoteBlock(props: QuoteBlockProps): JSX.Element;
