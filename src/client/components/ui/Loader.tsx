import React from 'react';
import classNames from 'classnames';

import styles from './styles/Loader.scss'

interface Props {
  color?: string;
  inline?: boolean;
  size?: number;
  className?: string;
}

const Loader: React.FunctionComponent<Props> = (props: Props) => {
  const {
    className,
    size = 64,
    color = '#fff'
  } = props;

  const circles = [...Array(2)].map((v, index) => (
    <div
      key={index}
      style={{
        borderColor: `${color}`,
        borderWidth: size * 0.05,
      }}
    />
  ));

  const containerClasses = classNames(
    styles.container,
    { [styles.inline]: inline },
    className
  );

  return (
    <div
      className={containerClasses}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {circles}
    </div>
  )
}

export default Loader;
