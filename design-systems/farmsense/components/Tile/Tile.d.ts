import * as React from 'react';

/** Bloco tonal simples: fundo a 4 %, borda a 8 %, raio 16 px. */
export interface TileProps {
  children?: React.ReactNode;
  tone?: 'light' | 'dark' | 'print';
  /** Classe de padrão ambiente, ex.: "fs-dots" ou "fs-grid". */
  pattern?: string;
  padding?: string | number;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Tile(props: TileProps): JSX.Element;
