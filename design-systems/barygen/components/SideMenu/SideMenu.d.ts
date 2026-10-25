import type { BarygenIconName } from '../core/Icon';
export interface SideMenuItem { label: string; icon?: BarygenIconName }
export interface SideMenuProps {
  items: SideMenuItem[];
  active?: string;
  onNavigate?: (label: string) => void;
  className?: string;
}
export declare function SideMenu(props: SideMenuProps): JSX.Element;
