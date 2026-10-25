import * as React from 'react';

/** Paginação de relatório: anterior · contador · próxima. */
export interface PaginationProps {
  page?: number;
  total?: number;
  onChange?: (page: number) => void;
  tone?: 'light' | 'dark';
  className?: string;
}
export declare function Pagination(props: PaginationProps): JSX.Element;
