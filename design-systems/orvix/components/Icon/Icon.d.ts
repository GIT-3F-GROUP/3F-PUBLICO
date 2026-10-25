export interface IconProps {
  /** Nome do ícone no conjunto Lucide, em kebab-case. Ex.: "droplet", "target". */
  name: string;
  /** Aresta do ícone em px. Padrão 16. */
  size?: number;
  /** Preenche a caixa inteira (cover) em vez de conter o desenho. */
  strokeless?: boolean;
  /** Texto acessível. Sem ele o ícone é decorativo (aria-hidden). */
  label?: string;
  style?: React.CSSProperties;
  className?: string;
}
