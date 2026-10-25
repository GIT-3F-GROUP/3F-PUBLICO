import * as React from 'react';
export interface TableColumn { key: string; label: string }
/**
 * Tabela de dados técnicos.
 * @startingPoint section="Dados" subtitle="Tabela de híbridos com status" viewport="700x260"
 */
export interface TableProps {
  columns: (TableColumn | string)[];
  /** Cada linha é um objeto indexado pelas chaves das colunas; o valor pode ser JSX. */
  rows: Record<string, React.ReactNode>[];
  className?: string;
}
export declare function Table(props: TableProps): JSX.Element;
