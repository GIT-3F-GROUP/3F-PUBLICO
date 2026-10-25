export interface AvatarGroupPerson { initials: string; src?: string }
export interface AvatarGroupProps {
  people: AvatarGroupPerson[];
  /** Quantos avatares aparecem antes do contador +N. Padrão 3. */
  max?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}
export declare function AvatarGroup(props: AvatarGroupProps): JSX.Element;
