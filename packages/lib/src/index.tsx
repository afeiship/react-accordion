// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { ReactNode, Component } from 'react';
import ReactSelection, { ReactSelectionProps } from '@jswork/react-selection';
import ReactCollapse from '@jswork/react-collapse';
import ReactAccordionItem from './item';

const CLASS_NAME = 'react-accordion';
export type ReactAccordionProps = {
  /**
   * The extended className for component.
   * @default ''
   */
  className?: string;
  /**
   * The children element.
   */
  children?: ReactNode;
} & Omit<ReactSelectionProps<any>, 'items'>;

export default class ReactAccordion extends Component<ReactAccordionProps, any> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {};
  static Item = ReactAccordionItem;

  get items() {
    const { children } = this.props;
    return React.Children.map(children, (child: React.ReactElement, index) => {
      const { title, children } = child.props;
      const value = child.key || index;
      return { value, key: value, title, children };
    }) as any;
  }

  constructor(props: ReactAccordionProps) {
    super(props);
    this.state = { value: props.value };
  }

  handleTemplate = ({ item }, opts) => {
    return (
      <ReactCollapse
        key={item.value}
        collapsed={this.state.value !== item.value}
        onChange={(v) => {
          console.log('item: ', item, v);
          // if (!v) this.setState({ value: item.value });
          opts.cb();
        }}
        summary={item.title}
        className="react-accordion-item">
        {item.children}
      </ReactCollapse>
    );
  };

  render() {
    const { className, children, ...rest } = this.props;

    return (
      <ReactSelection
        value={this.state.value}
        onChange={(e) => this.setState({ value: e })}
        items={this.items}
        template={this.handleTemplate}
        data-component={CLASS_NAME}
        className={cx(CLASS_NAME, className)}
        {...rest}
      />
    );
  }
}
