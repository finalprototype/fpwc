import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './__styles__/NavItem.scss';

export const types = ['normal', 'left', 'right'];
type Type = typeof types[number];

export interface Props {
  label: string;
  route: string;
  type?: Type;
  block?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

const NavItem: React.FunctionComponent<Props> = ({
  label,
  route,
  type = 'normal',
  block = false,
  isActive = false,
  onClick = undefined,
  className = undefined,
}: Props) => {
  const containerClasses = classnames(
    styles.container,
    styles[`container-${type}`],
    { [styles.block]: block },
    className,
  );

  const labelClasses = classnames(
    styles.label,
    { [styles.active]: isActive },
  );

  const activeBarClasses = classnames(
    styles.activebar,
    styles[`activebar-${type}`],
  );

  const renderActiveBar = !isActive
    ? null
    : (
      <div className={activeBarClasses} />
    );

  return (
    <Link
      to={route}
      className={containerClasses}
      onClick={onClick}
    >
      <div className={labelClasses}>{label}</div>
      {renderActiveBar}
    </Link>
  );
};

export default NavItem;
