export interface StepsProps {
  steps: string[];
  /** Índice do passo atual (0-based). */
  current?: number;
  className?: string;
}
export declare function Steps(props: StepsProps): JSX.Element;
