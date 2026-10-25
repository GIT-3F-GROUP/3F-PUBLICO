export interface QtyStepperProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}
export declare function QtyStepper(props: QtyStepperProps): JSX.Element;
