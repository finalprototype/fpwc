import React from 'react';
import classnames from 'classnames';

import MainNavItem from './MainNavItem';
import styles from './styles/MainNav.scss';

interface Props {
  className?: string;
}

const MainNav: React.FunctionComponent<Props> = (props: Props) => {
  const containerClasses = classnames(styles.container, props.className);

  return (
    <div className={containerClasses}>
      <MainNavItem
        label="Home"
        route="/"
        className={styles.item}
      />
      <MainNavItem
        label="About"
        route="/about"
        className={styles.item}
      />
      <MainNavItem
        label="Work"
        route="/work"
        className={styles.item}
      />
      <MainNavItem
        label="SMB"
        route="/smb"
        className={styles.item}
      />
      <MainNavItem
        label="Contact"
        route="/contact"
        className={styles.item}
      />
    </div>
  );
};

export default MainNav;
