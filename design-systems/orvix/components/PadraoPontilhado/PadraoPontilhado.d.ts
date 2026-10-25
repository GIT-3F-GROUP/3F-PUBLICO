/**
 * Padrão pontilhado ORVIX: malha em colmeia, 11 px entre centros, parada.
 * Tom sobre tom (sem imagem) ou sobre imagem (FP-01 a FP-07).
 * O ponto nunca é mais escuro que a base de trás.
 */
export interface PadraoPontilhadoProps {
  /** tom = sem imagem, pontos um passo mais claros que a base. luz = FP-01/02. perfurada = FP-05. produto = FP-06/07. */
  modo?: "tom" | "luz" | "perfurada" | "produto";
  /** onda = raio variando em onda. faixas = três faixas na inclinação do X. Sem imagem: 0,6 a 1,5 px; sobre imagem: 1,2 a 3,4 px. */
  desenho?: "onda" | "faixas";
  /** Imagem de fundo (modos luz, perfurada e produto). */
  imagem?: string;
  alt?: string;
  /** Cor do ponto no modo produto. Padrão: --verde-500. */
  cor?: string;
  /** Opacidade do ponto. Padrão: 1 no tom, 0,30 no produto em onda, 0,34 nas faixas. */
  opacidade?: number;
  /** Distância entre centros, em px. Padrão 5 sem imagem (adensado) e 11 sobre imagem. */
  passo?: number;
  /** Use com .ovx-fundo--preto, .ovx-fundo--grafite ou .ovx-fundo--degrade. */
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
