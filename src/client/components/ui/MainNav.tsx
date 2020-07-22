import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import classnames from 'classnames';

import MainNavItem from './MainNavItem';
import MobileNavButton from './MobileNavButton';
import styles from './styles/MainNav.scss';

interface Props {
  mobileMenuActive?: boolean,
  className?: string;
}

const MainNav: React.FunctionComponent<Props> = (props: Props) => {
  const location = useLocation();
  const [
    mobileMenuActive,
    changeMenuState
  ] = useState(props.mobileMenuActive || false);
  const containerClasses = classnames(
    styles.menu,
    { [styles.menuactive]: mobileMenuActive },
    props.className
  );

  return (
    <>
      <MobileNavButton
        className={styles.menubutton}
        active={mobileMenuActive}
        onClick={() => changeMenuState(!mobileMenuActive)}
      />
      <div className={containerClasses}>
        <MainNavItem
          label="Home"
          route="/home"
          className={styles.item}
          isActive={location.pathname.includes('/home')}
          onClick={() => changeMenuState(false)}
        />
        <MainNavItem
          label="About"
          route="/about"
          className={styles.item}
          isActive={location.pathname.includes('/about')}
          onClick={() => changeMenuState(false)}
        />
        <MainNavItem
          label="Work"
          route="/work"
          className={styles.item}
          isActive={location.pathname.includes('/work')}
          onClick={() => changeMenuState(false)}
        />
        <MainNavItem
          label="SMB"
          route="/smb"
          className={styles.item}
          isActive={location.pathname.includes('/smb')}
          onClick={() => changeMenuState(false)}
        />
      </div>
    </>
  );
};

export default MainNav;
