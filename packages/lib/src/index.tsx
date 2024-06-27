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
    this.state = { value: props.value || props.defaultValue };
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

  handleTemplate = ({ item }, opts) => {
    return (
      <ReactCollapse
        key={item.value}
        collapsed={this.state.value !== item.value}
        onChange={(collapsed: boolean) => {
          if (collapsed) return;
          this.setState({ value: item.value });
          opts.cb();
        }}
        summary={item.title}
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
