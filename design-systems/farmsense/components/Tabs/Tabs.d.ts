import * as React from 'react';

/**
 * Abas com fio de 2 px sob a aba ativa.
 * @startingPoint section="Navigation" subtitle="Abas, sumário, trilha e paginação" viewport="700x260"
 */
export interface TabsProps {
  items?: string[];
  value?: string;
  onChange?: (item: string) => void;
  tone?: 'light' | 'dark';
  className?: string;
}
export declare function Tabs(props: TabsProps): JSX.Element;
