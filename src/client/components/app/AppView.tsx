import React, { Suspense } from 'react';
import { FeatureToggles } from '@paralleldrive/react-feature-toggles';

import { useActiveFlags } from '../../hooks/featureFlags';

import Loader from '../ui/Loader';
import Logo from '../ui/Logo';
import MainNav from '../ui/MainNav';
import { ModalProvider, ModalRoot } from '../ui/Modal';
import AppRouter from './AppRouter';

import styles from './styles/AppView.scss';

const AppView: React.FunctionComponent = () => {
  const flags = useActiveFlags();
  const suspenseFallback = (
    <Loader className={styles['suspense-loader']} />
  );

  return (
    <FeatureToggles features={flags}>
      <ModalProvider>
        <div className={styles.header}>
          <Logo className={styles.logo} />
          <MainNav className={styles.nav} />
        </div>
        <div className={styles.content}>
          <Suspense fallback={suspenseFallback}>
            <AppRouter />
          </Suspense>
        </div>
        <ModalRoot />
      </ModalProvider>
    </FeatureToggles>
  );
};

export default AppView;
