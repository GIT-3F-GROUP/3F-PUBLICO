export interface ButtonGroupOption { value: string; label: string }
export interface ButtonGroupProps {
  options: ButtonGroupOption[];
  value?: string;
  onChange?: (value: string) => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
export declare function ButtonGroup(props: ButtonGroupProps): JSX.Element;
