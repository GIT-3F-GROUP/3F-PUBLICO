import * as React from 'react';
export interface InputGroupProps {
  /** Unidade ou prefixo: "ha", "sc", "R$". */
  addon: React.ReactNode;
  addonSide?: 'left' | 'right';
  className?: string;
  children?: React.ReactNode;
}
export declare function InputGroup(props: InputGroupProps): JSX.Element;
