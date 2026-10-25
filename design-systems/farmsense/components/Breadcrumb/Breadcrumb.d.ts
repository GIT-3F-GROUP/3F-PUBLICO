import * as React from 'react';

/** Trilha de navegação em label, separada por ponto médio em Georgia. */
export interface BreadcrumbProps {
  items?: Array<string | { label: string; href?: string }>;
  tone?: 'light' | 'dark';
  className?: string;
}
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;
