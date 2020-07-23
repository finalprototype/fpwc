import React, { PureComponent } from 'react';
import classNames from 'classnames';

import styles from './styles/Button.scss';

export const sizes = ['small', 'medium', 'large'];
type Size = typeof sizes[number];

export const colors = ['blue', 'purple'];
type Color = typeof colors[number];

export const types = ['normal', 'neon'];
type Type = typeof types[number];

interface Props {
  onClick: (value: { [key: string]: string }) => void,
  size?: Size,
  color?: Color,
  type?: Type,
  disabled?: boolean,
  block?: boolean,
  children?: string,
  name?: string,
  value?: string,
  className?: string
}

class Button extends PureComponent<Props> {
  static displayName: string = 'Button';

  static defaultProps: Partial<Props> = {
    size: 'medium',
    disabled: false,
    color: 'blue',
    type: 'normal',
    name: 'button',
    block: false
  };

  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt: any) {
    evt.preventDefault();
    let value = evt.target.value;
    const valueAsInt = parseInt(value, 10);

    if (!value) value = null;
    if (
      !isNaN(valueAsInt) &&
      valueAsInt.toString() === value
    ) {
      value = valueAsInt;
    }

    this.props.onClick({
      [this.props.name!]: value,
    });
  }

  render() {
    const {
      disabled,
      size,
      color,
      type,
      block,
      children,
      className,
      name,
      value,
    } = this.props;

    const buttonClass = classNames(
      styles.button,
      styles[size!],
      styles[color!],
      styles[type!],
      {
        [styles.block]: block,
        [styles.disabled]: disabled,
      },
      className
    );

    return (
      <button
        className={buttonClass}
        disabled={disabled}
        onClick={this.handleClick}
        name={name}
        value={value}
      >
        {children}
      </button>
    );
  }
}

export default Button;
