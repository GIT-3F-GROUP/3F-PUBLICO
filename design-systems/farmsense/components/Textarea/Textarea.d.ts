import * as React from 'react';

/** Campo de texto longo — observação de campo, recomendação, laudo. */
export interface TextareaProps {
  label?: string; hint?: string; value?: string; placeholder?: string;
  rows?: number; tone?: 'light' | 'dark';
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
