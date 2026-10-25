import * as React from 'react';
/**
 * Cartão base do sistema: fundo branco, borda de 1px, raio 14px.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Rótulo micro em caixa alta no topo do cartão. */
  eyebrow?: string;
  /** Pílula amarela à direita do eyebrow. */
  pill?: string;
  title?: string;
  tone?: 'light' | 'dark';
}
export declare function Card(props: CardProps): JSX.Element;
