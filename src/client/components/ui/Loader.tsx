import React from 'react';
import classNames from 'classnames';

import styles from './styles/Loader.scss';

interface Props {
  color?: string;
  inline?: boolean;
  size?: number;
  className?: string;
}

const Loader: React.FunctionComponent<Props> = (props: Props) => {
  const {
    className,
    inline,
    size,
    color,
  } = props;

  const containerClasses = classNames(
    styles.container,
    { [styles.inline]: inline },
    className,
  );

  return (
    <div
      className={containerClasses}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div
        style={{
          borderColor: `${color}`,
          borderWidth: size * 0.05,
        }}
      />
      <div
        style={{
          borderColor: `${color}`,
          borderWidth: size * 0.05,
        }}
      />
    </div>
  );
};

Loader.defaultProps = {
  color: '#ffffff',
  inline: false,
  size: 64,
  className: undefined,
};

export default Loader;
