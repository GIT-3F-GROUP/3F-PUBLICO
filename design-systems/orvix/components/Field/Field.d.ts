/**
 * Campos de formulário da ORVIX: rótulo em Exo caixa-alta, campo um passo mais claro que o card,
 * foco verde, hairline clara. Usado em contato comercial, filtros de catálogo e painel.
 */
export interface FieldProps {
  /** Rótulo em caixa-alta (Exo). */
  label?: string;
  /** Texto auxiliar sob o campo. */
  hint?: string;
  /** Mensagem de erro. Substitui o hint. */
  error?: string;
  required?: boolean;
  htmlFor?: string;
  children?: React.ReactNode;
  className?: string;
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
  /** Fonte monoespaçada para dado técnico (dose, registro, CNPJ). */
  mono?: boolean;
  invalid?: boolean;
  /** Nome Lucide de um ícone à esquerda. */
  iconLeft?: string;
  /** Sufixo de unidade, ex. "mL/ha". */
  unit?: string;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  options?: Array<string | { value: string; label: string }>;
  size?: "sm" | "md" | "lg";
  placeholder?: string;
}

export interface SearchFieldProps extends InputProps {
  placeholder?: string;
}

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: string;
}

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: string;
}

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Marcas de escala exibidas sob o controle. */
  scale?: string[];
}

export interface FieldsetProps {
  legend?: string;
  children?: React.ReactNode;
  className?: string;
}
