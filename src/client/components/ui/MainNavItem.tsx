import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './styles/MainNavItem.scss';

interface Props {
  label: string;
  route: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

const MainNavItem: React.FunctionComponent<Props> = (props: Props) => {
  const {
    label,
    route,
    isActive,
    onClick,
    className,
  } = props;

  const renderActiveBar = !isActive
    ? null
    : (
      <div className={styles.activebar} />
    );

  const containerClasses = classnames(
    styles.container,
    className,
  );

  const labelClasses = classnames(
    styles.label,
    { [styles.active]: isActive },
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

MainNavItem.defaultProps = {
  className: undefined,
  isActive: false,
  onClick: undefined,
};

export default MainNavItem;
