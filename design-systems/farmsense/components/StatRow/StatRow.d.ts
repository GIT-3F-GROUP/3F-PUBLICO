import * as React from 'react';

/** Faixa de números separados por fio vertical. */
export interface StatRowProps {
  items?: Array<{ value: React.ReactNode; unit?: string; label: string }>;
  tone?: 'light' | 'dark';
  className?: string;
}
export declare function StatRow(props: StatRowProps): JSX.Element;
