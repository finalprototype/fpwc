import React, { Suspense } from "react";

import AppRouter from './AppRouter';
import MainNav from '../ui/MainNav';
import Logo from '../ui/Logo';
import Loader from '../ui/Loader';

import styles from "./styles/AppView.scss";

const AppView: React.FunctionComponent = () => {
  return (
    <>
      <div className={styles.header}>
        <Logo className={styles.logo} />
        <MainNav className={styles.nav} />
      </div>
      <div className={styles.content}>
        <Suspense fallback={<Loader />}>
          <AppRouter />
        </Suspense>
      </div>
    </>
  );
};

export default AppView;
