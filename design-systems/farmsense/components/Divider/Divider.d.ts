import * as React from 'react';

/** Fio de separação a 15 % da tinta corrente. */
export interface DividerProps {
  vertical?: boolean;
  /** Margem vertical, ex.: "var(--s-5)". */
  spacing?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Divider(props: DividerProps): JSX.Element;
