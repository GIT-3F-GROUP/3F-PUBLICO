import * as React from 'react';
import type { BarygenIconName } from '../core/Icon';
export interface EmptyStateProps {
  icon?: BarygenIconName;
  /** Afirmação do que não existe: "Nenhum campo encontrado". */
  title: string;
  children?: React.ReactNode;
  /** Ação de saída: normalmente Button outline sm. */
  action?: React.ReactNode;
  className?: string;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
