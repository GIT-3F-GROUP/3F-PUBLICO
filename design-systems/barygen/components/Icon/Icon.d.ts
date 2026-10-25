import * as React from 'react';
export type BarygenIconName =
  | 'buscar' | 'conta' | 'agenda' | 'local' | 'telefone' | 'email' | 'avancar'
  | 'voltar' | 'baixar' | 'enviar' | 'filtrar' | 'menu' | 'fechar' | 'confirmar' | 'casa';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Nome do glifo oficial. */
  name: BarygenIconName;
  /** Lado do quadrado em px. Padrão 24 (grade oficial). */
  size?: number;
  /** Espessura do traço. Padrão 1.5: só altere para 2 em ícones dentro de botões. */
  strokeWidth?: number;
}
export declare function Icon(props: IconProps): JSX.Element;
export declare const BARYGEN_ICONS: Record<BarygenIconName, React.ReactNode>;
