import * as React from 'react';
/**
 * Logo oficial BARYGEN em SVG. Os traços são os dos arquivos "Logo BARYGEN … .svg", sem alteração.
 * Nunca redesenhe, redigite ou reconstrua a marca: use sempre este componente ou os arquivos.
 */
export interface LogoProps extends React.SVGAttributes<SVGSVGElement> {
  /**
   * Arranjo. Padrão `horizontal` (horizontal principal: símbolo, nome e SEMENTES).
   * `horizontal-nome` e `vertical-nome`: símbolo e nome, para quando SEMENTES ficaria pequeno demais.
   * `nome-atividade` e `nome`: só texto, sempre de uma cor. `simbolo`: só a palheta com a hélice (ícones e avatares).
   */
  type?: 'horizontal' | 'horizontal-nome' | 'vertical' | 'vertical-nome' | 'nome-atividade' | 'nome' | 'simbolo';
  /** Fundo onde a logo será aplicada: light → colorida · dark (escuro, foto, colorido) → monocromática branca · amber → monocromática preta. */
  onBackground?: 'light' | 'dark' | 'amber';
  /** Em fundo claro, troca a colorida pela monocromática preta. */
  mono?: boolean;
  /**
   * Força uma versão. `colorida-escuro` é a logo principal sobre fundo preto: palheta amarela, hélice preta e letras brancas
   * (barra de navegação escura, rodapé escuro e vídeos). Sem símbolo, `colorida` vira `mono-preta`, porque a única peça colorida da marca é o símbolo.
   */
  version?: 'colorida' | 'colorida-escuro' | 'mono-preta' | 'mono-branca';
  /** Altura em px; a largura sai da proporção. Mínimos: horizontal 40, horizontal-nome 24, vertical 72, vertical-nome 40, nome-atividade 24, nome 12, simbolo 16. */
  height?: number;
  /** Texto acessível. Padrão "BARYGEN". Vazio deixa a logo decorativa (aria-hidden). */
  title?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;

type LogoTipo = 'horizontal' | 'horizontal-nome' | 'vertical' | 'vertical-nome' | 'nome-atividade' | 'nome' | 'simbolo';
/** Geometria e gerador de SVG da logo, para páginas sem React. */
export declare const BARYGEN_LOGO: {
  viewBox: Record<LogoTipo | 'palheta' | 'dna', string>;
  versoes: Array<'colorida' | 'colorida-escuro' | 'mono-preta' | 'mono-branca'>;
  cores: { amarelo: string; preto: string; branco: string };
  medidas: Record<string, unknown>;
  /** Traços por desenho de origem: H (horizontal principal), HN (horizontal símbolo e nome), V (verticais), T (só texto). */
  paths: Record<'H' | 'HN' | 'V' | 'T', { palheta?: string; dna?: string; nome: Record<'B' | 'A' | 'R' | 'Y' | 'G' | 'E' | 'N', string>; sementes?: Record<string, string> }>;
  inner(type?: LogoTipo, version?: string): string;
  /** Elementos da marca, de uma cor só (com `color`), para o design; não são logo. `type: 'palheta'`: a silhueta da palheta. `type: 'dna'`: a hélice de DNA sozinha, ótima tom sobre tom. */
  svg(opts?: { type?: LogoTipo | 'palheta' | 'dna'; version?: string; color?: string; title?: string; height?: number }): string;
  /** Nome do arquivo oficial da combinação, ex.: "Logo BARYGEN horizontal principal.svg". */
  arquivo(type?: LogoTipo, version?: string): string | null;
};
