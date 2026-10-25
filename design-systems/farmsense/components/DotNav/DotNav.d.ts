import * as React from 'react';

/** Sumário lateral em pontos, com mix-blend-mode difference. */
export interface DotNavProps {
  items?: Array<string | { id: string; label: string }>;
  value?: string;
  onChange?: (id: string) => void;
  className?: string;
}
export declare function DotNav(props: DotNavProps): JSX.Element;
