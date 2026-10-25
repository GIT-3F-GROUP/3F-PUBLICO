import * as React from 'react';

/** Tabela de relatório: cabeçalho em label, números tabulares, linhas em fio a 8 %. */
export interface DataTableProps {
  columns?: Array<{ key: string; label: string; align?: 'left' | 'right' | 'center'; strong?: boolean }>;
  /** Cada linha usa as chaves das colunas; "<chave>_tone: 'positivo'" pinta o valor em Verde Anil. */
  rows?: Array<Record<string, any>>;
  tone?: 'light' | 'dark';
  className?: string;
}
export declare function DataTable(props: DataTableProps): JSX.Element;
