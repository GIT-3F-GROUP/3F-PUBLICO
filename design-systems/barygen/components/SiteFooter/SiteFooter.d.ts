import * as React from 'react';
export interface FooterColumn { title: string; links: string[] }
/**
 * Rodapé institucional com a logo principal. Logo abaixo da logo, a razão social e o CNPJ;
 * à direita, até três colunas de links; depois a linha do ©; no fim, uma barra com "Designed by XERXIZ.COM" à esquerda
 * e "Uma empresa 3F.GROUP" à direita, ambos com link.
 */
export interface SiteFooterProps {
  /** 'dark' (padrão): preto absoluto, logo principal com letras brancas. 'light': fundo suave, logo principal colorida. */
  tone?: 'dark' | 'light';
  /** Nome completo da empresa. Padrão: "BARYGEN Seeds Corporation do Brasil Ltda.". */
  razaoSocial?: string;
  /** CNPJ, no formato 00.000.000/0000-00. Sem ele, a linha não aparece. */
  cnpj?: string;
  /** Uma frase opcional sob o CNPJ. */
  about?: React.ReactNode;
  /** Até três colunas de links. */
  columns?: FooterColumn[];
  /** Grupo, à direita da barra final: "Uma empresa 3F.GROUP". Vazio esconde. */
  grupo?: string;
  /** Link do grupo. Padrão https://3f.group (abre em nova aba). */
  grupoUrl?: string;
  /** Assinatura de design, à esquerda da barra final: "Designed by XERXIZ.COM". Vazio esconde. */
  assinatura?: string;
  /** Link da assinatura. Padrão https://xerxiz.com (abre em nova aba). */
  assinaturaUrl?: string;
  /** Ano do ©. Padrão: o ano atual. */
  ano?: number;
  className?: string;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
