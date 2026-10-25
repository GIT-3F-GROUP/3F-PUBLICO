/**
 * Feedback da ORVIX: alerta, toast de vidro, tooltip, diálogo, skeleton,
 * spinner, estado vazio e status inline.
 */
export interface AlertProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** O verde nunca é alerta: success é o único tom verde. */
  tone?: "neutral" | "success" | "warning" | "danger" | "info";
  /** Faixa de largura total, sem raio nem borda lateral. */
  bar?: boolean;
  onClose?: () => void;
  className?: string;
}

export interface ToastProps {
  children?: React.ReactNode;
  icon?: string;
  /** Barra de tempo restante, 0 a 100. */
  progress?: number;
  className?: string;
}

export interface ToastStackProps {
  children?: React.ReactNode;
  className?: string;
}

export interface TooltipProps {
  label: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export interface DialogProps {
  title?: React.ReactNode;
  sub?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
  /** Renderiza sem o scrim de tela cheia, para demonstração em card. */
  inline?: boolean;
  className?: string;
}

export interface SkeletonProps {
  variant?: "text" | "title" | "block" | "circle";
  width?: number | string;
  height?: number | string;
  className?: string;
}

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export interface EmptyStateProps {
  icon?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export interface InlineStatusProps {
  children?: React.ReactNode;
  /** Sem pulso: estado parado. */
  idle?: boolean;
  className?: string;
}
