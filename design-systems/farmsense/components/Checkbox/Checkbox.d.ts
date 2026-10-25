import * as React from 'react';

/** Caixa de seleção múltipla. Marcada = Verde Sombra com tique ciano. */
export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  tone?: 'light' | 'dark';
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
