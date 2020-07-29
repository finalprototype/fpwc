import React from 'react';
import classnames from 'classnames';

import styles from './styles/MobileNavButton.scss';

interface Props {
  active: boolean;
  onClick: () => void;
  className?: string;
}

const MobileNavButton: React.FunctionComponent<Props> = (props: Props) => {
  const { active, className, onClick } = props;
  const containerClasses = classnames(
    styles.container,
    { [styles.active]: active },
    className,
  );

  return (
    <button
      className={containerClasses}
      onClick={onClick}
      type="button"
    >
      <div className={styles.top} />
      <div className={styles.middle} />
      <div className={styles.bottom} />
    </button>
  );
};

MobileNavButton.defaultProps = {
  className: undefined,
};

export default MobileNavButton;
