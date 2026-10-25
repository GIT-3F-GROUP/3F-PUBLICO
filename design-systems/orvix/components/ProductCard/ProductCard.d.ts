/**
 * Componentes de produto da ORVIX. A cor secundária da linha entra pela prop
 * lineKey e pinta só a borda, o rótulo da linha e o halo do render.
 */
export type LineKey =
  | "orv7"
  | "orv7-aero"
  | "orv"
  | "blitz"
  | "solv"
  | "orvclear"
  | "orvale"
  | "orvale-mineral"
  | "vix-hs"
  | "vix-ss"
  | "vix-classe-a"
  | "vix-exclusive";

export interface ProductCardProps {
  name: string;
  /** Rótulo da linha, ex. "Adjuvante premium". */
  line?: string;
  lineKey?: LineKey;
  /** Frase-síntese do produto, uma linha. */
  claim?: string;
  /** Caminho do render 3D oficial em assets/products/. */
  image?: string;
  specs?: Array<{ label: string; value?: string }>;
  action?: React.ReactNode;
  /** Filete vertical da cor da linha na borda esquerda. */
  rail?: boolean;
  /** Render em proporção 1:1, para destaque de herói. */
  hero?: boolean;
  className?: string;
}

export interface LineCardProps {
  name: string;
  badge?: React.ReactNode;
  /** Promessa central da linha, uma frase. */
  promise?: string;
  count?: number;
  lineKey?: LineKey;
  action?: React.ReactNode;
  className?: string;
}

export interface SpecChipProps {
  label: string;
  value?: string;
}

export interface DoseTableProps {
  columns?: string[];
  rows?: React.ReactNode[][];
  className?: string;
}

export interface PhScaleProps {
  /** Valor de pH de 1 a 14. */
  value?: number;
  className?: string;
}

export interface DocLinkProps {
  /** Rótulo curto do tipo de arquivo, ex. PDF, FISPQ. */
  type?: string;
  name: string;
  size?: string;
  href?: string;
  className?: string;
}

export interface AxisTrioProps {
  /** Os três eixos da ORVIX: calda, gota, alvo. */
  items?: Array<{ num?: string; icon?: string; title: string; text: string; tags?: string[] }>;
  className?: string;
}
