/**
 * Elementos de marca da ORVIX: logo em todas as variantes oficiais, wordmark
 * tipográfico, eyebrow, cabeçalho de seção, textura do X, alvo tecnológico,
 * callout, citação, selos e badge territorial.
 */
export interface LogoProps {
  /** Variante oficial. clara = fundo escuro (padrão do sistema). */
  variant?: "clara" | "escura" | "pontilhada" | "2d" | "simbolo" | "elemento" | "elemento-escuro" | "selo" | "perfil" | "clube" | "mono" | "x-verde" | "clara-x-verde";
  /** xs 18 · sm 24 · md 34 · lg 52 · xl 76 · 2xl 120 px de altura. Respeite o mínimo da variante: com AGROQUÍMICA, 80px na principal (use xl só com assinatura em peça grande, 2xl de preferência); X pontilhado sem escrita, 32px; abaixo disso, sem-detalhes-sem-assinatura. */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  /** Prefixo até a raiz do design system, ex. "../../". */
  base?: string;
  /** Aplica a área de proteção mínima ao redor do lockup. */
  protect?: boolean;
  alt?: string;
  className?: string;
}

export interface WordmarkTypeProps {
  /** Corpo em px da palavra ORVIX. */
  size?: number;
  /** Descritor sob a wordmark. Passe "" para omitir. */
  descritor?: string;
  className?: string;
}

export interface EyebrowProps {
  children?: React.ReactNode;
  ornament?: "rule" | "dot" | "chevron" | "";
  muted?: boolean;
  className?: string;
}

export interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  lead?: React.ReactNode;
  align?: "start" | "center";
  /** Título à esquerda e lead à direita, alinhados pela base. */
  split?: boolean;
  ornament?: "rule" | "dot" | "chevron" | "";
  className?: string;
}

export interface XTextureProps {
  tone?: "claro" | "verde";
  /** Passo da malha de pontos em px. */
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}

export interface XMarkProps {
  /** Altura em px. Mínimo 32 (o X pontilhado se deforma abaixo disso). */
  size?: number;
  /** x = Elemento X (perna direita sólida + pernas pontilhadas). pernas = Elemento ORVIX (três pernas pontilhadas). */
  variant?: "x" | "pernas";
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
}

export interface TargetMarkProps {
  size?: number;
  /** redondo = anéis e retícula; quadrado = cantos em L, quadro e retícula. */
  forma?: "redondo" | "quadrado";
  /** Núcleo pulsa (uma vez por tela; desliga com prefers-reduced-motion). */
  live?: boolean;
  className?: string;
}

export interface CalloutProps {
  children?: React.ReactNode;
  source?: React.ReactNode;
  /** neutral = sem verde. bare = só barra verde à esquerda. */
  variant?: "neutral" | "bare";
  className?: string;
}

export interface PullQuoteProps {
  children?: React.ReactNode;
  author?: string;
  role?: string;
  className?: string;
}

export interface SealProps {
  title?: React.ReactNode;
  sub?: React.ReactNode;
  mark?: React.ReactNode;
  tone?: "neutral" | "verde";
  className?: string;
}

export interface TerritoryBadgeProps {
  base?: string;
  label?: string;
  className?: string;
}

export interface HashtagProps {
  children?: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
}

export interface CapsuleProps {
  children?: React.ReactNode;
  icon?: string;
  className?: string;
}
