import * as React from 'react';
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'on-dark' | 'tom-preto' | 'tom-amarelo' | 'vidro';
  /** sm 32 px, md 40 px, lg 48 px, com área de toque de 44 px. Quadrado com cantos de 8 px. */
  size?: 'sm' | 'md' | 'lg';
  /** Botão circular: só para avançar e voltar. Nunca leva letras, para não parecer avatar. */
  round?: boolean;
  /** Obrigatório: rótulo acessível, já que o botão não tem texto. */
  label: string;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
