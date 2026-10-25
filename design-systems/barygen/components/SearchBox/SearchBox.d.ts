import * as React from 'react';
export interface SearchBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}
export declare function SearchBox(props: SearchBoxProps): JSX.Element;
