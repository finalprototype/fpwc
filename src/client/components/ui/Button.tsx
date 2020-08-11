import React, { MouseEvent } from 'react';
import classNames from 'classnames';

import styles from './__styles__/Button.scss';

export const sizes = ['small', 'medium', 'large'];
type Size = typeof sizes[number];

export const colors = ['blue', 'purple'];
type Color = typeof colors[number];

export const types = ['normal', 'neon'];
type Type = typeof types[number];

interface Props {
  size?: Size;
  color?: Color;
  type?: Type;
  disabled?: boolean;
  block?: boolean;
  name?: string;
  value?: string;
  style?: { [key: string]: string|number|null };
  className?: string;
  onClick: (value: { [key: string]: string|number|null }) => void;
  children: React.ReactNode | string;
}

const Button: React.FunctionComponent<Props> = ({
  onClick,
  children,
  disabled = false,
  size = 'medium',
  color = 'blue',
  type = 'normal',
  block = false,
  style = {},
  className = undefined,
  name = 'button',
  value = undefined,
}: Props) => {
  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    const target = evt.target as HTMLButtonElement;
    if (!target.value) {
      onClick({ [name!]: null });
      return;
    }

    let responseValue: string|number = target.value;
    const valueAsInt = parseInt(target.value, 10);
    if (!Number.isNaN(valueAsInt) && valueAsInt.toString() === target.value) {
      responseValue = valueAsInt;
    }

    onClick({
      [name!]: responseValue,
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
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
