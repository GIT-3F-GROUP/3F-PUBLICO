import * as React from 'react';

/** Busca em pílula, com lupa de 14 px e slot para contador à direita. */
export interface SearchFieldProps {
  value?: string;
  placeholder?: string;
  tone?: 'light' | 'dark';
  /** Ex.: <Chip tone="neon">12 talhões</Chip> */
  trailing?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
export declare function SearchField(props: SearchFieldProps): JSX.Element;
