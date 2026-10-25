export interface TabsProps {
  tabs: string[];
  value?: string;
  onChange?: (tab: string) => void;
  className?: string;
}
export declare function Tabs(props: TabsProps): JSX.Element;
