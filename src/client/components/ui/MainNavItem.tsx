import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './styles/MainNavItem.scss';

interface Props {
  label: string;
  route: string;
  isActive?: boolean;
  className?: string;
}

const MainNavItem: React.FunctionComponent<Props> = (props: Props) => {
  const {
    label,
    route,
    isActive,
    className
  } = props;

  const renderActiveBar = !isActive
    ? null
    : (
      <div className={styles.activebar}></div>
    );

  const containerClasses = classnames(styles.container, props.className);

  return (
    <Link to={props.route} className={containerClasses}>
      <div className={styles.label}>{label}</div>
      {renderActiveBar}
    </Link>
  );
};

export default MainNavItem;
