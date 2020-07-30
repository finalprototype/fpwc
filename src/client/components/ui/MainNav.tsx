import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import classnames from 'classnames';

import NavItem from './NavItem';
import MobileNavButton from './MobileNavButton';
import styles from './styles/MainNav.scss';

interface Props {
  mobileMenuActive?: boolean,
  className?: string;
}

const MainNav: React.FunctionComponent<Props> = (props: Props) => {
  const {
    mobileMenuActive,
    className,
  } = props;

  const location = useLocation();

  const [
    menuActive,
    changeMenuState,
  ] = useState(mobileMenuActive);

  const containerClasses = classnames(
    styles.menu,
    { [styles.menuactive]: menuActive },
    className,
  );

  return (
    <>
      <MobileNavButton
        className={styles.menubutton}
        active={menuActive || false}
        onClick={() => changeMenuState(!menuActive)}
      />
      <div className={containerClasses}>
        <NavItem
          label="Home"
          route="/home"
          className={styles.item}
          isActive={location.pathname.includes('/home')}
          onClick={() => changeMenuState(false)}
        />
        <NavItem
          label="About"
          route="/about"
          className={styles.item}
          isActive={location.pathname.includes('/about')}
          onClick={() => changeMenuState(false)}
        />
        <NavItem
          label="Work"
          route="/work"
          className={styles.item}
          isActive={location.pathname.includes('/work')}
          onClick={() => changeMenuState(false)}
        />
        <NavItem
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

MainNav.defaultProps = {
  mobileMenuActive: false,
  className: undefined,
};

export default MainNav;
