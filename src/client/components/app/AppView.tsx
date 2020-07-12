import React from "react";

import styles from "./styles/AppView.scss";

const AppView: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      Hello Lucy
      <br/>
      ❤️
    </div>
  );
};

export default AppView;
