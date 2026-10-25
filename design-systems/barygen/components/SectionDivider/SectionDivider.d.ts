import * as React from 'react';
export interface DividerStat { value: string; label: string }
export interface SectionDividerProps {
  /** "Parte 2", "Capítulo 03". */
  kicker?: string;
  title?: React.ReactNode;
  description?: string;
  stats?: DividerStat[];
  /** 'dark-1' preto (padrão); 'dark-4' degradê âmbar; 'dark-3' degradê marrom (terciário, uso raro); 'dark-2' é o preto liso. */
  background?: 'dark-1' | 'dark-2' | 'dark-3' | 'dark-4';
  className?: string;
}
export declare function SectionDivider(props: SectionDividerProps): JSX.Element;
