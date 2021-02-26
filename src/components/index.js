import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CLASS_NAME = 'react-border-collapse';

export default class ReactBorderCollapse extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string
  };

  static defaultProps = {};

  get childView() {
    const { children } = this.props;
    return React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        className: classNames(
          'wsui-border-collapse__cell',
          child.props.className
        )
      });
    });
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(
          'wsui-border-collapse__table',
          CLASS_NAME,
          className
        )}
        {...props}>
        <section className={`wsui-border-collapse__row ${CLASS_NAME}__row`}>
          {this.childView}
        </section>
      </div>
    );
  }
}
