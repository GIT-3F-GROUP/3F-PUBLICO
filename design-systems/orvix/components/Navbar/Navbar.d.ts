/**
 * Navegação da ORVIX: header de vidro fixo, sidebar de painel, abas, trilha,
 * paginação, fluxo de etapas e rodapé padrão do grupo.
 */
export interface NavbarProps {
  /** Marca à esquerda: use o componente Logo. */
  logo?: React.ReactNode;
  links?: Array<{ label: string; href?: string }>;
  actions?: React.ReactNode;
  /** Rótulo do link ativo. */
  current?: string;
  compact?: boolean;
  /** Fundo sólido em vez de vidro. */
  solid?: boolean;
  className?: string;
}

export interface SidebarNavProps {
  groups?: Array<{ label?: string; items: Array<{ label: string; href?: string; icon?: string; count?: number }> }>;
  current?: string;
  footer?: React.ReactNode;
  className?: string;
}

export interface TabsProps {
  tabs?: Array<string | { label: string; icon?: string }>;
  value?: string;
  onChange?: (label: string) => void;
  variant?: "underline" | "pill";
  className?: string;
}

export interface BreadcrumbsProps {
  items?: Array<{ label: string; href?: string }>;
  className?: string;
}

export interface PaginationProps {
  page?: number;
  pages?: number;
  onChange?: (page: number) => void;
  className?: string;
}

export interface StepFlowProps {
  steps?: Array<{ title: string; desc?: string }>;
  /** Índice da etapa corrente. Etapas anteriores ficam concluídas. */
  active?: number;
  className?: string;
}

export interface SiteFooterProps {
  columns?: Array<{ title: string; links: Array<{ label: string; href?: string }> }>;
  brand?: React.ReactNode;
  legal?: string;
  className?: string;
}
