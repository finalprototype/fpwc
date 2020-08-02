import React, { Suspense } from 'react';
import { FeatureToggles } from '@paralleldrive/react-feature-toggles';

import { useActiveFlags } from '../../hooks/featureFlags';

import AppRouter from './AppRouter';
import MainNav from '../ui/MainNav';
import Logo from '../ui/Logo';
import Loader from '../ui/Loader';

import styles from './styles/AppView.scss';

const AppView: React.FunctionComponent = () => {
  const flags = useActiveFlags();

  return (
    <FeatureToggles features={flags}>
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
    </FeatureToggles>
  );
};

export default AppView;
