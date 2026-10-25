/**
 * Superfícies e dados da ORVIX: card sólido, painel de vidro, número técnico,
 * tabela de ficha, chave/valor, badge, tag e medidores.
 */
export interface CardProps {
  children?: React.ReactNode;
  /** accent = hairline verde. sunken = sem sombra, um tom acima do contêiner com hairline (nunca mais escuro que o que está atrás). */
  variant?: "accent" | "sunken";
  /** none = sem padding (mídia colada). lg = painel. */
  padding?: "none" | "lg";
  /** Textura pontilhada do X ao fundo. */
  dots?: boolean;
  interactive?: boolean;
  className?: string;
}

export interface CardHeaderProps {
  title?: React.ReactNode;
  sub?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export interface GlassPanelProps {
  children?: React.ReactNode;
  /** thin 30% · base 42% · solid 62% de opacidade do vidro. */
  density?: "thin" | "base" | "solid";
  tone?: "neutral" | "verde";
  compact?: boolean;
  /** Raio de superfície grande (18px). */
  surface?: boolean;
  className?: string;
}

export interface StatProps {
  label?: string;
  value?: React.ReactNode;
  unit?: string;
  accent?: boolean;
  delta?: { dir: "up" | "down"; label: string };
  size?: "md" | "lg";
  className?: string;
}

export interface StatGridProps {
  items?: StatProps[];
  className?: string;
}

export interface DataTableProps {
  columns?: React.ReactNode[];
  rows?: React.ReactNode[][];
  caption?: string;
  zebra?: boolean;
  hover?: boolean;
  /** Alinha à direita e usa numerais tabulares em todas as colunas menos a primeira. */
  numeric?: boolean;
  className?: string;
}

export interface KeyValueProps {
  /** Pares [rótulo, valor]. */
  items?: Array<[React.ReactNode, React.ReactNode]>;
  className?: string;
}

export interface BadgeProps {
  children?: React.ReactNode;
  tone?: "neutral" | "success" | "warning" | "danger" | "info";
  variant?: "solid" | "outline";
  dot?: boolean;
  size?: "md" | "lg";
  icon?: string;
  className?: string;
}

export interface TagProps {
  children?: React.ReactNode;
  selected?: boolean;
  interactive?: boolean;
  onRemove?: () => void;
  className?: string;
}

export interface MeterProps {
  label?: string;
  value?: number;
  max?: number;
  hint?: string;
  tone?: "success" | "warning" | "danger";
  thick?: boolean;
  striped?: boolean;
  className?: string;
}

export interface ProgressRingProps {
  value?: number;
  size?: number;
  stroke?: number;
  label?: React.ReactNode;
}

export interface DividerProps {
  /** Divisor com rótulo centralizado em caixa-alta. */
  label?: string;
  variant?: "strong" | "dotted";
  vertical?: boolean;
  className?: string;
}
