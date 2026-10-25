import * as React from 'react';

/** Seleção única — cultura, safra, talhão. */
export interface SelectProps {
  label?: string;
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  tone?: 'light' | 'dark';
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}
export declare function Select(props: SelectProps): JSX.Element;
