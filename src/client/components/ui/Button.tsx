import React, { MouseEvent } from 'react';
import classNames from 'classnames';

import styles from './styles/Button.scss';

export const sizes = ['small', 'medium', 'large'];
type Size = typeof sizes[number];

export const colors = ['blue', 'purple'];
type Color = typeof colors[number];

export const types = ['normal', 'neon'];
type Type = typeof types[number];

interface Props {
  onClick: (value: { [key: string]: string }) => void;
  size?: Size;
  color?: Color;
  type?: Type;
  disabled?: boolean;
  block?: boolean;
  name?: string;
  value?: string;
  className?: string;
  children: React.ReactNode | string;
}

const Button: React.FunctionComponent<Props> = (props: Props) => {
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
    onClick,
  } = props;

  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    let targetValue = evt.target.value;
    const valueAsInt = parseInt(targetValue, 10);

    if (!targetValue) {
      targetValue = null;
    }
    if (!Number.isNaN(valueAsInt) && valueAsInt.toString() === targetValue) {
      targetValue = valueAsInt;
    }

    onClick({
      [name!]: targetValue,
    });
  };

  const buttonClass = classNames(
    styles.button,
    styles[size!],
    styles[color!],
    styles[type!],
    {
      [styles.block]: block,
      [styles.disabled]: disabled,
    },
    className,
  );

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={handleClick}
      name={name}
      value={value}
      type="button"
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: 'medium',
  disabled: false,
  color: 'blue',
  type: 'normal',
  name: 'button',
  block: false,
  value: undefined,
  className: undefined,
};

export default Button;
