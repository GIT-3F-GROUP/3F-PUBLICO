/**
 * Cartão de híbrido.
 */
export interface ProductCardProps {
  name: string;
  description: string;
  badge?: string;
  badgeTone?: 'brand' | 'dark' | 'neutral' | 'success' | 'warning' | 'error' | 'info';
  /** Regiões de posicionamento: "MT · GO · MS". */
  regions?: string;
  /** Fundo do topo: preto (padrão) ou amarelo. */
  /** Área da foto, sempre tom sobre tom com o cartão: 'claro' (amarelo claro, padrão) ou 'amber' (amarelo principal). 'dark' é aceito por compatibilidade e equivale a 'claro'. */
  tone?: 'claro' | 'amber' | 'dark';
  /** Imagem opcional para a área da foto. Sem ela, o cartão desenha o símbolo oficial (principal no claro, monocromático preto no amber). */
  logoSrc?: string;
  action?: string;
  onAction?: () => void;
  className?: string;
}
export declare function ProductCard(props: ProductCardProps): JSX.Element;
