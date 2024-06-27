// import noop from '@jswork/noop';
import React, { ReactNode, Component } from 'react';

const CLASS_NAME = 'react-accordion-item';
// const uuid = () => Math.random().toString(36).substring(2, 9);
export type ReactAccordionItemProps = {
  /**
   * The accordion item title.
   */
  title: ReactNode;
  /**
   * The children element.
   */
  children?: ReactNode;
} & React.PropsWithChildren;

export default class ReactAccordionItem extends Component<ReactAccordionItemProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {};

  render() {
    return this.props.children;
  }
}
