import * as React from 'react';
export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  removable?: boolean;
  onRemove?: () => void;
}
export declare function Chip(props: ChipProps): JSX.Element;
