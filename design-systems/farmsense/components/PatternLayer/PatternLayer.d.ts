import * as React from 'react';

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
