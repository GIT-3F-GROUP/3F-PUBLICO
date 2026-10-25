import * as React from 'react';
export interface ModalProps {
  /** Pergunta ou afirmação curta em caixa alta. */
  title: string;
  children?: React.ReactNode;
  /** Botões: ghost à esquerda, primário à direita. */
  actions?: React.ReactNode;
  onClose?: () => void;
  /** true renderiza dentro do fluxo (catálogo/documentação) em vez de fixed. */
  embedded?: boolean;
  className?: string;
}
export declare function Modal(props: ModalProps): JSX.Element;
