import React, { Suspense, useEffect } from 'react';
import { FeatureToggles } from '@paralleldrive/react-feature-toggles';
import { connect, ConnectedProps } from 'react-redux';

import * as actions from '../../store/app/slice';
import { useActiveFlags } from '../../hooks/featureFlags';

import FmvBackground from '../ui/FmvBackground';
import Loader from '../ui/Loader';
import Logo from '../ui/Logo';
import MainNav from '../ui/MainNav';
import { ModalProvider, ModalRoot } from '../ui/Modal';
import AppRouter from './AppRouter';

import styles from './__styles__/AppView.scss';

const mapDispatch = { ...actions };
const connector = connect(null, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

const AppView: React.FunctionComponent<PropsFromRedux> = ({
  init,
}: PropsFromRedux) => {
  const flags = useActiveFlags();

  useEffect(() => {
    if (!window.config) return;
    const { config } = window;
    init({
      env: config.env,
      version: config.version,
      assetsPath: config.assets_path,
      manifest: { ...config.manifest },
      flags: [...config.flags],
    });
    delete window.config;
  }, [init]);

  const suspenseFallback = (
    <Loader className={styles['suspense-loader']} />
  );

  return (
    <FeatureToggles features={flags}>
      <ModalProvider>
        <FmvBackground />
        <div styleName="header">
          <Logo className={styles.logo} />
          <MainNav className={styles.nav} />
        </div>
        <div styleName="content">
          <Suspense fallback={suspenseFallback}>
            <AppRouter />
          </Suspense>
        </div>
        <ModalRoot />
      </ModalProvider>
    </FeatureToggles>
  );
};

export default connector(AppView);
