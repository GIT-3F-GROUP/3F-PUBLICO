import * as React from 'react';

/** Escolha exclusiva dentro de um grupo. */
export interface RadioProps {
  label?: React.ReactNode;
  checked?: boolean;
  name?: string;
  tone?: 'light' | 'dark';
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
export declare function Radio(props: RadioProps): JSX.Element;
