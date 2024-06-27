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
  /**
   * The default value of selected item.
   */
  defaultValue?: any;
} & Omit<ReactSelectionProps<any>, 'items'>;

export default class ReactAccordion extends Component<ReactAccordionProps, any> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {};
  static Item = ReactAccordionItem;

  get items() {
    const { children } = this.props;
    return React.Children.map(children, (child: React.ReactNode) => {
      if (React.isValidElement(child)) return child.props;
    }) as any;
  }

  constructor(props: ReactAccordionProps) {
    super(props);
    this.state = { value: props.value || props.defaultValue, collapsed: false };
  }

  shouldComponentUpdate(nextProps: Readonly<ReactAccordionProps>): boolean {
    const { value } = nextProps;
    const stateValue = this.state.value;
    const useValue = typeof value !== 'undefined';
    if (useValue && stateValue !== value) {
      this.setState({ value });
    }
    return true;
  }

  handleTemplate = (args, opts) => {
    const { item } = args;
    const stateValue = this.state.value;
    const isFn = typeof item.title === 'function';
    const summery = isFn ? item.title(args, opts) : item.title;
    return (
      <ReactCollapse
        key={item.value}
        collapsed={stateValue !== item.value}
        onChange={(collapsed) => {
          const value = collapsed ? null : item.value;
          this.setState({ value, collapsed });
          opts.cb();
        }}
        summary={summery}
        className={cx('react-accordion-item', item.className)}>
        {item.children}
      </ReactCollapse>
    );
  };

  render() {
    const { className, children, value, onChange, ...rest } = this.props;

    return (
      <ReactSelection
        value={this.state.value}
        items={this.items}
        template={this.handleTemplate}
        data-component={CLASS_NAME}
        className={cx(CLASS_NAME, className)}
        {...rest}
      />
    );
  }
}
