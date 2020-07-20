import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";

import AppRouter from './AppRouter';
import MainNav from '../ui/MainNav';
import Logo from '../ui/Logo';
import Loader from '../ui/Loader';

import styles from "./styles/AppView.scss";

const AppView: React.FunctionComponent = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <MainNav className={styles.nav} />
      <div className={styles.content}>
        <Suspense fallback={<Loader />}>
          <AppRouter location={location} />
        </Suspense>
      </div>
    </div>
  );
};

export default AppView;
