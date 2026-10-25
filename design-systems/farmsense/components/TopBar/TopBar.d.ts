import * as React from 'react';

/** Cabeçalho de produto: marca à esquerda, navegação ao centro, ações à direita. */
export interface TopBarProps {
  items?: string[];
  active?: string;
  onSelect?: (item: string) => void;
  actions?: React.ReactNode;
  tone?: 'light' | 'dark';
  /** Prefixo até a raiz do design system, repassado à Logo. */
  base?: string;
  className?: string;
}
export declare function TopBar(props: TopBarProps): JSX.Element;
