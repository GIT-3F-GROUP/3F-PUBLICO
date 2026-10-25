import * as React from 'react';
export interface CTAStripProps {
  /** Convite direto, uma frase, com ponto final. */
  title: string;
  action?: React.ReactNode;
  className?: string;
}
export declare function CTAStrip(props: CTAStripProps): JSX.Element;
