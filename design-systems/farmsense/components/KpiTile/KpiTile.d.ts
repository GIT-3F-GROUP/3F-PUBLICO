import * as React from 'react';

/**
 * Indicador-chave: número em 800/48 px com unidade sobrescrita.
 * @startingPoint section="Data" subtitle="KPIs, tabela, barras e sparkline" viewport="700x300"
 */
export interface KpiTileProps {
  label?: string;
  value?: React.ReactNode;
  /** Unidade sobrescrita, ex.: "sc/ha", "ha", "ndvi". */
  unit?: string;
  delta?: React.ReactNode;
  deltaTone?: 'neutro' | 'positivo' | 'neon';
  tone?: 'light' | 'dark';
  className?: string;
}
export declare function KpiTile(props: KpiTileProps): JSX.Element;
