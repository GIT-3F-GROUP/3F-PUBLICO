export interface PaginationProps {
  page?: number;
  total?: number;
  onChange?: (page: number) => void;
  className?: string;
}
export declare function Pagination(props: PaginationProps): JSX.Element;
