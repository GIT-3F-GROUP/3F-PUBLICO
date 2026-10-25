export interface BreadcrumbProps {
  /** Do mais geral ao mais específico; o último é a página atual. */
  items: string[];
  onNavigate?: (item: string) => void;
  className?: string;
}
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;
