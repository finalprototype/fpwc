import React from 'react';
import classnames from 'classnames';

import styles from './styles/MobileNavButton.scss';

interface Props {
  active: boolean;
  onClick: () => void;
  className?: string;
}

const MobileNavButton: React.FunctionComponent<Props> = (props: Props) => {
  const containerClasses = classnames(
    styles.container,
    { [styles.active]: props.active },
    props.className
  );

  return (
    <button
      className={containerClasses} 
      onClick={props.onClick}
    >
      <div className={styles.top} />
      <div className={styles.middle} />
      <div className={styles.bottom} />
    </button>
  );
};

export default MobileNavButton;
