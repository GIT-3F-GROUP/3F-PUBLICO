export interface UploadProps {
  title?: string;
  hint?: string;
  /** Linha de restrições: formatos e tamanho máximo. */
  formats?: string;
  className?: string;
}
export declare function Upload(props: UploadProps): JSX.Element;
