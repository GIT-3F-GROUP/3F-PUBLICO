import * as React from 'react';
export interface AccordionItem { q: string; a: React.ReactNode; open?: boolean }
export interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
