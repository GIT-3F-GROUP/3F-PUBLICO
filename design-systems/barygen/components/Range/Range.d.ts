import * as React from 'react';
export interface RangeProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
export declare function Range(props: RangeProps): JSX.Element;
