import * as React from 'react';
/**
 * Herói de página: o bloco de abertura da marca.
 */
export interface HeroProps {
  /** Rótulo micro em caixa alta, amarelo. */
  eyebrow?: string;
  /** Aceite <em> para a parte em Medium amarelo. */
  title?: React.ReactNode;
  subtitle?: string;
  actions?: React.ReactNode;
  /** Fundo de seção: dark-1..dark-4, light-1..light-4, amber. */
  /** Fundo da seção. Principais: 'dark-1' (preto) e 'light-1' (claro). Alternativos: 'dark-4' degradê âmbar, 'dark-3' degradê marrom (terciário, uso raro), 'light-2' papel, 'light-4' aurora. 'dark-2' e 'light-3' são o fundo liso. */
  background?: 'dark-1' | 'dark-2' | 'dark-3' | 'dark-4' | 'light-1' | 'light-2' | 'light-3' | 'light-4' | 'amber';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Hero(props: HeroProps): JSX.Element;
