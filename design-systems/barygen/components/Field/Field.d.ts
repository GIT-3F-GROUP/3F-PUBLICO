import * as React from 'react';
export interface FieldProps {
  /** Rótulo sempre visível: nunca use placeholder como rótulo. */
  label?: string;
  required?: boolean;
  /** Texto de apoio ou mensagem de validação. */
  helper?: string;
  state?: 'default' | 'error' | 'success';
  htmlFor?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Field(props: FieldProps): JSX.Element;
