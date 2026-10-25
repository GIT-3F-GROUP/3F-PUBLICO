import * as React from 'react';

/**
 * Cartão de aplicação da marca sobre cada superfície da paleta.
 * @startingPoint section="Brand" subtitle="Marca em cada superfície da paleta" viewport="700x180"
 */
export interface LogoCardProps {
  background?: 'perola' | 'rastro' | 'estrada' | 'escuro' | 'sombra' | 'anil' | 'branco';
  shape?: 'horizontal' | 'compacta';
  /** Se omitido, escolhe a variante correta para o fundo. */
  variant?: 'cor' | 'branca' | 'escura';
  tag?: string;
  base?: string;
  className?: string;
}
export declare function LogoCard(props: LogoCardProps): JSX.Element;
