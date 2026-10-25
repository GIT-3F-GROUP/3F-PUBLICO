import * as React from 'react';
/**
 * Botão de ação da BARYGEN: retângulo de cantos de 8 px, texto em negrito sem caixa alta.
 * Alturas: sm 32 px, md 40 px (padrão), lg 48 px; a área de toque nunca fica abaixo de 44 px. Um único primário por tela.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * primary: amarelo, a ação principal (vira preto sozinho dentro de seções amarelas).
   * secondary: preto (vira tom sobre tom dentro de seções escuras).
   * outline, ghost, link, danger: como de costume.
   * on-dark: contorno suave no preto, em degradês escuros e sobre foto.
   * tom-preto: camada de preto mais claro, a segunda ação no preto absoluto.
   * tom-amarelo: camada de amarelo claro, a segunda ação sobre os amarelos.
   * vidro: vidro amarelo, ocasional, só sobre foto ou vídeo.
   * seta: texto com uma seta que anda no hover, para levar a outra página.
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'link' | 'on-dark' | 'tom-preto' | 'tom-amarelo' | 'vidro' | 'seta';
  size?: 'sm' | 'md' | 'lg';
  /** Troca o conteúdo à esquerda por um spinner e desabilita o botão. */
  loading?: boolean;
  /** Ícone de 16 px, a 8 px do texto. */
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  as?: keyof JSX.IntrinsicElements;
}
export declare function Button(props: ButtonProps): JSX.Element;
