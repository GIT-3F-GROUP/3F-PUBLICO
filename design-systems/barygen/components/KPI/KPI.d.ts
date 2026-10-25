/**
 * Indicador numérico de resultado.
 */
export interface KPIProps {
  label: string;
  /** Número com unidade: "218 sc/ha". */
  value: string;
  /** Comparação: "12% vs. safra anterior". */
  trend?: string;
  direction?: 'up' | 'down' | 'flat';
  className?: string;
}
export declare function KPI(props: KPIProps): JSX.Element;
