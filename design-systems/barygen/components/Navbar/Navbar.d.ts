import * as React from 'react';
/**
 * Barra superior institucional: preta por padrão.
 */
export interface NavbarProps {
  links: string[];
  active?: string;
  onNavigate?: (link: string) => void;
  tone?: 'dark' | 'light';
  /** Ação à direita: normalmente um Button primário pequeno. */
  action?: React.ReactNode;
  className?: string;
}
export declare function Navbar(props: NavbarProps): JSX.Element;
