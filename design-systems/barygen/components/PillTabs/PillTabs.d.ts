export interface PillTabsProps {
  tabs: string[];
  value?: string;
  onChange?: (tab: string) => void;
  className?: string;
}
export declare function PillTabs(props: PillTabsProps): JSX.Element;
