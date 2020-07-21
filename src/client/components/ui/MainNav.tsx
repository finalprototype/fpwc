import React from 'react';
import { useLocation } from 'react-router-dom';
import classnames from 'classnames';

import MainNavItem from './MainNavItem';
import styles from './styles/MainNav.scss';

interface Props {
  className?: string;
}

const MainNav: React.FunctionComponent<Props> = (props: Props) => {
  const containerClasses = classnames(styles.container, props.className);
  const location = useLocation();

  return (
    <div className={containerClasses}>
      <MainNavItem
        label="Home"
        route="/home"
        className={styles.item}
        isActive={location.pathname.includes('/home')}
      />
      <MainNavItem
        label="About"
        route="/about"
        className={styles.item}
        isActive={location.pathname.includes('/about')}
      />
      <MainNavItem
        label="Work"
        route="/work"
        className={styles.item}
        isActive={location.pathname.includes('/work')}
      />
      <MainNavItem
        label="SMB"
        route="/smb"
        className={styles.item}
        isActive={location.pathname.includes('/smb')}
      />
    </div>
  );
};

export default MainNav;
