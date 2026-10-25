/**
 * Padrões de seção da home da ORVIX. Cada export é um estilo de bloco pronto,
 * em tema escuro e claro, responsivo de 320px ao desktop. Sem elementos animados: pontilhado parado, X e alvo.
 */
export interface SectionBaseProps {
  /** Caminho relativo até a raiz do design system, ex. "../../". Necessário para logos e renders. */
  base?: string;
}

/** Hero full-bleed com o pontilhado adensado da marca entrando na inclinação do X e dois CTAs. */
export declare function HeroPrecisao(props: SectionBaseProps): JSX.Element;
/** Manifesto centrado sobre textura pontilhada, fechado por callout da tese. */
export declare function ManifestoCentrado(): JSX.Element;
/** Trilha de 5 etapas do ciclo da aplicação. */
export declare function TrilhaDoCiclo(): JSX.Element;
/** Os três eixos da marca: ações de calda, de gota e no alvo. */
export declare function TresEixos(): JSX.Element;
/** Destaque do produto-âncora com ficha rápida e pontilhado parado. */
export declare function DestaqueORV7(props: SectionBaseProps): JSX.Element;
/** Grade das linhas de produto, cada card com a cor secundária da linha. */
export declare function GradeDeLinhas(): JSX.Element;
/** Faixa de números do portfólio entre duas hairlines. */
export declare function FaixaDeNumeros(): JSX.Element;
/** Marquee de vocabulário agronômico, conector entre seções. */
export declare function MarqueeTecnico(): JSX.Element;
/** Bloco territorial: claim de origem, selo territorial e o elemento X. */
export declare function TerritorioMT(props: SectionBaseProps): JSX.Element;
/** Clube ORVIX: regra-âncora de pontos e a mecânica em 4 passos. */
export declare function ClubeOrvix(): JSX.Element;
/** Grade editorial do blog técnico, capas em pontilhado parado na diagonal do X. */
export declare function EditorialBlog(): JSX.Element;
/** Fechamento com alvo tecnológico, CTA duplo e a hashtag da comunidade. */
export declare function FechamentoCTA(): JSX.Element;
/** Venda direta da indústria: lista de vantagens e o X sobre o pontilhado. */
export declare function VendaDireta(props: SectionBaseProps): JSX.Element;
