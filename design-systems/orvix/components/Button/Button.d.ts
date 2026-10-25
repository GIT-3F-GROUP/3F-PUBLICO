/**
 * Botão de ação da ORVIX: chapado, sem brilho. Primário verde sólido; glass só sobre
 * foto ou fundo irregular, nunca sobre fundo liso ou degradê. Tamanhos xs, sm e md apenas.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = verde de marca. secondary = contorno. ghost = sem caixa. glass = vidro, só sobre foto ou fundo irregular. danger = destrutivo. inverse = claro sobre escuro. */
  variant?: "primary" | "secondary" | "ghost" | "glass" | "verde-solido" | "danger" | "inverse";
  /** Só três tamanhos. A ORVIX não usa botão maior que md. */
  size?: "xs" | "sm" | "md";
  /** Nome Lucide do ícone à esquerda. */
  icon?: string;
  /** Nome Lucide do ícone à direita. */
  iconRight?: string;
  block?: boolean;
  /** Raio pílula. Use com parcimônia: o padrão ORVIX é levemente arredondado. */
  pill?: boolean;
  loading?: boolean;
  disabled?: boolean;
  href?: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export interface IconButtonProps {
  /** Nome Lucide do ícone. */
  icon: string;
  /** Rótulo acessível, obrigatório. */
  label: string;
  variant?: "default" | "accent" | "bare";
  size?: "sm" | "md" | "lg";
  round?: boolean;
  disabled?: boolean;
  className?: string;
}

export interface ButtonGroupProps {
  children?: React.ReactNode;
  className?: string;
}

export interface LinkActionProps {
  children?: React.ReactNode;
  icon?: string;
  /** Seta à direita que avança no hover. Padrão true. */
  arrow?: boolean;
  tone?: "accent" | "muted";
  underline?: boolean;
  href?: string;
  className?: string;
}
