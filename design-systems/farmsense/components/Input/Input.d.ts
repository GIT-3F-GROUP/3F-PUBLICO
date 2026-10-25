import * as React from 'react';

/**
 * Campo de texto. Branco sobre bege; vidro com borda ciano sobre Verde Sombra.
 * @startingPoint section="Forms" subtitle="Campos, seleção e controles" viewport="700x300"
 */
export interface InputProps {
  label?: string;
  hint?: string;
  value?: string;
  placeholder?: string;
  tone?: 'light' | 'dark';
  icon?: React.ReactNode;
  trailing?: React.ReactNode;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
export declare function Input(props: InputProps): JSX.Element;
