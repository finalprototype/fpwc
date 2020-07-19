import React from "react";

import Logo from '../ui/Logo';

import styles from "./styles/AppView.scss";

const AppView: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      Hello Lucy
      <br/>
      ❤️
    </div>
  );
};

export default AppView;
