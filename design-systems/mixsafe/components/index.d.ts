/** mixsafe: utilitários do design system (window.MixSafe). Devolvem HTML em texto. */
declare namespace MixSafe {
  /** Cores de identidade da paleta, em hex. */
  const cores: Record<'azul-business-04' | 'azul-business-03' | 'azul-business-02' | 'azul-business-01' | 'verde-80' | 'branco' | 'web-tom', string>;
  /** Nomes de todos os ícones do conjunto. */
  const nomesIcones: string[];
  interface OpcoesLogo {
    /** Cor do desenho. Padrão: currentColor (herda a cor do texto do elemento pai). */
    cor?: string;
    /** false tira o ® (uso abaixo de 120 px de largura). Padrão: true. */
    registro?: boolean;
    /** Altura em px aplicada ao SVG. */
    altura?: number;
  }
  /** Logotipo completo: símbolo, mix (Exo ExtraBold Italic), safe (Exo Medium Italic) e ®, em curvas. */
  function logo(op?: OpcoesLogo): string;
  /** Só o símbolo das três cápsulas com núcleo. */
  function simbolo(op?: { cor?: string; tamanho?: number }): string;
  /** Ícone de 24 px, traço 1,75, pontas arredondadas. */
  function icone(nome: string, op?: { cor?: string; tamanho?: number; traco?: number }): string;
  /** Ladrilho SVG do padrão de cápsulas. */
  function padrao(op?: { passo?: number; escala?: number }): string;
  /** Substitui [data-ms-icone], [data-ms-logo], [data-ms-simbolo] e [data-ms-padrao] dentro da raiz. */
  function hidratar(raiz?: ParentNode): void;
  function Logo(props?: OpcoesLogo): string;
  function Simbolo(props?: { cor?: string; tamanho?: number }): string;
  function Icone(props: { nome: string; cor?: string; tamanho?: number }): string;
}
