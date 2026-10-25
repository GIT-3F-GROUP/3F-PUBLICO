import * as React from 'react';

/** Cabeçalho de seção: numeração em Georgia itálico + kicker. */
export interface SectionHeaderProps {
  /** Número do capítulo, sem o §. Ex.: "04.2". */
  num?: string;
  children?: React.ReactNode;
  tone?: 'default' | 'neon' | 'neon-green';
  className?: string;
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
