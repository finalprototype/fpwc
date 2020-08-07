import React from 'react';

import Loader from '../ui/Loader';

import styles from './styles/AppBackgroundManager.scss';

const AppBackgroundManager: React.FunctionComponent = () => (
  <Loader className={styles.container} />
);

export default AppBackgroundManager;
