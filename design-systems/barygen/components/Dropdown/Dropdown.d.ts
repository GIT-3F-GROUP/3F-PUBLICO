import * as React from 'react';
export interface DropdownItem { label?: string; danger?: boolean; separator?: boolean }
export interface DropdownProps {
  items: DropdownItem[];
  onSelect?: (label: string) => void;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Dropdown(props: DropdownProps): JSX.Element;
