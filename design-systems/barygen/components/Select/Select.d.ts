import * as React from 'react';
export interface SelectOption { value: string; label: string }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: (string | SelectOption)[];
  state?: 'default' | 'error' | 'success';
}
export declare function Select(props: SelectProps): JSX.Element;
