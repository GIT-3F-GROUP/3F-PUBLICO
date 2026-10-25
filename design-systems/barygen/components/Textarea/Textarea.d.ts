import * as React from 'react';
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  state?: 'default' | 'error' | 'success';
}
export declare function Textarea(props: TextareaProps): JSX.Element;
