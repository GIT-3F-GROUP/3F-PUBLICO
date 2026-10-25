import * as React from 'react';

/** Cartão faça / não faça do manual de marca. */
export interface RuleCardProps {
  ok?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
export declare function RuleCard(props: RuleCardProps): JSX.Element;
