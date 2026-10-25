import * as React from 'react';
/**
 * Cartão de acesso ao portal.
 */
export interface LoginCardProps {
  /** Fundo da tela. 'dark' deixa o cartão em preto tom sobre tom (camada #141414 sobre o preto absoluto) e troca a logo para a monocromática branca. Padrão 'light'. */
  surface?: 'light' | 'dark';
  children?: React.ReactNode;
  className?: string;
}
export declare function LoginCard(props: LoginCardProps): JSX.Element;
