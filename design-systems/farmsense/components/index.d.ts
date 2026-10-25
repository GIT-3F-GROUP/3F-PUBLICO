import * as React from 'react';

// FarmSense Design System — tipos dos 40 componentes, em
// window.FarmSenseDesignSystem_c4c636. Documentação, não verificada por compilador.

// ── brand ───────────────────────────────────
/**
 * Cartão de aplicação da marca sobre cada superfície da paleta.
 * @startingPoint section="Brand" subtitle="Marca em cada superfície da paleta" viewport="700x180"
 */
export interface LogoCardProps {
  background?: 'perola' | 'rastro' | 'estrada' | 'escuro' | 'sombra' | 'anil' | 'branco';
  shape?: 'horizontal' | 'compacta';
  /** Se omitido, escolhe a variante correta para o fundo. */
  variant?: 'cor' | 'branca' | 'escura';
  tag?: string;
  base?: string;
  className?: string;
}
export declare function LogoCard(props: LogoCardProps): JSX.Element;

/**
 * Camada de padrão ambiente. O pai precisa de position:relative e overflow:hidden.
 * @startingPoint section="Brand" subtitle="Curvas, grade, alvo, estratos e listras" viewport="700x200"
 */
export interface PatternLayerProps {
  pattern?:
    | 'curvas-neon' | 'curvas-tonal' | 'curvas-sombra' | 'cristas-neon' | 'cristas-sombra'
    | 'grade' | 'grade-fina' | 'grade-larga' | 'grade-clara' | 'grade-neon'
    | 'pontos' | 'pontos-escuro' | 'pontos-neon'
    | 'alvo' | 'alvo-claro' | 'alvo-centro' | 'varredura'
    | 'estratos' | 'estratos-claro' | 'listras' | 'listras-escuro' | 'listras-neon' | 'linhas';
  /** Canto de ancoragem. O padrão da marca é 'tr'. */
  corner?: 'tr' | 'tl' | 'br' | 'bl' | null;
  animate?: boolean;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}
export declare function PatternLayer(props: PatternLayerProps): JSX.Element;

/** Citação editorial em Georgia itálico, com aspa d'água atrás. */
export interface QuoteBlockProps {
  children?: React.ReactNode;
  author?: string;
  role?: string;
  tone?: 'light' | 'dark';
  mark?: boolean;
  className?: string;
}
export declare function QuoteBlock(props: QuoteBlockProps): JSX.Element;

/** Amostra de cor do manual: nome, hex e RGB, com etiqueta de função. */
export interface SwatchProps {
  name?: string;
  hex?: string;
  rgb?: string;
  /** Função do token, ex.: "Surface · default", "Ink · primary". */
  tag?: string;
  /** true quando o fundo pede tinta branca. */
  dark?: boolean;
  minHeight?: number;
  className?: string;
}
export declare function Swatch(props: SwatchProps): JSX.Element;

// ── core ────────────────────────────────────
/**
 * Botão da FarmSense. Pílula, peso 500, 14 px, com elevação de 1 px no hover.
 * @startingPoint section="Core" subtitle="Botões em cinco variantes de superfície" viewport="700x160"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Variante por superfície. Em bege use primary-dark/ghost-light; em Verde Sombra use primary-light/ghost-dark/neon. */
  variant?: 'primary-dark' | 'primary-light' | 'ghost-dark' | 'ghost-light' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  /** Chevron que desliza 4 px no hover. */
  withArrow?: boolean;
  disabled?: boolean;
  /** Renderiza como <a> quando presente. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}
export declare function Button(props: ButtonProps): JSX.Element;

/**
 * Etiqueta em pílula: safra, talhão, estado, versão.
 * @startingPoint section="Core" subtitle="Chips de metadado em seis tons" viewport="700x120"
 */
export interface ChipProps {
  children?: React.ReactNode;
  tone?: 'light' | 'dark' | 'neon' | 'neon-green' | 'outline' | 'solid';
  /** Ponto de sinal à esquerda — use só quando indicar estado ao vivo. */
  dot?: boolean;
  className?: string;
}
export declare function Chip(props: ChipProps): JSX.Element;

