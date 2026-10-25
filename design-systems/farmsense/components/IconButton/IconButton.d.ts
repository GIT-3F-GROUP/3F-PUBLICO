import * as React from 'react';

/** Botão circular só-ícone. Alvo mínimo 40 px (44 px em mobile). */
export interface IconButtonProps {
  children?: React.ReactNode;
  /** Rótulo acessível — obrigatório, o botão não tem texto. */
  label: string;
  tone?: 'light' | 'dark';
  size?: number;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
