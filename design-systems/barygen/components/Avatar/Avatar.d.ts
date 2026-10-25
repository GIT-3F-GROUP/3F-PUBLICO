import * as React from 'react';
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Duas letras em caixa alta. */
  initials?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  tone?: 'brand' | 'dark' | 'muted';
  src?: string;
  alt?: string;
}
export declare function Avatar(props: AvatarProps): JSX.Element;
