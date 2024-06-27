// import noop from '@jswork/noop';
import React, { ReactNode, Component } from 'react';
import { ItemOptions } from '@jswork/react-selection';
import { TemplateArgs } from '@jswork/react-list';

const CLASS_NAME = 'react-accordion-item';
// const uuid = () => Math.random().toString(36).substring(2, 9);
export type ReactAccordionItemProps = {
  /**
   * The extended className for component.
   * @default ''
   */
  className?: string;
  /**
   * The accordion item title.
   */
  title: ReactNode | ((args: TemplateArgs, options: ItemOptions) => ReactNode);
  /**
   * The children element.
   */
  children?: ReactNode;
  /**
   * The unique value of accordion item.
   */
  value?: string;
} & React.PropsWithChildren;

export default class ReactAccordionItem extends Component<ReactAccordionItemProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {};

  render() {
    return this.props.children;
  }
}
