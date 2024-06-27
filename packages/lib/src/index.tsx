// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { Component } from 'react';
import ReactSelection, { ReactSelectionProps } from '@jswork/react-selection';
import ReactCollapse from '@jswork/react-collapse';
import ReactAccordionItem from './item';

const CLASS_NAME = 'react-accordion';
export type ReactAccordionProps = {
  /**
   * The default value of selected item.
   */
  defaultValue?: string;
  /**
   * The value of selected item.
   */
  value?: string;
} & Omit<ReactSelectionProps<any>, 'items' | 'template'>;

interface ReactAccordionState {
  value: string;
}

export default class ReactAccordion extends Component<ReactAccordionProps, ReactAccordionState> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {};
  static Item = ReactAccordionItem;

  get items() {
    const { children } = this.props;
    return React.Children.map(children, (child: React.ReactNode) => {
      if (React.isValidElement(child)) return child.props;
    }) as any[];
  }

  constructor(props: ReactAccordionProps) {
    super(props);
    this.state = { value: props.value || props.defaultValue };
  }

  componentDidUpdate() {
    const { value } = this.props;
    const stateValue = this.state.value;

    // 检查value prop是否改变，并且它不是一个undefined
    if (value !== undefined && value !== stateValue) {
      this.setState({ value });
      this.handleChange(value); // 如果需要，在这里也调用handleChange
    }
  }

  handleChange = (value: any) => {
    const { onChange } = this.props;
    onChange?.(value);
  };

  handleTemplate = (args, opts) => {
    const { item } = args;
    const { value: stateValue } = this.state;
    const isFn = typeof item.title === 'function';
    const summary = isFn ? item.title(args, opts) : item.title;
    return (
      <ReactCollapse
        key={item.value}
        collapsed={stateValue !== item.value}
        onChange={(collapsed) => {
          const value = collapsed ? null : item.value;
          this.setState({ value });
          this.handleChange(value);
          opts.cb();
        }}
        summary={summary}
        className={cx('react-accordion-item', item.className)}>
        {item.children}
      </ReactCollapse>
    );
  };

  render() {
    const { className, children, value, onChange, ...rest } = this.props;
    const { value: stateValue } = this.state;

    return (
      <ReactSelection
        data-component={CLASS_NAME}
        value={stateValue}
        reversible
        items={this.items}
        template={this.handleTemplate}
        className={cx(CLASS_NAME, className)}
        onChange={this.handleChange}
        {...rest}
      />
    );
  }
}
