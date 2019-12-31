import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-border-collapse';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {};

  get childView() {
    const { children } = this.props;
    return React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        className: classNames(
          'webkit-sassui-border-collapse__cell',
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
          'webkit-sassui-border-collapse__table',
          CLASS_NAME,
          className
        )}
        {...props}>
        <section
          className={`webkit-sassui-border-collapse__row ${CLASS_NAME}__row`}>
          {this.childView}
        </section>
      </div>
    );
  }
}
