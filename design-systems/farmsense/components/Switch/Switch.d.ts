import * as React from 'react';

/** Interruptor de estado — camada de mapa, alerta, sensor. */
export interface SwitchProps {
  label?: React.ReactNode;
  checked?: boolean;
  tone?: 'light' | 'dark';
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
export declare function Switch(props: SwitchProps): JSX.Element;