/** Fio de separação a 15 % da tinta corrente. */
export interface DividerProps {
  vertical?: boolean;
  /** Margem vertical, ex.: "var(--s-5)". */
  spacing?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Divider(props: DividerProps): JSX.Element;

/**
 * Card em vidro fosco — backdrop-filter blur 16 px, saturate 140 %.
 * @startingPoint section="Core" subtitle="Cards de vidro claro, tonal e escuro" viewport="700x260"
 */
export interface GlassCardProps {
  children?: React.ReactNode;
  /** tone = bege sobre bege · light = branco sobre bege · dark = sobre Verde Sombra. */
  tone?: 'tone' | 'light' | 'dark';
  /** Borda interna neon — só em tone="dark" e só quando o card mostra dado ao vivo. */
  accent?: 'ciano' | 'verde';
  pattern?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function GlassCard(props: GlassCardProps): JSX.Element;

/**
 * Ícone de linha. Conjunto Lucide (traço 1,5 px, viewBox 24) — substituição
 * documentada: a fonte original desenhava os ícones inline no mesmo estilo.
 * Requer <script src="https://unpkg.com/lucide@latest"></script> na página.
 */
export interface IconProps {
  /** Nome Lucide em kebab-case, ex.: "map-pin", "trending-up", "layers". */
  name: string;
  size?: number;
  /** Espessura do traço. O padrão da marca é 1,5. */
  stroke?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;

/** Botão circular só-ícone. Alvo mínimo 40 px (44 px em mobile). */
export interface IconButtonProps {
  children?: React.ReactNode;
  /** Rótulo acessível — obrigatório, o botão não tem texto. */
  label: string;
  tone?: 'light' | 'dark';
  size?: number;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;

/** Sobretítulo em caixa alta com fio de 28 px à esquerda. */
export interface KickerProps {
  children?: React.ReactNode;
  tone?: 'default' | 'neon' | 'neon-green';
  className?: string;
}
export declare function Kicker(props: KickerProps): JSX.Element;

/**
 * Marca FarmSense. Horizontal por padrão; compacta só quando falta largura.
 * @startingPoint section="Brand" subtitle="Marca em todas as variantes e superfícies" viewport="700x180"
 */
export interface LogoProps {
  shape?: 'horizontal' | 'compacta';
  /** cor sobre bege/branco · branca sobre Verde Sombra/Anil · escura em chapa única. */
  variant?: 'cor' | 'branca' | 'escura';
  /** Dimensione sempre pela largura; a altura fica em auto. */
  width?: number | string;
  height?: number | string;
  /** Prefixo até a raiz do design system, ex.: "..". */
  base?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;

/** Ponto de sinal — o único lugar onde o neon aparece sozinho. */
export interface NeonDotProps {
  color?: 'ciano' | 'verde' | 'mudo';
  /** Pulsa a 2,4 s quando o dado é ao vivo. */
  pulse?: boolean;
  className?: string;
}
export declare function NeonDot(props: NeonDotProps): JSX.Element;

/** Cabeçalho de seção: numeração em Georgia itálico + kicker. */
export interface SectionHeaderProps {
  /** Número do capítulo, sem o §. Ex.: "04.2". */
  num?: string;
  children?: React.ReactNode;
  tone?: 'default' | 'neon' | 'neon-green';
  className?: string;
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;

/**
 * Superfície de seção full-bleed. Quatro claras, quatro escuras.
 * @startingPoint section="Layout" subtitle="Oito fundos de seção da marca" viewport="700x240"
 */
export interface SurfaceProps {
  children?: React.ReactNode;
  /** perola · rastro · estrada · papel (claras) — grade · relevo · alvo · solo (escuras). */
  variant?: 'perola' | 'rastro' | 'estrada' | 'papel' | 'grade' | 'relevo' | 'alvo' | 'solo';
  /** Envolve o conteúdo no container de 1280 px. */
  wrap?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Surface(props: SurfaceProps): JSX.Element;

/** Bloco tonal simples: fundo a 4 %, borda a 8 %, raio 16 px. */
export interface TileProps {
  children?: React.ReactNode;
  tone?: 'light' | 'dark' | 'print';
  /** Classe de padrão ambiente, ex.: "fs-dots" ou "fs-grid". */
  pattern?: string;
  padding?: string | number;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Tile(props: TileProps): JSX.Element;

// ── data ────────────────────────────────────
/** Barra horizontal tom-sobre-tom. Categorias se diferenciam pela escala bege/verde. */
export interface BarMeterProps {
  label?: string;
  value?: number;
  max?: number;
  /** Valor mostrado à direita, se diferente de value. */
  display?: React.ReactNode;
  fill?: 'sombra' | 'anil' | 'bege' | 'neon';
  tone?: 'light' | 'dark';
  animate?: boolean;
  className?: string;
}
export declare function BarMeter(props: BarMeterProps): JSX.Element;

/** Tabela de relatório: cabeçalho em label, números tabulares, linhas em fio a 8 %. */
export interface DataTableProps {
  columns?: Array<{ key: string; label: string; align?: 'left' | 'right' | 'center'; strong?: boolean }>;
  /** Cada linha usa as chaves das colunas; "<chave>_tone: 'positivo'" pinta o valor em Verde Anil. */
  rows?: Array<Record<string, any>>;
  tone?: 'light' | 'dark';
  className?: string;
}
export declare function DataTable(props: DataTableProps): JSX.Element;

/**
 * Indicador-chave: número em 800/48 px com unidade sobrescrita.
 * @startingPoint section="Data" subtitle="KPIs, tabela, barras e sparkline" viewport="700x300"
 */
export interface KpiTileProps {
  label?: string;
  value?: React.ReactNode;
  /** Unidade sobrescrita, ex.: "sc/ha", "ha", "ndvi". */
  unit?: string;
  delta?: React.ReactNode;
  deltaTone?: 'neutro' | 'positivo' | 'neon';
  tone?: 'light' | 'dark';
  className?: string;
}
export declare function KpiTile(props: KpiTileProps): JSX.Element;

/** Anel de progresso — avanço de fase, cobertura de amostragem. */
export interface ProgressRingProps {
  value?: number;
  size?: number;
  stroke?: number;
  color?: string;
  track?: string;
  label?: React.ReactNode;
  className?: string;
}
export declare function ProgressRing(props: ProgressRingProps): JSX.Element;

/** Série temporal fina — NDVI, chuva acumulada, temperatura. */
export interface SparklineProps {
  points?: number[];
  color?: string;
  height?: number;
  fillOpacity?: number;
  /** Ponto luminoso na última leitura. */
  showHead?: boolean;
  animate?: boolean;
  className?: string;
}
export declare function Sparkline(props: SparklineProps): JSX.Element;

/** Faixa de números separados por fio vertical. */
export interface StatRowProps {
  items?: Array<{ value: React.ReactNode; unit?: string; label: string }>;
  tone?: 'light' | 'dark';
  className?: string;
}
export declare function StatRow(props: StatRowProps): JSX.Element;

// ── feedback ────────────────────────────────
/**
 * Aviso em bloco. A marca não usa vermelho nem amarelo — a severidade
 * vem do peso, da opacidade e da tinta verde.
 * @startingPoint section="Feedback" subtitle="Avisos, estados e vazios" viewport="700x280"
 */
export interface AlertProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  tone?: 'info' | 'ok' | 'atencao' | 'live';
  surface?: 'light' | 'dark';
  className?: string;
}
export declare function Alert(props: AlertProps): JSX.Element;

/** Estado vazio com malha de amostragem ao fundo. */
export interface EmptyStateProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  action?: React.ReactNode;
  surface?: 'light' | 'dark';
  className?: string;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;

/** Cartão faça / não faça do manual de marca. */
export interface RuleCardProps {
  ok?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
export declare function RuleCard(props: RuleCardProps): JSX.Element;

/** Placeholder de carregamento com varredura de 1,4 s. */
export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  radius?: string;
  surface?: 'light' | 'dark';
  /** Mais de uma linha: a última sai a 62 % da largura. */
  lines?: number;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Skeleton(props: SkeletonProps): JSX.Element;

/** Pílula de estado com ponto de sinal. */
export interface StatusPillProps {
  children?: React.ReactNode;
  status?: 'ativo' | 'live' | 'inativo';
  surface?: 'light' | 'dark';
  className?: string;
}
export declare function StatusPill(props: StatusPillProps): JSX.Element;

/** Dica curta em Verde Sombra sólido. Uma linha, sem pontuação final. */
export interface TooltipProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;

// ── forms ───────────────────────────────────
/** Caixa de seleção múltipla. Marcada = Verde Sombra com tique ciano. */
export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  tone?: 'light' | 'dark';
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;

/**
 * Campo de texto. Branco sobre bege; vidro com borda ciano sobre Verde Sombra.
 * @startingPoint section="Forms" subtitle="Campos, seleção e controles" viewport="700x300"
 */
export interface InputProps {
  label?: string;
  hint?: string;
  value?: string;
  placeholder?: string;
  tone?: 'light' | 'dark';
  icon?: React.ReactNode;
  trailing?: React.ReactNode;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
export declare function Input(props: InputProps): JSX.Element;

/** Escolha exclusiva dentro de um grupo. */
export interface RadioProps {
  label?: React.ReactNode;
  checked?: boolean;
  name?: string;
  tone?: 'light' | 'dark';
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
export declare function Radio(props: RadioProps): JSX.Element;

/** Busca em pílula, com lupa de 14 px e slot para contador à direita. */
export interface SearchFieldProps {
  value?: string;
  placeholder?: string;
  tone?: 'light' | 'dark';
  /** Ex.: <Chip tone="neon">12 talhões</Chip> */
  trailing?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
export declare function SearchField(props: SearchFieldProps): JSX.Element;

/** Seleção única — cultura, safra, talhão. */
export interface SelectProps {
  label?: string;
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  tone?: 'light' | 'dark';
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}
export declare function Select(props: SelectProps): JSX.Element;

/** Interruptor de estado — camada de mapa, alerta, sensor. */
export interface SwitchProps {
  label?: React.ReactNode;
  checked?: boolean;
  tone?: 'light' | 'dark';
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
export declare function Switch(props: SwitchProps): JSX.Element;

/** Campo de texto longo — observação de campo, recomendação, laudo. */
export interface TextareaProps {
  label?: string; hint?: string; value?: string; placeholder?: string;
  rows?: number; tone?: 'light' | 'dark';
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}
export declare function Textarea(props: TextareaProps): JSX.Element;

// ── navigation ──────────────────────────────
/** Trilha de navegação em label, separada por ponto médio em Georgia. */
export interface BreadcrumbProps {
  items?: Array<string | { label: string; href?: string }>;
  tone?: 'light' | 'dark';
  className?: string;
}
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;

/** Sumário lateral em pontos, com mix-blend-mode difference. */
export interface DotNavProps {
  items?: Array<string | { id: string; label: string }>;
  value?: string;
  onChange?: (id: string) => void;
  className?: string;
}
export declare function DotNav(props: DotNavProps): JSX.Element;

/** Paginação de relatório: anterior · contador · próxima. */
export interface PaginationProps {
  page?: number;
  total?: number;
  onChange?: (page: number) => void;
  tone?: 'light' | 'dark';
  className?: string;
}
export declare function Pagination(props: PaginationProps): JSX.Element;

/**
 * Abas com fio de 2 px sob a aba ativa.
 * @startingPoint section="Navigation" subtitle="Abas, sumário, trilha e paginação" viewport="700x260"
 */
export interface TabsProps {
  items?: string[];
  value?: string;
  onChange?: (item: string) => void;
  tone?: 'light' | 'dark';
  className?: string;
}
export declare function Tabs(props: TabsProps): JSX.Element;

/** Cabeçalho de produto: marca à esquerda, navegação ao centro, ações à direita. */
export interface TopBarProps {
  items?: string[];
  active?: string;
  onSelect?: (item: string) => void;
  actions?: React.ReactNode;
  tone?: 'light' | 'dark';
  /** Prefixo até a raiz do design system, repassado à Logo. */
  base?: string;
  className?: string;
}
export declare function TopBar(props: TopBarProps): JSX.Element;
