import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFeatures } from '@paralleldrive/react-feature-toggles';
import classnames from 'classnames';

import NavItem from './NavItem';
import MobileNavButton from './MobileNavButton';
import styles from './styles/MainNav.scss';

interface Props {
  mobileMenuActive?: boolean,
  className?: string;
}

const MainNav: React.FunctionComponent<Props> = ({
  mobileMenuActive = false,
  className = undefined,
}: Props) => {
  const features = useFeatures();
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

  const renderWorkItem = !features.includes('work-section')
    ? null
    : (
      <NavItem
        label="Work"
        route="/work"
        className={styles.item}
        isActive={location.pathname.includes('/work')}
        onClick={() => changeMenuState(false)}
      />
    );

  return (
    <>
      <MobileNavButton
        className={styles.menubutton}
        active={menuActive || false}
        onClick={() => changeMenuState(!menuActive)}
      />
      <button
        className={containerClasses}
        onClick={() => changeMenuState(false)}
        type="button"
      >
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
        {renderWorkItem}
        <NavItem
          label="SMB"
          route="/smb"
          className={styles.item}
          isActive={location.pathname.includes('/smb')}
          onClick={() => changeMenuState(false)}
        />
      </button>
    </>
  );
};

export default MainNav;
